(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,n,o){var r=o(550),t=o(19),d=o(522),s=o(574);e.exports=s.extend(d,{renderDecorate:function(){u.call(this,t.getCurrentSound())},onCurrentSoundChange:function(e){u.call(this,e.current)}});function u(e){var n=this.subviews.sound;!e||n&&n.model===e||(n&&n._dispose(),n=this.addSubview(new r({resource_id:e.id,resource_type:"sound"}),"sound"),this.getSoundContainer().append(n.el),n.render())}}}]);
//# sourceMappingURL=http://ent/web-sourcemaps/widget-4-8ad871521d87.js.map