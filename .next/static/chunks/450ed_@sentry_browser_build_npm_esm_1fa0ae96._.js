(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventFromException": (()=>eventFromException),
    "eventFromMessage": (()=>eventFromMessage),
    "eventFromUnknownInput": (()=>eventFromUnknownInput),
    "exceptionFromError": (()=>exceptionFromError),
    "extractMessage": (()=>extractMessage),
    "extractType": (()=>extractType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)");
;
/**
 * This function creates an exception from a JavaScript Error
 */ function exceptionFromError(stackParser, ex) {
    // Get the frames first since Opera can lose the stack if we touch anything else first
    const frames = parseStackFrames(stackParser, ex);
    const exception = {
        type: extractType(ex),
        value: extractMessage(ex)
    };
    if (frames.length) {
        exception.stacktrace = {
            frames
        };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    const normalizeDepth = client?.getOptions().normalizeDepth;
    // If we can, we extract an exception from the object properties
    const errorFromProp = getErrorPropertyFromObject(exception);
    const extra = {
        __serialized__: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeToSize"])(exception, normalizeDepth)
    };
    if (errorFromProp) {
        return {
            exception: {
                values: [
                    exceptionFromError(stackParser, errorFromProp)
                ]
            },
            extra
        };
    }
    const event = {
        exception: {
            values: [
                {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvent"])(exception) ? exception.constructor.name : isUnhandledRejection ? 'UnhandledRejection' : 'Error',
                    value: getNonErrorObjectExceptionValue(exception, {
                        isUnhandledRejection
                    })
                }
            ]
        },
        extra
    };
    if (syntheticException) {
        const frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) {
            // event.exception.values[0] has been set above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            event.exception.values[0].stacktrace = {
                frames
            };
        }
    }
    return event;
}
function eventFromError(stackParser, ex) {
    return {
        exception: {
            values: [
                exceptionFromError(stackParser, ex)
            ]
        }
    };
}
/** Parses stack frames from an error */ function parseStackFrames(stackParser, ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    const stacktrace = ex.stacktrace || ex.stack || '';
    const skipLines = getSkipFirstStackStringLines(ex);
    const framesToPop = getPopFirstTopFrames(ex);
    try {
        return stackParser(stacktrace, skipLines, framesToPop);
    } catch (e) {
    // no-empty
    }
    return [];
}
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
const reactMinifiedRegexp = /Minified React error #\d+;/i;
/**
 * Certain known React errors contain links that would be falsely
 * parsed as frames. This function check for these errors and
 * returns number of the stack string lines to skip.
 */ function getSkipFirstStackStringLines(ex) {
    if (ex && reactMinifiedRegexp.test(ex.message)) {
        return 1;
    }
    return 0;
}
/**
 * If error has `framesToPop` property, it means that the
 * creator tells us the first x frames will be useless
 * and should be discarded. Typically error from wrapper function
 * which don't point to the actual location in the developer's code.
 *
 * Example: https://github.com/zertosh/invariant/blob/master/invariant.js#L46
 */ function getPopFirstTopFrames(ex) {
    if (typeof ex.framesToPop === 'number') {
        return ex.framesToPop;
    }
    return 0;
}
// https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Exception
// @ts-expect-error - WebAssembly.Exception is a valid class
function isWebAssemblyException(exception) {
    // Check for support
    // @ts-expect-error - WebAssembly.Exception is a valid class
    if (typeof WebAssembly !== 'undefined' && typeof WebAssembly.Exception !== 'undefined') {
        // @ts-expect-error - WebAssembly.Exception is a valid class
        return exception instanceof WebAssembly.Exception;
    } else {
        return false;
    }
}
/**
 * Extracts from errors what we use as the exception `type` in error events.
 *
 * Usually, this is the `name` property on Error objects but WASM errors need to be treated differently.
 */ function extractType(ex) {
    const name = ex?.name;
    // The name for WebAssembly.Exception Errors needs to be extracted differently.
    // Context: https://github.com/getsentry/sentry-javascript/issues/13787
    if (!name && isWebAssemblyException(ex)) {
        // Emscripten sets array[type, message] to the "message" property on the WebAssembly.Exception object
        const hasTypeInMessage = ex.message && Array.isArray(ex.message) && ex.message.length == 2;
        return hasTypeInMessage ? ex.message[0] : 'WebAssembly.Exception';
    }
    return name;
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */ function extractMessage(ex) {
    const message = ex?.message;
    if (isWebAssemblyException(ex)) {
        // For Node 18, Emscripten sets array[type, message] to the "message" property on the WebAssembly.Exception object
        if (Array.isArray(ex.message) && ex.message.length == 2) {
            return ex.message[1];
        }
        return 'wasm exception';
    }
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */ function eventFromException(stackParser, exception, hint, attachStacktrace) {
    const syntheticException = hint?.syntheticException || undefined;
    const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event); // defaults to { type: 'generic', handled: true }
    event.level = 'error';
    if (hint?.event_id) {
        event.event_id = hint.event_id;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */ function eventFromMessage(stackParser, message, level = 'info', hint, attachStacktrace) {
    const syntheticException = hint?.syntheticException || undefined;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint?.event_id) {
        event.event_id = hint.event_id;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvedSyncPromise"])(event);
}
/**
 * @hidden
 */ function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isErrorEvent"])(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        const errorEvent = exception;
        return eventFromError(stackParser, errorEvent.error);
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMError"])(exception) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMException"])(exception)) {
        const domException = exception;
        if ('stack' in exception) {
            event = eventFromError(stackParser, exception);
        } else {
            const name = domException.name || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMError"])(domException) ? 'DOMError' : 'DOMException');
            const message = domException.message ? `${name}: ${domException.message}` : name;
            event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionTypeValue"])(event, message);
        }
        if ('code' in domException) {
            // eslint-disable-next-line deprecation/deprecation
            event.tags = {
                ...event.tags,
                'DOMException.code': `${domException.code}`
            };
        }
        return event;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(exception)) {
        // we have a real Error object, do nothing
        return eventFromError(stackParser, exception);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(exception) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvent"])(exception)) {
        // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
        // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
        // group on any key/value change.
        const objectException = exception;
        event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, {
            synthetic: true
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionTypeValue"])(event, `${exception}`, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, {
        synthetic: true
    });
    return event;
}
function eventFromString(stackParser, message, syntheticException, attachStacktrace) {
    const event = {};
    if (attachStacktrace && syntheticException) {
        const frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) {
            event.exception = {
                values: [
                    {
                        value: message,
                        stacktrace: {
                            frames
                        }
                    }
                ]
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, {
            synthetic: true
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isParameterizedString"])(message)) {
        const { __sentry_template_string__, __sentry_template_values__ } = message;
        event.logentry = {
            message: __sentry_template_string__,
            params: __sentry_template_values__
        };
        return event;
    }
    event.message = message;
    return event;
}
function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractExceptionKeysForMessage"])(exception);
    const captureType = isUnhandledRejection ? 'promise rejection' : 'exception';
    // Some ErrorEvent instances do not have an `error` property, which is why they are not handled before
    // We still want to try to get a decent message for these cases
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isErrorEvent"])(exception)) {
        return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvent"])(exception)) {
        const className = getObjectClassName(exception);
        return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
    }
    return `Object captured as ${captureType} with keys: ${keys}`;
}
function getObjectClassName(obj) {
    try {
        const prototype = Object.getPrototypeOf(obj);
        return prototype ? prototype.constructor.name : undefined;
    } catch (e) {
    // ignore errors here
    }
}
/** If a plain object has a property that is an `Error`, return this error. */ function getErrorPropertyFromObject(obj) {
    for(const prop in obj){
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            const value = obj[prop];
            if (value instanceof Error) {
                return value;
            }
        }
    }
    return undefined;
}
;
 //# sourceMappingURL=eventbuilder.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WINDOW": (()=>WINDOW),
    "getHttpRequestData": (()=>getHttpRequestData),
    "ignoreNextOnError": (()=>ignoreNextOnError),
    "shouldIgnoreOnError": (()=>shouldIgnoreOnError),
    "wrap": (()=>wrap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
;
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
let ignoreOnError = 0;
/**
 * @hidden
 */ function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */ function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError++;
    setTimeout(()=>{
        ignoreOnError--;
    });
}
// eslint-disable-next-line @typescript-eslint/ban-types
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */ function wrap(fn, options = {}) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original
    function isFunction(fn) {
        return typeof fn === 'function';
    }
    if (!isFunction(fn)) {
        return fn;
    }
    try {
        // if we're dealing with a function that was previously wrapped, return
        // the original wrapper.
        const wrapper = fn.__sentry_wrapped__;
        if (wrapper) {
            if (typeof wrapper === 'function') {
                return wrapper;
            } else {
                // If we find that the `__sentry_wrapped__` function is not a function at the time of accessing it, it means
                // that something messed with it. In that case we want to return the originally passed function.
                return fn;
            }
        }
        // We don't wanna wrap it twice
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginalFunction"])(fn)) {
            return fn;
        }
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    // Wrap the function itself
    // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
    const sentryWrapped = function(...args) {
        try {
            // Also wrap arguments that are themselves functions
            const wrappedArguments = args.map((arg)=>wrap(arg, options));
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        } catch (ex) {
            ignoreNextOnError();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])((scope)=>{
                scope.addEventProcessor((event)=>{
                    if (options.mechanism) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionTypeValue"])(event, undefined, undefined);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addExceptionMechanism"])(event, options.mechanism);
                    }
                    event.extra = {
                        ...event.extra,
                        arguments: args
                    };
                    return event;
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"])(ex);
            });
            throw ex;
        }
    };
    // Wrap the wrapped function in a proxy, to ensure any other properties of the original function remain available
    try {
        for(const property in fn){
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    } catch  {
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    }
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markFunctionWrapped"])(sentryWrapped, fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(fn, '__sentry_wrapped__', sentryWrapped);
    // Restore original function name (not all browsers allow that)
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get () {
                    return fn.name;
                }
            });
        }
    } catch  {
    // This may throw if e.g. the descriptor does not exist, or a browser does not allow redefining `name`.
    // to save some bytes we simply try-catch this
    }
    return sentryWrapped;
}
/**
 * Get HTTP request data from the current page.
 */ function getHttpRequestData() {
    // grab as much info as exists and add it to the event
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationHref"])();
    const { referrer } = WINDOW.document || {};
    const { userAgent } = WINDOW.navigator || {};
    const headers = {
        ...referrer && {
            Referer: referrer
        },
        ...userAgent && {
            'User-Agent': userAgent
        }
    };
    const request = {
        url,
        headers
    };
    return request;
}
;
 //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/client.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrowserClient": (()=>BrowserClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/sdkMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/logs/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$ipAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/ipAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
