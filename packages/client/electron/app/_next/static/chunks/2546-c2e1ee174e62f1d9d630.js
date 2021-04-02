(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2546],{78528:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(15194),i=n(87400),o=n(68625),r=n(27878),l=n(10101),c=n(31451),s=n(23868),d=n(81879),u=n(70607),m=r.forwardRef((function(e,t){var n=e.classes,a=e.className,c=e.color,s=void 0===c?"secondary":c,m=e.edge,g=void 0!==m&&m,p=e.size,b=void 0===p?"medium":p,h=(0,o.Z)(e,["classes","className","color","edge","size"]),v=r.createElement("span",{className:n.thumb});return r.createElement("span",{className:(0,l.Z)(n.root,a,{start:n.edgeStart,end:n.edgeEnd}[g],"small"===b&&n["size".concat((0,d.Z)(b))])},r.createElement(u.Z,(0,i.Z)({type:"checkbox",icon:v,checkedIcon:v,classes:{root:(0,l.Z)(n.switchBase,n["color".concat((0,d.Z)(s))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:t},h)),r.createElement("span",{className:n.track}))})),g=(0,c.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,s.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,s.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(m),p=n(3841),b=n(64432),h=n(27674),v=n(84135),f=n(57405),Z=n(28531),y=n(93433),k=n(59838),P=n(3829),I=n(17144),N=n(52299),C=n(90858),S=n.n(C),E=n(14571),w=n(69744),x=n(50191),R=n(97410),A=n(25700),T=n(33859),D=n(67577),U=n.n(D),O=r.createElement,_=(0,E.$j)((function(e){return{appState:(0,A.p_)(e),authState:(0,T._)(e),adminState:(0,x.e)(e)}}),(function(e){return{createLocation:(0,w.DE)(R.ob,e),patchLocation:(0,w.DE)(R.iB,e),removeLocation:(0,w.DE)(R.Mv,e)}}))((function(e){var t,n=e.open,i=e.handleClose,o=e.location,l=e.editing,c=e.adminState,s=e.createLocation,d=e.patchLocation,u=e.removeLocation,m=(0,r.useState)(""),C=m[0],E=m[1],w=(0,r.useState)(""),x=w[0],R=w[1],A=(0,r.useState)(10),T=A[0],D=A[1],_=(0,r.useState)(!1),B=_[0],$=_[1],L=(0,r.useState)(!1),j=L[0],M=L[1],z=(0,r.useState)("private"),q=z[0],W=z[1],H=(c.get("locations").get("locations"),c.get("scenes").get("scenes")),V=c.get("locationTypes").get("locationTypes"),F=function(){var e={name:C,sceneId:x,maxUsersPerInstance:T,location_setting:{locationType:q,instanceMediaChatEnabled:j,videoEnabled:B}};!0===l?d(o.id,e):s(e),i()};return(0,r.useEffect)((function(){!0===l?(E(o.name),R(o.sceneId||""),D(o.maxUsersPerInstance),$(o.location_setting.videoEnabled),M(o.location_setting.instanceMediaChatEnabled),W(o.location_setting.locationType)):(E(""),R(""),D(10),$(!1),M(!1),W("private"))}),[o]),O("div",null,O(p.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:U().modal,open:n,onClose:i,closeAfterTransition:!0,BackdropComponent:b.Z,BackdropProps:{timeout:500}},O(h.Z,{in:e.open},O("div",{className:S()((t={},(0,a.Z)(t,U().paper,!0),(0,a.Z)(t,U()["modal-content"],!0),t))},!0===l&&O(v.Z,{variant:"outlined",margin:"normal",fullWidth:!0,id:"id",label:"ID",name:"id",disabled:!0,defaultValue:null===o||void 0===o?void 0:o.id},o.id),O(v.Z,{variant:"outlined",margin:"normal",fullWidth:!0,id:"name",label:"Name",name:"name",required:!0,value:C,onChange:function(e){return E(e.target.value)}}),O(v.Z,{type:"number",variant:"outlined",margin:"normal",fullWidth:!0,id:"maxUsers",label:"Max Users",name:"name",required:!0,value:T,onChange:function(e){return D(parseInt(e.target.value))}}),O(f.Z,null,O(Z.Z,{id:"scene"},"Scene"),O(y.Z,{labelId:"scene",id:"scene",value:x,onChange:function(e){return R(e.target.value)}},H.map((function(e){return O(k.Z,{key:e.sid,value:e.sid},"".concat(e.name," (").concat(e.sid,")"))})))),O(f.Z,null,O(Z.Z,{id:"locationType"},"Type"),O(y.Z,{labelId:"locationType",id:"locationType",value:q,onChange:function(e){return W(e.target.value)}},V.map((function(e){return O(k.Z,{key:e.type,value:e.type},e.type)})))),O(P.Z,null,O(f.Z,{style:{color:"black"}},O(I.Z,{color:"primary",control:O(g,{checked:B,onChange:function(e){return $(e.target.checked)},name:"videoEnabled"}),label:"Video Enabled"}))),O(P.Z,null,O(f.Z,{style:{color:"black"}},O(I.Z,{color:"primary",control:O(g,{checked:j,onChange:function(e){return M(e.target.checked)},name:"instanceMediaChatEnabled"}),label:"Global Media Enabled"}))),O(P.Z,{row:!0,className:U().locationModalButtons},!0===l&&O(N.Z,{type:"submit",variant:"contained",color:"primary",onClick:F},"Update"),!0!==l&&O(N.Z,{type:"submit",variant:"contained",color:"primary",onClick:F},"Create"),O(N.Z,{type:"submit",variant:"contained",onClick:i},"Cancel"),!0===l&&O(N.Z,{type:"submit",variant:"contained",color:"secondary",onClick:function(){u(o.id),i()}},"Delete"))))))}))},52546:function(e,t,n){"use strict";n.d(t,{Z:function(){return me}});var a=n(15194),i=n(48533),o=n.n(i),r=n(58700),l=n(64414),c=n(50931),s=n(52299),d=n(78198),u=n(76737),m=n(93433),g=n(59838),p=n(27878),b=n(14571),h=n(69744),v=n(50191),f=n(25700),Z=n(33859),y=n(92384),k=n(23568),P=n(6084),I=n(57405),N=n(14270),C=n(54682),S=n(97410),E=n(87400),w=n(68625),x=n(10101),R=n(31451),A=n(3690),T=n(19740),D=n(33626),U=n(66226),O=n(89056),_=n(21409),B=n(19858),$=n(49348),L=p.createElement(_.Z,null),j=p.createElement(O.Z,null),M=p.createElement(O.Z,null),z=p.createElement(_.Z,null),q=p.forwardRef((function(e,t){var n=e.backIconButtonProps,a=e.count,i=e.nextIconButtonProps,o=e.onChangePage,r=e.page,l=e.rowsPerPage,c=(0,w.Z)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),s=(0,B.Z)();return p.createElement("div",(0,E.Z)({ref:t},c),p.createElement($.Z,(0,E.Z)({onClick:function(e){o(e,r-1)},disabled:0===r,color:"inherit"},n),"rtl"===s.direction?L:j),p.createElement($.Z,(0,E.Z)({onClick:function(e){o(e,r+1)},disabled:-1!==a&&r>=Math.ceil(a/l)-1,color:"inherit"},i),"rtl"===s.direction?M:z))})),W=n(94106),H=function(e){var t=e.from,n=e.to,a=e.count;return"".concat(t,"-").concat(n," of ").concat(-1!==a?a:"more than ".concat(n))},V=[10,25,50,100],F=p.forwardRef((function(e,t){var n,a=e.ActionsComponent,i=void 0===a?q:a,o=e.backIconButtonProps,r=e.backIconButtonText,l=void 0===r?"Previous page":r,c=e.classes,s=e.className,d=e.colSpan,u=e.component,b=void 0===u?T.Z:u,h=e.count,v=e.labelDisplayedRows,f=void 0===v?H:v,Z=e.labelRowsPerPage,y=void 0===Z?"Rows per page:":Z,k=e.nextIconButtonProps,P=e.nextIconButtonText,I=void 0===P?"Next page":P,N=e.onChangePage,C=e.onChangeRowsPerPage,S=e.page,R=e.rowsPerPage,O=e.rowsPerPageOptions,_=void 0===O?V:O,B=e.SelectProps,$=void 0===B?{}:B,L=(0,w.Z)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);b!==T.Z&&"td"!==b||(n=d||1e3);var j=(0,W.Z)(),M=(0,W.Z)(),z=$.native?"option":g.Z;return p.createElement(b,(0,E.Z)({className:(0,x.Z)(c.root,s),colSpan:n,ref:t},L),p.createElement(D.Z,{className:c.toolbar},p.createElement("div",{className:c.spacer}),_.length>1&&p.createElement(U.Z,{color:"inherit",variant:"body2",className:c.caption,id:M},y),_.length>1&&p.createElement(m.Z,(0,E.Z)({classes:{select:c.select,icon:c.selectIcon},input:p.createElement(A.Z,{className:(0,x.Z)(c.input,c.selectRoot)}),value:R,onChange:C,id:j,labelId:M},$),_.map((function(e){return p.createElement(z,{className:c.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),p.createElement(U.Z,{color:"inherit",variant:"body2",className:c.caption},f({from:0===h?0:S*R+1,to:-1!==h?Math.min(h,(S+1)*R):(S+1)*R,count:-1===h?-1:h,page:S})),p.createElement(i,{className:c.actions,backIconButtonProps:(0,E.Z)({title:l,"aria-label":l},o),count:h,nextIconButtonProps:(0,E.Z)({title:I,"aria-label":I},k),onChangePage:N,page:S,rowsPerPage:R})))})),G=(0,R.Z)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(F),X=n(18751),J=n(78920),K=n(85134),Q=n(68236),Y=n(37541),ee=n(646),te=n(95866),ne=n(67577),ae=n.n(ne),ie=n(78528),oe=n(17114),re=n(4048),le=p.createElement;function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.g.setImmediate||(n.g.setImmediate=setTimeout);var de=(0,c.default)().publicRuntimeConfig,ue=(0,N.Z)((function(e){return(0,C.Z)({formControl:{margin:e.spacing(0),minWidth:120,backgroundColor:"white"},selectEmpty:{marginTop:e.spacing(0)}})})),me=(0,k.withRouter)((0,b.$j)((function(e){return{appState:(0,f.p_)(e),authState:(0,Z._)(e),adminState:(0,v.e)(e)}}),(function(e){return{fetchAdminLocations:(0,h.DE)(S.T4,e),fetchAdminScenes:(0,h.DE)(S.Ik,e),fetchLocationTypes:(0,h.DE)(S.qm,e),fetchUsersAsAdmin:(0,h.DE)(S.gc,e),fetchAdminInstances:(0,h.DE)(S.jO,e)}}))((function(e){var t=ue(),n=e.router,a=e.adminState,i=e.authState,c=e.fetchAdminLocations,b=e.fetchAdminScenes,h=e.fetchLocationTypes,v=e.fetchUsersAsAdmin,f=e.fetchAdminInstances,Z={id:null,name:"",maxUsersPerInstance:10,sceneId:null,locationSettingsId:null,location_setting:{instanceMediaChatEnabled:!1,videoEnabled:!1,locationType:"private"}},k={id:"",ipAddress:"",currentUsers:0,locationId:""},N=i.get("user"),C=(0,p.useState)(!1),S=C[0],E=C[1],w=(0,p.useState)(!1),x=w[0],R=w[1],A=(0,p.useState)(!1),D=A[0],U=A[1],O=(0,p.useState)(Z),_=O[0],B=O[1],$=(0,p.useState)(k),L=$[0],j=$[1],M=a.get("scenes").get("scenes"),z={locations:[{id:"id",numeric:!1,disablePadding:!0,label:"ID"},{id:"name",numeric:!1,disablePadding:!1,label:"Name"},{id:"sceneId",numeric:!1,disablePadding:!1,label:"Scene"},{id:"maxUsersPerInstance",numeric:!0,disablePadding:!1,label:"Max Users"},{id:"type",numeric:!1,disablePadding:!1,label:"Type"},{id:"instanceMediaChatEnabled",numeric:!1,disablePadding:!1,label:"Enable public media chat"},{id:"videoEnabled",numeric:!1,disablePadding:!1,label:"Video Enabled"}],users:[{id:"id",numeric:!1,disablePadding:!0,label:"ID"},{id:"name",numeric:!1,disablePadding:!1,label:"Name"},{id:"instanceId",numeric:!1,disablePadding:!1,label:"Instance ID"},{id:"userRole",numeric:!1,disablePadding:!1,label:"User Role"},{id:"partyId",numeric:!1,disablePadding:!1,label:"Party ID"}],instances:[{id:"id",numeric:!1,disablePadding:!0,label:"ID"},{id:"ipAddress",numeric:!1,disablePadding:!1,label:"IP address"},{id:"gsId",numeric:!1,disablePadding:!1,label:"Gameserver ID"},{id:"serverAddress",numeric:!1,disablePadding:!1,label:"Public address"},{id:"currentUsers",numeric:!0,disablePadding:!1,label:"Current # of Users"},{id:"locationId",numeric:!1,disablePadding:!1,label:"Location ID"}]};function q(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function W(e,t){return"desc"===e?function(e,n){return q(e,n,t)}:function(e,n){return-q(e,n,t)}}function H(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var V=p.useState("asc"),F=(0,l.Z)(V,2),ne=F[0],ce=F[1],me=p.useState("name"),ge=(0,l.Z)(me,2),pe=ge[0],be=ge[1],he=p.useState([]),ve=(0,l.Z)(he,2),fe=ve[0],Ze=ve[1],ye=p.useState(0),ke=(0,l.Z)(ye,2),Pe=ke[0],Ie=ke[1],Ne=p.useState(!1),Ce=(0,l.Z)(Ne,2),Se=Ce[0],Ee=(Ce[1],p.useState(P.pg)),we=(0,l.Z)(Ee,2),xe=we[0],Re=we[1],Ae=p.useState("locations"),Te=(0,l.Z)(Ae,2),De=Te[0],Ue=Te[1],Oe=p.useState(!1),_e=(0,l.Z)(Oe,2),Be=_e[0],$e=_e[1],Le=p.useState(""),je=(0,l.Z)(Le,2),Me=(je[0],je[1]),ze=p.useState({}),qe=(0,l.Z)(ze,2),We=qe[0],He=qe[1],Ve=a.get("locations").get("locations"),Fe=a.get("locations").get("total"),Ge=a.get("users").get("users"),Xe=a.get("users").get("total"),Je=a.get("instances").get("instances"),Ke=a.get("instances").get("total"),Qe="locations"===De?Fe:"users"===De?Xe:"instances"===De?Ke:0,Ye=Ve.map((function(e){var t,n,a,i,o;return{id:e.id,name:e.name,sceneId:e.sceneId,maxUsersPerInstance:e.maxUsersPerInstance,type:null===(t=null===e||void 0===e?void 0:e.location_setting)||void 0===t?void 0:t.locationType,instanceMediaChatEnabled:null===(a=null===(n=null===e||void 0===e?void 0:e.location_setting)||void 0===n?void 0:n.instanceMediaChatEnabled)||void 0===a?void 0:a.toString(),videoEnabled:null===(o=null===(i=null===e||void 0===e?void 0:e.location_setting)||void 0===i?void 0:i.videoEnabled)||void 0===o?void 0:o.toString()}})),et=Je.map((function(e){var t;return{id:e.id,ipAddress:e.ipAddress,currentUsers:e.currentUsers,locationId:e.locationId,gsId:null===(t=e.gameserver_subdomain_provision)||void 0===t?void 0:t.gs_id,serverAddress:null!=e.gameserver_subdomain_provision?"https://".concat(e.gameserver_subdomain_provision.gs_number,".").concat(de.gameserverDomain):""}})),tt=function(){var e=(0,r.Z)(o().mark((function e(t,a){var i,r,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.L.service("instance").get(a);case 3:return i=e.sent,e.next=6,y.L.service("location").get(i.locationId);case 6:r=e.sent,l="/location/".concat(r.slugifiedName,"?instanceId=").concat(i.id),n.push(l),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error redirecting to instance:"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),nt=function e(){setTimeout((function(){$e(!0),e()}),5e3)},at=function(){var e=(0,r.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.L.service("user").patch(t,{userRole:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,p.useEffect)((function(){if(0===Object.keys(We).length){var e={};Ge.forEach((function(t){e[t.id]=t.userRole})),He(e)}}),[Ge]),(0,p.useEffect)((function(){nt()}),[]),(0,p.useEffect)((function(){null==(null===N||void 0===N?void 0:N.id)||!0!==a.get("locations").get("updateNeeded")&&!0!==Be||c(),null==(null===N||void 0===N?void 0:N.id)||!0!==a.get("scenes").get("updateNeeded")&&!0!==Be||b(),null!=(null===N||void 0===N?void 0:N.id)&&!0===a.get("locationTypes").get("updateNeeded")&&h(),null==(null===N||void 0===N?void 0:N.id)||!0!==a.get("users").get("updateNeeded")&&!0!==Be||v(),null==(null===N||void 0===N?void 0:N.id)||!0!==a.get("instances").get("updateNeeded")&&!0!==Be||f(),$e(!1)}),[i,a,Be]),le("div",null,le("div",{className:"row mb-5"},le("div",{className:"col-lg-9"},le(re.Z,{typeName:"locations"})),le("div",{className:"col-lg-3"},le(s.Z,{className:ae().createLocation,type:"submit",variant:"contained",color:"primary",onClick:function(){B(Z),U(!1),E(!0)}},"Create New Location"))),le(Q.Z,{className:ae().adminRoot},le(d.Z,{value:De,onChange:function(e,t){Ue(t)},"aria-label":"tabs"},le(u.Z,{label:"Locations",value:"locations"}),"admin"===(null===N||void 0===N?void 0:N.userRole)&&le(u.Z,{label:"Users",value:"users"}),"admin"===(null===N||void 0===N?void 0:N.userRole)&&le(u.Z,{label:"Instances",value:"instances"})),le(Y.Z,{className:ae().tableContainer},le(ee.Z,{stickyHeader:!0,"aria-labelledby":"tableTitle",size:Se?"small":"medium","aria-label":"enhanced table"},le((function(e){var t=e.object,n=e.order,a=e.orderBy,i=e.onRequestSort;return le(X.Z,{className:ae().thead},le(J.Z,{className:ae().trow},z[t].map((function(e){return le(T.Z,{className:ae().tcell,key:e.id,align:"right",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&n},le(K.Z,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label));var t}))))}),{object:De,numSelected:fe.length,order:ne,orderBy:pe,onSelectAllClick:function(e){if(e.target.checked){var t=Ve.map((function(e){return e.name}));Ze(t)}else Ze([])},onRequestSort:function(e,t){ce(pe===t&&"asc"===ne?"desc":"asc"),be(t)},rowCount:Fe||0}),"locations"===De&&le(te.Z,{className:ae().thead},H(Ye,W(ne,pe)).slice(Pe*xe,Pe*xe+xe).map((function(e,t){return le(J.Z,{hover:!0,className:ae().trowHover,style:{color:"black !important"},onClick:function(t){return function(e,t){var n=Ve.find((function(e){return e.id===t}));B(n),U(!0),E(!0)}(0,e.id.toString())},tabIndex:-1,key:e.id},le(T.Z,{className:ae().tcell,component:"th",id:e.id.toString(),align:"right",scope:"row",padding:"none"},e.id),le(T.Z,{className:ae().tcell,align:"right"},e.name),le(T.Z,{className:ae().tcell,align:"right"},function(e){var t=M.find((function(t){return t.sid===e}));return null!=t?"".concat(t.name," (").concat(t.sid,")"):""}(e.sceneId)),le(T.Z,{className:ae().tcell,align:"right"},e.maxUsersPerInstance),le(T.Z,{className:ae().tcell,align:"right"},e.type),le(T.Z,{className:ae().tcell,align:"right"},e.videoEnabled),le(T.Z,{className:ae().tcell,align:"right"},e.instanceMediaChatEnabled))}))),"users"===De&&le(te.Z,{className:ae().thead},H(Ge,W(ne,pe)).slice(Pe*xe,Pe*xe+xe).map((function(e,n){return le(J.Z,{className:ae().trow,style:{color:"black !important"},tabIndex:-1,key:e.id},le(T.Z,{className:ae().tcell,component:"th",id:e.id.toString(),align:"right",scope:"row",padding:"none"},e.id),le(T.Z,{className:ae().tcell,align:"right"},e.name),le(T.Z,{className:null!=e.instanceId&&""!==e.instanceId?ae().tcellSelectable:ae().tcell,align:"right",onClick:function(t){return null!=e.instanceId&&""!==e.instancedId?tt(t,e.instanceId.toString()):{}}},e.instanceId),le(T.Z,{className:ae().tcell,align:"right"},("guest"===e.userRole||"admin"===e.userRole&&e.id===N.id)&&le("div",null,e.userRole),"guest"!==e.userRole&&e.id!==N.id&&le(p.Fragment,null,le("p",null,"  ",e.userRole&&e.userRole," "),le(I.Z,{className:t.formControl},le(m.Z,{value:We[e.userRole],onChange:function(t){return function(e,t){var n={};t&&(at(t,e.target.value),n[t]=e.target.value,Me(e.target.value),He(se(se({},We),n)))}(t,e.id)},className:t.selectEmpty},le(g.Z,{key:"user",value:"user"},"User"),le(g.Z,{key:"admin",value:"admin"},"Admin"))))),le(T.Z,{className:ae().tcell,align:"right"},e.partyId))}))),"instances"===De&&le(te.Z,{className:ae().thead},H(et,W(ne,pe)).slice(Pe*xe,Pe*xe+xe).map((function(e,t){return le(J.Z,{className:ae().trow,style:{color:"black !important"},tabIndex:-1,key:e.id},le(T.Z,{className:ae().tcell,component:"th",id:e.id.toString(),align:"right",scope:"row",padding:"none"},e.id),le(T.Z,{className:ae().tcell,align:"right"},e.ipAddress),le(T.Z,{className:ae().tcell,align:"right"},e.gsId),le(T.Z,{className:ae().tcell,align:"right"},e.serverAddress),le(T.Z,{className:ae().tcellSelectable,align:"center",onClick:function(t){return function(e,t){var n=Je.find((function(e){return e.id===t}));j(n),R(!0)}(0,e.id.toString())}},le("p",{className:ae().currentUser},e.currentUsers)),le(T.Z,{className:ae().tcell,align:"right"},e.locationId))}))))),le("div",{className:ae().tableFooter},"locations"!==De&&le("div",null),le(G,{rowsPerPageOptions:[P.pg],component:"div",count:Qe,rowsPerPage:xe,page:Pe,onChangePage:function(e,t){var n=Pe<t?"increment":"decrement";switch(De){case"locations":c(n);break;case"users":v(n);break;case"instances":f(n)}Ie(t)},onChangeRowsPerPage:function(e){Re(parseInt(e.target.value,10)),Ie(0)},className:ae().tablePagination})),le(ie.Z,{editing:D,location:_,open:S,handleClose:function(e){U(!1),E(!1),B(Z)}}),le(oe.Z,{instance:L,open:x,handleClose:function(e){console.log("handleInstanceClosed"),R(!1),j(k)}})))})))}}]);