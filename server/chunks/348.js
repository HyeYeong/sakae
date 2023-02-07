"use strict";
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 6348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ molecules_Navigation)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./src/components/templates/Centering/index.tsx
var Centering = __webpack_require__(2146);
// EXTERNAL MODULE: ./src/styles/variables/Colors/index.ts
var Colors = __webpack_require__(5905);
// EXTERNAL MODULE: ./src/styles/mixins/MediaQueries/index.ts + 1 modules
var MediaQueries = __webpack_require__(4062);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/atoms/Logo/index.tsx








const Logo = ({
  _css
}) => {
  return jsx_runtime_.jsx("h1", {
    css: [initialStyles, _css,  true ? "" : 0,  true ? "" : 0],
    children: jsx_runtime_.jsx((link_default()), {
      href: '/',
      children: (0,jsx_runtime_.jsxs)("a", {
        children: [jsx_runtime_.jsx("i", {}), (0,jsx_runtime_.jsxs)("span", {
          children: ["Hy`s", jsx_runtime_.jsx("br", {}), "Web Portfolio"]
        })]
      })
    })
  });
};

const initialStyles = /*#__PURE__*/(0,react_.css)("margin-right:10px;font-size:1rem;color:", Colors/* COLORS.CADET_BLUE */.D.CADET_BLUE, ";font-weight:400;a{display:flex;justify-content:flex-start;align-items:center;text-decoration:none;position:relative;&:before{opacity:0;transition:0.3s all;}.g-navigation:hover &{span{position:relative;&:before{display:block;content:'';position:absolute;top:0;bottom:0;left:-16px;margin:auto;width:8px;height:8px;border-top:3px solid cadetblue;border-left:3px solid rgb(245, 188, 0);border-radius:2px;transform:rotate(135deg);transition:0.3s all;}}i{border-radius:2px;border-top-right-radius:18px;border-top-left-radius:60px;border-bottom-right-radius:18px;border-bottom-left-radius:60px;position:absolute;right:auto;left:-4px;width:3px;height:10px;transition:0.3s all;background-color:", Colors/* COLORS.GREEN */.D.GREEN, ";opacity:0.7;transform:rotate(-270deg);", (0,MediaQueries/* mediaQueries */.w)('md'), "{left:-8px;}}}}span{display:inline-block;margin-left:10px;}i{width:3px;height:18px;content:'';display:inline-block;position:relative;background-color:", Colors/* COLORS.GREEN */.D.GREEN, ";transition:0.3s all;position:absolute;left:0;transform:rotate(135deg);", (0,MediaQueries/* mediaQueries */.w)('md'), "{left:-8px;}}" + ( true ? "" : 0),  true ? "" : 0);
/* harmony default export */ const atoms_Logo = (Logo);
;// CONCATENATED MODULE: ./src/components/atoms/HamburgerMenu/index.tsx







const HamburgerMenu = ({
  setOpenClass,
  openClass,
  _css
}) => {
  const openMenu = () => setOpenClass(!openClass);

  return (0,jsx_runtime_.jsxs)("button", {
    css: [styles.hamburgerMenu, _css,  true ? "" : 0,  true ? "" : 0],
    onClick: openMenu,
    children: [jsx_runtime_.jsx("i", {}), jsx_runtime_.jsx("i", {}), jsx_runtime_.jsx("i", {})]
  });
};

const styles = {
  hamburgerMenu: /*#__PURE__*/(0,react_.css)("background-color:transparent;border:none;display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:40px;height:32px;position:relative;", (0,MediaQueries/* mediaQueries */.w)('md'), "{display:none;border:none;background-color:transparent;}i{display:block;content:'';width:100%;height:2px;background-color:", Colors/* COLORS.GRAY.0 */.D.GRAY[0], ";opacity:0.8;}.is-open &{i{width:90%;position:absolute;&:first-of-type{transform:rotate(45deg);}&:last-of-type{transform:rotate(135deg);}&:nth-of-type(2){display:none;}}}" + ( true ? "" : 0),  true ? "" : 0)
};
/* harmony default export */ const atoms_HamburgerMenu = (HamburgerMenu);
;// CONCATENATED MODULE: ./src/components/molecules/Navigation/index.tsx











