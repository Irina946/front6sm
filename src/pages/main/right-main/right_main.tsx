import styles from './right.module.css';
import Button from '../../../components/button/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const RightMain = (): JSX.Element => {
  const [isOpenInstructions, setisOpenInstructions] = useState(false);
  const [isOpenDescription, setisOpenDescription] = useState(false);

  const handleOpenModalInstructions = (): void => {
    setisOpenInstructions(true);
  };

  const handleCloseModalInstructions = (): void => {
    setisOpenInstructions(false);
  };

  const handleOutsideClickInstructions = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      handleCloseModalInstructions();
    }
  };

  const handleOpenModalDescription = (): void => {
    setisOpenDescription(true);
  };

  const handleCloseModalDescription = (): void => {
    setisOpenDescription(false);
  };

  const handleOutsideClickDescription = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      handleCloseModalDescription();
    }
  };

  return (
    <div className={styles.rightMain}>
      <button onClick={handleOpenModalInstructions} className={styles.buttonModule}>
        Инструкция по использовнию сайта
      </button>
      {isOpenInstructions && (
        <div className={styles.overlay} onClick={handleOutsideClickInstructions}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={handleCloseModalInstructions}></button>
            <div className={styles.modalTitle}>Инструкция по работе сайта.</div>
            <ol className={styles.olTitle}>Если вы хотите загрузить файл:
              <li>Нажимаете на кнопку &laquo;Загрузить&raquo;    </li>
              <li>Выбираете файл в формате json. Файл должен быть с определённой структурой.</li>
              <li>Откроется страница с отображением заданий</li>
              <li>Нажать кнопку &laquo;Скачать в формате XML&raquo;     для скачивания вайла <i>moodle.xml</i></li>
            </ol>
            <ol className={styles.olTitle}> Если вы хотите ввести параметры:
              <li>Нажимаете на кнопку &laquo;Начать&raquo;    </li>
              <li>Выбираете раздел. После открывается выбор тем.</li>
              <li>Выбираете тему. После открывается выбор заданий.</li>
              <li>Отмечаете необходимые задачи</li>
              <li>Если это необходимо вводите новую тему задания (это повлияет на отображение и XML файл)</li>
              <li>Если это необходимо вводите количество заданий (если не введёте, будет 1)</li>
              <li>Нажимаете на кнопку &laquo;Начать генерацию&raquo;    . При большом количестве заданий необходимо подождать пару секунд. После появится кнопка &laquo;Перейти к просмотру&raquo;     и разблокируется кнопка &laquo;Скачать файл&raquo;    </li>
              <li>При необходимости можно скачать файл запроса в формате json</li>
              <li>Нажимаем кнопку &laquo;Перейти к просмотру&raquo;    </li>
              <li>Откроется страница с отображением заданий</li>
              <li>Нажать кнопку &laquo;Скачать в формате XML&raquo;     для скачивания вайла <i>moodle.xml</i></li>
            </ol>
          </div>
        </div>
      )}
      <button
        onClick={handleOpenModalDescription}
        className={styles.buttonModuleDescription}>
        Информация о сайте
      </button>
      {isOpenDescription && (<div
        className={styles.overlay}
        onClick={handleOutsideClickDescription}>
        <div className={styles.modalDescription}>
          <button className={styles.close} onClick={handleCloseModalDescription}></button>
          <div className={styles.modalTitle}>
            О сайте.
          </div>
          <div className={styles.descriptionModal}>
            <div>
              Автоматизированный инструмент для генерации уникальных контрольных заданий по математике, обеспечивающий разнообразие и
              адаптивность материалов для разных уровней сложности и тематик.
            </div>
            <div>
              Все задания генерируются автоматически в реальном времени, что гарантирует актуальность и уникальность каждого задания.
            </div>
            <div className={styles.modalTitleTwo}>
              Возможности:
            </div>
            <ul className={styles.ulModal}>
              <li>
                <b>Адаптивность:</b> Генерация заданий, подходящих для различных уровней подготовки – обеспечивает вовлеченность всех студентов
                первого курса.
              </li>
              <li>
                <b>Уникальность:</b> Каждое задание создается заново, исключая повторения и обеспечивая оригинальность.
              </li>
              <li>
                <b>Поддержка преподавателей:</b> Предоставление различных вариантов одного и того же задания для упрощения проверки и оценки.
              </li>
            </ul>
          </div>
        </div>
      </div>)}
      <div className={styles.outside}>
        <h2 className={styles.header}>
          Создавай
        </h2>
        <div className={styles.description}>
          Или&nbsp;же введите нужные параметры и&nbsp;наш сервис
          автоматически создаст подходящие вам тесты из&nbsp;уникальных задач
        </div>
        <Link to='/create'>
          <Button
            title="Создать"
            typeButton="arrowWhite"
            size="big" />
        </Link>
      </div>
    </div>
  );
};
