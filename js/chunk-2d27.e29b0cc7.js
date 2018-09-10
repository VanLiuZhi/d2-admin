(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d27"],{ab0e:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("自定义操作列")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,title:"D2 CRUD",rowHandle:n.rowHandle},on:{"custom-emit-1":n.handleCustomEvent}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},d=[],s=t("d05b"),o=t.n(s),l="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      title=\"D2 CRUD\"\n      :rowHandle=\"rowHandle\"\n      @custom-emit-1=\"handleCustomEvent\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      rowHandle: {\n        custom: [\n          {\n            text: '自定义按钮',\n            type: 'warning',\n            size: 'small',\n            emit: 'custom-emit-1'\n          }\n        ]\n      }\n    }\n  },\n  methods: {\n    handleCustomEvent ({index, row}) {\n      console.log(index)\n      console.log(row)\n    }\n  }\n}\n<\/script>",r={data:function(){return{doc:o.a,code:l,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],rowHandle:{custom:[{text:"自定义按钮",type:"warning",size:"small",emit:"custom-emit-1"}]}}},methods:{handleCustomEvent:function(n){var e=n.index,t=n.row;console.log(e),console.log(t)}}},i=r,m=t("2877"),c=Object(m["a"])(i,a,d,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},d05b:function(n,e){n.exports="通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `custom` 数组对象可以自定义模式，数组中每一个对象定义一个自定义按钮，对象属性支持所有的 `el-button` 属性， `emit` 属性定义了监听的事件，例如 `emit` 的值为 `custom-emit-1`，就在 `D2 Crud` 中监听 `custom-emit-1` 事件 监听的事件参数： `index` 是当前行的索引， `row` 是当前行的数据。代码如下：\n"}}]);
//# sourceMappingURL=chunk-2d27.e29b0cc7.js.map