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
return cljs.core.reduce.call(null,(function (p1__28892_SHARP_,p2__28893_SHARP_){
var and__16499__auto__ = p1__28892_SHARP_;
if(cljs.core.truth_(and__16499__auto__)){
return p2__28893_SHARP_;
} else {
return and__16499__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16511__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16511__auto__){
return or__16511__auto__;
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
if(cljs.core.truth_((function (){var or__16511__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16511__auto__){
return or__16511__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16511__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17405__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17409__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17409__auto__,method_table__17405__auto__,prefer_table__17406__auto__,method_cache__17407__auto__,cached_hierarchy__17408__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28894){
var map__28895 = p__28894;
var map__28895__$1 = ((((!((map__28895 == null)))?((((map__28895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28895):map__28895);
var file = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28897){
var map__28898 = p__28897;
var map__28898__$1 = ((((!((map__28898 == null)))?((((map__28898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28898):map__28898);
var namespace = cljs.core.get.call(null,map__28898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17405__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17409__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17409__auto__,method_table__17405__auto__,prefer_table__17406__auto__,method_cache__17407__auto__,cached_hierarchy__17408__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28900){if((e28900 instanceof Error)){
var e = e28900;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28900;

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
var args28901 = [];
var len__17550__auto___28904 = arguments.length;
var i__17551__auto___28905 = (0);
while(true){
if((i__17551__auto___28905 < len__17550__auto___28904)){
args28901.push((arguments[i__17551__auto___28905]));

var G__28906 = (i__17551__auto___28905 + (1));
i__17551__auto___28905 = G__28906;
continue;
} else {
}
break;
}

var G__28903 = args28901.length;
switch (G__28903) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28901.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28908,callback){
var map__28911 = p__28908;
var map__28911__$1 = ((((!((map__28911 == null)))?((((map__28911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28911):map__28911);
var file_msg = map__28911__$1;
var request_url = cljs.core.get.call(null,map__28911__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28911,map__28911__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28911,map__28911__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28913){
var map__28916 = p__28913;
var map__28916__$1 = ((((!((map__28916 == null)))?((((map__28916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28916):map__28916);
var file_msg = map__28916__$1;
var namespace = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__28916__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16511__auto__ = meta_data;
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16499__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16499__auto__){
var or__16511__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
var or__16511__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16511__auto____$1)){
return or__16511__auto____$1;
} else {
var and__16499__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16499__auto____$1){
var or__16511__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16511__auto____$2){
return or__16511__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16499__auto____$1;
}
}
}
} else {
return and__16499__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28918,callback){
var map__28921 = p__28918;
var map__28921__$1 = ((((!((map__28921 == null)))?((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var file_msg = map__28921__$1;
var request_url = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19694__auto___29009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___29009,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___29009,out){
return (function (state_28991){
var state_val_28992 = (state_28991[(1)]);
if((state_val_28992 === (1))){
var inst_28969 = cljs.core.nth.call(null,files,(0),null);
var inst_28970 = cljs.core.nthnext.call(null,files,(1));
var inst_28971 = files;
var state_28991__$1 = (function (){var statearr_28993 = state_28991;
(statearr_28993[(7)] = inst_28970);

(statearr_28993[(8)] = inst_28969);

(statearr_28993[(9)] = inst_28971);

return statearr_28993;
})();
var statearr_28994_29010 = state_28991__$1;
(statearr_28994_29010[(2)] = null);

(statearr_28994_29010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28992 === (2))){
var inst_28974 = (state_28991[(10)]);
var inst_28971 = (state_28991[(9)]);
var inst_28974__$1 = cljs.core.nth.call(null,inst_28971,(0),null);
var inst_28975 = cljs.core.nthnext.call(null,inst_28971,(1));
var inst_28976 = (inst_28974__$1 == null);
var inst_28977 = cljs.core.not.call(null,inst_28976);
var state_28991__$1 = (function (){var statearr_28995 = state_28991;
(statearr_28995[(11)] = inst_28975);

(statearr_28995[(10)] = inst_28974__$1);

return statearr_28995;
})();
if(inst_28977){
var statearr_28996_29011 = state_28991__$1;
(statearr_28996_29011[(1)] = (4));

} else {
var statearr_28997_29012 = state_28991__$1;
(statearr_28997_29012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28992 === (3))){
var inst_28989 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28991__$1,inst_28989);
} else {
if((state_val_28992 === (4))){
var inst_28974 = (state_28991[(10)]);
var inst_28979 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28974);
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28991__$1,(7),inst_28979);
} else {
if((state_val_28992 === (5))){
var inst_28985 = cljs.core.async.close_BANG_.call(null,out);
var state_28991__$1 = state_28991;
var statearr_28998_29013 = state_28991__$1;
(statearr_28998_29013[(2)] = inst_28985);

(statearr_28998_29013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28992 === (6))){
var inst_28987 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
var statearr_28999_29014 = state_28991__$1;
(statearr_28999_29014[(2)] = inst_28987);

(statearr_28999_29014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28992 === (7))){
var inst_28975 = (state_28991[(11)]);
var inst_28981 = (state_28991[(2)]);
var inst_28982 = cljs.core.async.put_BANG_.call(null,out,inst_28981);
var inst_28971 = inst_28975;
var state_28991__$1 = (function (){var statearr_29000 = state_28991;
(statearr_29000[(12)] = inst_28982);

(statearr_29000[(9)] = inst_28971);

return statearr_29000;
})();
var statearr_29001_29015 = state_28991__$1;
(statearr_29001_29015[(2)] = null);

(statearr_29001_29015[(1)] = (2));


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
});})(c__19694__auto___29009,out))
;
return ((function (switch__19629__auto__,c__19694__auto___29009,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto____0 = (function (){
var statearr_29005 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29005[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto__);

(statearr_29005[(1)] = (1));

return statearr_29005;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto____1 = (function (state_28991){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e29006){if((e29006 instanceof Object)){
var ex__19633__auto__ = e29006;
var statearr_29007_29016 = state_28991;
(statearr_29007_29016[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29017 = state_28991;
state_28991 = G__29017;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto__ = function(state_28991){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto____1.call(this,state_28991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___29009,out))
})();
var state__19696__auto__ = (function (){var statearr_29008 = f__19695__auto__.call(null);
(statearr_29008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___29009);

return statearr_29008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___29009,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29018,p__29019){
var map__29024 = p__29018;
var map__29024__$1 = ((((!((map__29024 == null)))?((((map__29024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29024):map__29024);
var opts = map__29024__$1;
var url_rewriter = cljs.core.get.call(null,map__29024__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29025 = p__29019;
var map__29025__$1 = ((((!((map__29025 == null)))?((((map__29025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29025):map__29025);
var file_msg = map__29025__$1;
var file = cljs.core.get.call(null,map__29025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29028,opts){
var map__29032 = p__29028;
var map__29032__$1 = ((((!((map__29032 == null)))?((((map__29032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29032):map__29032);
var eval_body__$1 = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16499__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16499__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16499__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29034){var e = e29034;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29039,p__29040){
var map__29268 = p__29039;
var map__29268__$1 = ((((!((map__29268 == null)))?((((map__29268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29268):map__29268);
var opts = map__29268__$1;
var before_jsload = cljs.core.get.call(null,map__29268__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29268__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29268__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29269 = p__29040;
var map__29269__$1 = ((((!((map__29269 == null)))?((((map__29269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29269):map__29269);
var msg = map__29269__$1;
var files = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (state_29410){
var state_val_29411 = (state_29410[(1)]);
if((state_val_29411 === (7))){
var inst_29283 = (state_29410[(7)]);
var inst_29284 = (state_29410[(8)]);
var inst_29285 = (state_29410[(9)]);
var inst_29286 = (state_29410[(10)]);
var inst_29291 = cljs.core._nth.call(null,inst_29284,inst_29286);
var inst_29292 = figwheel.client.file_reloading.eval_body.call(null,inst_29291,opts);
var inst_29293 = (inst_29286 + (1));
var tmp29412 = inst_29283;
var tmp29413 = inst_29284;
var tmp29414 = inst_29285;
var inst_29283__$1 = tmp29412;
var inst_29284__$1 = tmp29413;
var inst_29285__$1 = tmp29414;
var inst_29286__$1 = inst_29293;
var state_29410__$1 = (function (){var statearr_29415 = state_29410;
(statearr_29415[(7)] = inst_29283__$1);

(statearr_29415[(8)] = inst_29284__$1);

(statearr_29415[(11)] = inst_29292);

(statearr_29415[(9)] = inst_29285__$1);

(statearr_29415[(10)] = inst_29286__$1);

return statearr_29415;
})();
var statearr_29416_29495 = state_29410__$1;
(statearr_29416_29495[(2)] = null);

(statearr_29416_29495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (20))){
var inst_29333 = (state_29410[(12)]);
var inst_29332 = (state_29410[(13)]);
var inst_29335 = (state_29410[(14)]);
var inst_29328 = (state_29410[(15)]);
var inst_29329 = (state_29410[(16)]);
var inst_29338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29340 = (function (){var all_files = inst_29328;
var files_SINGLEQUOTE_ = inst_29329;
var res_SINGLEQUOTE_ = inst_29332;
var res = inst_29333;
var files_not_loaded = inst_29335;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29333,inst_29332,inst_29335,inst_29328,inst_29329,inst_29338,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (p__29339){
var map__29417 = p__29339;
var map__29417__$1 = ((((!((map__29417 == null)))?((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var namespace = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29333,inst_29332,inst_29335,inst_29328,inst_29329,inst_29338,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29341 = cljs.core.map.call(null,inst_29340,inst_29333);
var inst_29342 = cljs.core.pr_str.call(null,inst_29341);
var inst_29343 = figwheel.client.utils.log.call(null,inst_29342);
var inst_29344 = (function (){var all_files = inst_29328;
var files_SINGLEQUOTE_ = inst_29329;
var res_SINGLEQUOTE_ = inst_29332;
var res = inst_29333;
var files_not_loaded = inst_29335;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29333,inst_29332,inst_29335,inst_29328,inst_29329,inst_29338,inst_29340,inst_29341,inst_29342,inst_29343,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29333,inst_29332,inst_29335,inst_29328,inst_29329,inst_29338,inst_29340,inst_29341,inst_29342,inst_29343,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29345 = setTimeout(inst_29344,(10));
var state_29410__$1 = (function (){var statearr_29419 = state_29410;
(statearr_29419[(17)] = inst_29343);

(statearr_29419[(18)] = inst_29338);

return statearr_29419;
})();
var statearr_29420_29496 = state_29410__$1;
(statearr_29420_29496[(2)] = inst_29345);

(statearr_29420_29496[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (27))){
var state_29410__$1 = state_29410;
var statearr_29421_29497 = state_29410__$1;
(statearr_29421_29497[(2)] = false);

(statearr_29421_29497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (1))){
var inst_29275 = (state_29410[(19)]);
var inst_29272 = before_jsload.call(null,files);
var inst_29273 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29274 = (function (){return ((function (inst_29275,inst_29272,inst_29273,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (p1__29035_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29035_SHARP_);
});
;})(inst_29275,inst_29272,inst_29273,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29275__$1 = cljs.core.filter.call(null,inst_29274,files);
var inst_29276 = cljs.core.not_empty.call(null,inst_29275__$1);
var state_29410__$1 = (function (){var statearr_29422 = state_29410;
(statearr_29422[(19)] = inst_29275__$1);

(statearr_29422[(20)] = inst_29272);

(statearr_29422[(21)] = inst_29273);

return statearr_29422;
})();
if(cljs.core.truth_(inst_29276)){
var statearr_29423_29498 = state_29410__$1;
(statearr_29423_29498[(1)] = (2));

} else {
var statearr_29424_29499 = state_29410__$1;
(statearr_29424_29499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (24))){
var state_29410__$1 = state_29410;
var statearr_29425_29500 = state_29410__$1;
(statearr_29425_29500[(2)] = null);

(statearr_29425_29500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (39))){
var state_29410__$1 = state_29410;
var statearr_29426_29501 = state_29410__$1;
(statearr_29426_29501[(2)] = null);

(statearr_29426_29501[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (4))){
var inst_29320 = (state_29410[(2)]);
var inst_29321 = (function (){return ((function (inst_29320,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (p1__29036_SHARP_){
var and__16499__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29036_SHARP_);
if(cljs.core.truth_(and__16499__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29036_SHARP_));
} else {
return and__16499__auto__;
}
});
;})(inst_29320,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29322 = cljs.core.filter.call(null,inst_29321,files);
var state_29410__$1 = (function (){var statearr_29427 = state_29410;
(statearr_29427[(22)] = inst_29320);

(statearr_29427[(23)] = inst_29322);

return statearr_29427;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29428_29502 = state_29410__$1;
(statearr_29428_29502[(1)] = (16));

} else {
var statearr_29429_29503 = state_29410__$1;
(statearr_29429_29503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (15))){
var inst_29310 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29430_29504 = state_29410__$1;
(statearr_29430_29504[(2)] = inst_29310);

(statearr_29430_29504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (21))){
var state_29410__$1 = state_29410;
var statearr_29431_29505 = state_29410__$1;
(statearr_29431_29505[(2)] = null);

(statearr_29431_29505[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (31))){
var inst_29367 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29432_29506 = state_29410__$1;
(statearr_29432_29506[(2)] = inst_29367);

(statearr_29432_29506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (32))){
var inst_29355 = (state_29410[(24)]);
var inst_29372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29355);
var state_29410__$1 = state_29410;
var statearr_29433_29507 = state_29410__$1;
(statearr_29433_29507[(2)] = inst_29372);

(statearr_29433_29507[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (40))){
var inst_29378 = (state_29410[(25)]);
var inst_29396 = (state_29410[(2)]);
var inst_29397 = cljs.core.not_empty.call(null,inst_29378);
var state_29410__$1 = (function (){var statearr_29434 = state_29410;
(statearr_29434[(26)] = inst_29396);

return statearr_29434;
})();
if(cljs.core.truth_(inst_29397)){
var statearr_29435_29508 = state_29410__$1;
(statearr_29435_29508[(1)] = (41));

} else {
var statearr_29436_29509 = state_29410__$1;
(statearr_29436_29509[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (33))){
var inst_29355 = (state_29410[(24)]);
var state_29410__$1 = state_29410;
var statearr_29437_29510 = state_29410__$1;
(statearr_29437_29510[(2)] = inst_29355);

(statearr_29437_29510[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (13))){
var inst_29296 = (state_29410[(27)]);
var inst_29300 = cljs.core.chunk_first.call(null,inst_29296);
var inst_29301 = cljs.core.chunk_rest.call(null,inst_29296);
var inst_29302 = cljs.core.count.call(null,inst_29300);
var inst_29283 = inst_29301;
var inst_29284 = inst_29300;
var inst_29285 = inst_29302;
var inst_29286 = (0);
var state_29410__$1 = (function (){var statearr_29438 = state_29410;
(statearr_29438[(7)] = inst_29283);

(statearr_29438[(8)] = inst_29284);

(statearr_29438[(9)] = inst_29285);

(statearr_29438[(10)] = inst_29286);

return statearr_29438;
})();
var statearr_29439_29511 = state_29410__$1;
(statearr_29439_29511[(2)] = null);

(statearr_29439_29511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (22))){
var inst_29335 = (state_29410[(14)]);
var inst_29348 = (state_29410[(2)]);
var inst_29349 = cljs.core.not_empty.call(null,inst_29335);
var state_29410__$1 = (function (){var statearr_29440 = state_29410;
(statearr_29440[(28)] = inst_29348);

return statearr_29440;
})();
if(cljs.core.truth_(inst_29349)){
var statearr_29441_29512 = state_29410__$1;
(statearr_29441_29512[(1)] = (23));

} else {
var statearr_29442_29513 = state_29410__$1;
(statearr_29442_29513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (36))){
var state_29410__$1 = state_29410;
var statearr_29443_29514 = state_29410__$1;
(statearr_29443_29514[(2)] = null);

(statearr_29443_29514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (41))){
var inst_29378 = (state_29410[(25)]);
var inst_29399 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29378);
var inst_29400 = cljs.core.pr_str.call(null,inst_29399);
var inst_29401 = [cljs.core.str("not required: "),cljs.core.str(inst_29400)].join('');
var inst_29402 = figwheel.client.utils.log.call(null,inst_29401);
var state_29410__$1 = state_29410;
var statearr_29444_29515 = state_29410__$1;
(statearr_29444_29515[(2)] = inst_29402);

(statearr_29444_29515[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (43))){
var inst_29405 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29445_29516 = state_29410__$1;
(statearr_29445_29516[(2)] = inst_29405);

(statearr_29445_29516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (29))){
var state_29410__$1 = state_29410;
var statearr_29446_29517 = state_29410__$1;
(statearr_29446_29517[(2)] = true);

(statearr_29446_29517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (6))){
var inst_29317 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29447_29518 = state_29410__$1;
(statearr_29447_29518[(2)] = inst_29317);

(statearr_29447_29518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (28))){
var inst_29370 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
if(cljs.core.truth_(inst_29370)){
var statearr_29448_29519 = state_29410__$1;
(statearr_29448_29519[(1)] = (32));

} else {
var statearr_29449_29520 = state_29410__$1;
(statearr_29449_29520[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (25))){
var inst_29408 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29410__$1,inst_29408);
} else {
if((state_val_29411 === (34))){
var inst_29376 = (state_29410[(29)]);
var inst_29375 = (state_29410[(2)]);
var inst_29376__$1 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29377 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29378 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29379 = cljs.core.not_empty.call(null,inst_29376__$1);
var state_29410__$1 = (function (){var statearr_29450 = state_29410;
(statearr_29450[(30)] = inst_29377);

(statearr_29450[(25)] = inst_29378);

(statearr_29450[(29)] = inst_29376__$1);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29379)){
var statearr_29451_29521 = state_29410__$1;
(statearr_29451_29521[(1)] = (35));

} else {
var statearr_29452_29522 = state_29410__$1;
(statearr_29452_29522[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (17))){
var inst_29322 = (state_29410[(23)]);
var state_29410__$1 = state_29410;
var statearr_29453_29523 = state_29410__$1;
(statearr_29453_29523[(2)] = inst_29322);

(statearr_29453_29523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (3))){
var state_29410__$1 = state_29410;
var statearr_29454_29524 = state_29410__$1;
(statearr_29454_29524[(2)] = null);

(statearr_29454_29524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (12))){
var inst_29313 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29455_29525 = state_29410__$1;
(statearr_29455_29525[(2)] = inst_29313);

(statearr_29455_29525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (2))){
var inst_29275 = (state_29410[(19)]);
var inst_29282 = cljs.core.seq.call(null,inst_29275);
var inst_29283 = inst_29282;
var inst_29284 = null;
var inst_29285 = (0);
var inst_29286 = (0);
var state_29410__$1 = (function (){var statearr_29456 = state_29410;
(statearr_29456[(7)] = inst_29283);

(statearr_29456[(8)] = inst_29284);

(statearr_29456[(9)] = inst_29285);

(statearr_29456[(10)] = inst_29286);

return statearr_29456;
})();
var statearr_29457_29526 = state_29410__$1;
(statearr_29457_29526[(2)] = null);

(statearr_29457_29526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (23))){
var inst_29333 = (state_29410[(12)]);
var inst_29332 = (state_29410[(13)]);
var inst_29335 = (state_29410[(14)]);
var inst_29355 = (state_29410[(24)]);
var inst_29328 = (state_29410[(15)]);
var inst_29329 = (state_29410[(16)]);
var inst_29351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29354 = (function (){var all_files = inst_29328;
var files_SINGLEQUOTE_ = inst_29329;
var res_SINGLEQUOTE_ = inst_29332;
var res = inst_29333;
var files_not_loaded = inst_29335;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29333,inst_29332,inst_29335,inst_29355,inst_29328,inst_29329,inst_29351,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (p__29353){
var map__29458 = p__29353;
var map__29458__$1 = ((((!((map__29458 == null)))?((((map__29458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29458):map__29458);
var meta_data = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29333,inst_29332,inst_29335,inst_29355,inst_29328,inst_29329,inst_29351,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29355__$1 = cljs.core.group_by.call(null,inst_29354,inst_29335);
var inst_29357 = (inst_29355__$1 == null);
var inst_29358 = cljs.core.not.call(null,inst_29357);
var state_29410__$1 = (function (){var statearr_29460 = state_29410;
(statearr_29460[(31)] = inst_29351);

(statearr_29460[(24)] = inst_29355__$1);

return statearr_29460;
})();
if(inst_29358){
var statearr_29461_29527 = state_29410__$1;
(statearr_29461_29527[(1)] = (26));

} else {
var statearr_29462_29528 = state_29410__$1;
(statearr_29462_29528[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (35))){
var inst_29376 = (state_29410[(29)]);
var inst_29381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29376);
var inst_29382 = cljs.core.pr_str.call(null,inst_29381);
var inst_29383 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29382)].join('');
var inst_29384 = figwheel.client.utils.log.call(null,inst_29383);
var state_29410__$1 = state_29410;
var statearr_29463_29529 = state_29410__$1;
(statearr_29463_29529[(2)] = inst_29384);

(statearr_29463_29529[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (19))){
var inst_29333 = (state_29410[(12)]);
var inst_29332 = (state_29410[(13)]);
var inst_29328 = (state_29410[(15)]);
var inst_29329 = (state_29410[(16)]);
var inst_29332__$1 = (state_29410[(2)]);
var inst_29333__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29332__$1);
var inst_29334 = (function (){var all_files = inst_29328;
var files_SINGLEQUOTE_ = inst_29329;
var res_SINGLEQUOTE_ = inst_29332__$1;
var res = inst_29333__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29333,inst_29332,inst_29328,inst_29329,inst_29332__$1,inst_29333__$1,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (p1__29038_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29038_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29333,inst_29332,inst_29328,inst_29329,inst_29332__$1,inst_29333__$1,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29335 = cljs.core.filter.call(null,inst_29334,inst_29332__$1);
var inst_29336 = cljs.core.not_empty.call(null,inst_29333__$1);
var state_29410__$1 = (function (){var statearr_29464 = state_29410;
(statearr_29464[(12)] = inst_29333__$1);

(statearr_29464[(13)] = inst_29332__$1);

(statearr_29464[(14)] = inst_29335);

return statearr_29464;
})();
if(cljs.core.truth_(inst_29336)){
var statearr_29465_29530 = state_29410__$1;
(statearr_29465_29530[(1)] = (20));

} else {
var statearr_29466_29531 = state_29410__$1;
(statearr_29466_29531[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (11))){
var state_29410__$1 = state_29410;
var statearr_29467_29532 = state_29410__$1;
(statearr_29467_29532[(2)] = null);

(statearr_29467_29532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (9))){
var inst_29315 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29468_29533 = state_29410__$1;
(statearr_29468_29533[(2)] = inst_29315);

(statearr_29468_29533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (5))){
var inst_29285 = (state_29410[(9)]);
var inst_29286 = (state_29410[(10)]);
var inst_29288 = (inst_29286 < inst_29285);
var inst_29289 = inst_29288;
var state_29410__$1 = state_29410;
if(cljs.core.truth_(inst_29289)){
var statearr_29469_29534 = state_29410__$1;
(statearr_29469_29534[(1)] = (7));

} else {
var statearr_29470_29535 = state_29410__$1;
(statearr_29470_29535[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (14))){
var inst_29296 = (state_29410[(27)]);
var inst_29305 = cljs.core.first.call(null,inst_29296);
var inst_29306 = figwheel.client.file_reloading.eval_body.call(null,inst_29305,opts);
var inst_29307 = cljs.core.next.call(null,inst_29296);
var inst_29283 = inst_29307;
var inst_29284 = null;
var inst_29285 = (0);
var inst_29286 = (0);
var state_29410__$1 = (function (){var statearr_29471 = state_29410;
(statearr_29471[(7)] = inst_29283);

(statearr_29471[(32)] = inst_29306);

(statearr_29471[(8)] = inst_29284);

(statearr_29471[(9)] = inst_29285);

(statearr_29471[(10)] = inst_29286);

return statearr_29471;
})();
var statearr_29472_29536 = state_29410__$1;
(statearr_29472_29536[(2)] = null);

(statearr_29472_29536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (26))){
var inst_29355 = (state_29410[(24)]);
var inst_29360 = inst_29355.cljs$lang$protocol_mask$partition0$;
var inst_29361 = (inst_29360 & (64));
var inst_29362 = inst_29355.cljs$core$ISeq$;
var inst_29363 = (inst_29361) || (inst_29362);
var state_29410__$1 = state_29410;
if(cljs.core.truth_(inst_29363)){
var statearr_29473_29537 = state_29410__$1;
(statearr_29473_29537[(1)] = (29));

} else {
var statearr_29474_29538 = state_29410__$1;
(statearr_29474_29538[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (16))){
var inst_29322 = (state_29410[(23)]);
var inst_29324 = (function (){var all_files = inst_29322;
return ((function (all_files,inst_29322,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function (p1__29037_SHARP_){
return cljs.core.update_in.call(null,p1__29037_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29322,state_val_29411,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var inst_29325 = cljs.core.map.call(null,inst_29324,inst_29322);
var state_29410__$1 = state_29410;
var statearr_29475_29539 = state_29410__$1;
(statearr_29475_29539[(2)] = inst_29325);

(statearr_29475_29539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (38))){
var inst_29377 = (state_29410[(30)]);
var inst_29390 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29377);
var inst_29391 = cljs.core.pr_str.call(null,inst_29390);
var inst_29392 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29391)].join('');
var inst_29393 = figwheel.client.utils.log.call(null,inst_29392);
var state_29410__$1 = state_29410;
var statearr_29476_29540 = state_29410__$1;
(statearr_29476_29540[(2)] = inst_29393);

(statearr_29476_29540[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (30))){
var state_29410__$1 = state_29410;
var statearr_29477_29541 = state_29410__$1;
(statearr_29477_29541[(2)] = false);

(statearr_29477_29541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (10))){
var inst_29296 = (state_29410[(27)]);
var inst_29298 = cljs.core.chunked_seq_QMARK_.call(null,inst_29296);
var state_29410__$1 = state_29410;
if(inst_29298){
var statearr_29478_29542 = state_29410__$1;
(statearr_29478_29542[(1)] = (13));

} else {
var statearr_29479_29543 = state_29410__$1;
(statearr_29479_29543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (18))){
var inst_29328 = (state_29410[(15)]);
var inst_29329 = (state_29410[(16)]);
var inst_29328__$1 = (state_29410[(2)]);
var inst_29329__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29328__$1);
var inst_29330 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29329__$1);
var state_29410__$1 = (function (){var statearr_29480 = state_29410;
(statearr_29480[(15)] = inst_29328__$1);

(statearr_29480[(16)] = inst_29329__$1);

return statearr_29480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29410__$1,(19),inst_29330);
} else {
if((state_val_29411 === (42))){
var state_29410__$1 = state_29410;
var statearr_29481_29544 = state_29410__$1;
(statearr_29481_29544[(2)] = null);

(statearr_29481_29544[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (37))){
var inst_29377 = (state_29410[(30)]);
var inst_29387 = (state_29410[(2)]);
var inst_29388 = cljs.core.not_empty.call(null,inst_29377);
var state_29410__$1 = (function (){var statearr_29482 = state_29410;
(statearr_29482[(33)] = inst_29387);

return statearr_29482;
})();
if(cljs.core.truth_(inst_29388)){
var statearr_29483_29545 = state_29410__$1;
(statearr_29483_29545[(1)] = (38));

} else {
var statearr_29484_29546 = state_29410__$1;
(statearr_29484_29546[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (8))){
var inst_29283 = (state_29410[(7)]);
var inst_29296 = (state_29410[(27)]);
var inst_29296__$1 = cljs.core.seq.call(null,inst_29283);
var state_29410__$1 = (function (){var statearr_29485 = state_29410;
(statearr_29485[(27)] = inst_29296__$1);

return statearr_29485;
})();
if(inst_29296__$1){
var statearr_29486_29547 = state_29410__$1;
(statearr_29486_29547[(1)] = (10));

} else {
var statearr_29487_29548 = state_29410__$1;
(statearr_29487_29548[(1)] = (11));

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
});})(c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
;
return ((function (switch__19629__auto__,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto____0 = (function (){
var statearr_29491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29491[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto__);

(statearr_29491[(1)] = (1));

return statearr_29491;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto____1 = (function (state_29410){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_29410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e29492){if((e29492 instanceof Object)){
var ex__19633__auto__ = e29492;
var statearr_29493_29549 = state_29410;
(statearr_29493_29549[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29550 = state_29410;
state_29410 = G__29550;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto__ = function(state_29410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto____1.call(this,state_29410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
})();
var state__19696__auto__ = (function (){var statearr_29494 = f__19695__auto__.call(null);
(statearr_29494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_29494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__,map__29268,map__29268__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29269,map__29269__$1,msg,files))
);

return c__19694__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29553,link){
var map__29556 = p__29553;
var map__29556__$1 = ((((!((map__29556 == null)))?((((map__29556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29556):map__29556);
var file = cljs.core.get.call(null,map__29556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29556,map__29556__$1,file){
return (function (p1__29551_SHARP_,p2__29552_SHARP_){
if(cljs.core._EQ_.call(null,p1__29551_SHARP_,p2__29552_SHARP_)){
return p1__29551_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29556,map__29556__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29562){
var map__29563 = p__29562;
var map__29563__$1 = ((((!((map__29563 == null)))?((((map__29563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29563):map__29563);
var match_length = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29558_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29558_SHARP_);
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
var args29565 = [];
var len__17550__auto___29568 = arguments.length;
var i__17551__auto___29569 = (0);
while(true){
if((i__17551__auto___29569 < len__17550__auto___29568)){
args29565.push((arguments[i__17551__auto___29569]));

var G__29570 = (i__17551__auto___29569 + (1));
i__17551__auto___29569 = G__29570;
continue;
} else {
}
break;
}

var G__29567 = args29565.length;
switch (G__29567) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29565.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29572){
var map__29575 = p__29572;
var map__29575__$1 = ((((!((map__29575 == null)))?((((map__29575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29575):map__29575);
var f_data = map__29575__$1;
var file = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16511__auto__ = request_url;
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29577,files_msg){
var map__29600 = p__29577;
var map__29600__$1 = ((((!((map__29600 == null)))?((((map__29600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29600):map__29600);
var opts = map__29600__$1;
var on_cssload = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29602_29622 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29603_29623 = null;
var count__29604_29624 = (0);
var i__29605_29625 = (0);
while(true){
if((i__29605_29625 < count__29604_29624)){
var f_29626 = cljs.core._nth.call(null,chunk__29603_29623,i__29605_29625);
figwheel.client.file_reloading.reload_css_file.call(null,f_29626);

var G__29627 = seq__29602_29622;
var G__29628 = chunk__29603_29623;
var G__29629 = count__29604_29624;
var G__29630 = (i__29605_29625 + (1));
seq__29602_29622 = G__29627;
chunk__29603_29623 = G__29628;
count__29604_29624 = G__29629;
i__29605_29625 = G__29630;
continue;
} else {
var temp__4425__auto___29631 = cljs.core.seq.call(null,seq__29602_29622);
if(temp__4425__auto___29631){
var seq__29602_29632__$1 = temp__4425__auto___29631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29602_29632__$1)){
var c__17295__auto___29633 = cljs.core.chunk_first.call(null,seq__29602_29632__$1);
var G__29634 = cljs.core.chunk_rest.call(null,seq__29602_29632__$1);
var G__29635 = c__17295__auto___29633;
var G__29636 = cljs.core.count.call(null,c__17295__auto___29633);
var G__29637 = (0);
seq__29602_29622 = G__29634;
chunk__29603_29623 = G__29635;
count__29604_29624 = G__29636;
i__29605_29625 = G__29637;
continue;
} else {
var f_29638 = cljs.core.first.call(null,seq__29602_29632__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29638);

var G__29639 = cljs.core.next.call(null,seq__29602_29632__$1);
var G__29640 = null;
var G__29641 = (0);
var G__29642 = (0);
seq__29602_29622 = G__29639;
chunk__29603_29623 = G__29640;
count__29604_29624 = G__29641;
i__29605_29625 = G__29642;
continue;
}
} else {
}
}
break;
}

var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__,map__29600,map__29600__$1,opts,on_cssload){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__,map__29600,map__29600__$1,opts,on_cssload){
return (function (state_29612){
var state_val_29613 = (state_29612[(1)]);
if((state_val_29613 === (1))){
var inst_29606 = cljs.core.async.timeout.call(null,(100));
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29612__$1,(2),inst_29606);
} else {
if((state_val_29613 === (2))){
var inst_29608 = (state_29612[(2)]);
var inst_29609 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29610 = on_cssload.call(null,inst_29609);
var state_29612__$1 = (function (){var statearr_29614 = state_29612;
(statearr_29614[(7)] = inst_29608);

return statearr_29614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29612__$1,inst_29610);
} else {
return null;
}
}
});})(c__19694__auto__,map__29600,map__29600__$1,opts,on_cssload))
;
return ((function (switch__19629__auto__,c__19694__auto__,map__29600,map__29600__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto____0 = (function (){
var statearr_29618 = [null,null,null,null,null,null,null,null];
(statearr_29618[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto__);

(statearr_29618[(1)] = (1));

return statearr_29618;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto____1 = (function (state_29612){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_29612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e29619){if((e29619 instanceof Object)){
var ex__19633__auto__ = e29619;
var statearr_29620_29643 = state_29612;
(statearr_29620_29643[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29612;
state_29612 = G__29644;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto__ = function(state_29612){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto____1.call(this,state_29612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__,map__29600,map__29600__$1,opts,on_cssload))
})();
var state__19696__auto__ = (function (){var statearr_29621 = f__19695__auto__.call(null);
(statearr_29621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_29621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__,map__29600,map__29600__$1,opts,on_cssload))
);

return c__19694__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map