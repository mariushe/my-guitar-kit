// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23604__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23605__i = 0, G__23605__a = new Array(arguments.length -  0);
while (G__23605__i < G__23605__a.length) {G__23605__a[G__23605__i] = arguments[G__23605__i + 0]; ++G__23605__i;}
  args = new cljs.core.IndexedSeq(G__23605__a,0);
} 
return G__23604__delegate.call(this,args);};
G__23604.cljs$lang$maxFixedArity = 0;
G__23604.cljs$lang$applyTo = (function (arglist__23606){
var args = cljs.core.seq(arglist__23606);
return G__23604__delegate(args);
});
G__23604.cljs$core$IFn$_invoke$arity$variadic = G__23604__delegate;
return G__23604;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23607){
var map__23610 = p__23607;
var map__23610__$1 = ((((!((map__23610 == null)))?((((map__23610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23610):map__23610);
var message = cljs.core.get.call(null,map__23610__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23610__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16469__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16457__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16457__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16457__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19652__auto___23740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___23740,ch){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___23740,ch){
return (function (state_23714){
var state_val_23715 = (state_23714[(1)]);
if((state_val_23715 === (7))){
var inst_23710 = (state_23714[(2)]);
var state_23714__$1 = state_23714;
var statearr_23716_23741 = state_23714__$1;
(statearr_23716_23741[(2)] = inst_23710);

(statearr_23716_23741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (1))){
var state_23714__$1 = state_23714;
var statearr_23717_23742 = state_23714__$1;
(statearr_23717_23742[(2)] = null);

(statearr_23717_23742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (4))){
var inst_23678 = (state_23714[(7)]);
var inst_23678__$1 = (state_23714[(2)]);
var state_23714__$1 = (function (){var statearr_23718 = state_23714;
(statearr_23718[(7)] = inst_23678__$1);

return statearr_23718;
})();
if(cljs.core.truth_(inst_23678__$1)){
var statearr_23719_23743 = state_23714__$1;
(statearr_23719_23743[(1)] = (5));

} else {
var statearr_23720_23744 = state_23714__$1;
(statearr_23720_23744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (13))){
var state_23714__$1 = state_23714;
var statearr_23721_23745 = state_23714__$1;
(statearr_23721_23745[(2)] = null);

(statearr_23721_23745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (6))){
var state_23714__$1 = state_23714;
var statearr_23722_23746 = state_23714__$1;
(statearr_23722_23746[(2)] = null);

(statearr_23722_23746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (3))){
var inst_23712 = (state_23714[(2)]);
var state_23714__$1 = state_23714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23714__$1,inst_23712);
} else {
if((state_val_23715 === (12))){
var inst_23685 = (state_23714[(8)]);
var inst_23698 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23685);
var inst_23699 = cljs.core.first.call(null,inst_23698);
var inst_23700 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23699);
var inst_23701 = console.warn("Figwheel: Not loading code with warnings - ",inst_23700);
var state_23714__$1 = state_23714;
var statearr_23723_23747 = state_23714__$1;
(statearr_23723_23747[(2)] = inst_23701);

(statearr_23723_23747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (2))){
var state_23714__$1 = state_23714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23714__$1,(4),ch);
} else {
if((state_val_23715 === (11))){
var inst_23694 = (state_23714[(2)]);
var state_23714__$1 = state_23714;
var statearr_23724_23748 = state_23714__$1;
(statearr_23724_23748[(2)] = inst_23694);

(statearr_23724_23748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (9))){
var inst_23684 = (state_23714[(9)]);
var inst_23696 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23684,opts);
var state_23714__$1 = state_23714;
if(cljs.core.truth_(inst_23696)){
var statearr_23725_23749 = state_23714__$1;
(statearr_23725_23749[(1)] = (12));

} else {
var statearr_23726_23750 = state_23714__$1;
(statearr_23726_23750[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (5))){
var inst_23678 = (state_23714[(7)]);
var inst_23684 = (state_23714[(9)]);
var inst_23680 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23681 = (new cljs.core.PersistentArrayMap(null,2,inst_23680,null));
var inst_23682 = (new cljs.core.PersistentHashSet(null,inst_23681,null));
var inst_23683 = figwheel.client.focus_msgs.call(null,inst_23682,inst_23678);
var inst_23684__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23683);
var inst_23685 = cljs.core.first.call(null,inst_23683);
var inst_23686 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23684__$1,opts);
var state_23714__$1 = (function (){var statearr_23727 = state_23714;
(statearr_23727[(9)] = inst_23684__$1);

(statearr_23727[(8)] = inst_23685);

return statearr_23727;
})();
if(cljs.core.truth_(inst_23686)){
var statearr_23728_23751 = state_23714__$1;
(statearr_23728_23751[(1)] = (8));

} else {
var statearr_23729_23752 = state_23714__$1;
(statearr_23729_23752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (14))){
var inst_23704 = (state_23714[(2)]);
var state_23714__$1 = state_23714;
var statearr_23730_23753 = state_23714__$1;
(statearr_23730_23753[(2)] = inst_23704);

(statearr_23730_23753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (10))){
var inst_23706 = (state_23714[(2)]);
var state_23714__$1 = (function (){var statearr_23731 = state_23714;
(statearr_23731[(10)] = inst_23706);

return statearr_23731;
})();
var statearr_23732_23754 = state_23714__$1;
(statearr_23732_23754[(2)] = null);

(statearr_23732_23754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23715 === (8))){
var inst_23685 = (state_23714[(8)]);
var inst_23688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23689 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23685);
var inst_23690 = cljs.core.async.timeout.call(null,(1000));
var inst_23691 = [inst_23689,inst_23690];
var inst_23692 = (new cljs.core.PersistentVector(null,2,(5),inst_23688,inst_23691,null));
var state_23714__$1 = state_23714;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23714__$1,(11),inst_23692);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19652__auto___23740,ch))
;
return ((function (switch__19587__auto__,c__19652__auto___23740,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____0 = (function (){
var statearr_23736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23736[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__);

(statearr_23736[(1)] = (1));

return statearr_23736;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____1 = (function (state_23714){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_23714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e23737){if((e23737 instanceof Object)){
var ex__19591__auto__ = e23737;
var statearr_23738_23755 = state_23714;
(statearr_23738_23755[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23756 = state_23714;
state_23714 = G__23756;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__ = function(state_23714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____1.call(this,state_23714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___23740,ch))
})();
var state__19654__auto__ = (function (){var statearr_23739 = f__19653__auto__.call(null);
(statearr_23739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___23740);

return statearr_23739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___23740,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23757_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23757_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_23764 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23764){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23763 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23762,_STAR_print_newline_STAR_23763,base_path_23764){
return (function() { 
var G__23765__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23766__i = 0, G__23766__a = new Array(arguments.length -  0);
while (G__23766__i < G__23766__a.length) {G__23766__a[G__23766__i] = arguments[G__23766__i + 0]; ++G__23766__i;}
  args = new cljs.core.IndexedSeq(G__23766__a,0);
} 
return G__23765__delegate.call(this,args);};
G__23765.cljs$lang$maxFixedArity = 0;
G__23765.cljs$lang$applyTo = (function (arglist__23767){
var args = cljs.core.seq(arglist__23767);
return G__23765__delegate(args);
});
G__23765.cljs$core$IFn$_invoke$arity$variadic = G__23765__delegate;
return G__23765;
})()
;})(_STAR_print_fn_STAR_23762,_STAR_print_newline_STAR_23763,base_path_23764))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23763;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23762;
}}catch (e23761){if((e23761 instanceof Error)){
var e = e23761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23764], null));
} else {
var e = e23761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23764))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23768){
var map__23775 = p__23768;
var map__23775__$1 = ((((!((map__23775 == null)))?((((map__23775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23775):map__23775);
var opts = map__23775__$1;
var build_id = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23775,map__23775__$1,opts,build_id){
return (function (p__23777){
var vec__23778 = p__23777;
var map__23779 = cljs.core.nth.call(null,vec__23778,(0),null);
var map__23779__$1 = ((((!((map__23779 == null)))?((((map__23779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23779):map__23779);
var msg = map__23779__$1;
var msg_name = cljs.core.get.call(null,map__23779__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23778,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23778,map__23779,map__23779__$1,msg,msg_name,_,map__23775,map__23775__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23778,map__23779,map__23779__$1,msg,msg_name,_,map__23775,map__23775__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23775,map__23775__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23785){
var vec__23786 = p__23785;
var map__23787 = cljs.core.nth.call(null,vec__23786,(0),null);
var map__23787__$1 = ((((!((map__23787 == null)))?((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var msg = map__23787__$1;
var msg_name = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23786,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23789){
var map__23799 = p__23789;
var map__23799__$1 = ((((!((map__23799 == null)))?((((map__23799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23799):map__23799);
var on_compile_warning = cljs.core.get.call(null,map__23799__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23799__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23799,map__23799__$1,on_compile_warning,on_compile_fail){
return (function (p__23801){
var vec__23802 = p__23801;
var map__23803 = cljs.core.nth.call(null,vec__23802,(0),null);
var map__23803__$1 = ((((!((map__23803 == null)))?((((map__23803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23803):map__23803);
var msg = map__23803__$1;
var msg_name = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23802,(1));
var pred__23805 = cljs.core._EQ_;
var expr__23806 = msg_name;
if(cljs.core.truth_(pred__23805.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23806))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23805.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23806))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23799,map__23799__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,msg_hist,msg_names,msg){
return (function (state_24007){
var state_val_24008 = (state_24007[(1)]);
if((state_val_24008 === (7))){
var inst_23941 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24009_24050 = state_24007__$1;
(statearr_24009_24050[(2)] = inst_23941);

(statearr_24009_24050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (20))){
var inst_23969 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23969)){
var statearr_24010_24051 = state_24007__$1;
(statearr_24010_24051[(1)] = (22));

} else {
var statearr_24011_24052 = state_24007__$1;
(statearr_24011_24052[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (27))){
var inst_23981 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23982 = figwheel.client.heads_up.display_warning.call(null,inst_23981);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(30),inst_23982);
} else {
if((state_val_24008 === (1))){
var inst_23929 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23929)){
var statearr_24012_24053 = state_24007__$1;
(statearr_24012_24053[(1)] = (2));

} else {
var statearr_24013_24054 = state_24007__$1;
(statearr_24013_24054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (24))){
var inst_23997 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24014_24055 = state_24007__$1;
(statearr_24014_24055[(2)] = inst_23997);

(statearr_24014_24055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (4))){
var inst_24005 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24007__$1,inst_24005);
} else {
if((state_val_24008 === (15))){
var inst_23957 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23958 = figwheel.client.format_messages.call(null,inst_23957);
var inst_23959 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23960 = figwheel.client.heads_up.display_error.call(null,inst_23958,inst_23959);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(18),inst_23960);
} else {
if((state_val_24008 === (21))){
var inst_23999 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24015_24056 = state_24007__$1;
(statearr_24015_24056[(2)] = inst_23999);

(statearr_24015_24056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (31))){
var inst_23988 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(34),inst_23988);
} else {
if((state_val_24008 === (32))){
var state_24007__$1 = state_24007;
var statearr_24016_24057 = state_24007__$1;
(statearr_24016_24057[(2)] = null);

(statearr_24016_24057[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (33))){
var inst_23993 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24017_24058 = state_24007__$1;
(statearr_24017_24058[(2)] = inst_23993);

(statearr_24017_24058[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (13))){
var inst_23947 = (state_24007[(2)]);
var inst_23948 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23949 = figwheel.client.format_messages.call(null,inst_23948);
var inst_23950 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23951 = figwheel.client.heads_up.display_error.call(null,inst_23949,inst_23950);
var state_24007__$1 = (function (){var statearr_24018 = state_24007;
(statearr_24018[(7)] = inst_23947);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(14),inst_23951);
} else {
if((state_val_24008 === (22))){
var inst_23971 = figwheel.client.heads_up.clear.call(null);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(25),inst_23971);
} else {
if((state_val_24008 === (29))){
var inst_23995 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24019_24059 = state_24007__$1;
(statearr_24019_24059[(2)] = inst_23995);

(statearr_24019_24059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (6))){
var inst_23937 = figwheel.client.heads_up.clear.call(null);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(9),inst_23937);
} else {
if((state_val_24008 === (28))){
var inst_23986 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23986)){
var statearr_24020_24060 = state_24007__$1;
(statearr_24020_24060[(1)] = (31));

} else {
var statearr_24021_24061 = state_24007__$1;
(statearr_24021_24061[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (25))){
var inst_23973 = (state_24007[(2)]);
var inst_23974 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23975 = figwheel.client.heads_up.display_warning.call(null,inst_23974);
var state_24007__$1 = (function (){var statearr_24022 = state_24007;
(statearr_24022[(8)] = inst_23973);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(26),inst_23975);
} else {
if((state_val_24008 === (34))){
var inst_23990 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24023_24062 = state_24007__$1;
(statearr_24023_24062[(2)] = inst_23990);

(statearr_24023_24062[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (17))){
var inst_24001 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24024_24063 = state_24007__$1;
(statearr_24024_24063[(2)] = inst_24001);

(statearr_24024_24063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (3))){
var inst_23943 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23943)){
var statearr_24025_24064 = state_24007__$1;
(statearr_24025_24064[(1)] = (10));

} else {
var statearr_24026_24065 = state_24007__$1;
(statearr_24026_24065[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (12))){
var inst_24003 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24027_24066 = state_24007__$1;
(statearr_24027_24066[(2)] = inst_24003);

(statearr_24027_24066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (2))){
var inst_23931 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23931)){
var statearr_24028_24067 = state_24007__$1;
(statearr_24028_24067[(1)] = (5));

} else {
var statearr_24029_24068 = state_24007__$1;
(statearr_24029_24068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (23))){
var inst_23979 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23979)){
var statearr_24030_24069 = state_24007__$1;
(statearr_24030_24069[(1)] = (27));

} else {
var statearr_24031_24070 = state_24007__$1;
(statearr_24031_24070[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (19))){
var inst_23966 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23967 = figwheel.client.heads_up.append_message.call(null,inst_23966);
var state_24007__$1 = state_24007;
var statearr_24032_24071 = state_24007__$1;
(statearr_24032_24071[(2)] = inst_23967);

(statearr_24032_24071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (11))){
var inst_23955 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23955)){
var statearr_24033_24072 = state_24007__$1;
(statearr_24033_24072[(1)] = (15));

} else {
var statearr_24034_24073 = state_24007__$1;
(statearr_24034_24073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (9))){
var inst_23939 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24035_24074 = state_24007__$1;
(statearr_24035_24074[(2)] = inst_23939);

(statearr_24035_24074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (5))){
var inst_23933 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(8),inst_23933);
} else {
if((state_val_24008 === (14))){
var inst_23953 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24036_24075 = state_24007__$1;
(statearr_24036_24075[(2)] = inst_23953);

(statearr_24036_24075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (26))){
var inst_23977 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24037_24076 = state_24007__$1;
(statearr_24037_24076[(2)] = inst_23977);

(statearr_24037_24076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (16))){
var inst_23964 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24007__$1 = state_24007;
if(cljs.core.truth_(inst_23964)){
var statearr_24038_24077 = state_24007__$1;
(statearr_24038_24077[(1)] = (19));

} else {
var statearr_24039_24078 = state_24007__$1;
(statearr_24039_24078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (30))){
var inst_23984 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24040_24079 = state_24007__$1;
(statearr_24040_24079[(2)] = inst_23984);

(statearr_24040_24079[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (10))){
var inst_23945 = figwheel.client.heads_up.clear.call(null);
var state_24007__$1 = state_24007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24007__$1,(13),inst_23945);
} else {
if((state_val_24008 === (18))){
var inst_23962 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24041_24080 = state_24007__$1;
(statearr_24041_24080[(2)] = inst_23962);

(statearr_24041_24080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24008 === (8))){
var inst_23935 = (state_24007[(2)]);
var state_24007__$1 = state_24007;
var statearr_24042_24081 = state_24007__$1;
(statearr_24042_24081[(2)] = inst_23935);

(statearr_24042_24081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19652__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19587__auto__,c__19652__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____0 = (function (){
var statearr_24046 = [null,null,null,null,null,null,null,null,null];
(statearr_24046[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__);

(statearr_24046[(1)] = (1));

return statearr_24046;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____1 = (function (state_24007){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24047){if((e24047 instanceof Object)){
var ex__19591__auto__ = e24047;
var statearr_24048_24082 = state_24007;
(statearr_24048_24082[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24083 = state_24007;
state_24007 = G__24083;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__ = function(state_24007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____1.call(this,state_24007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,msg_hist,msg_names,msg))
})();
var state__19654__auto__ = (function (){var statearr_24049 = f__19653__auto__.call(null);
(statearr_24049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_24049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,msg_hist,msg_names,msg))
);

return c__19652__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19652__auto___24146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___24146,ch){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___24146,ch){
return (function (state_24129){
var state_val_24130 = (state_24129[(1)]);
if((state_val_24130 === (1))){
var state_24129__$1 = state_24129;
var statearr_24131_24147 = state_24129__$1;
(statearr_24131_24147[(2)] = null);

(statearr_24131_24147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (2))){
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(4),ch);
} else {
if((state_val_24130 === (3))){
var inst_24127 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24129__$1,inst_24127);
} else {
if((state_val_24130 === (4))){
var inst_24117 = (state_24129[(7)]);
var inst_24117__$1 = (state_24129[(2)]);
var state_24129__$1 = (function (){var statearr_24132 = state_24129;
(statearr_24132[(7)] = inst_24117__$1);

return statearr_24132;
})();
if(cljs.core.truth_(inst_24117__$1)){
var statearr_24133_24148 = state_24129__$1;
(statearr_24133_24148[(1)] = (5));

} else {
var statearr_24134_24149 = state_24129__$1;
(statearr_24134_24149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (5))){
var inst_24117 = (state_24129[(7)]);
var inst_24119 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24117);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(8),inst_24119);
} else {
if((state_val_24130 === (6))){
var state_24129__$1 = state_24129;
var statearr_24135_24150 = state_24129__$1;
(statearr_24135_24150[(2)] = null);

(statearr_24135_24150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (7))){
var inst_24125 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24136_24151 = state_24129__$1;
(statearr_24136_24151[(2)] = inst_24125);

(statearr_24136_24151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (8))){
var inst_24121 = (state_24129[(2)]);
var state_24129__$1 = (function (){var statearr_24137 = state_24129;
(statearr_24137[(8)] = inst_24121);

return statearr_24137;
})();
var statearr_24138_24152 = state_24129__$1;
(statearr_24138_24152[(2)] = null);

(statearr_24138_24152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19652__auto___24146,ch))
;
return ((function (switch__19587__auto__,c__19652__auto___24146,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19588__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19588__auto____0 = (function (){
var statearr_24142 = [null,null,null,null,null,null,null,null,null];
(statearr_24142[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19588__auto__);

(statearr_24142[(1)] = (1));

return statearr_24142;
});
var figwheel$client$heads_up_plugin_$_state_machine__19588__auto____1 = (function (state_24129){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24143){if((e24143 instanceof Object)){
var ex__19591__auto__ = e24143;
var statearr_24144_24153 = state_24129;
(statearr_24144_24153[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24154 = state_24129;
state_24129 = G__24154;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19588__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19588__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19588__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19588__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___24146,ch))
})();
var state__19654__auto__ = (function (){var statearr_24145 = f__19653__auto__.call(null);
(statearr_24145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___24146);

return statearr_24145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___24146,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (1))){
var inst_24170 = cljs.core.async.timeout.call(null,(3000));
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(2),inst_24170);
} else {
if((state_val_24176 === (2))){
var inst_24172 = (state_24175[(2)]);
var inst_24173 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24175__$1 = (function (){var statearr_24177 = state_24175;
(statearr_24177[(7)] = inst_24172);

return statearr_24177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24175__$1,inst_24173);
} else {
return null;
}
}
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____0 = (function (){
var statearr_24181 = [null,null,null,null,null,null,null,null];
(statearr_24181[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__);

(statearr_24181[(1)] = (1));

return statearr_24181;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____1 = (function (state_24175){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24182){if((e24182 instanceof Object)){
var ex__19591__auto__ = e24182;
var statearr_24183_24185 = state_24175;
(statearr_24183_24185[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24186 = state_24175;
state_24175 = G__24186;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_24184 = f__19653__auto__.call(null);
(statearr_24184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_24184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24187){
var map__24194 = p__24187;
var map__24194__$1 = ((((!((map__24194 == null)))?((((map__24194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24194):map__24194);
var ed = map__24194__$1;
var formatted_exception = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24196_24200 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24197_24201 = null;
var count__24198_24202 = (0);
var i__24199_24203 = (0);
while(true){
if((i__24199_24203 < count__24198_24202)){
var msg_24204 = cljs.core._nth.call(null,chunk__24197_24201,i__24199_24203);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24204);

var G__24205 = seq__24196_24200;
var G__24206 = chunk__24197_24201;
var G__24207 = count__24198_24202;
var G__24208 = (i__24199_24203 + (1));
seq__24196_24200 = G__24205;
chunk__24197_24201 = G__24206;
count__24198_24202 = G__24207;
i__24199_24203 = G__24208;
continue;
} else {
var temp__4425__auto___24209 = cljs.core.seq.call(null,seq__24196_24200);
if(temp__4425__auto___24209){
var seq__24196_24210__$1 = temp__4425__auto___24209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24196_24210__$1)){
var c__17253__auto___24211 = cljs.core.chunk_first.call(null,seq__24196_24210__$1);
var G__24212 = cljs.core.chunk_rest.call(null,seq__24196_24210__$1);
var G__24213 = c__17253__auto___24211;
var G__24214 = cljs.core.count.call(null,c__17253__auto___24211);
var G__24215 = (0);
seq__24196_24200 = G__24212;
chunk__24197_24201 = G__24213;
count__24198_24202 = G__24214;
i__24199_24203 = G__24215;
continue;
} else {
var msg_24216 = cljs.core.first.call(null,seq__24196_24210__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24216);

var G__24217 = cljs.core.next.call(null,seq__24196_24210__$1);
var G__24218 = null;
var G__24219 = (0);
var G__24220 = (0);
seq__24196_24200 = G__24217;
chunk__24197_24201 = G__24218;
count__24198_24202 = G__24219;
i__24199_24203 = G__24220;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24221){
var map__24224 = p__24221;
var map__24224__$1 = ((((!((map__24224 == null)))?((((map__24224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);
var w = map__24224__$1;
var message = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16457__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16457__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16457__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24232 = cljs.core.seq.call(null,plugins);
var chunk__24233 = null;
var count__24234 = (0);
var i__24235 = (0);
while(true){
if((i__24235 < count__24234)){
var vec__24236 = cljs.core._nth.call(null,chunk__24233,i__24235);
var k = cljs.core.nth.call(null,vec__24236,(0),null);
var plugin = cljs.core.nth.call(null,vec__24236,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24238 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24232,chunk__24233,count__24234,i__24235,pl_24238,vec__24236,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24238.call(null,msg_hist);
});})(seq__24232,chunk__24233,count__24234,i__24235,pl_24238,vec__24236,k,plugin))
);
} else {
}

var G__24239 = seq__24232;
var G__24240 = chunk__24233;
var G__24241 = count__24234;
var G__24242 = (i__24235 + (1));
seq__24232 = G__24239;
chunk__24233 = G__24240;
count__24234 = G__24241;
i__24235 = G__24242;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24232);
if(temp__4425__auto__){
var seq__24232__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24232__$1)){
var c__17253__auto__ = cljs.core.chunk_first.call(null,seq__24232__$1);
var G__24243 = cljs.core.chunk_rest.call(null,seq__24232__$1);
var G__24244 = c__17253__auto__;
var G__24245 = cljs.core.count.call(null,c__17253__auto__);
var G__24246 = (0);
seq__24232 = G__24243;
chunk__24233 = G__24244;
count__24234 = G__24245;
i__24235 = G__24246;
continue;
} else {
var vec__24237 = cljs.core.first.call(null,seq__24232__$1);
var k = cljs.core.nth.call(null,vec__24237,(0),null);
var plugin = cljs.core.nth.call(null,vec__24237,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24247 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24232,chunk__24233,count__24234,i__24235,pl_24247,vec__24237,k,plugin,seq__24232__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24247.call(null,msg_hist);
});})(seq__24232,chunk__24233,count__24234,i__24235,pl_24247,vec__24237,k,plugin,seq__24232__$1,temp__4425__auto__))
);
} else {
}

var G__24248 = cljs.core.next.call(null,seq__24232__$1);
var G__24249 = null;
var G__24250 = (0);
var G__24251 = (0);
seq__24232 = G__24248;
chunk__24233 = G__24249;
count__24234 = G__24250;
i__24235 = G__24251;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args24252 = [];
var len__17508__auto___24255 = arguments.length;
var i__17509__auto___24256 = (0);
while(true){
if((i__17509__auto___24256 < len__17508__auto___24255)){
args24252.push((arguments[i__17509__auto___24256]));

var G__24257 = (i__17509__auto___24256 + (1));
i__17509__auto___24256 = G__24257;
continue;
} else {
}
break;
}

var G__24254 = args24252.length;
switch (G__24254) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24252.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17515__auto__ = [];
var len__17508__auto___24263 = arguments.length;
var i__17509__auto___24264 = (0);
while(true){
if((i__17509__auto___24264 < len__17508__auto___24263)){
args__17515__auto__.push((arguments[i__17509__auto___24264]));

var G__24265 = (i__17509__auto___24264 + (1));
i__17509__auto___24264 = G__24265;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((0) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17516__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24260){
var map__24261 = p__24260;
var map__24261__$1 = ((((!((map__24261 == null)))?((((map__24261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24261):map__24261);
var opts = map__24261__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24259){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24259));
});

//# sourceMappingURL=client.js.map