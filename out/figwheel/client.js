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
var G__27748__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27749__i = 0, G__27749__a = new Array(arguments.length -  0);
while (G__27749__i < G__27749__a.length) {G__27749__a[G__27749__i] = arguments[G__27749__i + 0]; ++G__27749__i;}
  args = new cljs.core.IndexedSeq(G__27749__a,0);
} 
return G__27748__delegate.call(this,args);};
G__27748.cljs$lang$maxFixedArity = 0;
G__27748.cljs$lang$applyTo = (function (arglist__27750){
var args = cljs.core.seq(arglist__27750);
return G__27748__delegate(args);
});
G__27748.cljs$core$IFn$_invoke$arity$variadic = G__27748__delegate;
return G__27748;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27751){
var map__27754 = p__27751;
var map__27754__$1 = ((((!((map__27754 == null)))?((((map__27754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);
var message = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19652__auto___27884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27884,ch){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27884,ch){
return (function (state_27858){
var state_val_27859 = (state_27858[(1)]);
if((state_val_27859 === (7))){
var inst_27854 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27860_27885 = state_27858__$1;
(statearr_27860_27885[(2)] = inst_27854);

(statearr_27860_27885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (1))){
var state_27858__$1 = state_27858;
var statearr_27861_27886 = state_27858__$1;
(statearr_27861_27886[(2)] = null);

(statearr_27861_27886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (4))){
var inst_27822 = (state_27858[(7)]);
var inst_27822__$1 = (state_27858[(2)]);
var state_27858__$1 = (function (){var statearr_27862 = state_27858;
(statearr_27862[(7)] = inst_27822__$1);

return statearr_27862;
})();
if(cljs.core.truth_(inst_27822__$1)){
var statearr_27863_27887 = state_27858__$1;
(statearr_27863_27887[(1)] = (5));

} else {
var statearr_27864_27888 = state_27858__$1;
(statearr_27864_27888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (13))){
var state_27858__$1 = state_27858;
var statearr_27865_27889 = state_27858__$1;
(statearr_27865_27889[(2)] = null);

(statearr_27865_27889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (6))){
var state_27858__$1 = state_27858;
var statearr_27866_27890 = state_27858__$1;
(statearr_27866_27890[(2)] = null);

(statearr_27866_27890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (3))){
var inst_27856 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27858__$1,inst_27856);
} else {
if((state_val_27859 === (12))){
var inst_27829 = (state_27858[(8)]);
var inst_27842 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27829);
var inst_27843 = cljs.core.first.call(null,inst_27842);
var inst_27844 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27843);
var inst_27845 = console.warn("Figwheel: Not loading code with warnings - ",inst_27844);
var state_27858__$1 = state_27858;
var statearr_27867_27891 = state_27858__$1;
(statearr_27867_27891[(2)] = inst_27845);

(statearr_27867_27891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (2))){
var state_27858__$1 = state_27858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27858__$1,(4),ch);
} else {
if((state_val_27859 === (11))){
var inst_27838 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27868_27892 = state_27858__$1;
(statearr_27868_27892[(2)] = inst_27838);

(statearr_27868_27892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (9))){
var inst_27828 = (state_27858[(9)]);
var inst_27840 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27828,opts);
var state_27858__$1 = state_27858;
if(cljs.core.truth_(inst_27840)){
var statearr_27869_27893 = state_27858__$1;
(statearr_27869_27893[(1)] = (12));

} else {
var statearr_27870_27894 = state_27858__$1;
(statearr_27870_27894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (5))){
var inst_27828 = (state_27858[(9)]);
var inst_27822 = (state_27858[(7)]);
var inst_27824 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27825 = (new cljs.core.PersistentArrayMap(null,2,inst_27824,null));
var inst_27826 = (new cljs.core.PersistentHashSet(null,inst_27825,null));
var inst_27827 = figwheel.client.focus_msgs.call(null,inst_27826,inst_27822);
var inst_27828__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27827);
var inst_27829 = cljs.core.first.call(null,inst_27827);
var inst_27830 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27828__$1,opts);
var state_27858__$1 = (function (){var statearr_27871 = state_27858;
(statearr_27871[(9)] = inst_27828__$1);

(statearr_27871[(8)] = inst_27829);

return statearr_27871;
})();
if(cljs.core.truth_(inst_27830)){
var statearr_27872_27895 = state_27858__$1;
(statearr_27872_27895[(1)] = (8));

} else {
var statearr_27873_27896 = state_27858__$1;
(statearr_27873_27896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (14))){
var inst_27848 = (state_27858[(2)]);
var state_27858__$1 = state_27858;
var statearr_27874_27897 = state_27858__$1;
(statearr_27874_27897[(2)] = inst_27848);

(statearr_27874_27897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (10))){
var inst_27850 = (state_27858[(2)]);
var state_27858__$1 = (function (){var statearr_27875 = state_27858;
(statearr_27875[(10)] = inst_27850);

return statearr_27875;
})();
var statearr_27876_27898 = state_27858__$1;
(statearr_27876_27898[(2)] = null);

(statearr_27876_27898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27859 === (8))){
var inst_27829 = (state_27858[(8)]);
var inst_27832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27833 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27829);
var inst_27834 = cljs.core.async.timeout.call(null,(1000));
var inst_27835 = [inst_27833,inst_27834];
var inst_27836 = (new cljs.core.PersistentVector(null,2,(5),inst_27832,inst_27835,null));
var state_27858__$1 = state_27858;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27858__$1,(11),inst_27836);
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
});})(c__19652__auto___27884,ch))
;
return ((function (switch__19587__auto__,c__19652__auto___27884,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____0 = (function (){
var statearr_27880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27880[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__);

(statearr_27880[(1)] = (1));

return statearr_27880;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____1 = (function (state_27858){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27881){if((e27881 instanceof Object)){
var ex__19591__auto__ = e27881;
var statearr_27882_27899 = state_27858;
(statearr_27882_27899[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27900 = state_27858;
state_27858 = G__27900;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__ = function(state_27858){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____1.call(this,state_27858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19588__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27884,ch))
})();
var state__19654__auto__ = (function (){var statearr_27883 = f__19653__auto__.call(null);
(statearr_27883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27884);

return statearr_27883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27884,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27901_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27901_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27908 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27908){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27906 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27907 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27906,_STAR_print_newline_STAR_27907,base_path_27908){
return (function() { 
var G__27909__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27910__i = 0, G__27910__a = new Array(arguments.length -  0);
while (G__27910__i < G__27910__a.length) {G__27910__a[G__27910__i] = arguments[G__27910__i + 0]; ++G__27910__i;}
  args = new cljs.core.IndexedSeq(G__27910__a,0);
} 
return G__27909__delegate.call(this,args);};
G__27909.cljs$lang$maxFixedArity = 0;
G__27909.cljs$lang$applyTo = (function (arglist__27911){
var args = cljs.core.seq(arglist__27911);
return G__27909__delegate(args);
});
G__27909.cljs$core$IFn$_invoke$arity$variadic = G__27909__delegate;
return G__27909;
})()
;})(_STAR_print_fn_STAR_27906,_STAR_print_newline_STAR_27907,base_path_27908))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27907;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27906;
}}catch (e27905){if((e27905 instanceof Error)){
var e = e27905;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27908], null));
} else {
var e = e27905;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27908))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27912){
var map__27919 = p__27912;
var map__27919__$1 = ((((!((map__27919 == null)))?((((map__27919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919):map__27919);
var opts = map__27919__$1;
var build_id = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27919,map__27919__$1,opts,build_id){
return (function (p__27921){
var vec__27922 = p__27921;
var map__27923 = cljs.core.nth.call(null,vec__27922,(0),null);
var map__27923__$1 = ((((!((map__27923 == null)))?((((map__27923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923):map__27923);
var msg = map__27923__$1;
var msg_name = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27922,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27922,map__27923,map__27923__$1,msg,msg_name,_,map__27919,map__27919__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27922,map__27923,map__27923__$1,msg,msg_name,_,map__27919,map__27919__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27919,map__27919__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27929){
var vec__27930 = p__27929;
var map__27931 = cljs.core.nth.call(null,vec__27930,(0),null);
var map__27931__$1 = ((((!((map__27931 == null)))?((((map__27931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);
var msg = map__27931__$1;
var msg_name = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27930,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27933){
var map__27943 = p__27933;
var map__27943__$1 = ((((!((map__27943 == null)))?((((map__27943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27943):map__27943);
var on_compile_warning = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27943,map__27943__$1,on_compile_warning,on_compile_fail){
return (function (p__27945){
var vec__27946 = p__27945;
var map__27947 = cljs.core.nth.call(null,vec__27946,(0),null);
var map__27947__$1 = ((((!((map__27947 == null)))?((((map__27947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27947):map__27947);
var msg = map__27947__$1;
var msg_name = cljs.core.get.call(null,map__27947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27946,(1));
var pred__27949 = cljs.core._EQ_;
var expr__27950 = msg_name;
if(cljs.core.truth_(pred__27949.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27950))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27949.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27950))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27943,map__27943__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,msg_hist,msg_names,msg){
return (function (state_28151){
var state_val_28152 = (state_28151[(1)]);
if((state_val_28152 === (7))){
var inst_28085 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28153_28194 = state_28151__$1;
(statearr_28153_28194[(2)] = inst_28085);

(statearr_28153_28194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (20))){
var inst_28113 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28113)){
var statearr_28154_28195 = state_28151__$1;
(statearr_28154_28195[(1)] = (22));

} else {
var statearr_28155_28196 = state_28151__$1;
(statearr_28155_28196[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (27))){
var inst_28125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28126 = figwheel.client.heads_up.display_warning.call(null,inst_28125);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(30),inst_28126);
} else {
if((state_val_28152 === (1))){
var inst_28073 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28073)){
var statearr_28156_28197 = state_28151__$1;
(statearr_28156_28197[(1)] = (2));

} else {
var statearr_28157_28198 = state_28151__$1;
(statearr_28157_28198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (24))){
var inst_28141 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28158_28199 = state_28151__$1;
(statearr_28158_28199[(2)] = inst_28141);

(statearr_28158_28199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (4))){
var inst_28149 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28151__$1,inst_28149);
} else {
if((state_val_28152 === (15))){
var inst_28101 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28102 = figwheel.client.format_messages.call(null,inst_28101);
var inst_28103 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28104 = figwheel.client.heads_up.display_error.call(null,inst_28102,inst_28103);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(18),inst_28104);
} else {
if((state_val_28152 === (21))){
var inst_28143 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28159_28200 = state_28151__$1;
(statearr_28159_28200[(2)] = inst_28143);

(statearr_28159_28200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (31))){
var inst_28132 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(34),inst_28132);
} else {
if((state_val_28152 === (32))){
var state_28151__$1 = state_28151;
var statearr_28160_28201 = state_28151__$1;
(statearr_28160_28201[(2)] = null);

(statearr_28160_28201[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (33))){
var inst_28137 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28161_28202 = state_28151__$1;
(statearr_28161_28202[(2)] = inst_28137);

(statearr_28161_28202[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (13))){
var inst_28091 = (state_28151[(2)]);
var inst_28092 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28093 = figwheel.client.format_messages.call(null,inst_28092);
var inst_28094 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28095 = figwheel.client.heads_up.display_error.call(null,inst_28093,inst_28094);
var state_28151__$1 = (function (){var statearr_28162 = state_28151;
(statearr_28162[(7)] = inst_28091);

return statearr_28162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(14),inst_28095);
} else {
if((state_val_28152 === (22))){
var inst_28115 = figwheel.client.heads_up.clear.call(null);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(25),inst_28115);
} else {
if((state_val_28152 === (29))){
var inst_28139 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28163_28203 = state_28151__$1;
(statearr_28163_28203[(2)] = inst_28139);

(statearr_28163_28203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (6))){
var inst_28081 = figwheel.client.heads_up.clear.call(null);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(9),inst_28081);
} else {
if((state_val_28152 === (28))){
var inst_28130 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28130)){
var statearr_28164_28204 = state_28151__$1;
(statearr_28164_28204[(1)] = (31));

} else {
var statearr_28165_28205 = state_28151__$1;
(statearr_28165_28205[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (25))){
var inst_28117 = (state_28151[(2)]);
var inst_28118 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28119 = figwheel.client.heads_up.display_warning.call(null,inst_28118);
var state_28151__$1 = (function (){var statearr_28166 = state_28151;
(statearr_28166[(8)] = inst_28117);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(26),inst_28119);
} else {
if((state_val_28152 === (34))){
var inst_28134 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28167_28206 = state_28151__$1;
(statearr_28167_28206[(2)] = inst_28134);

(statearr_28167_28206[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (17))){
var inst_28145 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28168_28207 = state_28151__$1;
(statearr_28168_28207[(2)] = inst_28145);

(statearr_28168_28207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (3))){
var inst_28087 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28087)){
var statearr_28169_28208 = state_28151__$1;
(statearr_28169_28208[(1)] = (10));

} else {
var statearr_28170_28209 = state_28151__$1;
(statearr_28170_28209[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (12))){
var inst_28147 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28171_28210 = state_28151__$1;
(statearr_28171_28210[(2)] = inst_28147);

(statearr_28171_28210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (2))){
var inst_28075 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28075)){
var statearr_28172_28211 = state_28151__$1;
(statearr_28172_28211[(1)] = (5));

} else {
var statearr_28173_28212 = state_28151__$1;
(statearr_28173_28212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (23))){
var inst_28123 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28123)){
var statearr_28174_28213 = state_28151__$1;
(statearr_28174_28213[(1)] = (27));

} else {
var statearr_28175_28214 = state_28151__$1;
(statearr_28175_28214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (19))){
var inst_28110 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28111 = figwheel.client.heads_up.append_message.call(null,inst_28110);
var state_28151__$1 = state_28151;
var statearr_28176_28215 = state_28151__$1;
(statearr_28176_28215[(2)] = inst_28111);

(statearr_28176_28215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (11))){
var inst_28099 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28099)){
var statearr_28177_28216 = state_28151__$1;
(statearr_28177_28216[(1)] = (15));

} else {
var statearr_28178_28217 = state_28151__$1;
(statearr_28178_28217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (9))){
var inst_28083 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28179_28218 = state_28151__$1;
(statearr_28179_28218[(2)] = inst_28083);

(statearr_28179_28218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (5))){
var inst_28077 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(8),inst_28077);
} else {
if((state_val_28152 === (14))){
var inst_28097 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28180_28219 = state_28151__$1;
(statearr_28180_28219[(2)] = inst_28097);

(statearr_28180_28219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (26))){
var inst_28121 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28181_28220 = state_28151__$1;
(statearr_28181_28220[(2)] = inst_28121);

(statearr_28181_28220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (16))){
var inst_28108 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28151__$1 = state_28151;
if(cljs.core.truth_(inst_28108)){
var statearr_28182_28221 = state_28151__$1;
(statearr_28182_28221[(1)] = (19));

} else {
var statearr_28183_28222 = state_28151__$1;
(statearr_28183_28222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (30))){
var inst_28128 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28184_28223 = state_28151__$1;
(statearr_28184_28223[(2)] = inst_28128);

(statearr_28184_28223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (10))){
var inst_28089 = figwheel.client.heads_up.clear.call(null);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(13),inst_28089);
} else {
if((state_val_28152 === (18))){
var inst_28106 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28185_28224 = state_28151__$1;
(statearr_28185_28224[(2)] = inst_28106);

(statearr_28185_28224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28152 === (8))){
var inst_28079 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
var statearr_28186_28225 = state_28151__$1;
(statearr_28186_28225[(2)] = inst_28079);

(statearr_28186_28225[(1)] = (7));


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
var statearr_28190 = [null,null,null,null,null,null,null,null,null];
(statearr_28190[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__);

(statearr_28190[(1)] = (1));

return statearr_28190;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____1 = (function (state_28151){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28191){if((e28191 instanceof Object)){
var ex__19591__auto__ = e28191;
var statearr_28192_28226 = state_28151;
(statearr_28192_28226[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28227 = state_28151;
state_28151 = G__28227;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__ = function(state_28151){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____1.call(this,state_28151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,msg_hist,msg_names,msg))
})();
var state__19654__auto__ = (function (){var statearr_28193 = f__19653__auto__.call(null);
(statearr_28193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_28193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,msg_hist,msg_names,msg))
);

return c__19652__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19652__auto___28290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___28290,ch){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___28290,ch){
return (function (state_28273){
var state_val_28274 = (state_28273[(1)]);
if((state_val_28274 === (1))){
var state_28273__$1 = state_28273;
var statearr_28275_28291 = state_28273__$1;
(statearr_28275_28291[(2)] = null);

(statearr_28275_28291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (2))){
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,(4),ch);
} else {
if((state_val_28274 === (3))){
var inst_28271 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28273__$1,inst_28271);
} else {
if((state_val_28274 === (4))){
var inst_28261 = (state_28273[(7)]);
var inst_28261__$1 = (state_28273[(2)]);
var state_28273__$1 = (function (){var statearr_28276 = state_28273;
(statearr_28276[(7)] = inst_28261__$1);

return statearr_28276;
})();
if(cljs.core.truth_(inst_28261__$1)){
var statearr_28277_28292 = state_28273__$1;
(statearr_28277_28292[(1)] = (5));

} else {
var statearr_28278_28293 = state_28273__$1;
(statearr_28278_28293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (5))){
var inst_28261 = (state_28273[(7)]);
var inst_28263 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28261);
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,(8),inst_28263);
} else {
if((state_val_28274 === (6))){
var state_28273__$1 = state_28273;
var statearr_28279_28294 = state_28273__$1;
(statearr_28279_28294[(2)] = null);

(statearr_28279_28294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (7))){
var inst_28269 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28280_28295 = state_28273__$1;
(statearr_28280_28295[(2)] = inst_28269);

(statearr_28280_28295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (8))){
var inst_28265 = (state_28273[(2)]);
var state_28273__$1 = (function (){var statearr_28281 = state_28273;
(statearr_28281[(8)] = inst_28265);

return statearr_28281;
})();
var statearr_28282_28296 = state_28273__$1;
(statearr_28282_28296[(2)] = null);

(statearr_28282_28296[(1)] = (2));


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
});})(c__19652__auto___28290,ch))
;
return ((function (switch__19587__auto__,c__19652__auto___28290,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19588__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19588__auto____0 = (function (){
var statearr_28286 = [null,null,null,null,null,null,null,null,null];
(statearr_28286[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19588__auto__);

(statearr_28286[(1)] = (1));

return statearr_28286;
});
var figwheel$client$heads_up_plugin_$_state_machine__19588__auto____1 = (function (state_28273){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28287){if((e28287 instanceof Object)){
var ex__19591__auto__ = e28287;
var statearr_28288_28297 = state_28273;
(statearr_28288_28297[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28298 = state_28273;
state_28273 = G__28298;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19588__auto__ = function(state_28273){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19588__auto____1.call(this,state_28273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19588__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19588__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___28290,ch))
})();
var state__19654__auto__ = (function (){var statearr_28289 = f__19653__auto__.call(null);
(statearr_28289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___28290);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___28290,ch))
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
return (function (state_28319){
var state_val_28320 = (state_28319[(1)]);
if((state_val_28320 === (1))){
var inst_28314 = cljs.core.async.timeout.call(null,(3000));
var state_28319__$1 = state_28319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28319__$1,(2),inst_28314);
} else {
if((state_val_28320 === (2))){
var inst_28316 = (state_28319[(2)]);
var inst_28317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28319__$1 = (function (){var statearr_28321 = state_28319;
(statearr_28321[(7)] = inst_28316);

return statearr_28321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28319__$1,inst_28317);
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
var statearr_28325 = [null,null,null,null,null,null,null,null];
(statearr_28325[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____1 = (function (state_28319){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__19591__auto__ = e28326;
var statearr_28327_28329 = state_28319;
(statearr_28327_28329[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28330 = state_28319;
state_28319 = G__28330;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__ = function(state_28319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____1.call(this,state_28319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19588__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_28328 = f__19653__auto__.call(null);
(statearr_28328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_28328;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28331){
var map__28338 = p__28331;
var map__28338__$1 = ((((!((map__28338 == null)))?((((map__28338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28338):map__28338);
var ed = map__28338__$1;
var formatted_exception = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28340_28344 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28341_28345 = null;
var count__28342_28346 = (0);
var i__28343_28347 = (0);
while(true){
if((i__28343_28347 < count__28342_28346)){
var msg_28348 = cljs.core._nth.call(null,chunk__28341_28345,i__28343_28347);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28348);

var G__28349 = seq__28340_28344;
var G__28350 = chunk__28341_28345;
var G__28351 = count__28342_28346;
var G__28352 = (i__28343_28347 + (1));
seq__28340_28344 = G__28349;
chunk__28341_28345 = G__28350;
count__28342_28346 = G__28351;
i__28343_28347 = G__28352;
continue;
} else {
var temp__4425__auto___28353 = cljs.core.seq.call(null,seq__28340_28344);
if(temp__4425__auto___28353){
var seq__28340_28354__$1 = temp__4425__auto___28353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28340_28354__$1)){
var c__17253__auto___28355 = cljs.core.chunk_first.call(null,seq__28340_28354__$1);
var G__28356 = cljs.core.chunk_rest.call(null,seq__28340_28354__$1);
var G__28357 = c__17253__auto___28355;
var G__28358 = cljs.core.count.call(null,c__17253__auto___28355);
var G__28359 = (0);
seq__28340_28344 = G__28356;
chunk__28341_28345 = G__28357;
count__28342_28346 = G__28358;
i__28343_28347 = G__28359;
continue;
} else {
var msg_28360 = cljs.core.first.call(null,seq__28340_28354__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28360);

var G__28361 = cljs.core.next.call(null,seq__28340_28354__$1);
var G__28362 = null;
var G__28363 = (0);
var G__28364 = (0);
seq__28340_28344 = G__28361;
chunk__28341_28345 = G__28362;
count__28342_28346 = G__28363;
i__28343_28347 = G__28364;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28365){
var map__28368 = p__28365;
var map__28368__$1 = ((((!((map__28368 == null)))?((((map__28368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28368):map__28368);
var w = map__28368__$1;
var message = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28376 = cljs.core.seq.call(null,plugins);
var chunk__28377 = null;
var count__28378 = (0);
var i__28379 = (0);
while(true){
if((i__28379 < count__28378)){
var vec__28380 = cljs.core._nth.call(null,chunk__28377,i__28379);
var k = cljs.core.nth.call(null,vec__28380,(0),null);
var plugin = cljs.core.nth.call(null,vec__28380,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28382 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28376,chunk__28377,count__28378,i__28379,pl_28382,vec__28380,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28382.call(null,msg_hist);
});})(seq__28376,chunk__28377,count__28378,i__28379,pl_28382,vec__28380,k,plugin))
);
} else {
}

var G__28383 = seq__28376;
var G__28384 = chunk__28377;
var G__28385 = count__28378;
var G__28386 = (i__28379 + (1));
seq__28376 = G__28383;
chunk__28377 = G__28384;
count__28378 = G__28385;
i__28379 = G__28386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28376);
if(temp__4425__auto__){
var seq__28376__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28376__$1)){
var c__17253__auto__ = cljs.core.chunk_first.call(null,seq__28376__$1);
var G__28387 = cljs.core.chunk_rest.call(null,seq__28376__$1);
var G__28388 = c__17253__auto__;
var G__28389 = cljs.core.count.call(null,c__17253__auto__);
var G__28390 = (0);
seq__28376 = G__28387;
chunk__28377 = G__28388;
count__28378 = G__28389;
i__28379 = G__28390;
continue;
} else {
var vec__28381 = cljs.core.first.call(null,seq__28376__$1);
var k = cljs.core.nth.call(null,vec__28381,(0),null);
var plugin = cljs.core.nth.call(null,vec__28381,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28391 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28376,chunk__28377,count__28378,i__28379,pl_28391,vec__28381,k,plugin,seq__28376__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28391.call(null,msg_hist);
});})(seq__28376,chunk__28377,count__28378,i__28379,pl_28391,vec__28381,k,plugin,seq__28376__$1,temp__4425__auto__))
);
} else {
}

var G__28392 = cljs.core.next.call(null,seq__28376__$1);
var G__28393 = null;
var G__28394 = (0);
var G__28395 = (0);
seq__28376 = G__28392;
chunk__28377 = G__28393;
count__28378 = G__28394;
i__28379 = G__28395;
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
var args28396 = [];
var len__17508__auto___28399 = arguments.length;
var i__17509__auto___28400 = (0);
while(true){
if((i__17509__auto___28400 < len__17508__auto___28399)){
args28396.push((arguments[i__17509__auto___28400]));

var G__28401 = (i__17509__auto___28400 + (1));
i__17509__auto___28400 = G__28401;
continue;
} else {
}
break;
}

var G__28398 = args28396.length;
switch (G__28398) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28396.length)].join('')));

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
var len__17508__auto___28407 = arguments.length;
var i__17509__auto___28408 = (0);
while(true){
if((i__17509__auto___28408 < len__17508__auto___28407)){
args__17515__auto__.push((arguments[i__17509__auto___28408]));

var G__28409 = (i__17509__auto___28408 + (1));
i__17509__auto___28408 = G__28409;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((0) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17516__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28404){
var map__28405 = p__28404;
var map__28405__$1 = ((((!((map__28405 == null)))?((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);
var opts = map__28405__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28403){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28403));
});

//# sourceMappingURL=client.js.map