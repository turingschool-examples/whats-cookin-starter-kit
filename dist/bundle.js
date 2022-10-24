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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #EDCFA9;\n}\n\n.main-header {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: space-around;\n  height: 10vh;\n  width: 100%;\n}\n\n#searchBar {\n  height: 5vh;\n  width: 20vw;\n  border-radius: 5px;\n  margin-top: 13px;\n}\n\n.view-all-recipes {\n  height: 5vh;\n  width: 20vw;\n  border-radius: 5px;\n  margin-top: 13px;\n  cursor: pointer;\n}\n\n.login-button {\n  height: 5vh;\n  width: 10vw;\n  border-radius: 5px;\n  margin-top: 13px;\n  cursor: pointer;\n}\n\n.main-center-boxes {\n  background-color: #EDCFA9;\n  display: flex;\n  height: 75vh;\n  width: 100%;\n}\n\n.main-left-side {\n  background-color: #EDCFA9;\n  display: flex;\n  height: 75vh;\n  width: 70%;\n  flex-wrap: wrap;\n}\n\n.left-side-first-recipe {\n  background-color: #E89F71;\n  height: 30vh;\n  width: 100%;\n  display: flex;\n}\n\n.left-side-featured-recipe-box {\n  background-color: #EDCFA9;\n  display: flex;\n  height: 30vh;\n  width: 50%;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 1.5vh;\n}\n\n.current-recipe-image {\n  height: 30vh;\n  width: 50%;\n  display: flex;\n}\n\n.left-side-recipe-name {\n  font-size: 3vh;\n}\n\n.current-recipe-ingredients {\n  font-size: 2.5vh;\n}\n\np {\n  font-size: 2vh;\n}\n\n.current-recipe-name {\n  font-size: 2vh;\n}\n\n.left-main-bottom-three-images {\n  display: flex;\n}\n\n.three-img-botttom-left {\n  display: flex;\n}\n\n.main-right-saved-section {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5vh;\n}\n\n.main-right-side-title {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 4vh;\n  width: 20vw;\n  margin-top: 2vh;\n}\n\n.main-right-side-first-box {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 4.5vh;\n  border-style: solid;\n}\n\n.main-right-side-second-box {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 3vh;\n  border-style: solid;\n}\n\n.main-right-side-third-box {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 3vh;\n  border-style: solid;\n}\n\n.main-right-side-fourth-box {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  border-style: solid;\n}\n\n.main-footer {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: space-around;\n  border-style: solid;\n}\n\n.subscribe-title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.contact-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.connect-with-us {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.all-the-connect-buttons {\n  display: flex;\n  flex-direction: row;\n}\n\n.facebook-button {\n  height: 5vh;\n  width: 5vw;\n  border-radius: 120px;\n  display: flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.twitter-button {\n  height: 5vh;\n  width: 5vw;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.instagram-button {\n  height: 5vh;\n  width: 5vw;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.youtube-button {\n  height: 5vh;\n  width: 5vw;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.learn-more-title {\n  display: flex;\n  justify-content: center;\n}\n\n.all-the-learn-more-links {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-us-button {\n  cursor: pointer;\n}\n\n.about-us-button {\n  cursor: pointer;\n}\n\n.privacy-policy {\n  cursor: pointer;\n}\n\n.three-images-bottom-left-main {\n  background-color: #EDCFA9;\n  height: 25vh;\n  width: 65vw;\n  margin-top: 10px;\n  /* margin-right: 10vw; */\n  display: flex;\n  justify-content: space-around;\n}\n\n.left-random-card {\n  background-color: #E89F71;\n  height: 25vh;\n  width: 15vw;\n  border-style: solid;\n}\n\n.middle-random-card {\n  background-color: #E89F71;\n  height: 25vh;\n  width: 15vw;\n  border-style: solid;\n}\n\n.right-random-card {\n  background-color: #E89F71;\n  height: 25vh;\n  width: 15vw;\n  border-style: solid;\n}\n\n.image-left-header {\n  height: 8vh;\n  width: 15vw;\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: cover;\n}\n\n.image-middle-header {\n  height: 8vh;\n  width: 15vw;\n  background-image: url(\"https://spoonacular.com/recipeImages/678353-556x370.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: cover;\n}\n\n.image-right-header {\n  height: 8vh;\n  width: 15vw;\n  background-image: url(\"https://spoonacular.com/recipeImages/412309-556x370.jpeg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: cover;\n}\n\n.ingredients-for-left-header {\n  margin-top: 5px;\n}\n\n.ingredients-for-middle-header {\n  margin-top: 5px;\n}\n\n.ingredients-for-right-header {\n  margin-top: 5px;\n}\n\n.main-right-side-first-header {\n  border-style: solid;\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;AACF;;AAEA;EACE,yBAAA;EACA,aAAA;EACA,6BAAA;EACA,YAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AACF;;AACA;EACE,yBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;AAEF;;AAEA;EACE,yBAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;AACF;;AAGA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;AAAF;;AAEA;EACE,yBAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;EACA,2BAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AACF;;AACA;EACE,YAAA;EACA,UAAA;EACA,aAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AAAA;EACE,aAAA;AAGF;;AADA;EACE,aAAA;AAIF;;AADA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AAIF;;AADA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;AAIF;;AADA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;AAIF;;AAFA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AAKF;;AADA;EACE,yBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AAIF;;AADA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;AAIF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;AAGF;;AAAA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;AAGF;;AAAA;EACE,aAAA;EACA,mBAAA;AAGF;;AACA;EACE,WAAA;EACA,UAAA;EACA,oBAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAEF;;AACA;EACE,WAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAEF;;AACA;EACE,WAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAEF;;AACA;EACE,WAAA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAEF;;AACA;EACE,aAAA;EACA,uBAAA;AAEF;;AACA;EACE,aAAA;EACA,sBAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,wBAAA;EACA,aAAA;EACA,6BAAA;AAEF;;AACA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,WAAA;EACA,WAAA;EACA,gFAAA;EACA,2BAAA;EACA,4BAAA;EACA,kBAAA;EACA,sBAAA;AAEF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,gFAAA;EACA,2BAAA;EACA,4BAAA;EACA,kBAAA;EACA,sBAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,iFAAA;EACA,2BAAA;EACA,4BAAA;EACA,kBAAA;EACA,sBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,mBAAA;EACA,aAAA;AAAF;;AAGA;EACE,aAAA;AAAF","sourcesContent":["body {\n  background-color: #EDCFA9;\n}\n\n.main-header {\n  background-color: #E89F71;\n  display: flex;\n  justify-content: space-around;\n  height: 10vh;\n  width: 100%;\n}\n\n#searchBar{\n  height: 5vh;\n  width: 20vw;\n  border-radius: 5px;\n  margin-top: 13px;\n}\n\n.view-all-recipes{\n  height: 5vh;\n  width: 20vw;\n  border-radius: 5px;\n  margin-top: 13px;\n  cursor: pointer;\n}\n\n.login-button{\n  height: 5vh;\n  width: 10vw;\n  border-radius: 5px;\n  margin-top: 13px;\n  cursor: pointer;\n}\n.main-center-boxes{\n  background-color: #EDCFA9;\n  display: flex;\n  height: 75vh;\n  width: 100%;\n\n}\n\n.main-left-side{\n  background-color: #EDCFA9;\n  display: flex;\n  height: 75vh;\n  width: 70%;\n  flex-wrap: wrap;\n}\n\n\n.left-side-first-recipe{\n  background-color: #E89F71;\n  height: 30vh;\n  width: 100%;\n  display: flex;\n}\n.left-side-featured-recipe-box{\n  background-color: #EDCFA9;\n  display: flex;\n  height: 30vh;\n  width: 50%;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 1.5vh;\n}\n.current-recipe-image{\n  height: 30vh;\n  width: 50%;\n  display: flex;\n}\n\n.left-side-recipe-name{\n  font-size: 3vh;\n}\n\n.current-recipe-ingredients{\n  font-size: 2.5vh;\n}\n\np{\n  font-size: 2vh;\n}\n\n.current-recipe-name{\n  font-size: 2vh;\n}\n.left-main-bottom-three-images{\n  display: flex;\n}\n.three-img-botttom-left{\n  display: flex;\n}\n\n.main-right-saved-section{\n  display: flex;\n  flex-direction: column;\n  margin-left: 5vh;\n}\n\n.main-right-side-title{\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 4vh;\n  width: 20vw;\n  margin-top: 2vh;\n}\n\n.main-right-side-first-box{\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 4.5vh;\n  border-style: solid;\n}\n.main-right-side-second-box{\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 3vh;\n  border-style: solid;\n}\n\n.main-right-side-third-box{\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 3vh;\n  border-style: solid;\n}\n\n.main-right-side-fourth-box{\n  background-color: #E89F71;\n  display: flex;\n  justify-content: center;\n  height: 15vh;\n  width: 20vw;\n  margin-top: 3vh;\n  margin-bottom: 2vh;\n  border-style: solid;\n}\n\n\n.main-footer{\n  background-color: #E89F71;\n  display: flex;\n  justify-content: space-around;\n  border-style: solid;\n}\n\n.subscribe-title{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n\n}\n\n.contact-information{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.connect-with-us{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.all-the-connect-buttons{\n  display: flex;\n  flex-direction: row;\n  \n}\n\n.facebook-button{\n  height: 5vh;\n  width: 5vw;\n  border-radius: 120px;\n  display: flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.twitter-button{\n  height: 5vh;\n  width: 5vw;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.instagram-button{\n  height: 5vh;\n  width: 5vw;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.youtube-button{\n  height: 5vh;\n  width: 5vw;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.learn-more-title{\n  display: flex;\n  justify-content: center;\n}\n\n.all-the-learn-more-links{\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-us-button{\n  cursor: pointer;\n}\n\n.about-us-button{\n  cursor: pointer;\n}\n\n.privacy-policy{\n  cursor: pointer;\n}\n\n.three-images-bottom-left-main{\n  background-color: #EDCFA9;\n  height: 25vh;\n  width: 65vw;\n  margin-top: 10px;\n  /* margin-right: 10vw; */\n  display: flex;\n  justify-content: space-around;\n}\n\n.left-random-card{\n  background-color: #E89F71;\n  height: 25vh;\n  width: 15vw;\n  border-style: solid;\n}\n\n.middle-random-card{\n  background-color: #E89F71;\n  height: 25vh;\n  width: 15vw;\n  border-style: solid;\n}\n\n.right-random-card{\n  background-color: #E89F71;\n  height: 25vh;\n  width: 15vw;\n  border-style: solid;\n}\n\n.image-left-header{\n  height: 8vh;\n  width: 15vw;\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: cover;\n  \n}\n\n.image-middle-header{\n  height: 8vh;\n  width: 15vw;\n  background-image: url(\"https://spoonacular.com/recipeImages/678353-556x370.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: cover;\n}\n\n.image-right-header{\n  height: 8vh;\n  width: 15vw;\n  background-image: url(\"https://spoonacular.com/recipeImages/412309-556x370.jpeg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: cover;\n}\n\n.ingredients-for-left-header{\n  margin-top: 5px;\n  \n}\n\n.ingredients-for-middle-header{\n  margin-top: 5px;\n}\n\n.ingredients-for-right-header{\n  margin-top: 5px;\n}\n\n.main-right-side-first-header{\n  border-style: solid;\n  display: flex;\n}\n\n.hidden {\n  display:none\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchApiUrl = (path) => {
    return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${path}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(`${path} API Error!`));
  };
  
  
  const fetchData = () => {
    return Promise.all([
      fetchApiUrl("ingredients"),
      fetchApiUrl("recipes"),
      fetchApiUrl("users"),
    ]);
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ fetchData });


