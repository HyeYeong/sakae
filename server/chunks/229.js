"use strict";
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 3128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_variables_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5905);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Footer = ({
  _css
}) => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    css: [initialStyles, _css,  true ? "" : 0,  true ? "" : 0],
    children: "copyright\u24D2 2022 All rights reserved by \uD61C\uC601"
  });
};

const initialStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("margin-top:48px;width:100%;box-sizing:border-box;padding:20px 14px;color:", _styles_variables_Colors__WEBPACK_IMPORTED_MODULE_2__/* .COLORS.CADET_BLUE */ .D.CADET_BLUE, ";background:", _styles_variables_Colors__WEBPACK_IMPORTED_MODULE_2__/* .COLORS.GRAY[1] */ .D.GRAY[1], ";text-align:center;" + ( true ? "" : 0),  true ? "" : 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 5419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ atoms_Title)
});

// UNUSED EXPORTS: Title

;// CONCATENATED MODULE: ./src/styles/variables/FontSize/index.ts
const fontSize = {
  h1: '2.4rem',
  h2: '2.2rem',
  h3: '1.8rem',
  h4: '1.2rem',
  dateFont: '0.9rem'
};
const fontSizeSp = {// h1: '2.4rem',
  // h2: '2.2rem',
  // h3: '1.8rem',
  // h4: '1.2rem',
  // dateFont: '0.9rem'
};
// EXTERNAL MODULE: ./src/styles/variables/Colors/index.ts
var Colors = __webpack_require__(5905);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/atoms/Title/index.tsx





const ELEMENTS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4'
};
const Title = ({
  element,
  children,
  description,
  startDate,
  endDate,
  _css
}) => {
  const ROOT_ELEMENT = ELEMENTS[element];
  return (0,jsx_runtime_.jsxs)(ROOT_ELEMENT, {
    css: [initialStyles, element && titleStyles(element), _css,  true ? "" : 0,  true ? "" : 0],
    children: [children, (description || startDate || endDate) && (0,jsx_runtime_.jsxs)("p", {
      css: haveDateStyles,
      children: [jsx_runtime_.jsx("span", {
        children: startDate
      }), jsx_runtime_.jsx("span", {
        children: endDate
      })]
    })]
  });
};
const initialStyles = /*#__PURE__*/(0,react_.css)("font-weight:bold;color:", Colors/* COLORS.BASECOLOR */.D.BASECOLOR, ";position:relative;" + ( true ? "" : 0),  true ? "" : 0);

const titleStyles = element => {
  switch (element) {
    case 'H1':
      return /*#__PURE__*/(0,react_.css)("font-size:", fontSize.h1, ";line-height:3rem;margin-top:48px;margin-bottom:24px;&:after{content:'';position:absolute;top:auto;bottom:-18px;width:20px;height:3px;display:block;background-color:", Colors/* COLORS.BASECOLOR */.D.BASECOLOR, ";}" + ( true ? "" : 0),  true ? "" : 0);

    case 'H2':
      return /*#__PURE__*/(0,react_.css)("font-size:", fontSize.h2, ";line-height:2.6rem;margin-top:44px;margin-bottom:22px;" + ( true ? "" : 0),  true ? "" : 0);

    case 'H3':
      return /*#__PURE__*/(0,react_.css)("font-size:", fontSize.h3, ";line-height:2rem;margin-top:36px;margin-bottom:18px;" + ( true ? "" : 0),  true ? "" : 0);

    case 'H4':
      return /*#__PURE__*/(0,react_.css)("font-size:", fontSize.h4, ";line-height:1.4rem;margin-top:20px;margin-bottom:12px;" + ( true ? "" : 0),  true ? "" : 0);
  }
};

const haveDateStyles = /*#__PURE__*/(0,react_.css)("font-size:", fontSize.dateFont, ";opacity:0.9;margin:0;font-weight:400;span:first-of-type{&:after{display:inline-block;content:'~';margin:0 3px;}}" + ( true ? "" : 0),  true ? "" : 0);
/* harmony default export */ const atoms_Title = (Title);

/***/ })

};
;