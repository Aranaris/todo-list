import { todoTask, project, projectList } from "./objects";

const checkLocalStorage = () => {
    if (localStorage.getItem('userProjectList')) {
        return true;
    } else {
        return false;
    }
}

const buildProjectsFromJSON = (projectListJSON, user) => {
    let newProjectList = projectList(user);
    if (projectListJSON.length > 0) {
        for (let i in projectListJSON) {
            let newProject = project(projectListJSON[i].projectname);
            let newTasks = projectListJSON[i].tasks;
            for (let j in newTasks) {
                newProject.addTask(todoTask(
                    newTasks[j].taskTitle,
                    newTasks[j].taskDueDate,
                    newTasks[j].taskDescription,
                    newTasks[j].taskPriority
                ));
            }
            newProjectList.addNewProject(newProject);
        }
    }
    return newProjectList;
}

const createTestData = () => {
    const testProjectList1 = projectList('Test User');
    
    const testProject1 = project('Test Project 1');
    const testProject2 = project('Test Project 2');

    const testTask1 = todoTask('Task One','','test description',1);
    testTask1.setDueDate('2000-04-21');
    const testTask2 = todoTask('Task Two');
    testTask2.setDueDate('1980-11-03');
    testTask2.setDescription('description test');
    testTask2.setPriority(1);
    testTask2.setCompletion();
    const testTask3 = todoTask('Task Three');

    testProject1.addTask(testTask1);
    testProject2.addTask(testTask2);
    testProject2.addTask(testTask3);

    testProjectList1.addNewProject(testProject1);
    testProjectList1.addNewProject(testProject2);

    updateLocalStorage(testProjectList1);
}

const updateLocalStorage = (currentProjectList) => {
    localStorage.setItem('userProjectList', currentProjectList.toJSON());
    localStorage.setItem('user', currentProjectList.getUser());
}

export {
    checkLocalStorage,
    buildProjectsFromJSON,
    createTestData,
    updateLocalStorage
};