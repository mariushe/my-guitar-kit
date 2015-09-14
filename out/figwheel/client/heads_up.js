// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17515__auto__ = [];
var len__17508__auto___24405 = arguments.length;
var i__17509__auto___24406 = (0);
while(true){
if((i__17509__auto___24406 < len__17508__auto___24405)){
args__17515__auto__.push((arguments[i__17509__auto___24406]));

var G__24407 = (i__17509__auto___24406 + (1));
i__17509__auto___24406 = G__24407;
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
var seq__24397_24408 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24398_24409 = null;
var count__24399_24410 = (0);
var i__24400_24411 = (0);
while(true){
if((i__24400_24411 < count__24399_24410)){
var k_24412 = cljs.core._nth.call(null,chunk__24398_24409,i__24400_24411);
e.setAttribute(cljs.core.name.call(null,k_24412),cljs.core.get.call(null,attrs,k_24412));

var G__24413 = seq__24397_24408;
var G__24414 = chunk__24398_24409;
var G__24415 = count__24399_24410;
var G__24416 = (i__24400_24411 + (1));
seq__24397_24408 = G__24413;
chunk__24398_24409 = G__24414;
count__24399_24410 = G__24415;
i__24400_24411 = G__24416;
continue;
} else {
var temp__4425__auto___24417 = cljs.core.seq.call(null,seq__24397_24408);
if(temp__4425__auto___24417){
var seq__24397_24418__$1 = temp__4425__auto___24417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24397_24418__$1)){
var c__17253__auto___24419 = cljs.core.chunk_first.call(null,seq__24397_24418__$1);
var G__24420 = cljs.core.chunk_rest.call(null,seq__24397_24418__$1);
var G__24421 = c__17253__auto___24419;
var G__24422 = cljs.core.count.call(null,c__17253__auto___24419);
var G__24423 = (0);
seq__24397_24408 = G__24420;
chunk__24398_24409 = G__24421;
count__24399_24410 = G__24422;
i__24400_24411 = G__24423;
continue;
} else {
var k_24424 = cljs.core.first.call(null,seq__24397_24418__$1);
e.setAttribute(cljs.core.name.call(null,k_24424),cljs.core.get.call(null,attrs,k_24424));

var G__24425 = cljs.core.next.call(null,seq__24397_24418__$1);
var G__24426 = null;
var G__24427 = (0);
var G__24428 = (0);
seq__24397_24408 = G__24425;
chunk__24398_24409 = G__24426;
count__24399_24410 = G__24427;
i__24400_24411 = G__24428;
continue;
}
} else {
}
}
break;
}

