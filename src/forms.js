import { todoTask, project, projectList } from "./objects";
import { updateProjectDisplay, updateProjectList } from "./landing-page";

const generateTaskForm = (newProject, currentProjects, existingTask) => {
    const newTaskForm = document.createElement('div');
    newTaskForm.className = 'new-task-container';
    // newTaskForm.setAttribute('method', 'post');
    // newTaskForm.setAttribute('action', 'submit.js');

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.setAttribute('for','title');
    

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('id', 'title');
    taskTitle.setAttribute('name', 'title');

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('name', 'Due');
    taskDueDate.setAttribute('id', 'dueDate');

    const submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'submit');
    submitTask.setAttribute('value', 'Submit');

    if (existingTask) {
        taskTitleLabel.innerText = 'Update Task Title: ';
    } else {
        taskTitleLabel.innerText = 'Create New Task: ';
        taskTitle.setAttribute('placeholder', 'Task Title');
        submitTask.addEventListener('click', (event) => {
            let newTask = todoTask(taskTitle.value);
            if (taskDueDate.value) {
                newTask.setDueDate(taskDueDate.value);
            }
            newProject.addTask(newTask);
            updateProjectDisplay(newProject, currentProjects);
        });
    }


    newTaskForm.append(taskTitleLabel, taskTitle, taskDueDate, submitTask);

    
    return newTaskForm;
}

const generateProjectForm = () => {
    const newProjectForm = document.createElement('form');
    newProjectForm.className = 'new-project-container';
    
    return newProjectForm;
}



export default generateTaskForm;