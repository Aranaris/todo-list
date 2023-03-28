import { todoTask, project, projectList } from "./objects";
import { createTestData } from "./objects";
import generateTaskForm from "./forms";

const newList = createTestData();

const updateProjectDisplay = (projectName, currentProjects) => {
    const content = document.querySelector('#content');
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project-container');

    if (projectName) {
        content.replaceChildren();
        const newProject = currentProjects.getProjectByName(projectName);
        projectDisplay.textContent = newProject.getName();
        for (let task of newProject.getTasks()) {
            const taskDisplay = document.createElement('div');
            taskDisplay.dataset.title = task.getTitle();
            taskDisplay.dataset.dueDate = task.getDueDate();
            taskDisplay.className = 'task-container'
            taskDisplay.textContent = `${task.getTitle()} || Due: ${task.getDueDate()}`;
            projectDisplay.appendChild(taskDisplay);

        }
        projectDisplay.appendChild(generateTaskForm(newProject, currentProjects));
    } else {
        const defaultProject = project('Untitled Project');
        projectDisplay.textContent = defaultProject.getName();
    }

    content.appendChild(projectDisplay);
};

const updateProjectList = (currentProjects) => {
    const content = document.querySelector('#content');
    const projectListContainer = document.createElement('div');
    projectListContainer.className = 'project-list-container';
    const allProjects = currentProjects.getAllProjects();
    for (const i in allProjects) {
        let projectButton = document.createElement('button');
        projectButton.setAttribute('id',`$(allProjects[i].getName())-button`);
        projectButton.innerText = allProjects[i].getName();
        projectListContainer.appendChild(projectButton);
        projectButton.addEventListener('click', (event) => {
            updateProjectDisplay(allProjects[i].getName(), currentProjects);
            updateProjectList(currentProjects);
        })
    }

    content.appendChild(projectListContainer);
}

const pageLoad = () => {
    updateProjectDisplay('Test Project 2', newList);
    updateProjectList(newList);
};

export {
    pageLoad,
    updateProjectDisplay,
    updateProjectList
};