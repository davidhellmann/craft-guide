(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{7:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(2),d=n(14),c=n(15);o.a.component("drag",d.Drag),o.a.component("drop",d.Drop),new o.a({el:"#editor",components:{editor:function(){return Promise.all([n.e(1),n.e(9),n.e(5)]).then(n.t.bind(null,34,7))}},delimiters:["${","}"],data:function(){return{access:!1,content:!1,contentSource:!1,componentInfo:!1,editor:!1,editorHeight:300,editorStyles:{},editorTheme:"tomorrow_night_bright",format:!1,template:!1,templates:!1}},computed:{contentJson:function(){return this.content}},methods:{componentClicked:function(t){Object(i.c)("Component clicked!",t),this.componentInfo=t},componentDroppedToTextField:function(t){Object(i.c)("Component dropped to Text Field",t.code[this.format]),t.code[this.format]&&this.$refs.guideEditor.editor.insert(t.code[this.format])},contentSourceUpdated:function(){document.getElementById("main").setAttribute("data-content-source",this.contentSource)},convertTemplateToFieldContent:function(){this.templates[this.template]&&(this.content=this.templates[this.template],this.contentSource="field",document.getElementById("contentSource").value=this.contentSource,this.contentSourceUpdated(),this.format=this.template.endsWith(".md")?"markdown":"twig",document.getElementById("format").value=this.format,this.formatUpdated())},editorInit:function(){n(28),n(29),n(31),n(32),n(33)},formatUpdated:function(){document.getElementById("main").setAttribute("data-format",this.format)},updateEditorStyles:function(){document.getElementById("main");var t=document.getElementById("global-header"),e=document.getElementById("header").offsetHeight+t.offsetHeight-68,n=document.getElementById("tabs");n&&(e+=n.offsetHeight-14),this.editorHeight=800,this.editorStyles={"--editor-height":this.editorHeight+"px","--editor-offset-top":e+"px"},Object(i.b)("Editor Styles",this.editorStyles)}},mounted:function(){var t=this,e=document.getElementById("content");Object(i.a)(e,"guide_editor");var n=window.guideEditorConfig;this.content=n.content,this.format=n.format,this.templates=n.templates,Object(i.c)("Editor Config",n),this.access=document.getElementById("access").value,this.contentSource=document.getElementById("contentSource").value,this.contentSourceUpdated(),this.format=document.getElementById("format").value,this.formatUpdated(),this.template=document.getElementById("template").value,document.getElementById("access").addEventListener("change",(function(e){t.access=e.target.value})),document.getElementById("contentSource").addEventListener("change",(function(e){t.contentSource=e.target.value,t.contentSourceUpdated()})),document.getElementById("format").addEventListener("change",(function(e){t.format=e.target.value,t.formatUpdated()})),document.getElementById("template").addEventListener("change",(function(e){t.template=e.target.value})),new c.a((function(e,n){t.updateEditorStyles()})).observe(document.getElementById("main"))},$nextTick:function(){this.editor=this.$refs.guideEditor.editor}}),Object(i.c)("Guide Editor")}}]);