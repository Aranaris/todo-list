/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDaEI7O0FBRTNDLGdCQUFnQix3REFBYzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ04sK0JBQStCLGlEQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNyRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMseURBQVE7QUFDUiwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZG9UYXNrLCBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL29iamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZVRlc3REYXRhIH0gZnJvbSBcIi4vb2JqZWN0c1wiO1xuXG5jb25zdCBuZXdMaXN0ID0gY3JlYXRlVGVzdERhdGEoKTtcblxuY29uc3QgdXBkYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdE5hbWUsIGN1cnJlbnRQcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcblxuICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3VycmVudFByb2plY3RzLmdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIG5ld1Byb2plY3QuZ2V0VGFza3MoKSkge1xuICAgICAgICAgICAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5LmRhdGFzZXQudGl0bGUgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgICAgICB0YXNrRGlzcGxheS5jbGFzc05hbWUgPSAndGFzay1jb250YWluZXInXG4gICAgICAgICAgICB0YXNrRGlzcGxheS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcblxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KCdVbnRpdGxlZCBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gZGVmYXVsdFByb2plY3QuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xufVxuXG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIHVwZGF0ZVByb2plY3REaXNwbGF5KCdUZXN0IFByb2plY3QgMicsIG5ld0xpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDsiLCJjb25zdCB0b2RvVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnO1xuICAgIGxldCBkdWVEYXRlID0gJyc7XG4gICAgbGV0IHByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgIGxldCBub3RlcyA9ICcnO1xuICAgIGxldCBjaGVja2xpc3QgPSBmYWxzZTtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZX07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgX3Rhc2tzID0gW107XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcblxuICAgIGNvbnN0IHNldE5hbWUgPSAobmFtZSkgPT4gX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZTtcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IF90YXNrcztcbiAgICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgX3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzZXROYW1lLCBnZXROYW1lLCBnZXRUYXNrcywgYWRkVGFza307XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgX3Byb2plY3RzID0gW107XG4gICAgXG4gICAgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHM7XG4gICAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBpZiAoX3Byb2plY3RzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIG9mIF9wcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGlmIChpLmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdFUlJPUic7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdCkgPT4gX3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRBbGxQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgICAgICAgYWRkTmV3UHJvamVjdFxuICAgIH07XG59O1xuXG5jb25zdCBjcmVhdGVUZXN0RGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXN0UHJvamVjdExpc3QxID0gcHJvamVjdExpc3QoKTtcbiAgICBcbiAgICBjb25zdCB0ZXN0UHJvamVjdDEgPSBwcm9qZWN0KCdUZXN0IFByb2plY3QgMScpO1xuICAgIGNvbnN0IHRlc3RQcm9qZWN0MiA9IHByb2plY3QoJ1Rlc3QgUHJvamVjdCAyJyk7XG5cbiAgICBjb25zdCB0ZXN0VGFzazEgPSB0b2RvVGFzaygnVGFzayBPbmUnKTtcbiAgICBjb25zdCB0ZXN0VGFzazIgPSB0b2RvVGFzaygnVGFzayBUd28nKTtcbiAgICBjb25zdCB0ZXN0VGFzazMgPSB0b2RvVGFzaygnVGFzayBUaHJlZScpO1xuXG4gICAgdGVzdFByb2plY3QxLmFkZFRhc2sodGVzdFRhc2sxKTtcbiAgICB0ZXN0UHJvamVjdDIuYWRkVGFzayh0ZXN0VGFzazIpO1xuICAgIHRlc3RQcm9qZWN0Mi5hZGRUYXNrKHRlc3RUYXNrMyk7XG5cbiAgICB0ZXN0UHJvamVjdExpc3QxLmFkZE5ld1Byb2plY3QodGVzdFByb2plY3QxKTtcbiAgICB0ZXN0UHJvamVjdExpc3QxLmFkZE5ld1Byb2plY3QodGVzdFByb2plY3QyKTtcblxuICAgIHJldHVybiB0ZXN0UHJvamVjdExpc3QxO1xuXG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgdG9kb1Rhc2ssXG4gICAgcHJvamVjdCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICBjcmVhdGVUZXN0RGF0YVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9sYW5kaW5nLXBhZ2VcIjtcblxucGFnZUxvYWQoKTtcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==