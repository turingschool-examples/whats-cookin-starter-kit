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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_bitter_v33_latin_latin_ext_regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _fonts_bitter_v33_latin_latin_ext_italic_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _fonts_bitter_v33_latin_latin_ext_700_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _fonts_bitter_v33_latin_latin_ext_700italic_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _images_close_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_bitter_v33_latin_latin_ext_regular_woff2__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_bitter_v33_latin_latin_ext_italic_woff2__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_bitter_v33_latin_latin_ext_700_woff2__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_bitter_v33_latin_latin_ext_700italic_woff2__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_close_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* fonts */\n/* bitter-regular - latin_latin-ext */\n@font-face {\n  font-display: swap;\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Bitter\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* bitter-italic - latin_latin-ext */\n@font-face {\n  font-display: swap;\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Bitter\";\n  font-style: italic;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* bitter-700 - latin_latin-ext */\n@font-face {\n  font-display: swap;\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Bitter\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* bitter-700italic - latin_latin-ext */\n@font-face {\n  font-display: swap;\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Bitter\";\n  font-style: italic;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* andy bell's reset */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1,\nh2,\nh3,\nh4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/* end andy bell's reset */\n/* variables */\n:root {\n  --fs-h1: 4.2rem;\n  --fs-h2: 3.15rem;\n  --fs-h3: 2rem;\n  --fs-h4: 1.35rem;\n  --fs-text: 1.15rem;\n  --fs-small: 0.875rem;\n  --clr-white: hsl(0, 0%, 100%);\n  --clr-light: hsl(36, 45%, 98%);\n  --clr-primary: hsl(35, 100%, 82%);\n  --clr-text: hsl(29, 73%, 16%);\n  --clr-accent: hsl(19, 100%, 52%);\n  --col-width: 16rem;\n  --col-width: clamp(15rem, 16.667vw + 11.667rem, 20rem);\n  --transition: ease all .3s;\n}\n\n/* utilities */\n* {\n  margin: 0;\n  padding: 0;\n  /* outline: 1px solid tomato; */\n}\n\n*:focus-visible,\ninput[type=radio]:focus-visible + label {\n  outline: 3px dotted var(--clr-accent);\n  outline-offset: 3px;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n/* layout */\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  color: var(--clr-text);\n  background-color: var(--clr-light);\n}\n\nheader {\n  background-color: var(--clr-primary);\n}\n\n.hero {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  row-gap: 2em;\n}\n\n.hero > img {\n  width: min(100%, 20rem);\n  background-color: var(--clr-light);\n  border-radius: 16px;\n}\n\nfooter {\n  margin-top: 2rem;\n  padding: 2.5rem 0 1rem;\n  text-align: center;\n  border-top: 1px solid var(--clr-primary);\n}\n\n.wrapper {\n  width: min(100%, 72rem);\n  margin: 0 auto;\n  padding: 3vh clamp(1rem, 5vw, 3rem);\n}\n\n/* typography */\nh1,\nh2,\nh3,\nh4,\n.h1,\n.h2,\n.h3,\n.h4 {\n  font-family: \"Bitter\", serif;\n  line-height: 1.15;\n}\n\nh2,\nh3,\n.h2,\n.h3 {\n  margin-bottom: 1em;\n  font-weight: 400;\n}\n\nh1, .h1 {\n  font-size: var(--fs-h1);\n  font-size: clamp(3rem, 2.217vw + 2.426rem, var(--fs-h1));\n}\n\nh2, .h2 {\n  font-size: var(--fs-h2);\n  font-size: clamp(2.5rem, 1.201vw + 2.189rem, var(--fs-h2));\n}\n\nh3, .h3 {\n  font-size: var(--fs-h3);\n}\n\nh4, .h4 {\n  font-size: var(--fs-h4);\n}\n\np,\nli {\n  font-size: var(--fs-text);\n  line-height: 1.65;\n}\n\nol > li {\n  margin-bottom: 25px;\n}\n\nsmall {\n  font-size: var(--fs-small);\n}\n\n/* user */\n.user {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n\n.user > p {\n  margin-bottom: 0;\n}\n\n.user span {\n  font-style: italic;\n  text-decoration: underline;\n  text-decoration-thickness: 6px;\n  text-decoration-color: var(--clr-accent);\n}\n\n.avatar {\n  display: inline;\n  margin: 0 1rem;\n}\n\n/* aside and form */\naside {\n  position: relative;\n  border-bottom: 1px solid var(--clr-primary);\n}\n\n.wrapper-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding-bottom: 3vh;\n  gap: 1rem;\n}\n\ninput[type=radio] {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n}\n\ninput[type=radio]:focus {\n  outline: none;\n}\n\ninput[type=radio]:checked + label {\n  opacity: 0.7;\n  border: none;\n  cursor: default;\n}\n\n.wrapper-search {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.wrapper-search button {\n  align-self: flex-end;\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\nul.tag-list {\n  padding: 2rem;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 100%;\n  border: 2px solid var(--clr-primary);\n  background-color: var(--clr-white);\n  z-index: 2;\n}\n\n.form-control {\n  display: grid;\n  grid-template-columns: 1.5rem auto;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-bottom: 1px dotted var(--clr-primary);\n}\n\ninput[type=text] {\n  width: 100%;\n  min-height: 44px;\n  margin-top: 0.6em;\n  font-size: 1.125rem;\n  padding: 0.25em 1em;\n  background-color: var(--clr-white);\n  border: 2px solid var(--clr-accent);\n  border-radius: 8px;\n}\n\ninput[type=checkbox] {\n  accent-color: var(--clr-accent);\n}\n\n/* cards */\nul.recipe-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(var(--col-width), 1fr));\n  padding: 1rem 0;\n  column-gap: 1.5rem;\n  row-gap: 2.5rem;\n  justify-items: center;\n  margin: 0 auto;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  max-width: var(--col-width);\n  background-color: var(--clr-white);\n  border-radius: 1rem;\n  overflow: hidden;\n  position: relative;\n}\n\n.card:hover {\n  cursor: pointer;\n  box-shadow: 0 1px 2px hsla(29, 73%, 16%, 0.18);\n}\n\n.card img {\n  height: auto;\n}\n\n.card h3 {\n  padding: 1em 0.5em;\n}\n\n.card > .wrapper-tags {\n  padding: 0.5em;\n}\n\n/* single recipe display */\n.recipe-modal {\n  max-width: 100vw;\n  width: 100%;\n  max-height: 100%;\n  padding: 2rem 1rem;\n  color: inherit;\n  background-color: var(--clr-light);\n  border: 0;\n  overflow-y: auto;\n}\n\n.recipe-modal::backdrop {\n  background-color: var(--clr-light);\n}\n\n.wrapper-recipe {\n  max-width: 620px;\n  height: auto;\n  margin: 0 auto;\n  display: grid;\n  padding: 5vh clamp(1rem, 5vw, 3rem) 2.5rem;\n  gap: 2.5rem;\n  background-color: var(--clr-white);\n  border-radius: 16px;\n}\n\n.wrapper-recipe--header {\n  max-width: 556px;\n  display: grid;\n  gap: 2rem;\n}\n\n.wrapper-recipe--buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1em;\n  justify-content: space-between;\n}\n\n/* tags */\n.tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25em 0.8em;\n  font-family: sans-serif;\n  font-size: var(--fs-small);\n  line-height: 2.5;\n  font-weight: 400;\n  background-color: var(--clr-primary);\n  border-radius: 8px;\n}\n\n.wrapper-tags {\n  display: flex;\n  margin-top: auto;\n  flex-wrap: wrap;\n  gap: 0.2em;\n  list-style: none;\n}\n\n.wrapper-tags.selected-tags {\n  margin-bottom: 2em;\n  gap: 1em;\n}\n\n.card > .wrapper-tags > * {\n  display: none;\n}\n\n.card > .wrapper-tags > *:nth-child(-n+3) {\n  display: inline-flex;\n}\n\n/* buttons and links*/\nbutton, .btn {\n  display: inline-flex;\n  align-items: center;\n  align-self: start;\n  justify-content: center;\n  gap: 0.5em;\n  min-width: 157px;\n  min-height: 44px;\n  padding: 0.25em 1em;\n  border-radius: 8px;\n  font-size: 1.025rem;\n  font-weight: 600;\n  letter-spacing: 3px;\n  line-height: 1.1;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: var(--clr-text);\n  background-color: transparent;\n  border: 2px solid var(--clr-accent);\n  cursor: pointer;\n}\n\nbutton.btn-card {\n  padding: 0;\n  letter-spacing: unset;\n  text-transform: unset;\n  text-align: unset;\n  border: 0;\n}\n\nbutton.btn-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n}\n\nbutton.btn-card:focus::before {\n  outline: 4px dotted var(--clr-accent);\n  outline-offset: -4px;\n}\n\nbutton.btn-card:focus {\n  outline: none;\n}\n\n.btn:hover,\ninput[type=radio]:not(:checked) + label:hover {\n  background-color: var(--clr-primary);\n  transition: var(--transition);\n}\n\n.btn-unselect {\n  min-width: unset;\n  font-size: inherit;\n  min-height: 100%;\n  min-width: auto;\n  align-self: center;\n  border: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.btn-unselect:hover {\n  background-color: transparent;\n  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.7));\n}\n\na:hover {\n  color: var(--clr-accent);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* fonts */\r\n\r\n/* bitter-regular - latin_latin-ext */\r\n@font-face {\r\n  font-display: swap;\r\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\r\n  font-family: 'Bitter';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('./fonts/bitter-v33-latin_latin-ext-regular.woff2') format('woff2');\r\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\r\n}\r\n\r\n/* bitter-italic - latin_latin-ext */\r\n@font-face {\r\n  font-display: swap;\r\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\r\n  font-family: 'Bitter';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: url('./fonts/bitter-v33-latin_latin-ext-italic.woff2') format('woff2');\r\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\r\n}\r\n\r\n/* bitter-700 - latin_latin-ext */\r\n@font-face {\r\n  font-display: swap;\r\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\r\n  font-family: 'Bitter';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url('./fonts/bitter-v33-latin_latin-ext-700.woff2') format('woff2');\r\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\r\n}\r\n\r\n/* bitter-700italic - latin_latin-ext */\r\n@font-face {\r\n  font-display: swap;\r\n  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\r\n  font-family: 'Bitter';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: url('./fonts/bitter-v33-latin_latin-ext-700italic.woff2') format('woff2');\r\n  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\r\n}\r\n\r\n/* andy bell's reset */\r\n\r\n/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n  -moz-text-size-adjust: none;\r\n  -webkit-text-size-adjust: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/* Remove default margin in favour of better control in authored CSS */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin-block-end: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul[role='list'],\r\nol[role='list'] {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nbutton,\r\ninput,\r\nlabel {\r\n  line-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  text-wrap: balance;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n  color: currentColor;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n/* Make sure textareas without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n  min-height: 10em;\r\n}\r\n\r\n/* Anything that has been anchored to should have extra scroll margin */\r\n:target {\r\n  scroll-margin-block: 5ex;\r\n}\r\n\r\n/* end andy bell's reset */\r\n\r\n/* variables */\r\n\r\n:root {\r\n  --fs-h1: 4.2rem;\r\n  --fs-h2: 3.15rem;\r\n  --fs-h3: 2rem;\r\n  --fs-h4: 1.35rem;\r\n  --fs-text: 1.15rem;\r\n  --fs-small: 0.875rem;\r\n  --clr-white: hsl(0, 0%, 100%);\r\n  --clr-light: hsl(36, 45%, 98%);\r\n  --clr-primary: hsl(35, 100%, 82%);\r\n  --clr-text: hsl(29, 73%, 16%);\r\n  --clr-accent: hsl(19, 100%, 52%);\r\n  --col-width: 16rem;\r\n  --col-width: clamp(15rem, 16.667vw + 11.667rem, 20rem);\r\n  --transition: ease all .3s;\r\n}\r\n\r\n/* utilities */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  /* outline: 1px solid tomato; */\r\n}\r\n\r\n*:focus-visible,\r\ninput[type=\"radio\"]:focus-visible + label {\r\n  outline: 3px dotted var(--clr-accent);\r\n  outline-offset: 3px;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  border: 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* layout */\r\n\r\nbody {\r\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\r\n  color: var(--clr-text);\r\n  background-color: var(--clr-light);\r\n  \r\n}\r\n\r\nheader {\r\n  background-color: var(--clr-primary);\r\n}\r\n\r\n.hero {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  row-gap: 2em;\r\n}\r\n\r\n.hero > img {\r\n  width: min(100%, 20rem);\r\n  background-color: var(--clr-light);\r\n  border-radius: 16px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 2rem;\r\n  padding: 2.5rem 0 1rem;\r\n  text-align: center;\r\n  border-top: 1px solid var(--clr-primary);\r\n}\r\n\r\n.wrapper {\r\n  width: min(100%, 72rem);\r\n  margin: 0 auto;\r\n  padding: 3vh clamp(1rem, 5vw, 3rem);\r\n}\r\n\r\n/* typography */\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\n.h1,\r\n.h2,\r\n.h3,\r\n.h4 {\r\n  font-family: \"Bitter\", serif;\r\n  line-height: 1.15;\r\n}\r\n\r\nh2,\r\nh3,\r\n.h2,\r\n.h3 {\r\n  margin-bottom: 1em;\r\n  font-weight: 400;\r\n}\r\n\r\nh1, .h1 {\r\n  font-size: var(--fs-h1);\r\n  font-size: clamp(3rem, 2.217vw + 2.426rem, var(--fs-h1));\r\n}\r\n\r\nh2, .h2 {\r\n  font-size: var(--fs-h2);\r\n  font-size: clamp(2.5rem, 1.201vw + 2.189rem, var(--fs-h2));\r\n}\r\n\r\nh3, .h3 {\r\n  font-size: var(--fs-h3);\r\n}\r\n\r\nh4, .h4 {\r\n  font-size: var(--fs-h4);\r\n}\r\n\r\np,\r\nli {\r\n  font-size: var(--fs-text);\r\n  line-height: 1.65;\r\n}\r\n\r\nol > li {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nsmall {\r\n  font-size: var(--fs-small);\r\n}\r\n\r\n/* user */\r\n\r\n.user {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.user > p {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.user span {\r\n  font-style: italic;\r\n  text-decoration: underline;\r\n  text-decoration-thickness: 6px;\r\n  text-decoration-color: var(--clr-accent);\r\n}\r\n\r\n.avatar {\r\n  display: inline;\r\n  margin: 0 1rem;\r\n}\r\n\r\n/* aside and form */\r\n\r\naside {\r\n  position: relative;\r\n  border-bottom: 1px solid var(--clr-primary);\r\n}\r\n\r\n.wrapper-controls {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  padding-bottom: 3vh;\r\n  gap: 1rem;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=\"radio\"]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"radio\"]:checked+label{ \r\n  opacity: 0.7; \r\n  border: none;\r\n  cursor: default;\r\n} \r\n\r\n.wrapper-search {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-end;\r\n  gap: 1rem;\r\n}\r\n\r\n.wrapper-search button {\r\n  align-self: flex-end;\r\n}\r\n\r\nfieldset {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n}\r\n\r\nul.tag-list {\r\n  padding: 2rem;\r\n  margin: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 100%;\r\n  border: 2px solid var(--clr-primary);\r\n  background-color: var(--clr-white);\r\n  z-index: 2;\r\n}\r\n\r\n.form-control {\r\n  display: grid;\r\n  grid-template-columns: 1.5rem auto;\r\n  gap: 0.5rem;\r\n  padding: 0.5rem;\r\n  border-bottom: 1px dotted var(--clr-primary);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 100%;\r\n  min-height: 44px;\r\n  margin-top: 0.6em;\r\n  font-size: 1.125rem;\r\n  padding: 0.25em 1em;\r\n  background-color: var(--clr-white);\r\n  border: 2px solid var(--clr-accent);\r\n  border-radius: 8px;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  accent-color: var(--clr-accent);\r\n}\r\n\r\n/* cards */\r\n\r\nul.recipe-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(var(--col-width), 1fr));\r\n  padding: 1rem 0;\r\n  column-gap: 1.5rem;\r\n  row-gap: 2.5rem;\r\n  justify-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: var(--col-width);\r\n  background-color: var(--clr-white);\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n\r\n}\r\n\r\n.card:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 2px hsla(29, 73%, 16%, 0.18);\r\n}\r\n\r\n.card img {\r\n  height: auto;\r\n}\r\n\r\n.card h3 {\r\n  padding: 1em 0.5em;\r\n}\r\n\r\n.card > .wrapper-tags {\r\n  padding: 0.5em;\r\n}\r\n\r\n/* single recipe display */\r\n\r\n.recipe-modal {\r\n  max-width: 100vw;\r\n  width: 100%;\r\n  max-height: 100%;\r\n  padding: 2rem 1rem;\r\n  color: inherit;\r\n  background-color: var(--clr-light);\r\n  border: 0;\r\n  overflow-y: auto;\r\n}\r\n\r\n.recipe-modal::backdrop {\r\n  background-color: var(--clr-light);\r\n}\r\n\r\n.wrapper-recipe {\r\n  max-width: 620px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  display: grid;\r\n  padding: 5vh clamp(1rem, 5vw, 3rem) 2.5rem;\r\n  gap: 2.5rem;\r\n  background-color: var(--clr-white);\r\n  border-radius: 16px;\r\n}\r\n\r\n.wrapper-recipe--header {\r\n  max-width: 556px;\r\n  display: grid;\r\n  gap: 2rem;\r\n}\r\n\r\n.wrapper-recipe--buttons {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* tags */\r\n\r\n.tag {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.25em 0.8em;\r\n  font-family: sans-serif;\r\n  font-size: var(--fs-small);\r\n  line-height: 2.5;\r\n  font-weight: 400;\r\n  background-color: var(--clr-primary);\r\n  border-radius: 8px;\r\n}\r\n\r\n.wrapper-tags {\r\n  display: flex;\r\n  margin-top: auto;\r\n  flex-wrap: wrap;\r\n  gap: 0.2em;\r\n  list-style: none;\r\n}\r\n\r\n.wrapper-tags.selected-tags {\r\n  margin-bottom: 2em;\r\n  gap: 1em;\r\n}\r\n\r\n.card>.wrapper-tags>* {\r\n  display: none;\r\n}\r\n\r\n.card>.wrapper-tags>*:nth-child(-n+3) {\r\n  display: inline-flex;\r\n}\r\n\r\n/* buttons and links*/\r\n\r\nbutton, .btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  align-self: start;\r\n  justify-content: center;\r\n  gap: 0.5em;\r\n  min-width: 157px;\r\n  min-height: 44px;\r\n  padding: 0.25em 1em;\r\n  border-radius: 8px;\r\n  font-size: 1.025rem;\r\n  font-weight: 600;\r\n  letter-spacing: 3px;\r\n  line-height: 1.1;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  color: var(--clr-text);\r\n  background-color: transparent;\r\n  border: 2px solid var(--clr-accent);\r\n  cursor: pointer;\r\n}\r\n\r\nbutton.btn-card {\r\n  padding: 0;\r\n  letter-spacing: unset;\r\n  text-transform: unset;\r\n  text-align: unset;\r\n  border: 0;\r\n}\r\n\r\nbutton.btn-card::before {\r\n  content: ''; \r\n  position: absolute; \r\n  inset: 0;\r\n  z-index: 1;\r\n}\r\n\r\nbutton.btn-card:focus::before {\r\n  outline: 4px dotted var(--clr-accent);\r\n  outline-offset: -4px;\r\n}\r\n\r\nbutton.btn-card:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn:hover,\r\ninput[type=\"radio\"]:not(:checked)+label:hover {\r\n  background-color: var(--clr-primary);\r\n  transition: var(--transition);\r\n}\r\n\r\n.btn-unselect {\r\n  min-width: unset;\r\n  font-size: inherit;\r\n  min-height: 100%;\r\n  min-width: auto;\r\n  align-self: center;\r\n  border: 0;\r\n  background-image: url(/src/images/close_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.btn-unselect:hover {\r\n  background-color: transparent;\r\n  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.7))\r\n}\r\n\r\na:hover {\r\n  color: var(--clr-accent);\r\n}"],"sourceRoot":""}]);
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
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3950fcc2b770b31c82b.woff2";

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59214bcd2a054a0ca888.woff2";

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b119e1ea8fc9e2b5b7dc.woff2";

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad54cf6674e087a6c642.woff2";

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/close_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/3.Nutritionist.svg");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/favicon-32x32.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/account_circle_48dp_47280B_FILL1_wght400_GRAD0_opsz48.svg");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/search_16dp_47280B_FILL1_wght400_GRAD0_opsz20.svg");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/bookmark_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/favorite_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/all_inclusive_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/arrow_back_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIngredients: () => (/* binding */ getIngredients),
/* harmony export */   getRecipes: () => (/* binding */ getRecipes),
/* harmony export */   getUsers: () => (/* binding */ getUsers),
/* harmony export */   ingredientsData: () => (/* binding */ ingredientsData),
/* harmony export */   recipeData: () => (/* binding */ recipeData),
/* harmony export */   usersData: () => (/* binding */ usersData)
/* harmony export */ });
const urlRecipes = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes";
const urlIngredients = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients";
const urlUsers = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users";

