import endOfToday from "date-fns/endOfToday";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

const todoTask = (title) => {
    let _description = '';
    let _dueDate = endOfToday();
    let _priority = undefined;
    let _notes = [];
    let _checklist = false;
    let _title = title;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const setDescription = (description) => _description = description;
    const getPriority = () => _priority;
    const setPriority = (priority) => _priority = priority;
    const addNote = (note) => _notes.push(note);
    const getNote = (index) => {
        if (index) {
            return _notes[index];
        } else {
            return _notes;
        }
    }
    const setCompletion = () => _checklist = !_checklist;
    const getCompletion = () => _checklist;
    const getDueDate = () => format(_dueDate, 'MMM dd, yyyy (ccc)');
    const setDueDate = (date) => _dueDate =  parseISO(date);

    return {
        getTitle, 
        getDescription,
        setDescription,
        getPriority,
        setPriority,
        addNote,
        getNote,
        setCompletion,
        getCompletion,
        getDueDate, 
        setDueDate
    };
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
    testTask1.setDueDate('2000-04-21');
    const testTask2 = todoTask('Task Two');
    testTask2.setDueDate('1980-11-03');
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