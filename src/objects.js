const todoTask = (title) => {
    let _description = '';
    let _dueDate = '';
    let _priority = undefined;
    let _notes = '';
    let _checklist = false;
    let _title = title;

    const getTitle = () => _title;

    return {getTitle};
};

const project = (name) => {
    let _tasks = [];
    let _name = name;

    const setName = (name) => _name = name;
    const getName = () => _name;
    const getTasks = () => _tasks;
    const addTask = (newTask) => {
        _tasks.push(newTask);
    }

    return {setName, getName, getTasks, addTask};
};

const projectList = () => {
    let _projects = [];
    
    const getAllProjects = () => _projects;
    const getProjectByName = (projectName) => {
        if (_projects.length >= 1) {
            for (let i of _projects) {
                if (i.getName() === projectName) {
                    return i;
                }
            }
        } else {
            return 'ERROR';
        }
    };
    const addNewProject = (project) => _projects.push(project);

    return {
        getAllProjects,
        getProjectByName,
        addNewProject
    };
};

const createTestData = () => {
    const testProjectList1 = projectList();
    
    const testProject1 = project('Test Project 1');
    const testProject2 = project('Test Project 2');

    const testTask1 = todoTask('Task One');
    const testTask2 = todoTask('Task Two');
    const testTask3 = todoTask('Task Three');

    testProject1.addTask(testTask1);
    testProject2.addTask(testTask2);
    testProject2.addTask(testTask3);

    testProjectList1.addNewProject(testProject1);
    testProjectList1.addNewProject(testProject2);

    return testProjectList1;

    
}

export {
    todoTask,
    project,
    projectList,
    createTestData
};