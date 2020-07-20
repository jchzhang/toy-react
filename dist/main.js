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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toyReact.js */ \"./toyReact.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nconsole.log('hello world');\n\n\nvar MyComponent2 = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent2, _Component);\n\n  var _super = _createSuper(MyComponent2);\n\n  function MyComponent2() {\n    _classCallCheck(this, MyComponent2);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MyComponent2, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, \"jch\");\n    }\n  }]);\n\n  return MyComponent2;\n}(_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar MyComponent = /*#__PURE__*/function (_Component2) {\n  _inherits(MyComponent, _Component2);\n\n  var _super2 = _createSuper(MyComponent);\n\n  function MyComponent() {\n    _classCallCheck(this, MyComponent);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        id: \"test\"\n      }, /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"h1\", null, \"hello world\"), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"span\", null, \"2\"), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"span\", null, \"1\"), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"span\", null, \"2\"), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(MyComponent2, null)));\n    }\n  }]);\n\n  return MyComponent;\n}(_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar a = /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(MyComponent, {\n  name: \"div\",\n  id: \"1\"\n}); // console.log(a);\n\n_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].render(a, document.body);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toyReact.js":
/*!*********************!*\
  !*** ./toyReact.js ***!
  \*********************/
/*! exports provided: Component, React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"React\", function() { return React; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Elementwrapper = /*#__PURE__*/function () {\n  function Elementwrapper(type) {\n    _classCallCheck(this, Elementwrapper);\n\n    this.element = document.createElement(type);\n  }\n\n  _createClass(Elementwrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.element.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      // console.log(vchild);\n      // console.log(1111)\n      // console.log(vchild + '........')\n      vchild.mountTo(this.element);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.element);\n    }\n  }]);\n\n  return Elementwrapper;\n}();\n\n;\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(type) {\n    _classCallCheck(this, TextWrapper);\n\n    this.element = document.createTextNode(type);\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.element);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\n;\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.children = [];\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this[name] = value;\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      var vdom = this.render(); // console.log(this,vdom)\n      // console.log(1111)\n\n      vdom.mountTo(parent);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }]);\n\n  return Component;\n}();\nvar React = {\n  createElement: function createElement(type, attributes) {\n    // console.log(arguments)\n    // debugger;\n    var el;\n\n    if (typeof type === 'string') {\n      // console.log(type)\n      el = new Elementwrapper(type);\n    } else {\n      el = new type();\n    } // console.log(el)\n    // let el;\n\n\n    for (var k in attributes) {\n      el.setAttribute(k, attributes[k]);\n    }\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    for (var _i = 0, _children = children; _i < _children.length; _i++) {\n      var child = _children[_i];\n\n      // console.log(child)\n      if (typeof child === 'string') {\n        // const ele = document.createTextNode(child);\n        console.log(child); // console.log(new TextWrapper(child))\n\n        el.appendChild(new TextWrapper(child)); // el.appendChild(ele);\n        //  el = new Elementwrapper(type);\n      } else {\n        el.appendChild(child); //  el = new TextWrapper(type);\n      } // document.body.appendChild(el);\n\n    }\n\n    return el;\n  },\n  render: function render(vdom, el) {\n    console.log(vdom);\n    vdom.mountTo(el);\n  }\n};\n\n//# sourceURL=webpack:///./toyReact.js?");

/***/ })

/******/ });