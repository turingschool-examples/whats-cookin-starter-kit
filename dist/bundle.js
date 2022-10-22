/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  background-color: #FFFDF6;\n  box-sizing: border-box;\n  font-family: \"Lora\";\n  /* border: 1px;\n  border-style: solid;\n  border-color: #938B6D; */\n}\n\nbutton {\n  border: none;\n  font-style: italic;\n  font-size: 1.1vw;\n}\n\ninput {\n  font-style: italic;\n  border: 2px;\n  border-style: solid;\n  border-radius: 1vw;\n  border-color: #E99B3D;\n  font-style: italic;\n  font-size: 0.9vw;\n}\n\nbutton:hover {\n  cursor: pointer;\n  color: #E99B3D;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 12px;\n}\n\n.title-area {\n  display: flex;\n  align-items: center;\n}\n\n.turing-logo {\n  height: 3vw;\n  width: 3vw;\n  margin-right: 1.3vw;\n}\n\nmain {\n  display: flex;\n  background-color: blueviolet;\n  flex-direction: column;\n  height: 100vw;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  width: 40%;\n  height: 2.5vw;\n}\n\n.search-bar {\n  width: 20vw;\n}\n\n.home-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vw;\n}\n\n.greeting-area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 22vw;\n}\n\n.greeting {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 75%;\n  font-style: italic;\n  font-size: 3.5vw;\n  color: #FFFDF6;\n  height: 22vw;\n  background-image: url(\"https://i2.wp.com/michellescotttucker.com/wp-content/uploads/2014/10/getty-cockatoo-still-life.jpg\");\n  background-repeat: no-repeat;\n  background-size: 80vw 22vw;\n}\n\n.all-recipe-grid {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.recipe-header-container {\n  display: flex;\n  justify-content: center;\n}\n\nul {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding-left: 0;\n  height: 100vw;\n}\n\nli {\n  list-style: none;\n  flex-basis: 30.1%;\n  height: 20vw;\n  margin: 1.5vw;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,sBAAA;EACA,mBAAA;EACA;;0BAAA;AAGF;;AAEA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACA;;AAEA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;AACA;;AAEA;EACE,eAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,UAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,4BAAA;EACA,sBAAA;EACA,aAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,UAAA;EACA,aAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AACF;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,2HAAA;EACA,4BAAA;EACA,0BAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EAEA,eAAA;EACA,aAAA;AADF;;AAIA;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;AADF;;AAIA;EACE,aAAA;AADF","sourcesContent":["*{\n  background-color: #FFFDF6;\n  box-sizing: border-box;\n  font-family: 'Lora';\n  /* border: 1px;\n  border-style: solid;\n  border-color: #938B6D; */\n}\n\nbutton {\nborder: none;\nfont-style: italic;\nfont-size: 1.1vw;\n}\n\ninput {\nfont-style: italic;\nborder: 2px;\nborder-style: solid;\nborder-radius: 1vw;\nborder-color: #E99B3D;\nfont-style: italic;\nfont-size: .9vw;\n}\n\nbutton:hover {\n  cursor: pointer;\n  color: #E99B3D;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 12px;\n}\n\n.title-area {\n  display:flex;\n  align-items: center;\n}\n\n.turing-logo {\n  height: 3vw;\n  width: 3vw;\n  margin-right: 1.3vw;\n}\n\nmain {\n  display: flex;\n  background-color: blueviolet;\n  flex-direction: column;\n  height: 100vw;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  width: 40%;\n  height: 2.5vw;\n}\n\n.search-bar {\n  width: 20vw;\n}\n\n.home-container {\n  display:flex;\n  flex-direction: column;\n  height: 100vw;\n}\n\n.greeting-area {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 22vw;\n  \n}\n\n.greeting {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 75%;\n  font-style: italic;\n  font-size: 3.5vw;\n  color: #FFFDF6;\n  height: 22vw;\n  background-image: url(\"https://i2.wp.com/michellescotttucker.com/wp-content/uploads/2014/10/getty-cockatoo-still-life.jpg\");\n  background-repeat: no-repeat;\n  background-size: 80vw 22vw;\n}\n\n.all-recipe-grid {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.recipe-header-container {\n  display: flex;\n  justify-content: center;\n}\n\nul {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  \n  padding-left: 0;\n  height: 100vw;\n}\n\nli {\n  list-style: none;\n  flex-basis: 30.1%;\n  height: 20vw;\n  margin: 1.5vw;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ (() => {

let userData, recipeData, ingredientsData;

const userApi =
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        userData = data.usersData;
        console.log(userData);
    })
    .catch(err => console.log(err));

    const recipeApi =
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        recipeData = data.recipeData;
        console.log(recipeData);
    })
    .catch(err => console.log(err));

    const ingredientApi =
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        ingredientsData = data.ingredientsData;
        console.log(ingredientsData);
    })
    .catch(err => console.log(err));

// function fetchApiData() {
//     return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// };

console.log('I will be a fetch request!');


//module.exports = testFetch;

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apiCalls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);


//import functionName from './apiCalls';
const varName = __webpack_require__(6);
const functionName2 = varName.testFetch;
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

// Import Fetch calls
// import {fetchCalls.method1, fetchCalls.method2,  fetchCalls.method3, fetchCalls.method4} from {"./apiCalls"};
// Import classes
// import Each from './Each'; {ex - RecipeRepository, Recipe, Ingredient, User}
// import Other from './Other';
// import Class from './Class';
// import Needed from './Needed';

// declare variables for linked methods compatibility
// let declare;
// let each;
// let thing;
// let you;
// let need;
// let then;
// let change;
// let below;

// Declare function to instantiate all of our data to dashboard on load/ refresh.
// function catalogAllData() {
  // Promise.all()
// }

// Declare a function to update dashboard's data state after invoking other methods to alter DOM values

// Query Selectors!!!
// const
// const

// Event Listeners
// window.addEventListener('load', catalogAllData);

// Functions
// function loadUser() {
  // render everything to DOM by invoking all helper functions declared for rendering below
// };

// function renderThing() {};
// function renderOtherThing() {};




// Iteration 1 User Stories (dashboard)

// As a user, I should be able to view a list of all recipes.
// render page view/ unhide form of grid containing all recipe card objects for All Recipes Page display
// invoke w/ handler either on load or click
function renderAllRecipes(data) {
  (QS4allRecipesGrid).innerHTML = "";
  (QS4allRecipesGrid).innerHTML = 
  `<section class="recipe-card">
    <h3 class="" id="recipe-title">Recipe Title</h3>
    <img url="">
    <div class="">
      ${recipeTags}
    </div>
  </section>`;
}


// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// render page view/ unhide form of grid containing selected recipe card object for Specific Recipes Page display
// invoke with handler on click
function showRecipe() {
  greeting.classList.add('hidden')
  allRecipesGrid.classList.add('hidden');
  savedRecipesGrid.classList.add('hidden');
  singleRecipe.classList.remove('hidden');
}


// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
// render page view/ unhide form of grid containing all recipe card objects WITH SELECTED TAG for All Recipes Page display (may as well reuse code for render?)
// invoke with searchbar handler? Maybe easier to set a static list of all tag names to use as preset 'filters'? probably not.
// invoke on recipe page with handler on click of tag name


// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
// searchbar should have a handler to search all recipes and filter by entered/ selected name OR tag


console.log('Hello world');


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map