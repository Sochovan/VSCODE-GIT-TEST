const baseUrl = 'https://crudcrud.com/api/2779176ad94645f18395610fd9c7845c/tasks';

const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export function updateTask(taskId, taskData) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
}

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
