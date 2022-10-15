/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/domcontroller.js":
/*!**************************************!*\
  !*** ./src/modules/domcontroller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domelements */ "./src/modules/domelements.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var newTimer = function newTimer() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve();
      }, delay);
    });
  };

  var fade = function fade(el) {
    el.classList.toggle('fade-out');
  };

  var cascade = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(elems) {
      var i;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < elems.length)) {
                _context.next = 8;
                break;
              }

              _context.next = 4;
              return newTimer(100);

            case 4:
              fade(elems[i]);

            case 5:
              i += 1;
              _context.next = 1;
              break;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function cascade(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var updateWeather = function updateWeather(info) {
    var elems = _domelements__WEBPACK_IMPORTED_MODULE_0__.weatherInfoValues;
    elems.location.textContent = info.location;
    elems.tempMin.textContent = info.tempMin;
    elems.tempCurrent.textContent = info.tempCurrent;
    elems.tempMax.textContent = info.tempMax;
    elems.humidity.textContent = info.humidity;
    elems.wind.textContent = info.wind;
    elems.pressure.textContent = info.pressure;
    elems.clouds.textContent = info.clouds;
  };

  var toggleWeather = function toggleWeather() {
    var weatherElements = Object.values(_domelements__WEBPACK_IMPORTED_MODULE_0__.weatherInfo);
    cascade(weatherElements);
  };

  var showData = function showData(info) {
    updateWeather(info);
    toggleWeather();
  };

  var getUnit = function getUnit() {
    return document.querySelector('input[type=radio]:checked').value;
  };

  return {
    fade: fade,
    cascade: cascade,
    updateWeather: updateWeather,
    toggleWeather: toggleWeather,
    newTimer: newTimer,
    showData: showData,
    getUnit: getUnit
  };
})());

/***/ }),

/***/ "./src/modules/domelements.js":
/*!************************************!*\
  !*** ./src/modules/domelements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "tempUnitWrapper": () => (/* binding */ tempUnitWrapper),
/* harmony export */   "tempUnits": () => (/* binding */ tempUnits),
/* harmony export */   "weatherInfo": () => (/* binding */ weatherInfo),
/* harmony export */   "weatherInfoValues": () => (/* binding */ weatherInfoValues),
/* harmony export */   "weatherInfoWrapper": () => (/* binding */ weatherInfoWrapper)
/* harmony export */ });
var weatherInfoWrapper = document.getElementById('weather-info');
var weatherInfo = {
  location: document.getElementById('weather-location'),
  temp: document.querySelector('#temp'),
  clouds: document.querySelector('#clouds'),
  humidity: document.querySelector('#humidity'),
  wind: document.querySelector('#wind-speed'),
  pressure: document.querySelector('#pressure')
};
var weatherInfoValues = {
  location: document.getElementById('weather-location'),
  tempMin: document.querySelector('#temp-min .value'),
  tempCurrent: document.querySelector('#temp-current .value'),
  tempMax: document.querySelector('#temp-max .value'),
  clouds: document.querySelector('#clouds .value'),
  humidity: document.querySelector('#humidity .value'),
  wind: document.querySelector('#wind-speed .value'),
  pressure: document.querySelector('#pressure .value')
};
var query = document.getElementById('query');
var tempUnitWrapper = document.getElementById('temp-unit');
var tempUnits = {
  celcius: document.getElementById('unit-celcius'),
  farenheit: document.getElementById('unit-farenheit')
};

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi */ "./src/modules/weatherapi.js");
/* harmony import */ var _domcontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domcontroller */ "./src/modules/domcontroller.js");
/* harmony import */ var _domelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domelements */ "./src/modules/domelements.js");
/* harmony import */ var _weatherdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherdata */ "./src/modules/weatherdata.js");




var currentData;

function setMobileHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}

function displayQuery(location) {
  Promise.all([_weatherapi__WEBPACK_IMPORTED_MODULE_0__["default"].queryWeather(location), _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].newTimer(1000)]).then(function (res) {
    currentData = _weatherdata__WEBPACK_IMPORTED_MODULE_3__["default"].extractData(res[0]);
    var newData = _weatherdata__WEBPACK_IMPORTED_MODULE_3__["default"].updateTemperature(currentData, _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].getUnit());
    _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].showData(newData);
  })["catch"](function (err) {
    console.log(err);
    _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].cascade(Object.values(_domelements__WEBPACK_IMPORTED_MODULE_2__.weatherInfo));
  });
}

