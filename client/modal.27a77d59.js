import{c as a,d as t,b as e,A as c,B as s,x as n,l as r,u as o,s as i,y as l,h as $,e as m,f as p,g as f,i as u,m as v,a as d,J as g,N as h,a3 as b,a4 as k}from"./chunk.8e27e64b.js";import{f as x,n as j}from"./chunk.a28bd58e.js";import"./chunk.0a41e55b.js";import{a as w}from"./chunk.d9e61e23.js";import"./chunk.acff7986.js";import{a as M}from"./chunk.d45aa407.js";function _(a){var t;return{c(){t=g("Toggle")},l(a){t=s(a,"Toggle")},m(a,e){r(a,t,e)},d(a){a&&$(t)}}}function T(a){var t,e;return{c(){t=m("p"),e=m("img"),this.h()},l(a){t=p(a,"P",{class:!0},!1);var c=f(t);e=p(c,"IMG",{alt:!0,src:!0},!1),f(e).forEach($),c.forEach($),this.h()},h(){u(e,"alt","Test image"),u(e,"src","https://via.placeholder.com/1280x920"),u(t,"class","image is-4by3")},m(a,c){r(a,t,c),v(t,e)},d(a){a&&$(t)}}}function B(a){var t,e,d,g,w=new x({props:{class:"block",$$slots:{default:[_]},$$scope:{ctx:a}}});function M(t){a.modal_active_binding.call(null,t),d=!0,k(()=>d=!1)}w.$on("click",a.click_handler);let B={$$slots:{default:[T]},$$scope:{ctx:a}};void 0!==a.active&&(B.active=a.active);var y=new j({props:B});return h.push(()=>b(y,"active",M)),{c(){t=m("div"),w.$$.fragment.c(),e=c(),y.$$.fragment.c(),this.h()},l(a){t=p(a,"DIV",{slot:!0},!1);var c=f(t);w.$$.fragment.l(c),e=s(c,"\n    "),y.$$.fragment.l(c),c.forEach($),this.h()},h(){u(t,"slot","preview")},m(a,c){r(a,t,c),n(w,t,null),v(t,e),n(y,t,null),g=!0},p(a,t){var e={};a.$$scope&&(e.$$scope={changed:a,ctx:t}),w.$set(e);var c={};a.$$scope&&(c.$$scope={changed:a,ctx:t}),!d&&a.active&&(c.active=t.active),y.$set(c)},i(a){g||(o(w.$$.fragment,a),o(y.$$.fragment,a),g=!0)},o(a){i(w.$$.fragment,a),i(y.$$.fragment,a),g=!1},d(a){a&&$(t),l(w),l(y)}}}function y(a){return{c:d,l:d,m:d,p:d,i:d,o:d,d:d}}function E(a){var t,e,m=new w({props:{title:"Modal",subtitle:"Modal popups"}}),p=new M({props:{code:'<script>\n  import { Button, Modal } from \'svelma\'\n  \n  let active = false\n<\/script>\n\n<Button class="block" on:click={() => active = !active}>Toggle</Button>\n<Modal bind:active={active}>\n  <p class="image is-4by3">\n    <img alt="Test image" src="https://via.placeholder.com/1280x920"/>\n  </p>\n</Modal>',$$slots:{default:[y],preview:[B]},$$scope:{ctx:a}}});return{c(){m.$$.fragment.c(),t=c(),p.$$.fragment.c()},l(a){m.$$.fragment.l(a),t=s(a,"\n\n"),p.$$.fragment.l(a)},m(a,c){n(m,a,c),r(a,t,c),n(p,a,c),e=!0},p(a,t){var e={};(a.$$scope||a.active)&&(e.$$scope={changed:a,ctx:t}),p.$set(e)},i(a){e||(o(m.$$.fragment,a),o(p.$$.fragment,a),e=!0)},o(a){i(m.$$.fragment,a),i(p.$$.fragment,a),e=!1},d(a){l(m,a),a&&$(t),l(p,a)}}}function I(a,t,e){let c=!1;return{active:c,click_handler:function(){const a=c=!c;return e("active",c),a},modal_active_binding:function(a){e("active",c=a)}}}export default class extends a{constructor(a){super(),t(this,a,I,E,e,[])}}
//# sourceMappingURL=modal.27a77d59.js.map
