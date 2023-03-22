const todoTask = (title) => {
    let description = '';
    let dueDate = '';
    let priority = undefined;
    let notes = '';
    let checklist = false;
    const getTitle = () => title;

    return {getTitle};
};

const project = (name) => {
    let _tasks = [];

    const getName = () => name;
    const getTasks = () => _tasks;
    const addTask = (newTask) => {
        _tasks.push(newTask);
    }

    return {getName, getTasks, addTask};
};

export {
    todoTask,
    project
};