/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  background-color: #E7F1F1;\n  margin: 10px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.filter-save {\n  width: 200px;\n  text-align: center;\n}\n\nh1 {\n  font-family: \"Eczar\", serif;\n  font-weight: 700;\n  font-size: 60px;\n  letter-spacing: 2px;\n  margin-top: -10px;\n  margin-bottom: 0px;\n}\n\nh2 {\n  margin-bottom: 40px;\n}\n\ninput {\n  height: 40px;\n  width: 400px;\n  border-radius: 10px;\n  background-color: white;\n  font-size: 20px;\n  font-family: \"Radley\", serif;\n  text-align: center;\n}\n\ninput::placeholder {\n  font-family: \"Kalam\", cursive;\n}\n\nh2 {\n  font-size: 40px;\n  letter-spacing: 2px;\n  margin-top: 20px;\n  font-family: \"Eczar\", serif;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: -20px;\n}\n\n.nav-link, .all, .filter-save {\n  margin-right: 55px;\n  font-size: 20px;\n  color: black;\n  line-height: 35px;\n  text-decoration: none;\n  border-bottom: 4px solid orange;\n  text-transform: capitalize;\n  font-family: \"Eczar\", serif;\n}\n\n.nav-link:hover, .all:hover, .filter-save:hover {\n  color: white;\n  background-color: black;\n}\n\n.saved-recipes-button {\n  border-bottom: 4px solid navy;\n}\n\n.image-styling {\n  margin-top: 20px;\n  height: 150px;\n  width: 300px;\n}\n\n.recipe-container {\n  display: flex;\n  font: bolder;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding-top: 20px;\n  font-family: \"Eczar\", serif;\n  font-size: 20px;\n}\n\nimg {\n  border: 3px black solid;\n}\n\nbutton {\n  font-family: \"Eczar\", serif;\n  font-size: 20px;\n  width: 500px;\n  border: 3px black solid;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.instructions-list {\n  justify-content: flex-start;\n}\n\n.save-and-close-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.save-and-close-button {\n  background-color: navy;\n  color: white;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n  border-radius: 20px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,kBAAA;AACF;;AAEA;EACE,2BAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,4BAAA;EACA,kBAAA;AAAF;;AAGA;EACE,6BAAA;AAAF;;AAGA;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,2BAAA;EACA,gBAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,iBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,+BAAA;EACA,0BAAA;EACA,2BAAA;AAAF;;AAGA;EACE,YAAA;EACA,uBAAA;AAAF;;AAGA;EACE,6BAAA;AAAF;;AAGA;EACE,gBAAA;EACA,aAAA;EACA,YAAA;AAAF;;AAGA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;AAAF;;AAGA;EACE,uBAAA;AAAF;;AAGA;EACE,2BAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,2BAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;AAAF;;AAGA;EACE,sBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AAAF","sourcesContent":["* {\n  background-color: #E7F1F1; \n  margin: 10px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.filter-save {\n  width: 200px;\n  text-align: center;\n}\n\nh1 {\n  font-family: 'Eczar', serif;\n  font-weight: 700;\n  font-size: 60px;\n  letter-spacing: 2px;\n  margin-top: -10px;\n  margin-bottom: 0px;\n \n}\n\nh2 {\n  margin-bottom: 40px;\n}\n\ninput {\n  height: 40px;\n  width: 400px;\n  border-radius: 10px;\n  background-color: white;\n  font-size: 20px;\n  font-family: 'Radley', serif;\n  text-align: center;\n}\n\ninput::placeholder { \n  font-family: 'Kalam', cursive;\n}\n\nh2 {\n  font-size: 40px;\n  letter-spacing: 2px;\n  margin-top: 20px;\n  font-family: 'Eczar', serif;\n  font-weight: 400;\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: -20px;\n}\n\n.nav-link, .all, .filter-save {\n  margin-right: 55px;\n  font-size: 20px;\n  color: black;\n  line-height: 35px;\n  text-decoration: none;\n  border-bottom: 4px solid orange;\n  text-transform: capitalize;\n  font-family: 'Eczar', serif;\n}\n\n.nav-link:hover, .all:hover, .filter-save:hover {\n  color: white;\n  background-color: black;\n}\n\n.saved-recipes-button {\n  border-bottom: 4px solid navy;\n}\n\n.image-styling {\n  margin-top: 20px;\n  height: 150px;\n  width: 300px;\n}\n\n.recipe-container {\n  display: flex;\n  font:bolder;\n  flex-direction: column;\n  align-items: center; \n  justify-content: center; \n  text-align: center;\n  padding-top: 20px;\n  font-family: 'Eczar', serif;\n  font-size: 20px;\n}\n\nimg {\n  border: 3px black solid;\n}\n\nbutton {\n  font-family: 'Eczar', serif;\n  font-size: 20px;\n  width: 500px;\n  border: 3px black solid;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.instructions-list {\n  justify-content: flex-start;\n}\n\n.save-and-close-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.save-and-close-button {\n  background-color: navy;\n  color: white;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n  border-radius: 20px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchIngredients: () => (/* binding */ fetchIngredients),
/* harmony export */   fetchRecipes: () => (/* binding */ fetchRecipes),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
// Your fetch requests will live here!