const DEFAULT_FLUSH_INTERVAL = 5000;
/**
 * Configuration options for the Sentry Browser SDK.
 * @see @sentry/core Options for more information.
 */ /**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */ class BrowserClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Client"] {
    /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */ constructor(options){
        const opts = {
            // We default this to true, as it is the safer scenario
            parentSpanIsAlwaysRootSpan: true,
            ...options
        };
        const sdkSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].SENTRY_SDK_SOURCE || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSDKSource"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$sdkMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applySdkMetadata"])(opts, 'browser', [
            'browser'
        ], sdkSource);
        super(opts);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const client = this;
        const { sendDefaultPii, _experiments } = client._options;
        const enableLogs = _experiments?.enableLogs;
        if (opts.sendClientReports && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener('visibilitychange', ()=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.visibilityState === 'hidden') {
                    this._flushOutcomes();
                    if (enableLogs) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_INTERNAL_flushLogsBuffer"])(client);
                    }
                }
            });
        }
        if (enableLogs) {
            client.on('flush', ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_INTERNAL_flushLogsBuffer"])(client);
            });
            client.on('afterCaptureLog', ()=>{
                if (client._logFlushIdleTimeout) {
                    clearTimeout(client._logFlushIdleTimeout);
                }
                client._logFlushIdleTimeout = setTimeout(()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_INTERNAL_flushLogsBuffer"])(client);
                }, DEFAULT_FLUSH_INTERVAL);
            });
        }
        if (sendDefaultPii) {
            client.on('postprocessEvent', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$ipAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAutoIpAddressToUser"]);
            client.on('beforeSendSession', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$ipAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAutoIpAddressToSession"]);
        }
    }
    /**
   * @inheritDoc
   */ eventFromException(exception, hint) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventFromException"])(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ eventFromMessage(message, level = 'info', hint) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventFromMessage"])(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ _prepareEvent(event, hint, currentScope, isolationScope) {
        event.platform = event.platform || 'javascript';
        return super._prepareEvent(event, hint, currentScope, isolationScope);
    }
}
;
 //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ __turbopack_context__.s({
    "DEBUG_BUILD": (()=>DEBUG_BUILD)
});
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
;
 //# sourceMappingURL=debug-build.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "breadcrumbsIntegration": (()=>breadcrumbsIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$console$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/instrument/console.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/severity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$breadcrumb$2d$log$2d$level$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/breadcrumb-log-level.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
;
/** maxStringLength gets capped to prevent 100 breadcrumbs exceeding 1MB event payload size */ const MAX_ALLOWED_STRING_LENGTH = 1024;
const INTEGRATION_NAME = 'Breadcrumbs';
const _breadcrumbsIntegration = (options = {})=>{
    const _options = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        setup (client) {
            // TODO(v10): Remove this functionality and use `consoleIntegration` from @sentry/core instead.
            if (_options.console) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$console$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addConsoleInstrumentationHandler"])(_getConsoleBreadcrumbHandler(client));
            }
            if (_options.dom) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClickKeypressInstrumentationHandler"])(_getDomBreadcrumbHandler(client, _options.dom));
            }
            if (_options.xhr) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addXhrInstrumentationHandler"])(_getXhrBreadcrumbHandler(client));
            }
            if (_options.fetch) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addFetchInstrumentationHandler"])(_getFetchBreadcrumbHandler(client));
            }
            if (_options.history) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHistoryInstrumentationHandler"])(_getHistoryBreadcrumbHandler(client));
            }
            if (_options.sentry) {
                client.on('beforeSendEvent', _getSentryBreadcrumbHandler(client));
            }
        }
    };
};
const breadcrumbsIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_breadcrumbsIntegration);
/**
 * Adds a breadcrumb for Sentry events or transactions if this option is enabled.
 */ function _getSentryBreadcrumbHandler(client) {
    return function addSentryBreadcrumb(event) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
            category: `sentry.${event.type === 'transaction' ? 'transaction' : 'event'}`,
            event_id: event.event_id,
            level: event.level,
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventDescription"])(event)
        }, {
            event
        });
    };
}
/**
 * A HOC that creates a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */ function _getDomBreadcrumbHandler(client, dom) {
    return function _innerDomBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        let target;
        let componentName;
        let keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;
        let maxStringLength = typeof dom === 'object' && typeof dom.maxStringLength === 'number' ? dom.maxStringLength : undefined;
        if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`);
            maxStringLength = MAX_ALLOWED_STRING_LENGTH;
        }
        if (typeof keyAttrs === 'string') {
            keyAttrs = [
                keyAttrs
            ];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            const event = handlerData.event;
            const element = _isEvent(event) ? event.target : event;
            target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlTreeAsString"])(element, {
                keyAttrs,
                maxStringLength
            });
            componentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponentName"])(element);
        } catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        const breadcrumb = {
            category: `ui.${handlerData.name}`,
            message: target
        };
        if (componentName) {
            breadcrumb.data = {
                'ui.component_name': componentName
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global
        });
    };
}
/**
 * Creates breadcrumbs from console API calls
 */ function _getConsoleBreadcrumbHandler(client) {
    return function _consoleBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        const breadcrumb = {
            category: 'console',
            data: {
                arguments: handlerData.args,
                logger: 'console'
            },
            level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$severity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["severityLevelFromString"])(handlerData.level),
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJoin"])(handlerData.args, ' ')
        };
        if (handlerData.level === 'assert') {
            if (handlerData.args[0] === false) {
                breadcrumb.message = `Assertion failed: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJoin"])(handlerData.args.slice(1), ' ') || 'console.assert'}`;
                breadcrumb.data.arguments = handlerData.args.slice(1);
            } else {
                // Don't capture a breadcrumb for passed assertions
                return;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, {
            input: handlerData.args,
            level: handlerData.level
        });
    };
}
/**
 * Creates breadcrumbs from XHR API calls
 */ function _getXhrBreadcrumbHandler(client) {
    return function _xhrBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        const { startTimestamp, endTimestamp } = handlerData;
        const sentryXhrData = handlerData.xhr[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_XHR_DATA_KEY"]];
        // We only capture complete, non-sentry requests
        if (!startTimestamp || !endTimestamp || !sentryXhrData) {
            return;
        }
        const { method, url, status_code, body } = sentryXhrData;
        const data = {
            method,
            url,
            status_code
        };
        const hint = {
            xhr: handlerData.xhr,
            input: body,
            startTimestamp,
            endTimestamp
        };
        const breadcrumb = {
            category: 'xhr',
            data,
            type: 'http',
            level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$breadcrumb$2d$log$2d$level$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBreadcrumbLogLevelFromHttpStatusCode"])(status_code)
        };
        client.emit('beforeOutgoingRequestBreadcrumb', breadcrumb, hint);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, hint);
    };
}
/**
 * Creates breadcrumbs from fetch API calls
 */ function _getFetchBreadcrumbHandler(client) {
    return function _fetchBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        const { startTimestamp, endTimestamp } = handlerData;
        // We only capture complete fetch requests
        if (!endTimestamp) {
            return;
        }
        if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
            // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
            return;
        }
        ({
            method: handlerData.fetchData.method,
            url: handlerData.fetchData.url
        });
        if (handlerData.error) {
            const data = handlerData.fetchData;
            const hint = {
                data: handlerData.error,
                input: handlerData.args,
                startTimestamp,
                endTimestamp
            };
            const breadcrumb = {
                category: 'fetch',
                data,
                level: 'error',
                type: 'http'
            };
            client.emit('beforeOutgoingRequestBreadcrumb', breadcrumb, hint);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, hint);
        } else {
            const response = handlerData.response;
            const data = {
                ...handlerData.fetchData,
                status_code: response?.status
            };
            handlerData.fetchData.request_body_size;
            handlerData.fetchData.response_body_size;
            response?.status;
            const hint = {
                input: handlerData.args,
                response,
                startTimestamp,
                endTimestamp
            };
            const breadcrumb = {
                category: 'fetch',
                data,
                type: 'http',
                level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$breadcrumb$2d$log$2d$level$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBreadcrumbLogLevelFromHttpStatusCode"])(data.status_code)
            };
            client.emit('beforeOutgoingRequestBreadcrumb', breadcrumb, hint);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])(breadcrumb, hint);
        }
    };
}
/**
 * Creates breadcrumbs from history API calls
 */ function _getHistoryBreadcrumbHandler(client) {
    return function _historyBreadcrumb(handlerData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
            return;
        }
        let from = handlerData.from;
        let to = handlerData.to;
        const parsedLoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.href);
        let parsedFrom = from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(from) : undefined;
        const parsedTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(to);
        // Initial pushState doesn't provide `from` information
        if (!parsedFrom?.path) {
            parsedFrom = parsedLoc;
        }
        // Use only the path component of the URL if the URL matches the current
        // document (almost all the time when using pushState)
        if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
            to = parsedTo.relative;
        }
        if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
            from = parsedFrom.relative;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
            category: 'navigation',
            data: {
                from,
                to
            }
        });
    };
}
function _isEvent(event) {
    return !!event && !!event.target;
}
;
 //# sourceMappingURL=breadcrumbs.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browserApiErrorsIntegration": (()=>browserApiErrorsIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
const DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'BroadcastChannel',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'SharedWorker',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload'
];
const INTEGRATION_NAME = 'BrowserApiErrors';
const _browserApiErrorsIntegration = (options = {})=>{
    const _options = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        // TODO: This currently only works for the first client this is setup
        // We may want to adjust this to check for client etc.
        setupOnce () {
            if (_options.setTimeout) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"], 'setTimeout', _wrapTimeFunction);
            }
            if (_options.setInterval) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"], 'setInterval', _wrapTimeFunction);
            }
            if (_options.requestAnimationFrame) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"], 'requestAnimationFrame', _wrapRAF);
            }
            if (_options.XMLHttpRequest && 'XMLHttpRequest' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(XMLHttpRequest.prototype, 'send', _wrapXHR);
            }
            const eventTargetOption = _options.eventTarget;
            if (eventTargetOption) {
                const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
                eventTarget.forEach(_wrapEventTarget);
            }
        }
    };
};
/**
 * Wrap timer functions and event targets to catch errors and provide better meta data.
 */ const browserApiErrorsIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_browserApiErrorsIntegration);
function _wrapTimeFunction(original) {
    return function(...args) {
        const originalCallback = args[0];
        args[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(originalCallback, {
            mechanism: {
                data: {
                    function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(original)
                },
                handled: false,
                type: 'instrument'
            }
        });
        return original.apply(this, args);
    };
}
function _wrapRAF(original) {
    return function(callback) {
        return original.apply(this, [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(original)
                    },
                    handled: false,
                    type: 'instrument'
                }
            })
        ]);
    };
}
function _wrapXHR(originalSend) {
    return function(...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const xhr = this;
        const xmlHttpRequestProps = [
            'onload',
            'onerror',
            'onprogress',
            'onreadystatechange'
        ];
        xmlHttpRequestProps.forEach((prop)=>{
            if (prop in xhr && typeof xhr[prop] === 'function') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(xhr, prop, function(original) {
                    const wrapOptions = {
                        mechanism: {
                            data: {
                                function: prop,
                                handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(original)
                            },
                            handled: false,
                            type: 'instrument'
                        }
                    };
                    // If Instrument integration has been called before BrowserApiErrors, get the name of original function
                    const originalFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginalFunction"])(original);
                    if (originalFunction) {
                        wrapOptions.mechanism.data.handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(originalFunction);
                    }
                    // Otherwise wrap directly
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(original, wrapOptions);
                });
            }
        });
        return originalSend.apply(this, args);
    };
}
function _wrapEventTarget(target) {
    const globalObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"];
    const proto = globalObject[target]?.prototype;
    // eslint-disable-next-line no-prototype-builtins
    if (!proto?.hasOwnProperty?.('addEventListener')) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(proto, 'addEventListener', function(original) {
        return function(eventName, fn, options) {
            try {
                if (isEventListenerObject(fn)) {
                    // ESlint disable explanation:
                    //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
                    //  introduce a bug here, because bind returns a new function that doesn't have our
                    //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
                    //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
                    // eslint-disable-next-line @typescript-eslint/unbound-method
                    fn.handleEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(fn.handleEvent, {
                        mechanism: {
                            data: {
                                function: 'handleEvent',
                                handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(fn),
                                target
                            },
                            handled: false,
                            type: 'instrument'
                        }
                    });
                }
            } catch  {
            // can sometimes get 'Permission denied to access property "handle Event'
            }
            return original.apply(this, [
                eventName,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(fn),
                            target
                        },
                        handled: false,
                        type: 'instrument'
                    }
                }),
                options
            ]);
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(proto, 'removeEventListener', function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
            /**
       * There are 2 possible scenarios here:
       *
       * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
       * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
       * as a pass-through, and call original `removeEventListener` with it.
       *
       * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
       * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
       * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
       * in order for us to make a distinction between wrapped/non-wrapped functions possible.
       * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
       *
       * When someone adds a handler prior to initialization, and then do it again, but after,
       * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
       * to get rid of the initial handler and it'd stick there forever.
       */ try {
                const originalEventHandler = fn.__sentry_wrapped__;
                if (originalEventHandler) {
                    originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                }
            } catch (e) {
            // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
            }
            return originalRemoveEventListener.call(this, eventName, fn, options);
        };
    });
}
function isEventListenerObject(obj) {
    return typeof obj.handleEvent === 'function';
}
;
 //# sourceMappingURL=browserapierrors.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browserSessionIntegration": (()=>browserSessionIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
;
/**
 * When added, automatically creates sessions which allow you to track adoption and crashes (crash free rate) in your Releases in Sentry.
 * More information: https://docs.sentry.io/product/releases/health/
 *
 * Note: In order for session tracking to work, you need to set up Releases: https://docs.sentry.io/product/releases/
 */ const browserSessionIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(()=>{
    return {
        name: 'BrowserSession',
        setupOnce () {
            if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document === 'undefined') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Using the `browserSessionIntegration` in non-browser environments is not supported.');
                return;
            }
            // The session duration for browser sessions does not track a meaningful
            // concept that can be used as a metric.
            // Automatically captured sessions are akin to page views, and thus we
            // discard their duration.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startSession"])({
                ignoreDuration: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureSession"])();
            // We want to create a session for every navigation as well
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHistoryInstrumentationHandler"])(({ from, to })=>{
                // Don't create an additional session for the initial route or if the location did not change
                if (from !== undefined && from !== to) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startSession"])({
                        ignoreDuration: true
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureSession"])();
                }
            });
        }
    };
});
;
 //# sourceMappingURL=browsersession.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "globalHandlersIntegration": (()=>globalHandlersIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalUnhandledRejection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
;
const INTEGRATION_NAME = 'GlobalHandlers';
const _globalHandlersIntegration = (options = {})=>{
    const _options = {
        onerror: true,
        onunhandledrejection: true,
        ...options
    };
    return {
        name: INTEGRATION_NAME,
        setupOnce () {
            Error.stackTraceLimit = 50;
        },
        setup (client) {
            if (_options.onerror) {
                _installGlobalOnErrorHandler(client);
                globalHandlerLog('onerror');
            }
            if (_options.onunhandledrejection) {
                _installGlobalOnUnhandledRejectionHandler(client);
                globalHandlerLog('onunhandledrejection');
            }
        }
    };
};
const globalHandlersIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_globalHandlersIntegration);
function _installGlobalOnErrorHandler(client) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addGlobalErrorInstrumentationHandler"])((data)=>{
        const { stackParser, attachStacktrace } = getOptions();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldIgnoreOnError"])()) {
            return;
        }
        const { msg, url, line, column, error } = data;
        const event = _enhanceEventWithInitialFrame((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventFromUnknownInput"])(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
        event.level = 'error';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureEvent"])(event, {
            originalException: error,
            mechanism: {
                handled: false,
                type: 'onerror'
            }
        });
    });
}
function _installGlobalOnUnhandledRejectionHandler(client) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$globalUnhandledRejection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addGlobalUnhandledRejectionInstrumentationHandler"])((e)=>{
        const { stackParser, attachStacktrace } = getOptions();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldIgnoreOnError"])()) {
            return;
        }
        const error = _getUnhandledRejectionError(e);
        const event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(error) ? _eventFromRejectionWithPrimitive(error) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventFromUnknownInput"])(stackParser, error, undefined, attachStacktrace, true);
        event.level = 'error';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureEvent"])(event, {
            originalException: error,
            mechanism: {
                handled: false,
                type: 'onunhandledrejection'
            }
        });
    });
}
function _getUnhandledRejectionError(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(error)) {
        return error;
    }
    // dig the object of the rejection out of known event types
    try {
        // PromiseRejectionEvents store the object of the rejection under 'reason'
        // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
        if ('reason' in error) {
            return error.reason;
        }
        // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
        // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
        // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
        // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
        // https://github.com/getsentry/sentry-javascript/issues/2380
        if ('detail' in error && 'reason' in error.detail) {
            return error.detail.reason;
        }
    } catch  {} // eslint-disable-line no-empty
    return error;
}
/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */ function _eventFromRejectionWithPrimitive(reason) {
    return {
        exception: {
            values: [
                {
                    type: 'UnhandledRejection',
                    // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                    value: `Non-Error promise rejection captured with value: ${String(reason)}`
                }
            ]
        }
    };
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    const e = event.exception = event.exception || {};
    // event.exception.values
    const ev = e.values = e.values || [];
    // event.exception.values[0]
    const ev0 = ev[0] = ev[0] || {};
    // event.exception.values[0].stacktrace
    const ev0s = ev0.stacktrace = ev0.stacktrace || {};
    // event.exception.values[0].stacktrace.frames
    const ev0sf = ev0s.frames = ev0s.frames || [];
    const colno = column;
    const lineno = line;
    const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(url) && url.length > 0 ? url : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationHref"])();
    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) {
        ev0sf.push({
            colno,
            filename,
            function: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"],
            in_app: true,
            lineno
        });
    }
    return event;
}
function globalHandlerLog(type) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`Global Handler attached: ${type}`);
}
function getOptions() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    const options = client?.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: false
    };
    return options;
}
;
 //# sourceMappingURL=globalhandlers.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "httpContextIntegration": (()=>httpContextIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