// const fetchApiUrl = (path) => {
//     return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${path}`)
//         .then(response => response.json())
//         .then(data => data)
//         .catch(error => console.log(`${path} API Error! ${error}`))
// }

// const fetchData = () => {
//     return Promise.all([
//         fetchApiUrl("ingredients"),
//         fetchApiUrl("recipes"),
//         fetchApiUrl("users"),
//     ])
//         .then((data) => {
//             console.log('data', data)
//             return {
//                 ingredientsData: data[0].ingredientsData,
//                 recipeData: data[1].recipeData,
//                 usersData: data[2].usersData
//             }
//         })
// }


// export default { fetchData }

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import Ingredients from '../classes/Ingredients'

class Recipe {
    constructor(data,recipe) {
        this.data = data
        this.modifiedData = this.combinedIngredients()
        this.id = recipe.id;
        this.image = recipe.image;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.modifiedIngredients = this.ingredientsNeeded()
    }

    combinedIngredients() {
        let ingredientsNeededInfo = [];
        this.data.forEach((ingredient) => {
            var info = this.data.find( ing => ingredient.id === ing.id)
            ingredientsNeededInfo.push({...info,...ingredient})
        })
        return ingredientsNeededInfo
    }

    ingredientsNeeded() {
        let ingredientsNeeded = [];
        this.modifiedIngredients.forEach((ingredient) => {
                ingredientsNeeded.push(ingredient.name)
        })       
        return ingredientsNeeded
    }