const fetchUsers = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then(data => {
      return fn(data.users);
    });
};


const fetchRecipes = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(response => response.json())
    .then(data => {
      return fn(data.recipes);
    });
};

const fetchIngredients = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
    .then(response => response.json())
    .then(data => {
      return fn(data.ingredients);
    });
};





  





/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRandomIndex: () => (/* binding */ createRandomIndex),
/* harmony export */   displayPopUp: () => (/* binding */ displayPopUp),
/* harmony export */   displayRecipes: () => (/* binding */ displayRecipes),
/* harmony export */   renderRecipes: () => (/* binding */ renderRecipes)
/* harmony export */ });
/* harmony import */ var _test_untestedFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
//NOTE: Your DOM manipulation will occur in this file



const recipesContainer = document.querySelector('.recipe-container');


const renderRecipes = (recipeData) => {

  recipesContainer.innerHTML = '';
  recipeData.forEach((recipe) => 
    recipesContainer.innerHTML += `
    <button class="recipe-card"id="${recipe.id}">
      <p class ="recipe-name">${recipe.name}</p>
      <img class="image-styling" src="${recipe.image}">
      </button>
    `
  )
  if(recipeData.length === 0) {
    recipesContainer.innerHTML = `<p>No saved recipes yet!</p>`
  }
}

const saveRecipe = (recipe, user) => {
  const saveRecipeButton = document.querySelector('.save-recipe-button')
    if (!user.recipesToCook.includes(recipe)){
      user.recipesToCook.push(recipe)
      saveRecipeButton.innerText = "Saved!"
      saveRecipeButton.style.backgroundColor = 'green';
    } else {
      let recipeIndex = user.recipesToCook.indexOf(recipe);
      user.recipesToCook.splice(recipeIndex, 1);
      saveRecipeButton.innerText = "Unsaved!"
      saveRecipeButton.style.backgroundColor = 'red';};
}

const createRandomIndex = (array) => { //REFACTOR: Move to untestedFunc or scripts
  return Math.floor(Math.random() * array.length);
}

const displayRecipes = (event, recipeData, searchField) => {
  recipesContainer.innerHTML = '';
  const filteredRecipes = recipeData.filter(recipe => recipe.name === searchField.value);
  if (event.key === 'Enter') {
    filteredRecipes.map(recipe => {
      recipesContainer.innerHTML += `
        <button class="recipe-card"id="${recipe.id}">
          <p class="recipe-name">${recipe.name}</p>
          <img class="image-styling" src="${recipe.image}">
        </button>
      `;
    });
  if (filteredRecipes.length === 0) {
    recipesContainer.innerHTML = `<p>No search results!</p>`
  }
    return filteredRecipes;
  }
};

const findRecipeById = (recipeData, id) => {
  const matchingRecipe = recipeData.find(recipe => recipe.id == id);
  return matchingRecipe || 'oops'

};



