import { todoTask, project, projectList } from "./objects";
import { createTestData } from "./objects";
import generateTaskForm from "./forms";

const newList = createTestData();

const pageLoad = () => {
    let content = document.querySelector('#content');

    let header = document.createElement('div');
    header.setAttribute('id','header');
    let projectContainer = document.createElement('div');
    projectContainer.setAttribute('id','project-container');
    let projectListContainer = document.createElement('div');
    projectListContainer.setAttribute('id','project-list-container');
    let footer = document.createElement('div');
    footer.setAttribute('id','footer');

    content.append(header, projectContainer, projectListContainer, footer);


    updateProjectDisplay('Test Project 2', newList);
    updateProjectList(newList);
};

const updateProjectDisplay = (projectName, currentProjects) => {
    const projectDisplay = document.querySelector('#project-container')

    if (projectName) {
        projectDisplay.replaceChildren();
        const newProject = currentProjects.getProjectByName(projectName);
        projectDisplay.textContent = newProject.getName();
        for (let task of newProject.getTasks()) {
            const taskDisplay = updateTaskDisplay(task, newProject, currentProjects);
            projectDisplay.appendChild(taskDisplay);

        }
        projectDisplay.appendChild(generateTaskForm(newProject, currentProjects));
    } else {
        const defaultProject = project('Untitled Project');
        projectDisplay.textContent = defaultProject.getName();
    }
};

const updateTaskDisplay = (task, currentProject, currentProjects) => {
    let taskDiv = document.createElement('div');
    taskDiv.id = task.getID();
    taskDiv.dataset.title = task.getTitle();
    taskDiv.dataset.dueDate = task.getDueDate();
    taskDiv.className = 'task-container';
    taskDiv.textContent = `${task.getTitle()} || Due: ${task.getDueDate()}`;

    let showTaskDetails = document.createElement('div');
    showTaskDetails.className = 'show-task-details-button';
    showTaskDetails.id = `${task.getID()}-details-button`;
    showTaskDetails.textContent = '...';
    showTaskDetails.addEventListener('click', () => {
        expandTask(task);
    })


    let removeTaskButton = document.createElement('button');
    removeTaskButton.className = 'remove-task-button';
    removeTaskButton.dataset.id = task.getID();
    removeTaskButton.textContent = 'X';
    removeTaskButton.addEventListener('click', () => {
        currentProject.removeTask(task.getID());
        updateProjectDisplay(currentProject.getName(), currentProjects);
    })

    let taskDetails = document.createElement('div');
    taskDetails.className = 'show-task-details';
    taskDetails.id = `${task.getID()}-details`;
    taskDetails.dataset.expanded = 0;

    taskDiv.append(showTaskDetails, removeTaskButton, taskDetails);

    return taskDiv;
}

const expandTask = (task) => {
    let taskDetailsContainer = document.querySelector(`#${task.getID()}-details`);
    
    if (taskDetailsContainer.dataset.expanded == 0) {
        let taskDescription = document.createElement('div');
        taskDescription.className = 'task-description';
        taskDescription.innerText = task.getDescription();

        let taskPriority = document.createElement('div');
        taskPriority.className = 'task-priority';
        taskPriority.innerText = task.getPriority();

        let taskCompleted = document.createElement('input');
        taskCompleted.setAttribute('name', 'task-completed');
        taskCompleted.setAttribute('id', `${task.getID()}-completed`);
        taskCompleted.setAttribute('type', 'checkbox');
        let taskCompletedLabel = document.createElement('label');
        taskCompletedLabel.setAttribute('for', `${task.getID()}-completed`);
        taskCompletedLabel.textContent = 'Completed';

        taskDetailsContainer.append(taskDescription, taskPriority, taskCompleted, taskCompletedLabel);

        taskDetailsContainer.dataset.expanded = 1;
    } else {
        taskDetailsContainer.replaceChildren();
        taskDetailsContainer.dataset.expanded = 0;
    }
}

const updateProjectList = (currentProjects) => {
    const projectListContainer = document.querySelector('#project-list-container')
    projectListContainer.replaceChildren();
    const allProjects = currentProjects.getAllProjects();

    for (const i in allProjects) {
        let projectButton = document.createElement('button');
        projectButton.setAttribute('id',`$(allProjects[i].getName())-button`);
        projectButton.innerText = allProjects[i].getName();
        projectButton.addEventListener('click', (event) => {
            updateProjectDisplay(allProjects[i].getName(), currentProjects);
            updateProjectList(currentProjects);
        })

        projectListContainer.appendChild(projectButton);
    }

}

export {
    pageLoad,
    updateProjectDisplay,
    updateProjectList
};