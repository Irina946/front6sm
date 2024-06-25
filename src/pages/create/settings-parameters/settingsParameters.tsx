import { useEffect, useRef, useState } from 'react';
import styles from './settingsParameters.module.css';
import Button from '../../../components/button/button';
import { Link } from 'react-router-dom';
import { type SubtopicTheme } from '../selected-module/SelectedModule';
import { getSendTaskRequestModel, sendTask } from '../../../transport';

interface settingsParametersProps {
  selectedTheme: SubtopicTheme
}

export interface subtopicParmeters {
  nameTopic: string
  id: string
  isVisible: boolean
  count: number
}

export function SettingsParameters(props: settingsParametersProps): JSX.Element {
  const themes = props.selectedTheme;
  const [check, setCheck] = useState<SubtopicTheme>(themes);

  const handleChangeCount = (idx: number, count: number, visible: boolean): void => {
    const checkChange = { ...check };
    if (count <= 1) {
      count = 1;
    }
    checkChange.subtopic[idx].count = Number(count);
    checkChange.subtopic[idx].isVisible = visible;
    setCheck(checkChange);
  };

  const handleChangeTheme = (idx: number, theme: string, visible: boolean): void => {
    const checkChange = { ...check };
    checkChange.subtopic[idx].nameTopic = theme;
    checkChange.subtopic[idx].isVisible = visible;
    setCheck(checkChange);
  };

  const [generating, setGenetating] = useState(false);
  const [dataTasks, setDataTasks] = useState<Promise<Response>>();
  const [promiseResult, setPromiseResult] = useState<Response>();
  dataTasks?.then(result => {
    setPromiseResult(result);
  }).catch(error => {
    console.log(error);
  }
  );
  const handleButtonGeneratingClick = (): void => {
    themes.subtopic.map((topic: {
      nameTopic: string
      id: string
      isVisible: boolean
      count: number
    }, idx: number): boolean => (check.subtopic[idx].isVisible = topic.isVisible));
    setDataTasks(sendTask(check));
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLInputElement>): void => {
    if (document.activeElement === inputRef.current) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (dataTasks !== undefined) {
      dataTasks.then((result) => {
        setPromiseResult(result);
        setGenetating(true); // вызываем setGenerating только после получения ответа от сервера
      }).catch((error) => {
        console.log(error);
      });
    }
  }, [dataTasks]);

  const handleButtonDownloadClick = (data: string): void => {
    const blob = new Blob([data], { type: 'application/json' });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Запрос.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={styles.settingsParameters}
    >
      {themes.subtopic.map(
        (parametersContainer: subtopicParmeters, idx: number) => (
          !parametersContainer.isVisible
            ? <div
              key={idx}
            >
            </div>
            : <div
              key={idx}
              className={styles.oneTheme}
              id={`${idx + 100}`}
            >
              {parametersContainer.nameTopic}
              <div className={styles.parameters}>
                Введите название темы задачи
              </div>
              <input
                className={styles.nameThemeInput}
                type="string"
                placeholder={parametersContainer.nameTopic}
                onChange={(e) => { handleChangeTheme(idx, e.target.value, parametersContainer.isVisible); }}
              />
              <div className={styles.parameters}>
                Введите количество задач
              </div>
              <input
                className={styles.countInput}
                type="number"
                ref={inputRef}
                required
                min={1}
                onChange={(e) => { handleChangeCount(idx, Number(e.target.value), parametersContainer.isVisible); }}
                onWheel={handleWheel}
              />
            </div>
        )
      )}
      <div className={styles.buttonContainer}>
        <div className={generating ? styles.hidden : ''}>
          <Button
            title='Начать генерацию'
            typeButton='orange'
            size='big'
            click={() => { handleButtonGeneratingClick(); }}
          />
        </div>
        <Link
          to='viewing'
          className={generating ? '' : styles.hidden}
          state={promiseResult}
        >
          <Button
            title='Перейти к просмотру'
            typeButton='orange'
            size='big'
          />
        </Link>
        <Button
          size='big'
          title='Скачать файл'
          disabled={!generating}
          click={() => { handleButtonDownloadClick(getSendTaskRequestModel(check)); }}
        />
      </div>
    </div >
  );
}
