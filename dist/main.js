/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");


const generateTaskForm = () => {
    const newTaskForm = document.createElement('form');
    newTaskForm.className = 'new-task-container';
    newTaskForm.setAttribute('method', 'post');
    newTaskForm.setAttribute('action', 'submit.js');

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('name', 'Title');
    taskTitle.setAttribute('placeholder', 'New Task');

    const submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'submit');
    submitTask.setAttribute('value', 'Submit');

    newTaskForm.append(taskTitle, submitTask);

    return newTaskForm;
}

const generateProjectForm = () => {
    const newProjectForm = document.createElement('form');
    newProjectForm.className = 'new-project-container';
    
    return newProjectForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTaskForm);

/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




const newList = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.createTestData)();

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
            taskDisplay.className = 'task-container'
            taskDisplay.textContent = task.getTitle();
            projectDisplay.appendChild(taskDisplay);

        }
        projectDisplay.appendChild((0,_forms__WEBPACK_IMPORTED_MODULE_1__["default"])());
    } else {
        const defaultProject = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.project)('Untitled Project');
        projectDisplay.textContent = defaultProject.getName();
    }

    content.appendChild(projectDisplay);
}


const pageLoad = () => {
    updateProjectDisplay('Test Project 2', newList);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTestData": () => (/* binding */ createTestData),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "todoTask": () => (/* binding */ todoTask)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page */ "./src/landing-page.js");


(0,_landing_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
console.log('hello world');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQzdCNEI7QUFDaEI7QUFDSjs7QUFFdkMsZ0JBQWdCLHdEQUFjOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxrREFBZ0I7QUFDbkQsTUFBTTtBQUNOLCtCQUErQixpREFBTztBQUN0QztBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDdkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLHlEQUFRO0FBQ1IsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9kb1Rhc2ssIHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vb2JqZWN0c1wiO1xuXG5jb25zdCBnZW5lcmF0ZVRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTmFtZSA9ICduZXctdGFzay1jb250YWluZXInO1xuICAgIG5ld1Rhc2tGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQuanMnKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUaXRsZScpO1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBUYXNrJyk7XG5cbiAgICBjb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRUYXNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRUYXNrLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG5cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmQodGFza1RpdGxlLCBzdWJtaXRUYXNrKTtcblxuICAgIHJldHVybiBuZXdUYXNrRm9ybTtcbn1cblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc05hbWUgPSAnbmV3LXByb2plY3QtY29udGFpbmVyJztcbiAgICBcbiAgICByZXR1cm4gbmV3UHJvamVjdEZvcm07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVGFza0Zvcm07IiwiaW1wb3J0IHsgdG9kb1Rhc2ssIHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vb2JqZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGVzdERhdGEgfSBmcm9tIFwiLi9vYmplY3RzXCI7XG5pbXBvcnQgZ2VuZXJhdGVUYXNrRm9ybSBmcm9tIFwiLi9mb3Jtc1wiO1xuXG5jb25zdCBuZXdMaXN0ID0gY3JlYXRlVGVzdERhdGEoKTtcblxuY29uc3QgdXBkYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdE5hbWUsIGN1cnJlbnRQcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcblxuICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3VycmVudFByb2plY3RzLmdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIG5ld1Byb2plY3QuZ2V0VGFza3MoKSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5LmRhdGFzZXQudGl0bGUgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgICAgICB0YXNrRGlzcGxheS5jbGFzc05hbWUgPSAndGFzay1jb250YWluZXInXG4gICAgICAgICAgICB0YXNrRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcblxuICAgICAgICB9XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0Zvcm0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KCdVbnRpdGxlZCBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gZGVmYXVsdFByb2plY3QuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xufVxuXG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIHVwZGF0ZVByb2plY3REaXNwbGF5KCdUZXN0IFByb2plY3QgMicsIG5ld0xpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDsiLCJjb25zdCB0b2RvVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSAnJztcbiAgICBsZXQgX2R1ZURhdGUgPSAnJztcbiAgICBsZXQgX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgIGxldCBfbm90ZXMgPSAnJztcbiAgICBsZXQgX2NoZWNrbGlzdCA9IGZhbHNlO1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZX07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgX3Rhc2tzID0gW107XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcblxuICAgIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4gX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IF90YXNrcztcbiAgICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgX3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzZXROYW1lLCBnZXROYW1lLCBnZXRUYXNrcywgYWRkVGFza307XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgX3Byb2plY3RzID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHM7XG4gICAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAoX3Byb2plY3RzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIG9mIF9wcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGlmIChpLmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdFUlJPUic7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdCkgPT4gX3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRBbGxQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgICAgICAgYWRkTmV3UHJvamVjdFxuICAgIH07XG59O1xuXG5jb25zdCBjcmVhdGVUZXN0RGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXN0UHJvamVjdExpc3QxID0gcHJvamVjdExpc3QoKTtcbiAgICBcbiAgICBjb25zdCB0ZXN0UHJvamVjdDEgPSBwcm9qZWN0KCdUZXN0IFByb2plY3QgMScpO1xuICAgIGNvbnN0IHRlc3RQcm9qZWN0MiA9IHByb2plY3QoJ1Rlc3QgUHJvamVjdCAyJyk7XG5cbiAgICBjb25zdCB0ZXN0VGFzazEgPSB0b2RvVGFzaygnVGFzayBPbmUnKTtcbiAgICBjb25zdCB0ZXN0VGFzazIgPSB0b2RvVGFzaygnVGFzayBUd28nKTtcbiAgICBjb25zdCB0ZXN0VGFzazMgPSB0b2RvVGFzaygnVGFzayBUaHJlZScpO1xuXG4gICAgdGVzdFByb2plY3QxLmFkZFRhc2sodGVzdFRhc2sxKTtcbiAgICB0ZXN0UHJvamVjdDIuYWRkVGFzayh0ZXN0VGFzazIpO1xuICAgIHRlc3RQcm9qZWN0Mi5hZGRUYXNrKHRlc3RUYXNrMyk7XG5cbiAgICB0ZXN0UHJvamVjdExpc3QxLmFkZE5ld1Byb2plY3QodGVzdFByb2plY3QxKTtcbiAgICB0ZXN0UHJvamVjdExpc3QxLmFkZE5ld1Byb2plY3QodGVzdFByb2plY3QyKTtcblxuICAgIHJldHVybiB0ZXN0UHJvamVjdExpc3QxO1xuXG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgdG9kb1Rhc2ssXG4gICAgcHJvamVjdCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICBjcmVhdGVUZXN0RGF0YVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9sYW5kaW5nLXBhZ2VcIjtcblxucGFnZUxvYWQoKTtcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==