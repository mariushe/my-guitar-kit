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
var seq__24653_24667 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24654_24668 = null;
var count__24655_24669 = (0);
var i__24656_24670 = (0);
while(true){
if((i__24656_24670 < count__24655_24669)){
var f_24671 = cljs.core._nth.call(null,chunk__24654_24668,i__24656_24670);
cljs.core.println.call(null,"  ",f_24671);

var G__24672 = seq__24653_24667;
var G__24673 = chunk__24654_24668;
var G__24674 = count__24655_24669;
var G__24675 = (i__24656_24670 + (1));
seq__24653_24667 = G__24672;
chunk__24654_24668 = G__24673;
count__24655_24669 = G__24674;
i__24656_24670 = G__24675;
continue;
} else {
var temp__4425__auto___24676 = cljs.core.seq.call(null,seq__24653_24667);
if(temp__4425__auto___24676){
var seq__24653_24677__$1 = temp__4425__auto___24676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24653_24677__$1)){
var c__17253__auto___24678 = cljs.core.chunk_first.call(null,seq__24653_24677__$1);
var G__24679 = cljs.core.chunk_rest.call(null,seq__24653_24677__$1);
var G__24680 = c__17253__auto___24678;
var G__24681 = cljs.core.count.call(null,c__17253__auto___24678);
var G__24682 = (0);
seq__24653_24667 = G__24679;
chunk__24654_24668 = G__24680;
count__24655_24669 = G__24681;
i__24656_24670 = G__24682;
continue;
} else {
var f_24683 = cljs.core.first.call(null,seq__24653_24677__$1);
cljs.core.println.call(null,"  ",f_24683);

var G__24684 = cljs.core.next.call(null,seq__24653_24677__$1);
var G__24685 = null;
var G__24686 = (0);
var G__24687 = (0);
seq__24653_24667 = G__24684;
chunk__24654_24668 = G__24685;
count__24655_24669 = G__24686;
i__24656_24670 = G__24687;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24688 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16469__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24688);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24688)))?cljs.core.second.call(null,arglists_24688):arglists_24688));
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
var seq__24657 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24658 = null;
var count__24659 = (0);
var i__24660 = (0);
while(true){
if((i__24660 < count__24659)){
var vec__24661 = cljs.core._nth.call(null,chunk__24658,i__24660);
var name = cljs.core.nth.call(null,vec__24661,(0),null);
var map__24662 = cljs.core.nth.call(null,vec__24661,(1),null);
var map__24662__$1 = ((((!((map__24662 == null)))?((((map__24662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24662):map__24662);
var doc = cljs.core.get.call(null,map__24662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24689 = seq__24657;
var G__24690 = chunk__24658;
var G__24691 = count__24659;
var G__24692 = (i__24660 + (1));
seq__24657 = G__24689;
chunk__24658 = G__24690;
count__24659 = G__24691;
i__24660 = G__24692;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24657);
if(temp__4425__auto__){
var seq__24657__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24657__$1)){
var c__17253__auto__ = cljs.core.chunk_first.call(null,seq__24657__$1);
var G__24693 = cljs.core.chunk_rest.call(null,seq__24657__$1);
var G__24694 = c__17253__auto__;
var G__24695 = cljs.core.count.call(null,c__17253__auto__);
var G__24696 = (0);
seq__24657 = G__24693;
chunk__24658 = G__24694;
count__24659 = G__24695;
i__24660 = G__24696;
continue;
} else {
var vec__24664 = cljs.core.first.call(null,seq__24657__$1);
var name = cljs.core.nth.call(null,vec__24664,(0),null);
var map__24665 = cljs.core.nth.call(null,vec__24664,(1),null);
var map__24665__$1 = ((((!((map__24665 == null)))?((((map__24665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24665):map__24665);
var doc = cljs.core.get.call(null,map__24665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24697 = cljs.core.next.call(null,seq__24657__$1);
var G__24698 = null;
var G__24699 = (0);
var G__24700 = (0);
seq__24657 = G__24697;
chunk__24658 = G__24698;
count__24659 = G__24699;
i__24660 = G__24700;
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