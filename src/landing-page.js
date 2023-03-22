import { project } from "./objects";

const pageLoad = () => {
    const content = document.querySelector('#content');

    const defaultProject = project('Untitled Project');
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project-container');
    projectDisplay.textContent = defaultProject.getName();

    content.appendChild(projectDisplay);
}

export default pageLoad;