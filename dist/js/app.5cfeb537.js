(function(e){function t(t){for(var u,r,s=t[0],i=t[1],c=t[2],l=0,h=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u]);f&&f(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],u=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(u=!1)}u&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var u={},r={app:0},a={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-c7e9b3be":"93e35252","chunk-d9673a10":"cc663e35","chunk-220ce1b6":"bd3bdd18","chunk-2477fcb9":"50b8dec5","chunk-131afdbd":"6f2c1d38","chunk-4098a00e":"25b9a3a4","chunk-447ddeb6":"1033010d","chunk-a5e51168":"2081a43a","chunk-2d0bdf1a":"9a6cf7a5","chunk-2d22bef1":"238ea898","chunk-bcd3f7e0":"87599263","chunk-4ef31a44":"272e2569","chunk-5de73d60":"bef83682","chunk-78fca927":"25c7f914","chunk-2d0b8e6f":"b2f0e1c6","chunk-7e52de7a":"08949664","chunk-503bf007":"8f43a05d","chunk-4a5f46a6":"d9c728ec","chunk-37bc2821":"27282bda"}[e]+".js"}function i(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-c7e9b3be":1,"chunk-d9673a10":1,"chunk-220ce1b6":1,"chunk-2477fcb9":1,"chunk-131afdbd":1,"chunk-4098a00e":1,"chunk-447ddeb6":1,"chunk-a5e51168":1,"chunk-bcd3f7e0":1,"chunk-4ef31a44":1,"chunk-5de73d60":1,"chunk-78fca927":1,"chunk-7e52de7a":1,"chunk-503bf007":1,"chunk-37bc2821":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var u="css/"+({}[e]||e)+"."+{"chunk-c7e9b3be":"8a22f177","chunk-d9673a10":"f0222215","chunk-220ce1b6":"9196ef73","chunk-2477fcb9":"9196ef73","chunk-131afdbd":"68e6a77c","chunk-4098a00e":"31b85913","chunk-447ddeb6":"c11c46b1","chunk-a5e51168":"34a18406","chunk-2d0bdf1a":"31d6cfe0","chunk-2d22bef1":"31d6cfe0","chunk-bcd3f7e0":"565fad0d","chunk-4ef31a44":"4aeb711c","chunk-5de73d60":"a5520b60","chunk-78fca927":"19bffd14","chunk-2d0b8e6f":"31d6cfe0","chunk-7e52de7a":"46ed9ab1","chunk-503bf007":"7c7d0c16","chunk-4a5f46a6":"31d6cfe0","chunk-37bc2821":"5baca255"}[e]+".css",a=i.p+u,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===u||l===a))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],l=c.getAttribute("data-href");if(l===u||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var u=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=u,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var u=a[e];if(0!==u)if(u)t.push(u[2]);else{var o=new Promise((function(t,n){u=a[e]=[t,n]}));t.push(u[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var h=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var u=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+u+": "+r+")",h.name="ChunkLoadError",h.type=u,h.request=r,n[1](h)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=u,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)i.d(n,u,function(t){return e[t]}.bind(null,u));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.iframe?n("div",{staticClass:"text-center d-flex",staticStyle:{height:"100vh"}},[n("span",{staticClass:"ma-auto"},[e._v("This is an unnoficial version of kahoot.rocks. Please use the official version at https://kahoot.rocks")])]):n("router-view")],1)},a=[],o=n("b85c"),s={name:"App",computed:{iframe:function(){return window.self!==window.top}},methods:{getConfig:function(){var e=localStorage.getItem("options");return e?JSON.parse(e):(localStorage.setItem("options",JSON.stringify(this.$globals.options)),this.$globals.options)},loadConfig:function(){var e=this.getConfig();this.$globals.options=Object.assign(this.$globals.options,e),this.$vuetify.theme.dark=this.$globals.options.dark}},mounted:function(){this.loadConfig()},created:function(){navigator.serviceWorker.getRegistrations().then((function(e){var t,n=Object(o["a"])(e);try{for(n.s();!(t=n.n()).done;){var u=t.value;u.unregister()}}catch(r){n.e(r)}finally{n.f()}}))}},i=s,c=n("2877"),l=n("6544"),h=n.n(l),f=n("7496"),d=Object(c["a"])(i,r,a,!1,null,null,null),p=d.exports;h()(d,{VApp:f["a"]});n("d3b7"),n("3ca3"),n("ddb0");var m=n("8c4f");u["a"].use(m["a"]);var A=[{path:"/",name:"Home",component:function(){return n.e("chunk-c7e9b3be").then(n.bind(null,"bb51"))}},{path:"/terms",name:"Terms & Conditions",component:function(){return Promise.all([n.e("chunk-d9673a10"),n.e("chunk-2477fcb9")]).then(n.bind(null,"bd91"))}},{path:"/privacy",name:"Privacy Policy",component:function(){return Promise.all([n.e("chunk-d9673a10"),n.e("chunk-220ce1b6")]).then(n.bind(null,"6f9f"))}},{path:"*",redirect:{path:"/"}}],g=new m["a"]({mode:"history",base:"/",routes:A}),b="Kahoot Rocks - The only working Kahoot auto answer hack";g.afterEach((function(e){u["a"].nextTick((function(){document.title=e.meta.title||b}))}));var w=g,k=(n("15f5"),n("f309"));u["a"].use(k["a"]);var y=new k["a"]({icons:{iconfont:"fa"}}),E=(n("5319"),n("ac1f"),n("4d63"),n("25f0"),n("99af"),n("466d"),{install:function(e){e.component();var t=new e({data:{options:{dark:!0,randomBotNames:!1,guestAnalytics:!1,kahootSearchAmount:100,answerCorrect:100,minAnswerDelay:100,maxAnswerDelay:100,closeDrawerOnClick:!0,joinDelay:500},notification:{text:"",type:"",active:!1},menuItem:0,loading:!0,version:"4.3.0",user:{},showTeamMembersUi:!1,showKahootNameDialog:!1,showBotsPanel:!1,joined:0,joining:0},methods:{notify:function(e,t){this.loading=!1,this.notification.text=e,this.notification.type=t,this.notification.active=!0},cancelNotify:function(){this.notification.text="",this.notification.type="",this.notification.active=!1},removeFormatCharacters:function(e){return e.replace(/(&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});)+/gi," ").replace(/<[^>]*>/g," ").replace(/ {2,}/g," ")},formatSearchTerm:function(e){var t=n("b855")(),u=/[^\d.\s/\-\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/gim,r=/[/-]/gm,a=new RegExp("(".concat(t.source,")|(").concat(u.source,")"),"gmi"),o=/ \*+$/gm,s=/([*](?=[^*]*$))/g;return e.replace(a,"*").replace(r," ").replace(o,"*"),!e.match(/\s/gm)&&e.length&&e.match(/\*/gm)&&(e=e.replace(s," ")),e}},watch:{options:{handler:function(){localStorage.setItem("options",JSON.stringify(this.options))},deep:!0}}});e.prototype.$globals=t}}),D=n("1da1"),v=(n("96cf"),n("159b"),n("a9e3"),n("b0c0"),n("a434"),n("d81d"),n("4de4"),n("d4ec")),F=n("bee2"),C=n("262e"),B=n("2caf"),S={getReady:1,startQuestion:2,gameOver:3,timeUp:4,playAgain:5,answerSelected:6,answerResponse:7,revealAnswer:8,startQuiz:9,resetController:10,submitFeedback:11,feedback:12,revealRanking:13,userNameAccepted:14,userNameRejected:15,requestRecoveryDataFromPlayer:16,sendRecoveryDataToController:17,joinTeamMembers:18,joinTeamMembersResponse:19,startTeamTalk:20,skipTeamTalk:21,iframeControllerEvent:31,serverIframeMessage:32,storyBlockGetReady:40,reactionSelected:41,reactionResponse:42,gameBlockStart:43,gameBlockEnd:44,gameBlockAnswer:45,submitTwoFactorAuth:50,twoFactorAuthIncorrect:51,twoFactorAuthCorrect:52,resetTwoFactorAuth:53},q=function(){var e=this;this.on("player",(function(t){var n=t.data,u=n.type;switch(u){case"message":var r=n.id,a=n.content,o=a?JSON.parse(a):"";e.emit("message",{id:r,content:o});break;default:break}})),this.on("status",(function(t){var n=t.data.status;"MISSING"==n&&(e.emit("GAME_END_UNEXPECTED"),e.Leave())})),this.on("message",(function(t){switch(t.id){case S.startQuiz:e.emit("QUIZ_QUESTION_ANSWERS",t.content.quizQuestionAnswers);break;case S.getReady:var n=t.content.questionIndex;e.emit("NEW_QUESTION",n),e.emit("GET_QUESTION_DATA",n);break;case S.startQuestion:Math.floor(100*Math.random())+1>e.questionData.chance&&(e.questionData.answer=null);var u={questionIndex:t.content.questionIndex,type:t.content.gameBlockType,meta:{lag:Math.round(45*Math.random()+5)}};switch(t.content.gameBlockType){case"jumble":return void e.emit("PUZZLE_QUESTION");case"open_ended":null==e.questionData.answer&&(e.questionData.answer="kahoot.rocks :D"),u.text=e.questionData.answer;break;case"multiple_select_quiz":if(null==e.questionData.answer){for(var r=[],a=0;a<t.content.numberOfAnswersAllowed;a++)r.push(a+1);var o=r.length,s=[],i=0;while(o--)i=Math.floor(Math.random()*(o+1)),s.push(r[i]),r.splice(i,1);u.choice=s}else u.choice=e.questionData.answer;break;default:null==e.questionData.answer&&(e.questionData.answer=Math.floor(Math.random()*t.content.quizQuestionAnswers[t.content.questionIndex])),u.choice=e.questionData.answer}var c=Math.abs(Math.ceil(e.questionData.answerDelay.min+Math.random()*(e.questionData.answerDelay.max-e.questionData.answerDelay.min)));setTimeout((function(){e.Send("/service/controller",{content:JSON.stringify(u),id:S.gameBlockAnswer,type:"message"})}),c);break;case S.revealAnswer:e.rank=t.content.rank,e.points=t.content.totalScore,e.emit("QUESTION_RESULTS",{correctChoices:t.content.correctChoices,text:t.content.text});break;case S.gameOver:e.emit("GAME_END"),e.Leave();break;case S.playAgain:e.Leave();break;case S.resetController:e.joined=!1,1==t.content.kickCode&&(e.emit("KICKED"),e.Leave());break;default:break}})),this.on("GET_QUESTION_DATA_RESPONSE",(function(t){e.questionData=t}))},N=function(e){return new Promise((function(t,n){fetch("/proxy/reserve/session/".concat(e,"/?").concat(Date.now()),{headers:{"user-agent":navigator.userAgent,referer:"https://kahoot.it/","accept-language":"en-US,en;q=0.8",accept:"*/*"}}).then(function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(n){var u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(404==n.status&&t(new Error("404 Session not found")),!n.headers.get("x-kahoot-session-token")){e.next=7;break}return e.next=4,n.json();case 4:u=e.sent,u.header=n.headers.get("x-kahoot-session-token"),t(u);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return n(e)}))}))},x=n("e032"),O=n("a421"),R=function(e){return I.apply(this,arguments)};function I(){return I=Object(D["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(u,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.pin=t,n.socket=new O["CometD"],e.next=4,N(n.pin).catch((function(e){return e}));case 4:if(n.info=e.sent,!(n.info instanceof Error)){e.next=7;break}return e.abrupt("return",r(n.info));case 7:n.info.gameMode&&"team"==n.info.gameMode&&(n.teamMode=!0),n.token=Object(x["a"])(n.info),n.socket.configure({url:"wss://kahoot.it/cometd/".concat(n.pin,"/").concat(n.token)}),n.socket.websocketEnabled=!0,u(n.socket.handshake());case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}var T=function(){var e=this;this.socket.subscribe("/service/controller",(function(t){return e.emit("controller",t)})),this.socket.subscribe("/service/player",(function(t){return e.emit("player",t)})),this.socket.subscribe("/service/status",(function(t){return e.emit("status",t)}))},j=(n("a4d3"),n("e01a"),function(e){return this.Send("/service/controller",{id:S.submitTwoFactorAuth,type:"message",content:JSON.stringify({sequence:e})})});function $(){var e=this,t=["0123","0132","0213","0231","0321","0312","1023","1032","1203","1230","1302","1320","2013","2031","2103","2130","2301","2310","3012","3021","3102","3120","3201","3210"];t.forEach((function(n,u){var r=setTimeout((function(){e.loggedIn||j.call(e,n),e.timeouts.splice(e.timeouts.indexOf(r),1)}),u*(1e3/t.length));e.timeouts.push(r)}))}function _(){var e=this;this.timeouts.forEach((function(t,n){clearTimeout(t),e.timeouts.splice(n,1)}))}var z={Start:$,Stop:_},M=z;function P(e){var t=this;return new Promise((function(n,u){t.on("player",(function(e){var r=e.data;"message"===r.type&&r.id===S.joinTeamMembersResponse&&(r.error?u(new Error(r.description)):(t.cid=r.cid,t.loggedIn=!0,r.content=JSON.parse(r.content),t.teamNames=r.content.memberNames,t.quizQuestionAnswers=r.content.recoveryData.defaultQuizData.quizQuestionAnswers,t.info.twoFactorAuth&&"team"==t.info.gameMode?(t.loggedIn=!1,t.on("player",(function(e){var u=e.data,r=u.id;r!==S.resetTwoFactorAuth||t.loggedIn||(M.Stop.call(t),M.Start.call(t)),r===S.twoFactorAuthCorrect&&(t.loggedIn=!0,M.Stop.call(t),n()),r===S.userNameAccepted&&M.Start.call(t)}))):n()))})),t.Send("/service/controller",{content:JSON.stringify(e),id:S.joinTeamMembers,type:"message"})}))}var K=function(){return Q.apply(this,arguments)};function Q(){return Q=Object(D["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:M.Stop.call(this),setTimeout((function(){t.emit("PLAYER_LEAVE"),t.Send("/service/controller",{cid:t.cid,type:"left"});var e=new Promise((function(e){return t.socket.disconnect(e)}));return e}),Math.floor(5e3*Math.random()));case 2:case"end":return e.stop()}}),e,this)}))),Q.apply(this,arguments)}function U(e,t){var n=this;this.username=e;var u=this.info.twoFactorAuth&&"team"!=this.info.gameMode;return new Promise((function(e,r){n.on("controller",(function(t){var a=t.data;"loginResponse"===a.type&&(a.error?"USER_INPUT"==a.error?V().then((function(e){U.call(n,e)})):r(new Error(a.description)):(n.cid=a.cid,u||(n.loggedIn=!0,e())))})),u&&n.once("status",(function(t){var u=t.data,a=u.status;"ACTIVE"===a?n.on("player",(function(t){var u=t.data,r=u.id;r!==S.resetTwoFactorAuth||n.loggedIn||(M.Stop.call(n),M.Start.call(n)),r===S.twoFactorAuthCorrect&&(n.loggedIn=!0,M.Stop.call(n),e()),r===S.userNameAccepted&&M.Start.call(n)})):r(new Error("Status not active: ".concat(a)))})),setTimeout((function(){n.Send("/service/controller",{content:JSON.stringify({device:{userAgent:navigator.userAgent,screen:{width:window.innerWidth,height:window.innerHeight}}}),gameid:t,name:n.username,type:"login"})}),1001)}))}var J=n("c0e2"),L=n.n(J),G=n("e144").v4,W=function(e){Object(C["a"])(n,e);var t=Object(B["a"])(n);function n(){var e;return Object(v["a"])(this,n),e=t.call(this),e.error=!1,e.rank=0,e.points=0,e.username="",e.uuid=G(),e.teamMode=!1,e.teamNames=[],e.joined=!1,e.timeouts=[],e.questionData={answer:null,chance:100,answerDelay:100},e}return Object(F["a"])(n,[{key:"Join",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n){var u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.call(this,t).then((function(){T.call(u),U.call(u,n).then((function(){u.teamMode?(u.once("TEAM_UI_RESPONSE",(function(e){P.call(u,e).then((function(){u.emit("JOINED_SESSION"),u.joined=!0}))})),u.emit("SHOW_TEAM_UI")):(u.emit("JOINED_SESSION"),u.joined=!0)})).catch((function(e){console.error("player.js 50: "+e),u.emit("SESSION_INVALID"),u.error=!0}))})).catch((function(e){console.error("player.js 56: "+e),u.emit("SESSION_INVALID"),u.error=!0}));case 2:q.call(this);case 3:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"AnswerPuzzle",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.Send("/service/controller",{content:JSON.stringify({type:"jumble",choice:t,questionIndex:n,meta:{lag:Math.round(45*Math.random()+5)}}),id:S.gameBlockAnswer,type:"message"});case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"Leave",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K.call(this);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"Send",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var n,u,r=this,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},u=n,e.abrupt("return",new Promise((function(e){r.socket.isDisconnected()?e():(u.host="kahoot.it",u.gameid=r.pin,r.socket.publish(t,u,e))})));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(L.a);function V(){var e=!0,t="";do{e=!1,t=fetch("https://apis.kahoot.it/namerator").then((function(e){return e.json()})).then((function(e){return e.name})).catch((function(){return e=!0}))}while(e);return t}var Z=new u["a"]({data:function(){return{pin:"",players:[],searcher:null,kahootStarted:!1,questionIndex:0,quizNameRequired:!1,sortable:{open:!1,order:[{color:"Red",id:"red-draggable",option:0},{color:"Blue",id:"blue-draggable",option:1},{color:"Yellow",id:"yellow-draggable",option:2},{color:"Green",id:"green-draggable",option:3}],correct:["One time there was a stealer","They really liked Vue.js","Particularly kahoot.rocks","I say go ahead"]}}},methods:{reset:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[];try{e.players.forEach((function(e){return n.push(e.Leave())}))}catch(u){console.error("kahoot.js 53: ".concat(u))}Promise.all(n),e.pin="",e.socket=null,e.players=[],e.kahootStarted=!1,e.questionIndex=0,e.quizNameRequired=!1,e.$globals.joined=0,e.$globals.joining=0,e.$searcher.quizName="",e.$searcher.quizQuestionAnswers=[],e.$searcher.rawKahoots=[],e.$searcher.kahoots=[],e.$searcher.filterData=[],e.$searcher.gotDbKahoots=!1;case 17:case"end":return t.stop()}}),t)})))()},raid:function(e,t){var n=this;return Object(D["a"])(regeneratorRuntime.mark((function u(){var r,a,o;return regeneratorRuntime.wrap((function(u){while(1)switch(u.prev=u.next){case 0:if(n.$globals.options.randomBotNames||""!=e){u.next=2;break}return u.abrupt("return",n.$globals.notify("Username cannot be empty","ERROR"));case 2:if(""!=t){u.next=4;break}return u.abrupt("return",n.$globals.notify("Amount cannot be empty","ERROR"));case 4:if(n.$globals.options.randomBotNames||/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g.test(e)){u.next=6;break}return u.abrupt("return",n.$globals.notify("Username invalid","ERROR"));case 6:if(/^[0-9]+$/g.test(t)){u.next=8;break}return u.abrupt("return",n.$globals.notify("Amount must be a number","ERROR"));case 8:for(t=Number(t),n.$globals.joining+=t,r=[],a=0;a<t;a++)o=void 0,o=e,t>1&&(o+="-".concat(a)),r.push(n.createBotClient(t,o));Promise.all(r).then((function(){n.$globals.joining-=t,n.$globals.joined-=t}));case 13:case"end":return u.stop()}}),u)})))()},createBotClient:function(e,t){var n=this;return new Promise(function(){var u=Object(D["a"])(regeneratorRuntime.mark((function u(r){var a;return regeneratorRuntime.wrap((function(u){while(1)switch(u.prev=u.next){case 0:if(!n.$globals.options.randomBotNames){u.next=4;break}return u.next=3,fetch("https://apis.kahoot.it/namerator").then((function(e){return e.json()})).then((function(e){return e.name}));case 3:t=u.sent;case 4:a=Math.ceil(Math.random()*(25*e+100)),setTimeout((function(){var e=new W;n.players.push(e),e.uuid==n.players[0].uuid&&(e.mainPlayer=!0),e.on("SESSION_INVALID",(function(){n.$globals.loading=!1,n.$globals.notify("Game pin invalid","ERROR"),n.reset()})),e.on("JOINED_SESSION",(function(){n.$globals.joined++,e.joined=!0,e.uuid==n.players[0].uuid&&(n.$globals.loading=!1),r()})),e.on("NEW_QUESTION",(function(t){e.uuid==n.players[0].uuid&&(n.questionIndex=t)})),e.on("GET_QUESTION_DATA",(function(t){return e.emit("GET_QUESTION_DATA_RESPONSE",n.getQuestionData(t))})),e.on("QUESTION_RESULTS",(function(t){e.uuid==n.players[0].uuid&&n.$searcher.filterData.push(t)})),e.on("PLAYER_LEAVE",(function(){n.players.forEach((function(t,u){t.uuid==e.uuid&&n.players.splice(u,1)}))})),e.on("QUIZ_QUESTION_ANSWERS",(function(t){e.uuid==n.players[0].uuid&&(n.kahootStarted=!0,n.$searcher.quizQuestionAnswers=t)})),e.on("KICKED",(function(){n.players.forEach((function(t,u){t.uuid==e.uuid&&n.players.splice(u,1)})),n.$globals.loading=!1,0==n.players.length&&(n.$globals.notify("Kicked from game by host","ERROR"),n.reset())})),e.once("SHOW_TEAM_UI",(function(){e.uuid!=n.players[0].uuid||n.$globals.options.randomBotNames?e.emit("TEAM_UI_RESPONSE",[e.username]):(n.$globals.loading=!1,n.$globals.showTeamMembersUi=!0)})),e.on("PUZZLE_QUESTION",(function(){e.uuid==n.players[0].uuid&&(n.$globals.sortable.open=!0,n.$globals.sortable.order=[{color:"Red",id:"red-draggable",option:0},{color:"Blue",id:"blue-draggable",option:1},{color:"Yellow",id:"yellow-draggable",option:2},{color:"Green",id:"green-draggable",option:3}],n.$globals.sortable.correct=n.$searcher.kahoots[0].questions[n.questionIndex].answer)})),e.on("GAME_END_UNEXPECTED",(function(){e.uuid==n.players[0].uuid&&(n.$globals.loading=!1,n.$globals.notify("Game ended unexpectedly","ERROR"),n.save(),n.reset())})),e.on("GAME_END",(function(){e.uuid==n.players[0].uuid&&n.save()})),e.Join(n.pin,t)}),a);case 6:case"end":return u.stop()}}),u)})));return function(e){return u.apply(this,arguments)}}())},getQuestionData:function(e){var t=null;return this.$searcher.kahoots.length>0&&(t=this.$searcher.kahoots[0].questions[e].answer),{answerDelay:{min:Number(this.$globals.options.minAnswerDelay),max:Number(this.$globals.options.maxAnswerDelay)},answer:t,chance:Number(this.$globals.options.answerCorrect)}},sortableAnswer:function(){var e=this;this.sortable.open=!1;var t=this.sortable.order.map((function(e){return e.option}));this.players[0].AnswerPuzzle(t,this.questionIndex),this.players.forEach((function(n){return n.AnswerPuzzle(t,e.questionIndex)}))},mainPlayerTeamMembers:function(e){var t=e.map((function(e){return e.name}));t=t.filter((function(e){return/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g.test(e)})),t.length>0&&(this.$globals.loading=!0,this.players[0].emit("TEAM_UI_RESPONSE",t),this.$globals.showTeamMembersUi=!1)},getRandomName:function(){return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}}),H={install:function(e){e.prototype.$kahoot=Z}},X=n("2909"),Y=(n("841c"),n("6062")),ee={install:function(e){e.component();var t=new e({data:{quizName:"",quizQuestionAnswers:[],rawKahoots:[],kahoots:[],filterData:[],cancelSearch:!1},methods:{getRawKahoots:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,u,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(fetch("https://discord.com/api/webhooks/820054252625461308/bxafivggEJK4-bYsZ4czFvtRQnZvfloKafkHlmviT7uMNXGrBucXQAESUAT2t74pcqFC",{method:"post",body:JSON.stringify({content:e.quizName}),headers:{"Content-Type":"application/json"}}),n=/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/gi.test(e.quizName),!n){t.next=6;break}fetch("/proxy/rest/kahoots/".concat(e.quizName)).then((function(e){return e.json()})).then((function(t){e.kahoots=[t],e.rawKahoots=[t]})),t.next=35;break;case 6:if(!(e.$globals.options.kahootSearchAmount>100)){t.next=33;break}u=0,a=[],r=e.$globals.options.kahootSearchAmount;case 10:if(!(r>100)){t.next=26;break}return t.next=13,fetch("/proxy/rest/kahoots/?query=".concat(encodeURIComponent(e.quizName),"&limit=100&cursor=").concat(u,"&includeKahoot=true")).then((function(e){return e.json()}));case 13:if(o=t.sent,u+=100,a.push.apply(a,Object(X["a"])(o.entities.map((function(e){return e.kahoot})))),!(o.totalHits<u)){t.next=23;break}if(e.rawKahoots=a,0!=a.length){t.next=22;break}return t.abrupt("return",e.$globals.notify("No quiz data, please try a different search term","ERROR"));case 22:return t.abrupt("return",e.$globals.notify("Downloaded quiz data","success"));case 23:r-=100,t.next=10;break;case 26:return t.next=28,fetch("/proxy/rest/kahoots/?query=".concat(encodeURIComponent(e.quizName),"&limit=").concat(r,"&cursor=").concat(u,"&includeKahoot=true")).then((function(e){return e.json()}));case 28:o=t.sent,a.push.apply(a,Object(X["a"])(o.entities.map((function(e){return e.kahoot})))),e.rawKahoots=a,t.next=35;break;case 33:return t.next=35,fetch("/proxy/rest/kahoots/?query=".concat(encodeURIComponent(e.quizName),"&limit=").concat(e.$globals.options.kahootSearchAmount,"&includeKahoot=true")).then((function(e){return e.json()})).then((function(t){return e.rawKahoots=t.entities.map((function(e){return e.kahoot}))}));case 35:e.$globals.notify("Downloaded quiz data","success");case 36:case"end":return t.stop()}}),t)})))()},filterKahoots:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,u,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.rawKahoots,""==e.quizName||/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/gi.test(e.quizName)||(u=new Y["a"](e.rawKahoots,{keys:["title"]}),n=u.search(e.quizName).map((function(e){return e.item}))),0!=e.quizQuestionAnswers.length&&(r=n,n=[],r.forEach((function(t){var u=[];t.questions.forEach((function(e){u.push("content"==e.type?null:e.choices.length)})),JSON.stringify(u)==JSON.stringify(e.quizQuestionAnswers)&&(t.quizQuestionAnswers=u,n.push(t))})),n.length>0&&(e.cancelSearch=!0,e.quizName=n[0].uuid),e.kahoots=e.formatKahoots(n));case 3:case"end":return t.stop()}}),t)})))()},formatKahoots:function(e){var t=[];return e.forEach((function(e){var n=[];e.questions.forEach((function(e){"feedback"!=e.type&&"brainstorming"!=e.type||(e.type="content");var t={type:e.type};if("content"!=e.type){var u=null;switch(e.type){case"jumble":u=e.choices.map((function(e){return e.answer}));break;case"multiple_select_quiz":case"multiple_select_poll":u=[],e.choices.forEach((function(e,t){e.correct&&u.push(t)}));break;case"survey":u=Math.floor(Math.random()*e.choices.length);break;case"open_ended":u=e.choices[Math.floor(Math.random()*e.choices.length)].answer;break;case"word_cloud":u="kahoot.rocks is the best :D";break;default:e.choices.forEach((function(e,t){null==u&&e.correct&&(u=t)}))}t.answer=u,t.timeout=e.time,t.text=e.question}n.push(t)})),t.push({name:e.title,uuid:e.uuid,quizQuestionAnswers:e.quizQuestionAnswers,questions:n})})),t}},watch:{quizName:function(){this.cancelSearch||this.getRawKahoots(),this.cancelSearch=!1},quizQuestionAnswers:function(){this.filterKahoots()},rawKahoots:function(){!this.$kahoot.manuallySearched&&this.quizQuestionAnswers.length>0&&this.filterKahoots()},filterData:function(){this.$kahoot.manuallySearched||this.filterKahoots()}}});e.prototype.$searcher=t}},te=(n("caad"),n("2532"),{install:function(e){e.component();var t=new e({data:{state:1,username:"",details:null,kahoot:null,answers:null,rawAnswers:null,rawKahoot:null,playerDetails:null,streak:1,points:0,showNewNicknameDialog:!1,leaderboardCountdown:0,popoutImage:""},methods:{Start:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.state=4,e.kahoot.questions.forEach((function(e){return e.locked=!0})),window.scrollTo({top:0,behavior:"smooth"}),""!=e.username){t.next=8;break}return t.next=6,fetch("https://apis.kahoot.it/namerator").then((function(e){return e.json()})).then((function(e){return e.name}));case 6:e.username=t.sent,e.$globals.notify("Playing as ".concat(e.username));case 8:return t.next=10,fetch("/proxy/rest/challenges/".concat(e.details.challengeId,"/join/?nickname=").concat(encodeURIComponent(e.username)),{method:"post",body:JSON.stringify({nickname:e.username})}).then((function(e){return e.json()})).then((function(t){return e.playerDetails=t}));case 10:if(!e.playerDetails.error||"NICKNAME_EXISTS"!=e.playerDetails.error){t.next=14;break}return e.$globals.notify("Nickname already in use","ERROR"),e.showNewNicknameDialog=!0,t.abrupt("return");case 14:e.rawKahoot=e.details.kahoot,e.answers=e.$searcher.formatKahoots([e.kahoot])[0].questions.map((function(e){return e.answer})),e.rawAnswers=e.$searcher.formatKahoots([e.FormatKahoot(e.rawKahoot)])[0].questions.map((function(e){return e.answer})),n=0;case 18:if(!(n<e.kahoot.questions.length)){t.next=24;break}return t.next=21,e.AnswerQuestion(n);case 21:n++,t.next=18;break;case 24:e.state=5,e.leaderboardCountdown=10;case 26:if(!(e.leaderboardCountdown>=0)){t.next=32;break}return t.next=29,e.Wait(1e3);case 29:e.leaderboardCountdown--,t.next=26;break;case 32:e.Reset();case 33:case"end":return t.stop()}}),t)})))()},AnswerQuestion:function(e){var t=this;return new Promise(function(){var n=Object(D["a"])(regeneratorRuntime.mark((function n(u){var r,a,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.kahoot.questions[e].progress=0,n.next=3,fetch("/proxy/rest/challenges/".concat(t.playerDetails.challenge.challengeId,"/progress/?upToQuestion=").concat(e));case 3:r=Math.abs(Math.ceil(Number(t.$globals.options.minAnswerDelay)+Math.random()*(Number(t.$globals.options.maxAnswerDelay)-Number(t.$globals.options.minAnswerDelay)))),a={quizId:t.playerDetails.challenge.quizId,quizType:t.rawKahoot.quizType,quizMaster:t.playerDetails.challenge.quizMaster,sessionId:t.playerDetails.challenge.pin,numQuestions:t.rawKahoot.questions.length,startTime:Date.now(),question:{index:e,answers:[{playerId:t.username,playerCid:t.playerDetails.playerCid,reactionTime:r}]}},n.t0=t.kahoot.questions[e].type,n.next="quiz"===n.t0?8:"survey"===n.t0?11:"multiple_select_quiz"===n.t0||"multiple_select_poll"===n.t0?14:"jumble"===n.t0?18:"open_ended"===n.t0?22:26;break;case 8:return a.question.answers[0].choiceIndex=t.answers[e],a.question.answers[0].isCorrect=JSON.stringify(t.answers[e])==JSON.stringify(t.rawAnswers[e]),n.abrupt("break",26);case 11:return a.question.answers[0].choiceIndex=t.answers[e],a.question.answers[0].isCorrect=!0,n.abrupt("break",26);case 14:return a.question.answers[0].choiceIndex=-5,a.question.answers[0].selectedChoices=t.answers[e],a.question.answers[0].isCorrect=JSON.stringify(t.answers[e])==JSON.stringify(t.rawAnswers[e]),n.abrupt("break",26);case 18:return a.question.answers[0].choiceIndex=-1,a.question.answers[0].selectedJumbleOrder=t.kahoot.questions[e].choices.map((function(e){return e.option})),a.question.answers[0].isCorrect=JSON.stringify(t.kahoot.questions[e].choices.map((function(e){return e.option})))==JSON.stringify([0,1,2,3]),n.abrupt("break",26);case 22:return a.question.answers[0].choiceIndex=-4,a.question.answers[0].originalText=t.answers[e].replace(/[~`!@#$%^&*(){}[\];:"'<,.>?/\\|\-_+=]/gm,""),a.question.answers[0].isCorrect=t.rawKahoot.questions[e].choices.map((function(e){return e.answer})).includes(t.answers[e]),n.abrupt("break",26);case 26:o=t.rawKahoot.questions[e],o.points&&(s=Math.round(1e3*(1-r/o.time/2))*o.pointsMultiplier*+o.points*t.streak,s>1e3*o.pointsMultiplier&&(s=1e3*o.pointsMultiplier),a.question.answers[0].points=a.question.answers[0].isCorrect?Math.ceil(s):0,a.question.answers[0].isCorrect?t.streak+=.01:t.streak=1,t.points+=s,t.streak>1.1&&(t.streak=1.1)),setTimeout((function(){u(fetch("/proxy/rest/challenges/".concat(t.details.challengeId,"/answers"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(){return t.kahoot.questions[e].progress=100})))}),r);case 29:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},Wait:function(e){return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},ShowQuestions:function(e){this.details=e,this.kahoot=this.FormatKahoot(this.details.kahoot),this.state=3},Reset:function(){this.state=1,this.username="",this.details=null,this.kahoot=null,this.rawKahoot=null,this.playerDetails=null,this.showNewNicknameDialog=!1,this.answers=null,this.rawAnswers=null,this.leaderboardCountdown=0,this.popoutImage="",this.streak=1,this.points=0},FormatKahoot:function(e){var t=[];return e.questions.forEach((function(e){"feedback"!=e.type&&"brainstorming"!=e.type||(e.type="content");var n={type:e.type,locked:!1,progress:null};if("content"!=e.type){var u=[];switch(e.type){case"word_cloud":u="kahoot.rocks is the best :D";break;case"jumble":for(var r=0;r<e.choices.length;r++)e.choices[r].option=r;u=e.choices;break;default:u=e.choices}n.choices=u,n.timeout=e.time,n.text=e.question}else n.description=e.description,n.image=e.image,n.text=e.title;t.push(n)})),{name:e.title,uuid:e.uuid,quizQuestionAnswers:e.quizQuestionAnswers,questions:t}}}});e.prototype.$challenge=t}});u["a"].use(E),u["a"].use(H),u["a"].use(ee),u["a"].use(te),u["a"].config.productionTip=!1,new u["a"]({router:w,vuetify:y,render:function(e){return e(p)}}).$mount("#app")},e032:function(e,t,n){"use strict";(function(e){n("d3b7"),n("25f0"),n("5319"),n("ac1f");t["a"]=function(t){return a(e.from(t.header,"base64").toString("ascii"),r(t.challenge))};var u="let _ = { \n  replace: function() { \n    var args = arguments; \n    var str = arguments[0]; \n    return str.replace(args[1], args[2]); \n  } \n};  \nvar log = function(){}; \nreturn ";function r(e){var t="";return e=e.replace(/(\u0009|\u2003)/gm,""),e=e.replace(/this /gm,"this"),e=e.replace(/ *\. */gm,"."),e=e.replace(/ *\( */gm,"("),e=e.replace(/ *\) */gm,")"),e=e.replace("console.",""),e=e.replace("this.angular.isObject(offset)","true"),e=e.replace("this.angular.isString(offset)","true"),e=e.replace("this.angular.isDate(offset)","true"),e=e.replace("this.angular.isArray(offset)","true"),function(){var n=Function("".concat(u).concat(e));t=n().toString()}(),t}function a(e,t){for(var n="",u=0;u<e.length;u++){var r=e.charCodeAt(u),a=t.charCodeAt(u%t.length),o=r^a;n+=String.fromCharCode(o)}return n}}).call(this,n("b639").Buffer)}});