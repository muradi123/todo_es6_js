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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.css */ \"./todo.css\");\n\n\nvar $input = document.querySelector(\"input\");\nvar $button = document.querySelector(\"button\");\nvar buttonClickHandler = function buttonClickHandler() {\n  var checkValue = $input.value.length;\n  if (checkValue > 0) {\n    var todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo($input.value);\n  } else {\n    alert(\"Empty field\");\n  }\n  $input.value = \"\";\n};\n$button === null || $button === void 0 ? void 0 : $button.addEventListener(\"click\", buttonClickHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWlDO0FBQ1o7QUFFckIsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDOUMsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFFaEQsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQixHQUFTO0VBQy9CLElBQUlDLFVBQVUsR0FBR0wsTUFBTSxDQUFDTSxLQUFLLENBQUNDLE1BQU07RUFDcEMsSUFBSUYsVUFBVSxHQUFHLENBQUMsRUFBRTtJQUNsQixJQUFJRyxJQUFJLEdBQUcsSUFBSVQsMENBQUksQ0FBQ0MsTUFBTSxDQUFDTSxLQUFLLENBQUM7RUFDbkMsQ0FBQyxNQUFNO0lBQ0xHLEtBQUssQ0FBQyxhQUFhLENBQUM7RUFDdEI7RUFDQVQsTUFBTSxDQUFDTSxLQUFLLEdBQUcsRUFBRTtBQUNuQixDQUFDO0FBRURILE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVOLGtCQUFrQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1lczYvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0ICcuLi90b2RvLmNzcyc7XG5cbmNvbnN0ICRpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG5jb25zdCBidXR0b25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gIGxldCBjaGVja1ZhbHVlID0gJGlucHV0LnZhbHVlLmxlbmd0aDtcbiAgaWYgKGNoZWNrVmFsdWUgPiAwKSB7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbygkaW5wdXQudmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiRW1wdHkgZmllbGRcIik7XG4gIH1cbiAgJGlucHV0LnZhbHVlID0gXCJcIjtcbn07XG5cbiRidXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25DbGlja0hhbmRsZXIpO1xuIl0sIm5hbWVzIjpbIlRvZG8iLCIkaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkYnV0dG9uIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwiY2hlY2tWYWx1ZSIsInZhbHVlIiwibGVuZ3RoIiwidG9kbyIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nvar checkImage = __webpack_require__(/*! ../images/check.png */ \"./images/check.png\");\nvar cycle = __webpack_require__(/*! ../images/recycle-bin.png */ \"./images/recycle-bin.png\");\nvar saveImage = __webpack_require__(/*! ../images/save.png */ \"./images/save.png\");\nvar Todo = /*#__PURE__*/function () {\n  function Todo(inputValue) {\n    _classCallCheck(this, Todo);\n    this.inputValue = inputValue, this.allFunctions();\n  }\n  _createClass(Todo, [{\n    key: \"allFunctions\",\n    value: function allFunctions() {\n      this.createList();\n      this.removeClick();\n      this.editClick();\n      this.saveClick();\n    }\n  }, {\n    key: \"createList\",\n    value: function createList() {\n      var div = \"\\n        <div class=\\\"list__div\\\">\\n          <div><input class=\\\"todo__input\\\" value = \\\"\".concat(this.inputValue, \"\\\" disabled></div>\\n          <div><img class=\\\"edit__icon\\\" src=\\\"\").concat(checkImage[\"default\"], \"\\\"></div>\\n          <div><img class=\\\"save__icon\\\" src=\\\"\").concat(saveImage[\"default\"], \"\\\" style=\\\"display:none\\\"></div>\\n          <div><img class=\\\"remove__icon\\\" src=\\\"\").concat(cycle[\"default\"], \"\\\"></div>\\n        </div>\\n        \");\n      document.querySelector(\".container__list\").innerHTML += div;\n    }\n  }, {\n    key: \"removeClick\",\n    value: function removeClick() {\n      var removeIcon = document.querySelectorAll(\".remove__icon\");\n      for (var i = 0; i < removeIcon.length; i++) {\n        removeIcon[i].addEventListener(\"click\", function () {\n          this.parentNode.parentNode.remove();\n        }, false);\n      }\n    }\n  }, {\n    key: \"editClick\",\n    value: function editClick() {\n      var editIcon = document.querySelectorAll(\".edit__icon\");\n      for (var i = 0; i < editIcon.length; i++) {\n        editIcon[i].addEventListener(\"click\", function () {\n          var child = this.parentNode.parentNode;\n          var parent = child.parentNode;\n          var index = Array.prototype.indexOf.call(parent.children, child);\n          console.log(index);\n          document.querySelectorAll(\".todo__input\")[index].disabled = false;\n          document.querySelectorAll(\".edit__icon\")[index].classList.remove(\"show\");\n          document.querySelectorAll(\".edit__icon\")[index].classList.add(\"hide\");\n          document.querySelectorAll(\".save__icon\")[index].classList.remove(\"hide\");\n          document.querySelectorAll(\".save__icon\")[index].classList.add(\"show\");\n        }, false);\n      }\n    }\n  }, {\n    key: \"saveClick\",\n    value: function saveClick() {\n      var editIcon = document.querySelectorAll(\".save__icon\");\n      for (var i = 0; i < editIcon.length; i++) {\n        editIcon[i].addEventListener(\"click\", function () {\n          var child = this.parentNode.parentNode;\n          var parent = child.parentNode;\n          var index = Array.prototype.indexOf.call(parent.children, child);\n          console.log(index);\n          document.querySelectorAll(\".todo__input\")[index].disabled = true;\n          document.querySelectorAll(\".edit__icon\")[index].classList.remove(\"hide\");\n          document.querySelectorAll(\".edit__icon\")[index].classList.add(\"show\");\n          document.querySelectorAll(\".save__icon\")[index].classList.remove(\"show\");\n          document.querySelectorAll(\".save__icon\")[index].classList.add(\"hide\");\n        }, false);\n      }\n    }\n  }]);\n  return Todo;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1VBQ2xDVCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDUyxLQUFLLENBQUMsQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3ZFLENBQUMsRUFDRCxLQUFLLENBQ047TUFDSDtJQUNGO0VBQUM7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1lczYvLi9zcmMvdG9kby5qcz8yNGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWNrSW1hZ2UgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2NoZWNrLnBuZ1wiKTtcbmNvbnN0IGN5Y2xlID0gcmVxdWlyZShcIi4uL2ltYWdlcy9yZWN5Y2xlLWJpbi5wbmdcIik7XG5jb25zdCBzYXZlSW1hZ2UgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL3NhdmUucG5nXCIpO1xuXG5cbmV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IoaW5wdXRWYWx1ZSkge1xuICAgICh0aGlzLmlucHV0VmFsdWUgPSBpbnB1dFZhbHVlKSwgdGhpcy5hbGxGdW5jdGlvbnMoKTtcbiAgfVxuXG4gIGFsbEZ1bmN0aW9ucygpIHtcbiAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICB0aGlzLnJlbW92ZUNsaWNrKCk7XG4gICAgdGhpcy5lZGl0Q2xpY2soKTtcbiAgICB0aGlzLnNhdmVDbGljaygpO1xuICB9XG5cbiAgY3JlYXRlTGlzdCgpIHtcbiAgICBsZXQgZGl2ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdF9fZGl2XCI+XG4gICAgICAgICAgPGRpdj48aW5wdXQgY2xhc3M9XCJ0b2RvX19pbnB1dFwiIHZhbHVlID0gXCIke3RoaXMuaW5wdXRWYWx1ZX1cIiBkaXNhYmxlZD48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxpbWcgY2xhc3M9XCJlZGl0X19pY29uXCIgc3JjPVwiJHtjaGVja0ltYWdlLmRlZmF1bHR9XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdj48aW1nIGNsYXNzPVwic2F2ZV9faWNvblwiIHNyYz1cIiR7c2F2ZUltYWdlLmRlZmF1bHR9XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxpbWcgY2xhc3M9XCJyZW1vdmVfX2ljb25cIiBzcmM9XCIke2N5Y2xlLmRlZmF1bHR9XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyX19saXN0XCIpLmlubmVySFRNTCArPSBkaXY7XG4gIH1cblxuICByZW1vdmVDbGljaygpIHtcbiAgICBsZXQgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVtb3ZlX19pY29uXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlSWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgcmVtb3ZlSWNvbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZWRpdENsaWNrKCkge1xuICAgIGxldCBlZGl0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdF9faWNvblwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRJY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGl0SWNvbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9fX2lucHV0XCIpW2luZGV4XS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0X19pY29uXCIpXG4gICAgICAgICAgICBbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdF9faWNvblwiKVtpbmRleF0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNhdmVfX2ljb25cIilcbiAgICAgICAgICAgIFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zYXZlX19pY29uXCIpW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUNsaWNrKCkge1xuICAgIGxldCBlZGl0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2F2ZV9faWNvblwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRJY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGl0SWNvbltpXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgcGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9fX2lucHV0XCIpW2luZGV4XS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRfX2ljb25cIilcbiAgICAgICAgICAgIFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0X19pY29uXCIpW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2F2ZV9faWNvblwiKVxuICAgICAgICAgICAgW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNhdmVfX2ljb25cIilbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGVja0ltYWdlIiwicmVxdWlyZSIsImN5Y2xlIiwic2F2ZUltYWdlIiwiVG9kbyIsImlucHV0VmFsdWUiLCJhbGxGdW5jdGlvbnMiLCJjcmVhdGVMaXN0IiwicmVtb3ZlQ2xpY2siLCJlZGl0Q2xpY2siLCJzYXZlQ2xpY2siLCJkaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJyZW1vdmVJY29uIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZSIsImVkaXRJY29uIiwiY2hpbGQiLCJwYXJlbnQiLCJpbmRleCIsIkFycmF5IiwicHJvdG90eXBlIiwiaW5kZXhPZiIsImNhbGwiLCJjaGlsZHJlbiIsImNvbnNvbGUiLCJsb2ciLCJkaXNhYmxlZCIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todo.js\n");