const usersData = [];
const recipeData = [];
const ingredientsData = [];

const getData = (url, items, container) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data[items].forEach(item => {
        container.push(item);
      });
    })
    .catch(err => {
      console.log(`Sorry, the following error occured: ${err}`);
    });
};

const getUsers = getData(urlUsers, "users", usersData);
const getRecipes = getData(urlRecipes, "recipes", recipeData);
const getIngredients = getData(urlIngredients, "ingredients", ingredientsData);



/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToFavorites: () => (/* binding */ addToFavorites),
/* harmony export */   getRandomUser: () => (/* binding */ getRandomUser),
/* harmony export */   removeFromFavorites: () => (/* binding */ removeFromFavorites)
/* harmony export */ });
const getRandomUser = (userList) => {
  let randomIndex =  Math.floor(Math.random() * userList.length);
  let randomUser = userList[randomIndex];
  return randomUser;
};

const addToFavorites = (user, recipe) => {
  if (!user.recipesToCook.includes(recipe)) {
    user.recipesToCook.push(recipe);
  }
  return user;
};

const removeFromFavorites = (user, recipe) => {
  let indexToDelete = user.recipesToCook.findIndex(userRecipe => userRecipe.id === recipe.id);
  if (indexToDelete !== -1) {
    user.recipesToCook.splice(indexToDelete, 1);
  }
  return user;
};