const displayPopUp = (recipeData, ingredientInfo, recipeId, user) => {
  let recipeMatch = findRecipeById(recipeData, recipeId)
  let recipeIngredientNames = (0,_test_untestedFunctions_js__WEBPACK_IMPORTED_MODULE_0__.findRecipeIngredients)(recipeData, ingredientInfo, recipeId);
  let recipeCost = (0,_test_untestedFunctions_js__WEBPACK_IMPORTED_MODULE_0__.calculateCost)(recipeData, ingredientInfo, recipeId);
  let ingredientsDivs = recipeIngredientNames.map(ingredient => {
    return `<p>${ingredient}</p>`
  });
  let ingredientsString = ingredientsDivs.join("");
  let recipeInstructions = recipeMatch.instructions
  let instructionsDivs = recipeInstructions.map(step => {
    return `<p>${step.number}. ${step.instruction}</p>`
  });
  let instructionsList = instructionsDivs.join("");
  recipesContainer.innerHTML =
`
    <div class="popup-overlay">
      <div class="popup-content">
        <h2>${recipeMatch.name}</h2>
        <img src="${recipeMatch.image}" alt="${recipeMatch.name}">
        <h3>Ingredients:</h3>
        <div class="ingredients-list">${ingredientsString}</div>
        <h3>Instructions:</h3>
        <div class="instructions-list">${instructionsList}</div>
        <h3>Total Cost:</h3>
        <p>${recipeCost}</p>
        <div class="save-and-close-button-container">
          <button class="save-and-close-button" id="closePopup">Close</button>
          <button class="save-and-close-button save-recipe-button" id="saveRecipe">Save</button>
        </div>
      </div>
    </div>
  `
  const closeButton = document.querySelector('#closePopup');
  closeButton.addEventListener('click', () => {
    renderRecipes(recipeData); //REFACTOR; CHECK: SCRIPTS (82.1)
  });
 
  const saveRecipeButton = document.querySelector('.save-recipe-button');
  if (user.recipesToCook.includes(recipeMatch)){
    saveRecipeButton.innerText = "Saved!"
    saveRecipeButton.style.backgroundColor = 'green';
  }
  saveRecipeButton.addEventListener('click', () => {
    saveRecipe(recipeMatch, user);
})
}




/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateCost: () => (/* binding */ calculateCost),
/* harmony export */   findDirections: () => (/* binding */ findDirections),
/* harmony export */   findRecipeByName: () => (/* binding */ findRecipeByName),
/* harmony export */   findRecipeByTag: () => (/* binding */ findRecipeByTag),
/* harmony export */   findRecipeIngredients: () => (/* binding */ findRecipeIngredients),
/* harmony export */   specificRecipe: () => (/* binding */ specificRecipe)
/* harmony export */ });
// import from testData.js
// export to recipeRepositories

// const { recipeData, ingredientsData } = require("./testData")
// import './testData'
// Return a filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)

const findRecipeByTag = (recipeList, tag) => {
  let recipeByTag = recipeList.filter(recipe => {
    return recipe["tags"].includes(tag)
  })
  return recipeByTag
}

// Return a filtered list of recipes based on a recipe name. (Extension option: filtering by name or ingredients)

const findRecipeByName = (recipeData, name) => {
  let recipeByName = recipeData.filter(recipe => {
    return recipe["name"] === name
  })
  return recipeByName
}

// Determine the names of ingredients needed for a given recipe.

const findRecipeIngredients = (recipeData, ingredientsData, id) => {
  let givenRecipe = recipeData.find(recipe => {
    return recipe["id"] == id
  })

  let ingredientIds = givenRecipe["ingredients"].map(ingredient => {
    return ingredient["id"]
  })

  let recipeIngredients = ingredientsData.filter(ingredient => {
    return ingredientIds.includes(ingredient["id"])
  })

  return recipeIngredients.map(ingredient => {
    let ingredientNames = ingredient["name"]
    return ingredientNames
  } )
}

// Return a specific recipe based on the id number

const specificRecipe = () => {
  return recipeData.find(recipe => recipe.id === clickedId)
}

const calculateCost = (recipeData, ingredientsData, clickedId) => {
  const clickedRecipe = recipeData.find(recipe => recipe.id == clickedId);
  let reducedIngredients = clickedRecipe.ingredients.reduce((accumulator, currentValue) => {
    let ingredientPrice = ingredientsData.find(ingredientDetail => ingredientDetail.id === currentValue.id);
    accumulator += ingredientPrice.estimatedCostInCents * currentValue.quantity.amount;
    return accumulator;
  }, 0);
  const costInDollars = (reducedIngredients / 100).toFixed(2); // Convert to dollars with 2 decimal places
  return `$${costInDollars}`;
};

