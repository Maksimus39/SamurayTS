"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[694],{8587:function(t,s,e){e.d(s,{D:function(){return c}});var r=e(1413),n=e(3366);e(2791);var i=e(9271),o=e(364),a=e(184),u=["isAuth"],l=function(t){return{isAuth:t.auth.isAuth}};function c(t){return(0,o.$j)(l)((function(s){var e=s.isAuth,o=function(t,s){if(null==t)return{};var e,r,i=(0,n.Z)(t,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}(s,u);return e?(0,a.jsx)(t,(0,r.Z)({},o)):(0,a.jsx)(i.l_,{to:"/login"})}))}},694:function(t,s,e){e.r(s),e.d(s,{default:function(){return T}});var r=e(1413),n=e(5671),i=e(3144),o=e(136),a=e(5716),u=e(2791),l=e(885),c=e(3211),d="ProfileInfo_avatar__PQsaD",p="ProfileInfo_profileBackground__OPqNU",h=e(184),f=function(t){var s=t.status,e=t.updateStatus,r=(0,u.useState)(!1),n=(0,l.Z)(r,2),i=n[0],o=n[1],a=(0,u.useState)(s),c=(0,l.Z)(a,2),d=c[0],p=c[1];(0,u.useEffect)((function(){p(s)}),[s]);return(0,h.jsxs)(h.Fragment,{children:[!i&&(0,h.jsx)("span",{onDoubleClick:function(){o(!0)},children:d||"No status"}),i&&(0,h.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},onBlur:function(){o(!1),e(d)},value:d,placeholder:"Hello my friends",autoFocus:!0})]})},j=function(t){var s=t.contacts;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b!"}),Object.entries(s).map((function(t){var s=(0,l.Z)(t,2),e=s[0],r=s[1];return r?(0,h.jsxs)("div",{children:[e,": ",r]},e):null}))]})},x=function(t){if(!t.profile)return(0,h.jsx)(c.p,{});var s=t.profile,e=t.status,r=t.updateStatus;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{src:"https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655658c72ac2da7753ee753c_6556596de3bfcb307785efa6/scale_1200",alt:"Profile background"}),(0,h.jsxs)("h4",{children:["status: ",(0,h.jsx)(f,{status:e,updateStatus:r})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:s.photos.small,alt:"Profile avatar",className:p}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",s.aboutMe]}),(0,h.jsx)(j,{contacts:s.contacts}),(0,h.jsxs)("h2",{children:["\u041c\u043e\u0451 \u0438\u043c\u044f: ",s.fullName]}),(0,h.jsxs)("h2",{children:["\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b: ",s.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443":"\u041d\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"]}),(0,h.jsxs)("h2",{children:["\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438: ",s.lookingForAJobDescription]})]})]})]})},m=e(4607),v=e(364),g=e(2982),P="MyPosts_postsBlock__IOjMi",_="MyPosts_posts__DwIj5",b="Post_item__PK8iI",k=function(t){return(0,h.jsxs)("div",{className:b,children:[(0,h.jsx)("img",{src:"https://sneg.top/uploads/posts/2023-06/1687597602_sneg-top-p-ava-obshchenie-instagram-1.jpg",alt:""}),(0,h.jsx)("span",{children:t.message}),(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["Likes ",t.likesCount]})})]})},S=e(6139),y=e(704),Z=e(7392),C=e(1278),N=u.memo((function(t){var s=(0,g.Z)(t.posts).reverse().map((function(t){return(0,h.jsx)(k,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,h.jsxs)("div",{className:P,children:[(0,h.jsx)("h3",{children:"My Posts"}),(0,h.jsx)(A,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,h.jsx)("div",{className:_,children:s})]})})),w=(0,Z.D)(10),A=(0,y.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(S.Z,{name:"newPostText",component:C.gx,placeholder:"Enter a message...",validate:[Z.C,w]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add Post"})})]})})),I=(0,v.$j)((function(t){return{posts:t.profilePage.posts}}),{addPost:m.q2})(N),O=function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(I,{})]})},D=e(9271),F=e(8587),M=e(7781),E=function(t){(0,o.Z)(e,t);var s=(0,a.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.profileThunkCreator(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(O,(0,r.Z)((0,r.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),e}(u.Component),T=(0,M.qC)((0,v.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{setUserProfile:m.$l,profileThunkCreator:m.EP,getStatus:m.lR,updateStatus:m.Nf}),D.EN,F.D)(E)}}]);
//# sourceMappingURL=694.9553003b.chunk.js.map