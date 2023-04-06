import { todoTask, project, projectList } from "./objects";

const checkLocalStorage = () => {
    if (localStorage.getItem('userProjects')) {
        return true;
    } else {
        return false;
    }
}

const createTestData = () => {
    const testProjectList1 = projectList();
    
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

    localStorage.setItem('userProjects', JSON.stringify(testProject1.toJSON()));
    console.log(JSON.stringify(testProject1.toJSON()));
}

export {
    checkLocalStorage,
    createTestData
};