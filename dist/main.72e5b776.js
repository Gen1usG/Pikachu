parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xoa0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="/* css reset */\n*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh; \n}\n\n.skin{\n    bottom:0;\n    background-color: #ffe600;\n    position: relative;\n    min-height: 55vh;\n}\n\n.nose{\n    border-top:black 15px solid;\n    border-right:transparent 20px solid;\n    border-bottom: 15px solid transparent;\n    border-left: 20px solid transparent;\n    border-radius: 100%;\n    width: 0px;\n    height: 0px;\n    position:relative;\n    left:50%;\n    top:95px;\n    margin-left:-20px;\n    z-index: 20;\n}\n.nose:hover{\n    animation: noseWave infinite 200ms;\n}\n\n@keyframes noseWave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(-5deg);\n    }\n    66%{\n        transform: rotate(5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n\n.eyes{\n    border:3px solid black;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background-color: #2e2e2e;\n    position:absolute;\n    left:50%;\n    top:60px;\n    transform: translateX(-30px)\n}\n\n.leftEye{\n    margin-left:150px;\n}\n\n.rightEye{\n    margin-left:-150px;\n}\n\n.eyes::before{\n    display: block;\n    content:'';\n    border:3px solid #000;\n    width: 25px;\n    height: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    position:absolute;\n    left:6px;\n}\n\n.lips{\n    border:3px solid black;\n    width: 100px;\n    height: 30px;\n    border-right:none;\n    border-bottom:none;\n    border-top-left-radius: 50px 30px;\n    position: absolute;\n    left: 50%;\n    top:130px;\n    background-color: #ffe600;\n    z-index:2;\n}\n.leftLips{\n    transform-origin: right top;\n    transform: translateX(-101px) rotate(-160deg)\n}\n.rightLips{\n    transform-origin: right top;\n    transform: translateX(-99px) rotate(160deg) rotateY(180deg)\n}\n\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left:50%;\n    top:127px;\n    transform: translateX(-100px);\n    overflow: hidden;\n}\n.innerMouth{\n    width: 100%;\n    height: 1000px;\n    border:3px solid black;\n    background-color: #9b000a;\n    border-radius: 50%;\n    position: absolute;\n    top:-811px;\n    overflow: hidden;\n}\n.touth{\n    width: 300px;\n    height: 500px;\n    margin: 0 auto;\n    z-index:1;\n    border-radius: 50%;\n    position: absolute;\n    top:850px;\n    left:50%;\n    transform: translateX(-150px);\n    background-color: #ff485f;\n}\n\n.face{\n    width: 74px;\n    height:74px;\n    border:3px solid black;\n    border-radius: 50%;\n    background-color: #ff0000;\n    position: absolute;\n    left:50%;\n    top:190px;\n    transform: translateX(-37px);\n}\n.leftface{\n    margin-left:-200px;\n}\n.rightface{\n    margin-left:200px;\n}\n",o=n;exports.default=o;
},{}],"epB2":[function(require,module,exports) {
"use strict";var n=t(require("./stringContent"));function t(n){return n&&n.__esModule?n:{default:n}}var e={id:void 0,speed:void 0,n:1,ui:{htmlContain:document.querySelector(".html-contain"),styleContain:document.querySelector("#style-contain")},btnTable:{".btn-play":"play",".btn-pause":"pause",".btn-slow":"slow",".btn-normal":"normal",".btn-fast":"fast"},init:function(){e.play(),e.btnevent()},btnevent:function(){for(var n in e.btnTable)document.querySelector(n).onclick=e[e.btnTable[n]]},play:function(){e.pause(),e.id=setInterval(function(){e.ui.htmlContain.innerText=n.default.substring(0,e.n),e.ui.styleContain.innerHTML=n.default.substring(0,e.n),e.n=e.n+1,e.ui.htmlContain.scrollTop=e.ui.htmlContain.scrollHeight,e.n>n.default.length&&clearInterval(e.id)},e.speed)},pause:function(){clearInterval(e.id)},slow:function(){e.speed=100,e.pause(),e.play()},normal:function(){e.speed=50,e.pause(),e.play()},fast:function(){e.speed=0,e.pause(),e.play()}};e.init();
},{"./stringContent":"xoa0"}]},{},["epB2"], null)
//# sourceMappingURL=/main.72e5b776.js.map