/***/ }),

/***/ "./images/check.png":
/*!**************************!*\
  !*** ./images/check.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b64346873c0b2bbf67aa10cfc4fb0b2a.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvY2hlY2sucG5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxxQkFBdUIseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1lczYvLi9pbWFnZXMvY2hlY2sucG5nP2FhY2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI2NDM0Njg3M2MwYjJiYmY2N2FhMTBjZmM0ZmIwYjJhLnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./images/check.png\n");

/***/ }),

/***/ "./images/recycle-bin.png":
/*!********************************!*\
  !*** ./images/recycle-bin.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3490abfbc6f5a526b9c408eff5c01be0.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvcmVjeWNsZS1iaW4ucG5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxxQkFBdUIseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1lczYvLi9pbWFnZXMvcmVjeWNsZS1iaW4ucG5nP2MwM2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM0OTBhYmZiYzZmNWE1MjZiOWM0MDhlZmY1YzAxYmUwLnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./images/recycle-bin.png\n");

/***/ }),

/***/ "./images/save.png":
/*!*************************!*\
  !*** ./images/save.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3e64e9f1604851a06500fa906b79f81d.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvc2F2ZS5wbmcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWVzNi8uL2ltYWdlcy9zYXZlLnBuZz8zNDZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZTY0ZTlmMTYwNDg1MWEwNjUwMGZhOTA2Yjc5ZjgxZC5wbmdcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./images/save.png\n");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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