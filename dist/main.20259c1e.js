parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/*\n大家好，\n接下来我会给大家画一个太极图\n首先准备一个div\n*/\n#tai-chi {\n  --radius: 200px;\n  width: var(--radius);\n  height: var(--radius);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n}\n/*\n接下来把div变为圆形\n*/\n#tai-chi {\n  border-radius: 50%;\n}\n/*\n太极图是由阴阳两鱼组成的\n一黑一白\n*/\n#tai-chi {\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(255, 255, 255, 1) 50%,\n    rgba(0, 0, 0, 1) 50%,\n    rgba(0, 0, 0, 1) 100%\n  );\n}\n/*\n添加鱼眼\n*/\n#tai-chi::before {\n  width: calc(var(--radius) / 2);\n  height: calc(var(--radius) / 2);\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: 50%;\n  background: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 1) 25%,\n    rgba(255, 255, 255, 1) 25%,\n    rgba(255, 255, 255, 1) 100%\n  );\n}\n\n#tai-chi::after {\n  width: calc(var(--radius) / 2);\n  height: calc(var(--radius) / 2);\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #000;\n  border-radius: 50%;\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(255, 255, 255, 1) 25%,\n    rgba(0, 0, 0, 1) 25%,\n    rgba(0, 0, 0, 1) 100%\n  );\n}\n\n/*\n好了，太极图画完了\n*/",i="",t=0,e=16,d=function d(){setTimeout(function(){i+="\n"===a[t]?"<br>":" "===a[t]?"&nbsp;":a[t],n.innerHTML=i,r.innerHTML=a.substr(0,t),window.scrollTo(0,9999),n.scrollTo(0,9999),t<a.length-1&&(d(),t++)},e)};d();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.20259c1e.js.map