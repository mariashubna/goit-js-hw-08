function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var i,r,o,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,u=setTimeout(h,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function h(){var e=m();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function w(e){return u=void 0,p&&i?b(e):(i=r=void 0,a)}function O(){var e=m(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=b.querySelector('input[name="email"]'),S=b.querySelector('textarea[name="message"]'),h=e(t)((()=>{const e={email:j.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);j.addEventListener("input",h),S.addEventListener("input",h);const w=localStorage.getItem("feedback-form-state");if(w){const e=JSON.parse(w);j.value=e.email,S.value=e.message}""!==j.value&&""!==S.value&&b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),j.value="",S.value=""}));
//# sourceMappingURL=03-feedback.329f3de5.js.map