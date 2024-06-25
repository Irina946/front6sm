import Button from '../../../components/button/button';
import styles from './left.module.css';
import { sendImportTasks } from '../../../transport';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MainLeft = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0] !== undefined ? event.target.files?.[0] : null;
    setSelectedFile(file);
  };

  const handleButtonClick = (): void => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    if (selectedFile !== null) {
      try {
        const reader = new FileReader();
        reader.onload = async() => {
          const content = reader.result as string;
          const response = await sendImportTasks(content);
          console.log(response);
          if (response !== null) {
            navigate('create/viewing', { state: response });
          } else {
            alert('Ошибка при загрузке файла.');
          }
        };
        reader.readAsText(selectedFile);
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка при загрузке файла.');
      }
    }
  }, [selectedFile]);

  return (
    <div className={styles.mainLeft}>
      <div className={styles.outside}>
        <h2 className={styles.header}>
          Используй
        </h2>
        <div className={styles.description}>
          Вы&nbsp;можете использовать уже готовые задачи.<br />
          А&nbsp;затем самостоятельно или автоматически создавать тесты
        </div>
        <input
          type="file"
          style={{ display: 'none' }}
          accept=".json"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <Button
          title='Загрузить'
          typeButton='arrowBlue'
          size='big'
          click={handleButtonClick}
        />
      </div>
    </div>
  );
};
