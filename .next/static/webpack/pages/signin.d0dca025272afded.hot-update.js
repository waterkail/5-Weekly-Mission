"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.tsx":
/*!**************************!*\
  !*** ./pages/signin.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ signin; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_auth_AuthFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/auth/AuthFrame */ \"./components/auth/AuthFrame.tsx\");\n/* harmony import */ var _components_auth_AuthSocial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth/AuthSocial */ \"./components/auth/AuthSocial.tsx\");\n/* harmony import */ var _components_auth_AuthFormCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth/AuthFormCase */ \"./components/auth/AuthFormCase.tsx\");\n/* harmony import */ var _components_Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Api/Api */ \"./components/Api/Api.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\\\uC774\\uD604\\uC2B9\\\\Desktop\\\\weekly\\\\5-Weekly-Mission\\\\pages\\\\signin.tsx\";\n\n\n\n\n\n\nconst checkSignInToken = function () {\n  const userToken = window.localStorage.getItem(_components_Api_Api__WEBPACK_IMPORTED_MODULE_4__.LOGIN_TOKEN);\n  if (userToken) {\n    location.href = \"./folder\";\n  }\n};\n(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => checkSignInToken(), []);\nfunction signin() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_auth_AuthFrame__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_auth_AuthFormCase__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      auth: \"signin\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_auth_AuthSocial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      auth: \"signin\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWTtBQUNFO0FBQ0k7QUFDUDtBQUFBO0FBRXBELE1BQU1RLGdCQUFnQixHQUFHLFNBQUFBLENBQUEsRUFBWTtFQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUNQLDREQUFXLENBQUM7RUFDMUQsSUFBSUksU0FBUyxFQUFFO0lBQ2JJLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFVBQVU7RUFDNUI7QUFDRixDQUFDO0FBRURiLGdEQUFTLENBQUMsTUFBTU8sZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUV4QixTQUFTTyxNQUFNQSxDQUFBLEVBQUc7RUFDL0Isb0JBQ0VSLDZEQUFBLENBQUNMLGtFQUFTO0lBQUFjLFFBQUEsZ0JBQ1JULDZEQUFBLENBQUNILHFFQUFZO01BQUNhLElBQUksRUFBQztJQUFRO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFlLENBQUMsZUFDM0NkLDZEQUFBLENBQUNKLG1FQUFVO01BQUNjLElBQUksRUFBQztJQUFRO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFhLENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FDOUIsQ0FBQztBQUVoQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduaW4udHN4PzdmOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aEZyYW1lIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvQXV0aEZyYW1lXCI7XHJcbmltcG9ydCBBdXRoU29jaWFsIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvQXV0aFNvY2lhbFwiO1xyXG5pbXBvcnQgQXV0aEZvcm1DYXNlIGZyb20gXCIuLi9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm1DYXNlXCI7XHJcbmltcG9ydCB7IExPR0lOX1RPS0VOIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpL0FwaVwiO1xyXG5cclxuY29uc3QgY2hlY2tTaWduSW5Ub2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB1c2VyVG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9HSU5fVE9LRU4pO1xyXG4gIGlmICh1c2VyVG9rZW4pIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBcIi4vZm9sZGVyXCI7XHJcbiAgfVxyXG59O1xyXG5cclxudXNlRWZmZWN0KCgpID0+IGNoZWNrU2lnbkluVG9rZW4oKSwgW10pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lnbmluKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aEZyYW1lPlxyXG4gICAgICA8QXV0aEZvcm1DYXNlIGF1dGg9XCJzaWduaW5cIj48L0F1dGhGb3JtQ2FzZT5cclxuICAgICAgPEF1dGhTb2NpYWwgYXV0aD1cInNpZ25pblwiPjwvQXV0aFNvY2lhbD5cclxuICAgIDwvQXV0aEZyYW1lPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQXV0aEZyYW1lIiwiQXV0aFNvY2lhbCIsIkF1dGhGb3JtQ2FzZSIsIkxPR0lOX1RPS0VOIiwianN4REVWIiwiX2pzeERFViIsImNoZWNrU2lnbkluVG9rZW4iLCJ1c2VyVG9rZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJocmVmIiwic2lnbmluIiwiY2hpbGRyZW4iLCJhdXRoIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.tsx\n"));

/***/ })

});