    getIngredientsCost() {
        var totalIngredientCost = this.modifiedIngredients.reduce(function(acc,item){
            let ingredientCost = item.estimatedCostInCents * item.quantity.amount
            return acc + ingredientCost
        }, 0)
       return totalIngredientCost
    }

    getInstructions() {
        return this.instructions
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipe);

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_Recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


class RecipeRepository {
  constructor(data) {
    this.data = data
    this.recipesList = this.createRecipesClassArray()
    
  }

  createRecipesClassArray() {
    let recipesClassArray = []
    this.data.forEach((recipe) => {
      let modifiedRecipeClass = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_0__["default"](recipe)
      recipesClassArray.push(modifiedRecipeClass)
    })
    return recipesClassArray
  }
  
  filterByTag(tag) {
    let tagFilterResults = this.recipesList.filter(recipe => recipe.tags.includes(tag))
    return tagFilterResults
  }

  filterByName(name) {
    let nameFilterResults = this.recipesList.filter(recipe => recipe.name.includes(name))
    return nameFilterResults
  }



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipeRepository);


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
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _src_classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);

//Imports


// An example of how you tell webpack to use an image (also need to link to it in the index.html)



// import Ingredients from '../src/classes/Ingredients';

// import recipeData from '../src/data/recipes';