const findDirections = (recipeData, recipeName) => {
  let chosenRecipe = recipeData.find(recipe => {
    return recipeName === recipe.name
  })
    return chosenRecipe.instructions
}



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _test_untestedFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
//NOTE: Data model and non-dom manipulating logic will live in this file.






// Example of one way to import functions from the domUpdates file. You will delete these examples.



// query selectors

const searchField = document.querySelector('.search-field')
const allButton = document.querySelector('.all')
const navLinks = document.querySelectorAll('.nav-link');
const savedRecipes = document.querySelector('#savedRecipes');
const allRecipes = document.querySelector('#allRecipes')

  //variables
  let randomUser;
  let recipesData;
  let ingredientsData


  
  const getRandomUser = (array) => {
      let randomIndex = (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.createRandomIndex)(array);
      randomUser = array[randomIndex]
    return randomUser;
  };

  const getRecipeData = (array) => {
    recipesData = array;
    return recipesData
  }

  const getIngredientData = (array) => {
    ingredientsData = array;
    return ingredientsData
  }

const attachRecipeCardClickListener = event => {
  const recipeCard = event.target.closest('.recipe-card');
  if (recipeCard) {
    event.preventDefault();
    const recipeId = recipeCard.getAttribute('id');
  
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)(recipesData, ingredientsData, recipeId, randomUser);
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const recipesContainer = document.querySelector('.recipe-container');
  recipesContainer.addEventListener('click', attachRecipeCardClickListener);
  recipesContainer.addEventListener('mouseover', event => {
    const hoveredRecipeCard = event.target.closest('.recipe-card');
    if (hoveredRecipeCard) {
      hoveredRecipeCard.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.6)';
    }
  });
  recipesContainer.addEventListener('mouseout', event => {
    const hoveredRecipeCard = event.target.closest('.recipe-card');
    if (hoveredRecipeCard) {
      hoveredRecipeCard.style.boxShadow = ''; 
    }
  });
  recipesContainer.addEventListener('mousedown', event => {
    const hoveredRecipeCard = event.target.closest('.recipe-card');
    if (hoveredRecipeCard) {
      hoveredRecipeCard.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.9)'; 
    }
  });
});

const filterByTag = (recipeData, clickedId) => {
  let filteredRecipes = (0,_test_untestedFunctions_js__WEBPACK_IMPORTED_MODULE_3__.findRecipeByTag)(recipeData, clickedId);
  (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(filteredRecipes)
}

window.addEventListener('load', function() {
  ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)(getRandomUser);
  (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchRecipes)(getRecipeData)
    .then(() => {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(recipesData);})
  ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchIngredients)(getIngredientData)
});


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(recipesData, linkId)
  });
});


searchField.addEventListener('keypress', function(event) {
  (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.displayRecipes)(event, recipesData, searchField);
  
});

allButton.addEventListener('click', function() {
  (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(recipesData);
});

allRecipes.addEventListener('click', function() {
  
  (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(recipesData);
  allButton.style.borderBottom = '4px solid orange';
  allButton.addEventListener('click', function() {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(recipesData);
  });
  navLinks.forEach(link => {
    link.style.borderBottom = '4px solid orange';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(recipesData, linkId);
    });
  });
  searchField.addEventListener('keypress', function(event) {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.displayRecipes)(event, recipesData, searchField);
    
  });
})


savedRecipes.addEventListener('click', function() {
  let userRecipesToCook = randomUser.recipesToCook;
  (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(userRecipesToCook);
  allButton.style.borderBottom = '4px solid navy';
  allButton.addEventListener('click', function() {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.renderRecipes)(userRecipesToCook);
  });
  navLinks.forEach(link => {
    link.style.borderBottom = '4px solid navy';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(userRecipesToCook, linkId);
    });
  });
  searchField.addEventListener('keypress', function(event) {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_2__.displayRecipes)(event, userRecipesToCook, searchField);  
  });
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map