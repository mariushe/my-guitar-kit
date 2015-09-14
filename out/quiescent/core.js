// Compiled by ClojureScript 1.7.48 {}
goog.provide('quiescent.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Within a component lifecycle function, is be bound to the underlying ReactJS instance.
 */
quiescent.core._STAR_component_STAR_ = null;
/**
 * Mapping of public lifecycle API to internal ReactJS API.
 */
quiescent.core.lifecycle_impls = (function (){var basic = (function (impl){
return (function (){
var this__23502__auto__ = this;
var _STAR_component_STAR_27690 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__23502__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27690;
}});
});
var with_old_value = ((function (basic){
return (function (impl){
return ((function (basic){
return (function (prev_props,_){
var this__23502__auto__ = this;
var _STAR_component_STAR_27691 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__23502__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,prev_props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27691;
}});
;})(basic))
});})(basic))
;
var with_nil_old_value = ((function (basic,with_old_value){
return (function (impl){
return ((function (basic,with_old_value){
return (function (){
var this__23502__auto__ = this;
var _STAR_component_STAR_27692 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__23502__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,null,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27692;
}});
;})(basic,with_old_value))
});})(basic,with_old_value))
;
var with_callback = ((function (basic,with_old_value,with_nil_old_value){
return (function (impl){
return ((function (basic,with_old_value,with_nil_old_value){
return (function (cb){
var this__23502__auto__ = this;
var _STAR_component_STAR_27693 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__23502__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),cb,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27693;
}});
;})(basic,with_old_value,with_nil_old_value))
});})(basic,with_old_value,with_nil_old_value))
;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),basic], null),new cljs.core.Keyword(null,"on-update","on-update",1680216496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),with_old_value], null),new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),basic], null),new cljs.core.Keyword(null,"on-render","on-render",2096729391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),with_old_value,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),with_nil_old_value], null),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillEnter","componentWillEnter",395203025),with_callback], null),new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidEnter","componentDidEnter",1501589550),basic], null),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillLeave","componentWillLeave",905096086),with_callback], null),new cljs.core.Keyword(null,"did-leave","did-leave",1577156642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidLeave","componentDidLeave",-923423498),basic], null)], null);
})();
quiescent.core.build_lifecycle_impls = (function quiescent$core$build_lifecycle_impls(opts_map){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,(function (_,___$1){
throw "Component definition should not provide handlers for both :on-render and (:on-mount | :on-update).";
})),cljs.core.map.call(null,(function (p__27704){
var vec__27705 = p__27704;
var key = cljs.core.nth.call(null,vec__27705,(0),null);
var impl = cljs.core.nth.call(null,vec__27705,(1),null);
var temp__4425__auto__ = quiescent.core.lifecycle_impls.call(null,key);
if(cljs.core.truth_(temp__4425__auto__)){
var impl_map = temp__4425__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17222__auto__ = ((function (impl_map,temp__4425__auto__,vec__27705,key,impl){
return (function quiescent$core$build_lifecycle_impls_$_iter__27706(s__27707){
return (new cljs.core.LazySeq(null,((function (impl_map,temp__4425__auto__,vec__27705,key,impl){
return (function (){
var s__27707__$1 = s__27707;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27707__$1);
if(temp__4425__auto____$1){
var s__27707__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27707__$2)){
var c__17220__auto__ = cljs.core.chunk_first.call(null,s__27707__$2);
var size__17221__auto__ = cljs.core.count.call(null,c__17220__auto__);
var b__27709 = cljs.core.chunk_buffer.call(null,size__17221__auto__);
if((function (){var i__27708 = (0);
while(true){
if((i__27708 < size__17221__auto__)){
var vec__27712 = cljs.core._nth.call(null,c__17220__auto__,i__27708);
var method = cljs.core.nth.call(null,vec__27712,(0),null);
var impl_ctor = cljs.core.nth.call(null,vec__27712,(1),null);
cljs.core.chunk_append.call(null,b__27709,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,impl_ctor.call(null,impl)], null));

var G__27714 = (i__27708 + (1));
i__27708 = G__27714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27709),quiescent$core$build_lifecycle_impls_$_iter__27706.call(null,cljs.core.chunk_rest.call(null,s__27707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27709),null);
}
} else {
var vec__27713 = cljs.core.first.call(null,s__27707__$2);
var method = cljs.core.nth.call(null,vec__27713,(0),null);
var impl_ctor = cljs.core.nth.call(null,vec__27713,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,impl_ctor.call(null,impl)], null),quiescent$core$build_lifecycle_impls_$_iter__27706.call(null,cljs.core.rest.call(null,s__27707__$2)));
}
} else {
return null;
}
break;
}
});})(impl_map,temp__4425__auto__,vec__27705,key,impl))
,null,null));
});})(impl_map,temp__4425__auto__,vec__27705,key,impl))
;
return iter__17222__auto__.call(null,impl_map);
})());
} else {
return null;
}
}),opts_map));
});
/**
 * Return a factory function that will create a ReactElement, using the provided function as the
 * 'render' method for a ReactJS component, which is created and instantiated behind-the-scenes.
 * 
 * The given render function should take a single immutable value as its first argument, and return
 * a single ReactElement. Additional arguments to the returned factory function are
 * /constant arguments/  which will be passed on as additional arguments to the  supplied render
 * function, but will *not* be included in any calculations regarding whether the element should
 * re-render. As such, they are suitable for values that will remain constant for  the lifetime of
 * the rendered element, such as message channels and configuration objects.
 * 
 * The optional 'opts' argument is a map which contains additional configuration keys:
 * 
 * :keyfn - a single-argument function which is invoked at component construction time. It is
 * passed the component's value, and returns the ReactJS key used to uniquely identify this
 * component among its children.
 * 
 * :name - the name of the element, used for debugging purposes.
 * 
 * :on-mount - A function which will be invoked once, immediately after initial rendering occurs.
 * It is passed the DOM node, the value and any constant args passed to the render fn. This maps
 * to the 'componentDidMount' lifecycle method in ReactJS.
 * 
 * :on-update - A function which will be invoked immediately after an update is flushed to the DOM,
 * but not on the initial render. It is is passed the underlying DOM node, the value,
 * the _old_ value, and any constant args passed to the render fn. This maps to the
 * 'componentDidUpdate' lifecycle method in ReactJS.
 * 
 * :on-unmount - A function which will be invoked immediately before a the component is unmounted
 * from the DOM. It is passed the underlying DOM node, the most recent value and the most recent
 * constant args passed to the render fn. This maps to the 'componentWillUnmmount' lifecycle
 * method in ReactJS.
 * 
 * :on-render - A function which will be invoked immediately after the DOM is updated, both on the
 * initial render and any subsequent updates. It is is passed the underlying DOM node, the
 * value, the _old_  value (which will be nil in the case of the initial render) and any constant
 * args passed to the render fn. This maps to both the 'componentDidMount' and
 * 'componentDidUpdate' lifecycle methods in ReactJS.
 * 
 * :will-enter - A function invoked whenever this component is added to a ReactTransitionGroup.
 * Invoked at the same time as :onMount. Is passed the underlying DOM node, a callback
 * function, the value and any constant args passed to the render fn. Maps to the
 * 'componentWillEnter' lifecycle  method in ReactJS. See the ReactJS documentation at
 * http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 * :did-enter - A function invoked after the callback provided to :willEnter is called. It is
 * passed the underlying DOM node, the value and any constant args passed to the render fn. Maps
 * to the 'componentDidEnter' lifecycle method in ReactJS. See the ReactJS documentation at
 * http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 * :will-leave - A function invoked whenever this component is removed from a ReactTransitionGroup.
 * Is passed the underlying DOM node, a callback function, the most recent value and the most
 * recent constant args passed to the render fn. The DOM node will not be removed until the
 * callback is called. Maps to the 'componentWillEnter' lifecycle method in ReactJS. See the
 * ReactJS documentation at http://facebook.github.io/react/docs/animation.html for full
 * documentation of the behavior.
 * 
 * :did-leave - A function invoked after the callback provided to :willLeave is called (at the same
 * time as :onUnMount). Is passed the underlying DOM node, the most recent value and the most
 * recent constant args passed to the render fn. Maps to the 'componentDidLeave' lifecycle method
 * in ReactJS. See the ReactJS  documentation at
 * http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 * The *component* dynamic var will be bound to the underlying ReactJS component for all invocations
 * of the render function and invocations of functions defined in the opts map.
 */
