import { useLocation, Link } from 'react-router-dom';
import styles from './viewing.module.css';
import Button from '../../components/button/button';
import { getTasksXML } from '../../transport';
import { PrintAllTasks, type StateItem } from './printTasks';
import { useEffect, useState } from 'react';

interface LocationState {
  state: StateItem[]
}

const Viewing = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<StateItem[] | null>(null);
  const handleButtonDownloadClick = async(data: Promise<Blob>): Promise<void> => {
    try {
      const blob = await data;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Задания.xml';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download the file:', error);
    }
  };

  const { state } = useLocation() as LocationState;
  useEffect(() => {
    if (state != null) {
      setData(state);
      setLoading(false);
    }
  }, [state]);
  return (<>
    <Link to='/'>
      <div className={styles.header}></div>
    </Link>
    {loading
      ? <div className={styles.loader}></div>
      : <div className={styles.main}>
        <div className={styles.tasks}>
          {data?.map((oneAnswer: StateItem, idx: number) => (
            <div key={idx}>
              <PrintAllTasks exercise={oneAnswer} num={idx + 1} />
            </div>
          ))}
        </div>
        <div className={styles.containerButton}>
          <Button title='Скачать в формате XML'
            size='big'
            click={() => { void handleButtonDownloadClick(getTasksXML(state)); }}
          />
          <Link to="/">
            <Button
              title='Закончить просмотр'
              size='big'
              typeButton='orange'
            />
          </Link>
        </div>
      </div >
    }
  </>
  );
};

export default Viewing;
