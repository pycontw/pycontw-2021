(window.webpackJsonp=window.webpackJsonp||[]).push([[72,8,9,20],{1007:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(43),r(491)),c=r(64),l=Object(c.a)({"en-us":{invalidAttendee:"The token within the link is invalid. Please contact staff for further help.",title:"Live Broadcast",pageAbstract:"Live Broadcast",og:{title:"Live Broadcast",pageAbstract:"Live Broadcast"}},"zh-hant":{invalidAttendee:"連結中附帶的驗證碼錯誤。請聯繫工作人員取得更進一步的協助。",title:"現場直播",pageAbstract:"現場直播",og:{title:"現場直播",description:"現場直播"}}}),d=r(492),f=r(523),m={i18n:l,name:"Live",components:{I18nPageWrapper:o.default,CoreH1:d.default,Youtube:f.default},fetchOnServer:!1,fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$nuxt.context.query.token,n=t.$nuxt.context.store,e.next=4,n.dispatch("$verifyAttendee",{token:r});case 4:t.isValidAttendee=n.state.youtubeInfo&&0!==n.state.youtubeInfo.length,t.youtubeInfo=n.state.youtubeInfo;case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{isValidAttendee:!1,youtubeInfo:[]}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},h=(r(870),r(4)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i18n-page-wrapper",[r("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),t.isValidAttendee?r("div",t._l(t.youtubeInfo,(function(e){return r("div",{key:e.video_id},[r("p",{staticClass:"paragraph-title"},[t._v(t._s(e.room))]),t._v(" "),r("youtube",{attrs:{"video-id":e.video_id}})],1)})),0):r("div",[t._v(t._s(t.$t("invalidAttendee")))])],1)}),[],!1,null,"023f4ff4",null);e.default=component.exports},485:function(t,e,r){var content=r(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("098c8dc7",content,!0,{sourceMap:!1})},486:function(t,e,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("13ffce30",content,!0,{sourceMap:!1})},487:function(t,e,r){"use strict";r(485)},488:function(t,e,r){var n=r(15),o=r(270),c=r(271),l=r(272),d=r(273),f=r(274),m=r(275),h=r(276),v=n((function(i){return i[1]})),x=o(c),w=o(l),y=o(d),_=o(f),k=o(m),$=o(h);v.push([t.i,"h1[data-v-cb0ee938]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-cb0ee938]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-cb0ee938]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-cb0ee938], p[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-cb0ee938]{font-size:.625rem}ul[data-v-cb0ee938]{margin-bottom:1.5rem}ul.list-disc[data-v-cb0ee938]{padding-left:3rem}li[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-cb0ee938]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:4% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}@media (min-width: 1194px){.page-wrapper[data-v-cb0ee938]{background-image:url("+x+"), url("+w+"), url("+y+"), url("+_+"), url("+k+"), url("+$+"), url("+x+"), url("+w+"), url("+y+"), url("+_+"), url("+k+"), url("+$+")}}",""]),v.locals={},t.exports=v},489:function(t,e,r){"use strict";r(486)},490:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,"h1[data-v-8f39343a]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 834px){h1[data-v-8f39343a]{margin-bottom:2.25rem}h1[data-v-8f39343a]{font-size:1.5rem;line-height:2rem}}",""]),n.locals={},t.exports=n},491:function(t,e,r){"use strict";r.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1}},computed:{classObject:function(){return{"py-8":!0,"md:py-20":!0,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}}}},o=(r(487),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper"},[r("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"cb0ee938",null);e.default=component.exports},492:function(t,e,r){"use strict";r.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(r(489),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"8f39343a",null);e.default=component.exports},523:function(t,e,r){"use strict";r.r(e);var n={props:{videoId:{type:String,required:!0}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aspect-w-16 aspect-h-9"},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/"+t.videoId,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports},641:function(t,e,r){var content=r(871);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("facdf252",content,!0,{sourceMap:!1})},870:function(t,e,r){"use strict";r(641)},871:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".paragraph-title[data-v-023f4ff4]{margin-top:2.5rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}",""]),n.locals={},t.exports=n}}]);