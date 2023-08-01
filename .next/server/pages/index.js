/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"smallText\": \"index_smallText__jlWss\",\n\t\"titleContainer\": \"index_titleContainer__OGED6\",\n\t\"main\": \"index_main__3wZvj\",\n\t\"icon\": \"index_icon__CgRrC\",\n\t\"result\": \"index_result__66e57\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcz80ODM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNtYWxsVGV4dFwiOiBcImluZGV4X3NtYWxsVGV4dF9famxXc3NcIixcblx0XCJ0aXRsZUNvbnRhaW5lclwiOiBcImluZGV4X3RpdGxlQ29udGFpbmVyX19PR0VENlwiLFxuXHRcIm1haW5cIjogXCJpbmRleF9tYWluX18zd1p2alwiLFxuXHRcImljb25cIjogXCJpbmRleF9pY29uX19DZ1JyQ1wiLFxuXHRcInJlc3VsdFwiOiBcImluZGV4X3Jlc3VsdF9fNjZlNTdcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    // Changed state variable from animalInput to movieInput\n    const [ingredientInput, setIngredientInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [effortLevel, setEffortLevel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            // Added this line to convert the movie input string to an array. The trim() method removes any whitespace before or after each movie title.\n            const ingredientArray = [\n                ingredientInput.trim()\n            ];\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    ingredients: ingredientArray,\n                    effortLevel: effortLevel\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n            setResult(data.result);\n            // Cleared the movie input field after submitting\n            setIngredientInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    async function fetchRecipe(mealTitle) {\n        try {\n            const response = await fetch(\"/api/recipe\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    mealTitle\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n            // Add the new recipe to the recipes state variable\n            setRecipes((prevRecipes)=>({\n                    ...prevRecipes,\n                    [mealTitle]: data.result\n                }));\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    console.log(result); // Add this line\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI Quickstart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Recipe Ideas\"\n                    }, void 0, false, {\n                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            \"+ \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"ingredients\",\n                                placeholder: \"Enter a list of ingredients\",\n                                value: ingredientInput,\n                                onChange: (e)=>setIngredientInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate Recommendations\"\n                            }, void 0, false, {\n                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"20px\",\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    marginRight: \"10px\"\n                                },\n                                children: \"Quick and easy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"5\",\n                                name: \"effortLevel\",\n                                value: effortLevel,\n                                onChange: (e)=>setEffortLevel(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    marginLeft: \"10px\"\n                                },\n                                children: \"Time and effort required\"\n                            }, void 0, false, {\n                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                        children: result && result.split(\"\\n\").map((rec, index)=>rec && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleContainer),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: rec\n                                            }, void 0, false, {\n                                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>fetchRecipe(rec),\n                                                children: \"Get Recipe\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this),\n                                    recipes[rec] && recipes[rec].split(\"\\n\").map((line, lineIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().smallText),\n                                            children: line\n                                        }, lineIndex, false, {\n                                            fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 82\n                                        }, this))\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/williammontgomery/Documents/Projects/OpenAI/recipe-ideas/pages/index.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUlpQixPQUFPOzRCQUFFQyxXQUFXOzRCQUFRQyxTQUFTOzRCQUFRQyxZQUFZO3dCQUFTOzswQ0FDdkUsOERBQUNDO2dDQUFLSixPQUFPO29DQUFFSyxhQUFhO2dDQUFPOzBDQUFHOzs7Ozs7MENBQ3RDLDhEQUFDYjtnQ0FDQ0MsTUFBSztnQ0FDTGEsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSmIsTUFBSztnQ0FDTEUsT0FBTzVDO2dDQUNQNkMsVUFBVSxDQUFDQyxJQUFNN0MsZUFBZTZDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUVoRCw4REFBQ1E7Z0NBQUtKLE9BQU87b0NBQUVRLFlBQVk7Z0NBQU87MENBQUc7Ozs7Ozs7Ozs7OztrQ0FFckMsOERBQUN6Qjt3QkFBSU0sV0FBV3pDLGlFQUFhO2tDQUUzQk0sVUFBVUEsT0FBT3VELEtBQUssQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0MsUUFBVUQscUJBQy9DLDhEQUFDNUI7O2tEQUNDLDhEQUFDQTt3Q0FBSU0sV0FBV3pDLHlFQUFxQjs7MERBQ25DLDhEQUFDa0U7MERBQUdIOzs7Ozs7MERBQ0osOERBQUNJO2dEQUFPQyxTQUFTLElBQU1yQyxZQUFZZ0M7MERBQU07Ozs7Ozs7Ozs7OztvQ0FFMUN2RCxPQUFPLENBQUN1RCxJQUFJLElBQUl2RCxPQUFPLENBQUN1RCxJQUFJLENBQUNGLEtBQUssQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ08sTUFBTUMsMEJBQWMsOERBQUNKOzRDQUFFekIsV0FBV3pDLG9FQUFnQjtzREFBbUJxRTsyQ0FBWkM7Ozs7OzsrQkFMaEdOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXRCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIENoYW5nZWQgc3RhdGUgdmFyaWFibGUgZnJvbSBhbmltYWxJbnB1dCB0byBtb3ZpZUlucHV0XG4gIGNvbnN0IFtpbmdyZWRpZW50SW5wdXQsIHNldEluZ3JlZGllbnRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VmZm9ydExldmVsLCBzZXRFZmZvcnRMZXZlbF0gPSB1c2VTdGF0ZSgxKTsgXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcmVjaXBlcywgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiBcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICAvLyBBZGRlZCB0aGlzIGxpbmUgdG8gY29udmVydCB0aGUgbW92aWUgaW5wdXQgc3RyaW5nIHRvIGFuIGFycmF5LiBUaGUgdHJpbSgpIG1ldGhvZCByZW1vdmVzIGFueSB3aGl0ZXNwYWNlIGJlZm9yZSBvciBhZnRlciBlYWNoIG1vdmllIHRpdGxlLlxuICAgICAgY29uc3QgaW5ncmVkaWVudEFycmF5ID0gW2luZ3JlZGllbnRJbnB1dC50cmltKCldO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbmdyZWRpZW50czogaW5ncmVkaWVudEFycmF5LCBlZmZvcnRMZXZlbDogZWZmb3J0TGV2ZWwgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gICAgICAvLyBDbGVhcmVkIHRoZSBtb3ZpZSBpbnB1dCBmaWVsZCBhZnRlciBzdWJtaXR0aW5nXG4gICAgICBzZXRJbmdyZWRpZW50SW5wdXQoXCJcIik7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFJlY2lwZShtZWFsVGl0bGUpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmVjaXBlXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lYWxUaXRsZSB9KSxcbiAgICAgIH0pO1xuIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgbmV3IHJlY2lwZSB0byB0aGUgcmVjaXBlcyBzdGF0ZSB2YXJpYWJsZVxuICAgICAgc2V0UmVjaXBlcygocHJldlJlY2lwZXMpID0+ICh7XG4gICAgICAgIC4uLnByZXZSZWNpcGVzLFxuICAgICAgICBbbWVhbFRpdGxlXTogZGF0YS5yZXN1bHQsXG4gICAgICB9KSk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBBZGQgdGhpcyBsaW5lXG4gICBcbiAgIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICBcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDM+UmVjaXBlIElkZWFzPC9oMz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgKyA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImluZ3JlZGllbnRzXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbGlzdCBvZiBpbmdyZWRpZW50c1wiXG4gICAgICAgICAgdmFsdWU9e2luZ3JlZGllbnRJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEluZ3JlZGllbnRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIFJlY29tbWVuZGF0aW9uc1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT5RdWljayBhbmQgZWFzeTwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICBtYXg9XCI1XCJcbiAgICAgICAgICBuYW1lPVwiZWZmb3J0TGV2ZWxcIlxuICAgICAgICAgIHZhbHVlPXtlZmZvcnRMZXZlbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVmZm9ydExldmVsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PlRpbWUgYW5kIGVmZm9ydCByZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT5cbiAge1xuICAgICAgICAgIHJlc3VsdCAmJiByZXN1bHQuc3BsaXQoJ1xcbicpLm1hcCgocmVjLCBpbmRleCkgPT4gcmVjICYmIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxwPntyZWN9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZmV0Y2hSZWNpcGUocmVjKX0+R2V0IFJlY2lwZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3JlY2lwZXNbcmVjXSAmJiByZWNpcGVzW3JlY10uc3BsaXQoJ1xcbicpLm1hcCgobGluZSwgbGluZUluZGV4KSA9PiA8cCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbFRleHR9IGtleT17bGluZUluZGV4fT57bGluZX08L3A+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG4gIFxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJpbmdyZWRpZW50SW5wdXQiLCJzZXRJbmdyZWRpZW50SW5wdXQiLCJlZmZvcnRMZXZlbCIsInNldEVmZm9ydExldmVsIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbmdyZWRpZW50QXJyYXkiLCJ0cmltIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImluZ3JlZGllbnRzIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwibWVzc2FnZSIsImZldGNoUmVjaXBlIiwibWVhbFRpdGxlIiwicHJldlJlY2lwZXMiLCJsb2ciLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInNwYW4iLCJtYXJnaW5SaWdodCIsIm1pbiIsIm1heCIsIm1hcmdpbkxlZnQiLCJzcGxpdCIsIm1hcCIsInJlYyIsImluZGV4IiwidGl0bGVDb250YWluZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImxpbmUiLCJsaW5lSW5kZXgiLCJzbWFsbFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();