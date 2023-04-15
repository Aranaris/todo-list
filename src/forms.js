import { todoTask } from "./objects";
import { updateProjectDisplay, updateProjectList, generateInfoPane } from "./landing-page";
import { updateWeather, getWeatherFromStorage } from "./update-data";

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

const editProjectForm = (userProject, currentProjectList) => {
    const newProjectForm = document.createElement('div');
    newProjectForm.className = 'new-project-container';
    
    const projectTitleLabel = document.createElement('label');
    projectTitleLabel.setAttribute('for', `${userProject.getName()}-input`);

    const projectTitleInput = document.createElement('input');
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('id',`${userProject.getName()}-input`);
    projectTitleInput.setAttribute('name',`${userProject.getName()}-input`);
    projectTitleInput.setAttribute('value', userProject.getName());

    let updateProjectButton = document.createElement('button');
    updateProjectButton.className = 'update-project-button';
    updateProjectButton.textContent = 'Update';
    updateProjectButton.addEventListener('click', () => {
        userProject.setName(projectTitleInput.value);
        updateProjectDisplay(userProject, currentProjectList);
        updateProjectList(currentProjectList);
    })
    
    newProjectForm.append(projectTitleLabel, projectTitleInput, updateProjectButton);
    
    return newProjectForm;
}

const editLocationForm = (currentLocation=getWeatherFromStorage()) => {
    
    const newLocationForm = document.createElement('div');
    newLocationForm.className = 'new-location-container';

    const locationLabel = document.createElement('label');
    locationLabel.setAttribute('for', 'location-input');

    const locationInput = document.createElement('input');
    locationInput.setAttribute('type', 'text');
    locationInput.setAttribute('id', 'location-input');
    locationInput.setAttribute('name', 'location-input');
    locationInput.setAttribute('value', currentLocation);

    let updateLocationButton = document.createElement('button');
    updateLocationButton.className = 'update-location-button';
    updateLocationButton.textContent = 'Update';
    updateLocationButton.addEventListener('click', () => {
        updateWeather(locationInput.value);
        generateInfoPane();
    })

    newLocationForm.append(locationLabel, locationInput, updateLocationButton);

    return newLocationForm;
}

export {
    generateTaskForm, 
    editProjectForm,
    editLocationForm
};
