// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28847_SHARP_,p2__28848_SHARP_){
var and__16457__auto__ = p1__28847_SHARP_;
if(cljs.core.truth_(and__16457__auto__)){
return p2__28848_SHARP_;
} else {
return and__16457__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16469__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16469__auto__){
return or__16469__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16469__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16469__auto__){
return or__16469__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16469__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17367__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17367__auto__,method_table__17363__auto__,prefer_table__17364__auto__,method_cache__17365__auto__,cached_hierarchy__17366__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28849){
var map__28850 = p__28849;
var map__28850__$1 = ((((!((map__28850 == null)))?((((map__28850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28850):map__28850);
var file = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28852){
var map__28853 = p__28852;
var map__28853__$1 = ((((!((map__28853 == null)))?((((map__28853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28853):map__28853);
var namespace = cljs.core.get.call(null,map__28853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17367__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17367__auto__,method_table__17363__auto__,prefer_table__17364__auto__,method_cache__17365__auto__,cached_hierarchy__17366__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28855){if((e28855 instanceof Error)){
var e = e28855;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28855;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args28856 = [];
var len__17508__auto___28859 = arguments.length;
var i__17509__auto___28860 = (0);
while(true){
if((i__17509__auto___28860 < len__17508__auto___28859)){
args28856.push((arguments[i__17509__auto___28860]));

var G__28861 = (i__17509__auto___28860 + (1));
i__17509__auto___28860 = G__28861;
continue;
} else {
}
break;
}

var G__28858 = args28856.length;
switch (G__28858) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28856.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28863,callback){
var map__28866 = p__28863;
var map__28866__$1 = ((((!((map__28866 == null)))?((((map__28866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28866):map__28866);
var file_msg = map__28866__$1;
var request_url = cljs.core.get.call(null,map__28866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28866,map__28866__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28866,map__28866__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28868){
var map__28871 = p__28868;
var map__28871__$1 = ((((!((map__28871 == null)))?((((map__28871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28871):map__28871);
var file_msg = map__28871__$1;
var namespace = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16469__auto__ = meta_data;
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16457__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16457__auto__){
var or__16469__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
var or__16469__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16469__auto____$1)){
return or__16469__auto____$1;
} else {
var and__16457__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16457__auto____$1){
var or__16469__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16469__auto____$2){
return or__16469__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16457__auto____$1;
}
}
}
} else {
return and__16457__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28873,callback){
var map__28876 = p__28873;
var map__28876__$1 = ((((!((map__28876 == null)))?((((map__28876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28876):map__28876);
var file_msg = map__28876__$1;
var request_url = cljs.core.get.call(null,map__28876__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19652__auto___28964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___28964,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___28964,out){
return (function (state_28946){
var state_val_28947 = (state_28946[(1)]);
if((state_val_28947 === (1))){
var inst_28924 = cljs.core.nth.call(null,files,(0),null);
var inst_28925 = cljs.core.nthnext.call(null,files,(1));
var inst_28926 = files;
var state_28946__$1 = (function (){var statearr_28948 = state_28946;
(statearr_28948[(7)] = inst_28924);

(statearr_28948[(8)] = inst_28925);

(statearr_28948[(9)] = inst_28926);

return statearr_28948;
})();
var statearr_28949_28965 = state_28946__$1;
(statearr_28949_28965[(2)] = null);

(statearr_28949_28965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (2))){
var inst_28929 = (state_28946[(10)]);
var inst_28926 = (state_28946[(9)]);
var inst_28929__$1 = cljs.core.nth.call(null,inst_28926,(0),null);
var inst_28930 = cljs.core.nthnext.call(null,inst_28926,(1));
var inst_28931 = (inst_28929__$1 == null);
var inst_28932 = cljs.core.not.call(null,inst_28931);
var state_28946__$1 = (function (){var statearr_28950 = state_28946;
(statearr_28950[(10)] = inst_28929__$1);

(statearr_28950[(11)] = inst_28930);

return statearr_28950;
})();
if(inst_28932){
var statearr_28951_28966 = state_28946__$1;
(statearr_28951_28966[(1)] = (4));

} else {
var statearr_28952_28967 = state_28946__$1;
(statearr_28952_28967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (3))){
var inst_28944 = (state_28946[(2)]);
var state_28946__$1 = state_28946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28946__$1,inst_28944);
} else {
if((state_val_28947 === (4))){
var inst_28929 = (state_28946[(10)]);
var inst_28934 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28929);
var state_28946__$1 = state_28946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28946__$1,(7),inst_28934);
} else {
if((state_val_28947 === (5))){
var inst_28940 = cljs.core.async.close_BANG_.call(null,out);
var state_28946__$1 = state_28946;
var statearr_28953_28968 = state_28946__$1;
(statearr_28953_28968[(2)] = inst_28940);

(statearr_28953_28968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (6))){
var inst_28942 = (state_28946[(2)]);
var state_28946__$1 = state_28946;
var statearr_28954_28969 = state_28946__$1;
(statearr_28954_28969[(2)] = inst_28942);

(statearr_28954_28969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28947 === (7))){
var inst_28930 = (state_28946[(11)]);
var inst_28936 = (state_28946[(2)]);
var inst_28937 = cljs.core.async.put_BANG_.call(null,out,inst_28936);
var inst_28926 = inst_28930;
var state_28946__$1 = (function (){var statearr_28955 = state_28946;
(statearr_28955[(9)] = inst_28926);

(statearr_28955[(12)] = inst_28937);

return statearr_28955;
})();
var statearr_28956_28970 = state_28946__$1;
(statearr_28956_28970[(2)] = null);

(statearr_28956_28970[(1)] = (2));


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
});})(c__19652__auto___28964,out))
;
return ((function (switch__19587__auto__,c__19652__auto___28964,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____0 = (function (){
var statearr_28960 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28960[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__);

(statearr_28960[(1)] = (1));

return statearr_28960;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____1 = (function (state_28946){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28961){if((e28961 instanceof Object)){
var ex__19591__auto__ = e28961;
var statearr_28962_28971 = state_28946;
(statearr_28962_28971[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28972 = state_28946;
state_28946 = G__28972;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__ = function(state_28946){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____1.call(this,state_28946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___28964,out))
})();
var state__19654__auto__ = (function (){var statearr_28963 = f__19653__auto__.call(null);
(statearr_28963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___28964);

return statearr_28963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___28964,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28973,p__28974){
var map__28979 = p__28973;
var map__28979__$1 = ((((!((map__28979 == null)))?((((map__28979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28979):map__28979);
var opts = map__28979__$1;
var url_rewriter = cljs.core.get.call(null,map__28979__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28980 = p__28974;
var map__28980__$1 = ((((!((map__28980 == null)))?((((map__28980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28980):map__28980);
var file_msg = map__28980__$1;
var file = cljs.core.get.call(null,map__28980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28983,opts){
var map__28987 = p__28983;
var map__28987__$1 = ((((!((map__28987 == null)))?((((map__28987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28987):map__28987);
var eval_body__$1 = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28987__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16457__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16457__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16457__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28989){var e = e28989;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28994,p__28995){
var map__29223 = p__28994;
var map__29223__$1 = ((((!((map__29223 == null)))?((((map__29223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29223):map__29223);
var opts = map__29223__$1;
var before_jsload = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29224 = p__28995;
var map__29224__$1 = ((((!((map__29224 == null)))?((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var msg = map__29224__$1;
var files = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (7))){
var inst_29239 = (state_29365[(7)]);
var inst_29240 = (state_29365[(8)]);
var inst_29241 = (state_29365[(9)]);
var inst_29238 = (state_29365[(10)]);
var inst_29246 = cljs.core._nth.call(null,inst_29239,inst_29241);
var inst_29247 = figwheel.client.file_reloading.eval_body.call(null,inst_29246,opts);
var inst_29248 = (inst_29241 + (1));
var tmp29367 = inst_29239;
var tmp29368 = inst_29240;
var tmp29369 = inst_29238;
var inst_29238__$1 = tmp29369;
var inst_29239__$1 = tmp29367;
var inst_29240__$1 = tmp29368;
var inst_29241__$1 = inst_29248;
var state_29365__$1 = (function (){var statearr_29370 = state_29365;
(statearr_29370[(7)] = inst_29239__$1);

(statearr_29370[(8)] = inst_29240__$1);

(statearr_29370[(11)] = inst_29247);

(statearr_29370[(9)] = inst_29241__$1);

(statearr_29370[(10)] = inst_29238__$1);

return statearr_29370;
})();
var statearr_29371_29450 = state_29365__$1;
(statearr_29371_29450[(2)] = null);

(statearr_29371_29450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (20))){
var inst_29283 = (state_29365[(12)]);
var inst_29284 = (state_29365[(13)]);
var inst_29287 = (state_29365[(14)]);
var inst_29290 = (state_29365[(15)]);
var inst_29288 = (state_29365[(16)]);
var inst_29293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29295 = (function (){var all_files = inst_29283;
var files_SINGLEQUOTE_ = inst_29284;
var res_SINGLEQUOTE_ = inst_29287;
var res = inst_29288;
var files_not_loaded = inst_29290;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29283,inst_29284,inst_29287,inst_29290,inst_29288,inst_29293,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (p__29294){
var map__29372 = p__29294;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var namespace = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29283,inst_29284,inst_29287,inst_29290,inst_29288,inst_29293,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29296 = cljs.core.map.call(null,inst_29295,inst_29288);
var inst_29297 = cljs.core.pr_str.call(null,inst_29296);
var inst_29298 = figwheel.client.utils.log.call(null,inst_29297);
var inst_29299 = (function (){var all_files = inst_29283;
var files_SINGLEQUOTE_ = inst_29284;
var res_SINGLEQUOTE_ = inst_29287;
var res = inst_29288;
var files_not_loaded = inst_29290;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29283,inst_29284,inst_29287,inst_29290,inst_29288,inst_29293,inst_29295,inst_29296,inst_29297,inst_29298,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29283,inst_29284,inst_29287,inst_29290,inst_29288,inst_29293,inst_29295,inst_29296,inst_29297,inst_29298,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29300 = setTimeout(inst_29299,(10));
var state_29365__$1 = (function (){var statearr_29374 = state_29365;
(statearr_29374[(17)] = inst_29293);

(statearr_29374[(18)] = inst_29298);

return statearr_29374;
})();
var statearr_29375_29451 = state_29365__$1;
(statearr_29375_29451[(2)] = inst_29300);

(statearr_29375_29451[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (27))){
var state_29365__$1 = state_29365;
var statearr_29376_29452 = state_29365__$1;
(statearr_29376_29452[(2)] = false);

(statearr_29376_29452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (1))){
var inst_29230 = (state_29365[(19)]);
var inst_29227 = before_jsload.call(null,files);
var inst_29228 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29229 = (function (){return ((function (inst_29230,inst_29227,inst_29228,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (p1__28990_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28990_SHARP_);
});
;})(inst_29230,inst_29227,inst_29228,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29230__$1 = cljs.core.filter.call(null,inst_29229,files);
var inst_29231 = cljs.core.not_empty.call(null,inst_29230__$1);
var state_29365__$1 = (function (){var statearr_29377 = state_29365;
(statearr_29377[(20)] = inst_29227);

(statearr_29377[(19)] = inst_29230__$1);

(statearr_29377[(21)] = inst_29228);

return statearr_29377;
})();
if(cljs.core.truth_(inst_29231)){
var statearr_29378_29453 = state_29365__$1;
(statearr_29378_29453[(1)] = (2));

} else {
var statearr_29379_29454 = state_29365__$1;
(statearr_29379_29454[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (24))){
var state_29365__$1 = state_29365;
var statearr_29380_29455 = state_29365__$1;
(statearr_29380_29455[(2)] = null);

(statearr_29380_29455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (39))){
var state_29365__$1 = state_29365;
var statearr_29381_29456 = state_29365__$1;
(statearr_29381_29456[(2)] = null);

(statearr_29381_29456[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (4))){
var inst_29275 = (state_29365[(2)]);
var inst_29276 = (function (){return ((function (inst_29275,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (p1__28991_SHARP_){
var and__16457__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28991_SHARP_);
if(cljs.core.truth_(and__16457__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28991_SHARP_));
} else {
return and__16457__auto__;
}
});
;})(inst_29275,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29277 = cljs.core.filter.call(null,inst_29276,files);
var state_29365__$1 = (function (){var statearr_29382 = state_29365;
(statearr_29382[(22)] = inst_29275);

(statearr_29382[(23)] = inst_29277);

return statearr_29382;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29383_29457 = state_29365__$1;
(statearr_29383_29457[(1)] = (16));

} else {
var statearr_29384_29458 = state_29365__$1;
(statearr_29384_29458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (15))){
var inst_29265 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29385_29459 = state_29365__$1;
(statearr_29385_29459[(2)] = inst_29265);

(statearr_29385_29459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (21))){
var state_29365__$1 = state_29365;
var statearr_29386_29460 = state_29365__$1;
(statearr_29386_29460[(2)] = null);

(statearr_29386_29460[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (31))){
var inst_29322 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29387_29461 = state_29365__$1;
(statearr_29387_29461[(2)] = inst_29322);

(statearr_29387_29461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (32))){
var inst_29310 = (state_29365[(24)]);
var inst_29327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29310);
var state_29365__$1 = state_29365;
var statearr_29388_29462 = state_29365__$1;
(statearr_29388_29462[(2)] = inst_29327);

(statearr_29388_29462[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (40))){
var inst_29333 = (state_29365[(25)]);
var inst_29351 = (state_29365[(2)]);
var inst_29352 = cljs.core.not_empty.call(null,inst_29333);
var state_29365__$1 = (function (){var statearr_29389 = state_29365;
(statearr_29389[(26)] = inst_29351);

return statearr_29389;
})();
if(cljs.core.truth_(inst_29352)){
var statearr_29390_29463 = state_29365__$1;
(statearr_29390_29463[(1)] = (41));

} else {
var statearr_29391_29464 = state_29365__$1;
(statearr_29391_29464[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (33))){
var inst_29310 = (state_29365[(24)]);
var state_29365__$1 = state_29365;
var statearr_29392_29465 = state_29365__$1;
(statearr_29392_29465[(2)] = inst_29310);

(statearr_29392_29465[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (13))){
var inst_29251 = (state_29365[(27)]);
var inst_29255 = cljs.core.chunk_first.call(null,inst_29251);
var inst_29256 = cljs.core.chunk_rest.call(null,inst_29251);
var inst_29257 = cljs.core.count.call(null,inst_29255);
var inst_29238 = inst_29256;
var inst_29239 = inst_29255;
var inst_29240 = inst_29257;
var inst_29241 = (0);
var state_29365__$1 = (function (){var statearr_29393 = state_29365;
(statearr_29393[(7)] = inst_29239);

(statearr_29393[(8)] = inst_29240);

(statearr_29393[(9)] = inst_29241);

(statearr_29393[(10)] = inst_29238);

return statearr_29393;
})();
var statearr_29394_29466 = state_29365__$1;
(statearr_29394_29466[(2)] = null);

(statearr_29394_29466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (22))){
var inst_29290 = (state_29365[(15)]);
var inst_29303 = (state_29365[(2)]);
var inst_29304 = cljs.core.not_empty.call(null,inst_29290);
var state_29365__$1 = (function (){var statearr_29395 = state_29365;
(statearr_29395[(28)] = inst_29303);

return statearr_29395;
})();
if(cljs.core.truth_(inst_29304)){
var statearr_29396_29467 = state_29365__$1;
(statearr_29396_29467[(1)] = (23));

} else {
var statearr_29397_29468 = state_29365__$1;
(statearr_29397_29468[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (36))){
var state_29365__$1 = state_29365;
var statearr_29398_29469 = state_29365__$1;
(statearr_29398_29469[(2)] = null);

(statearr_29398_29469[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (41))){
var inst_29333 = (state_29365[(25)]);
var inst_29354 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29333);
var inst_29355 = cljs.core.pr_str.call(null,inst_29354);
var inst_29356 = [cljs.core.str("not required: "),cljs.core.str(inst_29355)].join('');
var inst_29357 = figwheel.client.utils.log.call(null,inst_29356);
var state_29365__$1 = state_29365;
var statearr_29399_29470 = state_29365__$1;
(statearr_29399_29470[(2)] = inst_29357);

(statearr_29399_29470[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (43))){
var inst_29360 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29400_29471 = state_29365__$1;
(statearr_29400_29471[(2)] = inst_29360);

(statearr_29400_29471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (29))){
var state_29365__$1 = state_29365;
var statearr_29401_29472 = state_29365__$1;
(statearr_29401_29472[(2)] = true);

(statearr_29401_29472[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (6))){
var inst_29272 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29402_29473 = state_29365__$1;
(statearr_29402_29473[(2)] = inst_29272);

(statearr_29402_29473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (28))){
var inst_29325 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29325)){
var statearr_29403_29474 = state_29365__$1;
(statearr_29403_29474[(1)] = (32));

} else {
var statearr_29404_29475 = state_29365__$1;
(statearr_29404_29475[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (25))){
var inst_29363 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29365__$1,inst_29363);
} else {
if((state_val_29366 === (34))){
var inst_29331 = (state_29365[(29)]);
var inst_29330 = (state_29365[(2)]);
var inst_29331__$1 = cljs.core.get.call(null,inst_29330,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29332 = cljs.core.get.call(null,inst_29330,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29333 = cljs.core.get.call(null,inst_29330,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29334 = cljs.core.not_empty.call(null,inst_29331__$1);
var state_29365__$1 = (function (){var statearr_29405 = state_29365;
(statearr_29405[(29)] = inst_29331__$1);

(statearr_29405[(25)] = inst_29333);

(statearr_29405[(30)] = inst_29332);

return statearr_29405;
})();
if(cljs.core.truth_(inst_29334)){
var statearr_29406_29476 = state_29365__$1;
(statearr_29406_29476[(1)] = (35));

} else {
var statearr_29407_29477 = state_29365__$1;
(statearr_29407_29477[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (17))){
var inst_29277 = (state_29365[(23)]);
var state_29365__$1 = state_29365;
var statearr_29408_29478 = state_29365__$1;
(statearr_29408_29478[(2)] = inst_29277);

(statearr_29408_29478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (3))){
var state_29365__$1 = state_29365;
var statearr_29409_29479 = state_29365__$1;
(statearr_29409_29479[(2)] = null);

(statearr_29409_29479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (12))){
var inst_29268 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29410_29480 = state_29365__$1;
(statearr_29410_29480[(2)] = inst_29268);

(statearr_29410_29480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (2))){
var inst_29230 = (state_29365[(19)]);
var inst_29237 = cljs.core.seq.call(null,inst_29230);
var inst_29238 = inst_29237;
var inst_29239 = null;
var inst_29240 = (0);
var inst_29241 = (0);
var state_29365__$1 = (function (){var statearr_29411 = state_29365;
(statearr_29411[(7)] = inst_29239);

(statearr_29411[(8)] = inst_29240);

(statearr_29411[(9)] = inst_29241);

(statearr_29411[(10)] = inst_29238);

return statearr_29411;
})();
var statearr_29412_29481 = state_29365__$1;
(statearr_29412_29481[(2)] = null);

(statearr_29412_29481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (23))){
var inst_29283 = (state_29365[(12)]);
var inst_29284 = (state_29365[(13)]);
var inst_29287 = (state_29365[(14)]);
var inst_29290 = (state_29365[(15)]);
var inst_29310 = (state_29365[(24)]);
var inst_29288 = (state_29365[(16)]);
var inst_29306 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29309 = (function (){var all_files = inst_29283;
var files_SINGLEQUOTE_ = inst_29284;
var res_SINGLEQUOTE_ = inst_29287;
var res = inst_29288;
var files_not_loaded = inst_29290;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29283,inst_29284,inst_29287,inst_29290,inst_29310,inst_29288,inst_29306,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (p__29308){
var map__29413 = p__29308;
var map__29413__$1 = ((((!((map__29413 == null)))?((((map__29413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29413):map__29413);
var meta_data = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29283,inst_29284,inst_29287,inst_29290,inst_29310,inst_29288,inst_29306,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29310__$1 = cljs.core.group_by.call(null,inst_29309,inst_29290);
var inst_29312 = (inst_29310__$1 == null);
var inst_29313 = cljs.core.not.call(null,inst_29312);
var state_29365__$1 = (function (){var statearr_29415 = state_29365;
(statearr_29415[(31)] = inst_29306);

(statearr_29415[(24)] = inst_29310__$1);

return statearr_29415;
})();
if(inst_29313){
var statearr_29416_29482 = state_29365__$1;
(statearr_29416_29482[(1)] = (26));

} else {
var statearr_29417_29483 = state_29365__$1;
(statearr_29417_29483[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (35))){
var inst_29331 = (state_29365[(29)]);
var inst_29336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29331);
var inst_29337 = cljs.core.pr_str.call(null,inst_29336);
var inst_29338 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29337)].join('');
var inst_29339 = figwheel.client.utils.log.call(null,inst_29338);
var state_29365__$1 = state_29365;
var statearr_29418_29484 = state_29365__$1;
(statearr_29418_29484[(2)] = inst_29339);

(statearr_29418_29484[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (19))){
var inst_29283 = (state_29365[(12)]);
var inst_29284 = (state_29365[(13)]);
var inst_29287 = (state_29365[(14)]);
var inst_29288 = (state_29365[(16)]);
var inst_29287__$1 = (state_29365[(2)]);
var inst_29288__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29287__$1);
var inst_29289 = (function (){var all_files = inst_29283;
var files_SINGLEQUOTE_ = inst_29284;
var res_SINGLEQUOTE_ = inst_29287__$1;
var res = inst_29288__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29283,inst_29284,inst_29287,inst_29288,inst_29287__$1,inst_29288__$1,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (p1__28993_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28993_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29283,inst_29284,inst_29287,inst_29288,inst_29287__$1,inst_29288__$1,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29290 = cljs.core.filter.call(null,inst_29289,inst_29287__$1);
var inst_29291 = cljs.core.not_empty.call(null,inst_29288__$1);
var state_29365__$1 = (function (){var statearr_29419 = state_29365;
(statearr_29419[(14)] = inst_29287__$1);

(statearr_29419[(15)] = inst_29290);

(statearr_29419[(16)] = inst_29288__$1);

return statearr_29419;
})();
if(cljs.core.truth_(inst_29291)){
var statearr_29420_29485 = state_29365__$1;
(statearr_29420_29485[(1)] = (20));

} else {
var statearr_29421_29486 = state_29365__$1;
(statearr_29421_29486[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (11))){
var state_29365__$1 = state_29365;
var statearr_29422_29487 = state_29365__$1;
(statearr_29422_29487[(2)] = null);

(statearr_29422_29487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (9))){
var inst_29270 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29423_29488 = state_29365__$1;
(statearr_29423_29488[(2)] = inst_29270);

(statearr_29423_29488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (5))){
var inst_29240 = (state_29365[(8)]);
var inst_29241 = (state_29365[(9)]);
var inst_29243 = (inst_29241 < inst_29240);
var inst_29244 = inst_29243;
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29244)){
var statearr_29424_29489 = state_29365__$1;
(statearr_29424_29489[(1)] = (7));

} else {
var statearr_29425_29490 = state_29365__$1;
(statearr_29425_29490[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (14))){
var inst_29251 = (state_29365[(27)]);
var inst_29260 = cljs.core.first.call(null,inst_29251);
var inst_29261 = figwheel.client.file_reloading.eval_body.call(null,inst_29260,opts);
var inst_29262 = cljs.core.next.call(null,inst_29251);
var inst_29238 = inst_29262;
var inst_29239 = null;
var inst_29240 = (0);
var inst_29241 = (0);
var state_29365__$1 = (function (){var statearr_29426 = state_29365;
(statearr_29426[(7)] = inst_29239);

(statearr_29426[(8)] = inst_29240);

(statearr_29426[(9)] = inst_29241);

(statearr_29426[(10)] = inst_29238);

(statearr_29426[(32)] = inst_29261);

return statearr_29426;
})();
var statearr_29427_29491 = state_29365__$1;
(statearr_29427_29491[(2)] = null);

(statearr_29427_29491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (26))){
var inst_29310 = (state_29365[(24)]);
var inst_29315 = inst_29310.cljs$lang$protocol_mask$partition0$;
var inst_29316 = (inst_29315 & (64));
var inst_29317 = inst_29310.cljs$core$ISeq$;
var inst_29318 = (inst_29316) || (inst_29317);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29318)){
var statearr_29428_29492 = state_29365__$1;
(statearr_29428_29492[(1)] = (29));

} else {
var statearr_29429_29493 = state_29365__$1;
(statearr_29429_29493[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (16))){
var inst_29277 = (state_29365[(23)]);
var inst_29279 = (function (){var all_files = inst_29277;
return ((function (all_files,inst_29277,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function (p1__28992_SHARP_){
return cljs.core.update_in.call(null,p1__28992_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29277,state_val_29366,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var inst_29280 = cljs.core.map.call(null,inst_29279,inst_29277);
var state_29365__$1 = state_29365;
var statearr_29430_29494 = state_29365__$1;
(statearr_29430_29494[(2)] = inst_29280);

(statearr_29430_29494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (38))){
var inst_29332 = (state_29365[(30)]);
var inst_29345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29332);
var inst_29346 = cljs.core.pr_str.call(null,inst_29345);
var inst_29347 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29346)].join('');
var inst_29348 = figwheel.client.utils.log.call(null,inst_29347);
var state_29365__$1 = state_29365;
var statearr_29431_29495 = state_29365__$1;
(statearr_29431_29495[(2)] = inst_29348);

(statearr_29431_29495[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (30))){
var state_29365__$1 = state_29365;
var statearr_29432_29496 = state_29365__$1;
(statearr_29432_29496[(2)] = false);

(statearr_29432_29496[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (10))){
var inst_29251 = (state_29365[(27)]);
var inst_29253 = cljs.core.chunked_seq_QMARK_.call(null,inst_29251);
var state_29365__$1 = state_29365;
if(inst_29253){
var statearr_29433_29497 = state_29365__$1;
(statearr_29433_29497[(1)] = (13));

} else {
var statearr_29434_29498 = state_29365__$1;
(statearr_29434_29498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (18))){
var inst_29283 = (state_29365[(12)]);
var inst_29284 = (state_29365[(13)]);
var inst_29283__$1 = (state_29365[(2)]);
var inst_29284__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29283__$1);
var inst_29285 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29284__$1);
var state_29365__$1 = (function (){var statearr_29435 = state_29365;
(statearr_29435[(12)] = inst_29283__$1);

(statearr_29435[(13)] = inst_29284__$1);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29365__$1,(19),inst_29285);
} else {
if((state_val_29366 === (42))){
var state_29365__$1 = state_29365;
var statearr_29436_29499 = state_29365__$1;
(statearr_29436_29499[(2)] = null);

(statearr_29436_29499[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (37))){
var inst_29332 = (state_29365[(30)]);
var inst_29342 = (state_29365[(2)]);
var inst_29343 = cljs.core.not_empty.call(null,inst_29332);
var state_29365__$1 = (function (){var statearr_29437 = state_29365;
(statearr_29437[(33)] = inst_29342);

return statearr_29437;
})();
if(cljs.core.truth_(inst_29343)){
var statearr_29438_29500 = state_29365__$1;
(statearr_29438_29500[(1)] = (38));

} else {
var statearr_29439_29501 = state_29365__$1;
(statearr_29439_29501[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (8))){
var inst_29251 = (state_29365[(27)]);
var inst_29238 = (state_29365[(10)]);
var inst_29251__$1 = cljs.core.seq.call(null,inst_29238);
var state_29365__$1 = (function (){var statearr_29440 = state_29365;
(statearr_29440[(27)] = inst_29251__$1);

return statearr_29440;
})();
if(inst_29251__$1){
var statearr_29441_29502 = state_29365__$1;
(statearr_29441_29502[(1)] = (10));

} else {
var statearr_29442_29503 = state_29365__$1;
(statearr_29442_29503[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
});})(c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
;
return ((function (switch__19587__auto__,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____0 = (function (){
var statearr_29446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29446[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__);

(statearr_29446[(1)] = (1));

return statearr_29446;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____1 = (function (state_29365){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_29365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e29447){if((e29447 instanceof Object)){
var ex__19591__auto__ = e29447;
var statearr_29448_29504 = state_29365;
(statearr_29448_29504[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29505 = state_29365;
state_29365 = G__29505;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
})();
var state__19654__auto__ = (function (){var statearr_29449 = f__19653__auto__.call(null);
(statearr_29449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,map__29223,map__29223__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29224,map__29224__$1,msg,files))
);

return c__19652__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29508,link){
var map__29511 = p__29508;
var map__29511__$1 = ((((!((map__29511 == null)))?((((map__29511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29511):map__29511);
var file = cljs.core.get.call(null,map__29511__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29511,map__29511__$1,file){
return (function (p1__29506_SHARP_,p2__29507_SHARP_){
if(cljs.core._EQ_.call(null,p1__29506_SHARP_,p2__29507_SHARP_)){
return p1__29506_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29511,map__29511__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29517){
var map__29518 = p__29517;
var map__29518__$1 = ((((!((map__29518 == null)))?((((map__29518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29518):map__29518);
var match_length = cljs.core.get.call(null,map__29518__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29518__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29513_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29513_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args29520 = [];
var len__17508__auto___29523 = arguments.length;
var i__17509__auto___29524 = (0);
while(true){
if((i__17509__auto___29524 < len__17508__auto___29523)){
args29520.push((arguments[i__17509__auto___29524]));

var G__29525 = (i__17509__auto___29524 + (1));
i__17509__auto___29524 = G__29525;
continue;
} else {
}
break;
}

var G__29522 = args29520.length;
switch (G__29522) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29520.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29527){
var map__29530 = p__29527;
var map__29530__$1 = ((((!((map__29530 == null)))?((((map__29530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29530):map__29530);
var f_data = map__29530__$1;
var file = cljs.core.get.call(null,map__29530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16469__auto__ = request_url;
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29532,files_msg){
var map__29555 = p__29532;
var map__29555__$1 = ((((!((map__29555 == null)))?((((map__29555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29555):map__29555);
var opts = map__29555__$1;
var on_cssload = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29557_29577 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29558_29578 = null;
var count__29559_29579 = (0);
var i__29560_29580 = (0);
while(true){
if((i__29560_29580 < count__29559_29579)){
var f_29581 = cljs.core._nth.call(null,chunk__29558_29578,i__29560_29580);
figwheel.client.file_reloading.reload_css_file.call(null,f_29581);

var G__29582 = seq__29557_29577;
var G__29583 = chunk__29558_29578;
var G__29584 = count__29559_29579;
var G__29585 = (i__29560_29580 + (1));
seq__29557_29577 = G__29582;
chunk__29558_29578 = G__29583;
count__29559_29579 = G__29584;
i__29560_29580 = G__29585;
continue;
} else {
var temp__4425__auto___29586 = cljs.core.seq.call(null,seq__29557_29577);
if(temp__4425__auto___29586){
var seq__29557_29587__$1 = temp__4425__auto___29586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29557_29587__$1)){
var c__17253__auto___29588 = cljs.core.chunk_first.call(null,seq__29557_29587__$1);
var G__29589 = cljs.core.chunk_rest.call(null,seq__29557_29587__$1);
var G__29590 = c__17253__auto___29588;
var G__29591 = cljs.core.count.call(null,c__17253__auto___29588);
var G__29592 = (0);
seq__29557_29577 = G__29589;
chunk__29558_29578 = G__29590;
count__29559_29579 = G__29591;
i__29560_29580 = G__29592;
continue;
} else {
var f_29593 = cljs.core.first.call(null,seq__29557_29587__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29593);

var G__29594 = cljs.core.next.call(null,seq__29557_29587__$1);
var G__29595 = null;
var G__29596 = (0);
var G__29597 = (0);
seq__29557_29577 = G__29594;
chunk__29558_29578 = G__29595;
count__29559_29579 = G__29596;
i__29560_29580 = G__29597;
continue;
}
} else {
}
}
break;
}

var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,map__29555,map__29555__$1,opts,on_cssload){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,map__29555,map__29555__$1,opts,on_cssload){
return (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (1))){
var inst_29561 = cljs.core.async.timeout.call(null,(100));
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29567__$1,(2),inst_29561);
} else {
if((state_val_29568 === (2))){
var inst_29563 = (state_29567[(2)]);
var inst_29564 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29565 = on_cssload.call(null,inst_29564);
var state_29567__$1 = (function (){var statearr_29569 = state_29567;
(statearr_29569[(7)] = inst_29563);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29567__$1,inst_29565);
} else {
return null;
}
}
});})(c__19652__auto__,map__29555,map__29555__$1,opts,on_cssload))
;
return ((function (switch__19587__auto__,c__19652__auto__,map__29555,map__29555__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____0 = (function (){
var statearr_29573 = [null,null,null,null,null,null,null,null];
(statearr_29573[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__);

(statearr_29573[(1)] = (1));

return statearr_29573;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____1 = (function (state_29567){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_29567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e29574){if((e29574 instanceof Object)){
var ex__19591__auto__ = e29574;
var statearr_29575_29598 = state_29567;
(statearr_29575_29598[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29599 = state_29567;
state_29567 = G__29599;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,map__29555,map__29555__$1,opts,on_cssload))
})();
var state__19654__auto__ = (function (){var statearr_29576 = f__19653__auto__.call(null);
(statearr_29576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_29576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,map__29555,map__29555__$1,opts,on_cssload))
);

return c__19652__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map