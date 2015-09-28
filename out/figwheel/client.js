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
var G__27792__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27793__i = 0, G__27793__a = new Array(arguments.length -  0);
while (G__27793__i < G__27793__a.length) {G__27793__a[G__27793__i] = arguments[G__27793__i + 0]; ++G__27793__i;}
  args = new cljs.core.IndexedSeq(G__27793__a,0);
} 
return G__27792__delegate.call(this,args);};
G__27792.cljs$lang$maxFixedArity = 0;
G__27792.cljs$lang$applyTo = (function (arglist__27794){
var args = cljs.core.seq(arglist__27794);
return G__27792__delegate(args);
});
G__27792.cljs$core$IFn$_invoke$arity$variadic = G__27792__delegate;
return G__27792;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27795){
var map__27798 = p__27795;
var map__27798__$1 = ((((!((map__27798 == null)))?((((map__27798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);
var message = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16511__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16499__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16499__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16499__auto__;
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
var c__19694__auto___27928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___27928,ch){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___27928,ch){
return (function (state_27902){
var state_val_27903 = (state_27902[(1)]);
if((state_val_27903 === (7))){
var inst_27898 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27904_27929 = state_27902__$1;
(statearr_27904_27929[(2)] = inst_27898);

(statearr_27904_27929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (1))){
var state_27902__$1 = state_27902;
var statearr_27905_27930 = state_27902__$1;
(statearr_27905_27930[(2)] = null);

(statearr_27905_27930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (4))){
var inst_27866 = (state_27902[(7)]);
var inst_27866__$1 = (state_27902[(2)]);
var state_27902__$1 = (function (){var statearr_27906 = state_27902;
(statearr_27906[(7)] = inst_27866__$1);

return statearr_27906;
})();
if(cljs.core.truth_(inst_27866__$1)){
var statearr_27907_27931 = state_27902__$1;
(statearr_27907_27931[(1)] = (5));

} else {
var statearr_27908_27932 = state_27902__$1;
(statearr_27908_27932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (13))){
var state_27902__$1 = state_27902;
var statearr_27909_27933 = state_27902__$1;
(statearr_27909_27933[(2)] = null);

(statearr_27909_27933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (6))){
var state_27902__$1 = state_27902;
var statearr_27910_27934 = state_27902__$1;
(statearr_27910_27934[(2)] = null);

(statearr_27910_27934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (3))){
var inst_27900 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27902__$1,inst_27900);
} else {
if((state_val_27903 === (12))){
var inst_27873 = (state_27902[(8)]);
var inst_27886 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27873);
var inst_27887 = cljs.core.first.call(null,inst_27886);
var inst_27888 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27887);
var inst_27889 = console.warn("Figwheel: Not loading code with warnings - ",inst_27888);
var state_27902__$1 = state_27902;
var statearr_27911_27935 = state_27902__$1;
(statearr_27911_27935[(2)] = inst_27889);

(statearr_27911_27935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (2))){
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27902__$1,(4),ch);
} else {
if((state_val_27903 === (11))){
var inst_27882 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27912_27936 = state_27902__$1;
(statearr_27912_27936[(2)] = inst_27882);

(statearr_27912_27936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (9))){
var inst_27872 = (state_27902[(9)]);
var inst_27884 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27872,opts);
var state_27902__$1 = state_27902;
if(cljs.core.truth_(inst_27884)){
var statearr_27913_27937 = state_27902__$1;
(statearr_27913_27937[(1)] = (12));

} else {
var statearr_27914_27938 = state_27902__$1;
(statearr_27914_27938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (5))){
var inst_27866 = (state_27902[(7)]);
var inst_27872 = (state_27902[(9)]);
var inst_27868 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27869 = (new cljs.core.PersistentArrayMap(null,2,inst_27868,null));
var inst_27870 = (new cljs.core.PersistentHashSet(null,inst_27869,null));
var inst_27871 = figwheel.client.focus_msgs.call(null,inst_27870,inst_27866);
var inst_27872__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27871);
var inst_27873 = cljs.core.first.call(null,inst_27871);
var inst_27874 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27872__$1,opts);
var state_27902__$1 = (function (){var statearr_27915 = state_27902;
(statearr_27915[(8)] = inst_27873);

(statearr_27915[(9)] = inst_27872__$1);

return statearr_27915;
})();
if(cljs.core.truth_(inst_27874)){
var statearr_27916_27939 = state_27902__$1;
(statearr_27916_27939[(1)] = (8));

} else {
var statearr_27917_27940 = state_27902__$1;
(statearr_27917_27940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (14))){
var inst_27892 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27918_27941 = state_27902__$1;
(statearr_27918_27941[(2)] = inst_27892);

(statearr_27918_27941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (10))){
var inst_27894 = (state_27902[(2)]);
var state_27902__$1 = (function (){var statearr_27919 = state_27902;
(statearr_27919[(10)] = inst_27894);

return statearr_27919;
})();
var statearr_27920_27942 = state_27902__$1;
(statearr_27920_27942[(2)] = null);

(statearr_27920_27942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (8))){
var inst_27873 = (state_27902[(8)]);
var inst_27876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27877 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27873);
var inst_27878 = cljs.core.async.timeout.call(null,(1000));
var inst_27879 = [inst_27877,inst_27878];
var inst_27880 = (new cljs.core.PersistentVector(null,2,(5),inst_27876,inst_27879,null));
var state_27902__$1 = state_27902;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27902__$1,(11),inst_27880);
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
});})(c__19694__auto___27928,ch))
;
return ((function (switch__19629__auto__,c__19694__auto___27928,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19630__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19630__auto____0 = (function (){
var statearr_27924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27924[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19630__auto__);

(statearr_27924[(1)] = (1));

return statearr_27924;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19630__auto____1 = (function (state_27902){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_27902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e27925){if((e27925 instanceof Object)){
var ex__19633__auto__ = e27925;
var statearr_27926_27943 = state_27902;
(statearr_27926_27943[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27944 = state_27902;
state_27902 = G__27944;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19630__auto__ = function(state_27902){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19630__auto____1.call(this,state_27902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19630__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19630__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___27928,ch))
})();
var state__19696__auto__ = (function (){var statearr_27927 = f__19695__auto__.call(null);
(statearr_27927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___27928);

return statearr_27927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___27928,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27945_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27945_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27952 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27952){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27951 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27950,_STAR_print_newline_STAR_27951,base_path_27952){
return (function() { 
var G__27953__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27954__i = 0, G__27954__a = new Array(arguments.length -  0);
while (G__27954__i < G__27954__a.length) {G__27954__a[G__27954__i] = arguments[G__27954__i + 0]; ++G__27954__i;}
  args = new cljs.core.IndexedSeq(G__27954__a,0);
} 
return G__27953__delegate.call(this,args);};
G__27953.cljs$lang$maxFixedArity = 0;
G__27953.cljs$lang$applyTo = (function (arglist__27955){
var args = cljs.core.seq(arglist__27955);
return G__27953__delegate(args);
});
G__27953.cljs$core$IFn$_invoke$arity$variadic = G__27953__delegate;
return G__27953;
})()
;})(_STAR_print_fn_STAR_27950,_STAR_print_newline_STAR_27951,base_path_27952))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27951;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27950;
}}catch (e27949){if((e27949 instanceof Error)){
var e = e27949;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27952], null));
} else {
var e = e27949;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27952))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27956){
var map__27963 = p__27956;
var map__27963__$1 = ((((!((map__27963 == null)))?((((map__27963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27963):map__27963);
var opts = map__27963__$1;
var build_id = cljs.core.get.call(null,map__27963__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27963,map__27963__$1,opts,build_id){
return (function (p__27965){
var vec__27966 = p__27965;
var map__27967 = cljs.core.nth.call(null,vec__27966,(0),null);
var map__27967__$1 = ((((!((map__27967 == null)))?((((map__27967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967):map__27967);
var msg = map__27967__$1;
var msg_name = cljs.core.get.call(null,map__27967__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27966,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27966,map__27967,map__27967__$1,msg,msg_name,_,map__27963,map__27963__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27966,map__27967,map__27967__$1,msg,msg_name,_,map__27963,map__27963__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27963,map__27963__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27973){
var vec__27974 = p__27973;
var map__27975 = cljs.core.nth.call(null,vec__27974,(0),null);
var map__27975__$1 = ((((!((map__27975 == null)))?((((map__27975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27975):map__27975);
var msg = map__27975__$1;
var msg_name = cljs.core.get.call(null,map__27975__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27974,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27977){
var map__27987 = p__27977;
var map__27987__$1 = ((((!((map__27987 == null)))?((((map__27987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27987):map__27987);
var on_compile_warning = cljs.core.get.call(null,map__27987__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27987__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27987,map__27987__$1,on_compile_warning,on_compile_fail){
return (function (p__27989){
var vec__27990 = p__27989;
var map__27991 = cljs.core.nth.call(null,vec__27990,(0),null);
var map__27991__$1 = ((((!((map__27991 == null)))?((((map__27991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27991):map__27991);
var msg = map__27991__$1;
var msg_name = cljs.core.get.call(null,map__27991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27990,(1));
var pred__27993 = cljs.core._EQ_;
var expr__27994 = msg_name;
if(cljs.core.truth_(pred__27993.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27994))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27993.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27994))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27987,map__27987__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__,msg_hist,msg_names,msg){
return (function (state_28196){
var state_val_28197 = (state_28196[(1)]);
if((state_val_28197 === (7))){
var inst_28130 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28198_28239 = state_28196__$1;
(statearr_28198_28239[(2)] = inst_28130);

(statearr_28198_28239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (20))){
var inst_28158 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28158)){
var statearr_28199_28240 = state_28196__$1;
(statearr_28199_28240[(1)] = (22));

} else {
var statearr_28200_28241 = state_28196__$1;
(statearr_28200_28241[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (27))){
var inst_28170 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28171 = figwheel.client.heads_up.display_warning.call(null,inst_28170);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(30),inst_28171);
} else {
if((state_val_28197 === (1))){
var inst_28118 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28118)){
var statearr_28201_28242 = state_28196__$1;
(statearr_28201_28242[(1)] = (2));

} else {
var statearr_28202_28243 = state_28196__$1;
(statearr_28202_28243[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (24))){
var inst_28186 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28203_28244 = state_28196__$1;
(statearr_28203_28244[(2)] = inst_28186);

(statearr_28203_28244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (4))){
var inst_28194 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28196__$1,inst_28194);
} else {
if((state_val_28197 === (15))){
var inst_28146 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28147 = figwheel.client.format_messages.call(null,inst_28146);
var inst_28148 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28149 = figwheel.client.heads_up.display_error.call(null,inst_28147,inst_28148);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(18),inst_28149);
} else {
if((state_val_28197 === (21))){
var inst_28188 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28204_28245 = state_28196__$1;
(statearr_28204_28245[(2)] = inst_28188);

(statearr_28204_28245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (31))){
var inst_28177 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(34),inst_28177);
} else {
if((state_val_28197 === (32))){
var state_28196__$1 = state_28196;
var statearr_28205_28246 = state_28196__$1;
(statearr_28205_28246[(2)] = null);

(statearr_28205_28246[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (33))){
var inst_28182 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28206_28247 = state_28196__$1;
(statearr_28206_28247[(2)] = inst_28182);

(statearr_28206_28247[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (13))){
var inst_28136 = (state_28196[(2)]);
var inst_28137 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28138 = figwheel.client.format_messages.call(null,inst_28137);
var inst_28139 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28140 = figwheel.client.heads_up.display_error.call(null,inst_28138,inst_28139);
var state_28196__$1 = (function (){var statearr_28207 = state_28196;
(statearr_28207[(7)] = inst_28136);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(14),inst_28140);
} else {
if((state_val_28197 === (22))){
var inst_28160 = figwheel.client.heads_up.clear.call(null);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(25),inst_28160);
} else {
if((state_val_28197 === (29))){
var inst_28184 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28208_28248 = state_28196__$1;
(statearr_28208_28248[(2)] = inst_28184);

(statearr_28208_28248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (6))){
var inst_28126 = figwheel.client.heads_up.clear.call(null);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(9),inst_28126);
} else {
if((state_val_28197 === (28))){
var inst_28175 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28175)){
var statearr_28209_28249 = state_28196__$1;
(statearr_28209_28249[(1)] = (31));

} else {
var statearr_28210_28250 = state_28196__$1;
(statearr_28210_28250[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (25))){
var inst_28162 = (state_28196[(2)]);
var inst_28163 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28164 = figwheel.client.heads_up.display_warning.call(null,inst_28163);
var state_28196__$1 = (function (){var statearr_28211 = state_28196;
(statearr_28211[(8)] = inst_28162);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(26),inst_28164);
} else {
if((state_val_28197 === (34))){
var inst_28179 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28212_28251 = state_28196__$1;
(statearr_28212_28251[(2)] = inst_28179);

(statearr_28212_28251[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (17))){
var inst_28190 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28213_28252 = state_28196__$1;
(statearr_28213_28252[(2)] = inst_28190);

(statearr_28213_28252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (3))){
var inst_28132 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28132)){
var statearr_28214_28253 = state_28196__$1;
(statearr_28214_28253[(1)] = (10));

} else {
var statearr_28215_28254 = state_28196__$1;
(statearr_28215_28254[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (12))){
var inst_28192 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28216_28255 = state_28196__$1;
(statearr_28216_28255[(2)] = inst_28192);

(statearr_28216_28255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (2))){
var inst_28120 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28120)){
var statearr_28217_28256 = state_28196__$1;
(statearr_28217_28256[(1)] = (5));

} else {
var statearr_28218_28257 = state_28196__$1;
(statearr_28218_28257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (23))){
var inst_28168 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28168)){
var statearr_28219_28258 = state_28196__$1;
(statearr_28219_28258[(1)] = (27));

} else {
var statearr_28220_28259 = state_28196__$1;
(statearr_28220_28259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (19))){
var inst_28155 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28156 = figwheel.client.heads_up.append_message.call(null,inst_28155);
var state_28196__$1 = state_28196;
var statearr_28221_28260 = state_28196__$1;
(statearr_28221_28260[(2)] = inst_28156);

(statearr_28221_28260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (11))){
var inst_28144 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28144)){
var statearr_28222_28261 = state_28196__$1;
(statearr_28222_28261[(1)] = (15));

} else {
var statearr_28223_28262 = state_28196__$1;
(statearr_28223_28262[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (9))){
var inst_28128 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28224_28263 = state_28196__$1;
(statearr_28224_28263[(2)] = inst_28128);

(statearr_28224_28263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (5))){
var inst_28122 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(8),inst_28122);
} else {
if((state_val_28197 === (14))){
var inst_28142 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28225_28264 = state_28196__$1;
(statearr_28225_28264[(2)] = inst_28142);

(statearr_28225_28264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (26))){
var inst_28166 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28226_28265 = state_28196__$1;
(statearr_28226_28265[(2)] = inst_28166);

(statearr_28226_28265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (16))){
var inst_28153 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28196__$1 = state_28196;
if(cljs.core.truth_(inst_28153)){
var statearr_28227_28266 = state_28196__$1;
(statearr_28227_28266[(1)] = (19));

} else {
var statearr_28228_28267 = state_28196__$1;
(statearr_28228_28267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (30))){
var inst_28173 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28229_28268 = state_28196__$1;
(statearr_28229_28268[(2)] = inst_28173);

(statearr_28229_28268[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (10))){
var inst_28134 = figwheel.client.heads_up.clear.call(null);
var state_28196__$1 = state_28196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28196__$1,(13),inst_28134);
} else {
if((state_val_28197 === (18))){
var inst_28151 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28230_28269 = state_28196__$1;
(statearr_28230_28269[(2)] = inst_28151);

(statearr_28230_28269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28197 === (8))){
var inst_28124 = (state_28196[(2)]);
var state_28196__$1 = state_28196;
var statearr_28231_28270 = state_28196__$1;
(statearr_28231_28270[(2)] = inst_28124);

(statearr_28231_28270[(1)] = (7));


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
});})(c__19694__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19629__auto__,c__19694__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto____0 = (function (){
var statearr_28235 = [null,null,null,null,null,null,null,null,null];
(statearr_28235[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto__);

(statearr_28235[(1)] = (1));

return statearr_28235;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto____1 = (function (state_28196){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e28236){if((e28236 instanceof Object)){
var ex__19633__auto__ = e28236;
var statearr_28237_28271 = state_28196;
(statearr_28237_28271[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28272 = state_28196;
state_28196 = G__28272;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto__ = function(state_28196){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto____1.call(this,state_28196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__,msg_hist,msg_names,msg))
})();
var state__19696__auto__ = (function (){var statearr_28238 = f__19695__auto__.call(null);
(statearr_28238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__,msg_hist,msg_names,msg))
);

return c__19694__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19694__auto___28335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___28335,ch){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___28335,ch){
return (function (state_28318){
var state_val_28319 = (state_28318[(1)]);
if((state_val_28319 === (1))){
var state_28318__$1 = state_28318;
var statearr_28320_28336 = state_28318__$1;
(statearr_28320_28336[(2)] = null);

(statearr_28320_28336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (2))){
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,(4),ch);
} else {
if((state_val_28319 === (3))){
var inst_28316 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28318__$1,inst_28316);
} else {
if((state_val_28319 === (4))){
var inst_28306 = (state_28318[(7)]);
var inst_28306__$1 = (state_28318[(2)]);
var state_28318__$1 = (function (){var statearr_28321 = state_28318;
(statearr_28321[(7)] = inst_28306__$1);

return statearr_28321;
})();
if(cljs.core.truth_(inst_28306__$1)){
var statearr_28322_28337 = state_28318__$1;
(statearr_28322_28337[(1)] = (5));

} else {
var statearr_28323_28338 = state_28318__$1;
(statearr_28323_28338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (5))){
var inst_28306 = (state_28318[(7)]);
var inst_28308 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28306);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,(8),inst_28308);
} else {
if((state_val_28319 === (6))){
var state_28318__$1 = state_28318;
var statearr_28324_28339 = state_28318__$1;
(statearr_28324_28339[(2)] = null);

(statearr_28324_28339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (7))){
var inst_28314 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28325_28340 = state_28318__$1;
(statearr_28325_28340[(2)] = inst_28314);

(statearr_28325_28340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (8))){
var inst_28310 = (state_28318[(2)]);
var state_28318__$1 = (function (){var statearr_28326 = state_28318;
(statearr_28326[(8)] = inst_28310);

return statearr_28326;
})();
var statearr_28327_28341 = state_28318__$1;
(statearr_28327_28341[(2)] = null);

(statearr_28327_28341[(1)] = (2));


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
});})(c__19694__auto___28335,ch))
;
return ((function (switch__19629__auto__,c__19694__auto___28335,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19630__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19630__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null,null,null];
(statearr_28331[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19630__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var figwheel$client$heads_up_plugin_$_state_machine__19630__auto____1 = (function (state_28318){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__19633__auto__ = e28332;
var statearr_28333_28342 = state_28318;
(statearr_28333_28342[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28318;
state_28318 = G__28343;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19630__auto__ = function(state_28318){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19630__auto____1.call(this,state_28318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19630__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19630__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___28335,ch))
})();
var state__19696__auto__ = (function (){var statearr_28334 = f__19695__auto__.call(null);
(statearr_28334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___28335);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___28335,ch))
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
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_28364){
var state_val_28365 = (state_28364[(1)]);
if((state_val_28365 === (1))){
var inst_28359 = cljs.core.async.timeout.call(null,(3000));
var state_28364__$1 = state_28364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28364__$1,(2),inst_28359);
} else {
if((state_val_28365 === (2))){
var inst_28361 = (state_28364[(2)]);
var inst_28362 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28364__$1 = (function (){var statearr_28366 = state_28364;
(statearr_28366[(7)] = inst_28361);

return statearr_28366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28364__$1,inst_28362);
} else {
return null;
}
}
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19630__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19630__auto____0 = (function (){
var statearr_28370 = [null,null,null,null,null,null,null,null];
(statearr_28370[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19630__auto__);

(statearr_28370[(1)] = (1));

return statearr_28370;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19630__auto____1 = (function (state_28364){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e28371){if((e28371 instanceof Object)){
var ex__19633__auto__ = e28371;
var statearr_28372_28374 = state_28364;
(statearr_28372_28374[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28375 = state_28364;
state_28364 = G__28375;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19630__auto__ = function(state_28364){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19630__auto____1.call(this,state_28364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19630__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19630__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_28373 = f__19695__auto__.call(null);
(statearr_28373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_28373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28376){
var map__28383 = p__28376;
var map__28383__$1 = ((((!((map__28383 == null)))?((((map__28383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28383):map__28383);
var ed = map__28383__$1;
var formatted_exception = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28385_28389 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28386_28390 = null;
var count__28387_28391 = (0);
var i__28388_28392 = (0);
while(true){
if((i__28388_28392 < count__28387_28391)){
var msg_28393 = cljs.core._nth.call(null,chunk__28386_28390,i__28388_28392);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28393);

var G__28394 = seq__28385_28389;
var G__28395 = chunk__28386_28390;
var G__28396 = count__28387_28391;
var G__28397 = (i__28388_28392 + (1));
seq__28385_28389 = G__28394;
chunk__28386_28390 = G__28395;
count__28387_28391 = G__28396;
i__28388_28392 = G__28397;
continue;
} else {
var temp__4425__auto___28398 = cljs.core.seq.call(null,seq__28385_28389);
if(temp__4425__auto___28398){
var seq__28385_28399__$1 = temp__4425__auto___28398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28385_28399__$1)){
var c__17295__auto___28400 = cljs.core.chunk_first.call(null,seq__28385_28399__$1);
var G__28401 = cljs.core.chunk_rest.call(null,seq__28385_28399__$1);
var G__28402 = c__17295__auto___28400;
var G__28403 = cljs.core.count.call(null,c__17295__auto___28400);
var G__28404 = (0);
seq__28385_28389 = G__28401;
chunk__28386_28390 = G__28402;
count__28387_28391 = G__28403;
i__28388_28392 = G__28404;
continue;
} else {
var msg_28405 = cljs.core.first.call(null,seq__28385_28399__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28405);

var G__28406 = cljs.core.next.call(null,seq__28385_28399__$1);
var G__28407 = null;
var G__28408 = (0);
var G__28409 = (0);
seq__28385_28389 = G__28406;
chunk__28386_28390 = G__28407;
count__28387_28391 = G__28408;
i__28388_28392 = G__28409;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28410){
var map__28413 = p__28410;
var map__28413__$1 = ((((!((map__28413 == null)))?((((map__28413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28413):map__28413);
var w = map__28413__$1;
var message = cljs.core.get.call(null,map__28413__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16499__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16499__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16499__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28421 = cljs.core.seq.call(null,plugins);
var chunk__28422 = null;
var count__28423 = (0);
var i__28424 = (0);
while(true){
if((i__28424 < count__28423)){
var vec__28425 = cljs.core._nth.call(null,chunk__28422,i__28424);
var k = cljs.core.nth.call(null,vec__28425,(0),null);
var plugin = cljs.core.nth.call(null,vec__28425,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28427 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28421,chunk__28422,count__28423,i__28424,pl_28427,vec__28425,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28427.call(null,msg_hist);
});})(seq__28421,chunk__28422,count__28423,i__28424,pl_28427,vec__28425,k,plugin))
);
} else {
}

var G__28428 = seq__28421;
var G__28429 = chunk__28422;
var G__28430 = count__28423;
var G__28431 = (i__28424 + (1));
seq__28421 = G__28428;
chunk__28422 = G__28429;
count__28423 = G__28430;
i__28424 = G__28431;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28421);
if(temp__4425__auto__){
var seq__28421__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28421__$1)){
var c__17295__auto__ = cljs.core.chunk_first.call(null,seq__28421__$1);
var G__28432 = cljs.core.chunk_rest.call(null,seq__28421__$1);
var G__28433 = c__17295__auto__;
var G__28434 = cljs.core.count.call(null,c__17295__auto__);
var G__28435 = (0);
seq__28421 = G__28432;
chunk__28422 = G__28433;
count__28423 = G__28434;
i__28424 = G__28435;
continue;
} else {
var vec__28426 = cljs.core.first.call(null,seq__28421__$1);
var k = cljs.core.nth.call(null,vec__28426,(0),null);
var plugin = cljs.core.nth.call(null,vec__28426,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28436 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28421,chunk__28422,count__28423,i__28424,pl_28436,vec__28426,k,plugin,seq__28421__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28436.call(null,msg_hist);
});})(seq__28421,chunk__28422,count__28423,i__28424,pl_28436,vec__28426,k,plugin,seq__28421__$1,temp__4425__auto__))
);
} else {
}

var G__28437 = cljs.core.next.call(null,seq__28421__$1);
var G__28438 = null;
var G__28439 = (0);
var G__28440 = (0);
seq__28421 = G__28437;
chunk__28422 = G__28438;
count__28423 = G__28439;
i__28424 = G__28440;
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
var args28441 = [];
var len__17550__auto___28444 = arguments.length;
var i__17551__auto___28445 = (0);
while(true){
if((i__17551__auto___28445 < len__17550__auto___28444)){
args28441.push((arguments[i__17551__auto___28445]));

var G__28446 = (i__17551__auto___28445 + (1));
i__17551__auto___28445 = G__28446;
continue;
} else {
}
break;
}

var G__28443 = args28441.length;
switch (G__28443) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28441.length)].join('')));

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
var args__17557__auto__ = [];
var len__17550__auto___28452 = arguments.length;
var i__17551__auto___28453 = (0);
while(true){
if((i__17551__auto___28453 < len__17550__auto___28452)){
args__17557__auto__.push((arguments[i__17551__auto___28453]));

var G__28454 = (i__17551__auto___28453 + (1));
i__17551__auto___28453 = G__28454;
continue;
} else {
}
break;
}

var argseq__17558__auto__ = ((((0) < args__17557__auto__.length))?(new cljs.core.IndexedSeq(args__17557__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17558__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28449){
var map__28450 = p__28449;
var map__28450__$1 = ((((!((map__28450 == null)))?((((map__28450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28450):map__28450);
var opts = map__28450__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28448){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28448));
});

//# sourceMappingURL=client.js.map