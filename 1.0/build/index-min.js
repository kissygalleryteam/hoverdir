/*!build time : 2014-03-08 11:39:30 PM*/
KISSY.add("gallery/hoverdir/1.0/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a),b._init()}var e=b.all;return a.extend(d,c,{_init:function(){this._loadEvents()},_loadEvents:function(){var a=this,b=a.get("el"),c=a.get("hoverElCls");b.on("mouseenter.hoverdir, mouseleave.hoverdir",function(b){var d=e(this),f=b.type,g=d.one("."+c),h=a._getDir(d,{x:b.pageX,y:b.pageY}),i=a._getClasses(h);g.attr("class",c),"mouseenter"===f?(g.hide().addClass(i.from),clearTimeout(a.tmhover),a.tmhover=setTimeout(function(){g.show().addClass("ks-animate").addClass(i.to)},a.get("hoverDelay"))):(g.addClass("ks-animate"),clearTimeout(a.tmhover),g.addClass(i.from))})},_getDir:function(a,b){var c=a.width(),d=a.height(),e=(b.x-a.offset().left-c/2)*(c>d?d/c:1),f=(b.y-a.offset().top-d/2)*(d>c?c/d:1),g=Math.round((Math.atan2(f,e)*(180/Math.PI)+180)/90+3)%4;return g},_getClasses:function(a){var b,c,d=this.get("reverse");switch(a){case 0:b=d?"ks-slideFromBottom":"ks-slideFromTop",c="ks-slideTop";break;case 1:b=d?"ks-slideFromLeft":"ks-slideFromRight",c="ks-slideLeft";break;case 2:b=d?"ks-slideFromTop":"ks-slideFromBottom",c="ks-slideTop";break;case 3:b=d?"ks-slideFromRight":"ks-slideFromLeft",c="ks-slideLeft"}return{from:b,to:c}}},{ATTRS:{el:{value:null,setter:function(a){return b.one(a)}},hoverDelay:{value:0},reverse:{value:!1},hoverElCls:{value:"hover-element"}}}),d},{requires:["node","base"]});