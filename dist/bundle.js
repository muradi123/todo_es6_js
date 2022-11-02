/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.css */ \"./todo.css\");\n\n\nvar $input = document.querySelector(\"input\");\nvar $button = document.querySelector(\"button\");\nvar buttonClickHandler = function buttonClickHandler() {\n  var checkValue = $input.value.length;\n  if (checkValue > 0) {\n    var todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo($input.value);\n  } else {\n    alert(\"Empty field\");\n  }\n  $input.value = \"\";\n};\n$button.addEventListener(\"click\", buttonClickHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDO0FBQ1o7QUFFckIsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDOUMsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFFaEQsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQixHQUFTO0VBQy9CLElBQUlDLFVBQVUsR0FBR0wsTUFBTSxDQUFDTSxLQUFLLENBQUNDLE1BQU07RUFDcEMsSUFBSUYsVUFBVSxHQUFHLENBQUMsRUFBRTtJQUNsQixJQUFJRyxJQUFJLEdBQUcsSUFBSVQsMENBQUksQ0FBQ0MsTUFBTSxDQUFDTSxLQUFLLENBQUM7RUFDbkMsQ0FBQyxNQUFNO0lBQ0xHLEtBQUssQ0FBQyxhQUFhLENBQUM7RUFDdEI7RUFDQVQsTUFBTSxDQUFDTSxLQUFLLEdBQUcsRUFBRTtBQUNuQixDQUFDO0FBRURILE9BQU8sQ0FBQ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFFTixrQkFBa0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tZXM2Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCAnLi4vdG9kby5jc3MnO1xuXG5jb25zdCAkaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCAkYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcblxuY29uc3QgYnV0dG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICBsZXQgY2hlY2tWYWx1ZSA9ICRpbnB1dC52YWx1ZS5sZW5ndGg7XG4gIGlmIChjaGVja1ZhbHVlID4gMCkge1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8oJGlucHV0LnZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIkVtcHR5IGZpZWxkXCIpO1xuICB9XG4gICRpbnB1dC52YWx1ZSA9IFwiXCI7XG59O1xuXG4kYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DbGlja0hhbmRsZXIpO1xuIl0sIm5hbWVzIjpbIlRvZG8iLCIkaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkYnV0dG9uIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwiY2hlY2tWYWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwidG9kbyIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nvar Todo = /*#__PURE__*/function () {\n  function Todo(inputValue) {\n    _classCallCheck(this, Todo);\n    this.inputValue = inputValue, this.allFunctions();\n  }\n  _createClass(Todo, [{\n    key: \"allFunctions\",\n    value: function allFunctions() {\n      this.createList();\n      this.removeClick();\n      this.editClick();\n      this.saveClick();\n    }\n  }, {\n    key: \"createList\",\n    value: function createList() {\n      var div = \"\\n        <div class=\\\"list__div\\\">\\n          <div><input class=\\\"todo__input\\\" value = \\\"\".concat(this.inputValue, \"\\\" disabled></div>\\n          <div><img class=\\\"edit__icon\\\" src=\\\"./images/check.png\\\"></div>\\n          <div><img class=\\\"save__icon\\\" src=\\\"./images/save.png\\\" style=\\\"display:none\\\"></div>\\n          <div><img class=\\\"remove__icon\\\" src=\\\"./images/recycle-bin.png\\\"></div>\\n        </div>\\n        \");\n      document.querySelector(\".container__list\").innerHTML += div;\n    }\n  }, {\n    key: \"removeClick\",\n    value: function removeClick() {\n      var removeIcon = document.querySelectorAll(\".remove__icon\");\n      for (var i = 0; i < removeIcon.length; i++) {\n        removeIcon[i].addEventListener(\"click\", function () {\n          this.parentNode.parentNode.remove();\n        }, false);\n      }\n    }\n  }, {\n    key: \"editClick\",\n    value: function editClick() {\n      var editIcon = document.querySelectorAll(\".edit__icon\");\n      for (var i = 0; i < editIcon.length; i++) {\n        editIcon[i].addEventListener(\"click\", function () {\n          var child = this.parentNode.parentNode;\n          var parent = child.parentNode;\n          var index = Array.prototype.indexOf.call(parent.children, child);\n          console.log(index);\n          document.querySelectorAll(\".todo__input\")[index].disabled = false;\n          document.querySelectorAll(\".edit__icon\")[index].classList.remove(\"show\");\n          document.querySelectorAll(\".edit__icon\")[index].classList.add(\"hide\");\n          document.querySelectorAll(\".save__icon\")[index].classList.remove(\"hide\");\n          document.querySelectorAll(\".save__icon\")[index].classList.add(\"show\");\n        }, false);\n      }\n    }\n  }, {\n    key: \"saveClick\",\n    value: function saveClick() {\n      var editIcon = document.querySelectorAll(\".save__icon\");\n      for (var i = 0; i < editIcon.length; i++) {\n        editIcon[i].addEventListener(\"click\", function () {\n          var child = this.parentNode.parentNode;\n          var parent = child.parentNode;\n          var index = Array.prototype.indexOf.call(parent.children, child);\n          console.log(index);\n          document.querySelectorAll(\".todo__input\")[index].disabled = true;\n          document.querySelectorAll(\".edit__icon\")[index].classList.remove(\"hide\");\n          document.querySelectorAll(\".edit__icon\")[index].classList.add(\"show\");\n          document.querySelectorAll(\".save__icon\")[index].classList.remove(\"show\");\n          document.querySelectorAll(\".save__icon\")[index].classList.add(\"hide\");\n        }, false);\n      }\n    }\n  }]);\n  return Todo;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKGlucHV0VmFsdWUpIHtcbiAgICAodGhpcy5pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZSksIHRoaXMuYWxsRnVuY3Rpb25zKCk7XG4gIH1cblxuICBhbGxGdW5jdGlvbnMoKSB7XG4gICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgdGhpcy5yZW1vdmVDbGljaygpO1xuICAgIHRoaXMuZWRpdENsaWNrKCk7XG4gICAgdGhpcy5zYXZlQ2xpY2soKTtcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgbGV0IGRpdiA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RfX2RpdlwiPlxuICAgICAgICAgIDxkaXY+PGlucHV0IGNsYXNzPVwidG9kb19faW5wdXRcIiB2YWx1ZSA9IFwiJHt0aGlzLmlucHV0VmFsdWV9XCIgZGlzYWJsZWQ+PC9kaXY+XG4gICAgICAgICAgPGRpdj48aW1nIGNsYXNzPVwiZWRpdF9faWNvblwiIHNyYz1cIi4vaW1hZ2VzL2NoZWNrLnBuZ1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGltZyBjbGFzcz1cInNhdmVfX2ljb25cIiBzcmM9XCIuL2ltYWdlcy9zYXZlLnBuZ1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdj48aW1nIGNsYXNzPVwicmVtb3ZlX19pY29uXCIgc3JjPVwiLi9pbWFnZXMvcmVjeWNsZS1iaW4ucG5nXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyX19saXN0XCIpLmlubmVySFRNTCArPSBkaXY7XG4gIH1cblxuICByZW1vdmVDbGljaygpIHtcbiAgICBsZXQgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVtb3ZlX19pY29uXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlSWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgcmVtb3ZlSWNvbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZWRpdENsaWNrKCkge1xuICAgIGxldCBlZGl0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdF9faWNvblwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRJY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGl0SWNvbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9fX2lucHV0XCIpW2luZGV4XS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0X19pY29uXCIpXG4gICAgICAgICAgICBbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdF9faWNvblwiKVtpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNhdmVfX2ljb25cIilcbiAgICAgICAgICAgIFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zYXZlX19pY29uXCIpW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUNsaWNrKCkge1xuICAgIGxldCBlZGl0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2F2ZV9faWNvblwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRJY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGl0SWNvbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9fX2lucHV0XCIpW2luZGV4XS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRfX2ljb25cIilcbiAgICAgICAgICAgIFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0X19pY29uXCIpW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2F2ZV9faWNvblwiKVxuICAgICAgICAgICAgW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNhdmVfX2ljb25cIilbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwiaW5wdXRWYWx1ZSIsImFsbEZ1bmN0aW9ucyIsImNyZWF0ZUxpc3QiLCJyZW1vdmVDbGljayIsImVkaXRDbGljayIsInNhdmVDbGljayIsImRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJlbW92ZUljb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwiZWRpdEljb24iLCJjaGlsZCIsInBhcmVudCIsImluZGV4IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJpbmRleE9mIiwiY2FsbCIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVkIiwiY2xhc3NMaXN0IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n");

/***/ }),

/***/ "./todo.css":
/*!******************!*\
  !*** ./todo.css ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90b2RvLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWVzNi8uL3RvZG8uY3NzPzA4YTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./todo.css\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;