//QuerySelector
const currentRecipeName = document.querySelector(".current-recipe-name")
const currentRecipeImage = document.querySelector(".image-parent-main")
const leftRandomImageCard = document.querySelector(".left-random-card")
const middleRandomImageCard = document.querySelector(".middle-random-card")
const rightRandomImageCard = document.querySelector(".right-random-card")
const tagSearchResults = document.querySelector(".tag-search-results")
const nameSearchResults = document.querySelector(".name-search-results")

const viewAllRecipesButton = document.querySelector(".view-all-recipes")
const homeButton = document.querySelector(".home-button")
const searchButton = document.querySelector(".submit-search-button")
const searchInput = document.querySelector("#searchBar")

const allRecipesView = document.querySelector(".all-recipes-view")
const homeView = document.querySelector(".home-view")
const selectedRecipeView = document.querySelector(".selected-recipe-view")
const searchedRecipeView = document.querySelector(".searched-recipe-view")

//Instances
let currentRecipe
let randomRecipes
let allRecipes
let selectedRecipe
let ingredientsData
let recipeData
let usersData


//Functions

const fetchApiCalls = () => {
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].fetchData().then(data => {
      //
      ingredientsData = data[0].ingredientsData;
      recipeData = data[1].recipeData;
      usersData = data[2].usersData;
    //   let id;
  
    //   if (userID === "load") {
    //     id = getRandomIndex(userData);
    //   } else {
    //     id = userID;
    //   }
  
    //   userRepo = new UserRepository(userData);
    //   user = new User(userRepo.findUsersData(id));
    //   hydration = new Hydration(user.id, hydrationData);
    //   sleep = new Sleep(user.id, sleepData);
      
      loadHandler();
    });
  };

// function getApiData() {
//     fetchData.fetchData()
//     .then(data => {
//         console.log('data', data)
//         apiReturnData = data
//         console.log('apiReturn', apiReturnData)
//     })
//     loadHandler()
// }

const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length + 1);
};

function hideElement (hideThis) {
    hideThis.classList.add("hidden")
}

function showElement (showThis) {
    showThis.classList.remove("hidden")
}

function loadHandler(){
    onLoadRecipe()
    generateRandomRecipes()
    generateAllRecipes()
    console.log("ingredients api data", ingredientsData)
}

function clickHandler(){
    
}

function generateAllRecipes () {
    allRecipes = new _src_classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_4__["default"](ingredientsData,recipeData)
}

function onLoadRecipe(){
    currentRecipe = new _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_3__["default"](ingredientsData, recipeData[getRandomIndex(recipeData)])
    showMainRecipe()
}

function generateRandomRecipes(){
    randomRecipes = []
    let randomRecipe1 = new _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_3__["default"](ingredientsData, recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe1)
    let randomRecipe2 = new _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_3__["default"](ingredientsData, recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe2)
    let randomRecipe3 = new _src_classes_Recipe__WEBPACK_IMPORTED_MODULE_3__["default"](ingredientsData, recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe3)

    showMainRandomRecipes()
}