quiescent.core.component = (function quiescent$core$component(){
var args27715 = [];
var len__17508__auto___27722 = arguments.length;
var i__17509__auto___27723 = (0);
while(true){
if((i__17509__auto___27723 < len__17508__auto___27722)){
args27715.push((arguments[i__17509__auto___27723]));

var G__27724 = (i__17509__auto___27723 + (1));
i__17509__auto___27723 = G__27724;
continue;
} else {
}
break;
}

var G__27717 = args27715.length;
switch (G__27717) {
case 1:
return quiescent.core.component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quiescent.core.component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27715.length)].join('')));

}
});

quiescent.core.component.cljs$core$IFn$_invoke$arity$1 = (function (renderer){
return quiescent.core.component.call(null,renderer,cljs.core.PersistentArrayMap.EMPTY);
});

quiescent.core.component.cljs$core$IFn$_invoke$arity$2 = (function (renderer,opts){
var impl = cljs.core.merge.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (next_props,_){
var this__23502__auto__ = this;
var _STAR_component_STAR_27718 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__23502__auto__;

try{return cljs.core.not_EQ_.call(null,quiescent.core._STAR_component_STAR_.props.value,next_props.value);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27718;
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this__23502__auto__ = this;
var _STAR_component_STAR_27719 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__23502__auto__;

try{return cljs.core.apply.call(null,renderer,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27719;
}})], null),quiescent.core.build_lifecycle_impls.call(null,opts));
var react_component = React.createClass(cljs.core.clj__GT_js.call(null,impl));
return ((function (impl,react_component){
return (function() { 
var G__27726__delegate = function (value,constant_args){
var props = {};
props.value = value;

props.constants = constant_args;

var temp__4425__auto___27727 = new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto___27727)){
var keyfn_27728 = temp__4425__auto___27727;
props.key = keyfn_27728.call(null,value);
} else {
}

return React.createElement(react_component,props);
};
var G__27726 = function (value,var_args){
var constant_args = null;
if (arguments.length > 1) {
var G__27729__i = 0, G__27729__a = new Array(arguments.length -  1);
while (G__27729__i < G__27729__a.length) {G__27729__a[G__27729__i] = arguments[G__27729__i + 1]; ++G__27729__i;}
  constant_args = new cljs.core.IndexedSeq(G__27729__a,0);
} 
return G__27726__delegate.call(this,value,constant_args);};
G__27726.cljs$lang$maxFixedArity = 1;
G__27726.cljs$lang$applyTo = (function (arglist__27730){
var value = cljs.core.first(arglist__27730);
var constant_args = cljs.core.rest(arglist__27730);
return G__27726__delegate(value,constant_args);
});
G__27726.cljs$core$IFn$_invoke$arity$variadic = G__27726__delegate;
return G__27726;
})()
;
;})(impl,react_component))
});