/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   currentlyActive: () => (/* binding */ currentlyActive),
/* harmony export */   handleFavorites: () => (/* binding */ handleFavorites),
/* harmony export */   handleFilterTags: () => (/* binding */ handleFilterTags),
/* harmony export */   recipeDisplay: () => (/* binding */ recipeDisplay),
/* harmony export */   renderChosenRecipe: () => (/* binding */ renderChosenRecipe),
/* harmony export */   renderCurrentViewInfo: () => (/* binding */ renderCurrentViewInfo),
/* harmony export */   renderFiltered: () => (/* binding */ renderFiltered),
/* harmony export */   renderRecipes: () => (/* binding */ renderRecipes),
/* harmony export */   renderSearchResults: () => (/* binding */ renderSearchResults),
/* harmony export */   renderTagList: () => (/* binding */ renderTagList),
/* harmony export */   setActiveList: () => (/* binding */ setActiveList),
/* harmony export */   setActiveRecipe: () => (/* binding */ setActiveRecipe),
/* harmony export */   toggleVisibility: () => (/* binding */ toggleVisibility)
/* harmony export */ });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);




const body = document.querySelector("body");
const tagList = document.querySelector("#tag-list");
const searchBox = document.querySelector("#search");
const btnSearch = document.querySelector("#btn-search");
const btnShowTags = document.querySelector("#btn-tags");

