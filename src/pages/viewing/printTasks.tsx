import {
  GenerateMatrix,
  PrintMultiplyNumMatrix,
  type PrintMultiplyNumMatrixProps,
  PrintSumMatrix,
  PrintTask,
  GenerateVector,
  PrintMultiplyMatrix,
  type dataMultiplyMatrixProps,
  PrintEquationsMatrixAXB,
  type dataEquationsMatrixAXB,
  type dataEquationsMatrixAXBC,
  PrintEquationsMatrixAXBC,
  type dataSLU,
  PrintSLU,
  PrintSumVectors,
  PrintEqVectors,
  type DataThirdVectors
} from './printModels';

export interface DataOneMatrix {
  first: number[][]
  second: number[][]
}

export interface DataOneVectors {
  A: number[]
  B: number[]
}

export interface DataMultiplyTwoMatrix {
  matrix1: number[]
  matrix2: number[]
}

export interface ElementMatrix {
  column_index: number
  matrix: number[][]
  row_index: number
}

export interface ElementMatrix3x3 {
  columnIndex: number
  matrix: number[][]
  rowIndex: number
}

export interface DeterminantMatrix {
  determinant: number
  matrix: number[][]
}

export interface StateItem {
  topic: string
  task: string
  data: DataOneMatrix
  | PrintMultiplyNumMatrixProps
  | number[][]
  | ElementMatrix
  | dataMultiplyMatrixProps
  | DeterminantMatrix
  | ElementMatrix3x3
  | dataEquationsMatrixAXB
  | dataEquationsMatrixAXBC
  | dataSLU
  | DataOneVectors
  | DataThirdVectors
  answer: number[][] | number | number[]
  moodle_task: string
  uuid: string
}

interface PrintAllTasksProps {
  exercise: StateItem
  num: number
}

export const PrintAllTasks = (props: PrintAllTasksProps): JSX.Element => {
  const { exercise, num } = props;
  if (exercise.uuid === 'c4703c4b-e322-4b5c-7c6c-d1652ce84bd8' &&
    'first' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintSumMatrix data={exercise.data} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === '028c1f3c-e728-46a1-3d3f-d037aa1c813d' &&
    'matrix' in exercise.data &&
    'number' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintMultiplyNumMatrix matrix={exercise.data.matrix} number={exercise.data.number} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === '77d65971-cc85-4455-0723-1f21a82b88f1' &&
    Array.isArray(exercise.data) &&
    Array.isArray(exercise.answer) &&
    !exercise.answer.some(item => Array.isArray(item))) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data} />}
      answer={<GenerateVector data={exercise.answer as number[]} />}
    />;
  } else if (exercise.uuid === 'b22fae57-4b10-4d50-740a-06956656bef1' &&
    'column_index' in exercise.data &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data.matrix} />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === '0c2f20c6-9191-41da-14e7-5e858bbb7fd7' &&
    Array.isArray(exercise.data) &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === '4f6241db-b8b2-4cf0-182b-9d468f0a2d83' &&
    'matrix1' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintMultiplyMatrix data={exercise.data} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === 'f26bf9ac-89fb-4698-cd53-26ca6fc4702a' &&
    Array.isArray(exercise.data) &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data} nameMatrix='A= ' />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === '3b5b6b10-c9a5-4358-0079-3e9459f53f9f' &&
    'determinant' in exercise.data &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data.matrix} nameMatrix='A= ' />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === 'f1579922-863b-424f-2044-edd7c3bd437a' &&
    Array.isArray(exercise.data) &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data} nameMatrix='A= ' />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === 'b07318ac-c462-4d51-9f25-052c36eb4d3f' &&
    'columnIndex' in exercise.data &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data.matrix} />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === '7ae48f49-aecf-4006-c95d-af63a3260eb0' &&
    'A' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintEquationsMatrixAXB data={exercise.data as dataEquationsMatrixAXB} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === '6463aa54-da58-4751-8578-72ab9670ec74' &&
    'C' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintEquationsMatrixAXBC data={exercise.data as dataEquationsMatrixAXBC} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === 'd53761d3-4270-4af4-5f21-b7caaa4efb43' &&
    'first_equation' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintSLU data={exercise.data} />}
      answer={<GenerateMatrix data={exercise.answer as number[][]} />}
    />;
  } else if (exercise.uuid === '878f9145-3557-493a-01d3-0aa168edc6a7' &&
    Array.isArray(exercise.data) &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<GenerateMatrix data={exercise.data} />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === '0afd0412-e7ac-4366-6758-d57a0727fb38' &&
    'A' in exercise.data &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintSumVectors data={exercise.data as DataOneVectors} />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === 'aa371420-8767-4dd4-1713-2968822580b0' &&
    'A' in exercise.data &&
    Array.isArray(exercise.answer)) {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintSumVectors data={exercise.data as DataOneVectors} />}
      answer={<GenerateVector data={exercise.answer as number[]} />}
    />;
  } else if (exercise.uuid === '6c94bbe5-2391-46dd-66ee-68ed3286d073' &&
    'A' in exercise.data &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintSumVectors data={exercise.data as DataOneVectors} />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === '22a73886-a42a-475c-ba43-46cd64cadef8' &&
    'C' in exercise.data &&
    typeof exercise.answer === 'number') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task.slice(0, 41)}
      task={<PrintEqVectors data={exercise.data as DataThirdVectors} />}
      answer={String(exercise.answer)}
    />;
  } else if (exercise.uuid === 'e2dc021d-13c3-4352-356b-ccfc0684238e' &&
    'A' in exercise.data &&
    typeof exercise.answer === 'string') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintSumVectors data={exercise.data as DataOneVectors} />}
      answer={exercise.answer}
    />;
  } else if (exercise.uuid === 'bb1361c9-20de-4ca7-fc2c-a2e46cf3e0e1' &&
    'C' in exercise.data &&
    typeof exercise.answer === 'string') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      task={<PrintEqVectors data={exercise.data as DataThirdVectors} />}
      answer={exercise.answer}
    />;
  } else if ((exercise.uuid === '028fbe81-674e-42f7-4429-2e8735af103f' ||
    exercise.uuid === '3633194e-f2f2-4289-5cc7-3596af2e843a' ||
    exercise.uuid === 'bbc2550b-a179-4363-6b29-60fdd6861967' ||
    exercise.uuid === '96217feb-6dcb-40a6-a0f3-4ce85edaba58' ||
    exercise.uuid === '63a8bb97-df60-4a65-2062-6e6b17113823' ||
    exercise.uuid === 'a77e11e8-3878-420e-c5ca-a94f135125b1' ||
    exercise.uuid === '70884c1d-a4f2-4494-a57c-81c5f5316820' ||
    exercise.uuid === '8150ac16-a038-472c-cbdd-be140eca3a41' ||
    exercise.uuid === '928326d2-ab2e-45de-2687-a2d0b6a05134' ||
    exercise.uuid === '53cbcc0e-fb86-4d14-08f2-7b2eeb658bac' ||
    exercise.uuid === '72f81825-df95-4c7d-8b43-0b0a8995f037') &&
    typeof exercise.answer === 'string') {
    return <PrintTask
      topic={exercise.topic}
      number={num}
      condition={exercise.task}
      answer={exercise.answer}
    />;
  } else {
    return <>Невозможно отобразить</>;
  }
};
