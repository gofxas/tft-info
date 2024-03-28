import{j as C,r as N,c as B}from"./race-CDtl1AnO.js";import{_ as g,o as i,c as p,a as o,t as u,n as U,b as a,w as l,F as v,e as y,r as _,d,f as V}from"./index-C4p3AlTk.js";const z={name:"chess-item",props:{data:{default:()=>({}),type:Object},display_info:{default:!1,type:Boolean}}},w=["src","alt"],F=["src","alt"],T={class:"chess-title"},D={class:"chess-displayname"},J={class:"chess-displayname"},R={class:"info-box"},E={class:"info-box-item"},L=["src"];function O(n,t,c,f,s,r){return i(),p("div",{class:U(["chess-item","cost1","cost"+c.data.price])},[o("img",{class:"chess-cover",src:n.baseimg+c.data.TFTID+".jpg",alt:c.data.title},null,8,w),o("img",{class:"chess-avatar",src:n.headimg+c.data.name,alt:c.data.title},null,8,F),o("span",T,u(c.data.title),1),o("span",D,u(c.data.displayName),1),o("span",J,"价格："+u(c.data.price),1),o("div",R,[o("div",E,[o("img",{src:c.data.skillImage},null,8,L),o("p",null,u(c.data.skillIntroduce),1)])])],2)}const S=g(z,[["render",O],["__scopeId","data-v-edf7d099"]]),q={name:"Chess",components:{ChessItems:S},data(){return{activeName:"",display_info:!1,Job:C,Race:N,job_checked:[],race_checked:[],price_checked:["1","2","3","4","5"]}},computed:{Chess(){return B.sort((n,t)=>n.price-t.price).filter(n=>{let t=n.raceIds.split(","),c=this.race_checked,f=n.jobIds.split(","),s=this.job_checked;return t.filter(r=>c.includes(r)).length||f.filter(r=>s.includes(r)).length||this.price_checked.includes(n.price)})}}},A={class:"chess-wrapper"},G={style:{display:"flex","align-items":"center",gap:"10px"}},H={class:"chess-layer"};function K(n,t,c,f,s,r){const x=_("router-link"),h=_("el-checkbox"),k=_("el-checkbox-group"),b=_("el-collapse-item"),m=_("el-checkbox-button"),I=_("el-collapse"),j=_("ChessItems");return i(),p("div",A,[a(I,{class:"chess-filter",modelValue:s.activeName,"onUpdate:modelValue":t[4]||(t[4]=e=>s.activeName=e),accordion:""},{default:l(()=>[o("div",G,[a(x,{to:"/"},{default:l(()=>[d("首页")]),_:1}),a(h,{modelValue:s.display_info,"onUpdate:modelValue":t[0]||(t[0]=e=>s.display_info=e)},{default:l(()=>[d("是否显示属性资料？")]),_:1},8,["modelValue"])]),a(b,{title:"职业",name:"1"},{default:l(()=>[a(k,{modelValue:s.job_checked,"onUpdate:modelValue":t[1]||(t[1]=e=>s.job_checked=e),size:"small"},{default:l(()=>[(i(!0),p(v,null,y(s.Job,e=>(i(),V(h,{key:e.jobId,value:e.jobId},{default:l(()=>[d(u(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(b,{title:"特质",name:"2"},{default:l(()=>[a(k,{modelValue:s.race_checked,"onUpdate:modelValue":t[2]||(t[2]=e=>s.race_checked=e),size:"small"},{default:l(()=>[(i(!0),p(v,null,y(s.Race,e=>(i(),V(h,{key:e.raceId,value:e.raceId},{default:l(()=>[d(u(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(b,{title:"价格",name:"3"},{default:l(()=>[a(k,{modelValue:s.price_checked,"onUpdate:modelValue":t[3]||(t[3]=e=>s.price_checked=e),size:"small"},{default:l(()=>[a(m,{value:"1"},{default:l(()=>[d("1金币")]),_:1}),a(m,{value:"2"},{default:l(()=>[d("2金币")]),_:1}),a(m,{value:"3"},{default:l(()=>[d("3金币")]),_:1}),a(m,{value:"4"},{default:l(()=>[d("4金币")]),_:1}),a(m,{value:"5"},{default:l(()=>[d("5金币")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),o("div",H,[(i(!0),p(v,null,y(r.Chess,e=>(i(),V(j,{display_info:s.display_info,key:e.chessId,data:e},null,8,["display_info","data"]))),128))])])}const Q=g(q,[["render",K],["__scopeId","data-v-d2a5906d"]]);export{Q as default};