const viewInfo = document.querySelector("#view-info");
const selectedTags = document.querySelector("#selected-tags");
const recipeDisplay = document.querySelector("#recipe-list");

const recipeModal = document.querySelector("#recipe-modal");
const recipeImg = document.querySelector("#recipe-img");
const recipeTitle = document.querySelector("#recipe-title");
const recipeTags = document.querySelector("#wrapper-tags");
const recipeIngredientsList = document.querySelector("#recipe-ingredients");
const recipeCost = document.querySelector("#recipe-cost");
const recipeInstructionsList = document.querySelector("#recipe-instructions");
const btnClose = document.querySelector("#btn-close");

const userWelcome = document.querySelector("#user");
const btnFavorite = document.querySelector("#btn-favorite");
const btnFavoriteText = document.querySelector("#btn-favorite-txt");

const changeView = document.querySelector(".change-view");


const currentlyActive = {
  user: null,
  list: null,
  listName: "All recipes",
  recipe: null,
  searchTerm: null,
  checkboxes: [],
  values: []
};


// helper functions

const toggleVisibility = (e) => {
  e.preventDefault();
  tagList.classList.toggle("hidden");
};

const renderTagList = () => {
  const allTags = _recipes__WEBPACK_IMPORTED_MODULE_1__.getAllTags(_apiCalls__WEBPACK_IMPORTED_MODULE_0__.recipeData);
  allTags.forEach(tag => {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", tag.replace(" ", "-"));
    checkbox.setAttribute("value", tag);
    const label = document.createElement("label");
    label.setAttribute("for", tag.replace(" ", "-"));
    label.textContent = tag;
    const listItem = document.createElement("li");
    listItem.classList.add("form-control");
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    tagList.appendChild(listItem);
  });
};

