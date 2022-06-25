import { Task } from './clasess/taks';
import { TasksService } from './tasks-service';

const form = document.querySelector('form') as HTMLFormElement;
const taskNameInput = document.querySelector('#task-name') as HTMLInputElement;
const taskDescriptionInput = document.querySelector('#task-description') as HTMLInputElement;
const tasksContainer = document.querySelector('.tasks-list') as HTMLUListElement;

const listTemplate = new TasksService(tasksContainer);

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  let task: Task = new Task(taskNameInput.value, taskDescriptionInput.value);
  listTemplate.addTask(task);
});
