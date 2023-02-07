"use strict";
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 2146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_mixins_MediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4062);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Centering = ({
  _css,
  children
}) => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
  css: [styles.centering, _css,  true ? "" : 0,  true ? "" : 0],
  children: children
});

const styles = {
  centering: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("margin-right:15px;margin-left:15px;", (0,_styles_mixins_MediaQueries__WEBPACK_IMPORTED_MODULE_0__/* .mediaQueries */ .w)('md'), "{max-width:1080px;width:100%;margin-right:auto;margin-left:auto;}" + ( true ? "" : 0),  true ? "" : 0)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Centering);

/***/ }),

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_mixins_MediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4062);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const ContentsWrap = ({
  _css,
  children
}) => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("article", {
  css: [initialStyle, _css,  true ? "" : 0,  true ? "" : 0],
  children: children
});

const initialStyle = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("margin-top:50px;padding:0 0 20px;", (0,_styles_mixins_MediaQueries__WEBPACK_IMPORTED_MODULE_0__/* .mediaQueries */ .w)('md'), "{margin-top:50px;padding:0 0 20px;}" + ( true ? "" : 0),  true ? "" : 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsWrap);

/***/ }),

/***/ 1666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_variables_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5905);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const Layout = ({
  _css,
  children,
  backgroudColor = 'white'
}) => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
  css: [initialStyle, backgroudColor && styles(backgroudColor), _css,  true ? "" : 0,  true ? "" : 0],
  children: children
});

const initialStyle =  true ? {
  name: "bjn8wh",
  styles: "position:relative"
} : 0;

const styles = backgroudColor => {
  switch (backgroudColor) {
    case 'gray':
      return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("background-color:", _styles_variables_Colors__WEBPACK_IMPORTED_MODULE_0__/* .COLORS.GRAY[2] */ .D.GRAY[2], ";" + ( true ? "" : 0),  true ? "" : 0);

    default:
      return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)( true ? "" : 0,  true ? "" : 0);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 4062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ mediaQueries)
});

;// CONCATENATED MODULE: ./src/helpers/common/Breakpoints/index.ts
const breakpoints = {
  md: 767
};
;// CONCATENATED MODULE: ./src/styles/mixins/MediaQueries/index.ts

const mediaQueries = size => `@media (min-width: ${breakpoints[size]}px)`;

/***/ }),

/***/ 5905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ COLORS)
/* harmony export */ });
const COLORS = {
  WHITE: '#fff',
  BLACK: '#000',
  BASECOLOR: '#3e3e3e',
  GRAY: {
    0: '#949494',
    1: '#fbfafa',
    2: '#eeeeee'
  },
  CADET_BLUE: 'cadetblue',
  RED: 'red',
  YELLOW: '#f5bc00',
  GREEN: '#56c165',
  SHADOW: '#cfcfcf'
};

/***/ })

};
;