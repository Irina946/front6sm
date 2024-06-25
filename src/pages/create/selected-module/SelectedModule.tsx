import styles from './selectedModule.module.css';
import linearAlgebra from '../modules/linear-algebra.json';
// import mathematicalAnalysis from '../modules/mathematicalAnalysis.json';
// import differentialCalculusOne from '../modules/differentialCalculusOne.json';
// import differentialCalculusSeveral from '../modules/differentialCalculusSeveral.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../img/logoMini.png';
import { ModuleButton } from '../../../components/moduleButton/moduleButton';
import clsx from 'clsx';
import { SelectedTheme } from '../selected-theme/selectedTheme';

type TPossibleButtonStyles = 'linearAlgebra';
// | 'mathematicalAnalysis'
// | 'differentialCalculusOne'
// | 'differentialCalculusSeveral';

export interface SubtopicTheme {
  title: string
  id: string
  subtopic: Array<{
    nameTopic: string
    id: string
    isVisible: boolean
    count: number
  }>
}

export default function SelectedModule(): JSX.Element {
  const [buttonStyle, setButtonStyle] = useState<TPossibleButtonStyles>('linearAlgebra');
  const [TaskData, setTaskData] = useState(linearAlgebra);

  const handleButtonClick = (buttonStyle: TPossibleButtonStyles): void => {
    if (buttonStyle === 'linearAlgebra') setTaskData(linearAlgebra);
    // else if (buttonStyle === 'mathematicalAnalysis') setTaskData(mathematicalAnalysis);
    // else if (buttonStyle === 'differentialCalculusOne') setTaskData(differentialCalculusOne);
    // else if (buttonStyle === 'differentialCalculusSeveral') setTaskData(differentialCalculusSeveral);
    setButtonStyle(buttonStyle);
  };

  const isButtonLinearAlgebra = buttonStyle === 'linearAlgebra';
  // const isButtonMathematicalAnalysis = buttonStyle === 'mathematicalAnalysis';
  // const isButtonDifferentialCalculusOne = buttonStyle === 'differentialCalculusOne';
  // const isButtonDifferentialCalculusSeveral = buttonStyle === 'differentialCalculusSeveral';
  const [themeStyle, setThemeStyle] = useState<string>('');
  const [dataTheme, setDataTheme] = useState<SubtopicTheme>();
  const handleThemeButtonClick = (theme: string, dataTheme: SubtopicTheme): void => {
    setThemeStyle(theme);
    setDataTheme(dataTheme);
  };

  return (
    <div className={styles.allCreate}>
      <div className={styles.selectedModule}>
        <Link to="/..">
          <img
            src={ImgLogo}
            alt='логотип'
            className={styles.logo}
            width="48"
            height="30"
          />
        </Link>
        <ModuleButton
          id="linearAlgebra"
          isActive={isButtonLinearAlgebra}
          click={() => { handleButtonClick('linearAlgebra'); }}
          title="Линейная алгебра"
        />
        {/* <ModuleButton
          id="mathematicalAnalysis"
          isActive={isButtonMathematicalAnalysis}
          click={() => { handleButtonClick('mathematicalAnalysis'); }}
          title="Введение в математический анализ"
        />
        <ModuleButton
          id="differentialCalculusOne"
          isActive={isButtonDifferentialCalculusOne}
          click={() => { handleButtonClick('differentialCalculusOne'); }}
          title="Дифференциальное исчисление функции одной переменной"
        />
        <ModuleButton
          id="differentialCalculusSeveral"
          isActive={isButtonDifferentialCalculusSeveral}
          click={() => { handleButtonClick('differentialCalculusSeveral'); }}
          title="Дифференциальное исчисление функции нескольких переменных"
        /> */}
      </div>
      <div className={styles.themesContainer}>
        {TaskData.themes.map((theme) => (
          <button
            className={clsx(styles.theme,
              themeStyle === theme.title ? styles.checkedTheme : ''
            )}
            key={theme.id}
            onClick={() => { handleThemeButtonClick(theme.title, theme); }}>
            {theme.title}
          </button>
        ))}
      </div>
      <div className={styles.rightDiv}>
        {dataTheme !== undefined ? <SelectedTheme objectTheme={dataTheme} /> : <></>}
      </div>
    </div>
  );
}