const closeModal = () => {
  body.style.overflow = "auto";
  recipeModal.close();
};

// set currently active

const setActiveList = (e) => {
  if (e.target.value === "fav") {
    currentlyActive.list = currentlyActive.user.recipesToCook;
    currentlyActive.listName = "Your favorites";
  } else if (e.target.value === "all") {
    currentlyActive.list = _apiCalls__WEBPACK_IMPORTED_MODULE_0__.recipeData;
    currentlyActive.listName = "All recipes";
  }
  if (currentlyActive.values) {
    renderFiltered(e);
  } else {
    renderRecipes(currentlyActive.list);
  }
  renderCurrentViewInfo();
};

const setActiveRecipe = (e) => {
  let recipeId;
  if (e.target.closest(".card")) {
    recipeId = Number(e.target.closest(".card").id);
  }
  if (recipeId) {
    currentlyActive.recipe = _apiCalls__WEBPACK_IMPORTED_MODULE_0__.recipeData.find(recipe => recipe.id === recipeId);
    renderChosenRecipe();
  }
};

// render functions

const renderCurrentViewInfo = () => {
  userWelcome.textContent = `${currentlyActive.user.name}!`;
  if (currentlyActive.values.length && currentlyActive.searchTerm) {
    viewInfo.textContent = `Viewing search results for "${currentlyActive.searchTerm}" in selected tags in ${currentlyActive.listName}:`;
  } else if (currentlyActive.searchTerm) {
    viewInfo.textContent = `Viewing search results for "${currentlyActive.searchTerm}" in ${currentlyActive.listName}:`;
  } else if (currentlyActive.values.length) {
    viewInfo.textContent = `Viewing ${currentlyActive.listName} filtered by selected tags:`;
  } else {
    viewInfo.textContent = `Viewing ${currentlyActive.listName}:`;
  }
};