const NavigationMenu = () => {
  return (0,jsx_runtime_.jsxs)("ul", {
    css: navigationStyles.wrap,
    children: [jsx_runtime_.jsx("li", {
      css: navigationStyles.list,
      children: jsx_runtime_.jsx((link_default()), {
        href: "/projects",
        children: jsx_runtime_.jsx("a", {
          css: navigationStyles.link,
          children: "PROJECT"
        })
      })
    }), jsx_runtime_.jsx("li", {
      css: navigationStyles.list,
      children: jsx_runtime_.jsx((link_default()), {
        href: "/skills",
        children: jsx_runtime_.jsx("a", {
          css: navigationStyles.link,
          children: "SKILLS"
        })
      })
    }), jsx_runtime_.jsx("li", {
      css: navigationStyles.list,
      children: jsx_runtime_.jsx((link_default()), {
        href: "/about",
        children: jsx_runtime_.jsx("a", {
          css: navigationStyles.link,
          children: "ABOUT"
        })
      })
    }), jsx_runtime_.jsx("li", {
      css: navigationStyles.list,
      children: jsx_runtime_.jsx((link_default()), {
        href: "/contact",
        children: jsx_runtime_.jsx("a", {
          css: navigationStyles.link,
          children: "CONTACT"
        })
      })
    })]
  });
};

const Navigation = ({
  _css
}) => {
  const {
    0: openClass,
    1: setOpenClass
  } = (0,external_react_.useState)(false);
  return jsx_runtime_.jsx("div", {
    css: [Navigation_styles.navigation, _css,  true ? "" : 0,  true ? "" : 0],
    className: !openClass ? '' : 'is-open',
    children: (0,jsx_runtime_.jsxs)(Centering/* default */.Z, {
      children: [jsx_runtime_.jsx(atoms_Logo, {}), jsx_runtime_.jsx(atoms_HamburgerMenu, {
        openClass: openClass,
        setOpenClass: setOpenClass
      }), jsx_runtime_.jsx(NavigationMenu, {})]
    })
  });
};

const Navigation_styles = {
  navigation: /*#__PURE__*/(0,react_.css)("width:100%;padding:15px 14px;font-size:1.8rem;position:relative;letter-spacing:2px;box-shadow:0 10px 10px rgba(207, 207, 207, 0.2);box-sizing:border-box;", (0,MediaQueries/* mediaQueries */.w)('md'), "{padding:20px 14px;}&:after{content:'';position:absolute;top:auto;right:0;bottom:0;left:0;margin:auto;width:100%;height:1px;background-color:rgb(219, 219, 219);opacity:0.3;}>div{display:flex;align-items:center;justify-content:space-between;padding:0;flex-wrap:wrap;}&.is-open{position:fixed;top:0;height:72px;z-index:10;background-color:", Colors/* COLORS.WHITE */.D.WHITE, ";height:100vh;", (0,MediaQueries/* mediaQueries */.w)('md'), "{display:none;}}" + ( true ? "" : 0),  true ? "" : 0)
};
const navigationStyles = {
  wrap: /*#__PURE__*/(0,react_.css)("display:none;", (0,MediaQueries/* mediaQueries */.w)('md'), "{display:flex;}.is-open &{display:block;position:relative;width:100%;margin-top:40px;text-align:center;", (0,MediaQueries/* mediaQueries */.w)('md'), "{display:none;}}" + ( true ? "" : 0),  true ? "" : 0),
  list: /*#__PURE__*/(0,react_.css)("list-style:none;a{width:100%;display:inline-block;box-sizing:border-box;padding:20px;", (0,MediaQueries/* mediaQueries */.w)('md'), "{padding:10px;}}" + ( true ? "" : 0),  true ? "" : 0),
  link: /*#__PURE__*/(0,react_.css)("font-size:1.1rem;text-decoration:none;transition:0.3s all;opacity:0.6;font-weight:900;cursor:pointer;", (0,MediaQueries/* mediaQueries */.w)('md'), "{font-weight:normal;}&:hover{opacity:1;", (0,MediaQueries/* mediaQueries */.w)('md'), "{font-weight:normal;}}" + ( true ? "" : 0),  true ? "" : 0)
};
/* harmony default export */ const molecules_Navigation = (Navigation);

/***/ })

};
;