function showMainRecipe(){
    currentRecipeName.innerHTML = `${currentRecipe.name}`
    currentRecipeImage.innerHTML = `<img class="current-recipe-image" id="${currentRecipe.id}" img
    src=${currentRecipe.image}>`
}

function showMainRandomRecipes(){
    leftRandomImageCard.innerHTML = `<img class="left-random-image" id="${randomRecipes[0].id}" img src=${randomRecipes[0].image}>
    <h1 class="left-random-name">${randomRecipes[0].name}</h1>`
    middleRandomImageCard.innerHTML = `<img class="middle-random-image" id="${randomRecipes[1].id}" img src=${randomRecipes[1].image}>
    <h1 class="middle-random-name">${randomRecipes[1].name}</h1>`
    rightRandomImageCard.innerHTML = `<img class="right-random-image" id="${randomRecipes[2].id}" img src=${randomRecipes[2].image}>
    <h1 class="right-random-name">${randomRecipes[2].name}</h1>`
}

function viewSelectedRecipe () {
    hideElement(homeView)
    hideElement(searchedRecipeView)
    hideElement(allRecipesView)
    showElement(selectedRecipeView)
    showElement(homeButton)
    showElement(viewAllRecipesButton)
    showSelectedRecipe()
}

function showSelectedRecipe() {
    selectedRecipeView.innerHTML = `
    <section class="selected-recipe-container">
    <img class="selected-recipe-image" img src=${selectedRecipe.image}>
    <h1 class="name">${selectedRecipe.name}</h1>
    <h2 class="cost">Cost: ${selectedRecipe.getIngredientsCost()} cent</h2>
    <h3 class="ingredients-list"> Ingredients </h3>
    <h4 class="instructions-list"> Instructions </h4>
    </section>`
    showInstructions()
    showIngredients()
}

function showIngredients() {
    const selectedRecipeIngredients = document.querySelector(".ingredients-list")

    selectedRecipe.ingredients.modifiedData.forEach(element =>
        selectedRecipeIngredients.innerHTML += 
        `<h3 class="ingredient-item">${element.quantity.amount} ${element.quantity.unit} ${element.name} <br></h3>`
    )
}

function showInstructions() {
    const selectedRecipeInstructions = document.querySelector(".instructions-list")

    selectedRecipe.instructions.forEach(element =>
        selectedRecipeInstructions.innerHTML += 
        `<h3 class="instruction-item"> Step: ${element.number} <br>${element.instruction}</h3>`
    )
}

function viewSearchedRecipes() {
    nameSearchResults.innerHTML = ""
    tagSearchResults.innerHTML = ""
    let searchTerm = searchInput.value 
    let tagResults = []
    let nameResults = []
    tagResults = allRecipes.filterByTag(searchTerm)
    nameResults = allRecipes.filterByName(searchTerm)
    if (nameResults.length === 0 && tagResults.length === 0) {
        tagSearchResults.innerHTML = `<h1>There are no results for your search, please try a different search</h1>`
    }
    nameResults.forEach(element => 
        nameSearchResults.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`)
    tagResults.forEach(element => 
        tagSearchResults.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`)
    hideElement(selectedRecipeView)
    hideElement(homeView)
    showElement(searchedRecipeView)
    showElement(homeButton)
}

function viewAllRecipes () {
    allRecipes.recipesList.forEach(element => 
        allRecipesView.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`
    )
    hideElement(viewAllRecipesButton)
    hideElement(homeView)
    hideElement(selectedRecipeView)
    showElement(allRecipesView)
    showElement(homeButton)
}

function viewHome () {
    showElement(homeView)
    showElement(viewAllRecipesButton)
    hideElement(homeButton)
    hideElement(allRecipesView)
    hideElement(selectedRecipeView)
}

//EventListener
window.addEventListener("load", fetchApiCalls())
homeButton.addEventListener("click", function(event) {
    event.preventDefault()
    viewHome()
})

viewAllRecipesButton.addEventListener("click", function (event){
    event.preventDefault()
    viewAllRecipes()
})

allRecipesView.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

searchedRecipeView.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

currentRecipeImage.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

leftRandomImageCard.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

middleRandomImageCard.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

rightRandomImageCard.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

searchButton.addEventListener("click", function(event){
    event.preventDefault()
    viewSearchedRecipes()
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map