var seq__24401_24429 = cljs.core.seq.call(null,children);
var chunk__24402_24430 = null;
var count__24403_24431 = (0);
var i__24404_24432 = (0);
while(true){
if((i__24404_24432 < count__24403_24431)){
var ch_24433 = cljs.core._nth.call(null,chunk__24402_24430,i__24404_24432);
e.appendChild(ch_24433);

var G__24434 = seq__24401_24429;
var G__24435 = chunk__24402_24430;
var G__24436 = count__24403_24431;
var G__24437 = (i__24404_24432 + (1));
seq__24401_24429 = G__24434;
chunk__24402_24430 = G__24435;
count__24403_24431 = G__24436;
i__24404_24432 = G__24437;
continue;
} else {
var temp__4425__auto___24438 = cljs.core.seq.call(null,seq__24401_24429);
if(temp__4425__auto___24438){
var seq__24401_24439__$1 = temp__4425__auto___24438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24401_24439__$1)){
var c__17253__auto___24440 = cljs.core.chunk_first.call(null,seq__24401_24439__$1);
var G__24441 = cljs.core.chunk_rest.call(null,seq__24401_24439__$1);
var G__24442 = c__17253__auto___24440;
var G__24443 = cljs.core.count.call(null,c__17253__auto___24440);
var G__24444 = (0);
seq__24401_24429 = G__24441;
chunk__24402_24430 = G__24442;
count__24403_24431 = G__24443;
i__24404_24432 = G__24444;
continue;
} else {
var ch_24445 = cljs.core.first.call(null,seq__24401_24439__$1);
e.appendChild(ch_24445);

var G__24446 = cljs.core.next.call(null,seq__24401_24439__$1);
var G__24447 = null;
var G__24448 = (0);
var G__24449 = (0);
seq__24401_24429 = G__24446;
chunk__24402_24430 = G__24447;
count__24403_24431 = G__24448;
i__24404_24432 = G__24449;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24394){
var G__24395 = cljs.core.first.call(null,seq24394);
var seq24394__$1 = cljs.core.next.call(null,seq24394);
var G__24396 = cljs.core.first.call(null,seq24394__$1);
var seq24394__$2 = cljs.core.next.call(null,seq24394__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24395,G__24396,seq24394__$2);
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
var el_24450 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24450.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24450.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24450.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24450);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24451,st_map){
var map__24456 = p__24451;
var map__24456__$1 = ((((!((map__24456 == null)))?((((map__24456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24456):map__24456);
var container_el = cljs.core.get.call(null,map__24456__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24456,map__24456__$1,container_el){
return (function (p__24458){
var vec__24459 = p__24458;
var k = cljs.core.nth.call(null,vec__24459,(0),null);
var v = cljs.core.nth.call(null,vec__24459,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24456,map__24456__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24460,dom_str){
var map__24463 = p__24460;
var map__24463__$1 = ((((!((map__24463 == null)))?((((map__24463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24463):map__24463);
var c = map__24463__$1;
var content_area_el = cljs.core.get.call(null,map__24463__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24465){
var map__24468 = p__24465;
var map__24468__$1 = ((((!((map__24468 == null)))?((((map__24468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24468):map__24468);
var content_area_el = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_24511){
var state_val_24512 = (state_24511[(1)]);
if((state_val_24512 === (1))){
var inst_24496 = (state_24511[(7)]);
var inst_24496__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24497 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24498 = ["10px","10px","100%","68px","1.0"];
var inst_24499 = cljs.core.PersistentHashMap.fromArrays(inst_24497,inst_24498);
var inst_24500 = cljs.core.merge.call(null,inst_24499,style);
var inst_24501 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24496__$1,inst_24500);
var inst_24502 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24496__$1,msg);
var inst_24503 = cljs.core.async.timeout.call(null,(300));
var state_24511__$1 = (function (){var statearr_24513 = state_24511;
(statearr_24513[(7)] = inst_24496__$1);

(statearr_24513[(8)] = inst_24501);

(statearr_24513[(9)] = inst_24502);

return statearr_24513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24511__$1,(2),inst_24503);
} else {
if((state_val_24512 === (2))){
var inst_24496 = (state_24511[(7)]);
var inst_24505 = (state_24511[(2)]);
var inst_24506 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24507 = ["auto"];
var inst_24508 = cljs.core.PersistentHashMap.fromArrays(inst_24506,inst_24507);
var inst_24509 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24496,inst_24508);
var state_24511__$1 = (function (){var statearr_24514 = state_24511;
(statearr_24514[(10)] = inst_24505);

return statearr_24514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24511__$1,inst_24509);
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
var statearr_24518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24518[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__);

(statearr_24518[(1)] = (1));

return statearr_24518;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____1 = (function (state_24511){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24519){if((e24519 instanceof Object)){
var ex__19591__auto__ = e24519;
var statearr_24520_24522 = state_24511;
(statearr_24520_24522[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24523 = state_24511;
state_24511 = G__24523;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__ = function(state_24511){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____1.call(this,state_24511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_24521 = f__19653__auto__.call(null);
(statearr_24521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_24521;
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
var vec__24525 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24525,(0),null);
var ln = cljs.core.nth.call(null,vec__24525,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24528 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24528,(0),null);
var file_line = cljs.core.nth.call(null,vec__24528,(1),null);
var file_column = cljs.core.nth.call(null,vec__24528,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24528,file_name,file_line,file_column){
return (function (p1__24526_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24526_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24528,file_name,file_line,file_column))
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
var map__24531 = figwheel.client.heads_up.ensure_container.call(null);
var map__24531__$1 = ((((!((map__24531 == null)))?((((map__24531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24531):map__24531);
var content_area_el = cljs.core.get.call(null,map__24531__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_24579){
var state_val_24580 = (state_24579[(1)]);
if((state_val_24580 === (1))){
var inst_24562 = (state_24579[(7)]);
var inst_24562__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24563 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24564 = ["0.0"];
var inst_24565 = cljs.core.PersistentHashMap.fromArrays(inst_24563,inst_24564);
var inst_24566 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24562__$1,inst_24565);
var inst_24567 = cljs.core.async.timeout.call(null,(300));
var state_24579__$1 = (function (){var statearr_24581 = state_24579;
(statearr_24581[(7)] = inst_24562__$1);

(statearr_24581[(8)] = inst_24566);

return statearr_24581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(2),inst_24567);
} else {
if((state_val_24580 === (2))){
var inst_24562 = (state_24579[(7)]);
var inst_24569 = (state_24579[(2)]);
var inst_24570 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24571 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24572 = cljs.core.PersistentHashMap.fromArrays(inst_24570,inst_24571);
var inst_24573 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24562,inst_24572);
var inst_24574 = cljs.core.async.timeout.call(null,(200));
var state_24579__$1 = (function (){var statearr_24582 = state_24579;
(statearr_24582[(9)] = inst_24569);

(statearr_24582[(10)] = inst_24573);

return statearr_24582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(3),inst_24574);
} else {
if((state_val_24580 === (3))){
var inst_24562 = (state_24579[(7)]);
var inst_24576 = (state_24579[(2)]);
var inst_24577 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24562,"");
var state_24579__$1 = (function (){var statearr_24583 = state_24579;
(statearr_24583[(11)] = inst_24576);

return statearr_24583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24579__$1,inst_24577);
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
var statearr_24587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24587[(0)] = figwheel$client$heads_up$clear_$_state_machine__19588__auto__);

(statearr_24587[(1)] = (1));

return statearr_24587;
});
var figwheel$client$heads_up$clear_$_state_machine__19588__auto____1 = (function (state_24579){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24588){if((e24588 instanceof Object)){
var ex__19591__auto__ = e24588;
var statearr_24589_24591 = state_24579;
(statearr_24589_24591[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24592 = state_24579;
state_24579 = G__24592;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19588__auto__ = function(state_24579){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19588__auto____1.call(this,state_24579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19588__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19588__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_24590 = f__19653__auto__.call(null);
(statearr_24590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_24590;
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
return (function (state_24624){
var state_val_24625 = (state_24624[(1)]);
if((state_val_24625 === (1))){
var inst_24614 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24624__$1 = state_24624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24624__$1,(2),inst_24614);
} else {
if((state_val_24625 === (2))){
var inst_24616 = (state_24624[(2)]);
var inst_24617 = cljs.core.async.timeout.call(null,(400));
var state_24624__$1 = (function (){var statearr_24626 = state_24624;
(statearr_24626[(7)] = inst_24616);

return statearr_24626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24624__$1,(3),inst_24617);
} else {
if((state_val_24625 === (3))){
var inst_24619 = (state_24624[(2)]);
var inst_24620 = figwheel.client.heads_up.clear.call(null);
var state_24624__$1 = (function (){var statearr_24627 = state_24624;
(statearr_24627[(8)] = inst_24619);

return statearr_24627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24624__$1,(4),inst_24620);
} else {
if((state_val_24625 === (4))){
var inst_24622 = (state_24624[(2)]);
var state_24624__$1 = state_24624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24624__$1,inst_24622);
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
var statearr_24631 = [null,null,null,null,null,null,null,null,null];
(statearr_24631[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__);

(statearr_24631[(1)] = (1));

return statearr_24631;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____1 = (function (state_24624){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_24624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e24632){if((e24632 instanceof Object)){
var ex__19591__auto__ = e24632;
var statearr_24633_24635 = state_24624;
(statearr_24633_24635[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24636 = state_24624;
state_24624 = G__24636;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__ = function(state_24624){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____1.call(this,state_24624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_24634 = f__19653__auto__.call(null);
(statearr_24634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_24634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map