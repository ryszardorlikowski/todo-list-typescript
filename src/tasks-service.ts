import type { Task } from './clasess/taks';

export class TasksService {
  private container: HTMLUListElement;

  constructor(container: HTMLUListElement) {
    this.container = container;
  }

  addTask(task: Task) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const h4 = document.createElement('h4');
    const checkbox = document.createElement('input');

    li.setAttribute('data-task', task.id.toString());

    h4.innerText = task.name;
    p.innerText = task.description;

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
    });

    li.append(h4);
    li.append(p);
    li.append(checkbox);
    this.container.append(li);
  }
}