quiescent.core.component.cljs$lang$maxFixedArity = 2;
/**
 * Remove a mounted Element from the given DOM node.
 */
quiescent.core.unmount = (function quiescent$core$unmount(node){
return React.unmountComponentAtNode(node);
});
var factory_27731 = React.createFactory(React.addons.CSSTransitionGroup);
/**
 * Return a CSSTransitionGroup ReactElement, with the specified transition options and children.
 * Options must contain at least a :transitionName key.
 * 
 * Note that unlike DOM factories, children is a single argument containing a seq of children, not
 * a vararg.
 * 
 * See http://facebook.github.io/react/docs/animation.html for details on how CSSTransitionGroup
 * works.
 */
quiescent.core.CSSTransitionGroup = ((function (factory_27731){
return (function quiescent$core$CSSTransitionGroup(opts,children){
return factory_27731.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"children","children",-940561982),children)));
});})(factory_27731))
;
var factory_27732 = React.createFactory(React.addons.TransitionGroup);
/**
 * Return a TransitionGroup ReactElement, with the specified properties and children.
 * 
 * Note that unlike DOM factories, children is a single argument containing a seq of children, not
 * a vararg.
 * 
 * See http://facebook.github.io/react/docs/animation.html for details on how TransitionGroup
 * works.
 */
