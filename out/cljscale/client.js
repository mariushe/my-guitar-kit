// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljscale.client');
goog.require('cljs.core');
goog.require('quiescent.core');
goog.require('quiescent.dom');
goog.require('cljscale.generator');
cljs.core.enable_console_print_BANG_.call(null);
cljscale.client.fretboard = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljscale.client.settings = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),"",new cljs.core.Keyword(null,"scale","scale",-230427353),"",new cljs.core.Keyword(null,"tune","tune",-2009238620),"Standard (E A D G B E)"], null));
cljscale.client.render = (function cljscale$client$render(){
return quiescent.core.render.call(null,cljscale.client.View.call(null,cljs.core.deref.call(null,cljscale.client.fretboard)),document.getElementById("main"));
});
cljscale.client.load = (function cljscale$client$load(){
cljs.core.swap_BANG_.call(null,cljscale.client.fretboard,(function (_){
return cljscale.generator.create_fretboard.call(null,cljscale.generator.tunes.call(null,new cljs.core.Keyword(null,"tune","tune",-2009238620).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljscale.client.settings))),(24));
}));

if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljscale.client.settings)),""))){
cljs.core.swap_BANG_.call(null,cljscale.client.fretboard,(function (_){
return cljscale.generator.add_root.call(null,cljs.core.deref.call(null,cljscale.client.fretboard),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljscale.client.settings)));
}));
} else {
}

if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljscale.client.settings)),""))){
cljs.core.swap_BANG_.call(null,cljscale.client.fretboard,(function (_){
return cljscale.generator.add_scale.call(null,cljs.core.deref.call(null,cljscale.client.fretboard),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljscale.client.settings)),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljscale.client.settings)));
}));
} else {
}

cljs.core.println.call(null,cljs.core.deref.call(null,cljscale.client.fretboard));

return cljscale.client.render.call(null);
});
/**
 * 
 */
cljscale.client.RoundSpan = quiescent.core.component.call(null,(function (add_classes){
return cljs.core.apply.call(null,quiescent.dom.span,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("round-span "),cljs.core.str(add_classes)].join('')], null),"");
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.NoteSpan = quiescent.core.component.call(null,(function (note){
return cljs.core.apply.call(null,quiescent.dom.span,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"note"], null),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(note));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.Fret = quiescent.core.component.call(null,(function (fret){
return cljs.core.apply.call(null,quiescent.dom.li,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(fret))?"root ":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"in-scale","in-scale",465354433).cljs$core$IFn$_invoke$arity$1(fret))?"in-scale ":"not-in-scale ")),cljs.core.str("fret")].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (root){
cljs.core.swap_BANG_.call(null,cljscale.client.settings,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(fret));

return cljscale.client.load.call(null);
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"in-scale","in-scale",465354433).cljs$core$IFn$_invoke$arity$1(fret))?cljscale.client.RoundSpan.call(null,"round-scale"):null),(cljs.core.truth_(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(fret))?cljscale.client.RoundSpan.call(null,"round-root"):null),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(fret));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.String = quiescent.core.component.call(null,(function (frets){
return cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"string"], null),cljs.core.mapv.call(null,cljscale.client.Fret,frets));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.FretBoard = quiescent.core.component.call(null,(function (fretboard){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"row fretboard-wrapper"], null),cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"fretboard col-sm-12"], null),cljs.core.mapv.call(null,cljscale.client.String,fretboard)));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.Option = quiescent.core.component.call(null,(function (root){
return quiescent.dom.option.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),root], null),root);
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.Tune = quiescent.core.component.call(null,(function (){
return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"root-selection",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (root){
cljs.core.swap_BANG_.call(null,cljscale.client.settings,cljs.core.assoc,new cljs.core.Keyword(null,"tune","tune",-2009238620),root.target.value);

return cljscale.client.load.call(null);
})], null),cljs.core.map.call(null,cljscale.client.Option,cljs.core.conj.call(null,cljs.core.keys.call(null,cljscale.generator.tunes),"")));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.Root = quiescent.core.component.call(null,(function (){
return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"root-selection",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (root){
cljs.core.swap_BANG_.call(null,cljscale.client.settings,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),root.target.value);

return cljscale.client.load.call(null);
})], null),cljs.core.map.call(null,cljscale.client.Option,cljs.core.conj.call(null,cljscale.generator.notes,"")));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.Scale = quiescent.core.component.call(null,(function (){
return cljs.core.apply.call(null,quiescent.dom.select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"scale-selection",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (root){
cljs.core.swap_BANG_.call(null,cljscale.client.settings,cljs.core.assoc,new cljs.core.Keyword(null,"scale","scale",-230427353),root.target.value);

return cljscale.client.load.call(null);
})], null),cljs.core.map.call(null,cljscale.client.Option,cljs.core.keys.call(null,cljscale.generator.scales)));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.Selections = quiescent.core.component.call(null,(function (){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"selections row"], null),cljscale.client.Tune.call(null),cljscale.client.Root.call(null),cljscale.client.Scale.call(null));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
cljscale.client.View = quiescent.core.component.call(null,(function (fretboard){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,cljscale.client.FretBoard.call(null,fretboard),cljscale.client.Selections.call(null));
}),cljs.core.PersistentArrayMap.EMPTY);
cljscale.client.load.call(null);

//# sourceMappingURL=client.js.map