"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"(app-pages-browser)/./node_modules/react-spinners/ClipLoader.js\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"(app-pages-browser)/./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_main_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/main/Hero */ \"(app-pages-browser)/./components/main/Hero.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LoadingScreen = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {\n                color: \"#4A90E2\",\n                size: 60\n            }, void 0, false, {\n                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    options: {\n                        strings: \"Let's build something great, together.\",\n                        autoStart: true,\n                        loop: false\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n_c = LoadingScreen;\nconst LandingLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsLoading(false);\n        }, 5.0); // Set loading screen to last 5 seconds\n        return ()=>clearTimeout(timer);\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingScreen, {}, void 0, false, {\n            fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-screen-xl w-full\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/app/layout.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LandingLayout, \"Yt82d/dvZsn5nYh5sqDQjv+rJ38=\");\n_c1 = LandingLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingLayout);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoadingScreen\");\n$RefreshReg$(_c1, \"LandingLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0E7QUFDUjtBQUNEO0FBSTFDLE1BQU1NLGdCQUFnQixrQkFDcEIsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDTCxrRUFBVUE7Z0JBQUNNLE9BQU07Z0JBQVVDLE1BQU07Ozs7OzswQkFDbEMsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSiwwREFBVUE7b0JBQ1RPLFNBQVM7d0JBQ1BDLFNBQVM7d0JBQ1RDLFdBQVc7d0JBQ1hDLE1BQU07b0JBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBVEZSO0FBZU4sTUFBTVMsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFpQzs7SUFDaEUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsUUFBUUMsV0FBVztZQUN2QkYsYUFBYTtRQUNmLEdBQUcsTUFBTSx1Q0FBdUM7UUFFaEQsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxJQUFJRixXQUFXO1FBQ2IscUJBQU8sOERBQUNYOzs7OztJQUNWO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFLZCxXQUFVOzswQkFDZCw4REFBQ0gsNkRBQUlBOzs7OzswQkFDTCw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQWtDUTs7Ozs7Ozs7Ozs7O0FBR3ZEO0dBckJNRDtNQUFBQTtBQXVCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tICdyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyJztcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3R5cGV3cml0ZXItZWZmZWN0JztcbmltcG9ydCBIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvbWFpbi9IZXJvXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIkAvY29tcG9uZW50cy9tYWluL1Byb2plY3RzXCI7XG5pbXBvcnQgU2tpbGxzIGZyb20gXCJAL2NvbXBvbmVudHMvbWFpbi9Ta2lsbHNcIjtcblxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj5cbiAgICA8Q2xpcExvYWRlciBjb2xvcj1cIiM0QTkwRTJcIiBzaXplPXs2MH0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgIDxUeXBld3JpdGVyXG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBzdHJpbmdzOiBcIkxldCdzIGJ1aWxkIHNvbWV0aGluZyBncmVhdCwgdG9nZXRoZXIuXCIsXG4gICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMYW5kaW5nTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgNS4wKTsgLy8gU2V0IGxvYWRpbmcgc2NyZWVuIHRvIGxhc3QgNSBzZWNvbmRzXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmdTY3JlZW4gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4teGwgdy1mdWxsXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNsaXBMb2FkZXIiLCJUeXBld3JpdGVyIiwiSGVybyIsIkxvYWRpbmdTY3JlZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb2xvciIsInNpemUiLCJvcHRpb25zIiwic3RyaW5ncyIsImF1dG9TdGFydCIsImxvb3AiLCJMYW5kaW5nTGF5b3V0IiwiY2hpbGRyZW4iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});