function toggleUnits() {
  _domelements__WEBPACK_IMPORTED_MODULE_2__.weatherInfo.temp.classList.toggle('celcius');
  _domelements__WEBPACK_IMPORTED_MODULE_2__.weatherInfo.temp.classList.toggle('farenheit');
  var newData = _weatherdata__WEBPACK_IMPORTED_MODULE_3__["default"].updateTemperature(currentData, _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].getUnit());
  _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].updateWeather(newData);
}

function addEventListeners() {
  _domelements__WEBPACK_IMPORTED_MODULE_2__.query.addEventListener('submit', function (e) {
    e.preventDefault();
    var location = new FormData(_domelements__WEBPACK_IMPORTED_MODULE_2__.query).get('location');
    _domelements__WEBPACK_IMPORTED_MODULE_2__.query.reset();
    _domcontroller__WEBPACK_IMPORTED_MODULE_1__["default"].cascade(Object.values(_domelements__WEBPACK_IMPORTED_MODULE_2__.weatherInfo));
    displayQuery(location);
  });
  _domelements__WEBPACK_IMPORTED_MODULE_2__.tempUnits.celcius.addEventListener('change', toggleUnits);
  _domelements__WEBPACK_IMPORTED_MODULE_2__.tempUnits.farenheit.addEventListener('change', toggleUnits);
}

function init() {
  addEventListeners();
  setMobileHeight(); // controller.toggleWeather();
  // displayQuery('London');
}

init();

/***/ }),

/***/ "./src/modules/weatherapi.js":
/*!***********************************!*\
  !*** ./src/modules/weatherapi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var getWeatherData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(lat, lon, key) {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(key), {
                mode: 'cors',
                method: 'GET'
              });

            case 2:
              res = _context.sent;
              return _context.abrupt("return", res.json());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getWeatherData(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var getLocationInfo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(location, key) {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(location, "&limit=1&appid=").concat(key), {
                mode: 'cors',
                method: 'GET'
              });

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              return _context2.abrupt("return", _context2.sent[0]);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getLocationInfo(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var queryWeather = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(location) {
      var key, locInfo;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              key = '6c2aaae07b183c9e04e5ac786b6c82d9';
              _context3.next = 3;
              return getLocationInfo(location, key);

            case 3:
              locInfo = _context3.sent;
              return _context3.abrupt("return", getWeatherData(locInfo.lat, locInfo.lon, key));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function queryWeather(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    queryWeather: queryWeather
  };
})());

/***/ }),

