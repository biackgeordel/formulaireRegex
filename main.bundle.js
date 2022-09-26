/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/formulaire.js":
/*!***************************!*\
  !*** ./src/formulaire.js ***!
  \***************************/
/***/ (() => {

var form = document.querySelector("form");
var firstName = document.querySelector("#firstName");
var password = document.querySelector("#password");
var email = document.querySelector("#email");
var btn = document.querySelector(" form .btn");

var errorFirstName = function errorFirstName() {
  firstName.addEventListener("input", function (event) {
    console.log(event.target.value);
    var regex = /^[a-z]+[-| ]{0,1}[a-z]+$/g;
    var prenom = "".concat(event.target.value);

    if (regex.test(prenom)) {
      // divError.textContent = " ";
      if (firstName.classList.contains("inputColor-invalid")) {
        firstName.classList.replace("inputColor-invalid", "inputColor-valid");
      } else {
        firstName.classList.add("inputColor-valid");
      }
    } else {
      if (firstName.classList.contains("inputColor-valid")) {
        firstName.classList.replace("inputColor-valid", "inputColor-invalid");
      } else {
        firstName.classList.add("inputColor-invalid");
      }
    }
  }); //   return true;
};

var errorPassword = function errorPassword() {
  var parentPassword = password.parentElement;
  var divError = document.createElement("ul");
  divError.classList.add("valid");
  parentPassword.after(divError);
  password.addEventListener("input", function (event) {
    console.log(event.target.value); // const regex = /^[A-Z]+[a-z-0-9]+[&$#]+$/g;

    var pass = "".concat(event.target.value);

    if (pass.length !== 0) {
      if (pass.length >= 5) {
        divError.innerHTML = "<li>\n \n \n        <i class=\"fas fa-check\"></i>mot de passe de plus de 5 caract\xE8res</li>";
      } else {
        divError.innerHTML = "<li><i class=\"fas fa-times\"></i>votre mot de passe fait moins de 5 caract\xE8res</li>";
      }

      if (/^[A-Z]+/.test(pass)) {
        divError.innerHTML += "<li>\n        <i class=\"fas fa-check\"></i></i>Majuscule</li>";
      } else {
        divError.innerHTML += "<li><i class=\"fas fa-times\"></i>absence de majuscule</li>";
      }

      if (/[$&#]+$/g.test(pass)) {
        divError.innerHTML += "<li>\n        <i class=\"fas fa-check\"></i>\n        mot de passe se terminant par des caract\xE8res sp\xE9ciaux</li>";
        password.classList.add("inputColor-valid");
        password.classList.remove("inputColor-invalid");
      } else {
        divError.innerHTML += "<li><i class=\"fas fa-times\"></i>absence de caract\xE8res sp\xE9ciaux</li>";
        password.classList.replace("inputColor-valid", "inputColor-invalid");
      }
    } else {
      if (password.classList.contains("inputColor-valid")) {
        password.classList.remove("inputColor-valid");
      } else if (password.classList.contains("inputColor-invalid")) {
        password.classList.remove("inputColor-invalid");
      }

      divError.innerHTML = " ";
    }
  });
}; // parentPassword.after(divError);


email.addEventListener("input", function (event) {
  console.log(event.target.value);
});
form.addEventListener("submit", function (event) {
  console.log(event.target);
  event.preventDefault();
});
errorFirstName();
errorPassword();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n:root {\n  --colordefault: #2c3e50;\n  --primary: #3498db;\n  --warning: #f1c40f;\n  --danger: #c0392b;\n  --colorFond: #70a1ff;\n  --purple: #e056fd;\n}\n\n.btn {\n  padding: 1rem 1.5rem;\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: white;\n  background: var(--colordefault);\n  margin: 1rem;\n  border: 0;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n.btn-primary {\n  background: var(--primary);\n}\n\nbody,\n* {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.container {\n  margin: 5rem auto;\n  max-width: 50%;\n}\n@media screen and (max-width: 700px) {\n  .container {\n    max-width: 100%;\n  }\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  background: var(--colorFond);\n  grid-auto-rows: auto;\n  text-align: center;\n  font-size: 1.6rem;\n  row-gap: 2rem;\n}\nform .form-item-0 {\n  font-size: 3rem;\n  padding: 2rem 0;\n}\nform div {\n  display: flex;\n  justify-content: space-evenly;\n}\nform div label {\n  flex: 0 0 150px;\n  text-align: right;\n  line-height: 3.5rem;\n}\n@media screen and (max-width: 700px) {\n  form div label {\n    flex: 0 1 30%;\n  }\n}\nform div input {\n  padding: 0.8rem 1rem;\n  flex: 0.5 0 auto;\n  border-radius: 0.5rem;\n  border: 0;\n  outline: 0;\n}\n\n.error {\n  color: white;\n  display: block;\n  width: 90%;\n  transition: all 0.5s;\n  margin: auto;\n}\n\n.valid {\n  color: white;\n  display: block;\n  width: 90%;\n  text-align: left;\n  margin: auto;\n}\n\n.inputColor-valid {\n  box-shadow: 0px 0px 4px 4px #05c46b;\n}\n.inputColor-invalid {\n  box-shadow: 0px 0px 4px 4px #ff3f34;\n}\n.inputColor-warning {\n  box-shadow: 0px 0px 4px 4px var(--warning);\n}\n\nul {\n  list-style: none;\n}\n\nli {\n  padding: 0.5rem 0;\n  line-height: 2rem;\n}\nli i {\n  color: white;\n  margin-right: 0.5rem;\n}\nli .fa-check {\n  color: #009432;\n  padding: 0.5rem 0;\n}\nli .fa-times {\n  color: var(--danger);\n  position: relative;\n  top: 0.1rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/_rest.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/_bouton.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACCF;;ADCA;EACE,gBAAA;ACEF;;ACRA;EACE,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,iBAAA;ADWF;;AEjBA;EACE,oBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;EACA,YAAA;EACA,SAAA;EACA,qBAAA;EACA,eAAA;AFoBF;AEnBE;EACE,0BAAA;AFqBJ;;AA9BA;;EAGE,qCAAA;AAgCF;;AA9BA;EACE,iBAAA;EACA,cAAA;AAiCF;AAhCE;EAHF;IAII,eAAA;EAmCF;AACF;;AAjCA;EACE,aAAA;EACA,0BAAA;EACA,4BAAA;EACA,oBAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;AAoCF;AAnCE;EACE,eAAA;EACA,eAAA;AAqCJ;AAnCE;EACE,aAAA;EACA,6BAAA;AAqCJ;AAhCI;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;AAkCN;AAjCM;EAJF;IAKI,aAAA;EAoCN;AACF;AAlCI;EACE,oBAAA;EACA,gBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;AAoCN;;AAhCA;EACE,YAAA;EACA,cAAA;EAEA,UAAA;EACA,oBAAA;EACA,YAAA;AAkCF;;AAhCA;EACE,YAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;AAmCF;;AAhCE;EACE,mCAAA;AAmCJ;AAjCE;EACE,mCAAA;AAmCJ;AAjCE;EACE,0CAAA;AAmCJ;;AAhCA;EACE,gBAAA;AAmCF;;AAjCA;EACE,iBAAA;EACA,iBAAA;AAoCF;AAnCE;EACE,YAAA;EACA,oBAAA;AAqCJ;AAnCE;EACE,cAAA;EACA,iBAAA;AAqCJ;AAnCE;EACE,oBAAA;EACA,kBAAA;EACA,WAAA;AAqCJ","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n","@import \"rest\";\r\n@import \"variables\";\r\n@import \"bouton\";\r\nbody,\r\n* {\r\n  // font-family: \"Roboto\", sans-serif;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n.container {\r\n  margin: 5rem auto;\r\n  max-width: 50%;\r\n  @media screen and (max-width: 700px) {\r\n    max-width: 100%;\r\n  }\r\n}\r\nform {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  background: var(--colorFond);\r\n  grid-auto-rows: auto;\r\n  text-align: center;\r\n  font-size: 1.6rem;\r\n  row-gap: 2rem;\r\n  .form-item-0 {\r\n    font-size: 3rem;\r\n    padding: 2rem 0;\r\n  }\r\n  div {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    @media screen and (max-width: 700px) {\r\n      // justify-content: center;\r\n    }\r\n\r\n    label {\r\n      flex: 0 0 150px;\r\n      text-align: right;\r\n      line-height: 3.5rem;\r\n      @media screen and (max-width: 700px) {\r\n        flex: 0 1 30%;\r\n      }\r\n    }\r\n    input {\r\n      padding: 0.8rem 1rem;\r\n      flex: 0.5 0 auto;\r\n      border-radius: 0.5rem;\r\n      border: 0;\r\n      outline: 0;\r\n    }\r\n  }\r\n}\r\n.error {\r\n  color: white;\r\n  display: block;\r\n  // background: var(--purple);\r\n  width: 90%;\r\n  transition: all 0.5s;\r\n  margin: auto;\r\n}\r\n.valid {\r\n  color: white;\r\n  display: block;\r\n  width: 90%;\r\n  text-align: left;\r\n  margin: auto;\r\n}\r\n.inputColor {\r\n  &-valid {\r\n    box-shadow: 0px 0px 4px 4px #05c46b;\r\n  }\r\n  &-invalid {\r\n    box-shadow: 0px 0px 4px 4px #ff3f34;\r\n  }\r\n  &-warning {\r\n    box-shadow: 0px 0px 4px 4px var(--warning);\r\n  }\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\nli {\r\n  padding: 0.5rem 0;\r\n  line-height: 2rem;\r\n  i {\r\n    color: white;\r\n    margin-right: 0.5rem;\r\n  }\r\n  .fa-check {\r\n    color: #009432;\r\n    padding: 0.5rem 0;\r\n  }\r\n  .fa-times {\r\n    color: var(--danger);\r\n    position: relative;\r\n    top: 0.1rem;\r\n  }\r\n}\r\n",":root {\r\n  --colordefault: #2c3e50;\r\n  --primary: #3498db;\r\n  --warning: #f1c40f;\r\n  --danger: #c0392b;\r\n  --colorFond: #70a1ff;\r\n  --purple: #e056fd;\r\n}\r\n",".btn {\r\n  padding: 1rem 1.5rem;\r\n  text-align: center;\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: white;\r\n  background: var(--colordefault);\r\n  margin: 1rem;\r\n  border: 0;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  &-primary {\r\n    background: var(--primary);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _formulaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulaire */ "./src/formulaire.js");
/* harmony import */ var _formulaire__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formulaire__WEBPACK_IMPORTED_MODULE_1__);
// import "./scss/test.css";

 // console.log("bonjour les amis du zero");
// const exp = 2e2;
// console.log(exp);
// console.log(2 ** 2);
// const a = "12";
// const result = parseInt(a, 10);
// console.log(result);
// const min = 1;
// const max = 10;
// console.log(Math.round(Math.random() * (max - min) + min));
// console.log('bonjour "lune"');
// const fatigue = true;
// const action = "dormir";
// const etatDeFatigue = `jean est${
//   fatigue ? ` fatigué il a besoin de ${action}` : "super en forme"
// }`;
// console.log(etatDeFatigue);
// const text = "je suis le soleil de midi";
// const b = text.endsWith("midi");
// const b1 = text.startsWith("je suis");
// const b2 = text.slice(0, -1);
// const b3 = text.slice(0);
// const b4 = text.slice(-2, -1);
// console.log("silce(2): ", text.slice(2));
// console.log(b);
// console.log(b1);
// console.log("slice(0,-1): ", b2);
// console.log(b3);
// console.log(b4);
// //split
// const x = "terre,soleil,eau";
// const x1 = x.split(",");
// const x2 = x.replace("eau", "liquide");
// console.log(x1);
// console.log(x2);
// console.log(text.search("je"));
// const numberPhone = "0652746740";
// const lastNumber = numberPhone.slice(-4);
// const maskNumber = lastNumber.padStart(numberPhone.length, "*");
// console.log(maskNumber);
// console.log("taille de maskNumber: ", maskNumber.length);
// const email = "biackgeorrdel@gmail.com";
// const lastEmail = email.slice(0, 4);
// const maskEmail = lastEmail.padEnd(email.length, "*");
// console.log(maskEmail);
// const regex = /^[a-z]+/;
// const regex1 = /@[a-z]+\.[a-z]+/;
// console.log(email.match(regex));
// const nameEmail = email.match(regex);
// console.log(nameEmail[0].length);
// const nameEmailSlice = nameEmail[0].slice(0, 4);
// const nameEmailPadEnd = nameEmailSlice.padEnd(nameEmail[0].length, "*");
// const nameEmailMask = email.replace(regex, nameEmailPadEnd);
// console.log(regex1.exec(email));
// const firstEmail = regex.exec(email);
// console.log(nameEmailMask);
// function test() {
//   console.log("Bonjour je suis une fonction");
// }
// const ch1 = "bonjour les 100 les amis du zeros qsd450 rue du nord de fg125";
// console.log(ch1.match(/[a-z]+$/));
// console.log(ch1.match(/[a-z]*\d+/g));
// const regexEmail = /^[a-z]+[-| ]{0,1}\w+@[a-z]+\.[a-z]+$/;
// console.log("jean125@gmal.com".match(regexEmail));
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map