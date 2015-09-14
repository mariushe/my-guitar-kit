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
return cljs.core.reduce.call(null,(function (p1__24703_SHARP_,p2__24704_SHARP_){
var and__16457__auto__ = p1__24703_SHARP_;
if(cljs.core.truth_(and__16457__auto__)){
return p2__24704_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24705){
var map__24706 = p__24705;
var map__24706__$1 = ((((!((map__24706 == null)))?((((map__24706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24706):map__24706);
var file = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__24708){
var map__24709 = p__24708;
var map__24709__$1 = ((((!((map__24709 == null)))?((((map__24709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24709):map__24709);
var namespace = cljs.core.get.call(null,map__24709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e24711){if((e24711 instanceof Error)){
var e = e24711;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24711;

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
var args24712 = [];
var len__17508__auto___24715 = arguments.length;
var i__17509__auto___24716 = (0);
while(true){
if((i__17509__auto___24716 < len__17508__auto___24715)){
args24712.push((arguments[i__17509__auto___24716]));

var G__24717 = (i__17509__auto___24716 + (1));
i__17509__auto___24716 = G__24717;
continue;
} else {
}
break;
}

var G__24714 = args24712.length;
switch (G__24714) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24712.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24719,callback){
var map__24722 = p__24719;
var map__24722__$1 = ((((!((map__24722 == null)))?((((map__24722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24722):map__24722);
var file_msg = map__24722__$1;
var request_url = cljs.core.get.call(null,map__24722__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24722,map__24722__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24722,map__24722__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24724){
var map__24727 = p__24724;
var map__24727__$1 = ((((!((map__24727 == null)))?((((map__24727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24727):map__24727);
var file_msg = map__24727__$1;
var namespace = cljs.core.get.call(null,map__24727__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__24727__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24729,callback){
var map__24732 = p__24729;
var map__24732__$1 = ((((!((map__24732 == null)))?((((map__24732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24732):map__24732);
var file_msg = map__24732__$1;
var request_url = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24732__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19652__auto___24820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___24820,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___24820,out){
return (function (state_24802){
var state_val_24803 = (state_24802[(1)]);
if((state_val_24803 === (1))){
var inst_24780 = cljs.core.nth.call(null,files,(0),null);
var inst_24781 = cljs.core.nthnext.call(null,files,(1));
var inst_24782 = files;
var state_24802__$1 = (function (){var statearr_24804 = state_24802;
(statearr_24804[(7)] = inst_24782);

(statearr_24804[(8)] = inst_24780);

(statearr_24804[(9)] = inst_24781);

return statearr_24804;
})();
var statearr_24805_24821 = state_24802__$1;
(statearr_24805_24821[(2)] = null);

(statearr_24805_24821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (2))){
var inst_24782 = (state_24802[(7)]);
var inst_24785 = (state_24802[(10)]);
var inst_24785__$1 = cljs.core.nth.call(null,inst_24782,(0),null);
var inst_24786 = cljs.core.nthnext.call(null,inst_24782,(1));
var inst_24787 = (inst_24785__$1 == null);
var inst_24788 = cljs.core.not.call(null,inst_24787);
var state_24802__$1 = (function (){var statearr_24806 = state_24802;
(statearr_24806[(10)] = inst_24785__$1);

(statearr_24806[(11)] = inst_24786);

return statearr_24806;
})();
if(inst_24788){
var statearr_24807_24822 = state_24802__$1;
(statearr_24807_24822[(1)] = (4));

} else {
var statearr_24808_24823 = state_24802__$1;
(statearr_24808_24823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (3))){
var inst_24800 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24802__$1,inst_24800);
} else {
if((state_val_24803 === (4))){
var inst_24785 = (state_24802[(10)]);
var inst_24790 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24785);
var state_24802__$1 = state_24802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24802__$1,(7),inst_24790);
} else {
if((state_val_24803 === (5))){
var inst_24796 = cljs.core.async.close_BANG_.call(null,out);
var state_24802__$1 = state_24802;
var statearr_24809_24824 = state_24802__$1;
(statearr_24809_24824[(2)] = inst_24796);

(statearr_24809_24824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (6))){
var inst_24798 = (state_24802[(2)]);
var state_24802__$1 = state_24802;
var statearr_24810_24825 = state_24802__$1;
(statearr_24810_24825[(2)] = inst_24798);

(statearr_24810_24825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24803 === (7))){
var inst_24786 = (state_24802[(11)]);
var inst_24792 = (state_24802[(2)]);
var inst_24793 = cljs.core.async.put_BANG_.call(null,out,inst_24792);
var inst_24782 = inst_24786;
var state_24802__$1 = (function (){var statearr_24811 = state_24802;
(statearr_24811[(7)] = inst_24782);

(statearr_24811[(12)] = inst_24793);

return statearr_24811;
})();
var statearr_24812_24826 = state_24802__$1;
(statearr_24812_24826[(2)] = null);

(statearr_24812_24826[(1)] = (2));


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
});})(c__19652__auto___24820,out))
;
return ((function (switch__19587__auto__,c__19652__auto___24820,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____0 = (function (){
var statearr_24816 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24816[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__);

(statearr_24816[(1)] = (1));

return statearr_24816;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____1 = (function (state_24802){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24817){if((e24817 instanceof Object)){
var ex__19591__auto__ = e24817;
var statearr_24818_24827 = state_24802;
(statearr_24818_24827[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24828 = state_24802;
state_24802 = G__24828;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__ = function(state_24802){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____1.call(this,state_24802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___24820,out))
})();
var state__19654__auto__ = (function (){var statearr_24819 = f__19653__auto__.call(null);
(statearr_24819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___24820);

return statearr_24819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___24820,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__24829,p__24830){
var map__24835 = p__24829;
var map__24835__$1 = ((((!((map__24835 == null)))?((((map__24835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24835):map__24835);
var opts = map__24835__$1;
var url_rewriter = cljs.core.get.call(null,map__24835__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__24836 = p__24830;
var map__24836__$1 = ((((!((map__24836 == null)))?((((map__24836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24836):map__24836);
var file_msg = map__24836__$1;
var file = cljs.core.get.call(null,map__24836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24839,opts){
var map__24843 = p__24839;
var map__24843__$1 = ((((!((map__24843 == null)))?((((map__24843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24843):map__24843);
var eval_body__$1 = cljs.core.get.call(null,map__24843__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24845){var e = e24845;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24850,p__24851){
var map__25079 = p__24850;
var map__25079__$1 = ((((!((map__25079 == null)))?((((map__25079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25079):map__25079);
var opts = map__25079__$1;
var before_jsload = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__25080 = p__24851;
var map__25080__$1 = ((((!((map__25080 == null)))?((((map__25080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25080):map__25080);
var msg = map__25080__$1;
var files = cljs.core.get.call(null,map__25080__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (state_25221){
var state_val_25222 = (state_25221[(1)]);
if((state_val_25222 === (7))){
var inst_25094 = (state_25221[(7)]);
var inst_25097 = (state_25221[(8)]);
var inst_25095 = (state_25221[(9)]);
var inst_25096 = (state_25221[(10)]);
var inst_25102 = cljs.core._nth.call(null,inst_25095,inst_25097);
var inst_25103 = figwheel.client.file_reloading.eval_body.call(null,inst_25102,opts);
var inst_25104 = (inst_25097 + (1));
var tmp25223 = inst_25094;
var tmp25224 = inst_25095;
var tmp25225 = inst_25096;
var inst_25094__$1 = tmp25223;
var inst_25095__$1 = tmp25224;
var inst_25096__$1 = tmp25225;
var inst_25097__$1 = inst_25104;
var state_25221__$1 = (function (){var statearr_25226 = state_25221;
(statearr_25226[(7)] = inst_25094__$1);

(statearr_25226[(8)] = inst_25097__$1);

(statearr_25226[(11)] = inst_25103);

(statearr_25226[(9)] = inst_25095__$1);

(statearr_25226[(10)] = inst_25096__$1);

return statearr_25226;
})();
var statearr_25227_25306 = state_25221__$1;
(statearr_25227_25306[(2)] = null);

(statearr_25227_25306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (20))){
var inst_25140 = (state_25221[(12)]);
var inst_25143 = (state_25221[(13)]);
var inst_25146 = (state_25221[(14)]);
var inst_25139 = (state_25221[(15)]);
var inst_25144 = (state_25221[(16)]);
var inst_25149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25151 = (function (){var all_files = inst_25139;
var files_SINGLEQUOTE_ = inst_25140;
var res_SINGLEQUOTE_ = inst_25143;
var res = inst_25144;
var files_not_loaded = inst_25146;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25140,inst_25143,inst_25146,inst_25139,inst_25144,inst_25149,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (p__25150){
var map__25228 = p__25150;
var map__25228__$1 = ((((!((map__25228 == null)))?((((map__25228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25228):map__25228);
var namespace = cljs.core.get.call(null,map__25228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25140,inst_25143,inst_25146,inst_25139,inst_25144,inst_25149,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25152 = cljs.core.map.call(null,inst_25151,inst_25144);
var inst_25153 = cljs.core.pr_str.call(null,inst_25152);
var inst_25154 = figwheel.client.utils.log.call(null,inst_25153);
var inst_25155 = (function (){var all_files = inst_25139;
var files_SINGLEQUOTE_ = inst_25140;
var res_SINGLEQUOTE_ = inst_25143;
var res = inst_25144;
var files_not_loaded = inst_25146;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25140,inst_25143,inst_25146,inst_25139,inst_25144,inst_25149,inst_25151,inst_25152,inst_25153,inst_25154,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25140,inst_25143,inst_25146,inst_25139,inst_25144,inst_25149,inst_25151,inst_25152,inst_25153,inst_25154,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25156 = setTimeout(inst_25155,(10));
var state_25221__$1 = (function (){var statearr_25230 = state_25221;
(statearr_25230[(17)] = inst_25154);

(statearr_25230[(18)] = inst_25149);

return statearr_25230;
})();
var statearr_25231_25307 = state_25221__$1;
(statearr_25231_25307[(2)] = inst_25156);

(statearr_25231_25307[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (27))){
var state_25221__$1 = state_25221;
var statearr_25232_25308 = state_25221__$1;
(statearr_25232_25308[(2)] = false);

(statearr_25232_25308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (1))){
var inst_25086 = (state_25221[(19)]);
var inst_25083 = before_jsload.call(null,files);
var inst_25084 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25085 = (function (){return ((function (inst_25086,inst_25083,inst_25084,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (p1__24846_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24846_SHARP_);
});
;})(inst_25086,inst_25083,inst_25084,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25086__$1 = cljs.core.filter.call(null,inst_25085,files);
var inst_25087 = cljs.core.not_empty.call(null,inst_25086__$1);
var state_25221__$1 = (function (){var statearr_25233 = state_25221;
(statearr_25233[(20)] = inst_25084);

(statearr_25233[(21)] = inst_25083);

(statearr_25233[(19)] = inst_25086__$1);

return statearr_25233;
})();
if(cljs.core.truth_(inst_25087)){
var statearr_25234_25309 = state_25221__$1;
(statearr_25234_25309[(1)] = (2));

} else {
var statearr_25235_25310 = state_25221__$1;
(statearr_25235_25310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (24))){
var state_25221__$1 = state_25221;
var statearr_25236_25311 = state_25221__$1;
(statearr_25236_25311[(2)] = null);

(statearr_25236_25311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (39))){
var state_25221__$1 = state_25221;
var statearr_25237_25312 = state_25221__$1;
(statearr_25237_25312[(2)] = null);

(statearr_25237_25312[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (4))){
var inst_25131 = (state_25221[(2)]);
var inst_25132 = (function (){return ((function (inst_25131,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (p1__24847_SHARP_){
var and__16457__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24847_SHARP_);
if(cljs.core.truth_(and__16457__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24847_SHARP_));
} else {
return and__16457__auto__;
}
});
;})(inst_25131,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25133 = cljs.core.filter.call(null,inst_25132,files);
var state_25221__$1 = (function (){var statearr_25238 = state_25221;
(statearr_25238[(22)] = inst_25131);

(statearr_25238[(23)] = inst_25133);

return statearr_25238;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25239_25313 = state_25221__$1;
(statearr_25239_25313[(1)] = (16));

} else {
var statearr_25240_25314 = state_25221__$1;
(statearr_25240_25314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (15))){
var inst_25121 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25241_25315 = state_25221__$1;
(statearr_25241_25315[(2)] = inst_25121);

(statearr_25241_25315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (21))){
var state_25221__$1 = state_25221;
var statearr_25242_25316 = state_25221__$1;
(statearr_25242_25316[(2)] = null);

(statearr_25242_25316[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (31))){
var inst_25178 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25243_25317 = state_25221__$1;
(statearr_25243_25317[(2)] = inst_25178);

(statearr_25243_25317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (32))){
var inst_25166 = (state_25221[(24)]);
var inst_25183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25166);
var state_25221__$1 = state_25221;
var statearr_25244_25318 = state_25221__$1;
(statearr_25244_25318[(2)] = inst_25183);

(statearr_25244_25318[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (40))){
var inst_25189 = (state_25221[(25)]);
var inst_25207 = (state_25221[(2)]);
var inst_25208 = cljs.core.not_empty.call(null,inst_25189);
var state_25221__$1 = (function (){var statearr_25245 = state_25221;
(statearr_25245[(26)] = inst_25207);

return statearr_25245;
})();
if(cljs.core.truth_(inst_25208)){
var statearr_25246_25319 = state_25221__$1;
(statearr_25246_25319[(1)] = (41));

} else {
var statearr_25247_25320 = state_25221__$1;
(statearr_25247_25320[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (33))){
var inst_25166 = (state_25221[(24)]);
var state_25221__$1 = state_25221;
var statearr_25248_25321 = state_25221__$1;
(statearr_25248_25321[(2)] = inst_25166);

(statearr_25248_25321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (13))){
var inst_25107 = (state_25221[(27)]);
var inst_25111 = cljs.core.chunk_first.call(null,inst_25107);
var inst_25112 = cljs.core.chunk_rest.call(null,inst_25107);
var inst_25113 = cljs.core.count.call(null,inst_25111);
var inst_25094 = inst_25112;
var inst_25095 = inst_25111;
var inst_25096 = inst_25113;
var inst_25097 = (0);
var state_25221__$1 = (function (){var statearr_25249 = state_25221;
(statearr_25249[(7)] = inst_25094);

(statearr_25249[(8)] = inst_25097);

(statearr_25249[(9)] = inst_25095);

(statearr_25249[(10)] = inst_25096);

return statearr_25249;
})();
var statearr_25250_25322 = state_25221__$1;
(statearr_25250_25322[(2)] = null);

(statearr_25250_25322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (22))){
var inst_25146 = (state_25221[(14)]);
var inst_25159 = (state_25221[(2)]);
var inst_25160 = cljs.core.not_empty.call(null,inst_25146);
var state_25221__$1 = (function (){var statearr_25251 = state_25221;
(statearr_25251[(28)] = inst_25159);

return statearr_25251;
})();
if(cljs.core.truth_(inst_25160)){
var statearr_25252_25323 = state_25221__$1;
(statearr_25252_25323[(1)] = (23));

} else {
var statearr_25253_25324 = state_25221__$1;
(statearr_25253_25324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (36))){
var state_25221__$1 = state_25221;
var statearr_25254_25325 = state_25221__$1;
(statearr_25254_25325[(2)] = null);

(statearr_25254_25325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (41))){
var inst_25189 = (state_25221[(25)]);
var inst_25210 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25189);
var inst_25211 = cljs.core.pr_str.call(null,inst_25210);
var inst_25212 = [cljs.core.str("not required: "),cljs.core.str(inst_25211)].join('');
var inst_25213 = figwheel.client.utils.log.call(null,inst_25212);
var state_25221__$1 = state_25221;
var statearr_25255_25326 = state_25221__$1;
(statearr_25255_25326[(2)] = inst_25213);

(statearr_25255_25326[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (43))){
var inst_25216 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25256_25327 = state_25221__$1;
(statearr_25256_25327[(2)] = inst_25216);

(statearr_25256_25327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (29))){
var state_25221__$1 = state_25221;
var statearr_25257_25328 = state_25221__$1;
(statearr_25257_25328[(2)] = true);

(statearr_25257_25328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (6))){
var inst_25128 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25258_25329 = state_25221__$1;
(statearr_25258_25329[(2)] = inst_25128);

(statearr_25258_25329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (28))){
var inst_25181 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
if(cljs.core.truth_(inst_25181)){
var statearr_25259_25330 = state_25221__$1;
(statearr_25259_25330[(1)] = (32));

} else {
var statearr_25260_25331 = state_25221__$1;
(statearr_25260_25331[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (25))){
var inst_25219 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25221__$1,inst_25219);
} else {
if((state_val_25222 === (34))){
var inst_25187 = (state_25221[(29)]);
var inst_25186 = (state_25221[(2)]);
var inst_25187__$1 = cljs.core.get.call(null,inst_25186,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25188 = cljs.core.get.call(null,inst_25186,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_25189 = cljs.core.get.call(null,inst_25186,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25190 = cljs.core.not_empty.call(null,inst_25187__$1);
var state_25221__$1 = (function (){var statearr_25261 = state_25221;
(statearr_25261[(25)] = inst_25189);

(statearr_25261[(30)] = inst_25188);

(statearr_25261[(29)] = inst_25187__$1);

return statearr_25261;
})();
if(cljs.core.truth_(inst_25190)){
var statearr_25262_25332 = state_25221__$1;
(statearr_25262_25332[(1)] = (35));

} else {
var statearr_25263_25333 = state_25221__$1;
(statearr_25263_25333[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (17))){
var inst_25133 = (state_25221[(23)]);
var state_25221__$1 = state_25221;
var statearr_25264_25334 = state_25221__$1;
(statearr_25264_25334[(2)] = inst_25133);

(statearr_25264_25334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (3))){
var state_25221__$1 = state_25221;
var statearr_25265_25335 = state_25221__$1;
(statearr_25265_25335[(2)] = null);

(statearr_25265_25335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (12))){
var inst_25124 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25266_25336 = state_25221__$1;
(statearr_25266_25336[(2)] = inst_25124);

(statearr_25266_25336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (2))){
var inst_25086 = (state_25221[(19)]);
var inst_25093 = cljs.core.seq.call(null,inst_25086);
var inst_25094 = inst_25093;
var inst_25095 = null;
var inst_25096 = (0);
var inst_25097 = (0);
var state_25221__$1 = (function (){var statearr_25267 = state_25221;
(statearr_25267[(7)] = inst_25094);

(statearr_25267[(8)] = inst_25097);

(statearr_25267[(9)] = inst_25095);

(statearr_25267[(10)] = inst_25096);

return statearr_25267;
})();
var statearr_25268_25337 = state_25221__$1;
(statearr_25268_25337[(2)] = null);

(statearr_25268_25337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (23))){
var inst_25166 = (state_25221[(24)]);
var inst_25140 = (state_25221[(12)]);
var inst_25143 = (state_25221[(13)]);
var inst_25146 = (state_25221[(14)]);
var inst_25139 = (state_25221[(15)]);
var inst_25144 = (state_25221[(16)]);
var inst_25162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25165 = (function (){var all_files = inst_25139;
var files_SINGLEQUOTE_ = inst_25140;
var res_SINGLEQUOTE_ = inst_25143;
var res = inst_25144;
var files_not_loaded = inst_25146;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25166,inst_25140,inst_25143,inst_25146,inst_25139,inst_25144,inst_25162,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (p__25164){
var map__25269 = p__25164;
var map__25269__$1 = ((((!((map__25269 == null)))?((((map__25269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25269):map__25269);
var meta_data = cljs.core.get.call(null,map__25269__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25166,inst_25140,inst_25143,inst_25146,inst_25139,inst_25144,inst_25162,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25166__$1 = cljs.core.group_by.call(null,inst_25165,inst_25146);
var inst_25168 = (inst_25166__$1 == null);
var inst_25169 = cljs.core.not.call(null,inst_25168);
var state_25221__$1 = (function (){var statearr_25271 = state_25221;
(statearr_25271[(31)] = inst_25162);

(statearr_25271[(24)] = inst_25166__$1);

return statearr_25271;
})();
if(inst_25169){
var statearr_25272_25338 = state_25221__$1;
(statearr_25272_25338[(1)] = (26));

} else {
var statearr_25273_25339 = state_25221__$1;
(statearr_25273_25339[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (35))){
var inst_25187 = (state_25221[(29)]);
var inst_25192 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25187);
var inst_25193 = cljs.core.pr_str.call(null,inst_25192);
var inst_25194 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25193)].join('');
var inst_25195 = figwheel.client.utils.log.call(null,inst_25194);
var state_25221__$1 = state_25221;
var statearr_25274_25340 = state_25221__$1;
(statearr_25274_25340[(2)] = inst_25195);

(statearr_25274_25340[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (19))){
var inst_25140 = (state_25221[(12)]);
var inst_25143 = (state_25221[(13)]);
var inst_25139 = (state_25221[(15)]);
var inst_25144 = (state_25221[(16)]);
var inst_25143__$1 = (state_25221[(2)]);
var inst_25144__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25143__$1);
var inst_25145 = (function (){var all_files = inst_25139;
var files_SINGLEQUOTE_ = inst_25140;
var res_SINGLEQUOTE_ = inst_25143__$1;
var res = inst_25144__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25140,inst_25143,inst_25139,inst_25144,inst_25143__$1,inst_25144__$1,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (p1__24849_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24849_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25140,inst_25143,inst_25139,inst_25144,inst_25143__$1,inst_25144__$1,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25146 = cljs.core.filter.call(null,inst_25145,inst_25143__$1);
var inst_25147 = cljs.core.not_empty.call(null,inst_25144__$1);
var state_25221__$1 = (function (){var statearr_25275 = state_25221;
(statearr_25275[(13)] = inst_25143__$1);

(statearr_25275[(14)] = inst_25146);

(statearr_25275[(16)] = inst_25144__$1);

return statearr_25275;
})();
if(cljs.core.truth_(inst_25147)){
var statearr_25276_25341 = state_25221__$1;
(statearr_25276_25341[(1)] = (20));

} else {
var statearr_25277_25342 = state_25221__$1;
(statearr_25277_25342[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (11))){
var state_25221__$1 = state_25221;
var statearr_25278_25343 = state_25221__$1;
(statearr_25278_25343[(2)] = null);

(statearr_25278_25343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (9))){
var inst_25126 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25279_25344 = state_25221__$1;
(statearr_25279_25344[(2)] = inst_25126);

(statearr_25279_25344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (5))){
var inst_25097 = (state_25221[(8)]);
var inst_25096 = (state_25221[(10)]);
var inst_25099 = (inst_25097 < inst_25096);
var inst_25100 = inst_25099;
var state_25221__$1 = state_25221;
if(cljs.core.truth_(inst_25100)){
var statearr_25280_25345 = state_25221__$1;
(statearr_25280_25345[(1)] = (7));

} else {
var statearr_25281_25346 = state_25221__$1;
(statearr_25281_25346[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (14))){
var inst_25107 = (state_25221[(27)]);
var inst_25116 = cljs.core.first.call(null,inst_25107);
var inst_25117 = figwheel.client.file_reloading.eval_body.call(null,inst_25116,opts);
var inst_25118 = cljs.core.next.call(null,inst_25107);
var inst_25094 = inst_25118;
var inst_25095 = null;
var inst_25096 = (0);
var inst_25097 = (0);
var state_25221__$1 = (function (){var statearr_25282 = state_25221;
(statearr_25282[(7)] = inst_25094);

(statearr_25282[(8)] = inst_25097);

(statearr_25282[(32)] = inst_25117);

(statearr_25282[(9)] = inst_25095);

(statearr_25282[(10)] = inst_25096);

return statearr_25282;
})();
var statearr_25283_25347 = state_25221__$1;
(statearr_25283_25347[(2)] = null);

(statearr_25283_25347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (26))){
var inst_25166 = (state_25221[(24)]);
var inst_25171 = inst_25166.cljs$lang$protocol_mask$partition0$;
var inst_25172 = (inst_25171 & (64));
var inst_25173 = inst_25166.cljs$core$ISeq$;
var inst_25174 = (inst_25172) || (inst_25173);
var state_25221__$1 = state_25221;
if(cljs.core.truth_(inst_25174)){
var statearr_25284_25348 = state_25221__$1;
(statearr_25284_25348[(1)] = (29));

} else {
var statearr_25285_25349 = state_25221__$1;
(statearr_25285_25349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (16))){
var inst_25133 = (state_25221[(23)]);
var inst_25135 = (function (){var all_files = inst_25133;
return ((function (all_files,inst_25133,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function (p1__24848_SHARP_){
return cljs.core.update_in.call(null,p1__24848_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_25133,state_val_25222,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var inst_25136 = cljs.core.map.call(null,inst_25135,inst_25133);
var state_25221__$1 = state_25221;
var statearr_25286_25350 = state_25221__$1;
(statearr_25286_25350[(2)] = inst_25136);

(statearr_25286_25350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (38))){
var inst_25188 = (state_25221[(30)]);
var inst_25201 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25188);
var inst_25202 = cljs.core.pr_str.call(null,inst_25201);
var inst_25203 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25202)].join('');
var inst_25204 = figwheel.client.utils.log.call(null,inst_25203);
var state_25221__$1 = state_25221;
var statearr_25287_25351 = state_25221__$1;
(statearr_25287_25351[(2)] = inst_25204);

(statearr_25287_25351[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (30))){
var state_25221__$1 = state_25221;
var statearr_25288_25352 = state_25221__$1;
(statearr_25288_25352[(2)] = false);

(statearr_25288_25352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (10))){
var inst_25107 = (state_25221[(27)]);
var inst_25109 = cljs.core.chunked_seq_QMARK_.call(null,inst_25107);
var state_25221__$1 = state_25221;
if(inst_25109){
var statearr_25289_25353 = state_25221__$1;
(statearr_25289_25353[(1)] = (13));

} else {
var statearr_25290_25354 = state_25221__$1;
(statearr_25290_25354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (18))){
var inst_25140 = (state_25221[(12)]);
var inst_25139 = (state_25221[(15)]);
var inst_25139__$1 = (state_25221[(2)]);
var inst_25140__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_25139__$1);
var inst_25141 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25140__$1);
var state_25221__$1 = (function (){var statearr_25291 = state_25221;
(statearr_25291[(12)] = inst_25140__$1);

(statearr_25291[(15)] = inst_25139__$1);

return statearr_25291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25221__$1,(19),inst_25141);
} else {
if((state_val_25222 === (42))){
var state_25221__$1 = state_25221;
var statearr_25292_25355 = state_25221__$1;
(statearr_25292_25355[(2)] = null);

(statearr_25292_25355[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (37))){
var inst_25188 = (state_25221[(30)]);
var inst_25198 = (state_25221[(2)]);
var inst_25199 = cljs.core.not_empty.call(null,inst_25188);
var state_25221__$1 = (function (){var statearr_25293 = state_25221;
(statearr_25293[(33)] = inst_25198);

return statearr_25293;
})();
if(cljs.core.truth_(inst_25199)){
var statearr_25294_25356 = state_25221__$1;
(statearr_25294_25356[(1)] = (38));

} else {
var statearr_25295_25357 = state_25221__$1;
(statearr_25295_25357[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (8))){
var inst_25107 = (state_25221[(27)]);
var inst_25094 = (state_25221[(7)]);
var inst_25107__$1 = cljs.core.seq.call(null,inst_25094);
var state_25221__$1 = (function (){var statearr_25296 = state_25221;
(statearr_25296[(27)] = inst_25107__$1);

return statearr_25296;
})();
if(inst_25107__$1){
var statearr_25297_25358 = state_25221__$1;
(statearr_25297_25358[(1)] = (10));

} else {
var statearr_25298_25359 = state_25221__$1;
(statearr_25298_25359[(1)] = (11));

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
});})(c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
;
return ((function (switch__19587__auto__,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____0 = (function (){
var statearr_25302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25302[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__);

(statearr_25302[(1)] = (1));

return statearr_25302;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____1 = (function (state_25221){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25303){if((e25303 instanceof Object)){
var ex__19591__auto__ = e25303;
var statearr_25304_25360 = state_25221;
(statearr_25304_25360[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25361 = state_25221;
state_25221 = G__25361;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__ = function(state_25221){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____1.call(this,state_25221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
})();
var state__19654__auto__ = (function (){var statearr_25305 = f__19653__auto__.call(null);
(statearr_25305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_25305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,map__25079,map__25079__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25080,map__25080__$1,msg,files))
);

return c__19652__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25364,link){
var map__25367 = p__25364;
var map__25367__$1 = ((((!((map__25367 == null)))?((((map__25367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25367):map__25367);
var file = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25367,map__25367__$1,file){
return (function (p1__25362_SHARP_,p2__25363_SHARP_){
if(cljs.core._EQ_.call(null,p1__25362_SHARP_,p2__25363_SHARP_)){
return p1__25362_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25367,map__25367__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25373){
var map__25374 = p__25373;
var map__25374__$1 = ((((!((map__25374 == null)))?((((map__25374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25374):map__25374);
var match_length = cljs.core.get.call(null,map__25374__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25374__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25369_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25369_SHARP_);
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
var args25376 = [];
var len__17508__auto___25379 = arguments.length;
var i__17509__auto___25380 = (0);
while(true){
if((i__17509__auto___25380 < len__17508__auto___25379)){
args25376.push((arguments[i__17509__auto___25380]));

var G__25381 = (i__17509__auto___25380 + (1));
i__17509__auto___25380 = G__25381;
continue;
} else {
}
break;
}

var G__25378 = args25376.length;
switch (G__25378) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25376.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25383){
var map__25386 = p__25383;
var map__25386__$1 = ((((!((map__25386 == null)))?((((map__25386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25386):map__25386);
var f_data = map__25386__$1;
var file = cljs.core.get.call(null,map__25386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__25386__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25388,files_msg){
var map__25411 = p__25388;
var map__25411__$1 = ((((!((map__25411 == null)))?((((map__25411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25411):map__25411);
var opts = map__25411__$1;
var on_cssload = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25413_25433 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25414_25434 = null;
var count__25415_25435 = (0);
var i__25416_25436 = (0);
while(true){
if((i__25416_25436 < count__25415_25435)){
var f_25437 = cljs.core._nth.call(null,chunk__25414_25434,i__25416_25436);
figwheel.client.file_reloading.reload_css_file.call(null,f_25437);

var G__25438 = seq__25413_25433;
var G__25439 = chunk__25414_25434;
var G__25440 = count__25415_25435;
var G__25441 = (i__25416_25436 + (1));
seq__25413_25433 = G__25438;
chunk__25414_25434 = G__25439;
count__25415_25435 = G__25440;
i__25416_25436 = G__25441;
continue;
} else {
var temp__4425__auto___25442 = cljs.core.seq.call(null,seq__25413_25433);
if(temp__4425__auto___25442){
var seq__25413_25443__$1 = temp__4425__auto___25442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25413_25443__$1)){
var c__17253__auto___25444 = cljs.core.chunk_first.call(null,seq__25413_25443__$1);
var G__25445 = cljs.core.chunk_rest.call(null,seq__25413_25443__$1);
var G__25446 = c__17253__auto___25444;
var G__25447 = cljs.core.count.call(null,c__17253__auto___25444);
var G__25448 = (0);
seq__25413_25433 = G__25445;
chunk__25414_25434 = G__25446;
count__25415_25435 = G__25447;
i__25416_25436 = G__25448;
continue;
} else {
var f_25449 = cljs.core.first.call(null,seq__25413_25443__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25449);

var G__25450 = cljs.core.next.call(null,seq__25413_25443__$1);
var G__25451 = null;
var G__25452 = (0);
var G__25453 = (0);
seq__25413_25433 = G__25450;
chunk__25414_25434 = G__25451;
count__25415_25435 = G__25452;
i__25416_25436 = G__25453;
continue;
}
} else {
}
}
break;
}

var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,map__25411,map__25411__$1,opts,on_cssload){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,map__25411,map__25411__$1,opts,on_cssload){
return (function (state_25423){
var state_val_25424 = (state_25423[(1)]);
if((state_val_25424 === (1))){
var inst_25417 = cljs.core.async.timeout.call(null,(100));
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25423__$1,(2),inst_25417);
} else {
if((state_val_25424 === (2))){
var inst_25419 = (state_25423[(2)]);
var inst_25420 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25421 = on_cssload.call(null,inst_25420);
var state_25423__$1 = (function (){var statearr_25425 = state_25423;
(statearr_25425[(7)] = inst_25419);

return statearr_25425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25423__$1,inst_25421);
} else {
return null;
}
}
});})(c__19652__auto__,map__25411,map__25411__$1,opts,on_cssload))
;
return ((function (switch__19587__auto__,c__19652__auto__,map__25411,map__25411__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____0 = (function (){
var statearr_25429 = [null,null,null,null,null,null,null,null];
(statearr_25429[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__);

(statearr_25429[(1)] = (1));

return statearr_25429;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____1 = (function (state_25423){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25430){if((e25430 instanceof Object)){
var ex__19591__auto__ = e25430;
var statearr_25431_25454 = state_25423;
(statearr_25431_25454[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25455 = state_25423;
state_25423 = G__25455;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,map__25411,map__25411__$1,opts,on_cssload))
})();
var state__19654__auto__ = (function (){var statearr_25432 = f__19653__auto__.call(null);
(statearr_25432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_25432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,map__25411,map__25411__$1,opts,on_cssload))
);

return c__19652__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map