/***/ "./src/modules/weatherdata.js":
/*!************************************!*\
  !*** ./src/modules/weatherdata.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var to1DP = function to1DP(num) {
    return Math.round(num * 10) / 10;
  };

  var toFarenheit = function toFarenheit(info) {
    var convert = function convert(kelvin) {
      var absZero = 273.15;
      return 9 / 5 * (kelvin - absZero) + 32;
    };

    var newInfo = _objectSpread({}, info);

    newInfo.tempMin = to1DP(convert(info.tempMin));
    newInfo.tempCurrent = to1DP(convert(info.tempCurrent));
    newInfo.tempMax = to1DP(convert(info.tempMax));
    return newInfo;
  };

  var toCelcius = function toCelcius(info) {
    var convert = function convert(kelvin) {
      var absZero = 273.15;
      return kelvin - absZero;
    };

    var newInfo = _objectSpread({}, info);

    newInfo.tempMin = to1DP(convert(info.tempMin));
    newInfo.tempCurrent = to1DP(convert(info.tempCurrent));
    newInfo.tempMax = to1DP(convert(info.tempMax));
    return newInfo;
  };

  var extractData = function extractData(json) {
    var data = {
      location: json.name,
      tempMin: json.main.temp_min,
      tempCurrent: json.main.temp,
      tempMax: json.main.temp_max,
      humidity: json.main.humidity,
      wind: json.wind.speed,
      pressure: json.main.pressure,
      clouds: json.weather[0].description
    };
    return data;
  };

  function updateTemperature(data, unit) {
    if (unit === 'farenheit') return toFarenheit(data);
    return toCelcius(data);
  }

  return {
    extractData: extractData,
    updateTemperature: updateTemperature
  };
})());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/global.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.svg */ "./src/assets/background.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search.svg */ "./src/assets/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Raleway);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-font-stack: 'Raleway', serif;\n  --highlight-color: white;\n  --lowlight-color: #36a989;\n  --animation-timer: 500ms;\n  font-size: 32px;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat top fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  color: var(--highlight-color);\n  height: 100vh; /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  align-items: center;\n  font-family: var(--main-font-stack);\n}\n\n/* Fit viewport */\n\n#content {\n  padding: 1rem;\n}\n\n/* Classes */\n\n.underlined {\n  border-bottom: 2px solid var(--highlight-color);\n}\n\n/* Search bar */\n\n#query {\n  display: flex;\n}\n\ninput {\n  background: none;\n  font-size: 1rem;\n  color: var(--highlight-color);\n  text-align: left;\n}\n\ninput[type=text] {\n  width: min(300px, 90%);\n}\n\ninput[type=submit] {\n  margin: -30px;\n  cursor: pointer;\n  width: 30px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n  background-size: contain;\n}\n\n/* Unit selector */\n\n#temp-unit {\n  display: flex;\n  gap: 0.4rem;\n  margin: 0.2rem 0;\n}\n\ninput[type=radio]:checked {\n  border: 2px solid var(--lowlight-color);\n}\n\nlabel {\n  font-size: 0.6rem;\n  position: relative;\n}\n\ninput[type=radio] {\n  position: absolute;\n  border-radius: 10px;\n  top: -0.25rem;\n  left: -0.25rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n/* Weather Info */\n\n#weather-info {\n  display: grid;\n  gap: 0.5rem;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\n.title {\n  font-size: 0.5rem;\n}\n\n.value {\n  font-size: 1.4rem;\n}\n\n.sub {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.6rem;\n}\n\n#temp-current .value {\n  font-size: 4rem;\n  margin: -1rem 0 0.5rem 0;\n}\n\n/* Footer */\n\nfooter {\n  font-size: 0.5rem;\n  position: fixed;\n  bottom: 6px;\n  text-align: center;\n  width: 100%;\n}\n\na {\n  color: inherit;\n}\n\n/* Transitions */\n\n.transition {\n  transition: all var(--animation-timer) ease-in-out;\n}\n\n.fade-out {\n  opacity: 0;\n  transform: translateY(-30px);\n}", "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAEA;EACE,mCAAmC;EACnC,wBAAwB;EACxB,yBAAyB;EACzB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,uEAA+D;EAC/D,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa,EAAE,gEAAgE;EAC/E,kCAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;AACf;;AAEA,YAAY;;AAEZ;EACE,+CAA+C;AACjD;;AAEA,eAAe;;AAEf;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,oEAAwD;EACxD,wBAAwB;AAC1B;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA,WAAW;;AAEX;EACE,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA,gBAAgB;;AAEhB;EACE,kDAAkD;AACpD;;AAEA;EACE,UAAU;EACV,4BAA4B;AAC9B","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Raleway');\n\n:root {\n  --main-font-stack: 'Raleway', serif;\n  --highlight-color: white;\n  --lowlight-color: #36a989;\n  --animation-timer: 500ms;\n  font-size: 32px;\n}\n\nbody {\n  background: url('../assets/background.svg') no-repeat top fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  color: var(--highlight-color);\n  height: 100vh; /* Fallback for browsers that do not support Custom Properties */\n  height: calc(var(--vh, 1vh) * 100);\n  display: flex;\n  align-items: center;\n  font-family: var(--main-font-stack);\n}\n\n/* Fit viewport */\n\n#content {\n  padding: 1rem;\n}\n\n/* Classes */\n\n.underlined {\n  border-bottom: 2px solid var(--highlight-color);\n}\n\n/* Search bar */\n\n#query {\n  display: flex;\n}\n\ninput {\n  background: none;\n  font-size: 1rem;\n  color: var(--highlight-color);\n  text-align: left;\n}\n\ninput[type=text] {\n  width: min(300px, 90%);\n}\n\ninput[type=submit] {\n  margin: -30px;\n  cursor: pointer;\n  width: 30px;\n  background: url('../assets/search.svg') no-repeat center;\n  background-size: contain;\n}\n\n/* Unit selector */\n\n#temp-unit {\n  display: flex;\n  gap: 0.4rem;\n  margin: 0.2rem 0;\n}\n\ninput[type=radio]:checked {\n  border: 2px solid var(--lowlight-color);\n}\n\nlabel {\n  font-size: 0.6rem;\n  position: relative;\n}\n\ninput[type=radio] {\n  position: absolute;\n  border-radius: 10px;\n  top: -0.25rem;\n  left: -0.25rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n/* Weather Info */\n\n#weather-info {\n  display: grid;\n  gap: 0.5rem;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\n.title {\n  font-size: 0.5rem;\n}\n\n.value {\n  font-size: 1.4rem;\n}\n\n.sub {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.6rem;\n}\n\n#temp-current .value {\n  font-size: 4rem;\n  margin: -1rem 0 0.5rem 0;\n}\n\n/* Footer */\n\nfooter {\n  font-size: 0.5rem;\n  position: fixed;\n  bottom: 6px;\n  text-align: center;\n  width: 100%;\n}\n\na {\n  color: inherit;\n}\n\n/* Transitions */\n\n.transition {\n  transition: all var(--animation-timer) ease-in-out;\n}\n\n.fade-out {\n  opacity: 0;\n  transform: translateY(-30px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput {\n  appearance: none;\n  border: none;\n  text-align: center;\n}\ninput:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;AACf","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput {\n  appearance: none;\n  border: none;\n  text-align: center;\n}\ninput:focus {\n  outline: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/units.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/units.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".value::after {\n  font-size: .5rem;\n  vertical-align: middle;\n}\n\n.farenheit .value::after {\n  content: '°F';\n}\n\n.celcius .value::after {\n  content: '°C';\n}\n\n#humidity .value::after {\n  content: '%';\n}\n\n#wind-speed .value::after {\n  content: 'mph';\n}\n\n#pressure .value::after {\n  content: 'hPa';\n}", "",{"version":3,"sources":["webpack://./src/styles/units.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":[".value::after {\n  font-size: .5rem;\n  vertical-align: middle;\n}\n\n.farenheit .value::after {\n  content: '°F';\n}\n\n.celcius .value::after {\n  content: '°C';\n}\n\n#humidity .value::after {\n  content: '%';\n}\n\n#wind-speed .value::after {\n  content: 'mph';\n}\n\n#pressure .value::after {\n  content: 'hPa';\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/units.css":
/*!******************************!*\
  !*** ./src/styles/units.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_units_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./units.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/units.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_units_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_units_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_units_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_units_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/assets/background.svg":
/*!***********************************!*\
  !*** ./src/assets/background.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/search.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_units_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/units.css */ "./src/styles/units.css");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loader */ "./src/modules/loader.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL2RvbWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL2RvbWVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbW9kdWxlcy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL3dlYXRoZXJhcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tb2R1bGVzL3dlYXRoZXJkYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzL3VuaXRzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzL3VuaXRzLmNzcz9hYzdjIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVsZW1lbnRzIGZyb20gJy4vZG9tZWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBuZXdUaW1lciA9IChkZWxheSA9IDUwMCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgZGVsYXkpO1xuICB9KTtcblxuICBjb25zdCBmYWRlID0gKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZS1vdXQnKTtcbiAgfTtcblxuICBjb25zdCBjYXNjYWRlID0gYXN5bmMgKGVsZW1zKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgIGF3YWl0IG5ld1RpbWVyKDEwMCk7XG4gICAgICBmYWRlKGVsZW1zW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlV2VhdGhlciA9IChpbmZvKSA9PiB7XG4gICAgY29uc3QgZWxlbXMgPSBlbGVtZW50cy53ZWF0aGVySW5mb1ZhbHVlcztcbiAgICBlbGVtcy5sb2NhdGlvbi50ZXh0Q29udGVudCA9IGluZm8ubG9jYXRpb247XG4gICAgZWxlbXMudGVtcE1pbi50ZXh0Q29udGVudCA9IGluZm8udGVtcE1pbjtcbiAgICBlbGVtcy50ZW1wQ3VycmVudC50ZXh0Q29udGVudCA9IGluZm8udGVtcEN1cnJlbnQ7XG4gICAgZWxlbXMudGVtcE1heC50ZXh0Q29udGVudCA9IGluZm8udGVtcE1heDtcbiAgICBlbGVtcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGluZm8uaHVtaWRpdHk7XG4gICAgZWxlbXMud2luZC50ZXh0Q29udGVudCA9IGluZm8ud2luZDtcbiAgICBlbGVtcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IGluZm8ucHJlc3N1cmU7XG4gICAgZWxlbXMuY2xvdWRzLnRleHRDb250ZW50ID0gaW5mby5jbG91ZHM7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlV2VhdGhlciA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyRWxlbWVudHMgPSBPYmplY3QudmFsdWVzKGVsZW1lbnRzLndlYXRoZXJJbmZvKTtcbiAgICBjYXNjYWRlKHdlYXRoZXJFbGVtZW50cyk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0RhdGEgPSAoaW5mbykgPT4ge1xuICAgIHVwZGF0ZVdlYXRoZXIoaW5mbyk7XG4gICAgdG9nZ2xlV2VhdGhlcigpO1xuICB9O1xuXG4gIGNvbnN0IGdldFVuaXQgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJykudmFsdWU7XG5cbiAgcmV0dXJuIHtcbiAgICBmYWRlLFxuICAgIGNhc2NhZGUsXG4gICAgdXBkYXRlV2VhdGhlcixcbiAgICB0b2dnbGVXZWF0aGVyLFxuICAgIG5ld1RpbWVyLFxuICAgIHNob3dEYXRhLFxuICAgIGdldFVuaXQsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IHdlYXRoZXJJbmZvV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWluZm8nKTtcbmV4cG9ydCBjb25zdCB3ZWF0aGVySW5mbyA9IHtcbiAgbG9jYXRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWxvY2F0aW9uJyksXG4gIHRlbXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyksXG4gIGNsb3VkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3VkcycpLFxuICBodW1pZGl0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5JyksXG4gIHdpbmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyksXG4gIHByZXNzdXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlc3N1cmUnKSxcbn07XG5leHBvcnQgY29uc3Qgd2VhdGhlckluZm9WYWx1ZXMgPSB7XG4gIGxvY2F0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1sb2NhdGlvbicpLFxuICB0ZW1wTWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1taW4gLnZhbHVlJyksXG4gIHRlbXBDdXJyZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1jdXJyZW50IC52YWx1ZScpLFxuICB0ZW1wTWF4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1tYXggLnZhbHVlJyksXG4gIGNsb3VkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3VkcyAudmFsdWUnKSxcbiAgaHVtaWRpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eSAudmFsdWUnKSxcbiAgd2luZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQgLnZhbHVlJyksXG4gIHByZXNzdXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlc3N1cmUgLnZhbHVlJyksXG59O1xuZXhwb3J0IGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXJ5Jyk7XG5leHBvcnQgY29uc3QgdGVtcFVuaXRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtdW5pdCcpO1xuZXhwb3J0IGNvbnN0IHRlbXBVbml0cyA9IHtcbiAgY2VsY2l1czogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQtY2VsY2l1cycpLFxuICBmYXJlbmhlaXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0LWZhcmVuaGVpdCcpLFxufTtcbiIsImltcG9ydCB3ZWF0aGVyQVBJIGZyb20gJy4vd2VhdGhlcmFwaSc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2RvbWNvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgZWxlbWVudHMgZnJvbSAnLi9kb21lbGVtZW50cyc7XG5pbXBvcnQgd2VhdGhlckRhdGEgZnJvbSAnLi93ZWF0aGVyZGF0YSc7XG5cbmxldCBjdXJyZW50RGF0YTtcblxuZnVuY3Rpb24gc2V0TW9iaWxlSGVpZ2h0KCkge1xuICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlRdWVyeShsb2NhdGlvbikge1xuICBQcm9taXNlLmFsbChbXG4gICAgd2VhdGhlckFQSS5xdWVyeVdlYXRoZXIobG9jYXRpb24pLFxuICAgIGNvbnRyb2xsZXIubmV3VGltZXIoMTAwMCksXG4gIF0pXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY3VycmVudERhdGEgPSB3ZWF0aGVyRGF0YS5leHRyYWN0RGF0YShyZXNbMF0pO1xuICAgICAgY29uc3QgbmV3RGF0YSA9IHdlYXRoZXJEYXRhLnVwZGF0ZVRlbXBlcmF0dXJlKGN1cnJlbnREYXRhLCBjb250cm9sbGVyLmdldFVuaXQoKSk7XG4gICAgICBjb250cm9sbGVyLnNob3dEYXRhKG5ld0RhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBjb250cm9sbGVyLmNhc2NhZGUoT2JqZWN0LnZhbHVlcyhlbGVtZW50cy53ZWF0aGVySW5mbykpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgZWxlbWVudHMud2VhdGhlckluZm8udGVtcC5jbGFzc0xpc3QudG9nZ2xlKCdjZWxjaXVzJyk7XG4gIGVsZW1lbnRzLndlYXRoZXJJbmZvLnRlbXAuY2xhc3NMaXN0LnRvZ2dsZSgnZmFyZW5oZWl0Jyk7XG4gIGNvbnN0IG5ld0RhdGEgPSB3ZWF0aGVyRGF0YS51cGRhdGVUZW1wZXJhdHVyZShjdXJyZW50RGF0YSwgY29udHJvbGxlci5nZXRVbml0KCkpO1xuICBjb250cm9sbGVyLnVwZGF0ZVdlYXRoZXIobmV3RGF0YSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICBlbGVtZW50cy5xdWVyeS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBGb3JtRGF0YShlbGVtZW50cy5xdWVyeSkuZ2V0KCdsb2NhdGlvbicpO1xuICAgIGVsZW1lbnRzLnF1ZXJ5LnJlc2V0KCk7XG4gICAgY29udHJvbGxlci5jYXNjYWRlKE9iamVjdC52YWx1ZXMoZWxlbWVudHMud2VhdGhlckluZm8pKTtcbiAgICBkaXNwbGF5UXVlcnkobG9jYXRpb24pO1xuICB9KTtcblxuICBlbGVtZW50cy50ZW1wVW5pdHMuY2VsY2l1cy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0b2dnbGVVbml0cyk7XG4gIGVsZW1lbnRzLnRlbXBVbml0cy5mYXJlbmhlaXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdG9nZ2xlVW5pdHMpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBhZGRFdmVudExpc3RlbmVycygpO1xuICBzZXRNb2JpbGVIZWlnaHQoKTtcbiAgLy8gY29udHJvbGxlci50b2dnbGVXZWF0aGVyKCk7XG4gIC8vIGRpc3BsYXlRdWVyeSgnTG9uZG9uJyk7XG59XG5cbmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxhdCwgbG9uLCBrZXkpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtrZXl9YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnLCBtZXRob2Q6ICdHRVQnIH0sXG4gICAgKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfTtcblxuICBjb25zdCBnZXRMb2NhdGlvbkluZm8gPSBhc3luYyAobG9jYXRpb24sIGtleSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MSZhcHBpZD0ke2tleX1gLFxuICAgICAgeyBtb2RlOiAnY29ycycsIG1ldGhvZDogJ0dFVCcgfSxcbiAgICApO1xuICAgIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSlbMF07XG4gIH07XG5cbiAgY29uc3QgcXVlcnlXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gJzZjMmFhYWUwN2IxODNjOWUwNGU1YWM3ODZiNmM4MmQ5JztcbiAgICBjb25zdCBsb2NJbmZvID0gYXdhaXQgZ2V0TG9jYXRpb25JbmZvKGxvY2F0aW9uLCBrZXkpO1xuICAgIHJldHVybiBnZXRXZWF0aGVyRGF0YShsb2NJbmZvLmxhdCwgbG9jSW5mby5sb24sIGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcXVlcnlXZWF0aGVyIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgdG8xRFAgPSAobnVtKSA9PiBNYXRoLnJvdW5kKG51bSAqIDEwKSAvIDEwO1xuXG4gIGNvbnN0IHRvRmFyZW5oZWl0ID0gKGluZm8pID0+IHtcbiAgICBjb25zdCBjb252ZXJ0ID0gKGtlbHZpbikgPT4ge1xuICAgICAgY29uc3QgYWJzWmVybyA9IDI3My4xNTtcbiAgICAgIHJldHVybiAoKDkgLyA1KSAqIChrZWx2aW4gLSBhYnNaZXJvKSkgKyAzMjtcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luZm8gPSB7IC4uLmluZm8gfTtcbiAgICBuZXdJbmZvLnRlbXBNaW4gPSB0bzFEUChjb252ZXJ0KGluZm8udGVtcE1pbikpO1xuICAgIG5ld0luZm8udGVtcEN1cnJlbnQgPSB0bzFEUChjb252ZXJ0KGluZm8udGVtcEN1cnJlbnQpKTtcbiAgICBuZXdJbmZvLnRlbXBNYXggPSB0bzFEUChjb252ZXJ0KGluZm8udGVtcE1heCkpO1xuICAgIHJldHVybiBuZXdJbmZvO1xuICB9O1xuXG4gIGNvbnN0IHRvQ2VsY2l1cyA9IChpbmZvKSA9PiB7XG4gICAgY29uc3QgY29udmVydCA9IChrZWx2aW4pID0+IHtcbiAgICAgIGNvbnN0IGFic1plcm8gPSAyNzMuMTU7XG4gICAgICByZXR1cm4ga2VsdmluIC0gYWJzWmVybztcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luZm8gPSB7IC4uLmluZm8gfTtcbiAgICBuZXdJbmZvLnRlbXBNaW4gPSB0bzFEUChjb252ZXJ0KGluZm8udGVtcE1pbikpO1xuICAgIG5ld0luZm8udGVtcEN1cnJlbnQgPSB0bzFEUChjb252ZXJ0KGluZm8udGVtcEN1cnJlbnQpKTtcbiAgICBuZXdJbmZvLnRlbXBNYXggPSB0bzFEUChjb252ZXJ0KGluZm8udGVtcE1heCkpO1xuICAgIHJldHVybiBuZXdJbmZvO1xuICB9O1xuXG4gIGNvbnN0IGV4dHJhY3REYXRhID0gKGpzb24pID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbG9jYXRpb246IGpzb24ubmFtZSxcbiAgICAgIHRlbXBNaW46IGpzb24ubWFpbi50ZW1wX21pbixcbiAgICAgIHRlbXBDdXJyZW50OiBqc29uLm1haW4udGVtcCxcbiAgICAgIHRlbXBNYXg6IGpzb24ubWFpbi50ZW1wX21heCxcbiAgICAgIGh1bWlkaXR5OiBqc29uLm1haW4uaHVtaWRpdHksXG4gICAgICB3aW5kOiBqc29uLndpbmQuc3BlZWQsXG4gICAgICBwcmVzc3VyZToganNvbi5tYWluLnByZXNzdXJlLFxuICAgICAgY2xvdWRzOiBqc29uLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgfTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVUZW1wZXJhdHVyZShkYXRhLCB1bml0KSB7XG4gICAgaWYgKHVuaXQgPT09ICdmYXJlbmhlaXQnKSByZXR1cm4gdG9GYXJlbmhlaXQoZGF0YSk7XG4gICAgcmV0dXJuIHRvQ2VsY2l1cyhkYXRhKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXh0cmFjdERhdGEsXG4gICAgdXBkYXRlVGVtcGVyYXR1cmUsXG4gIH07XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkpO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1mb250LXN0YWNrOiAnUmFsZXdheScsIHNlcmlmO1xcbiAgLS1oaWdobGlnaHQtY29sb3I6IHdoaXRlO1xcbiAgLS1sb3dsaWdodC1jb2xvcjogIzM2YTk4OTtcXG4gIC0tYW5pbWF0aW9uLXRpbWVyOiA1MDBtcztcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCB0b3AgZml4ZWQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgQ3VzdG9tIFByb3BlcnRpZXMgKi9cXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQtc3RhY2spO1xcbn1cXG5cXG4vKiBGaXQgdmlld3BvcnQgKi9cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4vKiBDbGFzc2VzICovXFxuXFxuLnVuZGVybGluZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodC1jb2xvcik7XFxufVxcblxcbi8qIFNlYXJjaCBiYXIgKi9cXG5cXG4jcXVlcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICB3aWR0aDogbWluKDMwMHB4LCA5MCUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgbWFyZ2luOiAtMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4vKiBVbml0IHNlbGVjdG9yICovXFxuXFxuI3RlbXAtdW5pdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjRyZW07XFxuICBtYXJnaW46IDAuMnJlbSAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxvd2xpZ2h0LWNvbG9yKTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0b3A6IC0wLjI1cmVtO1xcbiAgbGVmdDogLTAuMjVyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLyogV2VhdGhlciBJbmZvICovXFxuXFxuI3dlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udmFsdWUge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5zdWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcblxcbiN0ZW1wLWN1cnJlbnQgLnZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbjogLTFyZW0gMCAwLjVyZW0gMDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyogVHJhbnNpdGlvbnMgKi9cXG5cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tYW5pbWF0aW9uLXRpbWVyKSBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhZGUtb3V0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVFQUErRDtFQUMvRCw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGFBQWEsRUFBRSxnRUFBZ0U7RUFDL0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLCtDQUErQztBQUNqRDs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0VBQXdEO0VBQ3hELHdCQUF3QjtBQUMxQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXknKTtcXG5cXG46cm9vdCB7XFxuICAtLW1haW4tZm9udC1zdGFjazogJ1JhbGV3YXknLCBzZXJpZjtcXG4gIC0taGlnaGxpZ2h0LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbG93bGlnaHQtY29sb3I6ICMzNmE5ODk7XFxuICAtLWFuaW1hdGlvbi10aW1lcjogNTAwbXM7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvYmFja2dyb3VuZC5zdmcnKSBuby1yZXBlYXQgdG9wIGZpeGVkO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7IC8qIEZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEN1c3RvbSBQcm9wZXJ0aWVzICovXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250LXN0YWNrKTtcXG59XFxuXFxuLyogRml0IHZpZXdwb3J0ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLyogQ2xhc3NlcyAqL1xcblxcbi51bmRlcmxpbmVkIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbn1cXG5cXG4vKiBTZWFyY2ggYmFyICovXFxuXFxuI3F1ZXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmlucHV0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IG1pbigzMDBweCwgOTAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIG1hcmdpbjogLTMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL3NlYXJjaC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4vKiBVbml0IHNlbGVjdG9yICovXFxuXFxuI3RlbXAtdW5pdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjRyZW07XFxuICBtYXJnaW46IDAuMnJlbSAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxvd2xpZ2h0LWNvbG9yKTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0b3A6IC0wLjI1cmVtO1xcbiAgbGVmdDogLTAuMjVyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLyogV2VhdGhlciBJbmZvICovXFxuXFxuI3dlYXRoZXItaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4udmFsdWUge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5zdWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcblxcbiN0ZW1wLWN1cnJlbnQgLnZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbjogLTFyZW0gMCAwLjVyZW0gMDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyogVHJhbnNpdGlvbnMgKi9cXG5cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tYW5pbWF0aW9uLXRpbWVyKSBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhZGUtb3V0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5pbnB1dCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudmFsdWU6OmFmdGVyIHtcXG4gIGZvbnQtc2l6ZTogLjVyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZmFyZW5oZWl0IC52YWx1ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ8KwRic7XFxufVxcblxcbi5jZWxjaXVzIC52YWx1ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ8KwQyc7XFxufVxcblxcbiNodW1pZGl0eSAudmFsdWU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICclJztcXG59XFxuXFxuI3dpbmQtc3BlZWQgLnZhbHVlOjphZnRlciB7XFxuICBjb250ZW50OiAnbXBoJztcXG59XFxuXFxuI3ByZXNzdXJlIC52YWx1ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogJ2hQYSc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdW5pdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi52YWx1ZTo6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiAuNXJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5mYXJlbmhlaXQgLnZhbHVlOjphZnRlciB7XFxuICBjb250ZW50OiAnwrBGJztcXG59XFxuXFxuLmNlbGNpdXMgLnZhbHVlOjphZnRlciB7XFxuICBjb250ZW50OiAnwrBDJztcXG59XFxuXFxuI2h1bWlkaXR5IC52YWx1ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyUnO1xcbn1cXG5cXG4jd2luZC1zcGVlZCAudmFsdWU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdtcGgnO1xcbn1cXG5cXG4jcHJlc3N1cmUgLnZhbHVlOjphZnRlciB7XFxuICBjb250ZW50OiAnaFBhJztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdW5pdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91bml0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3VuaXRzLmNzcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9sb2FkZXInO1xuIl0sIm5hbWVzIjpbImVsZW1lbnRzIiwibmV3VGltZXIiLCJkZWxheSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZhZGUiLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNhc2NhZGUiLCJlbGVtcyIsImkiLCJsZW5ndGgiLCJ1cGRhdGVXZWF0aGVyIiwiaW5mbyIsIndlYXRoZXJJbmZvVmFsdWVzIiwibG9jYXRpb24iLCJ0ZXh0Q29udGVudCIsInRlbXBNaW4iLCJ0ZW1wQ3VycmVudCIsInRlbXBNYXgiLCJodW1pZGl0eSIsIndpbmQiLCJwcmVzc3VyZSIsImNsb3VkcyIsInRvZ2dsZVdlYXRoZXIiLCJ3ZWF0aGVyRWxlbWVudHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ3ZWF0aGVySW5mbyIsInNob3dEYXRhIiwiZ2V0VW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwid2VhdGhlckluZm9XcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZW1wIiwicXVlcnkiLCJ0ZW1wVW5pdFdyYXBwZXIiLCJ0ZW1wVW5pdHMiLCJjZWxjaXVzIiwiZmFyZW5oZWl0Iiwid2VhdGhlckFQSSIsImNvbnRyb2xsZXIiLCJ3ZWF0aGVyRGF0YSIsImN1cnJlbnREYXRhIiwic2V0TW9iaWxlSGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJkaXNwbGF5UXVlcnkiLCJhbGwiLCJxdWVyeVdlYXRoZXIiLCJ0aGVuIiwicmVzIiwiZXh0cmFjdERhdGEiLCJuZXdEYXRhIiwidXBkYXRlVGVtcGVyYXR1cmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlVW5pdHMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImdldCIsInJlc2V0IiwiaW5pdCIsImdldFdlYXRoZXJEYXRhIiwibGF0IiwibG9uIiwia2V5IiwiZmV0Y2giLCJtb2RlIiwibWV0aG9kIiwianNvbiIsImdldExvY2F0aW9uSW5mbyIsImxvY0luZm8iLCJ0bzFEUCIsIm51bSIsIk1hdGgiLCJyb3VuZCIsInRvRmFyZW5oZWl0IiwiY29udmVydCIsImtlbHZpbiIsImFic1plcm8iLCJuZXdJbmZvIiwidG9DZWxjaXVzIiwiZGF0YSIsIm5hbWUiLCJtYWluIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsInNwZWVkIiwid2VhdGhlciIsImRlc2NyaXB0aW9uIiwidW5pdCJdLCJzb3VyY2VSb290IjoiIn0=