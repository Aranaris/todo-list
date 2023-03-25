import { todoTask, project, projectList } from "./objects";

const generateTaskForm = () => {
    const newTaskForm = document.createElement('form');
    newTaskForm.className = 'new-task-container';
    newTaskForm.setAttribute('method', 'post');
    newTaskForm.setAttribute('action', 'submit.js');

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('name', 'Title');
    taskTitle.setAttribute('placeholder', 'New Task');

    const submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'submit');
    submitTask.setAttribute('value', 'Submit');

    newTaskForm.append(taskTitle, submitTask);

    return newTaskForm;
}

const generateProjectForm = () => {
    const newProjectForm = document.createElement('form');
    newProjectForm.className = 'new-project-container';
    
    return newProjectForm;
}

export default generateTaskForm;