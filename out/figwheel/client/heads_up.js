// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17557__auto__ = [];
var len__17550__auto___28594 = arguments.length;
var i__17551__auto___28595 = (0);
while(true){
if((i__17551__auto___28595 < len__17550__auto___28594)){
args__17557__auto__.push((arguments[i__17551__auto___28595]));

var G__28596 = (i__17551__auto___28595 + (1));
i__17551__auto___28595 = G__28596;
continue;
} else {
}
break;
}

var argseq__17558__auto__ = ((((2) < args__17557__auto__.length))?(new cljs.core.IndexedSeq(args__17557__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17558__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28586_28597 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28587_28598 = null;
var count__28588_28599 = (0);
var i__28589_28600 = (0);
while(true){
if((i__28589_28600 < count__28588_28599)){
var k_28601 = cljs.core._nth.call(null,chunk__28587_28598,i__28589_28600);
e.setAttribute(cljs.core.name.call(null,k_28601),cljs.core.get.call(null,attrs,k_28601));

var G__28602 = seq__28586_28597;
var G__28603 = chunk__28587_28598;
var G__28604 = count__28588_28599;
var G__28605 = (i__28589_28600 + (1));
seq__28586_28597 = G__28602;
chunk__28587_28598 = G__28603;
count__28588_28599 = G__28604;
i__28589_28600 = G__28605;
continue;
} else {
var temp__4425__auto___28606 = cljs.core.seq.call(null,seq__28586_28597);
if(temp__4425__auto___28606){
var seq__28586_28607__$1 = temp__4425__auto___28606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28586_28607__$1)){
var c__17295__auto___28608 = cljs.core.chunk_first.call(null,seq__28586_28607__$1);
var G__28609 = cljs.core.chunk_rest.call(null,seq__28586_28607__$1);
var G__28610 = c__17295__auto___28608;
var G__28611 = cljs.core.count.call(null,c__17295__auto___28608);
var G__28612 = (0);
seq__28586_28597 = G__28609;
chunk__28587_28598 = G__28610;
count__28588_28599 = G__28611;
i__28589_28600 = G__28612;
continue;
} else {
var k_28613 = cljs.core.first.call(null,seq__28586_28607__$1);
e.setAttribute(cljs.core.name.call(null,k_28613),cljs.core.get.call(null,attrs,k_28613));

var G__28614 = cljs.core.next.call(null,seq__28586_28607__$1);
var G__28615 = null;
var G__28616 = (0);
var G__28617 = (0);
seq__28586_28597 = G__28614;
chunk__28587_28598 = G__28615;
count__28588_28599 = G__28616;
i__28589_28600 = G__28617;
continue;
}
} else {
}
}
break;
}

var seq__28590_28618 = cljs.core.seq.call(null,children);
var chunk__28591_28619 = null;
var count__28592_28620 = (0);
var i__28593_28621 = (0);
while(true){
if((i__28593_28621 < count__28592_28620)){
var ch_28622 = cljs.core._nth.call(null,chunk__28591_28619,i__28593_28621);
e.appendChild(ch_28622);

var G__28623 = seq__28590_28618;
var G__28624 = chunk__28591_28619;
var G__28625 = count__28592_28620;
var G__28626 = (i__28593_28621 + (1));
seq__28590_28618 = G__28623;
chunk__28591_28619 = G__28624;
count__28592_28620 = G__28625;
i__28593_28621 = G__28626;
continue;
} else {
var temp__4425__auto___28627 = cljs.core.seq.call(null,seq__28590_28618);
if(temp__4425__auto___28627){
var seq__28590_28628__$1 = temp__4425__auto___28627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28590_28628__$1)){
var c__17295__auto___28629 = cljs.core.chunk_first.call(null,seq__28590_28628__$1);
var G__28630 = cljs.core.chunk_rest.call(null,seq__28590_28628__$1);
var G__28631 = c__17295__auto___28629;
var G__28632 = cljs.core.count.call(null,c__17295__auto___28629);
var G__28633 = (0);
seq__28590_28618 = G__28630;
chunk__28591_28619 = G__28631;
count__28592_28620 = G__28632;
i__28593_28621 = G__28633;
continue;
} else {
var ch_28634 = cljs.core.first.call(null,seq__28590_28628__$1);
e.appendChild(ch_28634);

var G__28635 = cljs.core.next.call(null,seq__28590_28628__$1);
var G__28636 = null;
var G__28637 = (0);
var G__28638 = (0);
seq__28590_28618 = G__28635;
chunk__28591_28619 = G__28636;
count__28592_28620 = G__28637;
i__28593_28621 = G__28638;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28583){
var G__28584 = cljs.core.first.call(null,seq28583);
var seq28583__$1 = cljs.core.next.call(null,seq28583);
var G__28585 = cljs.core.first.call(null,seq28583__$1);
var seq28583__$2 = cljs.core.next.call(null,seq28583__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28584,G__28585,seq28583__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17405__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17409__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17405__auto__,prefer_table__17406__auto__,method_cache__17407__auto__,cached_hierarchy__17408__auto__,hierarchy__17409__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17405__auto__,prefer_table__17406__auto__,method_cache__17407__auto__,cached_hierarchy__17408__auto__,hierarchy__17409__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17409__auto__,method_table__17405__auto__,prefer_table__17406__auto__,method_cache__17407__auto__,cached_hierarchy__17408__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28639 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28639.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28639.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28639.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28639);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28640,st_map){
var map__28645 = p__28640;
var map__28645__$1 = ((((!((map__28645 == null)))?((((map__28645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645):map__28645);
var container_el = cljs.core.get.call(null,map__28645__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28645,map__28645__$1,container_el){
return (function (p__28647){
var vec__28648 = p__28647;
var k = cljs.core.nth.call(null,vec__28648,(0),null);
var v = cljs.core.nth.call(null,vec__28648,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28645,map__28645__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28649,dom_str){
var map__28652 = p__28649;
var map__28652__$1 = ((((!((map__28652 == null)))?((((map__28652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);
var c = map__28652__$1;
var content_area_el = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28654){
var map__28657 = p__28654;
var map__28657__$1 = ((((!((map__28657 == null)))?((((map__28657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28657):map__28657);
var content_area_el = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_28700){
var state_val_28701 = (state_28700[(1)]);
if((state_val_28701 === (1))){
var inst_28685 = (state_28700[(7)]);
var inst_28685__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28686 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28687 = ["10px","10px","100%","68px","1.0"];
var inst_28688 = cljs.core.PersistentHashMap.fromArrays(inst_28686,inst_28687);
var inst_28689 = cljs.core.merge.call(null,inst_28688,style);
var inst_28690 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28685__$1,inst_28689);
var inst_28691 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28685__$1,msg);
var inst_28692 = cljs.core.async.timeout.call(null,(300));
var state_28700__$1 = (function (){var statearr_28702 = state_28700;
(statearr_28702[(8)] = inst_28690);

(statearr_28702[(9)] = inst_28691);

(statearr_28702[(7)] = inst_28685__$1);

return statearr_28702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28700__$1,(2),inst_28692);
} else {
if((state_val_28701 === (2))){
var inst_28685 = (state_28700[(7)]);
var inst_28694 = (state_28700[(2)]);
var inst_28695 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28696 = ["auto"];
var inst_28697 = cljs.core.PersistentHashMap.fromArrays(inst_28695,inst_28696);
var inst_28698 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28685,inst_28697);
var state_28700__$1 = (function (){var statearr_28703 = state_28700;
(statearr_28703[(10)] = inst_28694);

return statearr_28703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28700__$1,inst_28698);
} else {
return null;
}
}
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto____0 = (function (){
var statearr_28707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28707[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto__);

(statearr_28707[(1)] = (1));

return statearr_28707;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto____1 = (function (state_28700){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e28708){if((e28708 instanceof Object)){
var ex__19633__auto__ = e28708;
var statearr_28709_28711 = state_28700;
(statearr_28709_28711[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28712 = state_28700;
state_28700 = G__28712;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto__ = function(state_28700){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto____1.call(this,state_28700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_28710 = f__19695__auto__.call(null);
(statearr_28710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_28710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28714 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28714,(0),null);
var ln = cljs.core.nth.call(null,vec__28714,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28717 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28717,(0),null);
var file_line = cljs.core.nth.call(null,vec__28717,(1),null);
var file_column = cljs.core.nth.call(null,vec__28717,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28717,file_name,file_line,file_column){
return (function (p1__28715_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28715_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28717,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16511__auto__ = file_line;
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
var and__16499__auto__ = cause;
if(cljs.core.truth_(and__16499__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16499__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28720 = figwheel.client.heads_up.ensure_container.call(null);
var map__28720__$1 = ((((!((map__28720 == null)))?((((map__28720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);
var content_area_el = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_28768){
var state_val_28769 = (state_28768[(1)]);
if((state_val_28769 === (1))){
var inst_28751 = (state_28768[(7)]);
var inst_28751__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28752 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28753 = ["0.0"];
var inst_28754 = cljs.core.PersistentHashMap.fromArrays(inst_28752,inst_28753);
var inst_28755 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28751__$1,inst_28754);
var inst_28756 = cljs.core.async.timeout.call(null,(300));
var state_28768__$1 = (function (){var statearr_28770 = state_28768;
(statearr_28770[(7)] = inst_28751__$1);

(statearr_28770[(8)] = inst_28755);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(2),inst_28756);
} else {
if((state_val_28769 === (2))){
var inst_28751 = (state_28768[(7)]);
var inst_28758 = (state_28768[(2)]);
var inst_28759 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28760 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28761 = cljs.core.PersistentHashMap.fromArrays(inst_28759,inst_28760);
var inst_28762 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28751,inst_28761);
var inst_28763 = cljs.core.async.timeout.call(null,(200));
var state_28768__$1 = (function (){var statearr_28771 = state_28768;
(statearr_28771[(9)] = inst_28762);

(statearr_28771[(10)] = inst_28758);

return statearr_28771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(3),inst_28763);
} else {
if((state_val_28769 === (3))){
var inst_28751 = (state_28768[(7)]);
var inst_28765 = (state_28768[(2)]);
var inst_28766 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28751,"");
var state_28768__$1 = (function (){var statearr_28772 = state_28768;
(statearr_28772[(11)] = inst_28765);

return statearr_28772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28768__$1,inst_28766);
} else {
return null;
}
}
}
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19630__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19630__auto____0 = (function (){
var statearr_28776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28776[(0)] = figwheel$client$heads_up$clear_$_state_machine__19630__auto__);

(statearr_28776[(1)] = (1));

return statearr_28776;
});
var figwheel$client$heads_up$clear_$_state_machine__19630__auto____1 = (function (state_28768){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e28777){if((e28777 instanceof Object)){
var ex__19633__auto__ = e28777;
var statearr_28778_28780 = state_28768;
(statearr_28778_28780[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28781 = state_28768;
state_28768 = G__28781;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19630__auto__ = function(state_28768){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19630__auto____1.call(this,state_28768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19630__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19630__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_28779 = f__19695__auto__.call(null);
(statearr_28779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_28779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_28813){
var state_val_28814 = (state_28813[(1)]);
if((state_val_28814 === (1))){
var inst_28803 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28813__$1 = state_28813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28813__$1,(2),inst_28803);
} else {
if((state_val_28814 === (2))){
var inst_28805 = (state_28813[(2)]);
var inst_28806 = cljs.core.async.timeout.call(null,(400));
var state_28813__$1 = (function (){var statearr_28815 = state_28813;
(statearr_28815[(7)] = inst_28805);

return statearr_28815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28813__$1,(3),inst_28806);
} else {
if((state_val_28814 === (3))){
var inst_28808 = (state_28813[(2)]);
var inst_28809 = figwheel.client.heads_up.clear.call(null);
var state_28813__$1 = (function (){var statearr_28816 = state_28813;
(statearr_28816[(8)] = inst_28808);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28813__$1,(4),inst_28809);
} else {
if((state_val_28814 === (4))){
var inst_28811 = (state_28813[(2)]);
var state_28813__$1 = state_28813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28813__$1,inst_28811);
} else {
return null;
}
}
}
}
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto____0 = (function (){
var statearr_28820 = [null,null,null,null,null,null,null,null,null];
(statearr_28820[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto__);

(statearr_28820[(1)] = (1));

return statearr_28820;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto____1 = (function (state_28813){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_28813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e28821){if((e28821 instanceof Object)){
var ex__19633__auto__ = e28821;
var statearr_28822_28824 = state_28813;
(statearr_28822_28824[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28825 = state_28813;
state_28813 = G__28825;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto__ = function(state_28813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto____1.call(this,state_28813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_28823 = f__19695__auto__.call(null);
(statearr_28823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_28823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map