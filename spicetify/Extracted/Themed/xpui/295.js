"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[295],{9108:(e,i,n)=>{n.d(i,{y:()=>X});n(46758),n(53321),n(86277);var a=n(50959),t=n(69736),l=n(36353),r=n(85648),d=n(73928),s=n(20069);const o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"internalLinkRecommenderTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NamedType",name:{kind:"Name",value:"SEORankingStrategy"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"seoRecommended"},arguments:[{kind:"Argument",name:{kind:"Name",value:"seoRecommendedInput"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GenericError"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}},{kind:"Field",name:{kind:"Name",value:"uri"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ilrTrackData"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"ilrTrackData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]};var c=n(35869),m=n(1142),u=n(48948),k=n(83242),v=n(51450),p=n(45321),y=n(24071),x=n(50540),g=n(95504),N=n(91530),S=n(87350);var b=n(11317),F=n(82579),h=n(27565),_=n(44724),j=n(52993),f=n(45438),T=n(3319),U=n(22527),C=n(74234),I=n(19968),P=n(10226),D=n(17676);var w=n(49857);var R=n(58301),E=n(42783),M=n(86696),A=n(32636),O=n(31360),$=n(63833),L=n(85357);const V="Z9Dr8PkXFtlO8KnnDcxp",B="Bm0LUMlhVIcF5qusgdUP",G="GIyB7JDkRwjtVL6PSBbg",Q="whTIka0YYAkqhqrs26Wa";var Z=n(11527);const W=a.memo((function({uri:e,name:i,imgUrl:n,artists:t,isExplicit:l,index:d,albumUri:s,contextUri:o,isPlayable:k,isMOGEFRestricted:p,totalMilliseconds:V,playcount:B,parentUri:W}){const{isActive:Y,isPlaying:q,triggerPlay:K,togglePlay:J,usePlayContextItem:X}=(0,U.n)({uri:e},{featureIdentifier:"ilr"}),z=(0,T._)(e),H=(0,E.k)(e,k),ee=t.map((e=>e.name)).join(r.ag.getSeparator()),{badges:ie,hasBadges:ne}=(0,C.r)({isMOGEFRestricted:p,downloadAvailability:z,isExplicit:l}),ae=t.map((e=>e.name)).join(r.ag.getSeparator()),te=(0,R.E)(),le=(({parentUri:e,destinationUrl:i})=>{const n=(0,x.g)(),t=(0,y.s4)(),l=(0,P.W6)(D.t2x),r=(0,c.v9)(S.n5),d=(0,c.v9)(N.rZ);return(0,a.useCallback)((async()=>{if(!(0,b.YF)(e))return;const a={category:"album_ilr_clicks_on_link",action:"click",variant:l,label:"dwp",os:(0,g.y)(),destination_url:i,context:`${e}|ilr`,country:r?d:"",sp_t:(0,v.vQ)("sp_t")};n?t.send((0,u.k)(a)):t.send((0,m.x)(a))}),[e,d,i,t,n,r,l])})({parentUri:W,destinationUrl:(0,b.EC)(e)?.toURL()}),re=(({parentUri:e,streamedUri:i,usePlayContextItem:n})=>{const a=(0,x.g)(),t=(0,y.s4)(),l=(0,P.W6)(D.t2x),r=(0,c.v9)(S.n5),d=(0,c.v9)(N.rZ),{isPlaying:s}=n({uri:i}),o=s?"play":"pause";return(0,w.y1)((()=>{if(!(0,b.YF)(e))return;const n={category:"album_ilr_streamed",action:a?"clicked":o,variant:l,label:"dwp",os:(0,g.y)(),context:`${e}|${i}`,country:r?d:"",sp_t:(0,v.vQ)("sp_t")};a?t.send((0,u.k)(n)):t.send((0,m.x)(n))}),1500)})({parentUri:W,streamedUri:e,usePlayContextItem:X});return(0,Z.jsx)(f.JL,{value:"row",index:d,children:(0,Z.jsx)(F._,{menu:(0,Z.jsx)(M.$,{uri:e,albumUri:s,artists:t,contextUri:o}),children:(0,Z.jsxs)(L.c,{uri:e,contextUri:o,isPlayable:H,onTriggerPlay:(e,i)=>{K({loggingParams:i}),re()},isActive:Y,index:d,ariaRowIndex:d,dragMetadata:{name:i,createdBy:ee},children:[(0,Z.jsxs)(O.vZ,{ariaColIndex:0,children:[(0,Z.jsx)(O.VG,{uri:e,src:n,onClick:(e,i)=>{J({loggingParams:i}),re()},isLocked:!1,isPlaying:q,isActive:Y,playAriaLabel:r.ag.get("tracklist.a11y.play",i,ee)}),(0,Z.jsxs)(O.vm,{children:[(0,Z.jsx)(A.G,{uri:e,enabled:te,className:G,onClick:le,children:(0,Z.jsx)(O.Wh,{titleText:i,children:i})}),ne&&(0,Z.jsxs)(O.g3,{children:[ie.download&&(0,Z.jsx)(h.G,{}),ie.explicit&&(0,Z.jsx)(_.N,{}),ie.nineteen&&(0,Z.jsx)(j.X,{className:Q,size:16})]}),(0,Z.jsx)(O.K9,{children:(0,Z.jsx)(O.T6,{artists:t})})]})]}),(0,Z.jsx)(O.UA,{ariaColIndex:1,children:(0,Z.jsx)($.B,{playcount:B})}),(0,Z.jsxs)(O.mU,{ariaColIndex:2,children:[(0,Z.jsx)(I.f,{uri:e}),(0,Z.jsx)(O.A$,{duration:V}),(0,Z.jsx)(O.Zv,{menu:(0,Z.jsx)(M.$,{uri:e,albumUri:s,contextUri:o,artists:t}),label:r.ag.get("more.label.track",i,ae)})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index));var Y=n(5629),q=n(36199);const K=e=>{return i=e,"NotFound"!==i?.__typename&&"GenericError"!==i?.__typename&&"Track"===e.__typename;var i},J=a.memo((function({inViewRef:e,subtitle:i,uri:n}){const{data:k}=(p={uri:n,strategy:d.JI.ContentOnly},(0,s.a)(o,p,F));var p,F;const h=k?.seoRecommended.items,_=(0,a.useMemo)((()=>h?.slice(0,Math.min(h.length,5))),[h]),j=(0,a.useCallback)((e=>({uri:"uri"in e.data?e.data.uri:""})),[]),f=(0,a.useMemo)((()=>[q.QD.TITLE_AND_ARTIST,q.QD.ALBUM,q.QD.DURATION]),[]),T=(e=>e?e.filter((e=>K(e.data))).map((e=>e.data.uri)):[])(h);(({uri:e,recommendationUris:i})=>{const n=(0,x.g)(),t=(0,c.v9)(S.n5),l=(0,c.v9)(N.rZ),r=(0,y.s4)(),d=(0,P.W6)(D.t2x),s=`${e}|${i}`;(0,a.useEffect)((()=>{const a={category:"album_ilr_exposures",action:"album_page_visit",variant:d,label:"dwp",os:(0,g.y)(),context:s,country:t?l:"",sp_t:(0,v.vQ)("sp_t")};(0,b.YF)(e)&&0!==i.length&&(n?r.send((0,u.k)(a)):r.send((0,m.x)(a)))}),[s,l,r,n,i.length,e,t,d])})({uri:n,recommendationUris:T});const U=(0,a.useCallback)(((e,i)=>{if(!K(e.data))return(0,Z.jsx)(a.Fragment,{});const t=e.data;return(0,Z.jsx)(W,{index:i,contextUri:n,uri:t.uri,name:t.name,totalMilliseconds:t.duration.totalMilliseconds,imgUrl:t.albumOfTrack?.coverArt?.sources[0]?.url,isPlayable:t.playability.playable,artists:t.artists.items.map((e=>({uri:e.uri,id:e.id,name:e.profile.name}))),albumUri:t?.albumOfTrack?.uri||"",isExplicit:t.contentRating?.label===d.KS.Explicit,isMOGEFRestricted:t.contentRating?.label===d.KS.NineteenPlus,playcount:parseInt(t.playcount||"0",10),parentUri:n},`${i}-${t.uri}`)}),[n]);return h?.length?(0,Z.jsxs)("div",{className:V,ref:e,children:[(0,Z.jsxs)("div",{className:B,children:[(0,Z.jsx)(t.x,{variant:"titleSmall",semanticColor:"textBase",children:r.ag.get("playlist.extender.recommended.title")}),(0,Z.jsx)(t.x,{variant:"bodySmall",paddingBottom:l.o7,children:i})]}),(0,Z.jsx)(q.Pv,{ariaLabel:r.ag.get("playlist.extender.recommended.title"),nrTracks:Math.min(h.length,5),rowPlaceholder:q.hU,tracks:_,renderRow:U,resolveItem:j,columns:f},"internal-link-recommender-track-list")]}):null})),X=e=>{const{uri:i,entityType:n}=e,a=(({entityType:e,uri:i})=>{const n=(0,x.g)(),a=(0,y.s4)(),t=(0,c.v9)(S.n5),l=(0,c.v9)(N.rZ);return()=>{(0,p.sQ)({metric_type:k.MetricTypes.COUNTER,what:"dwp-ilr-component-error",value:1,tags:{entityType:e}});const r={category:`${e}_ilr_render_error`,label:"dwp",os:(0,g.y)(),context:i,country:t?l:"",sp_t:(0,v.vQ)("sp_t")};n?a.send((0,u.k)(r)):a.send((0,m.x)(r))}})({entityType:n,uri:i});return(0,Z.jsx)(Y.L,{onError:a,children:(0,Z.jsx)(J,{...e})})}},66713:(e,i,n)=>{n.d(i,{k:()=>r});n(86277);var a=n(58206);const t="rTMkDBDp47Eo12ZEQv4U";var l=n(11527);const r=({copyrights:e,courtesyLine:i})=>{const n=(e||[]).map(((e,i)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let t;return t="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,l.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:`${t} ${n}`},i)}));return i&&n.unshift((0,l.jsx)(a.D,{as:"p",variant:"finale",dir:"auto",children:i},n.length)),(0,l.jsx)("div",{className:t,children:n})}}}]);
//# sourceMappingURL=295.js.map