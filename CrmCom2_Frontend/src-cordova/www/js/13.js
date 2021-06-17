(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0654":function(e){e.exports=JSON.parse('[{"id":1,"description":"Cliente","type":"customer","searchFields":["firstname","lastname","codfis","company","vatcode","email","phone","pec"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"Customer"},{"id":2,"type":"contract","description":"Contratto","searchFields":["description"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"Contract"},{"id":3,"description":"Servizio","type":"contractService","searchFields":["description"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"ServiceContract"},{"id":4,"description":"Modello di servizio","type":"serviceTemplate","searchFields":["description"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"ServiceTemplate"},{"id":5,"type":"deviceCustomer","description":"Dispositivo cliente","searchFields":["description","ipv4","ipv6","mac"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"DeviceCustomer"},{"id":6,"type":"deviceBackbone","description":"Dispositivo di backbone","searchFields":["description","ipv4","ipv6","mac"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"DeviceBackbone"},{"id":7,"type":"siteBackbone","description":"Siti backbone","searchFields":["description"],"findByFieldUrl":"/adminarea/find_obj_by_field","UiComponent":"SiteBackbone"}]')},"217d":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"ObjectsQueryAndExport"}},[o("h5",[e._v("Ricerche ed esportazione dati")]),e.customer.id?o("h5",[e._v("Cliente selezionato: "+e._s(e.customerDescription))]):e._e(),e.contract.id?o("h5",[e._v("Contratto selezionato: "+e._s(e.contract.description))]):e._e(),o("q-form",{on:{submit:function(t){return t.preventDefault(),e.search()}}},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.objType,expression:"objType"}],staticClass:"form-control form-control-user",attrs:{id:"objType",name:"objType",placeorder:"Tipo di oggetto","aria-label":"Tipo di oggetto"},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.objType=t.target.multiple?o:o[0]},e.changeTypeObject]}},e._l(e.objTypes,(function(t){return o("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.description))])})),0),o("q-input",{attrs:{label:"Ricerca"},model:{value:e.txtSearch,callback:function(t){e.txtSearch=t},expression:"txtSearch"}})],1),o("q-table",{attrs:{data:e.objectsFound,columns:e.columnsTableFields,pagination:e.initialPagination,filter:e.txtFilter},scopedSlots:e._u([{key:"top-right",fn:function(){return[o("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Ricerca"},model:{value:e.txtFilter,callback:function(t){e.txtFilter=t},expression:"txtFilter"}},[o("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1)]},proxy:!0},{key:"header",fn:function(t){return[o("q-tr",{attrs:{props:t}},[o("q-th",{attrs:{"auto-width":""}}),e._l(t.cols,(function(i){return o("q-th",{key:i.name,attrs:{props:t}},[e._v(e._s(i.label))])}))],2)]}},{key:"body",fn:function(t){return[o("q-tr",{class:t.row.state,attrs:{props:t}},[o("q-td",{attrs:{"auto-width":""}},[o("img",{staticStyle:{width:"32px",height:"32px"},attrs:{src:"/img/actions/open.png"},on:{click:function(o){return e.openObject(t.row)}}}),o("img",{staticStyle:{width:"32px",height:"32px"},attrs:{src:"/img/actions/link.png"},on:{click:function(o){return e.connectObject(t.row)}}})]),e._l(t.cols,(function(i){return o("q-td",{key:i.name,attrs:{props:t}},[e._v(e._s(i.value))])}))],2)]}}])})],1)},n=[],s=(o("fb6a"),o("2f62")),c=o("0654"),r={data(){return{objType:{},objTypes:c,txtSearch:"",txtFilter:"",objectsFound:[],initialPagination:{sortBy:"desc",descending:!1,page:2,rowsPerPage:10},columnsTableFields:[]}},methods:{changeTypeObject(){var e=this.objType.searchFields.slice();this.columnsTableFields=[],this.columnsTableFields.push({name:"actions",label:"Azioni",field:"actions"}),e.forEach(e=>{var t={name:e,label:e,field:e};console.log(t),this.columnsTableFields.push(t)})},openObject(e){if(this.objType){const t=this.objType.UiComponent;this.$store.commit("change"+t,e),this.$router.push("/"+t)}},connectObject(e){if(console.log("Connect object"),this.objType){console.log(this.objType),"deviceCustomer"===this.objType.type&&(this.contract&&(e.contractId=this.contract.id),this.customer&&(e.customerId=this.customer.id),console.log(e),console.log(this.customer),console.log(this.contract));const t="/"+this.objType.UiComponent;console.log("Got "+t),console.log(e),this.$store.commit("change"+uiComp,e),this.$router.push(t)}},search(){if(this.objType){const e=this.objType.findByFieldUrl,t={type:this.objType.type,fields:this.objType.searchFields,value:this.txtSearch};this.$axios.post(e,{searchObj:t}).then(e=>{"OK"===e.data.status&&(e.data.results.forEach(e=>{this.objectsFound.push(e)}),this.makeToast(e.data.msg),this.txtFilter=this.txtSearch)}).catch(e=>{console.log(e)})}},makeToast(e){this.$q.notify({color:"green-4",textColor:"white",icon:"info",message:e})}},computed:Object(s["b"])({user:"user",customer:"customer",contract:"contract",service:"service",deviceCustomer:"deviceCustomer",deviceBackbone:"deviceBackbone",customerDescription(){const e=this.customer;return e.vatcode&&""!==e.vatcode?e.company:e.lastname+" "+e.firstname}})},a=r,l=o("2877"),d=o("0378"),p=o("27f9"),u=o("eaac"),h=o("0016"),m=o("bd08"),b=o("357e"),f=o("db86"),y=o("eebe"),v=o.n(y),_=Object(l["a"])(a,i,n,!1,null,"6019956c",null);t["default"]=_.exports;v()(_,"components",{QForm:d["a"],QInput:p["a"],QTable:u["a"],QIcon:h["a"],QTr:m["a"],QTh:b["a"],QTd:f["a"]})}}]);