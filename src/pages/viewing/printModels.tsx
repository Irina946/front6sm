import styles from './printModel.module.css';
import { type DataOneMatrix, type DataOneVectors } from './printTasks';
// import { type DataOneVectors, type DataOne } from './viewing';

interface printTaskProps {
  topic: string
  number: number
  condition: string
  task?: JSX.Element
  answer: string | JSX.Element
}

export function PrintTask(props: printTaskProps): JSX.Element {
  const condition = props.condition
  const newCondition = condition
    .replace('\\( \\vec{c} \\)', 'C')
    .replace('\\( \\vec{b} \\)', 'B')
    .replace('\\( \\vec{a} \\)', 'A')
    .replace('\\( \\sqrt{', '√')
    .replace('} \\)', '');
  return (
    <div>
      <p className={styles.questionNumber}>Вопрос {props.number}</p>
      <p className={styles.topic}>Тема: {props.topic}</p>
      <p className={styles.condition}>{newCondition}</p>
      {props.task !== undefined ? <div className={styles.task}>{props.task}</div> : <></>}
      <div className={styles.answer}>Ответ: {props.answer}</div>
    </div>
  );
}

// матрицы
interface generateMatrixProps {
  data: number[][]
  nameMatrix?: string
}

export function GenerateMatrix(props: generateMatrixProps): JSX.Element {
  const data = props.data;

  return (
    <div className={styles.taskContainer}>
      <p className={styles.nameMatrix}>{props.nameMatrix}</p>
      <div className={styles.matrixScob}>
        <table className={styles.matrix}>
          <tbody>
            {data.map((row: number[], i: number) => (
              <tr key={i}>
                {row.map((col: number, j: number) => (
                  <td className={styles.matrixTD} key={j}>
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface printSumMatrixProps {
  data: DataOneMatrix
}

export function PrintSumMatrix(props: printSumMatrixProps): JSX.Element {
  const data = props.data;
  return (
    <div className={styles.containerSumMatrix}>
      <GenerateMatrix nameMatrix="A=" data={data.first} />
      <GenerateMatrix nameMatrix="B=" data={data.second} />
    </div>
  );
}

export interface PrintMultiplyNumMatrixProps {
  matrix: number[][]
  number: number
}

export function PrintMultiplyNumMatrix(props: PrintMultiplyNumMatrixProps): JSX.Element {
  const { matrix, number } = props;
  return (
    <div className={styles.containerMultNumMatrix}>
      <div>
        {number}
      </div>
      <div className={styles.multiply}>
        X
      </div>
      <GenerateMatrix data={matrix} />
    </div>
  );
}

export interface dataMultiplyMatrixProps {
  matrix1: number[][]
  matrix2: number[][]
}

export interface printMultiplyMatrixProps {
  data: dataMultiplyMatrixProps
}

export function PrintMultiplyMatrix(props: printMultiplyMatrixProps): JSX.Element {
  const data = props.data;
  return (
    <div className={styles.containerSumMatrix}>
      <GenerateMatrix nameMatrix="A=" data={data.matrix1} />
      <GenerateMatrix nameMatrix="B=" data={data.matrix2} />
    </div>
  );
}

// матричные уравнения

export interface dataEquationsMatrixAXB {
  A: number[][]
  B: number[][]
}

export interface EquationsMatrixAXBProps {
  data: dataEquationsMatrixAXB
}

export function PrintEquationsMatrixAXB(props: EquationsMatrixAXBProps): JSX.Element {
  const data = props.data;
  return (
    <div className={styles.containerEquationsMatrix}>
      <GenerateMatrix data={data.A} />
      <div>* <span className={styles.AXB}>X</span></div>
      <GenerateMatrix data={data.B} />
    </div>
  );
}

export interface dataEquationsMatrixAXBC {
  A: number[][]
  B: number[][]
  C: number[][]
}

export interface EquationsMatrixAXBCProps {
  data: dataEquationsMatrixAXBC
}

export function PrintEquationsMatrixAXBC(props: EquationsMatrixAXBCProps): JSX.Element {
  const data = props.data;
  return (
    <div className={styles.containerEquationsMatrix3}>
      <GenerateMatrix data={data.A} />
      <div>* <span className={styles.AXBC}>X</span> *</div>
      <GenerateMatrix data={data.B} />
      <div className={styles.equals}>=</div>
      <GenerateMatrix data={data.C} />
    </div>
  );
}

// слу
export interface dataSLU {
  first_equation: string
  second_equation: string
  third_equation: string
}

interface printSLUProps {
  data: dataSLU
}

export function PrintSLU(props: printSLUProps): JSX.Element {
  const data = props.data;
  return (<div className={styles.containerSluScob}>
    &#123;
    <div className={styles.containerSLU}>
      <div>
        {data.first_equation}
      </div>
      <div>
        {data.second_equation}
      </div>
      <div>
        {data.third_equation}
      </div>
    </div>
  </div>
  );
}

// векторы
interface generateVectorsProps {
  data: number[]
  nameVector?: string
}

export function GenerateVector(props: generateVectorsProps): JSX.Element {
  const data = props.data;

  return (
    <div className={styles.taskContainer}>
      <p className={styles.nameVector}>{props.nameVector}</p>
      <div className={styles.matrixScobVect}>
        <div className={styles.vector}>
          {data.map((a: number, i: number) => (
            <div key={i} className={styles.numberVector}>
              {a}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface printSumVectorsProps {
  data: DataOneVectors
}

export function PrintSumVectors(props: printSumVectorsProps): JSX.Element {
  const data = props.data;
  return (
    <div className={styles.containerSumMatrix}>
      <GenerateVector nameVector="A=" data={data.A} />
      <GenerateVector nameVector="B=" data={data.B} />
    </div>
  );
}

export interface DataThirdVectors {
  A: number[]
  B: number[]
  C: number[]
}

interface printEqVectorsProps {
  data: DataThirdVectors
}

export function PrintEqVectors(props: printEqVectorsProps): JSX.Element {
  const data = props.data;
  return (
    <div className={styles.containerSumMatrix}>
      <GenerateVector nameVector="A=" data={data.A} />
      <GenerateVector nameVector="B=" data={data.B} />
      <GenerateVector nameVector='C=' data={data.C} />
    </div>
  );
}
