// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"xoa0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/* css reset */\n*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh; \n}\n\n.skin{\n    bottom:0;\n    background-color: #ffe600;\n    position: relative;\n    min-height: 55vh;\n}\n\n.nose{\n    border-top:black 15px solid;\n    border-right:transparent 20px solid;\n    border-bottom: 15px solid transparent;\n    border-left: 20px solid transparent;\n    border-radius: 100%;\n    width: 0px;\n    height: 0px;\n    position:relative;\n    left:50%;\n    top:95px;\n    margin-left:-20px;\n    z-index: 20;\n}\n.nose:hover{\n    animation: noseWave infinite 200ms;\n}\n\n@keyframes noseWave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(-5deg);\n    }\n    66%{\n        transform: rotate(5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n\n.eyes{\n    border:3px solid black;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background-color: #2e2e2e;\n    position:absolute;\n    left:50%;\n    top:60px;\n    transform: translateX(-30px)\n}\n\n.leftEye{\n    margin-left:150px;\n}\n\n.rightEye{\n    margin-left:-150px;\n}\n\n.eyes::before{\n    display: block;\n    content:'';\n    border:3px solid #000;\n    width: 25px;\n    height: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    position:absolute;\n    left:6px;\n}\n\n.lips{\n    border:3px solid black;\n    width: 100px;\n    height: 30px;\n    border-right:none;\n    border-bottom:none;\n    border-top-left-radius: 50px 30px;\n    position: absolute;\n    left: 50%;\n    top:130px;\n    background-color: #ffe600;\n    z-index:2;\n}\n.leftLips{\n    transform-origin: right top;\n    transform: translateX(-101px) rotate(-160deg)\n}\n.rightLips{\n    transform-origin: right top;\n    transform: translateX(-99px) rotate(160deg) rotateY(180deg)\n}\n\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left:50%;\n    top:127px;\n    transform: translateX(-100px);\n    overflow: hidden;\n}\n.innerMouth{\n    width: 100%;\n    height: 1000px;\n    border:3px solid black;\n    background-color: #9b000a;\n    border-radius: 50%;\n    position: absolute;\n    top:-811px;\n    overflow: hidden;\n}\n.touth{\n    width: 300px;\n    height: 500px;\n    margin: 0 auto;\n    z-index:1;\n    border-radius: 50%;\n    position: absolute;\n    top:850px;\n    left:50%;\n    transform: translateX(-150px);\n    background-color: #ff485f;\n}\n\n.face{\n    width: 74px;\n    height:74px;\n    border:3px solid black;\n    border-radius: 50%;\n    background-color: #ff0000;\n    position: absolute;\n    left:50%;\n    top:190px;\n    transform: translateX(-37px);\n}\n.leftface{\n    margin-left:-200px;\n}\n.rightface{\n    margin-left:200px;\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _stringContent = _interopRequireDefault(require("./stringContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pikachu = {
  id: undefined,
  speed: undefined,
  n: 1,
  ui: {
    'htmlContain': document.querySelector('.html-contain'),
    'styleContain': document.querySelector('#style-contain')
  },
  btnTable: {
    '.btn-play': 'play',
    '.btn-pause': 'pause',
    '.btn-slow': 'slow',
    '.btn-normal': 'normal',
    '.btn-fast': 'fast'
  },
  init: function init() {
    pikachu.play();
    pikachu.btnevent();
  },
  btnevent: function btnevent() {
    for (var key in pikachu.btnTable) {
      document.querySelector(key).onclick = pikachu[pikachu.btnTable[key]];
    }
  },
  play: function play() {
    pikachu.pause();
    pikachu.id = setInterval(function () {
      pikachu.ui.htmlContain.innerText = _stringContent.default.substring(0, pikachu.n);
      pikachu.ui.styleContain.innerHTML = _stringContent.default.substring(0, pikachu.n);
      pikachu.n = pikachu.n + 1;
      pikachu.ui.htmlContain.scrollTop = pikachu.ui.htmlContain.scrollHeight;

      if (pikachu.n > _stringContent.default.length) {
        clearInterval(pikachu.id);
      }
    }, pikachu.speed);
  },
  pause: function pause() {
    clearInterval(pikachu.id);
  },
  slow: function slow() {
    pikachu.speed = 100;
    pikachu.pause();
    pikachu.play();
  },
  normal: function normal() {
    pikachu.speed = 50;
    pikachu.pause();
    pikachu.play();
  },
  fast: function fast() {
    pikachu.speed = 0;
    pikachu.pause();
    pikachu.play();
  }
};
pikachu.init();
},{"./stringContent":"xoa0"}]},{},["epB2"], null)
//# sourceMappingURL=main.8bc89646.js.map