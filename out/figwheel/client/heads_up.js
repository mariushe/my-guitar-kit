// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17515__auto__ = [];
var len__17508__auto___28549 = arguments.length;
var i__17509__auto___28550 = (0);
while(true){
if((i__17509__auto___28550 < len__17508__auto___28549)){
args__17515__auto__.push((arguments[i__17509__auto___28550]));

var G__28551 = (i__17509__auto___28550 + (1));
i__17509__auto___28550 = G__28551;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((2) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17516__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28541_28552 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28542_28553 = null;
var count__28543_28554 = (0);
var i__28544_28555 = (0);
while(true){
if((i__28544_28555 < count__28543_28554)){
var k_28556 = cljs.core._nth.call(null,chunk__28542_28553,i__28544_28555);
e.setAttribute(cljs.core.name.call(null,k_28556),cljs.core.get.call(null,attrs,k_28556));

var G__28557 = seq__28541_28552;
var G__28558 = chunk__28542_28553;
var G__28559 = count__28543_28554;
var G__28560 = (i__28544_28555 + (1));
seq__28541_28552 = G__28557;
chunk__28542_28553 = G__28558;
count__28543_28554 = G__28559;
i__28544_28555 = G__28560;
continue;
} else {
var temp__4425__auto___28561 = cljs.core.seq.call(null,seq__28541_28552);
if(temp__4425__auto___28561){
var seq__28541_28562__$1 = temp__4425__auto___28561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28541_28562__$1)){
var c__17253__auto___28563 = cljs.core.chunk_first.call(null,seq__28541_28562__$1);
var G__28564 = cljs.core.chunk_rest.call(null,seq__28541_28562__$1);
var G__28565 = c__17253__auto___28563;
var G__28566 = cljs.core.count.call(null,c__17253__auto___28563);
var G__28567 = (0);
seq__28541_28552 = G__28564;
chunk__28542_28553 = G__28565;
count__28543_28554 = G__28566;
i__28544_28555 = G__28567;
continue;
} else {
var k_28568 = cljs.core.first.call(null,seq__28541_28562__$1);
e.setAttribute(cljs.core.name.call(null,k_28568),cljs.core.get.call(null,attrs,k_28568));

var G__28569 = cljs.core.next.call(null,seq__28541_28562__$1);
var G__28570 = null;
var G__28571 = (0);
var G__28572 = (0);
seq__28541_28552 = G__28569;
chunk__28542_28553 = G__28570;
count__28543_28554 = G__28571;
i__28544_28555 = G__28572;
continue;
}
} else {
}
}
break;
}

var seq__28545_28573 = cljs.core.seq.call(null,children);
var chunk__28546_28574 = null;
var count__28547_28575 = (0);
var i__28548_28576 = (0);
while(true){
if((i__28548_28576 < count__28547_28575)){
var ch_28577 = cljs.core._nth.call(null,chunk__28546_28574,i__28548_28576);
e.appendChild(ch_28577);

var G__28578 = seq__28545_28573;
var G__28579 = chunk__28546_28574;
var G__28580 = count__28547_28575;
var G__28581 = (i__28548_28576 + (1));
seq__28545_28573 = G__28578;
chunk__28546_28574 = G__28579;
count__28547_28575 = G__28580;
i__28548_28576 = G__28581;
continue;
} else {
var temp__4425__auto___28582 = cljs.core.seq.call(null,seq__28545_28573);
if(temp__4425__auto___28582){
var seq__28545_28583__$1 = temp__4425__auto___28582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28545_28583__$1)){
var c__17253__auto___28584 = cljs.core.chunk_first.call(null,seq__28545_28583__$1);
var G__28585 = cljs.core.chunk_rest.call(null,seq__28545_28583__$1);
var G__28586 = c__17253__auto___28584;
var G__28587 = cljs.core.count.call(null,c__17253__auto___28584);
var G__28588 = (0);
seq__28545_28573 = G__28585;
chunk__28546_28574 = G__28586;
count__28547_28575 = G__28587;
i__28548_28576 = G__28588;
continue;
} else {
var ch_28589 = cljs.core.first.call(null,seq__28545_28583__$1);
e.appendChild(ch_28589);

var G__28590 = cljs.core.next.call(null,seq__28545_28583__$1);
var G__28591 = null;
var G__28592 = (0);
var G__28593 = (0);
seq__28545_28573 = G__28590;
chunk__28546_28574 = G__28591;
count__28547_28575 = G__28592;
i__28548_28576 = G__28593;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28538){
var G__28539 = cljs.core.first.call(null,seq28538);
var seq28538__$1 = cljs.core.next.call(null,seq28538);
var G__28540 = cljs.core.first.call(null,seq28538__$1);
var seq28538__$2 = cljs.core.next.call(null,seq28538__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28539,G__28540,seq28538__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17367__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17363__auto__,prefer_table__17364__auto__,method_cache__17365__auto__,cached_hierarchy__17366__auto__,hierarchy__17367__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17363__auto__,prefer_table__17364__auto__,method_cache__17365__auto__,cached_hierarchy__17366__auto__,hierarchy__17367__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17367__auto__,method_table__17363__auto__,prefer_table__17364__auto__,method_cache__17365__auto__,cached_hierarchy__17366__auto__));
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
var el_28594 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28594.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28594.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28594.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28594);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28595,st_map){
var map__28600 = p__28595;
var map__28600__$1 = ((((!((map__28600 == null)))?((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28600):map__28600);
var container_el = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28600,map__28600__$1,container_el){
return (function (p__28602){
var vec__28603 = p__28602;
var k = cljs.core.nth.call(null,vec__28603,(0),null);
var v = cljs.core.nth.call(null,vec__28603,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28600,map__28600__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28604,dom_str){
var map__28607 = p__28604;
var map__28607__$1 = ((((!((map__28607 == null)))?((((map__28607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28607):map__28607);
var c = map__28607__$1;
var content_area_el = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28609){
var map__28612 = p__28609;
var map__28612__$1 = ((((!((map__28612 == null)))?((((map__28612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28612):map__28612);
var content_area_el = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_28655){
var state_val_28656 = (state_28655[(1)]);
if((state_val_28656 === (1))){
var inst_28640 = (state_28655[(7)]);
var inst_28640__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28641 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28642 = ["10px","10px","100%","68px","1.0"];
var inst_28643 = cljs.core.PersistentHashMap.fromArrays(inst_28641,inst_28642);
var inst_28644 = cljs.core.merge.call(null,inst_28643,style);
var inst_28645 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28640__$1,inst_28644);
var inst_28646 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28640__$1,msg);
var inst_28647 = cljs.core.async.timeout.call(null,(300));
var state_28655__$1 = (function (){var statearr_28657 = state_28655;
(statearr_28657[(8)] = inst_28646);

(statearr_28657[(7)] = inst_28640__$1);

(statearr_28657[(9)] = inst_28645);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28655__$1,(2),inst_28647);
} else {
if((state_val_28656 === (2))){
var inst_28640 = (state_28655[(7)]);
var inst_28649 = (state_28655[(2)]);
var inst_28650 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28651 = ["auto"];
var inst_28652 = cljs.core.PersistentHashMap.fromArrays(inst_28650,inst_28651);
var inst_28653 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28640,inst_28652);
var state_28655__$1 = (function (){var statearr_28658 = state_28655;
(statearr_28658[(10)] = inst_28649);

return statearr_28658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28655__$1,inst_28653);
} else {
return null;
}
}
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____0 = (function (){
var statearr_28662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28662[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__);

(statearr_28662[(1)] = (1));

return statearr_28662;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____1 = (function (state_28655){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28663){if((e28663 instanceof Object)){
var ex__19591__auto__ = e28663;
var statearr_28664_28666 = state_28655;
(statearr_28664_28666[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28667 = state_28655;
state_28655 = G__28667;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__ = function(state_28655){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____1.call(this,state_28655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_28665 = f__19653__auto__.call(null);
(statearr_28665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_28665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
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
var vec__28669 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28669,(0),null);
var ln = cljs.core.nth.call(null,vec__28669,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28672 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28672,(0),null);
var file_line = cljs.core.nth.call(null,vec__28672,(1),null);
var file_column = cljs.core.nth.call(null,vec__28672,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28672,file_name,file_line,file_column){
return (function (p1__28670_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28670_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28672,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16469__auto__ = file_line;
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
var and__16457__auto__ = cause;
if(cljs.core.truth_(and__16457__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16457__auto__;
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
var map__28675 = figwheel.client.heads_up.ensure_container.call(null);
var map__28675__$1 = ((((!((map__28675 == null)))?((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var content_area_el = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_28723){
var state_val_28724 = (state_28723[(1)]);
if((state_val_28724 === (1))){
var inst_28706 = (state_28723[(7)]);
var inst_28706__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28707 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28708 = ["0.0"];
var inst_28709 = cljs.core.PersistentHashMap.fromArrays(inst_28707,inst_28708);
var inst_28710 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28706__$1,inst_28709);
var inst_28711 = cljs.core.async.timeout.call(null,(300));
var state_28723__$1 = (function (){var statearr_28725 = state_28723;
(statearr_28725[(7)] = inst_28706__$1);

(statearr_28725[(8)] = inst_28710);

return statearr_28725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28723__$1,(2),inst_28711);
} else {
if((state_val_28724 === (2))){
var inst_28706 = (state_28723[(7)]);
var inst_28713 = (state_28723[(2)]);
var inst_28714 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28715 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28716 = cljs.core.PersistentHashMap.fromArrays(inst_28714,inst_28715);
var inst_28717 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28706,inst_28716);
var inst_28718 = cljs.core.async.timeout.call(null,(200));
var state_28723__$1 = (function (){var statearr_28726 = state_28723;
(statearr_28726[(9)] = inst_28713);

(statearr_28726[(10)] = inst_28717);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28723__$1,(3),inst_28718);
} else {
if((state_val_28724 === (3))){
var inst_28706 = (state_28723[(7)]);
var inst_28720 = (state_28723[(2)]);
var inst_28721 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28706,"");
var state_28723__$1 = (function (){var statearr_28727 = state_28723;
(statearr_28727[(11)] = inst_28720);

return statearr_28727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28723__$1,inst_28721);
} else {
return null;
}
}
}
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19588__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19588__auto____0 = (function (){
var statearr_28731 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28731[(0)] = figwheel$client$heads_up$clear_$_state_machine__19588__auto__);

(statearr_28731[(1)] = (1));

return statearr_28731;
});
var figwheel$client$heads_up$clear_$_state_machine__19588__auto____1 = (function (state_28723){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object)){
var ex__19591__auto__ = e28732;
var statearr_28733_28735 = state_28723;
(statearr_28733_28735[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28736 = state_28723;
state_28723 = G__28736;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19588__auto__ = function(state_28723){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19588__auto____1.call(this,state_28723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19588__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19588__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_28734 = f__19653__auto__.call(null);
(statearr_28734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_28734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_28768){
var state_val_28769 = (state_28768[(1)]);
if((state_val_28769 === (1))){
var inst_28758 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(2),inst_28758);
} else {
if((state_val_28769 === (2))){
var inst_28760 = (state_28768[(2)]);
var inst_28761 = cljs.core.async.timeout.call(null,(400));
var state_28768__$1 = (function (){var statearr_28770 = state_28768;
(statearr_28770[(7)] = inst_28760);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(3),inst_28761);
} else {
if((state_val_28769 === (3))){
var inst_28763 = (state_28768[(2)]);
var inst_28764 = figwheel.client.heads_up.clear.call(null);
var state_28768__$1 = (function (){var statearr_28771 = state_28768;
(statearr_28771[(8)] = inst_28763);

return statearr_28771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(4),inst_28764);
} else {
if((state_val_28769 === (4))){
var inst_28766 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28768__$1,inst_28766);
} else {
return null;
}
}
}
}
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____0 = (function (){
var statearr_28775 = [null,null,null,null,null,null,null,null,null];
(statearr_28775[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__);

(statearr_28775[(1)] = (1));

return statearr_28775;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____1 = (function (state_28768){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28776){if((e28776 instanceof Object)){
var ex__19591__auto__ = e28776;
var statearr_28777_28779 = state_28768;
(statearr_28777_28779[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28780 = state_28768;
state_28768 = G__28780;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__ = function(state_28768){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____1.call(this,state_28768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_28778 = f__19653__auto__.call(null);
(statearr_28778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map