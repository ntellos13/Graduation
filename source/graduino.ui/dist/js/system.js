/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));


/***/ }),

/***/ "./src/ts/Action.ts":
/*!**************************!*\
  !*** ./src/ts/Action.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionControl = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Control_1 = __webpack_require__(/*! ./Control */ "./src/ts/Control.ts");
var ActionControl = /** @class */ (function (_super) {
    __extends(ActionControl, _super);
    function ActionControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionControl.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {});
    };
    ;
    return ActionControl;
}(Control_1.Control));
exports.ActionControl = ActionControl;
exports.default = ActionControl;


/***/ }),

/***/ "./src/ts/ActionContainer.ts":
/*!***********************************!*\
  !*** ./src/ts/ActionContainer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionContainer = void 0;
var Container_1 = __webpack_require__(/*! ./Container */ "./src/ts/Container.ts");
var ActionContainer = /** @class */ (function (_super) {
    __extends(ActionContainer, _super);
    function ActionContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ActionContainer;
}(Container_1.Container));
exports.ActionContainer = ActionContainer;
exports.default = ActionContainer;


/***/ }),

/***/ "./src/ts/ButtonControl.ts":
/*!*********************************!*\
  !*** ./src/ts/ButtonControl.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonControl = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Control_1 = __webpack_require__(/*! ./Control */ "./src/ts/Control.ts");
var ButtonControl = /** @class */ (function (_super) {
    __extends(ButtonControl, _super);
    function ButtonControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ButtonControl.prototype, "_action", {
        get: function () {
            var _a;
            if (!!!((_a = this._options.ActionId) !== null && _a !== void 0 ? _a : '')) {
                return;
            }
            var action = document.querySelector("[data-id=\"" + this._options.ActionId + "\"]");
            if (!!!action) {
                return;
            }
            return action.Control;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonControl.prototype, "Enabled", {
        get: function () {
            var action = this._action;
            if (!!!action) {
                return false;
            }
            return action.Enabled;
        },
        enumerable: false,
        configurable: true
    });
    ButtonControl.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {
            Title: "text",
            PlaceHolder: "text",
            AriaLabel: "text",
            ReadOnly: false,
            Type: 'button'
        });
    };
    ;
    ButtonControl.prototype.Build = function () {
        var _a;
        this._template = "<button type=\"" + ((_a = this._options.Type) !== null && _a !== void 0 ? _a : 'button') + "\" class=\"btn btn-block btn-primary\">" + this._options.Title + "</button>";
    };
    ButtonControl.prototype.Render = function (wrapper) {
        _super.prototype.Render.call(this, wrapper);
        this._wrapper.innerHTML = this._template;
    };
    ButtonControl.prototype.Bind = function () {
        var _this = this;
        var buttonElement = this._wrapper.getElementsByClassName('btn')[0];
        buttonElement.addEventListener('click', function (x) {
            x.preventDefault();
            x.stopPropagation();
            if (!_this.Enabled) {
                return;
            }
            var action = _this._action;
            if (!action) {
                return;
            }
            action.Execute();
        });
    };
    return ButtonControl;
}(Control_1.Control));
exports.ButtonControl = ButtonControl;
exports.default = ButtonControl;


/***/ }),

/***/ "./src/ts/ColumnContainer.ts":
/*!***********************************!*\
  !*** ./src/ts/ColumnContainer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColumnContainer = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Container_1 = __webpack_require__(/*! ./Container */ "./src/ts/Container.ts");
var ColumnContainer = /** @class */ (function (_super) {
    __extends(ColumnContainer, _super);
    function ColumnContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnContainer.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {
            Width: 12,
        });
    };
    ;
    ColumnContainer.prototype.Render = function (wrapper) {
        var _a;
        _super.prototype.Render.call(this, wrapper);
        this._wrapper.classList.add("col-" + this._options.Width);
        if (((_a = this._options.WidthDesktop) !== null && _a !== void 0 ? _a : -1) > 0) {
            this._wrapper.classList.add("col-lg-" + this._options.WidthDesktop);
        }
    };
    return ColumnContainer;
}(Container_1.Container));
exports.ColumnContainer = ColumnContainer;
exports.default = ColumnContainer;


/***/ }),

/***/ "./src/ts/Container.ts":
/*!*****************************!*\
  !*** ./src/ts/Container.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Container = void 0;
var Control_1 = __webpack_require__(/*! ./Control */ "./src/ts/Control.ts");
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.Build = function () {
        this._options.Children.forEach(function (x) { return x.Build(); });
    };
    Container.prototype.Render = function (wrapper) {
        var _this = this;
        _super.prototype.Render.call(this, wrapper);
        this._options.Children.forEach(function (x) { return x.Render(_this._wrapper); });
    };
    Container.prototype.Bind = function () {
        this._options.Children.forEach(function (x) { return x.Bind(); });
    };
    Container.prototype.FindControl = function (predicate) {
        if (predicate(this)) {
            return this;
        }
        var result = lodash_1.default.find(this._options.Children, function (x) {
            if (predicate(x)) {
                return true;
            }
        });
        if (!!result) {
            return result;
        }
        for (var child in this._options.Children) {
            if (!(child.FindControl === 'function')) {
                continue;
            }
            result = child.FindControl(predicate);
            if (!!result) {
                return result;
            }
        }
        return undefined;
    };
    return Container;
}(Control_1.Control));
exports.Container = Container;
exports.default = Container;


/***/ }),

/***/ "./src/ts/Control.ts":
/*!***************************!*\
  !*** ./src/ts/Control.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Control = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Guid_1 = __importDefault(__webpack_require__(/*! ./Guid */ "./src/ts/Guid.ts"));
var Control = /** @class */ (function () {
    function Control(options, dataContext) {
        this._options = lodash_1.default.extend({}, this.GetDefaultDefinition(), options);
        this._dataContext = dataContext;
    }
    Control.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, {
            Id: Guid_1.default.NewGuid(),
            ElementType: 'div'
        });
    };
    ;
    Control.prototype.Build = function () {
    };
    Control.prototype.Render = function (wrapper) {
        var _this = this;
        var _a;
        this._wrapper = document.createElement(this._options.ElementType);
        this._wrapper.setAttribute('data-id', this._options.Id);
        this._wrapper.Control = this;
        ((_a = this._options.CssClasses) !== null && _a !== void 0 ? _a : []).forEach(function (x) { return _this._wrapper.classList.add(x); });
        wrapper.appendChild(this._wrapper);
    };
    Control.prototype.Bind = function () {
    };
    return Control;
}());
exports.Control = Control;


/***/ }),

/***/ "./src/ts/DataContext.ts":
/*!*******************************!*\
  !*** ./src/ts/DataContext.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataContext = void 0;
var DataContext = /** @class */ (function () {
    function DataContext() {
        this._dataSources = new Map();
    }
    DataContext.prototype.AddDataSource = function (dataSource) {
        if (this._dataSources.has(dataSource.Name)) {
            throw new Error('An item has already be added to the collection');
        }
        this._dataSources.set(dataSource.Name, dataSource);
    };
    DataContext.prototype.Get = function (dataSourceName) {
        if (!this._dataSources.has(dataSourceName)) {
            throw new Error('DataSource not found in the backing store.');
        }
        return this._dataSources.get(dataSourceName);
    };
    return DataContext;
}());
exports.DataContext = DataContext;


/***/ }),

/***/ "./src/ts/DataSource.ts":
/*!******************************!*\
  !*** ./src/ts/DataSource.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __importDefault(__webpack_require__(/*! ./Observable */ "./src/ts/Observable.ts"));
var DataSource = /** @class */ (function () {
    function DataSource(name, data) {
        this.__name = name;
        if (!(data instanceof Array)) {
            throw new Error('Invalid Operation');
        }
        this.__data = new Observable_1.default(data);
    }
    Object.defineProperty(DataSource.prototype, "Data", {
        get: function () {
            var _this = this;
            var result = [];
            Object.getOwnPropertyNames(this.__data).forEach(function (propertyName) {
                var value = _this.__data[propertyName];
                if (value instanceof Observable_1.default) {
                    result.push(value);
                }
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "Name", {
        get: function () {
            return this.__name.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "HasChanges", {
        get: function () {
            return this.__data.HasChanges;
        },
        enumerable: false,
        configurable: true
    });
    DataSource.prototype.DiscardChanges = function () {
        this.__data.DiscardChanges();
    };
    return DataSource;
}());
exports.default = DataSource;


/***/ }),

/***/ "./src/ts/FormContainer.ts":
/*!*********************************!*\
  !*** ./src/ts/FormContainer.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormContainer = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Container_1 = __webpack_require__(/*! ./Container */ "./src/ts/Container.ts");
var FormContainer = /** @class */ (function (_super) {
    __extends(FormContainer, _super);
    function FormContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormContainer.prototype, "_formWrapper", {
        get: function () {
            return this._wrapper;
        },
        enumerable: false,
        configurable: true
    });
    FormContainer.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {
            ElementType: 'form',
        });
    };
    ;
    FormContainer.prototype.Render = function (wrapper) {
        _super.prototype.Render.call(this, wrapper);
        this._formWrapper.action = 'index-2.html';
    };
    return FormContainer;
}(Container_1.Container));
exports.FormContainer = FormContainer;
exports.default = FormContainer;


/***/ }),

/***/ "./src/ts/FormSubmitAction.ts":
/*!************************************!*\
  !*** ./src/ts/FormSubmitAction.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormSubmitActionControl = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Action_1 = __webpack_require__(/*! ./Action */ "./src/ts/Action.ts");
var FormSubmitActionControl = /** @class */ (function (_super) {
    __extends(FormSubmitActionControl, _super);
    function FormSubmitActionControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormSubmitActionControl.prototype, "Enabled", {
        get: function () {
            var _a;
            if (!!!((_a = this._options.FormId) !== null && _a !== void 0 ? _a : '')) {
                return false;
            }
            var form = document.querySelector("[data-id=\"" + this._options.FormId + "\"]");
            return !!form;
        },
        enumerable: false,
        configurable: true
    });
    FormSubmitActionControl.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {});
    };
    ;
    FormSubmitActionControl.prototype.Execute = function () {
        var _a;
        if (!!!((_a = this._options.FormId) !== null && _a !== void 0 ? _a : '')) {
            return;
        }
        var form = document.querySelector("[data-id=\"" + this._options.FormId + "\"]");
        if (!!!form) {
            return;
        }
        form.submit();
    };
    return FormSubmitActionControl;
}(Action_1.ActionControl));
exports.FormSubmitActionControl = FormSubmitActionControl;
exports.default = FormSubmitActionControl;


/***/ }),

/***/ "./src/ts/Guid.ts":
/*!************************!*\
  !*** ./src/ts/Guid.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.NewGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (x) {
            var r = Math.random() * 16 | 0;
            var v = x == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
exports.default = Guid;


/***/ }),

/***/ "./src/ts/Observable.ts":
/*!******************************!*\
  !*** ./src/ts/Observable.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Observable = /** @class */ (function () {
    function Observable(obj) {
        var _this = this;
        this.__internalObject = obj;
        if (obj instanceof Array) {
            this.__originalValues = lodash_1.default.extend([], JSON.parse(JSON.stringify(obj)));
            this.__currentValues = [];
        }
        else if (obj instanceof Object) {
            this.__originalValues = lodash_1.default.extend({}, JSON.parse(JSON.stringify(obj)));
            this.__currentValues = {};
        }
        else {
            throw new Error('Invalid Operation');
        }
        Object.keys(this.__internalObject).forEach(function (x) {
            Object.defineProperty(_this, x, {
                get: function () {
                    return this.GetProperty(x);
                },
                set: function (value) {
                    this.SetProperty(x, value);
                }
            });
            _this.SetProperty(x, _this.__internalObject[x]);
        });
    }
    Observable.prototype.GetProperty = function (propertyName) {
        if (!!!lodash_1.default.some(Object.keys(this.__internalObject), function (x) { return x === propertyName; })) {
            throw new Error("Invalid property name " + propertyName);
        }
        return this.__currentValues[propertyName];
    };
    Observable.prototype.SetProperty = function (propertyName, value) {
        if (!!!lodash_1.default.some(Object.keys(this.__internalObject), function (x) { return x === propertyName; })) {
            throw new Error("Invalid property name " + propertyName);
        }
        if (value instanceof Array) {
            this.__currentValues[propertyName] = new Observable(value);
            this.__internalObject[propertyName] = value;
            return;
        }
        if (value instanceof Object) {
            this.__currentValues[propertyName] = new Observable(value);
            this.__internalObject[propertyName] = value;
            return;
        }
        this.__internalObject[propertyName] = this.__currentValues[propertyName] = value;
    };
    Object.defineProperty(Observable.prototype, "HasChanges", {
        get: function () {
            var _this = this;
            return lodash_1.default.some(Object.keys(this.__internalObject), function (x) {
                var currentValue = _this.__currentValues[x];
                if (currentValue instanceof Observable) {
                    return currentValue.HasChanges;
                }
                return currentValue !== _this.__originalValues[x];
            });
        },
        enumerable: false,
        configurable: true
    });
    Observable.prototype.DiscardChanges = function () {
        var _this = this;
        if (!this.HasChanges) {
            return;
        }
        Object.keys(this.__internalObject).forEach(function (x) {
            var currentValue = _this.__currentValues[x];
            if (currentValue instanceof Observable) {
                if (currentValue.HasChanges) {
                    currentValue.DiscardChanges();
                }
                return;
            }
            if (_this.__currentValues[x] !== _this.__originalValues[x]) {
                _this.SetProperty(x, _this.__originalValues[x]);
            }
        });
    };
    return Observable;
}());
exports.default = Observable;


/***/ }),

/***/ "./src/ts/RowContainer.ts":
/*!********************************!*\
  !*** ./src/ts/RowContainer.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RowContainer = void 0;
var Container_1 = __webpack_require__(/*! ./Container */ "./src/ts/Container.ts");
var RowContainer = /** @class */ (function (_super) {
    __extends(RowContainer, _super);
    function RowContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowContainer.prototype.Render = function (wrapper) {
        _super.prototype.Render.call(this, wrapper);
        this._wrapper.classList.add('row');
    };
    return RowContainer;
}(Container_1.Container));
exports.RowContainer = RowContainer;
exports.default = RowContainer;


/***/ }),

/***/ "./src/ts/SelectControl.ts":
/*!*********************************!*\
  !*** ./src/ts/SelectControl.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectControl = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Control_1 = __webpack_require__(/*! ./Control */ "./src/ts/Control.ts");
var SelectControl = /** @class */ (function (_super) {
    __extends(SelectControl, _super);
    function SelectControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectControl.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {
            Title: "text",
            AriaLabel: "text",
            PleaseSelect: false,
            Required: false
        });
    };
    ;
    SelectControl.prototype.Build = function () {
        var _a;
        this._template = "\n<div class=\"input-group my-3\">\n    <span class=\"input-group-text\" id=\"" + this._options.Id + "-at\">" + this._options.Title + "</span>\n    <select class=\"form-select\" aria-label=\"" + this._options.AriaLabel + "\"\n        aria-describedby=\"" + this._options.Id + "-at\" " + (((_a = this._options.Required) !== null && _a !== void 0 ? _a : false) ? 'required' : '') + ">\n    </select>\n</div>";
    };
    SelectControl.prototype.Render = function (wrapper) {
        _super.prototype.Render.call(this, wrapper);
        this._wrapper.innerHTML = this._template;
    };
    SelectControl.prototype.Bind = function () {
        var _this = this;
        var _a;
        var selectElement = this._wrapper.getElementsByClassName('form-select')[0];
        var options = [];
        if ((_a = this._options.PleaseSelect) !== null && _a !== void 0 ? _a : false) {
            options.push({
                text: 'Παρακαλώ επίλεξε',
                value: '',
                disabled: true
            });
        }
        var dataSource = this._dataContext.Get(this._options.LookupDataSource.Name);
        options = lodash_1.default.concat([], options, lodash_1.default.map(dataSource.Data, function (x, i) {
            return {
                text: x.GetProperty(_this._options.LookupDataSource.TextField),
                value: x.GetProperty(_this._options.LookupDataSource.ValueField),
                disabled: false
            };
        }));
        options.map(function (x, i) {
            var option = document.createElement('option');
            option.text = x.text;
            option.value = x.value;
            option.disabled = x.disabled;
            option.selected = i == 0;
            return option;
        }).forEach(function (x) {
            selectElement.add(x);
        });
    };
    return SelectControl;
}(Control_1.Control));
exports.SelectControl = SelectControl;
exports.default = SelectControl;


/***/ }),

/***/ "./src/ts/TextAreaControl.ts":
/*!***********************************!*\
  !*** ./src/ts/TextAreaControl.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextArea = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Control_1 = __webpack_require__(/*! ./Control */ "./src/ts/Control.ts");
var TextAreaControl = /** @class */ (function (_super) {
    __extends(TextAreaControl, _super);
    function TextAreaControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaControl.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {
            Title: "text area",
            PlaceHolder: "text area",
            AriaLabel: "text area"
        });
    };
    ;
    TextAreaControl.prototype.Build = function () {
        _super.prototype.Build.call(this);
        this._template = "                                        \n<div class=\"input-group my-3\">\n    <span class=\"input-group-text\" id=\"" + this._options.Id + "-at\">" + this._options.Title + "</span>\n    <textarea class=\"form-control\" rows=\"3\" placeholder=\"" + this._options.PlaceHolder + "\" aria-label=\"" + this._options.AriaLabel + "\"\n        aria-describedby=\"" + this._options.Id + "-at\" required></textarea>\n</div>";
    };
    TextAreaControl.prototype.Render = function (wrapper) {
        _super.prototype.Render.call(this, wrapper);
        this._wrapper.innerHTML = this._template;
    };
    TextAreaControl.prototype.Bind = function () {
        _super.prototype.Bind.call(this);
    };
    return TextAreaControl;
}(Control_1.Control));
exports.TextArea = TextAreaControl;
exports.default = TextAreaControl;


/***/ }),

/***/ "./src/ts/TextControl.ts":
/*!*******************************!*\
  !*** ./src/ts/TextControl.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextControl = void 0;
var lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
var Control_1 = __webpack_require__(/*! ./Control */ "./src/ts/Control.ts");
var TextControl = /** @class */ (function (_super) {
    __extends(TextControl, _super);
    function TextControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextControl.prototype.GetDefaultDefinition = function () {
        return lodash_1.default.extend({}, _super.prototype.GetDefaultDefinition.call(this), {
            Title: "text",
            PlaceHolder: "text",
            AriaLabel: "text",
            ReadOnly: false,
            Required: false
        });
    };
    ;
    TextControl.prototype.Build = function () {
        var _a, _b;
        this._template = "\n<span class=\"input-group-text\" id=\"" + this._options.Id + "-at\">" + this._options.Title + "</span>\n<input type=\"text\" class=\"form-control\" placeholder=\"" + this._options.PlaceHolder + "\" aria-label=\"" + this._options.AriaLabel + "\"\n    aria-describedby=\"" + this._options.Id + "-at\" " + (((_a = this._options.ReadOnly) !== null && _a !== void 0 ? _a : false) ? 'disabled' : '') + " " + (((_b = this._options.Required) !== null && _b !== void 0 ? _b : false) ? 'required' : '') + ">";
    };
    TextControl.prototype.Render = function (wrapper) {
        _super.prototype.Render.call(this, wrapper);
        this._wrapper.classList.add('input-group');
        this._wrapper.classList.add('my-3');
        this._wrapper.innerHTML = this._template;
    };
    TextControl.prototype.Bind = function () {
    };
    return TextControl;
}(Control_1.Control));
exports.TextControl = TextControl;
exports.default = TextControl;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Guid_1 = __importDefault(__webpack_require__(/*! ./Guid */ "./src/ts/Guid.ts"));
var TextAreaControl_1 = __importDefault(__webpack_require__(/*! ./TextAreaControl */ "./src/ts/TextAreaControl.ts"));
var TextControl_1 = __importDefault(__webpack_require__(/*! ./TextControl */ "./src/ts/TextControl.ts"));
var SelectControl_1 = __importDefault(__webpack_require__(/*! ./SelectControl */ "./src/ts/SelectControl.ts"));
var FormContainer_1 = __importDefault(__webpack_require__(/*! ./FormContainer */ "./src/ts/FormContainer.ts"));
var RowContainer_1 = __importDefault(__webpack_require__(/*! ./RowContainer */ "./src/ts/RowContainer.ts"));
var ColumnContainer_1 = __importDefault(__webpack_require__(/*! ./ColumnContainer */ "./src/ts/ColumnContainer.ts"));
var ButtonControl_1 = __importDefault(__webpack_require__(/*! ./ButtonControl */ "./src/ts/ButtonControl.ts"));
var ActionContainer_1 = __importDefault(__webpack_require__(/*! ./ActionContainer */ "./src/ts/ActionContainer.ts"));
var FormSubmitAction_1 = __importDefault(__webpack_require__(/*! ./FormSubmitAction */ "./src/ts/FormSubmitAction.ts"));
var DataSource_1 = __importDefault(__webpack_require__(/*! ./DataSource */ "./src/ts/DataSource.ts"));
var DataContext_1 = __webpack_require__(/*! ./DataContext */ "./src/ts/DataContext.ts");
var formId = Guid_1.default.NewGuid();
var submitActionId = Guid_1.default.NewGuid();
var postalCodes = [
    { PostalCode: '30001', Area: 'ΒΑΛΤΙ ΑΙΤΩΛ/ΝΙΑΣ, ΓΟΥΡΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΣΙΝΙ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΝΙΝΑ ΒΛΙΖΙΑΝΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΡΜΑΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΣΤΡΟ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΟΧΩΡΙ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΜΑΝΙΝΑ  ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΝΤΑΛΟΦΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΑΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΡΙΓΑΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΡΟΓΓΥΛΟΒΟΥΝΙ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30002', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΒΟΝΙΤΣΗΣ ΛΕΥΚΑΔΑΣ, ΑΚΤΙΟ ΠΡΕΒΕΖΑΣ, ΑΛΥΚΕΣ ΤΟΥΡΛΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΜΟΥΣΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΤΩΝΗ ΛΕΥΚΑΔΑΣ, ΒΑΓΙΑ ΝΗΣΟΣ ΛΕΥΚΑΔΑΣ, ΒΟΝΙΤΣΑ ΛΕΥΚΑΔΑΣ, ΓΟΥΡΓΟΥΒΛΗ ΛΕΥΚΑΔΑΣ, ΔΡΥΜΟΣ ΛΕΥΚΑΔΑΣ, ΘΥΡΙΟ ΛΕΥΚΑΔΑΣ, ΚΟΡΠΗ ΛΕΥΚΑΔΑΣ, ΝΕΑ ΚΑΜΑΡΙΝΑ ΛΕΥΚΑΔΑΣ, ΠΑΛΙΑΜΠΕΛΑ ΒΟΝΙΤΣΗΣ ΛΕΥΚΑΔΑΣ, ΠΕΡΑΤΙΑ ΛΕΥΚΑΔΑΣ, ΠΕΤΡΑ ΛΕΥΚΑΔΑΣ, ΠΛΑΓΙΑ ΛΕΥΚΑΔΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30003', Area: 'ΞΗΡΑΚΙΑ ΠΑΝΑΙΤΩΛΙΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΚΑΡΥΑ ΚΕΡΑΣΕΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΚΕΡΑΣΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΝΑΙΤΩΛΙΟ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30004', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΒΟΝΙΤΣΗΣ ΛΕΥΚΑΔΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΑΤΟΥΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΕΤΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΧΥΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΟΥΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΜΠΩΤΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΝΟΠΙΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΟΥΤΡΑΚΙ ΚΑΤΟΥΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΥΦΟΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30005', Area: 'ΚΑΙΝΟΥΡΓΙΟ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30006', Area: 'ΑΓΡΑΜΠΕΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΣΤΑΚΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΣΙΛΟΠΟΥΛΟ ΑΙΤΩΛ/ΝΙΑΣ, ΒΛΙΖΙΑΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΡΑΙΣΚΑΚΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΡΟΔΡΟΜΟΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30008', Area: 'ΑΒΑΡΙΚΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΣΟΦΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΔΡΥΜΩΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΘΕΟΔΩΡΟΣ ΚΟΚΚΙΝΟΒΡΥΣΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΤΡΙΧΩΝΙΔΑΣ(ΚΟΝΙΣΚΗΣ) ΑΙΤΩΛ/ΝΙΑΣ, ΑΕΤΟΠΕΤΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΒΡΑΚΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΠΕΛΙΑ ΚΟΚΚΙΝΟΒΡΥΣΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΑΛΗΨΗ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΔΡΥΜΩΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΡΓΥΡΟ ΠΗΓΑΔΙ ΑΙΤΩΛ/ΝΙΑΣ, ΔΑΦΝΗ ΑΜΒΡΑΚΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΔΙΑΣΕΛΛΟ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΔΙΠΛΑΤΑΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΔΟΚΙΜΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΟΣΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΟΥΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΡΥΜΩΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΘΕΟΤΟΚΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΘΕΡΜΟ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΗΜΕΝΑ ΑΜΠΕΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΛΛΙΘΕΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΛΟΥΔΙ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΛΑΜΠΙΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΜΑΚΡΙΑ ΛΟΓΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΧΡΥΣΟΒΙΤΣΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΛΟΠΟΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΝΙΣΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΣΚΙΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΥΛΟΥΡΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΥΤΣΟΜΗΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΦΤΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΔΙΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΜΠΙΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΥΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΛΟΥΣΤΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΟΥΤΡΑ  ΜΥΡΤΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΚΡΙΑ ΛΟΓΓΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΝΔΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΡΑΘΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΡΑΘΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΡΑΘΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΥΡΟΒΟΡΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΓΑΣ ΔΕΝΔΡΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΛΙΓΚΟΒΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΙΣΑΜΠΕΛΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΥΡΤΕΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΥΡΤΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΡΟΣΥΡΤΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΡΟΧΩΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΜΥΛΟΣ ΜΥΡΤΕΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΙΟΥΡΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΜΦΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΕΒΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΤΡΟΧΩΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΙΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΥΛΙΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΥΡΝΑΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΡΙΟΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΡΟΓΓΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΙΤΑΡΑΛΩΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΠΑΡΤΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΕΚΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΡΙΓΑΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΤΑΞΙΑΡΧΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΧΑΛΙΚΙ ΑΜΒΡΑΚΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΧΡΥΣΟΒΙΤΣΑ ΒΟΝΙΤΣΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΧΡΥΣΟΒΙΤΣΑ ΤΡΙΧΩΝΙΔΟΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30009', Area: 'ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΥΒΑΡΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΧΑΙΡΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΑΜΠΙΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΠΑΔΑΤΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΡΙΒΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΟΥΡΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΦΥΤΕΙΕΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30010', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΠΑΡΑΒΟΛΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΒΑΡΒΑΡΑ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΛΑΙΟΚΑΡΥΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΠΑΡΑΒΟΛΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΒΛΟΧΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΦΡΑΤΟ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΡΕΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΟΓΡΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΚΑΒΑΣ ΚΑΙΝΟΥΡΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΡΡΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΤΡΑΓΑΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΡΥΟ ΝΕΡΟ ΑΙΤΩΛ/ΝΙΑΣ, ΚΥΡΑ ΒΓΕΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΡΟΜΑΝΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΚΑΡΥΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΝΤΑΝΑΣΣΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΡΑΒΟΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΙΣΤΕΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΑΝΙΑΣ ΠΑΡΑΒΟΛΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΡΟΣΗΛΙΑ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΧΟΙΝΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΑΓΑΝΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30011', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΜΑΤΑΡΑΓΚΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΖΕΥΓΑΡΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΚΕΡΑΣΟΒΟ ΑΙΤΩΛ/ΝΙΑΣ, ΖΕΥΓΑΡΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΖΕΥΓΑΡΑΚΙ ΑΡΑΚΥΝΘΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΜΑΡΕΤΣΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΚΕΡΑΣΟΒΟ ΑΙΤΩΛ/ΝΙΑΣ, ΛΩΛΕΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΓΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΤΑΡΑΓΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΠΛΑΤΑΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΠΠΑΔΑΤΕΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30012', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΕΚΡΟΠΙΑΣ ΛΕΥΚΑΔΑΣ, ΒΑΡΚΟ ΛΕΥΚΑΔΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ ΠΑΛΑΙΡΟΥ ΛΕΥΚΑΔΑΣ, ΠΑΛΑΙΡΟΣ ΛΕΥΚΑΔΑΣ, ΠΑΛΙΑ ΠΛΑΓΙΑ ΛΕΥΚΑΔΑΣ, ΠΕΡΙΒΟΛΙΑ ΚΑΛΑΜΙΩΝΑΣ ΛΕΥΚΑΔΑΣ, ΠΟΓΩΝΙΑ ΛΕΥΚΑΔΑΣ, ΣΚΛΑΒΑΙΝΑ ΛΕΥΚΑΔΑΣ, ΣΤΕΝΟ ΠΟΓΩΝΙΑΣ ΛΕΥΚΑΔΑΣ, ΣΤΕΝΟ ΧΑΡΑΔΙΑΤΙΚΩΝ ΛΕΥΚΑΔΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30014', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΛΕΙΣΟΡΡΕΥΜΑΤΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΒΑΣΙΛΙΚΗ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΚΟΥΔΟΥΝΙ ΑΙΤΩΛ/ΝΙΑΣ, ΓΑΛΑΤΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΕΥΗΝΟΧΩΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΛΑΒΡΟΥΖΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΒΑΣΙΛΙΚΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΚΑΛΑΒΡΟΥΖΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΚΟΥΔΟΥΝΙ ΑΙΤΩΛ/ΝΙΑΣ, ΚΛΕΙΣΟΡΡΕΥΜΑΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΛΗΜΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΚΩΡΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΥΤΣΟΧΕΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΚΡΥΟΝΕΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΛΙΚΙΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΡΕΣΙΑΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΑ ΚΑΛΥΔΩΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΞΗΡΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΑΜΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΙΘΩΡΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΙΚΟΡΦΟ ΕΥΗΝΟΧΩΡΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30015', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΜΑΚΡΙΝΟΥΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΜΑΚΡΙΝΟΥΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΚΡΕΣ (ΛΙΘΟΒΟΥΝΙΟ) ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΜΕΤΑΠΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΡΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΓΑΒΑΛΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΓΡΑΜΜΑΤΙΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΔΑΦΝΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΖΑΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΜΑΚΡΙΝΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΨΟΡΡΑΧΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΥΡΤΕΛΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΥΨΕΛΗ ΜΑΚΡΙΝΟΥΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΙΘΟΒΟΥΝΙ (ΑΚΡΕΣ) ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΚΡΙΝΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΣΑΡΙΣΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΤΑΞΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΟΥΡΛΕΣΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΖΕΥΓΑΡΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΚΑΨΟΡΑΧΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΡΑΔΕΙΣΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΤΑΜΟΥΛΑ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΣΑΡΑΝΤΗ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΙΧΩΝΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΤΣΙΛΙΓΙΑΝΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30017', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΒΑΛΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΜΗΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΡΑΠΙΔΟΚΑΜΠΟΣ ΒΑΛΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΠΕΛΙ ΑΙΤΩΛ/ΝΙΑΣ, ΑΥΛΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΒΡΟΥΒΙΑΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΓΡΑΜΜΑΤΣΟΥΛΙ ΑΙΤΩΛ/ΝΙΑΣ, ΔΡΟΜΙΤΣΑ ΑΙΤΩΛ/ΝΙΑΣ, ΕΜΠΕΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΘΥΑΜΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΜΙΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΟ ΑΓΡΙΔΙ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΟ ΧΑΛΚΙΟΠΟΥΛΟ ΑΙΤΩΛ/ΝΙΑΣ, ΞΗΡΑΚΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΞΩΜΕΡΗ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΙΑΜΠΕΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΤΙΟΠΟΥΛΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΥΛΙΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΔΙΚΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΤΣΑΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΗΓΑΔΙΑ ΠΕΡΔΙΚΑΚΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΤΑΜΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΡΟΣΗΛΙΑ ΒΑΛΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΑΤΖΟΚΑΜΠΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΘΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΥΚΕΑ ΑΡΤΑΣ, ΤΡΙΚΛΙΝΟ ΑΙΤΩΛ/ΝΙΑΣ, ΦΡΑΓΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΧΑΛΚΙΟΠΟΥΛΟ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30019', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΛΕΥΚΑΔΑΣ, ΑΡΧΟΝΤΟΧΩΡΙ ΛΕΥΚΑΔΑΣ, ΒΑΡΝΑΚΑΣ ΛΕΥΚΑΔΑΣ, ΒΑΤΟΣ ΛΕΥΚΑΔΑΣ, ΚΑΝΔΗΛΑ ΛΕΥΚΑΔΑΣ, ΜΥΤΙΚΑΣ ΛΕΥΚΑΔΑΣ, ΠΑΛΙΟΒΑΡΚΑ ΛΕΥΚΑΔΑΣ, ΠΑΝΑΓΟΥΛΑ ΛΕΥΚΑΔΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30020', Area: 'ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΠΟΛΥΚΑΡΠΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΡΑΠΙΔΟΚΑΜΠΟΣ ΝΑΥΠΑΚΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΤΙΡΡΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΠΛΑΤΑΝΙΤΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΛΤΟΣ ΝΑΥΠΑΚΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΡΑΟΥΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΚΥΝΕΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΙΣΟΚΑΜΠΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΟΛΥΚΡΕΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΑΝΙΤΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΡΙΖΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΠΑΡΤΟΡΑΧΗ ΑΙΤΩΛ/ΝΙΑΣ, ΦΡΑΓΚΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30021', Area: 'ΑΓΑΛΙΑΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΒΑΡΒΑΡΑ ΣΑΡΔΙΑΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΔΕΥΤΕΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΒΛΑΣΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΠΕΝΤΑΚΟΡΦΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΓΟΥΝΑΡΗ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΠΑΡΑΚΑΜΠΥΛΙΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΚΡΙΔΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΔΡΩΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΜΠΟΣ ΧΟΥΝΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΡΑΜΑΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΚΑΜΠΟΣ ΑΓΙΟΥ ΒΛΑΣΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΡΕΜΑΣΤΑ ΣΥΚΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΚΚΕΣ ΧΟΥΝΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΚΩΜΑΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΠΑΤΟ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΝΤΙΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΥΡΟΜΥΤΗ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΑΣΔΟΥΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΟΚΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΧΟΥΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΧΩΡΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΤΙΣΤΙΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΡΙΟ ΧΟΥΝΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΑΛΙΤΙΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΙΑΔΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΟΒΟΛΑΚΙΤΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΧΑΡΑΜΑ ΑΙΤΩΛ/ΝΙΑΣ, ΧΑΡΑΥΓΗ ΑΙΤΩΛ/ΝΙΑΣ, ΧΟΥΝΗ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30022', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΧΟΜΟΡΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΧΛΑΔΟΚΑΣΤΡΟ ΑΙΤΩΛ/ΝΙΑΣ, ΔΙΑΣΕΛΛΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΔΙΑΣΕΛΛΟ ΝΑΥΠΑΚΤΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΣΤΑΝΕΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΠΛΑΤΑΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΙΣΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΡΚΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΑΝΟΣ ΝΑΥΠΑΚΤΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΧΟΜΟΡΗ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30023', Area: 'ΑΜΠΕΛΑΚΙΩΤΙΣΣΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΧΩΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΧΩΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΔΟΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30027', Area: 'ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30100', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ  ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΑΛΥΒΙΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΡΗΓΑΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΡΙΝΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΑΚΡΟΠΟΤΑΜΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΛΩΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΠΕΛΙΑ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΥΛΑΚΙΕΣ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΙΝΑΡΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΡΚΟΥΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΕΛΟΥΧΙ ΑΙΤΩΛ/ΝΙΑΣ, ΓΕΡΟΒΑΣΙΛΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΓΙΑΝΟΥΖΙ ΑΙΤΩΛ/ΝΙΑΣ, ΓΟΥΡΙΩΤΙΣΣΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΙΑΜΑΝΤΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΟΚΙΜΙ ΑΙΤΩΛ/ΝΙΑΣ, ΔΡΟΣΙΝΙΑΤΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΕΛΑΙΟΦΥΤΟ ΝΕΑΠΟΛΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΕΛΕΥΘΕΡΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΕΛΛΗΝΙΚΑ ΑΓΡΙΝΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΕΛΛΗΝΙΚΟ ΣΚΟΥΤΕΡΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΚΑΒΑΣ ΣΚΟΥΤΕΡΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΛΥΒΙΑ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΜΑΡΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΣΤΑΝΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΣΤΡΑΚΙ ΒΑΛΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΛΑΝΙΤΗΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΛΛΑΚΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΡΑΣΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΚΚΙΝΟΒΡΥΣΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΚΚΙΝΟΛΟΓΓΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΚΚΙΝΟΠΥΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΡΑΨΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΥΠΑΡΙΣΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΥΨΕΛΗ (ΣΦΗΝΑΣ) ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΓΚΑΔΙ ΛΕΠΕΝΟΥΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΑΣΠΕΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΠΕΝΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΥΚΑ  ΑΓΡΙΝΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΥΚΑ ΔΟΚΙΜΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΛΙΑΓΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΙΜΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΛΕΒΡΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΤΣΟΥΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΓΑΛΗ ΧΩΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΟΥΖΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΑ ΑΒΟΡΑΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΑΠΟΛΗ ΑΙΤΩΛ/ΝΙΑΣ, ΟΧΘΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΤΟΥΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΝΤΑΚΟΡΦΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΑΝΟΣ ΑΜΠΕΛΙΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΑΝΟΣ ΚΑΛΥΒΙΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΤΑΜΟΥΛΑ ΤΡΙΧΩΝΙΔΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΥΡΓΙ ΑΙΤΩΛ/ΝΙΑΣ, ΡΑΙΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΑΡΓΙΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΙΓΚΟΥΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΙΤΟΜΕΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΟΥΤΕΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΟΥΤΕΣΙΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΠΟΛΑΙΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΜΑΤΟΓΙΑΝΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΥΡΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΡΑΤΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΡΟΓΓΥΛΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΧΙΝΟΣ ΑΓΡΙΝΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΙΑΝΤΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΤΣΟΥΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΦΡΑΓΚΟΣΚΑΛΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30150', Area: 'ΑΓΊΑ ΒΑΡΒΆΡΑ ΠΑΡΑΒΌΛ ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ, ΑΓΊΑ ΠΑΡΑΣΚΕΥΉ ΠΑΡΑΒ ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30200', Area: 'ΑΓΙΟΣ ΘΩΜΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΣΥΜΕΩΝ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΡΑΦΟΡΡΑΧΗ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΡΙΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΜΟΥΣΟΥΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΡΒΑΝΙΤΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΡΧΑΙΑ ΑΛΙΚΑΡΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΣΙΛΑΔΙ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΕΛΛΗΝΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΖΕΣΤΗ ΑΙΤΩΛ/ΝΙΑΣ, ΘΕΟΔΩΡΑΚΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΕΛΛΗΝΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΡΕΤΣΙΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΜΜΑ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΣΟΚΑΜΠΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΣΟΛΟΓΓΙ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΤΟΧΙ ΑΓΙΟΥ ΘΩΜΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΑΜΠΑΚΟΥΛΑ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΝΕΑ ΥΔΡΑΓΩΓΕΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΝΟΤΙΟΣ ΔΙΑΥΛΟΣ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΣΠΑΛΙΑΡΕΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΡΟΚΟΠΑΝΗΣΤΟΣ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΧΙΝΟΣ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΣΧΟΙΝΙΑΣ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΤΟΥΡΛΙΣ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΕΛΑΓΚΑΘΑ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΥΠΕΣ ΑΙΤΩΛ/ΝΙΑΣ, ΧΟΥΝΙΣΤΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30300', Area: 'ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΒΟΜΒΟΚΟΥΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΑΒΡΥΤΗ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΘΟΦΥΤΟ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΩ ΑΦΡΟΞΥΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΕΛΒΙΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΛΑΧΟΜΑΝΔΡΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΟΜΒΟΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΓΑΒΡΟΛΙΜΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΓΑΒΡΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΓΕΦΥΡΑ ΜΠΑΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΓΟΛΕΜΙ ΑΙΤΩΛ/ΝΙΑΣ, ΔΑΦΝΗ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΔΑΦΝΗ ΝΑΥΠΑΚΤΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΣΤΡΑΚΙ ΝΑΥΠΑΚΤΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΑΦΥΓΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΑΦΡΟΞΥΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΔΑΦΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΩ ΜΑΜΟΥΛΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΥΤΣΟΓΙΑΝΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΛΕΥΚΑ ΒΟΜΒΟΚΟΥΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΥΓΙΑ ΝΕΟΚΑΣΤΡΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΜΟΥΛΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΡΜΑΡΑ ΝΑΥΠΑΚΤΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΙΚΡΟ ΠΑΛΑΙΟΧΩΡΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΙΩΑΝΝΗ ΑΙΤΩΛ/ΝΙΑΣ, ΝΑΥΠΑΚΤΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΞΗΡΟΠΗΓΑΔΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΧΩΡΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΙΤΣΙΝΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΡΙΓΑΝΙ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΑΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΥΚΙΑ ΠΙΤΣΙΝΑΙΙΚΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΣΦΗΚΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30400', Area: 'ΑΓΓΕΛΟΚΑΣΤΡΟ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΗΛΙΑΣ ΜΕΣΟΛΟΓΓΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΑΙΤΩΛΙΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΙΤΩΛΙΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΓΙΑΤΣΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΦΑΛΟΒΡΥΣΟ ΑΙΤΩΛΙΚΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΦΑΛΟΒΡΥΣΟΣ ΣΤΑΜΝΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΥΣΙΜΑΧΕΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΣΑ ΠΗΓΑΔΙ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΟΥΖΑ ΑΙΤΩΛ/ΝΙΑΣ, ΝΗΣΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΟΡΟΣ ΜΕΣΟΛΟΓΓΙΟΥ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΘΜΟΣ ΑΓΓΕΛΟΚΑΣΤΡΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΘΜΟΣ ΣΤΑΜΝΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΜΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΦΡΑΓΚΟΥΛΑΙΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΧΑΛΙΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΧΡΥΣΟΒΕΡΓΙ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '30500', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΒΑΛΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΚΕΧΡΙΝΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΠΕΛΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΦΙΛΟΧΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΦΙΛΟΧΙΚΟ ΑΡΓΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΝΟΙΞΙΑΤΙΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΑΡΙΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΒΑΡΕΤΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΛΥΒΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΜΠΟΣ ΑΜΠΕΛΑΚΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΝΑΛΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΤΑΦΟΥΡΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΡΑΜΙΔΙ ΑΙΤΩΛ/ΝΙΑΣ, ΚΕΧΡΙΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΟΜΠΟΘΕΚΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΡΙΚΕΛΛΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΛΙΜΝΑΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΚΡΥΧΩΡΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΥΡΟΡΑΧΗ ΑΙΤΩΛ/ΝΙΑΣ, ΜΕΓΑΣ ΚΑΜΠΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΟΝΗ ΡΕΘΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΠΟΥΚΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΞΗΡΟΛΙΒΑΔΟ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΤΡΑΛΩΝΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΗΓΑΔΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΛΑΤΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΒΑΛΤΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΠΤΕΛΕΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΑΡΔΙΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΡΕΙΚΟ ΑΙΤΩΛ/ΝΙΑΣ, ΣΠΑΡΤΟ ΑΙΤΩΛ/ΝΙΑΣ, ΣΤΑΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΙΑ ΑΛΩΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΙΑΝΤΑΦΥΛΛΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΤΣΟΥΚΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΦΑΛΑΓΓΙΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΦΤΕΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΨΗΛΑ ΑΛΩΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Αιτωλοακαρνανίας' },
    { PostalCode: '21051', Area: 'ΑΓΙΑ ΑΙΚΑΤΕΡΙΝΗ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΑΡΓΟΛΙΔΑΣ, ΑΚΤΗ ΥΔΡΑΣ ΑΡΓΟΛΙΔΑΣ, ΑΧΛΑΔΙΤΣΑ ΑΡΓΟΛΙΔΑΣ, ΕΡΜΙΟΝΗ ΑΡΓΟΛΙΔΑΣ, ΗΛΙΟΚΑΣΤΡΟ ΑΡΓΟΛΙΔΑΣ, ΘΕΡΜΗΣΙΑ ΑΡΓΟΛΙΔΑΣ, ΚΑΜΠΟΣ ΕΡΜΙΟΝΗΣ ΑΡΓΟΛΙΔΑΣ, ΚΙΝΕΤΑ ΑΡΓΟΛΙΔΑΣ, ΚΟΥΒΕΡΤΑ ΑΡΓΟΛΙΔΑΣ, ΛΟΥΚΑΙΤΙΟ ΑΡΓΟΛΙΔΑΣ, ΜΕΤΟΧΙ ΘΕΡΜΗΣΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΗ ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ ΑΡΓΟΛΙΔΑΣ, ΠΕΤΡΟΘΑΛΑΣΣΑ ΕΡΜΙΟΝΗΣ ΑΡΓΟΛΙΔΑΣ, ΠΗΓΑΔΙΑ ΑΡΓΟΛΙΔΑΣ, ΠΛΕΠΙΟ ΑΡΓΟΛΙΔΑΣ, ΠΟΔΑΡΙ ΑΡΓΟΛΙΔΑΣ, ΣΩΛΗΝΑΡΙ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21052', Area: 'ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΑΡΓΟΛΙΔΑΣ, ΑΔΑΜΙ ΑΡΓΟΛΙΔΑΣ, ΑΝΑΣΤΑΣΟΠΟΥΛΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΑΡΚΑΔΙΚΟ ΑΡΓΟΛΙΔΑΣ, ΑΡΧΑΙΑ ΕΠΙΔΑΥΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΣΚΛΗΠΙΕΙΟ ΕΠΙΔΑΥΡΟΥ ΑΡΓΟΛΙΔΑΣ, ΒΟΘΙΚΙΟ ΑΡΓΟΛΙΔΑΣ, ΓΙΑΝΝΟΥΛΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΔΗΜΟΣΙΑ ΑΡΓΟΛΙΔΑΣ, ΕΞΟΧΗ ΤΡΑΧΕΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΚΟΚΚΙΝΑΔΕΣ ΑΡΓΟΛΙΔΑΣ, ΚΟΛΙΑΚΙ ΑΡΓΟΛΙΔΑΣ, ΚΟΡΩΝΗ ΑΡΓΟΛΙΔΑΣ, ΛΥΓΟΥΡΙΟ ΑΡΓΟΛΙΔΑΣ, ΜΑΤΑΡΑΓΚΑ ΑΡΓΟΛΙΔΑΣ, ΡΟΥΣΒΑΝΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΣΠΗΛΕΙΑ ΑΡΓΟΛΙΔΑΣ, ΣΤΑΜΑΤΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΣΤΑΥΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΤΡΑΧΕΙΑ ΑΡΓΟΛΙΔΑΣ, ΧΑΝΙ ΜΕΡΚΟΥΡΗ ΑΡΓΟΛΙΔΑΣ, ΧΟΥΤΑΛΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΧΡΥΣΟΣΠΗΛΙΩΤΙΣΣΑ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21054', Area: 'ΓΑΛΑΝΑΙΙΚΑ ΝΑΥΠΛΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΔΗΜΑΙΝΑ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΗ ΤΑΞΙΑΡΧΩΝ ΑΡΓΟΛΙΔΑΣ, ΝΕΑ ΔΗΜΑΙΝΑ ΑΡΓΟΛΙΔΑΣ, ΝΕΑ ΕΠΙΔΑΥΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΠΑΡΑΛΙΑ ΝΕΑΣ ΕΠΙΔΑΥΡΟΥ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21055', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΑΡΓΟΛΙΔΑΣ, ΑΜΑΡΙΑΝΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΜΥΓΔΑΛΙΤΣΑ ΑΡΓΟΛΙΔΑΣ, ΑΝΥΦΙ ΑΡΓΟΛΙΔΑΣ, ΑΡΑΧΝΑΙΟ ΑΡΓΟΛΙΔΑΣ, ΓΚΑΤΖΙΑ ΑΡΓΟΛΙΔΑΣ, ΗΡΑΙΟ ΑΡΓΟΛΙΔΑΣ, ΜΑΝΕΣΗΣ ΑΡΓΟΛΙΔΑΣ, ΜΕΤΟΧΙ ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΜΕΤΟΧΙ ΝΑΥΠΛΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΜΙΔΕΑ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΘΕΟΔΟΣΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΠΑΝΑΡΙΤΗΣ ΑΡΓΟΛΙΔΑΣ, ΠΛΑΤΑΝΙΤΗΣ ΑΡΓΟΛΙΔΑΣ, ΠΟΥΛΛΑΚΙΔΑ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21056', Area: 'ΤΟΛΟ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21059', Area: 'ΕΠΑΝΩ ΕΠΙΔΑΥΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΠΑΛΑΙΑ ΕΠΙΔΑΥΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΠΑΝΑΓΙΑ ΑΡΓΟΛΙΔΑΣ, ΣΠΗΛΙΑ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21100', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΑΔΡΙΑΝΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΡΓΟΛΙΚΟ ΑΡΓΟΛΙΔΑΣ, ΑΡΙΑ ΝΑΥΠΛΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΑΣΙΝΗ ΑΡΓΟΛΙΔΑΣ, ΑΣΠΡΟΒΡΥΣΗ ΑΡΓΟΛΙΔΑΣ, ΓΑΛΑΝΑΙΙΚΑ ΑΡΓΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΕΞΩΣΤΗΣ ΑΡΓΟΛΙΔΑΣ, ΚΑΠΟΔΙΣΤΡΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΛΕΥΚΑΚΙΑ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΗ ΚΑΡΑΚΑΛΑ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΝΑΥΠΛΙΟ ΑΡΓΟΛΙΔΑΣ, ΝΕΑ ΤΙΡΥΝΘΟΣ ΑΡΓΟΛΙΔΑΣ, ΝΕΟ ΡΟΕΙΝΟ ΑΡΓΟΛΙΔΑΣ, ΠΑΛΙΟΧΩΡΑ ΑΡΓΟΛΙΔΑΣ, ΠΑΝΑΓΙΑ ΑΓΙΟΥ ΑΝΔΡΙΑΝΟΥ ΑΡΓΟΛΙΔΑΣ, ΠΑΡΑΛΙΑ ΑΣΙΝΗΣ ΑΡΓΟΛΙΔΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΠΥΡΓΙΩΤΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΤΙΡΥΝΘΟΣ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21200', Area: 'ΑΓΙΑ ΑΙΚΑΤΕΡΙΝΗ ΚΟΥΤΣΟΠΟΔΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΑΡΥΑΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΡΙΛΙΤΣΑ ΑΡΓΟΛΙΔΑΣ, ΑΕΡΟΔΡΟΜΙΟ ΑΡΓΟΛΙΔΑΣ, ΑΚΟΒΑ ΑΡΓΟΛΙΔΑΣ, ΑΛΜΥΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΝΔΡΙΤΣΑ ΑΡΓΟΛΙΔΑΣ, ΑΡΓΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΡΙΑ ΑΡΓΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΒΕΛΑΝΙΔΙΑ ΑΡΓΟΛΙΔΑΣ, ΒΡΟΥΣΤΙΟ ΑΡΓΟΛΙΔΑΣ, ΓΑΛΑΤΙ ΑΡΓΟΛΙΔΑΣ, ΔΑΛΑΜΑΝΑΡΑ ΑΡΓΟΛΙΔΑΣ, ΔΙΧΑΛΙΑ ΑΡΓΟΛΙΔΑΣ, ΕΛΛΗΝΙΚΟ ΑΡΓΟΛΙΔΑΣ, ΖΟΓΚΑ ΑΡΓΟΛΙΔΑΣ, ΗΡΑ ΑΡΓΟΛΙΔΑΣ, ΙΝΑΧΟΣ ΑΡΓΟΛΙΔΑΣ, ΚΑΛΑΜΑΚΙ ΑΡΓΟΛΙΔΑΣ, ΚΑΡΥΑ ΑΡΓΟΛΙΔΑΣ, ΚΕΦΑΛΑΡΙ ΑΡΓΟΛΙΔΑΣ, ΚΙΒΕΡΙ ΑΡΓΟΛΙΔΑΣ, ΚΟΚΛΑ ΑΡΓΟΛΙΔΑΣ, ΚΟΥΓΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΚΟΥΡΤΑΚΙ ΑΡΓΟΛΙΔΑΣ, ΚΟΥΤΣΟΠΟΔΙ ΑΡΓΟΛΙΔΑΣ, ΚΡΥΑ ΒΡΥΣΗ ΑΡΓΟΛΙΔΑΣ, ΚΡΥΟΝΕΡΙ ΑΡΓΟΛΙΔΑΣ, ΛΑΛΟΥΚΑΣ ΑΡΓΟΛΙΔΑΣ, ΛΙΜΝΕΣ ΑΡΓΟΛΙΔΑΣ, ΜΑΓΟΥΛΑ ΑΡΓΟΛΙΔΑΣ, ΜΑΛΑΝΤΡΕΝΙ ΑΡΓΟΛΙΔΑΣ, ΜΕΡΚΟΥΡΙ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΑΡΓΟΛΙΔΑΣ, ΜΠΟΖΙΟΝΕΛΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΜΠΟΡΣΑΣ ΑΡΓΟΛΙΔΑΣ, ΜΥΛΟΙ ΑΡΓΟΛΙΔΑΣ, ΝΕΟ ΗΡΑΙΟ ΑΡΓΟΛΙΔΑΣ, ΠΑΝΟΡΑΜΑ ΑΡΓΟΛΙΔΑΣ, ΠΡΟΣΥΜΝΑ ΑΡΓΟΛΙΔΑΣ, ΠΥΡΓΕΛΛΑ ΑΡΓΟΛΙΔΑΣ, ΣΚΑΦΙΔΑΚΙΟ ΑΡΓΟΛΙΔΑΣ, ΣΠΑΝΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΣΠΗΛΙΩΤΑΚΗΣ ΑΡΓΟΛΙΔΑΣ, ΣΤΑΘΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΣΤΕΡΝΙΤΣΑ ΑΡΓΟΛΙΔΑΣ, ΣΤΡΑΒΗ ΡΑΧΗ ΑΡΓΟΛΙΔΑΣ, ΣΥΝΟΡΟ ΑΡΓΟΛΙΔΑΣ, ΣΧΙΝΟΧΩΡΙ ΑΡΓΟΛΙΔΑΣ, ΤΗΜΕΝΙ ΑΡΓΟΛΙΔΑΣ, ΤΟΥΡΝΙΚΙ ΑΡΓΟΛΙΔΑΣ, ΤΡΙΣΤΡΑΤΟ ΑΡΓΟΛΙΔΑΣ, ΦΙΧΤΙΟ ΑΡΓΟΛΙΔΑΣ, ΦΡΕΓΚΑΙΝΑ ΑΡΓΟΛΙΔΑΣ, ΧΑΝΤΑΚΙΑ ΒΡΟΥΣΤΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΧΕΛΜΗΣ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '21300', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΡΑΝΙΔΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΒΛΑΧΟΠΟΥΛΕΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΔΙΔΥΜΑ ΑΡΓΟΛΙΔΑΣ, ΔΟΡΟΥΦΙ ΚΟΙΛΑΔΟΣ ΑΡΓΟΛΙΔΑΣ, ΔΟΡΟΥΦΙ ΚΡΑΝΙΔΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΘΥΝΙ ΑΡΓΟΛΙΔΑΣ, ΚΑΜΠΟΣ ΚΟΙΛΑΔΟΣ ΑΡΓΟΛΙΔΑΣ, ΚΟΙΛΑΔΑ ΑΡΓΟΛΙΔΑΣ, ΚΟΡΩΝΙΔΑ ΝΗΣΟΣ ΑΡΓΟΛΙΔΑΣ, ΚΟΥΝΟΥΠΙ ΑΡΓΟΛΙΔΑΣ, ΚΡΑΝΙΔΙ ΑΡΓΟΛΙΔΑΣ, ΛΑΚΚΕΣ ΑΡΓΟΛΙΔΑΣ, ΠΑΝΟΡΑΜΑ ΕΡΜΙΟΝΙΔΑΣ ΑΡΓΟΛΙΔΑΣ, ΠΑΡΑΛΙΑ ΦΟΥΡΝΩΝ ΑΡΓΟΛΙΔΑΣ, ΠΕΛΕΗ ΑΡΓΟΛΙΔΑΣ, ΠΕΤΡΟΘΑΛΑΣΣΑ ΚΡΑΝΙΔΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΡΑΔΟ ΑΡΓΟΛΙΔΑΣ, ΣΑΛΑΝΤΙΟ ΑΡΓΟΛΙΔΑΣ, ΤΖΕΜΙ ΑΡΓΟΛΙΔΑΣ, ΦΛΑΜΠΟΥΡΑ ΑΡΓΟΛΙΔΑΣ, ΦΟΥΡΝΟΙ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αργολίδας' },
    { PostalCode: '22001', Area: 'ΑΓΙΑ ΑΝΑΣΤΑΣΙΑ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΙ ΑΣΩΜΑΤΟΙ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΥΝΟΥΡΙΑΣ ΑΡΚΑΔΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΡΧΑΙΑΣ ΗΡΑΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΣΤΡΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΣΤΡΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΑΕΤΟΧΩΡΙΟ ΑΡΓΟΛΙΔΑΣ, ΑΡΚΑΔΙΚΟ ΧΩΡΙΟ ΑΡΓΟΛΙΔΑΣ, ΑΣΤΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΒΑΘΙΑ ΑΡΓΟΛΙΔΑΣ, ΒΑΡΒΟΓΛΗ ΑΡΓΟΛΙΔΑΣ, ΙΕΡΑ ΜΟΝΗ ΛΟΥΚΟΥΣ ΑΣΤΡΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΚΑΜΙΝΑΡΙ ΑΡΓΟΛΙΔΑΣ, ΚΑΣΤΑΝΙΤΣΑ ΑΡΓΟΛΙΔΑΣ, ΚΑΤΩ ΒΕΡΒΕΝΑ ΑΡΓΟΛΙΔΑΣ, ΚΑΤΩ ΔΟΛΙΑΝΑ ΑΡΓΟΛΙΔΑΣ, ΛΟΥΛΟΥΔΙΑ ΑΡΓΟΛΙΔΑΣ, ΜΕΛΙΣΣΙ ΑΡΓΟΛΙΔΑΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΑΡΓΟΛΙΔΑΣ, ΝΕΟΧΩΡΙ ΚΟΡΑΚΟΒΟΥΝΙΟΥ ΑΡΓΟΛΙΔΑΣ, ΞΗΡΟΠΗΓΑΔΟ ΑΡΓΟΛΙΔΑΣ, ΟΡΕΙΝΗ ΜΕΛΙΓΟΥ ΑΡΓΟΛΙΔΑΣ, ΠΛΑΚΑ ΞΗΡΟΠΗΓΑΔΟΥ ΑΡΓΟΛΙΔΑΣ, ΠΛΑΤΑΝΟΣ ΑΡΓΟΛΙΔΑΣ, ΠΟΡΤΕΣ ΑΡΓΟΛΙΔΑΣ, ΠΡΟΣΗΛΙΑ ΑΡΓΟΛΙΔΑΣ, ΡΟΥΝΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΣΙΤΑΙΝΑ ΑΡΓΟΛΙΔΑΣ, ΣΤΟΛΟΣ ΑΡΓΟΛΙΔΑΣ, ΦΟΥΝΤΩΜΑ ΑΡΓΟΛΙΔΑΣ, ΧΑΝΤΑΚΙΑ ΑΣΤΡΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΧΑΡΑΔΡΟΣ ΑΡΓΟΛΙΔΑΣ, ΧΕΙΜΕΡΙΝΗ ΜΕΛΙΓΟΥ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22002', Area: 'ΑΓΡΙΔΙ ΑΡΚΑΔΙΑΣ, ΒΛΑΧΕΡΝΑ ΑΡΚΑΔΙΑΣ, ΔΡΑΚΟΒΟΥΝΙΟ ΑΡΚΑΔΙΑΣ, ΘΕΟΚΤΙΣΤΟ ΑΡΚΑΔΙΑΣ, ΚΑΛΥΒΙΑ ΚΑΡΝΕΣΗ ΑΡΚΑΔΙΑΣ, ΚΑΜΕΝΙΤΣΑ ΑΡΚΑΔΙΑΣ, ΚΑΡΒΟΥΝΙ ΑΡΚΑΔΙΑΣ, ΚΑΡΔΑΡΑΣ ΑΡΚΑΔΙΑΣ, ΛΕΒΙΔΙ ΑΡΚΑΔΙΑΣ, ΝΕΟΣ ΚΑΡΔΑΡΑΣ ΑΡΚΑΔΙΑΣ, ΟΡΧΟΜΕΝΟΣ ΑΡΚΑΔΙΑΣ, ΠΑΛΑΙΟΠΥΡΓΟΣ ΜΑΝΤΙΝΕΙΑΣ ΑΡΚΑΔΙΑΣ, ΠΡΑΣΙΝΟ ΑΡΚΑΔΙΑΣ, ΡΟΥΣΣΗΣ ΑΡΚΑΔΙΑΣ, ΣΙΜΙΑΔΕΣ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22007', Area: 'ΑΡΑΧΟΒΑ ΑΡΚΑΔΙΑΣ, ΒΛΟΓΓΟΣ ΑΡΚΑΔΙΑΣ, ΔΗΜΗΤΣΑΝΑ ΑΡΚΑΔΙΑΣ, ΖΑΤΟΥΝΑ ΑΡΚΑΔΙΑΣ, ΖΙΓΟΒΙΣΤΙΟ ΑΡΚΑΔΙΑΣ, ΚΑΡΚΑΛΟΥ ΑΡΚΑΔΙΑΣ, ΚΑΤΩ ΡΙΖΟΣΠΗΛΙΑ ΑΡΚΑΔΙΑΣ, ΜΑΡΚΟΣ ΑΡΚΑΔΙΑΣ, ΜΕΛΙΣΣΟΠΕΤΡΑ ΑΡΚΑΔΙΑΣ, ΜΟΝΗ ΑΙΜΥΑΛΩΝ ΑΡΚΑΔΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΔΗΜΗΤΣΑΝΑΣ ΑΡΚΑΔΙΑΣ, ΠΑΝΑΓΙΑ ΑΡΚΑΔΙΑΣ, ΡΑΔΟΣ ΑΡΚΑΔΙΑΣ, ΡΙΖΟΣΠΗΛΙΑ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22008', Area: 'ΑΡΧΑΙΑ ΒΑΝΝΑΙΝΑ ΑΡΚΑΔΙΑΣ, ΒΥΖΙΚΙ ΑΡΚΑΔΙΑΣ, ΓΑΛΑΤΑΣ ΑΡΚΑΔΙΑΣ, ΔΟΞΑ ΑΡΚΑΔΙΑΣ, ΔΩΔΕΚΑΜΕΤΡΟ ΑΡΚΑΔΙΑΣ, ΕΛΑΙΑ ΑΡΚΑΔΙΑΣ, ΚΑΛΛΙΑΝΙ ΑΡΚΑΔΙΑΣ, ΚΑΠΕΛΛΙΤΣΑ ΑΡΚΑΔΙΑΣ, ΚΑΣΤΡΑΚΙ ΑΡΚΑΔΙΑΣ, ΚΑΤΩ ΣΠΑΘΑΡΗΣ ΑΡΚΑΔΙΑΣ, ΛΙΒΑΔΑΚΙ ΑΡΚΑΔΙΑΣ, ΜΕΛΙΔΟΝΙ ΑΡΚΑΔΙΑΣ, ΜΠΕΡΤΣΙΑ ΑΡΚΑΔΙΑΣ, ΜΠΟΥΛΙΑΡΗΣ ΑΡΚΑΔΙΑΣ, ΝΕΑ ΔΑΦΝΗ ΑΡΚΑΔΙΑΣ, ΝΕΟΧΩΡΙΟ  ΓΟΡΤΥΝΙΑΣ ΑΡΚΑΔΙΑΣ, ΠΕΡΔΙΚΟΝΕΡΙ ΑΡΚΑΔΙΑΣ, ΠΤΕΡΙΑ ΑΡΚΑΔΙΑΣ, ΡΑΧΕΣ ΑΡΚΑΔΙΑΣ, ΣΠΑΘΑΡΗΣ ΑΡΚΑΔΙΑΣ, ΣΤΑΥΡΟΔΡΟΜΙΟ ΑΡΚΑΔΙΑΣ, ΣΥΡΙΑΜΑΚΟΣ ΑΡΚΑΔΙΑΣ, ΤΟΥΜΠΙΤΣΙΟ ΑΡΚΑΔΙΑΣ, ΤΡΑΝΗ ΛΑΚΚΑ ΑΡΚΑΔΙΑΣ, ΤΡΙΠΟΤΑΜΙΑ ΑΡΚΑΔΙΑΣ, ΤΡΟΠΑΙΑ ΑΡΚΑΔΙΑΣ, ΦΑΝΑΡΑΚΙ ΑΡΚΑΔΙΑΣ, ΧΑΝΙΑ ΓΟΡΤΥΝΙΑΣ ΑΡΚΑΔΙΑΣ, ΧΩΡΑ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22010', Area: 'ΑΓΡΙΔΑΚΙ ΑΡΚΑΔΙΑΣ, ΒΥΤΙΝΑ ΑΡΚΑΔΙΑΣ, ΕΛΑΤΗ ΑΡΚΑΔΙΑΣ, ΛΑΣΤΑ ΑΡΚΑΔΙΑΣ, ΜΕΘΥΔΡΙ ΑΡΚΑΔΙΑΣ, ΜΟΝΗ ΑΓΙΩΝ ΘΕΟΔΩΡΩΝ ΑΡΚΑΔΙΑΣ, ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΚΕΡΝΙΤΣΗΣ ΑΡΚΑΔΙΑΣ, ΝΥΜΦΑΣΙΑ ΑΡΚΑΔΙΑΣ, ΠΑΝ ΑΡΚΑΔΙΑΣ, ΠΥΡΓΑΚΙ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22012', Area: 'ΑΓΙΑ ΣΟΦΙΑ ΑΡΚΑΔΙΑΣ, ΑΓΙΟΣ ΣΩΣΤΗΣ ΑΡΚΑΔΙΑΣ, ΑΚΡΑ ΑΡΚΑΔΙΑΣ, ΑΛΕΑ ΑΡΚΑΔΙΑΣ, ΑΧΟΥΡΙ ΑΡΚΑΔΙΑΣ, ΒΕΡΒΕΝΑ ΑΡΚΑΔΙΑΣ, ΒΟΥΝΟ ΑΡΚΑΔΙΑΣ, ΓΑΡΕΑ ΑΡΚΑΔΙΑΣ, ΓΙΟΚΑΡΑΙΙΚΑ ΑΡΚΑΔΙΑΣ, ΔΕΜΙΡΙ ΑΡΚΑΔΙΑΣ, ΕΠΙΣΚΟΠΗ ΑΡΚΑΔΙΑΣ, ΚΑΜΑΡΙΟ ΑΡΚΑΔΙΑΣ, ΚΑΝΔΑΛΟΣ ΑΡΚΑΔΙΑΣ, ΚΕΡΑΣΙΤΣΑ ΑΡΚΑΔΙΑΣ, ΛΙΘΟΒΟΥΝΙΑ ΑΡΚΑΔΙΑΣ, ΜΑΓΟΥΛΑ ΑΡΚΑΔΙΑΣ, ΜΑΝΘΥΡΕΑ ΑΡΚΑΔΙΑΣ, ΜΑΥΡΙΚΙΟ ΑΡΚΑΔΙΑΣ, ΜΠΟΥΖΑΝΑΙΙΚΑ ΑΡΚΑΔΙΑΣ, ΞΗΡΟΚΑΜΠΙ ΑΡΚΑΔΙΑΣ, ΡΙΖΕΣ ΑΡΚΑΔΙΑΣ, ΣΤΑΔΙΟ ΑΡΚΑΔΙΑΣ, ΣΤΡΙΓΚΟΣ ΑΡΚΑΔΙΑΣ, ΤΖΙΒΑΣ ΑΡΚΑΔΙΑΣ, ΨΗΛΗ ΒΡΥΣΗ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22015', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΠΑΡΑΛΟΓΓΩΝ ΑΡΚΑΔΙΑΣ, ΑΠΟΣΚΙΑ ΑΡΚΑΔΙΑΣ, ΑΡΣΙΝΑΙΑ ΑΡΚΑΔΙΑΣ, ΒΑΧΛΙΑ ΑΡΚΑΔΙΑΣ, ΒΕΛΗΜΑΧΙ ΑΡΚΑΔΙΑΣ, ΒΙΔΙΑΚΙ ΑΡΚΑΔΙΑΣ, ΒΟΥΤΣΗΣ ΑΡΚΑΔΙΑΣ, ΔΗΜΗΤΡΑ ΑΡΚΑΔΙΑΣ, ΚΑΡΔΑΡΙΤΣΙ ΑΡΚΑΔΙΑΣ, ΚΟΝΤΟΒΑΖΑΙΝΑ ΑΡΚΑΔΙΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΑΡΚΑΔΙΑΣ, ΞΗΡΟΚΑΡΙΤΑΙΝΑ ΑΡΚΑΔΙΑΣ, ΠΑΡΑΛΟΓΓΟΙ ΑΡΚΑΔΙΑΣ, ΠΕΛΕΚΙ ΑΡΚΑΔΙΑΣ, ΠΕΡΑ ΒΑΧΛΙΑ ΑΡΚΑΔΙΑΣ, ΠΕΤΑΣ ΑΡΚΑΔΙΑΣ, ΣΟΥΔΕΛΗ ΑΡΚΑΔΙΑΣ, ΣΤΑΥΡΙ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22027', Area: 'ΑΓΙΩΡΓΙΤΙΚΑ ΑΡΚΑΔΙΑΣ, ΑΓΡΙΑΚΟΝΑ ΑΡΚΑΔΙΑΣ, ΑΘΗΝΑΙΟ ΑΡΚΑΔΙΑΣ, ΑΜΠΕΛΑΚΙ ΑΡΚΑΔΙΑΣ, ΑΡΑΧΑΜΙΤΕΣ ΑΡΚΑΔΙΑΣ, ΑΣΕΑ ΑΡΚΑΔΙΑΣ, ΔΑΦΝΗ ΑΡΚΑΔΙΑΣ, ΔΟΡΙΖΑ ΑΡΚΑΔΙΑΣ, ΚΑΛΤΕΖΕΣ ΑΡΚΑΔΙΑΣ, ΚΑΤΩ ΑΣΕΑ ΑΡΚΑΔΙΑΣ, ΚΕΡΑΣΤΑΡΗΣ ΑΡΚΑΔΙΑΣ, ΚΟΥΒΕΛΙΑ ΑΡΚΑΔΙΑΣ, ΛΙΑΝΟΣ ΑΡΚΑΔΙΑΣ, ΜΑΝΑΡΗΣ ΑΡΚΑΔΙΑΣ, ΜΑΝΙΑΤΗΣ ΑΡΚΑΔΙΑΣ, ΜΑΡΜΑΡΙΑ ΑΡΚΑΔΙΑΣ, ΜΑΥΡΟΓΙΑΝΝΗΣ ΑΡΚΑΔΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΚΑΛΤΕΖΩΝ ΑΡΚΑΔΙΑΣ, ΠΑΛΑΙΟΧΟΥΝΗ ΑΡΚΑΔΙΑΣ, ΠΑΠΑΡΗΣ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22028', Area: 'ΑΓΑΛΩ ΑΡΚΑΔΙΑΣ, ΑΓΙΟΝΕΡΙ ΑΡΚΑΔΙΑΣ, ΑΕΤΟΡΡΑΧΗ ΑΡΚΑΔΙΑΣ, ΑΡΑΠΗΔΕΣ ΑΡΚΑΔΙΑΣ, ΙΑΜΑΤΙΚΕΣ ΠΗΓΕΣ ΗΡΑΙΑΣ ΑΡΚΑΔΙΑΣ, ΚΑΚΟΥΡΑΙΙΚΑ ΑΡΚΑΔΙΑΣ, ΚΟΚΚΙΝΟΡΡΑΧΗ ΑΡΚΑΔΙΑΣ, ΚΟΚΚΟΡΑΣ ΑΡΚΑΔΙΑΣ, ΛΙΘΑΡΟΣ ΑΡΚΑΔΙΑΣ, ΛΙΟΔΩΡΑ ΑΡΚΑΔΙΑΣ, ΛΟΥΤΡΑ ΗΡΑΙΑΣ ΑΡΚΑΔΙΑΣ, ΛΥΚΟΥΡΕΣΗΣ ΑΡΚΑΔΙΑΣ, ΛΥΣΣΑΡΕΑ ΑΡΚΑΔΙΑΣ, ΛΩΤΗΣ ΑΡΚΑΔΙΑΣ, ΜΠΑΡΔΑΚΙ ΑΡΚΑΔΙΑΣ, ΟΧΘΙΑ ΑΡΚΑΔΙΑΣ, ΠΑΛΟΥΜΠΑ ΑΡΚΑΔΙΑΣ, ΠΑΠΠΑΔΑΣ ΑΡΚΑΔΙΑΣ, ΠΑΡΝΑΣΣΟΣ ΑΡΚΑΔΙΑΣ, ΠΥΡΡΗΣ ΑΡΚΑΔΙΑΣ, ΡΑΠΤΗΣ ΑΡΚΑΔΙΑΣ, ΣΑΡΑΚΙΝΙΟ ΗΡΑΙΑΣ ΑΡΚΑΔΙΑΣ, ΣΑΡΛΑΙΙΚΑ ΑΡΚΑΔΙΑΣ, ΣΕΡΒΟΣ ΑΡΚΑΔΙΑΣ, ΧΡΥΣΟΧΩΡΙΟ ΑΡΚΑΔΙΑΣ, ΨΑΡΙ ΓΟΡΤΥΝΙΑΣ ΑΡΚΑΔΙΑΣ, ΨΑΡΙ ΠΑΛΑΜΑΡΙΟΥ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22029', Area: 'ΠΑΛΑΙΟΧΩΡΑ ΤΥΡΟΥ ΑΡΓΟΛΙΔΑΣ, ΠΑΡΑΛΙΑ ΣΑΠΟΥΝΑΚΑΙΙΚΩΝ ΑΡΓΟΛΙΔΑΣ, ΠΑΡΑΛΙΑ ΤΥΡΟΥ ΑΡΓΟΛΙΔΑΣ, ΠΕΡΑ ΜΕΛΑΝΑ ΑΡΓΟΛΙΔΑΣ, ΠΕΤΡΑ ΑΡΓΟΛΙΔΑΣ, ΣΑΠΟΥΝΑΚΑΙΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΤΥΡΟΣ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22100', Area: 'ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΚΥΝΟΥΡΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΜΑΝΤΙΝΕΙΑΣ ΑΡΚΑΔΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΡΚΑΔΙΑΣ, ΑΓΙΩΡΓΙΤΙΚΑ ΑΡΚΑΔΙΑΣ, ΑΛΩΝΙΣΤΑΙΝΑ ΑΡΚΑΔΙΑΣ, ΑΡΤΕΜΙΣΙΟ ΑΡΚΑΔΙΑΣ, ΒΑΛΤΕΤΣΙ ΑΡΚΑΔΙΑΣ, ΔΑΒΙΑ ΑΡΚΑΔΙΑΣ, ΕΥΑΝΔΡΟ ΑΡΚΑΔΙΑΣ, ΖΕΥΓΟΛΑΤΕΙΟ ΑΡΚΑΔΙΑΣ, ΘΑΝΑΣ ΑΡΚΑΔΙΑΣ, ΚΑΤΩ ΔΑΒΙΑ ΑΡΚΑΔΙΑΣ, ΚΑΨΑΣ ΑΡΚΑΔΙΑΣ, ΛΟΥΚΑΣ ΑΡΚΑΔΙΑΣ, ΜΑΙΝΑΛΟ ΑΡΚΑΔΙΑΣ, ΜΑΚΡΗ ΑΡΚΑΔΙΑΣ, ΜΑΝΤΑΙΙΚΑ ΑΡΚΑΔΙΑΣ, ΜΕΡΚΟΒΟΥΝΙΟ ΑΡΚΑΔΙΑΣ, ΜΗΛΙΑ ΛΟΥΚΑ ΑΡΚΑΔΙΑΣ, ΜΗΛΙΑ ΤΡΙΠΟΛΕΩΣ ΑΡΚΑΔΙΑΣ, ΜΟΝΗ ΒΑΡΣΩΝ ΑΡΚΑΔΙΑΣ, ΜΟΝΗ ΕΠΑΝΩ ΧΡΕΠΑΣ ΑΡΚΑΔΙΑΣ, ΝΕΟΧΩΡΙΟ ΜΑΝΤΙΝΕΙΑΣ ΑΡΚΑΔΙΑΣ, ΠΑΛΛΑΝΤΙΟ ΑΡΚΑΔΙΑΣ, ΠΑΡΘΕΝΙΟ ΑΡΚΑΔΙΑΣ, ΠΑΡΟΡΙΟ ΑΡΚΑΔΙΑΣ, ΠΕΛΑΓΟΣ ΑΡΚΑΔΙΑΣ, ΠΕΡΘΩΡΙΟ ΑΡΚΑΔΙΑΣ, ΠΕΡΠΑΤΑΡΗΣ ΑΡΚΑΔΙΑΣ, ΠΙΑΝΑ ΑΡΚΑΔΙΑΣ, ΠΙΚΕΡΝΗΣ ΑΡΚΑΔΙΑΣ, ΡΟΕΙΝΟ ΑΡΚΑΔΙΑΣ, ΣΑΓΚΑΣ ΑΡΚΑΔΙΑΣ, ΣΑΝΑΤΟΡΙΟ ΜΑΚΡΗΣ ΑΡΚΑΔΙΑΣ, ΣΙΛΙΜΝΑ ΑΡΚΑΔΙΑΣ, ΣΚΟΠΗ ΑΡΚΑΔΙΑΣ, ΣΤΕΝΟ ΑΡΚΑΔΙΑΣ, ΤΡΙΠΟΛΗ ΑΡΚΑΔΙΑΣ, ΤΣΕΛΕΠΑΚΟΣ ΑΡΚΑΔΙΑΣ, ΧΑΝΙΑ ΣΚΟΠΗΣ ΑΡΚΑΔΙΑΣ, ΧΡΥΣΟΒΙΤΣΙ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22200', Area: 'ΑΝΘΟΧΩΡΙ ΑΡΚΑΔΙΑΣ, ΑΠΙΔΙΤΣΑ ΑΡΚΑΔΙΑΣ, ΒΑΓΓΟΣ ΑΡΚΑΔΙΑΣ, ΒΡΥΣΟΥΛΕΣ ΑΡΚΑΔΙΑΣ, ΓΕΦΥΡΑ ΑΡΚΑΔΙΑΣ, ΓΕΦΥΡΑΚΙΑ ΑΡΚΑΔΙΑΣ, ΔΕΡΒΕΝΙ ΑΡΚΑΔΙΑΣ, ΘΩΚΝΙΑ ΑΡΚΑΔΙΑΣ, ΙΣΩΜΑ ΚΑΡΥΩΝ ΑΡΚΑΔΙΑΣ, ΚΑΡΑΤΟΥΛΑΣ ΜΕΓΑΛΟΠΟΛΗΣ ΑΡΚΑΔΙΑΣ, ΚΑΡΥΕΣ ΜΕΓΑΛΟΠΟΛΗΣ ΑΡΚΑΔΙΑΣ, ΚΑΤΩ ΚΑΡΥΕΣ ΑΡΚΑΔΙΑΣ, ΚΑΤΩ ΜΑΚΡΥΣΙ ΑΡΚΑΔΙΑΣ, ΜΑΚΡΥΣΙΟ ΑΡΚΑΔΙΑΣ, ΜΑΛΛΩΤΑ ΑΡΚΑΔΙΑΣ, ΜΑΡΑΘΟΥΣΣΑ ΑΡΚΑΔΙΑΣ, ΜΕΓΑΛΟΠΟΛΗ ΑΡΚΑΔΙΑΣ, ΝΕΑ ΕΚΚΛΗΣΟΥΛΑ ΑΡΚΑΔΙΑΣ, ΝΕΟΧΩΡΙΟ ΛΥΚΟΣΟΥΡΑΣ ΑΡΚΑΔΙΑΣ, ΟΡΕΣΤΕΙΟ ΑΡΚΑΔΙΑΣ, ΠΑΡΑΔΕΙΣΙΑ ΑΡΚΑΔΙΑΣ, ΠΕΡΙΒΟΛΙΑ ΑΡΚΑΔΙΑΣ, ΠΛΑΚΑ ΜΕΓΑΛΟΠΟΛΗΣ ΑΡΚΑΔΙΑΣ, ΡΑΨΟΜΜΑΤΗΣ ΑΡΚΑΔΙΑΣ, ΣΟΥΛΙ ΑΡΚΑΔΙΑΣ, ΣΟΥΛΟΣ ΑΡΚΑΔΙΑΣ, ΤΡΙΛΟΦΟ ΑΡΚΑΔΙΑΣ, ΤΡΙΠΟΤΑΜΟ ΑΡΚΑΔΙΑΣ, ΦΑΝΑΙΤΗ ΑΡΚΑΔΙΑΣ, ΧΙΡΑΔΕΣ ΑΡΚΑΔΙΑΣ, ΧΡΑΝΟΙ ΑΡΚΑΔΙΑΣ, ΧΩΡΕΜΗΣ ΑΡΚΑΔΙΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '22300', Area: 'ΑΜΥΓΔΑΛΙΑ ΑΡΓΟΛΙΔΑΣ, ΒΙΓΛΑ ΑΡΓΟΛΙΔΑΣ, ΒΛΗΣΙΔΙΑ ΑΡΓΟΛΙΔΑΣ, ΒΟΣΚΙΝΑ ΑΡΓΟΛΙΔΑΣ, ΚΟΥΝΟΥΠΙΑ ΑΡΓΟΛΙΔΑΣ, ΛΕΩΝΙΔΙ ΑΡΓΟΛΙΔΑΣ, ΛΙΒΑΔΙ ΠΕΡΑ ΜΕΛΑΝΩΝ ΑΡΓΟΛΙΔΑΣ, ΛΙΒΑΔΙ ΠΡΑΓΜΑΤΕΥΤΗ ΑΡΓΟΛΙΔΑΣ, ΛΟΓΓΑΡΙ ΑΡΓΟΛΙΔΑΣ, ΜΑΡΙ ΑΡΓΟΛΙΔΑΣ, ΜΟΝΗ ΕΛΩΝΗΣ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΚΥΝΟΥΡΙΑΣ ΑΡΓΟΛΙΔΑΣ, ΠΕΛΕΤΑ ΑΡΓΟΛΙΔΑΣ, ΠΗΓΑΔΙ ΑΡΓΟΛΙΔΑΣ, ΠΛΑΤΑΝΑΚΙ ΑΡΓΟΛΙΔΑΣ, ΠΟΥΛΙΘΡΑ ΑΡΓΟΛΙΔΑΣ, ΠΡΑΓΜΑΤΕΥΤΗΣ ΑΡΓΟΛΙΔΑΣ, ΠΥΡΓΟΥΔΙ ΑΡΓΟΛΙΔΑΣ, ΣΑΜΠΑΤΙΚΗ ΑΡΓΟΛΙΔΑΣ, ΤΣΙΤΑΛΙΑ ΑΡΓΟΛΙΔΑΣ, ΦΥΛΑΤΙΚΑ ΑΡΓΟΛΙΔΑΣ, ΦΩΚΙΑΝΟ ΑΡΓΟΛΙΔΑΣ', Prefecture: 'Αρκαδίας' },
    { PostalCode: '47040', Area: 'ΒΑΛΜΑΔΑ ΑΡΤΑΣ, ΕΛΑΙΟΦΥΤΟ ΦΛΩΡΙΑΔΟΣ ΑΡΤΑΣ, ΕΛΑΙΟΧΩΡΙ ΑΡΤΑΣ, ΘΕΡΙΑΚΗΣΙ ΑΡΤΑΣ, ΚΑΘΑΡΟΒΟΥΝΙ ΦΛΩΡΙΑΔΟΣ ΑΡΤΑΣ, ΚΑΣΤΡΙΩΤΙΣΣΑ ΑΡΤΑΣ, ΚΟΜΠΟΤΙ ΑΡΤΑΣ, ΛΑΓΚΑΔΑ ΜΕΝΙΔΙΟΥ ΑΡΤΑΣ, ΛΑΓΚΑΔΑ ΜΗΛΙΑΝΩΝ ΑΡΤΑΣ, ΜΑΡΛΕΣΙ ΑΡΤΑΣ, ΠΑΛΑΙΑ ΦΛΩΡΙΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΑΙΤΩΛ/ΝΙΑΣ, ΣΕΛΛΑΔΕΣ ΑΡΤΑΣ, ΣΥΚΟΥΛΑ ΑΡΤΑΣ, ΦΛΩΡΙΑΔΑ ΑΡΤΑΣ, ΧΡΥΣΟΠΗΓΗ ΑΡΤΑΣ, ΧΡΥΣΟΡΡΑΧΗ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '47041', Area: 'ΝΕΟΧΩΡΙ ΑΡΤΑΣ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '47044', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΛΕΝΤΙΝΗΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΔΙΧΟΜΟΙΡΙΟΥ ΑΡΤΑΣ, ΑΝΩ ΚΑΛΕΝΤΙΝΗ ΑΡΤΑΣ, ΑΣΦΑΚΕΡΟ ΑΡΤΑΣ, ΒΑΡΚΑ ΑΡΤΑΣ, ΒΕΛΕΝΤΖΙΚΟ ΑΡΤΑΣ, ΔΙΧΟΜΟΙΡΙ ΑΡΤΑΣ, ΕΠΑΝΩ ΣΕΣΗ ΑΡΤΑΣ, ΖΥΓΟΣ ΔΙΧΟΜΟΙΡΙΟΥ ΑΡΤΑΣ, ΚΑΡΠΙΝΟ ΑΡΤΑΣ, ΚΟΚΚΙΝΟ ΛΙΘΑΡΙ ΑΡΤΑΣ, ΚΟΥΦΑΛΟΣ ΑΡΤΑΣ, ΚΡΑΝΙΕΣ ΑΡΤΑΣ, ΚΡΙΣΕΛΙΑ ΑΡΤΑΣ, ΛΙΤΕΣΙΟ ΑΡΤΑΣ, ΜΕΓΑΣ ΚΑΜΠΟΣ ΑΡΤΑΣ, ΞΗΡΟΚΑΜΠΟΣ ΓΟΡΓΟΜΥΛΟΥ ΑΡΤΑΣ, ΞΗΡΟΚΑΜΠΟΣ ΔΙΧΟΜΟΙΡΙΟΥ ΑΡΤΑΣ, ΠΕΡΑ ΚΑΛΕΝΤΙΝΗ ΑΡΤΑΣ, ΠΗΓΗ ΒΕΛΕΝΤΖΙΚΟΥ ΑΡΤΑΣ, ΠΛΑΚΟΥΤΣΑΙΙΚΑ ΑΡΤΑΣ, ΠΡΟΣΗΛΙΑ ΑΡΤΑΣ, ΡΕΤΣΙΑΝΑ ΑΡΤΑΣ, ΣΕΛΙΟ ΑΡΤΑΣ, ΣΕΣΗ ΑΡΤΑΣ, ΦΙΣΟΤΑ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '47045', Area: 'ΑΓΓΕΛΑΙΙΚΑ ΑΡΤΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΘΑΜΑΝΙΟΥ ΑΡΤΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΥΨΕΛΗΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΜΗΝΑΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΑΡΤΑΣ, ΑΘΑΜΑΝΙ ΑΡΤΑΣ, ΑΜΠΕΛΙΑ ΑΘΑΜΑΝΙΟΥ ΑΡΤΑΣ, ΑΜΠΕΛΙΑ ΠΑΛΑΙΟΚΑΤΟΥΝΟΥ ΑΡΤΑΣ, ΑΡΙΑ ΑΡΤΑΣ, ΒΟΥΛΓΑΡΕΛΙ ΑΡΤΑΣ, ΓΙΑΝΝΙΤΣΙ ΑΡΤΑΣ, ΓΩΝΙΑ ΚΑΤΩ ΑΘΑΜΑΝΙΟΥ ΑΡΤΑΣ, ΓΩΝΙΑ ΠΑΝΑΓΙΑΣ ΑΡΤΑΣ, ΔΡΟΣΙΑ ΜΕΣΟΥΝΤΑΣ ΑΡΤΑΣ, ΖΑΛΟΣ ΑΡΤΑΣ, ΘΑΝΑΣΙΑ ΑΡΤΑΣ, ΘΕΟΔΩΡΙΑΝΑ ΑΡΤΑΣ, ΚΑΛΛΟΝΗ ΑΡΤΑΣ, ΚΑΜΠΟΣ ΒΟΥΡΓΑΡΕΛΙΟΥ ΑΡΤΑΣ, ΚΑΜΠΟΣ ΣΚΟΥΠΑΣ ΑΡΤΑΣ, ΚΑΡΥΑ ΑΡΤΑΣ, ΚΑΤΩ ΧΩΡΑ ΑΡΤΑΣ, ΚΑΨΑΛΑ ΑΡΤΑΣ, ΚΕΡΑΝΙ ΑΡΤΑΣ, ΚΟΡΑΚΑΔΑ ΑΡΤΑΣ, ΚΟΥΒΕΛΙ ΑΡΤΑΣ, ΚΥΨΕΛΗ ΑΡΤΑΣ, ΛΟΓΑΡΟΥ ΑΡΤΑΣ, ΛΟΥΤΣΑ ΑΡΤΑΣ, ΜΕΣΟΥΝΤΑ ΑΡΤΑΣ, ΜΗΤΣΟΡΟΥΒΑ ΑΡΤΑΣ, ΜΟΝΗ ΕΥΑΓΓΕΛΙΣΤΡΙΑΣ ΑΡΤΑΣ, ΝΕΒΡΟΠΟΛΗ ΑΡΤΑΣ, ΟΜΑΛΗ ΑΡΤΑΣ, ΠΑΛΑΙΟΚΑΤΟΥΝΟ ΑΡΤΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΑΘΑΜΑΝΙΟΥ ΑΡΤΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΒΟΥΛΓΑΡΕΛΙΟΥ ΑΡΤΑΣ, ΠΑΝΑΓΙΑ ΚΑΨΑΛΩΝ ΑΡΤΑΣ, ΠΕΡΑ ΝΕΒΡΟΠΟΛΗ ΑΡΤΑΣ, ΠΕΤΡΑΛΩΝΟ ΑΡΤΑΣ, ΠΕΥΚΟΣ ΑΡΤΑΣ, ΠΗΓΗ ΤΕΤΡΑΚΩΜΟΥ ΑΡΤΑΣ, ΠΛΑΤΑΝΟΣ ΑΘΑΜΑΝΙΟΥ ΑΡΤΑΣ, ΠΟΤΑΜΙΑ ΑΡΤΑΣ, ΡΟΥΠΑΚΙΑ ΑΡΤΑΣ, ΣΚΑΛΟΥΛΑ ΑΡΤΑΣ, ΣΚΑΡΠΑΡΙ ΑΡΤΑΣ, ΣΚΙΑΔΑΔΕΣ ΑΡΤΑΣ, ΣΤΕΝΟ ΑΡΤΑΣ, ΤΑΥΛΑ ΑΡΤΑΣ, ΤΕΛΗΣΙΟ ΑΘΑΜΑΝΙΟΥ ΑΡΤΑΣ, ΤΕΛΗΣΙΟ ΤΕΤΡΑΚΩΜΟΥ ΑΡΤΑΣ, ΤΕΡΠΝΑΣ ΑΡΤΑΣ, ΤΕΤΡΑΚΩΜΟ ΑΡΤΑΣ, ΦΩΤΑΙΙΚΑ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '47047', Area: 'ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΜΕΓΑΛΟΧΑΡΗΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΟΜΠΟΤΙΟΥ ΑΡΤΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΠΗΓΩΝ ΑΡΤΑΣ, ΑΗΔΟΝΙΑ ΑΡΤΑΣ, ΑΛΩΝΑΚΙ ΑΡΤΑΣ, ΑΛΩΝΙΑ ΜΗΛΙΑΝΩΝ ΑΡΤΑΣ, ΑΛΩΝΙΑ ΣΕΛΛΑΔΩΝ ΑΡΤΑΣ, ΑΝΩ ΚΑΡΥΕΣ ΑΡΤΑΣ, ΑΣΤΡΟΧΩΡΙ ΑΡΤΑΣ, ΑΦΡΟΞΥΛΙΑ ΑΡΤΑΣ, ΒΕΛΑΝΙΔΙΑ ΑΡΤΑΣ, ΒΟΥΛΙΑΓΜΕΝΟ ΑΡΤΑΣ, ΒΟΥΤΑΝΙΑΔΑ ΑΡΤΑΣ, ΒΡΥΣΟΥΛΑ ΑΡΤΑΣ, ΔΙΛΟΦΟ ΠΗΓΩΝ ΑΡΤΑΣ, ΕΛΑΤΗ ΑΡΤΑΣ, ΙΤΕΑ ΑΡΤΑΣ, ΚΑΝΑΛΙΑ ΑΡΤΑΣ, ΚΑΣΙΑΝΟΣ ΑΡΤΑΣ, ΚΑΣΤΑΝΕΑ ΑΡΤΑΣ, ΚΑΣΤΑΝΙΕΣ ΑΡΤΑΣ, ΚΡΥΑ ΒΡΥΣΗ ΑΡΤΑΣ, ΛΑΜΠΙΡΙ ΑΡΤΑΣ, ΜΕΓΑΛΟΧΑΡΗ ΑΡΤΑΣ, ΜΕΣΟΠΥΡΓΟΣ ΑΡΤΑΣ, ΜΗΛΕΑ ΚΑΣΤΑΝΙΑΣ ΑΡΤΑΣ, ΜΗΛΙΑΝΑ ΑΡΤΑΣ, ΜΗΛΙΕΣ ΑΡΤΑΣ, ΠΑΛΑΙΟΜΥΛΙΑ ΑΡΤΑΣ, ΠΑΛΑΙΟΜΥΛΟΣ ΑΡΤΑΣ, ΠΕΡΔΙΚΑ ΑΡΤΑΣ, ΠΕΤΡΟΥ ΑΡΤΑΣ, ΠΗΓΕΣ ΑΡΤΑΣ, ΠΛΑΤΑΝΟΣ ΑΣΤΡΟΧΩΡΙΟΥ ΑΡΤΑΣ, ΠΟΤΙΣΤΙΚΑ ΜΕΓΑΛΟΧΑΡΗΣ ΑΡΤΑΣ, ΠΥΡΓΟΣ ΑΡΤΑΣ, ΡΙΣΕΣΙ ΑΡΤΑΣ, ΣΤΑΥΡΟΒΡΥΣΗ ΑΡΤΑΣ, ΤΣΕΛΙΓΓΑΔΕΣ ΑΡΤΑΣ, ΦΡΑΞΟ ΑΡΤΑΣ, ΧΟΥΤΙΑΝΑ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '47100', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΡΤΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΓΟΡΓΟΜΥΛΟΥ ΑΡΤΑΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΑΡΤΑΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΑΡΤΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΓΛΥΚΟΡΡΙΖΟΥ ΑΡΤΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΚΑΤΩ ΚΑΛΕΝΤΙΝΗΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΣΠΥΡΙΔΩΝΑΣ ΑΡΤΑΣ, ΑΚΡΟΠΟΤΑΜΙΑ ΑΡΤΑΣ, ΑΚΡΟΠΟΤΑΜΙΑ ΚΛΕΙΔΙΟΥ ΑΡΤΑΣ, ΑΛΥΚΗ ΑΡΤΑΣ, ΑΜΦΙΘΕΑ ΑΡΤΑΣ, ΑΝΔΡΕΑΣ ΑΡΤΑΣ, ΑΝΕΖΑ ΑΡΤΑΣ, ΑΝΕΜΟΡΡΑΧΗ ΑΡΤΑΣ, ΑΝΘΟΤΟΠΟΣ ΑΡΤΑΣ, ΑΝΩ ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΑΡΤΑΣ, ΑΠΟΜΕΡΟ ΑΡΤΑΣ, ΑΡΤΑ ΑΡΤΑΣ, ΒΑΘΥΚΑΜΠΟΣ ΑΡΤΑΣ, ΒΑΘΥΠΕΔΟ ΑΡΤΑΣ, ΒΙΓΛΑ ΑΡΤΑΣ, ΒΛΑΧΕΡΝΑ ΑΡΤΑΣ, ΒΡΥΣΟΥΛΕΣ ΑΡΤΑΣ, ΓΑΒΡΙΑ ΑΡΤΑΣ, ΓΛΥΚΟΡΡΙΖΟ ΑΡΤΑΣ, ΓΡΑΜΜΕΝΤΣΑ ΑΡΤΑΣ, ΓΡΙΜΠΟΒΟ ΑΡΤΑΣ, ΔΑΦΝΗ ΑΡΤΑΣ, ΔΑΦΝΟΥΛΑ ΑΡΤΑΣ, ΔΙΑΣΕΛΛΑ ΑΡΤΑΣ, ΔΙΣΤΡΑΤΟ ΑΡΤΑΣ, ΔΟΚΙΜΙΑ ΑΡΤΑΣ, ΔΡΥΩΝ ΑΡΤΑΣ, ΕΛΑΤΟΣ ΑΡΤΑΣ, ΕΛΕΟΥΣΑ ΑΡΤΑΣ, ΖΑΡΚΑΔΑΙΙΚΑ ΑΡΤΑΣ, ΖΥΓΟΣ ΜΑΡΚΙΝΙΑΔΑΣ ΑΡΤΑΣ, ΘΑΝΑΣΑΙΙΚΑ ΑΡΤΑΣ, ΚΑΚΟΒΑΤΟΣ ΑΡΤΑΣ, ΚΑΛΟΒΑΤΟΣ ΑΡΤΑΣ, ΚΑΛΟΓΕΡΙΚΟ ΑΡΤΑΣ, ΚΑΛΟΜΟΔΙΑ ΑΡΤΑΣ, ΚΑΤΩ ΚΑΛΕΝΤΙΝΗ ΑΡΤΑΣ, ΚΕΝΤΡΙΚΟ ΑΡΤΑΣ, ΚΕΡΑΜΑΤΕΣ ΑΡΤΑΣ, ΚΙΡΚΙΖΑΤΕΣ ΑΡΤΑΣ, ΚΛΕΙΣΤΟ ΑΡΤΑΣ, ΚΟΜΜΕΝΟ ΑΡΤΑΣ, ΚΟΡΦΟΒΟΥΝΙ ΑΡΤΑΣ, ΚΟΡΩΝΗΣΙΑ ΑΡΤΑΣ, ΚΡΥΟΝΕΡΙ ΑΡΤΑΣ, ΚΩΣΤΑΚΙΟΙ ΑΡΤΑΣ, ΛΑΓΚΑΔΙΑ ΚΕΝΤΡΙΚΟΥ ΑΡΤΑΣ, ΛΙΜΙΝΗ ΑΡΤΑΣ, ΛΟΥΤΡΟΤΟΠΟΣ ΑΡΤΑΣ, ΜΑΡΑΘΟΒΟΥΝΙ ΑΡΤΑΣ, ΜΑΡΚΙΝΙΑΔΑ ΑΡΤΑΣ, ΜΕΓΑΡΧΗ ΑΡΤΑΣ, ΜΕΓΚΛΑ ΑΡΤΑΣ, ΜΕΛΑΤΕΣ ΑΡΤΑΣ, ΜΟΝΗ ΓΕΝΝΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΑΡΤΑΣ, ΜΥΤΙΚΑΣ ΑΡΤΑΣ, ΝΕΟΣ ΣΥΝΟΙΚΙΣΜΟΣ ΚΟΜΜΕΝΟΥ ΑΡΤΑΣ, ΝΕΟΣ ΣΥΝΟΙΚΙΣΜΟΣ ΛΟΥΤΡΟΤΟΠΟΥ ΑΡΤΑΣ, ΝΕΟΧΩΡΑΚΙ ΑΡΤΑΣ, ΠΑΛΑΙΟΣΚΑΜΙΑ ΑΡΤΑΣ, ΠΑΧΥΚΑΛΑΜΟΣ ΑΡΤΑΣ, ΠΕΡΑΝΘΗ ΑΡΤΑΣ, ΠΛΗΣΙΟΙ ΑΡΤΑΣ, ΠΟΛΥΔΡΟΣΟ ΑΡΤΑΣ, ΠΟΥΡΝΑΡΙ ΑΡΤΑΣ, ΠΤΕΡΗ ΑΡΤΑΣ, ΡΑΧΗ ΑΡΤΑΣ, ΡΟΚΚΑ ΑΡΤΑΣ, ΡΟΥΜΑΝΙΑ ΑΡΤΑΣ, ΣΑΛΑΩΡΑ ΑΡΤΑΣ, ΣΕΛΙΝΑ ΑΡΤΑΣ, ΣΚΑΜΝΙΑ ΑΡΤΑΣ, ΣΥΓΓΟΥΝΕΙΚΑ ΑΡΤΑΣ, ΣΥΚIΕΣ ΑΡΤΑΣ, ΤΖΑΠΑΔΑ ΑΡΤΑΣ, ΤΡΑΠΕΖΑΚΙ ΑΡΤΑΣ, ΦΑΓΚΟΣ ΑΡΤΑΣ, ΦΤΕΡΗ ΑΡΤΑΣ, ΦΩΤΕΙΝΟ ΑΡΤΑΣ, ΨΑΘΟΤΟΠΙ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '47150', Area: 'ΆΜΜΟΣ ΑΡΤΑΣ, ΔΑΦΝΩΤΉ ΑΡΤΑΣ, ΚΑΘΑΡΟΒΟΎΝΙΟΝ ΑΡΤΑΣ, ΚΑΛΛΙΘΈΑ ΠΙΣΤΙΑΝΏΝ ΑΡΤΑΣ, ΚΆΜΠΟΣ ΣΚΟΎΠΑΣ ΑΡΤΑΣ, ΚΆΡΔΑΜΟΣ ΑΡΤΑΣ, ΠΑΛΑΙΟΧΏΡΙΟΝ ΣΚΟΎΠΑΣ ΑΡΤΑΣ, ΠΕΡΔΙΚΆΡΙΟΝ ΑΡΤΑΣ, ΠΙΣΤΙΑΝΆ ΑΡΤΑΣ, ΠΛΑΤΑΝΆΚΙΑ ΑΡΤΑΣ, ΠΛΑΤΆΝΙΑ ΑΡΤΑΣ, ΠΡΟΦΉΤΗΣ ΗΛΊΑΣ ΑΡΤΑΣ, ΡΟΔΑΥΓΉ ΑΡΤΑΣ, ΣΚΟΎΠΑ ΑΡΤΑΣ, ΣΟΥΜΈΣΙΟΝ ΑΡΤΑΣ, ΤΣΙΑΠΑΛΑΊΪΚΑ ΑΡΤΑΣ, ΦΑΝΕΡΩΜΈΝΗ ΑΡΤΑΣ, ΦΡΆΞΟΣ ΑΡΤΑΣ', Prefecture: 'Άρτας' },
    { PostalCode: '10431', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10432', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10433', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10434', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10435', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10436', Area: 'ΑΘΗΝΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '10437', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10438', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10439', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10440', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10441', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10442', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10443', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10444', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10445', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10446', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10447', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10551', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10552', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10553', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10554', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10555', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10556', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10557', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10558', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10559', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10560', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10561', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10562', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10563', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10564', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10671', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10672', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10673', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10674', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10675', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10676', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10677', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10678', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10679', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10680', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10681', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10682', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '10683', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11141', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11142', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11143', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11144', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11145', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11146', Area: 'ΓΑΛΑΤΣΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11147', Area: 'ΓΑΛΑΤΣΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '11251', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11252', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11253', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11254', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11255', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11256', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11257', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11361', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11362', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11363', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11364', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11471', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11472', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11473', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11474', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11475', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11476', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11521', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11522', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11523', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11524', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11525', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11526', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11527', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11528', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11631', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11632', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11633', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11634', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11635', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11636', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11741', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11742', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11743', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11744', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11745', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11851', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11852', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11853', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11854', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '11855', Area: 'ΑΘΗΝΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12131', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '12132', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12133', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12134', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12135', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12136', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12137', Area: 'ΠΕΡΙΣΤΕΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12241', Area: 'ΑΙΓΑΛΕΩ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12242', Area: 'ΑΙΓΑΛΕΩ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '12243', Area: 'ΑΙΓΑΛΕΩ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12244', Area: 'ΑΙΓΑΛΕΩ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '12351', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '12461', Area: 'ΧΑΙΔΑΡΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '12462', Area: 'ΣΚΑΡΑΜΑΓΚΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13121', Area: 'ΙΛΙΟΝ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13122', Area: 'ΙΛΙΟΝ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13123', Area: 'ΙΛΙΟΝ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13223', Area: 'ΙΛΙΟΥ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13231', Area: 'ΠΕΤΡΟΥΠΟΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13232', Area: 'ΠΕΤΡΟΥΠΟΛΕΩΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13341', Area: 'ΑΝΩ ΛΙΟΣΙΑ ΑΤΤΙΚΗΣ, ΠΑΠΑΓΟΥ ΑΤΤΙΚΗΣ, ΦΥΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13342', Area: 'ΑΝΩ ΛΙΟΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13343', Area: 'ΑΝΩ ΛΙΟΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13344', Area: 'ΑΝΩ ΛΙΟΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13351', Area: 'ΦΥΛΗΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13451', Area: 'ΚΑΜΑΤΕΡΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13461', Area: 'ΖΕΦΥΡΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13561', Area: 'ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13562', Area: 'ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13671', Area: 'ΑΧΑΡΝΕΣ (ΜΕΝΙΔΙ) ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13672', Area: 'ΒΑΡΥΜΠΟΜΠΗ ΑΤΤΙΚΗΣ, ΞΕΝΙΑ ΠΑΡΝΗΘΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13673', Area: 'ΑΧΑΡΝΕΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13674', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΠΑΡΝΗΘΟΣ ΑΤΤΙΚΗΣ, ΠΑΡΝΗΘΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13675', Area: 'ΑΧΑΡΝΕΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13676', Area: 'ΘΡΑΚΟΜΑΚΕΔΟΝΕΣ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΚΛΕΙΣΤΩΝ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13677', Area: 'ΑΧΑΡΝΕΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '13678', Area: 'ΑΧΑΡΝΕΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '13679', Area: 'ΑΧΑΡΝΕΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14121', Area: 'ΗΡΑΚΛΕΙΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14122', Area: 'ΗΡΑΚΛΕΙΟ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14123', Area: 'ΛΥΚΟΒΡΥΣΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14231', Area: 'ΝΕΑ ΙΩΝΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14232', Area: 'ΝΕΑ ΙΩΝΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14233', Area: 'ΝΕΑ ΙΩΝΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14234', Area: 'ΝΕΑ ΙΩΝΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14235', Area: 'ΝΕΑ ΙΩΝΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14341', Area: 'ΝΕΑ ΦΙΛΑΔΕΛΦΕΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14342', Area: 'ΝΕΑ ΦΙΛΑΔΕΛΦΕΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14343', Area: 'ΝΕΑ ΧΑΛΚΗΔΩΝΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14451', Area: 'ΜΕΤΑΜΟΡΦΩΣΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14452', Area: 'ΜΕΤΑΜΟΡΦΩΣΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14561', Area: 'ΚΗΦΙΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14562', Area: 'ΚΗΦΙΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14563', Area: 'ΚΗΦΙΣΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14564', Area: 'ΚΗΦΙΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14565', Area: 'ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΤΤΙΚΗΣ, ΔΙΟΝΥΣΟΣ ΑΤΤΙΚΗΣ, ΔΡΟΣΙΑ ΑΤΤΙΚΗΣ, ΠΕΥΚΟΦΥΤΟ ΑΤΤΙΚΗΣ, ΡΑΠΕΝΤΩΣΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14568', Area: 'ΚΡΥΟΝΕΡΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14569', Area: 'ΑΝΟΙΞΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14572', Area: 'ΔΡΟΣΙΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14574', Area: 'ΡΟΔΟΠΟΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14575', Area: 'ΣΤΑΜΑΤΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14576', Area: 'ΔΙΟΝΥΣΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '14578', Area: 'ΕΚΑΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14671', Area: 'ΝΕΑ ΕΡΥΘΡΑΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '14678', Area: 'ΚΗΦΙΣΙΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15121', Area: 'ΠΕΥΚΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15122', Area: 'ΜΑΡΟΥΣΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15123', Area: 'ΜΑΡΟΥΣΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15124', Area: 'ΜΑΡΟΥΣΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15125', Area: 'ΜΑΡΟΥΣΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15126', Area: 'ΜΑΡΟΥΣΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15127', Area: 'ΜΕΛΙΣΣΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15223', Area: 'ΑΜΑΡΟΥΣΙΟΥ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15231', Area: 'ΧΑΛΑΝΔΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15232', Area: 'ΧΑΛΑΝΔΡΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15233', Area: 'ΧΑΛΑΝΔΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15234', Area: 'ΧΑΛΑΝΔΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15235', Area: 'ΒΡΙΛΗΣΣΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15236', Area: 'ΜΠΟΥΡΜΠΑΧΤΙ ΑΤΤΙΚΗΣ, ΝΕΑ ΠΕΝΤΕΛΗ ΑΤΤΙΚΗΣ, ΠΕΝΤΕΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15237', Area: 'ΦΙΛΟΘΕΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15238', Area: 'ΧΑΛΑΝΔΡΙ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15341', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15342', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15343', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15344', Area: 'ΓΕΡΑΚΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15349', Area: 'ΑΝΘΟΥΣΑ ΑΤΤΙΚΗΣ, ΓΑΛΗΝΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15351', Area: 'ΑΡΓΙΘΕΑ ΑΤΤΙΚΗΣ, ΛΕΟΝΤΑΡΙ ΑΤΤΙΚΗΣ, ΠΑΛΛΗΝΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15353', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15354', Area: 'ΓΛΥΚΑ ΝΕΡΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15451', Area: 'ΝΕΟ ΨΥΧΙΚΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15452', Area: 'ΨΥΧΙΚΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15561', Area: 'ΧΟΛΑΡΓΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15562', Area: 'ΧΟΛΑΡΓΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15669', Area: 'ΠΑΠΑΓΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15771', Area: 'ΖΩΓΡΑΦΟΥ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '15772', Area: 'ΖΩΓΡΑΦΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '15773', Area: 'ΖΩΓΡΑΦΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16121', Area: 'ΚΑΙΣΑΡΙΑΝΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16122', Area: 'ΚΑΙΣΑΡΙΑΝΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16231', Area: 'ΒΥΡΩΝΑΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16232', Area: 'ΒΥΡΩΝΑΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16233', Area: 'ΒΥΡΩΝΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16341', Area: 'ΗΛΙΟΥΠΟΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16342', Area: 'ΗΛΙΟΥΠΟΛΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16343', Area: 'ΗΛΙΟΥΠΟΛΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16344', Area: 'ΗΛΙΟΥΠΟΛΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16345', Area: 'ΗΛΙΟΥΠΟΛΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16346', Area: 'ΗΛΙΟΥΠΟΛΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16451', Area: 'ΑΡΓΥΡΟΥΠΟΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16452', Area: 'ΑΡΓΥΡΟΥΠΟΛΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16531', Area: 'ΓΛΥΦΑΔΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16561', Area: 'ΓΛΥΦΑΔΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16562', Area: 'ΓΛΥΦΑΔΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16574', Area: 'ΓΛΥΦΑΔΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16671', Area: 'ΒΟΥΛΙΑΓΜΕΝΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16672', Area: 'ΒΑΡΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16673', Area: 'ΒΟΥΛΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '16674', Area: 'ΓΛΥΦΑΔΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16675', Area: 'ΓΛΥΦΑΔΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '16777', Area: 'ΕΛΛΗΝΙΚΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17121', Area: 'ΝΕΑ ΣΜΥΡΝΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17122', Area: 'ΝΕΑ ΣΜΥΡΝΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17123', Area: 'ΝΕΑ ΣΜΥΡΝΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17124', Area: 'ΝΕΑ ΣΜΥΡΝΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17234', Area: 'ΔΑΦΝΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17235', Area: 'ΔΑΦΝΗ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17236', Area: 'ΥΜΗΤΤΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17237', Area: 'ΥΜΗΤΤΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17341', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17342', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17343', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17455', Area: 'ΚΑΛΑΜΑΚΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17456', Area: 'ΑΛΙΜΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17556', Area: 'ΑΛΙΜΟΥ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17561', Area: 'ΠΑΛΑΙΟ ΦΑΛΗΡΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17562', Area: 'ΠΑΛΑΙΟ ΦΑΛΗΡΟ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17563', Area: 'ΠΑΛΑΙΟ ΦΑΛΗΡΟ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17564', Area: 'ΠΑΛΑΙΟ ΦΑΛΗΡΟ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17655', Area: 'ΑΛΙΜΟΣ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17671', Area: 'ΚΑΛΛΙΘΕΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17672', Area: 'ΚΑΛΛΙΘΕΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17673', Area: 'ΚΑΛΛΙΘΕΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17674', Area: 'ΚΑΛΛΙΘΕΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17675', Area: 'ΚΑΛΛΙΘΕΑ ΑΘΗΝΑ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '17676', Area: 'ΚΑΛΛΙΘΕΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '17778', Area: 'ΤΑΥΡΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18010', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΑΤΤΙΚΗΣ, ΑΓΚΙΣΤΡΙ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΑΙΓΙΝΑ ΑΤΤΙΚΗΣ, ΑΛΩΝΕΣ ΑΤΤΙΚΗΣ, ΑΝΙΤΣΑΙΟ ΑΤΤΙΚΗΣ, ΒΑΘΥ ΑΓΚΙΣΤΡΙΟΥ ΑΤΤΙΚΗΣ, ΒΑΘΥ ΑΙΓΙΝΑΣ ΑΤΤΙΚΗΣ, ΒΑΙΑ ΑΤΤΙΚΗΣ, ΒΛΑΧΗΔΕΣ ΑΤΤΙΚΗΣ, ΚΑΒΟΣ ΑΤΤΙΚΗΣ, ΚΑΠΟΤΗΔΕΣ ΑΤΤΙΚΗΣ, ΚΟΝΤΟΣ ΑΤΤΙΚΗΣ, ΚΥΛΙΝΔΡΑΣ ΑΤΤΙΚΗΣ, ΚΥΨΕΛΗ ΑΙΓΙΝΑΣ ΑΤΤΙΚΗΣ, ΛΑΓΟΥΣΑ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΛΑΓΟΥΣΑΚΙ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΛΑΖΑΡΗΔΕΣ ΑΤΤΙΚΗΣ, ΛΙΜΕΝΑΡΙΑ ΑΓΚΙΣΤΡΙΟΥ ΑΤΤΙΚΗΣ, ΜΕΓΑΛΟΧΩΡΙ ΑΓΚΙΣΤΡΙΟΥ ΑΤΤΙΚΗΣ, ΜΕΣΑΓΡΟΣ ΑΤΤΙΚΗΣ, ΜΕΤΟΧΙ ΑΓΚΙΣΤΡΙΟΥ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ  ΑΙΓΙΝΑΣ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΠΑΧΕΙΑ ΡΑΧΗ ΑΤΤΙΚΗΣ, ΠΕΡΔΙΚΑ ΑΤΤΙΚΗΣ, ΠΟΡΤΕΣ ΑΤΤΙΚΗΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΑΤΤΙΚΗΣ, ΣΚΑΛΑ ΑΓΚΙΣΤΡΙΟΥ ΑΤΤΙΚΗΣ, ΣΟΥΒΑΛΑ ΑΤΤΙΚΗΣ, ΣΤΑΧΤΟΡΡΟΗ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΣΦΕΝΤΟΥΡΙ ΑΤΤΙΚΗΣ, ΤΖΙΚΗΔΕΣ ΑΤΤΙΚΗΣ, ΥΨΗΛΗ ΝΗΣΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18020', Area: 'ΑΓΙΑ ΕΛΕΝΗ ΑΤΤΙΚΗΣ, ΑΓΙΑ ΣΩΤΗΡΑ ΓΑΛΑΤΑ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΤΡΟΙΖΗΝΑΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΤΡΟΙΖΗΝΟΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΝΕΚΤΑΡΙΟΣ ΑΤΤΙΚΗΣ, ΑΚΤΗ ΑΓΑΠΗΣ ΑΤΤΙΚΗΣ, ΑΝΩ ΦΑΝΑΡΙ ΑΤΤΙΚΗΣ, ΒΛΑΧΑΙΙΚΑ ΑΤΤΙΚΗΣ, ΒΥΔΙΟ ΑΤΤΙΚΗΣ, ΓΑΛΑΤΑΣ ΑΤΤΙΚΗΣ, ΔΡΥΟΠΗ ΑΤΤΙΚΗΣ, ΖΕΡΒΑΙΙΚΑ ΑΤΤΙΚΗΣ, ΚΑΛΛΟΝΗ ΑΤΤΙΚΗΣ, ΚΑΡΑΤΖΑΣ ΑΤΤΙΚΗΣ, ΚΥΑΝΗ ΑΚΤΗ ΑΤΤΙΚΗΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΠΟΡΟΥ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΖΩΟΔΟΧΟΥ ΠΗΓΗΣ ΚΑΛΑΥΡΕΙΑΣ ΑΤΤΙΚΗΣ, ΜΥΛΟΣ ΑΤΤΙΚΗΣ, ΝΕΡΑΤΖΙΑ ΑΤΤΙΚΗΣ, ΝΗΣΙΔΑ ΑΤΤΙΚΗΣ, ΠΟΡΟΣ ΑΤΤΙΚΗΣ, ΣΑΡΩΝΙΔΑ ΓΑΛΑΤΑ ΑΤΤΙΚΗΣ, ΣΚΑΠΕΤΙ ΑΤΤΙΚΗΣ, ΤΑΚΤΙΚΟΥΠΟΛΗ ΑΤΤΙΚΗΣ, ΤΡΟΙΖΗΝΑ ΑΤΤΙΚΗΣ, ΧΩΡΑ ΑΤΤΙΚΗΣ, ΨΗΦΤΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18030', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΒΑΘΥ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΔΡΙΤΣΑΙΙΚΑ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΚΑΗΜΕΝΗ ΧΩΡΑ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΚΟΥΝΟΥΠΙΤΣΑ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΚΥΨΕΛΗ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΜΑΚΡΥΛΟΓΓΟΣ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΜΕΓΑΛΟ ΠΟΤΑΜΙ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΜΕΓΑΛΟΧΩΡΙ ΜΕΘΑΝΩΝ ΑΤΤΙΚΗΣ, ΜΕΘΑΝΑ ΑΤΤΙΚΗΣ, ΠΑΛΑΙΑ ΛΟΥΤΡΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18040', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΥΔΡΑΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΥΔΡΑΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΥΔΡΑΣ ΑΤΤΙΚΗΣ, ΒΛΥΧΟΣ ΑΤΤΙΚΗΣ, ΔΟΚΟΣ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΕΠΙΣΚΟΠΗ ΑΤΤΙΚΗΣ, ΖΩΓΕΡΙ ΑΤΤΙΚΗΣ, ΚΙΒΩΤΟΣ ΑΤΤΙΚΗΣ, ΚΛΙΜΑΚΙ ΑΤΤΙΚΗΣ, ΛΙΜΙΟΝΙΖΑ ΑΤΤΙΚΗΣ, ΜΑΝΔΡΑΚΙ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΑΓΙΑΣ ΕΥΠΡΑΞΙΑΣ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΑΓΙΑΣ ΤΡΙΑΔΟΣ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΓΕΝΝΗΣΙΟΥ ΘΕΟΤΟΚΟΥ ΖΟΥΡΒΑΣ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΠΡΟΦΗΤΟΥ ΗΛΙΟΥ ΑΤΤΙΚΗΣ, ΜΩΛΟΣ ΑΤΤΙΚΗΣ, ΠΑΛΑΜΙΔΑΣ ΑΤΤΙΚΗΣ, ΠΑΡΑΠΟΛΑ ΑΤΤΙΚΗΣ, ΠΕΤΑΣΙ ΑΤΤΙΚΗΣ, ΠΛΑΤΟΝΗΣΙ ΑΤΤΙΚΗΣ, ΣΤΑΥΡΟΝΗΣΙ ΑΤΤΙΚΗΣ, ΤΡΙΚΕΡΙ ΑΤΤΙΚΗΣ, ΥΔΡΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18050', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΣΠΕΤΣΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΣΠΕΤΣΩΝ ΑΤΤΙΚΗΣ, ΒΕΛΟΠΟΥΛΑ ΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΚΟΥΖΟΥΝΟΣ ΑΤΤΙΚΗΣ, ΛΙΓΟΝΕΡΙ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΑΓΙΩΝ ΠΑΝΤΩΝ ΑΤΤΙΚΗΣ, ΣΠΕΤΣΕΣ ΑΤΤΙΚΗΣ, ΣΠΕΤΣΟΠΟΥΛΑ  ΝΗΣΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18120', Area: 'ΚΟΡΥΔΑΛΛΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18121', Area: 'ΚΟΡΥΔΑΛΛΟΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18122', Area: 'ΚΟΡΥΔΑΛΛΟΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18233', Area: 'ΑΓ. ΙΩΑΝΝΗΣ ΡΕΝΤΗΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18344', Area: 'ΜΟΣΧΑΤΟ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18345', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΡΕΝΤΗΣ ΑΤΤΙΚΗΣ, ΜΟΣΧΑΤΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18346', Area: 'ΜΟΣΧΑΤΟ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18450', Area: 'ΝΙΚΑΙΑ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18451', Area: 'ΝΙΚΑΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18452', Area: 'ΝΙΚΑΙΑ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18453', Area: 'ΝΙΚΑΙΑ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18454', Area: 'ΝΙΚΑΙΑ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18531', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18532', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18533', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18534', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18535', Area: 'ΠΕΙΡΑΙΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18536', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18537', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18538', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18539', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18540', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18541', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18542', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18543', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18544', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18545', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18546', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18547', Area: 'ΠΕΙΡΑΙΑΣ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18648', Area: 'ΔΡΑΠΕΤΣΩΝΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18755', Area: 'ΚΕΡΑΤΣΙΝΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18756', Area: 'ΚΕΡΑΤΣΙΝΙ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18757', Area: 'ΚΕΡΑΤΣΙΝΙ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18758', Area: 'ΚΕΡΑΤΣΙΝΙ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Αττικής' },
    { PostalCode: '18863', Area: 'ΠΕΡΑΜΑ ΑΤΤΙΚΗΣ, ΨΥΤΤΑΛΕΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18900', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΣΑΛΑΜΙΝΑΣ ΑΤΤΙΚΗΣ, ΕΛΛΗΝΙΚΟ ΑΤΤΙΚΗΣ, ΚΑΝΑΚΙΑ ΑΤΤΙΚΗΣ, ΛΕΡΟΣ ΣΑΛΑΜΙΝΑΣ ΑΤΤΙΚΗΣ, ΜΑΚΡΟΝΗΣΟΣ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΦΑΝΕΡΩΜΕΝΗΣ ΑΤΤΙΚΗΣ, ΜΠΑΤΣΙ ΑΤΤΙΚΗΣ, ΝΗΣΟΣ ΚΑΝΑΚΙΑ ΑΤΤΙΚΗΣ, ΡΕΒΥΘΟΥΣΑ ΑΤΤΙΚΗΣ, ΣΑΛΑΜΙΝΑ ΑΤΤΙΚΗΣ, ΣΤΕΝΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '18950', Area: 'ΑΓΊΑ ΜΑΡΊΝΑ ΑΤΤΙΚΗΣ, ΑΙΆΝΤΕΙΟ ΑΤΤΙΚΗΣ, ΑΊΑΣ ΚΛΆΜΠ ΑΤΤΙΚΗΣ, ΑΜΥΓΔΑΛΙΈΣ ΑΤΤΙΚΗΣ, ΆΝΩ ΖΟΡΜΠΑΛΆ ΑΤΤΙΚΗΣ, ΑΦΡΟΔΊΤΗ ΑΤΤΙΚΗΣ, ΓΥΆΛΑ ΑΤΤΙΚΗΣ, ΔΕΗ (ΧΑΛΙΏΤΗ) ΑΤΤΙΚΗΣ, ΔΗΜΗΤΡΆΝΙ ΑΤΤΙΚΗΣ, ΚΑΚΉ ΒΊΓΛΑ ΑΤΤΙΚΗΣ, ΚΑΜΠΌΛΙ ΑΤΤΙΚΗΣ, ΚΑΝΆΚΙΑ ΑΤΤΙΚΗΣ, ΚΆΤΩ ΖΟΡΜΠΑΛΆ ΑΤΤΙΚΗΣ, ΚΟΛΏΝΕΣ ΑΤΤΙΚΗΣ, ΜΕΝΕΜΈΝΗ ΑΤΤΙΚΗΣ, ΜΠΌΝΙ ΑΤΤΙΚΗΣ, ΝΑΤΟ ΑΤΤΙΚΗΣ, ΝΤΟΥΛΆΠΙ ΑΤΤΙΚΗΣ, ΠΑΝΌΡΑΜΑ ΑΤΤΙΚΗΣ, ΠΕΡΆΝΙ ΑΤΤΙΚΗΣ, ΠΕΡΙΣΤΈΡΙΑ ΑΤΤΙΚΗΣ, ΠΌΡΤΟ ΦΊΝΟ ΑΤΤΙΚΗΣ, ΣΑΤΕΡΛΊ ΑΤΤΙΚΗΣ, ΧΑΡΟΥΠΙΆ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19001', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΜΙΚΡΟΛΙΜΑΝΟΥ ΑΤΤΙΚΗΣ, ΑΓΙΑΣΜΑ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΕΡΑΤΕΑΣ ΑΤΤΙΚΗΣ, ΑΝΩ ΔΑΣΚΑΛΕΙΟ ΑΤΤΙΚΗΣ, ΑΡΙ ΑΤΤΙΚΗΣ, ΑΥΡΟΚΑΣΤΡΟ ΑΤΤΙΚΗΣ, ΒΕΝΙΟ ΔΑΣΚΑΛΕΙΟΥ ΑΤΤΙΚΗΣ, ΒΙΝΤΖΙ ΔΑΣΚΑΛΕΙΟΥ ΑΤΤΙΚΗΣ, ΔΑΣΚΑΛΕΙΟ ΑΤΤΙΚΗΣ, ΔΗΜΟΛΑΚΙ ΑΤΤΙΚΗΣ, ΔΙΟΝΥΣΟΣ ΚΕΡΑΤΕΑΣ ΑΤΤΙΚΗΣ, ΔΙΨΕΛΙΖΑ ΑΤΤΙΚΗΣ, ΕΛΑΙΟΧΩΡΙ ΑΤΤΙΚΗΣ, ΕΛΙΕΣ ΔΑΣΚΑΛΕΙΟΥ ΑΤΤΙΚΗΣ, ΖΑΠΑΝΙ ΑΤΤΙΚΗΣ, ΖΑΣΤΑΝΟ ΑΤΤΙΚΗΣ, ΚΑΚΗ ΘΑΛΑΣΣΑ ΑΤΤΙΚΗΣ, ΚΑΛΟΠΗΓΑΔΟ ΑΤΤΙΚΗΣ, ΚΕΡΑΤΕΑ ΑΤΤΙΚΗΣ, ΚΟΝΤΡΑ ΒΙΛΑΡΑ ΑΤΤΙΚΗΣ, ΜΑΛΙΑΚΟΥΚΙ ΑΤΤΙΚΗΣ, ΜΑΛΙΑΣΤΕΚΑ ΑΤΤΙΚΗΣ, ΜΑΝΟΥΤΣΟ ΑΤΤΙΚΗΣ, ΜΑΡΙΣΤΡΑ ΑΤΤΙΚΗΣ, ΜΑΡΚΑΤΙ ΑΤΤΙΚΗΣ, ΜΕΓΑΛΑ ΠΕΥΚΑ ΑΤΤΙΚΗΣ, ΜΕΓΑΛΗ ΑΥΛΗ ΑΤΤΙΚΗΣ, ΜΗΤΡΟΠΗΣΙ ΑΤΤΙΚΗΣ, ΜΙΚΡΟΛΙΜΑΝΟ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΚΑΚΗΣ ΘΑΛΑΣΣΑΣ ΑΤΤΙΚΗΣ, ΜΠΟΥΖΑΛΑΔΕΣ ΑΤΤΙΚΗΣ, ΜΥΡΤΕΖΑ ΑΤΤΙΚΗΣ, ΝΤΑΡΔΕΖΑ ΑΤΤΙΚΗΣ, ΠΑΝΟΡΑΜΑ ΜΙΚΡΟΛΙΜΑΝΟΥ ΑΤΤΙΚΗΣ, ΠΕΥΚΑ ΑΤΤΙΚΗΣ, ΠΟΡΤΟ ΕΝΝΙΑ ΑΤΤΙΚΗΣ, ΠΡΙΣΙΛΙΜΕΣ ΑΤΤΙΚΗΣ, ΡΙΜΠΑΡΙ ΑΤΤΙΚΗΣ, ΡΟΥΜΟΥΝΤΙ ΑΤΤΙΚΗΣ, ΡΟΥΝΤΖΕΡΙ ΛΕΜΠΡΟΥ ΑΤΤΙΚΗΣ, ΣΑΚΚΑ ΑΤΤΙΚΗΣ, ΣΚΑΛΕΖΑ ΜΗΤΡΑΝΤΩΝΗ ΑΤΤΙΚΗΣ, ΣΠΗΛΙΑΖΕΖΑ ΑΤΤΙΚΗΣ, ΣΥΝΤΕΡΙΝΑ ΑΤΤΙΚΗΣ, ΣΥΡΙ ΑΤΤΙΚΗΣ, ΤΖΑΡΔΑΒΙΛΑ ΜΟΚΡΙΖΑΣ ΑΤΤΙΚΗΣ, ΤΖΟΝΙΜΑ ΑΤΤΙΚΗΣ, ΤΟΓΑΝΙ ΛΑΚΙΖΑΣ ΑΤΤΙΚΗΣ, ΤΡΕΧΑΝΤΙΕΡΑ ΑΤΤΙΚΗΣ, ΤΡΙΑΝΤΑΦΥΛΛΙΑ ΑΤΤΙΚΗΣ, ΦΑΝΩΣΙ ΑΤΤΙΚΗΣ, ΧΑΡΑΚΑΣ ΑΤΤΙΚΗΣ, ΧΑΡΒΑΛΟ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19002', Area: 'ΠΑΙΑΝΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19003', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΜΑΡΚΟΠΟΥΛΟΥ ΑΤΤΙΚΗΣ, ΑΥΛΑΚΙ (ΠΑΡΑΛΙΑ ΠΟΡΤΟ ΡΑΦΤΗ) ΑΤΤΙΚΗΣ, ΒΡΑΥΡΩΝΑ ΑΡΤΕΜΙΔΟΣ ΑΤΤΙΚΗΣ, ΚΟΥΒΑΡΑΣ ΑΤΤΙΚΗΣ, ΚΟΥΛΙΔΑΣ ΑΤΤΙΚΗΣ, ΜΑΡΚΟΠΟΥΛΟ ΜΕΣΟΓΕΙΩΝ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΜΕΤΑΜ.ΣΩΤΗΡΟΣ ΚΟΥΒΑΡΑ ΑΤΤΙΚΗΣ, ΝΕΟΣ ΚΟΥΒΑΡΑΣ ΑΤΤΙΚΗΣ, ΠΟΡΙΑ ΑΤΤΙΚΗΣ, ΠΟΡΤΟ ΡΑΦΤΗ (ΛΙΜΕΝΑΣ ΜΑΡΚΟΠΟΥΛ.) ΑΤΤΙΚΗΣ, ΧΑΜΟΛΙΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19004', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΣΠΑΤΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΜΠΟΥΡΑ ΑΤΤΙΚΗΣ, ΕΤΟΣ ΣΤΕΚΟ ΑΤΤΙΚΗΣ, ΗΜΕΡΟΣ ΠΕΥΚΟΣ ΑΤΤΙΚΗΣ, ΣΠΑΤΑ ΑΤΤΙΚΗΣ, ΦΟΙΝΙΚΑΣ ΑΤΤΙΚΗΣ, ΧΡΙΣΤΟΥΠΟΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19005', Area: 'ΝΕΑ ΜΑΚΡΗ ΑΤΤΙΚΗΣ, ΝΕΟΣ ΒΟΥΤΖΑΣ ΝΕΑΣ ΜΑΚΡΗΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19006', Area: 'ΚΟΥΜΙΝΤΡΙ ΑΤΤΙΚΗΣ, ΝΕΑ ΠΕΡΑΜΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19007', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΓΡΑΜΜΑΤΙΚΟΥ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΜΑΡΑΘΩΝΑ ΑΤΤΙΚΗΣ, ΑΝΩ ΣΟΥΛΙ ΑΤΤΙΚΗΣ, ΑΥΡΑ ΑΤΤΙΚΗΣ, ΒΛΗΤΙΚΟΣ ΣΤΑΘΜΟΣ ΑΤΤΙΚΗΣ, ΒΟΘΩΝΑΣ ΑΤΤΙΚΗΣ, ΒΡΑΝΑΣ ΑΤΤΙΚΗΣ, ΓΡΑΜΜΑΤΙΚΟ ΑΤΤΙΚΗΣ, ΚΑΤΩ ΣΟΥΛΙ ΑΤΤΙΚΗΣ, ΜΑΡΑΘΩΝΑΣ ΑΤΤΙΚΗΣ, ΣΕΣΙ ΑΤΤΙΚΗΣ, ΣΧΙΝΙΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19008', Area: 'ΕΡΥΘΡΕΣ ΒΟΙΩΤΙΑΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19009', Area: 'ΔΑΣΑΜΑΡΙ ΑΤΤΙΚΗΣ, ΔΙΩΝΗ ΑΤΤΙΚΗΣ, ΚΑΛΛΙΤΕΧΝΟΥΠΟΛΗ ΑΤΤΙΚΗΣ, ΝΕΟΣ ΒΟΥΤΖΑΣ ΡΑΦΗΝΑΣ ΑΤΤΙΚΗΣ, ΝΤΑΟΥ ΠΕΝΤΕΛΗ ΑΤΤΙΚΗΣ, ΝΤΡΑΦΙ ΑΤΤΙΚΗΣ, ΠΑΛΙΟΣ ΜΥΛΟΣ ΑΤΤΙΚΗΣ, ΠΙΚΕΡΜΙ ΑΤΤΙΚΗΣ, ΡΑΦΗΝΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19010', Area: 'ΚΑΛΥΒΙΑ ΘΟΡΙΚΟΥ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19011', Area: 'ΑΣΠΡΟΧΩΡΙ ΑΥΛΩΝΑΣ ΑΤΤΙΚΗΣ, ΑΥΛΩΝΑ ΑΤΤΙΚΗΣ, ΜΑΛΑΚΑΣΑ ΑΤΤΙΚΗΣ, ΜΙΛΕΣΙΟ ΑΤΤΙΚΗΣ, ΣΦΕΝΔΑΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19012', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΒΙΛΙΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΒΙΛΙΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΝΕΚΤΑΡΙΟΣ ΒΙΛΙΩΝ ΑΤΤΙΚΗΣ, ΑΙΓΟΣΘΕΝΑ ΑΤΤΙΚΗΣ, ΒΙΛΙΑ ΑΤΤΙΚΗΣ, ΚΡΥΟ ΠΗΓΑΔΙ ΑΤΤΙΚΗΣ, ΛΕΥΚΑ ΑΤΤΙΚΗΣ, ΛΟΥΜΠΑ ΑΤΤΙΚΗΣ, ΜΥΤΙΚΑΣ ΑΤΤΙΚΗΣ, ΟΙΝΟΗ ΑΤΤΙΚΗΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΒΙΛΙΩΝ ΑΤΤΙΚΗΣ, ΨΑΘΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19013', Area: 'ΑΝΑΒΥΣΣΟΣ ΑΤΤΙΚΗΣ, ΘΥΜΑΡΙ ΑΤΤΙΚΗΣ, ΠΑΛΑΙΑ ΦΩΚΑΙΑ ΑΤΤΙΚΗΣ, ΣΑΡΩΝΙΔΑ ΑΤΤΙΚΗΣ, ΦΕΡΙΖΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19014', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΒΑΡΝΑΒΑ ΑΤΤΙΚΗΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΑΦΙΔΝΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ (ΚΑΠΑΝΔΡΙΤΊΟΥ) ΑΤΤΙΚΗΣ, ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΚΑΛΑΜΟΥ ΑΤΤΙΚΗΣ, ΑΓΙΟΙ ΔΗΜΗΤΡΙΟΣ ΚΑΙ ΠΑΝΤΕΛΕΗΜΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ (ΠΟΛΥΔΕΝΔΡ.) ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΒΑΡΝΑΒΑ ΑΤΤΙΚΗΣ, ΑΦΙΔΝΕΣ ΑΤΤΙΚΗΣ, ΒΑΡΝΑΒΑΣ ΑΤΤΙΚΗΣ, ΔΙΕΘΝΗΣ ΙΠΠΟΚΡΑΤΕΙΟΣ ΠΟΛΙΤΕΙΑ ΑΤΤΙΚΗΣ, ΔΡΟΣΟΠΗΓΗ ΑΤΤΙΚΗΣ, ΗΡΑΚΛΕΙΔΕΙΣ ΑΤΤΙΚΗΣ, ΚΑΛΑΜΟΣ ΑΤΤΙΚΗΣ, ΚΑΠΑΝΔΡΙΤΙ ΑΤΤΙΚΗΣ, ΚΟΚΚΙΝΟΒΡΑΧΟΣ ΑΤΤΙΚΗΣ, ΚΟΣΜΟΘΕΑ ΑΤΤΙΚΗΣ, ΛΙΜΝΗ ΜΑΡΑΘΩΝΑ ΑΤΤΙΚΗΣ, ΛΙΜΝΙΩΝΑΣ ΑΤΤΙΚΗΣ, ΜΙΚΡΟΧΩΡΙΟ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΜΕΤΑΜ.ΣΩΤΗΡΟΣ ΒΑΡΝΑΒΑ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΑΤΤΙΚΗΣ, ΠΟΛΥΔΕΝΔΡΙ ΑΤΤΙΚΗΣ, ΠΟΥΡΙΘΙ ΑΤΤΙΚΗΣ, ΣΤΑΘΜΟΣ ΑΦΙΔΝΩΝ ΑΤΤΙΚΗΣ, ΤΑΞΙΑΡΧΕΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19015', Area: 'ΑΓΙΑ ΑΙΚΑΤΕΡΙΝΗ ΝΕΩΝ ΠΑΛΑΤΙΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΑ ΒΑΡΒΑΡΑ ΜΑΡΚΟΠΟΥΛΟΥ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ Ν.ΠΑΛΑΤΙΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ Ν.ΠΑΛΑΤΙΩΝ ΑΤΤΙΚΗΣ, ΒΑΡΥΤΙ ΑΤΤΙΚΗΣ, ΚΑΜΑΡΙ ΑΤΤΙΚΗΣ, ΚΑΜΠΟΣ ΩΡΩΠΟΥ ΑΤΤΙΚΗΣ, ΚΑΤΗΦΟΡΙ ΑΤΤΙΚΗΣ, ΜΑΡΚΟΠΟΥΛΟ ΩΡΩΠΟΥ ΑΤΤΙΚΗΣ, ΜΠΑΦΙ ΑΤΤΙΚΗΣ, ΝΕΑ ΠΑΛΑΤΙΑ ΑΤΤΙΚΗΣ, ΝΕΑ ΠΟΛΙΤΕΙΑ ΑΤΤΙΚΗΣ, ΝΕΟ ΣΥΚΑΜΙΝΟ ΑΤΤΙΚΗΣ, ΝΕΟΝ ΛΙΒΥΣΣΙΟ ΑΤΤΙΚΗΣ, ΠΑΡΑΛΙΑ ΑΤΤΙΚΗΣ, ΠΕΥΚΙΑΣ ΑΤΤΙΚΗΣ, ΠΛΑΤΑΝΙΑ ΩΡΩΠΟΥ ΑΤΤΙΚΗΣ, ΠΟΝΤΙΩΝ ΑΤΤΙΚΗΣ, ΣΚΑΛΑ ΩΡΩΠΟΥ ΑΤΤΙΚΗΣ, ΣΥΚΑΜΙΝΟ ΑΤΤΙΚΗΣ, ΧΑΛΚΟΥΤΣΙ ΑΤΤΙΚΗΣ, ΩΡΩΠΟΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19016', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΣΠΑΤΩΝ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΣΕΡΑΦΕΙΜ ΣΠΑΤΩΝ ΑΤΤΙΚΗΣ, ΑΡΤΕΜΗ ΑΤΤΙΚΗΣ, ΒΕΛΑΝΙΔΙΑ ΑΤΤΙΚΗΣ, ΛΟΥΤΣΑ ΑΤΤΙΚΗΣ, ΝΕΑΠΟΛΗ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19018', Area: 'ΜΑΓΟΥΛΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19100', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΜΕΓΑΡΩΝ ΑΤΤΙΚΗΣ, ΑΙΓΕΙΡΟΥΣΕΣ ΑΤΤΙΚΗΣ, ΑΛΕΠΟΧΩΡΙ ΑΝΩ ΑΤΤΙΚΗΣ, ΑΛΕΠΟΧΩΡΙ ΚΑΤΩ ΑΤΤΙΚΗΣ, ΒΕΝΙΖΑ ΑΤΤΙΚΗΣ, ΒΛΥΧΑΔΑ ΑΤΤΙΚΗΣ, ΚΙΝΕΤΑ ΑΤΤΙΚΗΣ, ΛΑΚΚΑ ΚΑΛΟΓΗΡΟΥ ΑΤΤΙΚΗΣ, ΜΕΓΑΡΑ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΙΕΡΟΘΕΟΥ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΙΩΑΝΝΗ ΠΡΟΔΡΟΜΟΥ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΠΑΝΑΧΡΑΝΤΟΥ ΑΤΤΙΚΗΣ, ΠΑΧΑΚΙΟ ΑΤΤΙΚΗΣ, ΠΑΧΗ ΑΤΤΙΚΗΣ, ΣΠΑΡΤΑ ΑΤΤΙΚΗΣ, ΣΤΙΚΑΣ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19200', Area: 'ΕΛΕΥΣΙΝΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19300', Area: 'ΑΣΠΡΟΠΥΡΓΟΣ ΑΤΤΙΚΗΣ, ΔΙΥΛΙΣΤΗΡΙΑ ΑΣΠΡΟΠΥΡΓΟΥ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19400', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΟΡΩΠΙΟΥ ΑΤΤΙΚΗΣ, ΚΑΡΕΛΛΑΣ ΑΤΤΙΚΗΣ, ΚΙΤΣΙ ΑΤΤΙΚΗΣ, ΚΟΡΩΠΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19500', Area: 'ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΤΤΙΚΗΣ, ΑΝΩ ΘΟΡΙΚΟ ΑΤΤΙΚΗΣ, ΕΣΠΕΡΙΔΕΣ ΑΤΤΙΚΗΣ, ΘΟΡΙΚΟ ΑΤΤΙΚΗΣ, ΚΑΤΩ ΠΟΣΕΙΔΩΝΙΑ ΑΤΤΙΚΗΣ, ΚΑΤΩ ΣΟΥΝΙΟ ΑΤΤΙΚΗΣ, ΛΑΥΡΙΟ ΑΤΤΙΚΗΣ, ΛΕΓΡΕΝΑ ΑΤΤΙΚΗΣ, ΠΑΛΙΟΚΑΜΑΡΙΖΑ ΑΤΤΙΚΗΣ, ΠΛΑΚΑ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '19600', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΜΑΝΔΡΑΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΣΩΤΗΡ ΜΑΝΔΡΑΣ ΑΤΤΙΚΗΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΜΑΝΔΡΑΣ ΑΤΤΙΚΗΣ, ΔΙΟΔΙΑ ΑΤΤΙΚΗΣ, ΘΕΑ ΑΤΤΙΚΗΣ, ΛΟΥΤΣΑ ΜΑΝΔΡΑΣ ΑΤΤΙΚΗΣ, ΜΑΓΟΥΛΑ ΑΤΤΙΚΗΣ, ΜΑΝΔΡΑ ΑΤΤΙΚΗΣ, ΜΟΝΗ ΟΣΙΟΥ ΜΕΛΕΤΙΟΥ ΑΤΤΙΚΗΣ, ΝΕΑ ΖΩΗ ΑΤΤΙΚΗΣ, ΝΕΟΣ ΠΟΝΤΟΣ ΑΤΤΙΚΗΣ, ΠΑΛΑΙΟΧΩΡΙ ΜΑΝΔΡΑΣ ΑΤΤΙΚΗΣ, ΠΟΥΡΝΑΡΙ ΑΤΤΙΚΗΣ', Prefecture: 'Αττικής' },
    { PostalCode: '80100', Area: 'ΑΒΛΕΜΟΝΑΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΗΛΙΑΣ ΚΑΡΒΟΥΝΑΔΩΝ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΛΕΞΑΝΔΡΑΔΕΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΝΩ ΛΙΒΑΔΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΡΑΙΟΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΒΙΑΡΑΔΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΓΑΛΑΝΙΑΝΑ ΑΝΤΙΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΓΟΥΔΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΔΟΚΑΝΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΔΡΥΜΩΝΑΡΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΔΡΥΜΩΝΑΣ ΜΥΡΤΙΔΙΩΝ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΛΑΜΟΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΛΗΣΠΕΡΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΛΟΚΑΙΡΙΝΕΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΜΠΟΣ ΠΑΛΑΙΟΠΟΛΕΩΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΡΒΟΥΝΑΔΕΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΤΣΟΥΝΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΤΩ ΧΩΡΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΨΑΛΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΕΡΑΜΩΤΟ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΟΜΗΝΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΟΝΤΟΛΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΥΘΗΡΑ ΛΑΚΩΝΙΑΣ, ΛΙΒΑΔΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΛΟΥΡΑΝΤΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΜΑΝΙΤΟΧΩΡΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΜΟΝΗ ΜΥΡΤΙΔΙΩΝ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΜΥΛΟΠΟΤΑΜΟΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΠΟΛΗ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΙΣΩ ΠΗΓΑΔΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΙΤΣΙΝΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΟΤΑΜΟΣ ΑΝΤΙΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΟΥΡΚΟ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΣΤΑΘΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΣΤΡΑΠΟΔΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΤΡΑΒΑΣΑΡΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΤΣΙΚΑΛΑΡΙΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΦΑΤΣΑΔΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΦΡΑΤΣΙΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΧΑΡΧΑΛΙΑΝΑ ΑΝΤΙΚΗΘΥΡΩΝ ΛΑΚΩΝΙΑΣ', Prefecture: 'Αττικής' },
    { PostalCode: '80200', Area: 'ΑΓΙΑ ΑΝΑΣΤΑΣΙΑ ΠΟΤΑΜΟΥ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΓΙΑ ΜΟΝΗ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΓΙΑ ΠΕΛΑΓΙΑ ΠΟΤΑΜΟΥ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΛΟΪΖΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΑΡΩΝΙΑΔΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΒΟΥΝΟ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΓΕΡΑΚΑΡΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΔΙΑΚΟΦΤΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΜΠΟΣ ΠΟΤΑΜΟΥ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΡΑΒΑΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΣΤΡΙΣΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΟΥΣΟΥΝΑΡΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΚΡΥΟΝΕΡΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΛΙΑΝΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΛΟΓΟΘΕΤΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΜΗΤΑΤΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΕΡΛΕΓΚΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΕΤΡΟΥΝΙ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΙΤΣΙΝΑΔΕΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΛΑΤΕΙΑ ΑΜΜΟΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΟΤΑΜΟΣ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΠΡΟΓΚΙΟ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΤΡΙΦΥΛΛΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ, ΦΡΙΛΙΓΚΙΑΝΙΚΑ ΚΥΘΗΡΩΝ ΛΑΚΩΝΙΑΣ', Prefecture: 'Αττικής' },
    { PostalCode: '25001', Area: 'ΑΝΩ ΖΑΧΛΩΡΟΥ ΑΧΑΙΑΣ, ΑΝΩ ΛΟΥΣΟΙ ΑΧΑΙΑΣ, ΑΥΛΩΝΑΣ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΒΑΛΤΑ ΑΧΑΙΑΣ, ΒΙΛΙΒΙΝΑ ΑΧΑΙΑΣ, ΒΡΑΧΝΙΟ ΑΧΑΙΑΣ, ΒΡΥΣΑΡΙ (ΓΟΥΜΕΝΙΣΣΑ) ΑΧΑΙΑΣ, ΓΟΥΜΕΝΙΣΣΑ ΑΧΑΙΑΣ, ΔΙΓΕΛΑ ΑΧΑΙΑΣ, ΔΟΥΜΕΝΑ ΑΧΑΙΑΣ, ΔΡΟΣΑΤΟ ΑΧΑΙΑΣ, ΚΑΛΑΒΡΥΤΑ ΑΧΑΙΑΣ, ΚΑΛΛΙΦΩΝΙΟ ΑΧΑΙΑΣ, ΚΑΤΩ ΖΑΧΛΩΡΟΥ ΑΧΑΙΑΣ, ΚΑΤΩ ΛΟΥΣΟΙ ΑΧΑΙΑΣ, ΚΟΡΦΕΣ ΑΧΑΙΑΣ, ΚΟΥΤΕΛΗ ΑΧΑΙΑΣ, ΚΡΑΣΤΙΚΟΙ ΑΧΑΙΑΣ, ΛΕΥΚΗ ΣΙΓΟΥΝΙΟΥ ΑΧΑΙΑΣ, ΛΟΥΣΙΚΟ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΑΣ ΛΑΥΡΑΣ ΑΧΑΙΑΣ, ΜΟΝΗ ΜΕΓΑΛΟΥ ΣΠΗΛΑΙΟΥ ΑΧΑΙΑΣ, ΜΠΟΣΙ ΑΧΑΙΑΣ, ΠΕΤΣΑΚΟΙ ΑΧΑΙΑΣ, ΠΛΑΤΑΝΙΩΤΙΣΣΑ ΑΧΑΙΑΣ, ΠΡΙΟΛΙΘΟΣ ΑΧΑΙΑΣ, ΡΟΓΟΙ ΑΧΑΙΑΣ, ΣΙΓΟΥΝΙ ΑΧΑΙΑΣ, ΣΚΕΠΑΣΤΟ ΑΧΑΙΑΣ, ΣΟΥΒΑΡΔΟ ΑΧΑΙΑΣ, ΣΠΑΡΤΙΝΟΥ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25002', Area: 'ΑΛΙΣΣΟΣ ΑΧΑΙΑΣ, ΑΝΕΜΟΜΥΛΟΣ ΑΧΑΙΑΣ, ΒΡΑΧΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΓΙΑΛΟΣ ΑΧΑΙΑΣ, ΔΡΕΣΘΕΝΑ ΑΧΑΙΑΣ, ΘΕΡΙΑΝΟ ΑΧΑΙΑΣ, ΚΑΜΕΝΙΤΣΑ ΑΧΑΙΑΣ, ΚΑΜΙΝΙΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΑΛΙΣΣΟΣ ΑΧΑΙΑΣ, ΜΟΙΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΟΝΟΔΕΝΔΡΙ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΑΛΙΣΣΟΥ ΑΧΑΙΑΣ, ΠΡΟΦΗΤΗΣ ΕΛΙΣΣΑΙΟΣ ΑΧΑΙΑΣ, ΡΟΓΙΤΙΚΑ ΑΧΑΙΑΣ, ΤΣΟΥΚΑΛΑΙΙΚΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25003', Area: 'ΑΝΩ ΔΙΑΚΟΠΤΟ ΑΧΑΙΑΣ, ΔΙΑΚΟΠΤΟ ΑΧΑΙΑΣ, ΕΛΑΙΩΝΑΣ ΑΙΓΙΑΛΕΙΑΣ ΑΧΑΙΑΣ, ΖΑΧΛΩΡΙΤΙΚΑ ΑΧΑΙΑΣ, ΚΑΘΟΛΙΚΟ ΑΧΑΙΑΣ, ΚΑΛΥΒΙΤΗΣ ΑΧΑΙΑΣ, ΚΕΡΝΙΤΣΑ ΑΧΑΙΑΣ, ΛΟΦΟΣ ΑΧΑΙΑΣ, ΜΕΤΟΧΙ ΕΛΑΙΩΝΑ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΤΡΑΠΕΖΑΣ ΑΧΑΙΑΣ, ΠΟΥΝΤΑ ΑΧΑΙΑΣ, ΤΕΡΨΙΘΕΑ ΑΧΑΙΑΣ, ΤΡΑΠΕΖΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25004', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΣΕΙΡΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΣΕΙΡΩΝ ΑΧΑΙΑΣ, ΑΝΩ ΧΟΒΟΛΗ ΑΧΑΙΑΣ, ΒΕΣΙΝΙ ΑΧΑΙΑΣ, ΔΑΦΝΗ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΔΕΧΟΥΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΡΗΝΗ ΣΕΙΡΩΝ ΑΧΑΙΑΣ, ΜΟΥΡΙΑ ΑΡΚΑΔΙΑΣ, ΝΑΣΙΑ ΑΧΑΙΑΣ, ΝΕΟΣ ΠΑΟΣ ΑΧΑΙΑΣ, ΠΑΛΑΙΟΣ ΠΑΟΣ ΑΧΑΙΑΣ, ΠΑΟΣ ΑΧΑΙΑΣ, ΠΕΥΚΟ ΑΧΑΙΑΣ, ΠΟΤΑΜΙΑ ΑΧΑΙΑΣ, ΠΟΥΡΝΑΡΙΑ ΑΡΚΑΔΙΑΣ, ΣΕΙΡΕΣ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25006', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΑΓΡΙΔΙ ΠΕΡΙΣΤΕΡΑΣ ΑΧΑΙΑΣ, ΑΚΡΑΤΑ ΑΧΑΙΑΣ, ΑΜΠΕΛΟΣ ΑΧΑΙΑΣ, ΑΝΩ ΜΕΣΟΡΡΟΥΓΙ ΑΧΑΙΑΣ, ΒΑΛΙΜΗ ΑΧΑΙΑΣ, ΒΟΥΝΑΚΙ ΑΧΑΙΑΣ, ΓΚΟΥΜΑΙΙΚΑ ΑΧΑΙΑΣ, ΖΑΡΟΥΧΛΑ ΑΧΑΙΑΣ, ΚΡΑΘΙΟ ΑΧΑΙΑΣ, ΜΕΣΟΡΡΟΥΓΙ ΑΧΑΙΑΣ, ΠΑΛΑΙΟΣΤΑΦΙΔΑ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΠΟΡΟΒΙΤΣΑΣ ΑΧΑΙΑΣ, ΠΕΡΙΣΤΕΡΑ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΠΟΡΟΒΙΤΣΑ ΑΧΑΙΑΣ, ΠΟΤΑΜΙΤΙΚΟΣ ΓΙΑΛΟΣ ΑΧΑΙΑΣ, ΠΥΡΓΟΣ ΑΧΑΙΑΣ, ΣΟΛΟΣ ΑΧΑΙΑΣ, ΣΥΛΙΒΑΙΝΙΩΤΙΚΑ ΑΧΑΙΑΣ, ΦΟΥΡΝΟΙ ΑΧΑΙΑΣ, ΧΑΛΚΙΑΝΙΚΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25007', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΦΙΛΙΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΣΚΟΤΑΝΗΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΑΜΥΓΔΑΛΙΑ ΑΧΑΙΑΣ, ΑΝΩ ΚΛΕΙΤΟΡΙΑ ΑΧΑΙΑΣ, ΑΡΜΠΟΥΝΑ ΑΧΑΙΑΣ, ΒΑΛΤΟΣ ΑΧΑΙΑΣ, ΓΛΑΣΤΡΑ ΑΧΑΙΑΣ, ΔΡΥΜΟΣ ΑΧΑΙΑΣ, ΕΛΑΤΟΦΥΤΟ ΑΧΑΙΑΣ, ΖΑΡΕΛΙΑ ΑΧΑΙΑΣ, ΖΕΥΓΟΛΑΤΕΙΟ ΑΧΑΙΑΣ, ΚΑΛΑΜΑΚΙ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΚΑΛΛΙΘΕΑ ΚΛΕΙΤΟΡΙΑΣ ΑΧΑΙΑΣ, ΚΑΛΥΒΙΑ ΑΧΑΙΑΣ, ΚΑΣΤΕΛΛΙ ΑΧΑΙΑΣ, ΚΑΣΤΡΙΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΔΡΥΜΟΣ ΑΧΑΙΑΣ, ΚΕΡΑΣΙΑ ΛΕΧΟΥΡΙΟΥ ΑΧΑΙΑΣ, ΚΕΡΑΣΙΑ ΛΥΚΟΥΡΙΑΣ ΑΧΑΙΑΣ, ΚΛΕΙΤΟΡΙΑ ΑΧΑΙΑΣ, ΚΛΕΙΤΩΡΑΣ ΑΧΑΙΑΣ, ΚΡΙΝΟΦΥΤΑ ΑΧΑΙΑΣ, ΛΕΥΚΑΣΙΟ ΑΧΑΙΑΣ, ΛΥΚΟΥΡΙΑ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΑΘΑΝΑΣΙΟΥ ΑΧΑΙΑΣ, ΠΑΓΚΡΑΤΑΙΙΚΑ ΚΑΛΥΒΙΑ ΑΧΑΙΑΣ, ΠΑΓΚΡΑΤΙ ΑΧΑΙΑΣ, ΠΑΛΑΙΟΚΑΤΟΥΝΑ ΚΑΛΑΒΡΥΤΩΝ ΑΧΑΙΑΣ, ΠΛΑΝΗΤΕΡΟ ΑΧΑΙΑΣ, ΣΕΛΛΑ ΑΧΑΙΑΣ, ΣΚΟΤΑΝΗ ΑΧΑΙΑΣ, ΣΠΗΛΙΑ ΑΧΑΙΑΣ, ΣΤΕΝΟ ΑΧΑΙΑΣ, ΤΟΥΡΛΑΔΑ ΑΧΑΙΑΣ, ΦΙΛΙΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25008', Area: 'ΑΓΙΑ ΕΛΕΟΥΣΑ ΑΧΑΙΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΠΕΤΡΩΤΟΥ ΑΧΑΙΑΣ, ΑΓΡΙΛΙΑ ΑΧΑΙΑΣ, ΑΝΩ ΜΑΖΑΡΑΚΙ ΑΧΑΙΑΣ, ΑΝΩ ΣΤΑΡΟΧΩΡΙ ΑΧΑΙΑΣ, ΑΝΩ ΧΡΥΣΟΠΗΓΗ ΑΧΑΙΑΣ, ΒΑΣΙΛΙΚΟ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΒΕΤΑΙΙΚΑ ΑΧΑΙΑΣ, ΓΑΛΑΝΑΙΙΚΑ ΑΧΑΙΑΣ ΑΧΑΙΑΣ, ΓΚΑΝΕΙΚΑ ΑΧΑΙΑΣ ΑΧΑΙΑΣ, ΓΟΛΕΜΙ ΛΕΟΝΤΙΟΥ ΑΧΑΙΑΣ, ΔΑΦΝΟΥΛΑ ΑΧΑΙΑΣ, ΔΕΜΕΣΤΙΧΑ ΑΧΑΙΑΣ, ΕΛΛΗΝΙΚΟ ΑΧΑΙΑΣ, ΖΩΓΑ ΑΧΑΙΑΣ, ΘΩΜΕΙΚΑ ΑΧΑΙΑΣ, ΙΣΩΜΑ ΑΧΑΙΑΣ, ΚΑΛΑΝΙΣΤΡΑ ΑΧΑΙΑΣ, ΚΑΛΑΝΟΣ ΑΧΑΙΑΣ, ΚΑΛΟΥΣΙ ΑΧΑΙΑΣ, ΚΑΤΑΡΡΑΚΤΗΣ ΑΧΑΙΑΣ, ΚΑΤΣΑΙΤΕΙΚΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΜΑΖΑΡΑΚΙ ΑΧΑΙΑΣ, ΚΑΤΩ ΠΛΑΤΑΝΟΒΡΥΣΗ ΑΧΑΙΑΣ, ΚΑΤΩ ΣΤΑΡΟΧΩΡΙ ΑΧΑΙΑΣ, ΚΟΙΜΗΣΗ ΑΧΑΙΑΣ, ΚΟΥΜΑΡΗΣ ΕΛΛΗΝΙΚΟΥ ΑΧΑΙΑΣ, ΚΟΥΝΑΒΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΥΔΩΝΙΕΣ ΒΑΣΙΛΙΚΟΥ ΑΧΑΙΑΣ, ΚΥΔΩΝΙΕΣ ΧΑΛΑΝΔΡΙΤΣΑΣ ΑΧΑΙΑΣ, ΚΩΜΗ ΑΧΑΙΑΣ, ΛΑΚΚΩΜΑΤΑ ΑΧΑΙΑΣ, ΛΕΟΝΤΙΟ ΑΧΑΙΑΣ, ΜΑΣΤΟΡΑΙΙΚΑ ΣΤΑΜΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΙΡΑΛΙ ΑΧΑΙΑΣ, ΜΙΤΟΠΟΛΗ ΑΧΑΙΑΣ, ΜΙΧΑΛΕΙΚΑ ΑΧΑΙΑΣ, ΜΙΧΑΣ ΑΧΑΙΑΣ, ΝΕΟ ΚΟΜΠΗΓΑΔΙ ΑΧΑΙΑΣ, ΝΕΟΧΩΡΙΟ ΕΛΛΗΝΙΚΟΥ ΑΧΑΙΑΣ, ΟΒΡΥΟΚΑΜΠΟΣ ΑΧΑΙΑΣ, ΠΛΑΤΑΝΟΒΡΥΣΗ ΑΧΑΙΑΣ, ΠΛΑΤΑΝΟΣ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΠΡΕΒΕΔΟΣ ΑΧΑΙΑΣ, ΡΟΔΙΑ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΣΟΥΒΑΛΙΩΤΕΙΚΑ ΑΧΑΙΑΣ, ΣΤΑΡΟΧΩΡΙ ΑΧΑΙΑΣ, ΣΤΕΡΝΑ ΑΧΑΙΑΣ, ΣΤΕΦΑΝΗ ΑΧΑΙΑΣ, ΤΡΟΥΣΑ ΑΧΑΙΑΣ, ΤΣΑΠΟΥΡΝΙΑ ΑΧΑΙΑΣ, ΦΑΡΑΙ ΑΧΑΙΑΣ, ΧΑΛΑΝΔΡΙΤΣΑ ΑΧΑΙΑΣ, ΧΡΥΣΑΥΓΗ ΑΧΑΙΑΣ, ΧΡΥΣΟΠΗΓΗ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25009', Area: 'ΖΗΡΙΑ ΑΧΑΙΑΣ, ΚΑΜΑΡΕΣ ΑΧΑΙΑΣ, ΛΑΜΠΙΡΙ ΑΧΑΙΑΣ, ΜΠΟΥΚΑ ΑΧΑΙΑΣ, ΝΕΟΣ ΕΡΙΝΕΟΣ ΑΧΑΙΑΣ, ΠΕΥΚΑ ΚΑΜΑΡΩΝ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25010', Area: 'ΑΙΓΕΙΡΑ ΑΧΑΙΑΣ, ΑΙΓΕΣ ΑΧΑΙΑΣ, ΑΛΜΥΡΟΣ ΑΧΑΙΑΣ, ΑΜΠΕΛΟΚΗΠΟΙ ΑΧΑΙΑΣ, ΒΕΛΑ ΑΧΑΙΑΣ, ΕΞΟΧΗ ΑΧΑΙΑΣ, ΚΑΣΑΝΕΒΑ ΑΧΑΙΑΣ, ΛΑΜΠΙΝΟΣ ΑΧΑΙΑΣ, ΜΟΝΑΣΤΗΡΙ ΑΧΑΙΑΣ, ΟΑΣΗ ΑΧΑΙΑΣ, ΠΕΡΙΘΩΡΙΟ ΑΧΑΙΑΣ, ΠΙΜΠΑΙΙΚΑ ΑΧΑΙΑΣ, ΣΕΛΙΑΝΑ ΑΧΑΙΑΣ, ΣΙΝΕΒΡΟ ΑΧΑΙΑΣ, ΧΡΥΣΑΝΘΙΟ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25014', Area: 'ΑΝΩ ΠΟΤΑΜΙΑ ΑΧΑΙΑΣ, ΒΟΥΤΣΙΜΟΣ ΑΧΑΙΑΣ, ΚΑΛΑΜΙΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΠΟΤΑΜΙΑ ΑΧΑΙΑΣ, ΚΟΚΚΙΝΙΕΣ ΑΧΑΙΑΣ, ΚΟΡΙΝΘΙΑΚΟ ΜΠΑΛΚΟΝΙ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΠΛΑΤΑΝΟΥ ΑΧΑΙΑΣ, ΠΛΑΤΑΝΟΣ ΑΙΓΙΟΥ ΑΧΑΙΑΣ, ΤΣΙΒΛΟΣ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25015', Area: 'ΑΒΡΑΜΙ ΑΧΑΙΑΣ, ΑΓΙΑ ΒΑΡΒΑΡΑ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΑΛΕΝΤΖΙΟΥ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΛΕΠΟΧΩΡΙΟΥ ΑΧΑΙΑΣ, ΑΓΡΑΠΙΔΙΕΣ ΑΧΑΙΑΣ, ΑΛΕΠΟΧΩΡΙ ΑΧΑΙΑΣ, ΑΣΤΕΡΙ ΑΧΑΙΑΣ, ΒΕΛΙΜΑΧΙ ΑΧΑΙΑΣ, ΓΑΛΑΡΟ ΑΧΑΙΑΣ, ΓΟΛΕΜΙ ΑΧΑΙΑΣ, ΔΡΟΣΙΑ ΑΧΑΙΑΣ, ΕΡΥΜΑΝΘΕΙΑ ΑΧΑΙΑΣ, ΚΑΛΕΝΤΖΙ ΑΧΑΙΑΣ, ΚΑΛΦΑΣ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΚΑΡΔΑΣΙ ΑΧΑΙΑΣ, ΚΑΡΠΕΤΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΑΓΙΑ ΜΑΡΙΝΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΔΡΟΣΙΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΜΑΣΤΡΑΝΤΩΝΙΟ ΑΧΑΙΑΣ, ΚΟΥΜΠΕΡΙ ΑΧΑΙΑΣ, ΚΡΙΘΑΡΑΚΙΑ ΑΧΑΙΑΣ, ΚΥΠΑΡΙΣΣΙ ΑΧΑΙΑΣ, ΜΑΝΕΣΙ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΜΑΣΟΥΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΑΣΤΡΑΝΤΩΝΗΣ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΩΝ ΠΑΝΤΩΝ ΑΧΑΙΑΣ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΝΟΤΕΝΩΝ ΑΧΑΙΑΣ, ΜΠΑΝΤΣΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΠΑΡΑΚΕΣ ΑΧΑΙΑΣ, ΞΗΡΟΧΩΡΙ ΑΧΑΙΑΣ, ΠΑΝΟΥΣΑΙΙΚΑ ΑΧΑΙΑΣ, ΠΗΓΑΔΙΑ ΣΚΙΑΔΑ ΑΧΑΙΑΣ, ΠΤΕΡΗ ΔΡΟΣΙΑΣ ΑΧΑΙΑΣ, ΡΑΧΗ ΣΤΑΥΡΟΔΡΟΜΙΟΥ ΑΧΑΙΑΣ, ΡΟΥΠΑΚΙΑ ΑΧΑΙΑΣ, ΣΚΙΑΔΑΣ ΑΧΑΙΑΣ, ΣΚΟΥΡΑ ΑΧΑΙΑΣ, ΣΠΑΡΤΙΑ ΑΧΑΙΑΣ, ΣΤΑΥΡΟΔΡΟΜΙ ΑΧΑΙΑΣ, ΤΟΣΚΕΣ ΑΧΑΙΑΣ, ΧΙΟΝΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25100', Area: 'ΑΓΙΑ ΑΝΝΑ ΚΟΥΝΙΝΑΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΗΛΙΑΣ ΔΑΦΝΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΚΕΡΥΝΕΙΑΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΜΑΥΡΙΚΙΟΥ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΙΓΙΟΥ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΑΙΓΙΟΥ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΑΧΑΙΑΣ, ΑΙΓΙΟ ΑΧΑΙΑΣ, ΑΛΣΟΣ ΑΧΑΙΑΣ, ΑΝΩ ΔΟΥΚΑΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΑΝΩ ΖΗΡΙΑ ΑΧΑΙΑΣ, ΑΝΩ ΜΑΥΡΙΚΙ ΑΧΑΙΑΣ, ΑΝΩ ΣΑΛΜΕΝΙΚΟ ΑΧΑΙΑΣ, ΑΡΡΑΒΩΝΙΤΣΑ ΑΧΑΙΑΣ, ΑΧΛΑΔΙΑ ΑΧΑΙΑΣ, ΒΑΛΙΜΙΤΙΚΑ ΑΧΑΙΑΣ, ΒΕΡΙΝΟ ΑΧΑΙΑΣ, ΒΟΤΕΝΗ ΑΧΑΙΑΣ, ΒΟΥΝΟΠΥΡΓΟΣ ΑΧΑΙΑΣ, ΓΚΡΑΙΚΑ ΑΧΑΙΑΣ, ΓΡΗΓΟΡΗ ΑΧΑΙΑΣ, ΔΑΜΑΚΙΝΙ ΑΧΑΙΑΣ, ΔΑΦΝΕΣ ΑΧΑΙΑΣ, ΔΕΡΒΕΝΙ ΑΧΑΙΑΣ, ΔΗΜΗΤΡΟΠΟΥΛΟ ΑΧΑΙΑΣ, ΔΙΓΕΛΙΩΤΙΚΑ ΑΧΑΙΑΣ, ΔΟΥΚΑΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΕΛΙΚΗ ΑΧΑΙΑΣ, ΕΠΤΑΠΙΤΤΑ ΑΧΑΙΑΣ, ΚΑΛΑΝΤΕΡΙ ΑΧΑΙΑΣ, ΚΑΤΩ ΜΑΥΡΙΚΙ ΑΧΑΙΑΣ, ΚΑΤΩ ΠΤΕΡΗ ΑΧΑΙΑΣ, ΚΑΤΩ ΣΑΛΜΕΝΙΚΟ ΑΧΑΙΑΣ, ΚΕΡΥΝΕΙΑ ΑΧΑΙΑΣ, ΚΟΥΛΟΥΡΑ ΑΧΑΙΑΣ, ΚΟΥΜΑΡΗ ΑΧΑΙΑΣ, ΚΟΥΝΙΝΑ ΑΧΑΙΑΣ, ΚΡΗΝΗ ΑΙΓΙΟΥ ΑΧΑΙΑΣ, ΛΑΚΚΑ ΑΙΓΙΑΛΕΙΑΣ ΑΧΑΙΑΣ, ΛΑΚΚΑ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΛΟΓΓΟΣ ΑΧΑΙΑΣ, ΜΑΓΕΙΡΑΣ ΑΧΑΙΑΣ, ΜΑΜΟΥΣΙΑ ΑΧΑΙΑΣ, ΜΕΛΙΣΣΙΑ ΑΧΑΙΑΣ, ΜΕΡΤΙΔΙ ΑΧΑΙΑΣ, ΜΙΚΡΟΝΙ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΑΣ ΕΛΕΟΥΣΑΣ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΙΩΑΝΝΟΥ ΘΕΟΛΟΓΟΥ ΑΧΑΙΑΣ, ΜΟΝΗ ΠΑΜΜΕΓΙΣΤΩΝ ΤΑΞΙΑΡΧΩΝ ΑΧΑΙΑΣ, ΜΟΝΗ ΠΕΠΕΛΕΝΙΤΣΗΣ ΑΧΑΙΑΣ, ΜΠΟΥΦΟΥΣΚΙΑ ΑΧΑΙΑΣ, ΜΥΡΟΒΡΥΣΗ ΑΧΑΙΑΣ, ΝΕΑ ΚΕΡΥΝΕΙΑ ΑΧΑΙΑΣ, ΝΕΟ ΣΕΛΜΕΝΙΚΟ ΑΧΑΙΑΣ, ΝΕΡΑΤΖΙΕΣ ΑΧΑΙΑΣ, ΝΙΚΟΛΑΙΙΚΑ ΑΧΑΙΑΣ, ΠΑΡΑΣΚΕΥΗ ΑΧΑΙΑΣ, ΠΕΛΕΚΙΣΤΡΑ ΑΧΑΙΑΣ, ΠΕΤΡΟΒΟΥΝΙ ΑΧΑΙΑΣ, ΠΤΕΡΗ ΑΙΓΙΑΛΕΙΑΣ ΑΧΑΙΑΣ, ΠΥΡΓΑΚΙ ΑΧΑΙΑΣ, ΡΙΖΟΜΥΛΟΣ ΑΧΑΙΑΣ, ΡΟΔΙΑ ΑΙΓΙΑΛΕΙΑΣ ΑΧΑΙΑΣ, ΡΟΔΟΔΑΦΝΗ ΑΧΑΙΑΣ, ΣΕΛΙΑΝΙΤΙΚΑ ΑΧΑΙΑΣ, ΣΕΛΙΝΟΥΣ ΑΧΑΙΑΣ, ΣΕΛΛΙ ΑΧΑΙΑΣ, ΣΤΑΥΡΙΑ ΑΧΑΙΑΣ, ΣΥΝΑΝΙΑ ΑΧΑΙΑΣ, ΣΩΤΗΡΑΣ ΑΙΓΙΟΥ ΑΧΑΙΑΣ, ΤΕΜΕΝΗ ΑΧΑΙΑΣ, ΤΟΥΜΠΑ ΑΧΑΙΑΣ, ΦΤΕΡΗ (ΠΤΕΡΗ ΑΙΓΙΑΛΕΙΑΣ) ΑΧΑΙΑΣ, ΦΩΝΗΣΚΑΡΙΑ ΑΧΑΙΑΣ, ΧΑΝΤΖΗ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '25200', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΑΧΑΙΑΣ, ΑΓΙΟΒΛΑΣΙΤΙΚΑ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΣΑΝΤΟΜΕΡΙΟΥ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΣΠΑΤΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΣΠΑΤΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΧΑΙΑΣ ΑΧΑΙΑΣ, ΑΛΥΚΕΣ ΑΧΑΙΑΣ, ΑΜΠΕΛΑΚΙΑ ΑΧΑΙΑΣ, ΑΝΩ ΑΧΑΙΑ ΑΧΑΙΑΣ, ΑΝΩ ΣΟΥΔΕΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΑΠΙΔΕΩΝΑ ΑΧΑΙΑΣ, ΑΡΑΞΟΣ ΑΧΑΙΑΣ, ΑΡΛΑ ΑΧΑΙΑΣ, ΑΥΓΕΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΑΧΑΙΚΟ ΑΧΑΙΑΣ, ΒΕΣΚΟΥΚΑΙΙΚΑ ΑΧΑΙΑΣ, ΒΥΘΟΥΛΚΑ ΑΧΑΙΑΣ, ΓΙΟΥΛΑΙΙΚΑ ΑΧΑΙΑΣ, ΓΟΜΟΣΤΟ ΑΧΑΙΑΣ, ΕΛΑΙΟΧΩΡΙ ΑΧΑΙΑΣ, ΖΑΜΠΕΤΕΙΚΑ ΑΧΑΙΑΣ, ΖΗΣΙΜΑΙΙΚΑ ΑΧΑΙΑΣ, ΘΩΜΑΙΙΚΑ ΑΓ.ΝΙΚΟΛΑΟΥ ΚΡΑΛΗΣ ΑΧΑΙΑΣ, ΘΩΜΑΙΙΚΑ ΑΧΑΙΑΣ, ΙΟΝΙΚΗ ΑΚΤΗ ΑΧΑΙΑΣ, ΚΑΓΚΑΔΙ ΑΧΑΙΑΣ, ΚΑΛΑΜΑΚΙ ΑΓ.ΝΙΚΟΛΑΟΥ ΑΧΑΙΑΣ, ΚΑΛΑΜΑΚΙ ΛΙΜΝΟΧΩΡΙΟΥ ΑΧΑΙΑΣ, ΚΑΠΕΛΗ ΑΧΑΙΑΣ, ΚΑΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΑΡΑΜΕΣΙΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΑΡΝΑΡΙ ΑΧΑΙΑΣ, ΚΑΡΥΑ ΠΕΤΡΟΧΩΡΙΟΥ ΑΧΑΙΑΣ, ΚΑΤΣΑΙΤΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΑΧΑΙΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΛΙΜΝΟΧΩΡΙ ΑΧΑΙΑΣ, ΚΕΦΑΛΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΟΥΝΕΛΑΙΙΚΑ ΑΧΑΙΑΣ, ΚΡΙΝΟΣ ΑΧΑΙΑΣ, ΛΑΚΚΟΠΕΤΡΑ ΑΧΑΙΑΣ, ΛΑΜΠΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΛΕΥΚΟΣ ΑΧΑΙΑΣ, ΛΙΜΑΝΑΚΙ ΑΧΑΙΑΣ, ΛΙΜΝΟΧΩΡΙ ΑΧΑΙΑΣ, ΛΟΓΟΘΕΤΗΣ ΑΧΑΙΑΣ, ΛΟΥΣΙΚΑ ΑΧΑΙΑΣ, ΜΑΖΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΑΝΕΤΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΑΤΑΡΑΓΚΑ ΑΧΑΙΑΣ, ΜΑΥΡΟ ΟΡΟΣ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΑΣ ΜΑΡΙΝΑΣ ΜΑΡΙΤΣΗΣ ΑΧΑΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΣΠΑΤΩΝ ΑΧΑΙΑΣ, ΜΥΡΤΟΣ ΑΧΑΙΑΣ, ΝΕΟΧΩΡΙ ΧΑΡΑΥΓΗΣ ΑΧΑΙΑΣ, ΝΙΦΟΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΠΑΛΙΑ ΠΕΡΙΣΤΕΡΑ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΚΑΛΑΜΑΚΙΟΥ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΚΑΤΩ ΑΧΑΙΑΣ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΝΙΦΟΡΑΙΙΚΩΝ ΑΧΑΙΑΣ, ΠΕΤΑ ΑΧΑΙΑΣ, ΠΕΤΡΟΧΩΡΙ ΑΧΑΙΑΣ, ΠΗΓΑΔΙΑ ΧΑΡΑΥΓΗΣ ΑΧΑΙΑΣ, ΠΙΣΩ ΣΥΚΕΑ ΑΧΑΙΑΣ, ΠΟΙΜΕΝΟΧΩΡΙ ΑΧΑΙΑΣ, ΠΟΛΥΛΟΦΟ ΑΧΑΙΑΣ, ΠΟΡΤΕΣ ΑΧΑΙΑΣ, ΠΟΥΡΝΑΡΙ ΑΧΑΙΑΣ, ΡΑΧΗ ΑΧΑΙΑΣ, ΡΙΟΛΟΣ ΑΧΑΙΑΣ, ΣΑΝΤΟΜΕΡΙ ΑΧΑΙΑΣ, ΣΠΑΛΙΑΡΑΙΙΚΑ ΑΧΑΙΑΣ, ΣΠΑΝΑΙΙΚΑ ΑΧΑΙΑΣ, ΣΤΕΝΑΙΙΤΙΚΑ ΑΧΑΙΑΣ, ΤΑΞΙΑΡΧΕΣ ΑΧΑΙΑΣ, ΤΣΑΚΩΝΙΚΑ ΑΧΑΙΑΣ, ΥΨΗΛΗ ΡΑΧΗ ΑΧΑΙΑΣ, ΦΛΟΚΑ ΑΧΑΙΑΣ, ΦΡΑΓΚΑ ΑΧΑΙΑΣ, ΦΩΣΤΑΙΝΑ ΑΧΑΙΑΣ, ΧΑΙΚΑΛΙ ΑΧΑΙΑΣ, ΧΑΡΑΥΓΗ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26221', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26222', Area: 'ΜΠΑΛΑΣ ΑΧΑΙΑΣ, ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26223', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26224', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26225', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26226', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26331', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26332', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26333', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26334', Area: 'ΟΒΡΙΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26335', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26336', Area: 'ΠΑΤΡΕΩΝ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26441', Area: 'ΑΓΥΙΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26442', Area: 'ΠΑΤΡΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26443', Area: 'ΜΠΟΖΑΙΙΤΙΚΑ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '26500', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΠΛΑΤΑΝΟΒΡΥΣΗΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΣΟΥΛΙΟΥ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΣΑΡΑΒΑΛΙΟΥ ΑΧΑΙΑΣ, ΑΝΩ ΚΑΛΛΙΘΕΑ ΑΧΑΙΑΣ, ΒΕΡΝΑΡΔΑΙΙΚΑ ΑΧΑΙΑΣ, ΓΚΟΤΣΑΙΙΚΑ ΑΧΑΙΑΣ, ΔΕΜΕΝΙΚΑ ΑΧΑΙΑΣ, ΕΛΙΚΙΣΤΡΑ ΑΧΑΙΑΣ, ΖΑΡΚΑΛΗ ΑΧΑΙΑΣ, ΘΕΑ ΑΧΑΙΑΣ, ΚΑΛΛΙΘΕΑ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΚΑΡΥΑ ΕΛΙΚΙΣΤΡΑΣ ΑΧΑΙΑΣ, ΚΑΤΩ ΑΡΑΧΩΒΙΤΙΚΑ ΑΧΑΙΑΣ, ΚΑΤΩ ΡΟΔΙΝΗ ΑΧΑΙΑΣ, ΚΕΦΑΛΟΒΡΥΣΟ ΣΑΡΑΒΑΛΙΟΥ ΑΧΑΙΑΣ, ΚΕΦΑΛΟΒΡΥΣΟ ΣΟΥΛΙΟΥ ΑΧΑΙΑΣ, ΚΡΗΝΗ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΚΡΥΣΤΑΛΛΟΒΡΥΣΗ ΑΧΑΙΑΣ, ΚΥΑΝΗ ΑΚΤΗ ΑΧΑΙΑΣ, ΛΥΓΙΕΣ ΑΧΑΙΑΣ, ΜΑΥΡΟΜΑΝΔΗΛΑ ΑΧΑΙΑΣ, ΜΙΝΤΖΑΙΙΚΑ ΑΧΑΙΑΣ, ΜΙΝΤΙΛΟΓΛΙ ΑΧΑΙΑΣ, ΜΟΙΡΑ ΑΧΑΙΑΣ, ΜΟΝΗ ΟΜΠΛΟΥ ΑΧΑΙΑΣ, ΜΟΝΟΔΕΝΔΡΙ ΚΡΗΝΗΣ ΑΧΑΙΑΣ, ΜΠΑΚΑΡΙ ΑΧΑΙΑΣ, ΝΕΟ ΣΟΥΛΙ ΑΧΑΙΑΣ, ΠΑΝΑΓΙΑ ΑΧΑΙΑΣ, ΠΑΡΑΛΙΑ ΑΧΑΙΑΣ, ΠΑΥΛΟΚΑΣΤΡΟ ΑΧΑΙΑΣ, ΠΕΤΡΩΤΟ ΑΧΑΙΑΣ, ΠΗΓΗ ΑΧΑΙΑΣ, ΠΟΥΡΝΑΡΟΚΑΣΤΡΟ ΑΧΑΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΣΟΥΛΙΟΥ ΑΧΑΙΑΣ, ΡΥΑΚΙ ΑΧΑΙΑΣ, ΡΩΜΑΝΟΣ ΑΧΑΙΑΣ, ΣΑΡΑΒΑΛΙ ΑΧΑΙΑΣ, ΣΑΡΚΟΥΝΑΣ ΑΧΑΙΑΣ, ΧΑΤΖΗΛΙΑΚΟ ΑΧΑΙΑΣ', Prefecture: 'Αχαΐας' },
    { PostalCode: '32001', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΟΡΩΝΕΙΑΣ ΒΟΙΩΤΙΑΣ, ΑΛΙΑΡΤΟΣ ΒΟΙΩΤΙΑΣ, ΕΥΑΓΓΕΛΙΣΤΡΙΑ ΒΟΙΩΤΙΑΣ, ΜΑΖΙ ΒΟΙΩΤΙΑΣ, ΜΟΝΗ ΕΥΑΓΓΕΛΙΣΤΡΙΑΣ ΒΟΙΩΤΙΑΣ, ΠΕΤΡΑ ΒΟΙΩΤΙΑΣ, ΣΩΛΗΝΑΡΙ ΒΟΙΩΤΙΑΣ, ΥΨΗΛΑΝΤΗΣ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32002', Area: 'ΑΣΚΡΑΙΑ ΒΟΙΩΤΙΑΣ, ΒΑΓΙΑ ΒΟΙΩΤΙΑΣ, ΘΕΣΠΙΕΣ ΒΟΙΩΤΙΑΣ, ΛΕΟΝΤΑΡΙ ΒΟΙΩΤΙΑΣ, ΜΑΥΡΟΜΜΑΤΙ ΒΟΙΩΤΙΑΣ, ΝΕΟΧΩΡΙ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32003', Area: 'ΑΣΠΡΑ ΣΠΙΤΙΑ ΒΟΙΩΤΙΑΣ, ΠΑΡΑΛΙΑ ΔΙΣΤΟΜΟΥ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32004', Area: 'ΑΡΑΧΩΒΑ ΒΟΙΩΤΙΑΣ, ΖΕΜΕΝΟ ΒΟΙΩΤΙΑΣ, ΚΑΛΥΒΙΑ ΛΙΒΑΔΙΟΥ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32005', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΔΙΣΤΟΜΟΥ ΒΟΙΩΤΙΑΣ, ΔΙΣΤΟΜΟ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32006', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΥΡΙΑΚΙΟΥ ΒΟΙΩΤΙΑΣ, ΚΑΡΥΩΤΙ ΒΟΙΩΤΙΑΣ, ΚΥΡΙΑΚΙ ΒΟΙΩΤΙΑΣ, ΠΑΝΑΓΙΑ ΚΑΛΑΜΙΩΤΙΣΣΑ ΒΟΙΩΤΙΑΣ, ΤΑΡΣΟΣ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32009', Area: 'ΑΓΙΟΣ ΘΩΜΑΣ ΕΥΒΟΙΑΣ, ΚΛΕΙΔΙ ΕΥΒΟΙΑΣ, ΟΙΝΟΗ ΕΥΒΟΙΑΣ, ΠΑΝΑΓΙΑ ΤΑΝΑΓΡΑΣ ΕΥΒΟΙΑΣ, ΣΧΗΜΑΤΑΡΙ ΕΥΒΟΙΑΣ, ΤΑΝΑΓΡΑ ΕΥΒΟΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32100', Area: 'ΑΓΙΑ ΑΝΝΑ ΒΟΙΩΤΙΑΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΑΛΑΛΚΟΜΕΝΩΝ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΛΙΒΑΔΕΙΑΣ ΒΟΙΩΤΙΑΣ, ΑΚΟΝΤΙΟ ΒΟΙΩΤΙΑΣ, ΑΛΑΛΚΟΜΕΝΕΣ ΒΟΙΩΤΙΑΣ, ΑΝΑΛΗΨΗ ΒΟΙΩΤΙΑΣ, ΕΛΙΚΩΝΑΣ ΒΟΙΩΤΙΑΣ, ΖΕΛΙΤΣΑ ΒΟΙΩΤΙΑΣ, ΘΟΥΡΙΟ ΒΟΙΩΤΙΑΣ, ΚΟΡΩΝΕΙΑ ΒΟΙΩΤΙΑΣ, ΛΑΦΥΣΤΙ ΒΟΙΩΤΙΑΣ, ΛΙΒΑΔΕΙΑ ΒΟΙΩΤΙΑΣ, ΜΑΥΡΟΓΕΙΑ ΒΟΙΩΤΙΑΣ, ΜΑΥΡΟΝΕΡΙ ΒΟΙΩΤΙΑΣ, ΜΟΝΗ ΟΣΙΟΥ ΛΟΥΚΑ ΒΟΙΩΤΙΑΣ, ΠΕΡΑΧΩΡΙ ΒΟΙΩΤΙΑΣ, ΠΡΟΣΗΛΙΟ ΒΟΙΩΤΙΑΣ, ΡΩΜΑΙΙΚΟ ΒΟΙΩΤΙΑΣ, ΣΤΑΘΜΟΣ ΔΑΥΛΕΙΑΣ ΒΟΙΩΤΙΑΣ, ΣΤΑΘΜΟΣ ΛΙΒΑΔΕΙΑΣ ΒΟΙΩΤΙΑΣ, ΣΤΕΙΡΙΟ ΒΟΙΩΤΙΑΣ, ΤΖΙΜΑΙΙΚΑ ΒΟΙΩΤΙΑΣ, ΤΣΟΥΚΑΛΑΔΕΣ ΒΟΙΩΤΙΑΣ, ΧΑΙΡΩΝΕΙΑ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32200', Area: 'ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΝΕΚΤΑΡΙΟΣ ΘΗΒΩΝ ΒΟΙΩΤΙΑΣ, ΑΚΡΑΙΦΝΙΟ ΒΟΙΩΤΙΑΣ, ΑΜΠΕΛΟΧΩΡΙ ΒΟΙΩΤΙΑΣ, ΑΡΜΑ ΒΟΙΩΤΙΑΣ, ΑΣΩΠΙΑ ΒΟΙΩΤΙΑΣ, ΔΑΦΝΗ ΒΟΙΩΤΙΑΣ, ΔΑΦΝΟΥΛΑ ΒΟΙΩΤΙΑΣ, ΕΛΕΩΝΑΣ  (ΕΛΑΙΩΝΑΣ) ΒΟΙΩΤΙΑΣ, ΘΗΒΑ ΒΟΙΩΤΙΑΣ, ΚΑΛΑΜΑΚΙ ΒΟΙΩΤΙΑΣ, ΚΑΛΛΙΘΕΑ ΒΟΙΩΤΙΑΣ, ΚΑΠΑΡΕΛΛΙ ΒΟΙΩΤΙΑΣ, ΚΑΣΤΡΙ ΒΟΙΩΤΙΑΣ, ΚΑΣΤΡΟ ΒΟΙΩΤΙΑΣ, ΚΟΚΚΙΝΟ ΒΟΙΩΤΙΑΣ, ΛΕΥΚΤΡΑ ΒΟΙΩΤΙΑΣ, ΛΟΥΤΟΥΦΙ ΒΟΙΩΤΙΑΣ, ΜΕΛΙΣΣΟΧΩΡΙ ΒΟΙΩΤΙΑΣ, ΜΟΝΗ ΑΓΙΑΣ ΤΡΙΑΔΑΣ ΒΟΙΩΤΙΑΣ, ΜΟΝΗ ΜΕΤΑΜΟΡΦΩΣΗΣ ΣΩΤΗΡΟΣ ΒΟΙΩΤΙΑΣ, ΜΟΝΗ ΠΕΛΑΓΙΑΣ ΒΟΙΩΤΙΑΣ, ΜΟΥΡΙΚΙ ΒΟΙΩΤΙΑΣ, ΝΕΟΧΩΡΑΚΙ ΒΟΙΩΤΙΑΣ, ΠΑΝΑΚΤΟ ΒΟΙΩΤΙΑΣ, ΠΑΡΑΛΙΑ ΛΙΒΑΔΟΣΤΡΑΣ ΒΟΙΩΤΙΑΣ, ΠΛΑΤΑΙΕΣ ΒΟΙΩΤΙΑΣ, ΠΛΑΤΑΝΑΚΙΑ ΒΟΙΩΤΙΑΣ, ΠΡΑΣΙΝΟ ΒΟΙΩΤΙΑΣ, ΠΥΛΗ ΒΟΙΩΤΙΑΣ, ΣΚΟΥΡΤΑ ΒΟΙΩΤΙΑΣ, ΣΚΡΟΠΟΝΕΡΙΑ ΒΟΙΩΤΙΑΣ, ΣΤΕΦΑΝΗ ΒΟΙΩΤΙΑΣ, ΣΤΡΟΒΙΚΙ ΒΟΙΩΤΙΑΣ, ΥΠΑΤΟ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '32300', Area: 'ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΒΟΙΩΤΙΑΣ, ΑΓΙΟΣ ΣΠΥΡΙΔΩΝΑΣ ΒΟΙΩΤΙΑΣ, ΔΙΟΝΥΣΟΣ ΒΟΙΩΤΙΑΣ, ΚΑΡΥΑ ΒΟΙΩΤΙΑΣ, ΛΟΥΤΣΙ ΒΟΙΩΤΙΑΣ, ΟΡΧΟΜΕΝΟΣ ΒΟΙΩΤΙΑΣ, ΠΑΥΛΟΣ ΒΟΙΩΤΙΑΣ, ΠΥΡΓΟΣ ΒΟΙΩΤΙΑΣ', Prefecture: 'Βοιωτίας' },
    { PostalCode: '51030', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΓΡΕΒΕΝΩΝ, ΚΙΒΩΤΟΣ ΓΡΕΒΕΝΩΝ, ΚΛΗΜΑΤΑΚΙ ΓΡΕΒΕΝΩΝ, ΚΟΚΚΙΝΙΑ ΓΡΕΒΕΝΩΝ, ΚΡΙΘΑΡΑΚΙΑ ΓΡΕΒΕΝΩΝ, ΜΗΛΕΑ ΓΡΕΒΕΝΩΝ, ΝΕΑ ΤΡΑΠΕΖΟΥΣΑ ΓΡΕΒΕΝΩΝ, ΠΟΛΥΔΕΝΔΡΙ ΓΡΕΒΕΝΩΝ, ΤΑΞΙΑΡΧΗΣ ΓΡΕΒΕΝΩΝ', Prefecture: 'Γρεβενών' },
    { PostalCode: '51100', Area: 'ΑΓΑΛΑΙΟΙ ΓΡΕΒΕΝΩΝ, ΑΓΑΠΗ ΓΡΕΒΕΝΩΝ, ΑΓΙΑ ΤΡΙΑΔΑ ΓΡΕΒΕΝΩΝ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΓΡΕΒΕΝΩΝ, ΑΓΙΟΣ ΚΟΣΜΑΣ ΓΡΕΒΕΝΩΝ, ΑΗΔΟΝΙΑ ΓΡΕΒΕΝΩΝ, ΑΙΜΙΛΙΑΝΟΣ ΓΡΕΒΕΝΩΝ, ΑΜΥΓΔΑΛΙΕΣ ΓΡΕΒΕΝΩΝ, ΑΝΑΒΡΥΤΑ ΓΡΕΒΕΝΩΝ, ΑΝΘΡΑΚΙΑ ΓΡΕΒΕΝΩΝ, ΑΝΟΙΞΗ ΓΡΕΒΕΝΩΝ, ΑΝΩ ΕΚΚΛΗΣΙΑ ΓΡΕΒΕΝΩΝ, ΑΣΠΡΟΚΑΜΠΟΣ ΓΡΕΒΕΝΩΝ, ΒΑΡΗΣ ΓΡΕΒΕΝΩΝ, ΒΑΤΟΛΑΚΚΟΣ ΓΡΕΒΕΝΩΝ, ΓΕΩΡΓΙΤΣΑ ΓΡΕΒΕΝΩΝ, ΓΡΕΒΕΝΑ ΓΡΕΒΕΝΩΝ, ΔΑΣΑΚΙ ΓΡΕΒΕΝΩΝ, ΔΕΣΠΟΤΗΣ ΓΡΕΒΕΝΩΝ, ΔΗΜΗΤΡΑ ΓΡΕΒΕΝΩΝ, ΔΙΠΟΡΟ ΓΡΕΒΕΝΩΝ, ΔΟΞΑΡΑΣ ΓΡΕΒΕΝΩΝ, ΕΚΚΛΗΣΙΑ ΓΡΕΒΕΝΩΝ, ΕΛΑΤΟΣ ΓΡΕΒΕΝΩΝ, ΕΛΕΥΘΕΡΟ ΓΡΕΒΕΝΩΝ, ΕΛΕΥΘΕΡΟΧΩΡΙ ΓΡΕΒΕΝΩΝ, ΕΛΕΥΘΕΡΩΝ ΠΡΟΣΦΥΓΩΝ ΓΡΕΒΕΝΩΝ, ΕΞΑΡΧΟΣ ΓΡΕΒΕΝΩΝ, ΖΑΚΑΣ ΓΡΕΒΕΝΩΝ, ΙΤΕΑ ΓΡΕΒΕΝΩΝ, ΚΑΛΑΜΙΤΣΙ ΓΡΕΒΕΝΩΝ, ΚΑΛΗΡΑΧΗ ΓΡΕΒΕΝΩΝ, ΚΑΛΛΟΝΗ ΓΡΕΒΕΝΩΝ, ΚΑΛΟΧΙ ΓΡΕΒΕΝΩΝ, ΚΑΡΠΕΡΟ ΓΡΕΒΕΝΩΝ, ΚΑΣΤΡΟ ΓΡΕΒΕΝΩΝ, ΚΑΤΑΚΑΛΗ ΓΡΕΒΕΝΩΝ, ΚΕΝΤΡΟ ΓΡΕΒΕΝΩΝ, ΚΝΙΔΗ ΓΡΕΒΕΝΩΝ, ΚΟΣΜΑΤΙ ΓΡΕΒΕΝΩΝ, ΚΡΥΑ ΒΡΥΣΗ ΓΡΕΒΕΝΩΝ, ΚΥΔΩΝΙΕΣ ΓΡΕΒΕΝΩΝ, ΚΥΠΑΡΙΣΣΙ ΓΡΕΒΕΝΩΝ, ΚΥΡΑΚΑΛΗ ΓΡΕΒΕΝΩΝ, ΛΕΙΨΙΟ ΓΡΕΒΕΝΩΝ, ΛΟΧΜΗ ΓΡΕΒΕΝΩΝ, ΜΑΥΡΑΝΑΙΟΙ ΓΡΕΒΕΝΩΝ, ΜΑΥΡΟΝΟΡΟΣ ΓΡΕΒΕΝΩΝ, ΜΕΓΑΛΟ ΣΕΙΡΗΝΙ ΓΡΕΒΕΝΩΝ, ΜΕΓΑΡΟ ΓΡΕΒΕΝΩΝ, ΜΕΛΙΣΣΙ ΓΡΕΒΕΝΩΝ, ΜΕΣΟΛΑΚΚΟΣ ΓΡΕΒΕΝΩΝ, ΜΙΚΡΟ ΣΕΙΡΗΝΙΟ ΓΡΕΒΕΝΩΝ, ΜΙΚΡΟΚΛΕΙΣΟΥΡΑ ΓΡΕΒΕΝΩΝ, ΜΟΝΑΧΙΤΙ ΓΡΕΒΕΝΩΝ, ΜΥΡΣΙΝΑ ΓΡΕΒΕΝΩΝ, ΝΕΟΧΩΡΙ ΓΡΕΒΕΝΩΝ, ΝΗΣΙ ΓΡΕΒΕΝΩΝ, ΟΡΟΠΕΔΙΟ ΓΡΕΒΕΝΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΓΡΕΒΕΝΩΝ, ΠΑΡΟΡΕΙΟ ΓΡΕΒΕΝΩΝ, ΠΕΡΙΒΟΛΑΚΙ ΓΡΕΒΕΝΩΝ, ΠΙΣΤΙΚΟ ΓΡΕΒΕΝΩΝ, ΠΟΝΤΙΝΗ ΓΡΕΒΕΝΩΝ, ΠΟΡΟΣ ΓΡΕΒΕΝΩΝ, ΠΥΛΩΡΟΙ ΓΡΕΒΕΝΩΝ, ΡΟΔΙΑ ΓΡΕΒΕΝΩΝ, ΣΑΡΑΚΗΝΑ ΓΡΕΒΕΝΩΝ, ΣΠΗΛΑΙΟ ΓΡΕΒΕΝΩΝ, ΣΤΑΥΡΟΣ ΓΡΕΒΕΝΩΝ, ΣΥΔΕΝΔΡΟ ΓΡΕΒΕΝΩΝ, ΤΡΙΚΟΚΚΙΑ ΓΡΕΒΕΝΩΝ, ΤΡΙΚΟΡΦΟ ΓΡΕΒΕΝΩΝ, ΤΡΙΚΩΜΟ ΓΡΕΒΕΝΩΝ, ΤΡΙΦΥΛΛΙ ΓΡΕΒΕΝΩΝ, ΦΕΛΛΙΟ ΓΡΕΒΕΝΩΝ', Prefecture: 'Γρεβενών' },
    { PostalCode: '51200', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΔΕΣΚΑΤΗΣ ΓΡΕΒΕΝΩΝ, ΓΗΛΟΦΟΣ ΓΡΕΒΕΝΩΝ, ΔΑΣΟΧΩΡΙ ΓΡΕΒΕΝΩΝ, ΔΕΣΚΑΤΗ ΓΡΕΒΕΝΩΝ, ΔΙΑΣΕΛΛΑΚΙ ΓΡΕΒΕΝΩΝ, ΜΟΝΗ ΑΓIOY ΝΙΚΑΝΟΡΟΣ ΓΡΕΒΕΝΩΝ, ΠΑΛΙΟΥΡΙΑ ΓΡΕΒΕΝΩΝ, ΠΑΝΑΓΙΑ ΓΡΕΒΕΝΩΝ, ΠΑΡΑΣΚΕΥΗ ΓΡΕΒΕΝΩΝ, ΣΚΟΥΜΤΣΙΑ ΓΡΕΒΕΝΩΝ', Prefecture: 'Γρεβενών' },
    { PostalCode: '66031', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥH ΔΡΑΜΑΣ, ΚΑΛΑΜΠΑΚΙ ΔΡΑΜΑΣ, ΚΑΛΑΜΩΝ ΔΡΑΜΑΣ, ΝΕΡΟΦΡΑΚΤΗΣ ΔΡΑΜΑΣ, ΦΤΕΛΙΑ ΔΡΑΜΑΣ', Prefecture: 'Δράμας' },
    { PostalCode: '66032', Area: 'ΑΓΟΡA ΔΡΑΜΑΣ, ΑΙΓΕΙΡΟΣ ΔΡΑΜΑΣ, ΑΝΩ ΚΕΦΑΛΑΡΙ ΔΡΑΜΑΣ, ΒΑΘΥΣΠΗΛΟ ΔΡΑΜΑΣ, ΒΑΘΥΧΩΡΙ ΔΡΑΜΑΣ, ΕΥΡΥΠΕΔΟ ΔΡΑΜΑΣ, ΚΑΤΩ ΚΕΦΑΛΑΡΙ ΔΡΑΜΑΣ, ΚΥΡΙΑ ΔΡΑΜΑΣ, ΠΕΡΙΣΤΕΡΙΑ ΔΡΑΜΑΣ, ΠΗΓΑΔΙΑ ΔΡΑΜΑΣ, ΥΨΗΛΟ ΔΡΑΜΑΣ', Prefecture: 'Δράμας' },
    { PostalCode: '66033', Area: 'ΑΓΙΟΣ ΜΗΝΑΣ ΔΡΑΜΑΣ, ΑΧΛΑΔΙΑ ΔΡΑΜΑΣ, ΑΧΛΑΔΟΜΗΛΕΑ ΔΡΑΜΑΣ, ΒΑΘΥΤΟΠΟΣ ΔΡΑΜΑΣ, ΒΩΛΑΞ ΔΡΑΜΑΣ, ΓΡΑΝΙΤΗΣ ΔΡΑΜΑΣ, ΔΑΣΩΤΟ ΔΡΑΜΑΣ, ΔΕΛΤΑ ΔΡΑΜΑΣ, ΕΞΟΧΗ ΔΡΑΜΑΣ, ΚΑΤΑΣΚΗΝΩΣΕΙΣ ΔΡΑΜΑΣ, ΚΑΤΑΦΥΤΟ ΔΡΑΜΑΣ, ΚΑΤΩ ΒΡΟΝΤΟΥ ΔΡΑΜΑΣ, ΚΑΤΩ ΝΕΥΡΟΚΟΠΙ ΔΡΑΜΑΣ, ΛΕΥΚΟΓΕΙΑ ΔΡΑΜΑΣ, ΜΙΚΡΟΚΛΕΙΣΟΥΡΑ ΔΡΑΜΑΣ, ΜΙΚΡΟΜΗΛΕΑ ΔΡΑΜΑΣ, ΟΧΥΡΟ ΔΡΑΜΑΣ, ΠΑΓΟΝΕΡΙ ΔΡΑΜΑΣ, ΠΕΡΑΣΜΑ ΔΡΑΜΑΣ, ΠΕΡΙΘΩΡΙ ΔΡΑΜΑΣ, ΠΕΡΙΧΩΡΑ ΔΡΑΜΑΣ, ΠΟΤΑΜΟΙ ΔΡΑΜΑΣ, ΧΡΥΣΟΚΕΦΑΛΟΣ ΔΡΑΜΑΣ', Prefecture: 'Δράμας' },
    { PostalCode: '66035', Area: 'ΑΗΔΟΝΟΚΑΣΤΡΟ ΔΡΑΜΑΣ, ΔΙΠΟΤΑΜΑ ΔΡΑΜΑΣ, ΔΡΥΜΙΑ ΞΑΝΘΗΣ, ΘΟΛΟΣ ΔΡΑΜΑΣ, ΚΑΠΝΟΦΥΤΟ ΔΡΑΜΑΣ, ΚΑΡΠΟΦΟΡΟ ΔΡΑΜΑΣ, ΚΑΤΩ ΘΟΛΟΣ ΔΡΑΜΑΣ, ΚΡΗΝΗ ΔΡΑΜΑΣ, ΜΕΣΟΧΩΡΙ ΔΡΑΜΑΣ, ΜΥΡΤΟΥΣΑ ΞΑΝΘΗΣ, ΞΑΓΝΑΝΤΟ ΔΡΑΜΑΣ, ΠΑΡΑΝΕΣΤΙ ΔΡΑΜΑΣ, ΠΑΣΧΑΛΙΑ ΞΑΝΘΗΣ, ΠΕΡΙΒΛΕΠΤΟ ΔΡΑΜΑΣ, ΠΟΛΥΝΕΡΙΟ ΔΡΑΜΑΣ, ΠΟΛΥΣΥΚΟ ΔΡΑΜΑΣ, ΠΡΑΣΙΝΑΔΑ ΔΡΑΜΑΣ, ΣΙΛΛΗ ΔΡΑΜΑΣ, ΣΤΕΡΝΑ ΔΡΑΜΑΣ, ΤΕΜΕΝΟΣ ΔΡΑΜΑΣ, ΧΑΛΕΠΙ ΞΑΝΘΗΣ', Prefecture: 'Δράμας' },
    { PostalCode: '66100', Area: 'ΑΔΡΙΑΝΗ ΔΡΑΜΑΣ, ΑΜΠΕΛΑΚΙΑ ΔΡΑΜΑΣ, ΑΡΓΥΡΟΥΠΟΛH ΔΡΑΜΑΣ, ΒΑΘΥΛΑΚΚΟΣ ΔΡΑΜΑΣ, ΔΡΑΜΑ ΔΡΑΜΑΣ, ΚΑΛΛΙΦΥΤΟΣ ΔΡΑΜΑΣ, ΚΑΛΟΣ ΑΓΡΟΣ ΔΡΑΜΑΣ, ΚΟΥΔΟΥΝΙΑ ΔΡΑΜΑΣ, ΜΑΚΡΥΠΛΑΓΙΟ ΔΡΑΜΑΣ, ΜΑΥΡΟΒΑΤΟΣ ΔΡΑΜΑΣ, ΜΕΓΑΛΟΚΑΜΠΟΣ ΔΡΑΜΑΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΣΩΤΗΡΟΣ ΔΡΑΜΑΣ, ΜΙΚΡΟΚΑΜΠΟΣ ΔΡΑΜΑΣ, ΜΙΚΡΟΧΩΡΙ ΔΡΑΜΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΔΡΑΜΑΣ, ΜΥΛΟΠΟΤΑΜΟΣ ΔΡΑΜΑΣ, ΝEΑ ΣΕΒΑΣΤΕΙΑ ΔΡΑΜΑΣ, ΝΙΚΟΤΣΑΡΑ ΔΡΑΜΑΣ, ΞΗΡΟΠΟΤΑΜΟΣ ΔΡΑΜΑΣ, ΠΑΝΟΡΑΜΑ ΚΑΛΛΙΦΥΤΟΥ ΔΡΑΜΑΣ, ΠΕΤΡΟΥΣΑ ΔΡΑΜΑΣ, ΠΟΛΥΚΑΡΠΟΣ ΔΡΑΜΑΣ, ΠΥΡΓΟΙ ΔΡΑΜΑΣ, ΣΙΤΑΓΡΟΙ ΔΡΑΜΑΣ, ΣΤΑΥΡΟΣ ΔΡΑΜΑΣ, ΤΑΞΙΑΡΧΕΣ ΔΡΑΜΑΣ, ΧΩΡΙΣΤΗ ΔΡΑΜΑΣ', Prefecture: 'Δράμας' },
    { PostalCode: '66200', Area: 'ΑΓΓΙΤΗΣ ΔΡΑΜΑΣ, ΑΝΘΟΧΩΡΙ ΔΡΑΜΑΣ, ΓΡΑΜΜΕΝΗ ΔΡΑΜΑΣ, ΚΑΛΗ ΒΡΥΣΗ ΔΡΑΜΑΣ, ΚΑΛΛΙΘΕΑ ΔΡΑΜΑΣ, ΚΟΚΚΙΝΟΓΕΙΑ ΔΡΑΜΑΣ, ΠΗΓΕΣ ΔΡΑΜΑΣ, ΠΡΟΣΟΤΣΑΝΗ ΔΡΑΜΑΣ, ΧΑΡΙΤΩΜΕΝΗ ΔΡΑΜΑΣ', Prefecture: 'Δράμας' },
    { PostalCode: '66300', Area: 'ΑΓΙΟΣ ΑΘAΝΑΣΙΟΣ ΔΡΑΜΑΣ, ΔΟΞΑΤΟ ΔΡΑΜΑΣ', Prefecture: 'Δράμας' },
    { PostalCode: '85001', Area: 'ΓΛΑΡΟΣ ΑΓΑΘΟΝΗΣΙΟΥ ΣΑΜΟΥ, ΚΟΥΝΕΛΙ ΝΗΣΟΣ ΣΑΜΟΥ, ΛΕΙΨΟΙ ΔΩΔ/ΝΗΣΟΥ, ΜΕΓΑΛΟ ΧΩΡΙΟ ΑΓΑΘΟΝΗΣΙΟΥ ΣΑΜΟΥ, ΜΙΚΡΟ ΧΩΡΙΟ ΑΓΑΘΟΝΗΣΙΟΥ ΣΑΜΟΥ, ΝΕΡΑ ΑΓΑΘΟΝΗΣΙΟΥ ΣΑΜΟΥ, ΦΡΑΓΚΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΨΑΘΟΝΗΣΙ ΣΑΜΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85002', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΤΗΛΟΥ ΔΩΔ/ΝΗΣΟΥ, ΑΝΤΙΤΗΛΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΓΑΙΔΑΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΛΙΒΑΔΙΑ ΤΗΛΟΥ ΔΩΔ/ΝΗΣΟΥ, ΜΕΓΑΛΟ ΧΩΡΙΟ ΤΗΛΟΥ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85003', Area: 'ΑΓΑΘΟΝΗΣΙΟΥ ΔΩΔΕΚΑΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85100', Area: 'ΑΜΜΟΥΔΕΣ ΔΩΔ/ΝΗΣΟΥ, ΒΡΥΣΙΑ ΔΩΔ/ΝΗΣΟΥ, ΚΟΣΚΙΝΟΥ ΔΩΔ/ΝΗΣΟΥ, ΚΡΗΤΙΚΑ ΔΩΔ/ΝΗΣΟΥ, ΜΑΚΡΥ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΡΟΔΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΓΟΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΤΣΑΙΡΙ ΔΩΔ/ΝΗΣΟΥ, ΦΑΛΗΡΑΚΙ ΔΩΔ/ΝΗΣΟΥ, ΧΗΝΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΨΙΝΘΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85101', Area: 'ΙΑΛΥΣΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85102', Area: 'ΑΡΧΑΓΓΕΛΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΛΑΘΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΟΛΥΜΠΙΑ ΔΩΔ/ΝΗΣΟΥ, ΜΑΛΩΝ ΔΩΔ/ΝΗΣΟΥ, ΜΑΣΑΡΗ ΔΩΔ/ΝΗΣΟΥ, ΜΟΝΑΣΤΗΡΙ Η ΤΣΑΜΠΙΚΑ ΔΩΔ/ΝΗΣΟΥ, ΣΤΕΓΝΑ ΔΩΔ/ΝΗΣΟΥ, ΧΑΡΑΚΙ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85103', Area: 'ΑΦΑΝΤΟΥ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85104', Area: 'ΚΡΕΜΑΣΤΗ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85105', Area: 'ΚΑΛΥΘΙΕΣ ΔΩΔ/ΝΗΣΟΥ, ΛΑΔΙΚΟ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85106', Area: 'ΑΓΙΑ ΕΛΕΟΥΣΑ ΔΩΔ/ΝΗΣΟΥ, ΑΕΡΟΛΙΜΕΝΑΣ ΔΩΔ/ΝΗΣΟΥ, ΑΠΟΛΛΩΝΑ ΔΩΔ/ΝΗΣΟΥ, ΑΡΧΙΠΟΛΗ ΔΩΔ/ΝΗΣΟΥ, ΒΑΓΙΕΣ ΔΩΔ/ΝΗΣΟΥ, ΔΑΜΑΤΡΙΑ ΔΩΔ/ΝΗΣΟΥ, ΔΙΜΥΛΙΑ ΔΩΔ/ΝΗΣΟΥ, ΕΛΕΟΥΣΑ ΔΩΔ/ΝΗΣΟΥ, ΕΠΑΝΩ ΚΑΛΑΜΩΝΑΣ ΔΩΔ/ΝΗΣΟΥ, ΘΕΟΛΟΓΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΛΑΒΑΡΔΑ ΔΩΔ/ΝΗΣΟΥ, ΚΑΠΙΟ ΔΩΔ/ΝΗΣΟΥ, ΚΑΤΩ ΚΑΛΑΜΩΝ ΔΩΔ/ΝΗΣΟΥ, ΜΑΡΙΤΣΑ ΔΩΔ/ΝΗΣΟΥ, ΠΑΡΑΔΕΙΣΙ ΔΩΔ/ΝΗΣΟΥ, ΠΑΣΤΙΔΑ ΔΩΔ/ΝΗΣΟΥ, ΠΛΑΤΑΝΙΑ  ΔΩΔ/ΝΗΣΟΥ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΔΩΔ/ΝΗΣΟΥ, ΣΑΛΑΚΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΟΡΩΝΗ ΔΩΔ/ΝΗΣΟΥ, ΦΑΝΕΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85107', Area: 'ΒΛΙΧΑ ΔΩΔ/ΝΗΣΟΥ, ΛΙΝΔΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΕΥΚΟΙ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85108', Area: 'ΑΓΙΟΣ ΙΣΙΔΩΡΟΣ ΔΩΔ/ΝΗΣΟΥ, ΕΜΠΩΝΑΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΜΕΙΡΟΣ ΣΚΑΛΑ ΔΩΔ/ΝΗΣΟΥ, ΚΡΗΤΗΝΙΑ ΔΩΔ/ΝΗΣΟΥ, ΛΑΚΚΙ ΡΟΔΟΥ ΔΩΔ/ΝΗΣΟΥ, ΜΑΝΔΡΙΚΟ ΔΩΔ/ΝΗΣΟΥ, ΜΟΝΟΛΙΘΟΣ  ΔΩΔ/ΝΗΣΟΥ, ΣΙΑΝΑ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85109', Area: 'ΑΓΙΟΣ ΠΑΥΛΟΣ ΚΑΤΤΑΒΙΑΣ ΔΩΔ/ΝΗΣΟΥ, ΑΠΟΛΑΚΚΙΑ ΔΩΔ/ΝΗΣΟΥ, ΑΡΝΙΘΑ ΔΩΔ/ΝΗΣΟΥ, ΑΣΚΛΗΠΙΕΙΟ ΔΩΔ/ΝΗΣΟΥ, ΒΑΤΙ ΔΩΔ/ΝΗΣΟΥ, ΓΕΝΝΑΔΙΟ ΔΩΔ/ΝΗΣΟΥ, ΙΣΤΡΙΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΤΤΑΒΙΑ ΔΩΔ/ΝΗΣΟΥ, ΚΙΟΤΑΡΙ ΔΩΔ/ΝΗΣΟΥ, ΛΑΕΡΜΑ ΔΩΔ/ΝΗΣΟΥ, ΛΑΡΔΟΣ ΔΩΔ/ΝΗΣΟΥ, ΛΑΧΑΝΙΑ ΔΩΔ/ΝΗΣΟΥ, ΜΑΧΑΙΡΙΑ ΔΩΔ/ΝΗΣΟΥ, ΜΕΣΑΝΑΓΡΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΛΗΜΜΥΡΙ ΔΩΔ/ΝΗΣΟΥ, ΠΡΑΣΟΝΗΣΙ ΔΩΔ/ΝΗΣΟΥ, ΠΡΟΦΙΛΙΑ ΔΩΔ/ΝΗΣΟΥ, ΠΥΛΩΝΑΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85110', Area: 'ΑΓΙΟΣ ΘΕΟΔΩΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΛΙΜΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΡΕΒΑΤΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΕΛΟΝΗΣΙ ΧΑΛΚΗΣ ΔΩΔ/ΝΗΣΟΥ, ΤΡΑΓΟΥΣΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΧΑΛΚΗ ΔΩΔ/ΝΗΣΟΥ, ΧΩΡΙΟ ΧΑΛΚΗΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85111', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΓΡΙΕΛΑΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΣΤΕΛΟΡΙΖΟ (ΜΕΓΙΣΤΗ) ΔΩΔ/ΝΗΣΟΥ, ΜΑΥΡΟ ΠΟΙΝΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΟΛΥΦΑΔΟΣ ΔΥΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΟΛΥΦΑΔΟΣ ΕΝΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΡΩ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΤΡΟΓΓΥΛΗ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΨΩΜΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85200', Area: 'ΑΡΓΙΝΩΝΤΑ ΔΩΔ/ΝΗΣΟΥ, ΑΡΓΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΡΜΕΟΣ ΔΩΔ/ΝΗΣΟΥ, ΒΑΘΥ ΚΑΛΥΜΝΟΥ ΔΩΔ/ΝΗΣΟΥ, ΒΛΥΧΑΔΙΑ ΔΩΔ/ΝΗΣΟΥ, ΒΟΘΥΝΟΙ ΔΩΔ/ΝΗΣΟΥ, ΕΜΠΟΡΕΙΟΣ ΔΩΔ/ΝΗΣΟΥ, ΙΜΙΑ - ΛΙΜΝΙΑ ΔΥΟ (ΝΗΣΟΣ) ΔΩΔ/ΝΗΣΟΥ, ΙΜΙΑ - ΛΙΜΝΙΑ ΕΝΑ (ΝΗΣΟΣ) ΔΩΔ/ΝΗΣΟΥ, ΚΑΛΟΛΙΜΝΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΛΥΜΝΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΜΑΡΙ ΔΩΔ/ΝΗΣΟΥ, ΚΑΣΤΕΛΙ ΔΩΔ/ΝΗΣΟΥ, ΜΑΣΟΥΡΙ ΔΩΔ/ΝΗΣΟΥ, ΜΑΥΡΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΥΡΟΠΙΝΑΚΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΥΡΤΙΕΣ ΔΩΔ/ΝΗΣΟΥ, ΝΕΡΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΑΝΟΡΜΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΛΑΤΑΝΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΛΑΤΗ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΑΦΟΝΗΔΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΚΑΛΙΑ ΔΩΔ/ΝΗΣΟΥ, ΤΕΛΕΝΔΟΣ  ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΧΤΕΝΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΧΩΡΙΟ ΔΩΔ/ΝΗΣΟΥ, ΨΕΡΙΜΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85300', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΓΙΟΣ ΦΩΚΑΣ ΚΩ ΔΩΔ/ΝΗΣΟΥ, ΑΣΦΕΝΔΙΟΥ ΔΩΔ/ΝΗΣΟΥ, ΖΗΠΑΡΙ ΔΩΔ/ΝΗΣΟΥ, ΚΩΣ ΔΩΔ/ΝΗΣΟΥ, ΛΑΓΟΥΔΙ-ΖΙΑ ΔΩΔ/ΝΗΣΟΥ, ΛΙΝΟΠΟΤΗΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΡΜΑΡΙ ΔΩΔ/ΝΗΣΟΥ, ΠΥΛΙΟ ΔΩΔ/ΝΗΣΟΥ, ΣΥΜΠΕΝΤΡΟ-ΡΑΝΤΑΡ ΔΩΔ/ΝΗΣΟΥ, ΤΙΓΚΑΚΙ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85301', Area: 'ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΜΑΡΙ ΔΩΔ/ΝΗΣΟΥ, ΚΕΦΑΛΟΣ ΔΩΔ/ΝΗΣΟΥ, ΛΙΜΝΙΩΝΑ ΔΩΔ/ΝΗΣΟΥ, ΟΝΙΑ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85302', Area: 'ΑΝΤΙΜΑΧΕΙΑ ΔΩΔ/ΝΗΣΟΥ, ΑΤΜΑΝΙΟΥ ΔΩΔ/ΝΗΣΟΥ, ΚΑΜΠΟΣ ΚΩ ΔΩΔ/ΝΗΣΟΥ, ΚΑΡΔΑΜΑΙΝΑ ΔΩΔ/ΝΗΣΟΥ, ΜΑΣΤΙΧΑΡΙ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85303', Area: 'ΑΥΛΑΚΙ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΓΥΑΛΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΕΜΠΟΡΕΙΟΣ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΚΑΝΔΕΛΙΟΥΣΣΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΛΟΥΤΡΑ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΜΑΝΔΡΑΚΙ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΝΙΚΙΑ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΠΑΛΟΙ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΠΑΧΕΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΕΡΓΟΥΣΣΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΤΡΟΓΓΥΛΗ ΝΙΣΥΡΟΥ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85400', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΛΕΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΑΛΙΝΔΑ ΔΩΔ/ΝΗΣΟΥ, ΑΡΧΑΓΓΕΛΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΓΛΑΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΓΟΥΡΝΑ ΔΩΔ/ΝΗΣΟΥ, ΔΡΥΜΩΝΑΣ ΛΕΡΟΥ ΔΩΔ/ΝΗΣΟΥ, ΚΑΜΑΡΑ ΔΩΔ/ΝΗΣΟΥ, ΚΙΝΑΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΟΚΚΑΛΗ ΔΩΔ/ΝΗΣΟΥ, ΛΕΒΙΘΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΑΡΘΕΝΙ ΔΩΔ/ΝΗΣΟΥ, ΠΗΓΑΝΟΥΣΣΑ ΔΩΔ/ΝΗΣΟΥ, ΠΛΑΚΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΛΑΚΕΣ ΔΩΔ/ΝΗΣΟΥ, ΣΤΡΟΓΓΥΛΗ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΤΕΜΕΝΙΑ ΔΩΔ/ΝΗΣΟΥ, ΤΡΥΠΗΤΗ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΦΑΡΜΑΚΟΝΗΣΙ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85500', Area: 'ΑΓΚΑΘΟΝΗΣΙ ΔΩΔ/ΝΗΣΟΥ, ΑΓΡΕΛΟΥΣΣΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΝΥΔΡΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΡΚΟΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΛΟΒΟΛΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΟΜΑΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΚΡΟΝΗΣΙ ΠΑΤΜΟΥ ΔΩΔ/ΝΗΣΟΥ, ΝΕΡΑ ΠΑΤΜΟΥ ΔΩΔ/ΝΗΣΟΥ, ΠΑΤΜΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΚΑΛΑ ΠΑΤΜΟΥ ΔΩΔ/ΝΗΣΟΥ, ΣΤΡΟΓΓΥΛΟ ΠΑΤΜΟΥ ΔΩΔ/ΝΗΣΟΥ, ΤΡΑΓΟΝΗΣΙ ΔΩΔ/ΝΗΣΟΥ, ΧΙΛΙΟΜΟΔΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85600', Area: 'ΓΙΑΛΕΣΙΝΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΔΙΑΒΑΤΕΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΕΜΠΟΡΕΙΟΣ ΣΥΜΗΣ  (ΝΗΜΠΟΡΙΟΣ) ΔΩΔ/ΝΗΣΟΥ, ΚΟΥΛΟΥΝΔΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΡΑΘΟΥΝΤΑ ΣΥΜΗΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΡΜΑΡΑΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΝΙΜΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΞΙΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΑΝΟΡΜΙΤΗΣ ΣΥΜΗΣ ΔΩΔ/ΝΗΣΟΥ, ΠΕΔΙΟ ΣΥΜΗΣ ΔΩΔ/ΝΗΣΟΥ, ΣΕΣΚΛΙΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΥΜΗ ΔΩΔ/ΝΗΣΟΥ, ΧΟΝΔΡΟΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85700', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΦΙΑΡΤΗΣ ΔΩΔ/ΝΗΣΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΣΠΟΩΝ ΔΩΔ/ΝΗΣΟΥ, ΑΠΕΡΙΟ ΔΩΔ/ΝΗΣΟΥ, ΑΡΚΑΣΑ ΔΩΔ/ΝΗΣΟΥ, ΑΣΤΑΚΙΔΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΤΣΑΚΙΔΟΠΟΥΛΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΥΛΩΝΑ ΔΩΔ/ΝΗΣΟΥ, ΒΩΛΑΔΑ ΔΩΔ/ΝΗΣΟΥ, ΔΙΑΦΑΝΙΟ ΔΩΔ/ΝΗΣΟΥ, ΚΑΡΠΑΘΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΤΩ ΛΕΥΚΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΤΩΔΙΟ ΔΩΔ/ΝΗΣΟΥ, ΚΗΠΟΣ ΑΦΙΑΡΤΗ ΔΩΔ/ΝΗΣΟΥ, ΚΥΡΑ ΠΑΝΑΓΙΑ ΔΩΔ/ΝΗΣΟΥ, ΛΑΚΚΙ ΚΑΡΠΑΘΟΥ ΔΩΔ/ΝΗΣΟΥ, ΛΑΣΤΟΣ ΔΩΔ/ΝΗΣΟΥ, ΛΕΥΚΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΕΝΕΤΕΣ ΔΩΔ/ΝΗΣΟΥ, ΜΕΣΟΧΩΡΙ ΔΩΔ/ΝΗΣΟΥ, ΜΥΡΤΩΝΑΣ ΔΩΔ/ΝΗΣΟΥ, ΟΘΟΣ ΔΩΔ/ΝΗΣΟΥ, ΟΛΥΜΠΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΗΓΑΔΙΑ ΔΩΔ/ΝΗΣΟΥ, ΠΥΛΕΣ ΔΩΔ/ΝΗΣΟΥ, ΣΑΡΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΠΟΑ ΔΩΔ/ΝΗΣΟΥ, ΣΤΕΣ ΔΩΔ/ΝΗΣΟΥ, ΤΡΙΣΤΟΜΟ ΔΩΔ/ΝΗΣΟΥ, ΦΟΙΝΙΚΙΟ ΔΩΔ/ΝΗΣΟΥ, ΧΑΜΗΛΗ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85800', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΚΑΣΟΥ ΔΩΔ/ΝΗΣΟΥ, ΑΡΒΑΝΙΤΟΧΩΡΙ ΚΑΣΟΥ ΔΩΔ/ΝΗΣΟΥ, ΑΡΜΑΘΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΑΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΜΑΚΡΟΝΗΣΙ ΚΑΣΟΥ ΔΩΔ/ΝΗΣΟΥ, ΠΑΝΑΓΙΑ ΚΑΣΟΥ ΔΩΔ/ΝΗΣΟΥ, ΠΟΛΙΟ ΚΑΣΟΥ ΔΩΔ/ΝΗΣΟΥ, ΦΡΥ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '85900', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΑΝΑΛΗΨΗ ΔΩΔ/ΝΗΣΟΥ, ΑΣΤΥΠΑΛΑΙΑ ΔΩΔ/ΝΗΣΟΥ, ΑΥΓΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΒΑΘΥ ΑΣΤΥΠΑΛΑΙΑΣ ΔΩΔ/ΝΗΣΟΥ, ΓΛΥΝΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΖΑΦΟΡΑΣ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΟΥΝΟΥΠΟΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΚΟΥΤΣΟΜΥΤΙ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΛΙΒΑΔΙΑ ΑΣΤΥΠΑΛΑΙΑΣ ΔΩΔ/ΝΗΣΟΥ, ΜΕΣΟΝΗΣΙ ΔΩΔ/ΝΗΣΟΥ, ΟΦΙΔΟΥΣΣΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΛΑΚΙΔΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΠΟΝΤΙΚΟΥΣΑ ΔΩΔ/ΝΗΣΟΥ, ΣΤΕΦΑΝΙΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΣΥΡΝΑ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΦΩΚΙΟΝΗΣΙΑ ΔΩΔ/ΝΗΣΟΥ, ΧΟΝΔΡΟ ΝΗΣΟΣ ΔΩΔ/ΝΗΣΟΥ, ΧΟΝΔΡΟΝΗΣΙ ΔΩΔ/ΝΗΣΟΥ', Prefecture: 'Δωδεκανήσου' },
    { PostalCode: '68001', Area: 'ΝEΑ ΒΥΣΣΑ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68002', Area: 'ΑΛΩΝΙΑ ΕΒΡΟΥ, ΑΝΩ ΚΑΡΥΩΤΕΣ ΕΒΡΟΥ, ΑΝΩ ΜΕΡΙΑ ΕΒΡΟΥ, ΔΑΦΝΕΣ ΕΒΡΟΥ, ΘΕΡΜΑ ΕΒΡΟΥ, ΚΑΜΑΡΙΩΤΙΣΣΑ ΕΒΡΟΥ, ΚΑΣΤΕΛΙ ΕΒΡΟΥ, ΚΑΤΣΑΜΠΑΣ ΕΒΡΟΥ, ΚΑΤΩ ΚΑΡΥΩΤΕΣ ΕΒΡΟΥ, ΛΑΚΚΩΜΑ ΕΒΡΟΥ, ΜΑΚΡΥΛΙΕΣ ΕΒΡΟΥ, ΜΝΗΜΟΡΙΑ ΕΒΡΟΥ, ΜΠΑΞΕΔΕΣ ΕΒΡΟΥ, ΞΗΡΟΠΟΤΑΜΟΣ ΕΒΡΟΥ, ΠΑΛΑΙΟΠΟΛΗ ΕΒΡΟΥ, ΠΟΤΑΜΙΑ ΕΒΡΟΥ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΕΒΡΟΥ, ΡΕΜΠΟΥΤΣΑΔΙΚΑ ΕΒΡΟΥ, ΣΑΜΟΘΡΑΚΗ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68003', Area: 'ΛΑΓΥΝΑ ΕΒΡΟΥ, ΛΕΥΚΙΜΗ ΕΒΡΟΥ, ΛΥΡΑ ΕΒΡΟΥ, ΠΡΟΒΑΤΩΝΑΣ ΕΒΡΟΥ, ΤΥΧΕΡΟ ΕΒΡΟΥ, ΦΥΛΑΚΤΟ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68004', Area: 'ΑΜΟΡΙΟ ΕΒΡΟΥ, ΛΑΒΑΡΑ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68006', Area: 'ΑΜΜΟΒΟΥΝΟ ΕΒΡΟΥ, ΒΑΛΤΟΣ ΕΒΡΟΥ, ΓΑΛΗΝΗ ΕΒΡΟΥ, ΖΩΝΗ ΕΒΡΟΥ, ΘΕΡΑΠΕΙΟ ΕΒΡΟΥ, ΚΕΡΑΜΟΣ ΕΒΡΟΥ, ΚΟΜΑΡΑ ΕΒΡΟΥ, ΚΥΠΡΙΝΟΣ ΕΒΡΟΥ, ΜΕΓΑΛΗ ΔΟΞΙΠΑΡΑ ΕΒΡΟΥ, ΜΗΛΕΑ ΕΒΡΟΥ, ΜΙΚΡΑ ΔΟΞΙΠΑΡΑ ΕΒΡΟΥ, ΦΥΛΑΚΙΟ ΕΒΡΟΥ, ΧΑΝΔΡΑΣ ΕΒΡΟΥ, ΧΕΛΙΔΩΝΑΣ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68007', Area: 'ΑΡΖΟΣ ΕΒΡΟΥ, ΔΙΚΑΙΑ ΕΒΡΟΥ, ΔΙΛΟΦΟΣ ΕΒΡΟΥ, ΕΛΑΙΑ ΕΒΡΟΥ, ΚΑΝΑΔΑΣ ΕΒΡΟΥ, ΚΡΙΟΣ ΕΒΡΟΥ, ΜΑΡΑΣΙΑ ΕΒΡΟΥ, ΟΡΜΕΝΙΟ ΕΒΡΟΥ, ΠΑΛΛΗ ΕΒΡΟΥ, ΠΕΝΤΑΛΟΦΟΣ ΕΒΡΟΥ, ΠΕΤΡΩΤΑ ΕΒΡΟΥ, ΠΛΑΤΗ ΕΒΡΟΥ, ΠΤΕΛΕΑ ΕΒΡΟΥ, ΣΠΗΛΑΙΟ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68008', Area: 'ΚΑΣΤΑΝΙΕΣ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68010', Area: 'ΑΒΔΕΛΑ ΕΒΡΟΥ, ΑΛΕΠΟΧΩΡΙ ΕΒΡΟΥ, ΑΣΠΡΟΝΕΡΙ ΕΒΡΟΥ, ΒΡΥΣΗ ΕΒΡΟΥ, ΓΙΑΤΡΑΔΕΣ ΕΒΡΟΥ, ΔΟΞΑ ΕΒΡΟΥ, ΕΛΑΦΟΧΩΡΙ ΕΒΡΟΥ, ΛΑΔΗ ΕΒΡΟΥ, ΜΕΤΑΞΑΔΕΣ ΕΒΡΟΥ, ΠΑΛΙΟΥΡΙΟ ΕΒΡΟΥ, ΠΟΛΙΑ ΕΒΡΟΥ, ΣΑΥΡΑ ΕΒΡΟΥ, ΧΙΟΝΑΔΕΣ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68014', Area: 'ΡΙΖΙΑ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68100', Area: 'ΑΒΑΣ ΕΒΡΟΥ, ΑΓΝΑΝΤΙΑ ΕΒΡΟΥ, ΑΕΤΟΧΩΡΙ ΕΒΡΟΥ, ΑΛΕΞΑΝΔΡΟΥΠΟΛΗ ΕΒΡΟΥ, ΑΜΦΙΤΡΙΤΗ ΕΒΡΟΥ, ΑΝΘΕΙΑ ΕΒΡΟΥ, ΑΠΑΛΟΣ ΕΒΡΟΥ, ΑΡΙΣΤΗΝΟ ΕΒΡΟΥ, ΔΙΚΕΛΛΑ ΕΒΡΟΥ, ΔΩΡΙΚΟ ΕΒΡΟΥ, ΕΝΝΑΤΟ ΕΒΡΟΥ, ΚΟΙΜΗΣΗ ΘΕΟΤΟΚΟΥ ΕΒΡΟΥ, ΛΟΥΤΡΑ ΤΡΑΙΑΝΟΥΠΟΛΗΣ ΕΒΡΟΥ, ΛΟΥΤΡΟΣ ΕΒΡΟΥ, ΜΑΚΡΗ ΕΒΡΟΥ, ΜΕΣΗΜΒΡΙΑ ΕΒΡΟΥ, ΝΙΨΑ ΕΒΡΟΥ, ΠΑΛΑΓΙΑ ΕΒΡΟΥ, ΠΑΝΟΡΑΜΑ ΕΒΡΟΥ, ΠΑΡΑΛΙΑ ΔΙΚΕΛΛΩΝ ΕΒΡΟΥ, ΠΕΥΚΑ ΕΒΡΟΥ, ΠΛΑΚΑ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68200', Area: 'ΑΜΠΕΛΑΚΙΑ ΕΒΡΟΥ, ΚΑΒΥΛΗ ΕΒΡΟΥ, ΛΕΠΤΗ ΕΒΡΟΥ, ΝEΟ ΧΕΙΜΩΝΙΟ ΕΒΡΟΥ, ΝΕΟΣ ΠΥΡΓΟΣ ΕΒΡΟΥ, ΝΕΟΧΩΡΙ ΕΒΡΟΥ, ΟΡΕΣΤΙΑΔΑ ΕΒΡΟΥ, ΠΑΛΑΙΑ ΣΑΓΗΝΗ ΕΒΡΟΥ, ΠΑΤΑΓΗ ΕΒΡΟΥ, ΣΑΚΚΟΣ ΕΒΡΟΥ, ΣΤΕΡΝΑ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68300', Area: 'ΑΣΒΕΣΤΑΔΕΣ ΕΒΡΟΥ, ΑΣΗΜΕΝΙΟ ΕΒΡΟΥ, ΒΡΥΣΙΚΑ ΕΒΡΟΥ, ΔΙΔΥΜΟΤΕΙΧO ΕΒΡΟΥ, ΕΛΛΗΝΟΧΩΡΙ ΕΒΡΟΥ, ΕΥΓΕΝΙΚΟ ΕΒΡΟΥ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΕΒΡΟΥ, ΘΟΥΡΙΟ ΕΒΡΟΥ, ΘΥΡΕΑ ΕΒΡΟΥ, ΙΣΑΑΚΙΟ ΕΒΡΟΥ, ΚΑΡΩΤΗ ΕΒΡΟΥ, ΚΟΥΦΟΒΟΥΝΟ ΕΒΡΟΥ, ΚΥΑΝΗ ΕΒΡΟΥ, ΛΑΓΟΣ ΕΒΡΟΥ, ΜΑΝΗ ΕΒΡΟΥ, ΝΕΟΙ ΨΑΘΑΔΕΣ ΕΒΡΟΥ, ΠΟΙΜΕΝΙΚΟ ΕΒΡΟΥ, ΣΙΤΑΡΙΑ ΕΒΡΟΥ, ΣΙΤΟΧΩΡΙΟ ΕΒΡΟΥ, ΣΟΦΙΚΟ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68400', Area: 'ΑΓΡΙΑΝΗ ΕΒΡΟΥ, ΓΙΑΝΝΟΥΛΗ ΕΒΡΟΥ, ΔΑΔΙΑ ΕΒΡΟΥ, ΔΡΟΣΙΑ ΕΒΡΟΥ, ΚΟΡΝΟΦΩΛΙΑ ΕΒΡΟΥ, ΚΟΡΥΜΒΟΣ ΕΒΡΟΥ, ΚΟΤΡΩΝΙΑ ΕΒΡΟΥ, ΚΥΡΙΑΚΗ ΕΒΡΟΥ, ΛΥΚΩΦΟΣ ΕΒΡΟΥ, ΜΑΝΔΡΑ ΕΒΡΟΥ, ΜΑΥΡΟΚΛΗΣΙ ΕΒΡΟΥ, ΜΟΝΗ ΔΑΔΙΑΣ ΕΒΡΟΥ, ΜΟΝΗ ΚΟΡΝΟΦΩΛΙΑΣ ΕΒΡΟΥ, ΠΡΩΤΟΚΛΗΣΙ ΕΒΡΟΥ, ΣΙΔΗΡΩ ΕΒΡΟΥ, ΣΟΥΦΛΙ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '68500', Area: 'ΑΡΔΑΝΙΟ ΦΕΡΩΝ ΕΒΡΟΥ, ΔΟΡΙΣΚΟΣ ΦΕΡΩΝ ΕΒΡΟΥ, ΚΑΒΗΣΟΣ ΦΕΡΩΝ ΕΒΡΟΥ, ΚΟΙΛΑ ΕΒΡΟΥ, ΜΕΛΙΑ ΕΒΡΟΥ, ΜΟΝΑΣΤΗΡΑΚΙ ΦΕΡΩΝ ΕΒΡΟΥ, ΠΟΡΟΣ ΦΕΡΩΝ ΕΒΡΟΥ, ΠΥΛΑΙΑ ΕΒΡΟΥ, ΦΕΡΕΣ ΕΒΡΟΥ', Prefecture: 'Έβρου' },
    { PostalCode: '34001', Area: 'ΑΓΑΘΟ ΕΥΒΟΙΑΣ, ΑΓΙΟΙ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΑΡΥΣΤΟΥ ΕΥΒΟΙΑΣ, ΑΕΤΟΣ ΕΥΒΟΙΑΣ, ΑΚΡΩΤΗΡΙ ΕΥΒΟΙΑΣ, ΑΜΥΓΔΑΛΙΑ ΕΥΒΟΙΑΣ, ΑΝΤΙΑΣ ΕΥΒΟΙΑΣ, ΒΡΑΧΟΣ ΕΥΒΟΙΑΣ, ΓΡΑΜΠΙΑ ΕΥΒΟΙΑΣ, ΔΡΥΜΟΝΑΡΙ ΕΥΒΟΙΑΣ, ΕΛΑΙΩΝ ΕΥΒΟΙΑΣ, ΕΠΑΝΩΧΩΡΙ ΕΥΒΟΙΑΣ, ΕΥΑΓΓΕΛΙΣΜΟΣ ΕΥΒΟΙΑΣ, ΖΑΡΜΠΟΥΤΑΙΪΚΑ ΕΥΒΟΙΑΣ, ΖΑΧΑΡΙΑ ΕΥΒΟΙΑΣ, ΘΥΜΙΟ ΕΥΒΟΙΑΣ, ΚΑΛΕΡΓΟ ΕΥΒΟΙΑΣ, ΚΑΛΛΙΑΝΟΣ ΕΥΒΟΙΑΣ, ΚΑΛΥΒΙΑ ΚΑΡΥΣΤΙΑΣ ΕΥΒΟΙΑΣ, ΚΑΡΥΣΤΟΣ ΕΥΒΟΙΑΣ, ΚΑΣΤΡΙ ΚΑΡΥΣΤΙΑΣ ΕΥΒΟΙΑΣ, ΚΑΨΟΥΡΙ ΕΥΒΟΙΑΣ, ΚΟΜΙΤΟ ΕΥΒΟΙΑΣ, ΛΕΝΟΣΑΙΟΙ ΕΥΒΟΙΑΣ, ΜΑΝΔΗΛΟΥ ΕΥΒΟΙΑΣ, ΜΕΚΟΥΝΙΔΑ ΕΥΒΟΙΑΣ, ΜΕΤΟΧΙ ΚΑΡΥΣΤΙΑΣ ΕΥΒΟΙΑΣ, ΜΠΟΥΡΟΣ ΕΥΒΟΙΑΣ, ΜΥΛΟΙ ΚΑΡΥΣΤΙΑΣ ΕΥΒΟΙΑΣ, ΠΗΔΟΥΛΑΙΚΑ ΕΥΒΟΙΑΣ, ΠΛΑΤΑΝΙΣΤΟΣ ΕΥΒΟΙΑΣ, ΠΟΤΑΜΙΟ ΕΥΒΟΙΑΣ, ΠΡΙΝΙΑ ΕΥΒΟΙΑΣ, ΡΟΥΚΛΙΑ ΕΥΒΟΙΑΣ, ΣΦΥΡΙΔΟΥΠΟΛΗ ΕΥΒΟΙΑΣ, ΣΧΙΖΑΛΗ ΕΥΒΟΙΑΣ, ΣΩΤΗΡΑ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34003', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΚΥΜΗΣ ΕΥΒΟΙΑΣ, ΑΝΩ ΠΟΤΑΜΙΑ ΕΥΒΟΙΑΣ, ΕΝΟΡΙΑ ΕΥΒΟΙΑΣ, ΚΑΖΑΡΜΑ ΕΥΒΟΙΑΣ, ΚΑΜΠΟΣ ΒΙΤΑΛΟΥ ΕΥΒΟΙΑΣ, ΚΑΜΠΟΣ ΟΞΥΛΙΘΟΥ ΕΥΒΟΙΑΣ, ΚΛΗΜΑΤΑΡΙ ΕΥΒΟΙΑΣ, ΚΥΜΗ ΕΥΒΟΙΑΣ, ΜΕΣΟΝΗΣΙ ΕΥΒΟΙΑΣ, ΜΙΣΟΚΑΜΠΟΣ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΜΑΝΤΖΑΡΗ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΣΩΤΗΡΟΣ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΚΥΜΗΣ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΜΕΤΟΧΙΟΥ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΟΞΥΛΙΘΟΥ ΕΥΒΟΙΑΣ, ΠΕΤΙΣΟΥΝΑΣ ΕΥΒΟΙΑΣ, ΠΛΑΤΑΝΑ ΕΥΒΟΙΑΣ, ΠΡΑΣΟΥΔΑ ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΣΧΟΛΗ ΕΜΠΟΡΟΠΛΟΙΑΡΧΩΝ ΕΥΒΟΙΑΣ, ΧΗΛΗ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34004', Area: 'ΒΛΑΧΙΑ ΕΥΒΟΙΑΣ, ΔΑΦΝΟΥΣΣΑ ΕΥΒΟΙΑΣ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΕΥΒΟΙΑΣ, ΚΑΛΥΒΙΑ ΕΥΒΟΙΑΣ, ΚΗΡΙΝΘΟΣ ΕΥΒΟΙΑΣ, ΚΡΥΑ ΒΡΥΣΗ ΕΥΒΟΙΑΣ, ΜΑΝΤΟΥΔΙ ΕΥΒΟΙΑΣ, ΜΑΡΚΑΤΕΣ ΕΥΒΟΙΑΣ, ΜΕΤΟΧΙ ΚΗΡΕΟΣ ΕΥΒΟΙΑΣ, ΝΕΟΣ ΠΑΓΩΝΤΑΣ ΕΥΒΟΙΑΣ, ΠΑΓΩΝΤΑΣ ΕΥΒΟΙΑΣ, ΠΗΛΙ ΕΥΒΟΙΑΣ, ΠΡΟΚΟΠΙ ΕΥΒΟΙΑΣ, ΣΑΡΑΚΗΝΙΚΟ ΕΥΒΟΙΑΣ, ΣΠΑΘΑΡΙ ΕΥΒΟΙΑΣ, ΤΡΟΥΠΙΟ ΕΥΒΟΙΑΣ, ΦΑΡΑΚΛΑ ΕΥΒΟΙΑΣ, ΦΟΥΡΝΟΙ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34005', Area: 'ΔΑΜΙΑ ΕΥΒΟΙΑΣ, ΔΑΦΝΗ ΚΕΧΡΙΩΝ ΕΥΒΟΙΑΣ, ΔΡΥΜΩΝΑ ΕΥΒΟΙΑΣ, ΚΑΛΑΜΟΥΔΙ ΕΥΒΟΙΑΣ, ΚΑΤΟΥΝΙΑ ΕΥΒΟΙΑΣ, ΚΕΧΡΙΕΣ ΕΥΒΟΙΑΣ, ΚΟΥΛΟΥΡΟΣ ΕΥΒΟΙΑΣ, ΚΟΥΡΚΟΥΛΟΙ ΕΥΒΟΙΑΣ, ΛΙΜΝΗ ΕΥΒΟΙΑΣ, ΜΑΡΟΥΛΙ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΓΑΛΑΤΑΚΗ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΟΣΙΟΥ ΔΑΥΙΔ ΓΕΡΟΝΤΟΣ ΕΥΒΟΙΑΣ, ΜΥΡΤΙΑΣ ΕΥΒΟΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΕΥΒΟΙΑΣ, ΡΕΤΣΙΝΟΛΑΚΟΣ ΕΥΒΟΙΑΣ, ΡΟΒΙΕΣ ΕΥΒΟΙΑΣ, ΣΗΠΙΑΣ ΕΥΒΟΙΑΣ, ΣΚΕΠΑΣΤΗ ΕΥΒΟΙΑΣ, ΧΡΟΝΙΑ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34006', Area: 'ΑΜΑΡΥΝΘΟΣ ΕΥΒΟΙΑΣ, ΑΝΩ ΒΑΘΕΙΑ ΕΥΒΟΙΑΣ, ΓΑΛΑΖΙΑ ΝΕΡΑ ΕΥΒΟΙΑΣ, ΓΥΜΝΟ ΕΥΒΟΙΑΣ, ΚΑΛΛΙΘΕΑ ΕΥΒΟΙΑΣ, ΚΑΤΩ ΣΕΤΑ ΕΥΒΟΙΑΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΑΝΩ ΒΑΘΕΙΑΣ ΕΥΒΟΙΑΣ, ΣΕΤΑ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34007', Area: 'ΑΣΠΟΥΣ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΑΤΣΙΤΣΑ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΑΧΕΡΟΥΝΕΣ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΑΧΙΛΛΙ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΕΞΩ ΠΟΔΙΕΣ ΕΥΒΟΙΑΣ, ΚΑΛΑΜΙΤΣΑ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΚΑΛΙΚΡΙ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΚΥΡΑ ΠΑΝΑΓΙΑ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΛΙΝΑΡΙΑ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΛΟΥΤΡΟ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΜΕΛΑ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΜΕΣΑ ΠΟΔΙΑ ΕΥΒΟΙΑΣ, ΜΩΛΟΣ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΝΥΦΙ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΠΕΥΚΟΣ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ, ΣΑΡΑΚΗΝΟ ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΣΚΥΡΟΠΟΥΛΑ  ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΣΚΥΡΟΣ ΕΥΒΟΙΑΣ, ΤΡΑΧΥ  ΣΚΥΡΟΥ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34008', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΓΕΡΟΝΤΑΣ ΕΥΒΟΙΑΣ, ΕΡΕΤΡΙΑ ΕΥΒΟΙΑΣ, ΜΑΓΟΥΛΑ ΕΥΒΟΙΑΣ, ΜΑΛΑΚΩΝΤΑΣ ΕΥΒΟΙΑΣ, ΠΑΝΟΡΑΜΑ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34009', Area: 'ΑΓΙΑ ΘΕΚΛΑ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΑΡΥΣΤΟΥ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΜΕΡΚΟΥΡΙΟΣ ΕΥΒΟΙΑΣ, ΑΥΛΩΝΑΡΙ ΕΥΒΟΙΑΣ, ΑΧΛΑΔΕΡΗ ΕΥΒΟΙΑΣ, ΔΑΦΝΗ ΚΑΡΥΣΤΙΑΣ ΕΥΒΟΙΑΣ, ΕΛΑΙΑ ΕΥΒΟΙΑΣ, ΚΑΛΑΜΟΣ ΕΥΒΟΙΑΣ, ΚΟΙΛΙΟ ΕΥΒΟΙΑΣ, ΚΟΡΑΣΙΔΑ ΕΥΒΟΙΑΣ, ΛΟΦΙΣΚΟΣ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΧΑΡΑΛΑΜΠΟΥΣ ΛΕΥΚΩΝ ΕΥΒΟΙΑΣ, ΜΟΝΟΝΔΡΥΟ ΕΥΒΟΙΑΣ, ΜΟΥΡΤΕΡΗ ΕΥΒΟΙΑΣ, ΜΥΡΤΙΑ ΕΥΒΟΙΑΣ, ΝΕΟΧΩΡΙ ΑΥΛΩΝΑΡΙΟΥ ΕΥΒΟΙΑΣ, ΟΚΤΩΝΙΑ ΕΥΒΟΙΑΣ, ΟΡΙΟ ΕΥΒΟΙΑΣ, ΠΕΡΙΒΟΛΙΑ ΕΥΒΟΙΑΣ, ΠΡΙΝΑΚΙ ΕΥΒΟΙΑΣ, ΠΥΡΓΙ ΕΥΒΟΙΑΣ, ΣΥΚΙΕΣ ΕΥΒΟΙΑΣ, ΧΑΝΙΑ ΑΥΛΩΝΑΡΙΟΥ ΕΥΒΟΙΑΣ, ΩΡΟΛΟΓΙΟ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34013', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΜΑΡΜΑΡΙΟΥ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΕΥΒΟΙΑΣ, ΑΚΤΑΙΟ ΕΥΒΟΙΑΣ, ΑΛΕΞΗΣ ΕΥΒΟΙΑΣ, ΒΑΡΕΛΛΑΙΟΙ ΕΥΒΟΙΑΣ, ΒΑΤΗΣΙ ΕΥΒΟΙΑΣ, ΓΙΑΝΝΙΤΣΙ ΕΥΒΟΙΑΣ, ΔΙΑΣΤΑΥΡΩΣΗ ΕΥΒΟΙΑΣ, ΕΚΑΛΗ ΕΥΒΟΙΑΣ, ΚΑΛΟΓΕΡΙ ΕΥΒΟΙΑΣ, ΚΑΤΣΑΡΩΝΙΟ ΕΥΒΟΙΑΣ, ΚΑΤΩ ΓΙΑΝΝΙΤΣΙ ΕΥΒΟΙΑΣ, ΚΟΚΚΙΝΗΣ ΕΥΒΟΙΑΣ, ΚΡΥΑ ΒΡΥΣΗ ΜΑΡΜΑΡΙΟΥ ΕΥΒΟΙΑΣ, ΛΥΚΟΡΕΜΑ ΕΥΒΟΙΑΣ, ΜΑΡΜΑΡΙ ΕΥΒΟΙΑΣ, ΜΕΓΑΛΟΝΗΣΟΣ ΠΕΤΑΛΙΩΝ ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΜΕΛΙΣΣΩΝΑΣ ΕΥΒΟΙΑΣ, ΠΑΝΑΓΙΑ ΜΑΡΜΑΡΙΟΥ ΕΥΒΟΙΑΣ, ΠΑΡΑΔΕΙΣΙ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΦΗΓΙΑ ΕΥΒΟΙΑΣ, ΠΟΘΙΟ ΕΥΒΟΙΑΣ, ΡΙΖΟΒΟΥΝΙ ΕΥΒΟΙΑΣ, ΣΤΟΥΠΠΑΙΟΙ ΕΥΒΟΙΑΣ, ΤΡΑΓΟΝΗΣΙ ΕΥΒΟΙΑΣ, ΦΗΓΙΑ ΕΥΒΟΙΑΣ, ΧΑΝΙΑ ΠΑΡΑΔΕΙΣΙΟΥ ΕΥΒΟΙΑΣ, ΧΕΡΣΟΝΗΣΙ ΕΥΒΟΙΑΣ, ΧΩΝΙ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34015', Area: 'ΑΛΜΥΡΟΠΟΤΑΜΟΣ ΕΥΒΟΙΑΣ, ΒΑΘΥΡΕΜΑ ΕΥΒΟΙΑΣ, ΔΗΛΗΣΟ ΕΥΒΟΙΑΣ, ΕΛΑΙΟΧΩΡΙ ΕΥΒΟΙΑΣ, ΕΛΑΦΟΛΙΜΑΝΟ ΕΥΒΟΙΑΣ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΚΑΡΥΣΤΙΑΣ ΕΥΒΟΙΑΣ, ΚΑΒΑΛΛΙΑΝΗ ΕΥΒΟΙΑΣ, ΚΑΓΚΑΔΑΙΟΙ ΕΥΒΟΙΑΣ, ΚΑΨΑΛΑ ΕΥΒΟΙΑΣ, ΚΕΛΛΙΑ ΕΥΒΟΙΑΣ, ΚΟΥΒΕΛΛΕΣ ΕΥΒΟΙΑΣ, ΛΕΥΚΑ ΕΥΒΟΙΑΣ, ΜΕΣΟΧΩΡΙΑ ΕΥΒΟΙΑΣ, ΝΕΑ ΣΤΥΡΑ ΕΥΒΟΙΑΣ, ΝΙΜΠΟΡΕΙΟ ΕΥΒΟΙΑΣ, ΠΑΝΑΓΙΑ ΑΛΜΥΡΟΠΟΤΑΜΟΥ ΕΥΒΟΙΑΣ, ΠΟΛΥΠΟΤΑΜΟΣ ΕΥΒΟΙΑΣ, ΡΑΠΤΑΙΟΙ ΕΥΒΟΙΑΣ, ΣΤΥΡΑ ΕΥΒΟΙΑΣ, ΤΣΑΚΑΙΟΙ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34100', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΧΑΛΚΙΔΟΣ (ΜΠΟΥΡΤΖΙ) ΕΥΒΟΙΑΣ, ΑΝΘΗΔΩΝΑ ΕΥΒΟΙΑΣ, ΑΦΡΑΤΙ ΕΥΒΟΙΑΣ, ΒΑΘΥ ΕΥΒΟΙΑΣ, ΔΡΟΣΙΑ ΧΑΛΚΙΔΟΣ ΕΥΒΟΙΑΣ, ΚΑΛΟΧΩΡΙ ΠΑΝΤΕΙΧΙ ΕΥΒΟΙΑΣ, ΚΑΜΑΡΙ ΕΥΒΟΙΑΣ, ΚΟΥΚΑΚΙ ΕΥΒΟΙΑΣ, ΚΡΟΝΙΑ ΕΥΒΟΙΑΣ, ΚΤΥΠΟΝΗΣΙ ΕΥΒΟΙΑΣ, ΛΟΥΚΙΣΙΑ ΕΥΒΟΙΑΣ, ΜΙΚΡΟ ΒΑΘΥ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΑΡΜΑ ΕΥΒΟΙΑΣ, ΜΥΤΙΚΑΣ ΕΥΒΟΙΑΣ, ΝΕΑ ΛΑΜΨΑΚΟΣ ΕΥΒΟΙΑΣ, ΞΗΡΟΒΡΥΣΗ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΑΥΛΙΔΟΣ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΒΑΘΕΟΣ ΕΥΒΟΙΑΣ, ΠΑΣΑΣ ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΕΥΒΟΙΑΣ, ΡΙΤΣΩΝΑ ΕΥΒΟΙΑΣ, ΣΚΡΟΠΟΝΕΡΙΑ ΕΥΒΟΙΑΣ, ΥΛΙΚΗ ΕΥΒΟΙΑΣ, ΦΑΡΟΣ ΕΥΒΟΙΑΣ, ΦΥΛΛΑ ΕΥΒΟΙΑΣ, ΧΑΛΚΙΔΑ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34200', Area: 'ΑΒΓΑΡΙΑ ΕΥΒΟΙΑΣ, ΑΓΔΙΝΕΣ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΙΣΤΙΑΙΑΣ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΕΛΛΗΝΙΚΩΝ ΕΥΒΟΙΑΣ, ΑΓΡΙΟΒΟΤΑΝΟ ΕΥΒΟΙΑΣ, ΑΡΤΕΜΙΣΙΟ ΕΥΒΟΙΑΣ, ΑΣΜΗΝΙΟ ΕΥΒΟΙΑΣ, ΒΑΣΙΛΙΚΑ ΕΥΒΟΙΑΣ, ΒΟΥΤΑΣ ΕΥΒΟΙΑΣ, ΓΑΛΑΤΣΑΔΕΣ ΕΥΒΟΙΑΣ, ΓΑΛΑΤΣΩΝΑ ΕΥΒΟΙΑΣ, ΓΕΡΑΚΙΟΥ ΕΥΒΟΙΑΣ, ΓΟΥΒΕΣ ΕΥΒΟΙΑΣ, ΕΛΛΗΝΙΚΑ ΕΥΒΟΙΑΣ, ΙΣΤΙΑΙΑ ΕΥΒΟΙΑΣ, ΚΑΜΑΡΙΑ ΕΥΒΟΙΑΣ, ΚΑΜΑΤΡΙΑΔΕΣ ΕΥΒΟΙΑΣ, ΚΑΝΑΤΑΔΙΚΑ ΕΥΒΟΙΑΣ, ΚΑΣΤΑΝΙΩΤΙΣΣΑ ΕΥΒΟΙΑΣ, ΚΑΣΤΡΙ ΙΣΤΙΑΙΑΣ ΕΥΒΟΙΑΣ, ΚΑΤΩ ΜΟΝΟΚΑΡΥΑ ΕΥΒΟΙΑΣ, ΚΕΦΑΛΕΣ ΕΥΒΟΙΑΣ, ΚΟΚΚΙΝΟΜΗΛΕΑ ΕΥΒΟΙΑΣ, ΚΡΥΟΝΕΡΙΤΗΣ ΕΥΒΟΙΑΣ, ΚΥΠΑΡΙΣΣΙ ΕΥΒΟΙΑΣ, ΜΗΛΙΕΣ ΕΥΒΟΙΑΣ, ΜΟΝΟΚΑΡΥΑ ΕΥΒΟΙΑΣ, ΝΕΑ ΣΙΝΑΣΟΣ ΕΥΒΟΙΑΣ, ΝΕΟΧΩΡΙ ΙΣΤΙΑΙΑΣ ΕΥΒΟΙΑΣ, ΠΕΥΚΙ ΕΥΒΟΙΑΣ, ΠΟΝΤΙΚΟΝΗΣΙ ΕΥΒΟΙΑΣ, ΣΗΜΙΑ ΕΥΒΟΙΑΣ, ΤΣΑΠΟΥΡΝΙΑ ΕΥΒΟΙΑΣ, ΨΑΡΟΠΟΥΛΙ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34300', Area: 'ΑΓΙΟΚΑΜΠΟΣ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΓΙΑΛΤΡΩΝ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΛΙΧΑΔΟΣ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΕΥΒΟΙΑΣ, ΑΙΔΗΨΟΣ ΕΥΒΟΙΑΣ, ΒΑΡΒΑΡΑ ΕΥΒΟΙΑΣ, ΒΑΣΙΛΙΝΑ ΕΥΒΟΙΑΣ, ΒΙΓΛΑ ΕΥΒΟΙΑΣ, ΓΙΑΛΤΡΑ ΕΥΒΟΙΑΣ, ΓΡΕΓΟΛΙΜΑΝΟ ΕΥΒΟΙΑΣ, ΗΛΙΑ ΕΥΒΟΙΑΣ, ΚΑΒΟΣ ΕΥΒΟΙΑΣ, ΚΟΚΚΙΝΙΑΣ ΕΥΒΟΙΑΣ, ΛΙΧΑΣ ΕΥΒΟΙΑΣ, ΛΟΥΤΡΑ ΑΙΔΗΨΟΥ ΕΥΒΟΙΑΣ, ΛΟΥΤΡΑ ΓΙΑΛΤΡΩΝ ΕΥΒΟΙΑΣ, ΜΑΟΥΝΗΣ  ΕΥΒΟΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΑΙΔΗΨΟΥ ΕΥΒΟΙΑΣ, ΜΟΝΟΛΙΑ ΝΗΣΟΣ ΕΥΒΟΙΑΣ, ΠΑΙΔΟΥΠΟΛΗ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΑΙΔΗΨΟΥ ΕΥΒΟΙΑΣ, ΠΛΑΤΑΝΙΑΣ ΕΥΒΟΙΑΣ, ΠΟΛΥΛΟΦΟΣ ΕΥΒΟΙΑΣ, ΡΟΔΟΔΑΦΝΗ ΕΥΒΟΙΑΣ, ΣΚΕΠΑΣΤΗ ΑΙΔΗΨΟΥ ΕΥΒΟΙΑΣ, ΣΤΡΟΓΓΥΛΗ ΝΗΣΟΣ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34400', Area: 'ΑΓΙΑ ΣΟΦΙΑ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΚΑΜΑΡΙΤΣΑΣ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΜΕΣΣΑΠΩΝ ΕΥΒΟΙΑΣ, ΑΚΡΕΣ ΕΥΒΟΙΑΣ, ΑΤΤΑΛΗ ΕΥΒΟΙΑΣ, ΔΑΦΝΗ ΝΕΡΟΤΡΙΒΙΑΣ ΕΥΒΟΙΑΣ, ΔΡΟΣΙΑ ΚΥΠΑΡΙΣΣΙΟΥ ΕΥΒΟΙΑΣ, ΘΕΟΤΟΚΟΣ ΕΥΒΟΙΑΣ, ΚΑΜΑΡΙΤΣΑ ΕΥΒΟΙΑΣ, ΚΑΣΤΕΛΛΑ ΕΥΒΟΙΑΣ, ΚΟΝΤΟΔΕΣΠΟΤΙ ΕΥΒΟΙΑΣ, ΚΥΠΠΑΡΙΣΣΙ ΧΑΛΚΙΔΑΣ ΕΥΒΟΙΑΣ, ΛΙΜΝΙΩΝΑΣ ΕΥΒΟΙΑΣ, ΜΑΚΡΥΚΑΠΑ ΕΥΒΟΙΑΣ, ΜΑΚΡΥΜΑΛΛΗ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ  ΙΩΑΝΝΗ ΚΑΛΥΒΙΤΗ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΜΑΚΡΥΜΑΛΛΗΣ ΕΥΒΟΙΑΣ, ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΓΟΡΓΟΕΠΗΚΟΟΥ ΕΥΒΟΙΑΣ, ΜΥΛΟΙ ΕΥΒΟΙΑΣ, ΝΕΡΟΤΡΙΒΙΑ ΕΥΒΟΙΑΣ, ΠΑΡΑΛΙΑ ΠΟΛΙΤΙΚΩΝ ΕΥΒΟΙΑΣ, ΠΗΓΑΔΙΑ ΕΥΒΟΙΑΣ, ΠΛΑΤΑΝΙΑ ΕΥΒΟΙΑΣ, ΠΟΛΙΤΙΚΑ ΕΥΒΟΙΑΣ, ΣΤΑΥΡΟΣ ΕΥΒΟΙΑΣ, ΤΡΙΑΔΑ ΕΥΒΟΙΑΣ, ΨΑΧΝΑ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34500', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΕΥΒΟΙΑΣ, ΑΓΙΟΣ ΛΟΥΚΑΣ ΕΥΒΟΙΑΣ, ΑΚΤΗ ΝΗΡΕΩΣ ΕΥΒΟΙΑΣ, ΑΛΙΒΕΡΙ ΕΥΒΟΙΑΣ, ΑΝΘΟΥΠΟΛΗ ΕΥΒΟΙΑΣ, ΒΕΛΟΣ ΕΥΒΟΙΑΣ, ΓΑΒΑΛΑΣ ΕΥΒΟΙΑΣ, ΔΥΣΤΟΣ ΕΥΒΟΙΑΣ, ΘΑΡΟΥΝΙΑ ΕΥΒΟΙΑΣ, ΚΑΤΑΚΑΛΟΣ ΕΥΒΟΙΑΣ, ΚΟΥΤΟΥΜΟΥΛΑΣ ΕΥΒΟΙΑΣ, ΛΑΤΑΣ ΕΥΒΟΙΑΣ, ΛΕΠΟΥΡΑ ΕΥΒΟΙΑΣ, ΜΗΛΑΚΙ ΕΥΒΟΙΑΣ, ΠΑΝΑΓΙΑ ΠΑΡΘΕΝΙΟΥ ΕΥΒΟΙΑΣ, ΠΑΝΑΓΙΤΣΑ ΠΟΥΝΤΑ ΕΥΒΟΙΑΣ, ΠΑΡΑΜΕΡΙΤΕΣ ΕΥΒΟΙΑΣ, ΠΑΡΘΕΝΙ ΕΥΒΟΙΑΣ, ΠΡΑΣΙΝΟ ΕΥΒΟΙΑΣ, ΠΡΙΝΙΑΣ ΕΥΒΟΙΑΣ, ΤΡΑΧΗΛΙΟ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '34600', Area: 'ΝΕΑ ΑΡΤΑΚΗ ΕΥΒΟΙΑΣ', Prefecture: 'Εύβοια' },
    { PostalCode: '36071', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΚΕΡΑΣΟΧΩΡΙΟΥ ΕΥΡΥΤΑΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΛΑΙΟΧΩΡΙΟΥ ΕΥΡΥΤΑΝΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΜΙΡΙΑΝΗ ΕΥΡΥΤΑΝΙΑΣ, ΑΝΑΤΟΛΙΚΗ ΦΡΑΓΚΙΣΤΑ ΕΥΡΥΤΑΝΙΑΣ, ΒΙΝΙΑΝΗ ΕΥΡΥΤΑΝΙΑΣ, ΒΡΕΚΑΙΙΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΓΑΒΡΙΝΑ ΕΥΡΥΤΑΝΙΑΣ, ΓΟΥΛΑΙΙΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΔΑΦΝΗ ΕΥΡΥΤΑΝΙΑΣ, ΔΥΤΙΚΗ ΦΡΑΓΚΙΣΤΑ ΕΥΡΥΤΑΝΙΑΣ, ΕΠΙΣΚΟΠΗ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΡΑΚΑΣΙΟΝ ΕΥΡΥΤΑΝΙΑΣ, ΚΕΡΑΣΟΧΩΡΙ ΕΥΡΥΤΑΝΙΑΣ, ΚΕΦΑΛΟΒΡΥΣΟ ΕΥΡΥΤΑΝΙΑΣ, ΚΡΕΝΤΗΣ ΕΥΡΥΤΑΝΙΑΣ, ΛΟΓΓΙΕΣ ΕΥΡΥΤΑΝΙΑΣ, ΜΑΡΑΘΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΜΑΡΑΘΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΜΑΥΡΟΜΜΑΤΑ ΕΥΡΥΤΑΝΙΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΕΥΡΥΤΑΝΙΑΣ ΕΥΡΥΤΑΝΙΑΣ, ΝΕΑ ΒΙΝΙΑΝΗ ΕΥΡΥΤΑΝΙΑΣ, ΝΕΟΧΩΡΙ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΦΡΑΣΓΚΙΣΤΑΣ ΕΥΡΥΤΑΝΙΑΣ, ΠΕΡΟΥΛΑΙΙΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΣΕΛΟ ΕΥΡΥΤΑΝΙΑΣ, ΣΚΑΜΝΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΧΡΥΣΩ ΕΥΡΥΤΑΝΙΑΣ', Prefecture: 'Ευρυτανίας' },
    { PostalCode: '36072', Area: 'ΑΓΙΟΣ ΠΡΟΚΟΠΙΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΜΠΑΡΕΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΝΩ ΠΟΤΑΜΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΑΡΜΑΜΠΕΛΑ ΕΥΡΥΤΑΝΙΑΣ, ΒΑΛΑΩΡΑ ΕΥΡΥΤΑΝΙΑΣ, ΒΕΡΝΙΚΟ ΕΥΡΥΤΑΝΙΑΣ, ΒΟΥΛΠΗ ΕΥΡΥΤΑΝΙΑΣ, ΓΡΑΝΙΤΣΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΙΠΑΝΑΚΙ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΣΤΡΑΚΙ ΒΑΛΑΩΡΑΣ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΣΤΡΑΚΙ ΤΟΠΟΛΙΑΝΩΝ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΤΩ ΠΟΤΑΜΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΟΝΔΥΛΑΙΙΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΟΨΑΙΙΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΛΗΜΕΡΙ ΕΥΡΥΤΑΝΙΑΣ, ΛΙΘΟΧΩΡΙ ΕΥΡΥΤΑΝΙΑΣ, ΛΟΓΓΙΤΣΙ ΕΥΡΥΤΑΝΙΑΣ, ΜΟΝΗ ΤΑΤΑΡΝΗΣ ΕΥΡΥΤΑΝΙΑΣ, ΠΡΑΤΟΒΟΥΝΙ ΕΥΡΥΤΑΝΙΑΣ, ΤΟΠΟΛΙΑΝΑ ΕΥΡΥΤΑΝΙΑΣ, ΤΡΙΠΟΤΑΜΟ ΕΥΡΥΤΑΝΙΑΣ, ΤΣΟΥΚΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΧΡΙΣΟΒΑ ΕΥΡΥΤΑΝΙΑΣ', Prefecture: 'Ευρυτανίας' },
    { PostalCode: '36073', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΓΡΑΦΑ ΕΥΡΥΤΑΝΙΑΣ, ΑΝΗΦΟΡΑ ΕΥΡΥΤΑΝΙΑΣ, ΑΣΠΡΟΡΡΕΥΜΑ ΕΥΡΥΤΑΝΙΑΣ, ΒΑΛΑΡΙ ΕΥΡΥΤΑΝΙΑΣ, ΒΡΑΓΓΙΑΝΑ ΕΥΡΥΤΑΝΙΑΣ, ΓΑΒΡΟΛΙΣΙΑΔΑ ΕΥΡΥΤΑΝΙΑΣ, ΔΕΝΔΡΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΕΛΑΤΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΕΠΙΝΙΑΝΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΒΑΚΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΜΑΡΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΡΥΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΤΣΑΝΤΩΝΗΣ ΕΥΡΥΤΑΝΙΑΣ, ΚΟΥΣΤΕΣΑ ΕΥΡΥΤΑΝΙΑΣ, ΝΕΡΑΙΔΑ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΛΑΙΟΛΑΚΚΑ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΡΑΜΕΡΙΤΑ ΕΥΡΥΤΑΝΙΑΣ, ΠΤΕΡΗ ΕΥΡΥΤΑΝΙΑΣ, ΤΡΙΔΕΝΔΡΟ ΕΥΡΥΤΑΝΙΑΣ, ΤΡΟΒΑΤΟ ΕΥΡΥΤΑΝΙΑΣ', Prefecture: 'Ευρυτανίας' },
    { PostalCode: '36080', Area: 'ΒΡΑΧΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΛΕΙΣΤΟ ΕΥΡΥΤΑΝΙΑΣ, ΜΑΥΡΟΛΟΓΓΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΜΕΣΟΧΩΡΙ ΕΥΡΥΤΑΝΙΑΣ, ΠΛΑΤΑΝΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΦΟΥΡΝΑ ΕΥΡΥΤΑΝΙΑΣ', Prefecture: 'Ευρυτανίας' },
    { PostalCode: '36100', Area: 'ΑΓΙΑ ΒΛΑΧΕΡΝΑ ΕΥΡΥΤΑΝΙΑΣ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΑΜΠΕΛΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΑΝΙΑΔΑ ΕΥΡΥΤΑΝΙΑΣ, ΑΝΩ ΚΑΛΕΣΜΕΝΟ ΕΥΡΥΤΑΝΙΑΣ, ΑΡΩΝΙΑΔΑ ΕΥΡΥΤΑΝΙΑΣ, ΒΑΜΒΑΚΙΕΣ ΕΥΡΥΤΑΝΙΑΣ, ΒΕΛΟΥΧΙ ΕΥΡΥΤΑΝΙΑΣ, ΒΟΥΤΥΡΟ ΕΥΡΥΤΑΝΙΑΣ, ΓΟΡΙΑΝΑΔΕΣ ΕΥΡΥΤΑΝΙΑΣ, ΔΥΤΙΚΟ ΠΑΠΠΑΡΟΥΣΙ ΕΥΡΥΤΑΝΙΑΣ, ΙΤΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΛΕΣΜΕΝΟ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΛΛΙΘΕΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΡΠΕΝΗΣΙ ΕΥΡΥΤΑΝΙΑΣ, ΚΑΤΩ ΜΑΡΑΘΕΑ ΕΥΡΥΤΑΝΙΑΣ, ΚΛΑΥΣΙΟ ΕΥΡΥΤΑΝΙΑΣ, ΚΟΡΥΣΧΑΔΕΣ ΕΥΡΥΤΑΝΙΑΣ, ΜΕΣΑΜΠΕΛΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΜΗΛΙΑΣ ΕΥΡΥΤΑΝΙΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΚΑΛΕΣΜΕΝΟΥ ΕΥΡΥΤΑΝΙΑΣ, ΜΟΥΖΙΛΟ ΕΥΡΥΤΑΝΙΑΣ, ΜΥΡΙΚΗ ΕΥΡΥΤΑΝΙΑΣ, ΝΟΣΤΙΜΟ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΠΠΑΔΙΑ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΠΠΑΡΟΥΣΙ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΡΚΙΟ ΕΥΡΥΤΑΝΙΑΣ, ΠΑΥΛΟΠΟΥΛΟ ΕΥΡΥΤΑΝΙΑΣ, ΣΕΛΛΑ ΕΥΡΥΤΑΝΙΑΣ, ΣΤΕΝΩΜΑ ΕΥΡΥΤΑΝΙΑΣ, ΣΤΕΦΑΝΙ ΕΥΡΥΤΑΝΙΑΣ, ΣΥΓΚΡΕΛΛΟΣ ΕΥΡΥΤΑΝΙΑΣ, ΦΙΔΑΚΙΑ ΕΥΡΥΤΑΝΙΑΣ', Prefecture: 'Ευρυτανίας' },
    { PostalCode: '29090', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΖΑΚΥΝΘΟΥ, ΑΛΙΚΑΝΑΣ ΖΑΚΥΝΘΟΥ, ΑΛΩΝΙΑ ΖΑΚΥΝΘΟΥ, ΑΝΩ ΓΕΡΑΚΑΡΙ ΖΑΚΥΝΘΟΥ, ΔΡΑΚΑΣ ΖΑΚΥΝΘΟΥ, ΚΑΛΛΙΘΕΑ ΖΑΚΥΝΘΟΥ, ΚΑΣΤΕΛΙΑ ΖΑΚΥΝΘΟΥ, ΚΑΤΑΣΤΑΡΙ ΖΑΚΥΝΘΟΥ, ΚΑΤΩ ΓΕΡΑΚΑΡΙ ΖΑΚΥΝΘΟΥ, ΠΗΓΑΔΑΚΙΑ ΖΑΚΥΝΘΟΥ, ΣΚΟΥΛΗΚΑΔΟ ΖΑΚΥΝΘΟΥ', Prefecture: 'Ζακύνθου' },
    { PostalCode: '29091', Area: 'ΑΓΙΑ ΘΕΚΛΑ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΝΗΣΟΣ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΒΟΛΙΜΩΝ ΖΑΚΥΝΘΟΥ, ΑΝΑΦΩΝΗΤΡΙΑ ΖΑΚΥΝΘΟΥ, ΑΝΩ ΒΟΛΙΜΕΣ ΖΑΚΥΝΘΟΥ, ΑΣΚΟΣ ΖΑΚΥΝΘΟΥ, ΒΑΡΒΑΡΑ ΖΑΚΥΝΘΟΥ, ΒΟΛΙΜΕΣ ΖΑΚΥΝΘΟΥ, ΕΛΙΕΣ ΖΑΚΥΝΘΟΥ, ΕΞΩ ΧΩΡΑ ΖΑΚΥΝΘΟΥ, ΚΑΜΠΙΟ ΖΑΚΥΝΘΟΥ, ΚΟΡΙΘΙ ΖΑΚΥΝΘΟΥ, ΚΟΡΩΝΗ ΖΑΚΥΝΘΟΥ, ΜΑΡΙΕΣ ΖΑΚΥΝΘΟΥ, ΜΙΚΡΟ ΝΗΣΙ ΖΑΚΥΝΘΟΥ, ΟΡΘΟΝΙΕΣ ΖΑΚΥΝΘΟΥ, ΣΚΙΝΑΡΙΑ ΖΑΚΥΝΘΟΥ', Prefecture: 'Ζακύνθου' },
    { PostalCode: '29092', Area: 'ΑΓΑΛΑΣ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΙ ΠΑΝΤΕΣ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΛΕΩΝ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΣΩΣΤΗΣ ΖΑΚΥΝΘΟΥ, ΑΗ ΓΙΑΝΝΗΣ ΑΓΑΛΑ ΖΑΚΥΝΘΟΥ, ΑΜΠΕΛΟΣ ΖΑΚΥΝΘΟΥ, ΑΠΕΛΑΤΙ ΖΑΚΥΝΘΟΥ, ΒΟΥΓΙΑΤΟ ΖΑΚΥΝΘΟΥ, ΓΑΛΑΡΟ ΖΑΚΥΝΘΟΥ, ΓΥΡΙΟ ΖΑΚΥΝΘΟΥ, ΚΑΛΠΑΚΙ ΖΑΚΥΝΘΟΥ, ΚΕΡΙ ΖΑΚΥΝΘΟΥ, ΚΟΙΛΙΩΜΕΝΟΣ ΖΑΚΥΝΘΟΥ, ΛΑΓΑΝΑΣ ΖΑΚΥΝΘΟΥ, ΛΑΓΚΑΔΑΚΙΑ ΖΑΚΥΝΘΟΥ, ΛΑΓΩΠΟΔΟ ΖΑΚΥΝΘΟΥ, ΛΙΘΑΚΙΑ ΖΑΚΥΝΘΟΥ, ΛΙΜΝΗ ΚΕΡΙΟΥ ΖΑΚΥΝΘΟΥ, ΛΟΥΧΑ ΖΑΚΥΝΘΟΥ, ΜΑΡΑΘΙΑΣ ΖΑΚΥΝΘΟΥ, ΜΑΧΑΙΡΑΔΟ ΖΑΚΥΝΘΟΥ, ΜΕΛΙΝΑΔΟ ΖΑΚΥΝΘΟΥ, ΜΟΥΖΑΚΙ ΖΑΚΥΝΘΟΥ, ΠΑΝΤΟΚΡΑΤΩΡΑΣ ΖΑΚΥΝΘΟΥ, ΡΟΜΙΡΙ ΖΑΚΥΝΘΟΥ, ΣΤΗΜΙΕΣ ΖΑΚΥΝΘΟΥ, ΦΙΟΛΙΤΗΣ ΖΑΚΥΝΘΟΥ, ΦΤΕΡΙΝΙ ΖΑΚΥΝΘΟΥ', Prefecture: 'Ζακύνθου' },
    { PostalCode: '29100', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΒΑΣΙΛΙΚΟΥ ΖΑΚΥΝΘΟΥ, ΑΓΙΟΣ ΚΗΡΥΚΟΣ ΖΑΚΥΝΘΟΥ, ΑΚΡΩΤΗΡΙ ΖΑΚΥΝΘΟΥ, ΑΜΠΕΛΟΚΗΠΟΙ ΖΑΚΥΝΘΟΥ, ΑΝΩ ΒΑΣΙΛΙΚΟΣ ΖΑΚΥΝΘΟΥ, ΑΡΓΑΣΙ ΖΑΚΥΝΘΟΥ, ΒΑΝΑΤΟ ΖΑΚΥΝΘΟΥ, ΒΑΣΙΛΙΚΟΣ ΖΑΚΥΝΘΟΥ, ΓΑΙΤΑΝΙ ΖΑΚΥΝΘΟΥ, ΔΡΟΣΙΑ ΖΑΚΥΝΘΟΥ, ΖΑΚΥΝΘΟΣ ΖΑΚΥΝΘΟΥ, ΚΑΛΑΜΑΚΙ ΖΑΚΥΝΘΟΥ, ΚΑΛΙΠΑΔΟ ΖΑΚΥΝΘΟΥ, ΚΑΛΛΙΤΕΡΟΣ ΖΑΚΥΝΘΟΥ, ΚΑΛΟΝΗΣΙ ΖΑΚΥΝΘΟΥ, ΚΥΔΩΝΙ ΖΑΚΥΝΘΟΥ, ΚΥΨΕΛΗ ΖΑΚΥΝΘΟΥ, ΛΙΜΟΝΤΑΙΙΚΑ ΖΑΚΥΝΘΟΥ, ΜΑΡΓΑΡΑΙΙΚΑ ΖΑΚΥΝΘΟΥ, ΜΕΣΟ ΓΕΡΑΚΑΡΙ ΖΑΚΥΝΘΟΥ, ΜΟΝΗ ΣΤΡΟΦΑΔΩΝ ΖΑΚΥΝΘΟΥ, ΜΠΟΧΑΛΗ ΖΑΚΥΝΘΟΥ, ΝΕΡΟΜΥΛΟΣ ΖΑΚΥΝΘΟΥ, ΞΗΡΟΚΑΣΤΕΛΛΟ ΖΑΚΥΝΘΟΥ, ΠΕΥΚΑΚΙΑ ΖΑΚΥΝΘΟΥ, ΠΛΑΝΟΣ ΖΑΚΥΝΘΟΥ, ΣΑΡΑΚΗΝΑΔΟ ΖΑΚΥΝΘΟΥ, ΤΡΑΓΑΚΙ ΖΑΚΥΝΘΟΥ, ΧΑΜΟΥΖΑΣ ΖΑΚΥΝΘΟΥ, ΨΑΡΑΙΙΚΑ ΖΑΚΥΝΘΟΥ, ΨΑΡΟΥ ΖΑΚΥΝΘΟΥ', Prefecture: 'Ζακύνθου' },
    { PostalCode: '27050', Area: 'ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΒΑΡΘΟΛΟΜΙΟΥ ΗΛΕΙΑΣ, ΑΡΚΟΥΔΙ ΗΛΕΙΑΣ, ΒΑΡΘΟΛΟΜΙΟ ΗΛΕΙΑΣ, ΒΑΤΙΩΝΑΣ ΗΛΕΙΑΣ, ΒΡΑΝΑΣ ΗΛΕΙΑΣ, ΓΛΥΦΑ ΗΛΕΙΑΣ, ΔΗΜΗΤΡΑ ΗΛΕΙΑΣ, ΘΙΝΕΣ ΗΛΕΙΑΣ, ΙΟΝΙΚΟ ΗΛΕΙΑΣ, ΚΑΛΑΜΙΑ ΗΛΕΙΑΣ, ΚΑΛΥΒΙΑ ΜΥΡΤΟΥΝΤΙΩΝ ΗΛΕΙΑΣ, ΚΑΡΑΒΑΚΙ ΗΛΕΙΑΣ, ΚΑΡΔΙΑΚΑΥΤΗ ΗΛΕΙΑΣ, ΚΑΣΤΡΟ ΗΛΕΙΑΣ, ΚΟΚΚΑΛΑ ΗΛΕΙΑΣ, ΛΟΥΤΡΑ ΚΥΛΛΗΝΗΣ ΗΛΕΙΑΣ, ΛΥΓΙΑ ΗΛΕΙΑΣ, ΜΑΧΟΣ ΗΛΕΙΑΣ, ΠΑΡΑΛΙΑ ΘΙΝΩΝ ΗΛΕΙΑΣ, ΠΑΡΑΛΙΑ ΛΥΓΙΑΣ ΗΛΕΙΑΣ, ΡΕΓΚΛΑΙΙΚΑ ΗΛΕΙΑΣ, ΡΩΜΕΙΚΑ ΑΜΑΛΙΑΔΟΣ ΗΛΕΙΑΣ, ΣΤΡΟΥΜΠΟΥΛΗ ΗΛΕΙΑΣ, ΨΗΛΗ ΡΑΧΗ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27051', Area: 'ΑΝΔΡΑΒΙΔΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27052', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΝΗΣΙΟΥ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΗΛΕΙΑΣ, ΑΕΤΟΡΡΑΧΗ ΗΛΕΙΑΣ, ΑΝΩ ΒΕΛΙΤΣΕΣ ΑΧΑΙΑΣ, ΑΝΩ ΚΟΥΡΤΕΣΙ ΗΛΕΙΑΣ, ΒΑΡΔΑ ΗΛΕΙΑΣ, ΒΟΥΠΡΑΣΙ ΑΧΑΙΑΣ, ΔΑΦΝΗ ΑΕΤΟΡΡΑΧΗΣ ΗΛΕΙΑΣ, ΘΑΝΑΣΟΥΛΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΑΛΟΓΡΙΑ ΑΧΑΙΑΣ, ΚΑΛΥΒΑΚΙΑ ΞΕΝΙΩΝ ΗΛΕΙΑΣ, ΚΑΝΔΑΛΟΣ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΚΑΠΕΛΕΤΟ ΗΛΕΙΑΣ, ΚΑΡΑΒΟΥΛΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΑΡΒΟΥΝΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΑΤΩ ΒΕΛΙΤΣΕΣ ΑΧΑΙΑΣ, ΚΟΤΤΕΙΚΑ ΗΛΕΙΑΣ, ΚΟΥΓΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΟΥΡΤΕΣΗ ΗΛΕΙΑΣ, ΚΡΕΜΜΥΔΙ ΗΛΕΙΑΣ, ΚΩΜΗ ΗΛΕΙΑΣ, ΛΑΠΑΣ ΑΧΑΙΑΣ, ΛΟΥΤΡΑ ΥΡΜΙΝΗΣ ΗΛΕΙΑΣ, ΜΑΝΩΛΑΔΑ ΗΛΕΙΑΣ, ΜΕΓΑΛΟ ΠΕΥΚΟ ΗΛΕΙΑΣ, ΜΕΛΙΣΣΑ ΗΛΕΙΑΣ, ΜΕΤΟΧΙ ΠΑΤΡΩΝ ΑΧΑΙΑΣ, ΜΙΧΟΙΟ ΑΧΑΙΑΣ, ΜΠΟΡΣΙ ΗΛΕΙΑΣ, ΜΠΡΙΝΙΑ ΗΛΕΙΑΣ, ΝΕΑ ΜΑΝΩΛΑΔΑ ΗΛΕΙΑΣ, ΝΕΑΠΟΛΗ ΗΛΕΙΑΣ, ΝΕΟ ΒΟΥΠΡΑΣΙΟ ΑΧΑΙΑΣ, ΝΗΣΙ ΗΛΕΙΑΣ, ΞΕΝΙΕΣ ΗΛΕΙΑΣ, ΠΑΛΑΙΟΧΩΡΑ ΗΛΕΙΑΣ, ΠΑΡΑΛΙΜΝΗ ΑΧΑΙΑΣ, ΣΑΜΑΡΑΙΙΚΑ ΗΛΕΙΑΣ, ΣΥΜΠΑΝΙ ΗΛΕΙΑΣ, ΤΣΑΜΑΙΙΚΑ ΑΧΑΙΑΣ, ΨΑΡΙ ΗΛΕΙΑΣ, ΨΕΥΤΕΙΚΑ ΑΧΑΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27053', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΛΕΧΑΙΝΩΝ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΛΕΧΑΙΝΩΝ ΗΛΕΙΑΣ, ΑΡΕΤΗ ΗΛΕΙΑΣ, ΒΡΑΧΝΑΙΙΚΑ ΗΛΕΙΑΣ, ΒΥΤΙΝΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΑΤΑΡΡΑΧΙ ΗΛΕΙΑΣ, ΛΕΧΑΙΝΑ ΗΛΕΙΑΣ, ΜΑΡΚΟΠΟΥΛΟ ΗΛΕΙΑΣ, ΜΥΡΣΙΝΗ ΗΛΕΙΑΣ, ΝΕΟΧΩΡΙ ΖΑΧΑΡΩΣ ΗΛΕΙΑΣ, ΝΕΟΧΩΡΙ ΜΥΡΤΟΥΝΤΙΩΝ ΗΛΕΙΑΣ, ΟΛΓΑ ΗΛΕΙΑΣ, ΠΗΓΑΔΙ ΗΛΕΙΑΣ, ΣΙΜΙΖΑ ΗΛΕΙΑΣ, ΣΤΑΦΙΔΟΚΑΜΠΟΣ ΗΛΕΙΑΣ, ΣΤΡΟΥΣΙ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27054', Area: 'ΑΓΙΟΣ ΗΛΙΑΣ ΟΛΥΜΠΙΑΣ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΖΑΧΑΡΩΣ ΗΛΕΙΑΣ, ΑΓΡΑΠΙΔΙΑ ΗΛΕΙΑΣ, ΑΝΗΛΙΟ ΗΛΕΙΑΣ, ΑΡΗΝΗ ΗΛΕΙΑΣ, ΑΡΤΕΜΙΔΑ ΗΛΕΙΑΣ, ΓΙΑΝΝΙΤΣΟΧΩΡΙ ΗΛΕΙΑΣ, ΖΑΧΑΡΩ ΗΛΕΙΑΣ, ΘΟΛΟ ΗΛΕΙΑΣ, ΚΑΙΑΦΑΣ ΗΛΕΙΑΣ, ΚΑΚΟΒΑΤΟΣ ΗΛΕΙΑΣ, ΚΑΛΙΔΟΝΑ ΗΛΕΙΑΣ, ΚΑΜΠΟΣ ΚΑΛΙΔΟΝΑΣ ΗΛΕΙΑΣ, ΚΑΤΩ ΑΡΗΝΗ ΗΛΕΙΑΣ, ΚΑΤΩ ΞΗΡΟΧΩΡΙ ΗΛΕΙΑΣ, ΚΑΤΩ ΤΑΞΙΑΡΧΕΣ ΗΛΕΙΑΣ, ΚΟΣΤΟΜΕΡΑ ΗΛΕΙΑΣ, ΚΟΤΡΩΝΑΚΙ ΗΛΕΙΑΣ, ΚΟΤΡΩΝΙ ΜΙΝΘΗ ΗΛΕΙΑΣ, ΚΟΤΡΩΝΙ ΞΗΡΟΧΩΡΙΟΥ ΗΛΕΙΑΣ, ΚΟΥΜΟΥΘΕΚΡΑ ΗΛΕΙΑΣ, ΛΟΓΓΑΚΙ ΗΛΕΙΑΣ, ΜΑΚΙΣΤΟΣ ΗΛΕΙΑΣ, ΜΑΡΑΘΟΣ ΗΛΕΙΑΣ, ΜΗΛΕΑ ΗΛΕΙΑΣ, ΜΙΝΘΗ ΗΛΕΙΑΣ, ΜΠΟΥΡΜΠΟΥΛΑΣ ΗΛΕΙΑΣ, ΝΕΟΧΩΡΙ ΞΗΡΟΧΩΡΙΟΥ ΗΛΕΙΑΣ, ΞΗΡΟΧΩΡΙ ΗΛΕΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΤΡΥΠΩΝ ΗΛΕΙΑΣ, ΠΑΛΙΟ ΠΡΑΣΙΔΑΚΙ ΗΛΕΙΑΣ, ΠΑΝΑΓΙΑ ΞΗΡΟΧΩΡΙΟΥ ΗΛΕΙΑΣ, ΠΑΝΑΓΙΑ ΣΜΕΡΝΑΣ ΗΛΕΙΑΣ, ΠΑΝΑΓΙΕΣ ΗΛΕΙΑΣ, ΠΑΝΟΡΑΜΑ ΗΛΕΙΑΣ, ΠΡΑΣΙΔΑΚΙ ΗΛΕΙΑΣ, ΡΕΒΕΛΑΙΙΚΑ ΗΛΕΙΑΣ, ΡΟΔΙΝΑ ΗΛΕΙΑΣ, ΣΜΕΡΝΑ ΗΛΕΙΑΣ, ΣΧΙΝΟΙ ΗΛΕΙΑΣ, ΤΡΑΝΗ ΛΑΚΑ ΗΛΕΙΑΣ, ΧΡΥΣΟΧΩΡΙ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27055', Area: 'ΑΝΕΜΟΧΩΡΑΚΙ ΗΛΕΙΑΣ, ΒΡΙΝΑ ΗΛΕΙΑΣ, ΓΡΑΙΚΑΣ ΗΛΕΙΑΣ, ΓΡΥΛΛΟΣ ΗΛΕΙΑΣ, ΚΑΛΥΒΑΚΙΑ ΟΛΥΜΠΙΑΣ ΗΛΕΙΑΣ, ΚΑΤΩ ΣΑΜΙΚΟ ΗΛΕΙΑΣ, ΚΛΕΙΔΙ ΗΛΕΙΑΣ, ΚΡΕΣΤΕΝΑ ΗΛΕΙΑΣ, ΚΡΟΥΝΟΙ ΗΛΕΙΑΣ, ΜΑΚΡΙΣΙΑ ΗΛΕΙΑΣ, ΜΟΣΧΟΥΛΑ ΗΛΕΙΑΣ, ΝΕΑ ΚΑΛΥΒΑΚΙΑ ΗΛΕΙΑΣ, ΝΕΑ ΣΚΙΛΛΟΥΝΤΙΑ ΗΛΕΙΑΣ, ΝΕΟ ΧΩΡΙΟ ΗΛΕΙΑΣ, ΠΛΟΥΤΟΧΩΡΙ ΗΛΕΙΑΣ, ΠΟΡΟΣ ΗΛΕΙΑΣ, ΡΑΧΕΣ ΗΛΕΙΑΣ, ΣΑΜΙΚΟ ΗΛΕΙΑΣ, ΣΚΙΛΛΟΥΝΤΙΑ ΗΛΕΙΑΣ, ΦΡΑΓΚΟΚΚΛΗΣΙΑ ΗΛΕΙΑΣ, ΦΡΙΞΑ ΗΛΕΙΑΣ, ΧΑΝΙ ΓΡΥΛΛΟΥ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27056', Area: 'ΚΡΥΟΝΕΡΙ ΗΛΕΙΑΣ ΗΛΕΙΑΣ, ΚΡΥΟΝΕΡΙ ΟΛΥΜΠΙΑΣ ΗΛΕΙΑΣ, ΛΕΠΡΕΟ ΗΛΕΙΑΣ, ΝΕΑ ΦΙΓΑΛΕΙΑ ΗΛΕΙΑΣ, ΣΚΟΥΠΑΣ ΗΛΕΙΑΣ, ΤΑΞΙΑΡΧΕΣ ΗΛΕΙΑΣ, ΤΡΙΑΝΤΑ ΗΛΕΙΑΣ, ΦΑΣΚΟΜΗΛΙΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27058', Area: 'ΑΓΡΙΔΙ ΗΛΕΙΑΣ, ΑΛΦΕΙΟΥΣΑ ΗΛΕΙΑΣ, ΑΝΕΜΟΧΩΡΙ ΗΛΕΙΑΣ, ΕΠΙΤΑΛΙΟ ΗΛΕΙΑΣ, ΚΑΛΛΙΚΩΜΟ ΗΛΕΙΑΣ, ΛΑΔΙΚΟ ΗΛΕΙΑΣ, ΠΑΡΑΛΙΑ ΕΠΙΤΑΛΙΟΥ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27061', Area: 'ΑΓΙΟΣ ΒΛΑΣΗΣ ΜΥΡΩΝΙΩΝ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΣΩΣΤΗΣ ΜΕΣΣΗΝΙΑΣ, ΑΜΠΕΛΙΩΝΑ ΜΕΣΣΗΝΙΑΣ, ΑΜΥΓΔΑΛΙΕΣ ΗΛΕΙΑΣ, ΑΝΔΡΙΤΣΑΙΝΑ ΗΛΕΙΑΣ, ΒΡΕΣΤΟ ΗΛΕΙΑΣ, ΔΡΑΓΩΓΙ ΗΛΕΙΑΣ, ΘΕΙΣΟΑ ΗΛΕΙΑΣ, ΚΑΚΑΛΕΤΡΙ ΜΕΣΣΗΝΙΑΣ, ΚΑΡΜΙ ΗΛΕΙΑΣ, ΚΑΣΤΡΟΥΓΚΑΙΝΑ ΗΛΕΙΑΣ, ΚΑΤΩ ΑΜΥΓΔΑΛΙΕΣ ΗΛΕΙΑΣ, ΚΛΗΜΑ ΗΛΕΙΑΣ, ΚΟΥΦΟΠΟΥΛΟ ΗΛΕΙΑΣ, ΚΡΑΝΑ ΗΛΕΙΑΣ, ΚΩΤΙΛΙ ΑΡΚΑΔΙΑΣ, ΛΙΝΙΣΤΑΙΝΑ ΗΛΕΙΑΣ, ΛΟΓΓΟ ΗΛΕΙΑΣ, ΜΑΡΙΝΑ ΜΕΣΣΗΝΙΑΣ, ΜΑΤΕΣΙ ΗΛΕΙΑΣ, ΜΠΑΛΑΙΙΚΑ ΗΛΕΙΑΣ, ΜΥΛΟΙ ΗΛΕΙΑΣ, ΜΥΡΩΝΙΑ ΗΛΕΙΑΣ, ΝΕΔΑ ΜΕΣΣΗΝΙΑΣ, ΠΑΛΑΤΟΣ ΑΡΚΑΔΙΑΣ, ΠΕΡΙΒΟΛΙΑ ΗΛΕΙΑΣ, ΠΕΤΡΑ ΜΕΣΣΗΝΙΑΣ, ΠΕΤΡΑΛΩΝΑ ΗΛΕΙΑΣ, ΠΛΑΤΕΙΑ ΗΛΕΙΑΣ, ΡΑΜΑ ΜΥΡΩΝΙΩΝ ΗΛΕΙΑΣ, ΡΟΒΙΑ ΗΛΕΙΑΣ, ΣΚΛΗΡΟΣ ΜΕΣΣΗΝΙΑΣ, ΣΤΟΜΙΟ ΗΛΕΙΑΣ, ΣΤΡΟΓΓΥΛΟ ΑΡΚΑΔΙΑΣ, ΣΥΚΕΕΣ ΗΛΕΙΑΣ, ΦΑΝΑΡΙ ΟΛΥΜΠΙΑΣ ΗΛΕΙΑΣ, ΦΙΓΑΛΕΙΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27063', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΤΣΙΠΙΑΝΩΝ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΝΤΡΩΝΙΟΥ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΥΡΓΟΥ ΗΛΕΙΑΣ, ΑΜΥΓΔΑΛΗ ΗΛΕΙΑΣ, ΑΝΤΡΩΝΙ ΗΛΕΙΑΣ, ΑΣΤΡΑΣ ΗΛΕΙΑΣ, ΚΑΚΟΤΑΡΙ ΗΛΕΙΑΣ, ΚΑΛΥΒΙΑ ΑΣΤΡΑ ΗΛΕΙΑΣ, ΚΑΛΥΒΙΑ ΚΡΥΟΒΡΥΣΗΣ ΗΛΕΙΑΣ, ΚΕΡΕΣΟΒΑ ΗΛΕΙΑΣ, ΚΡΥΟΒΡΥΣΗ ΗΛΕΙΑΣ, ΛΑΜΠΕΙΑ ΗΛΕΙΑΣ, ΟΡΕΙΝΗ ΗΛΕΙΑΣ, ΠΑΛΑΙΟΦΥΤΙΑ ΗΛΕΙΑΣ, ΠΑΝΟΠΟΥΛΟΣ ΗΛΕΙΑΣ, ΤΣΙΠΙΑΝΑ ΗΛΕΙΑΣ, ΧΑΝΙΑ ΣΠΑΡΤΟΥΛΙΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27064', Area: 'ΑΓΙΑ ΑΝΝΑ ΗΛΕΙΑΣ, ΑΡΒΑΝΙΤΗΣ ΗΛΕΙΑΣ, ΒΑΡΒΑΡΙΝΑ ΗΛΕΙΑΣ, ΓΟΥΜΕΡΟ ΗΛΕΙΑΣ, ΚΑΡΑΤΟΥΛΑ ΗΛΕΙΑΣ, ΚΑΡΥΑ ΗΛΕΙΑΣ, ΚΑΤΣΟΜΑΛΙΑΡΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΛΕΙΔΕΡΕΙΚΑ ΗΛΕΙΑΣ, ΚΛΙΝΔΙΑ ΗΛΕΙΑΣ, ΚΟΥΤΣΟΧΕΡΑ ΗΛΕΙΑΣ, ΛΑΝΘΙ ΗΛΕΙΑΣ, ΜΑΓΟΥΛΑ ΗΛΕΙΑΣ, ΜΑΡΜΑΡΑ ΗΛΕΙΑΣ, ΜΟΝΗ ΚΡΕΜΑΣΤΗΣ ΗΛΕΙΑΣ, ΜΟΥΖΑΚΙ ΗΛΕΙΑΣ, ΠΕΥΚΗ ΗΛΕΙΑΣ, ΣΙΤΟΧΩΡΙ ΗΛΕΙΑΣ, ΣΟΠΙΟ ΗΛΕΙΑΣ, ΧΑΡΙΑ ΗΛΕΙΑΣ, ΧΕΙΜΑΔΙΟ ΗΛΕΙΑΣ, ΩΛΕΝΗ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27065', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΛΑΤΑΝΟΥ ΗΛΕΙΑΣ, ΑΜΠΑΡΙ ΗΛΕΙΑΣ, ΑΡΧΑΙΑ ΟΛΥΜΠΙΑ ΗΛΕΙΑΣ, ΑΡΧΑΙΑ ΠΙΣΑ ΗΛΕΙΑΣ, ΑΣΠΡΑ ΣΠΙΤΙΑ ΗΛΕΙΑΣ, ΒΑΣΙΛΑΚΙ ΗΛΕΙΑΣ, ΓΥΡΟΣ ΛΟΥΒΡΟΥ ΗΛΕΙΑΣ, ΔΙΕΘΝΗΣ ΟΛΥΜΠΙΑΚΗ ΑΚΑΔΗΜΙΑ ΗΛΕΙΑΣ, ΔΡΟΥΒΑ ΗΛΕΙΑΣ, ΚΑΜΕΝΑ ΗΛΕΙΑΣ, ΚΑΡΟΥΤΕΣ ΗΛΕΙΑΣ, ΚΑΤΩ ΣΤΡΕΦΙ ΗΛΕΙΑΣ, ΚΛΑΔΕΟΣ ΗΛΕΙΑΣ, ΚΟΣΚΙΝΑ ΗΛΕΙΑΣ, ΛΙΝΑΡΙΑ ΗΛΕΙΑΣ, ΛΟΥΒΡΟ ΗΛΕΙΑΣ, ΜΑΓΕΙΡΑΣ ΗΛΕΙΑΣ, ΜΙΡΑΚΑ ΗΛΕΙΑΣ, ΜΟΥΡΙΑ ΗΛΕΙΑΣ, ΝΕΑ ΚΑΜΕΝΑ ΗΛΕΙΑΣ, ΞΗΡΟΚΑΜΠΟΣ ΗΛΕΙΑΣ, ΟΛΥΜΠΙΑΣ ΗΛΕΙΑΣ, ΠΕΥΚΕΣ ΗΛΕΙΑΣ, ΠΛΑΤΑΝΟΣ ΗΛΕΙΑΣ, ΥΨΗΛΟ ΗΛΕΙΑΣ, ΦΑΝΑΡΑΣ ΑΡΧΑΙΑΣ ΟΛΥΜΠΙΑΣ ΗΛΕΙΑΣ, ΦΛΟΚΑΣ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27066', Area: 'ΑΙ ΓΙΑΝΝΑΚΗΣ ΗΛΕΙΑΣ, ΑΧΛΑΔΙΝΗ ΗΛΕΙΑΣ, ΒΙΛΛΙΑ ΗΛΕΙΑΣ, ΔΟΥΚΑ ΗΛΕΙΑΣ, ΚΑΜΠΟΣ ΝΕΜΟΥΤΑ ΗΛΕΙΑΣ, ΚΑΜΠΟΣ ΝΕΡΑΙΔΑΣ ΗΛΕΙΑΣ, ΚΑΣΤΑΝΙΑ ΗΛΕΙΑΣ, ΚΟΥΜΑΝΗ ΗΛΕΙΑΣ, ΚΟΥΤΣΟΥΡΟΥΜΠΑΣ ΗΛΕΙΑΣ, ΛΑΛΑ ΗΛΕΙΑΣ, ΛΑΣΔΙΚΑ ΗΛΕΙΑΣ, ΜΗΛΙΕΣ ΗΛΕΙΑΣ, ΝΕΑ ΠΕΡΣΑΙΝΑ ΗΛΕΙΑΣ, ΝΕΜΟΥΤΑ ΗΛΕΙΑΣ, ΝΕΡΑΙΔΑ ΗΛΕΙΑΣ, ΠΕΡΣΑΙΝΑ ΗΛΕΙΑΣ, ΠΟΘΟΣ ΗΛΕΙΑΣ, ΤΣΑΠΑΡΑΙΙΚΑ ΗΛΕΙΑΣ, ΦΟΛΟΗ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27067', Area: 'ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΚΑΤΑΚΟΛΟΥ ΗΛΕΙΑΣ, ΚΑΒΟΥΡΙ ΗΛΕΙΑΣ, ΚΑΤΑΚΟΛΟ ΗΛΕΙΑΣ, ΚΑΤΩ ΚΑΒΟΥΡΙ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27069', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΗΛΙΑΣ ΠΗΝΕΙΑΣ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΣΙΜΟΠΟΥΛΟΥ ΗΛΕΙΑΣ, ΑΓΝΑΝΤΑ ΗΛΕΙΑΣ, ΑΓΡΑΠΙΔΟΧΩΡΙ ΗΛΕΙΑΣ, ΑΚΡΟΠΟΤΑΜΙΑ ΗΛΕΙΑΣ, ΑΜΠΕΛΑΚΙΑ ΗΛΕΙΑΣ, ΑΝΘΩΝΑΣ ΗΛΕΙΑΣ, ΑΠΙΔΟΥΛΑ ΗΛΕΙΑΣ, ΑΥΓΗ ΗΛΕΙΑΣ, ΒΑΛΜΗ ΗΛΕΙΑΣ, ΒΕΛΑΝΙΔΙ ΗΛΕΙΑΣ, ΒΟΥΛΙΑΓΜΕΝΗ ΗΛΕΙΑΣ, ΓΑΒΡΑΚΙΑ ΗΛΕΙΑΣ, ΔΑΦΝΗ ΠΗΝΕΙΑΣ ΗΛΕΙΑΣ, ΔΑΦΝΙΩΤΙΣΣΑ ΗΛΕΙΑΣ, ΕΦΥΡΑ ΗΛΕΙΑΣ, ΚΑΛΑΘΑΣ ΗΛΕΙΑΣ, ΚΑΛΟ ΠΑΙΔΙ ΗΛΕΙΑΣ, ΚΑΜΠΟΣ ΗΛΕΙΑΣ ΗΛΕΙΑΣ, ΚΑΜΠΟΣ ΠΑΛΑΙΟΒΑΡΒΑΣΑΙΝΑΣ ΗΛΕΙΑΣ, ΚΕΝΤΡΟ ΗΛΕΙΑΣ, ΚΕΡΑΜΙΔΙΑ ΗΛΕΙΑΣ ΗΛΕΙΑΣ, ΚΕΡΑΜΙΔΙΑ ΠΡΑΣΙΝΟΥ ΗΛΕΙΑΣ, ΚΟΛΟΚΥΘΑΣ ΗΛΕΙΑΣ, ΚΟΤΡΩΝΑ ΗΛΕΙΑΣ, ΚΡΥΟΝΕΡΙ ΠΗΝΕΙΑΣ ΗΛΕΙΑΣ, ΛΑΓΑΝΑΣ ΗΛΕΙΑΣ, ΛΑΤΑΣ ΗΛΕΙΑΣ, ΛΟΥΚΑΣ ΗΛΕΙΑΣ, ΜΑΖΑΡΑΚΙ ΗΛΕΙΑΣ, ΟΙΝΟΗ ΗΛΕΙΑΣ, ΠΙΡΙ ΗΛΕΙΑΣ, ΠΡΙΝΑΡΙ ΗΛΕΙΑΣ, ΠΡΟΔΡΟΜΟΣ ΗΛΕΙΑΣ, ΡΟΔΙΑ ΗΛΕΙΑΣ, ΡΟΥΠΑΚΙΑ ΒΕΛΑΝΙΔΙΟΥ ΗΛΕΙΑΣ, ΣΙΜΟΠΟΥΛΟ ΗΛΕΙΑΣ, ΣΚΛΙΒΑ ΗΛΕΙΑΣ, ΣΟΥΛΙ ΗΛΕΙΑΣ, ΩΡΑΙΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27100', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΚΟΡΑΚΟΧΩΡΙΟΥ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΝΔΡΑΒΙΔΑΣ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΛΑΙΟΒΑΡΒΑΣΑΙΝΑΣ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΗΛΙΑΣ ΛΕΤΡΙΝΩΝ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΛΕΤΡΙΝΩΝ ΗΛΕΙΑΣ, ΑΛΠΟΧΩΡΙ ΗΛΕΙΑΣ, ΑΛΦΕΙΟΣ ΗΛΕΙΑΣ, ΑΜΠΕΛΩΝΑΣ ΗΛΕΙΑΣ, ΑΝΘΟΠΥΡΓΟΣ ΗΛΕΙΑΣ, ΒΑΡΒΑΣΑΙΝΑ ΗΛΕΙΑΣ, ΒΟΥΝΑΡΓΟ ΗΛΕΙΑΣ, ΒΡΟΧΙΤΣΑ ΗΛΕΙΑΣ, ΒΥΤΙΝΑΙΙΚΑ ΕΛΑΙΩΝΑ ΗΛΕΙΑΣ, ΒΥΤΙΝΑΙΙΚΑ ΝΕΟΧΩΡΙΟΥ ΜΥΡΤΟΥΝΤΙΩΝ ΗΛΕΙΑΣ, ΓΛΥΚΟΡΙΖΟ ΠΡΑΣΙΝΟΥ ΗΛΕΙΑΣ, ΓΡΑΝΙΤΣΑΙΙΚΑ ΗΛΕΙΑΣ, ΕΛΑΙΩΝΑΣ ΗΛΕΙΑΣ, ΙΤΙΑ ΗΛΕΙΑΣ, ΚΑΒΑΣΙΛΑΚΙΑ ΗΛΕΙΑΣ, ΚΑΛΑΚΑΙΪΚΑ ΗΛΕΙΑΣ, ΚΑΛΛΙΘΕΑ ΚΟΡΑΚΟΧΩΡΙΟΥ ΗΛΕΙΑΣ, ΚΑΠΑΝΔΡΙΤΙ ΗΛΕΙΑΣ, ΚΑΤΣΑΡΟΣ ΗΛΕΙΑΣ, ΚΑΤΩ ΒΑΡΒΑΣΑΙΝΑ ΗΛΕΙΑΣ, ΚΟΛΙΡΕΙΚΕΣ ΠΑΡΑΓΚΕΣ ΗΛΕΙΑΣ, ΚΟΛΙΡΙΟ ΗΛΕΙΑΣ, ΚΟΡΑΚΟΧΩΡΙ ΗΛΕΙΑΣ, ΚΟΡΥΦΗ ΗΛΕΙΑΣ, ΚΟΥΖΟΥΛΙΟ ΗΛΕΙΑΣ, ΚΥΑΝΗ ΑΚΤΗ ΗΛΕΙΑΣ, ΛΑΣΤΑΙΙΚΑ ΗΛΕΙΑΣ, ΛΕΒΕΝΤΟΧΩΡΙ ΗΛΕΙΑΣ, ΜΟΝΗ ΣΚΑΦΙΔΙΑΣ ΗΛΕΙΑΣ, ΜΟΝΗ ΦΡΑΓΚΟΠΗΔΗΜΑΤΟΣ ΗΛΕΙΑΣ, ΜΠΟΥΚΑ ΗΛΕΙΑΣ, ΜΥΡΤΙΑ ΗΛΕΙΑΣ, ΞΥΛΟΚΕΡΑ ΗΛΕΙΑΣ, ΠΑΛΑΙΟΒΑΡΒΑΣΑΙΝΑ ΗΛΕΙΑΣ, ΠΑΛΑΤΑΣ ΗΛΕΙΑΣ, ΠΑΤΡΟΝΙΚΟΛΑΙΪΚΑ ΗΛΕΙΑΣ, ΠΡΑΣΙΝΟ ΗΛΕΙΑΣ, ΠΥΡΓΙ ΗΛΕΙΑΣ, ΠΥΡΓΟΣ ΗΛΕΙΑΣ, ΡΟΖΕΙΚΑ ΗΛΕΙΑΣ, ΣΑΛΜΩΝΗ ΗΛΕΙΑΣ, ΣΚΑΦΙΔΙΑ ΗΛΕΙΑΣ, ΣΚΟΥΡΟΧΩΡΙ ΗΛΕΙΑΣ, ΣΤΑΜΑΤΕΛΑΙΙΚΑ ΗΛΕΙΑΣ, ΣΥΝΤΡΙΑΔΑ ΗΛΕΙΑΣ, ΦΟΝΑΙΤΙΚΑ ΗΛΕΙΑΣ, ΧΑΝΑΚΙΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27131', Area: 'ΠΥΡΓΟΥ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27200', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΔΟΥΝΑΙΙΚΩΝ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΜΑΛΙΑΔΑΣ ΗΛΕΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΜΑΛΙΑΔΑΣ ΗΛΕΙΑΣ, ΑΜΑΛΙΑΔΑ ΗΛΕΙΑΣ, ΑΜΠΕΛΟΚΑΜΠΟΣ ΗΛΕΙΑΣ, ΑΝΑΛΗΨΗ ΓΕΡΑΚΙΟΥ ΗΛΕΙΑΣ, ΑΝΑΛΗΨΗ ΚΑΣΤΡΟΥ ΗΛΕΙΑΣ, ΑΡΧΑΙΑ ΗΛΙΔΑ ΗΛΕΙΑΣ, ΑΣΤΕΡΑΙΙΚΑ ΗΛΕΙΑΣ, ΓΕΡΑΚΙ ΗΛΕΙΑΣ, ΔΑΝΙΚΑ ΗΛΕΙΑΣ, ΔΟΥΝΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΑΡΔΑΜΑΣ ΗΛΕΙΑΣ, ΚΑΣΙΔΙΑΡΗΣ ΗΛΕΙΑΣ, ΚΑΤΩ ΚΕΡΤΕΖΑΙΙΚΑ ΗΛΕΙΑΣ, ΚΟΥΡΟΥΤΑ ΗΛΕΙΑΣ, ΚΡΥΟΝΕΡΟ ΗΛΕΙΑΣ, ΜΑΡΑΘΕΑ ΗΛΕΙΑΣ, ΠΑΛΑΙΟΛΑΝΘΗ ΗΛΕΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΗΛΕΙΑΣ ΗΛΕΙΑΣ, ΠΑΛΟΥΚΙ ΗΛΕΙΑΣ, ΠΑΝΑΓΙΑ ΑΜΑΛΙΑΔΑΣ ΗΛΕΙΑΣ, ΠΑΡΑΛΙΑ ΡΟΒΙΑΤΑΣ ΗΛΕΙΑΣ, ΠΕΡΙΣΤΕΡΙ ΗΛΕΙΑΣ, ΠΕΤΡΟΥΛΕΣ ΗΛΕΙΑΣ, ΡΟΒΙΑΤΑ ΗΛΕΙΑΣ, ΡΩΜΕΙΚΑ ΒΑΡΘΟΛΟΜΙΟΥ ΗΛΕΙΑΣ, ΣΑΒΑΛΙΑ ΗΛΕΙΑΣ, ΤΣΑΦΛΕΙΚΑ ΗΛΕΙΑΣ, ΤΣΙΧΛΕΙΚΑ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '27300', Area: 'ΑΓΙΑ ΜΑΥΡΑ ΗΛΕΙΑΣ, ΑΥΓΕΙΟ ΗΛΕΙΑΣ, ΓΑΣΤΟΥΝΗ ΗΛΕΙΑΣ, ΗΛΙΔΑ ΗΛΕΙΑΣ, ΚΑΒΑΣΙΛΑΣ ΗΛΕΙΑΣ, ΚΑΛΥΒΙΑ ΗΛΙΔΟΣ ΗΛΕΙΑΣ, ΚΟΡΟΙΒΟΣ ΗΛΕΙΑΣ, ΛΕΥΚΟΧΩΡΙ ΗΛΕΙΑΣ, ΡΟΥΠΑΚΙ ΗΛΕΙΑΣ, ΣΩΣΤΙ ΗΛΕΙΑΣ', Prefecture: 'Ηλείας' },
    { PostalCode: '59031', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΗΜΑΘΙΑΣ, ΑΓΚΑΘΙΑ ΗΜΑΘΙΑΣ, ΒΕΡΓΙΝΑ ΗΜΑΘΙΑΣ, ΚΥΨΕΛΗ ΗΜΑΘΙΑΣ, ΜΕΛΙΚΗ ΗΜΑΘΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΑΘΑΝΑΣΙΟΥ ΣΦΗΝΙΣΣΗΣ ΗΜΑΘΙΑΣ, ΝΕΟΚΑΣΤΡΟ ΗΜΑΘΙΑΣ, ΝΕΟΣ ΠΡΟΔΡΟΜΟΣ ΗΜΑΘΙΑΣ, ΠΑΛΑΤΙΤΣΙΑ ΗΜΑΘΙΑΣ, ΠΡΟΔΡΟΜΟΣ ΗΜΑΘΙΑΣ, ΣΥΚΕΑ ΗΜΑΘΙΑΣ, ΤΡΙΛΟΦΙΑ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59033', Area: 'ΜΑΚΡΟΧΩΡΙ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59035', Area: 'ΚΟΠΑΝΟΣ ΗΜΑΘΙΑΣ, ΛΕΥΚΑΔΙΑ ΗΜΑΘΙΑΣ, ΜΟΝΟΣΠΙΤΑ ΗΜΑΘΙΑΣ, ΣΤΕΝΗΜΑΧΟΣ ΗΜΑΘΙΑΣ, ΧΑΡΙΕΣΣΑ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59100', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΗΜΑΘΙΑΣ, ΑΓΙΑ ΜΑΡΙΝΑ ΗΜΑΘΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΗΜΑΘΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΦΥΤΕΙΑΣ ΗΜΑΘΙΑΣ, ΑΜΜΟΣ ΗΜΑΘΙΑΣ, ΑΣΩΜΑΤΑ ΗΜΑΘΙΑΣ, ΒΕΡΟΙΑ ΗΜΑΘΙΑΣ, ΓΕΩΡΓΙΑΝΟΙ ΗΜΑΘΙΑΣ, ΔΑΣΚΙΟ ΗΜΑΘΙΑΣ, ΔΙΑΒΑΤΟΣ ΗΜΑΘΙΑΣ, ΕΛΑΦΙΝΑ ΗΜΑΘΙΑΣ, ΕΞΩΚΚΛΗΣΙ ΗΜΑΘΙΑΣ, ΚΑΒΑΣΙΛΑ ΗΜΑΘΙΑΣ, ΚΑΛΗ ΠΑΝΑΓΙΑ ΗΜΑΘΙΑΣ, ΚΑΣΤΑΝΕΑ ΗΜΑΘΙΑΣ, ΚΑΤΩ ΒΕΡΜΙΟ ΗΜΑΘΙΑΣ, ΚΑΤΩ ΚΟΜΝΗΝΕΙΟ ΗΜΑΘΙΑΣ, ΚΟΜΝΗΝΕΙΟ ΗΜΑΘΙΑΣ, ΚΟΥΛΟΥΡΑ ΗΜΑΘΙΑΣ, ΚΟΥΜΑΡΙΑ ΗΜΑΘΙΑΣ, ΚΟΥΤΣΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΚΥΔΩΝΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΛΑΖΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΛΑΖΟΧΩΡΙΟΝ ΗΜΑΘΙΑΣ, ΛΕΥΚΟΠΕΤΡΑ ΗΜΑΘΙΑΣ, ΛΙΑΝΟΒΡΟΧΙ ΗΜΑΘΙΑΣ, ΜΕΣΗ ΗΜΑΘΙΑΣ, ΜΕΤΟΧΙ ΠΡΟΔΡΟΜΟΥ ΗΜΑΘΙΑΣ, ΜΙΚΡΗ ΣΑΝΤΑ ΗΜΑΘΙΑΣ, ΜΟΝΗ ΤΙΜΙΟΥ ΠΡΟΔΡΟΜΟΥ ΗΜΑΘΙΑΣ, ΝΕΑ ΛΥΚΟΓΙΑΝΝΗ ΗΜΑΘΙΑΣ, ΝΕΑ ΝΙΚΟΜΗΔΕΙΑ ΗΜΑΘΙΑΣ, ΞΕΧΑΣΜΕΝΗ ΗΜΑΘΙΑΣ, ΞΗΡΟΛΙΒΑΔΟ ΗΜΑΘΙΑΣ, ΠΑΛΑΙΑ ΛΥΚΟΓΙΑΝΝΗ ΗΜΑΘΙΑΣ, ΠΑΤΡΙΔΑ ΗΜΑΘΙΑΣ, ΠΟΛΥΔΕΝΔΡΟ ΗΜΑΘΙΑΣ, ΠΟΡΟΣ ΗΜΑΘΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΗΜΑΘΙΑΣ, ΡΑΧΗ ΗΜΑΘΙΑΣ, ΡΑΨΟΜΑΝΙΚΙ ΗΜΑΘΙΑΣ, ΡΙΖΩΜΑΤΑ ΗΜΑΘΙΑΣ, ΣΑΝΤΑ ΗΜΑΘΙΑΣ, ΣΤΑΥΡΟΣ ΗΜΑΘΙΑΣ, ΣΦΗΚΙΑ ΗΜΑΘΙΑΣ, ΤΑΓΑΡΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΤΡΙΛΟΦΟΣ ΗΜΑΘΙΑΣ, ΤΡΙΠΟΤΑΜΟΣ ΗΜΑΘΙΑΣ, ΦΥΤΕΙΑ ΗΜΑΘΙΑΣ, ΧΑΡΑΔΡΑ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59131', Area: 'ΒΕΡΟΙΑΣ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59132', Area: 'ΒΕΡΟΙΑΣ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59200', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΝΑΟΥΣΑΣ ΗΜΑΘΙΑΣ, ΑΓΙΟΣ ΠΑΥΛΟΣ ΗΜΑΘΙΑΣ, ΑΝΩ ΣΕΛΙ ΗΜΑΘΙΑΣ, ΑΡΚΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΓΙΑΝΝΑΚΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΕΠΙΣΚΟΠΗ ΗΜΑΘΙΑΣ, ΜΑΡΙΝΑ ΗΜΑΘΙΑΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΗΜΑΘΙΑΣ, ΝΑΟΥΣΑ ΗΜΑΘΙΑΣ, ΠΗΓΑΔΙΑ ΗΜΑΘΙΑΣ, ΠΟΛΛΑ ΝΕΡΑ ΗΜΑΘΙΑΣ, ΡΟΔΑΚΙΝΕΑ ΗΜΑΘΙΑΣ, ΡΟΔΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΣΤΑΘΜΟΣ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '59300', Area: 'ΑΛΕΞΑΝΔΡΕΙΑ ΗΜΑΘΙΑΣ, ΒΡΥΣΑΚΙ ΗΜΑΘΙΑΣ, ΕΠΙΣΚΟΠΗ ΗΜΑΘΙΑΣ ΗΜΑΘΙΑΣ, ΚΑΛΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΚΑΜΠΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΚΕΦΑΛΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΚΟΡΥΦΗ ΗΜΑΘΙΑΣ, ΛΟΥΤΡΟΣ ΗΜΑΘΙΑΣ, ΝΕΟΧΩΡΙ ΗΜΑΘΙΑΣ, ΝΗΣΕΛΙ ΗΜΑΘΙΑΣ, ΝΗΣΕΛΛΟΥΔΙ ΗΜΑΘΙΑΣ, ΝΗΣΙ ΗΜΑΘΙΑΣ, ΠΑΛΑΙΟ ΣΚΥΛΙΤΣΙ ΗΜΑΘΙΑΣ, ΠΑΛΑΙΟΧΩΡΑ ΗΜΑΘΙΑΣ, ΣΧΟΙΝΑΣ ΗΜΑΘΙΑΣ', Prefecture: 'Ημαθίας' },
    { PostalCode: '70002', Area: 'ΒΟΡΙΖΙΑ ΗΡΑΚΛΕΙΟΥ, ΖΑΡΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΜΑΡΕΣ ΗΡΑΚΛΕΙΟΥ, ΚΟΥΡΤΕΣ ΗΡΑΚΛΕΙΟΥ, ΛΑΛΟΥΜΑΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΚΡΕΣ ΗΡΑΚΛΕΙΟΥ, ΜΕΣΗΣΚΛΙ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΑΝΤΩΝΙΟΥ ΒΡΟΝΤΗΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΜΟΡΟΝΙΟ ΗΡΑΚΛΕΙΟΥ, ΝΥΒΡΙΤΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΑΝΑΓΙΑ ΖΑΡΟΥ ΗΡΑΚΛΕΙΟΥ, ΦΑΡΙ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70003', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΘΩΜΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΜΟΥΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΠΟΜΑΡΜΑ ΗΡΑΚΛΕΙΟΥ, ΑΡΚΑΔΙ ΗΡΑΚΛΕΙΟΥ, ΒΟΡΡΟΣ ΗΡΑΚΛΕΙΟΥ, ΓΕΝΝΑ ΗΡΑΚΛΕΙΟΥ, ΔΟΥΛΙΟ ΗΡΑΚΛΕΙΟΥ, ΔΡΟΣΟΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΡΔΑΜΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΜΟΥΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΕΡΑΤΟΚΕΦΑΛΙΟ ΗΡΑΚΛΕΙΟΥ, ΚΟΛΕΝΑ ΗΡΑΚΛΕΙΟΥ, ΛΑΡΑΝΙ ΗΡΑΚΛΕΙΟΥ, ΜΑΣΤΡΑΧΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΜΕΓΑΛΗ ΒΡΥΣΗ ΗΡΑΚΛΕΙΟΥ, ΠΑΝΑΣΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΕΙΡΟΥΝΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΠΡΕΒΕΛΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΠΡΙΝΙΑΣ ΜΑΛΕΒΙΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΡΑΠΤΗΣ ΗΡΑΚΛΕΙΟΥ, ΤΖΑΝΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΨΑΛΙΔΑ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70004', Area: 'ΑΓΙΑ ΜΟΝΗ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΒΙΑΝΝΟΥ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΒΙΑΝΝΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΒΙΑΝΝΟΥ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΒΙΑΝΝΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΓΟΥΒΩΝ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΒΙΑΝΝΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΜΙΡΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΒΙΑΝΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΒΙΓΛΑ ΛΑΣΙΘΙΟΥ, ΑΝΩ ΚΟΡΝΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΡΒΗ ΛΑΣΙΘΙΟΥ, ΑΡΒΗ ΝΕΑ ΛΑΣΙΘΙΟΥ, ΒΑΧΟΣ ΛΑΣΙΘΙΟΥ, ΔΕΡΜΑΤΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΑΜΙ ΛΑΣΙΘΙΟΥ, ΚΑΛΑΜΙΟ ΗΡΑΚΛΕΙΟΥ, ΚΑΣΤΡΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΒΙΑΝΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΒΙΓΛΕΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΣΥΜΗ ΗΡΑΚΛΕΙΟΥ, ΚΑΨΑΛΗ ΗΡΑΚΛΕΙΟΥ, ΚΕΡΑΤΟΚΑΜΠΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΕΦΑΛΟΒΡΥΣΟ ΗΡΑΚΛΕΙΟΥ, ΚΟΚΚΑΛΑΡΑ ΗΡΑΚΛΕΙΟΥ, ΚΡΕΒΒΑΤΑΣ ΗΡΑΚΛΕΙΟΥ, ΛΑΤΟΜΙΑ ΑΓΙΟΥ ΒΑΣΙΛΕΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΛΑΤΟΜΙΑ ΠΕΥΚΟΥ ΗΡΑΚΛΕΙΟΥ, ΛΟΥΤΡΑΚΙ ΑΝΩ ΒΙΑΝΝΟΥ ΗΡΑΚΛΕΙΟΥ, ΜΕΣΗ ΗΡΑΚΛΕΙΟΥ, ΝΕΑ ΑΡΒΗ ΗΡΑΚΛΕΙΟΥ, ΞΕΡΟΚΑΜΠΟΣ ΛΑΣΙΘΙΟΥ, ΠΕΡΒΟΛΑ ΗΡΑΚΛΕΙΟΥ, ΠΕΥΚΟΣ ΗΡΑΚΛΕΙΟΥ, ΣΚΑΦΙΔΙΑ ΗΡΑΚΛΕΙΟΥ, ΣΤΑΥΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΣΥΚΟΛΟΓΟΣ ΛΑΣΙΘΙΟΥ, ΣΥΝΔΟΝΙΑ ΛΑΣΙΘΙΟΥ, ΤΕΡΤΣΑ ΛΑΣΙΘΙΟΥ, ΦΑΦΛΑΓΚΟΣ ΛΑΣΙΘΙΟΥ, ΧΑΝΔΡΑΣ ΗΡΑΚΛΕΙΟΥ, ΧΟΝΔΡΟΣ ΗΡΑΚΛΕΙΟΥ, ΨΑΡΗ ΦΟΡΑΔΑ ΛΑΣΙΘΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70005', Area: 'ΑΒΔΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΚΕΡΑ ΗΡΑΚΛΕΙΟΥ, ΓΩΝΙΕΣ ΧΕΡΣΟΝΗΣΟΥ ΗΡΑΚΛΕΙΟΥ, ΚΕΡΑ ΗΡΑΚΛΕΙΟΥ, ΚΡΑΣΙΟ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΚΑΡΔΙΩΤΙΣΣΗΣ ΗΡΑΚΛΕΙΟΥ, ΜΟΧΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΟΤΑΜΙΕΣ ΗΡΑΚΛΕΙΟΥ, ΣΦΕΝΔΥΛΙ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70006', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΠΕΔΙΑΔΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΜΑΡΙΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΚΑΡΟΥΖΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΑΠΟΣΤΟΛΟΙ ΗΡΑΚΛΕΙΟΥ, ΑΡΜΑΧΑ ΗΡΑΚΛΕΙΟΥ, ΑΡΧΑΓΓΕΛΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΣΚΟΙ ΗΡΑΚΛΕΙΟΥ, ΒΟΝΗ ΗΡΑΚΛΕΙΟΥ, ΓΑΛΑΤΑΣ ΗΡΑΚΛΕΙΟΥ, ΓΑΛΕΝΙΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΓΕΡΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΕΥΑΓΓΕΛΙΣΜΟΣ ΗΡΑΚΛΕΙΟΥ, ΖΩΦΟΡΟΙ ΗΡΑΚΛΕΙΟΥ, ΘΡΑΨΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΚΑΣΤΑΜΟΝΙΤΣΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΣΤΕΛΛΙ ΠΕΔΙΑΔΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΚΑΡΟΥΖΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΛΑΓΟΣ ΗΡΑΚΛΕΙΟΥ, ΛΙΛΙΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΛΥΤΤΟΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΘΙΑ ΗΡΑΚΛΕΙΟΥ, ΜΠΙΤΖΑΡΙΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΠΟΛΥΘΕΑ ΗΡΑΚΛΕΙΟΥ, ΣΑΜΠΑΣ ΗΡΑΚΛΕΙΟΥ, ΣΚΛΑΒΕΡΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΣΜΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΤΖΙΓΚΟΥΝΑ ΚΑΣΤΕΛΛΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΤΟΙΧΟΣ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70007', Area: 'ΜΑΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΣΤΑΛΙΔΑ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70008', Area: 'ΑΙΤΑΝΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΝΩΠΟΛΗ ΗΡΑΚΛΕΙΟΥ, ΒΑΘΕΙΑΝΟΣ ΚΑΜΠΟΣ ΗΡΑΚΛΕΙΟΥ, ΓΑΛΙΠΕ ΗΡΑΚΛΕΙΟΥ, ΓΑΛΙΦΑ ΗΡΑΚΛΕΙΟΥ, ΕΛΑΙΑ ΗΡΑΚΛΕΙΟΥ, ΕΠΑΝΩ ΒΑΘΕΙΑ ΗΡΑΚΛΕΙΟΥ, ΕΠΙΣΚΟΠΗ ΗΡΑΚΛΕΙΟΥ, ΚΑΙΝΟΥΡΓΙΟ ΧΩΡΙΟ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΒΑΘΕΙΑ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΙΩΑΝΝΟΥ ΘΕΟΛΟΓΟΥ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΑΓΚΑΡΑΘΟΥ ΗΡΑΚΛΕΙΟΥ, ΣΓΟΥΡΟΚΕΦΑΛΙ ΗΡΑΚΛΕΙΟΥ, ΣΚΟΠΕΛΑ ΗΡΑΚΛΕΙΟΥ, ΣΤΑΜΝΟΙ ΗΡΑΚΛΕΙΟΥ, ΧΟΧΛΑΚΙΕΣ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70010', Area: 'ΑΓΙΑ ΑΝΝΑ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΧΕΝΤΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΑ ΦΩΤΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΑΧΕΝΤΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΜΥΓΔΑΛΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΑΚΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΚΑΣΤΕΛΛΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΑΠΟΣΕΛΕΜΙ ΗΡΑΚΛΕΙΟΥ, ΑΡΜΑΝΩΓΕΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΧΕΝΤΡΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΒΟΡΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΔΑΜΑΝΙΑ ΗΡΑΚΛΕΙΟΥ, ΔΕΜΑΤΙ ΗΡΑΚΛΕΙΟΥ, ΔΩΡΑΚΙΟ ΗΡΑΚΛΕΙΟΥ, ΕΘΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΣΤΕΛΛΙ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΑΚΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΚΑΛΥΒΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΚΑΣΤΕΛΛΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΚΕΦΑΛΑΔΟΣ ΗΡΑΚΛΕΙΟΥ, ΛΙΓΟΡΤΥΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΔΕ ΗΡΑΚΛΕΙΟΥ, ΜΕΛΙΔΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΜΕΣΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΜΕΤΑΞΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΕΠΑΝΩΣΗΦΗ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΚΟΥΔΟΥΜΑ ΗΡΑΚΛΕΙΟΥ, ΜΟΥΡΝΙΑ ΗΡΑΚΛΕΙΟΥ, ΝΕΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΠΑΡΑΝΥΜΦΟΙ ΗΡΑΚΛΕΙΟΥ, ΠΑΡΘΕΝΙ ΗΡΑΚΛΕΙΟΥ, ΠΛΑΚΙΩΤΙΣΣΑ ΗΡΑΚΛΕΙΟΥ, ΠΛΑΤΑΝΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΠΡΑΙΤΩΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΠΡΙΝΙΑΣ ΠΥΡΓΟΥ ΗΡΑΚΛΕΙΟΥ, ΠΡΟΤΟΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΠΥΡΑΘΙΟ ΗΡΑΚΛΕΙΟΥ, ΠΥΡΓΟΣ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΡΟΤΑΣΙ ΗΡΑΚΛΕΙΟΥ, ΤΕΦΕΛΙ ΗΡΑΚΛΕΙΟΥ, ΤΟΥΡΛΩΤΗ ΗΡΑΚΛΕΙΟΥ, ΤΡΕΙΣ ΕΚΚΛΗΣΙΕΣ ΗΡΑΚΛΕΙΟΥ, ΤΣΟΥΤΣΟΥΡΟΣ ΗΡΑΚΛΕΙΟΥ, ΦΑΒΡΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΦΙΛΙΠΠΟΙ ΗΡΑΚΛΕΙΟΥ, ΧΑΡΑΚΑΣ ΗΡΑΚΛΕΙΟΥ, ΧΑΡΑΚΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70012', Area: 'ΑΓΙΟΙ ΔΕΚΑ ΗΡΑΚΛΕΙΟΥ, ΑΜΠΕΛΟΥΖΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΠΕΣΩΚΑΡΙΟ ΗΡΑΚΛΕΙΟΥ, ΑΤΣΙΠΑΔΕΣ ΗΡΑΚΛΕΙΟΥ, ΒΑΓΙΟΝΙΑ ΗΡΑΚΛΕΙΟΥ, ΒΑΛΗΣ ΗΡΑΚΛΕΙΟΥ, ΒΑΣΙΛΙΚΑ ΑΝΩΓΕΙΑ ΗΡΑΚΛΕΙΟΥ, ΒΑΣΙΛΙΚΗ ΗΡΑΚΛΕΙΟΥ, ΒΟΥΡΒΟΥΛΙΤΗΣ ΗΡΑΚΛΕΙΟΥ, ΓΚΑΓΚΑΛΕΣ ΗΡΑΚΛΕΙΟΥ, ΙΝΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΝΔΗΛΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΣΤΕΛΛΙ ΚΑΙΝΟΥΡΓΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΚΟΥΜΑΣΑ ΗΡΑΚΛΕΙΟΥ, ΛΟΥΚΙΑ ΗΡΑΚΛΕΙΟΥ, ΜΗΤΡΟΠΟΛΗ ΗΡΑΚΛΕΙΟΥ, ΠΑΠΑΔΟΓΙΑΝΝΗΣ ΗΡΑΚΛΕΙΟΥ, ΠΛΑΤΑΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΛΟΥΤΗ ΗΡΑΚΛΕΙΟΥ, ΠΛΩΡΑ ΗΡΑΚΛΕΙΟΥ, ΣΤΟΛΟΙ ΗΡΑΚΛΕΙΟΥ, ΤΡΥΠΗΤΑ ΗΡΑΚΛΕΙΟΥ, ΦΛΑΘΙΑΚΕΣ ΗΡΑΚΛΕΙΟΥ, ΧΟΥΣΤΟΥΛΙΑΝΑ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70013', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΚΡΟΥΣΩΝΑ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΜΥΡΩΝΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΑΣΙΤΕΣ ΗΡΑΚΛΕΙΟΥ, ΒΟΥΤΕΣ ΗΡΑΚΛΕΙΟΥ, ΙΕΡΑ ΜΟΝΗ ΓΟΡΓΟΛΑΪΝΗ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΑΣΙΤΕΣ ΗΡΑΚΛΕΙΟΥ, ΚΙΘΑΡΙΣ ΗΡΑΚΛΕΙΟΥ, ΝΙΣΗ ΗΡΑΚΛΕΙΟΥ, ΠΕΝΤΑΜΟΔΙ ΗΡΑΚΛΕΙΟΥ, ΠΕΤΡΟΚΕΦΑΛΟ ΓΑΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΠΥΡΓΟΥ ΗΡΑΚΛΕΙΟΥ, ΣΑΡΧΟΣ ΗΡΑΚΛΕΙΟΥ, ΣΤΑΥΡΑΚΙΑ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70014', Area: 'ΑΓΙΑ ΠΕΛΑΓΙΑ ΠΕΔΙΑΔΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΧΕΡΣΟΝΗΣΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΚΙΣΑΡΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΡΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΑΝΑΛΗΨΗ ΗΡΑΚΛΕΙΟΥ, ΑΝΙΣΣΑΡΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΠΟΣΕΛΕΜΗΣ ΗΡΑΚΛΕΙΟΥ, ΒΟΡΟΣ ΓΟΥΒΩΝ ΗΡΑΚΛΕΙΟΥ, ΒΡΑΧΟΚΗΠΟΣ ΗΡΑΚΛΕΙΟΥ, ΓΟΥΒΕΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΟ ΧΩΡΙΟ ΓΟΥΒΩΝ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΓΟΥΒΕΣ ΗΡΑΚΛΕΙΟΥ, ΚΟΞΑΡΗ ΗΡΑΚΛΕΙΟΥ, ΚΟΥΤΟΥΛΟΥΦΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΛΙΜΕΝΑΣ ΧΕΡΣΟΝΗΣΟΥ ΗΡΑΚΛΕΙΟΥ, ΠΕΛΕΚΗΤΑ ΗΡΑΚΛΕΙΟΥ, ΠΙΣΚΟΠΙΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΣΚΟΤΕΙΝΟ ΗΡΑΚΛΕΙΟΥ, ΧΑΡΑΣΟ ΗΡΑΚΛΕΙΟΥ, ΧΑΤΖΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΧΕΡΣΟΝΗΣΟΣ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70016', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΚΑΜΩΤΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΠΟΙΝΙΟ ΗΡΑΚΛΕΙΟΥ, ΑΣΗΜΙ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΒΕΛΟΥΛΙ ΗΡΑΚΛΕΙΟΥ, ΔΙΟΝΥΣΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΠΕΤΑΝΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΛΟΥΡΕΣ ΗΡΑΚΛΕΙΟΥ, ΜΕΤΟΧΙΑ ΣΟΚΑΡΑ ΗΡΑΚΛΕΙΟΥ, ΜΟΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΠΑΝΑΓΙΑ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΣΟΚΑΡΑΣ ΗΡΑΚΛΕΙΟΥ, ΣΤΑΒΙΕΣ ΗΡΑΚΛΕΙΟΥ, ΣΤΕΡΝΕΣ ΗΡΑΚΛΕΙΟΥ, ΦΟΥΡΝΟΦΑΡΑΓΓΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70100', Area: 'ΑΓΙΕΣ ΠΑΡΑΣΚΙΕΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ NIKOY KAZANTZAKH ΗΡΑΚΛΕΙΟΥ, ΑΜΠΕΛΑ ΗΡΑΚΛΕΙΟΥ, ΑΣΤΡΑΚΟΙ ΗΡΑΚΛΕΙΟΥ, ΒΑΘΥΠΕΤΡΟ ΗΡΑΚΛΕΙΟΥ, ΕΠΑΝΩ ΑΡΧΑΝΕΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΛΟΝΗ ΗΡΑΚΛΕΙΟΥ, ΚΑΡΝΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΑΛΑΓΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΑΡΧΑΝΕΣ ΗΡΑΚΛΕΙΟΥ, ΚΕΛΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΕΡΑ ΕΛΑΙΟΥΣΑ ΗΡΑΚΛΕΙΟΥ, ΚΟΥΝΑΒΟΙ ΗΡΑΚΛΕΙΟΥ, ΜΥΡΤΙΑ ΗΡΑΚΛΕΙΟΥ, ΠΑΤΣΙΔΕΣ ΗΡΑΚΛΕΙΟΥ, ΠΕΖΑ ΗΡΑΚΛΕΙΟΥ, ΧΟΥΔΕΤΣΙ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70200', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΤΥΜΠΑΚΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΒΩΡΟΙ ΗΡΑΚΛΕΙΟΥ, ΓΡΗΓΟΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΑΜΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΟΧΩΡΑΦΙΤΗΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΥΒΙΑ ΤΥΜΠΑΚΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΚΑΜΗΛΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΚΙΣΣΟΙ ΗΡΑΚΛΕΙΟΥ, ΚΛΗΜΑ ΗΡΑΚΛΕΙΟΥ, ΚΟΚΚΙΝΟΣ ΠΥΡΓΟΣ ΗΡΑΚΛΕΙΟΥ, ΛΑΓΟΛΙ ΗΡΑΚΛΕΙΟΥ, ΜΑΓΑΡΙΚΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΜΑΤΑΛΑ ΗΡΑΚΛΕΙΟΥ, ΝΕΟ ΚΑΛΑΜΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΠΙΤΣΙΔΙΑ ΗΡΑΚΛΕΙΟΥ, ΣΙΒΑΣ ΗΡΑΚΛΕΙΟΥ, ΣΚΟΥΡΒΟΥΛΑ ΗΡΑΚΛΕΙΟΥ, ΤΥΜΠΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΦΑΝΕΡΩΜΕΝΗ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70300', Area: 'ΑΓΙΑ ΣΕΜΝΗ ΗΡΑΚΛΕΙΟΥ, ΑΛΑΓΝΙ ΗΡΑΚΛΕΙΟΥ, ΑΜΟΥΡΓΕΛΛΕΣ ΗΡΑΚΛΕΙΟΥ, ΑΝΩ ΠΟΥΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΑΡΚΑΛΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΑΡΧΟΝΤΙΚΟ ΗΡΑΚΛΕΙΟΥ, ΑΣΤΡΙΤΣΙ ΗΡΑΚΛΕΙΟΥ, ΑΥΛΗ ΗΡΑΚΛΕΙΟΥ, ΒΑΚΙΩΤΕΣ ΗΡΑΚΛΕΙΟΥ, ΓΑΡΙΠΑ ΗΡΑΚΛΕΙΟΥ, ΔΡΑΠΕΤΙ ΗΡΑΚΛΕΙΟΥ, ΖΙΝΤΑ ΗΡΑΚΛΕΙΟΥ, ΙΝΙΟ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΟ ΧΩΡΙΟ ΑΡΚΑΛΟΧΩΡΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΥΒΙΑ ΜΟΝΟΦΑΤΣΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΚΑΡΑΒΑΔΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΣΑΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΠΟΥΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΡΑΣΑΣ ΗΡΑΚΛΕΙΟΥ, ΛΑΓΟΥΤΑ ΗΡΑΚΛΕΙΟΥ, ΛΕΥΚΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΜΑΧΑΙΡΑ ΗΡΑΚΛΕΙΟΥ, ΜΕΛΕΣΕΣ ΗΡΑΚΛΕΙΟΥ, ΜΙΚΡΑ ΕΠΙΣΚΟΠΗ ΗΡΑΚΛΕΙΟΥ, ΜΙΛΛΙΑΡΗΣΙ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΑΣΤΗΡΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΜΟΥΣΟΥΤΑ ΗΡΑΚΛΕΙΟΥ, ΜΠΑΔΙΑ ΗΡΑΚΛΕΙΟΥ, ΝΙΠΙΔΙΤΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΑΝΑΓΙΑ ΠΕΔΙΑΔΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΑΝΟΡΑΜΑ ΗΡΑΚΛΕΙΟΥ, ΠΑΡΤΙΡΑ ΗΡΑΚΛΕΙΟΥ, ΠΑΤΣΙΔΕΡΟΣ ΗΡΑΚΛΕΙΟΥ, ΡΟΥΣΣΟΧΩΡΙΑ ΗΡΑΚΛΕΙΟΥ, ΣΚΙΝΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΣΤΙΡΟΝΑΣ ΗΡΑΚΛΕΙΟΥ, ΦΙΛΙΣΙΑ ΗΡΑΚΛΕΙΟΥ, ΧΑΝΔΡΟΥ ΗΡΑΚΛΕΙΟΥ, ΧΟΥΜΕΡΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '70400', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΜΑΡΚΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΠΟΛΥΧΝΟΣ ΗΡΑΚΛΕΙΟΥ, ΓΑΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΠΠΑΡΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΚΟΥΣΕΣ ΗΡΑΚΛΕΙΟΥ, ΛΙΣΤΑΡΟΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΚΡΟΝΗΣΙ ΗΡΑΚΛΕΙΟΥ, ΜΙΚΡΟΝΗΣΙ ΗΡΑΚΛΕΙΟΥ, ΜΟΙΡΕΣ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΚΑΛΥΒΙΑΝΗΣ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΟΧΩΡΟ ΗΡΑΚΛΕΙΟΥ, ΠΕΤΡΟΚΕΦΑΛΟ ΜΟΙΡΩΝ ΗΡΑΚΛΕΙΟΥ, ΡΟΥΦΑΣ ΗΡΑΚΛΕΙΟΥ, ΤΡΑΦΟΣ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71201', Area: 'ΗΡΑΚΛΕΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71202', Area: 'ΔΡΑΚΟΥΛΙΑΡΗΣ ΗΡΑΚΛΕΙΟΥ, ΛΟΦΟΥΠΟΛΗ ΗΡΑΚΛΕΙΟΥ, ΣΕΜΕΛΗ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71301', Area: 'ΗΡΑΚΛΕΙΟΥ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71303', Area: 'ΗΡΑΚΛΕΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71304', Area: 'ΓΑΖΙ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71305', Area: 'ΗΡΑΚΛΕΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71306', Area: 'ΗΡΑΚΛΕΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71307', Area: 'ΗΡΑΚΛΕΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71405', Area: 'ΜΑΛΕΒΥΖΙΟΥ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71408', Area: 'ΗΡΑΚΛΕΙΟΥ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71409', Area: 'ΗΡΑΚΛΕΙΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '71500', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΤΕΜΕΝΟΥΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΑ ΜΑΡΙΝΑ ΜΑΛΕΒΙΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ BIANOY ΗΡΑΚΛΕΙΟΥ, ΑΓΙΑ ΠΕΛΑΓΙΑ ΓΑΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ BIANOY ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΓΑΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΡΟΔΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΓΑΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΣΥΛΛΑΣ ΗΡΑΚΛΕΙΟΥ, ΑΘΑΝΑΤΟΙ ΗΡΑΚΛΕΙΟΥ, ΑΜΜΟΥΔΑΡΑ ΗΡΑΚΛΕΙΟΥ, ΑΣΤΡΙΝΟ ΗΡΑΚΛΕΙΟΥ, ΑΧΛΑΔΑ ΗΡΑΚΛΕΙΟΥ, ΒΑΣΙΛΕΙΕΣ ΗΡΑΚΛΕΙΟΥ, ΒΛΥΧΙΑ ΗΡΑΚΛΕΙΟΥ, ΓΙΟΦΥΡΑΚΙΑ ΗΡΑΚΛΕΙΟΥ, ΓΟΥΡΝΕΣ ΓΟΥΒΩΝ ΗΡΑΚΛΕΙΟΥ, ΓΟΥΡΝΕΣ ΗΡΑΚΛΕΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΔΑΜΑΣΤΑ ΗΡΑΚΛΕΙΟΥ, ΕΡΓΑΤΙΚΕΣ ΚΑΤΟΙΚΙΕΣ ΗΡΑΚΛΕΙΟΥ, ΖΕΡΒΟΥ ΜΕΤΟΧΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΒΡΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΛΛΙΘΕΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΜΑΡΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΜΠΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΠΕΤΑΝΑΚΙ ΜΕΤΟΧΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΡΤΕΡΟΣ ΚΑΛΛΙΘΕΑΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΚΑΛΕΣΙΑ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΛΟΥΤΡΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΚΕΡΑΜΟΥΤΣΙ ΗΡΑΚΛΕΙΟΥ, ΚΕΦΑΛΟΓΙΑΝΝΗΣ ΗΡΑΚΛΕΙΟΥ, ΚΝΩΣΟΣ ΗΡΑΚΛΕΙΟΥ, ΚΟΛΛΥΒΑΣ ΗΡΑΚΛΕΙΟΥ, ΚΟΡΑΚΟΒΟΥΝΙ ΗΡΑΚΛΕΙΟΥ, ΚΟΡΦΕΣ ΗΡΑΚΛΕΙΟΥ, ΛΙΝΟΠΕΡΑΜΑΤΑ ΗΡΑΚΛΕΙΟΥ, ΛΟΥΤΡΑΚΙ ΜΑΛΕΒΙΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΜΑΛΑΔΕΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΡΑΘΙΤΗΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΡΑΘΟΣ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΣΑΒΒΑΘΙΑΝΩΝ ΗΡΑΚΛΕΙΟΥ, ΞΕΡΟΠΟΤΑΜΟΣ ΗΡΑΚΛΕΙΟΥ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΗΡΑΚΛΕΙΟΥ, ΠΑΝΤΑΝΑΣΣΑ ΗΡΑΚΛΕΙΟΥ, ΠΑΠΑ ΤΙΤΟΥ ΜΕΤΟΧΙ ΗΡΑΚΛΕΙΟΥ, ΠΑΡΑΛΙΑ ΦΟΔΕΛΕ ΗΡΑΚΛΕΙΟΥ, ΠΡΑΣΑΣ ΗΡΑΚΛΕΙΟΥ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΡΟΔΙΑ ΗΡΑΚΛΕΙΟΥ, ΣΙΛΑΜΟΣ ΗΡΑΚΛΕΙΟΥ, ΣΚΑΛΑΝΙ ΗΡΑΚΛΕΙΟΥ, ΣΠΗΛΙΑ ΗΡΑΚΛΕΙΟΥ, ΤΣΑΓΚΑΡΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΤΥΛΙΣΟΣ ΗΡΑΚΛΕΙΟΥ, ΦΟΔΕΛΕ ΗΡΑΚΛΕΙΟΥ, ΦΟΙΝΙΚΙΑ ΗΡΑΚΛΕΙΟΥ, ΧΑΝΙ ΚΟΚΚΙΝΗ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Ηρακλείου' },
    { PostalCode: '46030', Area: 'ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΘΕΣΠΡΩΤΙΑΣ, ΑΡΙΛΛΑΣ ΘΕΣΠΡΩΤΙΑΣ, ΕΛΕΥΘΕΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΛΟΔΙΚΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΡΤΕΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΤΑΒΟΘΡΑ ΘΕΣΠΡΩΤΙΑΣ, ΜΑΖΑΡΑΚΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΜΑΡΓΑΡΙΤΙ ΘΕΣΠΡΩΤΙΑΣ, ΜΕΣΟΒΟΥΝΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΜΗΛΟΚΟΚΚΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΝΑΙΝΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΕΡΔΙΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΥΡΓΙ ΘΕΣΠΡΩΤΙΑΣ', Prefecture: 'Θεσπρωτίας' },
    { PostalCode: '46100', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΘΥΑΜΙΔΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΡΑΠΟΤΑΜΟΥ ΘΕΣΠΡΩΤΙΑΣ, ΑΜΠΕΛΙΑ ΝΕΑΣ ΣΕΛΕΥΚΕΙΑΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΡΓΥΡΟΤΟΠΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΒΑΣΙΛΙΚΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΒΡΥΣΗ ΘΕΣΠΡΩΤΙΑΣ, ΓΡΑΙΚΟΧΩΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΔΙΛΟΦΟ ΘΕΣΠΡΩΤΙΑΣ, ΔΡΑΜΕΣΗ ΘΕΣΠΡΩΤΙΑΣ, ΔΡΙΜΙΤΣΑ ΘΕΣΠΡΩΤΙΑΣ, ΔΡΟΣΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΕΘΝΙΚΗ ΑΝΤΙΣΤΑΣΗ ΘΕΣΠΡΩΤΙΑΣ, ΗΓΟΥΜΕΝΙΤΣΑ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΡΑΒΟΣΤΑΣΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΣΤΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΤΩ ΚΟΡΙΤΙΑΝΗ ΘΕΣΠΡΩΤΙΑΣ, ΚΕΣΤΡΙΝΗ ΘΕΣΠΡΩΤΙΑΣ, ΚΟΔΡΑ ΘΕΣΠΡΩΤΙΑΣ, ΚΟΡΙΤΙΑΝΗ ΘΕΣΠΡΩΤΙΑΣ, ΚΡΥΟΒΡΥΣΗ ΘΕΣΠΡΩΤΙΑΣ, ΛΑΔΟΧΩΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΛΑΚΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΛΙΟΦΥΤΑ ΘΕΣΠΡΩΤΙΑΣ, ΜΑΥΡΟΥΔΙ ΘΕΣΠΡΩΤΙΑΣ, ΜΥΛΟΙ ΘΕΣΠΡΩΤΙΑΣ, ΝΕΑ ΣΕΛΕΥΚΕΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΝΟΥΝΕΣΑΤΙ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΡΑΠΟΤΑΜΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΠΕΣΤΑΝΙΩΤΙΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΗΓΑΔΙ ΘΕΣΠΡΩΤΙΑΣ, ΠΛΑΤΑΡΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΟΛΥΝΕΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΡΑΓΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΣΕΜΕΡΙΖΑ ΘΕΣΠΡΩΤΙΑΣ, ΣΚΟΡΠΙΩΝΑ ΘΕΣΠΡΩΤΙΑΣ, ΣΥΒΟΤΑ ΘΕΣΠΡΩΤΙΑΣ, ΦΑΣΚΟΜΗΛΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΦΙΛΟΘΕΗ ΘΕΣΠΡΩΤΙΑΣ, ΦΡΑΓΜΑ ΚΑΛΑΜΑ ΘΕΣΠΡΩΤΙΑΣ', Prefecture: 'Θεσπρωτίας' },
    { PostalCode: '46200', Area: 'ΑΒΑΡΙΤΣΑ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΑ ΚΥΡΙΑΚΗ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΕΟΧΩΡΙΟΥ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΡΑΜΥΘΙΑΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΟΣ ΔΟΝΑΤΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΟΡΑ ΘΕΣΠΡΩΤΙΑΣ, ΑΜΠΕΛΙΑ ΣΟΥΛΙΟΥ ΘΕΣΠΡΩΤΙΑΣ, ΑΣΦΑΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΒΑΛΑΝΙΔΙΑ ΙΩΑΝΝΙΝΩΝ, ΒΡΥΣΟΠΟΥΛΑ ΘΕΣΠΡΩΤΙΑΣ, ΓΚΡΙΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΔΑΦΝΟΥΛΑ ΘΕΣΠΡΩΤΙΑΣ, ΕΛΑΤΑΡΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΖΕΡΒΟΧΩΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΚΟΛΑΚΚΟΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΛΙΘΕΑ ΠΑΡΑΜΥΘΙΑΣ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΜΙΝΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΡΒΟΥΝΑΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΡΙΩΤΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΤΑΜΑΧΗ ΙΩΑΝΝΙΝΩΝ, ΚΕΦΑΛΟΒΡΥΣΟ ΘΕΣΠΡΩΤΙΑΣ, ΚΡΥΣΤΑΛΛΟΠΗΓΗ ΘΕΣΠΡΩΤΙΑΣ, ΚΥΡΑ ΠΑΝΑΓΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΝΕΟΧΩΡΙ ΠΑΡΑΜΥΘΙΑΣ ΘΕΣΠΡΩΤΙΑΣ, ΝΕΡΑΙΔΑ ΘΕΣΠΡΩΤΙΑΣ, ΞΗΡΟΛΟΦΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΓΚΡΑΤΕΣ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΡΑΜΥΘΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΡΔΑΛΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΠΕΝΤΕ ΕΚΚΛΗΣΙΕΣ ΘΕΣΠΡΩΤΙΑΣ, ΠΕΤΟΥΣΙ ΘΕΣΠΡΩΤΙΑΣ, ΠΕΤΡΟΒΙΤΣΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΗΛΟΓΡΑΝΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΚΩΤΗ ΘΕΣΠΡΩΤΙΑΣ, ΠΡΟΔΡΟΜΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΒΑΛΑΝΙΔΙΑΣ ΙΩΑΝΝΙΝΩΝ, ΡΑΠΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΡΑΧΟΥΛΙ ΘΕΣΠΡΩΤΙΑΣ, ΣΑΛΟΝΙΚΗ ΘΕΣΠΡΩΤΙΑΣ, ΣΕΒΑΣΤΟ ΘΕΣΠΡΩΤΙΑΣ, ΣΚΑΝΔΑΛΟ ΘΕΣΠΡΩΤΙΑΣ, ΧΡΥΣΑΥΓΗ ΘΕΣΠΡΩΤΙΑΣ, ΨΑΚΑ ΘΕΣΠΡΩΤΙΑΣ', Prefecture: 'Θεσπρωτίας' },
    { PostalCode: '46300', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΦΙΛΙΑΤΩΝ ΘΕΣΠΡΩΤΙΑΣ, ΑΓΙΟΣ ΑΡΣΕΝΙΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΕΤΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΑΝΩ ΠΑΛΑΙΟΚΚΛΗΣΙ ΘΕΣΠΡΩΤΙΑΣ, ΑΣΠΡΟΚΚΛΗΣΙ ΘΕΣΠΡΩΤΙΑΣ, ΑΧΛΑΔΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΒΡΥΣΕΛΛΑ ΘΕΣΠΡΩΤΙΑΣ, ΒΡΥΣΟΥΛΑ ΘΕΣΠΡΩΤΙΑΣ, ΓΕΡΟΠΛΑΤΑΝΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΓΙΡΟΜΕΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΓΟΛΑ ΘΕΣΠΡΩΤΙΑΣ, ΔΑΦΝΗ ΘΕΣΠΡΩΤΙΑΣ, ΔΟΝΑΤΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΕΛΑΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΜΠΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΤΩ ΞΕΧΩΡΟ ΘΕΣΠΡΩΤΙΑΣ, ΚΑΤΩ ΠΑΛΑΙΟΚΚΛΗΣΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΕΡΑΣΟΧΩΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΚΟΚΚΙΝΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΚΥΠΑΡΙΣΣΟ ΘΕΣΠΡΩΤΙΑΣ, ΚΩΤΣΙΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΜΑΥΡΟΝΕΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΞΕΧΩΡΟ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΛΑΜΠΑΣ ΘΕΣΠΡΩΤΙΑΣ, ΠΗΓΑΔΟΥΛΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΠΛΑΙΣΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΠΟΤΑΜΙΑ ΦΙΛΙΑΤΩΝ ΘΕΣΠΡΩΤΙΑΣ, ΡΙΖΟ ΘΕΣΠΡΩΤΙΑΣ, ΡΟΔΟΣΤΙΒΑ ΘΕΣΠΡΩΤΙΑΣ, ΣΑΓΙΑΔΑ ΘΕΣΠΡΩΤΙΑΣ, ΣΙΔΕΡΗ ΘΕΣΠΡΩΤΙΑΣ, ΣΙΤΑΝΙΑ ΘΕΣΠΡΩΤΙΑΣ, ΣΜΕΡΤΟΣ ΘΕΣΠΡΩΤΙΑΣ, ΤΡΙΚΟΡΥΦΟ ΘΕΣΠΡΩΤΙΑΣ, ΤΣΑΤΣΟΥΛΑΙΙΚΑ ΘΕΣΠΡΩΤΙΑΣ, ΦΑΝΕΡΩΜΕΝΗ ΘΕΣΠΡΩΤΙΑΣ, ΦΙΛΙΑΤΕΣ ΘΕΣΠΡΩΤΙΑΣ, ΦΟΙΝΙΚΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΧΛΟΜΟΣ ΡΙΖΟΥ ΘΕΣΠΡΩΤΙΑΣ', Prefecture: 'Θεσπρωτίας' },
    { PostalCode: '46404', Area: 'ΚΑΒΑΛΑΣ ΚΑΒΑΛΑΣ', Prefecture: 'Θεσπρωτίας' },
    { PostalCode: '54248', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54249', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54250', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54252', Area: 'ΘΕΣΣΑΛΟΝΙΚΗΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54351', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54352', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54453', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54454', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54500', Area: 'ΔΡΥΜΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΕΛΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΑΓΥΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΗΤΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΕΣΑΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΟΝΟΛΟΦΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΑ ΦΙΛΑΔΕΛΦΕΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΟΧΩΡΟΥΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΑΛΑΙΟΧΩΡΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΑΝΤΕΛΕΗΜΩΝΑΣ ΚΙΛΚΙΣ, ΠΕΝΤΑΛΟΦΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΤΡΩΤΟ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54621', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54622', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54623', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54624', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54625', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54626', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54627', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54628', Area: 'ΜΕΝΕΜΕΝΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54629', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54630', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54631', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54632', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54633', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54634', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54635', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54636', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54638', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54639', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54640', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54641', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54642', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54643', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54644', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54645', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54646', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '54655', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55131', Area: 'ΚΑΛΑΜΑΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55132', Area: 'ΚΑΛΑΜΑΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55133', Area: 'ΚΑΛΑΜΑΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55134', Area: 'ΚΑΛΑΜΑΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55135', Area: 'ΚΑΛΑΜΑΡΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55236', Area: 'ΠΥΛΑΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55337', Area: 'ΤΡΙΑΝΔΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55437', Area: 'ΝΕΑΠΟΛΗΣ - ΣΥΚΕΩΝ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55438', Area: 'ΑΓΙΟΣ ΠΑΥΛΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55534', Area: 'ΘΕΣΣΑΛΟΝΙΚΗΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΥΛΑΙΑΣ - ΧΟΡΤΙΑΤΗ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55535', Area: 'ΠΑΝΟΡΑΜΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '55536', Area: 'ΠΥΛΑΙΑΣ - ΧΟΡΤΙΑΤΗ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56121', Area: 'ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56122', Area: 'ΜΕΝΕΜΕΝΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56123', Area: 'ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56224', Area: 'ΕΥΟΣΜΟ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56225', Area: 'ΚΟΡΔΕΛΙΟΥ - ΕΥΟΣΜΟΥ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56226', Area: 'ΚΟΡΔΕΛΙΟΥ - ΕΥΟΣΜΟΥ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56238', Area: 'ΚΟΡΔΕΛΙΟΥ - ΕΥΟΣΜΟΥ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56334', Area: 'ΕΛΕΥΘΕΡΙΟ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56335', Area: 'ΠΑΥΛΟΥ ΜΕΛΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56404', Area: 'ΘΕΣΣΑΛΟΝΙΚΗ ΠΕΙΡΑΙΑΣ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56429', Area: 'ΑΝΘΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56430', Area: 'ΣΤΑΥΡΟΥΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56431', Area: 'ΣΤΑΥΡΟΥΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56436', Area: 'ΠΑΥΛΟΥ ΜΕΛΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56437', Area: 'ΠΑΥΛΟΥ ΜΕΛΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56532', Area: 'ΠΟΛΙΧΝΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56533', Area: 'ΠΟΛΙΧΝΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56535', Area: 'ΠΑΥΛΟΥ ΜΕΛΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56625', Area: 'ΣΥΚΙΕΣ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56626', Area: 'ΣΥΚΙΕΣ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56727', Area: 'ΝΕΑΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '56728', Area: 'ΝΕΑΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗ - ΠΡΟΑΣΤΙΑ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57001', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΘΕΡΜΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΙΩΑΝΝΗΣ ΘΕΟΛΟΓΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΗΛΙΕΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΑ ΡΑΙΔΕΣΤΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΟ ΡΥΣΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΥΚΕΕΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΤΑΓΑΡΑΔΕΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΤΡΙΑΔΙΟ ΘΕΡΜΗΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΦΑΡΜΑΚΑΙΙΚΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57002', Area: 'ΑΡΕΘΟΥΣΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΡΕΤΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΥΓΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΡΥΟΝΕΡΙ ΛΑΓΚΑΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΕΥΚΟΥΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΙΜΝΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΟΦΙΣΚΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΑΥΡΟΥΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΚΕΠΑΣΤΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΟΧΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΤΕΦΑΝΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57003', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57004', Area: 'ΝΕΑ ΚΕΡΑΣΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΑ ΜΗΧΑΝΙΩΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57006', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΑΣΙΛΙΚΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΓΑΛΑΡΙΝΟΣ  ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΑΚΚΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΙΒΑΔΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΟΥΤΡΑ ΘΕΡΜΗΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΟΝΟΠΗΓΑΔΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΡΙΣΤΕΡΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΡΙΝΟΧΩΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΣΟΥΡΩΤΗ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57007', Area: 'ΑΔΕΝΔΡΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΑΛΤΟΧΩΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΡΑΧΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΕΛΕΟΥΣΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΟΥΔΙΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΙΚΡΟ ΜΟΝΑΣΤΗΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΑΡΘΕΝΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΧΑΛΚΗΔΩΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57008', Area: 'ΙΩΝΙΑ ΘΕΣ/ΝΙΚΗΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57009', Area: 'ΚΑΛΟΧΩΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57010', Area: 'ΑΣΒΕΣΤΟΧΩΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57011', Area: 'ΑΓΧΙΑΛΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΚΡΟΠΟΤΑΜΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΑΘΥΛΑΚΚΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΓΕΦΥΡΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΑΣΤΑΝΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΠΑΛΑΙΙΚΑ ΚΙΛΚΙΣ, ΝΕΑ ΜΕΣΗΜΒΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΞΗΡΟΧΩΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΥΚΟΔΑΣΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΡΟΧΩΜΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57012', Area: 'ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΣΑΡΑΚΗΝΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΔΑΜ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΡΔΑΜΕΡΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΑΣΙΛΟΥΔΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΓΕΡΑΚΑΡΟΥ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΖΑΓΚΛΙΒΕΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΑΛΑΜΩΤΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΡΗΜΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΜΑΡΑΘΟΥΣΣΑ ΧΑΛΚΙΔΙΚΗΣ, ΜΕΛΙΣΣΟΥΡΓΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΕΣΟΚΩΜΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΤΡΟΚΕΡΑΣΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΛΑΤΑΝΟΧΩΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΛΑΤΕΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΑΡΑΚΗΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57013', Area: 'ΩΡΑΙΟΚΑΣΤΡΟ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57014', Area: 'ΑΝΩ ΣΤΑΥΡΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΑΜΒΑΚΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΑΛΥΒΙΑ ΒΑΡΒΑΡΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΜΙΚΡΗ ΒΟΛΒΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΟΔΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΑ ΜΑΔΥΤΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΟΛΥΜΠΙΑΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΡΕΝΤΙΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΤΑΥΡΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΧΡΥΣΗ ΑΚΤΗ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57017', Area: 'ΒΕΡΤΙΣΚΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΔΟΡΚΑΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΕΛΛΗΝΙΚΟ ΚΙΛΚΙΣ, ΕΥΑΓΓΕΛΙΣΤΡΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΘΕΟΔΟΣΙΑ ΚΙΛΚΙΣ, ΘΕΡΑΠΕΥΤΗΡΙΟ ΤΟΞΙΚΟΜΑΝΩΝ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΙΣΩΜΑ ΚΙΛΚΙΣ, ΚΑΡΤΕΡΕΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΕΦΑΛΟΧΩΡΙ ΣΕΡΡΩΝ, ΚΥΔΩΝΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΑΧΑΝΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΕΥΚΟΧΩΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΑΥΡΟΡΡΑΧΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΕΛΑΝΘΙΟ ΚΙΛΚΙΣ, ΝΙΚΟΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΞΥΛΟΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΡΙΖΑΝΑ ΚΙΛΚΙΣ, ΣΤΑΥΡΟΥΠΟΛΗ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57019', Area: 'ΑΓΓΕΛΟΧΩΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΙΒΑΔΑΚΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΟΙ ΕΠΙΒΑΤΕΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΡΑΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57021', Area: 'ΑΣΠΡΟΒΑΛΤΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΒΡΑΣΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΑ ΒΡΑΣΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57100', Area: 'ΑΓΡΟΣΥΚΙΑ ΠΕΛΛΗΣ, ΑΘΥΡΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΔΥΤΙΚΟ ΠΕΛΛΗΣ, ΚΟΥΦΑΛΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΙΒΑΔΙΤΣΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΡΑΧΩΝΑ ΠΕΛΛΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57200', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΠΕΡΙΒΟΛΑΚΙΟΥ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΝΑΛΗΨΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΑΣΣΗΡΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΓΑΛΗΝΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΔΡΑΚΟΝΤΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΕΞΑΜΙΛΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΕΥΑΓΓΕΛΙΣΜΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΗΡΑΚΛΕΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΑΒΑΛΛΑΡΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΟΛΧΙΚΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΡΙΘΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΛΑΓΚΑΔΑΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΙΚΡΟΚΩΜΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΟΣΣΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΝΤΕ ΒΡΥΣΕΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΕΡΙΒΟΛΑΚΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΟΛΥΔΕΝΔΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΡΟΦΗΤΗΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΤΙΒΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΧΟΛΑΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΧΡΥΣΑΥΓΗ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57300', Area: 'ΑΝΑΤΟΛΙΚΟ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΥΜΙΝΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΝΕΑ ΜΑΛΓΑΡΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΧΑΛΑΣΤΡΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57400', Area: 'ΒΑΛΤΟΤΟΠΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΣΙΝΔΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '57500', Area: 'ΑΝΩ ΣΧΟΛΑΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΕΠΑΝΟΜΗ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΑΡΔΙΑ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΚΑΤΩ ΣΧΟΛΑΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΜΕΣΗΜΕΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΠΛΑΓΙΑΡΙ ΘΕΣΣΑΛΟΝΙΚΗΣ, ΤΡΙΛΟΦΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Θεσσαλονίκης' },
    { PostalCode: '44001', Area: 'ΚΑΛΑΡΙΤΕΣ ΙΩΑΝΝΙΝΩΝ, ΚΗΠΙΝΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΜΜΑΤΑΚΙΑ ΙΩΑΝΝΙΝΩΝ, ΜΑΤΣΟΥΚΙ ΙΩΑΝΝΙΝΩΝ, ΜΕΛΙΣΣΟΥΡΓΟΙ ΑΡΤΑΣ, ΜΥΣΤΡΑΣ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΤΑΝΙΑ ΜΑΤΣΟΥΚΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΡΑΜΑΝΤΑ ΙΩΑΝΝΙΝΩΝ, ΠΡΟΣΗΛΙΟ ΙΩΑΝΝΙΝΩΝ, ΣΙΡΑΚΟ ΙΩΑΝΝΙΝΩΝ, ΤΣΟΠΕΛΑ ΙΩΑΝΝΙΝΩΝ, ΦΡΑΞΟΣ ΠΡΑΜΑΝΤΩΝ ΙΩΑΝΝΙΝΩΝ, ΧΡΙΣΤΟΙ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44002', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΙΩΑΝΝΙΝΩΝ, ΑΡΓΥΡΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΒΡΙΣΤΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΔΕΛΒΙΝΑΚΙ ΙΩΑΝΝΙΝΩΝ, ΔΙΜΟΚΟΡΙΟ ΙΩΑΝΝΙΝΩΝ, ΖΑΒΡΟΧΟ ΙΩΑΝΝΙΝΩΝ, ΚΑΣΤΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΚΑΣΤΑΝΙΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΛΑΒΔΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΚΕΡΑΣΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΚΤΙΣΜΑΤΑ ΙΩΑΝΝΙΝΩΝ, ΛΑΒΔΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΜΑΥΡΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΝΕΟΧΩΡΙ ΠΩΓΩΝΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΕΡΙΣΤΕΡΙ ΙΩΑΝΝΙΝΩΝ, ΣΤΑΥΡΟΔΡΟΜΙ ΠΩΓΩΝΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΣΤΡΑΤΙΝΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΤΕΡΙΑΧΙ ΙΩΑΝΝΙΝΩΝ, ΦΑΡΑΓΓΙ ΙΩΑΝΝΙΝΩΝ, ΧΑΡΑΥΓΗ ΙΩΑΝΝΙΝΩΝ, ΧΡΥΣΟΔΟΥΛΗ ΙΩΑΝΝΙΝΩΝ, ΨΗΛΟΚΑΣΤΡΟ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44003', Area: 'ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΙΩΑΝΝΙΝΩΝ, ΑΕΤΟΠΕΤΡΑ ΙΩΑΝΝΙΝΩΝ, ΑΡΑΧΩΒΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΒΑΣΙΛΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΒΑΤΑΤΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΒΛΑΧΑΤΑΝΟ ΙΩΑΝΝΙΝΩΝ, ΒΟΥΤΣΑΡΑΣ ΙΩΑΝΝΙΝΩΝ, ΒΡΟΝΤΙΣΜΕΝΗ ΙΩΑΝΝΙΝΩΝ, ΓΑΒΡΙΣΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΓΡΑΝΙΤΣΟΠΟΥΛΑ ΙΩΑΝΝΙΝΩΝ, ΔΑΦΝΟΦΥΤΟ ΙΩΑΝΝΙΝΩΝ, ΔΕΣΠΟΤΙΚΟ ΙΩΑΝΝΙΝΩΝ, ΔΡΑΓΟΥΜΗ  (ΠΑΛΙΟΥΡΗ) ΙΩΑΝΝΙΝΩΝ, ΕΚΚΛΗΣΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΖΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΙΕΡΟΜΝΗΜΗ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΚΑΡΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΣΤΡΙ ΒΑΣΙΛΟΠΟΥΛΟΥ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΑΡΡΑΚΤΗΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΑΕΤΟΠΕΤΡΑ ΙΩΑΝΝΙΝΩΝ, ΚΛΗΜΑΤΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΥΡΝΟΡΡΑΧΗ ΙΩΑΝΝΙΝΩΝ, ΛΕΥΚΟΘΕΑ ΙΩΑΝΝΙΝΩΝ, ΛΙΓΟΨΑ ΙΩΑΝΝΙΝΩΝ, ΛΙΘΙΝΟ ΙΩΑΝΝΙΝΩΝ, ΜΑΖΑΡΑΚΙ ΙΩΑΝΝΙΝΩΝ, ΜΕΛΙΣΣΙ ΙΩΑΝΝΙΝΩΝ, ΜΙΚΡΟ ΣΟΥΛΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΝΕΟΧΩΡΙ ΔΩΔΩΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΙΟΥΡΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΙΟΥΡΗ ΔΩΔΩΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΕΤΣΑΛΙ ΙΩΑΝΝΙΝΩΝ, ΠΡΩΤΟΠΑΠΠΑΣ ΙΩΑΝΝΙΝΩΝ, ΡΑΙΚΟ ΙΩΑΝΝΙΝΩΝ, ΡΙΑΧΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΡΙΖΟ ΙΩΑΝΝΙΝΩΝ, ΣΑΚΕΛΛΑΡΙΚΟ ΙΩΑΝΝΙΝΩΝ, ΣΟΥΛΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΦΩΤΕΙΝΟ ΙΩΑΝΝΙΝΩΝ, ΧΡΥΣΟΡΡΑΧΗ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44004', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΔΟΛΙΑΝΩΝ ΙΩΑΝΝΙΝΩΝ, ΑΛΩΝΑΚΙΑ ΙΩΑΝΝΙΝΩΝ, ΑΝΩ ΠΑΡΑΚΑΛΑΜΟΣ ΙΩΑΝΝΙΝΩΝ, ΑΝΩ ΡΑΒΕΝΙΑ ΙΩΑΝΝΙΝΩΝ, ΑΡΕΤΗ ΙΩΑΝΝΙΝΩΝ, ΒΙΓΛΑ ΙΩΑΝΝΙΝΩΝ, ΔΟΛΙΑΝΑ ΙΩΑΝΝΙΝΩΝ, ΕΛΑΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΠΑΚΙ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΡΑΒΕΝΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΥΚΛΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΚΟΧΛΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΛΙΟΥΜΠΑ ΙΩΑΝΝΙΝΩΝ, ΜΑΥΡΟΒΟΥΝΙ ΙΩΑΝΝΙΝΩΝ, ΜΑΥΡΟΝΟΡΟΣ ΙΩΑΝΝΙΝΩΝ, ΜΕΣΟΒΟΥΝΙ ΙΩΑΝΝΙΝΩΝ, ΜΟΝΗ ΓΕΝΝΗΣΙΟΥ ΘΕΟΤΟΚΟΥ ΒΕΛΛΑΣ ΙΩΑΝΝΙΝΩΝ, ΜΟΣΧΟΜΑΝΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΜΠΟΛΑΙΙΚΑ ΙΩΑΝΝΙΝΩΝ, ΝΕΓΡΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΠΑΗΔΟΝΙΑ ΙΩΑΝΝΙΝΩΝ, ΠΑΡΑΚΑΛΑΜΟΣ ΙΩΑΝΝΙΝΩΝ, ΡΕΠΕΤΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΣΙΤΑΡΙΑ ΙΩΑΝΝΙΝΩΝ, ΣΤΑΥΡΟΔΡΟΜΙ ΙΩΑΝΝΙΝΩΝ, ΤΣΑΠΑΡΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44006', Area: 'ΚΕΦΑΛΟΒΡΥΣΟ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44010', Area: 'ΒΡΥΣΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΓΥΦΤΟΚΑΜΠΟΣ ΙΩΑΝΝΙΝΩΝ, ΗΛΙΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΛΑΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΣΚΑΜΝΕΛΛΙ ΙΩΑΝΝΙΝΩΝ, ΤΣΕΠΕΛΟΒΟ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44013', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΜΟΝΟΛΙΘΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΑΕΤΟΡΡΑΧΗ ΙΩΑΝΝΙΝΩΝ, ΔΑΦΝΗ ΙΩΑΝΝΙΝΩΝ, ΔΑΦΝΩΤΗ ΙΩΑΝΝΙΝΩΝ, ΕΛΛΗΝΙΚΟ ΙΩΑΝΝΙΝΩΝ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΠΛΑΤΑΝΟΥΣΣΗΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΕΝΤΖΙ ΙΩΑΝΝΙΝΩΝ, ΚΟΡΙΤΙΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΚΩΣΤΗΤΣΙ ΙΩΑΝΝΙΝΩΝ, ΛΑΖΑΙΝΑ ΙΩΑΝΝΙΝΩΝ, ΜΑΧΑΛΑΣ ΙΩΑΝΝΙΝΩΝ, ΜΟΝΟΛΙΘΙΟ ΙΩΑΝΝΙΝΩΝ, ΜΠΟΥΚΟΡΙ ΙΩΑΝΝΙΝΩΝ, ΝΙΣΤΟΡΑ ΙΩΑΝΝΙΝΩΝ, ΞΗΡΟΒΟΥΝΙ ΙΩΑΝΝΙΝΩΝ, ΠΑΤΕΡΟ ΙΩΑΝΝΙΝΩΝ, ΠΗΓΑΔΙΑ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΙΣΙΑ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΤΑΝΟΥΣΣΑ ΙΩΑΝΝΙΝΩΝ, ΦΑΝΕΡΩΜΕΝΗ ΙΩΑΝΝΙΝΩΝ, ΦΟΡΤΟΣΙ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44014', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΔΕΜΑΤΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΔΕΜΑΤΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΑΜΠΕΛΟΣ ΙΩΑΝΝΙΝΩΝ, ΒΟΒΟΥΣΑ ΙΩΑΝΝΙΝΩΝ, ΒΟΥΤΑΝΣΑΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΓΡΕΒΕΝΙΤΙΟ ΙΩΑΝΝΙΝΩΝ, ΔΕΜΑΤΙ ΙΩΑΝΝΙΝΩΝ, ΔΕΡΒΕΝΙ ΙΩΑΝΝΙΝΩΝ, ΔΙΛΑΚΚΟ ΙΩΑΝΝΙΝΩΝ, ΔΟΛΙΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΕΛΑΤΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΙΤΕΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΣΤΑΝΩΝΑΣ ΙΩΑΝΝΙΝΩΝ, ΛΙΑΠΗ ΙΩΑΝΝΙΝΩΝ, ΜΑΚΡΙΝΟ ΙΩΑΝΝΙΝΩΝ, ΝΕΟ ΜΑΡΟΥΣΙ  (ΔΟΛΙΑΝΗ) ΙΩΑΝΝΙΝΩΝ, ΤΡΙΣΤΕΝΟ ΙΩΑΝΝΙΝΩΝ, ΤΣΙΠΙΑΝΗ  (ΑΜΠΕΛΟΣ) ΙΩΑΝΝΙΝΩΝ, ΦΛΑΜΠΟΥΡΑΡΙΟ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44100', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΙΩΑΝΝΙΝΩΝ, ΑΕΤΟΠΕΤΡΑ ΚΟΝΙΤΣΗΣ ΙΩΑΝΝΙΝΩΝ, ΑΗΔΟΝΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΑΜΑΡΑΝΤΟΣ ΙΩΑΝΝΙΝΩΝ, ΕΞΟΧΗ ΚΟΝΙΤΣΗΣ ΙΩΑΝΝΙΝΩΝ, ΗΛΙΟΡΡΑΧΗ ΙΩΑΝΝΙΝΩΝ, ΚΑΒΑΣΙΛΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΛΙΘΕΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΟΒΡΥΣΗ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΥΒΙΑ ΚΟΝΙΤΣΗΣ ΙΩΑΝΝΙΝΩΝ, ΚΛΕΙΔΩΝΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΝΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΛΟΥΤΡΑ ΙΩΑΝΝΙΝΩΝ, ΜΑΖΙ ΙΩΑΝΝΙΝΩΝ, ΜΕΛΙΣΣΟΠΕΤΡΑ ΙΩΑΝΝΙΝΩΝ, ΜΟΛΥΒΔΟΣΚΕΠΑΣΤΟΣ ΙΩΑΝΝΙΝΩΝ, ΜΠΟΥΡΑΖΑΝΙ ΙΩΑΝΝΙΝΩΝ, ΝΙΚΑΝΩΡΑΣ ΙΩΑΝΝΙΝΩΝ, ΠΗΓΗ ΙΩΑΝΝΙΝΩΝ, ΠΥΞΑΡΙΑ ΙΩΑΝΝΙΝΩΝ, ΠΥΡΓΟΣ ΙΩΑΝΝΙΝΩΝ, ΣΙΑΝΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΣΤΡΑΤΣΙΑΝΗ  (ΠΥΡΓΟΣ ΚΟΝΙΤΣΑΣ) ΙΩΑΝΝΙΝΩΝ, ΤΡΑΠΕΖΑ ΙΩΑΝΝΙΝΩΝ, ΦΥΤΟΚ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '44200', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΠΕΤΡΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΜΠΕΛΙΑ ΧΡΥΣΟΒΙΤΣΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΝΑΛΗΨΗ ΧΡΥΣΟΒΙΤΣΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΝΗΛΙΟ ΙΩΑΝΝΙΝΩΝ, ΑΝΘΟΧΩΡΙ ΜΕΤΣΟΒΟΥ ΙΩΑΝΝΙΝΩΝ, ΒΟΤΟΝΟΣΙ ΙΩΑΝΝΙΝΩΝ, ΓΙΑΡΑΚΑΡΙ ΙΩΑΝΝΙΝΩΝ, ΚΑΛΛΙΘΕΑ ΠΕΤΡΑΣ ΙΩΑΝΝΙΝΩΝ, ΜΕΤΣΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΜΗΛΙΑ ΜΕΤΣΟΒΟΥ ΙΩΑΝΝΙΝΩΝ, ΜΙΚΡΟ ΠΕΡΙΣΤΕΡΙ ΙΩΑΝΝΙΝΩΝ, ΜΥΛΟΙ ΙΩΑΝΝΙΝΩΝ, ΝΕΟ ΓΕΡΑΚΑΡΙ ΙΩΑΝΝΙΝΩΝ, ΞΗΡΙΚΟ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΜΙΚΡΟΥ ΠΕΡΙΣΤΕΡΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΕΤΡΑ ΙΩΑΝΝΙΝΩΝ, ΠΡΟΣΗΛΙΑ ΙΩΑΝΝΙΝΩΝ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΑΝΗΛΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΡΑΧΟΥΛΑ ΙΩΑΝΝΙΝΩΝ, ΣΙΤΣΑΙΝΑ ΙΩΑΝΝΙΝΩΝ, ΣΙΩΛΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΤΑΜΠΟΥΡΙΑ ΙΩΑΝΝΙΝΩΝ, ΧΡΥΣΟΒΙΤΣΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45221', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΑΝΑΤΟΛΗΣ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45222', Area: 'ΙΩΑΝΝΙΤΩΝ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45332', Area: 'ΙΩΑΝΝΙΝΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45333', Area: 'ΙΩΑΝΝΙΝΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45444', Area: 'ΙΩΑΝΝΙΝΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45445', Area: 'ΙΩΑΝΝΙΝΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45500', Area: 'ΑΒΓΟ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΑ ΑΝΑΣΤΑΣΙΑ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΑ ΚΥΡΙΑΚΗ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΑ ΜΑΡΙΝΑ ΚΡΥΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΜΕΛΙΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΑ ΤΡΙΑΔΑ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΑ ΤΡΙΑΔΑ ΜΕΛΙΓΩΝ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΣΚΛΙΒΑΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΜΗΝΑΣ ΜΙΚΡΗΣ ΓΟΤΙΣΤΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΓΙΟΥΡΓΑΝΙΣΤΑΣ ΙΩΑΝΝΙΝΩΝ, ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΣΚΛΙΒΑΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΑΜΜΟΣ ΙΩΑΝΝΙΝΩΝ, ΑΜΠΕΛΑΚΙΑ ΙΩΑΝΝΙΝΩΝ, ΑΜΠΕΛΕΙΑ ΙΩΑΝΝΙΝΩΝ, ΑΜΦΙΘΕΑ ΙΩΑΝΝΙΝΩΝ, ΑΝΑΡΓΥΡΟΙ ΙΩΑΝΝΙΝΩΝ, ΑΝΑΤΟΛΙΚΗ ΙΩΑΝΝΙΝΩΝ, ΑΝΘΟΧΩΡΙ ΔΩΔΩΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΑΝΩ ΛΑΨΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΑΝΩ ΜΟΥΣΙΩΤΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΑΡΤΟΠΟΥΛΑ ΙΩΑΝΝΙΝΩΝ, ΑΣΒΕΣΤΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΑΣΠΡΟΧΩΜΑ ΙΩΑΝΝΙΝΩΝ, ΑΣΠΡΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΑΣΦΑΚΑ ΙΩΑΝΝΙΝΩΝ, ΑΥΧΕΝΑΣ ΙΩΑΝΝΙΝΩΝ, ΒΑΓΕΝΙΤΙ ΙΩΑΝΝΙΝΩΝ, ΒΑΘΥΠΕΔΟ ΙΩΑΝΝΙΝΩΝ, ΒΑΠΤΙΣΤΗΣ ΙΩΑΝΝΙΝΩΝ, ΒΑΡΛΑΑΜ ΙΩΑΝΝΙΝΩΝ, ΒΑΣΑΙΙΚΑ ΙΩΑΝΝΙΝΩΝ, ΒΑΣΙΛΙΚΗ ΙΩΑΝΝΙΝΩΝ, ΒΕΛΙΣΣΑΡΙΟΣ ΙΩΑΝΝΙΝΩΝ, ΒΟΥΛΙΑΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΒΟΥΝΟΠΛΑΓΙΑ ΙΩΑΝΝΙΝΩΝ, ΒΡΥΣΗ ΠΑΣΙΑ ΙΩΑΝΝΙΝΩΝ, ΓΕΡΑΚΑΡΙ ΙΩΑΝΝΙΝΩΝ, ΓΙΟΥΡΓΑΝΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΓΚΑΛΝΤΕΡΙΜΙ ΙΩΑΝΝΙΝΩΝ, ΓΚΟΡΤΣΙΕΣ ΙΩΑΝΝΙΝΩΝ, ΓΟΡΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΓΟΥΛΑΣ ΙΩΑΝΝΙΝΩΝ, ΓΡΑΜΜΕΝΟ ΙΩΑΝΝΙΝΩΝ, ΔΑΦΝΟΥΛΑ ΙΩΑΝΝΙΝΩΝ, ΔΕΛΒΙΝΑΚΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΔΡΑΓΟΨΑ ΙΩΑΝΝΙΝΩΝ, ΔΡΑΜΕΣΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΔΡΙΣΚΟΣ ΙΩΑΝΝΙΝΩΝ, ΔΡΟΣΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΔΩΔΩΝΗ ΙΩΑΝΝΙΝΩΝ, ΕΙΣΟΔΙΑ ΘΕΟΤΟΚΟΥ ΙΩΑΝΝΙΝΩΝ, ΕΛΕΟΥΣΑ ΙΩΑΝΝΙΝΩΝ, ΕΛΕΥΘΕΡΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΕΞΟΧΗ ΠΕΡΑΜΑΤΟΣ ΙΩΑΝΝΙΝΩΝ, ΕΠΙΣΚΟΠΙΚΟ ΙΩΑΝΝΙΝΩΝ, ΖΑΝΑΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΖΟΡΓΙΑΝΝΗ ΙΩΑΝΝΙΝΩΝ, ΖΩΟΔΟΧΟΣ ΙΩΑΝΝΙΝΩΝ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΙΩΑΝΝΙΝΩΝ, ΗΛΙΟΚΑΛΗ ΙΩΑΝΝΙΝΩΝ, ΘΕΡΙΑΚΗΣΙ ΙΩΑΝΝΙΝΩΝ, ΚΑΒΑΛΛΑΡΙΟ ΙΩΑΝΝΙΝΩΝ, ΚΑΜΠΟΣ ΨΗΝΑΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΝΝΕΤΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΡΑΔΗΜΑΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΡΔΑΜΙΤΣΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΡΥΕΣ ΑΝΑΤΟΛΙΚΟΥ ΖΑΓΟΡΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΚΑΡΥΕΣ ΑΣΦΑΚΑΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΡΥΟΦΥΤΟ ΙΩΑΝΝΙΝΩΝ, ΚΑΣΤΡΙ ΜΕΓΑΛΟΥ ΠΕΡΙΣΤΕΡΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΚΑΣΤΡΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΑΒΟΘΡΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΣΙΚΑΣ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΑΣΠΡΟΧΩΡΙ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΚΡΥΦΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΛΑΨΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΜΑΡΜΑΡΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΜΟΥΣΙΩΤΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΚΑΤΩ ΝΕΟΧΩΡΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΚΕΔΡΟΣ ΙΩΑΝΝΙΝΩΝ, ΚΕΡΑΣΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΗΠΟΙ ΜΑΖΙΑΣ ΙΩΑΝΝΙΝΩΝ, ΚΟΚΚΙΝΟΧΩΜΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΛΥΖΩΑΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΚΟΛΩΝΙΑΤΙ ΙΩΑΝΝΙΝΩΝ, ΚΟΝΤΙΝΟΙ ΙΩΑΝΝΙΝΩΝ, ΚΟΝΤΣΙΚΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΠΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΚΟΡΔΟΛΟΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΣΜΗΡΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΤΟΜΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΥΛΟΥΡΑΙΙΚΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΥΜΑΡΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΥΡΕΝΤΑ ΙΩΑΝΝΙΝΩΝ, ΚΟΥΤΣΕΛΙ ΙΩΑΝΝΙΝΩΝ, ΚΡΑΝΟΥΛΑ ΙΩΑΝΝΙΝΩΝ, ΚΡΑΨΗ ΙΩΑΝΝΙΝΩΝ, ΚΡΥΑ ΙΩΑΝΝΙΝΩΝ, ΚΡΥΟΒΡΥΣΗ ΙΩΑΝΝΙΝΩΝ, ΚΡΥΦΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΚΥΠΑΡΙΣΣΙΑ ΙΩΑΝΝΙΝΩΝ, ΚΩΣΤΑΝΙΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΛΑΓΚΙΩΤΙΣΣΑ ΙΩΑΝΝΙΝΩΝ, ΛΑΛΙΖΑ ΙΩΑΝΝΙΝΩΝ, ΛΕΡΟΥΣΚΟ ΙΩΑΝΝΙΝΩΝ, ΛΙΓΚΙΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΛΟΓΓΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΛΟΦΙΣΚΟΣ ΙΩΑΝΝΙΝΩΝ, ΛΥΓΓΟΣ ΙΩΑΝΝΙΝΩΝ, ΛΥΚΟΣΤΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΛΥΚΟΣΤΟΜΟ ΙΩΑΝΝΙΝΩΝ, ΛΥΚΟΤΡΙΧΙ  (ΑΓ.ΜΑΡΙΝΑ ΚΡΥΑ) ΙΩΑΝΝΙΝΩΝ, ΜΑΒΙΛΛΗΣ ΙΩΑΝΝΙΝΩΝ, ΜΑΖΙΑ ΙΩΑΝΝΙΝΩΝ, ΜΑΝΔΡΕΣ ΙΩΑΝΝΙΝΩΝ, ΜΑΝΟΛΙΑΣΑ ΙΩΑΝΝΙΝΩΝ, ΜΑΝΤΕΙΟ ΙΩΑΝΝΙΝΩΝ, ΜΑΡΜΑΡΑ ΙΩΑΝΝΙΝΩΝ, ΜΕΓΑΛΗ ΓΟΤΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΜΕΓΑΛΟ ΓΑΡΔΙΚΙ ΙΩΑΝΝΙΝΩΝ, ΜΕΓΑΛΟ ΠΕΡΙΣΤΕΡΙ ΙΩΑΝΝΙΝΩΝ, ΜΕΛΙΑ ΙΩΑΝΝΙΝΩΝ, ΜΕΛΙΓΓΟΙ ΙΩΑΝΝΙΝΩΝ, ΜΕΣΟΥΡΑ ΙΩΑΝΝΙΝΩΝ, ΜΕΤΑΜΟΡΦΩΣΗ  (πρώην ΚΑΡΥΕΣ) ΙΩΑΝΝΙΝΩΝ, ΜΗΛΙΕΣ ΙΩΑΝΝΙΝΩΝ, ΜΗΛΙΩΤΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΜΙΚΡΑ ΓΟΤΙΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΜΙΚΡΟ ΓΑΡΔΙΚΙ ΙΩΑΝΝΙΝΩΝ, ΜΙΧΑΛΙΤΣΙ ΙΩΑΝΝΙΝΩΝ, ΜΟΛΥΒΑΔΙΑ ΙΩΑΝΝΙΝΩΝ, ΜΟΣΠΙΝΑ  (ΛΥΓΓΟΣ) ΙΩΑΝΝΙΝΩΝ, ΜΟΥΖΑΚΑΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΜΟΥΣΙΩΤΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΜΠΑΓΑΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΜΠΑΛΤΟΥΜΑ ΙΩΑΝΝΙΝΩΝ, ΜΠΑΟΥΣΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΜΠΑΤΖΑ ΙΩΑΝΝΙΝΩΝ, ΜΠΑΦΡΑ ΙΩΑΝΝΙΝΩΝ, ΜΠΕΡΚΟ ΙΩΑΝΝΙΝΩΝ, ΜΠΙΖΑΝΙ ΙΩΑΝΝΙΝΩΝ, ΜΠΟΥΛΜΟΥ ΙΩΑΝΝΙΝΩΝ, ΜΥΡΟΔΑΦΝΗ ΙΩΑΝΝΙΝΩΝ, ΝΕΑ ΜΟΥΣΙΩΤΙΤΣΑ ΙΩΑΝΝΙΝΩΝ, ΝΕΟ ΜΠΙΖΑΝΙ ΙΩΑΝΝΙΝΩΝ, ΝΕΟΚΑΙΣΑΡΕΙΑ ΙΩΑΝΝΙΝΩΝ, ΝΕΟΧΩΡΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΝΗΣΟΣ ΙΩΑΝΝΙΝΩΝ ΙΩΑΝΝΙΝΩΝ, ΟΛΥΜΠΙΑΔΑ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΑΙΟΓΚΟΡΤΣΙΑ ΚΡΑΨΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΑΒΓΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΚΟΠΑΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΣΙΡΑΚΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΑΛΙΑ ΑΛΩΝΑΚΙΑ ΙΩΑΝΝΙΝΩΝ, ΠΕΔΙΝΗ ΙΩΑΝΝΙΝΩΝ, ΠΕΝΤΕΛΗ ΙΩΑΝΝΙΝΩΝ, ΠΕΡΑΜΑ ΙΩΑΝΝΙΝΩΝ, ΠΕΡΑΤΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΕΡΔΙΚΑ ΙΩΑΝΝΙΝΩΝ, ΠΕΡΙΒΛΕΠΤΟΣ ΙΩΑΝΝΙΝΩΝ, ΠΕΣΙΜΟ ΙΩΑΝΝΙΝΩΝ, ΠΕΣΤΑ ΙΩΑΝΝΙΝΩΝ, ΠΕΤΡΑΛΩΝΑ ΙΩΑΝΝΙΝΩΝ, ΠΕΤΡΟΒΟΥΝΙ ΙΩΑΝΝΙΝΩΝ, ΠΕΤΣΑΛΗ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΤΑΝΙΑ ΓΕΡΑΚΑΡΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΤΑΝΙΑ ΔΩΔΩΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΛΑΤΑΝΟΣ ΙΩΑΝΝΙΝΩΝ, ΠΟΛΥΓΥΡΟΣ ΙΩΑΝΝΙΝΩΝ, ΠΟΛΥΛΟΦΟ ΙΩΑΝΝΙΝΩΝ, ΠΟΤΑΜΙΑ ΚΡΥΟΒΡΥΣΗΣ ΙΩΑΝΝΙΝΩΝ, ΠΟΤΑΜΙΑ ΜΠΑΛΤΟΥΜΑΣ ΙΩΑΝΝΙΝΩΝ, ΠΟΤΙΣΤΙΚΑ ΙΩΑΝΝΙΝΩΝ, ΠΟΥΡΝΑΡΙ ΙΩΑΝΝΙΝΩΝ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΣΚΛΙΒΑΝΗΣ ΙΩΑΝΝΙΝΩΝ, ΡΑΒΕΝΙΑ ΙΩΑΝΝΙΝΩΝ, ΡΑΧΗ ΙΩΑΝΝΙΝΩΝ, ΡΑΨΑΙΟΙ ΙΩΑΝΝΙΝΩΝ, ΡΙΖΑ ΙΩΑΝΝΙΝΩΝ, ΡΟΒΙΛΙΣΤΟ ΙΩΑΝΝΙΝΩΝ, ΡΟΔΟΤΟΠΙ ΙΩΑΝΝΙΝΩΝ, ΣΕΡΒΙΑΝΑ ΙΩΑΝΝΙΝΩΝ, ΣΙΟΥΤΣΟΣ ΙΩΑΝΝΙΝΩΝ, ΣΚΛΙΒΑΝΗ ΙΩΑΝΝΙΝΩΝ, ΣΠΗΛΑΙΟ ΙΩΑΝΝΙΝΩΝ, ΣΠΟΘΟΙ ΙΩΑΝΝΙΝΩΝ, ΣΤΑΜΑΤΗΣ ΙΩΑΝΝΙΝΩΝ, ΣΤΑΥΡΑΚΙ ΙΩΑΝΝΙΝΩΝ, ΣΤΑΥΡΟΣ ΙΩΑΝΝΙΝΩΝ, ΣΥΝΟΙΚΙΣΜΟΣ ΚΟΝΤΣΙΚΑΣ ΙΩΑΝΝΙΝΩΝ, ΤΑΞΙΑΡΧΕΣ ΙΩΑΝΝΙΝΩΝ, ΤΕΡΟΒΟ ΙΩΑΝΝΙΝΩΝ, ΤΡΙΑΝΤΑΦΥΛΛΟΣ ΙΩΑΝΝΙΝΩΝ, ΤΣΙΜΟΒΟ  (ΧΑΡΟΚΟΠΙ) ΙΩΑΝΝΙΝΩΝ, ΤΣΙΦΛΙΚΟΠΟΥΛΟ ΙΩΑΝΝΙΝΩΝ, ΤΥΡΙΑ ΙΩΑΝΝΙΝΩΝ, ΦΙΛΟΘΕΗ ΑΜΠΕΛΕΙΑΣ ΙΩΑΝΝΙΝΩΝ, ΦΤΕΛΙΑ ΙΩΑΝΝΙΝΩΝ, ΧΑΝΙ ΤΕΡΟΒΟΥ ΙΩΑΝΝΙΝΩΝ, ΧΑΡΟΚΟΠΙ ΙΩΑΝΝΙΝΩΝ, ΧΙΝΚΑ ΙΩΑΝΝΙΝΩΝ, ΧΙΟΝΑΣΑ ΙΩΑΝΝΙΝΩΝ, ΧΟΥΛΙΑΡΑΔΕΣ ΙΩΑΝΝΙΝΩΝ, ΧΩΡΑ ΙΩΑΝΝΙΝΩΝ, ΨΗΝΑ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45550', Area: 'ΙΩΑΝΝΙΤΩΝ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45560', Area: 'ΙΩΑΝΝΙΤΩΝ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45570', Area: 'ΙΩΑΝΝΙΤΩΝ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '45580', Area: 'ΙΩΑΝΝΙΤΩΝ ΙΩΑΝΝΙΝΩΝ', Prefecture: 'Ιωαννίνων' },
    { PostalCode: '64001', Area: 'ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΚΑΒΑΛΑΣ, ΓΕΩΡΓΙΑΝΗ ΚΑΒΑΛΑΣ, ΝΙΚΗΣΙΑΝΗ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64002', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΛΙΜΕΝΑΡΙΩΝ  ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΑΣΤΡΙΣ  ΚΑΒΑΛΑΣ, ΘΥΜΩΝΙΑ  ΚΑΒΑΛΑΣ, ΚΑΣΤΡΟ  ΚΑΒΑΛΑΣ, ΛΙΜΕΝΑΡΙΑ  ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΜΑΡΙΕΣ  ΚΑΒΑΛΑΣ, ΠΕΥΚΑΡΙ  ΚΑΒΑΛΑΣ, ΠΟΤΟΣ  ΚΑΒΑΛΑΣ, ΣΚΑΛΑ ΜΑΡΙΩΝ  ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64003', Area: 'ΑΕΡΟΔΡΟΜΙΟ ΚΑΒΑΛΑΣ (ΠΑΛΙΟ) ΚΑΒΑΛΑΣ, ΒΟΥΝΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΒΡΥΣΟΥΛΑ ΚΑΒΑΛΑΣ, ΔΑΤΟ ΚΑΒΑΛΑΣ, ΚΡΗΝΙΔΕΣ ΚΑΒΑΛΑΣ, ΛΙΜΝΙΑ ΚΑΒΑΛΑΣ, ΛΥΔΙΑ ΚΑΒΑΛΑΣ, ΜΙΚΡΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΠΟΛΥΣΤΥΛΟ ΚΑΒΑΛΑΣ, ΠΡΟΣΦΥΓΕΣ ΚΑΒΑΛΑΣ, ΦΙΛΙΠΠΟΙ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64004', Area: 'ΑΛΥΚΗ ΚΑΒΑΛΑΣ, ΓΛΥΦΑΔΑ  ΚΑΒΑΛΑΣ, ΘΑΣΟΣ ΚΑΒΑΛΑΣ, ΚΟΙΝΥΡΑ ΘΕΟΛΟΓΟΥ ΚΑΒΑΛΑΣ, ΚΟΙΝΥΡΑ ΝΗΣΟΣ ΚΑΒΑΛΑΣ, ΛΕΥΚΗ ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΜΑΚΡΥΑΜΜΟΣ  ΚΑΒΑΛΑΣ, ΜΕΓΑΛΟΣ ΠΡΙΝΟΣ ΚΑΒΑΛΑΣ, ΜΟΝΗ ΑΡΧΑΓΓΕΛΟΥ  ΚΑΒΑΛΑΣ, ΠΑΛΑΙΟΧΩΡΙ  ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΠΑΝΑΓΙΑ ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΠΟΤΑΜΙΑ ΚΑΒΑΛΑΣ, ΧΡΥΣΗ ΑΚΤΗ  ΚΑΒΑΛΑΣ, ΧΡΥΣΗ ΑΜΜΟΥΔΙΑ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64006', Area: 'ΑΝΩ ΛΕΥΚΗ ΚΑΒΑΛΑΣ, ΛΕΥΚΗ ΝΕΑΣ ΚΑΡΒΑΛΗΣ ΚΑΒΑΛΑΣ, ΝΕΑ ΚΑΡΒΑΛΗ ΚΑΒΑΛΑΣ, ΧΑΛΚΕΡΟ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64007', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΑΒΑΛΑΣ, ΑΠΟΒΑΘΡΑ ΚΑΒΑΛΑΣ, ΕΛΑΙΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΕΛΕΥΘΕΡΕΣ ΚΑΒΑΛΑΣ, ΜΥΡΤΟΦΥΤΟ ΚΑΒΑΛΑΣ, ΝΕΑ ΗΡΑΚΛΙΤΣΑ ΚΑΒΑΛΑΣ, ΝΕΑ ΠΕΡΑΜΟΣ ΚΑΒΑΛΑΣ, ΠΑΡΑΛΙΑ ΕΛΑΙΟΧΩΡΙΟΥ ΚΑΒΑΛΑΣ, ΠΑΡΑΛΙΑ ΜΥΡΤΟΦΥΤΟΥ ΚΑΒΑΛΑΣ, ΠΥΡΓΟΣ ΚΑΒΑΛΑΣ, ΣΑΡΑΝΤΑ ΚΑΒΑΛΑΣ, ΦΩΛΕΑ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64008', Area: 'ΑΚΡΟΠΟΤΑΜΟΣ ΚΑΒΑΛΑΣ, ΑΥΛΗ ΚΑΒΑΛΑΣ, ΒΡΥΣΗ ΚΑΒΑΛΑΣ, ΓΑΛΗΨΟΣ ΚΑΒΑΛΑΣ, ΔΩΜΑΤΙΑ ΚΑΒΑΛΑΣ, ΚΑΡΑΒΑΓΓΕΛΗΣ ΚΑΒΑΛΑΣ, ΚΑΡΙΑΝΗ ΚΑΒΑΛΑΣ, ΚΟΚΚΙΝΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΛΟΥΤΡΑ ΕΛΕΥΘΕΡΩΝ ΚΑΒΑΛΑΣ, ΜΕΓΑΣ ΑΛΕΞΑΝΔΡΟΣ  ΚΑΒΑΛΑΣ, ΜΕΛΙΣΣΟΚΟΜΕΙΟ ΚΑΒΑΛΑΣ, ΜΕΣΟΡΟΠΗ ΚΑΒΑΛΑΣ, ΜΟΥΣΘΕΝΗ ΚΑΒΑΛΑΣ, ΟΡΦΑΝΙΟ ΚΑΒΑΛΑΣ, ΟΦΡΥΝΙΟ ΚΑΒΑΛΑΣ, ΠΑΡΑΛΙΑ ΟΦΡΥΝΙΟΥ ΚΑΒΑΛΑΣ, ΠΛΑΤΑΝΟΤΟΠΟΣ ΚΑΒΑΛΑΣ, ΠΟΔΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΠΥΡΓΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΣΙΔΗΡΟΧΩΡΙ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64009', Area: 'ΑΓΙΟΣ ΚΟΣΜΑΣ ΚΑΒΑΛΑΣ, ΔΙΠΟΤΑΜΟΣ ΚΑΒΑΛΑΣ, ΚΕΧΡΟΚΑΜΠΟΣ ΚΑΒΑΛΑΣ, ΛΕΚΑΝΗ ΚΑΒΑΛΑΣ, ΝΙΚΗΤΕΣ ΚΑΒΑΛΑΣ, ΠΛΑΤΑΜΩΝΑΣ ΚΑΒΑΛΑΣ, ΠΛΑΤΑΝΙΑ ΚΑΒΑΛΑΣ, ΣΚΟΠΟΣ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64010', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΡΑΧΩΝΙΟΥ ΚΑΒΑΛΑΣ, ΑΚΤΗ ΚΑΒΑΛΑΣ, ΙΕΡΑ ΜΟΝΗ ΑΓΙΟΥ ΠΑΝΤΕΛΕΗΜΩΝΑ ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΚΑΛΛΙΡΑΧΗ  ΚΑΒΑΛΑΣ, ΜΙΚΡΟΣ ΠΡΙΝΟΣ  ΚΑΒΑΛΑΣ, ΟΡΜΟΣ ΠΡΙΝΟΥ  ΘΑΣΟΥ ΚΑΒΑΛΑΣ, ΠΑΧΥΣ  ΚΑΒΑΛΑΣ, ΠΡΙΝΟΣ  ΚΑΒΑΛΑΣ, ΡΑΧΩΝΙ  ΚΑΒΑΛΑΣ, ΣΚΑΛΑ ΚΑΛΛΙΡΑΧΗΣ ΚΑΒΑΛΑΣ, ΣΚΑΛΑ ΡΑΧΩΝΙΟΥ  ΚΑΒΑΛΑΣ, ΣΚΑΛΑ ΣΩΤΗΡΟΣ  ΚΑΒΑΛΑΣ, ΣΩΤΗΡΟΣ  ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64012', Area: 'ΑΜΥΓΔΑΛΕΩΝΑΣ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64100', Area: 'ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΚΑΒΑΛΑΣ, ΑΜΙΣΙΑΝΑ ΚΑΒΑΛΑΣ, ΑΝΤΙΦΙΛΙΠΠΟΙ ΚΑΒΑΛΑΣ, ΑΝΩ ΧΟΡΤΟΚΟΠΙ ΚΑΒΑΛΑΣ, ΒΛΑΧΙΚΟ (ΝΕΟ ΣΥΡΑΚΟ) ΚΑΒΑΛΑΣ, ΕΛΕΥΘΕΡΟΥΠΟΛΗ ΚΑΒΑΛΑΣ, ΕΞΟΧΗ ΚΑΒΑΛΑΣ, ΙΕΡΑ ΜΟΝΗ ΑΓΙΟΥ ΠΑΝΤΕΛΕΗΜΩΝΑ ΠΑΓΓΑΙΟΥ ΚΑΒΑΛΑΣ, ΚΗΠΙΑ ΚΑΒΑΛΑΣ, ΚΟΚΚΙΝΟΧΩΜΑ ΚΑΒΑΛΑΣ, ΜΕΛΙΣΣΑ ΚΑΒΑΛΑΣ, ΜΕΣΙΑ ΚΑΒΑΛΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΠΑΓΓΑΙΟΥ ΚΑΒΑΛΑΣ, ΠΑΝΑΓΙΑ ΠΑΓΓΑΙΟΥ ΚΑΒΑΛΑΣ, ΧΟΡΤΟΚΟΠΙ ΚΑΒΑΛΑΣ, ΧΡΥΣΟΚΑΣΤΡΟ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '64200', Area: 'ΑΒΡΑΜΗΛΙΑ ΚΑΒΑΛΑΣ, ΑΕΡΟΔΡΟΜΙΟ ΜΕΓΑΣ ΑΛΕΞΑΝΔΡΟΣ ΚΑΒΑΛΑΣ, ΑΝΩ ΠΟΝΤΟΛΙΒΑΔΟ ΚΑΒΑΛΑΣ, ΓΕΡΟΝΤΑΣ ΚΑΒΑΛΑΣ, ΓΡΑΒΟΥΝΑ  ΚΑΒΑΛΑΣ, ΔΑΜΑΣΚΗΝΙΑ ΚΑΒΑΛΑΣ, ΔΙΑΛΕΚΤΟ ΚΑΒΑΛΑΣ, ΔΥΣΒΑΤΟ ΚΑΒΑΛΑΣ, ΕΚΑΛΗ ΚΑΒΑΛΑΣ, ΕΚΛΕΚΤΟ ΚΑΒΑΛΑΣ, ΕΛΑΦΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΕΡΑΤΕΙΝΟ ΚΑΒΑΛΑΣ, ΖΑΡΚΑΔΙΑ ΚΑΒΑΛΑΣ, ΚΡΗΝΗ ΚΑΒΑΛΑΣ, ΚΡΥΟΝΕΡΙ ΟΡΕΙΝΟΥ ΚΑΒΑΛΑΣ, ΜΑΚΡΥΧΩΡΙ ΚΑΒΑΛΑΣ, ΝΕΑ ΚΑΡΥΑ ΚΑΒΑΛΑΣ, ΝΕΑ ΚΩΜΗ ΚΑΒΑΛΑΣ, ΝΕΟΣ ΞΕΡΙΑΣ ΚΑΒΑΛΑΣ, ΠΑΡΑΔΕΙΣΟΣ ΚΑΒΑΛΑΣ, ΠΕΡΝΗ ΚΑΒΑΛΑΣ, ΠΕΤΡΟΠΗΓΗ ΚΑΒΑΛΑΣ, ΠΟΝΤΟΛΙΒΑΔΟ ΚΑΒΑΛΑΣ, ΣΤΕΓΝΟ ΚΑΒΑΛΑΣ, ΣΤΡΑΤΩΝΕΣ ΚΑΒΑΛΑΣ, ΧΡΥΣΟΥΠΟΛΗ ΚΑΒΑΛΑΣ, ΧΡΥΣΟΧΩΡΙ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '65201', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΚΑΒΑΛΑΣ, ΑΣΠΡΗ ΑΜΜΟΣ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '65302', Area: 'ΚΑΒΑΛΑ ΚΑΒΑΛΑΣ, ΣΑΝΑΤΟΡΙΟ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '65303', Area: 'ΚΑΒΑΛΑΣ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '65403', Area: 'ΚΑΒΑΛΑ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '65404', Area: 'ΚΑΒΑΛΑ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '65500', Area: 'ΑΓΙΟΣ ΣΥΛΛΑΣ ΚΑΒΑΛΑΣ, ΖΥΓΟΣ ΚΑΒΑΛΑΣ, ΚΟΡΥΦΕΣ ΚΑΒΑΛΑΣ, ΚΡΑΝΟΧΩΡΙ ΚΑΒΑΛΑΣ, ΚΡΥΟΝΕΡΙ ΦΙΛΙΠΠΩΝ ΚΑΒΑΛΑΣ, ΛΥΚΟΣΤΟΜΟ ΚΑΒΑΛΑΣ, ΠΑΛΑΙΑ ΚΑΒΑΛΑ ΚΑΒΑΛΑΣ, ΠΑΛΑΙΟ ΤΣΙΦΛΙΚΙ ΚΑΒΑΛΑΣ, ΠΟΛΥΝΕΡΟ ΚΑΒΑΛΑΣ', Prefecture: 'Καβάλας' },
    { PostalCode: '43060', Area: 'ΑΜΥΓΔΑΛΗ ΚΑΡΔΙΤΣΗΣ, ΑΝΘΟΧΩΡΙ ΚΑΡΔΙΤΣΗΣ, ΑΝΟΙΞΙΑΤΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΑΡΠΑΚΙΑ ΚΑΡΔΙΤΣΗΣ, ΒΑΓΕΝΙΑ ΚΑΡΔΙΤΣΗΣ, ΒΑΤΣΟΥΝΙΑ ΚΑΡΔΙΤΣΗΣ, ΓΕΛΑΝΘΗ ΚΑΡΔΙΤΣΗΣ, ΓΕΩΡΓΙΟΣ ΚΑΡΑΙΣΚΑΚΗΣ ΚΑΡΔΙΤΣΗΣ, ΓΡΑΒΙΑ ΚΑΡΔΙΤΣΗΣ, ΔΑΦΝΗ ΟΞΥΑΣ ΚΑΡΔΙΤΣΗΣ, ΔΡΑΚΟΤΡΥΠΑ ΚΑΡΔΙΤΣΗΣ, ΕΛΛΗΝΟΚΑΣΤΡΟ ΚΑΡΔΙΤΣΗΣ, ΖΑΜΑΝΑΤΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΚΕΡΑΜΑΡΓΙΩ ΚΑΡΔΙΤΣΗΣ, ΚΟΥΡΑ ΚΑΡΔΙΤΣΗΣ, ΚΡΥΟΠΗΓΗ ΚΑΡΔΙΤΣΗΣ, ΛΑΖΑΡΙΝΑ ΚΑΡΔΙΤΣΗΣ, ΛΑΚΚΕΣ ΚΑΡΔΙΤΣΗΣ, ΜΑΝΤΖΙΟΥΡΑΙΪΚΑ ΚΑΡΔΙΤΣΗΣ, ΜΑΡΤΙΝΙ ΚΑΡΔΙΤΣΗΣ, ΜΑΥΡΟΜΜΑΤΙ ΚΑΡΔΙΤΣΗΣ, ΜΕΓΑΛΗ ΒΡΥΣΗ ΚΑΡΔΙΤΣΗΣ, ΜΕΛΙΓΟΣ ΚΑΡΔΙΤΣΗΣ, ΜΕΣΟΡΡΑΧΗ ΟΞΥΑΣ ΚΑΡΔΙΤΣΗΣ, ΜΕΣΟΡΡΑΧΗ ΠΕΤΡΙΝΟΥ ΚΑΡΔΙΤΣΗΣ, ΜΗΛΕΕΣ ΚΑΡΔΙΤΣΗΣ, ΜΟΝΗ ΑΓΙΑΣ ΤΡΙΑΔΑΣ ΚΑΡΔΙΤΣΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΚΑΡΔΙΤΣΗΣ, ΜΟΥΖΑΚΙ ΚΑΡΔΙΤΣΗΣ, ΝΗΣΙΑ ΚΑΡΔΙΤΣΗΣ, ΞΗΡΟΚΑΜΠΟΣ ΚΑΡΔΙΤΣΗΣ, ΟΞΥΑ ΚΑΡΔΙΤΣΗΣ, ΠΑΔΗ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΑΜΠΕΛΑ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΟΧΩΡΙ ΚΑΡΔΙΤΣΑΣ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΟΧΩΡΙ ΟΞΥΑΣ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΟΧΩΡΙ ΦΟΥΝΤΩΤΟΥ ΚΑΡΔΙΤΣΗΣ, ΠΕΤΡΩΤΑ ΚΑΡΔΙΤΣΗΣ, ΠΕΥΚΟΦΥΤΟ ΚΑΡΔΙΤΣΗΣ, ΠΛΑΤΑΝΑΚΟΣ ΚΑΡΔΙΤΣΗΣ, ΠΛΑΤΑΝΙΑ ΚΑΡΔΙΤΣΗΣ, ΠΟΡΤΗ ΚΑΡΔΙΤΣΗΣ, ΣΟΥΛΑ ΚΑΡΔΙΤΣΗΣ, ΣΠΑΘΕΣ ΚΑΡΔΙΤΣΗΣ, ΤΡΥΓΟΝΑ ΚΑΡΔΙΤΣΗΣ, ΤΣΑΡΟΥΧΗ ΚΑΡΔΙΤΣΗΣ, ΧΑΡΑΥΓΗ ΚΑΡΔΙΤΣΗΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43061', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΚΑΡΔΙΤΣΗΣ, ΑΓΝΑΝΤΕΡΟ ΚΑΡΔΙΤΣΗΣ, ΚΑΛΟΓΡΙΑΝΑ ΚΑΡΔΙΤΣΗΣ, ΚΟΡΔΑ ΚΑΡΔΙΤΣΗΣ, ΜΑΡΑΘΕΑ ΚΑΡΔΙΤΣΗΣ, ΠΕΔΙΝΟ ΚΑΡΔΙΤΣΗΣ, ΡΙΖΟΒΟΥΝΙ ΚΑΡΔΙΤΣΗΣ, ΣΕΡΒΩΤΑ ΤΡΙΚΑΛΩΝ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43063', Area: 'ΑΝΑΒΡΑ ΚΑΡΔΙΤΣΗΣ, ΑΣΗΜΟΧΩΡΙ ΚΑΡΔΙΤΣΗΣ, ΑΧΛΑΔΙΑ ΚΑΡΔΙΤΣΗΣ, ΚΑΤΩ ΚΤΙΜΕΝΗ ΚΑΡΔΙΤΣΗΣ, ΚΤΙΜΕΝΗ ΚΑΡΔΙΤΣΗΣ, ΛΕΟΝΤΑΡΙ ΚΑΡΔΙΤΣΗΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43070', Area: 'ΠΡΟΑΣΤΙΟ ΚΑΡΔΙΤΣΗΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43100', Area: 'ΑΓΙΑ ΑΓΑΘΗ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΑ ΜΑΡΙΝΑ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΟΠΗΓΗ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΛΑΜΠΕΡΟΥ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΟΣ ΘΕΟΔΩΡΟΣ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΜΟΣΧΑΤΟΥ ΚΑΡΔΙΤΣΗΣ, ΑΜΑΡΑΝΤΟΣ ΚΑΡΔΙΤΣΗΣ, ΑΜΠΕΛΑΚΙΑ ΚΑΡΔΙΤΣΗΣ, ΑΜΠΕΛΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΑΝΘΗΡΟ ΚΑΡΟΠΛΕΣΙΟΥ ΚΑΡΔΙΤΣΗΣ, ΑΠΙΔΕΑ ΚΑΡΔΙΤΣΗΣ, ΑΡΤΕΣΙΑΝΟ ΚΑΡΔΙΤΣΗΣ, ΓΕΩΡΓΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΓΙΑΝΝΟΥΣΑΙΙΚΑ ΚΑΡΔΙΤΣΗΣ, ΔΑΦΝΟΣΠΗΛΙΑ ΚΑΡΔΙΤΣΗΣ, ΖΑΙΜΙΟ ΚΑΡΔΙΤΣΗΣ, ΖΩΓΡΙ ΚΑΡΔΙΤΣΗΣ, ΙΤΑΜΟΣ ΚΑΡΔΙΤΣΗΣ, ΚΑΛΛΙΘΗΡΟ ΚΑΡΔΙΤΣΗΣ, ΚΑΛΛΙΦΩΝΙΟ ΚΑΡΔΙΤΣΗΣ, ΚΑΡΔΙΤΣΑ ΚΑΡΔΙΤΣΗΣ, ΚΑΡΔΙΤΣΟΜΑΓΟΥΛΑ ΚΑΡΔΙΤΣΗΣ, ΚΑΡΟΠΛΕΣΙ ΚΑΡΔΙΤΣΗΣ, ΚΑΡΠΟΧΩΡΙ ΚΑΡΔΙΤΣΗΣ, ΚΑΣΤΑΝΕΑ ΚΑΡΔΙΤΣΗΣ, ΚΑΤΑΦΥΓΙ ΚΑΡΔΙΤΣΗΣ, ΚΟΥΚΚΑΙΙΚΑ ΚΑΡΔΙΤΣΗΣ, ΚΟΥΤΣΟΥΡΟ ΚΑΡΔΙΤΣΗΣ, ΚΡΥΑ ΒΡΥΣΗ ΚΑΡΔΙΤΣΗΣ, ΛΑΜΠΕΡΟ ΚΑΡΔΙΤΣΗΣ, ΜΑΚΡΥΧΩΡΙ ΚΑΡΔΙΤΣΗΣ, ΜΑΥΡΟΝΕΡΙ ΚΑΡΔΙΤΣΗΣ, ΜΕΓΑΣ ΛΑΚΚΟΣ ΚΑΡΔΙΤΣΗΣ, ΜΕΛΙΣΣΑ ΚΑΡΔΙΤΣΗΣ, ΜΗΤΡΟΠΟΛΗ ΚΑΡΔΙΤΣΗΣ, ΜΟΛΟΧΑ ΚΑΡΔΙΤΣΗΣ, ΜΟΝΗ ΚΟΡΩΝΗΣ ΚΑΡΔΙΤΣΗΣ, ΜΟΣΧΑΤΟ ΚΑΡΔΙΤΣΗΣ, ΜΥΡΙΝΑ ΚΑΡΔΙΤΣΗΣ, ΝΕΡΑΙΔΑ ΚΑΡΔΙΤΣΑΣ ΚΑΡΔΙΤΣΗΣ, ΞΙΝΟΝΕΡΙ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΟΖΟΓΛΟΠΙ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΙΟΚΚΛΗΣΙ ΚΑΡΔΙΤΣΗΣ, ΠΑΝΟΡΑΜΑ ΚΑΡΔΙΤΣΗΣ, ΠΑΡΑΓΩΓΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΠΕΤΡΑΛΩΝΑ ΑΓΡΑΦΩΝ ΕΥΡΥΤΑΝΙΑΣ, ΠΟΡΤΙΤΣΑ ΚΑΡΔΙΤΣΗΣ, ΠΡΟΔΡΟΜΟΣ ΚΑΡΔΙΤΣΗΣ, ΠΤΕΛΟΠΟΥΛΑ ΚΑΡΔΙΤΣΗΣ, ΡΑΧΟΥΛΑ ΚΑΡΔΙΤΣΗΣ, ΡΟΥΣΣΟ ΚΑΡΔΙΤΣΗΣ, ΣΑΡΑΝΤΑΠΟΡΟ ΚΑΡΔΙΤΣΗΣ, ΣΤΑΥΡΟΣ ΚΑΡΔΙΤΣΑΣ ΚΑΡΔΙΤΣΗΣ, ΤΣΑΡΔΑΚΙ ΚΑΡΔΙΤΣΗΣ, ΦΡΑΓΚΟ ΚΑΡΔΙΤΣΗΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43150', Area: 'ΚΑΛΎΒΙΑ ΜΠΕΖΟΎΛΑΣ ΚΑΡΔΙΤΣΑΣ, ΚΑΛΎΒΙΑ ΦΥΛΑΚΤΉΣ ΚΑΡΔΙΤΣΑΣ, ΚΑΠΠΆΣ ΚΑΡΔΙΤΣΑΣ, ΚΑΡΒΑΣΑΡΆΣ ΚΑΡΔΙΤΣΑΣ, ΚΑΡΊΤΣΑ ΔΟΛΟΠΏΝ ΚΑΡΔΙΤΣΑΣ, ΚΕΡΑΣΈΑ ΚΑΡΔΙΤΣΑΣ, ΚΟΥΤΣΟΔΉΜΟΣ ΚΑΡΔΙΤΣΑΣ, ΚΟΥΤΣΟΠΆΠΟΥΛΟΣ ΚΑΡΔΙΤΣΑΣ, ΚΡΥΟΝΈΡΙΟΝ ΚΑΡΔΙΤΣΑΣ, ΜΈΓΑ ΡΕΎΜΑ ΚΑΡΔΙΤΣΑΣ, ΜΕΣΕΝΙΚΌΛΑΣ ΚΑΡΔΙΤΣΑΣ, ΜΟΡΦΟΒΟΎΝΙΟΝ ΚΑΡΔΙΤΣΑΣ, ΜΠΕΛΟΚΟΜΊΤΗ ΚΑΡΔΙΤΣΑΣ, ΝΕΟΧΏΡΙΟΝ ΚΑΡΔΙΤΣΑΣ, ΝΕΡΆΪΔΑ ΜΠΕΖΟΎΛΑΣ ΚΑΡΔΙΤΣΑΣ, ΠΕΖΟΎΛΑ ΚΑΡΔΙΤΣΑΣ, ΠΕΤΡΩΤΌΝ ΚΑΡΊΤΣΗΣ ΔΟ ΚΑΡΔΙΤΣΑΣ, ΠΛΑΚΩΤΌΝ ΚΑΡΔΙΤΣΑΣ, ΡΑΦΉΝΑ ΚΑΡΔΙΤΣΑΣ, ΦΑΝΆΡΙ ΚΑΡΔΙΤΣΑΣ, ΦΥΛΑΚΤΉ ΚΑΡΔΙΤΣΑΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43200', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΑΡΔΙΤΣΗΣ, ΒΛΟΧΟΣ ΚΑΡΔΙΤΣΗΣ, ΓΟΡΓΟΒΙΤΕΣ ΚΑΡΔΙΤΣΗΣ, ΕΡΜΗΤΣΙ ΚΑΡΔΙΤΣΗΣ, ΚΑΛΥΒΑΚΙΑ ΚΑΡΔΙΤΣΗΣ, ΚΟΣΚΙΝΑΣ ΚΑΡΔΙΤΣΗΣ, ΛΥΚΟΡΕΜΑ ΚΑΡΔΙΤΣΗΣ, ΜΑΡΚΟΣ ΚΑΡΔΙΤΣΗΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΚΑΡΔΙΤΣΑΣ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΑΜΑΣ ΚΑΡΔΙΤΣΗΣ, ΨΑΘΟΧΩΡΙ ΚΑΡΔΙΤΣΗΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '43300', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΑΡΔΙΤΣΗΣ, ΑΓΙΟΣ ΒΗΣΣΑΡΙΟΣ ΚΑΡΔΙΤΣΗΣ, ΑΜΠΕΛΟΣ ΚΑΡΔΙΤΣΗΣ, ΑΝΩΓΕΙΟ ΚΑΡΔΙΤΣΗΣ, ΓΕΦΥΡΙΑ ΚΑΡΔΙΤΣΗΣ, ΓΡΑΜΜΑΤΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΔΑΣΟΧΩΡΙ ΚΑΡΔΙΤΣΗΣ, ΘΡΑΨΙΜΙ ΚΑΡΔΙΤΣΗΣ, ΚΑΠΠΑΔΟΚΙΚΟ ΚΑΡΔΙΤΣΗΣ, ΚΕΔΡΟΣ ΚΑΡΔΙΤΣΑΣ ΚΑΡΔΙΤΣΗΣ, ΚΕΔΡΟΣ ΜΠΕΛΟΚΟΜΙΤΗ ΚΑΡΔΙΤΣΗΣ, ΚΥΨΕΛΗ ΚΑΡΔΙΤΣΗΣ, ΛΟΥΤΡΟ ΚΑΡΔΙΤΣΗΣ, ΜΑΣΧΟΛΟΥΡΙΟ ΚΑΡΔΙΤΣΗΣ, ΜΑΤΑΡΑΓΚΑ ΚΑΡΔΙΤΣΗΣ, ΜΑΥΡΑΧΑΔΕΣ ΚΑΡΔΙΤΣΗΣ, ΜΕΛΙΣΣΟΧΩΡΙ ΚΑΡΔΙΤΣΗΣ, ΝΕΟ ΙΚΟΝΙΟ ΚΑΡΔΙΤΣΗΣ, ΠΑΛΙΟΥΡΙ ΚΑΡΔΙΤΣΗΣ, ΠΑΣΧΑΛΙΤΣΑ ΚΑΡΔΙΤΣΗΣ, ΠΥΡΓΟΣ ΚΙΕΡΙΟΥ ΚΑΡΔΙΤΣΗΣ, ΣΟΦΑΔΕΣ ΚΑΡΔΙΤΣΗΣ, ΤΑΥΡΩΠΟΣ ΚΑΡΔΙΤΣΗΣ, ΦΙΛΙΑ ΚΑΡΔΙΤΣΗΣ', Prefecture: 'Καρδίτσας' },
    { PostalCode: '52050', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΚΑΣΤΟΡΙΑΣ, ΑΚΟΝΤΙΟ ΚΑΣΤΟΡΙΑΣ, ΔΕΝΔΡΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΙΕΡΟΠΗΓΗ ΚΑΣΤΟΡΙΑΣ, ΚΑΛΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΚΑΤΩ ΠΤΕΡΙΑ ΚΑΣΤΟΡΙΑΣ, ΚΟΛΟΚΥΝΘΟΥ ΚΑΣΤΟΡΙΑΣ, ΜΕΣΟΠΟΤΑΜΙΑ ΚΑΣΤΟΡΙΑΣ, ΟΙΝΟΗ ΚΑΣΤΟΡΙΑΣ, ΠΟΛΥΑΝΕΜΟ ΚΑΣΤΟΡΙΑΣ, ΠΤΕΡΙΑ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52051', Area: 'ΑΓΙΑ ΑΝΝΑ ΚΑΣΤΟΡΙΑΣ, ΓΙΑΝΝΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΚΑΤΩ ΠΤΕΛΕΑ ΚΑΣΤΟΡΙΑΣ, ΚΡΑΝΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΛΕΙΒΑΔΟΤΟΠΙ ΚΑΣΤΟΡΙΑΣ, ΜΟΝΟΠΥΛΟ ΚΑΣΤΟΡΙΑΣ, ΝΕΑ ΚΟΤΥΛΗ ΚΑΣΤΟΡΙΑΣ, ΝΕΣΤΟΡΙΟ ΚΑΣΤΟΡΙΑΣ, ΠΕΥΚΟΣ ΚΑΣΤΟΡΙΑΣ, ΠΤΕΛΕΑ ΚΑΣΤΟΡΙΑΣ, ΣΤΕΝΑ ΚΑΣΤΟΡΙΑΣ, ΤΡΙΛΟΦΟΣ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52052', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΑΣΤΟΡΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΟΡΗΣΟΥ ΚΑΣΤΟΡΙΑΣ, ΒΑΣΙΛΕΙΑΔΑ ΚΑΣΤΟΡΙΑΣ, ΒΕΡΓΑ ΚΑΣΤΟΡΙΑΣ, ΚΟΡΗΣΟΣ ΚΑΣΤΟΡΙΑΣ, ΛΙΘΙΑ ΚΑΣΤΟΡΙΑΣ, ΜΕΛΙΣΣΟΤΟΠΟΣ ΚΑΣΤΟΡΙΑΣ, ΜΟΝΗ ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ ΚΑΣΤΟΡΙΑΣ, ΣΤΑΥΡΟΠΟΤΑΜΟΣ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52055', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΚΑΣΤΟΡΙΑΣ, ΑΝΩ ΜΕΛΑΣ ΚΑΣΤΟΡΙΑΣ, ΜΑΚΡΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΜΑΥΡΟΚΑΜΠΟΣ ΚΑΣΤΟΡΙΑΣ, ΜΕΛΑΣ ΚΑΣΤΟΡΙΑΣ, ΧΑΛΑΡΑ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52056', Area: 'ΚΡΕΠΕΝΗ ΚΑΣΤΟΡΙΑΣ, ΜΑΥΡΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΠΟΛΥΚΑΡΠΗ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52057', Area: 'ΔΙΣΠΗΛΙΟ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52059', Area: 'ΒΥΣΣΙΝΕΑ ΚΑΣΤΟΡΙΑΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΚΑΣΤΟΡΙΑΣ, ΟΞΥΑ ΚΑΣΤΟΡΙΑΣ, ΠΟΛΥΚΕΡΑΣΟ ΚΑΣΤΟΡΙΑΣ, ΣΙΔΗΡΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΤΟΙΧΙΟ ΚΑΣΤΟΡΙΑΣ, ΦΩΤΕΙΝΗ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52100', Area: 'ΑΜΠΕΛΟΚΗΠΟΙ ΚΑΣΤΟΡΙΑΣ, ΑΠΟΣΚΕΠΟΣ ΚΑΣΤΟΡΙΑΣ, ΚΑΣΤΟΡΙΑ ΚΑΣΤΟΡΙΑΣ, ΚΕΦΑΛΑΡΙ ΚΑΣΤΟΡΙΑΣ, ΚΟΡΟΜΗΛΕΑ ΚΑΣΤΟΡΙΑΣ, ΛΕΥΚΗ ΚΑΣΤΟΡΙΑΣ, ΜΑΝΙΑΚΟΙ ΚΑΣΤΟΡΙΑΣ, ΜΗΛΙΤΣΑ ΚΑΣΤΟΡΙΑΣ, ΝΕΑ ΛΕΥΚΗ ΚΑΣΤΟΡΙΑΣ, ΧΛΟΗ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '52200', Area: 'ΑΓΙΟΣ ΗΛΙΑΣ ΚΑΣΤΟΡΙΑΣ, ΑΜΜΟΥΔΑΡΑ ΚΑΣΤΟΡΙΑΣ, ΑΜΠΕΛΟΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΑΝΘΗΡΟ ΚΑΣΤΟΡΙΑΣ, ΑΝΩ ΠΕΡΙΒΟΛΙ ΚΑΣΤΟΡΙΑΣ, ΑΡΓΟΣ ΟΡΕΣΤΙΚΟ ΚΑΣΤΟΡΙΑΣ, ΑΣΠΡΟΚΚΛΗΣΙΑ ΚΑΣΤΟΡΙΑΣ, ΑΣΠΡΟΝΕΡΙ ΚΑΣΤΟΡΙΑΣ, ΑΥΓΗ ΚΑΣΤΟΡΙΑΣ, ΒΕΛΟΣ ΚΑΣΤΟΡΙΑΣ, ΒΟΤΑΝΙΟΝ ΚΑΣΤΟΡΙΑΣ, ΒΡΑΧΟΣ ΚΑΣΤΟΡΙΑΣ, ΓΑΒΡΟΣ ΚΑΣΤΟΡΙΑΣ, ΓΕΡΜΑΣ ΚΑΣΤΟΡΙΑΣ, ΓΡΑΜΟΣ ΚΑΣΤΟΡΙΑΣ, ΔΙΑΛΕΚΤΟ ΚΑΣΤΟΡΙΑΣ, ΖΕΥΓΟΣΤΑΣΙ ΚΑΣΤΟΡΙΑΣ, ΖΟΥΖΟΥΛΗ ΚΑΣΤΟΡΙΑΣ, ΚΑΣΤΑΝΟΦΥΤΟ ΚΑΣΤΟΡΙΑΣ, ΚΕΡΑΣΩΝΑ ΚΑΣΤΟΡΙΑΣ, ΚΡΑΝΙΩΝΑΣ ΚΑΣΤΟΡΙΑΣ, ΚΡΕΜΑΣΤΟ ΚΑΣΤΟΡΙΑΣ, ΚΡΥΑ ΝΕΡΑ ΚΑΣΤΟΡΙΑΣ, ΚΥΨΕΛΗ ΚΑΣΤΟΡΙΑΣ, ΚΩΣΤΑΡΑΖΙ ΚΑΣΤΟΡΙΑΣ, ΛΑΓΚΑ ΚΑΣΤΟΡΙΑΣ, ΛΑΚΚΩΜΑΤΑ ΚΑΣΤΟΡΙΑΣ, ΛΑΧΑΝΟΚΗΠΟΙ ΚΑΣΤΟΡΙΑΣ, ΜΕΛΑΝΘΙ ΚΑΣΤΟΡΙΑΣ, ΝΕΟ ΚΩΣΤΑΡΑΖΙ ΚΑΣΤΟΡΙΑΣ, ΝΕΟΣ ΟΙΚΙΣΜΟΣ ΚΑΣΤΟΡΙΑΣ, ΝΙΚΗ ΚΑΣΤΟΡΙΑΣ, ΝΟΣΤΙΜΟ ΚΑΣΤΟΡΙΑΣ, ΟΜΟΡΦΟΚΚΛΗΣΙΑ ΚΑΣΤΟΡΙΑΣ, ΠΕΝΤΑΒΡΥΣΟ ΚΑΣΤΟΡΙΑΣ, ΠΕΤΡΟΠΟΥΛΑΚΙ ΚΑΣΤΟΡΙΑΣ, ΠΟΡΕΙΑ ΚΑΣΤΟΡΙΑΣ, ΣΚΑΛΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΣΠΗΛΑΙΑ ΚΑΣΤΟΡΙΑΣ, ΣΠΗΛΙΟΣ ΚΑΣΤΟΡΙΑΣ, ΤΣΑΚΟΝΗ ΚΑΣΤΟΡΙΑΣ, ΥΨΗΛΟ ΚΑΣΤΟΡΙΑΣ, ΧΙΛΙΟΔΕΝΔΡΟ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Καστοριάς' },
    { PostalCode: '49080', Area: 'ΑΓΙΑ ΑΙΚΑΤΕΡΙΝΗ ΚΕΡΚΥΡΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΠΕΤΡΙΤΗΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΙ  ΘΕΟΔΩΡΟΙ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΡΓΥΡΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΟΡΔΙΟΣ (ΛΕΥΚΙΜΜΑΙΩΝ) ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΕΡΚΥΡΑΣ ΚΕΡΚΥΡΑΣ, ΑΛΥΚΕΣ ΛΕΥΚΙΜΜΗΣ ΚΕΡΚΥΡΑΣ, ΑΡΓΥΡΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΒΑΣΙΛΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΒΙΤΑΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΒΡΑΓΚΑΝΙΩΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΓΑΡΔΕΝΟΣ ΚΕΡΚΥΡΑΣ, ΔΡΑΓΩΤΙΝΑ ΚΕΡΚΥΡΑΣ, ΚΑΒΟΣ ΚΕΡΚΥΡΑΣ, ΚΑΛΥΒΙΩΤΗΣ ΠΕΡΙΒΟΛΙΟΥ ΚΕΡΚΥΡΑΣ, ΚΑΤΩ ΣΠΗΛΑΙΟ ΚΕΡΚΥΡΑΣ, ΚΟΡΑΚΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΟΥΣΠΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΡΗΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΚΡΙΝΙΑΣ ΚΕΡΚΥΡΑΣ, ΛΕΥΚΙΜΜΗ ΚΕΡΚΥΡΑΣ, ΛΙΝΙΑ ΚΕΡΚΥΡΑΣ, ΜΑΡΑΘΙΑΣ ΚΕΡΚΥΡΑΣ, ΜΕΛΙΚΙΑ ΚΕΡΚΥΡΑΣ, ΜΕΣΟΓΓΗ ΚΕΡΚΥΡΑΣ, ΜΠΑΣΤΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΜΠΟΥΚΑΡΗΣ ΚΕΡΚΥΡΑΣ, ΜΩΛΟΣ ΚΕΡΚΥΡΑΣ, ΝΕΟΧΩΡΑΚΙ ΚΕΡΚΥΡΑΣ, ΝΕΟΧΩΡΙ ΚΕΡΚΥΡΑΣ, ΝΟΤΟΣ ΚΕΡΚΥΡΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΚΕΡΚΥΡΑΣ, ΠΕΡΙΒΟΛΙ ΚΕΡΚΥΡΑΣ, ΠΕΤΡΙΤΗ ΚΕΡΚΥΡΑΣ, ΠΟΤΑΜΙ  ΚΕΡΚΥΡΑΣ, ΠΟΤΑΜΙΑ ΠΕΡΙΒΟΛΙΟΥ ΚΕΡΚΥΡΑΣ, ΡΙΓΓΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΡΟΥΜΑΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΣΠΑΡΤΕΡΑ ΚΕΡΚΥΡΑΣ, ΧΛΟΜΑΤΙΑΝΑ ΚΕΡΚΥΡΑΣ, ΧΛΟΜΟΣ ΚΕΡΚΥΡΑΣ, ΨΑΡΑΣ ΚΕΡΚΥΡΑΣ', Prefecture: 'Κέρκυρας' },
    { PostalCode: '49081', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΓΡΑΦΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΑ ΠΕΛΑΓΙΑ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΙ ΔΟΥΛΟΙ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΡΜΕΝΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΣΠΥΡΙΔΩΝΑΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΑΥΛΙΩΤΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΡΑΦΟΙ ΚΕΡΚΥΡΑΣ, ΑΝΤΙΠΕΡΝΟΙ ΚΕΡΚΥΡΑΣ, ΑΡΙΛΛΑΣ ΚΑΒΒΑΔΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΑΡΙΛΛΑΣ ΜΑΓΟΥΛΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΑΡΜΕΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΑΣΤΡΑΚΕΡΗ ΚΕΡΚΥΡΑΣ, ΑΥΛΙΩΤΕΣ ΚΕΡΚΥΡΑΣ, ΑΦΙΩΝ ΚΕΡΚΥΡΑΣ, ΒΑΛΑΝΕΙΟ ΚΕΡΚΥΡΑΣ, ΒΕΛΟΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΓΑΒΡΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΓΑΡΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΓΟΥΣΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΔΑΦΝΗ ΚΕΡΚΥΡΑΣ, ΕΠΙΣΚΟΠΗ ΚΕΡΚΥΡΑΣ, ΚΑΒΑΛΛΟΥΡΙ ΚΕΡΚΥΡΑΣ, ΚΑΒΒΑΔΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΑΡΟΥΣΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΛΗΜΑΤΙΑ ΚΕΡΚΥΡΑΣ, ΚΟΥΚΝΙΚΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΟΥΝΑΒΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΥΠΡΙΑΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΛΙΒΑΔΙ ΚΕΡΚΥΡΑΣ, ΜΑΓΟΥΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΜΕΓΑ ΥΔΡΙ ΚΕΡΚΥΡΑΣ, ΝΥΜΦΕΣ ΚΕΡΚΥΡΑΣ, ΞΑΝΘΑΤΕΣ ΚΕΡΚΥΡΑΣ, ΠΕΡΟΥΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΠΛΑΤΩΝΑΣ ΚΕΡΚΥΡΑΣ, ΠΟΥΛΗΜΑΤΕΣ ΚΕΡΚΥΡΑΣ, ΡΑΧΤΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΡΟΔΑ ΚΑΡΟΥΣΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΡΟΔΑ ΚΕΡΚΥΡΑΣ ΚΕΡΚΥΡΑΣ, ΣΑΟΥΛΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΣΙΔΑΡΙΟ ΚΕΡΚΥΡΑΣ, ΣΙΝΙΕΣ ΚΕΡΚΥΡΑΣ, ΣΤΑΟΥΣΑ ΚΕΡΚΥΡΑΣ, ΣΦΑΚΕΡΑ ΚΕΡΚΥΡΑΣ, ΤΣΟΥΚΑΛΙΟ ΚΕΡΚΥΡΑΣ, ΨΑΘΥΛΑΣ ΚΕΡΚΥΡΑΣ', Prefecture: 'Κέρκυρας' },
    { PostalCode: '49082', Area: 'ΑΝΕΜΟΓΙΑΝΝΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΑΝΤΙΠΑΞΟΣ ΚΕΡΚΥΡΑΣ, ΑΠΕΡΓΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΑΡΒΑΝΙΤΑΚΑΙΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΑΡΩΝΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΒΕΛΙΑΝΙΤΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΒΛΑΧΟΠΟΥΛΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΓΑΙΟΣ ΚΕΡΚΥΡΑΣ, ΓΡΑΜΜΑΤΙΚΑΙΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΔΑΛΙΕΤΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΔΕΝΔΙΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΙΕΡΟΜΟΝΑΧΟΣ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΚΑΓΚΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΚΑΤΣΙΜΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΚΟΝΤΟΓΙΑΝΝΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΚΟΥΡΤΑΙΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΚΟΥΤΣΙΟ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΛΑΚΚΑ ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΛΟΓΓΟΣ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΑΓΑΖΙΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΑΚΡΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΑΝΕΣΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΑΣΤΟΡΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΟΥΓΚΕΛΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΠΟΓΔΑΝΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΜΠΟΙΚΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΟΖΙΑΣ ΚΕΡΚΥΡΑΣ, ΟΞΙΑΣ ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΠΑΝΑΓΙΑ  ΝΗΣΟΣ ΚΕΡΚΥΡΑΣ, ΠΑΞΟΙ ΚΕΡΚΥΡΑΣ, ΠΕΤΡΑΤΙΚΑ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ, ΠΛΑΤΑΝΟΣ  ΠΑΞΩΝ ΚΕΡΚΥΡΑΣ', Prefecture: 'Κέρκυρας' },
    { PostalCode: '49083', Area: 'ΑΓΙΑ ΑΝΝΑ ΑΛΕΙΜΜΑΤΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΓΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΜΑΡΚΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΡΟΣ ΚΕΡΚΥΡΑΣ, ΑΛΕΙΜΜΑΤΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΑΝΑΛΗΨΗ ΚΕΡΚΥΡΑΣ, ΑΝΩ ΚΟΡΑΚΙΑΝΑ ΚΕΡΚΥΡΑΣ, ΑΡΚΑΔΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΑΣΠΙΩΤΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΑΦΙΩΝΙΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΒΑΤΩΝΙΕΣ ΚΕΡΚΥΡΑΣ, ΒΙΣΤΩΝΑΣ ΚΕΡΚΥΡΑΣ, ΓΑΖΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΓΑΡΔΕΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΓΕΦΥΡΑ ΚΕΡΚΥΡΑΣ, ΔΟΥΚΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΔΡΟΣΑΤΟ ΚΕΡΚΥΡΑΣ, ΖΥΓΟΣ ΚΕΡΚΥΡΑΣ, ΚΑΣΤΕΛΛΑΝΟΙ ΓΥΡΟΥ ΚΕΡΚΥΡΑΣ, ΚΑΤΩ ΑΓΙΟΣ ΜΑΡΚΟΣ ΚΕΡΚΥΡΑΣ, ΚΑΤΩ ΚΟΡΑΚΙΑΝΑ ΚΕΡΚΥΡΑΣ, ΚΟΨΟΧΕΙΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΡΗΝΗ ΚΕΡΚΥΡΑΣ, ΛΑΚΩΝΕΣ ΚΕΡΚΥΡΑΣ, ΛΙΑΠΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΛΙΜΝΗ ΚΕΡΚΥΡΑΣ, ΜΑΚΡΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΜΑΝΑΤΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΜΕΣΑΡΙΑ ΚΕΡΚΥΡΑΣ, ΠΑΓΟΙ ΚΕΡΚΥΡΑΣ, ΠΑΛΑΙΟΚΑΣΤΡΙΤΣΑ ΚΕΡΚΥΡΑΣ, ΠΑΠΑΘΑΝΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΠΗΛΙΔΑ ΚΕΡΚΥΡΑΣ, ΠΟΥΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΠΡΙΝΥΛΑΣ ΚΕΡΚΥΡΑΣ, ΠΥΡΓΙ ΚΕΡΚΥΡΑΣ, ΡΑΦΑΛΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΣΚΡΙΠΕΡΟ ΚΕΡΚΥΡΑΣ, ΣΩΚΡΑΚΙ ΚΕΡΚΥΡΑΣ, ΤΕΡΜΕΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΤΡΟΥΜΠΕΤΤΑΣ ΚΕΡΚΥΡΑΣ, ΥΨΟΣ ΚΕΡΚΥΡΑΣ, ΦΕΛΕΚΑΣ ΚΕΡΚΥΡΑΣ, ΧΩΡΕΠΙΣΚΟΠΟΙ ΚΕΡΚΥΡΑΣ', Prefecture: 'Κέρκυρας' },
    { PostalCode: '49084', Area: 'ΑΓΙΟΙ ΔΕΚΑ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΒΙΡΟΥ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΟΡΔΙΟΣ (ΠΑΡΕΛΙΩΝ) ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΠΕΡΙΣΤΕΡΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΜΑΤΘΑΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΠΡΟΚΟΠΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΛΕΠΟΧΩΡΙ ΚΕΡΚΥΡΑΣ, ΑΝΩ ΓΑΡΟΥΝΑ ΚΕΡΚΥΡΑΣ, ΑΝΩ ΠΑΥΛΙΑΝΑ ΚΕΡΚΥΡΑΣ, ΑΣΠΕΣ ΚΕΡΚΥΡΑΣ, ΒΑΡΥΠΑΤΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΒΙΡΟΣ ΚΕΡΚΥΡΑΣ, ΒΟΥΝΙΑΤΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΓΑΣΤΟΥΡΙ ΚΕΡΚΥΡΑΣ, ΔΑΦΝΑΤΑ ΚΕΡΚΥΡΑΣ, ΕΠΙΣΚΟΠΙΑΝΑ ΚΕΡΚΥΡΑΣ, ΕΣΤΑΥΡΩΜΕΝΟΣ ΚΕΡΚΥΡΑΣ, ΚΑΛΑΦΑΤΙΩΝΕΣ ΚΕΡΚΥΡΑΣ, ΚΑΜΑΡΑ ΚΕΡΚΥΡΑΣ, ΚΑΡΔΑΜΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΚΑΣΤΑΝΕΑ ΚΕΡΚΥΡΑΣ, ΚΑΣΤΕΛΛΑΝΟΙ ΜΕΣΗΣ ΚΕΡΚΥΡΑΣ, ΚΑΤΩ ΓΑΡΟΥΝΑ ΚΕΡΚΥΡΑΣ, ΚΑΤΩ ΠΑΥΛΙΑΝΑ ΚΕΡΚΥΡΑΣ, ΚΟΜΙΑΝΑΤΑ ΚΕΡΚΥΡΑΣ, ΚΟΝΤΟΓΙΑΛΟΣ ΚΕΡΚΥΡΑΣ, ΚΟΡΝΑΤΑ ΚΕΡΚΥΡΑΣ, ΚΟΥΡΑΜΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΥΝΟΠΙΑΣΤΕΣ ΚΕΡΚΥΡΑΣ, ΛΟΥΚΑΤΑ ΚΕΡΚΥΡΑΣ, ΜΑΚΡΑΤΑ ΚΕΡΚΥΡΑΣ, ΜΠΑΣΤΟΥΝΙΟΝ ΚΕΡΚΥΡΑΣ, ΜΠΕΝΙΤΣΕΣ ΚΕΡΚΥΡΑΣ, ΜΩΡΑΙΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΠΑΡΑΜΟΝΑΣ ΚΕΡΚΥΡΑΣ, ΠΕΝΤΑΤΙ ΚΕΡΚΥΡΑΣ, ΠΕΡΑΜΑ ΓΑΣΤΟΥΡΙΟΥ ΚΕΡΚΥΡΑΣ, ΠΙΚΟΥΛΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΣΙΝΑΡΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΣΚΑΛΑ ΚΕΡΚΥΡΑΣ, ΣΟΥΛΑΙΙΚΑ ΚΕΡΚΥΡΑΣ, ΣΤΑΥΡΟΣ ΚΕΡΚΥΡΑΣ, ΣΤΡΟΓΓΥΛΗ ΘΙΝΑΛΙΟΥ ΚΕΡΚΥΡΑΣ, ΣΤΡΟΓΓΥΛΗ ΚΕΡΚΥΡΑΣ ΚΕΡΚΥΡΑΣ, ΧΑΛΙΔΙΑΤΑ ΚΕΡΚΥΡΑΣ, ΧΑΛΙΚΟΥΝΑΣ ΚΕΡΚΥΡΑΣ, ΧΡΥΣΗΙΔΑ ΚΕΡΚΥΡΑΣ', Prefecture: 'Κέρκυρας' },
    { PostalCode: '49100', Area: 'ΑΒΡΑΜΗΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΑΣΣΙΟΠΗΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΗΛΙΑΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΚΑΡΟΥΣΑΔΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΜΑΡΤΙΝΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΟΝΟΥΦΡΙΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΚΕΡΚΥΡΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΣΙΝΙΩΝ ΚΕΡΚΥΡΑΣ, ΑΓΝΙΤΣΙΝΗ ΚΕΡΚΥΡΑΣ, ΑΛΕΠΟΥ ΚΕΡΚΥΡΑΣ, ΑΛΥΚΕΣ ΠΟΤΑΜΟΥ ΚΕΡΚΥΡΑΣ, ΑΝΑΠΑΥΤΗΡΙΑ ΚΕΡΚΥΡΑΣ, ΑΝΩ ΠΕΡΙΘΕΙΑ ΚΕΡΚΥΡΑΣ, ΑΠΟΛΥΣΟΙ ΚΕΡΚΥΡΑΣ, ΑΠΡΑΟΣ ΚΕΡΚΥΡΑΣ, ΑΦΡΑ ΚΕΡΚΥΡΑΣ, ΑΧΑΡΑΒΗ ΚΕΡΚΥΡΑΣ, ΒΑΘΥ ΚΕΡΚΥΡΑΣ, ΒΑΣΙΛΙΚΑ ΘΙΝΑΛΙΟΥ ΚΕΡΚΥΡΑΣ, ΒΑΣΙΛΙΚΑ ΠΑΡΕΛΙΩΝ ΚΕΡΚΥΡΑΣ, ΒΑΤΟΣ ΚΕΡΚΥΡΑΣ, ΒΙΓΓΛΑ ΚΕΡΚΥΡΑΣ, ΒΙΓΓΛΑΤΟΥΡΙ ΚΕΡΚΥΡΑΣ, ΒΛΑΧΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΒΟΥΝΟ ΚΕΡΚΥΡΑΣ, ΒΡΑΧΛΕΡΗ ΚΕΡΚΥΡΑΣ, ΒΡΥΩΝΗ ΚΕΡΚΥΡΑΣ, ΓΙΑΝΝΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΓΙΜΑΡΙ ΚΕΡΚΥΡΑΣ, ΓΛΥΦΑΔΑ ΚΕΡΚΥΡΑΣ, ΓΟΥΒΙΑ ΚΕΡΚΥΡΑΣ, ΔΑΝΙΛΙΑ ΚΕΡΚΥΡΑΣ, ΔΑΣΙΑ ΚΕΡΚΥΡΑΣ, ΔΑΦΝΙΛΑΣ ΚΕΡΚΥΡΑΣ, ΔΙΑΚΟΠΟ ΜΑΘΡΑΚΙΟΥ ΚΕΡΚΥΡΑΣ, ΔΙΑΠΛΟ ΜΑΘΡΑΚΙΟΥ ΚΕΡΚΥΡΑΣ, ΔΡΟΣΕΡΗ ΚΕΡΚΥΡΑΣ, ΕΒΡΟΠΟΥΛΟΙ ΚΕΡΚΥΡΑΣ, ΕΠΙΣΚΕΨΗ ΚΕΡΚΥΡΑΣ, ΕΡΕΙΚΟΥΣΣΑ ΝΗΣΟΣ ΚΕΡΚΥΡΑΣ, ΕΡΙΒΑ ΚΕΡΚΥΡΑΣ, ΕΡΜΟΝΕΣ ΚΕΡΚΥΡΑΣ, ΗΜΕΡΟΛΙΑ ΚΕΡΚΥΡΑΣ, ΚΑΒΑΛΛΕΡΑΙΝΑ ΚΕΡΚΥΡΑΣ, ΚΑΛΑΜΙ ΚΕΡΚΥΡΑΣ, ΚΑΝΑΚΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΚΑΝΑΛΙ ΚΕΡΚΥΡΑΣ, ΚΑΝΟΝΙ ΚΕΡΚΥΡΑΣ, ΚΑΡΝΙΑΡΗΣ ΚΕΡΚΥΡΑΣ, ΚΑΡΥΩΤΙΚΟ ΚΕΡΚΥΡΑΣ, ΚΑΣΣΙΟΠΗ ΚΕΡΚΥΡΑΣ, ΚΑΤΑΒΟΛΟΣ ΚΕΡΚΥΡΑΣ, ΚΑΤΩ ΠΕΡΙΘΕΙΑ ΚΕΡΚΥΡΑΣ, ΚΕΛΛΙΑ ΚΕΡΚΥΡΑΣ, ΚΕΝΤΡΩΜΑ ΚΕΡΚΥΡΑΣ, ΚΕΡΚΥΡΑ ΚΕΡΚΥΡΑΣ, ΚΟΚΚΙΝΗ ΚΕΡΚΥΡΑΣ, ΚΟΚΚΙΝΙΟ ΚΕΡΚΥΡΑΣ, ΚΟΚΚΙΝΟΓΕΙΑ ΚΕΡΚΥΡΑΣ, ΚΟΚΚΟΚΥΛΑΣ ΚΕΡΚΥΡΑΣ, ΚΟΜΠΙΤΣΙ ΚΕΡΚΥΡΑΣ, ΚΟΝΤΟΚΑΛΙ ΚΕΡΚΥΡΑΣ, ΚΟΥΛΟΥΡΑ ΚΕΡΚΥΡΑΣ, ΚΟΥΡΑΜΑΔΙΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΚΟΥΡΚΟΥΛΑΙΙΚΑ ΚΕΡΚΥΡΑΣ, ΚΡΕΜΙΘΑΣ ΚΕΡΚΥΡΑΣ, ΚΥΡΑ ΧΡΥΣΙΚΟΥ ΚΕΡΚΥΡΑΣ, ΛΑΖΑΡΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΛΑΖΑΡΕΤΟ ΚΕΡΚΥΡΑΣ, ΛΑΥΚΙ ΚΕΡΚΥΡΑΣ, ΛΙΘΙΑΣΜΕΝΟΣ ΚΕΡΚΥΡΑΣ, ΛΟΥΤΣΕΣ ΚΕΡΚΥΡΑΣ, ΜΑΓΑΡΙΚΑ ΚΕΡΚΥΡΑΣ, ΜΑΘΡΑΚΙ ΝΗΣΟΣ ΚΕΡΚΥΡΑΣ, ΜΑΝΔΟΥΚΙ ΚΕΡΚΥΡΑΣ, ΜΑΡΜΑΡΟ ΚΕΡΚΥΡΑΣ, ΜΕΓΓΟΥΛΑΣ ΚΕΡΚΥΡΑΣ, ΜΟΝΗ ΥΠΕΡΑΓΙΑΣ ΘΕΟΤΟΚΟΥ ΜΥΡΤΙΔΙΩΝ ΚΕΡΚΥΡΑΣ, ΜΠΑΡΜΠΑΤΙ ΚΕΡΚΥΡΑΣ, ΝΗΣΑΚΙ ΚΕΡΚΥΡΑΣ, ΟΘΩΝΟΙ ΝΗΣΟΣ ΚΕΡΚΥΡΑΣ, ΟΜΑΛΗ ΚΕΡΚΥΡΑΣ, ΠΕΛΕΚΑΣ ΚΕΡΚΥΡΑΣ, ΠΕΛΕΚΗΤΟ ΚΕΡΚΥΡΑΣ, ΠΕΡΑΜΑ ΚΕΡΚΥΡΑΣ, ΠΕΡΙΘΕΙΑ ΚΕΡΚΥΡΑΣ, ΠΕΡΙΣΤΕΡΕΣ ΚΕΡΚΥΡΑΣ, ΠΕΡΟΥΛΙΟΝ ΚΕΡΚΥΡΑΣ, ΠΕΤΑΛΕΙΑ ΚΕΡΚΥΡΑΣ, ΠΗΓΗ ΚΕΡΚΥΡΑΣ, ΠΙΘΟΣ ΚΕΡΚΥΡΑΣ, ΠΛΑΓΙΑ ΚΕΡΚΥΡΑΣ, ΠΛΑΚΩΤΟ ΚΕΡΚΥΡΑΣ, ΠΛΑΤΕΙΑ ΚΕΡΚΥΡΑΣ, ΠΟΔΟΛΑΚΚΟΣ ΚΕΡΚΥΡΑΣ, ΠΟΝΤΙΚΟΝΗΣΙ ΚΕΡΚΥΡΑΣ, ΠΟΡΤΑ ΚΕΡΚΥΡΑΣ, ΠΟΤΑΜΟΣ ΚΕΡΚΥΡΑΣ, ΠΡΙΦΤΙΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΠΤΥΧΙΑ ΝΗΣΟΣ ΚΕΡΚΥΡΑΣ, ΡΑΧΗ ΚΕΡΚΥΡΑΣ, ΡΙΛΙΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΡΟΥ ΚΕΡΚΥΡΑΣ, ΣΑΝΤΑ ΚΕΡΚΥΡΑΣ, ΣΑΡΑΚΗΝΑΤΙΚΑ ΚΕΡΚΥΡΑΣ, ΣΓΟΜΠΟΥ ΚΕΡΚΥΡΑΣ, ΣΓΟΥΡΑΔΕΣ ΚΕΡΚΥΡΑΣ, ΣΠΑΡΤΥΛΑΣ ΚΕΡΚΥΡΑΣ, ΣΤΡΙΝΥΛΑΣ ΚΕΡΚΥΡΑΣ, ΤΕΜΠΛΟΝΙ ΚΕΡΚΥΡΑΣ, ΤΖΑΒΡΟΣ ΚΕΡΚΥΡΑΣ, ΤΡΑΧΕΙΑ ΜΑΘΡΑΚΙΟΥ ΚΕΡΚΥΡΑΣ, ΤΡΙΚΛΙΝΟ ΚΕΡΚΥΡΑΣ, ΤΡΙΜΟΔΙ ΚΕΡΚΥΡΑΣ, ΤΡΙΤΣΙΟ ΚΕΡΚΥΡΑΣ, ΤΣΑΡΟΥ ΚΕΡΚΥΡΑΣ, ΦΟΥΡΝΙ ΚΕΡΚΥΡΑΣ, ΨΑΧΝΙΑ ΚΕΡΚΥΡΑΣ, ΨΥΛΛΟΣ ΔΥΟ ΚΕΡΚΥΡΑΣ, ΨΥΛΛΟΣ ΕΝΑ ΚΕΡΚΥΡΑΣ', Prefecture: 'Κέρκυρας' },
    { PostalCode: '28080', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΓΡΙΖΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΙΓΑΛΕΤΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΖΕΡΒΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΡΑΒΟΜΥΛΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΤΑΠΟΔΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΥΛΟΥΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΟΥΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΥΡΓΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΑΜΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΖΑΝΕΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΣΑΚΑΡΙΣΙΑΝΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΧΑΛΙΩΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '28081', Area: 'ΑΓΙΑ ΕΥΦΗΜΙΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΙΑ ΣΟΦΙΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΝΤΙΠΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΑΛΙΑΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΑΣΙΛΟΠΟΥΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΓΕΩΡΓΑΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΕΝΔΡΙΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΙΒΑΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΡΑΚΟΠΟΥΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΛΟΓΗΡΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΜΙΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΑΜΠΡΙΝΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΟΥΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΚΡΙΩΤΙΚΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΟΔΙΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΝΕΟΧΩΡΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΞΗΡΟΠΟΤΑΜΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΕΤΑΛΑΣ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΙΣΤΡΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΟΤΑΜΙΑΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΡΑΣΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΟΦΙΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΩΡΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΕΡΕΝΤΙΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΙΛΙΠΠΟΣ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '28084', Area: 'ΑΓΙΑ ΙΕΡΟΥΣΑΛΗΜ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΡΙΛΙΑΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΝΤΙΠΑΤΑ ΕΡΙΣΟΥ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΣΤΕΡΙΣ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΕΝΤΟΥΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΙΓΛΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΓΕΡΜΕΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΕΥΡΕΤΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΖΑΜΠΕΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΤΣΑΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΑΒΩΝΙΚΕΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΓΓΑΝΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΡΚΑΝΤΩΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΡΚΟΥΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΤΣΟΥΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΠΑΡΖΟΥΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΤΕΛΙΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΖΑΜΑΡΕΛΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΟΥΛΙΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΣΕΛΕΝΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΙΣΚΑΡΔΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΧΑΛΙΚΕΡΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΨΙΛΙΘΡΙΑΣ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '28086', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΣΠΡΟΓΕΡΑΚΑΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΟΝΗ ΥΠΕΡΑΓΙΑΣ ΘΕΟΤΟΚΟΥ ΑΤΡΟΥ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΟΡΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΖΑΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '28100', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΒΑΛΣΑΜΑΤΩΝ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΙΟΣ ΕΛΕΥΘΕΡΙΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΚΩΝΑΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΡΓΟΣΤΟΛΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΑΛΣΑΜΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΑΥΓΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΕΜΟΥΤΣΑΝΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΙΛΙΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΡΑΠΑΝΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΕΠΑΝΩΧΩΡΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΖΕΡΒΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΖΟΛΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΡΔΑΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΚΟΛΑΤΑ ΑΡΓΟΣΤΟΛΙΟΥ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΜΠΟΘΕΚΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΥΛΟΥΜΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΥΡΟΥΚΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΑΚΗΘΡΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΑΣΣΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΟΓΑΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΕΝΕΓΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΕΤΑΞΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΗΝΙΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΙΤΑΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΙΧΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΡΑΣΙΜΟΥ ΚΕΦΑΛΛΗΝΙΑΣ, ΝΥΦΙΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΟΜΑΛΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΛΑΤΥΣ ΓΙΑΛΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΡΟΚΟΠΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΡΑΖΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΡΙΖΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΒΟΡΩΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΡΩΙΑΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΑΡΑΚΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΑΡΣΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΡΑΓΚΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '28200', Area: 'ΑΓΙΑ ΘΕΚΛΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΠΑΛΗΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΘΕΡΑΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΑΡΔΙΑΝΟΙ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΙΛΑΤΩΡΙΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΛΥΧΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΟΒΥΚΕΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΟΥΝΙΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΑΜΟΥΛΙΑΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΕΛΑΠΟΡΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΕΛΛΑΠΟΡΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΕΜΑΤΟΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΜΙΝΑΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΤΕΡΕΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΝΤΟΓΕΝΑΔΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΥΒΑΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΟΥΜΟΠΕΤΡΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΕΠΕΔΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΗΞΟΥΡΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΙΒΑΔΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΟΓΓΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΟΥΚΕΡΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΝΤΖΑΒΙΝΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΕΓΑ ΛΑΚΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΙΧΑΛΙΤΣΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΟΝΗ ΥΠΕΡΑΓΙΑΣ ΘΕΟΤΟΚΟΥ ΚΗΠΟΥΡΑΙΩΝ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΟΝΟΠΟΛΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΞΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΑΡΙΣΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΕΤΑΝΟΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΡΙΦΙΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΚΙΝΕΑΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΣΟΥΛΛΑΡΟΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΤΥΠΑΛΔΑΤΟ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΑΒΑΤΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΧΑΒΔΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΧΑΒΡΙΑΤΑ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '28300', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΕΤΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΝΩΓΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΡΚΟΥΔΙ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΑΤΟΚΟΣ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΒΡΟΜΩΝΑΣ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΔΡΑΚΟΝΕΡΑ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΕΞΩΓΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΙΘΑΚΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΑΡΛΟΝΗΣΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΚΙΟΝΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΑΖΑΡΕΤΟ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΕΥΚΗ ΚΕΦΑΛΛΗΝΙΑΣ, ΛΥΓΙΑ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΑΚΡΗ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΜΟΝΗ ΚΑΘΑΡΩΝ ΚΕΦΑΛΛΗΝΙΑΣ, ΟΞΕΙΑ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΕΡΑΧΩΡΙ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΛΑΤΡΕΙΘΙΑΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΟΝΤΙΚΟΣ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΠΡΟΒΑΤΙΟ ΝΗΣΟΣ ΚΕΦΑΛΛΗΝΙΑΣ, ΦΡΙΚΕΣ ΚΕΦΑΛΛΗΝΙΑΣ', Prefecture: 'Κεφαλληνίας' },
    { PostalCode: '61002', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΚΙΛΚΙΣ, ΕΛΕΥΘΕΡΟΧΩΡΙ ΚΙΛΚΙΣ, ΗΛΙΟΦΩΤΟ ΚΙΛΚΙΣ, ΚΑΛΙΝΔΡΙΑ ΚΙΛΚΙΣ, ΚΟΡΟΜΗΛΙΑ ΚΙΛΚΙΣ, ΜΕΓΑΛΗ ΣΤΕΡΝΑ ΚΙΛΚΙΣ, ΜΙΧΑΛΙΤΣΙ ΚΙΛΚΙΣ, ΠΛΑΓΙΑ ΚΙΛΚΙΣ ΚΙΛΚΙΣ, ΠΛΑΓΙΑ ΠΑΙΟΝΙΑΣ ΚΙΛΚΙΣ, ΣΟΥΛΤΟΓΙΑΝΝΑΙΙΚΑ ΚΙΛΚΙΣ, ΧΕΡΣΟ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '61003', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΙΛΚΙΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΚΙΛΚΙΣ, ΑΚΑΚΙΕΣ ΚΙΛΚΙΣ, ΑΚΡΙΤΑΣ ΚΙΛΚΙΣ, ΑΛΕΞΑΝΔΡΑ ΚΙΛΚΙΣ, ΑΜΑΡΑΝΤΑ ΚΙΛΚΙΣ, ΑΝΩ ΣΟΥΡΜΕΝΑ ΚΙΛΚΙΣ, ΔΟΙΡΑΝΗ ΚΙΛΚΙΣ, ΔΡΟΣΑΤΟ ΚΙΛΚΙΣ, ΚΑΒΑΛΛΑΡΗΣ ΚΙΛΚΙΣ, ΚΑΛΛΙΡΡΟΗ ΚΙΛΚΙΣ, ΚΑΤΩ ΣΟΥΡΜΕΝΑ ΚΙΛΚΙΣ, ΚΟΡΥΦΗ ΚΙΛΚΙΣ, ΜΙΚΡΟΒΡΥΣΗ ΚΙΛΚΙΣ, ΜΟΥΡΙΕΣ ΚΙΛΚΙΣ, ΜΥΡΙΟΦΥΤΟ ΚΙΛΚΙΣ, ΝΕΟ ΜΥΡΙΟΦΥΤΟ ΚΙΛΚΙΣ, ΡΟΔΩΝΑΣ ΚΙΛΚΙΣ, ΣΤΑΘΜΟΣ ΜΟΥΡΙΩΝ ΚΙΛΚΙΣ, ΣΥΚΑΜΙΝΕΑ ΚΙΛΚΙΣ, ΨΥΧΟΒΡΥΣΗ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '61004', Area: 'ΚΙΛΚΙΣ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '61007', Area: 'ΕΥΡΩΠΟΣ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '61100', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΚΙΛΚΙΣ, ΑΓΙΟΣ ΜΑΡΚΟΣ ΚΙΛΚΙΣ, ΑΚΡΟΠΟΤΑΜΙΑ ΚΙΛΚΙΣ, ΑΝΑΒΡΥΤΟ ΚΙΛΚΙΣ, ΑΝΘΟΦΥΤΟ ΚΙΛΚΙΣ, ΑΝΤΙΓΟΝΕΙΑ ΚΙΛΚΙΣ, ΑΝΩ ΑΠΟΣΤΟΛΟΙ ΚΙΛΚΙΣ, ΑΝΩ ΠΟΤΑΜΙΑ ΚΙΛΚΙΣ, ΑΡΓΥΡΟΥΠΟΛΗ ΚΙΛΚΙΣ, ΒΑΠΤΙΣΤΗΣ ΚΙΛΚΙΣ, ΓΑΒΡΑ ΚΙΛΚΙΣ, ΓΑΛΛΙΚΟΣ ΚΙΛΚΙΣ, ΔΑΦΝΟΧΩΡΙ ΚΙΛΚΙΣ, ΔΙΠΟΤΑΜΟΣ ΚΙΛΚΙΣ, ΕΠΤΑΛΟΦΟΣ ΚΙΛΚΙΣ, ΕΥΚΑΡΠΙΑ ΚΙΛΚΙΣ, ΖΑΧΑΡΑΤΟ ΚΙΛΚΙΣ, ΗΛΙΟΛΟΥΣΤΟ ΚΙΛΚΙΣ, ΚΑΛΟΛΙΒΑΔΟ ΚΙΛΚΙΣ, ΚΑΜΠΑΝΗΣ ΚΙΛΚΙΣ, ΚΑΣΤΑΝΙΕΣ ΚΙΛΚΙΣ, ΚΑΤΩ ΑΠΟΣΤΟΛΟΙ ΚΙΛΚΙΣ, ΚΑΤΩ ΠΟΤΑΜΙΑ ΚΙΛΚΙΣ, ΚΕΝΤΡΙΚΟ ΚΙΛΚΙΣ, ΚΙΛΚΙΣ ΚΙΛΚΙΣ, ΚΟΙΛΑΔΙ ΚΙΛΚΙΣ, ΚΟΚΚΙΝΙΑ ΚΙΛΚΙΣ, ΚΟΛΧΙΔΑ ΚΙΛΚΙΣ, ΚΟΡΩΝΟΥΔΑ ΚΙΛΚΙΣ, ΚΡΗΣΤΩΝΗ ΚΙΛΚΙΣ, ΚΥΡΙΑΚΑΙΙΚΑ ΚΙΛΚΙΣ, ΛΑΟΔΙΚΗΝΟ ΚΙΛΚΙΣ, ΛΕΒΕΝΤΟΧΩΡΙ ΚΙΛΚΙΣ, ΛΕΙΨΥΔΡΙΟ ΚΙΛΚΙΣ, ΜΑΝΔΡΕΣ ΚΙΛΚΙΣ, ΜΑΥΡΟΝΕΡΙ ΚΙΛΚΙΣ, ΜΑΥΡΟΠΛΑΓΙΑ ΚΙΛΚΙΣ, ΜΕΓΑΛΗ ΒΡΥΣΗ ΚΙΛΚΙΣ, ΜΕΛΙΣΣΟΥΡΓΕΙΟ ΚΙΛΚΙΣ, ΜΕΣΙΑΝΟ ΚΙΛΚΙΣ, ΜΕΣΟΙ ΑΠΟΣΤΟΛΟΙ ΚΙΛΚΙΣ, ΜΕΤΑΛΛΙΚΟ ΚΙΛΚΙΣ, ΜΕΤΑΞΟΧΩΡΙ ΚΙΛΚΙΣ, ΜΙΚΡΟΚΑΜΠΟΣ ΚΙΛΚΙΣ, ΜΟΝΟΛΙΘΙ ΚΙΛΚΙΣ, ΜΠΑΚΑΙΙΚΑ ΚΙΛΚΙΣ, ΜΥΛΟΣ ΚΙΛΚΙΣ, ΜΥΛΟΧΩΡΙ ΚΙΛΚΙΣ, ΝΕΑ ΣΑΝΤΑ ΚΙΛΚΙΣ, ΝΕΟ ΑΓΙΟΝΕΡΙ ΚΙΛΚΙΣ, ΝΕΟ ΓΥΝΑΙΚΟΚΑΣΤΡΟ ΚΙΛΚΙΣ, ΞΗΡΟΒΡΥΣΗ ΚΙΛΚΙΣ, ΞΥΛΟΚΕΡΑΤΕΑ ΚΙΛΚΙΣ, ΠΑΛΑΙΟ ΑΓΙΟΝΕΡΙ ΚΙΛΚΙΣ, ΠΑΛΑΙΟ ΓΥΝΑΙΚΟΚΑΣΤΡΟ ΚΙΛΚΙΣ, ΠΑΛΑΤΙΑΝΟ ΚΙΛΚΙΣ, ΠΑΡΟΧΘΙΟ ΚΙΛΚΙΣ, ΠΕΔΙΝΟ ΚΙΛΚΙΣ, ΠΕΡΙΝΘΟΣ ΚΙΛΚΙΣ, ΠΕΡΙΣΤΕΡΙ ΚΙΛΚΙΣ, ΠΕΤΡΑΔΕΣ ΚΙΛΚΙΣ, ΠΙΚΡΟΛΙΜΝΗ ΚΙΛΚΙΣ, ΠΛΑΓΙΟΧΩΡΙ ΚΙΛΚΙΣ, ΠΟΝΤΟΚΕΡΑΣΙΑ ΚΙΛΚΙΣ, ΠΥΡΓΩΤΟΣ ΚΙΛΚΙΣ, ΣΕΒΑΣΤΟ ΚΙΛΚΙΣ, ΣΤΑΥΡΟΧΩΡΙ ΚΙΛΚΙΣ, ΤΕΡΠΥΛΛΟΣ ΚΙΛΚΙΣ, ΤΡΙΠΟΤΑΜΟΣ ΚΙΛΚΙΣ, ΦΑΝΑΡΙ ΚΙΛΚΙΣ, ΧΕΙΜΑΔΙΟ ΚΙΛΚΙΣ, ΧΡΥΣΟΠΕΤΡΑ ΚΙΛΚΙΣ, ΧΩΡΥΓΙ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '61200', Area: 'ΑΞΙΟΧΩΡΙ ΚΙΛΚΙΣ, ΑΣΠΡΟΣ ΚΙΛΚΙΣ, ΒΑΚΟΥΦΙ ΚΙΛΚΙΣ, ΒΑΛΤΟΥΔΙ ΚΙΛΚΙΣ, ΒΑΦΙΟΧΩΡΙ ΚΙΛΚΙΣ, ΕΙΡΗΝΙΚΟ ΚΙΛΚΙΣ, ΕΥΖΩΝΟΙ ΚΙΛΚΙΣ, ΚΑΣΤΡΟ ΚΙΛΚΙΣ, ΚΟΚΑΡΤΖΑ ΚΙΛΚΙΣ, ΚΟΡΩΝΑ ΚΙΛΚΙΣ, ΚΟΤΥΛΙ ΚΙΛΚΙΣ, ΚΟΥΛΙΝΑΙΙΚΑ ΚΙΛΚΙΣ, ΛΑΤΟΜΕΙΟ ΚΙΛΚΙΣ, ΛΙΜΝΟΤΟΠΟΣ ΚΙΛΚΙΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΚΙΛΚΙΣ, ΜΙΚΡΟ ΔΑΣΟΣ ΚΙΛΚΙΣ, ΝΕΑ ΚΑΒΑΛΑ ΚΙΛΚΙΣ, ΝΕΟ ΣΥΡΑΚΙ ΚΙΛΚΙΣ, ΞΗΡΟΛΑΚΚΟΣ ΚΙΛΚΙΣ, ΠΕΥΚΟΔΑΣΟΣ ΚΙΛΚΙΣ, ΠΛΑΤΑΝΙΑ ΕΥΖΩΝΩΝ ΚΙΛΚΙΣ, ΠΛΑΤΑΝΙΕΣ ΚΙΛΚΙΣ, ΠΟΛΥΚΑΣΤΡΟ ΚΙΛΚΙΣ, ΠΟΝΤΟΗΡΑΚΛΕΙΑ ΚΙΛΚΙΣ, ΣΙΤΑΡΙΑ ΚΙΛΚΙΣ, ΧΕΡΣΟΤΟΠΙ ΚΙΛΚΙΣ, ΧΡΥΣΟΚΑΜΠΟΣ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '61300', Area: 'ΑΓΙΟΣ ΠΕΤΡΟΣ ΚΙΛΚΙΣ, ΓΕΡΑΚΩΝΑΣ ΚΙΛΚΙΣ, ΓΟΥΜΕΝΙΣΣΑ ΚΙΛΚΙΣ, ΓΡΙΒΑ ΚΙΛΚΙΣ, ΚΑΡΠΗ ΚΙΛΚΙΣ, ΚΑΣΤΑΝΕΡΗ ΚΙΛΚΙΣ, ΛΙΒΑΔΙΑ ΚΙΛΚΙΣ, ΟΜΑΛΟ ΚΙΛΚΙΣ, ΠΕΝΤΑΛΟΦΟΣ ΚΙΛΚΙΣ, ΦΙΛΥΡΙΑ ΚΙΛΚΙΣ', Prefecture: 'Κιλκίς' },
    { PostalCode: '50001', Area: 'ΑΗΔΟΝΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΑΛΙΑΚΜΩΝΑΣ ΚΟΖΑΝΗΣ, ΑΞΙΟΚΑΣΤΡΟ ΚΟΖΑΝΗΣ, ΑΣΠΡΟΥΛΑ ΚΟΖΑΝΗΣ, ΒΕΛΑΝΙΔΙΑ ΚΟΖΑΝΗΣ, ΚΑΛΛΙΣΤΡΑΤΙ ΚΟΖΑΝΗΣ, ΚΛΗΜΑ ΚΟΖΑΝΗΣ, ΚΡΥΟΝΕΡΙ ΚΟΖΑΝΗΣ, ΜΕΛΙΔΟΝΙ ΚΟΖΑΝΗΣ, ΜΕΣΟΛΟΓΓΟΣ ΚΟΖΑΝΗΣ, ΜΟΛΟΧΑ ΚΟΖΑΝΗΣ, ΝΕΑΠΟΛΗ ΚΟΖΑΝΗΣ, ΠΑΝΑΓΙΑ ΧΟΡΗΓΟΥ ΚΟΖΑΝΗΣ, ΠΑΝΑΡΕΤΗ ΚΟΖΑΝΗΣ, ΠΕΠΟΝΙΑ ΚΟΖΑΝΗΣ, ΠΕΡΙΣΤΕΡΑ ΚΟΖΑΝΗΣ, ΠΛΑΤΑΝΙΑ ΚΟΖΑΝΗΣ, ΠΟΛΥΛΑΚΚΟ ΚΟΖΑΝΗΣ, ΠΥΛΩΡΙ ΚΟΖΑΝΗΣ, ΣΗΜΑΝΤΡΟ ΚΟΖΑΝΗΣ, ΣΤΕΡΝΑ ΚΟΖΑΝΗΣ, ΤΡΑΠΕΖΙΤΣΑ ΚΟΖΑΝΗΣ, ΧΕΙΜΕΡΙΝΟ ΚΟΖΑΝΗΣ, ΧΟΡΗΓΟΣ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50002', Area: 'ΑΓΙΑ ΣΩΤΗΡΑ ΚΟΖΑΝΗΣ, ΑΓΙΑΣΜΑ ΚΟΖΑΝΗΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΚΟΖΑΝΗΣ, ΑΓΙΟΣ ΘΕΟΔΩΡΟΣ ΚΟΖΑΝΗΣ, ΑΝΘΟΥΣΑ ΚΟΖΑΝΗΣ, ΑΝΘΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΑΠΙΔΕΑ ΚΟΖΑΝΗΣ, ΑΧΛΑΔΙΑ ΚΟΖΑΝΗΣ, ΒΟΥΧΩΡΙΝΑ ΚΟΖΑΝΗΣ, ΒΡΟΝΤΗ ΚΟΖΑΝΗΣ, ΓΛΥΚΟΚΕΡΑΣΕΑ ΚΟΖΑΝΗΣ, ΔΑΜΑΣΚΗΝΙΑ ΚΟΖΑΝΗΣ, ΔΑΦΝΗ ΚΟΖΑΝΗΣ, ΔΙΧΕΙΜΑΡΡΟ ΚΟΖΑΝΗΣ, ΔΡΑΓΑΣΙΑ ΚΟΖΑΝΗΣ, ΖΩΝΗ ΚΟΖΑΝΗΣ, ΚΛΕΙΣΩΡΕΙΑ ΚΟΖΑΝΗΣ, ΚΟΙΛΑΔΑ ΑΓΙΑΣΜΑΤΟΣ ΚΟΖΑΝΗΣ, ΚΟΡΥΦΗ ΚΟΖΑΝΗΣ, ΚΡΙΜΗΝΙΟ ΚΟΖΑΝΗΣ, ΛΕΥΚΑΔΙ ΚΟΖΑΝΗΣ, ΛΕΥΚΗ ΚΟΖΑΝΗΣ, ΛΕΥΚΟΘΕΑ ΚΟΖΑΝΗΣ, ΛΙΚΝΑΔΕΣ ΚΟΖΑΝΗΣ, ΛΟΥΒΡΗ ΚΟΖΑΝΗΣ, ΛΟΥΚΟΜΙ ΚΟΖΑΝΗΣ, ΜΟΡΦΗ ΚΟΖΑΝΗΣ, ΟΜΑΛΗ ΚΟΖΑΝΗΣ, ΠΑΡΟΧΘΙΟ ΚΟΖΑΝΗΣ, ΠΛΑΚΙΔΑ ΚΟΖΑΝΗΣ, ΠΟΛΥΚΑΣΤΑΝΟ ΚΟΖΑΝΗΣ, ΡΟΔΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΡΟΚΑΣΤΡΟ ΚΟΖΑΝΗΣ, ΣΤΑΥΡΟΔΡΟΜΙ ΚΟΖΑΝΗΣ, ΤΡΙΑΔΑ ΚΟΖΑΝΗΣ, ΤΣΟΤΙΛΙ ΚΟΖΑΝΗΣ, ΦΥΤΩΚΙΟ ΚΟΖΑΝΗΣ, ΧΡΥΣΑΥΓΗ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50003', Area: 'ΔΡΥΟΒΟΥΝΟ ΚΟΖΑΝΗΣ, ΕΡΑΤΥΡΑ ΚΟΖΑΝΗΣ, ΝΑΜΑΤΑ ΚΟΖΑΝΗΣ, ΠΕΛΕΚΑΝΟΣ ΚΟΖΑΝΗΣ, ΣΙΣΑΝΙΟ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50004', Area: 'ΑΙΑΝΗ ΚΟΖΑΝΗΣ, ΚΕΡΑΣΕΑ ΚΟΖΑΝΗΣ, ΚΤΕΝΙ ΚΟΖΑΝΗΣ, ΧΡΩΜΙΟ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50005', Area: 'ΑΝΑΡΡΑΧΗ ΚΟΖΑΝΗΣ, ΒΑΡΙΚΟ ΚΟΖΑΝΗΣ, ΕΜΠΟΡΙΟ ΚΟΖΑΝΗΣ, ΚΡΥΟΒΡΥΣΗ ΚΟΖΑΝΗΣ, ΜΗΛΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΦΟΥΦΑΣ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50007', Area: 'ΒΥΘΟΣ ΚΟΖΑΝΗΣ, ΔΑΣΥΛΛΙΟ ΓΡΕΒΕΝΩΝ, ΔΙΛΟΦΟ ΚΟΖΑΝΗΣ, ΕΠΤΑΧΩΡΙ ΚΑΣΤΟΡΙΑΣ, ΠΕΝΤΑΛΟΦΟΣ ΚΟΖΑΝΗΣ, ΠΕΥΚΟΦΥΤΟ ΚΑΣΤΟΡΙΑΣ, ΧΡΥΣΗ ΚΑΣΤΟΡΙΑΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50010', Area: 'ΑΜΥΓΔΑΛΙΑ ΚΟΖΑΝΗΣ, ΑΝΑΤΟΛΗ ΚΟΖΑΝΗΣ, ΑΝΩ ΚΩΜΗ ΚΟΖΑΝΗΣ, ΚΑΙΣΑΡΕΙΑ ΚΟΖΑΝΗΣ, ΚΑΤΩ ΚΩΜΗ ΚΟΖΑΝΗΣ, ΚΗΠΟΣ ΚΟΖΑΝΗΣ, ΚΟΝΤΟΒΟΥΝΙ ΚΟΖΑΝΗΣ, ΚΡΟΚΟΣ ΚΟΖΑΝΗΣ, ΜΗΛΕΑ ΚΟΖΑΝΗΣ, ΠΥΡΓΟΣ ΚΟΖΑΝΗΣ, ΣΠΑΡΤΟ ΚΟΖΑΝΗΣ, ΣΤΑΥΡΩΤΗ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50100', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΚΟΖΑΝΗΣ ΚΟΖΑΝΗΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΟΖΑΝΗΣ, ΑΓΙΟ ΠΝΕΥΜΑ ΚΟΖΑΝΗΣ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΠΟΛΥΜΥΛΟΥ ΚΟΖΑΝΗΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΟΖΑΝΗΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΚΟΖΑΝΗΣ, ΑΕΡΟΔΡΟΜΙΟ ΚΟΖΑΝΗΣ, ΑΚΡΙΝΗ ΚΟΖΑΝΗΣ, ΑΚΡΙΤΑΣ ΚΟΖΑΝΗΣ, ΑΛΩΝΑΚΙΑ ΚΟΖΑΝΗΣ, ΑΝΑΤΟΛΙΚΟ ΚΑΠΝΟΧΩΡΙΟΥ ΚΟΖΑΝΗΣ, ΑΝΘΟΤΟΠΟΣ ΚΟΖΑΝΗΣ, ΑΡΓΙΛΟΣ ΚΟΖΑΝΗΣ, ΑΥΓΗ ΚΟΖΑΝΗΣ, ΑΥΡΑ ΚΟΖΑΝΗΣ, ΒΑΘΥΛΑΚΚΟΣ ΚΟΖΑΝΗΣ, ΒΑΤΕΡΟ ΚΟΖΑΝΗΣ, ΒΟΣΚΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΓΑΛΑΝΙΟ ΚΟΖΑΝΗΣ, ΓΗΡΟΚΟΜΕΙΟ ΚΟΖΑΝΗΣ, ΔΡΕΠΑΝΟ ΚΟΖΑΝΗΣ, ΕΞΟΧΗ ΚΟΖΑΝΗΣ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΚΟΖΑΝΗΣ, ΘΥΜΑΡΙΑ ΚΟΖΑΝΗΣ, ΙΕΡΑ ΜΟΝΗ ΑΝΑΛΗΨΕΩΣ ΚΟΖΑΝΗΣ, ΙΜΕΡΑ ΚΟΖΑΝΗΣ, ΚΑΛΑΜΙΑ ΚΟΖΑΝΗΣ, ΚΑΠΝΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΚΑΡΥΔΙΤΣΑ ΚΟΖΑΝΗΣ, ΚΗΠΑΡΙΟ ΚΟΖΑΝΗΣ, ΚΟΖΑΝΗ ΚΟΖΑΝΗΣ, ΚΟΙΛΑ ΚΟΖΑΝΗΣ, ΚΟΙΛΑΔΑ ΚΟΖΑΝΗΣ ΚΟΖΑΝΗΣ, ΚΟΚΚΙΝΑΡΑΣ ΚΟΖΑΝΗΣ, ΚΟΥΒΟΥΚΛΙΑ ΚΟΖΑΝΗΣ, ΚΡΕΜΑΣΤΗ ΚΟΖΑΝΗΣ, ΛΕΒΕΝΤΗΣ ΚΟΖΑΝΗΣ, ΛΕΥΚΑΡΑ ΚΟΖΑΝΗΣ, ΛΕΥΚΟΒΡΥΣΗ ΚΟΖΑΝΗΣ, ΛΕΥΚΟΠΗΓΗ ΚΟΖΑΝΗΣ, ΛΙΒΕΡΑ ΚΟΖΑΝΗΣ, ΛΥΓΕΡΗ ΚΟΖΑΝΗΣ, ΜΕΛΙΣΣΙΑ ΚΟΖΑΝΗΣ, ΜΕΣΙΑΝΗ ΚΟΖΑΝΗΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΚΟΖΑΝΗΣ, ΝΕΑ ΝΙΚΟΠΟΛΗ ΚΟΖΑΝΗΣ, ΝΕΑ ΧΑΡΑΥΓΗ ΚΟΖΑΝΗΣ, ΝΕΡΑΙΔΑ ΚΟΖΑΝΗΣ, ΞΗΡΟΛΙΜΝΗ ΚΟΖΑΝΗΣ, ΟΙΝΟΗ ΚΟΖΑΝΗΣ, ΠΕΤΡΑΝΑ ΚΟΖΑΝΗΣ, ΠΟΛΥΜΥΛΟΣ ΚΟΖΑΝΗΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΚΟΖΑΝΗΣ, ΠΡΩΤΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΠΤΕΛΕΑ ΕΟΡΔΑΙΑΣ ΚΟΖΑΝΗΣ, ΠΤΕΛΕΑ ΚΟΖΑΝΗΣ ΚΟΖΑΝΗΣ, ΡΟΔΙΑΝΗ ΚΟΖΑΝΗΣ, ΡΟΔΙΤΗΣ ΚΟΖΑΝΗΣ, ΡΥΑΚΙ ΚΟΖΑΝΗΣ, ΣΙΔΕΡΑΣ ΚΟΖΑΝΗΣ, ΣΚΑΦΗ ΚΟΖΑΝΗΣ, ΣΚΗΤΗ ΚΟΖΑΝΗΣ, ΣΠΙΝΑΡΗΣ (ΚΛΙΝΙΚΗ) ΚΟΖΑΝΗΣ, ΣΧΟΛΕΣ ΟΑΕΔ ΚΟΖΑΝΗΣ, ΤΕΤΡΑΛΟΦΟΣ ΚΟΖΑΝΗΣ, ΤΣΕΛΙΚΑΣ ΚΟΖΑΝΗΣ, ΦΥΛΑΚΙΟ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50200', Area: 'ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΚΟΖΑΝΗΣ, ΑΝΑΡΓΥΡΟΙ ΦΛΩΡΙΝΑΣ, ΑΝΑΤΟΛΙΚΟ ΕΟΡΔΑΙΑΣ ΚΟΖΑΝΗΣ, ΑΡΔΑΣΣΑ ΚΟΖΑΝΗΣ, ΑΣΒΕΣΤΟΠΕΤΡΑ ΚΟΖΑΝΗΣ, ΓΑΛΑΤΕΙΑ ΚΟΖΑΝΗΣ, ΓΕΝΙΚΟ ΝΟΣΟΚΟΜΕΙΟ ΜΠΟΔΟΣΑΚΕΙΟ ΚΟΖΑΝΗΣ, ΔΡΟΣΕΡΟ ΚΟΖΑΝΗΣ, ΕΡΜΑΚΙΑ ΚΟΖΑΝΗΣ, ΚΑΡΔΙΑ ΚΟΖΑΝΗΣ, ΚΑΡΥΟΧΩΡΙ ΚΟΖΑΝΗΣ, ΚΛΕΙΤΟΣ ΚΟΖΑΝΗΣ, ΚΟΜΑΝΟΣ ΚΟΖΑΝΗΣ, ΜΑΥΡΟΔΕΝΔΡΙ ΚΟΖΑΝΗΣ, ΜΑΥΡΟΠΗΓΗ ΚΟΖΑΝΗΣ, ΞΕΝΟΔΟΧΕΙΟ ΠΑΝΤΕΛΙΔΗΣ ΚΟΖΑΝΗΣ, ΞΕΝΟΔΟΧΕΙΟ ΠΤΟΛΕΜΑΙΟΣ ΚΟΖΑΝΗΣ, ΟΛΥΜΠΙΑΔΑ ΚΟΖΑΝΗΣ, ΠΑΛΑΙΑ ΑΜΠΕΛΙΑ ΚΟΖΑΝΗΣ, ΠΕΝΤΑΒΡΥΣΟΣ ΚΟΖΑΝΗΣ, ΠΕΡΔΙΚΚΑΣ ΚΟΖΑΝΗΣ, ΠΟΝΤΟΚΩΜΗ ΚΟΖΑΝΗΣ, ΠΡΟΑΣΤΙΟ ΚΟΖΑΝΗΣ, ΠΤΟΛΕΜΑΙΔΑ ΚΟΖΑΝΗΣ, ΣΠΗΛΙΑ ΚΟΖΑΝΗΣ, ΧΑΡΑΥΓΗ  ΚΟΖΑΝΗΣ, ΧΑΡΑΥΓΗ ΚΟΙΛΩΝ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50300', Area: 'ΓΑΛΑΤΙΝΗ ΚΟΖΑΝΗΣ, ΔΑΦΝΕΡΟ ΚΟΖΑΝΗΣ, ΚΑΛΟΝΕΡΙ ΚΟΖΑΝΗΣ, ΜΙΚΡΟΚΑΣΤΡΟ ΚΟΖΑΝΗΣ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΜΙΚΡΟΚΑΣΤΡΟΥ ΚΟΖΑΝΗΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΚΟΖΑΝΗΣ, ΣΙΑΤΙΣΤΑ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50400', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΒΕΛΒΕΝΤΟΥ ΚΟΖΑΝΗΣ, ΒΕΛΒΕΝΤΟΣ ΚΟΖΑΝΗΣ, ΚΑΤΑΦΥΓΙΟ ΚΟΖΑΝΗΣ, ΠΑΛΑΙΟΓΡΑΤΣΑΝΟ ΚΟΖΑΝΗΣ, ΠΟΛΥΦΥΤΟ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '50500', Area: 'ΑΥΛΕΣ ΚΟΖΑΝΗΣ, ΓΟΥΛΕΣ ΚΟΖΑΝΗΣ, ΕΛΑΤΗ ΚΟΖΑΝΗΣ, ΚΑΣΤΑΝΙΑ ΚΟΖΑΝΗΣ, ΚΡΑΝΙΔΙΑ ΚΟΖΑΝΗΣ, ΛΑΒΑ ΚΟΖΑΝΗΣ, ΛΑΖΑΡΑΔΕΣ ΚΟΖΑΝΗΣ, ΛΙΒΑΔΕΡΟ ΚΟΖΑΝΗΣ, ΜΕΤΑΞΑΣ ΚΟΖΑΝΗΣ, ΜΙΚΡΟΒΑΛΤΟ ΚΟΖΑΝΗΣ, ΜΟΝΗ ΣΤΑΝΟΥ ΚΟΖΑΝΗΣ, ΝΕΑ ΛΑΒΑ ΚΟΖΑΝΗΣ, ΠΛΑΤΑΝΟΡΡΕΥΜΑ ΚΟΖΑΝΗΣ, ΠΟΛΥΡΡΑΧΟ ΚΟΖΑΝΗΣ, ΠΡΟΣΗΛΙΟ ΚΟΖΑΝΗΣ, ΡΥΜΝΙΟ ΚΟΖΑΝΗΣ, ΣΕΡΒΙΑ ΚΟΖΑΝΗΣ, ΤΡΑΝΟΒΑΛΤΟ ΚΟΖΑΝΗΣ, ΤΡΙΓΩΝΙΚΟ ΚΟΖΑΝΗΣ, ΦΡΟΥΡΙΟ ΚΟΖΑΝΗΣ', Prefecture: 'Κοζάνης' },
    { PostalCode: '20001', Area: 'ΖΕΥΓΟΛΑΤΕΙΟ ΚΟΡΙΝΘΟΥ, ΚΑΛΕΝΤΖΙ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20002', Area: 'ΒΕΛΟ ΚΟΡΙΝΘΟΥ, ΕΛΛΗΝΟΧΩΡΙ ΚΟΡΙΝΘΟΥ, ΚΟΚΚΩΝΙ ΚΟΡΙΝΘΟΥ, ΚΡΗΝΕΣ ΚΟΡΙΝΘΟΥ, ΝΕΡΑΝΤΖΑ ΚΟΡΙΝΘΟΥ, ΣΑΤΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΣΤΙΜΑΓΚΑ ΚΟΡΙΝΘΟΥ, ΤΑΡΣΙΝΑ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20003', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΚΟΡΙΝΘΟΥ, ΑΡΤΕΜΙΔΟΣ ΚΟΡΙΝΘΟΥ, ΓΑΛΗΝΗ ΚΟΡΙΝΘΟΥ, ΓΕΡΑΝΕΙΑ ΚΟΡΙΝΘΟΥ, ΚΑΛΥΒΙΤΣΕΣ ΚΟΡΙΝΘΟΥ, ΚΑΜΙΝΑΚΙ ΚΟΡΙΝΘΟΥ, ΚΑΤΣΙΒΙΡΙ ΚΟΡΙΝΘΟΥ, ΚΟΚΚΙΝΗ ΣΠΗΛΙΑ ΚΟΡΙΝΘΟΥ, ΛΙΟΝΤΑΡΙ ΚΟΡΙΝΘΟΥ, ΜΠΕΚΑ ΚΙΑΦΑ ΚΟΡΙΝΘΟΥ, ΜΠΕΣΚΑΚΗ ΚΟΡΙΝΘΟΥ, ΝΕΑ ΠΟΛΙΤΕΙΑ ΚΟΡΙΝΘΟΥ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΚΟΡΙΝΘΟΥ, ΣΕΣΙ ΚΟΡΙΝΘΟΥ, ΣΚΥΡΩΝΙΔΑ ΚΟΡΙΝΘΟΥ, ΣΟΥΣΑΚΙ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20004', Area: 'ΑΓΓΕΛΟΚΑΣΤΡΟ ΚΟΡΙΝΘΟΥ, ΑΓΙΟΣ ΒΛΑΣΣΗΣ ΚΟΡΙΝΘΟΥ, ΑΓΙΟΣ ΠΕΤΡΟΣ ΚΟΡΙΝΘΟΥ, ΚΑΒΟΣ ΣΟΛΥΓΕΙΑΣ ΚΟΡΙΝΘΟΥ, ΚΙΟΥΡΚΑΤΙ ΚΟΡΙΝΘΟΥ, ΚΟΡΦΟΣ ΚΟΡΙΝΘΟΥ, ΜΟΝΗ ΑΓΙΑΣ ΜΑΡΙΝΑΣ ΚΟΡΙΝΘΟΥ, ΠΕΥΚΑΛΙ ΚΟΡΙΝΘΟΥ, ΡΥΤΟ ΚΟΡΙΝΘΟΥ, ΣΟΦΙΚΟ ΚΟΡΙΝΘΟΥ, ΦΡΑΓΚΟΛΙΜΑΝΟ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20006', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΚΟΡΙΝΘΟΥ, ΑΣΣΟΣ ΚΟΡΙΝΘΟΥ, ΒΕΛΗΝΙΑΤΙΚΑ ΚΟΡΙΝΘΟΥ, ΒΟΧΑΙΚΟ ΚΟΡΙΝΘΟΥ, ΒΡΑΧΑΤΙ ΚΟΡΙΝΘΟΥ, ΕΥΑΓΓΕΛΙΣΤΡΙΑ ΚΟΡΙΝΘΟΥ, ΚΑΤΩ ΑΣΣΟΣ ΚΟΡΙΝΘΟΥ, ΜΠΟΛΑΤΙ ΚΟΡΙΝΘΟΥ, ΠΟΥΛΛΙΤΣΑ ΚΟΡΙΝΘΟΥ, ΣΟΥΛΗΝΑΡΙ ΚΟΡΙΝΘΟΥ, ΧΑΛΚΕΙΟ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20008', Area: 'ΑΓΙΟΝΟΡΙ ΚΟΡΙΝΘΟΥ, ΚΛΕΝΙΑ ΚΟΡΙΝΘΟΥ, ΚΟΥΤΑΛΑΣ ΚΟΡΙΝΘΟΥ, ΜΑΨΟΣ ΚΟΡΙΝΘΟΥ, ΣΠΑΘΟΒΟΥΝΙ ΚΟΡΙΝΘΟΥ, ΣΤΕΦΑΝΙ ΚΟΡΙΝΘΟΥ, ΧΙΛΙΟΜΟΔΙ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20009', Area: 'ΑΝΩ ΑΙΓΙΑΛΟΣ ΚΟΡΙΝΘΟΥ, ΔΕΡΒΕΝΙ ΚΟΡΙΝΘΟΥ, ΕΒΡΟΣΤΙΝΑ ΚΟΡΙΝΘΟΥ, ΚΟΥΜΑΡΙΑΣ ΚΟΡΙΝΘΟΥ, ΛΥΓΙΑ ΚΟΡΙΝΘΟΥ, ΜΑΥΡΑ ΛΙΘΑΡΙΑ ΚΟΡΙΝΘΟΥ, ΜΕΝΤΟΥΡΓΙΑΝΙΚΑ ΚΟΡΙΝΘΟΥ, ΠΕΤΑΛΟΥ ΚΟΡΙΝΘΟΥ, ΠΥΡΓΟΣ ΚΟΡΙΝΘΟΥ, ΡΟΖΕΝΑ ΚΟΡΙΝΘΟΥ, ΣΤΟΜΙΟ ΚΟΡΙΝΘΟΥ, ΧΕΛΥΔΟΡΕΟ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20011', Area: 'ΛΕΧΑΙΟ ΚΟΡΙΝΘΟΥ, ΠΕΡΙΓΙΑΛΙ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20014', Area: 'ΑΜΥΓΔΑΛΕΑ ΚΟΡΙΝΘΟΥ, ΑΝΩ ΤΑΡΣΟΣ ΚΟΡΙΝΘΟΥ, ΑΡΧΑΙΑ ΦΕΝΕΟΣ ΚΟΡΙΝΘΟΥ, ΑΧΛΑΔΙΕΣ ΚΟΡΙΝΘΟΥ, ΒΙΛΙΑ ΚΟΡΙΝΘΟΥ, ΓΚΟΥΡΑ ΚΟΡΙΝΘΟΥ, ΙΕΡΑ ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΦΕΝΕΟΥ ΚΟΡΙΝΘΟΥ, ΚΑΤΩ ΤΑΡΣΟΣ ΚΟΡΙΝΘΟΥ, ΛΟΥΖΙΟ ΚΟΡΙΝΘΟΥ, ΜΑΤΙ ΚΟΡΙΝΘΟΥ, ΜΕΣΙΝΟ ΚΟΡΙΝΘΟΥ, ΜΟΣΙΑ ΚΟΡΙΝΘΟΥ, ΠΑΝΟΡΑΜΑ ΚΟΡΙΝΘΟΥ, ΣΑΡΑΝΤΑΠΗΧΟ ΚΟΡΙΝΘΟΥ, ΣΤΕΝΟ ΚΟΡΙΝΘΟΥ, ΦΕΝΕΟΣ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20016', Area: 'ΔΡΟΣΟΠΗΓΗ ΚΟΡΙΝΘΟΥ, ΚΑΛΙΑΝΟΙ ΚΟΡΙΝΘΟΥ, ΚΑΡΤΕΡΙ ΚΟΡΙΝΘΟΥ, ΚΑΣΤΑΝΕΑ ΚΟΡΙΝΘΟΥ, ΚΕΦΑΛΑΡΙ ΚΟΡΙΝΘΟΥ, ΚΙΟΝΙΑ ΚΟΡΙΝΘΟΥ, ΚΥΛΛΗΝΗ ΚΟΡΙΝΘΟΥ, ΛΑΥΚΑ ΚΟΡΙΝΘΟΥ, ΜΙΚΡΟΣ ΜΑΧΑΛΑΣ ΚΟΡΙΝΘΟΥ, ΣΤΥΜΦΑΛΙΑ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20100', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΞΥΛΟΚΕΡΙΖΗΣ ΚΟΡΙΝΘΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΞΥΛΟΚΕΡΙΖΑΣ ΚΟΡΙΝΘΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΚΟΡΙΝΘΟΥ, ΑΓΙΟΣ ΚΟΣΜΑΣ ΕΞΑΜΙΛΙΩΝ ΚΟΡΙΝΘΟΥ, ΑΛΑΜΑΝΝΟΣ ΚΟΡΙΝΘΟΥ, ΑΝΩ ΑΛΜΥΡΗ ΚΟΡΙΝΘΟΥ, ΑΡΑΚΟΥΚΙΑ ΚΟΡΙΝΘΟΥ, ΑΡΧΑΙΟ ΛΙΜΑΝΙ ΚΟΡΙΝΘΟΥ, ΒΑΛΤΟΣ ΓΛΥΦΑΔΑΣ ΚΟΡΙΝΘΟΥ, ΒΛΑΣΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΓΑΛΑΤΑΚΙ ΚΟΡΙΝΘΟΥ, ΓΕΦΥΡΑ ΙΣΘΜΟΥ ΚΟΡΙΝΘΟΥ, ΔΑΦΝΗ ΕΞΑΜΙΛΙΩΝ ΚΟΡΙΝΘΟΥ, ΕΞΑΜΙΛΙΑ ΚΟΡΙΝΘΟΥ, ΘΥΜΑΡΙΩΝΑ ΚΟΡΙΝΘΟΥ, ΙΕΡΑ ΜΟΝΗ  ΑΓΙΑΣ ΤΡΙΑΔΑΣ ΚΟΡΙΝΘΟΥ, ΚΑΒΟΣ ΚΟΡΙΝΘΟΥ, ΚΑΤΑΚΑΛΙ ΚΟΡΙΝΘΟΥ, ΚΑΤΩ ΑΛΜΥΡΗ ΚΟΡΙΝΘΟΥ, ΚΑΤΩ ΕΞΑΜΙΛΙΑ ΚΟΡΙΝΘΟΥ, ΚΕΧΡΙΕΣ ΚΟΡΙΝΘΟΥ, ΚΟΡΙΝΘΟΣ ΚΟΡΙΝΘΟΥ, ΚΥΡΑ ΒΡΥΣΗ ΚΟΡΙΝΘΟΥ, ΛΟΥΤΡΟ ΕΛΕΝΗΣ ΚΟΡΙΝΘΟΥ, ΜΠΕΚΙΑΝΙΚΑ ΚΟΡΙΝΘΟΥ, ΜΥΡΤΕΖΑ ΚΟΡΙΝΘΟΥ, ΝΕΑ ΑΛΜΥΡΗ ΚΟΡΙΝΘΟΥ, ΝΤΡΑΣΣΑ ΚΟΡΙΝΘΟΥ, ΞΥΛΟΚΕΡΙΖΑ ΚΟΡΙΝΘΟΥ, ΠΑΛΑΙΟ ΚΑΛΑΜΑΚΙ ΚΟΡΙΝΘΟΥ, ΠΑΡΑΔΕΙΣΟΣ ΚΟΡΙΝΘΟΥ, ΣΙΔΕΡΩΝΑ ΚΟΡΙΝΘΟΥ, ΣΟΛΟΜΟΣ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20200', Area: 'ΑΝΑΤΟΛΙΚΗ ΤΡΑΓΑΝΑ ΚΟΡΙΝΘΟΥ, ΒΑΛΤΣΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΔΙΜΗΝΙΟ ΚΟΡΙΝΘΟΥ, ΔΟΥΡΒΑΤΙΩΝΑ ΚΟΡΙΝΘΟΥ, ΘΑΛΕΡΟ ΚΟΡΙΝΘΟΥ, ΚΑΤΩ ΔΙΜΗΝΙΟ ΚΟΡΙΝΘΟΥ, ΚΙΑΤΟ ΚΟΡΙΝΘΟΥ, ΚΟΚΚΙΝΙΑ ΚΟΡΙΝΘΟΥ, ΛΑΛΙΩΤΗΣ ΚΟΡΙΝΘΟΥ, ΜΕΛΙΣΣΙ ΚΟΡΙΝΘΟΥ, ΜΟΥΛΚΙΟ ΚΟΡΙΝΘΟΥ, ΟΙΚΟΔΟΜΙΚΟΣ ΣΥΝΕΤ.ΥΠΑΛΛΗΛΩΝ ΔΕΗ ΚΟΡΙΝΘΟΥ, ΠΑΡΑΛΙΑ ΔΙΜΗΝΙΟΥ ΚΟΡΙΝΘΟΥ, ΠΑΣΙΟ ΚΟΡΙΝΘΟΥ, ΣΙΚΥΩΝ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20300', Area: 'ΑΓΙΑ ΣΩΤΗΡΑ ΚΟΡΙΝΘΟΥ, ΑΛΚΥΟΝΑ ΚΟΡΙΝΘΟΥ, ΑΛΚΥΟΝΙΔΕΣ ΝΗΣΟΙ ΚΟΡΙΝΘΟΥ, ΑΣΠΡΟΚΑΜΠΟΣ ΛΟΥΤΡΑΚΙΟΥ ΚΟΡΙΝΘΟΥ, ΒΑΜΒΑΚΕΣ ΚΟΡΙΝΘΟΥ, ΕΙΡΗΝΗ ΚΟΡΙΝΘΟΥ, ΚΑΛΛΙΘΕΑ ΛΟΥΤΡΑΚΙΟΥ ΚΟΡΙΝΘΟΥ, ΛΙΜΝΗ ΒΟΥΛΙΑΓΜΕΝΗΣ ΚΟΡΙΝΘΟΥ, ΛΟΥΤΡΑΚΙ ΚΟΡΙΝΘΟΥ, ΜΑΥΡΟΛΙΜΝΗ ΚΟΡΙΝΘΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΙΩΑΝΝΗ ΚΟΡΙΝΘΟΥ, ΜΟΝΗ ΟΣΙΟΥ ΠΑΤΑΠΙΟΥ ΚΟΡΙΝΘΟΥ, ΠΕΡΑΧΩΡΑ ΚΟΡΙΝΘΟΥ, ΠΙΣΙΑ ΚΟΡΙΝΘΟΥ, ΣΚΑΛΩΜΑ ΚΟΡΙΝΘΟΥ, ΣΧΙΝΟΣ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20400', Area: 'ΑΜΦΙΘΕΑ ΚΟΡΙΝΘΟΥ, ΑΝΩ ΤΡΙΚΑΛΑ ΚΟΡΙΝΘΟΥ, ΒΑΛΤΟΣ ΡΙΖΗΣ ΚΟΡΙΝΘΟΥ, ΓΕΛΙΝΙΑΤΙΚΑ ΚΟΡΙΝΘΟΥ, ΓΕΩΡΓΑΝΤΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΔΕΝΔΡΟ ΚΟΡΙΝΘΟΥ, ΖΕΜΕΝΟ ΚΟΡΙΝΘΟΥ, ΖΗΡΕΙΑ ΚΟΡΙΝΘΟΥ, ΗΛΙΟΣ ΚΟΡΙΝΘΟΥ, ΚΑΡΙΩΤΙΚΑ ΚΑΡΥΑΣ ΚΟΡΙΝΘΟΥ, ΚΑΡΥΑ ΚΟΡΙΝΘΟΥ, ΚΑΤΩ ΣΥΝΟΙΚΙΑ ΤΡΙΚΑΛΩΝ ΚΟΡΙΝΘΟΥ, ΛΑΓΚΑΔΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΜΕΡΤΙΚΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΜΕΣΗ ΣΥΝΟΙΚΙΑ ΤΡΙΚΑΛΩΝ ΚΟΡΙΝΘΟΥ, ΞΑΝΘΟΧΩΡΙ ΚΟΡΙΝΘΟΥ, ΞΥΛΟΚΑΣΤΡΟ ΚΟΡΙΝΘΟΥ, ΠΕΛΛΗΝΗ ΚΟΡΙΝΘΟΥ, ΡΕΘΙΟ ΚΟΡΙΝΘΟΥ, ΡΙΖΑ ΚΟΡΙΝΘΟΥ, ΣΙΓΕΡΙΤΣΑ ΚΟΡΙΝΘΟΥ, ΣΟΦΙΑΝΑ ΚΟΡΙΝΘΟΥ, ΣΠΑΡΤΙΝΑΙΙΚΑ ΚΟΡΙΝΘΟΥ, ΣΥΚΕΑ ΚΟΡΙΝΘΟΥ, ΧΑΡΤΣΙΑΝΙΚΑ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '20500', Area: 'ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΚΟΡΙΝΘΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΑΡΓΟΥΣ ΑΡΓΟΛΙΔΑΣ, ΑΗΔΟΝΙΑ ΚΟΡΙΝΘΟΥ, ΑΛΕΑ ΑΡΓΟΛΙΔΑΣ, ΑΡΧΑΙΑ ΝΕΜΕΑ ΚΟΡΙΝΘΟΥ, ΑΡΧΑΙΕΣ ΚΛΕΩΝΕΣ ΚΟΡΙΝΘΟΥ, ΑΣΠΡΟΚΑΜΠΟΣ ΝΕΜΕΑΣ ΚΟΡΙΝΘΟΥ, ΓΑΛΑΤΑΣ ΚΟΡΙΝΘΟΥ, ΓΥΜΝΟ ΑΡΓΟΛΙΔΑΣ, ΔΑΦΝΗ ΝΕΜΕΑΣ ΚΟΡΙΝΘΟΥ, ΔΕΡΒΕΝΑΚΙΑ ΚΟΡΙΝΘΟΥ, ΕΞΟΧΗ ΑΡΓΟΛΙΔΑΣ, ΚΑΣΤΡΑΚΙ ΚΟΡΙΝΘΟΥ, ΚΟΥΤΣΙΟ ΚΟΡΙΝΘΟΥ, ΚΟΥΤΣΟΜΟΔΙ ΚΟΡΙΝΘΟΥ, ΛΕΟΝΤΙΟ ΚΟΡΙΝΘΟΥ, ΜΠΟΖΙΚΑΣ ΚΟΡΙΝΘΟΥ, ΝΕΜΕΑ ΚΟΡΙΝΘΟΥ, ΠΕΤΡΙΟ ΚΟΡΙΝΘΟΥ, ΠΛΑΤΑΝΙ ΑΡΓΟΛΙΔΑΣ, ΣΚΟΤΕΙΝΗ ΑΡΓΟΛΙΔΑΣ, ΤΙΤΑΝΗ ΚΟΡΙΝΘΟΥ, ΦΡΟΥΣΙΟΥΝΑ ΑΡΓΟΛΙΔΑΣ, ΨΑΡΙΟ ΚΟΡΙΝΘΟΥ', Prefecture: 'Κορινθίας' },
    { PostalCode: '84001', Area: 'ΑΓΙΑ ΘΕΟΔΟΤΗ ΙΟΥ ΚΥΚΛΑΔΩΝ, ΕΠΑΝΩ ΚΑΜΠΟΣ ΙΟΥ ΚΥΚΛΑΔΩΝ, ΙΟΣ ΚΥΚΛΑΔΩΝ, ΚΟΥΜΠΑΡΑ ΚΥΚΛΑΔΩΝ, ΜΑΓΓΑΝΑΡΙ   ΙΟΥ ΚΥΚΛΑΔΩΝ, ΜΠΟΥΡΗΣ  ΚΥΚΛΑΔΩΝ, ΜΥΛΟΠΟΤΑΣ  ΙΟΥ ΚΥΚΛΑΔΩΝ, ΠΕΤΑΛΙΔΙ ΚΥΚΛΑΔΩΝ, ΨΑΘΗ  ΙΟΥ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84002', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΑ ΜΑΥΡΑ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΘΕΟΔΩΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΙΟΥΛΙΔΟΣ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΣΥΜΕΩΝ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΑΣΤΡΑΣ ΚΥΚΛΑΔΩΝ, ΒΟΥΡΚΑΡΙ ΚΥΚΛΑΔΩΝ, ΕΛΛΗΝΙΚΑ  ΚΥΚΛΑΔΩΝ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΙΟΥΛΙΔΑ ΚΥΚΛΑΔΩΝ, ΚΑΛΑΜΟΣ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΚΑΜΠΙ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΚΑΣΤΑΝΙΕΣ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΚΑΣΤΡΙΑΝΗ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΜΕΡΙΑ ΚΥΚΛΑΔΩΝ, ΚΟΚΚΙΝΑΔΑ ΚΥΚΛΑΔΩΝ, ΚΟΡΗΣΣΙΑ ΚΥΚΛΑΔΩΝ, ΚΟΥΚΟΥΒΑΓΙΑ ΚΥΚΛΑΔΩΝ, ΚΟΥΝΔΟΥΡΟΣ ΚΥΚΛΑΔΩΝ, ΛΙΓΙΑ ΚΥΚΛΑΔΩΝ, ΜΑΚΡΟΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΜΑΡΑΔΕΣ ΚΥΚΛΑΔΩΝ, ΜΑΥΡΑΜΠΕΛΙ ΚΥΚΛΑΔΩΝ, ΜΑΥΡΟ ΚΥΚΛΑΔΩΝ, ΜΕΛΙΣΣΑΚΙ ΚΥΚΛΑΔΩΝ, ΜΥΛΟΙ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΜΥΛΟΠΟΤΑΜΟΣ ΚΕΑΣ ΚΥΚΛΑΔΩΝ, ΟΡΚΟΣ ΚΥΚΛΑΔΩΝ, ΟΤΖΙΑΣ ΚΥΚΛΑΔΩΝ, ΠΕΡΑ ΜΕΡΙΑ ΚΥΚΛΑΔΩΝ, ΠΗΣΣΕΣ ΚΥΚΛΑΔΩΝ, ΠΛΑΓΙΑ ΚΥΚΛΑΔΩΝ, ΣΠΑΘΙ ΚΥΚΛΑΔΩΝ, ΣΤΑΥΡΟΥΔΑΚΙ ΚΥΚΛΑΔΩΝ, ΦΩΤΗΜΑΡΙ ΚΥΚΛΑΔΩΝ, ΧΑΒΟΥΝΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84003', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΣΙΦΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΠΟΛΛΩΝΙΑ ΣΙΦΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΡΤΕΜΩΝ ΚΥΚΛΑΔΩΝ, ΒΑΘΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΑΡΕΣ ΣΙΦΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΣΤΡΟ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΠΕΤΑΛΙ ΚΥΚΛΑΔΩΝ, ΚΙΤΡΙΑΝΗ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΠΛΑΤΥΣ ΓΙΑΛΟΣ ΣΙΦΝΟΥ ΚΥΚΛΑΔΩΝ, ΤΡΟΥΛΑΚΙ ΚΥΚΛΑΔΩΝ, ΦΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΧΕΡΡΟΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΧΡΥΣΟΠΗΓΗ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84004', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΕΥΣΤΑΘΙΟΣ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΑΛΥΚΗ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΓΟΥΠΑ-ΚΑΡΑ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΑΜΙΤΣΙ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΚΙΜΩΛΟΣ ΚΥΚΛΑΔΩΝ, ΠΟΛΥΑΙΓΟΣ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΠΡΑΣΣΑ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ, ΨΑΘΗ ΚΙΜΩΛΟΥ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84005', Area: 'ΑΒΥΣΣΑΛΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΣΕΡΙΦΟΥ ΚΥΚΛΑΔΩΝ, ΒΟΥΣ ΚΥΚΛΑΔΩΝ, ΓΑΛΑΝΗ ΚΥΚΛΑΔΩΝ, ΓΑΝΕΜΑ ΚΥΚΛΑΔΩΝ, ΓΛΑΡΟΝΗΣΙ ΣΕΡΙΦΟΥ ΚΥΚΛΑΔΩΝ, ΚΕΝΤΑΡΧΟΣ ΚΥΚΛΑΔΩΝ, ΚΟΥΤΑΛΑΣ ΚΥΚΛΑΔΩΝ, ΛΙΒΑΔΙ ΣΕΡΙΦΟΥ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΛΟ ΛΙΒΑΔΙ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΛΟ ΧΩΡΙΟ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΕΥΑΓΓΕΛΙΣΤΡΙΑΣ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΤΑΞΙΑΡΧΩΝ ΚΥΚΛΑΔΩΝ, ΠΑΝΑΓΙΑ ΣΕΡΙΦΟΥ ΚΥΚΛΑΔΩΝ, ΠΛΑΤΥΣ ΓΙΑΛΟΣ ΣΕΡΙΦΟΥ ΚΥΚΛΑΔΩΝ, ΡΑΜΟΣ ΚΥΚΛΑΔΩΝ, ΣΕΡΙΦΟΠΟΥΛΑ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΣΕΡΙΦΟΣ ΚΥΚΛΑΔΩΝ, ΣΥΚΑΜΙΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84006', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΟΣΑ ΚΥΚΛΑΔΩΝ, ΑΠΟΚΡΙΣΗ ΚΥΚΛΑΔΩΝ, ΓΑΝΤΡΟΜΑΝΤΡΑ ΚΥΚΛΑΔΩΝ, ΔΡΥΟΠΙΔΑ ΚΥΚΛΑΔΩΝ, ΕΠΙΣΚΟΠΗ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΟ ΛΙΒΑΔΙ ΚΥΚΛΑΔΩΝ, ΚΑΝΑΛΑ ΚΥΚΛΑΔΩΝ, ΚΥΘΝΟΣ ΚΥΚΛΑΔΩΝ, ΛΕΥΚΕΣ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΛΙΟΤΡΙΒΙ ΚΥΚΛΑΔΩΝ, ΛΟΥΤΡΑ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΜΕΡΙΧΑΣ ΚΥΚΛΑΔΩΝ, ΠΙΠΕΡΙ ΚΥΚΛΑΔΩΝ, ΣΚΥΛΟΣ ΚΥΘΝΟΥ ΚΥΚΛΑΔΩΝ, ΦΛΑΜΠΟΥΡΙΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84007', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΝΤΙΠΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΠΑΝΤΗΜΑ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΓΛΥΦΑ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΔΕΣΠΟΤΙΚΟ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΒΟΥΡΑΣ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΠΟΣ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΡΕΥΜΑΤΟΝΗΣΙ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΣΤΡΟΓΓΥΛΗ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΣΩΡΟΣ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΤΣΙΜΗΝΤΗΡΙ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΦΕΙΡΑ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΦΡΑΓΚΟΠΑΠΑΔΕΣ ΑΝΤΙΠΑΡΟΥ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84008', Area: 'ΑΓΙΟΣ ΠΑΥΛΟΣ ΑΙΓΙΑΛΗΣ ΚΥΚΛΑΔΩΝ, ΑΙΓΙΑΛΗ ΚΥΚΛΑΔΩΝ, ΑΜΟΡΓΟΣ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΑΝΤΙΚΕΡΙ ΚΥΚΛΑΔΩΝ, ΑΡΚΕΣΙΝΗ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΒΡΟΥΤΣΗΣ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΓΡΑΜΒΟΥΣΣΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΓΡΑΜΠΟΝΗΣΙΟ ΚΥΚΛΑΔΩΝ, ΘΟΛΑΡΙΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΟΤΑΡΙΤΙΣΣΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΟΦΑΝΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΑΡΙ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΣΤΕΛΟΠΕΤΡΑ ΚΥΚΛΑΔΩΝ, ΚΑΤΑΠΟΛΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΑΝΤΙΚΕΡΙ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΚΕΡΟΣ ΚΟΥΦΟΝΗΣΙΟΥ ΚΥΚΛΑΔΩΝ, ΛΑΓΚΑΔΑ ΑΙΓΙΑΛΗΣ ΚΥΚΛΑΔΩΝ, ΛΕΥΚΕΣ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΜΑΥΡΗ ΜΥΤΗ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΝΕΡΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΝΙΚΟΥΡΙΑ ΚΥΚΛΑΔΩΝ, ΞΥΛΟΚΕΡΑΤΙΔΙ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΑΙΓΙΑΛΗΣ ΚΥΚΛΑΔΩΝ, ΠΑΡΑΛΙΑ ΘΟΛΑΡΙΩΝ  ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΠΕΡΑ ΡΑΧΙΔΙ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΠΟΤΑΜΟΣ ΑΙΓΙΑΛΗΣ ΚΥΚΛΑΔΩΝ, ΡΑΧΙΔΙ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΡΑΧΟΥΛΑ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΤΣΕΣΕΜΕΣ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΦΕΛΟΥΚΑ ΚΥΚΛΑΔΩΝ, ΧΡΙΣΤΟΥΛΑΚΙ ΑΜΟΡΓΟΥ ΚΥΚΛΑΔΩΝ, ΨΑΛΙΔΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84009', Area: 'ΑΝΑΦΗ ΚΥΚΛΑΔΩΝ, ΚΛΗΣΙΔΙ ΑΝΑΦΗΣ ΚΥΚΛΑΔΩΝ, ΜΑΚΡΑ ΑΝΑΦΗΣ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΑΝΑΦΗΣ ΚΥΚΛΑΔΩΝ, ΠΑΧΕΙΑ ΑΝΑΦΗΣ ΚΥΚΛΑΔΩΝ, ΦΤΕΝΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84010', Area: 'ΑΒΟΛΑΔΟΝΗΣΙΟ ΚΥΚΛΑΔΩΝ, ΑΛΟΠΡΟΝΟΙΑ ΣΙΚΙΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΟΓΕΡΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΡΑΒΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΡΔΙΩΤΙΣΣΑ ΚΥΚΛΑΔΩΝ, ΣΙΚΙΝΟΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84011', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΦΟΛΕΓΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΦΟΛΕΓΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΚΑΛΗ ΦΟΛΕΓΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΜΕΡΙΑ ΦΟΛΕΓΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΔΡΑΚΟΝΗΣΙΟ ΚΥΚΛΑΔΩΝ, ΚΑΡΑΒΟΣΤΑΣΗΣ ΦΟΛΕΓΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΛΙΒΑΔΙ ΦΟΛΕΓΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΤΡΙΑ ΑΔΕΛΦΙΑ ΚΥΚΛΑΔΩΝ, ΦΟΛΕΓΑΝΔΡΟΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84100', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΣΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΔΕΙΑΤΑ ΚΥΚΛΑΔΩΝ, ΑΖΟΛΙΜΝΟΣ ΒΑΡΗΣ ΚΥΚΛΑΔΩΝ, ΑΖΟΛΙΜΝΟΣ ΜΑΝΝΑ ΚΥΚΛΑΔΩΝ, ΑΗ ΜΙΧΑΛΗΣ ΚΥΚΛΑΔΩΝ, ΑΛΗΘΙΝΗ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΜΑΝΝΑ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΣΥΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΣΠΡΟ ΣΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΒΑΡΒΑΡΟΥΣΑ ΚΥΚΛΑΔΩΝ, ΒΑΡΗ ΚΥΚΛΑΔΩΝ, ΒΗΣΣΑ ΚΥΚΛΑΔΩΝ, ΓΑΛΗΣΣΑΣ ΚΥΚΛΑΔΩΝ, ΓΥΑΡΟΣ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΔΑΝΑΚΟΣ ΣΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΔΙΔΥΜΗ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΕΠΙΣΚΟΠΕΙΟ ΣΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΕΡΜΟΥΠΟΛΗ ΚΥΚΛΑΔΩΝ, ΚΙΝΙΟ ΚΥΚΛΑΔΩΝ, ΜΑΝΝΑ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΣ ΓΙΑΛΟΣ ΒΑΡΗΣ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΣ ΓΙΑΛΟΣ ΠΟΣΕΙΔΩΝΙΑΣ ΚΥΚΛΑΔΩΝ, ΜΕΣΑΡΙΑ ΣΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΜΥΤΤΑΚΑΣ ΚΥΚΛΑΔΩΝ, ΝΑΤΑ ΚΥΚΛΑΔΩΝ, ΠΑΓΟΣ ΚΥΚΛΑΔΩΝ, ΠΑΠΟΥΡΙ ΚΥΚΛΑΔΩΝ, ΠΑΡΑΚΟΠΗ ΚΥΚΛΑΔΩΝ, ΠΛΑΤΥ ΒΟΥΝΙ ΚΥΚΛΑΔΩΝ, ΠΟΣΕΙΔΩΝΙΑ ΚΥΚΛΑΔΩΝ, ΣΧΙΝΟΝΗΣΙ ΠΟΣΕΙΔΩΝΙΑΣ ΚΥΚΛΑΔΩΝ, ΤΑΛΑΝΤΑ ΚΥΚΛΑΔΩΝ, ΦΟΙΝΙΚΑΣ ΚΥΚΛΑΔΩΝ, ΦΟΙΝΙΚΙΑ ΑΝΩ ΣΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΧΑΛΑΝΔΡΙΑΝΗ ΚΥΚΛΑΔΩΝ, ΧΡΟΥΣΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84200', Area: 'ΑΓΑΠΗ ΚΥΚΛΑΔΩΝ, ΑΓΙΑ ΒΑΡΒΑΡΑ ΚΥΚΛΑΔΩΝ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΡΩΜΑΝΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΣΩΣΤΗΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΦΩΚΑΣ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΕΤΟΦΩΛIΑ ΚΥΚΛΑΔΩΝ, ΑΡΝΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΒΩΛΑΞ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΔΥΟ ΧΩΡΙΑ ΚΥΚΛΑΔΩΝ, ΚΑΛΛΟΝΗ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΠΟΣ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΡΥΑ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΚΛΕΙΣΜΑ ΚΥΚΛΑΔΩΝ, ΚΕΧΡΟΣ ΚΥΚΛΑΔΩΝ, ΚΙΟΝΙΑ  ΚΥΚΛΑΔΩΝ, ΚΟΛΥΜΠΗΘΡΑ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΟΥΜΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΚΡΟΚΟΣ ΚΥΚΛΑΔΩΝ, ΚΤΙΚΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΚΩΜΗ ΚΥΚΛΑΔΩΝ, ΛΑΟΥΤΗ ΚΥΚΛΑΔΩΝ, ΛΙΒΑΔΑ ΚΥΚΛΑΔΩΝ, ΛΙΜΕΝΑΣ ΣΤΑΥΡΟΥ ΚΥΚΛΑΔΩΝ, ΛΟΥΤΡΑ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΛΥΧΝΑΦΤΙΑ ΚΥΚΛΑΔΩΝ, ΜΕΣΗ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΝΑΣΤΗΡΙΑ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΚΕΧΡΟΒΟΥΝΙΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΥΝΤΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΜΠΕΡΔΕΜΙΑΡΟΣ  ΚΥΚΛΑΔΩΝ, ΜΥΡΣΙΝΗ ΚΥΚΛΑΔΩΝ, ΞΙΝΑΡΑ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΑΓΙΟΥ ΙΩΑΝΝΗ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΠΕΡΑΣΤΡΑ ΚΥΚΛΑΔΩΝ, ΠΟΤΑΜΙΑ ΚΥΚΛΑΔΩΝ, ΠΥΡΓΟΣ ΤΗΝΟΥ ΚΥΚΛΑΔΩΝ, ΣΚΑΛΑΔΟΣ  ΚΥΚΛΑΔΩΝ, ΣΚΛΑΒΟΧΩΡΙ ΚΥΚΛΑΔΩΝ, ΣΜΑΡΔΑΚΙ ΚΥΚΛΑΔΩΝ, ΣΠΕΡΑΔΟΣ  ΚΥΚΛΑΔΩΝ, ΣΤΕΝΗ ΚΥΚΛΑΔΩΝ, ΤΑΡΑΜΠΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΤΖΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΤΗΝΟΣ ΚΥΚΛΑΔΩΝ, ΤΡΙΑΝΤΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΤΡΙΠΟΤΑΜΟΣ ΚΥΚΛΑΔΩΝ, ΦΑΛΑΤΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΦΕΡΟ ΧΩΡΙΟ ΚΥΚΛΑΔΩΝ, ΧΑΤΖΙΡΑΔΟΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84300', Area: 'ΑΓΙΑ ΑΝΝΑ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΙ ΠΑΝΤΕΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΚΟΥΦΟΝΗΣΙΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΑΡΣΕΝΙΟΣ  ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΗΡΑΚΛΕΙΑΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΘΑΛΕΛΑΙΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΠΡΟΚΟΠΙΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΚΙΔΙΑ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΠΟΤΑΜΙΑ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΣΑΓΚΡΙ ΚΥΚΛΑΔΩΝ, ΑΡΓΙΛΟΣ ΚΥΚΛΑΔΩΝ, ΒΕΝΕΤΙΚΟ ΚΥΚΛΑΔΩΝ, ΒΙΒΛΟΣ ΚΥΚΛΑΔΩΝ, ΒΟΥΛΓΑΡΗ ΚΥΚΛΑΔΩΝ, ΓΑΛΑΝΑΔΟ ΚΥΚΛΑΔΩΝ, ΓΑΛΗΝΗ ΚΥΚΛΑΔΩΝ, ΓΛΑΡΟΝΗΣΙ ΚΟΥΦΟΝΗΣΙΩΝ ΚΥΚΛΑΔΩΝ, ΓΛΙΝΑΔΟ ΚΥΚΛΑΔΩΝ, ΔΟΝΟΥΣΑ ΚΥΚΛΑΔΩΝ, ΕΓΓΑΡΕΣ ΚΥΚΛΑΔΩΝ, ΗΡΑΚΛΕΙΑ ΚΥΚΛΑΔΩΝ, ΚΑΛΟΤΑΡΙΤΙΣΣΑ ΔΟΝΟΥΣΑΣ ΚΥΚΛΑΔΩΝ, ΚΑΝΑΚΑΡΙ ΚΥΚΛΑΔΩΝ, ΚΑΣΤΡΑΚΙ  ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΚΟΥΦΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΠΟΤΑΜΙΑ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΣΑΓΚΡΙ ΚΥΚΛΑΔΩΝ, ΚΛΙΔΟΥΡΑ ΚΥΚΛΑΔΩΝ, ΚΟΥΡΟΥΝΟΧΩΡΙ ΚΥΚΛΑΔΩΝ, ΚΟΥΦΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΛΑΖΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΜΑΡΑΓΚΑΣ ΚΥΚΛΑΔΩΝ, ΜΑΣΤΟΡΑΚΗΣ ΚΥΚΛΑΔΩΝ, ΜΑΧΑΙΡΕΣ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΛΗ ΠΛΑΚΑ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΛΟΣ ΑΒΕΛΑΣ ΚΥΚΛΑΔΩΝ, ΜΕΛΑΝΕΣ ΚΥΚΛΑΔΩΝ, ΜΕΡΣΙΝΗ ΔΟΝΟΥΣΑΣ ΚΥΚΛΑΔΩΝ, ΜΕΣΑΡΙΑ ΣΧΟΙΝΟΥΣΣΑΣ ΚΥΚΛΑΔΩΝ, ΜΕΣΗ ΠΟΤΑΜΙΑ ΚΥΚΛΑΔΩΝ, ΜΙΚΡΗ ΒΙΓΛΑ ΚΥΚΛΑΔΩΝ, ΜΙΚΡΟΣ ΑΒΕΛΑΣ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΧΡΥΣΟΣΤΟΜΟΥ ΚΥΚΛΑΔΩΝ, ΜΥΛΟΙ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΝΑΞΟΣ ΚΥΚΛΑΔΩΝ, ΟΦΕΙΔΟΥΣΣΑ ΚΥΚΛΑΔΩΝ, ΠΑΝΑΓΙΑ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΠΛΑΚΑ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΠΛΑΚΗ ΚΟΥΦΟΝΗΣΙΩΝ ΚΥΚΛΑΔΩΝ, ΠΡΑΣΟΥΡΑ ΚΥΚΛΑΔΩΝ, ΣΚΥΛΟΝΗΣΙ ΔΟΝΟΥΣΗΣ ΚΥΚΛΑΔΩΝ, ΣΤΕΛΙΔΑ ΚΥΚΛΑΔΩΝ, ΣΤΡΟΓΓΥΛΗ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΣΧΟΙΝΟΥΣΣΑ ΚΥΚΛΑΔΩΝ, ΤΣΟΥΛΟΥΦΙ ΚΥΚΛΑΔΩΝ, ΦΟΙΝΙΚΑΣ ΚΟΥΦΟΝΗΣΙΟΥ ΚΥΚΛΑΔΩΝ, ΧΑΡΑΥΓΗ ΔΟΝΟΥΣΑΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84302', Area: 'ΑΓΙΑΣΣΟΣ ΚΥΚΛΑΔΩΝ, ΑΖΑΛΑΣ ΚΥΚΛΑΔΩΝ, ΑΙ ΓΙΑΝΝΗΣ ΛΕΥΚΩΝΗΣ ΚΥΚΛΑΔΩΝ, ΑΚΡΩΤΗΡΙ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΑΠΕΙΡΑΘΟΣ ΚΥΚΛΑΔΩΝ, ΒΟΥΡΒΟΥΡΙΑ ΚΥΚΛΑΔΩΝ, ΔΑΜΑΛΑΣ ΚΥΚΛΑΔΩΝ, ΔΑΜΑΡΙΩΝΑΣ ΚΥΚΛΑΔΩΝ, ΔΑΝΑΚΟΣ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΑΝΤΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΝΑΚΙ ΚΥΚΛΑΔΩΝ, ΚΕΡΑΜΩΤΗ ΚΥΚΛΑΔΩΝ, ΚΙΝΙΔΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΚΛΕΙΔΩ ΚΥΚΛΑΔΩΝ, ΛΥΓΑΡΙΔΙΑ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΚΥΚΛΑΔΩΝ, ΜΟΥΤΣΟΥΝΑ ΚΥΚΛΑΔΩΝ, ΠΑΝΕΡΜΟΣ ΚΥΚΛΑΔΩΝ, ΠΥΡΓΑΚΙ ΝΑΞΟΥ ΚΥΚΛΑΔΩΝ, ΡΑΧΗ ΚΥΚΛΑΔΩΝ, ΣΙΦΩΝΕΣ ΚΥΚΛΑΔΩΝ, ΦΙΛΟΤΙ ΚΥΚΛΑΔΩΝ, ΧΑΛΚΕΙΟ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84400', Area: 'ΑΓΙΟΣ ΑΡΤΕΜΙΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΤΡΥΠΗΤΗΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΣΠΥΡΙΔΩΝΑΣ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΩΝ ΘΕΟΔΩΡΩΝ ΚΥΚΛΑΔΩΝ, ΑΓΚΑΙΡΙΑ ΚΥΚΛΑΔΩΝ, ΑΛΥΚΗ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΝΕΡΑΤΖΑ ΚΥΚΛΑΔΩΝ, ΑΣΠΡΟ ΧΩΡΙΟ ΚΥΚΛΑΔΩΝ, ΒΟΥΝΙΑ ΛΕΥΚΩΝ ΚΥΚΛΑΔΩΝ, ΒΟΥΝΙΑ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΒΟΥΤΑΚΟΣ ΑΓΚΑΙΡΙΑΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΒΟΥΤΑΚΟΣ ΚΥΚΛΑΔΩΝ, ΓΑΙΔΟΥΡΟΝΗΣΙ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΓΑΛΙΑΤΣΟΣ ΚΥΚΛΑΔΩΝ, ΓΛΑΡΟΜΠΟΥΤΑ ΚΥΚΛΑΔΩΝ, ΓΛΑΡΟΠΟΥΝΤΑ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΓΛΥΣΙΔΑ ΚΥΚΛΑΔΩΝ, ΓΛΥΦΑ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΓΛΥΦΑΔΕΣ ΚΥΚΛΑΔΩΝ, ΔΡΥΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΔΡΥΟΣ ΚΥΚΛΑΔΩΝ, ΕΒΡΙΟΚΑΣΤΡΟ ΚΥΚΛΑΔΩΝ, ΕΛΗΤΑΣ ΚΥΚΛΑΔΩΝ, ΙΕΡΑ ΜΟΝΗ ΘΑΨΑΝΩΝ ΚΥΚΛΑΔΩΝ, ΙΣΤΕΡΝΙΟ ΚΥΚΛΑΔΩΝ, ΚΑΚΑΠΕΤΡΑ ΚΥΚΛΑΔΩΝ, ΚΑΛΑΜΙ  ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΑΡΕΣ ΝΑΟΥΣΑΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΑΡΕΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΑΡΙ ΑΓΚΑΙΡΙΑΣ ΚΥΚΛΑΔΩΝ, ΚΑΜΠΟΙ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΜΠΟΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΚΟΥΚΟΥΜΑΛΕΥΣ ΚΥΚΛΑΔΩΝ, ΚΡΩΤΗΡΙ ΚΥΚΛΑΔΩΝ, ΚΩΣΤΟΣ ΚΥΚΛΑΔΩΝ, ΛΑΓΚΑΔΑ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΛΕΥΚΕΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΛΟΓΑΡΑΣ ΚΥΚΛΑΔΩΝ, ΜΑΚΡΙΑ ΜΥΤΗ ΚΥΚΛΑΔΩΝ, ΜΑΚΡΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΜΑΡΑΘΙ ΚΥΚΛΑΔΩΝ, ΜΑΡΜΑΡΑ ΚΥΚΛΑΔΩΝ, ΜΑΡΠΗΣΣΑ ΚΥΚΛΑΔΩΝ, ΜΑΥΡΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΑΓΙΩΝ ΘΕΟΔΩΡΩΝ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΧΡΙΣΤΟΥ ΔΑΣΟΥΣ ΚΥΚΛΑΔΩΝ, ΜΩΛΟΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΠΑΝΤΕΡΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΠΑΡΑΣΠΟΡΟΣ ΚΥΚΛΑΔΩΝ, ΠΑΡΟΣ ΚΥΚΛΑΔΩΝ, ΠΙΣΩ ΛΙΒΑΔΙ ΚΥΚΛΑΔΩΝ, ΠΟΥΝΤΑ ΚΥΚΛΑΔΩΝ, ΠΡΟΔΡΟΜΟΣ ΚΥΚΛΑΔΩΝ, ΠΥΡΓΑΚΙ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΣΑΡΑΚΙΝΙΚΟ ΚΥΚΛΑΔΩΝ, ΣΩΤΗΡΕΣ ΚΥΚΛΑΔΩΝ, ΤΕΤΑΡΤΟΝΗΣΙ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΤΖΑΝΕΣ ΚΥΚΛΑΔΩΝ, ΤΟΥΡΛΟΣ ΝΑΟΥΣΗΣ ΚΥΚΛΑΔΩΝ, ΤΟΥΡΛΟΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΤΣΟΥΚΑΛΑΣ ΚΥΚΛΑΔΩΝ, ΤΣΟΥΚΑΛΙΑ ΚΥΚΛΑΔΩΝ, ΥΣΤΕΡΝΙΑ ΚΥΚΛΑΔΩΝ, ΦΙΛΙΔΙ ΚΥΚΛΑΔΩΝ, ΦΟΙΝΙΣΣΕΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΧΡΥΣΗ ΑΚΤΗ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΧΩΡΙΔΑΚΙ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84401', Area: 'ΑΓΙΑ ΚΑΛΗ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΚΥΚΛΑΔΩΝ, ΑΜΠΕΛΑΣ ΚΥΚΛΑΔΩΝ, ΚΟΛΥΜΠΗΘΡΕΣ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΛΑΓΚΕΡΗ ΚΥΚΛΑΔΩΝ, ΛΙΒΑΔΙΑ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΑΓΙΟΥ ΑΝΤΩΝΙΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΛΟΓΓΟΒΑΡΔΑΣ ΚΥΚΛΑΔΩΝ, ΝΑΟΥΣΑ ΠΑΡΟΥ ΚΥΚΛΑΔΩΝ, ΞΙΦΑΡΑ ΚΥΚΛΑΔΩΝ, ΠΡΩΤΟΡΓΙΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84500', Area: 'ΑΓΙΑ ΕΛΕΟΥΣΑ ΚΥΚΛΑΔΩΝ, ΑΚΑΜΑΤΗΣ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΛΑΔΙΝΟ ΚΥΚΛΑΔΩΝ, ΑΛΑΔΟ ΚΥΚΛΑΔΩΝ, ΑΛΙΚΑΝΔΡΟ ΚΥΚΛΑΔΩΝ, ΑΜΟΛΟΧΟΣ ΚΥΚΛΑΔΩΝ, ΑΝΔΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΑΠΡΟΒΑΤΟ ΚΥΚΛΑΔΩΝ, ΑΠΟΙΚΙΑ ΚΥΚΛΑΔΩΝ, ΒΑΚΟΝΙ ΜΕΣΣΑΡΙΑΣ ΚΥΚΛΑΔΩΝ, ΒΟΥΡΚΩΤΗ ΚΥΚΛΑΔΩΝ, ΒΡΑΧΝΟΣ ΚΥΚΛΑΔΩΝ, ΖΑΓΑΝΙΑΡΗΣ ΚΥΚΛΑΔΩΝ, ΚΑΛΑΜΑΚΙ ΚΥΚΛΑΔΩΝ, ΚΑΤΑΚΑΛΑΙΟΙ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΑΠΡΟΒΑΤΟ ΚΥΚΛΑΔΩΝ, ΚΟΛΥΜΠΟΣ ΚΥΚΛΑΔΩΝ, ΚΟΥΜΑΝΤΗ ΚΥΚΛΑΔΩΝ, ΚΟΥΡΕΛΙ ΚΥΚΛΑΔΩΝ, ΚΟΥΤΣΙΟ ΚΥΚΛΑΔΩΝ, ΛΑΜΥΡΑ ΚΥΚΛΑΔΩΝ, ΛΙΒΑΔΙΑ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΜΕΛΙΔΑ ΚΥΚΛΑΔΩΝ, ΜΕΝΗΤΕΣ ΚΥΚΛΑΔΩΝ, ΜΕΣΑ ΧΩΡΙΟ ΚΥΚΛΑΔΩΝ, ΜΕΣΑΘΟΥΡΙ  ΚΥΚΛΑΔΩΝ, ΜΕΣΑΡΙΑ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΠΑΝΑΧΡΑΝΤΟΥ ΚΥΚΛΑΔΩΝ, ΟΡΕΙΝΟ ΚΥΚΛΑΔΩΝ, ΠΑΛΑΙΠΟΛΗ ΚΥΚΛΑΔΩΝ, ΠΙΤΡΟΦΟΣ ΚΥΚΛΑΔΩΝ, ΣΤΕΝΙΕΣ ΚΥΚΛΑΔΩΝ, ΣΤΡΑΠΟΥΡΙΕΣ ΚΥΚΛΑΔΩΝ, ΣΥΝΕΤΙΟ ΚΥΚΛΑΔΩΝ, ΥΨΗΛΑ ΚΥΚΛΑΔΩΝ, ΦΑΛΛΙΚΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84501', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΠΕΤΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΣΥΜΕΩΝ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΓΑΥΡΙΟ ΚΥΚΛΑΔΩΝ, ΑΡΝΗ ΚΥΚΛΑΔΩΝ, ΑΤΕΝΗ ΑΡΝΑ ΚΥΚΛΑΔΩΝ, ΑΤΕΝΗ ΚΑΤΑΚΟΙΛΟΥ  ΚΥΚΛΑΔΩΝ, ΒΑΡΙΔΙ ΚΥΚΛΑΔΩΝ, ΒΙΤΑΛΙ ΚΥΚΛΑΔΩΝ, ΓΑΙΔΑΡΟΣ ΓΑΥΡΙΟΥ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΓΑΥΡΙΟ ΚΥΚΛΑΔΩΝ, ΓΙΔΕΣ ΚΥΚΛΑΔΩΝ, ΔΑΜΑΣΚΗΝΟΣ ΚΥΚΛΑΔΩΝ, ΕΠΑΝΩ ΦΕΛΛΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΛΥΒΑΡΙ ΚΥΚΛΑΔΩΝ, ΚΑΤΑΚΟΙΛΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΑΓΙΟΣ ΠΕΤΡΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΚΑΤΑΚΟΙΛΟΣ ΚΥΚΛΑΔΩΝ, ΚΑΤΩ ΦΕΛΛΟΣ ΚΥΚΛΑΔΩΝ, ΚΟΥΜΑΡΙ ΚΥΚΛΑΔΩΝ, ΚΥΠΡΙ ΚΥΚΛΑΔΩΝ, ΜΑΚΡΟΤΑΝΤΑΛΟ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΛΟ ΚΥΚΛΑΔΩΝ, ΜΕΡΜΗΓΚΙΕΣ ΚΥΚΛΑΔΩΝ, ΜΟΝΗ ΖΩΟΔΟΧΟΥ ΠΗΓΗΣ ΚΥΚΛΑΔΩΝ, ΜΠΑΤΣΙ ΚΥΚΛΑΔΩΝ, ΠΑΛΑΙΣΤΟ ΚΥΚΛΑΔΩΝ, ΠΙΣΩ ΛΙΜΝΙΩΝΑΣ ΚΥΚΛΑΔΩΝ, ΠΛΑΤΥ ΑΝΔΡΟΥ ΚΥΚΛΑΔΩΝ, ΠΡΑΣΣΟ ΚΥΚΛΑΔΩΝ, ΡΕΥΜΑΤΑ ΚΥΚΛΑΔΩΝ, ΣΤΙΒΑΡΙ ΚΥΚΛΑΔΩΝ, ΣΧΟΛΗ  ΚΥΚΛΑΔΩΝ, ΤΟΥΡΛΙΤΗΣ ΚΥΚΛΑΔΩΝ, ΧΑΡΤΕΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84600', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΑΓΡΑΡΙ ΚΥΚΛΑΔΩΝ, ΑΝΩ ΜΕΡΑ ΚΥΚΛΑΔΩΝ, ΔΗΛΟΣ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΕΛΙΑ ΚΥΚΛΑΔΩΝ, ΚΑΒΟΥΡΑΣ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΚΑΛΑΦΑΤΗ ΚΥΚΛΑΔΩΝ, ΚΛΟΥΒΑΣ ΚΥΚΛΑΔΩΝ, ΚΟΥΝΟΥΠΑΣ ΚΥΚΛΑΔΩΝ, ΚΡΟΜΜΥΔΙ ΚΥΚΛΑΔΩΝ, ΚΤΑΠΟΔΙΑ ΚΥΚΛΑΔΩΝ, ΛΙΑ ΚΥΚΛΑΔΩΝ, ΜΑΡΜΑΡΟΝΗΣΙ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΜΠΑΟΣ ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΜΥΚΟΝΟΣ ΚΥΚΛΑΔΩΝ, ΟΡΝΟΣ ΚΥΚΛΑΔΩΝ, ΠΛΑΤΥΣ ΓΙΑΛΟΣ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΠΛΥΝΤΡΙ ΚΥΚΛΑΔΩΝ, ΡΗΝΕΙΑ  ΝΗΣΟΣ ΚΥΚΛΑΔΩΝ, ΣΦΟΝΤΗΛΙ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΤΗΓΑΝΙ ΡΑΝΤΑΡ ΚΥΚΛΑΔΩΝ, ΤΟΥΡΛΟΣ ΜΥΚΟΝΟΥ ΚΥΚΛΑΔΩΝ, ΤΡΑΓΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΦΑΡΟΣ ΑΡΜΕΝΙΣΤΗΣ ΚΥΚΛΑΔΩΝ, ΨΑΡΡΟΥ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84700', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΒΟΘΩΝΟΣ  ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΑΚΡΩΤΗΡΙ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΑΝΥΔΡΟΣ ΚΥΚΛΑΔΩΝ, ΑΣΚΑΝΙΑ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΑΣΠΡΟΝΗΣΙ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΒΟΘΩΝΑΣ ΚΥΚΛΑΔΩΝ, ΒΟΥΡΒΟΥΛΟΣ ΚΥΚΛΑΔΩΝ, ΕΞΩ ΓΙΑΛΟΣ ΚΑΡΤΕΡΑΔΟΥ ΚΥΚΛΑΔΩΝ, ΕΞΩ ΓΙΑΛΟΣ ΚΥΚΛΑΔΩΝ, ΕΞΩ ΓΩΝΙΑ ΚΥΚΛΑΔΩΝ, ΕΞΩ ΚΑΤΟΙΚΙΕΣ ΚΥΚΛΑΔΩΝ, ΕΠΙΣΚΟΠΗ ΓΩΝΙΑΣ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΕΣΧΑΤΗ ΚΥΚΛΑΔΩΝ, ΗΜΕΡΟΒΙΓΛΙ ΚΥΚΛΑΔΩΝ, ΘΗΡΑ ΚΥΚΛΑΔΩΝ, ΚΑΜΑΡΙ ΕΠΙΣΚΟΠΗΣ ΓΩΝΙΑΣ ΚΥΚΛΑΔΩΝ, ΚΑΡΤΕΡΑΔΟΣ ΚΥΚΛΑΔΩΝ, ΜΕΓΑΛΟΧΩΡΙ ΚΥΚΛΑΔΩΝ, ΜΕΣΑ ΚΑΤΟΙΚΙΕΣ ΚΥΚΛΑΔΩΝ, ΜΕΣΑΡΙΑ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΜΟΝΟΛΙΘΟΣ ΚΥΚΛΑΔΩΝ, ΝΕΑ ΚΑΜΕΝΗ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΦΗΡΩΝ ΚΥΚΛΑΔΩΝ, ΠΑΛΑΙΑ  ΚΑΜΕΝΗ ΚΥΚΛΑΔΩΝ, ΠΑΝΑΓΙΑ ΚΑΛΟΥ  ΚΥΚΛΑΔΩΝ, ΠΕΡΙΒΟΛΙΑ ΚΥΚΛΑΔΩΝ, ΦΗΡΑ ΚΥΚΛΑΔΩΝ, ΧΡΙΣΤΙΑΝΑ ΚΥΚΛΑΔΩΝ, ΧΡΙΣΤΙΑΝΗ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84702', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΘΗΡΑΣΙΑΣ ΚΥΚΛΑΔΩΝ, ΑΓΡΙΛΙΑ ΘΗΡΑΣΙΑΣ ΚΥΚΛΑΔΩΝ, ΘΗΡΑΣΙΑ ΚΥΚΛΑΔΩΝ, ΘΟΛΟΣ ΚΥΚΛΑΔΩΝ, ΚΟΛΟΥΜΠΟΣ ΟΙΑΣ ΚΥΚΛΑΔΩΝ, ΟΙΑ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΑΜΜΟΥΔΙΟΥ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΑΡΜΕΝΗΣ ΚΥΚΛΑΔΩΝ, ΟΡΜΟΣ ΚΟΡΦΟΥ ΟΙΑΣ ΚΥΚΛΑΔΩΝ, ΠΑΡΑΔΕΙΣΟΣ ΚΥΚΛΑΔΩΝ, ΠΟΤΑΜΟΣ ΘΗΡΑΣΙΑΣ ΚΥΚΛΑΔΩΝ, ΦΟΙΝΙΚΙΑ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84703', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΕΜΠΟΡΕΙΟΥ ΚΥΚΛΑΔΩΝ, ΒΛΥΧΑΔΑ ΚΥΚΛΑΔΩΝ, ΕΜΠΟΡΕΙΟΣ ΘΗΡΑΣ ΚΥΚΛΑΔΩΝ, ΕΞΩΜΥΤΗΣ ΚΥΚΛΑΔΩΝ, ΠΕΡΙΣΣΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '84800', Area: 'ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΚΥΚΛΑΔΩΝ, ΑΓΙΟΣ ΓΕΡΑΣΙΜΟΣ ΚΥΚΛΑΔΩΝ, ΑΚΡΑΘΙ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΑΝΑΝΕΣ ΚΥΚΛΑΔΩΝ, ΑΝΤΙΜΗΛΟΣ ΚΥΚΛΑΔΩΝ, ΑΠΟΛΛΩΝΙΑ (ΠΟΛΛΩΝΙΑ) ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΑΡΕΤΗ ΚΥΚΛΑΔΩΝ, ΑΡΚΑΔΙΟ ΚΥΚΛΑΔΩΝ, ΒΟΥΔΙΑ ΚΥΚΛΑΔΩΝ, ΓΛΑΡΟΝΗΣΙΑ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΕΜΠΟΡΕΙΟΣ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΖΕΦΥΡΙΑ ΚΥΚΛΑΔΩΝ, ΘΕΙΩΡΥΧΕΙΑ ΚΥΚΛΑΔΩΝ, ΚΑΝΑΒΑ ΚΥΚΛΑΔΩΝ, ΚΑΤΣΑΡΩΝΑΣ ΚΥΚΛΑΔΩΝ, ΚΛΗΜΑ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΚΟΜΙΑ ΚΥΚΛΑΔΩΝ, ΜΑΝΔΡΑΚΙΑ ΚΥΚΛΑΔΩΝ, ΜΗΛΟΣ ΚΥΚΛΑΔΩΝ, ΜΥΤΙΚΑΣ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΞΥΛΟΚΕΡΑΤΙΑ ΚΥΚΛΑΔΩΝ, ΠΑΛΙΟΧΩΡΙ ΚΥΚΛΑΔΩΝ, ΠΑΞΙΜΑΔΙ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΠΑΧΑΙΝΑ ΚΥΚΛΑΔΩΝ, ΠΕΡΑ ΤΡΙΟΒΑΣΑΛΟΣ ΚΥΚΛΑΔΩΝ, ΠΗΛΟΝΗΣΙΟ ΚΥΚΛΑΔΩΝ, ΠΛΑΚΑ ΜΗΛΟΥ ΚΥΚΛΑΔΩΝ, ΠΡΑΣΟΝΗΣΙ ΚΥΚΛΑΔΩΝ, ΠΡΟΒΑΤΑΣ ΚΥΚΛΑΔΩΝ, ΡΑΛΑΚΙΟ ΧΑΛΑΚΟΣ ΚΥΚΛΑΔΩΝ, ΣΧΙΝΩΠΗ ΚΥΚΛΑΔΩΝ, ΤΡΙΟΒΑΣΑΛΟΣ ΚΥΚΛΑΔΩΝ, ΤΡΥΠΗΤΗ ΚΥΚΛΑΔΩΝ, ΦΟΥΡΚΟΒΟΥΝΙ ΚΥΚΛΑΔΩΝ, ΦΥΛΑΚΩΠΗ ΚΥΚΛΑΔΩΝ, ΦΥΡΟΠΟΤΑΜΟΣ ΚΥΚΛΑΔΩΝ, ΨΑΘΑΔΙΚΑ ΚΥΚΛΑΔΩΝ', Prefecture: 'Κυκλάδων' },
    { PostalCode: '23051', Area: 'ΑΓΙΟΙ ΤΑΞΙΑΡΧΕΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΕΡΙΣΤΕΡΙΟΥ ΛΑΚΩΝΙΑΣ, ΓΡΑΜΜΟΥΣΑ ΛΑΚΩΝΙΑΣ, ΛΕΗΜΟΝΑΣ ΛΑΚΩΝΙΑΣ, ΠΑΝΗΓΥΡΙΣΤΡΑ ΛΑΚΩΝΙΑΣ, ΠΕΡΙΣΤΕΡΙ ΕΠΙΔΑΥΡΟΥ ΛΙΜΗΡΑΣ ΛΑΚΩΝΙΑΣ, ΣΚΑΛΑ ΛΑΚΩΝΙΑΣ, ΣΟΥΛΙΟ ΛΑΚΩΝΙΑΣ, ΣΤΕΦΑΝΙΑ ΛΑΚΩΝΙΑΣ, ΤΡΙΝΗΣΑ ΛΑΚΩΝΙΑΣ, ΦΙΛΗΣΙΟ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23052', Area: 'ΑΓΓΕΛΩΝΑ ΛΑΚΩΝΙΑΣ, ΕΛΑΙΑ ΚΟΥΝΟΥ ΛΑΚΩΝΙΑΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΛΑΚΩΝΙΑΣ, ΜΟΛΑΟΙ ΛΑΚΩΝΙΑΣ, ΠΑΚΙΑ ΛΑΚΩΝΙΑΣ, ΣΥΚΕΑ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23053', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΒΟΙΩΝ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΕΛΙΣΣΑΙΟΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΕΠΙΔΑΥΡΟΥ ΛΙΜΗΡΑΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΜΕΣΟΧΩΡΙΟΥ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΜΑΜΑΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΒΟΙΩΝ ΛΑΚΩΝΙΑΣ, ΑΔΙΑΚΟΠΟΣ ΛΑΚΩΝΙΑΣ, ΑΝΩ ΚΑΣΤΑΝΕΑ ΛΑΚΩΝΙΑΣ, ΑΡΧΑΓΓΕΛΟΣ ΛΑΚΩΝΙΑΣ, ΒΑΛΤΑΚΙ ΛΑΚΩΝΙΑΣ, ΒΑΡΚΟ ΛΑΚΩΝΙΑΣ, ΒΕΛΑΝΙΔΙΑ ΛΑΚΩΝΙΑΣ, ΒΙΓΚΛΑΦΙΑ ΛΑΚΩΝΙΑΣ, ΔΑΙΜΟΝΙΑ ΛΑΚΩΝΙΑΣ, ΔΕΡΜΑΤΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΕΛΑΦΟΝΗΣΟΣ ΛΑΚΩΝΙΑΣ, ΕΛΙΚΑ ΛΑΚΩΝΙΑΣ, ΚΑΠΑΡΙ ΛΑΚΩΝΙΑΣ, ΚΑΤΟΥΝΙΑ ΛΑΚΩΝΙΑΣ, ΚΑΤΩ ΚΑΣΤΑΝΙΑ ΛΑΚΩΝΙΑΣ, ΚΑΤΩ ΝΗΣΙ ΛΑΚΩΝΙΑΣ, ΚΟΝΤΡΑΦΟΥΡΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΚΟΡΑΚΑΣ ΛΑΚΩΝΙΑΣ, ΚΡΥΟΒΡΥΣΗ ΛΑΚΩΝΙΑΣ, ΛΑΧΙΟ ΛΑΚΩΝΙΑΣ, ΛΕΥΚΗ ΛΑΚΩΝΙΑΣ, ΛΙΜΝΕΣ ΛΑΚΩΝΙΑΣ, ΛΙΜΝΕΣ ΠΑΝΤΑΝΑΣΣΗΣ ΛΑΚΩΝΙΑΣ, ΜΑΝΟΛΑΡΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΜΑΡΑΘΙΑΣ ΛΑΚΩΝΙΑΣ, ΜΕΓΑΛΗ ΣΠΗΛΙΑ ΛΑΚΩΝΙΑΣ, ΜΕΣΟΧΩΡΙ ΛΑΚΩΝΙΑΣ, ΝΕΑΠΟΛΗ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΛΑΚΩΝΙΑΣ, ΠΑΝΑΓΙΑ ΒΟΙΩΝ ΛΑΚΩΝΙΑΣ, ΠΑΝΤΑΝΑΣΣΑ ΛΑΚΩΝΙΑΣ, ΠΑΡΑΔΕΙΣΙ ΛΑΚΩΝΙΑΣ, ΠΑΡΑΛΙΑ ΔΑΙΜΟΝΙΑΣ ΛΑΚΩΝΙΑΣ, ΠΛΑΤΑΝΙΑΣ ΛΑΚΩΝΙΑΣ, ΠΟΥΝΤΑ ΛΑΚΩΝΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΒΟΙΩΝ ΛΑΚΩΝΙΑΣ, ΣΚΛΑΒΟΥΝΑ ΛΑΚΩΝΙΑΣ, ΤΣΟΥΜΑΛΑ ΛΑΚΩΝΙΑΣ, ΦΑΡΑΚΛΟ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23054', Area: 'ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΛΑΚΩΝΙΑΣ, ΑΝΘΟΧΩΡΙ ΛΑΚΩΝΙΑΣ, ΑΝΩΓΕΙΑ ΛΑΚΩΝΙΑΣ, ΑΡΝΑ ΛΑΚΩΝΙΑΣ, ΒΑΣΙΛΙΚΗ ΛΑΚΩΝΙΑΣ, ΓΟΛΑ ΛΑΚΩΝΙΑΣ, ΓΟΡΑΝΟΙ ΛΑΚΩΝΙΑΣ, ΔΑΦΝΗ ΛΑΚΩΝΙΑΣ, ΔΙΠΟΤΑΜΑ ΛΑΚΩΝΙΑΣ, ΚΑΒΟΥΡΑΚΙ ΛΑΚΩΝΙΑΣ, ΚΡΥΟΝΕΡΙ ΛΑΚΩΝΙΑΣ, ΚΥΔΩΝΙΑ ΛΑΚΩΝΙΑΣ, ΚΥΔΩΝΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΛΕΥΚΗ ΑΝΩΓΕΙΩΝ ΛΑΚΩΝΙΑΣ, ΛΕΥΚΟΧΡΩΜΑ ΛΑΚΩΝΙΑΣ, ΛΙΑΝΤΙΝΑ ΛΑΚΩΝΙΑΣ, ΜΟΝΗ ΖΕΡΜΠΙΤΣΗΣ ΛΑΚΩΝΙΑΣ, ΞΗΡΟΚΑΜΠΙ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΠΑΝΑΓΙΑ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΔΑΦΝΗΣ ΛΑΚΩΝΙΑΣ, ΠΕΝΤΑΥΛΟΙ ΛΑΚΩΝΙΑΣ, ΠΟΛΟΒΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΠΟΤΑΜΙΑ ΛΑΚΩΝΙΑΣ, ΣΠΑΡΤΙΑ ΛΑΚΩΝΙΑΣ, ΣΩΤΗΡΑ ΛΑΚΩΝΙΑΣ, ΤΟΡΙΖΑ ΛΑΚΩΝΙΑΣ, ΤΡΑΠΕΖΟΝΤΗ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23059', Area: 'ΑΛΕΥΡΟΥ ΛΑΚΩΝΙΑΣ, ΒΟΡΔΟΝΙΑ ΛΑΚΩΝΙΑΣ, ΓΙΑΚΟΥΜΑΙΙΚΑ ΛΑΚΩΝΙΑΣ, ΕΠΑΝΩ ΧΩΡΑ ΛΑΚΩΝΙΑΣ, ΚΑΜΠΟΣ ΛΑΚΩΝΙΑΣ, ΚΑΣΤΟΡΕΙΟ ΛΑΚΩΝΙΑΣ, ΚΑΣΤΡΙ ΛΑΚΩΝΙΑΣ, ΚΑΣΤΩΡ ΛΑΚΩΝΙΑΣ, ΚΟΤΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΛΟΠΕΣΙ ΛΑΚΩΝΙΑΣ, ΠΑΠΠΑΔΙΑΝΙΚΑ ΒΟΡΔΟΝΙΑΣ ΛΑΚΩΝΙΑΣ, ΠΕΡΙΒΟΛΙΑ ΛΑΚΩΝΙΑΣ, ΣΟΥΛΗΝΑ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23062', Area: 'ΑΒΡΑΜΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΑΡΕΟΠΟΛΗ ΛΑΚΩΝΙΑΣ, ΑΡΦΙΓΚΙΑ ΛΑΚΩΝΙΑΣ, ΑΡΧΙΑ ΛΑΚΩΝΙΑΣ, ΒΑΧΟΣ ΛΑΚΩΝΙΑΣ, ΓΕΡΜΑ ΛΑΚΩΝΙΑΣ, ΔΡΥΑΛΙΑ ΛΑΚΩΝΙΑΣ, ΕΛΑΙΟΧΩΡΙ ΛΑΚΩΝΙΑΣ, ΚΑΜΠΙΝΑΡΕΣ ΛΑΚΩΝΙΑΣ, ΚΑΡΑΒΟΣΤΑΣΙ ΟΙΤΥΛΟΥ ΛΑΚΩΝΙΑΣ, ΚΑΡΕΑ ΛΑΚΩΝΙΑΣ, ΚΑΤΩ ΚΑΡΕΑ ΛΑΚΩΝΙΑΣ, ΚΕΛΕΦΑ ΛΑΚΩΝΙΑΣ, ΚΡΥΟΝΕΡΙ ΑΕΡΟΠΟΛΗΣ ΛΑΚΩΝΙΑΣ, ΛΑΓΟΚΟΙΛΙΟ ΛΑΚΩΝΙΑΣ, ΛΙΜΕΝΙΟ ΛΑΚΩΝΙΑΣ, ΜΑΡΜΑΤΣΟΥΚΑ ΛΑΚΩΝΙΑΣ, ΜΕΡΜΥΓΚΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΜΠΟΥΤΣΕΛΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΝΕΟ ΟΙΤΥΛΟ ΛΑΚΩΝΙΑΣ, ΞΕΠΑΠΑΔΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΞΕΡΟΛΑΚΚΟΣ ΛΑΚΩΝΙΑΣ, ΟΙΤΥΛΟ ΛΑΚΩΝΙΑΣ, ΟΜΑΛΕΣ ΛΑΚΩΝΙΑΣ, ΣΚΑΛΑ ΟΙΤΥΛΟΥ ΛΑΚΩΝΙΑΣ, ΣΩΤΗΡΑΣ ΛΑΚΩΝΙΑΣ, ΧΟΤΑΣΙΑ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23070', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΜΟΝΕΜΒΑΣΙΑΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΜΟΝΕΜΒΑΣΙΑΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΜΟΝΕΜΒΑΣΙΑΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΦΩΚΑΣ ΛΑΚΩΝΙΑΣ, ΒΕΛΙΕΣ ΛΑΚΩΝΙΑΣ, ΓΕΦΥΡΑ ΛΑΚΩΝΙΑΣ, ΕΛΛΗΝΙΚΟ ΛΑΚΩΝΙΑΣ, ΚΑΛΥΒΕΣ ΛΑΚΩΝΙΑΣ, ΚΑΣΤΕΛΛΑ ΛΑΚΩΝΙΑΣ, ΚΛΗΡΟΝΟΜΑΙΙΚΑ ΛΑΚΩΝΙΑΣ, ΛΙΡΑ ΛΑΚΩΝΙΑΣ, ΜΟΝΕΜΒΑΣΙΑ ΛΑΚΩΝΙΑΣ, ΝΟΜΙΑ ΣΠΑΡΤΗΣ ΛΑΚΩΝΙΑΣ, ΞΙΦΙΑΣ ΛΑΚΩΝΙΑΣ, ΠΑΝΑΓΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΤΑΛΑΝΤΑ ΛΑΚΩΝΙΑΣ, ΤΕΡΙΑ ΛΑΚΩΝΙΑΣ, ΤΡΟΧΑΛΙΑ ΛΑΚΩΝΙΑΣ, ΦΛΟΚΑ ΛΑΚΩΝΙΑΣ, ΦΟΥΤΙΑ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23100', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΛΑΚΩΝΙΑΣ, ΑΓΙΑ ΚΥΡΙΑΚΗ ΚΟΥΝΟΥ ΛΑΚΩΝΙΑΣ, ΑΓΙΑ ΚΥΡΙΑΚΗ ΣΠΑΡΤΗΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΛΑΚΕΔΑΙΜΟΝΟΣ ΛΑΚΩΝΙΑΣ, ΑΓΡΙΑΝΟΙ ΛΑΚΩΝΙΑΣ, ΑΜΥΚΛΕΣ ΛΑΚΩΝΙΑΣ, ΑΝΑΒΡΥΤΗ ΛΑΚΩΝΙΑΣ, ΑΦΙΣΙΟ ΛΑΚΩΝΙΑΣ, ΒΑΦΕΙΟ ΛΑΚΩΝΙΑΣ, ΒΛΑΧΟΧΩΡΙΟ ΛΑΚΩΝΙΑΣ, ΓΚΟΡΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΓΟΥΝΑΡΗΣ ΛΑΚΩΝΙΑΣ, ΖΑΓΑΝΟ ΠΛΑΤΑΝΑΣ ΛΑΚΩΝΙΑΣ, ΚΑΛΑΜΙΟ ΛΑΚΩΝΙΑΣ, ΚΑΛΛΟΝΗ ΛΑΚΩΝΙΑΣ, ΚΑΛΥΒΙΑ ΣΟΧΑΣ ΛΑΚΩΝΙΑΣ, ΚΑΡΑΒΑΣ ΛΟΓΓΑΣΤΡΑΣ ΛΑΚΩΝΙΑΣ, ΚΑΡΑΒΑΣ ΣΟΥΣΤΙΑΝΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΡΑΒΑΣ ΤΡΥΠΗΣ ΛΑΚΩΝΙΑΣ, ΚΑΤΣΑΡΟΣ ΛΑΚΩΝΙΑΣ, ΚΕΦΑΛΑΣ ΛΑΚΩΝΙΑΣ, ΚΛΑΔΑΣ ΛΑΚΩΝΙΑΣ, ΚΟΚΚΙΝΟΡΡΑΧΗ ΛΑΚΩΝΙΑΣ, ΛΟΓΓΑΣΤΡΑ ΛΑΚΩΝΙΑΣ, ΜΑΓΟΥΛΑ ΛΑΚΩΝΙΑΣ, ΜΟΝΗ ΑΓΙΩΝ ΤΕΣΣΑΡΑΚΟΝΤΑ ΛΑΚΩΝΙΑΣ, ΜΟΝΗ ΦΑΝΕΡΩΜΕΝΗΣ ΛΑΚΩΝΙΑΣ, ΜΥΣΤΡΑΣ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΛΟΓΙΟ ΛΑΚΩΝΙΑΣ, ΠΑΡΟΡΕΙΟ ΛΑΚΩΝΙΑΣ, ΠΕΡΙΣΤΕΡΙ ΑΜΥΚΛΩΝ ΛΑΚΩΝΙΑΣ, ΠΙΚΟΥΛΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΠΛΑΤΑΝΑ ΛΑΚΩΝΙΑΣ, ΠΟΛΥΔΡΟΣΟ ΛΑΚΩΝΙΑΣ, ΡΙΒΙΩΤΙΣΣΑ ΛΑΚΩΝΙΑΣ, ΡΙΖΑ ΛΑΚΩΝΙΑΣ, ΣΑΝΑΤΟΡΙΟ ΜΑΓΟΥΛΑΣ ΛΑΚΩΝΙΑΣ, ΣΚΟΥΡΑ ΛΑΚΩΝΙΑΣ, ΣΟΥΣΤΙΑΝΟΙ ΛΑΚΩΝΙΑΣ, ΣΟΧΑ ΛΑΚΩΝΙΑΣ, ΣΠΑΡΤΗ ΛΑΚΩΝΙΑΣ, ΣΤΑΥΡΟΣ ΛΑΚΩΝΙΑΣ, ΤΑΥΓΕΤΗ ΛΑΚΩΝΙΑΣ, ΤΡΥΠΗ ΛΑΚΩΝΙΑΣ, ΧΡΥΣΑΦΑ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '23200', Area: 'ΑΓΕΡΑΝΟΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΑ ΜΑΡΙΝΑ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΝΕΟΧΩΡΙΟΥ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΕΥΣΤΡΑΤΙΟΣ ΛΑΚΩΝΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΑΙΓΙΕΣ ΛΑΚΩΝΙΑΣ, ΑΡΒΑΝΙΤΗΣ ΛΑΚΩΝΙΑΣ, ΑΡΧΟΝΤΙΚΟ ΛΑΚΩΝΙΑΣ, ΑΣΤΕΡΙ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΒΑΘΥ ΛΑΚΩΝΙΑΣ, ΒΟΥΤΡΟΥΒΗ ΛΑΚΩΝΙΑΣ, ΒΡΥΣΕΣ ΛΑΚΩΝΙΑΣ, ΓΕΦΥΡΑΚΙ ΛΑΚΩΝΙΑΣ, ΓΥΘΕΙΟ ΛΑΚΩΝΙΑΣ, ΓΥΡΙΣΤΑ ΛΑΚΩΝΙΑΣ, ΔΙΡΟ ΛΑΚΩΝΙΑΣ, ΔΙΧΟΒΑ ΛΑΚΩΝΙΑΣ, ΔΡΟΣΟΠΗΓΗ ΛΑΚΩΝΙΑΣ, ΕΛΑΙΑ ΜΟΛΑΩΝ ΛΑΚΩΝΙΑΣ, ΚΑΛΥΒΙΑ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΚΑΜΑΡΕΣ ΛΑΚΩΝΙΑΣ, ΚΑΡΒΕΛΑΣ ΛΑΚΩΝΙΑΣ, ΚΑΡΥΟΥΠΟΛΗ ΛΑΚΩΝΙΑΣ, ΚΑΥΚΙ ΛΑΚΩΝΙΑΣ, ΚΟΝΑΚΙΑ ΛΑΚΩΝΙΑΣ, ΚΟΥΛΟΥΚΑ ΛΑΚΩΝΙΑΣ, ΚΡΗΝΗ ΛΑΚΩΝΙΑΣ, ΛΑΓΚΑΔΑ ΛΑΚΩΝΙΑΣ, ΛΕΜΟΝΕΑ ΛΑΚΩΝΙΑΣ, ΛΙΜΝΗ ΛΑΚΩΝΙΑΣ, ΛΥΓΕΡΕΑΣ ΛΑΚΩΝΙΑΣ, ΜΑΛΛΙΑΡΗ ΣΥΚΙΑ ΛΑΚΩΝΙΑΣ, ΜΑΡΑΘΕΑ ΛΑΚΩΝΙΑΣ, ΜΑΡΟΥΛΙΑ ΛΑΚΩΝΙΑΣ, ΜΕΛΙΤΙΝΗ ΛΑΚΩΝΙΑΣ, ΜΕΣΟΧΩΡΙ ΣΙΔΗΡΟΚΑΣΤΡΟΥ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΜΟΝΑΧΗ ΣΥΚΙΑ ΛΑΚΩΝΙΑΣ, ΜΥΡΣΙΝΗ ΛΑΚΩΝΙΑΣ, ΝΕΑ ΜΑΡΑΘΕΑ ΛΑΚΩΝΙΑΣ, ΝΕΟΧΩΡΙ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΠΑΓΑΝΕΑ ΛΑΚΩΝΙΑΣ, ΠΑΛΑΙΟΒΡΥΣΗ ΛΑΚΩΝΙΑΣ, ΠΑΡΑΣΥΡΟΣ ΛΑΚΩΝΙΑΣ, ΠΑΣΣΑΒΑΣ ΛΑΚΩΝΙΑΣ, ΠΕΤΡΙΝΑ ΛΑΚΩΝΙΑΣ, ΠΕΤΡΟΒΟΥΝΙ ΛΑΚΩΝΙΑΣ, ΠΙΛΑΛΑ ΛΑΚΩΝΙΑΣ, ΠΛΑΤΑΝΟΣ ΛΑΚΩΝΙΑΣ, ΠΟΛΥΑΡΑΒΟΣ ΛΑΚΩΝΙΑΣ, ΠΡΙΤΣΙΩΤΙΚΟ ΛΑΚΩΝΙΑΣ, ΠΡΟΣΗΛΙΟ ΛΑΚΩΝΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΓΥΘΕΙΟΥ ΛΑΚΩΝΙΑΣ, ΠΡΩΤΟΒΑ ΛΑΚΩΝΙΑΣ, ΣΕΛΙΝΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΣΙΔΗΡΟΚΑΣΤΡΟ ΛΑΚΩΝΙΑΣ, ΣΙΝΑ ΛΑΚΩΝΙΑΣ, ΣΚΑΜΝΑΚΙ ΛΑΚΩΝΙΑΣ, ΣΚΑΜΝΙΤΣΑ ΛΑΚΩΝΙΑΣ, ΣΚΟΥΤΑΡΙ ΛΑΚΩΝΙΑΣ, ΣΚΥΦΙΑΝΙΚΑ ΛΑΚΩΝΙΑΣ, ΣΜΗΝΟΣ ΛΑΚΩΝΙΑΣ, ΣΥΝΟΡΑ ΛΑΚΩΝΙΑΣ, ΧΩΣΙΑΡΙΟ ΛΑΚΩΝΙΑΣ, ΨΑΘΑΚΙΑ ΛΑΚΩΝΙΑΣ', Prefecture: 'Λακωνίας' },
    { PostalCode: '40001', Area: 'ΑΚΡΗ ΛΑΡΙΣΗΣ, ΒΑΛΑΝΙΔΑ ΛΑΡΙΣΗΣ, ΚΕΦΑΛΟΒΡΥΣΟ ΛΑΡΙΣΗΣ, ΚΛΕΙΣΟΥΡΑ ΛΑΡΙΣΗΣ, ΚΡΑΝΕΑ ΕΛΑΣΣΟΝΑΣ ΛΑΡΙΣΗΣ, ΛΟΥΤΡΟ ΕΛΛΑΣΟΝΑΣ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40002', Area: 'ΒΙΓΛΑ ΛΑΡΙΣΗΣ, ΛΙΒΑΔΙ ΛΑΡΙΣΗΣ, ΛΟΦΟΣ ΕΛΑΣΣΟΝΑΣ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40003', Area: 'ΑΓΙΑ ΛΑΡΙΣΗΣ ΛΑΡΙΣΗΣ, ΑΓΙΟΚΑΜΠΟΣ ΛΑΡΙΣΗΣ, ΑΕΤΟΛΟΦΟΣ ΛΑΡΙΣΗΣ, ΑΜΥΓΔΑΛΗ ΛΑΡΙΣΗΣ, ΑΝΑΒΡΑ ΛΑΡΙΣΗΣ, ΑΝΑΤΟΛΗ ΛΑΡΙΣΗΣ, ΒΕΛΙΚΑ ΛΑΡΙΣΗΣ, ΓΕΡΑΚΑΡΙ ΛΑΡΙΣΗΣ, ΔΗΜΗΤΡΑ ΛΑΡΙΣΗΣ, ΕΛΑΦΟΣ ΛΑΡΙΣΗΣ, ΕΛΕΥΘΕΡΙ ΛΑΡΙΣΗΣ, ΙΣΙΩΜΑΤΑ ΛΑΡΙΣΗΣ, ΚΑΛΑΜΑΚΙ ΛΑΡΙΣΗΣ, ΚΑΣΤΡΙ ΛΑΡΙΣΗΣ, ΚΑΤΩ ΑΜΥΓΔΑΛΗ ΛΑΡΙΣΗΣ, ΚΑΤΩ ΠΟΛΥΔΕΝΔΡΙ ΛΑΡΙΣΗΣ, ΚΑΤΩ ΣΩΤΗΡΙΤΣΑ ΛΑΡΙΣΗΣ, ΚΟΚΚΙΝΟ ΝΕΡΟ ΜΕΛΙΒΟΙΑΣ ΛΑΡΙΣΗΣ, ΚΟΥΤΣΟΥΠΙΑ ΛΑΡΙΣΗΣ, ΜΑΡΜΑΡΙΝΗ ΛΑΡΙΣΗΣ, ΜΕΓΑΛΟΒΡΥΣΟ ΛΑΡΙΣΗΣ, ΜΕΛΙΒΟΙΑ ΛΑΡΙΣΗΣ, ΜΕΤΑΞΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΝΕΟΧΩΡΙ ΑΓΙΑΣ ΛΑΡΙΣΗΣ, ΝΕΡΟΜΥΛΟΙ ΛΑΡΙΣΗΣ, ΠΑΛΙΟΥΡΙΑ ΛΑΡΙΣΗΣ, ΠΟΤΑΜΙΑ ΛΑΡΙΣΗΣ, ΠΡΙΝΙΑΣ ΛΑΡΙΣΗΣ, ΡΑΚΟΠΟΤΑΜΟΣ ΛΑΡΙΣΗΣ, ΣΚΗΤΗ ΛΑΡΙΣΗΣ, ΣΚΛΗΘΡΟ ΛΑΡΙΣΗΣ, ΣΩΤΗΡΙΤΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40005', Area: 'ΑΜΠΕΛΙΑ ΛΑΡΙΣΗΣ, ΒΑΡΚΟΣ ΛΑΡΙΣΗΣ, ΒΕΡΔΙΚΟΥΣΣΑ ΛΑΡΙΣΗΣ, ΚΟΥΤΣΟΥΦΛΙΑΝΗ ΛΑΡΙΣΗΣ, ΠΑΛΙΑΜΠΕΛΑ ΛΑΡΙΣΗΣ, ΠΑΛΙΑΣΚΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40006', Area: 'ΑΚΡΙΝΟ ΛΑΡΙΣΗΣ, ΕΛΑΤΕΙΑ ΛΑΡΙΣΗΣ, ΚΑΛΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΚΟΡΑΚΑΣ ΛΑΡΙΣΗΣ, ΚΥΨΕΛΟΧΩΡΙΟ ΛΑΡΙΣΗΣ, ΜΑΚΡΥΧΩΡΙ ΛΑΡΙΣΗΣ, ΝΕΣΣΩΝ ΛΑΡΙΣΗΣ, ΟΣΣΑ ΛΑΡΙΣΗΣ, ΠΟΥΡΝΑΡΙ ΛΑΡΙΣΗΣ, ΣΠΗΛΙΑ ΛΑΡΙΣΗΣ, ΣΥΚΟΥΡΙ ΛΑΡΙΣΗΣ, ΧΕΙΜΑΔΙ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40010', Area: 'ΤΣΑΡΙΤΣΑΝΗ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40100', Area: 'ΑΝΩ ΑΡΓΥΡΟΠΟΥΛΕΙΟ ΛΑΡΙΣΗΣ, ΑΡΓΥΡΟΠΟΥΛΕΙΟ ΛΑΡΙΣΗΣ, ΒΛΑΧΟΓΙΑΝΝΙΟ ΛΑΡΙΣΗΣ, ΒΟΤΑΝΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΔΑΜΑΣΙΟ ΛΑΡΙΣΗΣ, ΔΑΜΑΣΟΥΛΙΟ ΛΑΡΙΣΗΣ, ΔΕΛΕΡΙΑ ΛΑΡΙΣΗΣ, ΚΡΙΤΗΡΙ ΛΑΡΙΣΗΣ, ΛΥΓΑΡΙΑ ΛΑΡΙΣΗΣ, ΜΕΓΑ ΕΛΕΥΘΕΡΟΧΩΡΙΟ ΛΑΡΙΣΗΣ, ΜΕΣΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΠΕΡΙΧΩΡΑ ΛΑΡΙΣΗΣ, ΡΟΔΙΑ ΛΑΡΙΣΗΣ, ΤΥΡΝΑΒΟΣ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40200', Area: 'ΑΓΙΟΝΕΡΟ ΛΑΡΙΣΗΣ, ΑΕΤΟΡΡΑΧΗ ΛΑΡΙΣΗΣ, ΑΖΩΡΟΣ ΒΟΥΒΑΛΑ ΛΑΡΙΣΗΣ, ΑΜΟΥΡΙΟ ΛΑΡΙΣΗΣ, ΑΣΠΡΟΧΩΜΑ ΛΑΡΙΣΗΣ, ΒΡΥΣΟΠΟΥΛΕΣ ΛΑΡΙΣΗΣ, ΓΑΛΑΝΟΒΡΥΣΗ ΛΑΡΙΣΗΣ, ΓΕΡΑΝΙΑ ΛΑΡΙΣΗΣ, ΓΙΑΝΝΩΤΑ ΛΑΡΙΣΗΣ, ΔΟΛΙΧΗ ΛΑΡΙΣΗΣ, ΔΟΜΕΝΙΚΟ ΛΑΡΙΣΗΣ, ΔΡΥΜΟΣ ΛΑΡΙΣΗΣ, ΕΛΑΣΣΟΝΑ ΛΑΡΙΣΗΣ, ΕΥΑΓΓΕΛΙΣΜΟΣ ΕΛΑΣΣΟΝΑΣ ΛΑΡΙΣΗΣ, ΙΕΡΑ ΜΟΝΗ ΣΠΑΡΜΟΥ ΛΑΡΙΣΗΣ, ΚΑΛΛΙΘΕΑ ΛΑΡΙΣΗΣ, ΚΑΛΥΒΙΑ ΑΝΑΛΗΨΕΩΣ ΛΑΡΙΣΗΣ, ΚΑΛΥΒΙΑ ΚΟΚΚΙΝΟΠΗΛΟΥ ΛΑΡΙΣΗΣ, ΚΑΡΥΑ ΛΑΡΙΣΗΣ, ΚΟΚΚΙΝΟΓΕΙΟ ΛΑΡΙΣΗΣ, ΚΟΚΚΙΝΟΠΗΛΟΣ ΛΑΡΙΣΗΣ, ΚΡΥΟΒΡΥΣΗ ΛΑΡΙΣΗΣ, ΛΕΥΚΗ ΛΑΡΙΣΗΣ, ΛΥΚΟΥΔΙ ΛΑΡΙΣΗΣ, ΜΑΓΟΥΛΑ ΛΑΡΙΣΗΣ, ΜΗΛΕΑ ΛΑΡΙΣΗΣ, ΜΙΚΡΟ ΕΛΕΥΘΕΡΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΟΛΥΜΠΙΑΔΑ ΛΑΡΙΣΗΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΛΑΡΙΣΗΣ, ΠΕΤΡΩΤΟ ΛΑΡΙΣΗΣ, ΠΡΑΙΤΩΡΙΟ ΛΑΡΙΣΗΣ, ΠΥΘΙΟ ΛΑΡΙΣΗΣ, ΣΑΡΑΝΤΑΠΟΡΟ ΛΑΡΙΣΗΣ, ΣΚΟΠΙΑ ΛΑΡΙΣΗΣ, ΣΠΑΡΜΟΣ ΛΑΡΙΣΗΣ, ΣΤΕΦΑΝΟΒΟΥΝΟ ΛΑΡΙΣΗΣ, ΣΥΚΑΜΙΝΕΑ ΛΑΡΙΣΗΣ, ΣΥΚΕΑ ΛΑΡΙΣΗΣ, ΣΥΚΙΑ ΛΑΡΙΣΗΣ, ΤΣΑΠΟΥΡΝΙΑ ΛΑΡΙΣΗΣ, ΦΑΡΜΑΚΗ ΛΑΡΙΣΗΣ, ΦΛΑΜΠΟΥΡΟ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40300', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΣΚΟΤΟΥΣΣΑΣ ΛΑΡΙΣΗΣ, ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΛΑΡΙΣΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΑΓΙΟΣ ΚΩΣΤΑΝΤΙΝΟΣ ΣΚΟΤΟΥΣΣΑΣ ΛΑΡΙΣΗΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΛΑΡΙΣΗΣ, ΑΜΠΕΛΕΙΑ ΛΑΡΙΣΗΣ, ΑΝΩ ΒΑΣΙΛΙΚΑ ΛΑΡΙΣΗΣ, ΑΝΩ ΣΚΟΤΟΥΣΑ ΛΑΡΙΣΗΣ, ΑΝΩΧΩΡΙ ΛΑΡΙΣΗΣ, ΑΡΓΙΘΕΑ ΛΑΡΙΣΗΣ, ΑΣΠΡΟΓΕΙΑ ΛΑΡΙΣΗΣ, ΑΥΡΑ ΛΑΡΙΣΗΣ, ΑΧΙΛΛΕΙΟ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΒΑΜΒΑΚΟΥ ΛΑΡΙΣΗΣ, ΒΑΣΙΛΗΣ ΛΑΡΙΣΗΣ, ΒΡΥΣΙΑ ΛΑΡΙΣΗΣ, ΔΑΣΟΛΟΦΟΣ ΛΑΡΙΣΗΣ, ΔΕΝΔΡΑ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΔΕΝΔΡΑΚΙ ΛΑΡΙΣΗΣ, ΔΕΝΔΡΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΔΙΛΟΦΟ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΕΛΛΗΝΙΚΟ ΛΑΡΙΣΗΣ, ΕΡΕΤΡΙΑ ΛΑΡΙΣΗΣ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΛΑΡΙΣΗΣ, ΘΕΤΙΔΙΟ ΛΑΡΙΣΗΣ, ΚΑΛΛΙΘΕΑ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΚΑΣΤΡΑΚΙ ΛΑΡΙΣΗΣ, ΚΑΤΩ ΒΑΣΙΛΙΚΑ ΛΑΡΙΣΗΣ, ΚΑΤΩ ΔΑΣΟΛΟΦΟΣ ΛΑΡΙΣΗΣ, ΚΑΤΩΧΩΡΙ ΛΑΡΙΣΗΣ, ΚΟΚΚΙΝΩ ΛΑΡΙΣΗΣ, ΚΡΗΝΗ ΛΑΡΙΣΗΣ, ΛΟΦΟΣ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΜΕΓΑ ΕΥΥΔΡΙΟ ΛΑΡΙΣΗΣ, ΝΑΡΘΑΚΙ ΛΑΡΙΣΗΣ, ΝΕΡΑΙΔΑ ΛΑΡΙΣΗΣ, ΞΥΛΑΔΕΣ ΛΑΡΙΣΗΣ, ΠΑΛΑΙΟΜΥΛΟΣ ΛΑΡΙΣΗΣ, ΠΛΑΤΑΝΟΣ ΚΑΛΛΙΘΕΑΣ ΛΑΡΙΣΗΣ, ΠΟΛΥΔΑΜΕΙΟ ΛΑΡΙΣΗΣ, ΠΟΛΥΝΕΡΙ ΛΑΡΙΣΗΣ, ΠΥΡΓΑΚΙΑ ΛΑΡΙΣΗΣ, ΡΕΥΜΑΤΙΑ ΛΑΡΙΣΗΣ, ΡΗΓΑΙΟ ΛΑΡΙΣΗΣ, ΡΥΖΙΟ ΛΑΡΙΣΗΣ, ΣΕΡΙΦΗΣ ΛΑΡΙΣΗΣ, ΣΙΤΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΣΚΟΤΟΥΣΣΑ ΛΑΡΙΣΗΣ, ΣΤΑΘΜΟΣ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΣΤΑΥΡΟΣ ΛΑΡΙΣΗΣ, ΥΠΕΡΕΙΑ ΛΑΡΙΣΗΣ, ΦΑΡΣΑΛΑ ΛΑΡΙΣΗΣ, ΧΑΙΔΑΡΙΑ ΛΑΡΙΣΗΣ, ΧΑΛΚΙΑΔΕΣ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '40400', Area: 'ΑΜΠΕΛΩΝΑΣ ΛΑΡΙΣΗΣ, ΒΡΥΟΤΟΠΟΣ ΛΑΡΙΣΗΣ, ΜΙΚΡΟΛΙΘΟΣ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41000', Area: 'ΛΑΡΙΣΣΑ', Prefecture: 'Λάρισας' },
    { PostalCode: '41005', Area: 'ΚΙΛΕΛΕΡ ΛΑΡΙΣΑΣ, ΛΑΡΙΣΑΙΩΝ ΛΑΡΙΣΑΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41221', Area: 'ΛΑΡΙΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41222', Area: 'ΛΑΡΙΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41223', Area: 'ΓΑΛΗΝΗ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41234', Area: 'ΛΑΡΙΣΑΙΩΝ ΛΑΡΙΣΑΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41236', Area: 'ΛΑΡΙΣΑΙΩΝ ΛΑΡΙΣΑΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41334', Area: 'ΛΑΡΙΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41335', Area: 'ΛΑΡΙΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41336', Area: 'ΛΑΡΙΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41435', Area: 'ΛΑΡΙΣΑΙΩΝ ΛΑΡΙΣΑΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41447', Area: 'ΛΑΡΙΣΑ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41448', Area: 'ΛΑΡΙΣΑΙΩΝ ΛΑΡΙΣΑΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '41500', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΥΠΑΡΙΣΣΟΥ ΛΑΡΙΣΗΣ, ΑΓΙΑ ΣΟΦΙΑ ΔΕΝΔΡΩΝ ΛΑΡΙΣΗΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΛΑΡΙΣΗΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΛΑΡΙΣΗΣ, ΑΓΝΑΝΤΕΡΗ ΛΑΡΙΣΗΣ, ΑΓΡΟΚΗΠΙΟ ΛΑΡΙΣΗΣ, ΑΜΥΓΔΑΛΕΑ ΛΑΡΙΣΗΣ, ΑΜΦΙΘΕΑ ΛΑΡΙΣΗΣ, ΑΝΑΓΕΝΝΗΣΙΣ ΛΑΡΙΣΗΣ, ΑΡΓΙΣΣΑ ΛΑΡΙΣΗΣ, ΑΡΓΥΡΟΜΥΛΟΣ ΛΑΡΙΣΗΣ, ΑΡΜΕΝΙΟ ΛΑΡΙΣΗΣ, ΑΧΙΛΛΕΙΟ ΛΑΡΙΣΗΣ, ΓΙΑΝΝΟΥΛΗ ΛΑΡΙΣΗΣ, ΓΛΑΥΚΗ ΛΑΡΙΣΗΣ, ΓΥΡΤΩΝΗ ΛΑΡΙΣΗΣ, ΔΕΝΔΡΑ ΤΥΡΝΑΒΟΥ ΛΑΡΙΣΗΣ, ΔΙΛΟΦΟ ΛΑΡΙΣΗΣ, ΔΟΞΑΡΑΣ ΛΑΡΙΣΗΣ, ΕΛΕΥΘΕΡΕΣ ΛΑΡΙΣΗΣ, ΖΑΠΠΕΙΟ ΛΑΡΙΣΗΣ, ΘΕΡΑΠΕΥΤΙΚΗ ΚΟΙΝΟΤΗΤΑ ΕΞΟΔΟΣ ΛΑΡΙΣΗΣ, ΚΑΛΟ ΝΕΡΟ ΛΑΡΙΣΗΣ, ΚΑΜΠΟΣ ΛΑΡΙΣΗΣ, ΚΑΣΤΡΟ ΛΑΡΙΣΗΣ, ΚΙΛΕΛΕΡ ΛΑΡΙΣΗΣ, ΚΟΙΛΑΔΑ ΛΑΡΙΣΗΣ, ΚΟΚΚΙΝΑ ΛΑΡΙΣΗΣ, ΚΟΥΛΟΥΡΙ ΛΑΡΙΣΗΣ, ΚΟΥΤΣΟΧΕΡΟ ΛΑΡΙΣΗΣ, ΚΡΑΝΝΩΝΑΣ ΛΑΡΙΣΗΣ, ΚΡΥΑ ΒΡΥΣΗ ΛΑΡΙΣΗΣ, ΚΥΠΑΡΙΣΣΙΑ ΛΑΡΙΣΗΣ, ΚΥΠΑΡΙΣΣΟΣ ΛΑΡΙΣΗΣ, ΛΟΥΤΡΟ ΛΑΡΙΣΗΣ, ΛΟΦΙΣΚΟΣ ΛΑΡΙΣΗΣ, ΜΑΝΔΡΑ ΛΑΡΙΣΗΣ, ΜΑΥΡΟΒΟΥΝΙΟ ΛΑΡΙΣΗΣ, ΜΕΓΑ ΜΟΝΑΣΤΗΡΙ ΛΑΡΙΣΗΣ, ΜΕΛΙΑ ΛΑΡΙΣΗΣ, ΜΕΛΙΣΣΑ ΛΑΡΙΣΗΣ, ΜΕΛΙΣΣΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΜΕΣΟΡΡΑΧΗ ΛΑΡΙΣΗΣ, ΜΙΚΡΟ ΒΟΥΝΟ ΛΑΡΙΣΗΣ, ΜΟΔΕΣΤΟΣ ΛΑΡΙΣΗΣ, ΜΟΣΧΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΜΥΡΑ ΛΑΡΙΣΗΣ, ΝΑΜΑΤΑ ΛΑΡΙΣΗΣ, ΝΕΑ ΛΕΥΚΗ ΛΑΡΙΣΗΣ, ΝΕΕΣ ΚΑΡΥΕΣ ΛΑΡΙΣΗΣ, ΝΕΟ ΠΕΡΙΒΟΛΙ ΛΑΡΙΣΗΣ, ΝΙΚΑΙΑ ΛΑΡΙΣΗΣ, ΝΙΚΗ ΛΑΡΙΣΗΣ, ΟΜΟΡΦΟΧΩΡΙ ΛΑΡΙΣΗΣ, ΠΛΑΤΑΝΟΥΛΙΑ ΛΑΡΙΣΗΣ, ΠΡΟΔΡΟΜΟΣ ΛΑΡΙΣΗΣ, ΡΑΧΟΥΛΑ ΛΑΡΙΣΗΣ, ΡΕΥΜΑ ΛΑΡΙΣΗΣ, ΣΟΦΟ ΛΑΡΙΣΗΣ, ΣΥΝΟΙΚΙΣΜΟΣ ΠΡΟΣΦΥΓΩΝ ΛΑΡΙΣΗΣ, ΣΩΤΗΡΙΟ ΛΑΡΙΣΗΣ, ΤΕΡΨΙΘΕΑ ΛΑΡΙΣΗΣ, ΧΑΛΚΗ ΛΑΡΙΣΗΣ, ΧΑΡΑ ΛΑΡΙΣΗΣ, ΧΑΣΑΜΠΑΛΗ ΛΑΡΙΣΗΣ, ΨΥΧΙΚΟ ΛΑΡΙΣΗΣ', Prefecture: 'Λάρισας' },
    { PostalCode: '72052', Area: 'ΑΒΡΑΚΟΝΤΕΣ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΛΑΣΙΘΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΛΑΣΙΘΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΗΡΑΚΛΕΙΟΥ, ΑΡΓΥΡΟ ΝΕΡΟ ΗΡΑΚΛΕΙΟΥ, ΕΞΩ ΠΟΤΑΜΟΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΜΙΝΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΩ ΜΕΤΟΧΙ ΗΡΑΚΛΕΙΟΥ, ΛΑΓΟΥ ΗΡΑΚΛΕΙΟΥ, ΜΑΓΟΥΛΑΣ ΗΡΑΚΛΕΙΟΥ, ΜΑΡΜΑΚΕΤΟ ΗΡΑΚΛΕΙΟΥ, ΜΕΣΑ ΛΑΣΙΘΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΜΕΣΑ ΛΑΣΙΘΙ ΗΡΑΚΛΕΙΟΥ, ΜΕΣΑ ΠΟΤΑΜΟΙ ΗΡΑΚΛΕΙΟΥ, ΜΟΝΗ ΚΡΥΣΤΑΛΛΕΝΙΑΣ ΗΡΑΚΛΕΙΟΥ, ΠΙΝΑΚΙΑΝΟ ΗΡΑΚΛΕΙΟΥ, ΠΛΑΤΗ ΗΡΑΚΛΕΙΟΥ, ΡΟΥΣΣΑΚΙΑΝΑ ΗΡΑΚΛΕΙΟΥ, ΤΖΕΡΜΙΑΔΟ ΗΡΑΚΛΕΙΟΥ, ΦΑΡΣΑΡΟ ΗΡΑΚΛΕΙΟΥ, ΨΥΧΡΟ ΗΡΑΚΛΕΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '72053', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΛΑΣΙΘΙΟΥ, ΒΑΛΤΟΣ ΛΑΣΙΘΙΟΥ, ΒΛΙΧΑΔΙΑ ΛΑΣΙΘΙΟΥ, ΒΡΟΥΧΑΣ ΛΑΣΙΘΙΟΥ, ΕΛΟΥΝΤΑ ΕΠΑΝΩ ΛΑΣΙΘΙΟΥ, ΕΛΟΥΝΤΑ ΚΑΤΩ ΛΑΣΙΘΙΟΥ, ΕΛΟΥΝΤΑΣ ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΛΑΣΙΘΙΟΥ, ΕΠΑΝΩ ΛΟΥΜΑΣ ΛΑΣΙΘΙΟΥ, ΕΠΑΝΩ ΠΙΝΕΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΛΟΥΜΑΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΠΙΝΕΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΣΕΛΛΕΣ ΛΑΣΙΘΙΟΥ, ΜΑΥΡΙΚΙΑΝΟ ΛΑΣΙΘΙΟΥ, ΜΥΡΩΝΙΚΗΤΑΣ ΛΑΣΙΘΙΟΥ, ΠΛΑΚΑ ΛΑΣΙΘΙΟΥ, ΣΕΛΛΕΣ ΛΑΣΙΘΙΟΥ, ΣΚΙΝΙΑΣ ΛΑΣΙΘΙΟΥ, ΣΧΙΣΜΑ ΕΛΟΥΝΤΑΣ ΛΑΣΙΘΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '72055', Area: 'ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΟΡΕΙΝΟΥ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΛΑΣΙΘΙΟΥ, ΑΝΑΛΗΨΗ ΛΑΣΙΘΙΟΥ, ΑΝΔΡΙΑΝΟΣ ΛΑΣΙΘΙΟΥ, ΑΣΠΡΟΣ ΠΟΤΑΜΟΣ ΛΑΣΙΘΙΟΥ, ΑΧΛΙΑ ΛΑΣΙΘΙΟΥ, ΓΑΛΗΝΗ ΛΑΣΙΘΙΟΥ, ΔΑΦΝΗ ΛΑΣΙΘΙΟΥ, ΕΠΑΝΩ ΚΡΥΑ ΛΑΣΙΘΙΟΥ, ΚΑΛΥΒΙΤΗΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΚΡΥΑ ΛΑΣΙΘΙΟΥ, ΚΟΥΤΣΟΥΡΑΣ ΛΑΣΙΘΙΟΥ, ΛΑΠΙΘΟΣ ΛΑΣΙΘΙΟΥ, ΜΑΚΡΥΓΙΑΛΟΣ ΛΑΣΙΘΙΟΥ, ΜΑΥΡΟΣ ΚΟΛΥΜΠΟΣ ΛΑΣΙΘΙΟΥ, ΜΠΕΜΠΟΝΑΣ ΛΑΣΙΘΙΟΥ, ΟΡΕΙΝΟ ΛΑΣΙΘΙΟΥ, ΠΕΥΚΟΙ ΛΑΣΙΘΙΟΥ, ΠΙΛΑΛΗΜΑΤΑ ΛΑΣΙΘΙΟΥ, ΡΙΖΑ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΣΚΟΡΔΙΛΟ ΛΑΣΙΘΙΟΥ, ΣΤΑΥΡΟΧΩΡΙ ΛΑΣΙΘΙΟΥ, ΣΧΙΝΟΚΑΨΑΛΑ ΛΑΣΙΘΙΟΥ, ΤΣΙΚΚΑΛΑΡΙΑ ΛΑΣΙΘΙΟΥ, ΧΡΥΣΟΠΗΓΗ ΛΑΣΙΘΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '72100', Area: 'ΑΓΙΟΙ ΠΑΝΤΕΣ ΝΗΣΟΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΛΑΣΙΘΙΟΥ, ΑΜΜΟΥΔΑΡΑ ΑΓ.ΝΙΚΟΛΑΟΥ ΛΑΣΙΘΙΟΥ, ΒΑΘΥ ΛΑΣΙΘΙΟΥ, ΒΛΑΧΗΔΕΣ ΛΑΣΙΘΙΟΥ, ΒΡΥΟΝΗΣΙ ΛΑΣΙΘΙΟΥ, ΕΛΛΗΝΙΚΑ ΛΑΣΙΘΙΟΥ, ΕΞΩ ΛΑΚΚΩΝΙΑ ΛΑΣΙΘΙΟΥ, ΘΕΟΛΟΓΟΣ ΛΑΣΙΘΙΟΥ, ΙΣΤΡΟ ΛΑΣΙΘΙΟΥ, ΚΑΚΟΚΑΜΩΤΕΣ ΛΑΣΙΘΙΟΥ, ΚΑΛΟ ΧΩΡΙΟ ΑΓ.ΝΙΚΟΛΑΟΥ ΛΑΣΙΘΙΟΥ, ΚΑΛΟ ΧΩΡΙΟ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΚΑΛΥΒΟΣ ΛΑΣΙΘΙΟΥ, ΚΑΣΤΕΛΙ ΦΟΥΡΝΗΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΣΙΚΙΑ ΛΑΣΙΘΙΟΥ, ΚΕΡΤΕΡΗΔΕΣ ΛΑΣΙΘΙΟΥ, ΚΡΟΥΣΤΑΣ ΛΑΣΙΘΙΟΥ, ΜΑΡΓΙΕΛΙ ΛΑΣΙΘΙΟΥ, ΜΑΡΔΑΤΙ ΛΑΣΙΘΙΟΥ, ΜΑΡΝΕΛΛΗΔΕΣ ΛΑΣΙΘΙΟΥ, ΜΙΚΡΟΝΗΣΙ ΛΑΣΙΘΙΟΥ, ΞΗΡΟΚΑΜΠΟΣ ΑΓ.ΝΙΚΟΛΑΟΥ ΛΑΣΙΘΙΟΥ, ΠΕΠΟΝΗΔΕΣ ΛΑΣΙΘΙΟΥ, ΠΙΣΣΙΔΟΣ ΛΑΣΙΘΙΟΥ, ΠΡΙΝΑ ΛΑΣΙΘΙΟΥ, ΠΥΡΓΟΣ ΚΑΛΟΥ ΧΩΡΙΟΥ ΛΑΣΙΘΙΟΥ, ΡΟΥΣΑ ΛΙΜΝΗ ΛΑΣΙΘΙΟΥ, ΣΧΙΣΜΑ ΛΑΣΙΘΙΟΥ, ΤΑΠΕΣ ΛΑΣΙΘΙΟΥ, ΦΙΟΡΕΤΖΙΔΕΣ ΛΑΣΙΘΙΟΥ, ΦΛΑΜΟΥΡΙΑΝΑ ΛΑΣΙΘΙΟΥ, ΦΟΡΤΙ ΛΑΣΙΘΙΟΥ, ΧΑΜΗΛΟ ΛΑΣΙΘΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '72200', Area: 'ΑΓΙΑ ΦΩΤΙΑ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΑ ΦΩΤΙΑ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΑΣΜΕΝΟΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΑΜΜΟΥΔΑΡΕΣ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΑΝΑΤΟΛΗ ΛΑΣΙΘΙΟΥ, ΒΑΙΝΙΑ ΛΑΣΙΘΙΟΥ, ΒΑΣΙΛΙΚΗ ΛΑΣΙΘΙΟΥ, ΓΑΒΡΙΛΗΣ ΛΑΣΙΘΙΟΥ, ΓΡΑ ΛΥΓΙΑ ΛΑΣΙΘΙΟΥ, ΔΡΑΚΑΛΕΥΡΙΟ ΛΑΣΙΘΙΟΥ, ΘΡΥΠΤΗ ΛΑΣΙΘΙΟΥ, ΙΕΡΑ ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΕΞΑΚΟΥΣΤΗΣ ΛΑΣΙΘΙΟΥ, ΙΕΡΑ ΜΟΝΗ ΦΑΝΕΡΩΜΕΝΗΣ ΛΑΣΙΘΙΟΥ, ΙΕΡΑΠΕΤΡΑ ΛΑΣΙΘΙΟΥ, ΚΑΒΟΥΣΙΟ ΛΑΣΙΘΙΟΥ, ΚΑΗΜΕΝΟΣ ΛΑΣΙΘΙΟΥ, ΚΑΛΑΜΑΥΚΑ ΛΑΣΙΘΙΟΥ, ΚΑΛΛΙΘΕΑ ΛΑΣΙΘΙΟΥ, ΚΑΛΟΓΕΡΟΙ ΛΑΣΙΘΙΟΥ, ΚΑΜΑΡΑ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΚΑΜΠΟΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΧΩΡΙΟ ΛΑΣΙΘΙΟΥ, ΚΕΝΤΡΙ ΛΑΣΙΘΙΟΥ, ΚΕΦΑΛΑ ΛΑΣΙΘΙΟΥ, ΚΟΥΤΣΟΥΝΑΡΙ ΛΑΣΙΘΙΟΥ, ΜΑΚΡΥΛΙΑ ΛΑΣΙΘΙΟΥ, ΜΕΛΙΣΣΕΣ ΛΑΣΙΘΙΟΥ, ΜΕΣΕΛΕΡΟΙ ΛΑΣΙΘΙΟΥ, ΜΟΝΑΣΤΗΡΑΚΙ ΛΑΣΙΘΙΟΥ, ΝΕΑ ΑΝΑΤΟΛΗ ΛΑΣΙΘΙΟΥ, ΞΗΡΟΚΑΜΠΟΣ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΟΡΝΙΑΣ ΛΑΣΙΘΙΟΥ, ΠΑΝΑΓΙΑ ΚΑΒΟΥΣΙΟΥ ΛΑΣΙΘΙΟΥ, ΠΑΝΩ ΧΩΡΙΟ ΛΑΣΙΘΙΟΥ, ΠΑΧΕΙΑ ΑΜΜΟΣ ΛΑΣΙΘΙΟΥ, ΠΟΤΑΜΟΙ ΛΑΣΙΘΙΟΥ, ΡΙΖΑ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΣΑΡΑΤΣΙ ΚΑΜΠΟΣ ΛΑΣΙΘΙΟΥ, ΣΤΑΥΡΟΣ ΛΑΣΙΘΙΟΥ, ΣΤΟΜΙΟ ΛΑΣΙΘΙΟΥ, ΣΥΚΙΑ ΙΕΡΑΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΣΦΑΚΟΥΡΑ ΛΑΣΙΘΙΟΥ, ΤΣΑΜΑΝΤΗΣ ΛΑΣΙΘΙΟΥ, ΦΕΡΜΑ ΛΑΣΙΘΙΟΥ, ΧΡΥΣΗ ΝΗΣΟΣ ΛΑΣΙΘΙΟΥ, ΨΑΘΙ ΛΑΣΙΘΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '72300', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΖΑΚΡΟΥ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΑΓΚΑΘΙΑ ΛΑΣΙΘΙΟΥ, ΑΔΡΑΒΑΣΤΟΙ ΛΑΣΙΘΙΟΥ, ΑΖΟΚΕΡΑΜΟΣ ΛΑΣΙΘΙΟΥ, ΑΝΕΜΟΜΥΛΙΑ ΛΑΣΙΘΙΟΥ, ΑΡΝΙΚΟ ΛΑΣΙΘΙΟΥ, ΑΧΛΑΔΙΑ ΛΑΣΙΘΙΟΥ, ΒΙΓΛΑ ΛΑΣΙΘΙΟΥ, ΒΡΥΣΙΔΙ ΛΑΣΙΘΙΟΥ, ΓΙΑΝΥΣΑΔΑ ΛΑΣΙΘΙΟΥ, ΔΙΟΝΥΣΟΣ ΛΑΣΙΘΙΟΥ, ΔΡΑΓΟΝΑΔΑ ΛΑΣΙΘΙΟΥ, ΖΑΚΡΟΣ ΛΑΣΙΘΙΟΥ, ΖΟΥ ΛΑΣΙΘΙΟΥ, ΚΑΜΑΡΑ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΚΑΡΥΔΙ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΔΡΥΣ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΕΠΙΣΚΟΠΗ ΛΑΣΙΘΙΟΥ, ΚΑΤΩ ΖΑΚΡΟΣ ΛΑΣΙΘΙΟΥ, ΚΕΛΛΑΡΙΑ ΛΑΣΙΘΙΟΥ, ΚΙΜΟΥΡΙΩΤΗΣ ΛΑΣΙΘΙΟΥ, ΚΛΗΣΙΔΙ ΛΑΣΙΘΙΟΥ, ΚΟΥΡΕΜΕΝΟΣ ΛΑΣΙΘΙΟΥ, ΚΡΥΟΝΕΡΙ ΛΑΣΙΘΙΟΥ, ΚΥΡΙΑΜΑΔΙ ΛΑΣΙΘΙΟΥ, ΛΑΓΚΑΔΑ ΚΑΡΥΔΙΟΥ ΛΑΣΙΘΙΟΥ, ΛΑΓΚΑΔΑ ΛΙΘΙΝΩΝ ΛΑΣΙΘΙΟΥ, ΛΥΔΙΑ ΛΑΣΙΘΙΟΥ, ΜΑΡΩΝΙΑ ΛΑΣΙΘΙΟΥ, ΜΕΡΤΥΔΙΑ ΛΑΣΙΘΙΟΥ, ΜΗΤΑΤΟ ΛΑΣΙΘΙΟΥ, ΞΕΡΟΚΑΜΠΙΑΣ ΙΤΑΝΟΥ ΛΑΣΙΘΙΟΥ, ΞΗΡΟΛΙΜΝΗ ΣΗΤΕΙΑΣ ΛΑΣΙΘΙΟΥ, ΠΑΛΑΙΚΑΣΤΡΟ ΛΑΣΙΘΙΟΥ, ΠΑΝΑΓΙΑ ΦΑΝΕΡΩΜΕΝΗ ΛΑΣΙΘΙΟΥ, ΠΑΞΙΜΑΔΑ ΛΑΣΙΘΙΟΥ, ΠΑΡΑΣΠΟΡΙΟ ΛΑΣΙΘΙΟΥ, ΠΕΤΡΑΣ ΛΑΣΙΘΙΟΥ, ΠΙΣΚΟΚΕΦΑΛΟ ΛΑΣΙΘΙΟΥ, ΡΟΥΣΣΑ ΕΚΚΛΗΣΙΑ ΛΑΣΙΘΙΟΥ, ΣΑΡΑΝΤΑΠΗΧΟΣ ΛΑΣΙΘΙΟΥ, ΣΗΤΕΙΑ ΛΑΣΙΘΙΟΥ, ΣΚΟΠΗ ΛΑΣΙΘΙΟΥ, ΣΤΑΥΡΩΜΕΝΟΣ ΛΑΣΙΘΙΟΥ, ΣΦΑΚΑ ΙΤΑΝΟΥ ΛΑΣΙΘΙΟΥ, ΤΟΠΛΟΥ ΛΑΣΙΘΙΟΥ, ΤΡΥΠΗΤΟΣ ΛΑΣΙΘΙΟΥ, ΧΑΜΕΖΙΟ ΛΑΣΙΘΙΟΥ, ΧΙΩΝΑ ΛΑΣΙΘΙΟΥ, ΧΟΧΛΑΚΙΕΣ ΛΑΣΙΘΙΟΥ, ΧΩΝΟΣ ΛΑΣΙΘΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '72400', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΛΑΣΙΘΙΟΥ, ΑΓΙΑ ΠΕΛΑΓΙΑ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΛΙΜΝΩΝ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΝΕΑΠΟΛΗΣ ΛΑΣΙΘΙΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΝΕΑΠΟΛΕΩΣ ΛΑΣΙΘΙΟΥ, ΑΓΟΡΟΙ ΛΑΣΙΘΙΟΥ, ΑΔΡΑΒΑΣΤΟΣ ΛΑΣΙΘΙΟΥ, ΑΔΡΙΑΝΟΣ ΛΑΣΙΘΙΟΥ, ΑΜΥΓΔΑΛΕΑ ΛΑΣΙΘΙΟΥ, ΑΜΥΓΔΑΛΟΙ ΛΑΣΙΘΙΟΥ, ΑΜΥΓΔΑΛΟΛΑΚΚΟΣ ΛΑΣΙΘΙΟΥ, ΑΝΩ ΑΜΥΓΔΑΛΟΙ ΛΑΣΙΘΙΟΥ, ΑΝΩΓΕΙΑ ΛΑΣΙΘΙΟΥ, ΑΥΓΟ ΛΑΣΙΘΙΟΥ, ΒΟΥΛΙΣΜΕΝΗ ΛΑΣΙΘΙΟΥ, ΒΡΥΣΕΣ ΛΑΣΙΘΙΟΥ, ΓΙΟΦΥΡΙ ΛΑΣΙΘΙΟΥ, ΔΙΛΑΚΚΟΣ ΛΑΣΙΘΙΟΥ, ΔΟΡΙΕΣ ΛΑΣΙΘΙΟΥ, ΔΡΑΚΟΣ ΛΑΣΙΘΙΟΥ, ΔΡΑΣΙ ΛΑΣΙΘΙΟΥ, ΔΥΟ ΠΡΙΝΟΙ ΛΑΣΙΘΙΟΥ, ΕΠΑΝΩ ΣΙΣΙΟ ΛΑΣΙΘΙΟΥ, ΖΕΝΙΑ ΛΑΣΙΘΙΟΥ, ΖΟΥΡΒΑ ΛΑΣΙΘΙΟΥ, ΚΑΛΟΣ ΛΑΚΚΟΣ ΑΓ.ΝΙΚΟΛΑΟΥ ΛΑΣΙΘΙΟΥ, ΚΑΡΤΣΙΝΙΑΝΟΣ ΛΑΣΙΘΙΟΥ, ΚΑΡΥΔΙ ΝΕΑΠΟΛΗΣ ΛΑΣΙΘΙΟΥ, ΚΟΥΔΟΥΜΑΛΟΣ ΛΑΣΙΘΙΟΥ, ΚΟΥΝΑΛΙ ΛΑΣΙΘΙΟΥ, ΚΟΥΡΟΥΝΕΣ ΛΑΣΙΘΙΟΥ, ΛΑΤΣΙΔΑ ΛΑΣΙΘΙΟΥ, ΛΙΜΝΕΣ ΛΑΣΙΘΙΟΥ, ΜΑΚΡΥΓΕΝΝΗΣΑ ΛΑΣΙΘΙΟΥ, ΜΙΛΑΤΟΣ ΛΑΣΙΘΙΟΥ, ΜΟΝΗ ΑΡΕΤΙΟΥ ΛΑΣΙΘΙΟΥ, ΝΕΑΠΟΛΗ ΛΑΣΙΘΙΟΥ, ΝΙΚΗΘΙΑΝΟΣ ΛΑΣΙΘΙΟΥ, ΝΙΣΠΗΤΑΣ ΛΑΣΙΘΙΟΥ, ΝΟΦΑΛΙΑΣ ΛΑΣΙΘΙΟΥ, ΞΕΡΑ ΞΥΛΑ ΛΑΣΙΘΙΟΥ, ΞΗΡΟΛΙΜΝΗ ΝΕΑΠΟΛΗΣ ΛΑΣΙΘΙΟΥ, ΠΑΡΑΛΙΑ ΜΙΛΑΤΟΥ ΛΑΣΙΘΙΟΥ, ΠΑΤΣΟΠΟΥΛΟΣ ΛΑΣΙΘΙΟΥ, ΠΕΡΑΜΠΕΛΑ ΛΑΣΙΘΙΟΥ, ΠΕΡΟΝΙΔΕΣ ΛΑΣΙΘΙΟΥ, ΠΕΤΡΟΣ ΛΑΣΙΘΙΟΥ, ΠΛΑΤΥΠΟΔΙ ΛΑΣΙΘΙΟΥ, ΠΥΡΓΟΣ ΒΡΑΧΑΣΙΟΥ ΛΑΣΙΘΙΟΥ, ΡΟΥΣΣΑΠΙΔΙΑ ΛΑΣΙΘΙΟΥ, ΡΩΜΑΝΟΣ ΛΑΣΙΘΙΟΥ, ΣΕΛΗΝΑΡΙ ΛΑΣΙΘΙΟΥ, ΣΙΣΙΟ ΛΑΣΙΘΙΟΥ, ΣΟΥΒΛΟΣ ΛΑΣΙΘΙΟΥ, ΣΥΡΜΕΣΟ ΛΑΣΙΘΙΟΥ, ΤΣΑΜΠΙΟ ΛΑΣΙΘΙΟΥ, ΦΙΝΟΚΑΛΙΑ ΛΑΣΙΘΙΟΥ, ΦΡΑΘΙΑΣ ΛΑΣΙΘΙΟΥ, ΧΑΥΓΑΣ ΛΑΣΙΘΙΟΥ, ΧΟΝΔΡΟΒΟΛΑΚΟΙ ΛΑΣΙΘΙΟΥ, ΧΟΥΜΕΡΙΑΚΟΣ ΛΑΣΙΘΙΟΥ', Prefecture: 'Λασιθίου' },
    { PostalCode: '81100', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΛΕΣΒΟΥ, ΑΓΙΑ ΤΡΙΑΔΑ ΑΦΑΛΩΝΑ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΛΟΥΤΡΟΠΟΛΕΩΣ ΛΕΣΒΟΥ, ΑΓΡΙΛΙΑ ΚΡΑΤΗΓΟΥ ΛΕΣΒΟΥ, ΑΛΥΦΑΝΤΑ ΛΕΣΒΟΥ, ΑΝΩ ΧΑΡΑΜΙΔΑ ΛΕΣΒΟΥ, ΑΦΑΛΩΝΑΣ ΛΕΣΒΟΥ, ΑΧΛΙΑ ΛΕΣΒΟΥ, ΒΑΡΕΙΑ ΛΕΣΒΟΥ, ΘΕΡΜΗ ΛΕΣΒΟΥ, ΚΕΔΡΟ ΛΕΣΒΟΥ, ΚΟΥΜΙΚΟ ΛΕΣΒΟΥ, ΚΟΥΝΤΟΥΡΟΥΔΙΑ ΛΕΣΒΟΥ, ΚΡΑΤΗΓΟΣ ΛΕΣΒΟΥ, ΚΩΜΗ ΛΕΣΒΟΥ, ΛΑΡΙΣΟΣ (ή ΛΑΡΣΟΣ) ΛΕΣΒΟΥ, ΛΟΥΤΡΑ ΘΕΡΜΗΣ ΛΕΣΒΟΥ, ΛΟΥΤΡΑ ΛΕΣΒΟΥ, ΛΟΥΤΡΟΠΟΛΗ ΘΕΡΜΗΣ ΛΕΣΒΟΥ, ΜΑΡΜΑΡΟ ΜΟΡΙΑΣ ΛΕΣΒΟΥ, ΜΙΣΤΕΓΝΑ ΛΕΣΒΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΡΑΦΑΗΛ ΛΕΣΒΟΥ, ΜΟΡΙΑ ΛΕΣΒΟΥ, ΜΥΤΙΛΗΝΗ ΛΕΣΒΟΥ, ΝΕΑΠΟΛΗ ΛΕΣΒΟΥ, ΝΕΕΣ ΚΥΔΩΝΙΕΣ ΛΕΣΒΟΥ, ΝΗΣΕΛΙΑ ΛΕΣΒΟΥ, ΞΑΜΠΕΛΙΑ ΛΕΣΒΟΥ, ΟΥΤΖΑ ΛΕΣΒΟΥ, ΠΑΜΦΙΛΑ ΛΕΣΒΟΥ, ΠΑΝΑΓΙΑ ΛΕΣΒΟΥ, ΠΑΝΑΓΙΟΥΔΑ ΛΕΣΒΟΥ, ΠΑΡΑΛΙΑ ΘΕΡΜΗΣ ΛΕΣΒΟΥ, ΠΑΡΑΛΙΑ ΛΕΣΒΟΥ, ΠΗΓΗ ΛΕΣΒΟΥ, ΠΛΙΓΟΝΙ ΛΕΣΒΟΥ, ΠΥΡΓΙ ΛΕΣΒΟΥ, ΠΥΡΓΟΙ ΘΕΡΜΗΣ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΛΟΥΤΡΩΝ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΜΙΣΤΕΓΝΩΝ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΝΕΩΝ ΚΥΔΩΝΙΩΝ ΛΕΣΒΟΥ, ΤΑΞΙΑΡΧΕΣ ΜΥΤΙΛΗΝΗΣ ΛΕΣΒΟΥ, ΤΟΥΜΠΕΣ ΛΕΣΒΟΥ, ΦΥΛΑΚΙΟ ΠΡΟΒΟΣΚΙΔΑ ΛΕΣΒΟΥ, ΧΑΡΑΜΙΔΑ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81101', Area: 'ΑΓΙΑΣΟΣ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΕΥΕΡΓΕΤΟΥΛΑΣ ΛΕΣΒΟΥ, ΑΣΩΜΑΤΟΣ ΛΕΣΒΟΥ, ΓΙΑΛΟΥ ΠΗΓΑΔΙ ΛΕΣΒΟΥ, ΙΠΠΕΙΟ ΛΕΣΒΟΥ, ΚΑΓΙΑΝΙ ΛΕΣΒΟΥ, ΚΑΡΗΝΗ ΛΕΣΒΟΥ, ΚΕΡΑΜΕΙΑ ΛΕΣΒΟΥ, ΛΑΜΠΟΥ ΜΥΛΟΙ ΛΕΣΒΟΥ, ΛΑΡΣΟΣ ΕΥΕΡΓΕΤΟΥΛΑΣ ΛΕΣΒΟΥ, ΜΕΓΑΛΗ ΛΙΜΝΗ ΛΕΣΒΟΥ, ΝΤΙΠΙ ΣΥΚΟΥΝΤΑΣ ΛΕΣΒΟΥ, ΣΑΝΑΤΟΡΙΟ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΣΥΚΟΥΝΤΟΣ ΛΕΣΒΟΥ, ΣΥΚΟΥΝΤΑ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81102', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ (ΑΓΙΑΣ ΠΑΡΑΣΚΕΥΗΣ) ΛΕΣΒΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΜΥΤΙΛΗΝΗΣ ΛΕΣΒΟΥ, ΚΑΝΤΡΙ ΛΕΣΒΟΥ, ΜΕΣΑ ΛΕΣΒΟΥ, ΝΑΠΗ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81103', Area: 'ΑΝΤΙΣΣΑ ΛΕΣΒΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΙΩΑΝΝΟΥ ΘΕΟΛΟΓΟΥ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81104', Area: 'ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΛΕΣΒΟΥ, ΑΣΠΡΗ ΠΛΑΚΟΥΔΑ ΛΕΣΒΟΥ, ΑΣΠΡΟΝΗΣΙΑ ΛΕΣΒΟΥ, ΑΣΠΡΟΠΟΤΑΜΟΣ ΛΕΣΒΟΥ, ΚΑΠΗ ΛΕΣΒΟΥ, ΚΛΕΙΩ ΛΕΣΒΟΥ, ΛΑΓΚΑΔΑ ΜΑΝΤΑΜΑΔΟΥ ΛΕΣΒΟΥ, ΛΙΜΑΝΙ ΚΑΠΗΣ ΛΕΣΒΟΥ, ΜΑΝΤΑΜΑΔΟΣ ΛΕΣΒΟΥ, ΜΑΥΡΗ ΠΛΑΚΟΥΔΑ ΛΕΣΒΟΥ, ΜΠΑΡΜΠΑΛΙΑΣ ΛΕΣΒΟΥ, ΠΑΛΙΟΣ ΛΕΣΒΟΥ, ΠΑΝΑΓΙΑ ΜΑΝΤΑΜΑΔΟΥ ΛΕΣΒΟΥ, ΠΕΔΗ ΛΕΣΒΟΥ, ΠΕΛΟΠΗ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΣΥΚΑΜΙΝΕΑΣ ΛΕΣΒΟΥ, ΣΥΚΑΜΙΝΕΑ ΛΕΣΒΟΥ, ΤΑΞΙΑΡΧΕΣ ΜΑΝΤΑΜΑΔΟΥ ΛΕΣΒΟΥ, ΤΣΟΝΙΑ ΛΕΣΒΟΥ, ΤΣΟΥΚΑΛΑΣ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81105', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΗΣΟΣ ΛΕΣΒΟΥ, ΑΓΡΑ ΛΕΣΒΟΥ, ΑΠΟΘΗΚΕΣ ΑΓΡΑΣ ΛΕΣΒΟΥ, ΕΡΕΣΟΣ ΛΕΣΒΟΥ, ΛΥΓΕΡΗ ΛΕΣΒΟΥ, ΜΕΣΟΤΟΠΟΣ ΛΕΣΒΟΥ, ΠΟΔΑΡΑΣ ΛΕΣΒΟΥ, ΠΟΧΗΣ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΕΡΕΣΟΥ ΛΕΣΒΟΥ, ΤΑΒΑΡΙ ΛΕΣΒΟΥ, ΧΛΙΑΡΑ ΕΡΕΣΟΥ ΛΕΣΒΟΥ, ΧΡΙΣΤΟΣ ΕΡΕΣΟΥ ΛΕΣΒΟΥ, ΧΡΟΥΣΟΣ ΕΡΕΣΟΥ ΛΕΣΒΟΥ, ΨΙΝΙΑ ΕΡΕΣΟΥ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81106', Area: 'ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΛΕΣΒΟΥ, ΑΓΛΕΦΥΡΟΣ ΛΕΣΒΟΥ, ΑΠΗΔΙΑ ΛΕΣΒΟΥ, ΑΥΛΩΝΑΣ ΛΕΣΒΟΥ, ΓΕΡΑΝΙΑ ΛΕΣΒΟΥ, ΕΥΡΕΙΑΚΗ ΛΕΣΒΟΥ, ΚΑΡΙΩΝΑΣ ΛΕΣΒΟΥ, ΚΑΤΩ ΤΡΙΤΟΣ ΛΕΣΒΟΥ, ΚΟΥΦΟ ΒΟΥΝΟ ΛΕΣΒΟΥ, ΛΑΓΚΑΔΑ ΣΚΟΠΕΛΟΥ ΛΕΣΒΟΥ, ΛΙΓΟΝΑΡΙ ΛΕΣΒΟΥ, ΜΑΡΜΑΡΟ ΠΑΠΠΑΔΟΥ ΛΕΣΒΟΥ, ΜΕΣΑΓΡΟΣ ΛΕΣΒΟΥ, ΜΥΧΟΣ ΛΕΣΒΟΥ, ΠΑΛΑΙΟΚΗΠΟΣ ΛΕΣΒΟΥ, ΠΑΠΠΑΔΟΣ ΛΕΣΒΟΥ, ΠΗΓΑΔΑΚΙΑ ΛΕΣΒΟΥ, ΠΛΑΚΑΔΟΣ ΛΕΣΒΟΥ, ΠΥΡΓΟΙ ΜΕΣΑΓΡΟΥ ΛΕΣΒΟΥ, ΣΚΟΠΕΛΟΣ ΛΕΣΒΟΥ, ΤΑΡΤΙ ΛΕΣΒΟΥ, ΤΣΑΦΙ ΛΕΣΒΟΥ, ΤΣΙΛΙΑ ΛΕΣΒΟΥ, ΦΑΡΑ ΛΕΣΒΟΥ, ΦΤΕΛΙ ΛΕΣΒΟΥ, ΧΑΛΑΤΣΕΣ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81107', Area: 'ΑΡΙΣΒΗ ΛΕΣΒΟΥ, ΔΑΦΙΑ ΛΕΣΒΟΥ, ΙΕΡΑ ΜΟΝΗ ΛΕΙΜΩΝΟΣ ΛΕΣΒΟΥ, ΚΑΛΛΟΝΗ ΛΕΣΒΟΥ, ΚΕΡΑΜΙ ΛΕΣΒΟΥ, ΚΕΧΡΑΔΑ ΛΕΣΒΟΥ, ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΜΥΡΣΙΝ. ΛΕΙΜΩΝΟΣ ΛΕΣΒΟΥ, ΜΠΑΛΙΝΗ ΛΕΣΒΟΥ, ΠΑΡΑΚΟΙΛΑ ΛΕΣΒΟΥ, ΠΕΤΣΟΦΑΣ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΚΑΛΛΟΝΗΣ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81108', Area: 'ΑΡΓΕΝΝΟΣ ΛΕΣΒΟΥ, ΒΑΦΕΙΟΣ ΛΕΣΒΟΥ, ΕΥΘΑΛΟΥ ΛΕΣΒΟΥ, ΛΕΠΕΤΥΜΝΟΣ ΛΕΣΒΟΥ, ΜΗΘΥΜΝΑ (ΜΟΛΥΒΟΣ) ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81109', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΜΗΘΥΜΝΗΣ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΕΤΡΑΣ ΛΕΣΒΟΥ, ΑΜΠΕΛΙΑ ΛΕΣΒΟΥ, ΑΝΑΞΟΣ ΣΚΟΥΤΑΡΟΥ ΛΕΣΒΟΥ, ΛΑΦΙΩΝΑΣ ΛΕΣΒΟΥ, ΜΙΡΑΔΕΛΛΙΑ ΛΕΣΒΟΥ, ΠΕΤΡΑ ΛΕΣΒΟΥ, ΠΕΤΡΙ ΛΕΣΒΟΥ, ΣΚΟΥΤΑΡΟΣ ΛΕΣΒΟΥ, ΣΤΥΨΗ ΛΕΣΒΟΥ, ΥΨΗΛΟΜΕΤΩΠΟ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81110', Area: 'ΑΡΧΑΙΑ ΑΝΤΙΣΣΑ ΛΕΣΒΟΥ, ΒΑΤΟΥΣΣΑ ΛΕΣΒΟΥ, ΓΑΒΑΘΑΣ ΛΕΣΒΟΥ, ΚΑΛΟ ΛΙΜΑΝΙ ΛΕΣΒΟΥ, ΚΑΜΠΟΣ ΛΕΣΒΟΥ, ΠΤΕΡΟΥΝΤΑ ΛΕΣΒΟΥ, ΡΕΥΜΑ ΛΕΣΒΟΥ, ΣΚΑΛΟΧΩΡΙ ΛΕΣΒΟΥ, ΤΖΙΘΡΑ ΛΕΣΒΟΥ, ΧΙΔΗΡΑ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81112', Area: 'ΜΕΓΑΛΟΝΗΣΙ ΛΕΣΒΟΥ, ΣΙΓΡΙΟ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81200', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΠΛΩΜΑΡΙΟΥ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΙΣΙΔΩΡΟΣ ΛΕΣΒΟΥ, ΑΚΡΑΣΙΟ ΛΕΣΒΟΥ, ΑΜΠΕΛΙΚΟ ΛΕΣΒΟΥ, ΑΝΩ ΧΩΡΙΟ ΛΕΣΒΟΥ, ΔΡΟΤΑ ΛΕΣΒΟΥ, ΕΥΑΓΓΕΛΙΣΤΡΙΑ ΛΕΣΒΟΥ, ΚΑΤΩ ΧΩΡΙΟ ΛΕΣΒΟΥ, ΚΟΛΥΜΒΑΤΕΡΑ ΛΕΣΒΟΥ, ΚΟΥΡΝΕΛΑ ΛΕΣΒΟΥ, ΜΕΓΑΛΟΧΩΡΙ ΛΕΣΒΟΥ, ΜΕΛΙΝΤΑ ΛΕΣΒΟΥ, ΜΕΣΟΥΝΑ ΛΕΣΒΟΥ, ΜΗΛΙΕΣ ΛΕΣΒΟΥ, ΝΕΟΧΩΡΙ ΛΕΣΒΟΥ, ΠΑΛΑΙΟΧΩΡΙ ΛΕΣΒΟΥ, ΠΑΡΑΛΙΑ ΔΡΟΤΑΣ ΛΕΣΒΟΥ, ΠΛΑΓΙΑ ΛΕΣΒΟΥ, ΠΛΩΜΑΡΙ ΛΕΣΒΟΥ, ΡΑΧΙΔΙ ΛΕΣΒΟΥ, ΣΠΙΔΕΣ ΛΕΣΒΟΥ, ΤΡΥΓΟΝΑΣ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81300', Area: 'ΑΓΙΟΣ ΠΑΥΛΟΣ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΦΩΚΑΣ ΛΕΣΒΟΥ, ΑΧΛΑΔΕΡΗ ΛΕΣΒΟΥ, ΒΑΣΙΛΙΚΑ ΛΕΣΒΟΥ, ΒΑΤΕΡΑ ΛΕΣΒΟΥ, ΒΡΙΣΑ ΛΕΣΒΟΥ, ΓΗΡΟΚΟΜΕΙΟ ΛΑΜΑΝΔΡΙΟΥ ΛΕΣΒΟΥ, ΘΕΡΜΟΠΗΓΕΣ ΛΕΣΒΟΥ, ΚΑΤΩ ΣΤΑΥΡΟΣ ΛΕΣΒΟΥ, ΛΙΒΑΔΙΑ ΛΕΣΒΟΥ, ΛΙΣΒΟΡΙΟ ΛΕΣΒΟΥ, ΝΥΦΙΔΑ ΛΕΣΒΟΥ, ΠΟΛΙΧΝΙΤΟΣ ΛΕΣΒΟΥ, ΣΚΑΛΑ ΠΟΛΙΧΝΙΤΟΥ ΛΕΣΒΟΥ, ΣΚΑΜΙΟΥΔΙ ΛΕΣΒΟΥ, ΣΤΑΥΡΟΣ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81400', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΓΚΑΡΥΩΝΕΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΛΟΓΟΝΗΣΙ ΛΕΣΒΟΥ, ΒΟΥΝΑΡΙΑ ΠΕΔΙΝΟΥ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΓΑΛΗ ΚΑΣΠΑΚΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΔΑΦΝΗ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΘΑΝΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΑΛΛΙΘΕΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΑΣΠΑΚΑΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΑΣΤΡΙΑ ΛΕΣΒΟΥ, ΚΑΤΑΛΑΚΚΟ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΟΜΠΙ ΝΗΣΟΣ ΛΕΣΒΟΥ, ΚΟΡΝΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΛΙΒΑΔΟΧΩΡΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΛΙΜΕΝΑΡΙΑ ΛΕΣΒΟΥ, ΜΥΡΙΝΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΝΕΑ ΚΟΥΤΑΛΗ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΝΕΟ ΠΕΔΙΝΟ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΑΡΑΛΙΑ ΘΑΝΟΥΣ ΛΕΣΒΟΥ, ΠΑΡΑΛΙΑ ΠΛΑΤΕΟΣ ΛΕΣΒΟΥ, ΠΕΔΙΝΟ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΕΔΙΝΟ ΝΕΑΣ ΚΟΥΤΑΛΗΣ ΛΕΣΒΟΥ, ΠΛΑΓΙΣΟΣ ΜΩΛΟΣ ΛΕΣΒΟΥ, ΠΛΑΤΥ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΟΛΙΟΧΝΗ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΟΡΤΙΑΝΟ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΣΑΡΔΑΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΤΣΙΜΑΝΔΡΙΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΨΥΛΛΟΙ ΚΟΡΝΟΥ ΛΗΜΝΟΥ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81401', Area: 'ΑΓΙΑ ΣΟΦΙΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΑΛΕΞΑΝΔΡΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΘΕΟΔΩΡΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΕΡΟΛΙΜΕΝΑΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΝΕΜΟΕΣΣΑ ΛΥΧΝΩΝ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΑΤΣΙΚΗ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΒΑΡΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΒΟΡΟΣΚΟΠΟΣ ΛΕΣΒΟΥ, ΚΑΛΛΙΟΠΗ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΑΜΙΝΙΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΑΡΠΑΣΙΟ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΟΝΤΙΑΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΟΝΤΟΠΟΥΛΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΟΡΤΙΣΩΝΑΣ ΛΕΣΒΟΥ, ΚΟΤΣΙΝΑΣ ΡΕΠΑΝΙΔΙΟΥ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΚΟΥΚΟΝΗΣΙ ΛΕΣΒΟΥ, ΛΥΧΝΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΜΟΥΔΡΟΣ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΑΝΑΓΙΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΛΑΚΑ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΠΡΟΠΟΥΛΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΡΕΠΑΝΙΔΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΡΟΥΣΣΟΠΟΥΛΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΡΩΜΑΝΟ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΣΕΡΓΙΤΣΙ ΛΕΣΒΟΥ, ΣΚΑΝΔΑΛΙ ΛΗΜΝΟΥ ΛΕΣΒΟΥ, ΦΙΣΙΝΗ ΛΗΜΝΟΥ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '81500', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΛΕΣΒΟΥ, ΑΓΙΟΣ ΕΥΣΤΡΑΤΙΟΣ ΝΗΣΟΣ ΛΕΣΒΟΥ, ΡΟΥΜΠΟΣ ΛΕΣΒΟΥ', Prefecture: 'Λέσβου' },
    { PostalCode: '31082', Area: 'ΑΓΙΟΣ ΗΛΙΑΣ ΛΕΥΚΑΔΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΝΗΡΑΣ ΛΕΥΚΑΔΑΣ, ΑΓΙΟΣ ΠΕΤΡΟΣ ΛΕΥΚΑΔΑΣ, ΑΘΑΝΙΟΝ ΛΕΥΚΑΔΑΣ, ΑΛΑΤΡΟ ΛΕΥΚΑΔΑΣ, ΒΑΣΙΛΙΚΗ ΛΕΥΚΑΔΑΣ, ΒΟΥΡΝΙΚΑ ΛΕΥΚΑΔΑΣ, ΔΡΑΓΑΝΟ ΛΕΥΚΑΔΑΣ, ΕΥΓΗΡΟΣ ΛΕΥΚΑΔΑΣ, ΚΟΜΗΛΙΟ ΛΕΥΚΑΔΑΣ, ΚΟΝΤΑΡΑΙΝΑ ΛΕΥΚΑΔΑΣ, ΜΑΝΑΣΗ ΛΕΥΚΑΔΑΣ, ΜΑΡΑΝΤΟΧΩΡΙ ΛΕΥΚΑΔΑΣ, ΝΙΚΟΛΗ ΛΕΥΚΑΔΑΣ, ΠΑΝΩΧΩΡΙ ΛΕΥΚΑΔΑΣ, ΠΟΝΤΗ ΑΓΙΟΥ ΠΕΤΡΟΥ ΛΕΥΚΑΔΑΣ, ΣΥΒΟΤΑ ΛΕΥΚΑΔΑΣ, ΣΥΒΡΟΣ ΛΕΥΚΑΔΑΣ, ΦΤΕΡΝΟ ΛΕΥΚΑΔΑΣ, ΧΟΡΤΑΤΑ ΛΕΥΚΑΔΑΣ', Prefecture: 'Λευκάδας' },
    { PostalCode: '31084', Area: 'ΜΕΓΑΝΗΣΙ ΛΕΥΚΑΔΑΣ, ΝΥΔΡΙ ΛΕΥΚΑΔΑΣ', Prefecture: 'Λευκάδας' },
    { PostalCode: '31100', Area: 'ΑΓΙΟΣ ΧΡΙΣΤΟΦΟΡΟΣ ΛΕΥΚΑΔΑΣ, ΑΠΟΛΠΑΙΝΑ ΛΕΥΚΑΔΑΣ, ΒΛΥΧΟ ΛΕΥΚΑΔΑΣ, ΓΕΝΙ ΛΕΥΚΑΔΑΣ, ΔΕΣΙΜΙ ΛΕΥΚΑΔΑΣ, ΔΗΜΟΣΑΡΙ ΛΕΥΚΑΔΑΣ, ΕΠΙΣΚΟΠΟΣ ΛΕΥΚΑΔΑΣ, ΚΑΛΑΒΡΟΣ ΛΕΥΚΑΔΑΣ, ΚΑΛΛΙΓΟΝΙΟ ΛΕΥΚΑΔΑΣ, ΚΑΛΛΙΘΕΑ ΛΕΥΚΑΔΑΣ, ΚΑΡΙΩΤΕΣ ΛΕΥΚΑΔΑΣ, ΚΑΤΟΥΝΑ ΛΕΥΚΑΔΑΣ, ΚΑΤΩΧΩΡΙ ΛΕΥΚΑΔΑΣ, ΛΕΥΚΑΔΑ ΛΕΥΚΑΔΑΣ, ΛΥΓΙΑ ΛΕΥΚΑΔΑΣ, ΜΑΔΟΥΡΗ  ΝΗΣΟΣ ΛΕΥΚΑΔΑΣ, ΜΕΓΑΛΟ ΑΥΛΑΚΙ ΛΕΥΚΑΔΑΣ, ΜΙΚΡΟΣ ΓΙΑΛΟΣ ΛΕΥΚΑΔΑΣ, ΝΕΟΧΩΡΙ ΛΕΥΚΑΔΑΣ, ΝΙΚΙΑΝΑ ΛΕΥΚΑΔΑΣ, ΠΕΡΙΒΟΛΙΑ ΛΕΥΚΑΔΑΣ ΛΕΥΚΑΔΑΣ, ΠΕΡΙΓΙΑΛΙ ΛΕΥΚΑΔΑΣ, ΠΟΡΟΣ ΛΕΥΚΑΔΑΣ, ΡΑΧΗ ΛΕΥΚΑΔΑΣ, ΣΚΟΡΠΙΟΣ  ΝΗΣΟΣ ΛΕΥΚΑΔΑΣ, ΣΠΑΡΤΗ  ΝΗΣΟΣ ΛΕΥΚΑΔΑΣ, ΤΣΟΥΚΑΛΑΔΕΣ ΛΕΥΚΑΔΑΣ, ΦΟΡΤΙ ΝΗΣΟΣ ΛΕΥΚΑΔΑΣ, ΦΡΥΝΙΟ ΛΕΥΚΑΔΑΣ, ΧΑΡΑΔΙΑΤΙΚΑ ΛΕΥΚΑΔΑΣ', Prefecture: 'Λευκάδας' },
    { PostalCode: '37001', Area: 'ΑΓΙΟΙ ΣΑΡΑΝΤΑ ΜΑΓΝΗΣΙΑΣ, ΑΝΑΛΗΨΗ ΜΑΓΝΗΣΙΑΣ, ΑΝΗΛΙΟ ΜΑΓΝΗΣΙΑΣ, ΕΛΙΤΣΑ ΜΑΓΝΗΣΙΑΣ, ΖΑΓΟΡΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΡΑΒΩΜΑ ΜΑΓΝΗΣΙΑΣ, ΜΑΚΡΥΡΡΑΧΗ ΜΑΓΝΗΣΙΑΣ, ΟΒΡΙΟΣ ΜΑΓΝΗΣΙΑΣ, ΠΟΥΡΙ ΜΑΓΝΗΣΙΑΣ, ΠΟΥΡΙΑΝΟΣ ΣΤΑΥΡΟΣ ΜΑΓΝΗΣΙΑΣ, ΧΟΡΕΥΤΟ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37002', Area: 'ΑΜΠΕΛΙΑ ΜΑΓΝΗΣΙΑΣ, ΑΣΕΛΙΝΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΧΛΑΔΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΖΟΡΜΠΑΔΕΣ ΜΑΓΝΗΣΙΑΣ, ΚΑΛΥΒΙΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΝΑΠΙΤΣΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΣΤΡΟ ΜΑΓΝΗΣΙΑΣ, ΚΑΤΣΑΡΟΣ ΜΑΓΝΗΣΙΑΣ, ΚΟΛΙΟΣ ΜΑΓΝΗΣΙΑΣ, ΚΟΥΚΟΥΝΑΡΙΕΣ ΜΑΓΝΗΣΙΑΣ, ΜΑΡΑΘΑ ΜΑΓΝΗΣΙΑΣ, ΜΟΝΗ ΕΥΑΓΓΕΛΙΣΤΡΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΞΑΝΕΜΟΣ ΜΑΓΝΗΣΙΑΣ, ΞΕΝΙΑ ΜΑΓΝΗΣΙΑΣ, ΠΛΑΤΑΝΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΡΕΠΙΟ ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΣΚΙΑΘΟΣ ΜΑΓΝΗΣΙΑΣ, ΤΡΟΥΛΛΟΣ ΜΑΓΝΗΣΙΑΣ, ΤΣΟΥΓΚΡΙΑ  ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37003', Area: 'ΑΓΝΩΝΤΑΣ ΜΑΓΝΗΣΙΑΣ, ΚΑΛΟΓΗΡΟΣ ΜΑΓΝΗΣΙΑΣ, ΜΥΛΟΙ ΜΑΓΝΗΣΙΑΣ, ΠΑΝΟΡΜΟΣ ΜΑΓΝΗΣΙΑΣ, ΣΚΟΠΕΛΟΣ ΜΑΓΝΗΣΙΑΣ, ΣΤΑΦΥΛΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37005', Area: 'ΑΓΙΟΣ ΠΕΤΡΟΣ  ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΔΕΛΦΟΙ  ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΛΟΝΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΒΟΤΣΗ ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΓΕΡΑΚΑΣ ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΓΙΟΥΡΑ ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΙΣΙΩΜΑΤΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΛΑΜΑΚΙΑ  ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΚΥΡΑ ΠΑΝΑΓΙΑ ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΜΑΡΠΟΥΝΤΑ ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΜΟΥΡΤΕΡΟ ΜΑΓΝΗΣΙΑΣ, ΠΑΤΗΤΗΡΙ ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΠΕΡΙΣΤΕΡΑ  ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΠΙΠΕΡΙ ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΣΚΑΝΤΖΟΥΡΑ  ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ, ΣΤΕΝΗ ΒΑΛΑ ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΧΡΥΣΗ ΜΗΛΙΑ ΑΛΟΝΝΗΣΟΥ ΜΑΓΝΗΣΙΑΣ, ΨΑΘΟΥΡΑ ΝΗΣΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37006', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΣΗΠΙΑΔΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΡΟΜΥΡΙΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΡΓΑΛΑΣΤΗ ΜΑΓΝΗΣΙΑΣ, ΒΟΔΙΝΙ ΜΑΓΝΗΣΙΑΣ, ΚΑΛΑΜΟΣ ΜΑΓΝΗΣΙΑΣ, ΚΑΛΛΙΘΕΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΣΤΡΙ ΜΑΓΝΗΣΙΑΣ, ΚΟΥΚΟΥΛΑΙΙΚΑ ΜΑΓΝΗΣΙΑΣ, ΛΑΥΚΟΣ ΜΑΓΝΗΣΙΑΣ, ΛΕΦΟΚΑΣΤΡΟ ΜΑΓΝΗΣΙΑΣ, ΛΥΡΗ ΜΑΓΝΗΣΙΑΣ, ΜΑΡΑΘΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΜΕΤΟΧΙ ΜΑΓΝΗΣΙΑΣ, ΜΙΚΡΟ ΜΑΓΝΗΣΙΑΣ, ΜΟΡΤΙΑ ΜΑΓΝΗΣΙΑΣ, ΜΟΥΣΓΕΣ ΜΑΓΝΗΣΙΑΣ, ΜΥΡΙΟΒΡΥΤΗ ΜΑΓΝΗΣΙΑΣ, ΞΙΝΟΒΡΥΣΗ ΜΑΓΝΗΣΙΑΣ, ΠΑΛΤΣΗ ΜΑΓΝΗΣΙΑΣ, ΠΑΟΥ ΜΑΓΝΗΣΙΑΣ, ΠΑΤΡΙΧΩΡΙ ΜΑΓΝΗΣΙΑΣ, ΠΗΓΕΣ ΜΑΓΝΗΣΙΑΣ, ΠΛΑΤΑΝΙΑ ΜΑΓΝΗΣΙΑΣ, ΠΟΤΙΣΤΙΚΑ ΜΑΓΝΗΣΙΑΣ, ΠΡΟΜΥΡΙΟ ΜΑΓΝΗΣΙΑΣ, ΡΟΔΙΑ ΜΑΓΝΗΣΙΑΣ, ΣΥΚΗ ΜΑΓΝΗΣΙΑΣ, ΤΡΟΧΑΛΑ ΜΑΓΝΗΣΙΑΣ, ΧΟΝΔΡΗ ΑΜΜΟΣ ΜΑΓΝΗΣΙΑΣ, ΧΟΡΤΟ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37008', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΠΤΕΛΕΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΜΑΛΙΑΠΟΛΗ ΜΑΓΝΗΣΙΑΣ, ΑΧΙΛΛΕΙΟ ΜΑΓΝΗΣΙΑΣ, ΓΑΒΡΙΑΝΗ ΜΑΓΝΗΣΙΑΣ, ΔΡΥΜΩΝΑΣ ΜΑΓΝΗΣΙΑΣ, ΚΑΡΑΒΟΤΣΑΚΙ ΜΑΓΝΗΣΙΑΣ, ΛΕΙΧΟΥΡΑ ΜΑΓΝΗΣΙΑΣ, ΝΗΕΣ ΜΑΓΝΗΣΙΑΣ, ΠΗΓΑΔΙ ΜΑΓΝΗΣΙΑΣ, ΣΟΥΡΠΗ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37100', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΕΥΞΕΙΝΟΥΠΟΛΗΣ ΜΑΓΝΗΣΙΑΣ, ΑΙΔΙΝΙΟ ΜΑΓΝΗΣΙΑΣ, ΑΛΜΥΡΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΝΘΟΤΟΠΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΝΩ ΜΑΥΡΟΛΟΦΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΡΓΙΛΟΧΩΡΙ ΜΑΓΝΗΣΙΑΣ, ΒΡΥΝΑΙΝΑ ΜΑΓΝΗΣΙΑΣ, ΕΥΞΕΙΝΟΥΠΟΛΗ ΜΑΓΝΗΣΙΑΣ, ΖΑΡΚΑΔΟΧΩΡΙ ΜΑΓΝΗΣΙΑΣ, ΚΑΣΤΡΑΚΙ ΜΑΓΝΗΣΙΑΣ, ΚΟΚΚΩΤΟΙ ΜΑΓΝΗΣΙΑΣ, ΚΟΝΤΑΡΟΛΑΚΚΑ ΜΑΓΝΗΣΙΑΣ, ΚΟΡΦΑΛΑΚΙ ΜΑΓΝΗΣΙΑΣ, ΚΡΟΚΙΟ ΜΑΓΝΗΣΙΑΣ, ΚΩΦΟΙ ΜΑΓΝΗΣΙΑΣ, ΜΑΥΡΟΛΟΦΟΣ ΜΑΓΝΗΣΙΑΣ, ΜΙΚΡΟΘΗΒΕΣ ΜΑΓΝΗΣΙΑΣ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΞΕΝΙΑΣ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΝΕΟ ΚΑΣΤΡΟ ΜΑΓΝΗΣΙΑΣ, ΝΕΟΣ ΠΛΑΤΑΝΟΣ ΜΑΓΝΗΣΙΑΣ, ΝΕΟΧΩΡΑΚΙ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΝΕΡΑΙΔΑ ΜΑΓΝΗΣΙΑΣ, ΟΘΡΥΣ ΜΑΓΝΗΣΙΑΣ, ΠΑΡΑΛΙΑ ΑΛΜΥΡΟΥ ΜΑΓΝΗΣΙΑΣ, ΠΕΡΔΙΚΑ ΜΑΓΝΗΣΙΑΣ, ΠΛΑΤΑΝΟΣ ΜΑΓΝΗΣΙΑΣ, ΦΥΛΑΚΗ ΜΑΓΝΗΣΙΑΣ, ΧΟΡΟΣΤΑΣΙ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37300', Area: 'ΑΓΡΙΑ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37400', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΓΧΙΑΛΟΥ ΜΑΓΝΗΣΙΑΣ, ΒΕΛΑΝΙΔΙΑ ΜΑΓΝΗΣΙΑΣ, ΔΗΜΗΤΡΙΑΔΑ ΜΑΓΝΗΣΙΑΣ, ΚΡΙΘΑΡΙΑ ΜΑΓΝΗΣΙΑΣ, ΜΑΡΑΘΟΣ ΜΑΓΝΗΣΙΑΣ, ΝΕΑ ΑΓΧΙΑΛΟΣ ΜΑΓΝΗΣΙΑΣ, ΣΤΡΑΤΙΩΤΙΚΟ ΑΕΡΟΔΡΟΜΙΟ Ν.ΑΓΧΙΑΛΟΥ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '37500', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΦΕΡΩΝ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΠΕΡΙΒΛΕΠΤΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΕΡΙΝΟ ΜΑΓΝΗΣΙΑΣ, ΒΕΛΕΣΤΙΝΟ ΜΑΓΝΗΣΙΑΣ, ΓΟΥΡΟΥΝΟΣΤΑΒΛΟΣ ΜΑΓΝΗΣΙΑΣ, ΕΛΕΥΘΕΡΟΧΩΡΙΟ ΜΑΓΝΗΣΙΑΣ, ΚΟΚΚΑΛΑΙΙΚΑ ΜΑΓΝΗΣΙΑΣ, ΚΟΚΚΙΝΑ ΜΑΓΝΗΣΙΑΣ, ΜΙΚΡΟ ΠΕΡΙΒΟΛΑΚΙ ΜΑΓΝΗΣΙΑΣ, ΠΕΡΙΒΛΕΠΤΟ ΜΑΓΝΗΣΙΑΣ, ΠΟΛΥΖΑΙΙΚΑ ΜΑΓΝΗΣΙΑΣ, ΣΤΕΦΑΝΟΒΙΚΕΙΟ ΜΑΓΝΗΣΙΑΣ, ΧΛΟΗ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38000', Area: 'ΆΓΙΟΣ ΙΩΆΝΝΗΣ ΠΟΡΤΑΡ ΜΑΓΝΗΣΙΑΣ, ΚΑΤΩΧΏΡΙΟΝ ΜΑΓΝΗΣΙΑΣ, ΚΟΥΚΟΎΡΑΒΑ ΜΑΚΡΥΝΊΤΣ ΜΑΓΝΗΣΙΑΣ, ΜΑΚΡΙΝΊΤΣΑ ΜΑΓΝΗΣΙΑΣ, ΠΟΡΤΑΡΙΑ ΜΑΓΝΗΣΙΑΣ, ΣΑΝΑΤΌΡΙΟΝ ΠΗΛΊΟΥ ΜΑΓΝΗΣΙΑΣ, ΣΤΑΓΙΆΤΕΣ ΜΑΓΝΗΣΙΑΣ, ΧΆΝΙΑ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38221', Area: 'ΒΟΛΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38222', Area: 'ΒΟΛΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38223', Area: 'ΒΟΛΟΥ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38333', Area: 'ΒΟΛΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38334', Area: 'ΒΟΛΟΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38445', Area: 'ΝΕΑ ΙΩΝΙΑ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38446', Area: 'ΝΕΑ ΙΩΝΙΑ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '38500', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΝΗΛΕΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΑΠΟΣΤΟΛΟΣ Ο ΝΕΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΗΛΕΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΛΑΥΡΕΝΤΙΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΜΗΝΑΣ ΜΑΓΝΗΣΙΑΣ, ΑΓΙΟΣ ΟΝΟΥΦΡΙΟΣ ΒΟΛΟΥ ΜΑΓΝΗΣΙΑΣ, ΑΛΛΗ ΜΕΡΙΑ ΜΑΓΝΗΣΙΑΣ, ΑΝΑΚΑΣΙΑ ΜΑΓΝΗΣΙΑΣ, ΑΝΕΜΟΥΤΣΑ ΜΑΓΝΗΣΙΑΣ, ΑΝΩ ΒΟΛΟΣ ΜΑΓΝΗΣΙΑΣ, ΑΝΩ ΓΑΤΖΕΑ ΜΑΓΝΗΣΙΑΣ, ΑΝΩ ΛΕΧΩΝΙΑ ΜΑΓΝΗΣΙΑΣ, ΒΕΝΕΤΟ ΜΑΓΝΗΣΙΑΣ, ΒΡΟΧΙΑ ΜΑΓΝΗΣΙΑΣ, ΓΛΑΦΥΡΑ ΜΑΓΝΗΣΙΑΣ, ΓΟΡΙΤΣΑ ΜΑΓΝΗΣΙΑΣ, ΔΙΜΗΝΙΟ ΜΑΓΝΗΣΙΑΣ, ΔΡΑΚΕΙΑ ΜΑΓΝΗΣΙΑΣ, ΔΥΟ ΡΕΥΜΑΤΑ ΜΑΓΝΗΣΙΑΣ, ΙΩΛΚΟΣ ΜΑΓΝΗΣΙΑΣ, ΚΑΚΚΑΒΟΣ ΜΑΓΝΗΣΙΑΣ, ΚΑΜΑΡΙ ΜΑΓΝΗΣΙΑΣ, ΚΑΝΑΛΙΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΤΩ ΓΑΤΖΕΑ ΜΑΓΝΗΣΙΑΣ, ΚΑΤΩ ΛΕΧΩΝΙΑ ΜΑΓΝΗΣΙΑΣ, ΚΕΡΑΜΙΔΙ ΜΑΓΝΗΣΙΑΣ, ΚΕΡΑΣΕΑ ΜΑΓΝΗΣΙΑΣ, ΚΛΗΜΑ ΝΕΑΣ ΙΩΝΙΑΣ ΜΑΓΝΗΣΙΑΣ, ΜΑΛΑΚΙΟ ΜΑΓΝΗΣΙΑΣ, ΜΕΛΙΣΣΑΤΙΚΑ ΜΑΓΝΗΣΙΑΣ, ΜΟΝΗ ΜΕΤΑΜΟΡΦΩΣΕΩΣ ΣΩΤΗΡΟΣ ΦΛΑΜΟΥΡΙΟΥ ΜΑΓΝΗΣΙΑΣ, ΝΕΑ ΙΩΝΙΑ ΜΑΓΝΗΣΙΑΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΜΑΓΝΗΣΙΑΣ, ΠΑΛΙΟΥΡΙ ΜΑΓΝΗΣΙΑΣ, ΠΛΑΤΑΝΙΔΙΑ ΜΑΓΝΗΣΙΑΣ, ΣΕΡΒΑΝΑΤΕΣ ΜΑΓΝΗΣΙΑΣ, ΣΕΣΚΛΟ ΜΑΓΝΗΣΙΑΣ, ΣΤΡΟΦΙΛΟΣ ΜΑΓΝΗΣΙΑΣ, ΦΥΤΟΚΟ ΜΑΓΝΗΣΙΑΣ, ΧΡΥΣΗ ΑΚΤΗ ΠΑΝΑΓΙΑΣ ΜΑΓΝΗΣΙΑΣ', Prefecture: 'Μαγνησίας' },
    { PostalCode: '24001', Area: 'ΑΡΑΠΟΛΑΚΚΑ ΜΕΣΣΗΝΙΑΣ, ΓΙΑΛΟΒΑ ΜΕΣΣΗΝΙΑΣ, ΓΛΥΦΑΔΑ ΜΕΣΣΗΝΙΑΣ, ΕΛΑΙΟΦΥΤΟ ΜΕΣΣΗΝΙΑΣ, ΙΚΛΑΙΝΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΛΙΘΕΑ ΠΥΛΟΥ ΜΕΣΣΗΝΙΑΣ, ΚΟΡΥΦΑΣΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΟΥΚΚΟΥΝΑΡΑ ΜΕΣΣΗΝΙΑΣ, ΚΡΕΜΜΥΔΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΥΝΗΓΟΣ ΠΥΛΟΥ ΜΕΣΣΗΝΙΑΣ, ΜΕΣΟΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΜΠΑΛΟΔΗΜΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΠΑΛΑΙΟΝΕΡΟ ΜΕΣΣΗΝΙΑΣ, ΠΑΠΠΟΥΛΙΑ ΜΕΣΣΗΝΙΑΣ, ΠΕΡΙΒΟΛΑΚΙΑ ΠΥΛΟΥ ΜΕΣΣΗΝΙΑΣ, ΠΕΤΡΟΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΠΗΔΑΣΟΣ ΜΕΣΣΗΝΙΑΣ, ΠΙΣΑΣΚΙΟ ΜΕΣΣΗΝΙΑΣ, ΠΛΑΤΑΝΟΣ ΠΥΛΟΥ ΜΕΣΣΗΝΙΑΣ, ΠΥΛΑ ΜΕΣΣΗΝΙΑΣ, ΠΥΛΟΣ ΜΕΣΣΗΝΙΑΣ, ΡΩΜΑΝΟΣ ΜΕΣΣΗΝΙΑΣ, ΣΟΥΛΗΝΑΡΙ ΜΕΣΣΗΝΙΑΣ, ΣΤΕΝΩΣΙΑ ΜΕΣΣΗΝΙΑΣ, ΣΦΑΚΤΗΡΙΑ ΝΗΣΟΣ ΜΕΣΣΗΝΙΑΣ, ΣΧΙΝΟΛΑΚΚΑ ΠΥΛΟΥ ΜΕΣΣΗΝΙΑΣ, ΤΡΑΓΑΝΑ ΜΕΣΣΗΝΙΑΣ, ΧΑΝΔΡΙΝΟΣ ΜΕΣΣΗΝΙΑΣ, ΧΩΜΑΤΑΔΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24002', Area: 'ΑΓΡΙΛΙΕΣ ΜΕΣΣΗΝΙΑΣ, ΑΛΛΑΓΗ ΜΕΣΣΗΝΙΑΣ, ΑΝΔΑΝΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΝΘΟΥΣΑ ΜΕΣΣΗΝΙΑΣ, ΑΡΣΙΝΟΗ ΜΕΣΣΗΝΙΑΣ, ΒΑΛΥΡΑ ΜΕΣΣΗΝΙΑΣ, ΖΕΡΜΠΙΣΙΑ ΜΕΣΣΗΝΙΑΣ, ΖΕΥΓΟΛΑΤΕΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΑΜΑΡΑΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΛΙΡΡΟΗ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΥΒΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΣΤΡΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΣΑΡΟΣ ΜΕΣΣΗΝΙΑΣ, ΚΕΦΑΛΙΝΟΣ ΜΕΣΣΗΝΙΑΣ, ΚΟΓΧΥΛΙ ΜΕΣΣΗΝΙΑΣ, ΚΡΟΝΤΗΡΕΣ ΜΕΣΣΗΝΙΑΣ, ΛΑΜΠΑΙΝΑ ΜΕΣΣΗΝΙΑΣ, ΛΟΥΤΡΟ ΜΕΣΣΗΝΙΑΣ, ΜΑΓΟΥΛΑ ΜΕΣΣΗΝΙΑΣ, ΜΑΝΤΖΑΡΙ ΜΕΣΣΗΝΙΑΣ, ΜΑΥΡΟΜΜΑΤΙ ΙΘΩΜΗΣ ΜΕΣΣΗΝΙΑΣ, ΜΕΛΙΓΑΛΑΣ ΜΕΣΣΗΝΙΑΣ, ΜΕΡΟΠΗ ΜΕΣΣΗΝΙΑΣ, ΜΙΛΑ ΜΕΣΣΗΝΙΑΣ, ΜΟΝΗ ΒΟΥΛΚΑΝΟΥ ΜΕΣΣΗΝΙΑΣ, ΜΟΥΣΤΑ ΜΕΣΣΗΝΙΑΣ, ΝΕΟΧΩΡΙ ΙΘΩΜΗΣ ΜΕΣΣΗΝΙΑΣ, ΠΕΤΡΑΛΩΝΑ ΜΕΣΣΗΝΙΑΣ, ΠΕΥΚΟ ΜΕΣΣΗΝΙΑΣ, ΡΕΥΜΑΤΙΑ ΜΕΣΣΗΝΙΑΣ, ΣΙΑΜΟ ΜΕΣΣΗΝΙΑΣ, ΣΚΑΛΑ ΜΕΣΣΗΝΙΑΣ, ΣΟΛΑΚΙ ΜΕΣΣΗΝΙΑΣ, ΣΤΑΘΜΟΣ ΣΚΑΛΑΣ ΜΕΣΣΗΝΙΑΣ, ΣΤΕΝΥΚΛΑΡΟΣ ΜΕΣΣΗΝΙΑΣ, ΤΣΟΥΚΑΛΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΦΙΛΙΑ ΜΕΣΣΗΝΙΑΣ, ΧΡΥΣΟΤΟΠΟΣ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24004', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΧΑΡΟΚΟΠΕΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΒΑΣΙΛΙΤΣΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΙΣΙΔΩΡΟΣ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΧΑΡΟΚΟΠΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΧΑΡΟΚΟΠΕΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΑΚΡΙΤΟΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΒΑΣΙΛΙΤΣΙ ΜΕΣΣΗΝΙΑΣ, ΒΟΥΝΑΡΙΑ ΜΕΣΣΗΝΙΑΣ, ΕΞΟΧΙΚΟ ΠΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΖΙΖΑΝΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΠΛΑΝΙ ΜΕΣΣΗΝΙΑΣ, ΚΟΜΠΟΙ ΜΕΣΣΗΝΙΑΣ, ΚΟΡΩΝΗ ΜΕΣΣΗΝΙΑΣ, ΛΙΒΑΔΑΚΙΑ ΜΕΣΣΗΝΙΑΣ, ΜΥΡΤΙΑ ΜΕΣΣΗΝΙΑΣ, ΜΥΣΤΡΑΚΙ ΜΕΣΣΗΝΙΑΣ, ΝΕΑ ΚΟΡΩΝΗ ΜΕΣΣΗΝΙΑΣ, ΠΕΡΟΥΛΙΑ ΜΕΣΣΗΝΙΑΣ, ΠΟΤΑΜΙΑ ΚΟΡΩΝΗΣ ΜΕΣΣΗΝΙΑΣ, ΥΑΜΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΦΑΛΑΝΘΗ ΜΕΣΣΗΝΙΑΣ, ΦΑΝΕΡΩΜΕΝΗ ΜΕΣΣΗΝΙΑΣ, ΧΑΡΟΚΟΠΕΙΟ ΜΕΣΣΗΝΙΑΣ, ΧΡΥΣΟΚΕΛΛΑΡΙΑ ΜΕΣΣΗΝΙΑΣ, ΧΩΜΑΤΕΡΟ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24005', Area: 'ΑΓΙΑ ΣΩΤΗΡΑ ΜΕΣΣΗΝΙΑΣ, ΑΓΝΑΝΤΙ ΜΕΣΣΗΝΙΑΣ, ΑΧΛΑΔΟΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΓΑΜΒΡΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΑΜΑΚΙ ΑΧΛΑΔΟΧΩΡΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΚΑΣΤΑΝΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΟΚΚΙΝΟ ΜΕΣΣΗΝΙΑΣ, ΛΥΚΙΣΣΑ ΜΕΣΣΗΝΙΑΣ, ΜΑΘΙΑ ΜΕΣΣΗΝΙΑΣ, ΠΑΝΙΠΕΡΙ ΜΕΣΣΗΝΙΑΣ, ΠΕΤΑΛΙΔΙ ΜΕΣΣΗΝΙΑΣ, ΤΖΑΝΕΣ ΜΕΣΣΗΝΙΑΣ, ΤΡΥΠΕΣ ΜΕΣΣΗΝΙΑΣ, ΦΟΡΟΙ ΜΕΣΣΗΝΙΑΣ, ΧΕΛΩΝΑΡΙΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24006', Area: 'ΑΝΕΜΟΜΥΛΟΣ ΜΕΘΩΝΗΣ ΜΕΣΣΗΝΙΑΣ, ΒΑΡΑΚΕΣ ΜΕΣΣΗΝΙΑΣ, ΓΡΙΖΟΚΑΜΠΟΣ ΜΕΣΣΗΝΙΑΣ, ΔΕΝΤΡΟΥΛΙΑ ΜΕΣΣΗΝΙΑΣ, ΕΥΑΓΓΕΛΙΣΜΟΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΙΝΟΥΡΓΙΟ ΧΩΡΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΜΑΡΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΟΚΚΙΝΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΡΗΤΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΛΑΧΑΝΑΔΑ ΜΕΣΣΗΝΙΑΣ, ΛΟΥΤΣΑ ΜΕΣΣΗΝΙΑΣ, ΜΕΘΩΝΗ ΜΕΣΣΗΝΙΑΣ, ΝΕΡΑΝΤΖΙΕΣ ΜΕΣΣΗΝΙΑΣ, ΣΑΠΙΕΝΤΖΑ ΝΗΣΟΣ ΜΕΣΣΗΝΙΑΣ, ΣΧΙΖΑ ΝΗΣΟΣ ΜΕΣΣΗΝΙΑΣ, ΤΑΠΙΑ ΜΕΣΣΗΝΙΑΣ, ΦΟΙΝΙΚΗ ΜΕΣΣΗΝΙΑΣ, ΦΟΙΝΙΚΟΥΣ ΜΕΣΣΗΝΙΑΣ, ΧΟΥΝΑΚΙΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24008', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΜΕΣΣΗΝΙΑΣ, ΑΓΡΙΛΟΒΟΥΝΟ ΜΕΣΣΗΝΙΑΣ, ΑΝΩ ΜΕΛΠΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΒΡΑΧΟΣ ΜΕΣΣΗΝΙΑΣ, ΒΡΥΣΟΥΛΑ ΜΕΣΣΗΝΙΑΣ, ΔΑΣΟΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΔΕΣΥΛΛΑΣ ΜΕΣΣΗΝΙΑΣ, ΔΙΑΒΟΛΙΤΣΙ ΜΕΣΣΗΝΙΑΣ, ΗΛΕΚΤΡΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΡΝΑΣΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΩ ΜΕΛΠΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΕΝΤΡΙΚΟ ΜΕΣΣΗΝΙΑΣ, ΚΩΝΣΤΑΝΤΙΝΟΙ ΜΕΣΣΗΝΙΑΣ, ΜΑΛΤΑ ΜΕΣΣΗΝΙΑΣ, ΜΑΝΔΡΑ ΜΕΣΣΗΝΙΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΜΕΣΣΗΝΙΑΣ, ΠΑΡΑΠΟΥΓΚΙ ΜΕΣΣΗΝΙΑΣ, ΠΗΓΗ ΜΕΛΠΕΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΠΛΑΤΑΝΑ ΜΕΣΣΗΝΙΑΣ, ΠΟΛΙΧΝΗ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24009', Area: 'ΘΟΥΡΙΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24011', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΠΕΤΡΟΣ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΑΜΦΙΘΕΑ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΑΝΩ ΔΩΡΙΟ ΜΕΣΣΗΝΙΑΣ, ΒΑΣΙΛΙΚΟ ΜΕΣΣΗΝΙΑΣ, ΔΩΡΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΩ ΑΜΦΙΘΕΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΩ ΜΑΛΘΗ ΜΕΣΣΗΝΙΑΣ, ΚΟΚΛΑΣ ΜΕΣΣΗΝΙΑΣ, ΜΑΛΘΗ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24016', Area: 'ΑΛΤΟΜΙΡΑ ΜΕΣΣΗΝΙΑΣ, ΑΝΑΤΟΛΙΚΟ ΜΕΣΣΗΝΙΑΣ, ΑΝΩ ΔΟΛΟΙ ΜΕΣΣΗΝΙΑΣ, ΒΟΡΕΙΟ ΜΕΣΣΗΝΙΑΣ, ΔΕΝΔΡΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΙΑΝΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΜΠΟΣ ΑΒΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΩ ΔΟΛΟΙ ΜΕΣΣΗΝΙΑΣ, ΚΕΝΤΡΟ ΜΕΣΣΗΝΙΑΣ, ΚΙΤΡΙΕΣ ΜΕΣΣΗΝΙΑΣ, ΚΡΥΑ ΒΡΥΣΗ ΠΗΓΑΔΙΩΝ ΜΕΣΣΗΝΙΑΣ, ΛΑΓΚΑΔΙΑ ΜΕΣΣΗΝΙΑΣ, ΜΑΛΤΑ ΣΤΑΥΡΟΠΗΓΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΟΡΟΒΑΣ ΜΕΣΣΗΝΙΑΣ, ΠΗΓΑΔΙΑ ΚΑΛΑΜΩΝ ΜΕΣΣΗΝΙΑΣ, ΠΛΑΤΩΜΑ ΜΕΣΣΗΝΙΑΣ, ΡΙΖΑΝΑ ΜΕΣΣΗΝΙΑΣ, ΣΤΑΥΡΟΠΗΓΙΟ ΜΕΣΣΗΝΙΑΣ, ΤΟΥΜΠΙΑ ΜΕΣΣΗΝΙΑΣ, ΧΩΡΑ ΓΑΙΤΣΩΝ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24022', Area: 'ΑΓΙΑ ΣΟΦΙΑ ΜΕΣΣΗΝΙΑΣ, ΓΙΑΤΡΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΕΞΩΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΖΑΧΑΡΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΑΜΙΤΣΙ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΥΒΕΣ ΠΡΟΣΗΛΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΚΑΜΠΟΣ ΚΑΡΔΑΜΥΛΗΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΡΔΑΜΥΛΗ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΑΦΥΓΙΟ ΜΕΣΣΗΝΙΑΣ, ΛΑΚΚΟΣ ΜΕΣΣΗΝΙΑΣ, ΝΕΟ ΠΡΟΑΣΤΙΟ ΜΕΣΣΗΝΙΑΣ, ΠΕΔΙΝΟ ΜΕΣΣΗΝΙΑΣ, ΠΕΤΡΟΒΟΥΝΙ ΜΕΣΣΗΝΙΑΣ, ΠΡΟΑΣΤΙΟ ΜΕΣΣΗΝΙΑΣ, ΠΡΟΣΗΛΙΟ ΜΕΣΣΗΝΙΑΣ, ΤΣΕΡΙΑ ΜΕΣΣΗΝΙΑΣ, ΧΩΡΑ ΕΞΩΧΩΡΙΟΥ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24100', Area: 'ΑΒΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΦΛΩΡΟΣ ΜΕΣΣΗΝΙΑΣ, ΑΙΘΑΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΙΠΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΚΟΒΙΤΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΑΚΡΟΓΙΑΛΙ ΜΕΣΣΗΝΙΑΣ, ΑΛΩΝΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΝΕΜΟΜΥΛΟΣ ΜΕΣΣΗΝΙΑΣ, ΑΝΘΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΝΤΙΚΑΛΑΜΟΣ ΜΕΣΣΗΝΙΑΣ, ΑΝΩ ΑΜΦΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΝΩ ΒΕΡΓΑ ΜΕΣΣΗΝΙΑΣ, ΑΡΑΧΟΒΑ ΜΕΣΣΗΝΙΑΣ, ΑΡΙΟΧΩΡΙ ΜΕΣΣΗΝΙΑΣ, ΑΣΠΡΟΠΟΥΛΙΑ ΜΕΣΣΗΝΙΑΣ, ΑΣΠΡΟΧΩΜΑ ΜΕΣΣΗΝΙΑΣ, ΔΙΑΣΕΛΛΑ ΜΕΣΣΗΝΙΑΣ, ΔΡΟΣΟΠΗΓΗ ΜΕΣΣΗΝΙΑΣ, ΕΛΑΙΟΧΩΡΙ ΚΑΛΑΜΩΝ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΑΜΑΤΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΑΜΙ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΛΙΘΕΑ ΚΑΛΑΜΑΤΑΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΣΑΡΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΣΙΚΟΒΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΩ ΑΜΦΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΚΑΤΩ ΒΕΡΓΑ ΜΕΣΣΗΝΙΑΣ, ΚΟΥΡΗΣ ΜΕΣΣΗΝΙΑΣ, ΚΟΥΤΑΛΑ ΜΕΣΣΗΝΙΑΣ, ΛΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΜΕΓΑΛΗ ΜΑΝΤΙΝΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΜΕΝΙΝΑ ΜΕΣΣΗΝΙΑΣ, ΜΙΚΡΑ ΜΑΝΤΙΝΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΜΙΚΡΟΜΑΝΗ ΜΕΣΣΗΝΙΑΣ, ΜΟΝΗ ΒΕΛΑΝΙΔΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΜΟΝΗ ΓΑΡΔΙΚΙΟΥ ΜΕΣΣΗΝΙΑΣ, ΜΟΝΗ ΔΙΜΙΟΒΗΣ ΜΕΣΣΗΝΙΑΣ, ΜΠΟΥΡΝΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΞΕΡΟΚΑΜΠΙ ΜΕΣΣΗΝΙΑΣ, ΠΑΡΑΛΙΑ ΒΕΡΓΑΣ ΜΕΣΣΗΝΙΑΣ, ΠΕΡΙΒΟΛΑΚΙΑ ΚΑΛΑΜΩΝ ΜΕΣΣΗΝΙΑΣ, ΠΗΔΗΜΑ ΜΕΣΣΗΝΙΑΣ, ΠΛΑΤΥ ΜΕΣΣΗΝΙΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΣΠΕΡΧΟΓΕΙΑ ΜΕΣΣΗΝΙΑΣ, ΣΠΙΤΑΚΙΑ ΜΕΣΣΗΝΙΑΣ, ΣΩΤΗΡΙΑΝΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΧΑΡΑΥΓΗ ΣΩΤΗΡΙΑΝΙΚΩΝ ΜΕΣΣΗΝΙΑΣ, ΧΡΙΣΤΟΦΙΛΑΙΙΚΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24131', Area: 'ΚΑΛΑΜΑΤΑΣ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24132', Area: 'ΚΑΛΑΜΑΤΑΣ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24133', Area: 'ΚΑΛΑΜΑΤΑΣ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24134', Area: 'ΚΑΛΑΜΑΤΑΣ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24200', Area: 'ΑΒΡΑΜΙΟ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΑΥΓΟΥΣΤΙΝΟΣ ΜΕΣΣΗΝΙΑΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΜΕΣΣΗΝΗΣ ΜΕΣΣΗΝΙΑΣ, ΑΝΑΛΗΨΗ ΜΕΣΣΗΝΙΑΣ, ΒΕΛΙΚΑ ΜΕΣΣΗΝΙΑΣ, ΔΡΑΚΟΝΕΡΙ ΜΕΣΣΗΝΙΑΣ, ΚΑΡΤΕΡΟΛΙ ΜΕΣΣΗΝΙΑΣ, ΛΕΥΚΟΧΩΡΑ ΜΕΣΣΗΝΙΑΣ, ΛΥΚΟΤΡΑΦΟΣ ΜΕΣΣΗΝΙΑΣ, ΜΑΔΕΝΑ ΜΕΣΣΗΝΙΑΣ, ΜΑΥΡΟΜΜΑΤΙ ΠΑΜΙΣΟΥ ΜΕΣΣΗΝΙΑΣ, ΜΕΣΣΗΝΗ ΜΕΣΣΗΝΙΑΣ, ΜΟΣΧΟΧΩΡΙΟ ΜΕΣΣΗΝΙΑΣ, ΜΥΛΩΝΑΣ ΜΕΣΣΗΝΙΑΣ, ΜΥΡΤΟΠΟΤΑΜΙΑ ΜΕΣΣΗΝΙΑΣ, ΝΕΟΧΩΡΙ ΑΡΙΣΤΟΜΕΝΟΥΣ ΜΕΣΣΗΝΙΑΣ, ΞΙΝΟΣ ΜΕΣΣΗΝΙΑΣ, ΠΑΡΑΛΙΑ ΒΕΛΙΚΑΣ ΜΕΣΣΗΝΙΑΣ, ΠΙΛΑΛΙΣΤΡΑ ΜΕΣΣΗΝΙΑΣ, ΠΙΠΕΡΙΤΣΑ ΜΕΣΣΗΝΙΑΣ, ΣΠΙΤΑΛΙ ΜΕΣΣΗΝΙΑΣ, ΣΤΡΕΦΙΟ ΜΕΣΣΗΝΙΑΣ, ΧΡΥΣΟΦΟΡΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24300', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΜΕΣΣΗΝΙΑΣ, ΑΓΡΙΛΟΣ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΕΞΟΧΙΚΟ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΚΟΥΝΤΡΙ ΜΕΣΣΗΝΙΑΣ, ΛΑΓΚΟΥΒΑΡΔΟΣ ΜΕΣΣΗΝΙΑΣ, ΛΕΜΠΕΣΤΕΝΑ ΜΕΣΣΗΝΙΑΣ, ΛΙΜΕΝΑΡΙ ΜΕΣΣΗΝΙΑΣ, ΜΕΡΟΛΙΘΙ ΜΕΣΣΗΝΙΑΣ, ΠΛΑΤΗ ΜΕΣΣΗΝΙΑΣ, ΣΤΟΜΙΟ ΜΕΣΣΗΝΙΑΣ, ΦΙΛΙΑΤΡΑ ΜΕΣΣΗΝΙΑΣ, ΧΑΛΑΖΟΝΙΟ ΜΕΣΣΗΝΙΑΣ, ΧΡΙΣΤΙΑΝΟΥΠΟΛΗ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24400', Area: 'ΑΜΠΕΛΟΦΥΤΟ ΜΕΣΣΗΝΙΑΣ, ΒΑΛΤΑ ΜΕΣΣΗΝΙΑΣ, ΒΑΤΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΒΡΟΜΟΝΕΡΙ ΜΕΣΣΗΝΙΑΣ, ΓΑΡΓΑΛΙΑΝΟΙ ΜΕΣΣΗΝΙΑΣ, ΚΑΝΑΛΟΣ ΜΕΣΣΗΝΙΑΣ, ΛΕΥΚΗ ΜΕΣΣΗΝΙΑΣ, ΜΑΡΑΘΟΠΟΛΗ ΜΕΣΣΗΝΙΑΣ, ΜΟΥΖΑΚΙ ΜΕΣΣΗΝΙΑΣ, ΠΗΓΑΔΙΑ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΠΡΩΤΗ ΝΗΣΟΣ ΜΕΣΣΗΝΙΑΣ, ΠΥΡΓΟΣ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΡΙΚΙΑ ΜΕΣΣΗΝΙΑΣ, ΦΛΟΚΑ ΜΕΣΣΗΝΙΑΣ, ΧΟΧΛΑΣΤΗ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '24500', Area: 'ΑΓΙΑΝΝΑΚΗΣ ΜΕΣΣΗΝΙΑΣ, ΑΛΙΜΑΚΙ ΜΕΣΣΗΝΙΑΣ, ΑΝΥΔΡΟ ΜΕΣΣΗΝΙΑΣ, ΑΝΩ ΚΑΛΟ ΝΕΡΟ ΜΕΣΣΗΝΙΑΣ, ΑΡΜΕΝΙΟΙ ΜΕΣΣΗΝΙΑΣ, ΒΡΥΣΕΣ ΤΡΙΦΥΛΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΒΡΥΣΕΣ ΦΙΛΙΑΤΡΩΝ ΜΕΣΣΗΝΙΑΣ, ΔΑΡΑΣ ΡΟΔΙΑΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΚΚΑΒΑΣ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΟ ΝΕΡΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΛΟΓΕΡΕΣΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΑΡΒΟΥΝΙ ΜΕΣΣΗΝΙΑΣ, ΚΛΩΝΙΟ ΜΕΣΣΗΝΙΑΣ, ΚΥΠΑΡΙΣΣΙΑ ΜΕΣΣΗΝΙΑΣ, ΛΑΝΤΖΟΥΝΑΤΟ ΜΕΣΣΗΝΙΑΣ, ΛΥΚΟΥΔΕΣΙ ΜΕΣΣΗΝΙΑΣ, ΜΑΛΗ ΜΕΣΣΗΝΙΑΣ, ΜΕΜΙ ΜΕΣΣΗΝΙΑΣ, ΜΟΥΡΙΑΤΑΔΑ ΜΕΣΣΗΝΙΑΣ, ΜΠΛΕΜΕΝΙΑΝΟΙ ΜΕΣΣΗΝΙΑΣ, ΜΥΛΟΙ ΜΕΣΣΗΝΙΑΣ, ΜΥΡΟ ΜΕΣΣΗΝΙΑΣ, ΞΗΡΟΚΑΜΠΟΣ ΜΕΣΣΗΝΙΑΣ, ΠΑΛΑΙΑ ΒΡΥΣΗ ΜΕΣΣΗΝΙΑΣ, ΠΕΡΔΙΚΟΝΕΡΙ ΜΕΣΣΗΝΙΑΣ, ΡΑΠΤΟΠΟΥΛΟ ΜΕΣΣΗΝΙΑΣ, ΡΑΧΕΣ ΜΕΣΣΗΝΙΑΣ, ΡΟΔΙΑ ΜΕΣΣΗΝΙΑΣ, ΡΟΥΖΑΚΙ ΜΕΣΣΗΝΙΑΣ, ΣΕΛΛΑΣ ΜΕΣΣΗΝΙΑΣ, ΣΠΗΛΙΑ ΜΕΣΣΗΝΙΑΣ, ΣΤΑΣΙΟ ΜΕΣΣΗΝΙΑΣ, ΤΕΡΨΙΘΕΑ ΜΕΣΣΗΝΙΑΣ, ΤΡΙΠΥΛΑ ΜΕΣΣΗΝΙΑΣ, ΦΑΡΑΚΛΑΔΑ ΜΕΣΣΗΝΙΑΣ', Prefecture: 'Μεσσηνίας' },
    { PostalCode: '67061', Area: 'ΑΒΔΗΡΑ ΞΑΝΘΗΣ, ΒΕΛΟΝΗ ΞΑΝΘΗΣ, ΓΚΙΩΝΑ ΞΑΝΘΗΣ, ΔΑΦΝΗ ΞΑΝΘΗΣ, ΕΡΩΔΙΟΣ ΞΑΝΘΗΣ, ΛΕΥΚΙΠΟΣ ΞΑΝΘΗΣ, ΜΑΓΓΑΝΑ ΞΑΝΘΗΣ, ΜΑΝΔΡΑ ΞΑΝΘΗΣ, ΜΕΛΙΣΣΑ ΞΑΝΘΗΣ, ΜΥΡΩΔΑΤΟ ΞΑΝΘΗΣ, ΠΑΙΔΙΚΕΣ ΚΑΤΑΣΚΗΝΩΣΕΙΣ ΞΑΝΘΗΣ, ΠΕΖΟΥΛΑ ΞΑΝΘΗΣ, ΠΡΩΤΑΓΟΡΑΣ ΞΑΝΘΗΣ, ΣΚΑΛΑ ΑΒΔΗΡΩΝ ΞΑΝΘΗΣ', Prefecture: 'Ξάνθης' },
    { PostalCode: '67062', Area: 'ΑΝΩ ΚΑΡΥΟΦΥΤΟ ΞΑΝΘΗΣ, ΔΑΣΙΚΟ ΧΩΡΙΟ ΞΑΝΘΗΣ, ΔΑΦΝΩΝΑΣ ΞΑΝΘΗΣ, ΙΩΝΙΚΟ ΞΑΝΘΗΣ, ΚΑΛΛΙΘΕΑ ΞΑΝΘΗΣ, ΚΑΛΥΒΑ ΞΑΝΘΗΣ, ΚΑΣΤΑΝΙΤΗΣ ΞΑΝΘΗΣ, ΚΑΤΩ ΙΩΝΙΚΟ ΞΑΝΘΗΣ, ΚΑΤΩ ΚΑΡΥΟΦΥΤΟ ΞΑΝΘΗΣ, ΚΟΜΝΗΝΑ ΞΑΝΘΗΣ, ΛΕΙΒΑΔΙΤΗΣ ΞΑΝΘΗΣ, ΛΥΚΟΔΡΟΜΙΟ ΞΑΝΘΗΣ, ΜΑΡΓΑΡΙΤΙ ΞΑΝΘΗΣ, ΝΕΟΧΩΡΙ ΞΑΝΘΗΣ, ΣΙΔΗΡΟΠΕΤΡΑ ΞΑΝΘΗΣ, ΣΤΑΥΡΟΥΠΟΛΗ ΞΑΝΘΗΣ, ΣΤΑΥΡΟΧΩΡΙ ΞΑΝΘΗΣ, ΥΔΡΑΓΩΓΕΙΟ ΞΑΝΘΗΣ', Prefecture: 'Ξάνθης' },
    { PostalCode: '67064', Area: 'ΑΝΩ ΠΟΛΥΣΙΤΟ ΞΑΝΘΗΣ, ΒΑΦΑΙΙΚΑ ΞΑΝΘΗΣ, ΓΕΝΙΣΕΑ ΞΑΝΘΗΣ, ΚΟΥΤΣΟ ΞΑΝΘΗΣ, ΠΟΛΥΣΙΤΟ ΞΑΝΘΗΣ, ΣΥΔΙΝΗ ΞΑΝΘΗΣ', Prefecture: 'Ξάνθης' },
    { PostalCode: '67100', Area: 'ΑΙΩΡΑ ΞΑΝΘΗΣ, ΑΚΑΡΠΟ ΞΑΝΘΗΣ, ΑΛΙΚΟΧΩΡΙ ΞΑΝΘΗΣ, ΑΛΚΥΟΝΗ ΞΑΝΘΗΣ, ΑΛΜΑ ΞΑΝΘΗΣ, ΑΝΘΗΡΟ ΞΑΝΘΗΣ, ΑΝΩ ΚΙΡΡΑ ΞΑΝΘΗΣ, ΑΣΚΥΡΑ ΞΑΝΘΗΣ, ΑΥΞΕΝΤΙΟΥ ΞΑΝΘΗΣ, ΑΧΛΑΔΙΑ ΞΑΝΘΗΣ, ΒΑΝΙΑΝΟ ΞΑΝΘΗΣ, ΒΑΣΙΛΟΧΩΡΙ ΞΑΝΘΗΣ, ΒΕΛΟΧΩΡΙ ΞΑΝΘΗΣ, ΓΑΛΑΝΗ ΞΑΝΘΗΣ, ΓΕΡΑΚΑΣ ΞΑΝΘΗΣ, ΓΙΑΛΙΣΤΕΡΑ ΞΑΝΘΗΣ, ΓΟΡΓΟΝΑ ΞΑΝΘΗΣ, ΓΡΗΓΟΡΟ ΞΑΝΘΗΣ, ΔΙΑΦΟΡΟ ΞΑΝΘΗΣ, ΔΙΟΜΗΔΕΙΑ ΞΑΝΘΗΣ, ΔΡΟΣΕΡΟ ΞΑΝΘΗΣ, ΕΡΑΝΟΣ ΞΑΝΘΗΣ, ΕΥΜΟΙΡΟ ΞΑΝΘΗΣ, ΖΟΥΜΠΟΥΛΙ ΞΑΝΘΗΣ, ΘΕΟΤΟΚΟΣ ΞΑΝΘΗΣ, ΙΣΑΙΑ ΞΑΝΘΗΣ, ΚΑΛΛΙΘΕΑ ΕΥΜΟΙΡΟΥ ΞΑΝΘΗΣ, ΚΑΠΝΟΑΝΘΟΣ ΞΑΝΘΗΣ, ΚΕΤΙΚΙ ΞΑΝΘΗΣ, ΚΙΜΜΕΡΙΑ ΞΑΝΘΗΣ, ΚΙΡΡΑ ΞΑΝΘΗΣ, ΚΟΤΙΝΟ ΞΑΝΘΗΣ, ΚΟΥΤΣΟΜΥΤΗΣ ΞΑΝΘΗΣ, ΚΡΑΝΙΑ ΞΑΝΘΗΣ, ΚΥΚΝΟΣ ΞΑΝΘΗΣ, ΛΑΜΠΡΙΝΟ ΞΑΝΘΗΣ, ΛΕΥΚΗ ΞΑΝΘΗΣ, ΛΕΥΚΟΠΕΤΡΑ ΞΑΝΘΗΣ, ΛΙΒΑΔΙ ΞΑΝΘΗΣ, ΜΑΓΙΚΟ ΞΑΝΘΗΣ, ΜΑΝΤΑΙΝΑ ΞΑΝΘΗΣ, ΜΕΓΑ ΕΥΜΟΙΡΟ ΞΑΝΘΗΣ, ΜΕΓΑ ΤΥΜΠΑΝΟ ΞΑΝΘΗΣ, ΜΙΚΡΟ ΤΥΜΠΑΝΟ ΞΑΝΘΗΣ, ΜΟΝΗ ΤΑΞΙΑΡΧΩΝ ΞΑΝΘΗΣ, ΜΥΚΗ ΞΑΝΘΗΣ, ΝΕΑ ΜΟΡΣΙΝΗ ΞΑΝΘΗΣ, ΝΕΟΣ ΖΥΓΟΣ ΞΑΝΘΗΣ, ΞΑΝΘΗ ΞΑΝΘΗΣ, ΟΑΣΙΣ ΞΑΝΘΗΣ, ΟΡΕΣΤΙΝΗ ΞΑΝΘΗΣ, ΠΑΛΑΙΑ ΔΕΞΑΜΕΝΗ ΞΑΝΘΗΣ, ΠΑΛΑΙΑ ΜΟΡΣΙΝΗ ΞΑΝΘΗΣ, ΠΑΛΑΙΟ ΚΑΤΡΑΜΙ ΞΑΝΘΗΣ, ΠΑΛΑΙΟΣ ΖΥΓΟΣ ΞΑΝΘΗΣ, ΠΑΝΕΠΙΣΤΗΜΙΟΥΠΟΛΗ ΞΑΝΘΗΣ, ΠΑΝΕΡΙ ΞΑΝΘΗΣ, ΠΕΛΕΚΗΤΟ ΞΑΝΘΗΣ, ΠΕΤΕΙΝΟΣ ΞΑΝΘΗΣ, ΠΕΤΡΟΧΩΡΙ ΞΑΝΘΗΣ, ΠΗΓΑΔΙΑ ΞΑΝΘΗΣ, ΠΙΛΗΜΑ ΞΑΝΘΗΣ, ΠΟΡΤΑ ΞΑΝΘΗΣ, ΠΡΙΟΝΙΟ ΞΑΝΘΗΣ, ΠΡΟΣΗΛΙΟ ΞΑΝΘΗΣ, ΠΥΡΓΟΣ ΞΑΝΘΗΣ, ΡΑΧΗ ΞΑΝΘΗΣ, ΡΕΥΜΑ ΞΑΝΘΗΣ, ΡΥΜΗ ΞΑΝΘΗΣ, ΣΕΛΕΡΟ ΞΑΝΘΗΣ, ΣΕΜΕΛΗ ΞΑΝΘΗΣ, ΣΗΜΑΝΤΡΑ ΞΑΝΘΗΣ, ΣΙΡΟΚΟ ΞΑΝΘΗΣ, ΣΜΙΝΘΗ ΞΑΝΘΗΣ, ΣΟΥΛΑ ΞΑΝΘΗΣ, ΣΟΥΝΙΟ ΞΑΝΘΗΣ, ΣΤΑΜΑΤΙ ΞΑΝΘΗΣ, ΣΤΗΡΙΓΜΑ ΞΑΝΘΗΣ, ΤΕΚΤΩΝ ΞΑΝΘΗΣ, ΤΟΞΟΤΕΣ ΞΑΝΘΗΣ, ΤΡΙΓΩΝΟ ΞΑΝΘΗΣ, ΥΔΡΟΧΩΡΙΟ ΞΑΝΘΗΣ, ΦΕΛΩΝΗ ΞΑΝΘΗΣ, ΦΙΛΙΑ ΞΑΝΘΗΣ, ΧΡΥΣΑ ΞΑΝΘΗΣ, ΧΡΥΣΟ ΞΑΝΘΗΣ, ΩΡΑΙΟ ΞΑΝΘΗΣ', Prefecture: 'Ξάνθης' },
    { PostalCode: '67200', Area: 'ΑΒΑΤΟ ΞΑΝΘΗΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΞΑΝΘΗΣ, ΓΚΙΖΕΛΑ ΞΑΝΘΗΣ, ΔΑΣΟΧΩΡΙ ΞΑΝΘΗΣ, ΔΕΚΑΡΧΟ ΞΑΝΘΗΣ, ΕΞΟΧΗ ΞΑΝΘΗΣ, ΕΥΛΑΛΟ ΞΑΝΘΗΣ, ΗΛΙΟΚΕΝΤΗΜΑ ΞΑΝΘΗΣ, ΗΛΙΟΠΕΤΡΑ ΞΑΝΘΗΣ, ΘΑΛΑΣΣΙΑ ΞΑΝΘΗΣ, ΚΕΝΤΗΤΗ ΞΑΝΘΗΣ, ΚΟΣΜΗΤΗ ΞΑΝΘΗΣ, ΚΟΣΣΟΣ ΞΑΝΘΗΣ, ΚΡΕΜΑΣΤΗ ΞΑΝΘΗΣ, ΚΥΡΝΟΣ ΞΑΝΘΗΣ, ΚΥΨΕΛΗ ΞΑΝΘΗΣ, ΜΙΚΡΟΧΩΡΙ ΞΑΝΘΗΣ, ΝΕΑ ΑΜΙΣΟΣ ΞΑΝΘΗΣ, ΝΕΟ ΕΡΑΣΜΙΟ ΞΑΝΘΗΣ, ΟΛΒΙΟ ΞΑΝΘΗΣ, ΟΡΦΑΝΟ ΞΑΝΘΗΣ, ΠΑΛΑΙΟ ΕΡΑΣΜΙΟ ΞΑΝΘΗΣ, ΠΑΛΑΙΟ ΟΛΒΙΟ ΞΑΝΘΗΣ, ΠΟΙΜΝΗ ΞΑΝΘΗΣ, ΡΑΔΙΟΣΤΑΘΜΟΣ ΞΑΝΘΗΣ', Prefecture: 'Ξάνθης' },
    { PostalCode: '67300', Area: 'ΑΙΜΟΝΙΟ ΞΑΝΘΗΣ, ΑΚΡΑΙΟΣ ΞΑΝΘΗΣ, ΑΝΩ ΘΕΡΜΕΣ ΞΑΝΘΗΣ, ΓΙΔΟΤΟΠΟΣ ΞΑΝΘΗΣ, ΓΛΑΥΚΗ ΞΑΝΘΗΣ, ΔΗΜΑΡΙΟ ΞΑΝΘΗΣ, ΔΙΑΣΠΑΡΤΟ ΞΑΝΘΗΣ, ΔΟΥΡΓΟΥΤΙ ΞΑΝΘΗΣ, ΕΧΙΝΟΣ ΞΑΝΘΗΣ, ΘΕΡΜΕΣ ΞΑΝΘΗΣ, ΙΑΜΑΤΙΚΕΣ ΠΗΓΕΣ ΞΑΝΘΗΣ, ΚΑΛΟΤΥΧΟ ΞΑΝΘΗΣ, ΚΕΝΤΑΥΡΟΣ ΞΑΝΘΗΣ, ΚΙΔΑΡΙΣ ΞΑΝΘΗΣ, ΚΟΡΥΦΗ ΞΑΝΘΗΣ, ΚΟΤΤΑΝΗ ΞΑΝΘΗΣ, ΚΟΤΥΛΗ ΞΑΝΘΗΣ, ΚΟΥΝΔΟΥΡΟΣ ΞΑΝΘΗΣ, ΛΥΚΟΤΟΠΟΣ ΞΑΝΘΗΣ, ΜΕΔΟΥΣΑ ΞΑΝΘΗΣ, ΜΕΛΙΒΟΙΑ ΞΑΝΘΗΣ, ΜΕΣΕΣ ΘΕΡΜΕΣ ΞΑΝΘΗΣ, ΠΑΧΝΗ ΞΑΝΘΗΣ, ΠΟΛΥΣΚΙΟ ΞΑΝΘΗΣ, ΠΟΤΑΜΟΧΩΡΙ ΞΑΝΘΗΣ, ΡΕΜΑΤΙΑ ΞΑΝΘΗΣ, ΣΑΤΡΕΣ ΞΑΝΘΗΣ, ΤΕΜΕΝΟΣ ΞΑΝΘΗΣ, ΤΣΑΛΑΠΕΤΕΙΝΟΣ ΞΑΝΘΗΣ', Prefecture: 'Ξάνθης' },
    { PostalCode: '58002', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΠΕΛΛΗΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΠΕΛΛΗΣ, ΑΝΩ ΓΡΑΜΜΑΤΙΚΟ ΠΕΛΛΗΣ, ΑΡΝΙΣΣΑ ΠΕΛΛΗΣ, ΔΡΟΣΙΑ ΠΕΛΛΗΣ, ΖΕΡΒΗ ΠΕΛΛΗΣ, ΚΑΤΩ ΓΡΑΜΜΑΤΙΚΟ ΠΕΛΛΗΣ, ΝΕΑ ΞΑΝΘΟΓΙΑ ΠΕΛΛΗΣ, ΝΕΟΣ ΑΓΙΟΣ ΑΘΑΝΑΝΑΣΙΟΣ ΠΕΛΛΗΣ, ΞΑΝΘΟΓΙΑ ΠΕΛΛΗΣ, ΠΑΝΑΓΙΤΣΑ ΠΕΛΛΗΣ, ΠΕΡΑΙΑ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '58005', Area: 'ΝΕΑ ΠΕΛΛΑ ΠΕΛΛΗΣ, ΠΕΛΛΑ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '58100', Area: 'ΑΜΠΕΛΙΕΣ ΠΕΛΛΗΣ, ΑΞΟΣ ΠΕΛΛΗΣ, ΑΡΑΒΗΣΣΟΣ ΠΕΛΛΗΣ, ΑΡΧΟΝΤΙΚΟ ΠΕΛΛΗΣ, ΑΣΒΕΣΤΑΡΕΙΟ ΠΕΛΛΗΣ, ΑΧΛΑΔΟΧΩΡΙ ΠΕΛΛΗΣ, ΓΙΑΝΝΙΤΣΑ ΠΕΛΛΗΣ, ΓΥΨΟΧΩΡΙ ΠΕΛΛΗΣ, ΔΑΜΙΑΝΟ ΠΕΛΛΗΣ, ΔΡΟΣΕΡΟ ΠΕΛΛΗΣ, ΕΛΕΥΘΕΡΟΧΩΡΙ ΠΕΛΛΗΣ, ΚΡΩΜΝΗ ΠΕΛΛΗΣ, ΛΕΠΤΟΚΑΡΥΑ ΠΕΛΛΗΣ, ΜΕΛΙΣΣΙ ΠΕΛΛΗΣ, ΜΕΣΙΑΝΟ ΠΕΛΛΗΣ, ΝΕΟΣ ΜΥΛΟΤΟΠΟΣ ΠΕΛΛΗΣ, ΠΑΛΑΙΦΥΤΟ ΠΕΛΛΗΣ, ΠΑΛΙΟΣ ΜΥΛΟΤΟΠΟΣ ΠΕΛΛΗΣ, ΠΑΡΑΛΙΜΝΗ ΠΕΛΛΗΣ, ΠΕΝΤΑΠΛΑΤΑΝΟ ΠΕΛΛΗΣ, ΠΛΑΓΙΑΡΙ ΠΕΛΛΗΣ, ΠΟΝΤΟΧΩΡΙ ΠΕΛΛΗΣ, ΤΡΙΦΥΛΛΙ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '58200', Area: 'ΑΓΙΑ ΦΩΤΕΙΝΗ ΠΕΛΛΗΣ, ΑΓΡΑΣ ΠΕΛΛΗΣ, ΒΡΥΤΑ ΠΕΛΛΗΣ, ΕΔΕΣΣΑ ΠΕΛΛΗΣ, ΕΚΚΛΗΣΙΟΧΩΡΙ ΠΕΛΛΗΣ, ΚΑΙΣΑΡΙΑΝΑ ΠΕΛΛΗΣ, ΚΑΡΥΔΙΑ ΠΕΛΛΗΣ, ΚΕΡΑΣΙΕΣ ΠΕΛΛΗΣ, ΛΥΚΟΙ ΠΕΛΛΗΣ, ΜΑΡΓΑΡΙΤΑ ΠΕΛΛΗΣ, ΜΕΣΗΜΕΡΙ ΠΕΛΛΗΣ, ΝΗΣΙ ΠΕΛΛΗΣ, ΠΑΛΑΙΑ ΣΩΤΗΡΑ ΠΕΛΛΗΣ, ΠΛΑΤΑΝΗ ΠΕΛΛΗΣ, ΠΡΟΑΣΤΙΟ ΠΕΛΛΗΣ, ΡΙΖΑΡΙΟ ΠΕΛΛΗΣ, ΣΑΜΑΡΙΟ ΠΕΛΛΗΣ, ΣΩΤΗΡΑ ΠΕΛΛΗΣ, ΥΔΡΟΗΛΕΚΤΡΙΚΟΣ ΣΤΑΘΜΟΣ ΑΓΡΑ ΠΕΛΛΗΣ, ΦΛΑΜΟΥΡΙΑ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '58300', Area: 'ΑΓΙΟΣ ΛΟΥΚΑΣ ΠΕΛΛΗΣ, ΑΚΡΟΛΙΜΝΗ ΠΕΛΛΗΣ, ΓΑΛΑΤΑΔΕΣ ΠΕΛΛΗΣ, ΕΣΩΒΑΛΤΑ ΠΕΛΛΗΣ, ΚΡΥΑ ΒΡΥΣΗ ΠΕΛΛΗΣ, ΣΤΑΥΡΟΔΡΟΜΙ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '58400', Area: 'ΑΓΑΘΗ ΠΕΛΛΗΣ, ΑΛΩΡΟΣ ΠΕΛΛΗΣ, ΑΝΩ ΓΑΡΕΦΙ ΠΕΛΛΗΣ, ΑΝΩ ΡΟΔΩΝΙΑ ΠΕΛΛΗΣ, ΑΡΙΔΑΙΑ ΠΕΛΛΗΣ, ΑΨΑΛΟΣ ΠΕΛΛΗΣ, ΒΟΡΕΙΝΟ ΠΕΛΛΗΣ, ΓΑΡΕΦΕΙΟΝ ΠΕΛΛΗΣ, ΔΟΡΩΘΕΑ ΠΕΛΛΗΣ, ΘΕΟΔΩΡΑΚΕΙΟ ΠΕΛΛΗΣ, ΙΔΑ ΠΕΛΛΗΣ, ΚΑΤΩ ΓΑΡΕΦΙ ΠΕΛΛΗΣ, ΚΑΤΩ ΚΟΡΥΦΗ ΠΕΛΛΗΣ, ΚΑΤΩ ΡΟΔΩΝΙΑ ΠΕΛΛΗΣ, ΚΡΑΝΕΑ ΠΕΛΛΗΣ, ΚΩΝΣΤΑΝΤΙΑ ΠΕΛΛΗΣ, ΛΟΥΤΡΑ ΛΟΥΤΡΑΚΙΟΥ ΠΕΛΛΗΣ, ΛΟΥΤΡΑΚΙ ΠΕΛΛΗΣ, ΛΥΚΟΣΤΟΜΟ ΠΕΛΛΗΣ, ΜΕΓΑΠΛΑΤΑΝΟΣ ΠΕΛΛΗΣ, ΜΗΛΙΑ ΠΕΛΛΗΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΠΕΛΛΗΣ, ΝΕΟΧΩΡΙ ΠΕΛΛΗΣ, ΞΙΦΙΑΝΗ ΠΕΛΛΗΣ, ΟΡΜΑ ΠΕΛΛΗΣ, ΠΕΥΚΩΤΟ ΠΕΛΛΗΣ, ΠΙΠΕΡΙΕΣ ΠΕΛΛΗΣ, ΠΟΛΥΚΑΡΠΙΟ ΠΕΛΛΗΣ, ΠΡΟΜΑΧΟΙ ΠΕΛΛΗΣ, ΡΙΖΟΧΩΡΙ ΠΕΛΛΗΣ, ΣΑΡΑΚΗΝΟΙ ΠΕΛΛΗΣ, ΣΩΣΑΝΔΡΑ ΠΕΛΛΗΣ, ΤΣΑΚΟΙ ΠΕΛΛΗΣ, ΥΔΡΑΙΑ ΠΕΛΛΗΣ, ΧΡΥΣΑ ΠΕΛΛΗΣ, ΧΡΥΣΗ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '58500', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΕΛΛΗΣ, ΑΝΥΔΡΟ ΠΕΛΛΗΣ, ΑΡΣΕΝΙ ΠΕΛΛΗΣ, ΑΣΠΡΟ ΠΕΛΛΗΣ, ΔΑΦΝΗ ΠΕΛΛΗΣ, ΚΑΛΗ ΠΕΛΛΗΣ, ΚΑΛΛΙΠΟΛΗ ΠΕΛΛΗΣ, ΚΑΛΥΒΙΑ ΠΕΛΛΗΣ, ΛΑΚΚΑ ΠΕΛΛΗΣ, ΛΙΘΑΡΙΑ ΠΕΛΛΗΣ, ΛΙΠΑΡΟ ΠΕΛΛΗΣ, ΛΙΠΟΧΩΡΙ ΠΕΛΛΗΣ, ΛΟΥΤΡΟΧΩΡΙ ΠΕΛΛΗΣ, ΜΑΝΔΑΛΟ ΠΕΛΛΗΣ, ΜΑΥΡΟ ΠΕΛΛΗΣ, ΜΑΥΡΟΒΟΥΝΙ ΠΕΛΛΗΣ, ΝΕΑ ΖΩΗ ΠΕΛΛΗΣ, ΠΕΤΡΑΙΑ ΠΕΛΛΗΣ, ΠΛΕΥΡΩΜΑ ΠΕΛΛΗΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΠΕΛΛΗΣ, ΡΙΖΟ ΠΕΛΛΗΣ, ΣΑΝΔΑΛΙ ΠΕΛΛΗΣ, ΣΕΒΑΣΤΙΑΝΑ ΠΕΛΛΗΣ, ΣΚΥΔΡΑ ΠΕΛΛΗΣ', Prefecture: 'Πέλλας' },
    { PostalCode: '60062', Area: 'ΚΟΡΙΝΟΣ ΠΙΕΡΙΑΣ, ΠΑΡΑΛΙΑ ΚΟΡΙΝΟΥ ΠΙΕΡΙΑΣ', Prefecture: 'Πιερίας' },
    { PostalCode: '60063', Area: 'ΑΝΩ ΣΚΟΤΙΝΑ ΠΙΕΡΙΑΣ, ΚΑΛΥΒΙΑ ΒΑΡΙΚΟΥ ΠΙΕΡΙΑΣ, ΛΕΠΤΟΚΑΡΥΑ ΠΙΕΡΙΑΣ, ΛΙΜΑΝΙ ΛΙΤΟΧΩΡΟΥ ΠΙΕΡΙΑΣ, ΠΑΝΤΕΛΕΗΜΟΝΑΣ ΠΙΕΡΙΑΣ, ΠΑΡΑΛΙΑ ΣΚΟΤΙΝΑΣ ΠΙΕΡΙΑΣ, ΠΛΑΚΑ ΠΙΕΡΙΑΣ, ΠΟΡΟΙ ΠΙΕΡΙΑΣ, ΣΚΟΤΙΝΑ ΠΙΕΡΙΑΣ', Prefecture: 'Πιερίας' },
    { PostalCode: '60065', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΠΟΡΩΝ ΠΙΕΡΙΑΣ, ΝΕΟΙ ΠΟΡΟΙ ΠΙΕΡΙΑΣ, ΝΕΟΣ ΠΑΝΤΕΛΕΗΜΟΝΑΣ ΠΙΕΡΙΑΣ, ΠΑΡΑΛΙΑ ΠΑΝΤΕΛΕΗΜΟΝΑ ΠΙΕΡΙΑΣ, ΠΛΑΤΑΜΩΝΑΣ ΠΙΕΡΙΑΣ', Prefecture: 'Πιερίας' },
    { PostalCode: '60100', Area: 'ΑΓΙΑ ΒΑΡΒΑΡΑ ΠΙΕΡΙΑΣ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΠΕΤΡΑΣ ΠΙΕΡΙΑΣ, ΑΓΙΟΣ ΣΠΥΡΙΔΩΝΑΣ ΠΙΕΡΙΑΣ, ΑΝΔΡΟΜΑΧΗ ΠΙΕΡΙΑΣ, ΑΝΩ ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΠΙΕΡΙΑΣ, ΑΝΩ ΜΗΛΕΑ ΠΙΕΡΙΑΣ, ΑΡΩΝΑΣ ΠΙΕΡΙΑΣ, ΒΡΙΑ ΠΙΕΡΙΑΣ, ΒΡΟΝΤΟΥ ΠΙΕΡΙΑΣ, ΓΑΝΟΧΩΡΑ ΠΙΕΡΙΑΣ, ΔΙΟΝ ΠΙΕΡΙΑΣ, ΕΛΑΤΟΧΩΡΙ ΠΙΕΡΙΑΣ, ΕΛΑΦΟΣ ΠΙΕΡΙΑΣ, ΕΞΟΧΗ ΠΙΕΡΙΑΣ, ΚΑΛΛΙΘΕΑ ΠΙΕΡΙΑΣ, ΚΑΡΙΤΣΑ ΠΙΕΡΙΑΣ, ΚΑΡΥΕΣ ΠΙΕΡΙΑΣ, ΚΑΤΑΛΩΝΙΑ ΠΙΕΡΙΑΣ, ΚΑΤΕΡΙΝΗ ΠΙΕΡΙΑΣ, ΚΑΤΩ ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΠΙΕΡΙΑΣ, ΚΑΤΩ ΜΗΛΕΑ ΠΙΕΡΙΑΣ, ΚΟΝΤΑΡΙΩΤΙΣΣΑ ΠΙΕΡΙΑΣ, ΚΟΥΚΚΟΣ ΠΙΕΡΙΑΣ, ΛΑΓΟΡΡΑΧΗ ΠΙΕΡΙΑΣ, ΛΟΦΟΣ ΠΙΕΡΙΑΣ, ΜΕΛΙΑΔΙΟ ΠΙΕΡΙΑΣ, ΜΗΛΙΑ ΜΕΣΑΙΑ ΠΙΕΡΙΑΣ, ΜΗΛΙΑ ΠΙΕΡΙΑΣ, ΜΟΣΧΟΠΟΤΑΜΟΣ ΠΙΕΡΙΑΣ, ΜΟΣΧΟΧΩΡΙ ΠΙΕΡΙΑΣ, ΝΕΑ ΕΦΕΣΟΣ ΠΙΕΡΙΑΣ, ΝΕΑ ΤΡΑΠΕΖΟΥΝΤΑ ΠΙΕΡΙΑΣ, ΝΕΑ ΧΡΑΝΗ ΠΙΕΡΙΑΣ, ΝΕΟ ΚΕΡΑΜΙΔΙ ΠΙΕΡΙΑΣ, ΝΕΟΚΑΙΣΑΡΕΙΑ ΠΙΕΡΙΑΣ, ΝΕΟΣ ΑΝΩ ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΠΙΕΡΙΑΣ, ΟΛΥΜΠΙΑΚΗ ΑΚΤΗ ΠΙΕΡΙΑΣ, ΠΑΛΑΙΟ ΕΛΑΤΟΧΩΡΙ ΠΙΕΡΙΑΣ, ΠΑΛΑΙΟ ΚΕΡΑΜΙΔΙ ΠΙΕΡΙΑΣ, ΠΑΡΑΛΙΑ ΠΙΕΡΙΑΣ, ΠΕΡΙΣΤΑΣΗ ΠΙΕΡΙΑΣ, ΠΕΤΡΑ ΠΙΕΡΙΑΣ, ΠΛΑΤΑΝΑΚΙΑ ΠΙΕΡΙΑΣ, ΠΡΟΣΗΛΙΟ ΠΙΕΡΙΑΣ, ΡΑΧΗ ΠΙΕΡΙΑΣ, ΡΗΤΙΝΗ ΠΙΕΡΙΑΣ, ΡΥΑΚΙΑ ΠΙΕΡΙΑΣ, ΣΒΟΡΩΝΟΣ ΠΙΕΡΙΑΣ, ΣΕΒΑΣΤΗ ΠΙΕΡΙΑΣ, ΣΚΟΤΕΙΝΑ ΠΙΕΡΙΑΣ, ΤΟΞΟ ΠΙΕΡΙΑΣ, ΤΡΙΛΟΦΟΣ ΠΙΕΡΙΑΣ, ΦΤΕΡΗ ΠΙΕΡΙΑΣ, ΦΩΤΕΙΝΑ ΠΙΕΡΙΑΣ, ΨΥΧΙΑΤΡΙΚΟ ΝΟΣ/ΜΕΙΟ ΠΕΤΡΑΣ ΟΛΥΜΠΟΥ ΠΙΕΡΙΑΣ', Prefecture: 'Πιερίας' },
    { PostalCode: '60200', Area: 'ΛΙΤΟΧΩΡΟ ΠΙΕΡΙΑΣ, ΜΟΝΗ ΑΓΙΟΥ ΔΙΟΝΥΣΙΟΥ ΠΙΕΡΙΑΣ', Prefecture: 'Πιερίας' },
    { PostalCode: '60300', Area: 'ΑΙΓΙΝΙΟ ΠΙΕΡΙΑΣ', Prefecture: 'Πιερίας' },
    { PostalCode: '48060', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΠΡΕΒΕΖΑΣ, ΑΓΙΑ ΠΑΡΓΑΣ ΠΡΕΒΕΖΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΙΚΟΠΟΛΕΩΣ ΑΡΤΑΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΠΑΡΓΑΣ ΠΡΕΒΕΖΑΣ, ΑΝΘΟΥΣΑ ΠΡΕΒΕΖΑΣ, ΒΡΥΣΕΣ ΠΡΕΒΕΖΑΣ, ΛΙΒΑΔΑΡΙ ΠΡΕΒΕΖΑΣ, ΜΑΡΑΣ ΠΡΕΒΕΖΑΣ, ΜΟΡΦΙΟ ΘΕΣΠΡΩΤΙΑΣ, ΠΑΝΑΓΙΑ ΝΗΣΟΣ ΠΡΕΒΕΖΑΣ, ΠΑΡΓΑ ΠΡΕΒΕΖΑΣ, ΣΑΡΑΚΙΝΙΚΟ ΠΡΕΒΕΖΑΣ, ΣΠΑΘΑΡΑΙΟΙ ΘΕΣΠΡΩΤΙΑΣ, ΤΖΑΡΑ ΠΡΕΒΕΖΑΣ, ΤΡΙΚΟΡΦΟ ΠΡΕΒΕΖΑΣ, ΧΡΥΣΟΓΙΑΛΙ ΠΡΕΒΕΖΑΣ', Prefecture: 'Πρέβεζας' },
    { PostalCode: '48061', Area: 'ΑΛΩΝΙ ΠΡΕΒΕΖΑΣ, ΑΝΩ ΚΟΤΣΑΝΟΠΟΥΛΟ ΠΡΕΒΕΖΑΣ, ΑΝΩ ΡΑΧΗ ΠΡΕΒΕΖΑΣ, ΒΡΥΣΟΥΛΑ ΠΡΕΒΕΖΑΣ, ΗΛΙΟΒΟΥΝΙ ΑΡΤΑΣ, ΚΑΤΩ ΚΟΤΣΑΝΟΠΟΥΛΟ ΠΡΕΒΕΖΑΣ, ΚΑΤΩ ΡΕΥΜΑΤΙΑ ΠΡΕΒΕΖΑΣ, ΛΟΥΡΟΣ ΠΡΕΒΕΖΑΣ, ΝΕΟ ΣΦΗΝΩΤΟ ΠΡΕΒΕΖΑΣ, ΝΕΟΣ ΩΡΩΠΟΣ ΠΡΕΒΕΖΑΣ, ΡΕΥΜΑΤΙΑ ΠΡΕΒΕΖΑΣ, ΣΕΡΙΖΙΑΝΑ ΙΩΑΝΝΙΝΩΝ, ΣΚΙΑΔΑΣ ΠΡΕΒΕΖΑΣ, ΣΤΕΦΑΝΗ ΠΡΕΒΕΖΑΣ, ΣΥΚΙΕΣ ΣΕΡΙΖΙΑΝΩΝ ΙΩΑΝΝΙΝΩΝ, ΤΡΙΚΑΣΤΡΟ ΠΡΕΒΕΖΑΣ', Prefecture: 'Πρέβεζας' },
    { PostalCode: '48062', Area: 'ΑΗΔΟΝΙ ΑΧΕΡΟΥΣΙΑΣ ΠΡΕΒΕΖΑΣ, ΑΗΔΟΝΙΑ ΠΡΕΒΕΖΑΣ, ΑΜΜΟΥΔΙΑ ΠΡΕΒΕΖΑΣ, ΑΝΩ ΣΚΑΦΙΔΩΤΗ ΠΡΕΒΕΖΑΣ, ΑΧΕΡΟΥΣΙΑ ΠΡΕΒΕΖΑΣ, ΒΑΛΑΝΙΔΟΡΑΧΗ ΠΡΕΒΕΖΑΣ, ΒΑΛΑΝΙΔΟΥΣΣΑ ΠΡΕΒΕΖΑΣ, ΒΟΥΒΟΠΟΤΑΜΟΣ ΠΡΕΒΕΖΑΣ, ΒΡΑΧΟΣ ΠΡΕΒΕΖΑΣ, ΔΕΣΠΟΤΙΚΟ ΠΡΕΒΕΖΑΣ, ΔΙΚΟΡΦΟ ΠΡΕΒΕΖΑΣ, ΕΚΚΛΗΣΙΕΣ ΠΡΕΒΕΖΑΣ, ΘΕΜΕΛΟ ΠΡΕΒΕΖΑΣ, ΚΑΝΑΛΛΑΚΙ ΠΡΕΒΕΖΑΣ, ΚΑΣΤΡΙ ΓΟΡΓΟΜΥΛΟΥ ΑΡΤΑΣ, ΚΑΣΤΡΙ ΠΡΕΒΕΖΑΣ, ΚΑΤΩ ΔΕΣΠΟΤΙΚΟ ΠΡΕΒΕΖΑΣ, ΚΑΤΩ ΣΚΑΦΙΔΩΤΗ ΠΡΕΒΕΖΑΣ, ΚΟΡΥΦΟΥΛΑ ΠΡΕΒΕΖΑΣ, ΚΟΡΩΝΗ ΠΡΕΒΕΖΑΣ, ΚΟΡΩΝΟΠΟΥΛΟ ΠΡΕΒΕΖΑΣ, ΚΟΥΚΚΟΥΛΙ ΠΡΕΒΕΖΑΣ, ΚΥΨΕΛΗ ΠΡΕΒΕΖΑΣ, ΛΟΥΤΣΑ ΠΡΕΒΕΖΑΣ, ΛΥΓΙΑ ΠΡΕΒΕΖΑΣ, ΜΕΣΟΠΟΤΑΜΟ ΠΡΕΒΕΖΑΣ, ΜΟΥΖΑΚΑΙΙΚΑ ΠΡΕΒΕΖΑΣ, ΝΑΡΚΙΣΣΟΣ ΠΡΕΒΕΖΑΣ, ΞΗΡΟΛΟΦΟΣ ΠΡΕΒΕΖΑΣ, ΠΑΡΑΛΙΑ ΒΡΑΧΟΥ ΠΡΕΒΕΖΑΣ, ΠΑΡΑΛΙΑ ΛΟΥΤΣΑΣ ΠΡΕΒΕΖΑΣ, ΣΚΕΠΑΣΤΟ ΠΡΕΒΕΖΑΣ, ΣΤΑΥΡΟΧΩΡΙ ΠΡΕΒΕΖΑΣ, ΤΣΕΚΟΥΡΙ ΠΡΕΒΕΖΑΣ, ΤΣΟΥΚΝΙΔΑ ΠΡΕΒΕΖΑΣ, ΧΕΙΜΑΔΙ ΠΡΕΒΕΖΑΣ, ΧΟΧΛΑ ΠΡΕΒΕΖΑΣ', Prefecture: 'Πρέβεζας' },
    { PostalCode: '48100', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΠΡΕΒΕΖΑΣ, ΑΓΙΟΣ ΘΩΜΑΣ ΠΡΕΒΕΖΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΜΙΧΑΛΙΤΣΙΟΥ ΠΡΕΒΕΖΑΣ, ΑΡΧΑΓΓΕΛΟΣ ΠΡΕΒΕΖΑΣ, ΚΑΛΑΜΙΤΣΙ ΠΡΕΒΕΖΑΣ, ΚΑΜΑΡΙΝΑ ΠΡΕΒΕΖΑΣ, ΚΑΝΑΛΙ ΠΡΕΒΕΖΑΣ, ΚΑΣΤΡΟΣΥΚΙΑ ΠΡΕΒΕΖΑΣ, ΚΑΤΩ ΜΥΡΣΙΝΗ ΠΡΕΒΕΖΑΣ, ΚΑΤΩ ΡΙΖΑ ΠΡΕΒΕΖΑΣ, ΚΡΥΟΠΗΓΗ ΠΡΕΒΕΖΑΣ, ΜΑΖΙ ΠΡΕΒΕΖΑΣ, ΜΑΖΩΜΑ ΠΡΕΒΕΖΑΣ, ΜΕΓΑΔΕΝΔΡΟ ΠΡΕΒΕΖΑΣ, ΜΙΧΑΛΙΤΣΙ ΠΡΕΒΕΖΑΣ, ΜΥΡΣΙΝΗ ΠΡΕΒΕΖΑΣ, ΜΥΤΙΚΑΣ ΠΡΕΒΕΖΑΣ, ΝΕΑ ΘΕΣΗ ΠΡΕΒΕΖΑΣ, ΝΕΑ ΣΑΜΨΟΥΝΤΑ ΠΡΕΒΕΖΑΣ, ΝΕΑ ΣΙΝΩΠΗ ΠΡΕΒΕΖΑΣ, ΝΕΟΧΩΡΙ ΠΡΕΒΕΖΑΣ, ΝΙΚΟΠΟΛΗ ΠΡΕΒΕΖΑΣ, ΠΑΝΤΟΚΡΑΤΩΡΑΣ ΠΡΕΒΕΖΑΣ, ΠΗΔΗΜΑ ΚΥΡΑΣ ΠΡΕΒΕΖΑΣ, ΠΡΕΒΕΖΑ ΠΡΕΒΕΖΑΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΠΡΕΒΕΖΑΣ, ΡΙΖΑ ΠΡΕΒΕΖΑΣ, ΦΛΑΜΠΟΥΡΑ ΠΡΕΒΕΖΑΣ, ΨΑΘΑΚΙ ΠΡΕΒΕΖΑΣ', Prefecture: 'Πρέβεζας' },
    { PostalCode: '48200', Area: 'ΑΓΙΑ ΦΑΝΕΡΩΜΕΝΗ ΑΡΤΑΣ, ΑΜΜΟΤΟΠΟΣ ΑΡΤΑΣ, ΑΜΠΕΛΙΑ ΑΜΜΟΤΟΠΟΥ ΑΡΤΑΣ, ΑΝΩ ΔΡΥΜΩΝΑΣ ΑΡΤΑΣ, ΑΝΩΓΕΙΑΤΑ ΑΡΤΑΣ, ΑΝΩΓΕΙΟ ΑΡΤΑΣ, ΒΑΘΥ ΑΡΤΑΣ, ΒΟΥΛΙΣΤΑ ΑΡΤΑΣ, ΓΕΡΟΠΛΑΤΑΝΟΣ ΑΡΤΑΣ, ΓΚΟΥΡΑ ΑΡΤΑΣ, ΓΟΡΓΟΜΥΛΟΣ ΑΡΤΑΣ, ΓΥΜΝΟΤΟΠΟΣ ΑΡΤΑΣ, ΔΡΥΜΩΝΑΣ ΑΡΤΑΣ, ΔΡΥΟΦΥΤΟ ΑΡΤΑΣ, ΚΑΜΠΗ ΑΡΤΑΣ, ΚΕΡΑΣΩΝΑ ΑΡΤΑΣ, ΚΛΕΙΣΟΥΡΑ ΜΟΥΖΑΚΑΙΙΚΩΝ ΑΡΤΑΣ, ΚΛΕΙΣΟΥΡΑ ΦΙΛΙΠΠΙΑΔΟΣ ΑΡΤΑΣ, ΚΟΥΚΛΕΣΙ ΙΩΑΝΝΙΝΩΝ, ΜΑΡΚΑΤΕΣ ΑΡΤΑΣ, ΝΕΑ ΚΕΡΑΣΟΥΝΤΑ ΑΡΤΑΣ, ΝΕΟΣ ΓΟΡΓΟΜΥΛΟΣ ΑΡΤΑΣ, ΠΑΙΔΟΠΟΛΗ ΖΗΡΟΥ ΑΡΤΑΣ, ΠΑΝΑΓΙΑ ΑΡΤΑΣ, ΠΑΝΤΑΝΑΣΣΑ ΑΡΤΑΣ, ΠΕΝΤΕ ΠΗΓΑΔΙΑ ΑΡΤΑΣ, ΠΕΤΡΑ ΦΙΛΙΠΠΙΑΔΟΣ ΑΡΤΑΣ, ΠΟΤΑΜΙΑ ΚΟΥΚΛΕΣΙΟΥ ΙΩΑΝΝΙΝΩΝ, ΡΩΜΙΑ ΑΡΤΑΣ, ΣΤΡΟΓΓΥΛΗ ΑΡΤΑΣ, ΤΣΑΓΚΑΡΟΠΟΥΛΟ ΑΡΤΑΣ, ΥΔΡΟΗΛΕΚΤΡΙΚΟΣ ΣΤΑΘΜΟΣ ΛΟΥΡΟΥ ΑΡΤΑΣ, ΦΙΛΙΠΠΙΑΔΑ ΑΡΤΑΣ, ΧΑΛΙΚΙΑ ΑΡΤΑΣ, ΧΑΝΟΠΟΥΛΟ ΑΡΤΑΣ', Prefecture: 'Πρέβεζας' },
    { PostalCode: '48300', Area: 'ΑΓΙΑ ΤΡΙΑΔΑ ΠΟΛΥΣΤΑΦΥΛΟΥ ΠΡΕΒΕΖΑΣ, ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΠΑΠΠΑΔΑΤΩΝ ΠΡΕΒΕΖΑΣ, ΑΓΙΟΣ ΣΑΒΒΑΣ ΓΑΛΑΤΑ ΠΡΕΒΕΖΑΣ, ΑΣΣΟΣ ΠΡΕΒΕΖΑΣ, ΓΑΛΑΤΑΣ ΠΡΕΒΕΖΑΣ, ΓΑΛΗΝΗ ΑΡΤΑΣ, ΕΛΑΙΑ ΠΡΕΒΕΖΑΣ, ΖΕΡΒΟ ΠΡΕΒΕΖΑΣ, ΖΗΡΟΠΟΛΗ ΑΡΤΑΣ, ΘΕΣΠΡΩΤΙΚΟ ΠΡΕΒΕΖΑΣ, ΚΕΡΑΣΟΒΟ ΑΡΤΑΣ, ΚΡΑΝΕΑ ΠΡΕΒΕΖΑΣ, ΜΕΛΙΑΝΑ ΠΡΕΒΕΖΑΣ, ΝΙΚΟΛΙΤΣΙ ΠΡΕΒΕΖΑΣ, ΠΑΠΠΑΔΑΤΕΣ ΠΡΕΒΕΖΑΣ, ΠΛΑΤΑΝΙΑ ΠΡΕΒΕΖΑΣ, ΠΟΛΥΣΤΑΦΥΛΟ ΠΡΕΒΕΖΑΣ, ΡΙΖΟΒΟΥΝΙ ΠΡΕΒΕΖΑΣ, ΤΥΡΓΙΑ ΠΡΕΒΕΖΑΣ', Prefecture: 'Πρέβεζας' },
    { PostalCode: '74051', Area: 'ΑΗΔΟΝΟΧΩΡΙ ΗΡΑΚΛΕΙΟΥ, ΑΝΩΓΕΙΑ ΜΥΛΟΠΟΤΑΜΟΥ ΡΕΘΥΜΝΟΥ, ΑΞΟΣ ΡΕΘΥΜΝΟΥ, ΑΣΤΥΡΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΒΕΝΙ ΡΕΘΥΜΝΟΥ, ΓΩΝΙΕΣ ΜΑΛΕΒΙΖΙΟΥ ΗΡΑΚΛΕΙΟΥ, ΖΩΝΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΚΑΛΥΒΟΣ ΡΕΘΥΜΝΟΥ, ΚΑΜΑΡΑΚΙ ΗΡΑΚΛΕΙΟΥ, ΚΑΜΑΡΙΩΤΗΣ ΗΡΑΚΛΕΙΟΥ, ΚΑΤΕΡΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΚΟΥΡΟΥΤΕΣ ΡΕΘΥΜΝΟΥ, ΛΙΒΑΔΑ ΡΕΘΥΜΝΟΥ, ΛΙΒΑΔΙΑ ΡΕΘΥΜΝΟΥ, ΜΑΡΙΝΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΣΙΣΑΡΧΑ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '74052', Area: 'ΑΓΓΕΛΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΕΡΦΩΝ ΡΕΘΥΜΝΟΥ, ΑΛΦΑ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΒΙΡΑΝΕΠΙΣΚΟΠΗ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΤΡΙΠΟΔΟ ΡΕΘΥΜΝΟΥ, ΑΡΧΑΙΑ ΕΛΕΥΘΕΡΝΑ ΡΕΘΥΜΝΟΥ, ΒΕΡΓΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΒΙΡΑΝ ΕΠΙΣΚΟΠΗ ΡΕΘΥΜΝΟΥ, ΓΑΡΙΠΑΣ ΡΕΘΥΜΝΟΥ, ΔΑΦΝΗ ΡΕΘΥΜΝΟΥ, ΕΛΕΥΘΕΡΝΑ ΡΕΘΥΜΝΟΥ, ΕΡΦΟΙ ΡΕΘΥΜΝΟΥ, ΚΑΛΑΜΑΣ ΡΕΘΥΜΝΟΥ, ΚΑΛΑΝΔΑΡΕ ΡΕΘΥΜΝΟΥ, ΚΑΛΛΕΡΓΟΣ ΡΕΘΥΜΝΟΥ, ΚΕΡΑΜΩΤΑ ΡΕΘΥΜΝΟΥ, ΚΟΥΦΗ ΡΕΘΥΜΝΟΥ, ΚΥΝΗΓΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΛΑΓΚΑ ΡΕΘΥΜΝΟΥ, ΛΑΤΖΙΜΑΣ ΡΕΘΥΜΝΟΥ, ΜΑΓΝΗΣΙΑ ΡΕΘΥΜΝΟΥ, ΜΑΡΓΑΡΙΤΕΣ ΡΕΘΥΜΝΟΥ, ΜΕΛΙΔΟΝΙ ΡΕΘΥΜΝΟΥ, ΜΕΛΙΣΣΟΥΡΓΑΚΙ ΡΕΘΥΜΝΟΥ, ΟΡΘΕΣ ΡΕΘΥΜΝΟΥ, ΠΑΣΑΛΙΤΕΣ ΡΕΘΥΜΝΟΥ, ΠΕΡΑΜΑ ΡΕΘΥΜΝΟΥ, ΠΙΓΟΥΝΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΠΛΕΥΡΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΠΡΙΝΟΣ ΡΕΘΥΜΝΟΥ, ΡΟΥΠΕΣ ΡΕΘΥΜΝΟΥ, ΣΚΟΡΔΙΛΟ ΡΕΘΥΜΝΟΥ, ΣΚΟΥΛΟΥΦΙΑ ΡΕΘΥΜΝΟΥ, ΣΤΑΥΡΩΜΕΝΟΣ ΜΥΛΟΠΟΤΑΜΟΥ ΡΕΘΥΜΝΟΥ, ΤΖΑΝΝΑΚΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΧΑΝΙ ΑΛΕΞΑΝΔΡΟΥ ΡΕΘΥΜΝΟΥ, ΧΑΝΟΘΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΧΟΥΜΕΡΙ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '74053', Area: 'ΑΓΑΛΙΑΝΟΣ ΡΕΘΥΜΝΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΡΔΑΚΤΟΥ ΡΕΘΥΜΝΟΥ, ΑΓΙΑ ΠΕΛΑΓΙΑ ΡΕΘΥΜΝΟΥ, ΑΓΙΑ ΦΩΤΕΙΝΗ ΚΕΡΑΜΕ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΒΑΣΙΛΕΙΟΣ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΜΕΛΑΜΠΩΝ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΠΑΥΛΟΣ ΣΑΚΤΟΥΡΙΩΝ ΡΕΘΥΜΝΟΥ, ΑΓΚΟΥΣΕΛΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΑΚΟΥΜΙΑ ΡΕΘΥΜΝΟΥ, ΑΚΤΟΥΝΤΑ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΜΥΞΟΡΡΟΥΜΑ ΡΕΘΥΜΝΟΥ, ΑΡΔΑΚΤΟΣ ΑΓΙΟΥ ΒΑΣΙΛΕΙΟΥ ΡΕΘΥΜΝΟΥ, ΑΤΣΙΠΑΔΕΣ ΡΕΘΥΜΝΟΥ, ΒΑΤΟΣ ΡΕΘΥΜΝΟΥ, ΒΡΥΣΕΣ ΑΓΙΟΥ ΒΑΣΙΛΕΙΟΥ ΡΕΘΥΜΝΟΥ, ΔΑΡΙΒΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΔΡΙΜΙΣΚΟΣ ΡΕΘΥΜΝΟΥ, ΚΑΡΙΝΕΣ ΡΕΘΥΜΝΟΥ, ΚΑΤΣΟΓΡΙΔΑ ΡΕΘΥΜΝΟΥ, ΚΑΤΩ ΣΑΚΤΟΥΡΙΑ ΡΕΘΥΜΝΟΥ, ΚΕΝΤΡΟΧΩΡΙ ΡΕΘΥΜΝΟΥ, ΚΕΡΑΜΕΣ ΡΕΘΥΜΝΟΥ, ΚΙΣΣΟΣ ΡΕΘΥΜΝΟΥ, ΚΙΣΣΟΥ ΚΑΜΠΟΣ ΡΕΘΥΜΝΟΥ, ΚΟΚΚΙΝΑ ΧΩΡΑΦΙΑ ΡΕΘΥΜΝΟΥ, ΚΡΑΝΑ ΡΕΘΥΜΝΟΥ, ΚΡΥΑ ΒΡΥΣΗ ΛΑΜΠΗΣ ΡΕΘΥΜΝΟΥ, ΛΑΜΠΙΝΗ ΡΕΘΥΜΝΟΥ, ΜΕΛΑΜΠΕΣ ΡΕΘΥΜΝΟΥ, ΜΟΥΡΝΕ ΡΕΘΥΜΝΟΥ, ΜΥΞΟΡΡΟΥΜΑ ΡΕΘΥΜΝΟΥ, ΝΕΑ ΚΡΥΑ ΒΡΥΣΗ ΡΕΘΥΜΝΟΥ, ΞΗΡΟΚΑΜΠΟΣ ΡΕΘΥΜΝΟΥ, ΟΡΝΕ ΡΕΘΥΜΝΟΥ, ΠΑΛΑΙΟΛΟΥΤΡΑ ΡΕΘΥΜΝΟΥ, ΠΑΛΕ ΡΕΘΥΜΝΟΥ, ΠΑΞΙΜΑΔΙΑ ΔΥΟ ΡΕΘΥΜΝΟΥ, ΠΑΞΙΜΑΔΙΑ ΕΝΑ ΡΕΘΥΜΝΟΥ, ΠΛΑΤΑΝΕΣ ΡΕΘΥΜΝΟΥ, ΣΑΚΤΟΥΡΙΑ ΡΕΘΥΜΝΟΥ, ΣΠΗΛΙ ΡΕΘΥΜΝΟΥ, ΤΡΙΟΠΕΤΡΑ ΡΕΘΥΜΝΟΥ, ΦΡΑΤΙ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '74055', Area: 'ΑΡΓΥΡΟΥΠΟΛΗ ΡΕΘΥΜΝΟΥ, ΑΡΟΛΙΘΙ ΡΕΘΥΜΝΟΥ, ΑΡΧΟΝΤΙΚΗ ΡΕΘΥΜΝΟΥ, ΑΣΗ ΓΩΝΙΑ ΑΠΟΚΟΡΩΝΟΥ ΧΑΝΙΩΝ, ΕΠΙΣΚΟΠΗ ΡΕΘΥΜΝΟΥ ΡΕΘΥΜΝΟΥ, ΚΑΡΩΤΗ ΡΕΘΥΜΝΟΥ, ΚΑΤΩ ΠΟΡΟΣ ΡΕΘΥΜΝΟΥ, ΚΟΥΜΗ ΡΕΘΥΜΝΟΥ, ΜΑΡΟΥΛΟΥ ΡΕΘΥΜΝΟΥ, ΜΥΡΙΟΚΕΦΑΛΑ ΡΕΘΥΜΝΟΥ, ΠΥΡΓΟΣ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '74060', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΑΓΙΟΥ ΒΑΣΙΛΕΙΟΥ ΡΕΘΥΜΝΟΥ, ΑΜΜΟΥΔΙ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΡΟΔΑΚΙΝΟ ΡΕΘΥΜΝΟΥ, ΑΣΩΜΑΤΟΣ ΡΕΘΥΜΝΟΥ, ΔΑΜΝΟΝΙ ΡΕΘΥΜΝΟΥ, ΚΑΛΗ ΣΥΚΕΑ ΡΕΘΥΜΝΟΥ, ΚΑΛΥΨΩ ΡΕΘΥΜΝΟΥ, ΚΑΜΠΟΣ ΦΟΙΝΙΚΑ ΡΕΘΥΜΝΟΥ, ΚΑΝΕΒΟΣ ΡΕΘΥΜΝΟΥ, ΚΑΤΩ ΜΟΝΗ ΠΡΕΒΕΛΗΣ ΡΕΘΥΜΝΟΥ, ΚΑΤΩ ΡΟΔΑΚΙΝΟ ΡΕΘΥΜΝΟΥ, ΛΕΥΚΟΓΕΙΑ ΡΕΘΥΜΝΟΥ, ΜΑΡΙΟΥ ΡΕΘΥΜΝΟΥ, ΜΥΡΘΙΑΝΟΣ ΠΛΑΚΙΑΣ ΡΕΘΥΜΝΟΥ, ΜΥΡΘΙΟΣ ΦΟΙΝΙΚΑ ΡΕΘΥΜΝΟΥ, ΠΑΛΑΙΑ ΤΑΒΕΡΝΑ ΡΕΘΥΜΝΟΥ, ΠΙΣΩ ΜΟΝΗ ΠΡΕΒΕΛΗ ΡΕΘΥΜΝΟΥ, ΠΛΑΚΙΑΣ ΡΕΘΥΜΝΟΥ, ΠΟΛΥΡΙΖΟΣ ΡΕΘΥΜΝΟΥ, ΣΕΛΛΙΑ ΡΕΘΥΜΝΟΥ, ΣΟΥΔΑ ΡΕΘΥΜΝΟΥ, ΣΧΟΙΝΑΡΙΑ ΡΕΘΥΜΝΟΥ, ΦΟΙΝΙΚΑΣ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '74061', Area: 'ΑΓΙΑ ΦΩΤΕΙΝΗ ΑΜΑΡΙΟΥ ΡΕΘΥΜΝΟΥ, ΑΜΑΡΙ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΜΕΡΟΣ ΡΕΘΥΜΝΟΥ, ΑΠΟΣΤΟΛΟΙ ΡΕΘΥΜΝΟΥ, ΑΡΔΑΚΤΟΣ ΑΜΑΡΙΟΥ ΡΕΘΥΜΝΟΥ, ΒΙΣΤΑΓΗ ΡΕΘΥΜΝΟΥ, ΒΡΥΣΕΣ ΑΜΑΡΙΟΥ ΡΕΘΥΜΝΟΥ, ΒΩΛΕΩΝΕΣ ΡΕΘΥΜΝΟΥ, ΓΕΝΝΑ ΡΕΘΥΜΝΟΥ, ΓΕΡΑΚΑΡΙ ΡΕΘΥΜΝΟΥ, ΓΟΥΡΓΟΥΘΟΙ ΡΕΘΥΜΝΟΥ, ΔΡΥΓΙΕΣ ΡΕΘΥΜΝΟΥ, ΕΛΕΝΕΣ ΡΕΘΥΜΝΟΥ, ΘΡΟΝΟΣ ΡΕΘΥΜΝΟΥ, ΚΑΛΟΓΕΡΟΣ ΡΕΘΥΜΝΟΥ, ΚΑΡΔΑΚΙ ΡΕΘΥΜΝΟΥ, ΚΛΗΣΙΔΙ ΡΕΘΥΜΝΟΥ, ΜΕΡΩΝΑΣ ΡΕΘΥΜΝΟΥ, ΜΕΣΟΝΗΣΙΑ ΡΕΘΥΜΝΟΥ, ΜΟΝΑΣΤΗΡΑΚΙ ΡΕΘΥΜΝΟΥ, ΜΟΝΗ ΑΣΩΜΑΤΩΝ ΡΕΘΥΜΝΟΥ, ΟΨΙΓΙΑΣ ΡΕΘΥΜΝΟΥ, ΠΑΝΤΑΝΑΣΣΑ ΡΕΘΥΜΝΟΥ, ΠΑΤΣΟΣ ΡΕΘΥΜΝΟΥ, ΧΩΡΔΑΚΙΟ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '74100', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΡΕΘΥΜΝΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΑΔΕΛΕ ΡΕΘΥΜΝΟΥ, ΑΓΙΑ ΤΡΙΑΔΑ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΑΝΔΡΕΑΣ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΡΜΕΝΩΝ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΡΕΘΥΜΝΟΥ, ΑΓΙΟΣ ΜΑΡΚΟΣ ΡΕΘΥΜΝΟΥ, ΑΓΝΑ ΡΕΘΥΜΝΟΥ, ΑΔΕΛΕ ΡΕΘΥΜΝΟΥ, ΑΔΕΛΙΑΝΟΣ ΚΑΜΠΟΣ ΡΕΘΥΜΝΟΥ, ΑΜΝΑΤΟΣ ΡΕΘΥΜΝΟΥ, ΑΜΠΕΛΑΚΙ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΒΑΛΣΑΜΟΝΕΡΟ ΡΕΘΥΜΝΟΥ, ΑΝΩ ΜΑΛΑΚΙΟ ΡΕΘΥΜΝΟΥ, ΑΡΜΕΝΟΙ ΡΕΘΥΜΝΟΥ, ΑΣΤΕΡΙ ΡΕΘΥΜΝΟΥ, ΑΤΣΙΠΟΠΟΥΛΟ ΡΕΘΥΜΝΟΥ, ΒΕΔΕΡΟΙ ΡΕΘΥΜΝΟΥ, ΒΙΟΛΙ ΧΑΡΑΚΙ ΡΕΘΥΜΝΟΥ, ΓΑΛΛΟΣ ΡΕΘΥΜΝΟΥ, ΓΕΝΗ ΡΕΘΥΜΝΟΥ, ΓΕΡΑΝΙΟ ΡΕΘΥΜΝΟΥ, ΓΙΑΝΝΟΥΔΙ ΡΕΘΥΜΝΟΥ, ΓΟΥΛΕΔΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΓΩΝΙΑ ΡΕΘΥΜΝΟΥ, ΔΙΛΟΦΟ ΡΕΘΥΜΝΟΥ, ΚΑΒΟΥΣΙ ΡΕΘΥΜΝΟΥ, ΚΑΠΕΔΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΚΑΡΕ ΡΕΘΥΜΝΟΥ, ΚΑΡΝΑΤΖΕΣ ΡΕΘΥΜΝΟΥ, ΚΑΣΤΕΛΛΟΣ ΡΕΘΥΜΝΟΥ, ΚΑΤΩ ΒΑΛΣΑΜΟΝΕΡΟ ΡΕΘΥΜΝΟΥ, ΚΑΤΩ ΜΑΛΑΚΙΟ ΡΕΘΥΜΝΟΥ, ΚΑΨΑΛΙΑΝΑ ΡΕΘΥΜΝΟΥ, ΚΟΞΑΡΕ ΡΕΘΥΜΝΟΥ, ΚΥΡΙΑΝΝΑ ΡΕΘΥΜΝΟΥ, ΛΟΥΤΡΑ ΡΕΘΥΜΝΟΥ, ΜΑΡΟΥΛΑΣ ΡΕΘΥΜΝΟΥ, ΜΕΓΑΛΟ ΜΕΤΟΧΙ ΡΕΘΥΜΝΟΥ, ΜΕΣΗ ΡΕΘΥΜΝΟΥ, ΜΙΚΡΑ ΑΝΩΓΕΙΑ (ή ΑΝΩΓΕΙΑ ΡΕΘΥΜΝΟΥ) ΡΕΘΥΜΝΟΥ, ΜΙΚΡΟ ΜΕΤΟΧΙ ΡΕΘΥΜΝΟΥ, ΜΙΣΣΙΡΙΑ ΡΕΘΥΜΝΟΥ, ΜΟΝΗ ΑΡΚΑΔΙΟΥ ΡΕΘΥΜΝΟΥ, ΜΟΝΟΠΑΡΙ ΡΕΘΥΜΝΟΥ, ΜΥΛΟΙ ΡΕΘΥΜΝΟΥ, ΜΥΡΘΙΟΣ ΣΕΛΛΙΟΥ ΡΕΘΥΜΝΟΥ, ΞΗΡΟ ΧΩΡΙΟ ΡΕΘΥΜΝΟΥ, ΟΡΟΣ ΡΕΘΥΜΝΟΥ, ΠΑΓΚΑΛΟΧΩΡΙ ΡΕΘΥΜΝΟΥ, ΠΑΝΟΡΑΜΑ ΡΕΘΥΜΝΟΥ, ΠΕΡΙΒΟΛΙΑ ΡΕΘΥΜΝΟΥ, ΠΕΤΡΕΣ ΡΕΘΥΜΝΟΥ, ΠΗΓΗ ΡΕΘΥΜΝΟΥ, ΠΗΓΙΑΝΟΣ ΚΑΜΠΟΣ ΡΕΘΥΜΝΟΥ, ΠΙΚΡΗΣ ΡΕΘΥΜΝΟΥ, ΠΛΑΤΑΝΙΑΣ ΡΕΘΥΜΝΟΥ ΡΕΘΥΜΝΟΥ, ΠΡΑΣΙΕΣ ΡΕΘΥΜΝΟΥ, ΠΡΙΝΕΔΕΣ ΡΕΘΥΜΝΟΥ, ΠΡΙΝΕΣ ΡΕΘΥΜΝΟΥ, ΡΕΘΥΜΝΟ ΡΕΘΥΜΝΟΥ, ΡΟΥΣΣΟΣΠΙΤΙ ΡΕΘΥΜΝΟΥ, ΣΕΛΛΙΟ ΡΕΘΥΜΝΟΥ, ΣΚΑΛΕΤΑ ΡΕΘΥΜΝΟΥ, ΣΤΑΥΡΩΜΕΝΟΣ ΑΡΚΑΔΙΟΥ ΡΕΘΥΜΝΟΥ, ΣΦΑΚΑΚΙ ΡΕΘΥΜΝΟΥ, ΣΩΜΑΤΑΣ ΡΕΘΥΜΝΟΥ, ΤΡΙΑ ΜΟΝΑΣΤΗΡΙΑ ΡΕΘΥΜΝΟΥ, ΤΣΕΣΜΕΣ ΡΕΘΥΜΝΟΥ, ΦΡΑΝΤΖΕΣΚΙΑΝΑ ΜΕΤΟΧΙΑ ΡΕΘΥΜΝΟΥ, ΦΩΤΕΙΝΟΣ ΡΕΘΥΜΝΟΥ, ΧΑΜΑΛΕΥΡΙ ΡΕΘΥΜΝΟΥ, ΧΑΡΚΙΑ ΡΕΘΥΜΝΟΥ, ΧΡΟΜΟΝΑΣΤΗΡΙ ΡΕΘΥΜΝΟΥ', Prefecture: 'Ρεθύμνης' },
    { PostalCode: '69100', Area: 'ΑΓΙΑΣΜΑ ΡΟΔΟΠΗΣ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΡΟΔΟΠΗΣ, ΑΓΡΟΤΙΚΟ ΟΡΦΑΝΟΤΡΟΦΕΙΟ ΡΟΔΟΠΗΣ, ΑΔΡΙΑΝΗ ΡΟΔΟΠΗΣ, ΑΙΓΕΙΡΟΣ ΡΟΔΟΠΗΣ, ΑΜΑΡΑΝΤΑ ΡΟΔΟΠΗΣ, ΑΜΒΡΟΣΙΑ ΡΟΔΟΠΗΣ, ΑΝΘΟΧΩΡΙ ΡΟΔΟΠΗΣ, ΑΝΩ ΔΡΟΣΙΝΗ ΡΟΔΟΠΗΣ, ΑΡΑΤΟΣ ΡΟΔΟΠΗΣ, ΑΡΔΕΙΑ ΡΟΔΟΠΗΣ, ΑΡΧΟΝΤΙΚΑ ΡΟΔΟΠΗΣ, ΑΣΩΜΑΤΟΙ ΡΟΔΟΠΗΣ, ΒΑΚΟΣ ΡΟΔΟΠΗΣ, ΒΡΑΓΙΑ ΡΟΔΟΠΗΣ, ΓΡΑΤΙΝΗ ΡΟΔΟΠΗΣ, ΔΡΥΜΗ ΡΟΔΟΠΗΣ, ΔΥΜΗ ΡΟΔΟΠΗΣ, ΗΦΑΙΣΤΟΣ ΡΟΔΟΠΗΣ, ΘΑΜΝΑ ΡΟΔΟΠΗΣ, ΘΡΥΛΟΡΙΟ ΡΟΔΟΠΗΣ, ΙΑΜΠΟΛΗ ΡΟΔΟΠΗΣ, ΙΣΑΛΟ ΡΟΔΟΠΗΣ, ΙΤΕΑ ΡΟΔΟΠΗΣ, ΚΑΛΑΜΟΚΑΣΤΡΟ ΡΟΔΟΠΗΣ, ΚΑΛΛΙΘΕΑ ΡΟΔΟΠΗΣ, ΚΑΛΛΙΣΤΗ ΡΟΔΟΠΗΣ, ΚΑΛΧΑΣ ΡΟΔΟΠΗΣ, ΚΑΡΥΔΙΑ ΡΟΔΟΠΗΣ, ΚΑΤΩ ΔΡΟΣΙΝΗ ΡΟΔΟΠΗΣ, ΚΗΚΙΔΙΟ ΡΟΔΟΠΗΣ, ΚΟΜΟΤΗΝΗ ΡΟΔΟΠΗΣ, ΚΟΣΜΙΟ ΡΟΔΟΠΗΣ, ΚΡΥΟΝΕΡΙ ΡΟΔΟΠΗΣ, ΛΑΜΠΡΟ ΡΟΔΟΠΗΣ, ΜΑΥΡΟΜΑΤΙ ΡΟΔΟΠΗΣ, ΜΕΓΑ ΔΟΥΚΑΤΟ ΡΟΔΟΠΗΣ, ΜΕΓΑ ΚΡΑΝΟΒΟΥΝΙ ΡΟΔΟΠΗΣ, ΜΕΓΑΛΗ ΑΔΑ ΡΟΔΟΠΗΣ, ΜΕΛΕΤΗ ΡΟΔΟΠΗΣ, ΜΕΣΟΧΩΡΙ ΡΟΔΟΠΗΣ, ΜΕΣΣΟΥΝΗ ΡΟΔΟΠΗΣ, ΜΙΚΡΟ ΔΟΥΚΑΤΟ ΡΟΔΟΠΗΣ, ΜΙΚΡΟ ΚΡΑΝΟΒΟΥΝΙ ΡΟΔΟΠΗΣ, ΜΙΚΡΟ ΠΑΛΛΑΔΙΟ ΡΟΔΟΠΗΣ, ΜΥΤΙΚΑΣ ΡΟΔΟΠΗΣ, ΝΕΑ ΚΑΛΛΙΣΤΗ ΡΟΔΟΠΗΣ, ΝΕΟ ΚΑΛΛΥΝΤΗΡΙ ΡΟΔΟΠΗΣ, ΝΈΟ ΣΙΔΗΡΟΧΩΡΙ ΡΟΔΟΠΗΣ, ΝΥΜΦΑΙΑ ΡΟΔΟΠΗΣ, ΟΜΗΡΙΚΟ ΡΟΔΟΠΗΣ, ΠΑΓΟΥΡΙΑ ΡΟΔΟΠΗΣ, ΠΑΛΛΑΔΙΟ ΡΟΔΟΠΗΣ, ΠΑΜΦΟΡΟ ΡΟΔΟΠΗΣ, ΠΑΝΔΡΟΣΟΣ ΡΟΔΟΠΗΣ, ΠΑΡΑΔΗΜΗ ΡΟΔΟΠΗΣ, ΠΑΤΕΡΜΑ ΡΟΔΟΠΗΣ, ΠΟΡΠΗ ΡΟΔΟΠΗΣ, ΡΙΖΩΜΑ ΡΟΔΟΠΗΣ, ΡΟΔΙΤΗΣ ΡΟΔΟΠΗΣ, ΣΑΛΠΗ ΡΟΔΟΠΗΣ, ΣΑΡΑΚΗΝΗ ΡΟΔΟΠΗΣ, ΣΙΔΗΡΑΔΕΣ ΡΟΔΟΠΗΣ, ΣΤΥΛΑΡΙ ΡΟΔΟΠΗΣ, ΣΥΜΒΟΛΑ ΡΟΔΟΠΗΣ, ΣΧΟΛΗ ΑΣΤΥΝΟΜΙΑΣ ΡΟΔΟΠΗΣ, ΤΥΧΗΡΟ ΡΟΔΟΠΗΣ, ΥΦΑΝΤΕΣ ΡΟΔΟΠΗΣ, ΦΥΛΑΚΑΣ ΡΟΔΟΠΗΣ, ΦΩΛΕΑ ΡΟΔΟΠΗΣ', Prefecture: 'Ροδόπης' },
    { PostalCode: '69200', Area: 'ΑΜΑΞΑΔΕΣ ΡΟΔΟΠΗΣ, ΑΝΩ ΑΜΑΞΑΔΕΣ ΡΟΔΟΠΗΣ, ΑΣΤΡΑΙΑ ΡΟΔΟΠΗΣ, ΓΑΛΗΝΗ ΡΟΔΟΠΗΣ, ΔΙΑΛΑΜΠΗ ΡΟΔΟΠΗΣ, ΔΙΧΑΛΑ ΡΟΔΟΠΗΣ, ΕΥΘΥΜΟ ΡΟΔΟΠΗΣ, ΙΑΣΜΟΣ ΡΟΔΟΠΗΣ, ΙΠΠΙΚΟ ΡΟΔΟΠΗΣ, ΚΑΒΟΣ ΡΟΔΟΠΗΣ, ΚΟΠΤΕΡΟ ΡΟΔΟΠΗΣ, ΚΡΥΣΤΑΛΗ ΡΟΔΟΠΗΣ, ΛΗΝΟΣ ΡΟΔΟΠΗΣ, ΜΕΓΑ ΠΙΣΤΟ ΡΟΔΟΠΗΣ, ΜΕΛΛΙΤΑΙΝΑ ΡΟΔΟΠΗΣ, ΜΙΣΧΟΣ ΡΟΔΟΠΗΣ, ΜΟΝΑΧΟΙ ΡΟΔΟΠΗΣ, ΜΩΣΑΙΚΟ ΡΟΔΟΠΗΣ, ΠΑΝΕΠΙΣΤΗΜΙΟΥΠΟΛΗ ΡΟΔΟΠΗΣ, ΠΟΛΥΑΝΘΟΣ ΡΟΔΟΠΗΣ, ΠΟΛΥΑΡΝΟ ΡΟΔΟΠΗΣ, ΣΗΜΑ ΡΟΔΟΠΗΣ, ΣΩΣΤΗΣ ΡΟΔΟΠΗΣ, ΤΑΓΓΑΙΟ ΡΟΔΟΠΗΣ, ΤΑΛΗΣ ΡΟΔΟΠΗΣ, ΤΡΙΚΟΡΦΟ ΡΟΔΟΠΗΣ', Prefecture: 'Ροδόπης' },
    { PostalCode: '69300', Area: 'ΑΓΙΟΧΩΡΙ ΡΟΔΟΠΗΣ, ΑΓΡΑ ΡΟΔΟΠΗΣ, ΑΕΤΟΚΟΡΦΗ ΡΟΔΟΠΗΣ, ΑΕΤΟΛΟΦΟΣ ΡΟΔΟΠΗΣ, ΑΜΦΙΑ ΡΟΔΟΠΗΣ, ΑΝΩ ΑΣΚΗΤΕΣ ΡΟΔΟΠΗΣ, ΑΝΩ ΚΑΜΠΗ ΡΟΔΟΠΗΣ, ΑΡΙΣΒΗ ΡΟΔΟΠΗΣ, ΑΡΡΙΑΝΑ ΡΟΔΟΠΗΣ, ΑΡΣΑΚΕΙΟ ΡΟΔΟΠΗΣ, ΑΣΚΗΤΕΣ ΡΟΔΟΠΗΣ, ΑΤΑΡΝΗ ΕΒΡΟΥ, ΑΥΡΑ ΕΒΡΟΥ, ΒΕΛΚΙΟ ΡΟΔΟΠΗΣ, ΒΟΥΡΛΑ ΡΟΔΟΠΗΣ, ΔΑΡΜΕΝΗ ΡΟΔΟΠΗΣ, ΔΕΙΛΙΝΑ ΡΟΔΟΠΗΣ, ΔΙΩΝΗ ΡΟΔΟΠΗΣ, ΔΟΚΟΣ ΡΟΔΟΠΗΣ, ΔΡΟΣΙΑ ΡΟΔΟΠΗΣ, ΕΒΡΙΝΟΣ ΡΟΔΟΠΗΣ, ΕΣΟΧΗ ΡΟΔΟΠΗΣ, ΗΠΙΟ ΡΟΔΟΠΗΣ, ΙΑΣΙΟ ΡΟΔΟΠΗΣ, ΚΑΜΠΟΣ ΡΟΔΟΠΗΣ, ΚΑΣΣΙΤΕΡΑ ΡΟΔΟΠΗΣ, ΚΑΤΩ ΚΑΜΠΗ ΡΟΔΟΠΗΣ, ΚΕΡΑΣΙΑ ΚΕΧΡΟΥ ΡΟΔΟΠΗΣ, ΚΕΡΑΣΙΑ ΣΩΣΤΟΥ ΡΟΔΟΠΗΣ, ΚΕΧΡΟΣ ΡΟΔΟΠΗΣ, ΚΙΖΑΡΙΟ ΡΟΔΟΠΗΣ, ΚΙΝΥΡΑ ΡΟΔΟΠΗΣ, ΚΙΡΚΗ ΕΒΡΟΥ, ΚΟΜΑΡΟΣ ΕΒΡΟΥ, ΚΡΩΒΥΛΗ ΡΟΔΟΠΗΣ, ΛΟΦΑΡΙΟ ΡΟΔΟΠΗΣ, ΛΥΚΕΙΟ ΡΟΔΟΠΗΣ, ΜΕΣΤΗ ΕΒΡΟΥ, ΜΙΚΡΟ ΠΙΣΤΟ ΡΟΔΟΠΗΣ, ΜΙΚΡΟΣ ΚΕΧΡΟΣ ΡΟΔΟΠΗΣ, ΜΟΝΑΣΤΗΡΙ ΡΟΔΟΠΗΣ, ΜΥΣΤΑΚΑΣ ΡΟΔΟΠΗΣ, ΝΕΑ ΣΑΝΤΑ ΡΟΔΟΠΗΣ, ΝΕΔΑ ΡΟΔΟΠΗΣ, ΝΕΥΡΑ ΡΟΔΟΠΗΣ, ΝΙΚΗΤΕΣ ΡΟΔΟΠΗΣ, ΠΑΛΑΙΑ ΚΡΩΒΥΛΗ ΡΟΔΟΠΗΣ, ΠΑΡΑΛΙΑ ΚΡΩΒΥΛΗ ΡΟΔΟΠΗΣ, ΠΑΣΣΟΣ ΡΟΔΟΠΗΣ, ΠΕΡΑΜΑ ΕΒΡΟΥ, ΠΕΤΡΩΤΑ ΡΟΔΟΠΗΣ, ΠΛΑΓΙΑ ΡΟΔΟΠΗΣ, ΠΡΩΤΑΤΟ ΡΟΔΟΠΗΣ, ΡΑΓΑΔΑ ΡΟΔΟΠΗΣ, ΣΑΠΕΣ ΡΟΔΟΠΗΣ, ΣΚΑΛΩΜΑ ΡΟΔΟΠΗΣ, ΣΚΙΑΔΑ ΡΟΔΟΠΗΣ, ΣΤΑΘΜOΣ ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ ΕΒΡΟΥ, ΣΤΡΟΦΗ ΡΟΔΟΠΗΣ, ΣΤΡΥΜΗ ΡΟΔΟΠΗΣ, ΣΥΚΟΡΑΧΗ ΕΒΡΟΥ, ΤΣΙΦΛΙΚΙ ΡΟΔΟΠΗΣ, ΤΣΟΥΚΑ ΡΟΔΟΠΗΣ, ΦΙΛΛΥΡΑ ΡΟΔΟΠΗΣ, ΧΑΜΗΛΟ ΚΕΧΡΟΥ ΡΟΔΟΠΗΣ, ΧΑΜΗΛΟ ΣΑΠΩΝ ΡΟΔΟΠΗΣ, ΧΑΡΑΔΡΑ ΡΟΔΟΠΗΣ, ΧΛΟΗ ΡΟΔΟΠΗΣ', Prefecture: 'Ροδόπης' },
    { PostalCode: '69400', Area: 'ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΡΟΔΟΠΗΣ, ΑΛΚΥΩΝ ΡΟΔΟΠΗΣ, ΑΛΜΥΡΟΣ ΡΟΔΟΠΗΣ, ΑΜΠΕΛΑΚΙΑ ΡΟΔΟΠΗΣ, ΒΕΝΝΑ ΡΟΔΟΠΗΣ, ΕΡΓΑΝΗ ΡΟΔΟΠΗΣ, ΙΜΕΡΟΣ ΡΟΔΟΠΗΣ, ΛΕΥΚΕΣ ΡΟΔΟΠΗΣ, ΜΑΡΩΝΕΙΑ ΡΟΔΟΠΗΣ, ΜΙΡΑΝΑ ΡΟΔΟΠΗΣ, ΝΕΑ ΠΕΤΡΑ ΡΟΔΟΠΗΣ, ΞΥΛΑΓΑΝΗ ΡΟΔΟΠΗΣ, ΠΕΛΑΓΙΑ ΡΟΔΟΠΗΣ, ΠΛΑΤΑΝΙΤΗΣ ΡΟΔΟΠΗΣ, ΠΡΟΣΚΥΝΗΤΕΣ ΡΟΔΟΠΗΣ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΡΟΔΟΠΗΣ, ΣΑΛΜΩΝΗ ΡΟΔΟΠΗΣ, ΣΤΑΘΜΟΣ ΒΕΝΝΑΣ ΡΟΔΟΠΗΣ', Prefecture: 'Ροδόπης' },
    { PostalCode: '83100', Area: 'ΑΓΙΑ ΖΩΝΗ ΣΑΜΟΥ, ΑΓΙΑ ΜΑΡΚΕΛΛΑ ΣΑΜΟΥ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΣΑΜΟΥ, ΑΓΙΑ ΤΡΙΑΔΑ ΣΑΜΟΥ, ΑΗ ΘΑΝΑΣΗΣ ΣΑΜΟΥ, ΑΡΓΥΡΟΣ ΣΑΜΟΥ, ΑΥΛΑΚΙΑ ΒΟΥΡΛΙΩΤΩΝ ΣΑΜΟΥ, ΒΑΘΥ ΣΑΜΟΥ, ΒΑΡΕΛΛΑ ΣΑΜΟΥ, ΒΟΥΡΛΙΩΤΕΣ ΣΑΜΟΥ, ΔΙΑΠΟΡΤΙ ΣΑΜΟΥ, ΔΡΟΣΙΑ ΣΑΜΟΥ, ΖΕΡΒΟΥ ΣΑΜΟΥ, ΖΩΟΔΟΧΟΣ ΠΗΓΗ ΣΑΜΟΥ, ΚΑΜΑΡΑ (ΒΑΘΥ) ΣΑΜΟΥ, ΚΑΜΠΟΣ ΒΟΥΡΛΙΩΤΩΝ ΣΑΜΟΥ, ΚΑΣΟΝΗΣΙ ΣΑΜΟΥ, ΚΕΔΡΟ ΣΑΜΟΥ, ΚΛΗΜΑ ΣΑΜΟΥ, ΚΟΚΚΑΡΙ ΣΑΜΟΥ, ΚΟΥΜΑΡΙΩΝΑΣ ΣΑΜΟΥ, ΜΑΚΡΟΝΗΣΟ ΣΑΜΟΥ, ΜΑΡΓΑΡΙΤΕΣ ΣΑΜΟΥ, ΜΕΣΟΚΑΜΠΟΣ ΣΑΜΟΥ, ΜΟΝΗ ΒΡΟΝΤΑ ΣΑΜΟΥ, ΜΩΡΑΙΤΟΧΩΡΙ ΣΑΜΟΥ, ΝΙΚΟΛΑ ΣΑΜΟΥ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΣΑΜΟΥ, ΠΑΝΑΙΤΣΑ ΣΑΜΟΥ, ΠΕΤΑΛΙΔΕΣ ΣΑΜΟΥ, ΠΟΣΕΙΔΩΝΙΟ ΣΑΜΟΥ, ΠΡΑΣΟΝΗΣΙ ΣΑΜΟΥ, ΣΑΜΟΣ ΣΑΜΟΥ, ΣΤΡΟΓΓΥΛΟ ΒΑΘΕΩΣ ΣΑΜΟΥ, ΤΟΥΡΚΟΜΥΛΩΝΑΣ ΣΑΜΟΥ, ΦΛΟΚΑ ΣΑΜΟΥ, ΧΑΡΑΥΓΗ ΣΑΜΟΥ, ΨΙΛΗ ΑΜΜΟΣ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83102', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΣΑΜΟΥ, ΒΕΛΑΝΙΔΙΑ ΜΑΡΑΘΟΚΑΜΠΟΥ ΣΑΜΟΥ, ΔΡΑΚΑΙΟΙ ΣΑΜΟΥ, ΙΣΩΜΑΤΑ ΣΑΜΟΥ, ΚΑΛΛΙΘΕΑ ΣΑΜΟΥ, ΚΑΜΠΟΣ ΣΑΜΟΥ ΣΑΜΟΥ, ΚΑΜΠΟΣ ΣΚΟΥΡΑΙΚΩΝ ΣΑΜΟΥ, ΛΙΜΝΙΩΝΑΣ ΣΑΜΟΥ, ΜΑΡΑΘΟΚΑΜΠΟΣ ΣΑΜΟΥ, ΟΡΜΟΣ ΑΓΙΟΥ ΙΣΙΔΩΡΟΥ ΣΑΜΟΥ, ΟΡΜΟΣ ΜΑΡΑΘΟΚΑΜΠΟΥ ΣΑΜΟΥ, ΠΑΛΑΙΟΧΩΡΙ ΣΑΜΟΥ, ΣΕΒΑΣΤΑΙΙΚΑ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83103', Area: 'ΑΒΑΝΤΙ ΣΑΜΟΥ, ΒΕΡΓΗ ΣΑΜΟΥ, ΓΙΩΝΙΔΕΣ ΣΑΜΟΥ, ΗΡΑΙΟ ΣΑΜΟΥ, ΚΑΡΠΟΒΟΛΟΣ ΣΑΜΟΥ, ΚΟΛΟΝΑ ΣΑΜΟΥ, ΚΥΡΓΙΑΝΝΗ ΣΑΜΟΥ, ΜΑΥΡΑΤΖΑΙΟΙ ΣΑΜΟΥ, ΜΟΝΗ ΜΕΓΑΛΗΣ ΠΑΝΑΓΙΑΣ ΣΑΜΟΥ, ΜΟΝΗ ΤΙΜΙΟΥ ΣΤΑΥΡΟΥ ΣΑΜΟΥ, ΜΥΛΟΙ ΣΑΜΟΥ, ΝΕΑ ΠΟΛΗ ΣΑΜΟΥ, ΠΑΓΩΝΔΑΣ ΣΑΜΟΥ, ΠΟΤΟΚΑΚΙ ΣΑΜΟΥ, ΠΟΥΝΤΕΣ ΣΑΜΟΥ, ΠΥΘΑΓΟΡΕΙΟ ΣΑΜΟΥ, ΡΙΖΟΒΡΑΧΟΣ ΣΑΜΟΥ, ΣΥΚΙΑ ΣΑΜΟΥ, ΧΩΡΑ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83104', Area: 'ΑΠΟΣΤΟΛΟΣ ΠΑΥΛΟΣ ΣΑΜΟΥ, ΒΕΛΑΝΙΔΙΑ ΚΟΥΜΑΙΙΚΩΝ ΣΑΜΟΥ, ΚΑΛΟΓΕΡΙΚΟ ΣΑΜΟΥ, ΚΟΥΜΑΙΙΚΑ ΣΑΜΟΥ, ΚΟΥΜΑΡΑΔΑΙΟΙ ΣΑΜΟΥ, ΛΙΜΝΟΝΑΚΙ ΣΑΜΟΥ, ΜΕΣΟΓΕΙΟ ΣΑΜΟΥ, ΜΕΤΟΧΙ ΣΑΜΟΥ, ΝΕΟΧΩΡΙ ΣΑΜΟΥ, ΟΡΜΟΣ ΚΟΥΜΑΙΙΚΩΝ ΣΑΜΟΥ, ΠΑΝΔΡΟΣΟ ΣΑΜΟΥ, ΠΕΡΡΗ ΣΑΜΟΥ, ΠΕΥΚΟΣ ΣΑΜΟΥ, ΠΥΡΓΟΣ ΣΑΜΟΥ, ΣΑΜΙΟΠΟΥΛΑ ΝΗΣΟΣ ΣΑΜΟΥ, ΣΚΟΥΡΑΙΙΚΑ ΣΑΜΟΥ, ΣΠΑΘΑΡΑΙΟΙ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83200', Area: 'ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΣΑΜΟΥ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΗΛΙΑΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΑΡΛΟΒΑΣΙΟΥ ΣΑΜΟΥ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΝΗΣΟΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΣΑΜΟΥ ΣΑΜΟΥ, ΑΜΠΕΛΟΣ ΣΑΜΟΥ, ΑΣΠΡΟΧΟΡΤΙ ΣΑΜΟΥ, ΒΑΛΕΟΝΤΑΔΕΣ ΣΑΜΟΥ, ΒΡΥΣΕΣ ΚΟΝΤΑΚΑΙΚΩΝ ΣΑΜΟΥ, ΓΑΛΑΖΙΟ ΣΑΜΟΥ, ΚΑΡΛΟΒΑΣΙ ΣΑΜΟΥ, ΚΑΣΤΑΝΕΑ ΣΑΜΟΥ, ΚΟΝΤΑΙΙΚΑ ΣΑΜΟΥ, ΚΟΝΤΑΚΑΙΙΚΑ ΣΑΜΟΥ, ΚΟΣΜΑΔΑΙΟΙ ΣΑΜΟΥ, ΛΕΚΑ ΣΑΜΟΥ, ΛΙΒΑΔΑΚΙ ΣΑΜΟΥ, ΜΑΝΟΛΑΤΕΣ ΣΑΜΟΥ, ΜΟΝΗ ΠΡΟΦΗΤΗ ΗΛΙΑ ΣΑΜΟΥ, ΝΕΟ ΚΑΡΛΟΒΑΣΙ ΣΑΜΟΥ, ΝΙΚΟΛΟΥΔΕΣ ΣΑΜΟΥ, ΠΛΑΤΑΝΟΣ (ΒΑΘΥ) ΣΑΜΟΥ, ΠΛΑΤΑΝΟΣ ΚΑΡΛΟΒΑΣΙΟΥ ΣΑΜΟΥ, ΠΟΤΑΜΙ ΣΑΜΟΥ, ΣΑΚΚΟΥΛΑΙΙΚΑ ΣΑΜΟΥ, ΣΟΥΡΗΔΕΣ ΣΑΜΟΥ, ΣΤΑΥΡΙΝΗΔΕΣ ΣΑΜΟΥ, ΥΔΡΟΥΣΣΑ ΣΑΜΟΥ, ΧΑΤΖΗΣΤΑΜΟΥΛΗΔΕΣ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83300', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΠΕΡΔΙΚΙΟΥ ΣΑΜΟΥ, ΑΓΙΟΣ ΚΗΡΥΚΟΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΙΚΑΡΙΑΣ ΣΑΜΟΥ, ΒΑΡΔΑΡΑΔΕΣ ΣΑΜΟΥ, ΒΑΩΝΗ ΣΑΜΟΥ, ΕΞΩ ΦΑΡΟΣ ΣΑΜΟΥ, ΘΕΡΜΑ ΛΕΥΚΑΔΑΣ ΙΚΑΡΙΑΣ ΣΑΜΟΥ, ΘΕΡΜΑ ΣΑΜΟΥ, ΚΑΤΑΦΥΓΙΟ ΣΑΜΟΥ, ΚΙΟΝΙΟ ΣΑΜΟΥ, ΛΑΡΔΑΔΕΣ ΣΑΜΟΥ, ΛΙΒΑΔΙ ΣΑΜΟΥ, ΜΑΥΡΑΤΟ ΣΑΜΟΥ, ΜΑΥΡΙΚΑΤΟ ΣΑΜΟΥ, ΜΗΛΕΩΠΟ ΣΑΜΟΥ, ΜΟΝΗ ΛΕΥΚΑΔΑΣ ΕΥΑΓΓΕΛΙΣΜΟΣ ΣΑΜΟΥ, ΜΟΝΟΚΑΜΠΙΟ ΣΑΜΟΥ, ΞΥΛΟΣΥΡΤΗΣ ΣΑΜΟΥ, ΟΞΕΑ ΣΑΜΟΥ, ΠΕΡΔΙΚΙ ΣΑΜΟΥ, ΠΛΑΓΙΑ ΑΓ.ΚΗΡΥΚΟΥ ΣΑΜΟΥ, ΠΛΟΥΜΑΡΙ ΣΑΜΟΥ, ΤΣΟΥΡΕΔΕΣ ΣΑΜΟΥ, ΦΑΝΑΡΙ ΣΑΜΟΥ, ΧΡΥΣΟΣΤΟΜΟΣ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83301', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΙΚΑΡΙΑΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΠΟΛΥΚΑΡΠΟΣ ΣΑΜΟΥ, ΑΜΑΛΟ ΣΑΜΟΥ, ΑΡΜΕΝΙΣΤΗΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΒΡΑΚΑΔΕΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΓΙΑΛΙΣΚΑΡΙ ΡΑΧΩΝ ΣΑΜΟΥ, ΚΑΛΑΜΟΣ ΣΑΜΟΥ, ΚΑΡΕΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΚΑΡΚΙΝΑΓΡΙ ΣΑΜΟΥ, ΚΑΣΤΑΝΙΕΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΚΑΤΩ ΡΑΧΕΣ ΣΑΜΟΥ, ΚΟΥΝΙΑΔΟΙ ΡΑΧΩΝ ΣΑΜΟΥ, ΛΑΓΚΑΔΑ ΡΑΧΩΝ ΣΑΜΟΥ, ΛΑΨΑΧΑΔΕΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΛΟΜΒΑΡΔΑΔΕΣ ΣΑΜΟΥ, ΜΑΓΓΑΝΙΤΗΣ ΣΑΜΟΥ, ΜΑΝΔΡΙΑ ΡΑΧΩΝ ΣΑΜΟΥ, ΜΑΥΡΙΑΝΝΟΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΜΟΝΗ ΜΟΥΝΤΕ ΣΑΜΟΥ, ΝΑΝΟΥΡΑΣ ΣΑΜΟΥ, ΞΗΝΤΑ ΡΑΧΩΝ ΣΑΜΟΥ, ΠΕΖΙΟ ΡΑΧΩΝ ΣΑΜΟΥ, ΠΡΟΕΣΠΕΡΑ ΡΑΧΩΝ ΣΑΜΟΥ, ΠΡΟΦΗΤΗΣ ΗΛΙΑΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΤΡΑΠΑΛΟ ΣΑΜΟΥ, ΤΣΑΚΑΔΕΣ ΡΑΧΩΝ ΣΑΜΟΥ, ΧΡΙΣΤΟΣ ΡΑΧΩΝ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83302', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΕΥΔΗΛΟΥ ΣΑΜΟΥ, ΑΚΑΜΑΤΡΑ ΣΑΜΟΥ, ΑΡΕΘΟΥΣΑ ΣΑΜΟΥ, ΑΥΛΑΚΙ ΡΑΧΩΝ ΣΑΜΟΥ, ΔΑΦΝΗ ΣΑΜΟΥ, ΔΕΚΑΚΙΑ ΣΑΜΟΥ, ΔΡΟΥΤΣΟΥΛΑΣ ΣΑΜΟΥ, ΕΥΔΗΛΟΣ ΣΑΜΟΥ, ΚΑΛΑΜΟΝΑΡΙ ΣΑΜΟΥ, ΚΑΛΑΜΟΥΡΙΔΑ ΣΑΜΟΥ, ΚΑΜΠΟΣ ΙΚΑΡΙΑΣ ΣΑΜΟΥ, ΚΑΡΑΒΟΣΤΑΜΟ ΣΑΜΟΥ, ΚΕΡΑΜΕΙΟ ΣΑΜΟΥ, ΚΟΣΟΙΚΙΑ ΣΑΜΟΥ, ΚΡΕΜΑΣΤΗ ΣΑΜΟΥ, ΚΥΠΑΡΙΣΣΙ ΑΡΕΘΟΥΣΑΣ ΣΑΜΟΥ, ΚΥΠΑΡΙΣΣΙ ΣΑΜΟΥ, ΜΑΡΑΘΟ ΣΑΜΟΥ, ΞΑΝΘΗ ΙΚΑΡΙΑΣ ΣΑΜΟΥ, ΠΕΡΑ ΑΡΕΘΟΥΣΑ ΣΑΜΟΥ, ΠΗΓΗ ΣΑΜΟΥ, ΠΛΑΓΙΑ ΔΑΦΝΗΣ ΣΑΜΟΥ, ΣΤΑΒΛΟΣ ΣΑΜΟΥ, ΣΤΕΛΙ ΣΑΜΟΥ, ΦΟΙΝΙΚΑΣ ΣΑΜΟΥ, ΦΡΑΝΤΑΤΟ ΣΑΜΟΥ, ΦΥΤΕΜΑ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '83400', Area: 'ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΘΕΡΜΑΣΤΗΣ ΣΑΜΟΥ, ΑΓΙΟΣ ΜΗΝΑΣ ΝΗΣΟΣ ΣΑΜΟΥ, ΑΛΑΤΟΝΗΣΙ ΣΑΜΟΥ, ΑΝΘΡΩΠΟΦΑΣ ΣΑΜΟΥ, ΔΑΦΝΟΛΙΕΣ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΘΥΜΑΙΝΑ ΝΗΣΟΣ ΣΑΜΟΥ, ΘΥΜΑΙΝΑΚΙ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΚΑΜΑΡΙ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΚΑΜΠΙ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΚΑΜΠΙ ΧΡΥΣΟΜΗΛΕΑΣ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΚΕΡΑΜΕΙΔΟΥ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΚΙΣΗΡΙΑ ΣΑΜΟΥ, ΜΑΚΡΟΝΗΣΙ ΣΑΜΟΥ, ΜΙΚΡΟΣ ΑΝΘΡΩΠΟΦΑΓΟΣ ΣΑΜΟΥ, ΠΛΑΓΙΑ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΠΛΑΚΑ ΣΑΜΟΥ, ΠΛΑΚΑΚΙ ΣΑΜΟΥ, ΣΤΡΟΓΓΥΛΟ ΦΟΥΡΝΩΝ ΣΑΜΟΥ, ΦΟΥΡΝΟΙ ΝΗΣΟΣ ΣΑΜΟΥ, ΧΡΥΣΟΜΗΛΕΑ ΦΟΥΡΝΩΝ ΣΑΜΟΥ', Prefecture: 'Σάμου' },
    { PostalCode: '62041', Area: 'ΔΟΜΙΡΟΣ ΣΕΡΡΩΝ, ΜΙΚΡΟ ΣΟΥΛΙ ΣΕΡΡΩΝ, ΝΕΑ ΦΥΛΗ ΣΕΡΡΩΝ, ΠΑΛΑΙΟΚΩΜΗ ΣΕΡΡΩΝ, ΡΟΔΟΛΙΒΟΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62042', Area: 'ΑΓΡΙΑΝΗ ΣΕΡΡΩΝ, ΔΗΜΗΤΡΑ ΣΕΡΡΩΝ, ΜΕΣΟΡΡΑΧΗ ΣΕΡΡΩΝ, ΝΕΑ ΖΙΧΝΗ ΣΕΡΡΩΝ, ΣΚΟΠΙΑ ΣΕΡΡΩΝ, ΣΦΕΛΙΝΟΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62047', Area: 'ΑΓΓΙΣΤΑ ΣΕΡΡΩΝ, ΑΝΩ ΣΥΜΒΟΛΗ ΣΕΡΡΩΝ, ΗΛΙΟΚΩΜΗ ΣΕΡΡΩΝ, ΚΟΡΜΙΣΤΑ ΣΕΡΡΩΝ, ΚΡΗΝΙΔΑ ΣΕΡΡΩΝ, ΜΟΝΗ ΕΙΚΟΣΙΦΟΙΝΙΣΣΗΣ ΣΕΡΡΩΝ, ΝΕΑ ΜΠΑΦΡΑ ΣΕΡΡΩΝ, ΠΡΩΤΗ ΣΕΡΡΩΝ, ΣΥΜΒΟΛΗ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62049', Area: 'ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΣΕΡΡΩΝ, ΑΗΔΟΝΟΧΩΡΙ ΣΕΡΡΩΝ, ΕΥΚΑΡΠΙΑ ΣΕΡΡΩΝ, ΙΒΗΡΑ ΣΕΡΡΩΝ, ΜΑΥΡΟΘΑΛΑΣΣΑ ΣΕΡΡΩΝ, ΤΡΑΓΙΛΟΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62055', Area: 'ΑΝΩ ΠΟΡΟΙΑ ΣΕΡΡΩΝ, ΚΑΛΟΧΩΡΙ ΣΕΡΡΩΝ, ΚΑΣΤΑΝΟΥΣΣΑ ΣΕΡΡΩΝ, ΚΑΤΩ ΠΟΡΟΙΑ ΣΕΡΡΩΝ, ΚΕΡΚΙΝΗ ΣΕΡΡΩΝ, ΛΙΒΑΔΙΑ ΣΕΡΡΩΝ, ΜΑΚΡΙΝΙΤΣΑ ΣΕΡΡΩΝ, ΜΟΝΑΣΤΗΡΑΚΙ ΣΕΡΡΩΝ, ΝΕΟΧΩΡΙ ΣΙΝΤΙΚΗΣ ΣΕΡΡΩΝ, ΠΑΝΑΓΙΑ ΜΑΚΡΙΝΙΤΣΑΣ ΣΕΡΡΩΝ, ΠΛΑΤΑΝΑΚΙΑ ΣΕΡΡΩΝ, ΣΙΔΗΡΟΧΩΡΙ ΣΕΡΡΩΝ, ΣΤΑΥΡΟΔΡΟΜΙ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62100', Area: 'ΑΓΙΑ ΕΛΕΝΗ ΣΕΡΡΩΝ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΣΕΡΡΩΝ, ΑΔΕΛΦΙΚΟ ΣΕΡΡΩΝ, ΑΝΩ ΒΡΟΝΤΟΥ ΣΕΡΡΩΝ, ΑΝΩ ΚΑΜΗΛΑ ΣΕΡΡΩΝ, ΑΝΩ ΟΡΕΙΝΗ ΣΕΡΡΩΝ, ΒΑΛΤΟΤΟΠΙ ΣΕΡΡΩΝ, ΒΑΜΒΑΚΟΥΣΣΑ ΣΕΡΡΩΝ, ΕΛΑΙΩΝΑΣ ΣΕΡΡΩΝ, ΕΠΤΑΜΥΛΟΙ ΣΕΡΡΩΝ, ΚΑΛΑ ΔΕΝΔΡΑ ΣΕΡΡΩΝ, ΚΑΤΩ ΚΑΜΗΛΑ ΣΕΡΡΩΝ, ΚΑΤΩ ΜΕΤΟΧΙ ΣΕΡΡΩΝ, ΚΑΤΩ ΜΗΤΡΟΥΣΙ ΣΕΡΡΩΝ, ΚΑΤΩ ΧΡΙΣΤΟΣ ΣΕΡΡΩΝ, ΚΟΥΒΟΥΚΛΙΟ ΣΕΡΡΩΝ, ΚΟΥΜΑΡΙΑ ΣΕΡΡΩΝ, ΚΡΙΝΟΣ ΣΕΡΡΩΝ, ΚΩΝΣΤΑΝΤΙΝΑΤΟ ΣΕΡΡΩΝ, ΛΕΥΚΩΝΑΣ ΣΕΡΡΩΝ, ΜΑΡΜΑΡΑΣ ΣΕΡΡΩΝ, ΜΕΣΟΚΩΜΗ ΣΕΡΡΩΝ, ΜΗΤΡΟΥΣΙ ΣΕΡΡΩΝ, ΜΟΝΗ ΤΙΜΙΟΥ ΠΡΟΔΡΟΜΟΥ ΣΕΡΡΩΝ, ΜΟΝΟΒΡΥΣΗ ΣΕΡΡΩΝ, ΜΟΝΟΚΚΛΗΣΙΑ ΣΕΡΡΩΝ, ΝΕΑ ΤΥΡΟΛΟΗ ΣΕΡΡΩΝ, ΝΕΟ ΣΟΥΛΙ ΣΕΡΡΩΝ, ΝΕΟΧΩΡΙ ΣΕΡΡΩΝ, ΞΗΡΟΤΟΠΟΣ ΣΕΡΡΩΝ, ΟΙΝΟΥΣΣΑ ΣΕΡΡΩΝ, ΟΡΕΙΝΗ ΣΕΡΡΩΝ, ΠΑΡΑΛΙΜΝΙΟ ΣΕΡΡΩΝ, ΠΕΠΟΝΙΑ ΣΕΡΡΩΝ, ΠΡΟΒΑΤΑΣ ΣΕΡΡΩΝ, ΣΕΡΡΕΣ ΣΕΡΡΩΝ, ΣΚΟΤΟΥΣΣΑ ΣΕΡΡΩΝ, ΣΚΟΥΤΑΡΙ ΣΕΡΡΩΝ, ΧΙΟΝΟΧΩΡΙ ΣΕΡΡΩΝ, ΧΡΥΣΟΠΗΓΗ ΣΕΡΡΩΝ, ΨΥΧΙΚΟ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62121', Area: 'ΣΕΡΡΕΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62122', Area: 'ΣΕΡΡΕΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62123', Area: 'ΣΕΡΡΕΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62124', Area: 'ΣΕΡΡΕΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62125', Area: 'ΣΕΡΡΕΣ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62200', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΣΕΡΡΩΝ, ΑΝΘΗ ΣΕΡΡΩΝ, ΑΧΙΝΟΣ ΣΕΡΡΩΝ, ΒΕΡΓΗ ΣΕΡΡΩΝ, ΔΑΦΝΗ ΣΕΡΡΩΝ, ΔΗΜΗΤΡΙΤΣΙ ΣΕΡΡΩΝ, ΖΕΡΒΟΧΩΡΙ ΣΕΡΡΩΝ, ΘΕΡΜΑ ΣΕΡΡΩΝ, ΚΑΣΤΑΝΟΧΩΡΙ ΣΕΡΡΩΝ, ΛΑΓΚΑΔΙ ΣΕΡΡΩΝ, ΛΕΥΚΟΤΟΠΟΣ ΣΕΡΡΩΝ, ΛΥΓΑΡΙΑ ΣΕΡΡΩΝ, ΝΙΓΡΙΤΑ ΣΕΡΡΩΝ, ΝΙΚΟΚΛΕΙΑ ΣΕΡΡΩΝ, ΟΡΕΣΚΕΙΑ ΣΕΡΡΩΝ, ΠΑΤΡΙΚΙΟ ΣΕΡΡΩΝ, ΣΗΣΑΜΙΑ ΣΕΡΡΩΝ, ΣΙΤΟΧΩΡΙ ΣΕΡΡΩΝ, ΤΕΡΠΝΗ ΣΕΡΡΩΝ, ΦΛΑΜΠΟΥΡΟ ΣΕΡΡΩΝ, ΧΟΥΜΝΙΚΟ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62300', Area: 'ΑΓΚΙΣΤΡΟ ΣΕΡΡΩΝ, ΑΧΛΑΔΟΧΩΡΙ ΣΕΡΡΩΝ, ΒΑΜΒΑΚΟΦΥΤΟ ΣΕΡΡΩΝ, ΓΕΦΥΡΟΥΔΙ ΣΕΡΡΩΝ, ΘΕΡΜΟΠΗΓΗ ΣΕΡΡΩΝ, ΚΑΜΑΡΩΤΟ ΣΕΡΡΩΝ, ΚΑΠΝΟΦΥΤΟ ΣΕΡΡΩΝ, ΚΑΡΥΔΟΧΩΡΙ ΣΕΡΡΩΝ, ΚΑΤΩ ΑΜΠΕΛΙΑ ΣΕΡΡΩΝ, ΛΟΥΤΡΑ ΣΙΔΗΡΟΚΑΣΤΡΟΥ ΣΕΡΡΩΝ, ΜΕΛΕΝΙΚΙΤΣΙ ΣΕΡΡΩΝ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΣΕΡΡΩΝ, ΠΡΟΜΑΧΩΝΑΣ ΣΕΡΡΩΝ, ΣΙΔΗΡΟΚΑΣΤΡΟ ΣΕΡΡΩΝ, ΣΤΑΘΜΟΣ ΣΙΔΗΡΟΚΑΣΤΡΟΥ ΣΕΡΡΩΝ, ΣΤΡΥΜΟΝΟΧΩΡΙ ΣΕΡΡΩΝ, ΣΧΙΣΤΟΛΙΘΟΣ ΣΕΡΡΩΝ, ΦΑΙΑ ΠΕΤΡΑ ΣΕΡΡΩΝ, ΧΑΡΟΠΟ ΣΕΡΡΩΝ, ΧΟΡΤΕΡΟ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '62400', Area: 'ΑΜΜΟΥΔΙΑ ΣΕΡΡΩΝ, ΑΝΑΓΕΝΝΗΣΗ ΣΕΡΡΩΝ, ΒΑΛΤΕΡΟ ΣΕΡΡΩΝ, ΒΑΜΒΑΚΙΑ ΣΕΡΡΩΝ, ΔΑΣΟΧΩΡΙ ΣΕΡΡΩΝ, ΗΡΑΚΛΕΙΑ ΣΕΡΡΩΝ, ΚΑΡΠΕΡΗ ΣΕΡΡΩΝ, ΚΟΙΜΗΣΗ ΣΕΡΡΩΝ, ΛΙΘΟΤΟΠΟΣ ΣΕΡΡΩΝ, ΛΙΜΝΟΧΩΡΙ ΣΕΡΡΩΝ, ΠΟΝΤΙΣΜΕΝΟ ΣΕΡΡΩΝ, ΣΑΡΑΚΑΤΣΑΝΑΙΙΚΟ ΣΕΡΡΩΝ, ΣΙΜΩΝΑΣ ΣΕΡΡΩΝ, ΧΕΙΜΑΡΡΟΣ ΣΕΡΡΩΝ, ΧΡΥΣΟΧΩΡΑΦΑ ΣΕΡΡΩΝ, ΨΩΜΟΤΟΠΙ ΣΕΡΡΩΝ', Prefecture: 'Σερρών' },
    { PostalCode: '42030', Area: 'ΜΕΓΑΛΑ ΚΑΛΥΒΙΑ ΤΡΙΚΑΛΩΝ', Prefecture: 'Τρικάλων' },
    { PostalCode: '42031', Area: 'ΓΡΙΖΑΝΟ ΤΡΙΚΑΛΩΝ, ΖΑΡΚΟΣ ΤΡΙΚΑΛΩΝ, ΚΕΡΑΜΙΔΙ ΤΡΙΚΑΛΩΝ, ΚΛΟΚΟΤΟΣ ΤΡΙΚΑΛΩΝ, ΠΑΝΑΓΙΤΣΑ ΤΡΙΚΑΛΩΝ, ΠΗΝΕΙΑΣ ΤΡΙΚΑΛΩΝ, ΦΑΡΚΑΔΩΝΑ ΤΡΙΚΑΛΩΝ', Prefecture: 'Τρικάλων' },
    { PostalCode: '42032', Area: 'ΑΓΙΟΣ ΒΗΣΣΑΡΙΩΝ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΕΛΑΤΗΣ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΔΗΜΗΤΡΙΟΣ ΡΟΠΟΤΟΥ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΡΟΠΟΤΟΥ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΠΡΟΚΟΠΙΟΣ ΤΡΙΚΑΛΩΝ, ΑΝΩ ΠΑΛΑΙΟΚΑΡΥΑ ΤΡΙΚΑΛΩΝ, ΒΑΚΑΡΙ ΔΕΣΗΣ ΤΡΙΚΑΛΩΝ, ΒΛΑΤΑΝΕΟΙ ΤΡΙΚΑΛΩΝ, ΒΛΑΧΑ ΤΡΙΚΑΛΩΝ, ΒΡΟΝΤΕΡΟ ΤΡΙΚΑΛΩΝ, ΔΕΣΗ ΤΡΙΚΑΛΩΝ, ΔΡΟΣΟΧΩΡΙ ΤΡΙΚΑΛΩΝ, ΕΛΑΤΗ ΤΡΙΚΑΛΩΝ, ΖΩΓΡΑΦΑΙΙΚΑ ΤΡΙΚΑΛΩΝ, ΙΣΙΩΜΑΤΑ ΤΡΙΚΑΛΩΝ, ΚΑΛΛΙΘΕΑ ΠΥΝΔΑΙΩΝ ΤΡΙΚΑΛΩΝ, ΚΑΛΟΓΗΡΟΙ ΤΡΙΚΑΛΩΝ, ΚΑΡΥΕΣ ΣΤΟΥΡΝΑΡΑΙΚΩΝ ΤΡΙΚΑΛΩΝ, ΚΑΣΤΑΝΕΑ ΣΤΟΥΡΝΑΡΑΙΙΚΩΝ ΤΡΙΚΑΛΩΝ, ΚΑΤΩ ΠΑΛΑΙΟΚΑΡΥΑ ΤΡΙΚΑΛΩΝ, ΚΟΤΡΩΝΙΟ ΤΡΙΚΑΛΩΝ, ΛΟΓΓΙΕΣ ΚΟΤΡΩΝΙΟΥ ΤΡΙΚΑΛΩΝ, ΛΟΓΓΙΕΣ ΡΟΠΟΤΟΥ ΤΡΙΚΑΛΩΝ, ΜΕΣΗ ΠΑΛΑΙΟΚΑΡΥΑ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΔΟΥΣΙΚΟΥ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΓΚΟΥΡΑΣ ΤΡΙΚΑΛΩΝ, ΝΕΡΑΙΔΟΧΩΡΙ ΤΡΙΚΑΛΩΝ, ΞΥΛΟΧΩΡΙ ΤΡΙΚΑΛΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΠΥΝΔΑΙΩΝ ΤΡΙΚΑΛΩΝ, ΠΑΝΑΓΙΑ ΠΥΝΔΑΙΩΝ ΤΡΙΚΑΛΩΝ, ΠΑΝΑΓΙΑ ΡΟΠΟΤΟΥ ΤΡΙΚΑΛΩΝ, ΠΑΝΑΓΙΩΤΑΙΙΚΑ ΤΡΙΚΑΛΩΝ, ΠΕΡΤΟΥΛΙ ΤΡΙΚΑΛΩΝ, ΠΕΤΡΟΧΩΡΙ ΤΡΙΚΑΛΩΝ, ΠΟΛΥΘΕΑ ΡΟΠΟΤΟΥ ΤΡΙΚΑΛΩΝ, ΠΥΛΗ ΤΡΙΚΑΛΩΝ, ΠΥΡΡΑ ΤΡΙΚΑΛΩΝ, ΡΟΠΟΤΟ ΤΡΙΚΑΛΩΝ, ΣΤΟΥΡΝΑΡΑΙΙΚΑ ΤΡΙΚΑΛΩΝ, ΤΣΕΚΟΥΡΑ ΤΡΙΚΑΛΩΝ, ΦΟΡΤΩΣΙ ΤΡΙΚΑΛΩΝ, ΨΑΡΡΟ ΤΡΙΚΑΛΩΝ', Prefecture: 'Τρικάλων' },
    { PostalCode: '42100', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΤΡΙΚΑΛΩΝ, ΑΓΡΕΛΙΑ ΤΡΙΚΑΛΩΝ, ΑΜΜΟΥΔΙΑ ΤΡΙΚΑΛΩΝ, ΑΝΤΑΛΛΑΞΙΜΑ ΤΡΙΚΑΛΩΝ, ΑΠΟΣΤΟΛΟΙ ΤΡΙΚΑΛΩΝ, ΑΡΔΑΝΙΟ ΤΡΙΚΑΛΩΝ, ΒΑΛΑΜΑΝΔΡΙ ΤΡΙΚΑΛΩΝ, ΒΑΛΤΙΝΟ ΤΡΙΚΑΛΩΝ, ΓΕΝΕΣΙΟ ΤΡΙΚΑΛΩΝ, ΓΛΙΝΟΣ ΤΡΙΚΑΛΩΝ, ΓΟΜΦΟΙ ΤΡΙΚΑΛΩΝ, ΓΟΡΓΟΓΥΡΙ ΤΡΙΚΑΛΩΝ, ΔΕΝΔΡΟΧΩΡΙΟ ΤΡΙΚΑΛΩΝ, ΔΙΑΛΕΚΤΟ ΤΡΙΚΑΛΩΝ, ΔΙΛΟΦΟ ΓΟΡΓΟΓΥΡΙΟΥ ΤΡΙΚΑΛΩΝ, ΔΙΠΟΤΑΜΟΣ ΤΡΙΚΑΛΩΝ, ΔΡΟΣΕΡΟ ΤΡΙΚΑΛΩΝ, ΔΡΟΣΟΠΗΓΗ ΤΡΙΚΑΛΩΝ, ΕΛΕΥΘΕΡΟΧΩΡΙ ΤΡΙΚΑΛΩΝ, ΕΛΛΗΝΟΚΑΣΤΡΟ ΤΡΙΚΑΛΩΝ, ΕΞΑΛΟΦΟΣ ΤΡΙΚΑΛΩΝ, ΖΗΛΕΥΤΗ ΤΡΙΚΑΛΩΝ, ΚΑΛΟΝΕΡΙ ΤΡΙΚΑΛΩΝ, ΚΑΡΥΑΙ ΤΡΙΚΑΛΩΝ, ΚΑΤΩ ΕΛΑΤΗ ΤΡΙΚΑΛΩΝ, ΚΕΦΑΛΟΒΡΥΣΟ ΤΡΙΚΑΛΩΝ, ΚΗΠΑΚΙ ΤΡΙΚΑΛΩΝ, ΚΟΚΚΟΝΑ ΤΡΙΚΑΛΩΝ, ΚΟΡΗ ΤΡΙΚΑΛΩΝ, ΚΟΥΜΑΡΙΑ ΤΡΙΚΑΛΩΝ, ΚΡΗΝΙΤΣΑ ΤΡΙΚΑΛΩΝ, ΛΑΓΚΑΔΙΑ ΤΡΙΚΑΛΩΝ, ΛΕΠΤΟΚΑΡΥΑ ΤΡΙΚΑΛΩΝ ΤΡΙΚΑΛΩΝ, ΛΕΦΑΙΙΚΑ ΤΡΙΚΑΛΩΝ, ΛΙΛΟΠΡΑΣΟ ΤΡΙΚΑΛΩΝ, ΛΙΠΙΟΤΑ ΤΡΙΚΑΛΩΝ, ΛΟΓΓΑΚΙ ΤΡΙΚΑΛΩΝ, ΛΟΓΓΟΣ ΤΡΙΚΑΛΩΝ, ΛΥΓΑΡΙΑ ΤΡΙΚΑΛΩΝ, ΜΑΤΣΟΥΚΑΙΙΚΑ ΤΡΙΚΑΛΩΝ, ΜΕΓΑΛΟ ΚΕΦΑΛΟΒΡΥΣΟ ΤΡΙΚΑΛΩΝ, ΜΕΓΑΛΟΧΩΡΙΟ ΤΡΙΚΑΛΩΝ, ΜΕΓΑΡΧΗ ΤΡΙΚΑΛΩΝ, ΜΕΛΙΓΟΣ ΤΡΙΚΑΛΩΝ, ΜΕΣΙΑΚΑ ΤΡΙΚΑΛΩΝ, ΜΟΥΡΙΑ ΤΡΙΚΑΛΩΝ, ΝΟΜΗ ΤΡΙΚΑΛΩΝ, ΞΥΛΟΠΑΡΟΙΚΟ ΤΡΙΚΑΛΩΝ, ΟΥΡΑΝΟΣ ΤΡΙΚΑΛΩΝ, ΠΑΛΑΙΟΜΟΝΑΣΤΗΡΟ ΤΡΙΚΑΛΩΝ, ΠΑΛΑΙΟΠΥΡΓΟΣ ΤΡΙΚΑΛΩΝ, ΠΑΡΑΠΟΤΑΜΟΣ ΤΡΙΚΑΛΩΝ, ΠΑΤΟΥΛΙΑ ΤΡΙΚΑΛΩΝ, ΠΕΡΔΙΚΟΡΡΑΧΗ ΤΡΙΚΑΛΩΝ, ΠΕΤΡΟΠΟΡΟΣ ΤΡΙΚΑΛΩΝ, ΠΗΓΗ ΤΡΙΚΑΛΩΝ, ΠΙΑΛΕΙΑ ΤΡΙΚΑΛΩΝ, ΠΛΑΤΑΝΟΣ ΤΡΙΚΑΛΩΝ, ΠΡΙΝΟΣ ΤΡΙΚΑΛΩΝ, ΠΡΟΔΡΟΜΟΣ ΤΡΙΚΑΛΩΝ, ΠΥΡΓΕΤΟΣ ΤΡΙΚΑΛΩΝ, ΡΑΞΑ ΤΡΙΚΑΛΩΝ, ΡΙΖΑΡΕΙΟ ΤΡΙΚΑΛΩΝ, ΡΙΖΩΜΑ ΤΡΙΚΑΛΩΝ, ΡΟΓΚΙΑ ΤΡΙΚΑΛΩΝ, ΣΚΑΛΑ ΤΡΙΚΑΛΩΝ, ΣΥΚΕΑ ΤΡΙΚΑΛΩΝ, ΣΩΤΗΡΑ ΤΡΙΚΑΛΩΝ, ΤΑΞΙΑΡΧΕΣ ΤΡΙΚΑΛΩΝ, ΤΡΙΚΑΛΑ ΤΡΙΚΑΛΩΝ, ΦΑΝΕΡΩΜΕΝΗ ΤΡΙΚΑΛΩΝ, ΦΗΚΗ ΤΡΙΚΑΛΩΝ, ΦΙΛΥΡΑ ΤΡΙΚΑΛΩΝ, ΦΛΑΜΟΥΛΙΟ ΤΡΙΚΑΛΩΝ, ΦΩΤΑΔΑ ΤΡΙΚΑΛΩΝ, ΧΑΙΔΕΜΕΝΗ ΤΡΙΚΑΛΩΝ, ΧΡΥΣΑΥΓΗ ΤΡΙΚΑΛΩΝ', Prefecture: 'Τρικάλων' },
    { PostalCode: '42200', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΚΑΛΑΜΠΑΚΑΣ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΒΑΣΙΛΙΚΗΣ ΤΡΙΚΑΛΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΣΠΑΘΑΔΩΝ ΤΡΙΚΑΛΩΝ, ΑΓΝΑΝΤΙΑ ΤΡΙΚΑΛΩΝ, ΑΗΔΩΝΑ ΤΡΙΚΑΛΩΝ, ΑΜΠΕΛΙΑ ΚΛΕΙΝΟΥ ΤΡΙΚΑΛΩΝ, ΑΝΑΛΗΨΗ ΤΡΙΚΑΛΩΝ, ΑΥΡΑ ΤΡΙΚΑΛΩΝ, ΒΑΣΙΛΙΚΗ ΤΡΙΚΑΛΩΝ, ΒΙΤΟΥΜΑΣ ΤΡΙΚΑΛΩΝ, ΒΛΑΧΑΒΑ ΤΡΙΚΑΛΩΝ, ΓΛΥΚΟΜΗΛΕΑ ΤΡΙΚΑΛΩΝ, ΔΙΑΒΑ ΤΡΙΚΑΛΩΝ, ΘΕΟΠΕΤΡΑ ΤΡΙΚΑΛΩΝ, ΚΑΚΟΠΛΕΥΡΙ ΤΡΙΚΑΛΩΝ, ΚΑΛΑΜΠΑΚΑ ΤΡΙΚΑΛΩΝ, ΚΑΛΟΓΡΙΑΝΗ ΤΡΙΚΑΛΩΝ, ΚΑΣΤΡΑΚΙ ΤΡΙΚΑΛΩΝ, ΚΛΕΙΝΟΣ ΤΡΙΚΑΛΩΝ, ΚΟΝΑΚΙΑ ΤΡΙΚΑΛΩΝ, ΚΟΡΟΜΗΛΙΑ ΤΡΙΚΑΛΩΝ, ΚΟΡΥΔΑΛΛΟΣ ΤΡΙΚΑΛΩΝ, ΚΟΥΤΣΟΥΦΛΙΑΝΗ ΤΡΙΚΑΛΩΝ, ΚΡΥΑ ΒΡΥΣΗ ΤΡΙΚΑΛΩΝ, ΜΑΛΑΚΑΣΙ ΤΡΙΚΑΛΩΝ, ΜΕΓΑΛΗ ΚΕΡΑΣΕΑ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΑΓΙΑΣ ΤΡΙΑΔΟΣ ΜΕΤΕΩΡΩΝ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΑΓΙΟΥ ΣΤΕΦΑΝΟΥ ΜΕΤΕΩΡΩΝ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΑΓΙΩΝ ΠΑΝΤΩΝ ΒΑΡΛΑΑΜ ΜΕΤΕΩΡΩΝ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΒΙΤΟΥΜΑ ΜΕΤΕΩΡΩΝ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΣΤΑΓΙΑΔΩΝ ΤΡΙΚΑΛΩΝ, ΜΟΝΗ ΜΕΤΑΜΟΡΦΩΣΕΩΣ ΣΩΤΗΡΑ ΜΕΤΕΩΡΩΝ ΤΡΙΚΑΛΩΝ, ΜΟΥΡΓΚΑΝΗ ΤΡΙΚΑΛΩΝ, ΜΠΑΣΙΑ ΚΛΕΙΝΟΥ ΤΡΙΚΑΛΩΝ, ΜΥΚΑΝΗ ΤΡΙΚΑΛΩΝ, ΝΕΑ ΖΩΗ ΑΥΡΑΣ ΤΡΙΚΑΛΩΝ, ΞΗΡΟΚΑΜΠΟΣ ΤΡΙΚΑΛΩΝ, ΟΞΥΝΕΙΑ ΤΡΙΚΑΛΩΝ, ΟΡΘΟΒΟΥΝΙ ΤΡΙΚΑΛΩΝ, ΠΑΛΑΙΟΧΩΡΙ ΚΑΛΑΜΠΑΚΑΣ ΤΡΙΚΑΛΩΝ, ΠΑΝΑΓΙΑ ΜΑΛΑΚΑΣΙΟΥ ΤΡΙΚΑΛΩΝ, ΠΕΡΙΣΤΕΡΑ ΤΡΙΚΑΛΩΝ, ΠΕΥΚΗ ΤΡΙΚΑΛΩΝ, ΠΛΑΤΑΝΙΣΤΟΣ ΤΡΙΚΑΛΩΝ, ΣΑΡΑΚΗΝΑ ΤΡΙΚΑΛΩΝ, ΣΠΑΘΑΔΕΣ ΤΡΙΚΑΛΩΝ, ΣΤΑΓΙΑΔΕΣ ΤΡΙΚΑΛΩΝ, ΤΡΙΦΥΛΛΙΑ ΤΡΙΚΑΛΩΝ, ΤΡΥΓΩΝΑ ΤΡΙΚΑΛΩΝ, ΧΡΥΣΙΝΟ ΤΡΙΚΑΛΩΝ, ΧΡΥΣΟΜΗΛΕΑ ΤΡΙΚΑΛΩΝ', Prefecture: 'Τρικάλων' },
    { PostalCode: '35001', Area: 'ΛΕΚΟΥΝΑ ΦΘΙΩΤΙΔΟΣ, ΜΑΛΕΣΙΝΑ ΦΘΙΩΤΙΔΟΣ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35005', Area: 'ΘΕΟΛΟΓΟΣ ΦΘΙΩΤΙΔΟΣ, ΛΑΓΟΝΗΣΙ ΦΘΙΩΤΙΔΟΣ, ΜΑΖΙ ΦΘΙΩΤΙΔΟΣ, ΜΑΡΤΙΝΟ ΦΘΙΩΤΙΔΟΣ, ΜΕΤΑΛΛΕΙΑ ΛΑΡΥΜΝΑΣ ΦΘΙΩΤΙΔΟΣ, ΜΕΤΑΛΛΕΙΟ ΤΣΟΥΚΚΑΣ ΦΘΙΩΤΙΔΟΣ, ΜΙΚΡΟΒΙΒΟΣ ΦΘΙΩΤΙΔΟΣ, ΠΡΟΣΚΥΝΑΣ ΦΘΙΩΤΙΔΟΣ, ΤΡΑΓΑΝΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35006', Area: 'ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΚΤΗ ΦΘΙΩΤΙΔΟΣ, ΑΣΠΡΟΝΕΡΙ ΦΘΙΩΤΙΔΟΣ, ΛΟΓΓΟΣ ΦΘΙΩΤΙΔΟΣ, ΝΕΟΧΩΡΙ ΑΓΙΟΥ ΚΩΝΣΤΑΝΤΙΝΟΥ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35008', Area: 'ΚΑΜΕΝΑ ΒΟΥΡΛΑ ΦΘΙΩΤΙΔΟΣ, ΝΕΟ ΘΡΟΝΙΟ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35009', Area: 'ΑΓΙΑ ΑΙΚΑΤΕΡΙΝΗ ΚΑΙΝΟΥΡΓΙΟΥ ΦΘΙΩΤΙΔΟΣ, ΑΓΙΑ ΤΡΙΑΔΑ ΛΟΚΡΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΓΙΟΣ ΣΕΡΑΦΕΙΜ ΛΟΚΡΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ ΛΟΚΡΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΘΕΡΜΟΠΥΛΕΣ ΦΘΙΩΤΙΔΟΣ, ΚΑΙΝΟΥΡΓΙΟ ΦΘΙΩΤΙΔΟΣ, ΚΑΛΛΙΔΡΟΜΟ ΦΘΙΩΤΙΔΟΣ, ΚΑΡΑΒΙΔΙΑ ΦΘΙΩΤΙΔΟΣ, ΚΑΡΥΑ ΛΟΚΡΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΚΑΡΥΑ ΡΟΔΩΝΙΑΣ ΦΘΙΩΤΙΔΟΣ, ΚΟΜΝΙΝΑ ΦΘΙΩΤΙΔΟΣ, ΛΟΥΤΡΑ ΘΕΡΜΟΠΥΛΩΝ ΦΘΙΩΤΙΔΟΣ, ΜΕΝΔΕΝΙΤΣΑ ΦΘΙΩΤΙΔΟΣ, ΜΩΛΟΣ ΦΘΙΩΤΙΔΟΣ, ΡΕΓΚΙΝΙΟ ΦΘΙΩΤΙΔΟΣ, ΣΚΑΡΦΕΙΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35010', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΔΟΜΟΚΟΥ ΦΘΙΩΤΙΔΟΣ, ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΔΟΜΟΚΟΥ ΦΘΙΩΤΙΔΟΣ, ΑΓΡΑΠΙΔΙΑ ΦΘΙΩΤΙΔΟΣ, ΑΝΑΒΡΑ ΜΑΓΝΗΣΙΑΣ, ΑΝΩ ΑΓΟΡΙΑΝΗ ΒΟΙΩΤΙΑΣ, ΑΧΛΑΔΙΑ ΦΘΙΩΤΙΔΟΣ, ΒΑΡΔΑΛΗ ΦΘΙΩΤΙΔΟΣ, ΒΕΛΕΣΙΩΤΕΣ ΦΘΙΩΤΙΔΟΣ, ΒΟΥΖΙΟ ΦΘΙΩΤΙΔΟΣ, ΓΑΒΡΑΚΙΑ ΦΘΙΩΤΙΔΟΣ, ΓΕΡΑΚΛΙΟ ΦΘΙΩΤΙΔΟΣ, ΔΟΜΟΚΟΣ ΦΘΙΩΤΙΔΟΣ, ΕΚΚΑΡΑ ΦΘΙΩΤΙΔΟΣ, ΕΛΕΟΥΣΑ ΦΘΙΩΤΙΔΟΣ, ΘΑΥΜΑΚΟ ΦΘΙΩΤΙΔΟΣ, ΚΑΡΥΕΣ ΦΘΙΩΤΙΔΟΣ, ΚΟΡΟΜΗΛΕΑ ΦΘΙΩΤΙΔΟΣ, ΛΕΥΚΑ ΦΘΙΩΤΙΔΟΣ, ΛΟΥΤΡΑ ΚΑΙΤΣΗΣ ΦΘΙΩΤΙΔΟΣ, ΜΑΚΡΟΛΙΒΑΔΟ ΦΘΙΩΤΙΔΟΣ, ΜΑΚΡΥΡΡΑΧΗ ΦΘΙΩΤΙΔΟΣ, ΜΑΝΤΑΣΙΑ ΦΘΙΩΤΙΔΟΣ, ΜΕΛΙΤΑΙΑ ΦΘΙΩΤΙΔΟΣ, ΜΕΤΑΛΛΕΙΟ ΟΜΒΡΙΑΚΗΣ ΦΘΙΩΤΙΔΟΣ, ΝΕΑ ΜΑΚΡΙΣΗ ΦΘΙΩΤΙΔΟΣ, ΝΕΟ ΜΟΝΑΣΤΗΡΙ ΦΘΙΩΤΙΔΟΣ, ΝΕΟΣ ΠΑΛΑΜΑΣ ΦΘΙΩΤΙΔΟΣ, ΝΕΟΧΩΡΙ ΔΟΜΟΚΟΥ ΦΘΙΩΤΙΔΟΣ, ΞΥΝΙΑΣ ΦΘΙΩΤΙΔΟΣ, ΟΜΒΡΙΑΚΗ ΦΘΙΩΤΙΔΟΣ, ΠΑΛΑΜΑΣ ΦΘΙΩΤΙΔΟΣ, ΠΑΝΑΓΙΑ ΦΘΙΩΤΙΔΟΣ, ΠΕΡΙΒΟΛΙ ΔΟΜΟΚΟΥ ΦΘΙΩΤΙΔΟΣ, ΠΕΤΡΙΛΙΑ ΦΘΙΩΤΙΔΟΣ, ΠΕΤΡΩΤΟ ΦΘΙΩΤΙΔΟΣ, ΠΟΛΥΔΕΝΔΡΙ ΦΘΙΩΤΙΔΟΣ, ΠΟΥΡΝΑΡΙ ΦΘΙΩΤΙΔΟΣ, ΣΚΟΠΙΑ ΦΑΡΣΑΛΩΝ ΛΑΡΙΣΗΣ, ΣΟΦΙΑΔΑ ΦΘΙΩΤΙΔΟΣ, ΣΤΑΘΜΟΣ ΔΟΜΟΚΟΥ ΦΘΙΩΤΙΔΟΣ, ΦΥΛΙΑΔΩΝ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35011', Area: 'ΑΡΧΑΝΙΟ ΦΘΙΩΤΙΔΟΣ, ΑΣΒΕΣΤΙΟ ΦΘΙΩΤΙΔΟΣ, ΒΙΤΟΛΗ ΦΘΙΩΤΙΔΟΣ, ΓΙΑΝΝΙΤΣΟΥ ΦΘΙΩΤΙΔΟΣ, ΓΡΑΜΜΕΝΗ ΦΘΙΩΤΙΔΟΣ, ΚΑΣΤΡΙ ΦΘΙΩΤΙΔΟΣ, ΛΙΤΟΣΕΛΟ ΦΘΙΩΤΙΔΟΣ, ΛΟΥΤΡΑ ΠΛΑΤΥΣΤΟΜΟΥ ΦΘΙΩΤΙΔΟΣ, ΜΑΚΡΑΚΩΜΗ ΦΘΙΩΤΙΔΟΣ, ΜΑΚΡΗ ΦΘΙΩΤΙΔΟΣ, ΠΑΛΑΙΑ ΓΙΑΝΝΙΤΣΟΥ ΦΘΙΩΤΙΔΟΣ, ΠΑΛΙΟΥΡΙ ΦΘΙΩΤΙΔΟΣ, ΠΑΠΠΑΣ (ΜΕΣΟΧΩΡΙ) ΦΘΙΩΤΙΔΟΣ, ΠΛΑΤΥΣΤΟΜΟ ΦΘΙΩΤΙΔΟΣ, ΠΤΕΛΕΑ ΦΘΙΩΤΙΔΟΣ, ΡΟΒΟΛΙΑΡΙ ΦΘΙΩΤΙΔΟΣ, ΤΡΙΛΟΦΟ ΦΘΙΩΤΙΔΟΣ, ΤΣΟΥΚΚΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35012', Area: 'ΛΑΡΥΜΝΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35014', Area: 'ΑΝΘΗΛΗ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35015', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΛΟΚΡΙΔΟΣ ΒΟΙΩΤΙΑΣ, ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΤΙΘΟΡΕΑΣ ΒΟΙΩΤΙΑΣ, ΑΝΘΟΧΩΡΙ ΒΟΙΩΤΙΑΣ, ΒΑΣΙΛΙΚΑ ΒΟΙΩΤΙΑΣ, ΚΑΤΩ ΤΙΘΟΡΕΑ ΒΟΙΩΤΙΑΣ, ΜΟΔΙ ΒΟΙΩΤΙΑΣ, ΠΑΡΟΡΙ ΒΟΙΩΤΙΑΣ, ΤΙΘΟΡΕΑ ΒΟΙΩΤΙΑΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35016', Area: 'ΑΛΩΝΙΑ ΦΘΙΩΤΙΔΟΣ, ΑΜΑΛΩΤΑ ΦΘΙΩΤΙΔΟΣ, ΑΡΓΥΡΟΧΩΡΙΟ ΦΘΙΩΤΙΔΟΣ, ΒΑΡΚΑ ΦΘΙΩΤΙΔΟΣ, ΒΑΣΙΛΙΚΑ ΦΘΙΩΤΙΔΟΣ, ΙΕΡΑ ΜΟΝΗ ΑΓΑΘΩΝΟΣ ΛΥΧΝΟΥ ΦΘΙΩΤΙΔΟΣ, ΚΑΠΝΟΧΩΡΙ ΦΘΙΩΤΙΔΟΣ, ΚΑΣΤΑΝΕΑ ΦΘΙΩΤΙΔΟΣ, ΛΑΔΙΚΟΥ ΦΘΙΩΤΙΔΟΣ, ΛΟΥΤΡΑ ΥΠΑΤΗΣ ΦΘΙΩΤΙΔΟΣ, ΛΥΧΝΟ ΦΘΙΩΤΙΔΟΣ, ΜΑΓΟΥΛΑ ΦΘΙΩΤΙΔΟΣ, ΜΕΞΙΑΤΕΣ ΦΘΙΩΤΙΔΟΣ, ΜΕΣΟΧΩΡΙ ΦΘΙΩΤΙΔΟΣ, ΝΕΑ ΥΠΑΤΗ ΦΘΙΩΤΙΔΟΣ, ΝΕΟΧΩΡΙ ΥΠΑΤΗΣ ΦΘΙΩΤΙΔΟΣ, ΠΕΡΙΒΟΛΙ ΣΠΕΡΧΕΙΑΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΠΕΡΙΣΤΕΡΙ ΦΘΙΩΤΙΔΟΣ, ΠΥΡΓΟΣ ΥΠΑΤΗΣ ΦΘΙΩΤΙΔΟΣ, ΡΟΔΩΝΙΑ ΦΘΙΩΤΙΔΟΣ, ΣΥΚΑΣ ΦΘΙΩΤΙΔΟΣ, ΥΠΑΤΗ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35100', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΦΘΙΩΤΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΓΡΑΔΟΥΛΑ ΦΘΙΩΤΙΔΟΣ, ΑΓΡΙΛΙΑ ΦΘΙΩΤΙΔΟΣ, ΑΜΟΥΡΙΟ ΦΘΙΩΤΙΔΟΣ, ΑΝΩ ΒΑΡΔΑΤΕΣ ΦΘΙΩΤΙΔΟΣ, ΑΝΩ ΔΑΜΑΣΤΑ ΦΘΙΩΤΙΔΟΣ, ΑΥΛΑΚΙΟ ΦΘΙΩΤΙΔΟΣ, ΓΟΡΓΟΠΟΤΑΜΟΣ ΦΘΙΩΤΙΔΟΣ, ΔΕΛΦΙΝΟ ΦΘΙΩΤΙΔΟΣ, ΔΙΒΡΗ ΦΘΙΩΤΙΔΟΣ, ΔΥΟ ΒΟΥΝΑ ΦΘΙΩΤΙΔΟΣ, ΕΛΕΥΘΕΡΟΧΩΡΙ ΦΘΙΩΤΙΔΟΣ, ΖΑΚΑΙΙΚΑ ΦΘΙΩΤΙΔΟΣ, ΖΗΛΕΥΤΟ ΦΘΙΩΤΙΔΟΣ, ΗΡΑΚΛΕΙΑ ΦΘΙΩΤΙΔΟΣ, ΚΑΛΑΜΑΚΙ ΦΘΙΩΤΙΔΟΣ, ΚΑΤΩ ΔΑΜΑΣΤΑ ΦΘΙΩΤΙΔΟΣ, ΚΟΜΜΑ ΦΘΙΩΤΙΔΟΣ, ΚΟΜΠΟΤΑΔΕΣ ΦΘΙΩΤΙΔΟΣ, ΚΟΥΜΑΡΙΤΣΙ ΦΘΙΩΤΙΔΟΣ, ΚΩΣΤΑΛΕΞΗΣ ΦΘΙΩΤΙΔΟΣ, ΛΑΜΙΑ ΦΘΙΩΤΙΔΟΣ, ΛΕΙΑΝΟΚΛΑΔΙ ΦΘΙΩΤΙΔΟΣ, ΛΙΜΟΓΑΡΔΙΟ ΦΘΙΩΤΙΔΟΣ, ΛΟΓΓΙΤΣΙΟ ΦΘΙΩΤΙΔΟΣ, ΛΥΓΑΡΙΑ ΦΘΙΩΤΙΔΟΣ, ΜΕΓΑΛΗ ΒΡΥΣΗ ΦΘΙΩΤΙΔΟΣ, ΜΟΝΗ ΑΝΤΙΝΙΤΣΗΣ ΚΑΛΑΜΑΚΙΟΥ ΦΘΙΩΤΙΔΟΣ, ΜΟΝΗ ΓΕΝΗΣΙΟΥ ΘΕΟΤΟΚΟΥ ΔΑΜΑΣΤΑΣ ΦΘΙΩΤΙΔΟΣ, ΜΟΝΗ ΓΟΡΓΟΕΠΗΚΟΟΥ ΦΘΙΩΤΙΔΟΣ, ΜΟΣΧΟΚΑΡΥΑ ΦΘΙΩΤΙΔΟΣ, ΜΟΣΧΟΧΩΡΙ ΦΘΙΩΤΙΔΟΣ, ΝΕΑ ΠΑΥΛΙΑΝΗ ΦΘΙΩΤΙΔΟΣ, ΝΕΟ ΚΡΙΚΕΛΛΟ ΦΘΙΩΤΙΔΟΣ, ΟΙΤΗ ΦΘΙΩΤΙΔΟΣ, ΠΑΛΑΙΟΧΩΡΙ ΛΙΜΟΓΑΡΔΙΟΥ ΦΘΙΩΤΙΔΟΣ, ΠΑΥΛΙΑΝΗ ΦΘΙΩΤΙΔΟΣ, ΡΟΔΙΤΣΑ ΦΘΙΩΤΙΔΟΣ, ΣΚΑΜΝΟΣ ΦΘΙΩΤΙΔΟΣ, ΣΤΑΥΡΟΣ ΦΘΙΩΤΙΔΟΣ, ΣΤΙΡΦΑΚΑ ΦΘΙΩΤΙΔΟΣ, ΥΔΡΟΜΥΛΟΣ ΦΘΙΩΤΙΔΟΣ, ΦΡΑΝΤΖΗΣ ΦΘΙΩΤΙΔΟΣ, ΧΑΛΒΑΝΤΖΑΙΙΚΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35131', Area: 'ΛΑΜΙΕΩΝ ΦΘΙΩΤΙΔΑΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35132', Area: 'ΛΑΜΙΕΩΝ ΦΘΙΩΤΙΔΑΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35133', Area: 'ΛΑΜΙΕΩΝ ΦΘΙΩΤΙΔΑΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35200', Area: 'ΑΓΙΑ ΑΙΚΑΤΕΡΙΝΗ ΛΟΚΡΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΓΙΟΣ ΒΛΑΣΙΟΣ ΑΤΑΛΑΝΤΗΣ ΦΘΙΩΤΙΔΟΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΛΟΚΡΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΓΝΑΝΤΗ ΦΘΙΩΤΙΔΟΣ, ΑΝΑΒΡΑ ΦΘΙΩΤΙΔΟΣ, ΑΡΚΙΤΣΑ ΦΘΙΩΤΙΔΟΣ, ΑΤΑΛΑΝΤΗ ΦΘΙΩΤΙΔΟΣ, ΑΤΑΛΑΝΤΟΝΗΣΙ ΦΘΙΩΤΙΔΟΣ, ΓΟΥΛΕΜΙΟ ΦΘΙΩΤΙΔΟΣ, ΕΞΑΡΧΟΣ ΦΘΙΩΤΙΔΟΣ, ΕΥΚΑΛΥΠΤΟΣ ΦΘΙΩΤΙΔΟΣ, ΖΕΛΙΟ ΦΘΙΩΤΙΔΟΣ, ΚΑΛΑΠΟΔΙ ΦΘΙΩΤΙΔΟΣ, ΚΑΛΥΨΩ ΦΘΙΩΤΙΔΟΣ, ΚΟΛΑΚΑ (ή ΚΥΡΤΩΝΗ) ΦΘΙΩΤΙΔΟΣ, ΚΥΠΑΡΙΣΣΙ ΦΘΙΩΤΙΔΟΣ, ΚΥΡΤΩΝΗ ΦΘΙΩΤΙΔΟΣ, ΜΕΓΑΠΛΑΤΑΝΟΣ ΦΘΙΩΤΙΔΟΣ, ΜΕΛΙΔΟΝΙ ΦΘΙΩΤΙΔΟΣ, ΜΟΝΗ ΑΓΙΩΝ ΑΝΑΡΓΥΡΩΝ ΑΤΑΛΑΝΤΗΣ ΦΘΙΩΤΙΔΟΣ, ΠΑΛΙΡΡΟΙΑ ΦΘΙΩΤΙΔΟΣ, ΣΚΑΛΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '35300', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΦΘΙΩΤΙΔΟΣ ΦΘΙΩΤΙΔΟΣ, ΑΝΥΔΡΟ ΦΘΙΩΤΙΔΟΣ, ΑΧΙΝΟΣ ΦΘΙΩΤΙΔΟΣ, ΒΑΣΙΛΙΚΗ ΦΘΙΩΤΙΔΟΣ, ΔΡΕΠΑΝΟ ΦΘΙΩΤΙΔΟΣ, ΔΡΟΣΙΑ ΦΘΙΩΤΙΔΟΣ, ΚΑΡΑΒΟΜΥΛΟΣ ΦΘΙΩΤΙΔΟΣ, ΚΟΥΒΕΛΑ ΦΘΙΩΤΙΔΟΣ, ΚΟΥΤΣΟΥΡΟ ΦΘΙΩΤΙΔΟΣ, ΜΕΛΙΣΣΙΑ ΦΘΙΩΤΙΔΟΣ, ΝΕΡΑΙΔΑ ΦΘΙΩΤΙΔΟΣ, ΠΑΛΑΙΟΚΕΡΑΣΕΑ ΦΘΙΩΤΙΔΟΣ, ΠΑΝΟΡΑΜΑ ΦΘΙΩΤΙΔΟΣ, ΠΑΡΑΛΙΑ ΑΧΙΝΟΥ ΦΘΙΩΤΙΔΟΣ, ΠΑΡΑΛΙΑ ΡΑΧΩΝ ΦΘΙΩΤΙΔΟΣ, ΠΕΤΑΡΑΔΕΣ ΦΘΙΩΤΙΔΟΣ, ΠΛΑΚΕΣ ΦΘΙΩΤΙΔΟΣ, ΠΛΑΤΑΝΙΑΣ ΦΘΙΩΤΙΔΟΣ, ΡΑΧΕΣ ΦΘΙΩΤΙΔΟΣ, ΣΚΑΣΜΑΔΑ ΦΘΙΩΤΙΔΟΣ, ΣΤΥΛΙΔΑ ΦΘΙΩΤΙΔΟΣ, ΦΟΥΡΝΟΙ ΦΘΙΩΤΙΔΟΣ, ΦΤΙΛΙΑ ΦΘΙΩΤΙΔΟΣ', Prefecture: 'Φθιώτιδας' },
    { PostalCode: '53070', Area: 'ΑΝΤΙΓΟΝΟ ΦΛΩΡΙΝΑΣ, ΜΑΝΙΑΚΙ ΦΛΩΡΙΝΑΣ, ΠΕΛΑΡΓΟΣ ΦΛΩΡΙΝΑΣ, ΦΑΡΑΓΓΙ ΦΛΩΡΙΝΑΣ, ΦΙΛΩΤΑΣ ΦΛΩΡΙΝΑΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '53071', Area: 'ΑΝΩ ΑΧΛΑΔΑ ΦΛΩΡΙΝΑΣ, ΑΧΛΑΔΑ ΦΛΩΡΙΝΑΣ, ΓΙΟΥΡΟΥΚΙ ΦΛΩΡΙΝΑΣ, ΜΕΛΙΤΗ ΦΛΩΡΙΝΑΣ, ΣΚΟΠΟΣ ΦΛΩΡΙΝΑΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '53073', Area: 'ΛΕΧΟΒΟ ΦΛΩΡΙΝΑΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '53077', Area: 'ΑΓΙΟΣ ΑΧΙΛΛΕΙΟΣ ΝΗΣΟΣ ΦΛΩΡΙΝΑΣ, ΑΓΙΟΣ ΓΕΡΜΑΝΟΣ ΦΛΩΡΙΝΑΣ, ΒΡΟΝΤΕΡΟ ΦΛΩΡΙΝΑΣ, ΚΑΛΛΙΘΕΑ ΦΛΩΡΙΝΑΣ, ΚΑΡΥΕΣ ΦΛΩΡΙΝΑΣ, ΛΑΙΜΟΣ ΦΛΩΡΙΝΑΣ, ΛΕΥΚΩΝΑΣ ΦΛΩΡΙΝΑΣ, ΜΗΛΕΩΝΑΣ ΦΛΩΡΙΝΑΣ, ΜΙΚΡΟΛΙΜΝΗ ΦΛΩΡΙΝΑΣ, ΟΞΥΑ ΦΛΩΡΙΝΑΣ, ΠΛΑΤΥ ΦΛΩΡΙΝΑΣ, ΠΥΛΗ ΑΓΙΟΥ ΑΧΙΛΛΕΙΟΥ ΦΛΩΡΙΝΑΣ, ΨΑΡΑΔΕΣ ΦΛΩΡΙΝΑΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '53100', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΦΛΩΡΙΝΑΣ, ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΦΛΩΡΙΝΑΣ, ΑΓΙΟΣ ΒΑΡΘΟΛΟΜΑΙΟΣ ΦΛΩΡΙΝΑΣ, ΑΚΡΙΤΑΣ ΦΛΩΡΙΝΑΣ, ΑΛΩΝΑ ΦΛΩΡΙΝΑΣ, ΑΜΜΟΧΩΡΙ ΦΛΩΡΙΝΑΣ, ΑΝΩ ΚΑΛΛΙΝΙΚΗ ΦΛΩΡΙΝΑΣ, ΑΝΩ ΚΛΕΙΝΕΣ ΦΛΩΡΙΝΑΣ, ΑΝΩ ΥΔΡΟΥΣΣΑ ΦΛΩΡΙΝΑΣ, ΑΡΜΕΝΟΧΩΡΙ ΦΛΩΡΙΝΑΣ, ΑΤΡΑΠΟΣ ΦΛΩΡΙΝΑΣ, ΔΡΟΣΟΠΗΓΗ ΦΛΩΡΙΝΑΣ, ΕΘΝΙΚΟ ΦΛΩΡΙΝΑΣ, ΙΤΕΑ ΦΛΩΡΙΝΑΣ, ΚΑΛΟΓΕΡΙΤΣΑ ΦΛΩΡΙΝΑΣ, ΚΑΤΩ ΚΑΛΛΙΝΙΚΗ ΦΛΩΡΙΝΑΣ, ΚΑΤΩ ΚΛΕΙΝΕΣ ΦΛΩΡΙΝΑΣ, ΚΛΑΔΟΡΡΑΧΗ ΦΛΩΡΙΝΑΣ, ΚΟΙΜΗΣΙΣ ΤΗΣ ΘΕΟΤΟΚΟΥ ΦΛΩΡΙΝΑΣ, ΚΟΛΧΙΚΗ ΦΛΩΡΙΝΑΣ, ΚΟΡΥΦΗ ΦΛΩΡΙΝΑΣ, ΚΡΑΤΕΡΟ ΦΛΩΡΙΝΑΣ, ΛΕΠΤΟΚΑΡΥΕΣ ΦΛΩΡΙΝΑΣ, ΜΑΡΙΝΑ ΦΛΩΡΙΝΑΣ, ΜΕΣΟΚΑΜΠΟΣ ΦΛΩΡΙΝΑΣ, ΜΕΣΟΝΗΣΙ ΦΛΩΡΙΝΑΣ, ΜΕΣΟΧΩΡΙ ΦΛΩΡΙΝΑΣ, ΝΕΟΣ ΚΑΥΚΑΣΟΣ ΦΛΩΡΙΝΑΣ, ΝΕΟΧΩΡΑΚΙ ΦΛΩΡΙΝΑΣ, ΝΙΚΗ ΦΛΩΡΙΝΑΣ, ΠΑΛΑΙΣΤΡΑ ΦΛΩΡΙΝΑΣ, ΠΑΠΠΑΓΙΑΝΝΗΣ ΦΛΩΡΙΝΑΣ, ΠΑΡΟΡΕΙΟ ΦΛΩΡΙΝΑΣ, ΠΕΡΑΣΜΑ ΦΛΩΡΙΝΑΣ, ΠΟΛΥΠΛΑΤΑΝΟΣ ΦΛΩΡΙΝΑΣ, ΠΟΛΥΠΟΤΑΜΟΣ ΦΛΩΡΙΝΑΣ, ΠΡΩΤΗ ΦΛΩΡΙΝΑΣ, ΣΙΜΟΣ ΙΩΑΝΝΙΔΗΣ ΦΛΩΡΙΝΑΣ, ΣΚΟΠΙΑ ΦΛΩΡΙΝΑΣ, ΤΡΙΑΝΤΑΦΥΛΛΙΑ ΦΛΩΡΙΝΑΣ, ΤΡΙΒΟΥΝΟ ΦΛΩΡΙΝΑΣ, ΤΡΙΠΟΤΑΜΟΣ ΦΛΩΡΙΝΑΣ, ΤΡΟΠΑΙΟΥΧΟΣ ΦΛΩΡΙΝΑΣ, ΥΔΡΟΥΣΣΑ ΦΛΩΡΙΝΑΣ, ΦΛΑΜΠΟΥΡΟ ΦΛΩΡΙΝΑΣ, ΦΛΩΡΙΝΑ ΦΛΩΡΙΝΑΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '53200', Area: 'ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΦΛΩΡΙΝΑΣ, ΑΜΥΝΤΑΙΟ ΦΛΩΡΙΝΑΣ, ΑΝΑΛΗΨΗ ΦΛΩΡΙΝΑΣ, ΒΕΓΟΡΑ ΦΛΩΡΙΝΑΣ, ΛΕΒΑΙΑ ΦΛΩΡΙΝΑΣ, ΠΕΤΡΕΣ ΦΛΩΡΙΝΑΣ, ΡΟΔΩΝΟ ΦΛΩΡΙΝΑΣ, ΣΩΤΗΡΑΣ ΦΛΩΡΙΝΑΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '53533', Area: 'ΠΑΥΛΟΥ ΜΕΛΑ ΘΕΣΣΑΛΟΝΙΚΗΣ', Prefecture: 'Φλώρινας' },
    { PostalCode: '33052', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΝΗΣΟΣ ΦΩΚΙΔΟΣ, ΑΨΗΦΙΑ ΝΗΣΟΣ ΦΩΚΙΔΟΣ, ΓΑΛΑΞΙΔΙ ΦΩΚΙΔΟΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33053', Area: 'ΑΒΟΡΟΣ ΦΩΚΙΔΟΣ, ΑΙΓΙΤΙΟ ΦΩΚΙΔΟΣ, ΒΡΑΙΛΑ ΦΩΚΙΔΟΣ, ΔΑΦΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΔΙΑΚΟΠΙ ΑΙΤΩΛ/ΝΙΑΣ, ΔΩΡΙΚΟ ΦΩΚΙΔΟΣ, ΚΑΛΛΙΟ ΦΩΚΙΔΟΣ, ΚΑΡΟΥΤΕΣ ΦΩΚΙΔΟΣ, ΚΛΗΜΑ ΛΙΔΟΡΚΙΟΥ ΦΩΚΙΔΟΣ, ΚΟΝΙΑΚΟΣ ΦΩΚΙΔΟΣ, ΛΕΥΚΑ ΦΩΚΙΔΟΣ, ΛΕΥΚΑΔΙΤΙ ΦΩΚΙΔΟΣ, ΛΙΔΟΡΙΚΙ ΦΩΚΙΔΟΣ, ΜΑΛΑΝΔΡΙΝΟ ΦΩΚΙΔΟΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΦΩΚΙΔΟΣ, ΠΕΝΤΑΠΟΛΗ ΦΩΚΙΔΟΣ, ΣΚΑΛΟΥΛΑ ΦΩΚΙΔΟΣ, ΣΥΚΕΑ ΦΩΚΙΔΟΣ, ΤΡΙΒΙΔΙ ΦΩΚΙΔΟΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33054', Area: 'ΔΕΛΦΟΙ ΦΩΚΙΔΟΣ, ΚΑΛΑΝΙΑ ΒΟΙΩΤΙΑΣ, ΚΡΟΚΙ ΔΕΛΦΩΝ ΒΟΙΩΤΙΑΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33056', Area: 'ΑΓΙΟΣ ΠΟΛΥΚΑΡΠΟΣ ΜΑΛΑΜΑΤΩΝ ΑΙΤΩΛ/ΝΙΑΣ, ΓΡΗΓΟΡΙΤΙΚΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΡΟΣΑΤΟ ΑΙΤΩΛ/ΝΙΑΣ, ΕΥΠΑΛΙΟ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΜΠΟΣ ΕΥΠΑΛΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΑΣΤΡΑΚΙ ΕΥΠΑΛΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΚΛΗΜΑ ΕΥΠΑΛΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΛΟΓΓΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΓΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΛΑΜΑΤΑ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΝΑΓΟΥΛΗ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΡΑΘΙΑΣ (ΞΥΔΙΑΣ) ΑΙΤΩΛ/ΝΙΑΣ, ΜΟΝΑΣΤΗΡΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΛΑΙΟΜΥΛΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΑΡΑΛΙΑ ΣΕΡΓΟΥΛΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΠΕΥΚΑΚΙ ΑΙΤΩΛ/ΝΙΑΣ, ΠΗΓΗ ΑΙΤΩΛ/ΝΙΑΣ, ΠΥΡΓΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΕΡΓΟΥΛΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΚΑΛΩΜΑ ΑΙΤΩΛ/ΝΙΑΣ, ΤΡΙΚΟΡΦΟ ΕΥΠΑΛΙΟΥ ΑΙΤΩΛ/ΝΙΑΣ, ΦΙΛΟΘΕΗ ΑΙΤΩΛ/ΝΙΑΣ, ΧΙΛΙΑΔΟΥ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33057', Area: 'ΑΝΩ ΜΠΡΑΛΟΣ ΒΟΙΩΤΙΑΣ, ΑΠΟΣΤΟΛΙΑΣ ΒΟΙΩΤΙΑΣ, ΒΑΡΓΙΑΝΗ ΒΟΙΩΤΙΑΣ, ΓΡΑΒΙΑ ΒΟΙΩΤΙΑΣ, ΕΠΤΑΛΟΦΟΣ ΒΟΙΩΤΙΑΣ, ΚΑΛΟΣΚΟΠΗ ΒΟΙΩΤΙΑΣ, ΚΑΣΤΕΛΛΙΑ ΒΟΙΩΤΙΑΣ, ΛΙΛΑΙΑ ΒΟΙΩΤΙΑΣ, ΜΑΡΙΟΛΑΤΑ ΒΟΙΩΤΙΑΣ, ΜΠΡΑΛΟΣ ΒΟΙΩΤΙΑΣ, ΟΙΝΟΧΩΡΙ ΒΟΙΩΤΙΑΣ, ΠΑΛΑΙΟΧΩΡΙ ΔΩΡΙΕΩΝ ΒΟΙΩΤΙΑΣ, ΣΚΛΗΘΡΟ ΒΟΙΩΤΙΑΣ, ΣΤΑΘΜΟΣ ΔΟΜΟΚΟΥ ΒΟΙΩΤΙΑΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33058', Area: 'ΑΓΙΑ ΕΙΡΗΝΗ ΚΑΛΛΙΘΕΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΙ ΠΑΝΤΕΣ ΦΩΚΙΔΟΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΝΗΣΟΣ ΦΩΚΙΔΟΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΚΑΛΛΙΘΕΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΓΙΟΣ ΣΠΥΡΙΔΩΝΑΣ ΚΑΛΛΙΘΕΑΣ ΑΙΤΩΛ/ΝΙΑΣ, ΑΜΥΓΔΑΛΙΑ ΦΩΚΙΔΟΣ, ΓΛΥΦΑΔΑ ΑΙΤΩΛ/ΝΙΑΣ, ΔΑΦΝΟΧΩΡΙ ΑΙΤΩΛ/ΝΙΑΣ, ΕΛΑΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΕΡΑΤΕΙΝΗ ΦΩΚΙΔΟΣ, ΚΑΛΛΙΘΕΑ ΑΙΤΩΛ/ΝΙΑΣ, ΚΛΟΒΙΝΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΜΑΚΡΙΝΗ ΦΩΚΙΔΟΣ, ΜΗΛΕΑ ΦΩΚΙΔΟΣ, ΝΕΟΙ ΑΓΙΟΙ  ΠΑΝΤΕΣ ΦΩΚΙΔΟΣ, ΟΡΜΟΣ ΛΕΜΟΝΙΑΣ ΦΩΚΙΔΟΣ, ΠΑΝΟΡΜΟΣ ΦΩΚΙΔΟΣ, ΠΑΡΑΛΙΑ ΑΓΙΩΝ ΠΑΝΤΩΝ ΦΩΚΙΔΟΣ, ΠΑΡΑΛΙΑ ΤΟΛΟΦΩΝΑ ΦΩΚΙΔΟΣ, ΠΡΑΣΟΥΔΙ  ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΣΠΗΛΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΣΩΤΑΙΝΑ ΦΩΚΙΔΟΣ, ΤΟΛΟΦΩΝΑΣ ΦΩΚΙΔΟΣ, ΤΡΙΖΟΝΙΑ ΝΗΣΟΣ ΑΙΤΩΛ/ΝΙΑΣ, ΦΛΑΜΠΟΥΡΑΚΙΑ ΑΙΤΩΛ/ΝΙΑΣ, ΧΑΝΙΑ ΑΙΤΩΛ/ΝΙΑΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33100', Area: 'ΑΓΙΑ ΕΥΘΥΜΙΑ ΦΩΚΙΔΟΣ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΑΜΦΙΣΣΑΣ ΦΩΚΙΔΟΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΑΜΦΙΣΣΑΣ ΦΩΚΙΔΟΣ, ΑΜΦΙΣΣΑ ΦΩΚΙΔΟΣ, ΒΙΝΙΑΝΗ ΦΩΚΙΔΟΣ, ΒΟΥΝΙΧΩΡΑ ΦΩΚΙΔΟΣ, ΔΡΟΣΟΧΩΡΙ ΦΩΚΙΔΟΣ, ΕΛΑΙΩΝΑΣ ΦΩΚΙΔΟΣ, ΜΟΝΑΣΤΗΡΙ ΠΡΟΣΗΛΙΟΥ ΦΩΚΙΔΟΣ, ΠΕΝΤΕΟΡΙΑ ΦΩΚΙΔΟΣ, ΠΡΟΣΗΛΙΟ ΦΩΚΙΔΟΣ, ΣΕΡΝΙΚΑΚΙ ΦΩΚΙΔΟΣ, ΤΡΙΤΑΙΑ ΦΩΚΙΔΟΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '33200', Area: 'ΑΓΙΟΣ ΑΘΑΝΑΣΙΟΣ ΦΩΚΙΔΟΣ, ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ  ΝΗΣΟΣ ΦΩΚΙΔΟΣ, ΙΤΕΑ ΦΩΚΙΔΟΣ, ΚΙΡΡΑ ΦΩΚΙΔΟΣ', Prefecture: 'Φωκίδας' },
    { PostalCode: '63072', Area: 'ΒΑΛΤΙ ΧΑΛΚΙΔΙΚΗΣ, ΔΕΣΤΕΝΙΚΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΛΑΜΙΤΣΙ ΧΑΛΚΙΔΙΚΗΣ, ΚΟΥΦΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΡΑΛΙΑ ΣΥΚΕΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΛΑΤΑΝΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΣΑΡΤΗ ΧΑΛΚΙΔΙΚΗΣ, ΣΥΚΕΑ ΧΑΛΚΙΔΙΚΗΣ, ΤΟΡΩΝΗ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63073', Area: 'ΑΓΙΑ ΑΝΑΣΤΑΣΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΣ ΠΡΟΔΡΟΜΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΓΑΛΑΡΙΝΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΓΑΛΑΤΙΣΤΑ ΧΑΛΚΙΔΙΚΗΣ, ΓΕΡΟΠΛΑΤΑΝΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΔΟΥΜΠΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΙΟΥΡΚΤΣΟΓΛΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΑΓΙΑΣ ΑΝΑΣΤΑΣΙΑΣ ΦΑΡΜΑΚΟΛΥΤΡΙΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΛΑΙΟΧΩΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΡΙΖΑ ΧΑΛΚΙΔΙΚΗΣ, ΣΑΝΑ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63074', Area: 'ΑΡΝΑΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΒΑΡΒΑΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΥΚΑΝΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΟΧΩΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΛΑΙΟΧΩΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΣΤΑΝΟΣ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63075', Area: 'ΑΜΜΟΥΛΙΑΝΗ ΝΗΣΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΓΑΒΡΑΔΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΓΟΜΑΤΙ ΧΑΛΚΙΔΙΚΗΣ, ΔΡΕΝΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΕΛΕΥΘΕΡΟΝΗΣΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΙΕΡΙΣΣΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΟΥΜΙΤΣΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΡΥΟΝΕΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΛΙΜΑΝΙ ΑΜΜΟΥΛΙΑΝΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΛΙΜΑΝΙ ΙΕΡΙΣΣΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΕΤΟΧΙ ΑΓΙΟΥ ΠΑΥΛΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΡΟΔΑ ΧΑΛΚΙΔΙΚΗΣ, ΞΗΡΟΠΟΤΑΜΟ ΧΑΛΚΙΔΙΚΗΣ, ΟΥΡΑΝΟΠΟΛΗ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΑΛΑ ΝΕΩΝ ΡΟΔΩΝ ΧΑΛΚΙΔΙΚΗΣ, ΤΡΥΠΗΤΗ ΝΗΣΟΣ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63077', Area: 'ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΝΕΑΣ ΣΚΙΩΝΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΖΑΠΙΚΟ ΚΑΣΣΑΝΔΡΕΙΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΦΥΤΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΓΛΥΦΟΝΕΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΕΛΑΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΕΥΔΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΛΑΝΔΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΛΛΙΘΕΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΛΟΥΤΣΙΚΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΣΣΑΝΔΡΑ ΠΑΛΛΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΣΣΑΝΔΡΕΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΣΣΑΝΔΡΗΝΟ ΧΑΛΚΙΔΙΚΗΣ, ΚΡΥΟΠΗΓΗ ΧΑΛΚΙΔΙΚΗΣ, ΛΕΥΚΗ ΠΕΡΙΣΤΕΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΛΑΙ ΚΑΛΥΒΑΙ ΧΑΛΚΙΔΙΚΗΣ, ΜΠΟΥΛΑΜΑΤΣΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΣΚΙΩΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΦΩΚΑΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΠΟΣΕΙΔΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΥΡΓΟΣ ΣΑΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΣΑΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΣΙΒΗΡΗ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΑΛΑ ΦΟΥΡΚΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΩΛΗΝΑ ΧΑΛΚΙΔΙΚΗΣ, ΦΟΥΡΚΑ ΧΑΛΚΙΔΙΚΗΣ, ΦΥΛΑΚΕΣ ΚΑΡΑΚΑΛΛΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΦΥΛΑΚΕΣ ΚΑΣΣΑΝΔΡΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΦΥΛΑΚΕΣ ΞΕΝΟΦΩΝΤΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΧΡΟΥΣΟΥ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63078', Area: 'ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΣΣΑ ΧΑΛΚΙΔΙΚΗΣ, ΒΟΥΡΒΟΥΡΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΔΙΑΠΟΡΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΡΥΔΙ ΧΑΛΚΙΔΙΚΗΣ, ΚΟΥΝΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΛΑΓΟΝΗΣΙ ΧΑΛΚΙΔΙΚΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΛΑΤΟΥΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΛΙΒΡΟΧΙΟ ΧΑΛΚΙΔΙΚΗΣ, ΜΕΤΑΓΚΙΤΣΙ ΧΑΛΚΙΔΙΚΗΣ, ΜΕΤΑΜΟΡΦΩΣΗ ΧΑΛΚΙΔΙΚΗΣ, ΟΡΜΟΣ ΠΑΝΑΓΙΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΛΑΝΑ ΧΑΛΚΙΔΙΚΗΣ, ΠΥΡΓΑΔΙΚΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΣΑΛΟΝΙΚΙΟΥ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63080', Area: 'ΑΓΙΟΣ ΠΑΥΛΟΣ ΚΑΛΛΙΚΡΑΤΕΙΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΣ ΠΑΥΛΟΣ ΝΙΚΗΤΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΕΛΑΙΟΧΩΡΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΡΗΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΛΑΚΚΩΜΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΓΩΝΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΗΡΑΚΛΕΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΚΑΛΛΙΚΡΑΤΕΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΣΙΛΑΤΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΟΧΩΡΑΚΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΕΤΡΑΛΩΝΑ ΧΑΛΚΙΔΙΚΗΣ, ΡΟΔΟΚΗΠΟΣ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63081', Area: 'ΑΖΑΠΙΚΟ ΝΕΟΥ ΜΑΡΜΑΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΓΑΛΗΝΗ ΝΕΟΥ ΜΑΡΜΑΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΕΛΙΑ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΕΛΙΑ ΝΙΚΗΤΗ ΧΑΛΚΙΔΙΚΗΣ, ΘΕΣΗ ΚΑΛΥΒΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΛΟΓΡΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΛΑΓΟΜΑΝΤΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΛΙΜΑΝΙ ΚΑΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΟΣ ΜΑΡΜΑΡΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΡΑΔΕΙΣΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΡΘΕΝΩΝΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΠΑΘΙΕΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΤΥΛΑΔΑΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΤΡΙΠΟΤΑΜΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΧΛΙΑΔΟΥ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63085', Area: 'ΑΓΙΑ ΠΑΡΑΣΚΕΥΗ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΠΑΛΙΟΥΡΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΓΛΑΡΟΚΑΒΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΛΕΥΚΕΣ ΧΑΛΚΙΔΙΚΗΣ, ΛΟΥΤΡΑ ΑΓΙΑΣ ΠΑΡΑΣΚΕΥΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΞΥΝΑ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΛΙΟΥΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΝΟΡΑΜΑ ΧΑΛΚΙΔΙΚΗΣ, ΠΕΥΚΟΧΩΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΗΓΑΔΑΚΙ ΠΟΛΥΧΡΟΝΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΠΗΓΑΔΑΚΙ ΣΥΚΕΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΟΛΥΧΡΟΝΟ ΧΑΛΚΙΔΙΚΗΣ, ΦΡΑΜΑ ΧΑΛΚΙΔΙΚΗΣ, ΧΑΝΙΩΤΗΣ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63086', Area: 'ΒΙΓΛΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΡΥΕΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΨΑΛΑ ΧΑΛΚΙΔΙΚΗΣ, ΜΕΤΟΧΙ ΧΟΥΡΜΙΤΣΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΒΑΤΟΠΕΔΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΕΣΦΙΓΜΕΝΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΙΒΗΡΩΝ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΚΑΡΑΚΑΛΛΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΚΟΥΤΛΟΥΜΟΥΣΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΜΕΓΙΣΤΗΣ ΛΑΥΡΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΠΑΝΤΟΚΡΑΤΟΡΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΣΤΑΥΡΟΝΙΚΗΤΑ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΦΙΛΟΘΕΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΧΙΛΙΑΝΔΑΡΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΠΡΟΒΑΤΑ-ΜΟΡΦΟΝΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΑΓΙΟΥ ΑΝΔΡΕΟΥ ΒΑΤΟΠΕΔΙΟΥ , ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ ΒΑΤΟΠΕΔΙΟΥ, ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ(ΛΑΚΟΣΚΗΤΗ) ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΑΓΙΟΥ ΠΑΝΤΕΛΕΗΜΟΝΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΠΡΟΦΗΤΟΥ ΗΛΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΤΙΜΙΟΥ ΠΡΟΔΡΟΜΟΥ ΙΒΗΡΩΝ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΤΙΜΙΟΥ ΠΡΟΔΡΟΜΟΥ ΜΕΓΙΣΤΗΣ ΛΑΥΡΑΣ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63087', Area: 'ΒΟΥΛΕΥΤΗΡΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΔΑΦΝΗ ΑΓΙΟΥ ΟΡΟΥΣ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΡΟΥΛΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΤΟΥΝΑΚΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΕΡΑΣΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΔΙΟΝΥΣΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΠΑΝΤΕΛΕΗΜΟΝΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΑΓΙΟΥ ΠΑΥΛΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΔΟΧΕΙΑΡΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΖΩΓΡΑΦΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΚΩΝΣΤΑΜΟΝΙΤΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΞΕΝΟΦΩΝΤΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΞΗΡΟΠΟΤΑΜΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΟΣΙΟΥ ΓΡΗΓΟΡΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΝΗ ΣΙΜΩΝΟΣ ΠΕΤΡΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΣΚΗΤΗ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΑΓΙΑΣ ΑΝΝΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΑΓΙΑΣ ΤΡΙΑΔΟΣ (ΚΑΥΣΟΚΑΛΥΒΙΩΝ) ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΕΥΑΓΓΕΛΙΣΜΟΥ ΘΕΟΤΟΚΟΣ(ΞΕΝΟΦΩΝΤΟΣ) ΧΑΛΚΙΔΙΚΗΣ, ΣΚΗΤΗ ΘΕΟΤΟΚΟΥ(ΝΕΑ ΣΚΗΤΗ) ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63088', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΝΙΚΗΤΗΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΙΜΠΕΛΙΤΣΙ ΧΑΛΚΙΔΙΚΗΣ, ΓΑΛΗΝΗ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΕΛΑΙΩΝΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΖΩΓΡΑΦΟΥ ΑΓΙΟΥ ΝΙΚΟΛΑΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΗΜΕΡΗ ΕΛΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΚΕΛΥΦΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΝΙΚΗΤΗ ΧΑΛΚΙΔΙΚΗΣ, ΠΕΡΙΣΤΕΡΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΥΡΓΟΣ ΣΙΘΩΝΙΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΠΑΛΑΘΡΟΝΗΣΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΣΧΟΙΝΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΦΤΕΡΩΤΗ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63100', Area: 'ΒΡΑΣΤΑΜΑ ΧΑΛΚΙΔΙΚΗΣ, ΓΕΡΑΚΙΝΗ ΧΑΛΚΙΔΙΚΗΣ, ΔΙΑΣΤΑΥΡΩΣΗ ΠΑΛΑΙΟΚΑΣΤΡΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΚΑΛΥΒΕΣ ΠΟΛΥΓΥΡΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΚΕΛΛΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΛΑΙΟΚΑΣΤΡΟ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΤΕΛΙΔΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΟΛΥΓΥΡΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΤΑΞΙΑΡΧΗΣ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '63200', Area: 'ΑΓΙΟΣ ΜΑΜΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΧΑΛΚΙΔΙΚΗΣ, ΒΕΡΓΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΔΙΟΝΥΣΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΖΩΓΡΑΦΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΜΟΥΡΙΕΣ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΜΟΥΔΑΝΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΠΛΑΓΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΠΟΤΕΙΔΑΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΝΕΑ ΤΕΝΕΔΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΟΛΥΝΘΟΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΠΑ ΑΛΩΝΙ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΡΑΛΙΑ ΔΙΟΝΥΣΙΟΥ ΧΑΛΚΙΔΙΚΗΣ, ΠΑΡΑΛΙΑ ΝΕΑΣ ΤΡΙΓΛΙΑΣ ΧΑΛΚΙΔΙΚΗΣ, ΠΟΡΤΑΡΙΑ ΧΑΛΚΙΔΙΚΗΣ, ΠΟΡΤΕΣ ΧΑΛΚΙΔΙΚΗΣ, ΣΗΜΑΝΤΡΑ ΧΑΛΚΙΔΙΚΗΣ, ΣΩΖΟΠΟΛΗ ΧΑΛΚΙΔΙΚΗΣ, ΦΛΟΓΗΤΑ ΧΑΛΚΙΔΙΚΗΣ', Prefecture: 'Χαλκιδικής' },
    { PostalCode: '73001', Area: 'ΑΓΙΑ ΚΥΡΙΑΚΗ ΧΑΝΙΩΝ, ΑΓΙΑ ΤΡΙΑΔΑ ΣΕΛΙΝΟΥ ΧΑΝΙΩΝ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΣΚΛΑΒΟΠΟΥΛΩΝ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΠΑΥΛΟΣ ΒΟΥΤΑ ΧΑΝΙΩΝ, ΑΖΟΓΥΡΕΣ ΒΟΥΤΑ ΧΑΝΙΩΝ, ΑΖΟΓΥΡΕΣ ΠΑΛΑΙΟΧΩΡΑΣ ΧΑΝΙΩΝ, ΑΜΠΕΛΟΣ ΓΑΥΔΟΥ ΧΑΝΙΩΝ, ΑΝΥΔΡΟΙ ΧΑΝΙΩΝ, ΑΡΧΟΝΤΙΚΟ ΧΑΝΙΩΝ, ΑΣΦΕΝΔΙΛΕΣ ΧΑΝΙΩΝ, ΑΧΛΑΔΙΑΚΕΣ ΧΑΝΙΩΝ, ΒΑΤΣΙΑΝΑ ΧΑΝΙΩΝ, ΒΛΙΘΙΑΣ ΧΑΝΙΩΝ, ΒΟΥΤΑΣ ΧΑΝΙΩΝ, ΓΑΥΔΟΠΟΥΛΑ ΧΑΝΙΩΝ, ΓΙΑΛΟΣ ΧΑΝΙΩΝ, ΓΡΗΓΟΡΙΑΝΑ ΣΑΡΑΚΗΝΑΣ ΧΑΝΙΩΝ, ΚΑΛΑΜΙΟΣ ΧΑΝΙΩΝ, ΚΑΛΑΜΟΣ ΧΑΝΙΩΝ, ΚΑΜΑΤΕΡΑ ΧΑΝΙΩΝ, ΚΑΡΑΒΕ ΓΑΥΔΟΥ ΧΑΝΙΩΝ, ΚΑΣΤΡΙ ΓΑΥΔΟΥ ΧΑΝΙΩΝ, ΚΙΤΥΡΟΣ ΧΑΝΙΩΝ, ΚΟΝΤΟΚΥΝΗΓΙ ΧΑΝΙΩΝ, ΚΟΥΝΤΟΥΡΑ ΧΑΝΙΩΝ, ΛΑΓΚΑΔΑΣ ΧΑΝΙΩΝ, ΛΑΚΚΟΣ ΣΚΛΑΒΟΠΟΥΛΑΣ ΧΑΝΙΩΝ, ΛΙΒΑΔΙ ΒΟΥΤΑ ΧΑΝΙΩΝ, ΜΑΝΑΤΙΑΝΑ ΧΑΝΙΩΝ, ΜΟΥΣΤΑΚΟΣ ΧΑΝΙΩΝ, ΠΑΛΑΙΟΧΩΡΑ ΧΑΝΙΩΝ, ΠΛΑΤΑΝΕΣ ΣΕΛΙΝΟΥ ΧΑΝΙΩΝ, ΠΛΑΤΑΝΟΣ ΣΕΛΙΝΟΥ ΧΑΝΙΩΝ, ΠΡΟΔΡΟΜΙΟ ΧΑΝΙΩΝ, ΣΑΡΑΚΗΝΑ ΧΑΝΙΩΝ, ΣΚΛΑΒΟΠΟΥΛΑ ΧΑΝΙΩΝ, ΣΠΑΝΙΑΚΟΣ ΧΑΝΙΩΝ, ΣΤΑΥΡΟΣ ΣΕΛΙΝΟΥ ΧΑΝΙΩΝ, ΦΑΡΑΓΓΙ ΣΕΛΙΝΟΥ ΧΑΝΙΩΝ, ΦΩΚΙΑ ΓΑΥΔΟΥ ΧΑΝΙΩΝ, ΧΑΣΙΟ ΧΑΝΙΩΝ, ΧΟΝΔΡΟΣ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73002', Area: 'ΑΝΩ ΚΕΦΑΛΑ ΧΑΝΙΩΝ, ΑΝΩΣΚΕΛΗ ΧΑΝΙΩΝ, ΒΛΑΧΕΡΩΝΙΤΙΣΣΑ ΧΑΝΙΩΝ, ΒΟΥΚΟΛΙΕΣ ΧΑΝΙΩΝ, ΓΑΒΑΛΟΜΟΥΡΙ ΧΑΝΙΩΝ, ΔΕΜΠΛΑ ΧΑΝΙΩΝ, ΔΡΟΜΟΝΕΡΟ ΧΑΝΙΩΝ, ΕΛΛΗΝΙΚΟ ΧΑΝΙΩΝ, ΖΟΥΝΑΚΙ ΧΑΝΙΩΝ, ΚΑΚΟΠΕΤΡΟΣ ΧΑΝΙΩΝ, ΚΑΛΛΙΘΕΑ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΚΑΤΩ ΚΕΦΑΛΑ ΧΑΝΙΩΝ, ΚΑΦΟΥΡΟΣ ΧΑΝΙΩΝ, ΚΕΧΡΕΣ ΧΑΝΙΩΝ, ΚΟΤΣΥΦΙΑΝΑ ΧΑΝΙΩΝ, ΚΟΥΛΚΟΥΘΙΑΝΑ ΧΑΝΙΩΝ, ΛΗΔΙΑΝΑ ΧΑΝΙΩΝ, ΛΙΜΝΗ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΛΟΥΦΑΡΔΙΑΝΑ ΧΑΝΙΩΝ, ΜΕΣΑ ΒΟΥΚΟΛΙΕΣ ΧΑΝΙΩΝ, ΜΕΣΑΥΛΙΑ ΧΑΝΙΩΝ, ΜΕΤΟΧΙ ΣΙΡΙΛΙΟΥ ΧΑΝΙΩΝ, ΜΙΧΑΛΙΑΝΑ ΧΑΝΙΩΝ, ΜΟΥΛΑΜΕΡΙΑΝΑ ΧΑΝΙΩΝ, ΜΠΟΥΓΙΟΥΚΛΙΑΝΑ ΧΑΝΙΩΝ, ΝΕΑΡΑ ΕΣΙΑΝΑ ΧΑΝΙΩΝ, ΝΕΟ ΧΩΡΙΟ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΝΕΡΑΤΖΙΑ ΧΑΝΙΩΝ, ΝΕΡΙΑΝΑ ΧΑΝΙΩΝ, ΠΑΛΑΙΑ ΡΟΥΜΑΤΑ ΧΑΝΙΩΝ, ΠΕΤΡΕΣ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΠΗΓΗ ΧΑΝΙΩΝ, ΠΛΑΤΑΝΕΣ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΠΟΛΕΜΑΡΧΙ ΧΑΝΙΩΝ, ΠΟΝΤΙΚΙΑΝΑ ΧΑΝΙΩΝ, ΣΙΡΙΛΙ ΧΑΝΙΩΝ, ΦΩΤΟΚΑΔΟ ΧΑΝΙΩΝ, ΧΡΥΣΑΥΓΗ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73003', Area: 'ΑΡΜΕΝΟΙ ΧΑΝΙΩΝ, ΚΑΛΑΜΙ ΑΠΟΚΩΡΟΝΟΥ ΧΑΝΙΩΝ, ΚΑΛΥΒΕΣ ΧΑΝΙΩΝ, ΚΥΡΙΑΚΟΣΕΛΛΙΑ ΧΑΝΙΩΝ, ΜΑΧΑΙΡΟΙ ΧΑΝΙΩΝ, ΝΕΟ ΧΩΡΙΟ ΑΠΟΚΟΡΡΩΝΟΥ ΧΑΝΙΩΝ, ΠΡΟΒΑΡΜΑ ΧΑΝΙΩΝ, ΡΑΜΝΗ ΧΑΝΙΩΝ, ΣΑΜΩΝΑΣ ΧΑΝΙΩΝ, ΣΤΥΛΟΣ ΧΑΝΙΩΝ, ΤΣΙΒΑΡΑΣ ΧΑΝΙΩΝ, ΦΑΡΑΓΓΙ ΑΠΟΚΟΡΩΝΟΥ ΧΑΝΙΩΝ, ΧΙΛΙΟΜΟΥΔΟΥ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73004', Area: 'ΑΓΙΟΙ ΑΠΟΣΤΟΛΟΙ ΧΑΝΙΩΝ, ΑΛΙΓΟΙ ΧΑΝΙΩΝ, ΑΝΙΣΑΡΑΚΙ ΧΑΝΙΩΝ, ΑΡΜΙΟ ΧΑΝΙΩΝ, ΒΑΜΒΑΚΑΔΕΣ ΧΑΝΙΩΝ, ΓΡΗΓΟΡΙΑΝΑ ΠΛΕΜΕΝΙΑΝΩΝ ΧΑΝΙΩΝ, ΔΕΣΠΟΤΙΚΟ ΧΑΝΙΩΝ, ΔΡΥΣ ΧΑΝΙΩΝ, ΚΑΒΑΛΛΑΡΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΔΡΟΣ ΧΑΝΙΩΝ, ΚΑΚΟΔΙΚΙ ΧΑΝΙΩΝ, ΚΑΛΛΙΘΕΑ ΣΕΛΙΝΟΥ ΧΑΝΙΩΝ, ΚΑΝΤΑΝΟΣ ΧΑΝΙΩΝ, ΚΟΠΕΤΟΙ ΧΑΝΙΩΝ, ΛΟΦΟΣ ΧΑΝΙΩΝ, ΜΑΡΟΥΔΙΑΝΑ ΧΑΝΙΩΝ, ΜΟΤΖΙΑΝΑ ΧΑΝΙΩΝ, ΠΑΛΛΗΚΑΡΙΑΝΑ ΧΑΝΙΩΝ, ΠΑΝΩ ΦΛΩΡΙΑ ΧΑΝΙΩΝ, ΠΑΠΠΑΔΙΑΝΑ ΚΑΚΟΔΙΚΟΥ ΧΑΝΙΩΝ, ΠΛΕΜΕΝΙΑΝΑ ΧΑΝΙΩΝ, ΣΠΙΝΑ ΧΑΝΙΩΝ, ΣΦΑΚΟΣ ΧΑΝΙΩΝ, ΤΡΑΧΙΝΙΑΚΟΣ ΧΑΝΙΩΝ, ΦΛΩΡΙΑ ΧΑΝΙΩΝ, ΧΡΥΣΟΠΗΓΗ ΧΑΝΙΩΝ, ΨΑΡΙΑΝΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73005', Area: 'ΑΓΙΑ ΧΑΝΙΩΝ, ΑΛΙΚΙΑΝΟΣ ΧΑΝΙΩΝ, ΑΠΟΘΗΚΕΣ ΧΑΝΙΩΝ, ΑΣΚΟΡΔΑΛΟΣ ΧΑΝΙΩΝ, ΒΑΤΟΛΑΚΚΟΣ ΧΑΝΙΩΝ, ΕΠΙΣΚΟΠΗ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΖΟΥΡΒΑ ΧΑΝΙΩΝ, ΚΑΡΑΝΟΣ ΧΑΝΙΩΝ, ΚΑΡΕΣ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΚΟΥΦΟΣ ΧΑΝΙΩΝ, ΚΥΡΤΩΜΑΔΟΣ ΧΑΝΙΩΝ, ΛΑΓΓΟΣ ΧΑΝΙΩΝ, ΛΑΚΚΟΙ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΜΑΝΟΛΙΟΠΟΥΛΟ ΧΑΝΙΩΝ, ΜΕΣΚΛΑ ΧΑΝΙΩΝ, ΜΠΑΠΙΟΛΟΣ ΧΑΝΙΩΝ, ΝΕΑ ΡΟΥΜΑΤΑ ΧΑΝΙΩΝ, ΝΤΕΡΕΣ ΧΑΝΙΩΝ, ΟΜΑΛΟΣ ΧΑΝΙΩΝ, ΟΡΘΟΥΝΙ ΧΑΝΙΩΝ, ΠΑΠΠΑΔΙΑΝΑ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΠΡΑΣΕΣ ΧΑΝΙΩΝ, ΣΕΜΠΡΩΝΑΣ ΧΑΝΙΩΝ, ΣΚΙΝΕΣ ΧΑΝΙΩΝ, ΣΚΟΝΙΖΟ ΧΑΝΙΩΝ, ΦΟΥΡΝΕΣ ΧΑΝΙΩΝ, ΧΛΙΑΡΟ ΧΑΝΙΩΝ, ΧΩΣΤΗ ΧΑΝΙΩΝ, ΨΑΘΟΓΙΑΝΝΟΣ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73006', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΕΠΙΣΚΟΠΗΣ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΖΥΜΠΡΑΓΟΥ ΧΑΝΙΩΝ, ΑΝΩ ΒΟΥΒΕΣ ΧΑΝΙΩΝ, ΑΣΠΡΑ ΝΕΡΑ ΧΑΝΙΩΝ, ΑΣΤΡΑΤΗΓΟΣ ΧΑΝΙΩΝ, ΑΣΤΡΙΚΑΣ ΧΑΝΙΩΝ, ΑΦΡΑΤΑ ΧΑΝΙΩΝ, ΒΑΓΙ ΧΑΝΙΩΝ, ΒΑΣΙΛΙΑΝΑ ΧΑΝΙΩΝ, ΒΑΣΙΛΟΠΟΥΛΟ ΧΑΝΙΩΝ, ΒΕΝΙΟ ΧΑΝΙΩΝ, ΒΟΥΒΕΣ ΧΑΝΙΩΝ, ΓΕΡΑΚΙΑΝΑ ΧΑΝΙΩΝ, ΓΛΩΣΣΑ ΧΑΝΙΩΝ, ΓΡΑ ΚΕΡΑ ΧΑΝΙΩΝ, ΔΑΡΜΑΡΟΧΩΡΙ ΧΑΝΙΩΝ, ΔΕΛΙΑΝΑ ΧΑΝΙΩΝ, ΔΡΑΚΟΝΑ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΔΡΑΚΟΝΑ ΧΑΝΙΩΝ, ΕΠΙΣΚΟΠΗ  ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΖΥΜΠΡΑΓΟΣ ΧΑΝΙΩΝ, ΚΑΛΑΜΙ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΚΑΛΥΔΟΝΙΑ ΧΑΝΙΩΝ, ΚΑΜΑΡΑ ΔΕΛΙΑΝΩΝ ΧΑΝΙΩΝ, ΚΑΜΑΡΑ ΚΑΛΥΔΟΝΙΑΣ ΧΑΝΙΩΝ, ΚΑΜΙΣΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΡΘΙΑΝΑ ΧΑΝΙΩΝ, ΚΟΛΥΜΒΑΡΙ ΧΑΝΙΩΝ, ΚΟΥΜΟΥΛΙ ΧΑΝΙΩΝ, ΚΡΥΑ ΒΡΥΣΗ ΧΑΝΙΩΝ, ΛΟΥΚΟΥΜΙΧΕΛΙΑΝΑ ΧΑΝΙΩΝ, ΜΑΡΑΘΟΚΕΦΑΛΑ ΧΑΝΙΩΝ, ΜΕΛΙΣΣΟΥΡΓΕΙΟ ΧΑΝΙΩΝ, ΜΕΤΟΧΙ ΚΑΡΩΝ ΧΑΝΙΩΝ, ΜΙΝΩΘΙΑΝΑ ΧΑΝΙΩΝ, ΜΟΘΙΑΝΑ ΧΑΝΙΩΝ, ΜΟΝΗ ΟΔΗΓΗΤΡΙΑΣ ΚΥΡΙΑΣ ΓΩΝΙΑΣ ΧΑΝΙΩΝ, ΝΟΧΙΑ ΧΑΝΙΩΝ, ΠΑΝΕΘΗΜΟΣ ΧΑΝΙΩΝ, ΠΑΡΑΛΙΑ ΧΑΝΙΩΝ, ΠΕΤΑΛΙΑΝΑ ΧΑΝΙΩΝ, ΠΥΡΓΟΣ ΔΕΛΙΑΝΩΝ ΧΑΝΙΩΝ, ΡΑΒΔΟΥΧΑ ΧΑΝΙΩΝ, ΡΑΠΑΝΙΑΝΑ ΧΑΝΙΩΝ, ΡΟΔΩΠΟΣ ΧΑΝΙΩΝ, ΣΚΑΦΙΩΤΕΣ ΧΑΝΙΩΝ, ΣΚΟΥΤΕΛΩΝΑΣ ΧΑΝΙΩΝ, ΣΠΗΛΙΑ ΧΑΝΙΩΝ, ΤΑΥΡΩΝΙΤΗΣ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73007', Area: 'ΑΛΙΚΑΜΠΟΣ ΧΑΝΙΩΝ, ΑΡΕΒΙΤΗΣ ΧΑΝΙΩΝ, ΑΣΠΡΟΥΛΙΑΝΟΙ ΧΑΝΙΩΝ, ΑΧΑΤΖΗΚΙΑ ΧΑΝΙΩΝ, ΒΑΤΟΥΔΙΑΡΗΣ ΧΑΝΙΩΝ, ΒΑΦΕΣ ΧΑΝΙΩΝ, ΒΡΥΣΕΣ ΑΠΟΚΟΡΡΩΝΟΥ ΧΑΝΙΩΝ, ΓΕΩΡΓΙΟΥΠΟΛΗ ΧΑΝΙΩΝ, ΔΡΑΜΙΑ ΧΑΝΙΩΝ, ΕΜΠΡΟΣΝΕΡΟΣ ΧΑΝΙΩΝ, ΚΑΒΑΛΛΟΣ ΧΑΝΙΩΝ, ΚΑΒΡΟΣ ΧΑΝΙΩΝ, ΚΑΣΤΕΛΛΟΣ ΧΑΝΙΩΝ, ΚΟΥΡΝΑΣ ΧΑΝΙΩΝ, ΚΡΑΠΗ ΧΑΝΙΩΝ, ΜΑΖΑ  ΑΠΟΚΟΡΩΝΟΥ ΧΑΝΙΩΝ, ΜΑΘΕΣ ΧΑΝΙΩΝ, ΜΕΤΑΜΟΡΦΩΣΗ ΧΑΝΙΩΝ, ΜΕΤΟΧΙ ΑΠΟΚΟΡΩΝΟΥ ΧΑΝΙΩΝ, ΜΟΥΡΙ ΓΕΩΡΓΙΟΥΠΟΛΕΩΣ ΧΑΝΙΩΝ, ΝΙΠΟΣ ΧΑΝΙΩΝ, ΠΑΡΑΛΙΑ ΚΟΥΡΝΑ ΧΑΝΙΩΝ, ΠΑΤΗΜΑ ΧΑΝΙΩΝ, ΦΙΛΙΠΠΟΣ ΧΑΝΙΩΝ, ΦΟΝΕΣ ΧΑΝΙΩΝ, ΦΥΛΑΚΗ ΧΑΝΙΩΝ, ΧΑΜΠΑΘΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73011', Area: 'ΑΓΙΑ ΡΟΥΜΕΛΗ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΝΕΚΤΑΡΙΟΣ ΧΑΝΙΩΝ, ΑΝΩΠΟΛΗ  ΧΑΝΙΩΝ, ΑΡΑΔΑΙΝΑ ΧΑΝΙΩΝ, ΑΣΦΕΝΔΟΣ ΧΑΝΙΩΝ, ΒΟΥΒΑΣ ΧΑΝΙΩΝ, ΒΡΑΣΚΑΣ ΧΑΝΙΩΝ, ΒΡΙΤΟΜΑΡΤΗ ΧΑΝΙΩΝ, ΙΜΠΡΟΣ ΧΑΝΙΩΝ, ΚΑΛΛΙΚΡΑΤΗΣ ΧΑΝΙΩΝ, ΚΑΨΟΔΑΣΟΣ ΧΑΝΙΩΝ, ΚΟΜΙΤΑΔΕΣ ΧΑΝΙΩΝ, ΛΙΒΑΝΙΑΝΑ ΧΑΝΙΩΝ, ΛΟΥΤΡΟ ΧΑΝΙΩΝ, ΝΟΜΙΚΙΑΝΑ ΧΑΝΙΩΝ, ΠΑΛΑΙΑ ΑΓΙΑ ΡΟΥΜΕΛΗ ΧΑΝΙΩΝ, ΠΑΤΣΙΑΝΟΣ ΧΑΝΙΩΝ, ΣΚΑΛΩΤΗ ΧΑΝΙΩΝ, ΦΡΑΓΚΟΚΑΣΤΕΛΟ (ΠΑΡΑΔΕΙΣΟΣ) ΧΑΝΙΩΝ, ΧΩΡΑ ΣΦΑΚΙΩΝ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73014', Area: 'ΑΓΙΑ ΜΑΡΙΝΑ ΧΑΝΙΩΝ, ΒΡΥΣΕΣ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΓΕΡΑΝΙ ΧΑΝΙΩΝ, ΚΟΙΛΑΔΑ ΧΑΝΙΩΝ, ΚΟΝΤΟΜΑΡΙ ΧΑΝΙΩΝ, ΚΥΠΑΡΙΣΣΟΣ ΧΑΝΙΩΝ, ΛΟΥΤΡΑΚΙ ΧΑΝΙΩΝ, ΜΑΛΕΜΕ ΧΑΝΙΩΝ, ΜΑΡΟΥΛΙΑΧΙΑΝΑ ΧΑΝΙΩΝ, ΜΕΤΟΧΙ ΚΟΝΤΟΜΑΡΙΟΥ ΧΑΝΙΩΝ, ΜΟΔΙ ΧΑΝΙΩΝ, ΞΑΜΟΥΔΟΧΩΡΙ ΧΑΝΙΩΝ, ΞΗΡΟΚΑΜΠΙ ΧΑΝΙΩΝ, ΠΑΛΑΙΟ ΓΕΡΑΝΙ ΧΑΝΙΩΝ, ΠΑΤΕΛΛΑΡΙ ΧΑΝΙΩΝ, ΠΛΑΤΑΝΙΑΣ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73100', Area: 'ΑΓΙΑ ΖΩΝΗ ΧΑΝΙΩΝ, ΑΓΙΑ ΤΡΙΑΔΑ ΜΟΝΑΣΤΗΡΙ ΧΑΝΙΩΝ, ΑΓΙΟΙ ΘΕΟΔΩΡΟΙ ΝΕΑΣ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΟΝΟΥΦΡΙΟΣ ΧΑΝΙΩΝ, ΑΕΡΟΔΡΟΜΙΟ (ΠΕΡΙΟΧΗ ΣΤΕΡΝΩΝ) ΧΑΝΙΩΝ, ΑΚΡΟΠΟΛΗ ΧΑΝΙΩΝ, ΑΛΕΤΡΟΥΒΑΡΙ ΧΑΝΙΩΝ, ΑΝΕΜΟΜΥΛΟΙ ΧΑΝΙΩΝ, ΑΡΓΟΥΛΕΣ ΑΡΩΝΙΟΥ ΧΑΝΙΩΝ, ΑΡΓΟΥΛΙΔΕΣ ΣΦΑΚΙΩΝ ΧΑΝΙΩΝ, ΑΡΩΝΙ ΧΑΝΙΩΝ, ΑΧΛΑΔΕΣ ΧΑΝΙΩΝ, ΒΑΜΒΑΚΟΠΟΥΛΟ ΧΑΝΙΩΝ, ΒΑΡΥΠΕΤΡΟ ΧΑΝΙΩΝ, ΓΑΛΑΤΑΣ ΧΑΝΙΩΝ, ΓΑΛΗΝΗ ΧΑΝΙΩΝ, ΓΕΡΟΛΑΚΚΟΣ ΧΑΝΙΩΝ, ΓΕΡΟΠΡΙΝΟΣ ΧΑΝΙΩΝ, ΓΟΥΒΕΡΝΕΤΟ ΜΟΝΑΣΤΗΡΙ ΧΑΝΙΩΝ, ΔΑΡΑΤΣΟΣ ΧΑΝΙΩΝ, ΖΟΡΝΑΔΗΣ ΧΑΝΙΩΝ, ΘΕΡΙΣΟ ΧΑΝΙΩΝ, ΘΥΜΙΑ ΧΑΝΙΩΝ, ΚΑΘΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΛΑΘΑΣ ΧΑΝΙΩΝ, ΚΑΛΟΡΡΟΥΜΑ ΧΑΝΙΩΝ, ΚΑΜΠΑΝΙ ΧΑΝΙΩΝ, ΚΑΜΠΟΙ ΧΑΝΙΩΝ, ΚΑΤΩ ΜΑΡΑΘΙ ΧΑΝΙΩΝ, ΚΑΤΩΧΩΡΙ ΧΑΝΙΩΝ, ΚΟΝΤΟΠΟΥΛΑ ΧΑΝΙΩΝ, ΚΟΡΑΚΙΕΣ ΧΑΝΙΩΝ, ΚΟΥΜΑΡΕΣ ΧΑΝΙΩΝ, ΚΟΥΝΟΥΠΙΔΙΑΝΑ ΧΑΝΙΩΝ, ΛΟΥΛΟΣ ΧΑΝΙΩΝ, ΛΥΓΙΔΕΣ ΧΑΝΙΩΝ, ΜΑΔΑΡΟ ΧΑΝΙΩΝ, ΜΑΛΑΞΑ ΧΑΝΙΩΝ, ΜΑΡΑΘΙ ΧΑΝΙΩΝ, ΜΑΡΜΑΡΑΣ ΧΑΝΙΩΝ, ΜΟΝΗ ΑΓΙΑΣ ΤΡΙΑΔΑΣ ΤΖΑΓΚΑΡΟΛΩΝ ΧΑΝΙΩΝ, ΜΟΝΗ ΚΥΡΙΑΣ ΑΓΓΕΛΩΝ ΑΓ.ΙΩΑΝ.ΓΟΥΒΕΡΝ. ΧΑΝΙΩΝ, ΜΟΥΖΟΥΡΑΣ ΧΑΝΙΩΝ, ΜΥΛΩΝΙΑΝΑ ΧΑΝΙΩΝ, ΝΕΡΟΚΟΥΡΟΣ ΧΑΝΙΩΝ, ΟΑΣΗ ΧΑΝΙΩΝ, ΠΑΖΙΝΟΣ ΧΑΝΙΩΝ, ΠΑΝΑΓΙΑ ΧΑΝΙΩΝ, ΠΕΡΙΒΟΛΙΑ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ, ΠΛΑΤΥΒΟΛΑ ΧΑΝΙΩΝ, ΠΟΤΙΣΤΗΡΙΑ ΧΑΝΙΩΝ, ΠΥΘΑΡΙ ΧΑΝΙΩΝ, ΣΠΗΛΙΑΡΙΑ ΧΑΝΙΩΝ, ΣΤΑΛΟΣ ΧΑΝΙΩΝ, ΣΤΑΥΡΟΣ ΑΚΡΩΤΗΡΙΟΥ ΧΑΝΙΩΝ, ΣΤΕΡΝΕΣ (& 115 ΠΜ) ΧΑΝΙΩΝ, ΤΕΡΣΑΝΑΣ ΧΑΝΙΩΝ, ΤΣΑΚΙΣΤΡΑ ΧΑΝΙΩΝ, ΧΑΝΙΑ ΧΑΝΙΩΝ, ΧΟΡΔΑΚΙ ΧΑΝΙΩΝ, ΧΩΡΑΦΑΚΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73131', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73132', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73133', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73134', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73135', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73136', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73137', Area: 'ΧΑΝΙΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73200', Area: 'ΑΠΤΕΡΑ ΧΑΝΙΩΝ, ΠΛΑΤΑΝΙ ΧΑΝΙΩΝ, ΣΟΥΔΑ  ΧΑΝΙΩΝ, ΤΣΙΚΑΛΑΡΙΑ ΚΥΔΩΝΙΑΣ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73300', Area: 'ΒΑΝΤΕΣ  ΧΑΝΙΩΝ, ΚΡΥΟ ΝΕΡΟ ΧΑΝΙΩΝ, ΜΟΥΡΝΙΕΣ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '73400', Area: 'ΑΓΙΟΣ ΑΝΤΩΝΙΟΣ ΚΑΛΛΕΡΓΙΑΝΩΝ ΧΑΝΙΩΝ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΑΖΟΓΥΡΑΣ ΧΑΝΙΩΝ, ΑΝΩ ΔΡΑΠΑΝΙΑΣ ΧΑΝΙΩΝ, ΑΡΜΕΝΟΧΩΡΙ ΧΑΝΙΩΝ, ΒΑΡΔΙΑΝΑ ΧΑΝΙΩΝ, ΓΑΛΟΥΒΑΣ ΧΑΝΙΩΝ, ΓΡΑΜΒΟΥΣΑ ΧΑΝΙΩΝ, ΓΡΗΓΟΡΙΑΝΑ ΠΟΛΥΡΡΗΝΙΑΣ ΧΑΝΙΩΝ, ΔΑΦΝΗ ΧΑΝΙΩΝ, ΔΕΡΜΙΖΙΑΝΑ ΧΑΝΙΩΝ, ΔΡΑΠΑΝΙΑΣ ΧΑΝΙΩΝ, ΕΛΑΦΟΝΗΣΟΣ ΧΑΝΙΩΝ ΧΑΝΙΩΝ, ΖΑΧΑΡΙΑΝΑ ΧΑΝΙΩΝ, ΖΕΡΒΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΒΟΥΣΙ ΧΑΝΙΩΝ, ΚΑΛΛΕΡΓΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΛΟΥΔΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΛΥΒΙΑΝΗ ΧΑΝΙΩΝ, ΚΑΡΕΦΙΛΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΣΤΕΛΙ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΚΑΤΖΙΑΝΑ ΧΑΝΙΩΝ, ΚΑΤΩ ΠΑΛΑΙΟΚΑΣΤΡΟ ΧΑΝΙΩΝ, ΚΕΡΑ ΧΑΝΙΩΝ, ΚΙΣΣΑΜΟΣ ΧΑΝΙΩΝ, ΚΟΚΚΙΝΟ ΜΕΤΟΧΙ ΧΑΝΙΩΝ, ΚΟΛΕΝΗ ΧΑΝΙΩΝ, ΚΟΡΦΑΛΩΝΑΣ ΧΑΝΙΩΝ, ΚΟΤΣΙΑΝΑ ΧΑΝΙΩΝ, ΚΟΥΚΟΥΝΑΡΑ ΧΑΝΙΩΝ, ΚΟΥΝΟΥΠΙΤΣΑ ΧΑΝΙΩΝ, ΚΟΥΡΘΙΑΝΑ ΧΑΝΙΩΝ, ΛΙΜΕΝΙΣΚΟΣ ΧΑΝΙΩΝ, ΛΟΥΣΑΚΙΕΣ ΧΑΝΙΩΝ, ΛΥΡΙΔΙΑΝΑ ΧΑΝΙΩΝ, ΜΑΝΕΡΙΑΝΑ ΧΑΝΙΩΝ, ΜΑΡΕΔΙΑΝΑ ΧΑΝΙΩΝ, ΜΕΝΙΑΝΑ ΧΑΝΙΩΝ, ΜΕΡΑΔΑ ΧΑΝΙΩΝ, ΜΕΤΟΧΙ ΛΟΥΣΑΚΙΟΥ ΧΑΝΙΩΝ, ΝΕΟ ΧΩΡΙΟ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΝΩΠΗΓΕΙΑ ΧΑΝΙΩΝ, ΠΑΠΠΑΓΙΑΝΝΑΚΗΔΕΣ ΧΑΝΙΩΝ, ΠΕΡΒΟΛΑΚΙΑ ΧΑΝΙΩΝ, ΠΙΠΕΡΙΑΝΑ ΧΑΝΙΩΝ, ΠΛΑΚΑΛΩΝΑ ΧΑΝΙΩΝ, ΠΟΛΛΥΡΗΝΙΑ ΧΑΝΙΩΝ, ΠΟΤΑΜΙΔΑ ΧΑΝΙΩΝ, ΠΥΡΓΟΣ ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΡΟΚΚΑ ΧΑΝΙΩΝ, ΣΦΑΚΟΠΗΓΑΔΙ ΧΑΝΙΩΝ, ΤΡΑΧΗΛΟΣ ΧΑΝΙΩΝ, ΤΡΙΑΛΩΝΙΑ ΧΑΝΙΩΝ, ΤΣΙΚΑΛΑΡΙΑ  ΚΙΣΣΑΜΟΥ ΧΑΝΙΩΝ, ΦΑΛΑΣΑΡΝΑ ΧΑΝΙΩΝ, ΦΑΛΕΛΙΑΝΑ ΧΑΝΙΩΝ, ΦΟΥΡΝΑΔΟΣ ΧΑΝΙΩΝ, ΦΤΕΡΟΛΑΚΚΑ ΧΑΝΙΩΝ, ΧΑΙΡΕΘΙΑΝΑ ΧΑΝΙΩΝ, ΧΑΡΑΥΓΗ ΧΑΝΙΩΝ, ΧΑΡΧΑΛΙΑΝΑ ΧΑΝΙΩΝ, ΧΟΡΕΥΤΙΑΝΑ ΧΑΝΙΩΝ, ΧΟΥΔΑΛΙΑΝΑ ΧΑΝΙΩΝ, ΧΡΥΣΟΣΚΑΛΙΤΙΣΣΑ ΧΑΝΙΩΝ', Prefecture: 'Χανίων' },
    { PostalCode: '82100', Area: 'ΑΓΙΑ ΕΡΜΙΟΝΗ ΧΙΟΥ, ΑΓΙΟΣ ΓΕΩΡΓΙΟΣ ΣΥΚΟΥΣΗΣ ΧΙΟΥ, ΑΓΙΟΣ ΙΩΑΝΝΗΣ ΧΙΟΥ, ΑΜΠΕΛΟΣ ΧΙΟΥ, ΑΝΑΒΑΤΟΣ ΧΙΟΥ, ΑΥΓΩΝΥΜΑ ΧΙΟΥ, ΒΑΣΙΛΕΩΝΟΙΚΟ ΧΙΟΥ, ΒΕΡΒΕΡΑΤΟ ΧΙΟΥ, ΒΛΥΧΑΔΑ ΧΙΟΥ, ΒΟΚΑΡΙΑ ΧΙΟΥ, ΒΟΥΔΟΤΟΠΟΣ ΧΙΟΥ, ΒΟΥΝΟ ΧΙΟΥ, ΓΙΟΣΩΝΑΣ ΧΙΟΥ, ΓΡΙΔΙΑ ΧΙΟΥ, ΔΑΦΝΩΝΑΣ ΧΙΟΥ, ΔΕΛΦΙΝΙ ΧΙΟΥ, ΖΥΦΙΑΣ ΧΙΟΥ, ΘΥΜΙΑΝΑ ΧΙΟΥ, ΚΑΛΛΙΜΑΣΙΑ ΧΙΟΥ, ΚΑΡΔΑΜΥΛΑ ΧΙΟΥ, ΚΑΡΥΕΣ ΧΙΟΥ, ΚΑΡΦΑΣ ΧΙΟΥ, ΚΑΤΑΡΡΑΚΤΗΣ ΧΙΟΥ, ΚΕΡΑΜΕΙΑ ΧΙΟΥ, ΚΟΙΝΗ ΧΙΟΥ, ΛΕΥΚΩΝΙΑ ΧΙΟΥ, ΛΙΛΙΚΑΣ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΚΩΝ/ΝΟΥ ΦΡΑΓΚΟΒ. ΧΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΜΗΝΑ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΣΤΕΦΑΝΟΥ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΩΝ ΠΑΤΕΡΩΝ ΧΙΟΥ, ΜΟΝΗ ΜΥΡΣΙΝΙΔΙΟΥ ΧΙΟΥ, ΜΟΝΗ ΠΑΝΑΓΙΑΣ ΚΟΙΜ.ΠΛΑΚΙΔΙΩΤΙΣ. ΧΙΟΥ, ΜΟΝΗ ΤΑΞΙΑΡΧΩΝ ΧΙΟΥ, ΜΥΡΜΗΓΚΙ ΧΙΟΥ, ΝΕΝΗΤΑ ΧΙΟΥ, ΝΕΟΧΩΡΙ ΧΙΟΥ, ΠΑΓΙΔΑ ΧΙΟΥ, ΠΑΡΑΛΙΑ ΑΓΙΑΣ ΦΩΤΕΙΝΗΣ ΧΙΟΥ, ΧΙΟΣ ΧΙΟΥ', Prefecture: 'Χίου' },
    { PostalCode: '82101', Area: 'ΑΓΙΟΣ ΠΑΝΤΕΛΕΗΜΩΝ ΝΗΣΟΣ ΧΙΟΥ, ΑΡΧΟΝΤΟΝΗΣΟ ΟΙΝΟΥΣΣΩΝ ΧΙΟΥ, ΑΣΠΑΛΑΘΡΟΚΑΜΠΟΣ ΟΙΝΟΥΣΣΩΝ ΧΙΟΥ, ΒΑΤΟΣ ΧΙΟΥ, ΓΑΙΔΟΥΡΟΝΗΣΟΣ ΧΙΟΥ, ΚΑΣΤΡΟ ΟΙΝΟΥΣΣΩΝ ΧΙΟΥ, ΜΟΝΑΦΤΗΣ ΧΙΟΥ, ΜΟΝΟΛΙΑ ΧΙΟΥ, ΝΕΚΤΑ ΧΙΟΥ, ΝΗΣΙ ΠΑΝΑΓΙΑΣ ΧΙΟΥ, ΟΙΝΟΥΣΣΕΣ ΧΙΟΥ, ΠΑΣΑΣ ΝΗΣΟΣ ΧΙΟΥ, ΠΟΝΤΙΚΟΝΗΣΙ ΧΙΟΥ, ΠΡΑΣΟΝΗΣΙΑ ΧΙΟΥ, ΣΑΝΤΑ ΠΑΝΑΓΙΑ ΧΙΟΥ, ΣΚΛΑΒΙΑ ΧΙΟΥ, ΦΛΑΤΣΙΑ ΧΙΟΥ', Prefecture: 'Χίου' },
    { PostalCode: '82102', Area: 'ΑΓΙΟΣ ΣΤΕΦΑΝΟΣ ΜΑΣΤΙΧΩΡΙΩΝ ΧΙΟΥ, ΑΛΜΥΡΟΣ ΧΙΟΥ, ΑΡΜΟΛΙΑ ΧΙΟΥ, ΒΑΒΙΛΟΙ ΧΙΟΥ, ΒΕΝΕΤΙΚΟ ΧΙΟΥ, ΒΕΣΣΑ ΧΙΟΥ, ΔΟΤΙΑ ΠΥΡΓΙΟΥ ΧΙΟΥ, ΕΛΑΤΑ ΧΙΟΥ, ΕΜΠΟΡΕΙΟΣ ΧΙΟΥ, ΕΞΩ ΔΙΔΥΜΑ ΧΙΟΥ, ΘΟΛΟΠΟΤΑΜΙ ΧΙΟΥ, ΚΑΛΑΜΩΤΗ ΧΙΟΥ, ΚΑΛΟΓΕΡΟΣ ΧΙΟΥ, ΚΑΡΥΝΤΑ ΧΙΟΥ, ΚΩΜΗ ΧΙΟΥ, ΛΙΘΙΟ ΧΙΟΥ, ΛΙΜΑΝΙ ΛΙΘΙΟΥ ΧΙΟΥ, ΛΙΜΕΝΑΣ (ΠΑΣΑ ΛΙΜΑΝΙ) ΧΙΟΥ, ΜΕΡΙΚΟΥΝΤΑ ΧΙΟΥ, ΜΕΣΑ ΔΙΔΥΜΑ ΧΙΟΥ, ΜΕΣΤΑ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΓΕΩΡΓΙΟΥ ΧΙΟΥ, ΝΗΣΑΚΙ ΧΙΟΥ, ΟΛΥΜΠΟΙ ΧΙΟΥ, ΠΑΤΡΙΚΑ ΧΙΟΥ, ΠΕΛΑΓΟΝΗΣΟΣ ΧΙΟΥ, ΠΛΑΚΑ ΧΙΟΥ, ΠΥΡΓΙ ΧΙΟΥ, ΤΡΑΧΥΛΙΑ ΧΙΟΥ, ΧΑΛΚΕΙΟ ΧΙΟΥ', Prefecture: 'Χίου' },
    { PostalCode: '82103', Area: 'ΑΓΙΑΣΜΑΤΑ ΚΕΡΑΜΟΥ ΧΙΟΥ, ΑΓΙΑΣΜΑΤΑ ΛΕΠΤΟΠΟΔΩΝ ΧΙΟΥ, ΑΓΙΟ ΓΑΛΑ ΧΙΟΥ, ΑΓΙΟΣ ΑΙΜΙΛΙΑΝΟΣ ΧΙΟΥ, ΑΓΙΟΣ ΙΣΙΔΩΡΟΣ ΧΙΟΥ, ΑΦΡΟΔΙΣΙΑ ΧΙΟΥ, ΒΟΛΙΣΣΟΣ ΧΙΟΥ, ΔΙΕΥΧΑ ΧΙΟΥ, ΕΓΡΗΓΟΡΟΣ ΧΙΟΥ, ΕΖΟΥΣΑ ΧΙΟΥ, ΚΑΤΑΒΑΣΗ ΧΙΟΥ, ΚΕΡΑΜΟΣ ΒΙΚΙΟΥ ΧΙΟΥ, ΚΕΡΑΜΟΣ ΧΙΟΥ ΧΙΟΥ, ΚΟΣΚΙΝΑΣ ΧΙΟΥ, ΚΟΣΜΑΔΟΣ ΧΙΟΥ, ΚΟΥΡΟΥΝΙΑ ΧΙΟΥ, ΛΕΠΤΟΠΟΔΑ ΧΙΟΥ, ΛΗΜΝΙΑ ΧΙΟΥ ΧΙΟΥ, ΛΙΜΙΑ ΧΙΟΥ, ΜΑΝΑΓΡΟΣ ΧΙΟΥ, ΜΑΡΜΑΡΟ ΧΙΟΥ, ΜΕΛΑΝΙΟΣ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΑΣ ΜΑΡΚΕΛΛΑΣ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΑΣ ΜΑΤΡΩΝΗΣ ΧΑΛΑΝΔΡΩΝ ΧΙΟΥ, ΜΟΝΗ ΑΓΙΟΥ ΜΑΡΚΟΥ ΧΙΟΥ, ΝΑΓΟΣ ΧΙΟΥ, ΝΕΑ ΠΟΤΑΜΙΑ ΧΙΟΥ, ΝΕΝΗΤΟΥΡΙΑ ΧΙΟΥ, ΠΑΡΠΑΡΙΑ ΧΙΟΥ, ΠΙΡΑΜΑ ΧΙΟΥ, ΠΙΣΠΙΛΟΥΝΤΑ ΧΙΟΥ, ΠΥΡΓΙΑ ΧΙΟΥ, ΣΙΔΗΡΟΥΝΤΑ ΧΙΟΥ, ΣΚΑΡΙΩΤΗΣ ΧΙΟΥ, ΤΡΥΠΕΣ ΧΙΟΥ, ΧΑΛΑΝΔΡΑ ΧΙΟΥ, ΧΙΟΥ ΠΕΡΙΟΧΗ ΛΗΜΝΟΣ ΧΙΟΥ, ΧΩΡΗ ΧΙΟΥ', Prefecture: 'Χίου' },
    { PostalCode: '82104', Area: 'ΑΓΙΟ ΝΙΚΟΛΑΚΙ ΧΙΟΥ, ΑΝΤΙΨΑΡΑ ΧΙΟΥ, ΔΑΚΑΛΙΟ ΧΙΟΥ, ΚΑΤΩ ΝΗΣΙ ΧΙΟΥ, ΜΟΝΗ ΚΟΙΜΗΣΕΩΣ ΘΕΟΤΟΚΟΥ ΨΑΡΩΝ ΧΙΟΥ, ΨΑΡΑ ΧΙΟΥ', Prefecture: 'Χίου' },
    { PostalCode: '82300', Area: 'ΑΓΡΕΛΩΠΟΣ ΧΙΟΥ, ΑΜΑΔΕΣ ΧΙΟΥ, ΒΙΚΙΟ ΧΙΟΥ, ΓΛΑΣΤΡΙΑ ΧΙΟΥ, ΚΑΜΠΙΑ ΧΙΟΥ, ΚΕΡΤΗΣ ΧΙΟΥ, ΚΗΠΟΥΡΙΕΣ ΧΙΟΥ, ΛΑΓΚΑΔΑ ΧΙΟΥ, ΜΑΡΓΑΡΙΤΙ ΧΙΟΥ, ΝΕΑ ΜΟΝΗ ΧΙΟΥ, ΠΑΝΤΟΥΚΙΟΣ ΧΙΟΥ, ΠΑΡΑΛΙΑ ΑΜΑΔΕΩΝ ΧΙΟΥ, ΠΙΤΥΟΣ ΧΙΟΥ, ΣΑΡΑΚΗΝΟΠΕΤΡΑ ΧΙΟΥ, ΣΠΑΡΤΟΥΝΤΑ ΧΙΟΥ, ΣΤΡΟΒΙΛΙ ΧΙΟΥ, ΣΥΚΙΑΔΑ ΧΙΟΥ, ΦΥΤΑ ΧΙΟΥ', Prefecture: 'Χίου' }
];
var genders = [{
        Name: 'Άρρεν',
        Code: 'male'
    }, {
        Name: 'Θήλυ',
        Code: 'female'
    }];
var departments = [{
        Name: 'Τμήμα Μηχανικών Πληροφορικής',
        Code: 'ICE'
    }, {
        Name: 'Τμήμα Ηλεκτρολόγων Μηχανικών',
        Code: 'IΕE'
    }];
var context = new DataContext_1.DataContext();
context.AddDataSource(new DataSource_1.default('postalCodes', postalCodes));
context.AddDataSource(new DataSource_1.default('genders', genders));
context.AddDataSource(new DataSource_1.default('departments', departments));
var page = new RowContainer_1.default({
    Id: Guid_1.default.NewGuid(),
    CssClasses: ['row', 'd-flex', 'justify-content-center'],
    Children: [
        new ColumnContainer_1.default({
            Id: Guid_1.default.NewGuid(),
            Width: 12,
            WidthDesktop: 10,
            Children: [
                new FormContainer_1.default({
                    Id: formId,
                    Children: [
                        new ActionContainer_1.default({
                            Id: Guid_1.default.NewGuid(),
                            Children: [
                                new FormSubmitAction_1.default({
                                    Id: submitActionId,
                                    FormId: formId
                                }, context)
                            ]
                        }, context),
                        new RowContainer_1.default({
                            Id: Guid_1.default.NewGuid(),
                            Children: [
                                new ColumnContainer_1.default({
                                    Id: Guid_1.default.NewGuid(),
                                    Width: 12,
                                    WidthDesktop: 6,
                                    Children: [
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Όνομα",
                                            AriaLabel: "Όνομα",
                                            PlaceHolder: "Όνομα",
                                            Required: true
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Επώνυμο",
                                            AriaLabel: "Επώνυμο",
                                            PlaceHolder: "Επώνυμο",
                                            Required: true
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Πατρώνυμο",
                                            AriaLabel: "Πατρώνυμο",
                                            PlaceHolder: "Πατρώνυμο",
                                            Required: true
                                        }, context),
                                        new SelectControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Φύλο",
                                            AriaLabel: "Φύλο",
                                            PleaseSelect: true,
                                            Required: true,
                                            LookupDataSource: {
                                                Name: 'genders',
                                                TextField: 'Name',
                                                ValueField: 'Code',
                                            }
                                        }, context),
                                        new SelectControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Τμήμα",
                                            AriaLabel: "Τμήμα",
                                            PleaseSelect: true,
                                            Required: true,
                                            LookupDataSource: {
                                                Name: 'departments',
                                                TextField: 'Name',
                                                ValueField: 'Code',
                                            }
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Αριθμός μητρώου",
                                            AriaLabel: "Αριθμός μητρώου",
                                            PlaceHolder: "Αριθμός μητρώου",
                                            Required: true
                                        }, context),
                                        new TextAreaControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Αναπηρία",
                                            AriaLabel: "Αναπηρία",
                                            PlaceHolder: "Αναπηρία"
                                        }, context)
                                    ]
                                }, context),
                                new ColumnContainer_1.default({
                                    Id: Guid_1.default.NewGuid(),
                                    Width: 12,
                                    WidthDesktop: 6,
                                    Children: [
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Τηλέφωνο (οικίας)",
                                            AriaLabel: "Τηλέφωνο (οικίας)",
                                            PlaceHolder: "Τηλέφωνο (οικίας)",
                                            Required: true
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Τηλέφωνο (κινητό)",
                                            AriaLabel: "Τηλέφωνο (κινητό)",
                                            PlaceHolder: "Τηλέφωνο (κινητό)",
                                            Required: true
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Email",
                                            AriaLabel: "Email",
                                            PlaceHolder: "Email",
                                            Required: true
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Διευθυνση",
                                            AriaLabel: "Διευθυνση",
                                            PlaceHolder: "Διευθυνση",
                                            Required: true
                                        }, context),
                                        new SelectControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Τ.Κ.",
                                            AriaLabel: "Τ.Κ.",
                                            PleaseSelect: true,
                                            Required: true,
                                            LookupDataSource: {
                                                Name: 'postalCodes',
                                                TextField: 'PostalCode',
                                                ValueField: 'PostalCode',
                                            }
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Πόλη",
                                            AriaLabel: "Πόλη",
                                            PlaceHolder: "Πόλη",
                                            ReadOnly: true,
                                            Required: true
                                        }, context),
                                        new TextControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: "Περιφέρεια",
                                            AriaLabel: "Περιφέρεια",
                                            PlaceHolder: "Περιφέρεια",
                                            ReadOnly: true,
                                            Required: true
                                        }, context),
                                    ]
                                }, context),
                                new ColumnContainer_1.default({
                                    Id: Guid_1.default.NewGuid(),
                                    Width: 12,
                                    Children: [
                                        new ButtonControl_1.default({
                                            Id: Guid_1.default.NewGuid(),
                                            Title: 'Επόμενο Βήμα',
                                            ActionId: submitActionId
                                        }, context)
                                    ]
                                }, context)
                            ]
                        }, context)
                    ]
                }, context)
            ]
        }, context)
    ]
}, context);
var body = document.getElementsByClassName('page')[0];
page.Build();
page.Render(body);
page.Bind();
var dataSource = context.Get('postalCodes');
console.log(dataSource);


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;