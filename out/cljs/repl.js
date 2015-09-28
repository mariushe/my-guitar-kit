// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28842_28856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28843_28857 = null;
var count__28844_28858 = (0);
var i__28845_28859 = (0);
while(true){
if((i__28845_28859 < count__28844_28858)){
var f_28860 = cljs.core._nth.call(null,chunk__28843_28857,i__28845_28859);
cljs.core.println.call(null,"  ",f_28860);

var G__28861 = seq__28842_28856;
var G__28862 = chunk__28843_28857;
var G__28863 = count__28844_28858;
var G__28864 = (i__28845_28859 + (1));
seq__28842_28856 = G__28861;
chunk__28843_28857 = G__28862;
count__28844_28858 = G__28863;
i__28845_28859 = G__28864;
continue;
} else {
var temp__4425__auto___28865 = cljs.core.seq.call(null,seq__28842_28856);
if(temp__4425__auto___28865){
var seq__28842_28866__$1 = temp__4425__auto___28865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28842_28866__$1)){
var c__17295__auto___28867 = cljs.core.chunk_first.call(null,seq__28842_28866__$1);
var G__28868 = cljs.core.chunk_rest.call(null,seq__28842_28866__$1);
var G__28869 = c__17295__auto___28867;
var G__28870 = cljs.core.count.call(null,c__17295__auto___28867);
var G__28871 = (0);
seq__28842_28856 = G__28868;
chunk__28843_28857 = G__28869;
count__28844_28858 = G__28870;
i__28845_28859 = G__28871;
continue;
} else {
var f_28872 = cljs.core.first.call(null,seq__28842_28866__$1);
cljs.core.println.call(null,"  ",f_28872);

var G__28873 = cljs.core.next.call(null,seq__28842_28866__$1);
var G__28874 = null;
var G__28875 = (0);
var G__28876 = (0);
seq__28842_28856 = G__28873;
chunk__28843_28857 = G__28874;
count__28844_28858 = G__28875;
i__28845_28859 = G__28876;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28877 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16511__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28877);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28877)))?cljs.core.second.call(null,arglists_28877):arglists_28877));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28847 = null;
var count__28848 = (0);
var i__28849 = (0);
while(true){
if((i__28849 < count__28848)){
var vec__28850 = cljs.core._nth.call(null,chunk__28847,i__28849);
var name = cljs.core.nth.call(null,vec__28850,(0),null);
var map__28851 = cljs.core.nth.call(null,vec__28850,(1),null);
var map__28851__$1 = ((((!((map__28851 == null)))?((((map__28851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28851):map__28851);
var doc = cljs.core.get.call(null,map__28851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28878 = seq__28846;
var G__28879 = chunk__28847;
var G__28880 = count__28848;
var G__28881 = (i__28849 + (1));
seq__28846 = G__28878;
chunk__28847 = G__28879;
count__28848 = G__28880;
i__28849 = G__28881;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28846);
if(temp__4425__auto__){
var seq__28846__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28846__$1)){
var c__17295__auto__ = cljs.core.chunk_first.call(null,seq__28846__$1);
var G__28882 = cljs.core.chunk_rest.call(null,seq__28846__$1);
var G__28883 = c__17295__auto__;
var G__28884 = cljs.core.count.call(null,c__17295__auto__);
var G__28885 = (0);
seq__28846 = G__28882;
chunk__28847 = G__28883;
count__28848 = G__28884;
i__28849 = G__28885;
continue;
} else {
var vec__28853 = cljs.core.first.call(null,seq__28846__$1);
var name = cljs.core.nth.call(null,vec__28853,(0),null);
var map__28854 = cljs.core.nth.call(null,vec__28853,(1),null);
var map__28854__$1 = ((((!((map__28854 == null)))?((((map__28854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28854):map__28854);
var doc = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28886 = cljs.core.next.call(null,seq__28846__$1);
var G__28887 = null;
var G__28888 = (0);
var G__28889 = (0);
seq__28846 = G__28886;
chunk__28847 = G__28887;
count__28848 = G__28888;
i__28849 = G__28889;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map