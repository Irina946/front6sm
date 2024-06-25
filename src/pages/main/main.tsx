import { MainLeft } from './left-main/main_left';
import { RightMain } from './right-main/right_main';
import styles from './main.module.css';

const Main = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <MainLeft />
      <RightMain />
    </div>
  );
};

export default Main;