/**
 * Collects information about HTTP request headers and
 * attaches them to the event.
 */ const httpContextIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(()=>{
    return {
        name: 'HttpContext',
        preprocessEvent (event) {
            // if none of the information we want exists, don't bother
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].navigator && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
                return;
            }
            const reqData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHttpRequestData"])();
            const headers = {
                ...reqData.headers,
                ...event.request?.headers
            };
            event.request = {
                ...reqData,
                ...event.request,
                headers
            };
        }
    };
});
;
 //# sourceMappingURL=httpcontext.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "linkedErrorsIntegration": (()=>linkedErrorsIntegration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$aggregate$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/aggregate-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/eventbuilder.js [app-client] (ecmascript)");
;
;
const DEFAULT_KEY = 'cause';
const DEFAULT_LIMIT = 5;
const INTEGRATION_NAME = 'LinkedErrors';
const _linkedErrorsIntegration = (options = {})=>{
    const limit = options.limit || DEFAULT_LIMIT;
    const key = options.key || DEFAULT_KEY;
    return {
        name: INTEGRATION_NAME,
        preprocessEvent (event, hint, client) {
            const options = client.getOptions();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$aggregate$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAggregateErrorsToEvent"])(// This differs from the LinkedErrors integration in core by using a different exceptionFromError function
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$eventbuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exceptionFromError"], options.stackParser, key, limit, event, hint);
        }
    };
};
/**
 * Aggregrate linked errors in an event.
 */ const linkedErrorsIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_linkedErrorsIntegration);
