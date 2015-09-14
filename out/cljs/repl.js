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
var seq__28797_28811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28798_28812 = null;
var count__28799_28813 = (0);
var i__28800_28814 = (0);
while(true){
if((i__28800_28814 < count__28799_28813)){
var f_28815 = cljs.core._nth.call(null,chunk__28798_28812,i__28800_28814);
cljs.core.println.call(null,"  ",f_28815);

var G__28816 = seq__28797_28811;
var G__28817 = chunk__28798_28812;
var G__28818 = count__28799_28813;
var G__28819 = (i__28800_28814 + (1));
seq__28797_28811 = G__28816;
chunk__28798_28812 = G__28817;
count__28799_28813 = G__28818;
i__28800_28814 = G__28819;
continue;
} else {
var temp__4425__auto___28820 = cljs.core.seq.call(null,seq__28797_28811);
if(temp__4425__auto___28820){
var seq__28797_28821__$1 = temp__4425__auto___28820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28797_28821__$1)){
var c__17253__auto___28822 = cljs.core.chunk_first.call(null,seq__28797_28821__$1);
var G__28823 = cljs.core.chunk_rest.call(null,seq__28797_28821__$1);
var G__28824 = c__17253__auto___28822;
var G__28825 = cljs.core.count.call(null,c__17253__auto___28822);
var G__28826 = (0);
seq__28797_28811 = G__28823;
chunk__28798_28812 = G__28824;
count__28799_28813 = G__28825;
i__28800_28814 = G__28826;
continue;
} else {
var f_28827 = cljs.core.first.call(null,seq__28797_28821__$1);
cljs.core.println.call(null,"  ",f_28827);

var G__28828 = cljs.core.next.call(null,seq__28797_28821__$1);
var G__28829 = null;
var G__28830 = (0);
var G__28831 = (0);
seq__28797_28811 = G__28828;
chunk__28798_28812 = G__28829;
count__28799_28813 = G__28830;
i__28800_28814 = G__28831;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28832 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16469__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28832);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28832)))?cljs.core.second.call(null,arglists_28832):arglists_28832));
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
var seq__28801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28802 = null;
var count__28803 = (0);
var i__28804 = (0);
while(true){
if((i__28804 < count__28803)){
var vec__28805 = cljs.core._nth.call(null,chunk__28802,i__28804);
var name = cljs.core.nth.call(null,vec__28805,(0),null);
var map__28806 = cljs.core.nth.call(null,vec__28805,(1),null);
var map__28806__$1 = ((((!((map__28806 == null)))?((((map__28806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28806):map__28806);
var doc = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28833 = seq__28801;
var G__28834 = chunk__28802;
var G__28835 = count__28803;
var G__28836 = (i__28804 + (1));
seq__28801 = G__28833;
chunk__28802 = G__28834;
count__28803 = G__28835;
i__28804 = G__28836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28801);
if(temp__4425__auto__){
var seq__28801__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801__$1)){
var c__17253__auto__ = cljs.core.chunk_first.call(null,seq__28801__$1);
var G__28837 = cljs.core.chunk_rest.call(null,seq__28801__$1);
var G__28838 = c__17253__auto__;
var G__28839 = cljs.core.count.call(null,c__17253__auto__);
var G__28840 = (0);
seq__28801 = G__28837;
chunk__28802 = G__28838;
count__28803 = G__28839;
i__28804 = G__28840;
continue;
} else {
var vec__28808 = cljs.core.first.call(null,seq__28801__$1);
var name = cljs.core.nth.call(null,vec__28808,(0),null);
var map__28809 = cljs.core.nth.call(null,vec__28808,(1),null);
var map__28809__$1 = ((((!((map__28809 == null)))?((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var doc = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28841 = cljs.core.next.call(null,seq__28801__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__28801 = G__28841;
chunk__28802 = G__28842;
count__28803 = G__28843;
i__28804 = G__28844;
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