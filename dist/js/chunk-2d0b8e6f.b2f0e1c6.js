(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8e6f"],{3150:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:this.$globals.showTeamMembersUi,callback:function(t){e.$set(this.$globals,"showTeamMembersUi",t)},expression:"this.$globals.showTeamMembersUi"}},[a("v-card",[a("v-card-text",[a("v-row",{staticClass:"py-6",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mr-4"},[a("h4",{staticClass:"text-center"},[e._v("Team Members")])])],1),a("div",{staticClass:"text-center mx-6"},e._l(e.teamMembers,(function(t,n){return a("div",{key:n,staticClass:"mx-auto"},[a("v-text-field",{key:n,attrs:{outlined:"",dense:"","append-icon":"mdi-close",label:"Member name"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$kahoot.mainPlayerTeamMembers(e.teamMembers)},"click:append":function(t){return e.RemoveMember(n)}},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1)})),0),a("div",{staticClass:"d-flex text-center mx-6"},[a("v-btn",{staticClass:"mx-auto",attrs:{block:"",outlined:""},on:{click:function(t){return e.AddMember()}}},[e._v("Add member")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticStyle:{"style='-webkit-animation":"color 20s infinite",animation:"color 10s infinite","-webkit-animation-direction":"alternate","animation-direction":"alternate"},attrs:{text:""},on:{click:function(t){return e.$kahoot.mainPlayerTeamMembers(e.teamMembers)}}},[e._v("Join")])],1)],1)],1)},s=[],i=(a("a434"),{data:function(){return{teamMembers:[]}},methods:{AddMember:function(){this.teamMembers.push({name:""})},RemoveMember:function(e){this.teamMembers.length>1&&this.teamMembers.splice(e,1)}},mounted:function(){this.$kahoot.players.length>0&&(this.teamMembers=[{name:this.$kahoot.players[0].username}])}}),r=i,o=a("2877"),m=a("6544"),l=a.n(m),c=a("8336"),d=a("b0af"),u=a("99d9"),b=a("62ad"),h=a("169a"),f=a("0fd9"),k=a("2fa4"),p=a("8654"),v=Object(o["a"])(r,n,s,!1,null,null,null);t["default"]=v.exports;l()(v,{VBtn:c["a"],VCard:d["a"],VCardActions:u["a"],VCardText:u["b"],VCol:b["a"],VDialog:h["a"],VRow:f["a"],VSpacer:k["a"],VTextField:p["a"]})}}]);