;
 //# sourceMappingURL=linkederrors.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/stack-parsers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chromeStackLineParser": (()=>chromeStackLineParser),
    "defaultStackLineParsers": (()=>defaultStackLineParsers),
    "defaultStackParser": (()=>defaultStackParser),
    "geckoStackLineParser": (()=>geckoStackLineParser),
    "opera10StackLineParser": (()=>opera10StackLineParser),
    "opera11StackLineParser": (()=>opera11StackLineParser),
    "winjsStackLineParser": (()=>winjsStackLineParser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
;
const OPERA10_PRIORITY = 10;
const OPERA11_PRIORITY = 20;
const CHROME_PRIORITY = 30;
const WINJS_PRIORITY = 40;
const GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
    const frame = {
        filename,
        function: func === '<anonymous>' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"] : func,
        in_app: true
    };
    if (lineno !== undefined) {
        frame.lineno = lineno;
    }
    if (colno !== undefined) {
        frame.colno = colno;
    }
    return frame;
}
// This regex matches frames that have no function name (ie. are at the top level of a module).
// For example "at http://localhost:5000//script.js:1:126"
// Frames _with_ function names usually look as follows: "at commitLayoutEffects (react-dom.development.js:23426:1)"
const chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
// This regex matches all the frames that have a function name.
const chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
// We cannot call this variable `chrome` because it can conflict with global `chrome` variable in certain environments
// See: https://github.com/getsentry/sentry-javascript/issues/6880
const chromeStackParserFn = (line)=>{
    // If the stack line has no function name, we need to parse it differently
    const noFnParts = chromeRegexNoFnName.exec(line);
    if (noFnParts) {
        const [, filename, line, col] = noFnParts;
        return createFrame(filename, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +line, +col);
    }
    const parts = chromeRegex.exec(line);
    if (parts) {
        const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval) {
            const subMatch = chromeEvalRegex.exec(parts[2]);
            if (subMatch) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = subMatch[1]; // url
                parts[3] = subMatch[2]; // line
                parts[4] = subMatch[3]; // column
            }
        }
        // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
        // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
        const [func, filename] = extractSafariExtensionDetails(parts[1] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], parts[2]);
        return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
    }
    return;
};
const chromeStackLineParser = [
    CHROME_PRIORITY,
    chromeStackParserFn
];
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
const geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const gecko = (line)=>{
    const parts = geckoREgex.exec(line);
    if (parts) {
        const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval) {
            const subMatch = geckoEvalRegex.exec(parts[3]);
            if (subMatch) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || 'eval';
                parts[3] = subMatch[1];
                parts[4] = subMatch[2];
                parts[5] = ''; // no column when eval
            }
        }
        let filename = parts[3];
        let func = parts[1] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"];
        [func, filename] = extractSafariExtensionDetails(func, filename);
        return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
    }
    return;
};
const geckoStackLineParser = [
    GECKO_PRIORITY,
    gecko
];
const winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const winjs = (line)=>{
    const parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +parts[3], parts[4] ? +parts[4] : undefined) : undefined;
};
const winjsStackLineParser = [
    WINJS_PRIORITY,
    winjs
];
const opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
const opera10 = (line)=>{
    const parts = opera10Regex.exec(line);
    return parts ? createFrame(parts[2], parts[3] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +parts[1]) : undefined;
};
const opera10StackLineParser = [
    OPERA10_PRIORITY,
    opera10
];
const opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
const opera11 = (line)=>{
    const parts = opera11Regex.exec(line);
    return parts ? createFrame(parts[5], parts[3] || parts[4] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"], +parts[1], +parts[2]) : undefined;
};
const opera11StackLineParser = [
    OPERA11_PRIORITY,
    opera11
];
const defaultStackLineParsers = [
    chromeStackLineParser,
    geckoStackLineParser
];
const defaultStackParser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStackParser"])(...defaultStackLineParsers);
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */ const extractSafariExtensionDetails = (func, filename)=>{
    const isSafariExtension = func.indexOf('safari-extension') !== -1;
    const isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
    return isSafariExtension || isSafariWebExtension ? [
        func.indexOf('@') !== -1 ? func.split('@')[0] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNKNOWN_FUNCTION"],
        isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
    ] : [
        func,
        filename
    ];
};
;
 //# sourceMappingURL=stack-parsers.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/transports/fetch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "makeFetchTransport": (()=>makeFetchTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$transports$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/transports/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js [app-client] (ecmascript)");
;
;
/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */ function makeFetchTransport(options, nativeFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNativeImplementation"])('fetch')) {
    let pendingBodySize = 0;
    let pendingCount = 0;
    function makeRequest(request) {
        const requestSize = request.body.length;
        pendingBodySize += requestSize;
        pendingCount++;
        const requestOptions = {
            body: request.body,
            method: 'POST',
            referrerPolicy: 'strict-origin',
            headers: options.headers,
            // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
            // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
            // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
            // frequently sending events right before the user is switching pages (eg. when finishing navigation transactions).
            // Gotchas:
            // - `keepalive` isn't supported by Firefox
            // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
            //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
            //   We will therefore only activate the flag when we're below that limit.
            // There is also a limit of requests that can be open at the same time, so we also limit this to 15
            // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
            keepalive: pendingBodySize <= 60000 && pendingCount < 15,
            ...options.fetchOptions
        };
        if (!nativeFetch) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCachedImplementation"])('fetch');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rejectedSyncPromise"])('No fetch implementation available');
        }
        try {
            // TODO: This may need a `suppressTracing` call in the future when we switch the browser SDK to OTEL
            return nativeFetch(options.url, requestOptions).then((response)=>{
                pendingBodySize -= requestSize;
                pendingCount--;
                return {
                    statusCode: response.status,
                    headers: {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After')
                    }
                };
            });
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$getNativeImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCachedImplementation"])('fetch');
            pendingBodySize -= requestSize;
            pendingCount--;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$syncpromise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rejectedSyncPromise"])(e);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$transports$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransport"])(options, makeRequest);
}
;
 //# sourceMappingURL=fetch.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/sdk.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyDefaultOptions": (()=>applyDefaultOptions),
    "forceLoad": (()=>forceLoad),
    "getDefaultIntegrations": (()=>getDefaultIntegrations),
    "init": (()=>init),
    "onLoad": (()=>onLoad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$eventFilters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integrations/eventFilters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$functiontostring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integrations/functiontostring.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$dedupe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integrations/dedupe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browserapierrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browsersession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$globalhandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$httpcontext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$linkederrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$stack$2d$parsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/stack-parsers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$transports$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/transports/fetch.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
/** Get the default integrations for the browser SDK. */ function getDefaultIntegrations(_options) {
    /**
   * Note: Please make sure this stays in sync with Angular SDK, which re-exports
   * `getDefaultIntegrations` but with an adjusted set of integrations.
   */ return [
        // TODO(v10): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
        // eslint-disable-next-line deprecation/deprecation
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$eventFilters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inboundFiltersIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$functiontostring$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionToStringIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browserapierrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserApiErrorsIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breadcrumbsIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$globalhandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalHandlersIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$linkederrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkedErrorsIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integrations$2f$dedupe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dedupeIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$httpcontext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpContextIntegration"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$integrations$2f$browsersession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserSessionIntegration"])()
    ];
}
/** Exported only for tests. */ function applyDefaultOptions(optionsArg = {}) {
    const defaultOptions = {
        defaultIntegrations: getDefaultIntegrations(),
        release: typeof __SENTRY_RELEASE__ === 'string' // This allows build tooling to find-and-replace __SENTRY_RELEASE__ to inject a release value
         ? __SENTRY_RELEASE__ : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].SENTRY_RELEASE?.id,
        sendClientReports: true
    };
    return {
        ...defaultOptions,
        ...dropTopLevelUndefinedKeys(optionsArg)
    };
}
/**
 * In contrast to the regular `dropUndefinedKeys` method,
 * this one does not deep-drop keys, but only on the top level.
 */ function dropTopLevelUndefinedKeys(obj) {
    const mutatetedObj = {};
    for (const k of Object.getOwnPropertyNames(obj)){
        const key = k;
        if (obj[key] !== undefined) {
            mutatetedObj[key] = obj[key];
        }
    }
    return mutatetedObj;
}
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */ function init(browserOptions = {}) {
    if (!browserOptions.skipBrowserExtensionCheck && _checkForBrowserExtension()) {
        return;
    }
    const options = applyDefaultOptions(browserOptions);
    const clientOptions = {
        ...options,
        stackParser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackParserFromStackParserOptions"])(options.stackParser || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$stack$2d$parsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultStackParser"]),
        integrations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIntegrationsToSetup"])(options),
        transport: options.transport || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$transports$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeFetchTransport"]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initAndBind"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserClient"], clientOptions);
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function forceLoad() {
// Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function onLoad(callback) {
    callback();
}
function _isEmbeddedBrowserExtension() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].window === 'undefined') {
        // No need to show the error if we're not in a browser window environment (e.g. service workers)
        return false;
    }
    const _window = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"];
    // Running the SDK in NW.js, which appears like a browser extension but isn't, is also fine
    // see: https://github.com/getsentry/sentry-javascript/issues/12668
    if (_window.nw) {
        return false;
    }
    const extensionObject = _window['chrome'] || _window['browser'];
    if (!extensionObject?.runtime?.id) {
        return false;
    }
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationHref"])();
    const extensionProtocols = [
        'chrome-extension',
        'moz-extension',
        'ms-browser-extension',
        'safari-web-extension'
    ];
    // Running the SDK in a dedicated extension page and calling Sentry.init is fine; no risk of data leakage
    const isDedicatedExtensionPage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].top && extensionProtocols.some((protocol)=>href.startsWith(`${protocol}://`));
    return !isDedicatedExtensionPage;
}
function _checkForBrowserExtension() {
    if (_isEmbeddedBrowserExtension()) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
                // eslint-disable-next-line no-console
                console.error('[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
            });
        }
        return true;
    }
}
;
 //# sourceMappingURL=sdk.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/backgroundtab.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "registerBackgroundTabDetection": (()=>registerBackgroundTabDetection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */ function registerBackgroundTabDetection() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.addEventListener('visibilitychange', ()=>{
            const activeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
            if (!activeSpan) {
                return;
            }
            const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(activeSpan);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document.hidden && rootSpan) {
                const cancelledStatus = 'cancelled';
                const { op, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(rootSpan);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Tracing] Transaction: ${cancelledStatus} -> since tab moved to the background, op: ${op}`);
                }
                // We should not set status if it is already set, this prevent important statuses like
                // error or data loss from being overwritten on transaction.
                if (!status) {
                    rootSpan.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_ERROR"],
                        message: cancelledStatus
                    });
                }
                rootSpan.setAttribute('sentry.cancellation_reason', 'document.hidden');
                rootSpan.end();
            }
        });
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('[Tracing] Could not set up background tab detection due to lack of global document');
    }
}
;
 //# sourceMappingURL=backgroundtab.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/linkedTraces.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PREVIOUS_TRACE_KEY": (()=>PREVIOUS_TRACE_KEY),
    "PREVIOUS_TRACE_MAX_DURATION": (()=>PREVIOUS_TRACE_MAX_DURATION),
    "PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE": (()=>PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE),
    "addPreviousTraceSpanLink": (()=>addPreviousTraceSpanLink),
    "getPreviousTraceFromSessionStorage": (()=>getPreviousTraceFromSessionStorage),
    "linkTraces": (()=>linkTraces),
    "spanContextSampled": (()=>spanContextSampled),
    "storePreviousTraceInSessionStorage": (()=>storePreviousTraceInSessionStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
// 1h in seconds
const PREVIOUS_TRACE_MAX_DURATION = 3600;
// session storage key
const PREVIOUS_TRACE_KEY = 'sentry_previous_trace';
const PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = 'sentry.previous_trace';
/**
 * Takes care of linking traces and applying the (consistent) sampling behavoiour based on the passed options
 * @param options - options for linking traces and consistent trace sampling (@see BrowserTracingOptions)
 * @param client - Sentry client
 */ function linkTraces(client, { linkPreviousTrace, consistentTraceSampling }) {
    const useSessionStorage = linkPreviousTrace === 'session-storage';
    let inMemoryPreviousTraceInfo = useSessionStorage ? getPreviousTraceFromSessionStorage() : undefined;
    client.on('spanStart', (span)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span) !== span) {
            return;
        }
        const oldPropagationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getPropagationContext();
        inMemoryPreviousTraceInfo = addPreviousTraceSpanLink(inMemoryPreviousTraceInfo, span, oldPropagationContext);
        if (useSessionStorage) {
            storePreviousTraceInSessionStorage(inMemoryPreviousTraceInfo);
        }
    });
    let isFirstTraceOnPageload = true;
    if (consistentTraceSampling) {
        /*
    When users opt into `consistentTraceSampling`, we need to ensure that we propagate
    the previous trace's sample rate and rand to the current trace. This is necessary because otherwise, span
    metric extrapolation is inaccurate, as we'd propagate too high of a sample rate for the subsequent traces.

    So therefore, we pretend that the previous trace was the parent trace of the newly started trace. To do that,
    we mutate the propagation context of the current trace and set the sample rate and sample rand of the previous trace.
    Timing-wise, it is fine because it happens before we even sample the root span.

    @see https://github.com/getsentry/sentry-javascript/issues/15754
    */ client.on('beforeSampling', (mutableSamplingContextData)=>{
            if (!inMemoryPreviousTraceInfo) {
                return;
            }
            const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
            const currentPropagationContext = scope.getPropagationContext();
            // We do not want to force-continue the sampling decision if we continue a trace
            // that was started on the backend. Most prominently, this will happen in MPAs where
            // users hard-navigate between pages. In this case, the sampling decision of a potentially
            // started trace on the server takes precedence.
            // Why? We want to prioritize inter-trace consistency over intra-trace consistency.
            if (isFirstTraceOnPageload && currentPropagationContext.parentSpanId) {
                isFirstTraceOnPageload = false;
                return;
            }
            scope.setPropagationContext({
                ...currentPropagationContext,
                dsc: {
                    ...currentPropagationContext.dsc,
                    sample_rate: String(inMemoryPreviousTraceInfo.sampleRate),
                    sampled: String(spanContextSampled(inMemoryPreviousTraceInfo.spanContext))
                },
                sampleRand: inMemoryPreviousTraceInfo.sampleRand
            });
            mutableSamplingContextData.parentSampled = spanContextSampled(inMemoryPreviousTraceInfo.spanContext);
            mutableSamplingContextData.parentSampleRate = inMemoryPreviousTraceInfo.sampleRate;
            mutableSamplingContextData.spanAttributes = {
                ...mutableSamplingContextData.spanAttributes,
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE"]]: inMemoryPreviousTraceInfo.sampleRate
            };
        });
    }
}
/**
 * Adds a previous_trace span link to the passed span if the passed
 * previousTraceInfo is still valid.
 *
 * @returns the updated previous trace info (based on the current span/trace) to
 * be used on the next call
 */ function addPreviousTraceSpanLink(previousTraceInfo, span, oldPropagationContext) {
    const spanJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span);
    function getSampleRate() {
        try {
            return Number(oldPropagationContext.dsc?.sample_rate) ?? Number(spanJson.data?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE"]]);
        } catch  {
            return 0;
        }
    }
    const updatedPreviousTraceInfo = {
        spanContext: span.spanContext(),
        startTimestamp: spanJson.start_timestamp,
        sampleRate: getSampleRate(),
        sampleRand: oldPropagationContext.sampleRand
    };
    if (!previousTraceInfo) {
        return updatedPreviousTraceInfo;
    }
    const previousTraceSpanCtx = previousTraceInfo.spanContext;
    if (previousTraceSpanCtx.traceId === spanJson.trace_id) {
        // This means, we're still in the same trace so let's not update the previous trace info
        // or add a link to the current span.
        // Once we move away from the long-lived, route-based trace model, we can remove this cases
        return previousTraceInfo;
    }
    // Only add the link if the startTimeStamp of the previous trace's root span is within
    // PREVIOUS_TRACE_MAX_DURATION (1h) of the current root span's startTimestamp
    // This is done to
    // - avoid adding links to "stale" traces
    // - enable more efficient querying for previous/next traces in Sentry
    if (Date.now() / 1000 - previousTraceInfo.startTimestamp <= PREVIOUS_TRACE_MAX_DURATION) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info(`Adding previous_trace ${previousTraceSpanCtx} link to span ${{
                op: spanJson.op,
                ...span.spanContext()
            }}`);
        }
        span.addLink({
            context: previousTraceSpanCtx,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE"]]: 'previous_trace'
            }
        });
        // TODO: Remove this once EAP can store span links. We currently only set this attribute so that we
        // can obtain the previous trace information from the EAP store. Long-term, EAP will handle
        // span links and then we should remove this again. Also throwing in a TODO(v10), to remind us
        // to check this at v10 time :)
        span.setAttribute(PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE, `${previousTraceSpanCtx.traceId}-${previousTraceSpanCtx.spanId}-${spanContextSampled(previousTraceSpanCtx) ? 1 : 0}`);
    }
    return updatedPreviousTraceInfo;
}
/**
 * Stores @param previousTraceInfo in sessionStorage.
 */ function storePreviousTraceInSessionStorage(previousTraceInfo) {
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].sessionStorage.setItem(PREVIOUS_TRACE_KEY, JSON.stringify(previousTraceInfo));
    } catch (e) {
        // Ignore potential errors (e.g. if sessionStorage is not available)
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Could not store previous trace in sessionStorage', e);
    }
}
/**
 * Retrieves the previous trace from sessionStorage if available.
 */ function getPreviousTraceFromSessionStorage() {
    try {
        const previousTraceInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].sessionStorage?.getItem(PREVIOUS_TRACE_KEY);
        // @ts-expect-error - intentionally risking JSON.parse throwing when previousTraceInfo is null to save bundle size
        return JSON.parse(previousTraceInfo);
    } catch (e) {
        return undefined;
    }
}
/**
 * see {@link import('@sentry/core').spanIsSampled}
 */ function spanContextSampled(ctx) {
    return ctx.traceFlags === 0x1;
}
;
 //# sourceMappingURL=linkedTraces.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/request.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultRequestInstrumentationOptions": (()=>defaultRequestInstrumentationOptions),
    "instrumentOutgoingRequests": (()=>instrumentOutgoingRequests),
    "shouldAttachHeaders": (()=>shouldAttachHeaders),
    "xhrCallback": (()=>xhrCallback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/trace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$traceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/traceData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
;
;
;
/** Options for Request Instrumentation */ const responseToSpanId = new WeakMap();
const spanIdToEndTimestamp = new Map();
const defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    enableHTTPTimings: true,
    trackFetchStreamPerformance: false
};
/** Registers span creators for xhr and fetch requests  */ function instrumentOutgoingRequests(client, _options) {
    const { traceFetch, traceXHR, trackFetchStreamPerformance, shouldCreateSpanForRequest, enableHTTPTimings, tracePropagationTargets, onRequestSpanStart } = {
        ...defaultRequestInstrumentationOptions,
        ..._options
    };
    const shouldCreateSpan = typeof shouldCreateSpanForRequest === 'function' ? shouldCreateSpanForRequest : (_)=>true;
    const shouldAttachHeadersWithTargets = (url)=>shouldAttachHeaders(url, tracePropagationTargets);
    const spans = {};
    if (traceFetch) {
        // Keeping track of http requests, whose body payloads resolved later than the initial resolved request
        // e.g. streaming using server sent events (SSE)
        client.addEventProcessor((event)=>{
            if (event.type === 'transaction' && event.spans) {
                event.spans.forEach((span)=>{
                    if (span.op === 'http.client') {
                        const updatedTimestamp = spanIdToEndTimestamp.get(span.span_id);
                        if (updatedTimestamp) {
                            span.timestamp = updatedTimestamp / 1000;
                            spanIdToEndTimestamp.delete(span.span_id);
                        }
                    }
                });
            }
            return event;
        });
        if (trackFetchStreamPerformance) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addFetchEndInstrumentationHandler"])((handlerData)=>{
                if (handlerData.response) {
                    const span = responseToSpanId.get(handlerData.response);
                    if (span && handlerData.endTimestamp) {
                        spanIdToEndTimestamp.set(span, handlerData.endTimestamp);
                    }
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$instrument$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addFetchInstrumentationHandler"])((handlerData)=>{
            const createdSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["instrumentFetchRequest"])(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
            if (handlerData.response && handlerData.fetchData.__span) {
                responseToSpanId.set(handlerData.response, handlerData.fetchData.__span);
            }
            // We cannot use `window.location` in the generic fetch instrumentation,
            // but we need it for reliable `server.address` attribute.
            // so we extend this in here
            if (createdSpan) {
                const fullUrl = getFullURL(handlerData.fetchData.url);
                const host = fullUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(fullUrl).host : undefined;
                createdSpan.setAttributes({
                    'http.url': fullUrl,
                    'server.address': host
                });
                if (enableHTTPTimings) {
                    addHTTPTimings(createdSpan);
                }
                onRequestSpanStart?.(createdSpan, {
                    headers: handlerData.headers
                });
            }
        });
    }
    if (traceXHR) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addXhrInstrumentationHandler"])((handlerData)=>{
            const createdSpan = xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
            if (createdSpan) {
                if (enableHTTPTimings) {
                    addHTTPTimings(createdSpan);
                }
                let headers;
                try {
                    headers = new Headers(handlerData.xhr.__sentry_xhr_v3__?.request_headers);
                } catch  {
                // noop
                }
                onRequestSpanStart?.(createdSpan, {
                    headers
                });
            }
        });
    }
}
function isPerformanceResourceTiming(entry) {
    return entry.entryType === 'resource' && 'initiatorType' in entry && typeof entry.nextHopProtocol === 'string' && (entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest');
}
/**
 * Creates a temporary observer to listen to the next fetch/xhr resourcing timings,
 * so that when timings hit their per-browser limit they don't need to be removed.
 *
 * @param span A span that has yet to be finished, must contain `url` on data.
 */ function addHTTPTimings(span) {
    const { url } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(span).data;
    if (!url || typeof url !== 'string') {
        return;
    }
    const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$instrument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceInstrumentationHandler"])('resource', ({ entries })=>{
        entries.forEach((entry)=>{
            if (isPerformanceResourceTiming(entry) && entry.name.endsWith(url)) {
                const spanData = resourceTimingEntryToSpanData(entry);
                spanData.forEach((data)=>span.setAttribute(...data));
                // In the next tick, clean this handler up
                // We have to wait here because otherwise this cleans itself up before it is fully done
                setTimeout(cleanup);
            }
        });
    });
}
function getAbsoluteTime(time = 0) {
    return (((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])() || performance.timeOrigin) + time) / 1000;
}
function resourceTimingEntryToSpanData(resourceTiming) {
    const { name, version } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractNetworkProtocol"])(resourceTiming.nextHopProtocol);
    const timingSpanData = [];
    timingSpanData.push([
        'network.protocol.version',
        version
    ], [
        'network.protocol.name',
        name
    ]);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])()) {
        return timingSpanData;
    }
    return [
        ...timingSpanData,
        [
            'http.request.redirect_start',
            getAbsoluteTime(resourceTiming.redirectStart)
        ],
        [
            'http.request.fetch_start',
            getAbsoluteTime(resourceTiming.fetchStart)
        ],
        [
            'http.request.domain_lookup_start',
            getAbsoluteTime(resourceTiming.domainLookupStart)
        ],
        [
            'http.request.domain_lookup_end',
            getAbsoluteTime(resourceTiming.domainLookupEnd)
        ],
        [
            'http.request.connect_start',
            getAbsoluteTime(resourceTiming.connectStart)
        ],
        [
            'http.request.secure_connection_start',
            getAbsoluteTime(resourceTiming.secureConnectionStart)
        ],
        [
            'http.request.connection_end',
            getAbsoluteTime(resourceTiming.connectEnd)
        ],
        [
            'http.request.request_start',
            getAbsoluteTime(resourceTiming.requestStart)
        ],
        [
            'http.request.response_start',
            getAbsoluteTime(resourceTiming.responseStart)
        ],
        [
            'http.request.response_end',
            getAbsoluteTime(resourceTiming.responseEnd)
        ]
    ];
}
/**
 * A function that determines whether to attach tracing headers to a request.
 * We only export this function for testing purposes.
 */ function shouldAttachHeaders(targetUrl, tracePropagationTargets) {
    // window.location.href not being defined is an edge case in the browser but we need to handle it.
    // Potentially dangerous situations where it may not be defined: Browser Extensions, Web Workers, patching of the location obj
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationHref"])();
    if (!href) {
        // If there is no window.location.origin, we default to only attaching tracing headers to relative requests, i.e. ones that start with `/`
        // BIG DISCLAIMER: Users can call URLs with a double slash (fetch("//example.com/api")), this is a shorthand for "send to the same protocol",
        // so we need a to exclude those requests, because they might be cross origin.
        const isRelativeSameOriginRequest = !!targetUrl.match(/^\/(?!\/)/);
        if (!tracePropagationTargets) {
            return isRelativeSameOriginRequest;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(targetUrl, tracePropagationTargets);
        }
    } else {
        let resolvedUrl;
        let currentOrigin;
        // URL parsing may fail, we default to not attaching trace headers in that case.
        try {
            resolvedUrl = new URL(targetUrl, href);
            currentOrigin = new URL(href).origin;
        } catch (e) {
            return false;
        }
        const isSameOriginRequest = resolvedUrl.origin === currentOrigin;
        if (!tracePropagationTargets) {
            return isSameOriginRequest;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(resolvedUrl.toString(), tracePropagationTargets) || isSameOriginRequest && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringMatchesSomePattern"])(resolvedUrl.pathname, tracePropagationTargets);
        }
    }
}
/**
 * Create and track xhr request spans
 *
 * @returns Span if a span was created, otherwise void.
 */ function xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeaders, spans) {
    const xhr = handlerData.xhr;
    const sentryXhrData = xhr?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SENTRY_XHR_DATA_KEY"]];
    if (!xhr || xhr.__sentry_own_request__ || !sentryXhrData) {
        return undefined;
    }
    const { url, method } = sentryXhrData;
    const shouldCreateSpanResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])() && shouldCreateSpan(url);
    // check first if the request has finished and is tracked by an existing span which should now end
    if (handlerData.endTimestamp && shouldCreateSpanResult) {
        const spanId = xhr.__sentry_xhr_span_id__;
        if (!spanId) return;
        const span = spans[spanId];
        if (span && sentryXhrData.status_code !== undefined) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHttpStatus"])(span, sentryXhrData.status_code);
            span.end();
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete spans[spanId];
        }
        return undefined;
    }
    const fullUrl = getFullURL(url);
    const parsedUrl = fullUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(fullUrl) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUrl"])(url);
    const urlForSpanName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripUrlQueryAndFragment"])(url);
    const hasParent = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
    const span = shouldCreateSpanResult && hasParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$trace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startInactiveSpan"])({
        name: `${method} ${urlForSpanName}`,
        attributes: {
            url,
            type: 'xhr',
            'http.method': method,
            'http.url': fullUrl,
            'server.address': parsedUrl?.host,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.http.browser',
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]]: 'http.client',
            ...parsedUrl?.search && {
                'http.query': parsedUrl?.search
            },
            ...parsedUrl?.hash && {
                'http.fragment': parsedUrl?.hash
            }
        }
    }) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryNonRecordingSpan"]();
    xhr.__sentry_xhr_span_id__ = span.spanContext().spanId;
    spans[xhr.__sentry_xhr_span_id__] = span;
    if (shouldAttachHeaders(url)) {
        addTracingHeadersToXhrRequest(xhr, // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
        // we do not want to use the span as base for the trace headers,
        // which means that the headers will be generated from the scope and the sampling decision is deferred
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])() && hasParent ? span : undefined);
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (client) {
        client.emit('beforeOutgoingRequestSpan', span, handlerData);
    }
    return span;
}
function addTracingHeadersToXhrRequest(xhr, span) {
    const { 'sentry-trace': sentryTrace, baggage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$traceData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraceData"])({
        span
    });
    if (sentryTrace) {
        setHeaderOnXhr(xhr, sentryTrace, baggage);
    }
}
function setHeaderOnXhr(xhr, sentryTraceHeader, sentryBaggageHeader) {
    const originalHeaders = xhr.__sentry_xhr_v3__?.request_headers;
    if (originalHeaders?.['sentry-trace']) {
        // bail if a sentry-trace header is already set
        return;
    }
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        xhr.setRequestHeader('sentry-trace', sentryTraceHeader);
        if (sentryBaggageHeader) {
            // only add our headers if
            // - no pre-existing baggage header exists
            // - or it is set and doesn't yet contain sentry values
            const originalBaggageHeader = originalHeaders?.['baggage'];
            if (!originalBaggageHeader || !baggageHeaderHasSentryValues(originalBaggageHeader)) {
                // From MDN: "If this method is called several times with the same header, the values are merged into one single request header."
                // We can therefore simply set a baggage header without checking what was there before
                // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                xhr.setRequestHeader('baggage', sentryBaggageHeader);
            }
        }
    } catch (_) {
    // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
    }
}
function baggageHeaderHasSentryValues(baggageHeader) {
    return baggageHeader.split(',').some((value)=>value.trim().startsWith('sentry-'));
}
function getFullURL(url) {
    try {
        // By adding a base URL to new URL(), this will also work for relative urls
        // If `url` is a full URL, the base URL is ignored anyhow
        const parsed = new URL(url, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.origin);
        return parsed.href;
    } catch  {
        return undefined;
    }
}
;
 //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/browserTracingIntegration.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BROWSER_TRACING_INTEGRATION_ID": (()=>BROWSER_TRACING_INTEGRATION_ID),
    "browserTracingIntegration": (()=>browserTracingIntegration),
    "getMetaContent": (()=>getMetaContent),
    "startBrowserTracingNavigationSpan": (()=>startBrowserTracingNavigationSpan),
    "startBrowserTracingPageLoadSpan": (()=>startBrowserTracingPageLoadSpan)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$idleSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/idleSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/tracing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/core/build/esm/utils-hoist/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$browserMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/metrics/browserMetrics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/metrics/inp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$backgroundtab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/backgroundtab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$linkedTraces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/linkedTraces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/react/node_modules/@sentry/browser/build/npm/esm/tracing/request.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';
const DEFAULT_BROWSER_TRACING_OPTIONS = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$idleSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACING_DEFAULTS"],
    instrumentNavigation: true,
    instrumentPageLoad: true,
    markBackgroundSpan: true,
    enableLongTask: true,
    enableLongAnimationFrame: true,
    enableInp: true,
    linkPreviousTrace: 'in-memory',
    consistentTraceSampling: false,
    _experiments: {},
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultRequestInstrumentationOptions"]
};
let _hasBeenInitialized = false;
/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library.
 *
 * We explicitly export the proper type here, as this has to be extended in some cases.
 */ const browserTracingIntegration = (_options = {})=>{
    if (_hasBeenInitialized) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            // eslint-disable-next-line no-console
            console.warn('Multiple browserTracingIntegration instances are not supported.');
        });
    }
    _hasBeenInitialized = true;
    /**
   * This is just a small wrapper that makes `document` optional.
   * We want to be extra-safe and always check that this exists, to ensure weird environments do not blow up.
   */ const optionalWindowDocument = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSpanErrorInstrumentation"])();
    const { enableInp, enableLongTask, enableLongAnimationFrame, _experiments: { enableInteractions, enableStandaloneClsSpans }, beforeStartSpan, idleTimeout, finalTimeout, childSpanTimeout, markBackgroundSpan, traceFetch, traceXHR, trackFetchStreamPerformance, shouldCreateSpanForRequest, enableHTTPTimings, instrumentPageLoad, instrumentNavigation, linkPreviousTrace, consistentTraceSampling, onRequestSpanStart } = {
        ...DEFAULT_BROWSER_TRACING_OPTIONS,
        ..._options
    };
    const _collectWebVitals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$browserMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTrackingWebVitals"])({
        recordClsStandaloneSpans: enableStandaloneClsSpans || false
    });
    if (enableInp) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTrackingINP"])();
    }
    if (enableLongAnimationFrame && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$browserMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTrackingLongAnimationFrames"])();
    } else if (enableLongTask) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$browserMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTrackingLongTasks"])();
    }
    if (enableInteractions) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$browserMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTrackingInteractions"])();
    }
    const latestRoute = {
        name: undefined,
        source: undefined
    };
    /** Create routing idle transaction. */ function _createRouteSpan(client, startSpanOptions) {
        const isPageloadTransaction = startSpanOptions.op === 'pageload';
        const finalStartSpanOptions = beforeStartSpan ? beforeStartSpan(startSpanOptions) : startSpanOptions;
        const attributes = finalStartSpanOptions.attributes || {};
        // If `finalStartSpanOptions.name` is different than `startSpanOptions.name`
        // it is because `beforeStartSpan` set a custom name. Therefore we set the source to 'custom'.
        if (startSpanOptions.name !== finalStartSpanOptions.name) {
            attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]] = 'custom';
            finalStartSpanOptions.attributes = attributes;
        }
        latestRoute.name = finalStartSpanOptions.name;
        latestRoute.source = attributes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]];
        const idleSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$idleSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startIdleSpan"])(finalStartSpanOptions, {
            idleTimeout,
            finalTimeout,
            childSpanTimeout,
            // should wait for finish signal if it's a pageload transaction
            disableAutoFinish: isPageloadTransaction,
            beforeSpanEnd: (span)=>{
                _collectWebVitals();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$browserMetrics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPerformanceEntries"])(span, {
                    recordClsOnPageloadSpan: !enableStandaloneClsSpans
                });
                setActiveIdleSpan(client, undefined);
                // A trace should stay consistent over the entire timespan of one route - even after the pageload/navigation ended.
                // Only when another navigation happens, we want to create a new trace.
                // This way, e.g. errors that occur after the pageload span ended are still associated to the pageload trace.
                const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
                const oldPropagationContext = scope.getPropagationContext();
                scope.setPropagationContext({
                    ...oldPropagationContext,
                    traceId: idleSpan.spanContext().traceId,
                    sampled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsSampled"])(idleSpan),
                    dsc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span)
                });
            }
        });
        setActiveIdleSpan(client, idleSpan);
        function emitFinish() {
            if (optionalWindowDocument && [
                'interactive',
                'complete'
            ].includes(optionalWindowDocument.readyState)) {
                client.emit('idleSpanEnableAutoFinish', idleSpan);
            }
        }
        if (isPageloadTransaction && optionalWindowDocument) {
            optionalWindowDocument.addEventListener('readystatechange', ()=>{
                emitFinish();
            });
            emitFinish();
        }
    }
    return {
        name: BROWSER_TRACING_INTEGRATION_ID,
        afterAllSetup (client) {
            let startingUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationHref"])();
            function maybeEndActiveSpan() {
                const activeSpan = getActiveIdleSpan(client);
                if (activeSpan && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(activeSpan).timestamp) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].log(`[Tracing] Finishing current active span with op: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(activeSpan).op}`);
                    // If there's an open active span, we need to finish it before creating an new one.
                    activeSpan.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON"], 'cancelled');
                    activeSpan.end();
                }
            }
            client.on('startNavigationSpan', (startSpanOptions)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
                    return;
                }
                maybeEndActiveSpan();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().setPropagationContext({
                    traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
                    sampleRand: Math.random()
                });
                const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
                scope.setPropagationContext({
                    traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
                    sampleRand: Math.random()
                });
                // We reset this to ensure we do not have lingering incorrect data here
                // places that call this hook may set this where appropriate - else, the URL at span sending time is used
                scope.setSDKProcessingMetadata({
                    normalizedRequest: undefined
                });
                _createRouteSpan(client, {
                    op: 'navigation',
                    ...startSpanOptions
                });
            });
            client.on('startPageLoadSpan', (startSpanOptions, traceOptions = {})=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])() !== client) {
                    return;
                }
                maybeEndActiveSpan();
                const sentryTrace = traceOptions.sentryTrace || getMetaContent('sentry-trace');
                const baggage = traceOptions.baggage || getMetaContent('baggage');
                const propagationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propagationContextFromHeaders"])(sentryTrace, baggage);
                const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
                scope.setPropagationContext(propagationContext);
                // We store the normalized request data on the scope, so we get the request data at time of span creation
                // otherwise, the URL etc. may already be of the following navigation, and we'd report the wrong URL
                scope.setSDKProcessingMetadata({
                    normalizedRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHttpRequestData"])()
                });
                _createRouteSpan(client, {
                    op: 'pageload',
                    ...startSpanOptions
                });
            });
            if (linkPreviousTrace !== 'off') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$linkedTraces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkTraces"])(client, {
                    linkPreviousTrace,
                    consistentTraceSampling
                });
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location) {
                if (instrumentPageLoad) {
                    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browserPerformanceTimeOrigin"])();
                    startBrowserTracingPageLoadSpan(client, {
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.pathname,
                        // pageload should always start at timeOrigin (and needs to be in s, not ms)
                        startTime: origin ? origin / 1000 : undefined,
                        attributes: {
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url',
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.pageload.browser'
                        }
                    });
                }
                if (instrumentNavigation) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$instrument$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHistoryInstrumentationHandler"])(({ to, from })=>{
                        /**
             * This early return is there to account for some cases where a navigation transaction starts right after
             * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
             * create an uneccessary navigation transaction.
             *
             * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
             * only be caused in certain development environments where the usage of a hot module reloader is causing
             * errors.
             */ if (from === undefined && startingUrl?.indexOf(to) !== -1) {
                            startingUrl = undefined;
                            return;
                        }
                        startingUrl = undefined;
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStringToURLObject"])(to);
                        startBrowserTracingNavigationSpan(client, {
                            name: parsed?.pathname || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].location.pathname,
                            attributes: {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: 'url',
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]]: 'auto.navigation.browser'
                            }
                        });
                        // We store the normalized request data on the scope, so we get the request data at time of span creation
                        // otherwise, the URL etc. may already be of the following navigation, and we'd report the wrong URL
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().setSDKProcessingMetadata({
                            normalizedRequest: {
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHttpRequestData"])(),
                                // Ensure to set this, so this matches the target route even if the URL has not yet been updated
                                url: to
                            }
                        });
                    });
                }
            }
            if (markBackgroundSpan) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$backgroundtab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerBackgroundTabDetection"])();
            }
            if (enableInteractions) {
                registerInteractionListener(client, idleTimeout, finalTimeout, childSpanTimeout, latestRoute);
            }
            if (enableInp) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2d$internal$2f$browser$2d$utils$2f$build$2f$esm$2f$metrics$2f$inp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerInpInteractionListener"])();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$tracing$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["instrumentOutgoingRequests"])(client, {
                traceFetch,
                traceXHR,
                trackFetchStreamPerformance,
                tracePropagationTargets: client.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest,
                enableHTTPTimings,
                onRequestSpanStart
            });
        }
    };
};
/**
 * Manually start a page load span.
 * This will only do something if a browser tracing integration integration has been setup.
 *
 * If you provide a custom `traceOptions` object, it will be used to continue the trace
 * instead of the default behavior, which is to look it up on the <meta> tags.
 */ function startBrowserTracingPageLoadSpan(client, spanOptions, traceOptions) {
    client.emit('startPageLoadSpan', spanOptions, traceOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().setTransactionName(spanOptions.name);
    return getActiveIdleSpan(client);
}
/**
 * Manually start a navigation span.
 * This will only do something if a browser tracing integration has been setup.
 */ function startBrowserTracingNavigationSpan(client, spanOptions) {
    client.emit('startNavigationSpan', spanOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().setTransactionName(spanOptions.name);
    return getActiveIdleSpan(client);
}
/** Returns the value of a meta tag */ function getMetaContent(metaName) {
    /**
   * This is just a small wrapper that makes `document` optional.
   * We want to be extra-safe and always check that this exists, to ensure weird environments do not blow up.
   */ const optionalWindowDocument = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document;
    const metaTag = optionalWindowDocument?.querySelector(`meta[name=${metaName}]`);
    return metaTag?.getAttribute('content') || undefined;
}
/** Start listener for interaction transactions */ function registerInteractionListener(client, idleTimeout, finalTimeout, childSpanTimeout, latestRoute) {
    /**
   * This is just a small wrapper that makes `document` optional.
   * We want to be extra-safe and always check that this exists, to ensure weird environments do not blow up.
   */ const optionalWindowDocument = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WINDOW"].document;
    let inflightInteractionSpan;
    const registerInteractionTransaction = ()=>{
        const op = 'ui.action.click';
        const activeIdleSpan = getActiveIdleSpan(client);
        if (activeIdleSpan) {
            const currentRootSpanOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(activeIdleSpan).op;
            if ([
                'navigation',
                'pageload'
            ].includes(currentRootSpanOp)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`[Tracing] Did not create ${op} span because a pageload or navigation span is in progress.`);
                return undefined;
            }
        }
        if (inflightInteractionSpan) {
            inflightInteractionSpan.setAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON"], 'interactionInterrupted');
            inflightInteractionSpan.end();
            inflightInteractionSpan = undefined;
        }
        if (!latestRoute.name) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$browser$2f$build$2f$npm$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
            return undefined;
        }
        inflightInteractionSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$idleSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startIdleSpan"])({
            name: latestRoute.name,
            op,
            attributes: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: latestRoute.source || 'url'
            }
        }, {
            idleTimeout,
            finalTimeout,
            childSpanTimeout
        });
    };
    if (optionalWindowDocument) {
        addEventListener('click', registerInteractionTransaction, {
            once: false,
            capture: true
        });
    }
}
// We store the active idle span on the client object, so we can access it from exported functions
const ACTIVE_IDLE_SPAN_PROPERTY = '_sentry_idleSpan';
function getActiveIdleSpan(client) {
    return client[ACTIVE_IDLE_SPAN_PROPERTY];
}
function setActiveIdleSpan(client, span) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$react$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2d$hoist$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(client, ACTIVE_IDLE_SPAN_PROPERTY, span);
}
;
 //# sourceMappingURL=browserTracingIntegration.js.map
}}),
}]);

//# sourceMappingURL=450ed_%40sentry_browser_build_npm_esm_1fa0ae96._.js.map