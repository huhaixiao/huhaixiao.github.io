/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/Deferred.js":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/Deferred.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js":
/*!***********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js":
/*!***************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js":
/*!***********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/timeout.js":
/*!************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/timeout.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/waitUntil.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/waitUntil.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js":
/*!****************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js ***!
  \****************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/copyResponse.js":
/*!********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/copyResponse.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/messages/messages.js":
/*!********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/messages/messages.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheController.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheController.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheRoute.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_types.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_types.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js ***!
  \****************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addPlugins.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addPlugins.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addRoute.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addRoute.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/index.js":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/index.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/matchPrecache.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/matchPrecache.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precache.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precache.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precacheAndRoute.js":
/*!************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/RegExpRoute.js":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/RegExpRoute.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Route.js":
/*!*******************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Route.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Router.js":
/*!********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Router.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js":
/*!**********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js ***!
  \**********************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/registerRoute.js":
/*!***************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/registerRoute.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/constants.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/constants.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-routing@6.5.4/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/Strategy.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/Strategy.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/StrategyHandler.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/StrategyHandler.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-core@6.5.4/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/_version.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-strategies@6.5.4/node_modules/workbox-strategies/_version.js ***!
  \****************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/index.mjs":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/index.mjs ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/index.js");


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/registry.npmmirror.com+@docusaurus+plugin-pwa@2.4.0_jgxnvbe4faw3ohf4h6p42qq6oy/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "../../node_modules/.pnpm/registry.npmmirror.com+workbox-precaching@6.5.4/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"9dfdca7cd722b8bd6082c6be2b73ee9a","url":"404.html"},{"revision":"f4c252796600e90a39c234aa3f529ce2","url":"assets/css/styles.c3b166e1.css"},{"revision":"59dd1cbe9ce07bd92547d49d2c9e06c4","url":"assets/js/01364aa9.b88d9c99.js"},{"revision":"7291b7c86416793f708c1df2f6fc2762","url":"assets/js/01f8e450.5d538dfc.js"},{"revision":"ba2a14820c3d46d33cd7c79834c5fbdb","url":"assets/js/02f75d90.9849bf47.js"},{"revision":"97e0f23fc7576173757bf990894c37c9","url":"assets/js/030966d6.882288cc.js"},{"revision":"141b5286065cc238b2ebaaa5fa16cd11","url":"assets/js/03c22545.8582c6e7.js"},{"revision":"d7e5f73dadef186c0c3d71388e27acc4","url":"assets/js/0686f54e.40e419d7.js"},{"revision":"3e194c533969079d3c183e708450683c","url":"assets/js/082b16a6.1f92a8f5.js"},{"revision":"b40f97c3be0ae855759f88865d24c02b","url":"assets/js/09631fd3.402b24c6.js"},{"revision":"d242c53072c92d07e5c65cfe7e655b01","url":"assets/js/0c00776e.7717ff78.js"},{"revision":"08db2daaa383c5eb296d182d5d9d645e","url":"assets/js/0df88e3c.2a166962.js"},{"revision":"4cc202756dfd0120bea70e9717c1d3f0","url":"assets/js/0f774b39.3e13ecc7.js"},{"revision":"ada05e3d7e5fd73013cdd4c9991bda71","url":"assets/js/1009.65595317.js"},{"revision":"e6cbe14332447e63bc1295549c939153","url":"assets/js/1011b481.ef81defa.js"},{"revision":"5c5beb7b845a2e118a2369ea338ba657","url":"assets/js/105715cc.6e9909d0.js"},{"revision":"63f470ea201ee1e683ee2316b26383f6","url":"assets/js/105f5712.7ffc709f.js"},{"revision":"58d9fb9b5f74098a5e74de5f64264a98","url":"assets/js/11e3ad93.1a85eb2f.js"},{"revision":"3cfd3f0c28ca5347560f1f34bec6885b","url":"assets/js/1234d6c7.7206d31e.js"},{"revision":"e56089de7fbaddabca8571c34a9586b0","url":"assets/js/131fffc0.2e6c91c2.js"},{"revision":"565afa05d6fb5b08e5ad4e4c8af0d241","url":"assets/js/134a7a71.9bddb5f5.js"},{"revision":"92d31b20aecdb33dec6990f47ed535b1","url":"assets/js/13a5875b.6e413a27.js"},{"revision":"d3ebc66aa85d63ad545466f25b246d80","url":"assets/js/14eb3368.2e3f54f2.js"},{"revision":"be2007cb7a6070cd156edb9ed2887ca8","url":"assets/js/174d51b6.202ce8d0.js"},{"revision":"268f9cf521cedb97b6ee16a1e4619942","url":"assets/js/17896441.8642e0f5.js"},{"revision":"3f8971cf58a6353b275030becb94f943","url":"assets/js/183d77c8.909a4a04.js"},{"revision":"f2017c0a1f0bfa93ad4b8a3308563212","url":"assets/js/18d5c7b9.60f37920.js"},{"revision":"56b5e08bdad46c77a57696c48ff01258","url":"assets/js/19442d05.b6d30b9b.js"},{"revision":"e429e1dde8a1d468a9d6abdeba6e68a8","url":"assets/js/1bc2aaeb.2ee61552.js"},{"revision":"fdf286eaaadb6d15eb355710065533c9","url":"assets/js/1be78505.7f56bd50.js"},{"revision":"a7d3d6f75ad4f16e192f17ff6411e5a0","url":"assets/js/1bf0d593.8628e3f5.js"},{"revision":"5ec77a264f1fb57f28d79451be8fe345","url":"assets/js/1d0522c1.e19e42c9.js"},{"revision":"6cd4fd99d80e7c026e02efd7ad63a58e","url":"assets/js/1d63ea7e.4c164c80.js"},{"revision":"be84f9a567245764fad9b59e40c4d361","url":"assets/js/1daae316.7d629ea9.js"},{"revision":"2865a1f26a8e3105bc639608b26396f1","url":"assets/js/1df93b7f.d503a06b.js"},{"revision":"c97bcaea46a10569bb298415015969c5","url":"assets/js/1f391b9e.58db6c8b.js"},{"revision":"990df5b10e95d4d41c40f7ad8bef8fb6","url":"assets/js/1fdad42b.2ff06534.js"},{"revision":"4fc9ffabab02efa14bfef073c443d913","url":"assets/js/1fdf5479.96ac77bc.js"},{"revision":"c27dc4a548f8ab022aaf42db3a9569ce","url":"assets/js/211a3dda.2f2b7728.js"},{"revision":"4640d2c60f8d7878b207888d18b6a644","url":"assets/js/2188bdcf.322ea7b6.js"},{"revision":"95d511bbcd67435d5ef4284f0109f9b0","url":"assets/js/2263580f.e3547830.js"},{"revision":"e299ae1e415049b5ce80503e2a454288","url":"assets/js/262ee9c1.1ae8f5c6.js"},{"revision":"f39c65a39ed89e37f2c1f74d4ff05f4b","url":"assets/js/2994fb4e.5422f57b.js"},{"revision":"8db574314b008c3638e274af91550e19","url":"assets/js/2c3112c3.1febae32.js"},{"revision":"b22b6b6b21471fd146761173503df117","url":"assets/js/2d263d90.0c9082e9.js"},{"revision":"6a26a5885ceea98a2425a41ddd787906","url":"assets/js/2d691494.4c9dc64a.js"},{"revision":"17cfe96ac150011ee08a3604bcee20f2","url":"assets/js/2ebfc6c2.af631abe.js"},{"revision":"835d6fb4dd27f523044e4fa937b45cf5","url":"assets/js/338ae420.5e7bf8ae.js"},{"revision":"50b9db6ea06dbaeb67e66a8f41769932","url":"assets/js/344111a4.452b246b.js"},{"revision":"27e27826ec60f5504b995f0cb75ce3f7","url":"assets/js/35b5e06d.f89a9f6e.js"},{"revision":"ba0f0d47a4bede27fdc25e9f17ce7155","url":"assets/js/35b7ced5.86fae696.js"},{"revision":"b7f77f6d91ed23c4699061b17bbabf40","url":"assets/js/36dc35c9.c7c71cce.js"},{"revision":"fb8f559956dafc957f054ca4561f641c","url":"assets/js/393be207.42be267b.js"},{"revision":"9bebd959c4d6058676f0087d3a0385dc","url":"assets/js/395b4f41.2baeff06.js"},{"revision":"1fa70292b0b9bcffdc39fd0d738c364f","url":"assets/js/39fc4eb5.789f3701.js"},{"revision":"46849b413c4d19ade769892fa55ecef3","url":"assets/js/3bedf141.15ed3785.js"},{"revision":"b5e6bc1c6912acff3d75c3047d413606","url":"assets/js/3c2aca90.1869e558.js"},{"revision":"84f0abd6ec03f4bc67677514ba9da9ce","url":"assets/js/3ca75178.a867b306.js"},{"revision":"75e80d3b4e2ff61448ff1e3f6c2b0e05","url":"assets/js/3cc695b4.75443ea7.js"},{"revision":"7a2babeed1ca311284017d92d5df5fad","url":"assets/js/3edc8e6c.12a373fb.js"},{"revision":"161bc8bb9e6a8b7969c8fae98c22d2e1","url":"assets/js/3f8c9b44.4717e492.js"},{"revision":"70d3b58405ca4dceb4613ecb63b34927","url":"assets/js/40af2c87.d5d6fd0d.js"},{"revision":"61a1b551293da7904d1f5d77d90b4191","url":"assets/js/40d13998.ee34715e.js"},{"revision":"315d42fa53cab46e6255d5f066f5aa78","url":"assets/js/40ef56fb.bdd27fc0.js"},{"revision":"57342b21e147d25720a79e6d1910df72","url":"assets/js/451f1995.69bdf607.js"},{"revision":"39a3240be41759295d1462383e6fa241","url":"assets/js/481de7eb.3398765a.js"},{"revision":"6530381319f444913fa49501904b94d3","url":"assets/js/482ae981.8ff0f5a4.js"},{"revision":"0d63e6eeeefa857233a78ffa1690c6ea","url":"assets/js/487a8d5a.91cecf1d.js"},{"revision":"1598ecc93d7c4a4630fdb3b03ae23a11","url":"assets/js/48972eaa.af81721b.js"},{"revision":"61fd2f1f66184e73d44e680bc4f2c7bf","url":"assets/js/4a1f34c7.0c90d0bd.js"},{"revision":"9a865839920124a754fe72aeefeca607","url":"assets/js/4ac1a44a.f2c42185.js"},{"revision":"91ff01b3816e91f6d9b242a81fbf2d94","url":"assets/js/4e4d9a70.24bdbae2.js"},{"revision":"4db8dff71acc31a273c3c49f3a5cb66e","url":"assets/js/4ebaeda7.904b22a6.js"},{"revision":"0f720192e3ad65df495549df52b7dc70","url":"assets/js/4fdff4ba.70bae7fa.js"},{"revision":"f2e0aa62663ca4f76d74799edc51c881","url":"assets/js/5027.698f18f9.js"},{"revision":"1320bde0de6606ffc255878c9e0690ae","url":"assets/js/5061b908.62a58f9d.js"},{"revision":"a2df5421fe790aed304efb68bb4a3893","url":"assets/js/520a63be.ab70b81b.js"},{"revision":"b091111b0d7cbf25aea876366518f3ed","url":"assets/js/542d8f70.328c2ee2.js"},{"revision":"228f58b4dc60c18acd5b7e0762338d52","url":"assets/js/551e476d.6e9d9e97.js"},{"revision":"f48c350f6d1d258bcf5f07ba83af00bd","url":"assets/js/5529a1e7.2a0ddc0a.js"},{"revision":"3cb7c7a50726c2b3a2dba0b9e1087a9b","url":"assets/js/5550a494.c6f59507.js"},{"revision":"1a1f734360e5e694f3ec98d5b53fa1b7","url":"assets/js/5590238f.8932c499.js"},{"revision":"93698f09d9b0bbeb9fa92db1a56587ca","url":"assets/js/5650d162.a17c35e3.js"},{"revision":"23d2321cb117ff821bc027f7bb5d3a31","url":"assets/js/591a662b.f39fe568.js"},{"revision":"83c7abd7aa6c19ca29c863681c51df92","url":"assets/js/59e854f0.c671c041.js"},{"revision":"9e69a6504f74bfd8feaffea019abe2d2","url":"assets/js/5aa942a1.494054bc.js"},{"revision":"2ab67c47217ca4d4d519e389693e7a9c","url":"assets/js/5bd975de.315f107e.js"},{"revision":"9f458c4d70241afa22ee88203482e35a","url":"assets/js/5dc94905.47fb08bf.js"},{"revision":"bc60cc5826b81c886ed8a6bd7c9516b3","url":"assets/js/5f977614.8baba6d0.js"},{"revision":"b7785ea755696718982460050b4d9bc4","url":"assets/js/6100.b08b4abc.js"},{"revision":"1378ef0eb5adb24780e9219759ad159e","url":"assets/js/65b7c72e.1acc802d.js"},{"revision":"625a924451483c46997deb29a9531503","url":"assets/js/6a89eb86.a72c9a6c.js"},{"revision":"d0a5eea872c1e2a30c9cb4306ac2baca","url":"assets/js/6d07597b.8e2601d1.js"},{"revision":"c9134d94088fa999135869cb8ca6ce22","url":"assets/js/6e47c4b2.7605b75f.js"},{"revision":"0c7a2bc9ffa463788685998896b2b9fd","url":"assets/js/6eff9458.c7918f04.js"},{"revision":"5314936524333751866aa7ebac573f9a","url":"assets/js/6f05e842.56ffd44e.js"},{"revision":"ca2f59b2eaaacc846c167b5f21b4e5c8","url":"assets/js/6f19bdda.aef854cb.js"},{"revision":"f8c1f2a40d74de9e463bc8c102dea9db","url":"assets/js/6fb48a40.4f57e00f.js"},{"revision":"6b99bb4405d1b9ec34421f2297df2b5b","url":"assets/js/6fe0da43.e513f9f6.js"},{"revision":"85da39da2e89f6dbfedead8ca2c6355f","url":"assets/js/705bfdbd.741e21c8.js"},{"revision":"13ff8a55c921169441b4dc9ce64ca74f","url":"assets/js/70e273b6.9e212152.js"},{"revision":"f29d59d7315d811cf14cf9a783d9878d","url":"assets/js/70ece17c.ab782fc6.js"},{"revision":"a1c7763cdb6da727af33133e162b77af","url":"assets/js/7632.a60742a4.js"},{"revision":"d398b371b7d54ce8c685d76ff7f6840b","url":"assets/js/78d8ce9a.e37bd90c.js"},{"revision":"8e3273728c5e4de6b5e2ec1568bb8fbc","url":"assets/js/7a4b3a8a.ee42a422.js"},{"revision":"de656dba292581cc3d51a2fa48ea0efb","url":"assets/js/7aa3c1ec.bbd44324.js"},{"revision":"d7e57933aeefc486cfce6f3e5de4adfa","url":"assets/js/7b1bb41c.34fa2ee3.js"},{"revision":"01ac030d0504e9d63369720c0e67f01e","url":"assets/js/7c3ad4a7.2acadb7a.js"},{"revision":"a43782a38c8fcb0f4b6c6af021eb3b01","url":"assets/js/7e48c463.9d3d2905.js"},{"revision":"973919e5f2034902c17860cdee1634c3","url":"assets/js/7f27ab3e.dd7909a2.js"},{"revision":"eaf9f9d55cdd7e345f3f7a9a99dec576","url":"assets/js/7fd86d7f.e19b11aa.js"},{"revision":"0b8ce56b70602bfdcd28a147bbf5c4f8","url":"assets/js/8202.a4de6ba1.js"},{"revision":"e8a5d4048c1fdb9a3dc35db592c89ffd","url":"assets/js/82fafe8a.a0fd2258.js"},{"revision":"4fb24ce09f0b033ba663272201f4ca42","url":"assets/js/8414e825.169de3d6.js"},{"revision":"ad66466c0680b1c07f6a8aae9baae4bf","url":"assets/js/854b535b.576e2cd2.js"},{"revision":"7c6074bdaf696df38a71f04554cac3c1","url":"assets/js/855a3fb8.75794405.js"},{"revision":"4a540d40f9138cf67591c6184208e0ff","url":"assets/js/87b39951.f2ee3a97.js"},{"revision":"b19ad11152d415adb7d9a5e6ab373418","url":"assets/js/87b5849b.51f6e683.js"},{"revision":"86a4d3eef0fffb7d31abfe3d0a7810fb","url":"assets/js/8b787474.b431bb69.js"},{"revision":"b67b7ab0abc5ab728e4aed03c911f2ab","url":"assets/js/8dc82001.d9dc0fe5.js"},{"revision":"695ada572f02b121d8c6a11eda859be4","url":"assets/js/8ea056d1.921a045b.js"},{"revision":"c254d6ecebcfe9151824dfbfecf5f28f","url":"assets/js/913390b5.b638cf12.js"},{"revision":"1106742565099a70070b0fe00db1c11f","url":"assets/js/931f2c69.5421f7ee.js"},{"revision":"f3d7c52fd17afdbc64d66744fa131f75","url":"assets/js/935f2afb.2bf8bb6a.js"},{"revision":"51229be6d916f8fd98a24f38d058f668","url":"assets/js/945bfc82.ad5ee814.js"},{"revision":"21895f63ea3dc4931147a9f9772d2786","url":"assets/js/94f20dbc.9c310461.js"},{"revision":"862a80fdad24771f47432cb8300e61da","url":"assets/js/9672bf26.e96e7bfb.js"},{"revision":"d60b302999739287de47b655c2dde333","url":"assets/js/9755b46a.826febc4.js"},{"revision":"78e34c81f705f89758f05effb84364b5","url":"assets/js/98bfe4d1.5beeffba.js"},{"revision":"7f2630b0b3725555402c6d8a8dfd58ff","url":"assets/js/9be7133a.ab4eec92.js"},{"revision":"5eb6537ab28a5f7a53eeff603c43b57a","url":"assets/js/9da2dca2.b5518309.js"},{"revision":"3c9fa73777b56e8aaecf274f1a55de42","url":"assets/js/9db18407.87000b32.js"},{"revision":"f7854f25a971a0a75f5015ddf3c96ac8","url":"assets/js/9e0937ee.6bb913c1.js"},{"revision":"b8b6f72c8b9131410c2e36ed0cce2403","url":"assets/js/a02738ae.83d47e8a.js"},{"revision":"2b0d4d77414888e16c2e2d8244238cee","url":"assets/js/a106dd2b.c9b1626d.js"},{"revision":"e9dc2f1a099cf4334769d9d51c81c447","url":"assets/js/a191796e.f1b37555.js"},{"revision":"1606c204b975c5839e3bd85e062269f0","url":"assets/js/a2252fcc.e38cb0ec.js"},{"revision":"98cd292f76a4b5db636eb7e0165e6568","url":"assets/js/a2c407a4.945ec8b3.js"},{"revision":"e2f9dcf44e63e4222ed9cfdd62fab7f7","url":"assets/js/a517e9f5.c66edb10.js"},{"revision":"bc759adf31226c149564c8127b930b27","url":"assets/js/a61da589.1b68e1b6.js"},{"revision":"361fd3189efd7743ef68700a060e56df","url":"assets/js/a629dfa5.38fb80f5.js"},{"revision":"db2b5c2998751de7d77922c9a7525453","url":"assets/js/a6aeb8b5.9f4b14f6.js"},{"revision":"427b933a269deb2b7f63078d2c3934cd","url":"assets/js/a7397399.445e1b21.js"},{"revision":"381b3e6d86ca2999b5e743490dc6aba3","url":"assets/js/a75044a8.af1a31ca.js"},{"revision":"2f099f006f974d126ac5770da93ab9b5","url":"assets/js/a778535a.6fb316b6.js"},{"revision":"439376b675b5a399df59f0419e08d62f","url":"assets/js/a7855b9c.78dc5993.js"},{"revision":"a34c0fb206a1c34e739e78a2269f9322","url":"assets/js/ab68cb8d.c5a2b0a8.js"},{"revision":"63495b44894158fe8d16980967df4342","url":"assets/js/abe10de2.b7148dbe.js"},{"revision":"afffe6daf75d127c1198555644936c14","url":"assets/js/ad473dbb.737e4844.js"},{"revision":"43b97295da3b42341e1e6618f891575d","url":"assets/js/adae9733.69587e8c.js"},{"revision":"ceec15a8fae22d6e788af9c1868ca69e","url":"assets/js/add02245.723c715c.js"},{"revision":"6884bd83f4c312552aa156f993bd2c4c","url":"assets/js/aef34f26.d4595c35.js"},{"revision":"688579d7f532a9970f25eecf761dbf6f","url":"assets/js/b1ba5219.b5916958.js"},{"revision":"4fcf6b5819f357be85872802385cb994","url":"assets/js/b20b2853.cb48ba0d.js"},{"revision":"14d84b7e2f1304ddee3b6a2a28253103","url":"assets/js/b2323b47.f0edb722.js"},{"revision":"2f683a91709d30edf824bb134a9f6696","url":"assets/js/b3385a54.ef95567c.js"},{"revision":"75018040ed15277f91fee219698c90cd","url":"assets/js/b38b6221.1c364c05.js"},{"revision":"a26d5a7ef4958d6a6eeea1fa7ba5ad05","url":"assets/js/b4a12b60.bc08ccf6.js"},{"revision":"e307fea632299a604a627ff75fb35a85","url":"assets/js/b8910dbc.8c48b7d4.js"},{"revision":"6330d1ab958113082305f1424d9a26b8","url":"assets/js/b979a191.cd6b247d.js"},{"revision":"41743ddd567f08306257ad957f7e08aa","url":"assets/js/ba09e940.3b2ec98f.js"},{"revision":"d568383356cf59f2ad3439f8e113b495","url":"assets/js/bac0c3c2.3f215778.js"},{"revision":"07246e2c02e09da6c27df0dfe149d549","url":"assets/js/bb1f89c6.d6923c6f.js"},{"revision":"030d94568044c0991f3b46c73fe83c07","url":"assets/js/bbaa30f5.644f977c.js"},{"revision":"5cce9c4ebb0e4a4e209a83cd0f1aca44","url":"assets/js/bdb549f3.ff259a68.js"},{"revision":"1637eb0570c5ed7b7c31477082252118","url":"assets/js/beff5b4c.e43fb311.js"},{"revision":"d2c6746d3054dfd6d7a71047865ad817","url":"assets/js/bf17d00e.f0cbaacf.js"},{"revision":"450d82304c5f69b5375e8165b6133539","url":"assets/js/c0769fc2.a5adab71.js"},{"revision":"210b6223f084aeaeeacf88d39c071cc4","url":"assets/js/c0e0f440.900b41f9.js"},{"revision":"6e9ae6201fef270a5017700adf200e49","url":"assets/js/c0ff65f3.02fa85f2.js"},{"revision":"fdc793849b5ed3340231cf14e304b57b","url":"assets/js/c25191a0.68cb23ec.js"},{"revision":"79879113b0c0c46a123aac06bcf0c3c3","url":"assets/js/c3d4f4f6.6282c53a.js"},{"revision":"495043ee83b9edcca533be741ed8e92b","url":"assets/js/c7987602.90bce9c2.js"},{"revision":"06f191008eae0b69682911518e69090c","url":"assets/js/c829b885.7af1ee0f.js"},{"revision":"c35d95bde4110f44c9d0c1071759ebf9","url":"assets/js/c8d6661d.13b6d1f5.js"},{"revision":"15c4ca6727d08c3460ad91602f53d486","url":"assets/js/c9b3e945.ac513d82.js"},{"revision":"6e800a8271fb93ed03ae87aab65e9a79","url":"assets/js/ca380cac.847cdbcf.js"},{"revision":"5caa2bbe9bb5350eb2499aacffc0847a","url":"assets/js/cb688ec0.2d27a49b.js"},{"revision":"269769a445a5d094dd61c6fa6ade5f50","url":"assets/js/cccf26ad.e53f0837.js"},{"revision":"f1cd71485e9871f742136e88911ff3fa","url":"assets/js/ce2add8e.e0e62ece.js"},{"revision":"ac76150ec9654c04ce0dfcd174230df5","url":"assets/js/cef8c8b3.0708a6e6.js"},{"revision":"73788728cd73f667bd652f5f4a761837","url":"assets/js/d0bce363.86ad9cce.js"},{"revision":"cc5b2119bc32795b0fc60416f26d868e","url":"assets/js/d1857ac6.579da46e.js"},{"revision":"6433b0581aec8eaa51c7dcf6aec67cd4","url":"assets/js/d1e9be10.58152536.js"},{"revision":"fc95ba40c0f0c4f4fbc22dc22f3b068c","url":"assets/js/d22d597c.bf8be06a.js"},{"revision":"67e252edb9398de998e770a52293df63","url":"assets/js/d22df8ab.086b2857.js"},{"revision":"7b74adc5efb9d3783f517a6ec54531fa","url":"assets/js/d25ed31d.e05f60e6.js"},{"revision":"6d7c60b1b37e82e82efca05f49ec83db","url":"assets/js/d3518e68.649f0b6e.js"},{"revision":"e1bd1745cf99159cff0c82c422016f4a","url":"assets/js/d4568c9d.1f612892.js"},{"revision":"554081a5cf4af5c65e0f6f15d8561442","url":"assets/js/d4d1236a.18bad656.js"},{"revision":"738d270234a5f3d3c2a76fa16bb4cebf","url":"assets/js/d4d6ce5f.c11ebf4c.js"},{"revision":"00494d843b163e8c422e551272a3391b","url":"assets/js/d51203d5.53447cd2.js"},{"revision":"178299321943919cc5863a7bd8a99940","url":"assets/js/d9bb518a.37632b64.js"},{"revision":"f82a7a48591e80dfd7e9f90fe07b7a0c","url":"assets/js/db88d671.ac3cc808.js"},{"revision":"39b67176f295f9771ef1bb1c61d44ad9","url":"assets/js/dbeed04f.b63ed56d.js"},{"revision":"75fed2281793f7c05111af7ea5c89355","url":"assets/js/dc5ec37b.ad8363ca.js"},{"revision":"1db555331218167e16a8bae3788bfe6e","url":"assets/js/ded23081.4cc7406b.js"},{"revision":"423cdc7733203000cc8e9a79659f30dd","url":"assets/js/e0efb9fb.bcb35a4e.js"},{"revision":"332c701c3c459e3f7c4ec58f49f5fea7","url":"assets/js/e3787418.9be04ff1.js"},{"revision":"95ccc1678adbd89ac3deb1c7af4ad585","url":"assets/js/e470eedc.20714376.js"},{"revision":"4a529620b917c6ed94a91d816ab05c0e","url":"assets/js/e536ee43.fdad56a2.js"},{"revision":"2d0aaa050f78bc30b524976498fea540","url":"assets/js/e77b3a3a.593515e5.js"},{"revision":"42ee539e65c046ce640df2a8123884df","url":"assets/js/e7dc67d2.14831057.js"},{"revision":"526e9e9a897e5e2e3cea0cb26bb12b07","url":"assets/js/e82aee46.5fd2b561.js"},{"revision":"94b1858f4034cfb549bfb13356132a68","url":"assets/js/e88805f3.387ab79c.js"},{"revision":"0523c5a5b54dbfb59a846c27c53806b4","url":"assets/js/e8a512b3.7f01bcb1.js"},{"revision":"313d6fc9aae2dad0788de81717ddfa74","url":"assets/js/e8a7eaf4.b33ec994.js"},{"revision":"f1b5ec0769f9c43812004a9e65141d70","url":"assets/js/e900ac17.d6f050ce.js"},{"revision":"8bc00cf8eae2b6621a668cc45ff3a1ff","url":"assets/js/e9d75f94.ff405f81.js"},{"revision":"4ab129c692a65362f18f17ebba780fd8","url":"assets/js/eccb2957.4cfad439.js"},{"revision":"b8b48a49f030655d9990088d7b5ff5af","url":"assets/js/ece52a5a.3dde3809.js"},{"revision":"e23e794e749fb2dc593afbd2294ee4f7","url":"assets/js/eeccd8ae.c475da8e.js"},{"revision":"1a6cc3c102e59e2852fc564c0c2f8f80","url":"assets/js/ef2a0880.0e6138da.js"},{"revision":"676c5d12d851b6fc77e138f4703d88e2","url":"assets/js/efac352c.c0873ed2.js"},{"revision":"2083c40aeb4993494db5c25b49b0690e","url":"assets/js/f18638ad.6aec03bd.js"},{"revision":"25fa6affbcbfd8c173907e747b8101e6","url":"assets/js/f360887b.ebea07a9.js"},{"revision":"217c5a3ec8f1307fb8a38e83b05b98ae","url":"assets/js/f40da2f0.1b6cb437.js"},{"revision":"dfcb9fde6a4b317b730f0dae115151ef","url":"assets/js/f4a62b4d.6ffc091e.js"},{"revision":"65d7e06e4bb211f3cab310db8627b0c8","url":"assets/js/f6a991fe.893fecd9.js"},{"revision":"9935d6af671d2fbaf6e0b142706ed2a4","url":"assets/js/f829bc32.68e09414.js"},{"revision":"4796f1b62f353763fd004a086bb0d007","url":"assets/js/f8991359.733a6585.js"},{"revision":"ddff3fad13b83f8262e6581af54cde4b","url":"assets/js/f8b6e6a4.c84128c2.js"},{"revision":"aec44f90a360a5d337cb284cd5bb2f09","url":"assets/js/fca6ba15.bbfeb6cf.js"},{"revision":"f84887fb9c27ab97c87b31c219abb86f","url":"assets/js/fedd667f.2628a8aa.js"},{"revision":"405be1552e4d1c9392c67fd5dc6cabc4","url":"assets/js/fef75804.aa5ad8a9.js"},{"revision":"9674c03627f997af7e157c5584ccd57f","url":"assets/js/ff61e0c8.377273ed.js"},{"revision":"b2728d45c1ead6f4773e5352d6e556b6","url":"assets/js/ff948892.9fefbe3b.js"},{"revision":"ba819f1aa8e8e8f986cef4c7422d1eb0","url":"assets/js/ffc80596.c868fa05.js"},{"revision":"7d85da8248448eab22950f42c5fbcfb4","url":"assets/js/main.85f98740.js"},{"revision":"317e721ed1a2a577fea6f79570878e11","url":"assets/js/runtime~main.67da4ba6.js"},{"revision":"3f93cf3c7b607ca3b056018720804008","url":"docs/algorithm/aho-corasick/index.html"},{"revision":"68332188d0454841e2ef987679a0c5b3","url":"docs/algorithm/aho-corasick/kmp/index.html"},{"revision":"1cac85e828bc70ee5290986b014d6441","url":"docs/algorithm/aho-corasick/trie/index.html"},{"revision":"ce3e60a6c59d04df897132fd8c491bb9","url":"docs/algorithm/backtrack/index.html"},{"revision":"d7305b100ff2921d9d202ef0b4f5b630","url":"docs/algorithm/binary-indexed-tree/index.html"},{"revision":"caf16b5bfa23994c9c7c29ce4d11ea7d","url":"docs/algorithm/bit-manipulation/index.html"},{"revision":"60c224caf8ac7d7e186947264ebf3a90","url":"docs/algorithm/breadth-first-search/index.html"},{"revision":"36023eae9361bdcddd9f7c8f711043da","url":"docs/algorithm/depth-first-search/binary-tree-paths/index.html"},{"revision":"5087692840f1d5e11abf5bdc5ae21100","url":"docs/algorithm/depth-first-search/is-balanced/index.html"},{"revision":"b1b2382de542c80bab57903594675194","url":"docs/algorithm/depth-first-search/leaf-similiar/index.html"},{"revision":"d534a4874c81a8146b6597eabf21a26f","url":"docs/algorithm/depth-first-search/number-of-islands/index.html"},{"revision":"e609bc790a0389c47749bb2dc6faa27e","url":"docs/algorithm/disjoint-set/index.html"},{"revision":"33a78f4d23d6a9afa239b9a6498de698","url":"docs/algorithm/dynamic-programming/divisorGame/index.html"},{"revision":"c2653fbba34a4e15eba4297bc566252f","url":"docs/algorithm/dynamic-programming/predict-the-winner/index.html"},{"revision":"766e6324982781d7606efdb61d8bce60","url":"docs/algorithm/dynamic-programming/stone-game/index.html"},{"revision":"5a8291aa9297c20418b6424b949ddf66","url":"docs/algorithm/dynamic-programming/todo/index.html"},{"revision":"dddebbb65e2d7779c34e3f090613e31c","url":"docs/algorithm/dynamic-programming/买卖股票的最佳时机/index.html"},{"revision":"d4543436428d0ba0f693d67a3ccc8f65","url":"docs/algorithm/dynamic-programming/使用最小花费爬楼图/index.html"},{"revision":"1e3f3c2556f79007e54b7fa4c09f7d55","url":"docs/algorithm/dynamic-programming/最长回文子串/index.html"},{"revision":"97fe81b1dafe8e150a37809325d3d7ab","url":"docs/algorithm/dynamic-programming/打家劫舍/index.html"},{"revision":"778628079ffc11d2b751f313bf049f87","url":"docs/algorithm/dynamic-programming/栅栏涂色/index.html"},{"revision":"1e781576db01a057140b6f862ffafb9e","url":"docs/algorithm/dynamic-programming/爬楼梯/index.html"},{"revision":"f64d5509ce3c9c1be3fc88efc295919a","url":"docs/algorithm/dynamic-programming/粉刷房子/index.html"},{"revision":"f805b33e318a8008b2999e8795466027","url":"docs/algorithm/dynamic-programming/连续子数组的最大和/index.html"},{"revision":"dbb7d46cd07a1c8b6e462fbf9214ada2","url":"docs/algorithm/graph/index.html"},{"revision":"905a632f5c6ba44ee4f4ceae22c89868","url":"docs/algorithm/greedy/index.html"},{"revision":"0af48c67d2f0551bf8a4d82338fd9e34","url":"docs/algorithm/hash-table/index.html"},{"revision":"e7a248d6f6ae1d4ed2b4e1c6c0a4ddc2","url":"docs/algorithm/heap/index.html"},{"revision":"df846514a5282881d66a32b0da1d64a5","url":"docs/algorithm/least-recently-used/index.html"},{"revision":"2c658178298b0fa2d94a42a9fdaa790f","url":"docs/algorithm/leetcode/Binary Search/index.html"},{"revision":"2d5f7974a8ceca19e83256b58fb75adc","url":"docs/algorithm/leetcode/index.html"},{"revision":"5f937fa8fc81d3a13b891410478e5a20","url":"docs/algorithm/leetcode/Partition Equal Subset Sum/index.html"},{"revision":"3f8f9316809699fa9608afe78b497d7c","url":"docs/algorithm/leetcode/Sort an Array/index.html"},{"revision":"cd81da8e452ac5476a57466c5d8951d2","url":"docs/algorithm/linked-list/Reorder List/index.html"},{"revision":"acdcb0cd2353a7412d79848f3fb26728","url":"docs/algorithm/linked-list/Reverse Nodes in k-Group/index.html"},{"revision":"4440cfa02ffe7dccf096e958f0b15976","url":"docs/algorithm/minimax/index.html"},{"revision":"95052203a8312d87b211c6499c01da31","url":"docs/algorithm/monotonic-queue/index.html"},{"revision":"f39f2cf86d7f516b447b0d7527bd420b","url":"docs/algorithm/monotonic-queue/Sliding Window Maximum/index.html"},{"revision":"6374bfc7bea890fd488f8945ad23d6b0","url":"docs/algorithm/monotonic-stack/index.html"},{"revision":"b8c26723c497e96d348e4b13ada167ca","url":"docs/algorithm/prefix-sum/index.html"},{"revision":"eab0c2514c728b6902b44c5c077234ec","url":"docs/algorithm/priority-queue/index.html"},{"revision":"2ba19f0a16db7c1ad4fbc87b2ccebb4e","url":"docs/algorithm/queue/index.html"},{"revision":"07832675ea59bbd5e690a5f3f29b9ceb","url":"docs/algorithm/reservoir-sampling/index.html"},{"revision":"268172596ef52eef511e04ff56ba9ca5","url":"docs/algorithm/sliding-window/Maximum Average Subarray I/index.html"},{"revision":"0f8e143888dde420f4e82ee7e1276fb6","url":"docs/algorithm/sliding-window/滑动窗口的最大值/index.html"},{"revision":"c2bf29d26558edeb640431726f640edd","url":"docs/algorithm/sort/index.html"},{"revision":"edebc2fdd0ca99f5419ebeda795fc04f","url":"docs/algorithm/stack/index.html"},{"revision":"02b46846cfe9b6745c31c974618817fe","url":"docs/algorithm/stack/下一个更大元素/index.html"},{"revision":"6af9faa506ad09675812cb0eae908d14","url":"docs/algorithm/stack/有效的括号/index.html"},{"revision":"31646d15a64144ca23a01b9ce0ffca24","url":"docs/algorithm/stack/用栈实现队列/index.html"},{"revision":"7f40a61be9cb3b925d85210ac88c70c5","url":"docs/algorithm/stack/用队列实现栈/index.html"},{"revision":"ea15a3c14ae7d968efcc156452cb1b54","url":"docs/algorithm/tree-node/index.html"},{"revision":"c8d9f3d1c89f86b5a101f3aa0f14a4c7","url":"docs/algorithm/tree/Balanced Binary Tree/index.html"},{"revision":"52d349918ed389f9d92e6d8ef0a84cb6","url":"docs/algorithm/tree/Binary Tree Inorder Traversal/index.html"},{"revision":"c4d9402fa0fa6727acc2db4eb2f314c0","url":"docs/algorithm/tree/index.html"},{"revision":"15de5b20d9175b8b95ab02c9b5cab64e","url":"docs/algorithm/tree/isBalanced/index.html"},{"revision":"d85ec19996e994992318b5faace6cbc4","url":"docs/algorithm/tree/Leaf-Smiliar Trees/index.html"},{"revision":"8671e6baea3269d8cf3d7e6155dad57e","url":"docs/algorithm/tree/Recover Binary Search Tree/index.html"},{"revision":"6cd6c9308eb02140b45031cc793f3ec6","url":"docs/algorithm/tree/Validate Binary Search Tree/index.html"},{"revision":"266c4a6cd1089845334bed1f40545053","url":"docs/algorithm/tree/二叉树的最大深度/index.html"},{"revision":"36c9baeab77175c71765b68990fb8c16","url":"docs/algorithm/tree/对称二叉树/index.html"},{"revision":"ef4ab2b8891a0c16210a03802281173e","url":"docs/algorithm/tree/相同的树/index.html"},{"revision":"7a4ba3fda60a90d4b33dbf5d5a26190f","url":"docs/algorithm/two-pointers/index.html"},{"revision":"5c8e806f5ac0d558a68d8ebaa67e1c2d","url":"docs/algorithm/剑指offer/55.2.平衡二叉树/index.html"},{"revision":"355b89112e67207d95dcf00e7e377a1e","url":"docs/algorithm/剑指offer/57.1.和为s的两个数字/index.html"},{"revision":"8aeddefc0b211be6376b67cfb9b5f099","url":"docs/algorithm/剑指offer/两个链表的第一个公共点/index.html"},{"revision":"c78d773c60ac62fede6791127469e56b","url":"docs/algorithm/剑指offer/二叉搜索树中第k大的节点/index.html"},{"revision":"31d940e87caa703b673310af2009e018","url":"docs/algorithm/剑指offer/二叉搜索树的最近公共祖先/index.html"},{"revision":"0395a5799e79487703988ea72c4daf73","url":"docs/algorithm/剑指offer/二叉树的最近公共祖先/index.html"},{"revision":"29d5fdebc6606a12b463e80dd71a4afc","url":"docs/algorithm/剑指offer/二叉树的深度/index.html"},{"revision":"12f99d5958f9cfd25391788fdc35d6b8","url":"docs/algorithm/剑指offer/二叉树的镜像/index.html"},{"revision":"99df1413267053d34735658505998dae","url":"docs/algorithm/剑指offer/二进制中1的个数/index.html"},{"revision":"1674511f1b87d020667367203576451f","url":"docs/algorithm/剑指offer/从上到下打印二叉树/index.html"},{"revision":"b1e0433c6483efe1ddafec8c572c3ae8","url":"docs/algorithm/剑指offer/反转链表/index.html"},{"revision":"b35a33aff16c64b515dae76570eeb103","url":"docs/algorithm/剑指offer/合并两个排序的链表/index.html"},{"revision":"d969700924cd26fd785890b7faf37317","url":"docs/algorithm/剑指offer/和为S的连续正数序列/index.html"},{"revision":"f83df59976d6a5925540ded8e1f6b744","url":"docs/algorithm/剑指offer/圆圈中最后剩下的数字/index.html"},{"revision":"0d8e5c4b6e980e66fca804a6eda95974","url":"docs/algorithm/剑指offer/对称的二叉树/index.html"},{"revision":"21d52f1e369670f1f58514c8a8713640","url":"docs/algorithm/剑指offer/用两个栈实现一个队列/index.html"},{"revision":"74634824b1ffe480ecc242a72bde2aeb","url":"docs/algorithm/剑指offer/第一个只出现一次的字符/index.html"},{"revision":"4b7bc7e796b6bf042ef8f01b238692b3","url":"docs/algorithm/剑指offer/调整数组顺序使奇数位于偶数前面/index.html"},{"revision":"311f133feeb3176f93f97a6cd2bae0f6","url":"docs/algorithm/剑指offer/连续子数组的最大和/index.html"},{"revision":"3104d9f3d6fd0bad7a79de73528bc47a","url":"docs/algorithm/剑指offer/链表中倒数第k个节点/index.html"},{"revision":"a83f73faefac67ce1bb33bed1d88ec0f","url":"docs/category/clean-code/index.html"},{"revision":"c6176c8654b8a75b82a8cc25e955ec13","url":"docs/category/depth-first-search/index.html"},{"revision":"40e7f16b48bb221f8866c0a467510bc4","url":"docs/category/dynamic-programming/index.html"},{"revision":"ff8634608abe80ecf6f52e0967cb2cd0","url":"docs/category/ecmascript/index.html"},{"revision":"704fc0ed3543471fc6b78ed1cc5f5f94","url":"docs/category/react/index.html"},{"revision":"b90522730ddfa5268222edfd0173aaca","url":"docs/computer/clean-code/design-pattern/index.html"},{"revision":"cf09c34f80d2efbb46af1e6357a943a2","url":"docs/computer/clean-code/object-oriented/index.html"},{"revision":"734e37ba59e63d34a18e7e2b8d4ba312","url":"docs/computer/clean-code/solid/index.html"},{"revision":"dd1be79b1aa76aeef5d71b35c5788c26","url":"docs/computer/docusaurus/index.html"},{"revision":"a7ff6f7b90a277f3eff5570c7482feec","url":"docs/computer/ecmascript/promise/index.html"},{"revision":"7d4b39cecf25d1025e997a09dc6dbdca","url":"docs/computer/ecmascript/regexp/index.html"},{"revision":"0ef8531b900bebf66c29f5162c3d4961","url":"docs/computer/git/index.html"},{"revision":"3cf283270f47ce61cfd40742e7b32cf3","url":"docs/computer/net/index.html"},{"revision":"a6872267fdcabdb6601de6fca7407357","url":"docs/computer/react/index.html"},{"revision":"dc3c38a4aa8dd253ad7a2ef034906686","url":"docs/computer/react/react-dom/index.html"},{"revision":"45c986ad0f02d956ea2990a32a54f530","url":"docs/computer/react/react-native/index.html"},{"revision":"b2b6b1bbcc495a45c6cdfc6a820f6a1a","url":"docs/computer/react/react-router/index.html"},{"revision":"fa807fad3b09d416d7d45094499d7171","url":"docs/computer/react/types/index.html"},{"revision":"8581b96706bda95a1e125a7459b7adea","url":"docs/computer/typescript/declaration-files/index.html"},{"revision":"8ce76262920fd2ff4e8e31f18bf34e62","url":"docs/computer/typescript/index.html"},{"revision":"d0611bcd553d19b0abb6694b7c5a26a8","url":"docs/design/binary/index.html"},{"revision":"d717852e154cb822e6e8a06d0f1860ef","url":"docs/design/clean-code/index.html"},{"revision":"8b224b990aeeb6193bf92603a4c74296","url":"docs/design/http/index.html"},{"revision":"7da188d7840a162059e45bab050dd36c","url":"docs/design/network/index.html"},{"revision":"93c23449fe8d43fa6fc20437f3f5c0fc","url":"docs/design/radix/index.html"},{"revision":"3e8740146596e9c229dd3950b966f2c9","url":"docs/design/thinking-model/index.html"},{"revision":"04af27775f402d8fb868c5a773acb513","url":"docs/design/typescript/index.html"},{"revision":"1773d12854a887c3ff0f85816f3ce11d","url":"docs/english/grammer/index.html"},{"revision":"a9fa09719b384fefb3cd498b539a8d69","url":"docs/english/index.html"},{"revision":"5ea833153d5830237d6acd506573f9ca","url":"docs/english/verbs/index.html"},{"revision":"976285b62958b94bba27ed4f7d51d49e","url":"docs/english/vocabulary/index.html"},{"revision":"6f9ebbee31b79c48579321c6d4b83a8b","url":"docs/math/index.html"},{"revision":"c27f1c1e48cd8cd860bbbaca569376aa","url":"docs/math/latex/index.html"},{"revision":"f4f14ee36c845368ee9d36cd3a1a6357","url":"docs/todo/index.html"},{"revision":"f963ea526819d654106b5f69db6ef085","url":"docs/tools/animation/index.html"},{"revision":"ee6d9d2081fa24c87912ef0b0ceddeec","url":"docs/tools/charles-proxy/index.html"},{"revision":"0e06b8c77a375dc47354d7ee875b8e01","url":"docs/tools/css/box-model/index.html"},{"revision":"35476983cba5fe2369081a1adcc09f78","url":"docs/tools/css/character/index.html"},{"revision":"3c7447730db16f615f43048bbf04bb38","url":"docs/tools/css/dark-mode/index.html"},{"revision":"e317c606996489a38fb0125e7d84cbde","url":"docs/tools/css/grid/index.html"},{"revision":"fab078fd40a7bccb6e0b7931b6da8ae4","url":"docs/tools/css/index.html"},{"revision":"88016ca20d39b2f92070d7cb0152bc41","url":"docs/tools/css/layout/index.html"},{"revision":"e5221157102bea789d78f848e12b09d1","url":"docs/tools/css/screen/index.html"},{"revision":"d4ae65959fae6a18ee301ce99dc6e008","url":"docs/tools/electricity/index.html"},{"revision":"366d2a756cd40590b710f7b7a328ff8f","url":"docs/tools/html/form/index.html"},{"revision":"591aeacaff09c73cb13115873113f871","url":"docs/tools/html/link/index.html"},{"revision":"1636e5cc3ae61749a833bbcefa27f221","url":"docs/tools/js/asynchronous/index.html"},{"revision":"5ee1c0ceb89b91989d5bcf583823f624","url":"docs/tools/js/bug/index.html"},{"revision":"99eda404bfb1166f27ffd5e465e04b9a","url":"docs/tools/js/Classes/index.html"},{"revision":"c17f8630db11650b911903206965b9b2","url":"docs/tools/js/coding/index.html"},{"revision":"c41f798b809ef7af5dfc2894cf3ec043","url":"docs/tools/js/Date/index.html"},{"revision":"6a442275af290fc6781851a04677b0b2","url":"docs/tools/js/Destructuring assignment/index.html"},{"revision":"00f7a4f6a24d18dbd270c12c0abd2ee1","url":"docs/tools/js/dom-level/index.html"},{"revision":"0358f41b3ab7c3ac0769730c69a2d484","url":"docs/tools/js/Equality comparisons and sameness/index.html"},{"revision":"17f52bf840f9de4509212c050942359f","url":"docs/tools/js/ES7 Decorator/index.html"},{"revision":"a6adc3299ff56ae6700d67168cc2f228","url":"docs/tools/js/fetch/index.html"},{"revision":"ddec52f2c6ff2e712c35d97593d88596","url":"docs/tools/js/Hoisting/index.html"},{"revision":"5c4638e9c31242f55e8e6eb5fe40b4d3","url":"docs/tools/js/index.html"},{"revision":"9f361221000714f216ed7597939e8342","url":"docs/tools/js/js-module/index.html"},{"revision":"5b63cbed039c156360d0ed034f378861","url":"docs/tools/js/modules/index.html"},{"revision":"b84ceafc8acf89fc3ede15fcf3738dd0","url":"docs/tools/js/Operators/index.html"},{"revision":"8523b7c00654a65ee86c2e994a8875d6","url":"docs/tools/js/Proxy/index.html"},{"revision":"c86ca9ee9f739def9e7c8f49e4e79d40","url":"docs/tools/js/regexp/index.html"},{"revision":"304721ac1366d24b106ae67cec870d67","url":"docs/tools/js/run/index.html"},{"revision":"1ba254b6b210a3de034d32e9d31d2b86","url":"docs/tools/js/String/index.html"},{"revision":"207f82c6a331e6189d7e6d50d274c345","url":"docs/tools/js/web-api/index.html"},{"revision":"49264690f542faa2e1d827baae085b7d","url":"docs/tools/js/web-assembly/index.html"},{"revision":"d4d649c5247441a2b9941f096abf8ae2","url":"docs/tools/network/cookie/index.html"},{"revision":"8c4942a056880d63d288b93fcaf8c43f","url":"docs/tools/network/http/index.html"},{"revision":"372ab4ddcfe7c497bbb5e4a75fdb5bdb","url":"docs/tools/network/index.html"},{"revision":"2f6b5bd496d2317c0ff3b6038eb6fac7","url":"docs/tools/network/security/index.html"},{"revision":"7a700d89852daa43789d327579cae6a5","url":"docs/tools/nodejs/expressjs/index.html"},{"revision":"1f328be746a61c6db196d644a6d3430e","url":"docs/tools/nodejs/fs/index.html"},{"revision":"a1306c63f43a018b6a685ca2a364a5d9","url":"docs/tools/nodejs/process/index.html"},{"revision":"5fd12474c12906c219116d7506cbffa5","url":"docs/tools/npm-packages/dayjs/index.html"},{"revision":"9b4ac6aea6dd6300e8f98ee57f4aa6bb","url":"docs/tools/npm-packages/expressjs/index.html"},{"revision":"2c0353302eb0b38e99b9794d6ff5837a","url":"docs/tools/npm-packages/jquery/index.html"},{"revision":"274d57a12b61a5f30e4adf505a8a3336","url":"docs/tools/npm-packages/mathjax/index.html"},{"revision":"1c3639d602c6640df2d6bc87a22baaa2","url":"docs/tools/npm-packages/mui/index.html"},{"revision":"007d214e7e32b16908b9f288805f60fb","url":"docs/tools/npm-packages/pixijs/index.html"},{"revision":"4f5dfc5af8af591f138058572f8f78a7","url":"docs/tools/npm-packages/pnpm/index.html"},{"revision":"dd9df607968ac97a95cd0b59cfb50945","url":"docs/tools/npm-packages/threejs/index.html"},{"revision":"f8d01ff92c054e1ef25f6c15df98e9f9","url":"docs/tools/npm-packages/umi/index.html"},{"revision":"b172d5fd11fdfda3e27c4fad83434ee7","url":"docs/tools/npm-packages/use-gesture/index.html"},{"revision":"f495c3697894636fc799322583c9c2e9","url":"docs/tools/npm/index.html"},{"revision":"0b61f15a3864dc0a1def1130476fc744","url":"docs/tools/osx/index.html"},{"revision":"f1b2bfea0f1f390b602ee870ef8bc884","url":"docs/tools/ruby/index.html"},{"revision":"204dab265321a53816c8b8e39e044c8f","url":"docs/tools/shell-script/index.html"},{"revision":"cff4c4b8d558103ab3407ad06af19b53","url":"docs/tools/styled-components/index.html"},{"revision":"550be7fa84eb9e66d1c3446647b15ec3","url":"docs/tools/tailwind-css/index.html"},{"revision":"5129f3fd11e6e339e78af42dd5b4d7b5","url":"docs/tools/tools/babel/index.html"},{"revision":"39e323eaba2168ae4cbbd1a5422f7656","url":"docs/tools/tools/browser/index.html"},{"revision":"3a1d2b5515dc647250f37ebf3fa9b169","url":"docs/tools/tools/bug/index.html"},{"revision":"110c34e255a2b97486c5b994e3241f65","url":"docs/tools/tools/charles/index.html"},{"revision":"7e35e407f34f2e80a6af6e7bb7472653","url":"docs/tools/tools/chrome-devtools/index.html"},{"revision":"9ec7dcc7ae7a03a5021aa3a503f12de7","url":"docs/tools/tools/clean-code/index.html"},{"revision":"d90ebdf2c19a0e50952136b5caee58a5","url":"docs/tools/tools/cypress/index.html"},{"revision":"dd7d926b3c561c1eed6481eea3d2c216","url":"docs/tools/tools/database/index.html"},{"revision":"91b0cab6671232f4abfbdc61d035dd6a","url":"docs/tools/tools/docker/index.html"},{"revision":"815b0ba9e0efe085d58bebe6762ad5de","url":"docs/tools/tools/enjoy-life/index.html"},{"revision":"2f4673bff2e74676790f86c4e10d04bd","url":"docs/tools/tools/eslint/index.html"},{"revision":"76510712fa1c6b4fc306051587f3bdc8","url":"docs/tools/tools/husky/index.html"},{"revision":"2da25745ae1cc985258f5fb0228fb8e8","url":"docs/tools/tools/jest/index.html"},{"revision":"2656ef6d52424db09670ed9653801f25","url":"docs/tools/tools/lint/index.html"},{"revision":"2db0896a761e0d65097b8bb4cca6d4f6","url":"docs/tools/tools/micro-front-end/index.html"},{"revision":"133b5ba0282c447b2ba02ca5c068b1dd","url":"docs/tools/tools/micro-frontend/index.html"},{"revision":"2253ad5b90e16e5bdda66d49100f7a22","url":"docs/tools/tools/nvm/index.html"},{"revision":"babc78827f04cf4e0de20a1e2efdb268","url":"docs/tools/tools/polyfill/index.html"},{"revision":"67cf0b8bcae9a61c9cf122559ca09b71","url":"docs/tools/tools/postman/index.html"},{"revision":"fce720fc09be3ccedefb7a43d773de01","url":"docs/tools/tools/prettier/index.html"},{"revision":"3a15b2759559fcfbfc83ab45cd2f2e96","url":"docs/tools/tools/vscode/index.html"},{"revision":"17ba7f63add5af6c99d47bfda8f901f2","url":"docs/tools/tools/webpack/index.html"},{"revision":"d79680dccf5993641fdcf71113fe2590","url":"docs/tools/tools/wechat-devtools/index.html"},{"revision":"551fa38525744e9304e2277bccf273f1","url":"docs/tools/web-api/broadcast-channel/index.html"},{"revision":"cf621e1cf3e158ea0222dc1a9613459b","url":"docs/tools/web-api/element/index.html"},{"revision":"6135770831427a07194ceeb68b902872","url":"docs/tools/web-api/event/index.html"},{"revision":"13bfe283b2911c182c5db2c5550d7489","url":"docs/tools/web-api/history/index.html"},{"revision":"5861298c7a8899ca25c4c6ca9ede76b7","url":"docs/tools/web-api/node/index.html"},{"revision":"da753cabf0db81d072d21d938c733e0a","url":"docs/tools/web-api/resize-observer/index.html"},{"revision":"54d9651cfe1d9988064eacb0e69c591e","url":"docs/tools/web-api/response/index.html"},{"revision":"969d5338b68eddaf51cdd786605d03ac","url":"docs/tools/web-api/shadow-dom/index.html"},{"revision":"863492173ffca71f152476a0a164a16a","url":"docs/tools/web-api/storage/index.html"},{"revision":"ceff92c846a6a60db55dae1d320b488d","url":"docs/tools/web-api/url/index.html"},{"revision":"50aa884004b0eae30f837cf951f78887","url":"docs/tools/web-api/window/index.html"},{"revision":"d39d5f7c085bfda7dfcc70428be6703a","url":"docs/tools/web-security/index.html"},{"revision":"2961c5d85303ddaedf14ec90e30bb0e1","url":"docs/tools/wechat/index.html"},{"revision":"cf110a046c8730268791c0d07fc6fef0","url":"hello-react/index.html"},{"revision":"bfed64b0fa51f6005ddf05b59146e52d","url":"index.html"},{"revision":"f8b17333a33379c393bb4e215f74ad07","url":"manifest.json"},{"revision":"1b7f8cd37d2ad44413c8194dee737c47","url":"markdown-page/index.html"},{"revision":"46b8089e0e9f9fe450ad1da5beadb8d1","url":"assets/images/kmp-assets-1-e002e6aedd78a6b25d00b210c4e301c2.png"},{"revision":"9364346f937803f03cd1a0ae645ea0f1","url":"assets/images/kmp-assets-2-cf050ec79b4f39f36e88db92acd6c0de.jpg"},{"revision":"010fd8ae2b79ffe03dc3735acd224a6a","url":"assets/images/kmp-assets-3-6a0808ead9c64f4dd27b36aaf825032f.png"},{"revision":"b9497542844478144bed83e9ada0c12f","url":"assets/images/kmp-assets-4-5d8fd5ac2405012394add5304017aac2.png"},{"revision":"161584a2d930a7b91092a2c3872d9de5","url":"assets/images/kmp-assets-5-3b55507d65668278f035eb123f55990d.png"},{"revision":"6127eba37435560c20bb8b15d5b790b6","url":"assets/images/kmp-assets-6-ecbfcbf93f7b522a276ee627af9d402d.png"},{"revision":"3707193f6a5393e5c0c82a8c018267f8","url":"assets/images/Papa Rabbit demo-d34ee5b97485e5619abc0d4878f6ed5c.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"b529b6423d292cdb2675064765f6a792","url":"img/icon.jpg"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map