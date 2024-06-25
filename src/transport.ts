import { type SubtopicTheme } from './pages/create/selected-module/SelectedModule';
import {  StateItem } from './pages/viewing/printTasks';

export function getSendTaskRequestModel(check: SubtopicTheme): string {
  const requestModel = check.subtopic
    .filter(element => element.isVisible)
    .map(element => ({
      uuid: element.id,
      count: +element.count,
      topic: element.nameTopic
    }));
  return JSON.stringify(requestModel);
}

const URL = 'https://math-generator-jqum.onrender.com';

export async function sendTask(data: SubtopicTheme): Promise<Response> {
  const response = await fetch(`${URL}/get_tasks`, {
    method: 'POST',
    body: getSendTaskRequestModel(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export type dictType = Record<string, number>;

export function getSendTasksXML(data: StateItem[]): string {
  const counts: dictType = {};
  data.forEach((element) => {
    if (counts[element.topic] !== undefined && !isNaN(counts[element.task])) {
      counts[element.topic] += 1;
    } else {
      counts[element.topic] = 1;
    }
  });
  const requestModel = data
    .map(element => (
      {
        topic: element.topic,
        moodle_task: element.moodle_task
      }
    ));
  const req = {
    tasks: requestModel,
    topics: counts
  };
  return JSON.stringify(req);
}

export async function getTasksXML(data: StateItem[]): Promise<Blob> {
  const response = await fetch(`${URL}/get_convert`, {
    method: 'POST',
    body: getSendTasksXML(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.blob();
}

export async function sendImportTasks(data: string): Promise<Response> {
  const response = await fetch(`${URL}/get_tasks`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
}
