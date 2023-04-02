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
    let _id = title.replace(/\s+/g, '');

    const getID = () => _id;
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
        getID,
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
    const getTaskByName = (taskName) => {
        if (_tasks.length >= 1) {
            for (let i in _tasks) {
                if (_tasks[i].getTitle() === taskName) {
                    return _tasks[i];
                }
            } 
        } else {
                return 'ERROR';
        }
    }
    const removeTask = (taskID) => {
        if (_tasks.length >= 1) {
            for (let i in _tasks) {
                if (_tasks[i].getID() === taskID) {
                    return _tasks.splice(i, 1);
                }
            } 
        } else {
                return 'ERROR NO TASKS';
        }
    }
    const getTasks = () => _tasks;
    const addTask = (newTask) => {
        _tasks.push(newTask);
    }

    return {setName, getName, getTaskByName, removeTask, getTasks, addTask};
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
    const getDefaultProject = () => {
        if (_projects.length > 0) {
            return _projects[0];
        }
    };

    const addNewProject = (project) => {
        _projects.push(project);
    };

    return {
        getAllProjects,
        getProjectByName,
        getDefaultProject,
        addNewProject
    };
};

export {
    todoTask,
    project,
    projectList
};