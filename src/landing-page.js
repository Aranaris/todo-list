import { todoTask, project, projectList } from "./objects";
import { checkLocalStorage, buildProjectsFromJSON, createTestData, updateLocalStorage } from "./update-data";
import generateTaskForm from "./forms";

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

    if (!checkLocalStorage()) {
        createTestData();
    }

    let currentUser = localStorage.getItem('user');
    let displayProjectList = buildProjectsFromJSON(JSON.parse(localStorage.getItem('userProjectList')), currentUser);
    
    generateHeader(displayProjectList.getUser());
    updateProjectDisplay(displayProjectList.getDefaultProject(), displayProjectList);
    updateProjectList(displayProjectList);
};

const generateHeader = (user) => {
    const header = document.querySelector('#header');
    header.innerHTML = `<h2>WT To-do List</h2><h3>Welcome, ${user}! Let's get organized!</h3>`;
};

const updateProjectDisplay = (userProject, currentProjects) => {
    const projectDisplay = document.querySelector('#project-container')
    const projectHeader = document.createElement('div');
    projectHeader.id = 'project-header';

    projectDisplay.replaceChildren();
    updateLocalStorage(currentProjects);
    if (userProject) {
        projectHeader.textContent = userProject.getName();
        projectDisplay.appendChild(projectHeader);

        const taskContainer = document.createElement('div');
        taskContainer.id = 'project-task-container';

        for (let task of userProject.getTasks()) {
            const taskDisplay = updateTaskDisplay(task, userProject, currentProjects);
            taskContainer.appendChild(taskDisplay);
        }
        projectDisplay.appendChild(taskContainer);
        projectDisplay.appendChild(generateTaskForm(userProject, currentProjects));
    } else {
        const defaultProject = project('Untitled Project');
        projectHeader.textContent = defaultProject.getName();
        projectDisplay.appendChild(projectHeader);
    }

};

const updateTaskDisplay = (task, currentProject, currentProjects) => {
    let taskDiv = document.createElement('div');
    taskDiv.id = task.getID();
    taskDiv.dataset.title = task.getTitle();
    taskDiv.dataset.dueDate = task.getDueDate();
    taskDiv.className = 'task-info';
    taskDiv.textContent = `${task.getTitle()} || Due: ${task.getDueDate()}`;

    let showTaskDetails = document.createElement('div');
    showTaskDetails.className = 'show-task-details-button';
    showTaskDetails.id = `${task.getID()}-details-button`;
    showTaskDetails.textContent = '...';
    showTaskDetails.addEventListener('click', () => {
        taskDiv.parentNode.insertBefore(taskDetails, taskDiv.nextSibling);
        expandTask(task);
    })


    let removeTaskButton = document.createElement('button');
    removeTaskButton.className = 'remove-task-button';
    removeTaskButton.dataset.id = task.getID();
    removeTaskButton.textContent = 'X';
    removeTaskButton.addEventListener('click', () => {
        currentProject.removeTask(task.getID());
        updateProjectDisplay(currentProject, currentProjects);
    })

    let taskDetails = document.createElement('div');
    taskDetails.className = 'show-task-details';
    taskDetails.id = `${task.getID()}-details`;
    taskDetails.dataset.expanded = 0;

    taskDiv.append(showTaskDetails, removeTaskButton);

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

        let taskCompleted = document.createElement('div');
        taskCompleted.className = 'task-completed-container';

        let taskCompletedCheckbox = document.createElement('input');
        taskCompletedCheckbox.setAttribute('name', 'task-completed');
        taskCompletedCheckbox.setAttribute('id', `${task.getID()}-completed`);
        taskCompletedCheckbox.setAttribute('type', 'checkbox');
        let taskCompletedLabel = document.createElement('label');
        taskCompletedLabel.setAttribute('for', `${task.getID()}-completed`);
        taskCompletedLabel.textContent = 'Completed';

        taskCompleted.append(taskCompletedLabel, taskCompletedCheckbox);
        taskDetailsContainer.append(taskDescription, taskPriority, taskCompleted);

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
            updateProjectDisplay(allProjects[i], currentProjects);
            updateProjectList(currentProjects);
        })

        projectListContainer.appendChild(projectButton);
    }

}

export {
    pageLoad,
    generateHeader,
    updateProjectDisplay,
    updateProjectList
};