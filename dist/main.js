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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toyReact.js */ \"./toyReact.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nconsole.log('hello world');\n\n\nvar MyComponent2 = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent2, _Component);\n\n  var _super = _createSuper(MyComponent2);\n\n  function MyComponent2() {\n    _classCallCheck(this, MyComponent2);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MyComponent2, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, \"jch\");\n    }\n  }]);\n\n  return MyComponent2;\n}(_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Square = /*#__PURE__*/function (_Component2) {\n  _inherits(Square, _Component2);\n\n  var _super2 = _createSuper(Square);\n\n  function Square() {\n    _classCallCheck(this, Square);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"button\", {\n        className: \"square\",\n        onClick: this.props.onClick\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component3) {\n  _inherits(Board, _Component3);\n\n  var _super3 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      var _this = this;\n\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(Square, {\n        value: this.props.squares[i],\n        onClick: function onClick() {\n          return _this.props.onClick(i);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", null, /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Game = /*#__PURE__*/function (_Component4) {\n  _inherits(Game, _Component4);\n\n  var _super4 = _createSuper(Game);\n\n  function Game(props) {\n    var _this2;\n\n    _classCallCheck(this, Game);\n\n    _this2 = _super4.call(this, props);\n    _this2.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      stepNumber: 0,\n      xIsNext: true\n    };\n    return _this2;\n  }\n\n  _createClass(Game, [{\n    key: \"handleClick\",\n    value: function handleClick(i) {\n      var history = this.state.history.slice(0, this.state.stepNumber + 1);\n      var current = history[history.length - 1];\n      var squares = current.squares.slice();\n\n      if (calculateWinner(squares) || squares[i]) {\n        return;\n      }\n\n      squares[i] = this.state.xIsNext ? \"X\" : \"O\";\n      this.setState({\n        history: history.concat([{\n          squares: squares\n        }]),\n        stepNumber: history.length,\n        xIsNext: !this.state.xIsNext\n      });\n    }\n  }, {\n    key: \"jumpTo\",\n    value: function jumpTo(step) {\n      this.setState({\n        stepNumber: step,\n        xIsNext: step % 2 === 0\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var history = this.state.history;\n      var current = history[this.state.stepNumber];\n      var winner = calculateWinner(current.squares);\n      var moves = history.map(function (step, move) {\n        var desc = move ? 'Go to move #' + move : 'Go to game start';\n        return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"li\", {\n          key: move\n        }, /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"button\", {\n          onClick: function onClick() {\n            return _this3.jumpTo(move);\n          }\n        }, desc));\n      });\n      var status;\n\n      if (winner) {\n        status = \"Winner: \" + winner;\n      } else {\n        status = \"Next player: \" + (this.state.xIsNext ? \"X\" : \"O\");\n      }\n\n      return /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        className: \"game\"\n      }, /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        className: \"game-board\"\n      }, /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(Board, {\n        squares: current.squares,\n        onClick: function onClick(i) {\n          return _this3.handleClick(i);\n        }\n      })), /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(\"div\", {\n        className: \"game-info\"\n      }));\n    }\n  }]);\n\n  return Game;\n}(_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // console.log(a);\n\n\n_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].render( /*#__PURE__*/_toyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"React\"].createElement(Game, null), document.body);\n\nfunction calculateWinner(squares) {\n  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (var i = 0; i < lines.length; i++) {\n    var _lines$i = _slicedToArray(lines[i], 3),\n        a = _lines$i[0],\n        b = _lines$i[1],\n        c = _lines$i[2];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toyReact.js":
/*!*********************!*\
  !*** ./toyReact.js ***!
  \*********************/
/*! exports provided: Component, React */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"React\", function() { return React; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Elementwrapper = /*#__PURE__*/function () {\n  function Elementwrapper(type) {\n    _classCallCheck(this, Elementwrapper);\n\n    this.type = type;\n    this.props = Object.create(null);\n    this.children = []; // this.element = document.createElement(type);\n  }\n\n  _createClass(Elementwrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // if (name.match(/^on([\\s\\S]+)$/)) {\n      //     let eventName = RegExp.$1.replace(/^[\\s\\S]/, s => s.toLowerCase());\n      //     this.element.addEventListener(eventName, value)\n      // }\n      // if (name === 'className') {\n      //     name = 'class'\n      // }\n      // this.element.setAttribute(name, value)\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      // console.log(vchild);\n      // console.log(1111)\n      // console.log(vchild + '........')\n      this.children.push(vchild); // let range = document.createRange();\n      // if (this.element.children.length) {\n      //     range.setStartAfter(this.element.lastChild);\n      //     range.setEndAfter(this.element.lastChild)\n      // } else {\n      //     range.setStart(this.element, 0);\n      //     range.setEnd(this.element, 0);\n      // }\n      // vchild.mountTo(range);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      range.deleteContents();\n      this.range = range;\n      var element = document.createElement(this.type);\n\n      for (var name in this.props) {\n        var value = this.props[name];\n\n        if (name.match(/^on([\\s\\S]+)$/)) {\n          var eventName = RegExp.$1.replace(/^[\\s\\S]/, function (s) {\n            return s.toLowerCase();\n          });\n          element.addEventListener(eventName, value);\n        } else if (name === 'className') {\n          name = 'class';\n        }\n\n        element.setAttribute(name, value);\n      }\n\n      var _iterator = _createForOfIteratorHelper(this.children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n\n          var _range = document.createRange();\n\n          if (element.children.length) {\n            _range.setStartAfter(element.lastChild);\n\n            _range.setEndAfter(element.lastChild);\n          } else {\n            _range.setStart(element, 0);\n\n            _range.setEnd(element, 0);\n          }\n\n          child.mountTo(_range);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      range.insertNode(element); // parent.appendChild(this.element);\n    }\n  }]);\n\n  return Elementwrapper;\n}();\n\n;\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(type) {\n    _classCallCheck(this, TextWrapper);\n\n    this.type = '#text';\n    this.children = [];\n    this.props = Object.create(null);\n    this.element = document.createTextNode(type);\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      this.range = range; // parent.appendChild(this.element);\n\n      range.deleteContents();\n      range.insertNode(this.element);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\n;\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.children = [];\n    this.props = Object.create(null);\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this[name] = value;\n      this.props[name] = value;\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      // range.\n      this.range = range;\n      this.update(); // let vdom = this.render();\n      // // console.log(this,vdom)\n      // // console.log(1111)\n      // vdom.mountTo(range);\n      // let range = document.createRange();\n      // range.setStartAfter()\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // let \n      // this.range.deleteContents();\n      var vdom = this.render();\n\n      if (this.vdom) {\n        // console.log('new' , vdom);\n        // console.log('old',this.vdom);\n        var isSameNode = function isSameNode(node1, node2) {\n          if (node1.type !== node2.type) {\n            return false;\n          }\n\n          for (var name in node1.props) {\n            if (typeof node1.props[name] === 'function' && typeof node2.props[name] === 'function' && node1.props[name].toString() === node2.props[name].toString()) {\n              continue;\n            }\n\n            if (_typeof(node1.props[name]) === 'object' && _typeof(node2.props[name]) === 'object' && JSON.stringify(node1.props[name]) === JSON.stringify(node2.props[name])) {\n              continue;\n            }\n\n            if (node1.props[name] !== node2.props[name]) {\n              return false;\n            }\n          }\n\n          if (Object.keys(node1.props).length !== Object.keys(node2.props).length) {\n            return false;\n          }\n\n          return true;\n        };\n\n        var isSameTree = function isSameTree(node1, node2) {\n          if (!isSameNode(node1, node2)) {\n            return false;\n          }\n\n          if (node1.children.length !== node2.children.length) {\n            return false;\n          }\n\n          for (var i = 0; i < node1.children.length; i++) {\n            if (!isSameTree(node1.children[i], node2.children[i])) {\n              return false;\n            }\n          }\n\n          return true;\n        };\n\n        var replace = function replace(newTree, oldTree) {\n          if (isSameTree(newTree, oldTree)) {\n            return;\n          }\n\n          if (!isSameNode(newTree, oldTree)) {\n            newTree.mountTo(oldTree.range);\n          } else {\n            for (var i = 0; i < newTree.children.length; i++) {\n              replace(newTree.children[i], oldTree.children[i]);\n            }\n          }\n        };\n\n        replace(vdom, this.vdom);\n      } else {\n        vdom.mountTo(this.range);\n      }\n\n      this.vdom = vdom;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(state) {\n      var merge = function merge(oldState, newState) {\n        for (var p in newState) {\n          if (_typeof(newState[p]) === 'object' && newState[p] !== null) {\n            if (_typeof(oldState[p]) !== 'object') {\n              if (newState[p] instanceof Array) {\n                oldState[p] = [];\n              } else {\n                oldState[p] = {};\n              }\n            }\n\n            merge(oldState[p], newState[p]);\n          } else {\n            oldState[p] = newState[p];\n          }\n        }\n      };\n\n      if (!this.state && state) {\n        this.state = {};\n      }\n\n      merge(this.state, state);\n      console.log(this.state);\n      this.update();\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      // console.log(this.constructor.v)\n      return this.constructor.name;\n    }\n  }]);\n\n  return Component;\n}();\nvar React = {\n  createElement: function createElement(type, attributes) {\n    // console.log(arguments)\n    // debugger;\n    var el;\n\n    if (typeof type === 'string') {\n      // console.log(type)\n      el = new Elementwrapper(type);\n    } else {\n      el = new type();\n    } // console.log(el)\n    // let el;\n\n\n    for (var k in attributes) {\n      el.setAttribute(k, attributes[k]);\n    } // for (let child of children) {\n    //     // console.log(child)\n    //     if (typeof child === 'string') {\n    //         // const ele = document.createTextNode(child);\n    //         console.log(child)\n    //         // console.log(new TextWrapper(child))\n    //         el.appendChild(new TextWrapper(child));\n    //         // el.appendChild(ele);\n    //         //  el = new Elementwrapper(type);\n    //     } else {\n    //         el.appendChild(child);\n    //         //  el = new TextWrapper(type);\n    //     }\n    //     // document.body.appendChild(el);\n    // }\n\n\n    var insertNode = function insertNode(children) {\n      var _iterator2 = _createForOfIteratorHelper(children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n\n          if (_typeof(child) === 'object' && child instanceof Array) {\n            insertNode(child);\n          } else {\n            if (child === null || child === void 0) {\n              child = '';\n            }\n\n            if (!(child instanceof Component) && !(child instanceof Elementwrapper) && !(child instanceof TextWrapper)) {\n              child = String(child);\n            }\n\n            if (typeof child === 'string') {\n              child = new TextWrapper(child);\n            }\n\n            el.appendChild(child);\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    };\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    insertNode(children);\n    return el;\n  },\n  render: function render(vdom, el) {\n    console.log(el);\n    var range = document.createRange();\n\n    if (el.children.length) {\n      range.setStartAfter(el.lastChild);\n      range.setEndAfter(el.lastChild);\n    } else {\n      range.setStart(el, 0);\n      range.setEnd(el, 0);\n    }\n\n    vdom.mountTo(range);\n  }\n};\n\n//# sourceURL=webpack:///./toyReact.js?");

/***/ })

/******/ });