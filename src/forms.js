import { todoTask, project, projectList } from "./objects";
import { updateProjectDisplay } from "./landing-page";

const generateTaskForm = (newProject, currentProjects) => {
    const newTaskForm = document.createElement('div');
    newTaskForm.className = 'new-task-container';
    // newTaskForm.setAttribute('method', 'post');
    // newTaskForm.setAttribute('action', 'submit.js');

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.setAttribute('for','title');
    taskTitleLabel.innerText = 'New Task Title: ';

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('id', 'title');
    taskTitle.setAttribute('name', 'title');
    taskTitle.setAttribute('placeholder', 'New Task');

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('name', 'Due');
    taskDueDate.setAttribute('id', 'dueDate');

    const submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'submit');
    submitTask.setAttribute('value', 'Submit');

    submitTask.addEventListener('click', (event) => {
        let newTask = todoTask(taskTitle.value);
        newProject.addTask(newTask);
        updateProjectDisplay(newProject.getName(), currentProjects);
    });

    newTaskForm.append(taskTitle, taskDueDate, submitTask);

    
    return newTaskForm;
}

const generateProjectForm = () => {
    const newProjectForm = document.createElement('form');
    newProjectForm.className = 'new-project-container';
    
    return newProjectForm;
}



export default generateTaskForm;