quiescent.core.TransitionGroup = ((function (factory_27732){
return (function quiescent$core$TransitionGroup(props,children){
return factory_27732.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982),children)));
});})(factory_27732))
;
/**
 * Wrapper component used to mix-in lifecycle access
 */
quiescent.core.WrapperComponent = React.createClass({"render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4425__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_27733 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27733;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_27734 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27734;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_27735 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27735;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4425__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_27736 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27736;
}} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_27737 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_27737;
}} else {
return null;
}
})});
var did_warn_27740 = cljs.core.atom.call(null,false);
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Create a wrapper function for a compoment implementing multiple
 * lifecycle functions. Lifecycle functions are specified as any number
 * of additional key-value pairs passed as arguments to this function.
 * 
 * Valid keys and values include:
 * 
 * :onUpdate - will call the provided function,
 * passing the rendered DOM node as a single arg
 * :onMount - will call the provided function,
 * passing the rendered DOM node as a single arg
 * :onWillUpdate - will call the provided function with no arguments
 * :onWillMount - will call the provided function with no arguments
 * :onWillUnmount - will call the provided function with no arguments
 */
quiescent.core.wrapper = ((function (did_warn_27740){
return (function quiescent$core$wrapper(){
var args__17515__auto__ = [];
var len__17508__auto___27741 = arguments.length;
var i__17509__auto___27742 = (0);
while(true){
if((i__17509__auto___27742 < len__17508__auto___27741)){
args__17515__auto__.push((arguments[i__17509__auto___27742]));

var G__27743 = (i__17509__auto___27742 + (1));
i__17509__auto___27742 = G__27743;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((1) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((1)),(0))):null);
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17516__auto__);
});})(did_warn_27740))
;

quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic = ((function (did_warn_27740){
return (function (child,kvs){
if(cljs.core.truth_(cljs.core.deref.call(null,did_warn_27740))){
} else {
cljs.core.reset_BANG_.call(null,did_warn_27740,true);

console.log("WARNING: Quiescent's wrapping functionality is deprecated. Please see the\n      release notes for v0.2. Instead, define lifecycle hooks at component creation time.");
}

var props = cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",876822573),child,kvs));
var temp__4425__auto___27744 = (child.props["key"]);
if(cljs.core.truth_(temp__4425__auto___27744)){
var key_27745 = temp__4425__auto___27744;
(props["key"] = key_27745);
} else {
}

return React.createElement(quiescent.core.WrapperComponent,props);
});})(did_warn_27740))
;

quiescent.core.wrapper.cljs$lang$maxFixedArity = (1);

quiescent.core.wrapper.cljs$lang$applyTo = ((function (did_warn_27740){
return (function (seq27738){
var G__27739 = cljs.core.first.call(null,seq27738);
var seq27738__$1 = cljs.core.next.call(null,seq27738);
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(G__27739,seq27738__$1);
});})(did_warn_27740))
;
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidUpdate lifecycle event.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_update = (function quiescent$core$on_update(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidMount lifecycle event.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_mount = (function quiescent$core$on_mount(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidMount AND the componentDidUpdate lifecycle events.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_render = (function quiescent$core$on_render(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillMount lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_mount = (function quiescent$core$on_will_mount(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillUpdate lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_update = (function quiescent$core$on_will_update(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillMount AND the componentWillUpdate lifecycle events.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_render = (function quiescent$core$on_will_render(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillUnmount lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_unmount = (function quiescent$core$on_will_unmount(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",-16104606),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Given an Element, immediately render it, rooted to the
 * specified DOM node.
 */
quiescent.core.render = (function quiescent$core$render(element,node){
return React.render(element,node);
});
/**
 * DEPRECATED: Use 'unmount' instead.
 */
quiescent.core.unmount_at_node = (function quiescent$core$unmount_at_node(node){
return quiescent.core.unmount.call(null,node);
});

//# sourceMappingURL=core.js.map