const renderRecipes = (list) => {
  recipeDisplay.textContent = "";
  list.forEach(recipe => {
    const image = document.createElement("img");
    image.setAttribute("src", recipe.image);
    image.setAttribute("alt", "");
    image.setAttribute("width", 556);
    image.setAttribute("height", 370);
    const title = document.createElement("h3");
    const button = document.createElement("button");
    button.classList.add("btn-card", "h4");
    button.textContent = recipe.name;
    title.appendChild(button);
    const tagBox = document.createElement("ul");
    tagBox.classList.add("wrapper-tags");
    recipe.tags.forEach(tag => {
      const tagSpan = document.createElement("li");
      tagSpan.classList.add("tag");
      tagSpan.textContent = tag;
      tagBox.appendChild(tagSpan);
    });
    const listItem = document.createElement("li");
    listItem.setAttribute("id", recipe.id);
    listItem.classList.add("card");
    listItem.appendChild(image);
    listItem.appendChild(title);
    listItem.appendChild(tagBox);
    recipeDisplay.appendChild(listItem);
  });
};

const renderChosenRecipe = () => {
  const { id, image, ingredients, name, tags } = currentlyActive.recipe;
  recipeImg.setAttribute("src", image);
  recipeImg.setAttribute("alt", name);
  if (currentlyActive.user.recipesToCook.includes(currentlyActive.recipe)) {
    btnFavoriteText.textContent = "Remove favorite";
  } else {
    btnFavoriteText.textContent = "Add favorite";
  }
  recipeTitle.textContent = name;
  recipeTags.textContent = "";
  tags.forEach(tag => {
    const recipeTag = document.createElement("li");
    recipeTag.classList.add("tag");
    recipeTag.textContent = tag;
    recipeTags.appendChild(recipeTag);
  });
  recipeIngredientsList.textContent = "";
  const ingredientNames = _recipes__WEBPACK_IMPORTED_MODULE_1__.findRecipeIngredients(_apiCalls__WEBPACK_IMPORTED_MODULE_0__.recipeData, id, _apiCalls__WEBPACK_IMPORTED_MODULE_0__.ingredientsData);
  ingredients.forEach((ingredient, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${ingredientNames[index]} - ${ingredient.quantity.amount} ${ingredient.quantity.unit}`;
    recipeIngredientsList.appendChild(listItem);
  });
  recipeCost.textContent = _recipes__WEBPACK_IMPORTED_MODULE_1__.calculateCost(_apiCalls__WEBPACK_IMPORTED_MODULE_0__.recipeData, id, _apiCalls__WEBPACK_IMPORTED_MODULE_0__.ingredientsData).toFixed(2);
  recipeInstructionsList.textContent = "";
  const instructions = _recipes__WEBPACK_IMPORTED_MODULE_1__.getInstructions(_apiCalls__WEBPACK_IMPORTED_MODULE_0__.recipeData, id);
  instructions.forEach(instruction => {
    const listItem = document.createElement("li");
    listItem.textContent = instruction;
    recipeInstructionsList.appendChild(listItem);
  });
  setTimeout(() => {
    recipeModal.showModal();
    body.style.overflow = "hidden";
  }, 100);
};

// filter and search

const renderSearchResults = (e) => {
  e.preventDefault();
  let filteredList = currentlyActive.list;
  currentlyActive.searchTerm = searchBox.value;
  if (currentlyActive.values.length) {
    filteredList = _recipes__WEBPACK_IMPORTED_MODULE_1__.filterByTag(currentlyActive.list, currentlyActive.values);
  }
  filteredList = _recipes__WEBPACK_IMPORTED_MODULE_1__.searchRecipes(filteredList, currentlyActive.searchTerm, _apiCalls__WEBPACK_IMPORTED_MODULE_0__.ingredientsData);
  renderCurrentViewInfo();
  searchBox.value = "";
  currentlyActive.searchTerm = null;
  if (!filteredList.length) {
    recipeDisplay.textContent = "Sorry, no match found, please try different search terms.";
  } else {
    renderRecipes(filteredList);
  }
};

const renderFiltered = (e) => {
  e.preventDefault();
  currentlyActive.checkboxes = [...tagList.querySelectorAll(":checked")];
  currentlyActive.values = currentlyActive.checkboxes.map(checkbox => checkbox.value);
  selectedTags.textContent = "";
  if (currentlyActive.values.length) {
    currentlyActive.values.forEach(value => {
      const tag = document.createElement("li");
      tag.classList.add("tag");
      tag.textContent = value;
      const closeTag = document.createElement("button");
      closeTag.classList.add("btn-unselect");
      tag.appendChild(closeTag);
      selectedTags.appendChild(tag);
    });
    const filteredList = _recipes__WEBPACK_IMPORTED_MODULE_1__.filterByTag(currentlyActive.list, currentlyActive.values);
    renderRecipes(filteredList);
  } else {
    renderRecipes(currentlyActive.list);
  }
  renderCurrentViewInfo();
};

const handleFilterTags = (e) => {
  if (e.target.closest("button")) {
    let tagToRemove = e.target.parentNode.firstChild.textContent;
    currentlyActive.values.splice(currentlyActive.values.indexOf(tagToRemove), 1);
    const boxToUncheck = document.getElementById(tagToRemove.replace(" ", "-"));
    boxToUncheck.checked = false;
    renderFiltered(e);
  }
};

// handle favorites

const handleFavorites = (e) => {
  if (currentlyActive.user.recipesToCook.includes(currentlyActive.recipe)) {
    _users__WEBPACK_IMPORTED_MODULE_2__.removeFromFavorites(currentlyActive.user, currentlyActive.recipe);
    btnFavoriteText.textContent = "Add favorite";
    renderRecipes(currentlyActive.list);
  } else {
    _users__WEBPACK_IMPORTED_MODULE_2__.addToFavorites(currentlyActive.user, currentlyActive.recipe);
    btnFavoriteText.textContent = "Remove favorite";
  }
  if (currentlyActive.values) {
    renderFiltered(e);
  }
  renderCurrentViewInfo();
};

// event listeners
changeView.addEventListener("change", setActiveList);
btnSearch.addEventListener("click", renderSearchResults);
btnShowTags.addEventListener("click", toggleVisibility);
recipeDisplay.addEventListener("click", setActiveRecipe);
tagList.addEventListener("change", renderFiltered);
selectedTags.addEventListener("click", handleFilterTags);
btnFavorite.addEventListener("click", handleFavorites);
btnClose.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (!e.target.closest("#btn-tags") && !e.target.closest("#tag-list")) {
    tagList.classList.add("hidden");
  }
});



/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateCost: () => (/* binding */ calculateCost),
/* harmony export */   filterByTag: () => (/* binding */ filterByTag),
/* harmony export */   findRecipeIngredients: () => (/* binding */ findRecipeIngredients),
/* harmony export */   getAllTags: () => (/* binding */ getAllTags),
/* harmony export */   getInstructions: () => (/* binding */ getInstructions),
/* harmony export */   searchRecipes: () => (/* binding */ searchRecipes)
/* harmony export */ });
// helper functions

const getAllTags = (recipeList) => {
  const tagList = recipeList.reduce((acc, curr) => {
    curr.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);
  return tagList;
};

const getRecipeById = (recipeList, id) => {
  const recipe = recipeList.find(recipe => recipe.id === id);
  return recipe;
};

// main functions

const filterByTag = (list, tags) => {
  const filteredList = list.filter(recipe => tags.some(tag => recipe.tags.includes(tag)));
  return filteredList;
};

const searchRecipes = (list, searchTerm, ingredientsList) => {
  const lowercasedSearchTerm = searchTerm.toLowerCase();
  let searchResults = list.filter(recipe => {
    let lowercasedName = recipe.name.toLowerCase();
    return lowercasedName.includes(lowercasedSearchTerm);
  });
  list.forEach(recipe => {
    const ingredients = findRecipeIngredients(list, recipe.id, ingredientsList);
    ingredients.forEach(ingredient => {
      if (ingredient.includes(lowercasedSearchTerm) && !searchResults.includes(recipe)) {
        searchResults.push(recipe);
      }
    });
  });
  return searchResults;
};

const findRecipeIngredients = (recipeList, recipeId, ingredientsList) => {
  const recipe = getRecipeById(recipeList, recipeId);
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
  const ingredientNames = ingredientIds.map(ingredientId => {
    ingredientsList.forEach(ingredient => {
      if (ingredient.id === ingredientId) {
        ingredientId = ingredient.name;
      }
    });
    return ingredientId;
  });
  return ingredientNames;
};

const calculateCost = (recipeList, recipeId, ingredientsList) => {
  const recipe = getRecipeById(recipeList, recipeId);
  const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
  const ingredientAmmounts = recipe.ingredients.map(ingredient => ingredient.quantity.amount);
  const ingredientPrices = ingredientIds.map(ingredientId => {
    ingredientsList.forEach(ingredient => {
      if (ingredient.id === ingredientId) {
        ingredientId = ingredient.estimatedCostInCents;
      }
    });
    return ingredientId;
  });
  const totalPrice = ingredientAmmounts.reduce((acc, curr) => {
    acc += (curr * ingredientPrices[ingredientAmmounts.indexOf(curr)]) / 100;
    return acc;
  }, 0);
  return totalPrice;
};

const getInstructions = (recipeList, recipeId) => {
  const recipe = getRecipeById(recipeList, recipeId);
  const instructions = recipe.instructions.map(prop => prop.instruction);
  return instructions;
};





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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _images_3_Nutritionist_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _images_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _images_account_circle_48dp_47280B_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _images_search_16dp_47280B_FILL1_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _images_bookmark_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _images_favorite_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _images_all_inclusive_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _images_arrow_back_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _images_close_16dp_47280B_FILL0_wght400_GRAD0_opsz20_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23);
 
 
//NOTE: Data model and non-dom manipulating logic will live in this file.














// Below are examples of how you can import functions from either the recipes or domUpdates files.

/* import * as recipes from './recipes'; */




window.addEventListener("load", () => {
  Promise.all([_apiCalls__WEBPACK_IMPORTED_MODULE_11__.getUsers, _apiCalls__WEBPACK_IMPORTED_MODULE_11__.getRecipes, _apiCalls__WEBPACK_IMPORTED_MODULE_11__.getIngredients])
    .then(() => {
      setTimeout(() => {
        _domUpdates__WEBPACK_IMPORTED_MODULE_13__.currentlyActive.user = _users__WEBPACK_IMPORTED_MODULE_12__.getRandomUser(_apiCalls__WEBPACK_IMPORTED_MODULE_11__.usersData);
        _domUpdates__WEBPACK_IMPORTED_MODULE_13__.currentlyActive.list = _apiCalls__WEBPACK_IMPORTED_MODULE_11__.recipeData;
        _domUpdates__WEBPACK_IMPORTED_MODULE_13__.renderTagList();
        _domUpdates__WEBPACK_IMPORTED_MODULE_13__.renderCurrentViewInfo();
        _domUpdates__WEBPACK_IMPORTED_MODULE_13__.renderRecipes(_apiCalls__WEBPACK_IMPORTED_MODULE_11__.recipeData);
      }, 500);
    })
    .catch(err => {
      console.log(`Sorry, the following error occured: ${err}`);
      _domUpdates__WEBPACK_IMPORTED_MODULE_13__.recipeDisplay.textContent = `Sorry, the following error occured: ${err}`;
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map