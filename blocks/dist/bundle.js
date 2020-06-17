/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _recipe_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-block */ \"./app/recipe-block/index.js\");\n/* harmony import */ var _recipe_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_recipe_block__WEBPACK_IMPORTED_MODULE_0__);\n//Main file\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZTkyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL01haW4gZmlsZVxuaW1wb3J0ICcuL3JlY2lwZS1ibG9jayc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/index.js\n");

/***/ }),

/***/ "./app/recipe-block/index.js":
/*!***********************************!*\
  !*** ./app/recipe-block/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//console.log(wp);\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl; //Register the gutenburg block\n\nregisterBlockType('ju/recipe', {\n  title: __('Recipe', 'ju'),\n  description: __('Provide a short summary of a recipe.', 'ju'),\n  //common, formatting, layout, widgets, embed\n  category: 'common',\n  icon: 'carrot',\n  keywords: [__('Food', 'ju'), __('Ingredinets', 'ju'), __('Meal Type', 'ju')],\n  supports: {\n    html: false\n  },\n  edit: function edit(props) {\n    //console.log(props);\n    //return <p>Hello World</p>\n    return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Basics', 'ju')\n    }, wp.element.createElement(PanelRow, null, wp.element.createElement(\"p\", null, __('Configure the contents of your block here', 'ju'))), wp.element.createElement(TextControl, {\n      label: __('Ingredients', 'ju'),\n      help: __('Ex: tomatoes, lettuce, olive oil, etc', 'ju'),\n      value: \"Test\",\n      onChange: function onChange(new_val) {\n        console.log(new_val);\n      }\n    }), wp.element.createElement(TextControl, {\n      label: __('Cooking time', 'ju'),\n      help: __('How log will this take to cook', 'ju'),\n      value: \"Test\",\n      onChange: function onChange(new_val) {\n        console.log(new_val);\n      }\n    }), wp.element.createElement(TextControl, {\n      label: __('Utensils', 'ju'),\n      help: __('Ex: spoon, knife, post, pans', 'ju'),\n      value: \"Test\",\n      onChange: function onChange(new_val) {\n        console.log(new_val);\n      }\n    }), wp.element.createElement(SelectControl, {\n      label: __('Cooking Experience', 'ju'),\n      help: __('How skilled should the reader be?', 'ju'),\n      value: \"Beginner\",\n      options: [{\n        value: 'Beginner',\n        label: 'Beginner'\n      }, {\n        value: 'Intermediate',\n        label: 'Intermediate'\n      }, {\n        value: 'Expert',\n        label: 'Expert'\n      }],\n      onChange: function onChange(new_val) {\n        console.log(new_val);\n      }\n    }), wp.element.createElement(SelectControl, {\n      label: __('Meal Type', 'ju'),\n      help: __('When is this best eaten', 'ju'),\n      value: \"Breakfast\",\n      options: [{\n        value: 'Breakfast',\n        label: 'Breakfast'\n      }, {\n        value: 'Lunch',\n        label: 'Lunch'\n      }, {\n        value: 'Dinner',\n        label: 'Dinner'\n      }],\n      onChange: function onChange(new_val) {\n        console.log(new_val);\n      }\n    }))), wp.element.createElement(\"div\", {\n      className: props.className\n    }, wp.element.createElement(\"ul\", {\n      className: \"list-unstyled\"\n    }, wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, __('Ingredients:', 'ju')), \" INGREDIENTS_PH\"), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, __('Cooking Time:', 'ju')), \" COOKING_TIME_PH\"), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, __('Utensils:', 'ju'), \" \"), \" UTENSILS_PH\"), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, __('Cooking Experience:', 'ju')), \" LEVEL_PH\"), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, __('Meal Type:', 'ju')), \" TYPE_PH\")))];\n  },\n  save: function save(props) {\n    return wp.element.createElement(\"p\", null, \"Hello World\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcmVjaXBlLWJsb2NrL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3JlY2lwZS1ibG9jay9pbmRleC5qcz9lMjRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY29uc29sZS5sb2cod3ApO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBJbnNwZWN0b3JDb250cm9scyA9IHdwLmVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbCxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDsgLy9SZWdpc3RlciB0aGUgZ3V0ZW5idXJnIGJsb2NrXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdqdS9yZWNpcGUnLCB7XG4gIHRpdGxlOiBfXygnUmVjaXBlJywgJ2p1JyksXG4gIGRlc2NyaXB0aW9uOiBfXygnUHJvdmlkZSBhIHNob3J0IHN1bW1hcnkgb2YgYSByZWNpcGUuJywgJ2p1JyksXG4gIC8vY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQsIHdpZGdldHMsIGVtYmVkXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogJ2NhcnJvdCcsXG4gIGtleXdvcmRzOiBbX18oJ0Zvb2QnLCAnanUnKSwgX18oJ0luZ3JlZGluZXRzJywgJ2p1JyksIF9fKCdNZWFsIFR5cGUnLCAnanUnKV0sXG4gIHN1cHBvcnRzOiB7XG4gICAgaHRtbDogZmFsc2VcbiAgfSxcbiAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgIC8vY29uc29sZS5sb2cocHJvcHMpO1xuICAgIC8vcmV0dXJuIDxwPkhlbGxvIFdvcmxkPC9wPlxuICAgIHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEluc3BlY3RvckNvbnRyb2xzLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGFuZWxCb2R5LCB7XG4gICAgICB0aXRsZTogX18oJ0Jhc2ljcycsICdqdScpXG4gICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsUm93LCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIF9fKCdDb25maWd1cmUgdGhlIGNvbnRlbnRzIG9mIHlvdXIgYmxvY2sgaGVyZScsICdqdScpKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdJbmdyZWRpZW50cycsICdqdScpLFxuICAgICAgaGVscDogX18oJ0V4OiB0b21hdG9lcywgbGV0dHVjZSwgb2xpdmUgb2lsLCBldGMnLCAnanUnKSxcbiAgICAgIHZhbHVlOiBcIlRlc3RcIixcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld192YWwpO1xuICAgICAgfVxuICAgIH0pLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBfXygnQ29va2luZyB0aW1lJywgJ2p1JyksXG4gICAgICBoZWxwOiBfXygnSG93IGxvZyB3aWxsIHRoaXMgdGFrZSB0byBjb29rJywgJ2p1JyksXG4gICAgICB2YWx1ZTogXCJUZXN0XCIsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdfdmFsKTtcbiAgICAgIH1cbiAgICB9KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICBsYWJlbDogX18oJ1V0ZW5zaWxzJywgJ2p1JyksXG4gICAgICBoZWxwOiBfXygnRXg6IHNwb29uLCBrbmlmZSwgcG9zdCwgcGFucycsICdqdScpLFxuICAgICAgdmFsdWU6IFwiVGVzdFwiLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3X3ZhbCk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG4gICAgICBsYWJlbDogX18oJ0Nvb2tpbmcgRXhwZXJpZW5jZScsICdqdScpLFxuICAgICAgaGVscDogX18oJ0hvdyBza2lsbGVkIHNob3VsZCB0aGUgcmVhZGVyIGJlPycsICdqdScpLFxuICAgICAgdmFsdWU6IFwiQmVnaW5uZXJcIixcbiAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgIHZhbHVlOiAnQmVnaW5uZXInLFxuICAgICAgICBsYWJlbDogJ0JlZ2lubmVyJ1xuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogJ0ludGVybWVkaWF0ZScsXG4gICAgICAgIGxhYmVsOiAnSW50ZXJtZWRpYXRlJ1xuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogJ0V4cGVydCcsXG4gICAgICAgIGxhYmVsOiAnRXhwZXJ0J1xuICAgICAgfV0sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdfdmFsKTtcbiAgICAgIH1cbiAgICB9KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBfXygnTWVhbCBUeXBlJywgJ2p1JyksXG4gICAgICBoZWxwOiBfXygnV2hlbiBpcyB0aGlzIGJlc3QgZWF0ZW4nLCAnanUnKSxcbiAgICAgIHZhbHVlOiBcIkJyZWFrZmFzdFwiLFxuICAgICAgb3B0aW9uczogW3tcbiAgICAgICAgdmFsdWU6ICdCcmVha2Zhc3QnLFxuICAgICAgICBsYWJlbDogJ0JyZWFrZmFzdCdcbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6ICdMdW5jaCcsXG4gICAgICAgIGxhYmVsOiAnTHVuY2gnXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiAnRGlubmVyJyxcbiAgICAgICAgbGFiZWw6ICdEaW5uZXInXG4gICAgICB9XSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld192YWwpO1xuICAgICAgfVxuICAgIH0pKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZVxuICAgIH0sIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJsaXN0LXVuc3R5bGVkXCJcbiAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgX18oJ0luZ3JlZGllbnRzOicsICdqdScpKSwgXCIgSU5HUkVESUVOVFNfUEhcIiksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBfXygnQ29va2luZyBUaW1lOicsICdqdScpKSwgXCIgQ09PS0lOR19USU1FX1BIXCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgX18oJ1V0ZW5zaWxzOicsICdqdScpLCBcIiBcIiksIFwiIFVURU5TSUxTX1BIXCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgX18oJ0Nvb2tpbmcgRXhwZXJpZW5jZTonLCAnanUnKSksIFwiIExFVkVMX1BIXCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgX18oJ01lYWwgVHlwZTonLCAnanUnKSksIFwiIFRZUEVfUEhcIikpKV07XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkhlbGxvIFdvcmxkXCIpO1xuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/recipe-block/index.js\n");

/***/ })

/******/ });