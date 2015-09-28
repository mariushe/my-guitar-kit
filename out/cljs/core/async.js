// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t29711 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29711 = (function (fn_handler,f,meta29712){
this.fn_handler = fn_handler;
this.f = f;
this.meta29712 = meta29712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29713,meta29712__$1){
var self__ = this;
var _29713__$1 = this;
return (new cljs.core.async.t29711(self__.fn_handler,self__.f,meta29712__$1));
});

cljs.core.async.t29711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29713){
var self__ = this;
var _29713__$1 = this;
return self__.meta29712;
});

cljs.core.async.t29711.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29712","meta29712",1268554214,null)], null);
});

cljs.core.async.t29711.cljs$lang$type = true;

cljs.core.async.t29711.cljs$lang$ctorStr = "cljs.core.async/t29711";

cljs.core.async.t29711.cljs$lang$ctorPrWriter = (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t29711");
});

cljs.core.async.__GT_t29711 = (function cljs$core$async$fn_handler_$___GT_t29711(fn_handler__$1,f__$1,meta29712){
return (new cljs.core.async.t29711(fn_handler__$1,f__$1,meta29712));
});

}

return (new cljs.core.async.t29711(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args29716 = [];
var len__17550__auto___29719 = arguments.length;
var i__17551__auto___29720 = (0);
while(true){
if((i__17551__auto___29720 < len__17550__auto___29719)){
args29716.push((arguments[i__17551__auto___29720]));

var G__29721 = (i__17551__auto___29720 + (1));
i__17551__auto___29720 = G__29721;
continue;
} else {
}
break;
}

var G__29718 = args29716.length;
switch (G__29718) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29716.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args29723 = [];
var len__17550__auto___29726 = arguments.length;
var i__17551__auto___29727 = (0);
while(true){
if((i__17551__auto___29727 < len__17550__auto___29726)){
args29723.push((arguments[i__17551__auto___29727]));

var G__29728 = (i__17551__auto___29727 + (1));
i__17551__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var G__29725 = args29723.length;
switch (G__29725) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29723.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29730 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29730);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29730,ret){
return (function (){
return fn1.call(null,val_29730);
});})(val_29730,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args29731 = [];
var len__17550__auto___29734 = arguments.length;
var i__17551__auto___29735 = (0);
while(true){
if((i__17551__auto___29735 < len__17550__auto___29734)){
args29731.push((arguments[i__17551__auto___29735]));

var G__29736 = (i__17551__auto___29735 + (1));
i__17551__auto___29735 = G__29736;
continue;
} else {
}
break;
}

var G__29733 = args29731.length;
switch (G__29733) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29731.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17395__auto___29738 = n;
var x_29739 = (0);
while(true){
if((x_29739 < n__17395__auto___29738)){
(a[x_29739] = (0));

var G__29740 = (x_29739 + (1));
x_29739 = G__29740;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29741 = (i + (1));
i = G__29741;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29745 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29745 = (function (alt_flag,flag,meta29746){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29746 = meta29746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29747,meta29746__$1){
var self__ = this;
var _29747__$1 = this;
return (new cljs.core.async.t29745(self__.alt_flag,self__.flag,meta29746__$1));
});})(flag))
;

cljs.core.async.t29745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29747){
var self__ = this;
var _29747__$1 = this;
return self__.meta29746;
});})(flag))
;

cljs.core.async.t29745.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29745.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29746","meta29746",-698786769,null)], null);
});})(flag))
;

cljs.core.async.t29745.cljs$lang$type = true;

cljs.core.async.t29745.cljs$lang$ctorStr = "cljs.core.async/t29745";

cljs.core.async.t29745.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t29745");
});})(flag))
;

cljs.core.async.__GT_t29745 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29745(alt_flag__$1,flag__$1,meta29746){
return (new cljs.core.async.t29745(alt_flag__$1,flag__$1,meta29746));
});})(flag))
;

}

return (new cljs.core.async.t29745(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29751 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29751 = (function (alt_handler,flag,cb,meta29752){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29752 = meta29752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29753,meta29752__$1){
var self__ = this;
var _29753__$1 = this;
return (new cljs.core.async.t29751(self__.alt_handler,self__.flag,self__.cb,meta29752__$1));
});

cljs.core.async.t29751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29753){
var self__ = this;
var _29753__$1 = this;
return self__.meta29752;
});

cljs.core.async.t29751.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29752","meta29752",-844177709,null)], null);
});

cljs.core.async.t29751.cljs$lang$type = true;

cljs.core.async.t29751.cljs$lang$ctorStr = "cljs.core.async/t29751";

cljs.core.async.t29751.cljs$lang$ctorPrWriter = (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t29751");
});

cljs.core.async.__GT_t29751 = (function cljs$core$async$alt_handler_$___GT_t29751(alt_handler__$1,flag__$1,cb__$1,meta29752){
return (new cljs.core.async.t29751(alt_handler__$1,flag__$1,cb__$1,meta29752));
});

}

return (new cljs.core.async.t29751(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29754_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29754_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29755_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29755_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16511__auto__ = wport;
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29756 = (i + (1));
i = G__29756;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16511__auto__ = ret;
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16499__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16499__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16499__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17557__auto__ = [];
var len__17550__auto___29762 = arguments.length;
var i__17551__auto___29763 = (0);
while(true){
if((i__17551__auto___29763 < len__17550__auto___29762)){
args__17557__auto__.push((arguments[i__17551__auto___29763]));

var G__29764 = (i__17551__auto___29763 + (1));
i__17551__auto___29763 = G__29764;
continue;
} else {
}
break;
}

var argseq__17558__auto__ = ((((1) < args__17557__auto__.length))?(new cljs.core.IndexedSeq(args__17557__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17558__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29759){
var map__29760 = p__29759;
var map__29760__$1 = ((((!((map__29760 == null)))?((((map__29760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29760):map__29760);
var opts = map__29760__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29757){
var G__29758 = cljs.core.first.call(null,seq29757);
var seq29757__$1 = cljs.core.next.call(null,seq29757);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29758,seq29757__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args29765 = [];
var len__17550__auto___29815 = arguments.length;
var i__17551__auto___29816 = (0);
while(true){
if((i__17551__auto___29816 < len__17550__auto___29815)){
args29765.push((arguments[i__17551__auto___29816]));

var G__29817 = (i__17551__auto___29816 + (1));
i__17551__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var G__29767 = args29765.length;
switch (G__29767) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29765.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19694__auto___29819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___29819){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___29819){
return (function (state_29791){
var state_val_29792 = (state_29791[(1)]);
if((state_val_29792 === (7))){
var inst_29787 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29793_29820 = state_29791__$1;
(statearr_29793_29820[(2)] = inst_29787);

(statearr_29793_29820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (1))){
var state_29791__$1 = state_29791;
var statearr_29794_29821 = state_29791__$1;
(statearr_29794_29821[(2)] = null);

(statearr_29794_29821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (4))){
var inst_29770 = (state_29791[(7)]);
var inst_29770__$1 = (state_29791[(2)]);
var inst_29771 = (inst_29770__$1 == null);
var state_29791__$1 = (function (){var statearr_29795 = state_29791;
(statearr_29795[(7)] = inst_29770__$1);

return statearr_29795;
})();
if(cljs.core.truth_(inst_29771)){
var statearr_29796_29822 = state_29791__$1;
(statearr_29796_29822[(1)] = (5));

} else {
var statearr_29797_29823 = state_29791__$1;
(statearr_29797_29823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (13))){
var state_29791__$1 = state_29791;
var statearr_29798_29824 = state_29791__$1;
(statearr_29798_29824[(2)] = null);

(statearr_29798_29824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (6))){
var inst_29770 = (state_29791[(7)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29791__$1,(11),to,inst_29770);
} else {
if((state_val_29792 === (3))){
var inst_29789 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29791__$1,inst_29789);
} else {
if((state_val_29792 === (12))){
var state_29791__$1 = state_29791;
var statearr_29799_29825 = state_29791__$1;
(statearr_29799_29825[(2)] = null);

(statearr_29799_29825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (2))){
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29791__$1,(4),from);
} else {
if((state_val_29792 === (11))){
var inst_29780 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
if(cljs.core.truth_(inst_29780)){
var statearr_29800_29826 = state_29791__$1;
(statearr_29800_29826[(1)] = (12));

} else {
var statearr_29801_29827 = state_29791__$1;
(statearr_29801_29827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (9))){
var state_29791__$1 = state_29791;
var statearr_29802_29828 = state_29791__$1;
(statearr_29802_29828[(2)] = null);

(statearr_29802_29828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (5))){
var state_29791__$1 = state_29791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29803_29829 = state_29791__$1;
(statearr_29803_29829[(1)] = (8));

} else {
var statearr_29804_29830 = state_29791__$1;
(statearr_29804_29830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (14))){
var inst_29785 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29805_29831 = state_29791__$1;
(statearr_29805_29831[(2)] = inst_29785);

(statearr_29805_29831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (10))){
var inst_29777 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29806_29832 = state_29791__$1;
(statearr_29806_29832[(2)] = inst_29777);

(statearr_29806_29832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (8))){
var inst_29774 = cljs.core.async.close_BANG_.call(null,to);
var state_29791__$1 = state_29791;
var statearr_29807_29833 = state_29791__$1;
(statearr_29807_29833[(2)] = inst_29774);

(statearr_29807_29833[(1)] = (10));


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
});})(c__19694__auto___29819))
;
return ((function (switch__19629__auto__,c__19694__auto___29819){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_29811 = [null,null,null,null,null,null,null,null];
(statearr_29811[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_29811[(1)] = (1));

return statearr_29811;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_29791){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_29791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e29812){if((e29812 instanceof Object)){
var ex__19633__auto__ = e29812;
var statearr_29813_29834 = state_29791;
(statearr_29813_29834[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29835 = state_29791;
state_29791 = G__29835;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_29791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_29791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___29819))
})();
var state__19696__auto__ = (function (){var statearr_29814 = f__19695__auto__.call(null);
(statearr_29814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___29819);

return statearr_29814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___29819))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30019){
var vec__30020 = p__30019;
var v = cljs.core.nth.call(null,vec__30020,(0),null);
var p = cljs.core.nth.call(null,vec__30020,(1),null);
var job = vec__30020;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19694__auto___30202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___30202,res,vec__30020,v,p,job,jobs,results){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___30202,res,vec__30020,v,p,job,jobs,results){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (1))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30025__$1,(2),res,v);
} else {
if((state_val_30026 === (2))){
var inst_30022 = (state_30025[(2)]);
var inst_30023 = cljs.core.async.close_BANG_.call(null,res);
var state_30025__$1 = (function (){var statearr_30027 = state_30025;
(statearr_30027[(7)] = inst_30022);

return statearr_30027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
return null;
}
}
});})(c__19694__auto___30202,res,vec__30020,v,p,job,jobs,results))
;
return ((function (switch__19629__auto__,c__19694__auto___30202,res,vec__30020,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0 = (function (){
var statearr_30031 = [null,null,null,null,null,null,null,null];
(statearr_30031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__);

(statearr_30031[(1)] = (1));

return statearr_30031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1 = (function (state_30025){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30032){if((e30032 instanceof Object)){
var ex__19633__auto__ = e30032;
var statearr_30033_30203 = state_30025;
(statearr_30033_30203[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30204 = state_30025;
state_30025 = G__30204;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___30202,res,vec__30020,v,p,job,jobs,results))
})();
var state__19696__auto__ = (function (){var statearr_30034 = f__19695__auto__.call(null);
(statearr_30034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___30202);

return statearr_30034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___30202,res,vec__30020,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30035){
var vec__30036 = p__30035;
var v = cljs.core.nth.call(null,vec__30036,(0),null);
var p = cljs.core.nth.call(null,vec__30036,(1),null);
var job = vec__30036;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17395__auto___30205 = n;
var __30206 = (0);
while(true){
if((__30206 < n__17395__auto___30205)){
var G__30037_30207 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30037_30207) {
case "compute":
var c__19694__auto___30209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30206,c__19694__auto___30209,G__30037_30207,n__17395__auto___30205,jobs,results,process,async){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (__30206,c__19694__auto___30209,G__30037_30207,n__17395__auto___30205,jobs,results,process,async){
return (function (state_30050){
var state_val_30051 = (state_30050[(1)]);
if((state_val_30051 === (1))){
var state_30050__$1 = state_30050;
var statearr_30052_30210 = state_30050__$1;
(statearr_30052_30210[(2)] = null);

(statearr_30052_30210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (2))){
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30050__$1,(4),jobs);
} else {
if((state_val_30051 === (3))){
var inst_30048 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30050__$1,inst_30048);
} else {
if((state_val_30051 === (4))){
var inst_30040 = (state_30050[(2)]);
var inst_30041 = process.call(null,inst_30040);
var state_30050__$1 = state_30050;
if(cljs.core.truth_(inst_30041)){
var statearr_30053_30211 = state_30050__$1;
(statearr_30053_30211[(1)] = (5));

} else {
var statearr_30054_30212 = state_30050__$1;
(statearr_30054_30212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (5))){
var state_30050__$1 = state_30050;
var statearr_30055_30213 = state_30050__$1;
(statearr_30055_30213[(2)] = null);

(statearr_30055_30213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (6))){
var state_30050__$1 = state_30050;
var statearr_30056_30214 = state_30050__$1;
(statearr_30056_30214[(2)] = null);

(statearr_30056_30214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30051 === (7))){
var inst_30046 = (state_30050[(2)]);
var state_30050__$1 = state_30050;
var statearr_30057_30215 = state_30050__$1;
(statearr_30057_30215[(2)] = inst_30046);

(statearr_30057_30215[(1)] = (3));


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
});})(__30206,c__19694__auto___30209,G__30037_30207,n__17395__auto___30205,jobs,results,process,async))
;
return ((function (__30206,switch__19629__auto__,c__19694__auto___30209,G__30037_30207,n__17395__auto___30205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0 = (function (){
var statearr_30061 = [null,null,null,null,null,null,null];
(statearr_30061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__);

(statearr_30061[(1)] = (1));

return statearr_30061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1 = (function (state_30050){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30062){if((e30062 instanceof Object)){
var ex__19633__auto__ = e30062;
var statearr_30063_30216 = state_30050;
(statearr_30063_30216[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30217 = state_30050;
state_30050 = G__30217;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = function(state_30050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1.call(this,state_30050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__;
})()
;})(__30206,switch__19629__auto__,c__19694__auto___30209,G__30037_30207,n__17395__auto___30205,jobs,results,process,async))
})();
var state__19696__auto__ = (function (){var statearr_30064 = f__19695__auto__.call(null);
(statearr_30064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___30209);

return statearr_30064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(__30206,c__19694__auto___30209,G__30037_30207,n__17395__auto___30205,jobs,results,process,async))
);


break;
case "async":
var c__19694__auto___30218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30206,c__19694__auto___30218,G__30037_30207,n__17395__auto___30205,jobs,results,process,async){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (__30206,c__19694__auto___30218,G__30037_30207,n__17395__auto___30205,jobs,results,process,async){
return (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (1))){
var state_30077__$1 = state_30077;
var statearr_30079_30219 = state_30077__$1;
(statearr_30079_30219[(2)] = null);

(statearr_30079_30219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (2))){
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30077__$1,(4),jobs);
} else {
if((state_val_30078 === (3))){
var inst_30075 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30077__$1,inst_30075);
} else {
if((state_val_30078 === (4))){
var inst_30067 = (state_30077[(2)]);
var inst_30068 = async.call(null,inst_30067);
var state_30077__$1 = state_30077;
if(cljs.core.truth_(inst_30068)){
var statearr_30080_30220 = state_30077__$1;
(statearr_30080_30220[(1)] = (5));

} else {
var statearr_30081_30221 = state_30077__$1;
(statearr_30081_30221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (5))){
var state_30077__$1 = state_30077;
var statearr_30082_30222 = state_30077__$1;
(statearr_30082_30222[(2)] = null);

(statearr_30082_30222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (6))){
var state_30077__$1 = state_30077;
var statearr_30083_30223 = state_30077__$1;
(statearr_30083_30223[(2)] = null);

(statearr_30083_30223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30078 === (7))){
var inst_30073 = (state_30077[(2)]);
var state_30077__$1 = state_30077;
var statearr_30084_30224 = state_30077__$1;
(statearr_30084_30224[(2)] = inst_30073);

(statearr_30084_30224[(1)] = (3));


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
});})(__30206,c__19694__auto___30218,G__30037_30207,n__17395__auto___30205,jobs,results,process,async))
;
return ((function (__30206,switch__19629__auto__,c__19694__auto___30218,G__30037_30207,n__17395__auto___30205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0 = (function (){
var statearr_30088 = [null,null,null,null,null,null,null];
(statearr_30088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__);

(statearr_30088[(1)] = (1));

return statearr_30088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1 = (function (state_30077){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30089){if((e30089 instanceof Object)){
var ex__19633__auto__ = e30089;
var statearr_30090_30225 = state_30077;
(statearr_30090_30225[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30226 = state_30077;
state_30077 = G__30226;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__;
})()
;})(__30206,switch__19629__auto__,c__19694__auto___30218,G__30037_30207,n__17395__auto___30205,jobs,results,process,async))
})();
var state__19696__auto__ = (function (){var statearr_30091 = f__19695__auto__.call(null);
(statearr_30091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___30218);

return statearr_30091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(__30206,c__19694__auto___30218,G__30037_30207,n__17395__auto___30205,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30227 = (__30206 + (1));
__30206 = G__30227;
continue;
} else {
}
break;
}

var c__19694__auto___30228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___30228,jobs,results,process,async){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___30228,jobs,results,process,async){
return (function (state_30113){
var state_val_30114 = (state_30113[(1)]);
if((state_val_30114 === (1))){
var state_30113__$1 = state_30113;
var statearr_30115_30229 = state_30113__$1;
(statearr_30115_30229[(2)] = null);

(statearr_30115_30229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (2))){
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30113__$1,(4),from);
} else {
if((state_val_30114 === (3))){
var inst_30111 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30113__$1,inst_30111);
} else {
if((state_val_30114 === (4))){
var inst_30094 = (state_30113[(7)]);
var inst_30094__$1 = (state_30113[(2)]);
var inst_30095 = (inst_30094__$1 == null);
var state_30113__$1 = (function (){var statearr_30116 = state_30113;
(statearr_30116[(7)] = inst_30094__$1);

return statearr_30116;
})();
if(cljs.core.truth_(inst_30095)){
var statearr_30117_30230 = state_30113__$1;
(statearr_30117_30230[(1)] = (5));

} else {
var statearr_30118_30231 = state_30113__$1;
(statearr_30118_30231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (5))){
var inst_30097 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30113__$1 = state_30113;
var statearr_30119_30232 = state_30113__$1;
(statearr_30119_30232[(2)] = inst_30097);

(statearr_30119_30232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (6))){
var inst_30099 = (state_30113[(8)]);
var inst_30094 = (state_30113[(7)]);
var inst_30099__$1 = cljs.core.async.chan.call(null,(1));
var inst_30100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30101 = [inst_30094,inst_30099__$1];
var inst_30102 = (new cljs.core.PersistentVector(null,2,(5),inst_30100,inst_30101,null));
var state_30113__$1 = (function (){var statearr_30120 = state_30113;
(statearr_30120[(8)] = inst_30099__$1);

return statearr_30120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30113__$1,(8),jobs,inst_30102);
} else {
if((state_val_30114 === (7))){
var inst_30109 = (state_30113[(2)]);
var state_30113__$1 = state_30113;
var statearr_30121_30233 = state_30113__$1;
(statearr_30121_30233[(2)] = inst_30109);

(statearr_30121_30233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30114 === (8))){
var inst_30099 = (state_30113[(8)]);
var inst_30104 = (state_30113[(2)]);
var state_30113__$1 = (function (){var statearr_30122 = state_30113;
(statearr_30122[(9)] = inst_30104);

return statearr_30122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30113__$1,(9),results,inst_30099);
} else {
if((state_val_30114 === (9))){
var inst_30106 = (state_30113[(2)]);
var state_30113__$1 = (function (){var statearr_30123 = state_30113;
(statearr_30123[(10)] = inst_30106);

return statearr_30123;
})();
var statearr_30124_30234 = state_30113__$1;
(statearr_30124_30234[(2)] = null);

(statearr_30124_30234[(1)] = (2));


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
});})(c__19694__auto___30228,jobs,results,process,async))
;
return ((function (switch__19629__auto__,c__19694__auto___30228,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0 = (function (){
var statearr_30128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__);

(statearr_30128[(1)] = (1));

return statearr_30128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1 = (function (state_30113){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30129){if((e30129 instanceof Object)){
var ex__19633__auto__ = e30129;
var statearr_30130_30235 = state_30113;
(statearr_30130_30235[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30236 = state_30113;
state_30113 = G__30236;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = function(state_30113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1.call(this,state_30113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___30228,jobs,results,process,async))
})();
var state__19696__auto__ = (function (){var statearr_30131 = f__19695__auto__.call(null);
(statearr_30131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___30228);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___30228,jobs,results,process,async))
);


var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__,jobs,results,process,async){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__,jobs,results,process,async){
return (function (state_30169){
var state_val_30170 = (state_30169[(1)]);
if((state_val_30170 === (7))){
var inst_30165 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30171_30237 = state_30169__$1;
(statearr_30171_30237[(2)] = inst_30165);

(statearr_30171_30237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (20))){
var state_30169__$1 = state_30169;
var statearr_30172_30238 = state_30169__$1;
(statearr_30172_30238[(2)] = null);

(statearr_30172_30238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (1))){
var state_30169__$1 = state_30169;
var statearr_30173_30239 = state_30169__$1;
(statearr_30173_30239[(2)] = null);

(statearr_30173_30239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (4))){
var inst_30134 = (state_30169[(7)]);
var inst_30134__$1 = (state_30169[(2)]);
var inst_30135 = (inst_30134__$1 == null);
var state_30169__$1 = (function (){var statearr_30174 = state_30169;
(statearr_30174[(7)] = inst_30134__$1);

return statearr_30174;
})();
if(cljs.core.truth_(inst_30135)){
var statearr_30175_30240 = state_30169__$1;
(statearr_30175_30240[(1)] = (5));

} else {
var statearr_30176_30241 = state_30169__$1;
(statearr_30176_30241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (15))){
var inst_30147 = (state_30169[(8)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(18),to,inst_30147);
} else {
if((state_val_30170 === (21))){
var inst_30160 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30177_30242 = state_30169__$1;
(statearr_30177_30242[(2)] = inst_30160);

(statearr_30177_30242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (13))){
var inst_30162 = (state_30169[(2)]);
var state_30169__$1 = (function (){var statearr_30178 = state_30169;
(statearr_30178[(9)] = inst_30162);

return statearr_30178;
})();
var statearr_30179_30243 = state_30169__$1;
(statearr_30179_30243[(2)] = null);

(statearr_30179_30243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (6))){
var inst_30134 = (state_30169[(7)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(11),inst_30134);
} else {
if((state_val_30170 === (17))){
var inst_30155 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
if(cljs.core.truth_(inst_30155)){
var statearr_30180_30244 = state_30169__$1;
(statearr_30180_30244[(1)] = (19));

} else {
var statearr_30181_30245 = state_30169__$1;
(statearr_30181_30245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (3))){
var inst_30167 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30169__$1,inst_30167);
} else {
if((state_val_30170 === (12))){
var inst_30144 = (state_30169[(10)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(14),inst_30144);
} else {
if((state_val_30170 === (2))){
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(4),results);
} else {
if((state_val_30170 === (19))){
var state_30169__$1 = state_30169;
var statearr_30182_30246 = state_30169__$1;
(statearr_30182_30246[(2)] = null);

(statearr_30182_30246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (11))){
var inst_30144 = (state_30169[(2)]);
var state_30169__$1 = (function (){var statearr_30183 = state_30169;
(statearr_30183[(10)] = inst_30144);

return statearr_30183;
})();
var statearr_30184_30247 = state_30169__$1;
(statearr_30184_30247[(2)] = null);

(statearr_30184_30247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (9))){
var state_30169__$1 = state_30169;
var statearr_30185_30248 = state_30169__$1;
(statearr_30185_30248[(2)] = null);

(statearr_30185_30248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (5))){
var state_30169__$1 = state_30169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30186_30249 = state_30169__$1;
(statearr_30186_30249[(1)] = (8));

} else {
var statearr_30187_30250 = state_30169__$1;
(statearr_30187_30250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (14))){
var inst_30149 = (state_30169[(11)]);
var inst_30147 = (state_30169[(8)]);
var inst_30147__$1 = (state_30169[(2)]);
var inst_30148 = (inst_30147__$1 == null);
var inst_30149__$1 = cljs.core.not.call(null,inst_30148);
var state_30169__$1 = (function (){var statearr_30188 = state_30169;
(statearr_30188[(11)] = inst_30149__$1);

(statearr_30188[(8)] = inst_30147__$1);

return statearr_30188;
})();
if(inst_30149__$1){
var statearr_30189_30251 = state_30169__$1;
(statearr_30189_30251[(1)] = (15));

} else {
var statearr_30190_30252 = state_30169__$1;
(statearr_30190_30252[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (16))){
var inst_30149 = (state_30169[(11)]);
var state_30169__$1 = state_30169;
var statearr_30191_30253 = state_30169__$1;
(statearr_30191_30253[(2)] = inst_30149);

(statearr_30191_30253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (10))){
var inst_30141 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30192_30254 = state_30169__$1;
(statearr_30192_30254[(2)] = inst_30141);

(statearr_30192_30254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (18))){
var inst_30152 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30193_30255 = state_30169__$1;
(statearr_30193_30255[(2)] = inst_30152);

(statearr_30193_30255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (8))){
var inst_30138 = cljs.core.async.close_BANG_.call(null,to);
var state_30169__$1 = state_30169;
var statearr_30194_30256 = state_30169__$1;
(statearr_30194_30256[(2)] = inst_30138);

(statearr_30194_30256[(1)] = (10));


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
});})(c__19694__auto__,jobs,results,process,async))
;
return ((function (switch__19629__auto__,c__19694__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0 = (function (){
var statearr_30198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__);

(statearr_30198[(1)] = (1));

return statearr_30198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1 = (function (state_30169){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30199){if((e30199 instanceof Object)){
var ex__19633__auto__ = e30199;
var statearr_30200_30257 = state_30169;
(statearr_30200_30257[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30258 = state_30169;
state_30169 = G__30258;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__ = function(state_30169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1.call(this,state_30169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__,jobs,results,process,async))
})();
var state__19696__auto__ = (function (){var statearr_30201 = f__19695__auto__.call(null);
(statearr_30201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_30201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__,jobs,results,process,async))
);

return c__19694__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args30259 = [];
var len__17550__auto___30262 = arguments.length;
var i__17551__auto___30263 = (0);
while(true){
if((i__17551__auto___30263 < len__17550__auto___30262)){
args30259.push((arguments[i__17551__auto___30263]));

var G__30264 = (i__17551__auto___30263 + (1));
i__17551__auto___30263 = G__30264;
continue;
} else {
}
break;
}

var G__30261 = args30259.length;
switch (G__30261) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30259.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args30266 = [];
var len__17550__auto___30269 = arguments.length;
var i__17551__auto___30270 = (0);
while(true){
if((i__17551__auto___30270 < len__17550__auto___30269)){
args30266.push((arguments[i__17551__auto___30270]));

var G__30271 = (i__17551__auto___30270 + (1));
i__17551__auto___30270 = G__30271;
continue;
} else {
}
break;
}

var G__30268 = args30266.length;
switch (G__30268) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30266.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args30273 = [];
var len__17550__auto___30326 = arguments.length;
var i__17551__auto___30327 = (0);
while(true){
if((i__17551__auto___30327 < len__17550__auto___30326)){
args30273.push((arguments[i__17551__auto___30327]));

var G__30328 = (i__17551__auto___30327 + (1));
i__17551__auto___30327 = G__30328;
continue;
} else {
}
break;
}

var G__30275 = args30273.length;
switch (G__30275) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30273.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19694__auto___30330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___30330,tc,fc){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___30330,tc,fc){
return (function (state_30301){
var state_val_30302 = (state_30301[(1)]);
if((state_val_30302 === (7))){
var inst_30297 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30303_30331 = state_30301__$1;
(statearr_30303_30331[(2)] = inst_30297);

(statearr_30303_30331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (1))){
var state_30301__$1 = state_30301;
var statearr_30304_30332 = state_30301__$1;
(statearr_30304_30332[(2)] = null);

(statearr_30304_30332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (4))){
var inst_30278 = (state_30301[(7)]);
var inst_30278__$1 = (state_30301[(2)]);
var inst_30279 = (inst_30278__$1 == null);
var state_30301__$1 = (function (){var statearr_30305 = state_30301;
(statearr_30305[(7)] = inst_30278__$1);

return statearr_30305;
})();
if(cljs.core.truth_(inst_30279)){
var statearr_30306_30333 = state_30301__$1;
(statearr_30306_30333[(1)] = (5));

} else {
var statearr_30307_30334 = state_30301__$1;
(statearr_30307_30334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (13))){
var state_30301__$1 = state_30301;
var statearr_30308_30335 = state_30301__$1;
(statearr_30308_30335[(2)] = null);

(statearr_30308_30335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (6))){
var inst_30278 = (state_30301[(7)]);
var inst_30284 = p.call(null,inst_30278);
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30284)){
var statearr_30309_30336 = state_30301__$1;
(statearr_30309_30336[(1)] = (9));

} else {
var statearr_30310_30337 = state_30301__$1;
(statearr_30310_30337[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (3))){
var inst_30299 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30301__$1,inst_30299);
} else {
if((state_val_30302 === (12))){
var state_30301__$1 = state_30301;
var statearr_30311_30338 = state_30301__$1;
(statearr_30311_30338[(2)] = null);

(statearr_30311_30338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (2))){
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30301__$1,(4),ch);
} else {
if((state_val_30302 === (11))){
var inst_30278 = (state_30301[(7)]);
var inst_30288 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30301__$1,(8),inst_30288,inst_30278);
} else {
if((state_val_30302 === (9))){
var state_30301__$1 = state_30301;
var statearr_30312_30339 = state_30301__$1;
(statearr_30312_30339[(2)] = tc);

(statearr_30312_30339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (5))){
var inst_30281 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30282 = cljs.core.async.close_BANG_.call(null,fc);
var state_30301__$1 = (function (){var statearr_30313 = state_30301;
(statearr_30313[(8)] = inst_30281);

return statearr_30313;
})();
var statearr_30314_30340 = state_30301__$1;
(statearr_30314_30340[(2)] = inst_30282);

(statearr_30314_30340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (14))){
var inst_30295 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
var statearr_30315_30341 = state_30301__$1;
(statearr_30315_30341[(2)] = inst_30295);

(statearr_30315_30341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (10))){
var state_30301__$1 = state_30301;
var statearr_30316_30342 = state_30301__$1;
(statearr_30316_30342[(2)] = fc);

(statearr_30316_30342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30302 === (8))){
var inst_30290 = (state_30301[(2)]);
var state_30301__$1 = state_30301;
if(cljs.core.truth_(inst_30290)){
var statearr_30317_30343 = state_30301__$1;
(statearr_30317_30343[(1)] = (12));

} else {
var statearr_30318_30344 = state_30301__$1;
(statearr_30318_30344[(1)] = (13));

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
});})(c__19694__auto___30330,tc,fc))
;
return ((function (switch__19629__auto__,c__19694__auto___30330,tc,fc){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_30322 = [null,null,null,null,null,null,null,null,null];
(statearr_30322[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_30322[(1)] = (1));

return statearr_30322;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_30301){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30323){if((e30323 instanceof Object)){
var ex__19633__auto__ = e30323;
var statearr_30324_30345 = state_30301;
(statearr_30324_30345[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30301;
state_30301 = G__30346;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_30301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_30301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___30330,tc,fc))
})();
var state__19696__auto__ = (function (){var statearr_30325 = f__19695__auto__.call(null);
(statearr_30325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___30330);

return statearr_30325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___30330,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_30393){
var state_val_30394 = (state_30393[(1)]);
if((state_val_30394 === (1))){
var inst_30379 = init;
var state_30393__$1 = (function (){var statearr_30395 = state_30393;
(statearr_30395[(7)] = inst_30379);

return statearr_30395;
})();
var statearr_30396_30411 = state_30393__$1;
(statearr_30396_30411[(2)] = null);

(statearr_30396_30411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (2))){
var state_30393__$1 = state_30393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30393__$1,(4),ch);
} else {
if((state_val_30394 === (3))){
var inst_30391 = (state_30393[(2)]);
var state_30393__$1 = state_30393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30393__$1,inst_30391);
} else {
if((state_val_30394 === (4))){
var inst_30382 = (state_30393[(8)]);
var inst_30382__$1 = (state_30393[(2)]);
var inst_30383 = (inst_30382__$1 == null);
var state_30393__$1 = (function (){var statearr_30397 = state_30393;
(statearr_30397[(8)] = inst_30382__$1);

return statearr_30397;
})();
if(cljs.core.truth_(inst_30383)){
var statearr_30398_30412 = state_30393__$1;
(statearr_30398_30412[(1)] = (5));

} else {
var statearr_30399_30413 = state_30393__$1;
(statearr_30399_30413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (5))){
var inst_30379 = (state_30393[(7)]);
var state_30393__$1 = state_30393;
var statearr_30400_30414 = state_30393__$1;
(statearr_30400_30414[(2)] = inst_30379);

(statearr_30400_30414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (6))){
var inst_30382 = (state_30393[(8)]);
var inst_30379 = (state_30393[(7)]);
var inst_30386 = f.call(null,inst_30379,inst_30382);
var inst_30379__$1 = inst_30386;
var state_30393__$1 = (function (){var statearr_30401 = state_30393;
(statearr_30401[(7)] = inst_30379__$1);

return statearr_30401;
})();
var statearr_30402_30415 = state_30393__$1;
(statearr_30402_30415[(2)] = null);

(statearr_30402_30415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (7))){
var inst_30389 = (state_30393[(2)]);
var state_30393__$1 = state_30393;
var statearr_30403_30416 = state_30393__$1;
(statearr_30403_30416[(2)] = inst_30389);

(statearr_30403_30416[(1)] = (3));


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
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19630__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$reduce_$_state_machine__19630__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$reduce_$_state_machine__19630__auto____1 = (function (state_30393){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__19633__auto__ = e30408;
var statearr_30409_30417 = state_30393;
(statearr_30409_30417[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30418 = state_30393;
state_30393 = G__30418;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19630__auto__ = function(state_30393){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19630__auto____1.call(this,state_30393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19630__auto____0;
cljs$core$async$reduce_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19630__auto____1;
return cljs$core$async$reduce_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_30410 = f__19695__auto__.call(null);
(statearr_30410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args30419 = [];
var len__17550__auto___30471 = arguments.length;
var i__17551__auto___30472 = (0);
while(true){
if((i__17551__auto___30472 < len__17550__auto___30471)){
args30419.push((arguments[i__17551__auto___30472]));

var G__30473 = (i__17551__auto___30472 + (1));
i__17551__auto___30472 = G__30473;
continue;
} else {
}
break;
}

var G__30421 = args30419.length;
switch (G__30421) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30419.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_30446){
var state_val_30447 = (state_30446[(1)]);
if((state_val_30447 === (7))){
var inst_30428 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30448_30475 = state_30446__$1;
(statearr_30448_30475[(2)] = inst_30428);

(statearr_30448_30475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (1))){
var inst_30422 = cljs.core.seq.call(null,coll);
var inst_30423 = inst_30422;
var state_30446__$1 = (function (){var statearr_30449 = state_30446;
(statearr_30449[(7)] = inst_30423);

return statearr_30449;
})();
var statearr_30450_30476 = state_30446__$1;
(statearr_30450_30476[(2)] = null);

(statearr_30450_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (4))){
var inst_30423 = (state_30446[(7)]);
var inst_30426 = cljs.core.first.call(null,inst_30423);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30446__$1,(7),ch,inst_30426);
} else {
if((state_val_30447 === (13))){
var inst_30440 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30451_30477 = state_30446__$1;
(statearr_30451_30477[(2)] = inst_30440);

(statearr_30451_30477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (6))){
var inst_30431 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
if(cljs.core.truth_(inst_30431)){
var statearr_30452_30478 = state_30446__$1;
(statearr_30452_30478[(1)] = (8));

} else {
var statearr_30453_30479 = state_30446__$1;
(statearr_30453_30479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (3))){
var inst_30444 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30446__$1,inst_30444);
} else {
if((state_val_30447 === (12))){
var state_30446__$1 = state_30446;
var statearr_30454_30480 = state_30446__$1;
(statearr_30454_30480[(2)] = null);

(statearr_30454_30480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (2))){
var inst_30423 = (state_30446[(7)]);
var state_30446__$1 = state_30446;
if(cljs.core.truth_(inst_30423)){
var statearr_30455_30481 = state_30446__$1;
(statearr_30455_30481[(1)] = (4));

} else {
var statearr_30456_30482 = state_30446__$1;
(statearr_30456_30482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (11))){
var inst_30437 = cljs.core.async.close_BANG_.call(null,ch);
var state_30446__$1 = state_30446;
var statearr_30457_30483 = state_30446__$1;
(statearr_30457_30483[(2)] = inst_30437);

(statearr_30457_30483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (9))){
var state_30446__$1 = state_30446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30458_30484 = state_30446__$1;
(statearr_30458_30484[(1)] = (11));

} else {
var statearr_30459_30485 = state_30446__$1;
(statearr_30459_30485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (5))){
var inst_30423 = (state_30446[(7)]);
var state_30446__$1 = state_30446;
var statearr_30460_30486 = state_30446__$1;
(statearr_30460_30486[(2)] = inst_30423);

(statearr_30460_30486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (10))){
var inst_30442 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30461_30487 = state_30446__$1;
(statearr_30461_30487[(2)] = inst_30442);

(statearr_30461_30487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (8))){
var inst_30423 = (state_30446[(7)]);
var inst_30433 = cljs.core.next.call(null,inst_30423);
var inst_30423__$1 = inst_30433;
var state_30446__$1 = (function (){var statearr_30462 = state_30446;
(statearr_30462[(7)] = inst_30423__$1);

return statearr_30462;
})();
var statearr_30463_30488 = state_30446__$1;
(statearr_30463_30488[(2)] = null);

(statearr_30463_30488[(1)] = (2));


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
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_30467 = [null,null,null,null,null,null,null,null];
(statearr_30467[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_30467[(1)] = (1));

return statearr_30467;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_30446){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30468){if((e30468 instanceof Object)){
var ex__19633__auto__ = e30468;
var statearr_30469_30489 = state_30446;
(statearr_30469_30489[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30490 = state_30446;
state_30446 = G__30490;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_30446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_30446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_30470 = f__19695__auto__.call(null);
(statearr_30470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_30470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17147__auto__ = (((_ == null))?null:_);
var m__17148__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,_);
} else {
var m__17148__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17148__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m,ch);
} else {
var m__17148__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m);
} else {
var m__17148__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30716 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30716 = (function (mult,ch,cs,meta30717){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30717 = meta30717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30718,meta30717__$1){
var self__ = this;
var _30718__$1 = this;
return (new cljs.core.async.t30716(self__.mult,self__.ch,self__.cs,meta30717__$1));
});})(cs))
;

cljs.core.async.t30716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30718){
var self__ = this;
var _30718__$1 = this;
return self__.meta30717;
});})(cs))
;

cljs.core.async.t30716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30716.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30716.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30717","meta30717",-1154083078,null)], null);
});})(cs))
;

cljs.core.async.t30716.cljs$lang$type = true;

cljs.core.async.t30716.cljs$lang$ctorStr = "cljs.core.async/t30716";

cljs.core.async.t30716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t30716");
});})(cs))
;

cljs.core.async.__GT_t30716 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30716(mult__$1,ch__$1,cs__$1,meta30717){
return (new cljs.core.async.t30716(mult__$1,ch__$1,cs__$1,meta30717));
});})(cs))
;

}

return (new cljs.core.async.t30716(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19694__auto___30937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___30937,cs,m,dchan,dctr,done){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___30937,cs,m,dchan,dctr,done){
return (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (7))){
var inst_30845 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30851_30938 = state_30849__$1;
(statearr_30851_30938[(2)] = inst_30845);

(statearr_30851_30938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (20))){
var inst_30750 = (state_30849[(7)]);
var inst_30760 = cljs.core.first.call(null,inst_30750);
var inst_30761 = cljs.core.nth.call(null,inst_30760,(0),null);
var inst_30762 = cljs.core.nth.call(null,inst_30760,(1),null);
var state_30849__$1 = (function (){var statearr_30852 = state_30849;
(statearr_30852[(8)] = inst_30761);

return statearr_30852;
})();
if(cljs.core.truth_(inst_30762)){
var statearr_30853_30939 = state_30849__$1;
(statearr_30853_30939[(1)] = (22));

} else {
var statearr_30854_30940 = state_30849__$1;
(statearr_30854_30940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (27))){
var inst_30797 = (state_30849[(9)]);
var inst_30721 = (state_30849[(10)]);
var inst_30790 = (state_30849[(11)]);
var inst_30792 = (state_30849[(12)]);
var inst_30797__$1 = cljs.core._nth.call(null,inst_30790,inst_30792);
var inst_30798 = cljs.core.async.put_BANG_.call(null,inst_30797__$1,inst_30721,done);
var state_30849__$1 = (function (){var statearr_30855 = state_30849;
(statearr_30855[(9)] = inst_30797__$1);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30798)){
var statearr_30856_30941 = state_30849__$1;
(statearr_30856_30941[(1)] = (30));

} else {
var statearr_30857_30942 = state_30849__$1;
(statearr_30857_30942[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (1))){
var state_30849__$1 = state_30849;
var statearr_30858_30943 = state_30849__$1;
(statearr_30858_30943[(2)] = null);

(statearr_30858_30943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (24))){
var inst_30750 = (state_30849[(7)]);
var inst_30767 = (state_30849[(2)]);
var inst_30768 = cljs.core.next.call(null,inst_30750);
var inst_30730 = inst_30768;
var inst_30731 = null;
var inst_30732 = (0);
var inst_30733 = (0);
var state_30849__$1 = (function (){var statearr_30859 = state_30849;
(statearr_30859[(13)] = inst_30730);

(statearr_30859[(14)] = inst_30733);

(statearr_30859[(15)] = inst_30732);

(statearr_30859[(16)] = inst_30731);

(statearr_30859[(17)] = inst_30767);

return statearr_30859;
})();
var statearr_30860_30944 = state_30849__$1;
(statearr_30860_30944[(2)] = null);

(statearr_30860_30944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (39))){
var state_30849__$1 = state_30849;
var statearr_30864_30945 = state_30849__$1;
(statearr_30864_30945[(2)] = null);

(statearr_30864_30945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (4))){
var inst_30721 = (state_30849[(10)]);
var inst_30721__$1 = (state_30849[(2)]);
var inst_30722 = (inst_30721__$1 == null);
var state_30849__$1 = (function (){var statearr_30865 = state_30849;
(statearr_30865[(10)] = inst_30721__$1);

return statearr_30865;
})();
if(cljs.core.truth_(inst_30722)){
var statearr_30866_30946 = state_30849__$1;
(statearr_30866_30946[(1)] = (5));

} else {
var statearr_30867_30947 = state_30849__$1;
(statearr_30867_30947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (15))){
var inst_30730 = (state_30849[(13)]);
var inst_30733 = (state_30849[(14)]);
var inst_30732 = (state_30849[(15)]);
var inst_30731 = (state_30849[(16)]);
var inst_30746 = (state_30849[(2)]);
var inst_30747 = (inst_30733 + (1));
var tmp30861 = inst_30730;
var tmp30862 = inst_30732;
var tmp30863 = inst_30731;
var inst_30730__$1 = tmp30861;
var inst_30731__$1 = tmp30863;
var inst_30732__$1 = tmp30862;
var inst_30733__$1 = inst_30747;
var state_30849__$1 = (function (){var statearr_30868 = state_30849;
(statearr_30868[(18)] = inst_30746);

(statearr_30868[(13)] = inst_30730__$1);

(statearr_30868[(14)] = inst_30733__$1);

(statearr_30868[(15)] = inst_30732__$1);

(statearr_30868[(16)] = inst_30731__$1);

return statearr_30868;
})();
var statearr_30869_30948 = state_30849__$1;
(statearr_30869_30948[(2)] = null);

(statearr_30869_30948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (21))){
var inst_30771 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30873_30949 = state_30849__$1;
(statearr_30873_30949[(2)] = inst_30771);

(statearr_30873_30949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (31))){
var inst_30797 = (state_30849[(9)]);
var inst_30801 = done.call(null,null);
var inst_30802 = cljs.core.async.untap_STAR_.call(null,m,inst_30797);
var state_30849__$1 = (function (){var statearr_30874 = state_30849;
(statearr_30874[(19)] = inst_30801);

return statearr_30874;
})();
var statearr_30875_30950 = state_30849__$1;
(statearr_30875_30950[(2)] = inst_30802);

(statearr_30875_30950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (32))){
var inst_30789 = (state_30849[(20)]);
var inst_30790 = (state_30849[(11)]);
var inst_30791 = (state_30849[(21)]);
var inst_30792 = (state_30849[(12)]);
var inst_30804 = (state_30849[(2)]);
var inst_30805 = (inst_30792 + (1));
var tmp30870 = inst_30789;
var tmp30871 = inst_30790;
var tmp30872 = inst_30791;
var inst_30789__$1 = tmp30870;
var inst_30790__$1 = tmp30871;
var inst_30791__$1 = tmp30872;
var inst_30792__$1 = inst_30805;
var state_30849__$1 = (function (){var statearr_30876 = state_30849;
(statearr_30876[(20)] = inst_30789__$1);

(statearr_30876[(22)] = inst_30804);

(statearr_30876[(11)] = inst_30790__$1);

(statearr_30876[(21)] = inst_30791__$1);

(statearr_30876[(12)] = inst_30792__$1);

return statearr_30876;
})();
var statearr_30877_30951 = state_30849__$1;
(statearr_30877_30951[(2)] = null);

(statearr_30877_30951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (40))){
var inst_30817 = (state_30849[(23)]);
var inst_30821 = done.call(null,null);
var inst_30822 = cljs.core.async.untap_STAR_.call(null,m,inst_30817);
var state_30849__$1 = (function (){var statearr_30878 = state_30849;
(statearr_30878[(24)] = inst_30821);

return statearr_30878;
})();
var statearr_30879_30952 = state_30849__$1;
(statearr_30879_30952[(2)] = inst_30822);

(statearr_30879_30952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (33))){
var inst_30808 = (state_30849[(25)]);
var inst_30810 = cljs.core.chunked_seq_QMARK_.call(null,inst_30808);
var state_30849__$1 = state_30849;
if(inst_30810){
var statearr_30880_30953 = state_30849__$1;
(statearr_30880_30953[(1)] = (36));

} else {
var statearr_30881_30954 = state_30849__$1;
(statearr_30881_30954[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (13))){
var inst_30740 = (state_30849[(26)]);
var inst_30743 = cljs.core.async.close_BANG_.call(null,inst_30740);
var state_30849__$1 = state_30849;
var statearr_30882_30955 = state_30849__$1;
(statearr_30882_30955[(2)] = inst_30743);

(statearr_30882_30955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (22))){
var inst_30761 = (state_30849[(8)]);
var inst_30764 = cljs.core.async.close_BANG_.call(null,inst_30761);
var state_30849__$1 = state_30849;
var statearr_30883_30956 = state_30849__$1;
(statearr_30883_30956[(2)] = inst_30764);

(statearr_30883_30956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (36))){
var inst_30808 = (state_30849[(25)]);
var inst_30812 = cljs.core.chunk_first.call(null,inst_30808);
var inst_30813 = cljs.core.chunk_rest.call(null,inst_30808);
var inst_30814 = cljs.core.count.call(null,inst_30812);
var inst_30789 = inst_30813;
var inst_30790 = inst_30812;
var inst_30791 = inst_30814;
var inst_30792 = (0);
var state_30849__$1 = (function (){var statearr_30884 = state_30849;
(statearr_30884[(20)] = inst_30789);

(statearr_30884[(11)] = inst_30790);

(statearr_30884[(21)] = inst_30791);

(statearr_30884[(12)] = inst_30792);

return statearr_30884;
})();
var statearr_30885_30957 = state_30849__$1;
(statearr_30885_30957[(2)] = null);

(statearr_30885_30957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (41))){
var inst_30808 = (state_30849[(25)]);
var inst_30824 = (state_30849[(2)]);
var inst_30825 = cljs.core.next.call(null,inst_30808);
var inst_30789 = inst_30825;
var inst_30790 = null;
var inst_30791 = (0);
var inst_30792 = (0);
var state_30849__$1 = (function (){var statearr_30886 = state_30849;
(statearr_30886[(20)] = inst_30789);

(statearr_30886[(27)] = inst_30824);

(statearr_30886[(11)] = inst_30790);

(statearr_30886[(21)] = inst_30791);

(statearr_30886[(12)] = inst_30792);

return statearr_30886;
})();
var statearr_30887_30958 = state_30849__$1;
(statearr_30887_30958[(2)] = null);

(statearr_30887_30958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (43))){
var state_30849__$1 = state_30849;
var statearr_30888_30959 = state_30849__$1;
(statearr_30888_30959[(2)] = null);

(statearr_30888_30959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (29))){
var inst_30833 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30889_30960 = state_30849__$1;
(statearr_30889_30960[(2)] = inst_30833);

(statearr_30889_30960[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (44))){
var inst_30842 = (state_30849[(2)]);
var state_30849__$1 = (function (){var statearr_30890 = state_30849;
(statearr_30890[(28)] = inst_30842);

return statearr_30890;
})();
var statearr_30891_30961 = state_30849__$1;
(statearr_30891_30961[(2)] = null);

(statearr_30891_30961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (6))){
var inst_30781 = (state_30849[(29)]);
var inst_30780 = cljs.core.deref.call(null,cs);
var inst_30781__$1 = cljs.core.keys.call(null,inst_30780);
var inst_30782 = cljs.core.count.call(null,inst_30781__$1);
var inst_30783 = cljs.core.reset_BANG_.call(null,dctr,inst_30782);
var inst_30788 = cljs.core.seq.call(null,inst_30781__$1);
var inst_30789 = inst_30788;
var inst_30790 = null;
var inst_30791 = (0);
var inst_30792 = (0);
var state_30849__$1 = (function (){var statearr_30892 = state_30849;
(statearr_30892[(20)] = inst_30789);

(statearr_30892[(29)] = inst_30781__$1);

(statearr_30892[(30)] = inst_30783);

(statearr_30892[(11)] = inst_30790);

(statearr_30892[(21)] = inst_30791);

(statearr_30892[(12)] = inst_30792);

return statearr_30892;
})();
var statearr_30893_30962 = state_30849__$1;
(statearr_30893_30962[(2)] = null);

(statearr_30893_30962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (28))){
var inst_30808 = (state_30849[(25)]);
var inst_30789 = (state_30849[(20)]);
var inst_30808__$1 = cljs.core.seq.call(null,inst_30789);
var state_30849__$1 = (function (){var statearr_30894 = state_30849;
(statearr_30894[(25)] = inst_30808__$1);

return statearr_30894;
})();
if(inst_30808__$1){
var statearr_30895_30963 = state_30849__$1;
(statearr_30895_30963[(1)] = (33));

} else {
var statearr_30896_30964 = state_30849__$1;
(statearr_30896_30964[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (25))){
var inst_30791 = (state_30849[(21)]);
var inst_30792 = (state_30849[(12)]);
var inst_30794 = (inst_30792 < inst_30791);
var inst_30795 = inst_30794;
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30795)){
var statearr_30897_30965 = state_30849__$1;
(statearr_30897_30965[(1)] = (27));

} else {
var statearr_30898_30966 = state_30849__$1;
(statearr_30898_30966[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (34))){
var state_30849__$1 = state_30849;
var statearr_30899_30967 = state_30849__$1;
(statearr_30899_30967[(2)] = null);

(statearr_30899_30967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (17))){
var state_30849__$1 = state_30849;
var statearr_30900_30968 = state_30849__$1;
(statearr_30900_30968[(2)] = null);

(statearr_30900_30968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (3))){
var inst_30847 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30849__$1,inst_30847);
} else {
if((state_val_30850 === (12))){
var inst_30776 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30901_30969 = state_30849__$1;
(statearr_30901_30969[(2)] = inst_30776);

(statearr_30901_30969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (2))){
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30849__$1,(4),ch);
} else {
if((state_val_30850 === (23))){
var state_30849__$1 = state_30849;
var statearr_30902_30970 = state_30849__$1;
(statearr_30902_30970[(2)] = null);

(statearr_30902_30970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (35))){
var inst_30831 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30903_30971 = state_30849__$1;
(statearr_30903_30971[(2)] = inst_30831);

(statearr_30903_30971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (19))){
var inst_30750 = (state_30849[(7)]);
var inst_30754 = cljs.core.chunk_first.call(null,inst_30750);
var inst_30755 = cljs.core.chunk_rest.call(null,inst_30750);
var inst_30756 = cljs.core.count.call(null,inst_30754);
var inst_30730 = inst_30755;
var inst_30731 = inst_30754;
var inst_30732 = inst_30756;
var inst_30733 = (0);
var state_30849__$1 = (function (){var statearr_30904 = state_30849;
(statearr_30904[(13)] = inst_30730);

(statearr_30904[(14)] = inst_30733);

(statearr_30904[(15)] = inst_30732);

(statearr_30904[(16)] = inst_30731);

return statearr_30904;
})();
var statearr_30905_30972 = state_30849__$1;
(statearr_30905_30972[(2)] = null);

(statearr_30905_30972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (11))){
var inst_30730 = (state_30849[(13)]);
var inst_30750 = (state_30849[(7)]);
var inst_30750__$1 = cljs.core.seq.call(null,inst_30730);
var state_30849__$1 = (function (){var statearr_30906 = state_30849;
(statearr_30906[(7)] = inst_30750__$1);

return statearr_30906;
})();
if(inst_30750__$1){
var statearr_30907_30973 = state_30849__$1;
(statearr_30907_30973[(1)] = (16));

} else {
var statearr_30908_30974 = state_30849__$1;
(statearr_30908_30974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (9))){
var inst_30778 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30909_30975 = state_30849__$1;
(statearr_30909_30975[(2)] = inst_30778);

(statearr_30909_30975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (5))){
var inst_30728 = cljs.core.deref.call(null,cs);
var inst_30729 = cljs.core.seq.call(null,inst_30728);
var inst_30730 = inst_30729;
var inst_30731 = null;
var inst_30732 = (0);
var inst_30733 = (0);
var state_30849__$1 = (function (){var statearr_30910 = state_30849;
(statearr_30910[(13)] = inst_30730);

(statearr_30910[(14)] = inst_30733);

(statearr_30910[(15)] = inst_30732);

(statearr_30910[(16)] = inst_30731);

return statearr_30910;
})();
var statearr_30911_30976 = state_30849__$1;
(statearr_30911_30976[(2)] = null);

(statearr_30911_30976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (14))){
var state_30849__$1 = state_30849;
var statearr_30912_30977 = state_30849__$1;
(statearr_30912_30977[(2)] = null);

(statearr_30912_30977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (45))){
var inst_30839 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30913_30978 = state_30849__$1;
(statearr_30913_30978[(2)] = inst_30839);

(statearr_30913_30978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (26))){
var inst_30781 = (state_30849[(29)]);
var inst_30835 = (state_30849[(2)]);
var inst_30836 = cljs.core.seq.call(null,inst_30781);
var state_30849__$1 = (function (){var statearr_30914 = state_30849;
(statearr_30914[(31)] = inst_30835);

return statearr_30914;
})();
if(inst_30836){
var statearr_30915_30979 = state_30849__$1;
(statearr_30915_30979[(1)] = (42));

} else {
var statearr_30916_30980 = state_30849__$1;
(statearr_30916_30980[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (16))){
var inst_30750 = (state_30849[(7)]);
var inst_30752 = cljs.core.chunked_seq_QMARK_.call(null,inst_30750);
var state_30849__$1 = state_30849;
if(inst_30752){
var statearr_30917_30981 = state_30849__$1;
(statearr_30917_30981[(1)] = (19));

} else {
var statearr_30918_30982 = state_30849__$1;
(statearr_30918_30982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (38))){
var inst_30828 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30919_30983 = state_30849__$1;
(statearr_30919_30983[(2)] = inst_30828);

(statearr_30919_30983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (30))){
var state_30849__$1 = state_30849;
var statearr_30920_30984 = state_30849__$1;
(statearr_30920_30984[(2)] = null);

(statearr_30920_30984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (10))){
var inst_30733 = (state_30849[(14)]);
var inst_30731 = (state_30849[(16)]);
var inst_30739 = cljs.core._nth.call(null,inst_30731,inst_30733);
var inst_30740 = cljs.core.nth.call(null,inst_30739,(0),null);
var inst_30741 = cljs.core.nth.call(null,inst_30739,(1),null);
var state_30849__$1 = (function (){var statearr_30921 = state_30849;
(statearr_30921[(26)] = inst_30740);

return statearr_30921;
})();
if(cljs.core.truth_(inst_30741)){
var statearr_30922_30985 = state_30849__$1;
(statearr_30922_30985[(1)] = (13));

} else {
var statearr_30923_30986 = state_30849__$1;
(statearr_30923_30986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (18))){
var inst_30774 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30924_30987 = state_30849__$1;
(statearr_30924_30987[(2)] = inst_30774);

(statearr_30924_30987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (42))){
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30849__$1,(45),dchan);
} else {
if((state_val_30850 === (37))){
var inst_30808 = (state_30849[(25)]);
var inst_30721 = (state_30849[(10)]);
var inst_30817 = (state_30849[(23)]);
var inst_30817__$1 = cljs.core.first.call(null,inst_30808);
var inst_30818 = cljs.core.async.put_BANG_.call(null,inst_30817__$1,inst_30721,done);
var state_30849__$1 = (function (){var statearr_30925 = state_30849;
(statearr_30925[(23)] = inst_30817__$1);

return statearr_30925;
})();
if(cljs.core.truth_(inst_30818)){
var statearr_30926_30988 = state_30849__$1;
(statearr_30926_30988[(1)] = (39));

} else {
var statearr_30927_30989 = state_30849__$1;
(statearr_30927_30989[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (8))){
var inst_30733 = (state_30849[(14)]);
var inst_30732 = (state_30849[(15)]);
var inst_30735 = (inst_30733 < inst_30732);
var inst_30736 = inst_30735;
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30736)){
var statearr_30928_30990 = state_30849__$1;
(statearr_30928_30990[(1)] = (10));

} else {
var statearr_30929_30991 = state_30849__$1;
(statearr_30929_30991[(1)] = (11));

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
}
}
});})(c__19694__auto___30937,cs,m,dchan,dctr,done))
;
return ((function (switch__19629__auto__,c__19694__auto___30937,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19630__auto__ = null;
var cljs$core$async$mult_$_state_machine__19630__auto____0 = (function (){
var statearr_30933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30933[(0)] = cljs$core$async$mult_$_state_machine__19630__auto__);

(statearr_30933[(1)] = (1));

return statearr_30933;
});
var cljs$core$async$mult_$_state_machine__19630__auto____1 = (function (state_30849){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_30849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e30934){if((e30934 instanceof Object)){
var ex__19633__auto__ = e30934;
var statearr_30935_30992 = state_30849;
(statearr_30935_30992[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30993 = state_30849;
state_30849 = G__30993;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19630__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19630__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19630__auto____0;
cljs$core$async$mult_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19630__auto____1;
return cljs$core$async$mult_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___30937,cs,m,dchan,dctr,done))
})();
var state__19696__auto__ = (function (){var statearr_30936 = f__19695__auto__.call(null);
(statearr_30936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___30937);

return statearr_30936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___30937,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args30994 = [];
var len__17550__auto___30997 = arguments.length;
var i__17551__auto___30998 = (0);
while(true){
if((i__17551__auto___30998 < len__17550__auto___30997)){
args30994.push((arguments[i__17551__auto___30998]));

var G__30999 = (i__17551__auto___30998 + (1));
i__17551__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var G__30996 = args30994.length;
switch (G__30996) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30994.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m,ch);
} else {
var m__17148__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m,ch);
} else {
var m__17148__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m);
} else {
var m__17148__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m,state_map);
} else {
var m__17148__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17147__auto__ = (((m == null))?null:m);
var m__17148__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,m,mode);
} else {
var m__17148__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17557__auto__ = [];
var len__17550__auto___31013 = arguments.length;
var i__17551__auto___31014 = (0);
while(true){
if((i__17551__auto___31014 < len__17550__auto___31013)){
args__17557__auto__.push((arguments[i__17551__auto___31014]));

var G__31015 = (i__17551__auto___31014 + (1));
i__17551__auto___31014 = G__31015;
continue;
} else {
}
break;
}

var argseq__17558__auto__ = ((((3) < args__17557__auto__.length))?(new cljs.core.IndexedSeq(args__17557__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17558__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31007){
var map__31008 = p__31007;
var map__31008__$1 = ((((!((map__31008 == null)))?((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31008):map__31008);
var opts = map__31008__$1;
var statearr_31010_31016 = state;
(statearr_31010_31016[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31008,map__31008__$1,opts){
return (function (val){
var statearr_31011_31017 = state;
(statearr_31011_31017[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31008,map__31008__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31012_31018 = state;
(statearr_31012_31018[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31003){
var G__31004 = cljs.core.first.call(null,seq31003);
var seq31003__$1 = cljs.core.next.call(null,seq31003);
var G__31005 = cljs.core.first.call(null,seq31003__$1);
var seq31003__$2 = cljs.core.next.call(null,seq31003__$1);
var G__31006 = cljs.core.first.call(null,seq31003__$2);
var seq31003__$3 = cljs.core.next.call(null,seq31003__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31004,G__31005,G__31006,seq31003__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31182 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31182 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31183){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31183 = meta31183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31184,meta31183__$1){
var self__ = this;
var _31184__$1 = this;
return (new cljs.core.async.t31182(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31183__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31184){
var self__ = this;
var _31184__$1 = this;
return self__.meta31183;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31182.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31183","meta31183",1216510202,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31182.cljs$lang$type = true;

cljs.core.async.t31182.cljs$lang$ctorStr = "cljs.core.async/t31182";

cljs.core.async.t31182.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t31182");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31182 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31182(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31183){
return (new cljs.core.async.t31182(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31183));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31182(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19694__auto___31345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___31345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___31345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31282){
var state_val_31283 = (state_31282[(1)]);
if((state_val_31283 === (7))){
var inst_31200 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31284_31346 = state_31282__$1;
(statearr_31284_31346[(2)] = inst_31200);

(statearr_31284_31346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (20))){
var inst_31212 = (state_31282[(7)]);
var state_31282__$1 = state_31282;
var statearr_31285_31347 = state_31282__$1;
(statearr_31285_31347[(2)] = inst_31212);

(statearr_31285_31347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (27))){
var state_31282__$1 = state_31282;
var statearr_31286_31348 = state_31282__$1;
(statearr_31286_31348[(2)] = null);

(statearr_31286_31348[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (1))){
var inst_31188 = (state_31282[(8)]);
var inst_31188__$1 = calc_state.call(null);
var inst_31190 = (inst_31188__$1 == null);
var inst_31191 = cljs.core.not.call(null,inst_31190);
var state_31282__$1 = (function (){var statearr_31287 = state_31282;
(statearr_31287[(8)] = inst_31188__$1);

return statearr_31287;
})();
if(inst_31191){
var statearr_31288_31349 = state_31282__$1;
(statearr_31288_31349[(1)] = (2));

} else {
var statearr_31289_31350 = state_31282__$1;
(statearr_31289_31350[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (24))){
var inst_31256 = (state_31282[(9)]);
var inst_31235 = (state_31282[(10)]);
var inst_31242 = (state_31282[(11)]);
var inst_31256__$1 = inst_31235.call(null,inst_31242);
var state_31282__$1 = (function (){var statearr_31290 = state_31282;
(statearr_31290[(9)] = inst_31256__$1);

return statearr_31290;
})();
if(cljs.core.truth_(inst_31256__$1)){
var statearr_31291_31351 = state_31282__$1;
(statearr_31291_31351[(1)] = (29));

} else {
var statearr_31292_31352 = state_31282__$1;
(statearr_31292_31352[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (4))){
var inst_31203 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31203)){
var statearr_31293_31353 = state_31282__$1;
(statearr_31293_31353[(1)] = (8));

} else {
var statearr_31294_31354 = state_31282__$1;
(statearr_31294_31354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (15))){
var inst_31229 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31229)){
var statearr_31295_31355 = state_31282__$1;
(statearr_31295_31355[(1)] = (19));

} else {
var statearr_31296_31356 = state_31282__$1;
(statearr_31296_31356[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (21))){
var inst_31234 = (state_31282[(12)]);
var inst_31234__$1 = (state_31282[(2)]);
var inst_31235 = cljs.core.get.call(null,inst_31234__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31236 = cljs.core.get.call(null,inst_31234__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31237 = cljs.core.get.call(null,inst_31234__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31282__$1 = (function (){var statearr_31297 = state_31282;
(statearr_31297[(13)] = inst_31236);

(statearr_31297[(12)] = inst_31234__$1);

(statearr_31297[(10)] = inst_31235);

return statearr_31297;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31282__$1,(22),inst_31237);
} else {
if((state_val_31283 === (31))){
var inst_31264 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31264)){
var statearr_31298_31357 = state_31282__$1;
(statearr_31298_31357[(1)] = (32));

} else {
var statearr_31299_31358 = state_31282__$1;
(statearr_31299_31358[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (32))){
var inst_31241 = (state_31282[(14)]);
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31282__$1,(35),out,inst_31241);
} else {
if((state_val_31283 === (33))){
var inst_31234 = (state_31282[(12)]);
var inst_31212 = inst_31234;
var state_31282__$1 = (function (){var statearr_31300 = state_31282;
(statearr_31300[(7)] = inst_31212);

return statearr_31300;
})();
var statearr_31301_31359 = state_31282__$1;
(statearr_31301_31359[(2)] = null);

(statearr_31301_31359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (13))){
var inst_31212 = (state_31282[(7)]);
var inst_31219 = inst_31212.cljs$lang$protocol_mask$partition0$;
var inst_31220 = (inst_31219 & (64));
var inst_31221 = inst_31212.cljs$core$ISeq$;
var inst_31222 = (inst_31220) || (inst_31221);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31222)){
var statearr_31302_31360 = state_31282__$1;
(statearr_31302_31360[(1)] = (16));

} else {
var statearr_31303_31361 = state_31282__$1;
(statearr_31303_31361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (22))){
var inst_31241 = (state_31282[(14)]);
var inst_31242 = (state_31282[(11)]);
var inst_31240 = (state_31282[(2)]);
var inst_31241__$1 = cljs.core.nth.call(null,inst_31240,(0),null);
var inst_31242__$1 = cljs.core.nth.call(null,inst_31240,(1),null);
var inst_31243 = (inst_31241__$1 == null);
var inst_31244 = cljs.core._EQ_.call(null,inst_31242__$1,change);
var inst_31245 = (inst_31243) || (inst_31244);
var state_31282__$1 = (function (){var statearr_31304 = state_31282;
(statearr_31304[(14)] = inst_31241__$1);

(statearr_31304[(11)] = inst_31242__$1);

return statearr_31304;
})();
if(cljs.core.truth_(inst_31245)){
var statearr_31305_31362 = state_31282__$1;
(statearr_31305_31362[(1)] = (23));

} else {
var statearr_31306_31363 = state_31282__$1;
(statearr_31306_31363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (36))){
var inst_31234 = (state_31282[(12)]);
var inst_31212 = inst_31234;
var state_31282__$1 = (function (){var statearr_31307 = state_31282;
(statearr_31307[(7)] = inst_31212);

return statearr_31307;
})();
var statearr_31308_31364 = state_31282__$1;
(statearr_31308_31364[(2)] = null);

(statearr_31308_31364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (29))){
var inst_31256 = (state_31282[(9)]);
var state_31282__$1 = state_31282;
var statearr_31309_31365 = state_31282__$1;
(statearr_31309_31365[(2)] = inst_31256);

(statearr_31309_31365[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (6))){
var state_31282__$1 = state_31282;
var statearr_31310_31366 = state_31282__$1;
(statearr_31310_31366[(2)] = false);

(statearr_31310_31366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (28))){
var inst_31252 = (state_31282[(2)]);
var inst_31253 = calc_state.call(null);
var inst_31212 = inst_31253;
var state_31282__$1 = (function (){var statearr_31311 = state_31282;
(statearr_31311[(7)] = inst_31212);

(statearr_31311[(15)] = inst_31252);

return statearr_31311;
})();
var statearr_31312_31367 = state_31282__$1;
(statearr_31312_31367[(2)] = null);

(statearr_31312_31367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (25))){
var inst_31278 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31313_31368 = state_31282__$1;
(statearr_31313_31368[(2)] = inst_31278);

(statearr_31313_31368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (34))){
var inst_31276 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31314_31369 = state_31282__$1;
(statearr_31314_31369[(2)] = inst_31276);

(statearr_31314_31369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (17))){
var state_31282__$1 = state_31282;
var statearr_31315_31370 = state_31282__$1;
(statearr_31315_31370[(2)] = false);

(statearr_31315_31370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (3))){
var state_31282__$1 = state_31282;
var statearr_31316_31371 = state_31282__$1;
(statearr_31316_31371[(2)] = false);

(statearr_31316_31371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (12))){
var inst_31280 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31282__$1,inst_31280);
} else {
if((state_val_31283 === (2))){
var inst_31188 = (state_31282[(8)]);
var inst_31193 = inst_31188.cljs$lang$protocol_mask$partition0$;
var inst_31194 = (inst_31193 & (64));
var inst_31195 = inst_31188.cljs$core$ISeq$;
var inst_31196 = (inst_31194) || (inst_31195);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31196)){
var statearr_31317_31372 = state_31282__$1;
(statearr_31317_31372[(1)] = (5));

} else {
var statearr_31318_31373 = state_31282__$1;
(statearr_31318_31373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (23))){
var inst_31241 = (state_31282[(14)]);
var inst_31247 = (inst_31241 == null);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31247)){
var statearr_31319_31374 = state_31282__$1;
(statearr_31319_31374[(1)] = (26));

} else {
var statearr_31320_31375 = state_31282__$1;
(statearr_31320_31375[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (35))){
var inst_31267 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31267)){
var statearr_31321_31376 = state_31282__$1;
(statearr_31321_31376[(1)] = (36));

} else {
var statearr_31322_31377 = state_31282__$1;
(statearr_31322_31377[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (19))){
var inst_31212 = (state_31282[(7)]);
var inst_31231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31212);
var state_31282__$1 = state_31282;
var statearr_31323_31378 = state_31282__$1;
(statearr_31323_31378[(2)] = inst_31231);

(statearr_31323_31378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (11))){
var inst_31212 = (state_31282[(7)]);
var inst_31216 = (inst_31212 == null);
var inst_31217 = cljs.core.not.call(null,inst_31216);
var state_31282__$1 = state_31282;
if(inst_31217){
var statearr_31324_31379 = state_31282__$1;
(statearr_31324_31379[(1)] = (13));

} else {
var statearr_31325_31380 = state_31282__$1;
(statearr_31325_31380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (9))){
var inst_31188 = (state_31282[(8)]);
var state_31282__$1 = state_31282;
var statearr_31326_31381 = state_31282__$1;
(statearr_31326_31381[(2)] = inst_31188);

(statearr_31326_31381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (5))){
var state_31282__$1 = state_31282;
var statearr_31327_31382 = state_31282__$1;
(statearr_31327_31382[(2)] = true);

(statearr_31327_31382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (14))){
var state_31282__$1 = state_31282;
var statearr_31328_31383 = state_31282__$1;
(statearr_31328_31383[(2)] = false);

(statearr_31328_31383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (26))){
var inst_31242 = (state_31282[(11)]);
var inst_31249 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31242);
var state_31282__$1 = state_31282;
var statearr_31329_31384 = state_31282__$1;
(statearr_31329_31384[(2)] = inst_31249);

(statearr_31329_31384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (16))){
var state_31282__$1 = state_31282;
var statearr_31330_31385 = state_31282__$1;
(statearr_31330_31385[(2)] = true);

(statearr_31330_31385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (38))){
var inst_31272 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31331_31386 = state_31282__$1;
(statearr_31331_31386[(2)] = inst_31272);

(statearr_31331_31386[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (30))){
var inst_31236 = (state_31282[(13)]);
var inst_31235 = (state_31282[(10)]);
var inst_31242 = (state_31282[(11)]);
var inst_31259 = cljs.core.empty_QMARK_.call(null,inst_31235);
var inst_31260 = inst_31236.call(null,inst_31242);
var inst_31261 = cljs.core.not.call(null,inst_31260);
var inst_31262 = (inst_31259) && (inst_31261);
var state_31282__$1 = state_31282;
var statearr_31332_31387 = state_31282__$1;
(statearr_31332_31387[(2)] = inst_31262);

(statearr_31332_31387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (10))){
var inst_31188 = (state_31282[(8)]);
var inst_31208 = (state_31282[(2)]);
var inst_31209 = cljs.core.get.call(null,inst_31208,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31210 = cljs.core.get.call(null,inst_31208,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31211 = cljs.core.get.call(null,inst_31208,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31212 = inst_31188;
var state_31282__$1 = (function (){var statearr_31333 = state_31282;
(statearr_31333[(7)] = inst_31212);

(statearr_31333[(16)] = inst_31211);

(statearr_31333[(17)] = inst_31210);

(statearr_31333[(18)] = inst_31209);

return statearr_31333;
})();
var statearr_31334_31388 = state_31282__$1;
(statearr_31334_31388[(2)] = null);

(statearr_31334_31388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (18))){
var inst_31226 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31335_31389 = state_31282__$1;
(statearr_31335_31389[(2)] = inst_31226);

(statearr_31335_31389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (37))){
var state_31282__$1 = state_31282;
var statearr_31336_31390 = state_31282__$1;
(statearr_31336_31390[(2)] = null);

(statearr_31336_31390[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (8))){
var inst_31188 = (state_31282[(8)]);
var inst_31205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31188);
var state_31282__$1 = state_31282;
var statearr_31337_31391 = state_31282__$1;
(statearr_31337_31391[(2)] = inst_31205);

(statearr_31337_31391[(1)] = (10));


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
});})(c__19694__auto___31345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19629__auto__,c__19694__auto___31345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19630__auto__ = null;
var cljs$core$async$mix_$_state_machine__19630__auto____0 = (function (){
var statearr_31341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31341[(0)] = cljs$core$async$mix_$_state_machine__19630__auto__);

(statearr_31341[(1)] = (1));

return statearr_31341;
});
var cljs$core$async$mix_$_state_machine__19630__auto____1 = (function (state_31282){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_31282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e31342){if((e31342 instanceof Object)){
var ex__19633__auto__ = e31342;
var statearr_31343_31392 = state_31282;
(statearr_31343_31392[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31393 = state_31282;
state_31282 = G__31393;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19630__auto__ = function(state_31282){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19630__auto____1.call(this,state_31282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19630__auto____0;
cljs$core$async$mix_$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19630__auto____1;
return cljs$core$async$mix_$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___31345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19696__auto__ = (function (){var statearr_31344 = f__19695__auto__.call(null);
(statearr_31344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___31345);

return statearr_31344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___31345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17147__auto__ = (((p == null))?null:p);
var m__17148__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17148__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17147__auto__ = (((p == null))?null:p);
var m__17148__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,p,v,ch);
} else {
var m__17148__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args31396 = [];
var len__17550__auto___31399 = arguments.length;
var i__17551__auto___31400 = (0);
while(true){
if((i__17551__auto___31400 < len__17550__auto___31399)){
args31396.push((arguments[i__17551__auto___31400]));

var G__31401 = (i__17551__auto___31400 + (1));
i__17551__auto___31400 = G__31401;
continue;
} else {
}
break;
}

var G__31398 = args31396.length;
switch (G__31398) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31396.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17147__auto__ = (((p == null))?null:p);
var m__17148__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,p);
} else {
var m__17148__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17147__auto__ = (((p == null))?null:p);
var m__17148__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17147__auto__)]);
if(!((m__17148__auto__ == null))){
return m__17148__auto__.call(null,p,v);
} else {
var m__17148__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17148__auto____$1 == null))){
return m__17148__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args31404 = [];
var len__17550__auto___31529 = arguments.length;
var i__17551__auto___31530 = (0);
while(true){
if((i__17551__auto___31530 < len__17550__auto___31529)){
args31404.push((arguments[i__17551__auto___31530]));

var G__31531 = (i__17551__auto___31530 + (1));
i__17551__auto___31530 = G__31531;
continue;
} else {
}
break;
}

var G__31406 = args31404.length;
switch (G__31406) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31404.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16511__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16511__auto__)){
return or__16511__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16511__auto__,mults){
return (function (p1__31403_SHARP_){
if(cljs.core.truth_(p1__31403_SHARP_.call(null,topic))){
return p1__31403_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31403_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16511__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31407 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31407 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31408){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31408 = meta31408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31409,meta31408__$1){
var self__ = this;
var _31409__$1 = this;
return (new cljs.core.async.t31407(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31408__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31409){
var self__ = this;
var _31409__$1 = this;
return self__.meta31408;
});})(mults,ensure_mult))
;

cljs.core.async.t31407.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31407.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31407.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31407.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31407.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31408","meta31408",1661230586,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t31407.cljs$lang$type = true;

cljs.core.async.t31407.cljs$lang$ctorStr = "cljs.core.async/t31407";

cljs.core.async.t31407.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t31407");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31407 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31407(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31408){
return (new cljs.core.async.t31407(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31408));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31407(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19694__auto___31533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___31533,mults,ensure_mult,p){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___31533,mults,ensure_mult,p){
return (function (state_31481){
var state_val_31482 = (state_31481[(1)]);
if((state_val_31482 === (7))){
var inst_31477 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31483_31534 = state_31481__$1;
(statearr_31483_31534[(2)] = inst_31477);

(statearr_31483_31534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (20))){
var state_31481__$1 = state_31481;
var statearr_31484_31535 = state_31481__$1;
(statearr_31484_31535[(2)] = null);

(statearr_31484_31535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (1))){
var state_31481__$1 = state_31481;
var statearr_31485_31536 = state_31481__$1;
(statearr_31485_31536[(2)] = null);

(statearr_31485_31536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (24))){
var inst_31460 = (state_31481[(7)]);
var inst_31469 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31460);
var state_31481__$1 = state_31481;
var statearr_31486_31537 = state_31481__$1;
(statearr_31486_31537[(2)] = inst_31469);

(statearr_31486_31537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (4))){
var inst_31412 = (state_31481[(8)]);
var inst_31412__$1 = (state_31481[(2)]);
var inst_31413 = (inst_31412__$1 == null);
var state_31481__$1 = (function (){var statearr_31487 = state_31481;
(statearr_31487[(8)] = inst_31412__$1);

return statearr_31487;
})();
if(cljs.core.truth_(inst_31413)){
var statearr_31488_31538 = state_31481__$1;
(statearr_31488_31538[(1)] = (5));

} else {
var statearr_31489_31539 = state_31481__$1;
(statearr_31489_31539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (15))){
var inst_31454 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31490_31540 = state_31481__$1;
(statearr_31490_31540[(2)] = inst_31454);

(statearr_31490_31540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (21))){
var inst_31474 = (state_31481[(2)]);
var state_31481__$1 = (function (){var statearr_31491 = state_31481;
(statearr_31491[(9)] = inst_31474);

return statearr_31491;
})();
var statearr_31492_31541 = state_31481__$1;
(statearr_31492_31541[(2)] = null);

(statearr_31492_31541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (13))){
var inst_31436 = (state_31481[(10)]);
var inst_31438 = cljs.core.chunked_seq_QMARK_.call(null,inst_31436);
var state_31481__$1 = state_31481;
if(inst_31438){
var statearr_31493_31542 = state_31481__$1;
(statearr_31493_31542[(1)] = (16));

} else {
var statearr_31494_31543 = state_31481__$1;
(statearr_31494_31543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (22))){
var inst_31466 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31466)){
var statearr_31495_31544 = state_31481__$1;
(statearr_31495_31544[(1)] = (23));

} else {
var statearr_31496_31545 = state_31481__$1;
(statearr_31496_31545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (6))){
var inst_31462 = (state_31481[(11)]);
var inst_31460 = (state_31481[(7)]);
var inst_31412 = (state_31481[(8)]);
var inst_31460__$1 = topic_fn.call(null,inst_31412);
var inst_31461 = cljs.core.deref.call(null,mults);
var inst_31462__$1 = cljs.core.get.call(null,inst_31461,inst_31460__$1);
var state_31481__$1 = (function (){var statearr_31497 = state_31481;
(statearr_31497[(11)] = inst_31462__$1);

(statearr_31497[(7)] = inst_31460__$1);

return statearr_31497;
})();
if(cljs.core.truth_(inst_31462__$1)){
var statearr_31498_31546 = state_31481__$1;
(statearr_31498_31546[(1)] = (19));

} else {
var statearr_31499_31547 = state_31481__$1;
(statearr_31499_31547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (25))){
var inst_31471 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31500_31548 = state_31481__$1;
(statearr_31500_31548[(2)] = inst_31471);

(statearr_31500_31548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (17))){
var inst_31436 = (state_31481[(10)]);
var inst_31445 = cljs.core.first.call(null,inst_31436);
var inst_31446 = cljs.core.async.muxch_STAR_.call(null,inst_31445);
var inst_31447 = cljs.core.async.close_BANG_.call(null,inst_31446);
var inst_31448 = cljs.core.next.call(null,inst_31436);
var inst_31422 = inst_31448;
var inst_31423 = null;
var inst_31424 = (0);
var inst_31425 = (0);
var state_31481__$1 = (function (){var statearr_31501 = state_31481;
(statearr_31501[(12)] = inst_31423);

(statearr_31501[(13)] = inst_31424);

(statearr_31501[(14)] = inst_31422);

(statearr_31501[(15)] = inst_31425);

(statearr_31501[(16)] = inst_31447);

return statearr_31501;
})();
var statearr_31502_31549 = state_31481__$1;
(statearr_31502_31549[(2)] = null);

(statearr_31502_31549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (3))){
var inst_31479 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31481__$1,inst_31479);
} else {
if((state_val_31482 === (12))){
var inst_31456 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31503_31550 = state_31481__$1;
(statearr_31503_31550[(2)] = inst_31456);

(statearr_31503_31550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (2))){
var state_31481__$1 = state_31481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31481__$1,(4),ch);
} else {
if((state_val_31482 === (23))){
var state_31481__$1 = state_31481;
var statearr_31504_31551 = state_31481__$1;
(statearr_31504_31551[(2)] = null);

(statearr_31504_31551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (19))){
var inst_31462 = (state_31481[(11)]);
var inst_31412 = (state_31481[(8)]);
var inst_31464 = cljs.core.async.muxch_STAR_.call(null,inst_31462);
var state_31481__$1 = state_31481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31481__$1,(22),inst_31464,inst_31412);
} else {
if((state_val_31482 === (11))){
var inst_31422 = (state_31481[(14)]);
var inst_31436 = (state_31481[(10)]);
var inst_31436__$1 = cljs.core.seq.call(null,inst_31422);
var state_31481__$1 = (function (){var statearr_31505 = state_31481;
(statearr_31505[(10)] = inst_31436__$1);

return statearr_31505;
})();
if(inst_31436__$1){
var statearr_31506_31552 = state_31481__$1;
(statearr_31506_31552[(1)] = (13));

} else {
var statearr_31507_31553 = state_31481__$1;
(statearr_31507_31553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (9))){
var inst_31458 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31508_31554 = state_31481__$1;
(statearr_31508_31554[(2)] = inst_31458);

(statearr_31508_31554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (5))){
var inst_31419 = cljs.core.deref.call(null,mults);
var inst_31420 = cljs.core.vals.call(null,inst_31419);
var inst_31421 = cljs.core.seq.call(null,inst_31420);
var inst_31422 = inst_31421;
var inst_31423 = null;
var inst_31424 = (0);
var inst_31425 = (0);
var state_31481__$1 = (function (){var statearr_31509 = state_31481;
(statearr_31509[(12)] = inst_31423);

(statearr_31509[(13)] = inst_31424);

(statearr_31509[(14)] = inst_31422);

(statearr_31509[(15)] = inst_31425);

return statearr_31509;
})();
var statearr_31510_31555 = state_31481__$1;
(statearr_31510_31555[(2)] = null);

(statearr_31510_31555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (14))){
var state_31481__$1 = state_31481;
var statearr_31514_31556 = state_31481__$1;
(statearr_31514_31556[(2)] = null);

(statearr_31514_31556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (16))){
var inst_31436 = (state_31481[(10)]);
var inst_31440 = cljs.core.chunk_first.call(null,inst_31436);
var inst_31441 = cljs.core.chunk_rest.call(null,inst_31436);
var inst_31442 = cljs.core.count.call(null,inst_31440);
var inst_31422 = inst_31441;
var inst_31423 = inst_31440;
var inst_31424 = inst_31442;
var inst_31425 = (0);
var state_31481__$1 = (function (){var statearr_31515 = state_31481;
(statearr_31515[(12)] = inst_31423);

(statearr_31515[(13)] = inst_31424);

(statearr_31515[(14)] = inst_31422);

(statearr_31515[(15)] = inst_31425);

return statearr_31515;
})();
var statearr_31516_31557 = state_31481__$1;
(statearr_31516_31557[(2)] = null);

(statearr_31516_31557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (10))){
var inst_31423 = (state_31481[(12)]);
var inst_31424 = (state_31481[(13)]);
var inst_31422 = (state_31481[(14)]);
var inst_31425 = (state_31481[(15)]);
var inst_31430 = cljs.core._nth.call(null,inst_31423,inst_31425);
var inst_31431 = cljs.core.async.muxch_STAR_.call(null,inst_31430);
var inst_31432 = cljs.core.async.close_BANG_.call(null,inst_31431);
var inst_31433 = (inst_31425 + (1));
var tmp31511 = inst_31423;
var tmp31512 = inst_31424;
var tmp31513 = inst_31422;
var inst_31422__$1 = tmp31513;
var inst_31423__$1 = tmp31511;
var inst_31424__$1 = tmp31512;
var inst_31425__$1 = inst_31433;
var state_31481__$1 = (function (){var statearr_31517 = state_31481;
(statearr_31517[(12)] = inst_31423__$1);

(statearr_31517[(13)] = inst_31424__$1);

(statearr_31517[(14)] = inst_31422__$1);

(statearr_31517[(15)] = inst_31425__$1);

(statearr_31517[(17)] = inst_31432);

return statearr_31517;
})();
var statearr_31518_31558 = state_31481__$1;
(statearr_31518_31558[(2)] = null);

(statearr_31518_31558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (18))){
var inst_31451 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31519_31559 = state_31481__$1;
(statearr_31519_31559[(2)] = inst_31451);

(statearr_31519_31559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31482 === (8))){
var inst_31424 = (state_31481[(13)]);
var inst_31425 = (state_31481[(15)]);
var inst_31427 = (inst_31425 < inst_31424);
var inst_31428 = inst_31427;
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31428)){
var statearr_31520_31560 = state_31481__$1;
(statearr_31520_31560[(1)] = (10));

} else {
var statearr_31521_31561 = state_31481__$1;
(statearr_31521_31561[(1)] = (11));

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
});})(c__19694__auto___31533,mults,ensure_mult,p))
;
return ((function (switch__19629__auto__,c__19694__auto___31533,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_31525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31525[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_31525[(1)] = (1));

return statearr_31525;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_31481){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_31481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e31526){if((e31526 instanceof Object)){
var ex__19633__auto__ = e31526;
var statearr_31527_31562 = state_31481;
(statearr_31527_31562[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31563 = state_31481;
state_31481 = G__31563;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_31481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_31481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___31533,mults,ensure_mult,p))
})();
var state__19696__auto__ = (function (){var statearr_31528 = f__19695__auto__.call(null);
(statearr_31528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___31533);

return statearr_31528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___31533,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args31564 = [];
var len__17550__auto___31567 = arguments.length;
var i__17551__auto___31568 = (0);
while(true){
if((i__17551__auto___31568 < len__17550__auto___31567)){
args31564.push((arguments[i__17551__auto___31568]));

var G__31569 = (i__17551__auto___31568 + (1));
i__17551__auto___31568 = G__31569;
continue;
} else {
}
break;
}

var G__31566 = args31564.length;
switch (G__31566) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31564.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args31571 = [];
var len__17550__auto___31574 = arguments.length;
var i__17551__auto___31575 = (0);
while(true){
if((i__17551__auto___31575 < len__17550__auto___31574)){
args31571.push((arguments[i__17551__auto___31575]));

var G__31576 = (i__17551__auto___31575 + (1));
i__17551__auto___31575 = G__31576;
continue;
} else {
}
break;
}

var G__31573 = args31571.length;
switch (G__31573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31571.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args31578 = [];
var len__17550__auto___31649 = arguments.length;
var i__17551__auto___31650 = (0);
while(true){
if((i__17551__auto___31650 < len__17550__auto___31649)){
args31578.push((arguments[i__17551__auto___31650]));

var G__31651 = (i__17551__auto___31650 + (1));
i__17551__auto___31650 = G__31651;
continue;
} else {
}
break;
}

var G__31580 = args31578.length;
switch (G__31580) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31578.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19694__auto___31653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___31653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___31653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31619){
var state_val_31620 = (state_31619[(1)]);
if((state_val_31620 === (7))){
var state_31619__$1 = state_31619;
var statearr_31621_31654 = state_31619__$1;
(statearr_31621_31654[(2)] = null);

(statearr_31621_31654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (1))){
var state_31619__$1 = state_31619;
var statearr_31622_31655 = state_31619__$1;
(statearr_31622_31655[(2)] = null);

(statearr_31622_31655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (4))){
var inst_31583 = (state_31619[(7)]);
var inst_31585 = (inst_31583 < cnt);
var state_31619__$1 = state_31619;
if(cljs.core.truth_(inst_31585)){
var statearr_31623_31656 = state_31619__$1;
(statearr_31623_31656[(1)] = (6));

} else {
var statearr_31624_31657 = state_31619__$1;
(statearr_31624_31657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (15))){
var inst_31615 = (state_31619[(2)]);
var state_31619__$1 = state_31619;
var statearr_31625_31658 = state_31619__$1;
(statearr_31625_31658[(2)] = inst_31615);

(statearr_31625_31658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (13))){
var inst_31608 = cljs.core.async.close_BANG_.call(null,out);
var state_31619__$1 = state_31619;
var statearr_31626_31659 = state_31619__$1;
(statearr_31626_31659[(2)] = inst_31608);

(statearr_31626_31659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (6))){
var state_31619__$1 = state_31619;
var statearr_31627_31660 = state_31619__$1;
(statearr_31627_31660[(2)] = null);

(statearr_31627_31660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (3))){
var inst_31617 = (state_31619[(2)]);
var state_31619__$1 = state_31619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31619__$1,inst_31617);
} else {
if((state_val_31620 === (12))){
var inst_31605 = (state_31619[(8)]);
var inst_31605__$1 = (state_31619[(2)]);
var inst_31606 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31605__$1);
var state_31619__$1 = (function (){var statearr_31628 = state_31619;
(statearr_31628[(8)] = inst_31605__$1);

return statearr_31628;
})();
if(cljs.core.truth_(inst_31606)){
var statearr_31629_31661 = state_31619__$1;
(statearr_31629_31661[(1)] = (13));

} else {
var statearr_31630_31662 = state_31619__$1;
(statearr_31630_31662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (2))){
var inst_31582 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31583 = (0);
var state_31619__$1 = (function (){var statearr_31631 = state_31619;
(statearr_31631[(9)] = inst_31582);

(statearr_31631[(7)] = inst_31583);

return statearr_31631;
})();
var statearr_31632_31663 = state_31619__$1;
(statearr_31632_31663[(2)] = null);

(statearr_31632_31663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (11))){
var inst_31583 = (state_31619[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31619,(10),Object,null,(9));
var inst_31592 = chs__$1.call(null,inst_31583);
var inst_31593 = done.call(null,inst_31583);
var inst_31594 = cljs.core.async.take_BANG_.call(null,inst_31592,inst_31593);
var state_31619__$1 = state_31619;
var statearr_31633_31664 = state_31619__$1;
(statearr_31633_31664[(2)] = inst_31594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (9))){
var inst_31583 = (state_31619[(7)]);
var inst_31596 = (state_31619[(2)]);
var inst_31597 = (inst_31583 + (1));
var inst_31583__$1 = inst_31597;
var state_31619__$1 = (function (){var statearr_31634 = state_31619;
(statearr_31634[(10)] = inst_31596);

(statearr_31634[(7)] = inst_31583__$1);

return statearr_31634;
})();
var statearr_31635_31665 = state_31619__$1;
(statearr_31635_31665[(2)] = null);

(statearr_31635_31665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (5))){
var inst_31603 = (state_31619[(2)]);
var state_31619__$1 = (function (){var statearr_31636 = state_31619;
(statearr_31636[(11)] = inst_31603);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31619__$1,(12),dchan);
} else {
if((state_val_31620 === (14))){
var inst_31605 = (state_31619[(8)]);
var inst_31610 = cljs.core.apply.call(null,f,inst_31605);
var state_31619__$1 = state_31619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31619__$1,(16),out,inst_31610);
} else {
if((state_val_31620 === (16))){
var inst_31612 = (state_31619[(2)]);
var state_31619__$1 = (function (){var statearr_31637 = state_31619;
(statearr_31637[(12)] = inst_31612);

return statearr_31637;
})();
var statearr_31638_31666 = state_31619__$1;
(statearr_31638_31666[(2)] = null);

(statearr_31638_31666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (10))){
var inst_31587 = (state_31619[(2)]);
var inst_31588 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31619__$1 = (function (){var statearr_31639 = state_31619;
(statearr_31639[(13)] = inst_31587);

return statearr_31639;
})();
var statearr_31640_31667 = state_31619__$1;
(statearr_31640_31667[(2)] = inst_31588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31619__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31620 === (8))){
var inst_31601 = (state_31619[(2)]);
var state_31619__$1 = state_31619;
var statearr_31641_31668 = state_31619__$1;
(statearr_31641_31668[(2)] = inst_31601);

(statearr_31641_31668[(1)] = (5));


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
});})(c__19694__auto___31653,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19629__auto__,c__19694__auto___31653,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_31645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31645[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_31645[(1)] = (1));

return statearr_31645;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_31619){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_31619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e31646){if((e31646 instanceof Object)){
var ex__19633__auto__ = e31646;
var statearr_31647_31669 = state_31619;
(statearr_31647_31669[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31670 = state_31619;
state_31619 = G__31670;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_31619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_31619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___31653,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19696__auto__ = (function (){var statearr_31648 = f__19695__auto__.call(null);
(statearr_31648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___31653);

return statearr_31648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___31653,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args31672 = [];
var len__17550__auto___31728 = arguments.length;
var i__17551__auto___31729 = (0);
while(true){
if((i__17551__auto___31729 < len__17550__auto___31728)){
args31672.push((arguments[i__17551__auto___31729]));

var G__31730 = (i__17551__auto___31729 + (1));
i__17551__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var G__31674 = args31672.length;
switch (G__31674) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31672.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19694__auto___31732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___31732,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___31732,out){
return (function (state_31704){
var state_val_31705 = (state_31704[(1)]);
if((state_val_31705 === (7))){
var inst_31684 = (state_31704[(7)]);
var inst_31683 = (state_31704[(8)]);
var inst_31683__$1 = (state_31704[(2)]);
var inst_31684__$1 = cljs.core.nth.call(null,inst_31683__$1,(0),null);
var inst_31685 = cljs.core.nth.call(null,inst_31683__$1,(1),null);
var inst_31686 = (inst_31684__$1 == null);
var state_31704__$1 = (function (){var statearr_31706 = state_31704;
(statearr_31706[(9)] = inst_31685);

(statearr_31706[(7)] = inst_31684__$1);

(statearr_31706[(8)] = inst_31683__$1);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31686)){
var statearr_31707_31733 = state_31704__$1;
(statearr_31707_31733[(1)] = (8));

} else {
var statearr_31708_31734 = state_31704__$1;
(statearr_31708_31734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (1))){
var inst_31675 = cljs.core.vec.call(null,chs);
var inst_31676 = inst_31675;
var state_31704__$1 = (function (){var statearr_31709 = state_31704;
(statearr_31709[(10)] = inst_31676);

return statearr_31709;
})();
var statearr_31710_31735 = state_31704__$1;
(statearr_31710_31735[(2)] = null);

(statearr_31710_31735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (4))){
var inst_31676 = (state_31704[(10)]);
var state_31704__$1 = state_31704;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31704__$1,(7),inst_31676);
} else {
if((state_val_31705 === (6))){
var inst_31700 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31711_31736 = state_31704__$1;
(statearr_31711_31736[(2)] = inst_31700);

(statearr_31711_31736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (3))){
var inst_31702 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31704__$1,inst_31702);
} else {
if((state_val_31705 === (2))){
var inst_31676 = (state_31704[(10)]);
var inst_31678 = cljs.core.count.call(null,inst_31676);
var inst_31679 = (inst_31678 > (0));
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31679)){
var statearr_31713_31737 = state_31704__$1;
(statearr_31713_31737[(1)] = (4));

} else {
var statearr_31714_31738 = state_31704__$1;
(statearr_31714_31738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (11))){
var inst_31676 = (state_31704[(10)]);
var inst_31693 = (state_31704[(2)]);
var tmp31712 = inst_31676;
var inst_31676__$1 = tmp31712;
var state_31704__$1 = (function (){var statearr_31715 = state_31704;
(statearr_31715[(10)] = inst_31676__$1);

(statearr_31715[(11)] = inst_31693);

return statearr_31715;
})();
var statearr_31716_31739 = state_31704__$1;
(statearr_31716_31739[(2)] = null);

(statearr_31716_31739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (9))){
var inst_31684 = (state_31704[(7)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31704__$1,(11),out,inst_31684);
} else {
if((state_val_31705 === (5))){
var inst_31698 = cljs.core.async.close_BANG_.call(null,out);
var state_31704__$1 = state_31704;
var statearr_31717_31740 = state_31704__$1;
(statearr_31717_31740[(2)] = inst_31698);

(statearr_31717_31740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (10))){
var inst_31696 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31718_31741 = state_31704__$1;
(statearr_31718_31741[(2)] = inst_31696);

(statearr_31718_31741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (8))){
var inst_31676 = (state_31704[(10)]);
var inst_31685 = (state_31704[(9)]);
var inst_31684 = (state_31704[(7)]);
var inst_31683 = (state_31704[(8)]);
var inst_31688 = (function (){var cs = inst_31676;
var vec__31681 = inst_31683;
var v = inst_31684;
var c = inst_31685;
return ((function (cs,vec__31681,v,c,inst_31676,inst_31685,inst_31684,inst_31683,state_val_31705,c__19694__auto___31732,out){
return (function (p1__31671_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31671_SHARP_);
});
;})(cs,vec__31681,v,c,inst_31676,inst_31685,inst_31684,inst_31683,state_val_31705,c__19694__auto___31732,out))
})();
var inst_31689 = cljs.core.filterv.call(null,inst_31688,inst_31676);
var inst_31676__$1 = inst_31689;
var state_31704__$1 = (function (){var statearr_31719 = state_31704;
(statearr_31719[(10)] = inst_31676__$1);

return statearr_31719;
})();
var statearr_31720_31742 = state_31704__$1;
(statearr_31720_31742[(2)] = null);

(statearr_31720_31742[(1)] = (2));


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
});})(c__19694__auto___31732,out))
;
return ((function (switch__19629__auto__,c__19694__auto___31732,out){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_31724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31724[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_31724[(1)] = (1));

return statearr_31724;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_31704){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_31704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e31725){if((e31725 instanceof Object)){
var ex__19633__auto__ = e31725;
var statearr_31726_31743 = state_31704;
(statearr_31726_31743[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31744 = state_31704;
state_31704 = G__31744;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_31704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_31704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___31732,out))
})();
var state__19696__auto__ = (function (){var statearr_31727 = f__19695__auto__.call(null);
(statearr_31727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___31732);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___31732,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args31745 = [];
var len__17550__auto___31794 = arguments.length;
var i__17551__auto___31795 = (0);
while(true){
if((i__17551__auto___31795 < len__17550__auto___31794)){
args31745.push((arguments[i__17551__auto___31795]));

var G__31796 = (i__17551__auto___31795 + (1));
i__17551__auto___31795 = G__31796;
continue;
} else {
}
break;
}

var G__31747 = args31745.length;
switch (G__31747) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31745.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19694__auto___31798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___31798,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___31798,out){
return (function (state_31771){
var state_val_31772 = (state_31771[(1)]);
if((state_val_31772 === (7))){
var inst_31753 = (state_31771[(7)]);
var inst_31753__$1 = (state_31771[(2)]);
var inst_31754 = (inst_31753__$1 == null);
var inst_31755 = cljs.core.not.call(null,inst_31754);
var state_31771__$1 = (function (){var statearr_31773 = state_31771;
(statearr_31773[(7)] = inst_31753__$1);

return statearr_31773;
})();
if(inst_31755){
var statearr_31774_31799 = state_31771__$1;
(statearr_31774_31799[(1)] = (8));

} else {
var statearr_31775_31800 = state_31771__$1;
(statearr_31775_31800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (1))){
var inst_31748 = (0);
var state_31771__$1 = (function (){var statearr_31776 = state_31771;
(statearr_31776[(8)] = inst_31748);

return statearr_31776;
})();
var statearr_31777_31801 = state_31771__$1;
(statearr_31777_31801[(2)] = null);

(statearr_31777_31801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (4))){
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(7),ch);
} else {
if((state_val_31772 === (6))){
var inst_31766 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31778_31802 = state_31771__$1;
(statearr_31778_31802[(2)] = inst_31766);

(statearr_31778_31802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (3))){
var inst_31768 = (state_31771[(2)]);
var inst_31769 = cljs.core.async.close_BANG_.call(null,out);
var state_31771__$1 = (function (){var statearr_31779 = state_31771;
(statearr_31779[(9)] = inst_31768);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31771__$1,inst_31769);
} else {
if((state_val_31772 === (2))){
var inst_31748 = (state_31771[(8)]);
var inst_31750 = (inst_31748 < n);
var state_31771__$1 = state_31771;
if(cljs.core.truth_(inst_31750)){
var statearr_31780_31803 = state_31771__$1;
(statearr_31780_31803[(1)] = (4));

} else {
var statearr_31781_31804 = state_31771__$1;
(statearr_31781_31804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (11))){
var inst_31748 = (state_31771[(8)]);
var inst_31758 = (state_31771[(2)]);
var inst_31759 = (inst_31748 + (1));
var inst_31748__$1 = inst_31759;
var state_31771__$1 = (function (){var statearr_31782 = state_31771;
(statearr_31782[(10)] = inst_31758);

(statearr_31782[(8)] = inst_31748__$1);

return statearr_31782;
})();
var statearr_31783_31805 = state_31771__$1;
(statearr_31783_31805[(2)] = null);

(statearr_31783_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (9))){
var state_31771__$1 = state_31771;
var statearr_31784_31806 = state_31771__$1;
(statearr_31784_31806[(2)] = null);

(statearr_31784_31806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (5))){
var state_31771__$1 = state_31771;
var statearr_31785_31807 = state_31771__$1;
(statearr_31785_31807[(2)] = null);

(statearr_31785_31807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (10))){
var inst_31763 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31786_31808 = state_31771__$1;
(statearr_31786_31808[(2)] = inst_31763);

(statearr_31786_31808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (8))){
var inst_31753 = (state_31771[(7)]);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31771__$1,(11),out,inst_31753);
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
});})(c__19694__auto___31798,out))
;
return ((function (switch__19629__auto__,c__19694__auto___31798,out){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_31790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31790[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_31790[(1)] = (1));

return statearr_31790;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_31771){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_31771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e31791){if((e31791 instanceof Object)){
var ex__19633__auto__ = e31791;
var statearr_31792_31809 = state_31771;
(statearr_31792_31809[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31810 = state_31771;
state_31771 = G__31810;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___31798,out))
})();
var state__19696__auto__ = (function (){var statearr_31793 = f__19695__auto__.call(null);
(statearr_31793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___31798);

return statearr_31793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___31798,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31818 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31818 = (function (map_LT_,f,ch,meta31819){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31819 = meta31819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31820,meta31819__$1){
var self__ = this;
var _31820__$1 = this;
return (new cljs.core.async.t31818(self__.map_LT_,self__.f,self__.ch,meta31819__$1));
});

cljs.core.async.t31818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31820){
var self__ = this;
var _31820__$1 = this;
return self__.meta31819;
});

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31821 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31821 = (function (map_LT_,f,ch,meta31819,_,fn1,meta31822){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31819 = meta31819;
this._ = _;
this.fn1 = fn1;
this.meta31822 = meta31822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31823,meta31822__$1){
var self__ = this;
var _31823__$1 = this;
return (new cljs.core.async.t31821(self__.map_LT_,self__.f,self__.ch,self__.meta31819,self__._,self__.fn1,meta31822__$1));
});})(___$1))
;

cljs.core.async.t31821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31823){
var self__ = this;
var _31823__$1 = this;
return self__.meta31822;
});})(___$1))
;

cljs.core.async.t31821.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31811_SHARP_){
return f1.call(null,(((p1__31811_SHARP_ == null))?null:self__.f.call(null,p1__31811_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31821.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31819","meta31819",1636520486,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t31818","cljs.core.async/t31818",459744798,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31822","meta31822",1638918833,null)], null);
});})(___$1))
;

cljs.core.async.t31821.cljs$lang$type = true;

cljs.core.async.t31821.cljs$lang$ctorStr = "cljs.core.async/t31821";

cljs.core.async.t31821.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t31821");
});})(___$1))
;

cljs.core.async.__GT_t31821 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31821(map_LT___$1,f__$1,ch__$1,meta31819__$1,___$2,fn1__$1,meta31822){
return (new cljs.core.async.t31821(map_LT___$1,f__$1,ch__$1,meta31819__$1,___$2,fn1__$1,meta31822));
});})(___$1))
;

}

return (new cljs.core.async.t31821(self__.map_LT_,self__.f,self__.ch,self__.meta31819,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16499__auto__ = ret;
if(cljs.core.truth_(and__16499__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16499__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31819","meta31819",1636520486,null)], null);
});

cljs.core.async.t31818.cljs$lang$type = true;

cljs.core.async.t31818.cljs$lang$ctorStr = "cljs.core.async/t31818";

cljs.core.async.t31818.cljs$lang$ctorPrWriter = (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t31818");
});

cljs.core.async.__GT_t31818 = (function cljs$core$async$map_LT__$___GT_t31818(map_LT___$1,f__$1,ch__$1,meta31819){
return (new cljs.core.async.t31818(map_LT___$1,f__$1,ch__$1,meta31819));
});

}

return (new cljs.core.async.t31818(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31827 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31827 = (function (map_GT_,f,ch,meta31828){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31828 = meta31828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31829,meta31828__$1){
var self__ = this;
var _31829__$1 = this;
return (new cljs.core.async.t31827(self__.map_GT_,self__.f,self__.ch,meta31828__$1));
});

cljs.core.async.t31827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31829){
var self__ = this;
var _31829__$1 = this;
return self__.meta31828;
});

cljs.core.async.t31827.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31828","meta31828",1655046407,null)], null);
});

cljs.core.async.t31827.cljs$lang$type = true;

cljs.core.async.t31827.cljs$lang$ctorStr = "cljs.core.async/t31827";

cljs.core.async.t31827.cljs$lang$ctorPrWriter = (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t31827");
});

cljs.core.async.__GT_t31827 = (function cljs$core$async$map_GT__$___GT_t31827(map_GT___$1,f__$1,ch__$1,meta31828){
return (new cljs.core.async.t31827(map_GT___$1,f__$1,ch__$1,meta31828));
});

}

return (new cljs.core.async.t31827(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31833 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31833 = (function (filter_GT_,p,ch,meta31834){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31834 = meta31834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31835,meta31834__$1){
var self__ = this;
var _31835__$1 = this;
return (new cljs.core.async.t31833(self__.filter_GT_,self__.p,self__.ch,meta31834__$1));
});

cljs.core.async.t31833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31835){
var self__ = this;
var _31835__$1 = this;
return self__.meta31834;
});

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31834","meta31834",1360667107,null)], null);
});

cljs.core.async.t31833.cljs$lang$type = true;

cljs.core.async.t31833.cljs$lang$ctorStr = "cljs.core.async/t31833";

cljs.core.async.t31833.cljs$lang$ctorPrWriter = (function (this__17090__auto__,writer__17091__auto__,opt__17092__auto__){
return cljs.core._write.call(null,writer__17091__auto__,"cljs.core.async/t31833");
});

cljs.core.async.__GT_t31833 = (function cljs$core$async$filter_GT__$___GT_t31833(filter_GT___$1,p__$1,ch__$1,meta31834){
return (new cljs.core.async.t31833(filter_GT___$1,p__$1,ch__$1,meta31834));
});

}

return (new cljs.core.async.t31833(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args31836 = [];
var len__17550__auto___31880 = arguments.length;
var i__17551__auto___31881 = (0);
while(true){
if((i__17551__auto___31881 < len__17550__auto___31880)){
args31836.push((arguments[i__17551__auto___31881]));

var G__31882 = (i__17551__auto___31881 + (1));
i__17551__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var G__31838 = args31836.length;
switch (G__31838) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31836.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19694__auto___31884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___31884,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___31884,out){
return (function (state_31859){
var state_val_31860 = (state_31859[(1)]);
if((state_val_31860 === (7))){
var inst_31855 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31861_31885 = state_31859__$1;
(statearr_31861_31885[(2)] = inst_31855);

(statearr_31861_31885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (1))){
var state_31859__$1 = state_31859;
var statearr_31862_31886 = state_31859__$1;
(statearr_31862_31886[(2)] = null);

(statearr_31862_31886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (4))){
var inst_31841 = (state_31859[(7)]);
var inst_31841__$1 = (state_31859[(2)]);
var inst_31842 = (inst_31841__$1 == null);
var state_31859__$1 = (function (){var statearr_31863 = state_31859;
(statearr_31863[(7)] = inst_31841__$1);

return statearr_31863;
})();
if(cljs.core.truth_(inst_31842)){
var statearr_31864_31887 = state_31859__$1;
(statearr_31864_31887[(1)] = (5));

} else {
var statearr_31865_31888 = state_31859__$1;
(statearr_31865_31888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (6))){
var inst_31841 = (state_31859[(7)]);
var inst_31846 = p.call(null,inst_31841);
var state_31859__$1 = state_31859;
if(cljs.core.truth_(inst_31846)){
var statearr_31866_31889 = state_31859__$1;
(statearr_31866_31889[(1)] = (8));

} else {
var statearr_31867_31890 = state_31859__$1;
(statearr_31867_31890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (3))){
var inst_31857 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31859__$1,inst_31857);
} else {
if((state_val_31860 === (2))){
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31859__$1,(4),ch);
} else {
if((state_val_31860 === (11))){
var inst_31849 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31868_31891 = state_31859__$1;
(statearr_31868_31891[(2)] = inst_31849);

(statearr_31868_31891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (9))){
var state_31859__$1 = state_31859;
var statearr_31869_31892 = state_31859__$1;
(statearr_31869_31892[(2)] = null);

(statearr_31869_31892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (5))){
var inst_31844 = cljs.core.async.close_BANG_.call(null,out);
var state_31859__$1 = state_31859;
var statearr_31870_31893 = state_31859__$1;
(statearr_31870_31893[(2)] = inst_31844);

(statearr_31870_31893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (10))){
var inst_31852 = (state_31859[(2)]);
var state_31859__$1 = (function (){var statearr_31871 = state_31859;
(statearr_31871[(8)] = inst_31852);

return statearr_31871;
})();
var statearr_31872_31894 = state_31859__$1;
(statearr_31872_31894[(2)] = null);

(statearr_31872_31894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (8))){
var inst_31841 = (state_31859[(7)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31859__$1,(11),out,inst_31841);
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
});})(c__19694__auto___31884,out))
;
return ((function (switch__19629__auto__,c__19694__auto___31884,out){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_31859){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_31859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e31877){if((e31877 instanceof Object)){
var ex__19633__auto__ = e31877;
var statearr_31878_31895 = state_31859;
(statearr_31878_31895[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31896 = state_31859;
state_31859 = G__31896;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_31859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_31859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___31884,out))
})();
var state__19696__auto__ = (function (){var statearr_31879 = f__19695__auto__.call(null);
(statearr_31879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___31884);

return statearr_31879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___31884,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args31897 = [];
var len__17550__auto___31900 = arguments.length;
var i__17551__auto___31901 = (0);
while(true){
if((i__17551__auto___31901 < len__17550__auto___31900)){
args31897.push((arguments[i__17551__auto___31901]));

var G__31902 = (i__17551__auto___31901 + (1));
i__17551__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var G__31899 = args31897.length;
switch (G__31899) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31897.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto__){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto__){
return (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (7))){
var inst_32065 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32071_32112 = state_32069__$1;
(statearr_32071_32112[(2)] = inst_32065);

(statearr_32071_32112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (20))){
var inst_32035 = (state_32069[(7)]);
var inst_32046 = (state_32069[(2)]);
var inst_32047 = cljs.core.next.call(null,inst_32035);
var inst_32021 = inst_32047;
var inst_32022 = null;
var inst_32023 = (0);
var inst_32024 = (0);
var state_32069__$1 = (function (){var statearr_32072 = state_32069;
(statearr_32072[(8)] = inst_32024);

(statearr_32072[(9)] = inst_32046);

(statearr_32072[(10)] = inst_32021);

(statearr_32072[(11)] = inst_32022);

(statearr_32072[(12)] = inst_32023);

return statearr_32072;
})();
var statearr_32073_32113 = state_32069__$1;
(statearr_32073_32113[(2)] = null);

(statearr_32073_32113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (1))){
var state_32069__$1 = state_32069;
var statearr_32074_32114 = state_32069__$1;
(statearr_32074_32114[(2)] = null);

(statearr_32074_32114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (4))){
var inst_32010 = (state_32069[(13)]);
var inst_32010__$1 = (state_32069[(2)]);
var inst_32011 = (inst_32010__$1 == null);
var state_32069__$1 = (function (){var statearr_32075 = state_32069;
(statearr_32075[(13)] = inst_32010__$1);

return statearr_32075;
})();
if(cljs.core.truth_(inst_32011)){
var statearr_32076_32115 = state_32069__$1;
(statearr_32076_32115[(1)] = (5));

} else {
var statearr_32077_32116 = state_32069__$1;
(statearr_32077_32116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (15))){
var state_32069__$1 = state_32069;
var statearr_32081_32117 = state_32069__$1;
(statearr_32081_32117[(2)] = null);

(statearr_32081_32117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (21))){
var state_32069__$1 = state_32069;
var statearr_32082_32118 = state_32069__$1;
(statearr_32082_32118[(2)] = null);

(statearr_32082_32118[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (13))){
var inst_32024 = (state_32069[(8)]);
var inst_32021 = (state_32069[(10)]);
var inst_32022 = (state_32069[(11)]);
var inst_32023 = (state_32069[(12)]);
var inst_32031 = (state_32069[(2)]);
var inst_32032 = (inst_32024 + (1));
var tmp32078 = inst_32021;
var tmp32079 = inst_32022;
var tmp32080 = inst_32023;
var inst_32021__$1 = tmp32078;
var inst_32022__$1 = tmp32079;
var inst_32023__$1 = tmp32080;
var inst_32024__$1 = inst_32032;
var state_32069__$1 = (function (){var statearr_32083 = state_32069;
(statearr_32083[(8)] = inst_32024__$1);

(statearr_32083[(10)] = inst_32021__$1);

(statearr_32083[(11)] = inst_32022__$1);

(statearr_32083[(14)] = inst_32031);

(statearr_32083[(12)] = inst_32023__$1);

return statearr_32083;
})();
var statearr_32084_32119 = state_32069__$1;
(statearr_32084_32119[(2)] = null);

(statearr_32084_32119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (22))){
var state_32069__$1 = state_32069;
var statearr_32085_32120 = state_32069__$1;
(statearr_32085_32120[(2)] = null);

(statearr_32085_32120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (6))){
var inst_32010 = (state_32069[(13)]);
var inst_32019 = f.call(null,inst_32010);
var inst_32020 = cljs.core.seq.call(null,inst_32019);
var inst_32021 = inst_32020;
var inst_32022 = null;
var inst_32023 = (0);
var inst_32024 = (0);
var state_32069__$1 = (function (){var statearr_32086 = state_32069;
(statearr_32086[(8)] = inst_32024);

(statearr_32086[(10)] = inst_32021);

(statearr_32086[(11)] = inst_32022);

(statearr_32086[(12)] = inst_32023);

return statearr_32086;
})();
var statearr_32087_32121 = state_32069__$1;
(statearr_32087_32121[(2)] = null);

(statearr_32087_32121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (17))){
var inst_32035 = (state_32069[(7)]);
var inst_32039 = cljs.core.chunk_first.call(null,inst_32035);
var inst_32040 = cljs.core.chunk_rest.call(null,inst_32035);
var inst_32041 = cljs.core.count.call(null,inst_32039);
var inst_32021 = inst_32040;
var inst_32022 = inst_32039;
var inst_32023 = inst_32041;
var inst_32024 = (0);
var state_32069__$1 = (function (){var statearr_32088 = state_32069;
(statearr_32088[(8)] = inst_32024);

(statearr_32088[(10)] = inst_32021);

(statearr_32088[(11)] = inst_32022);

(statearr_32088[(12)] = inst_32023);

return statearr_32088;
})();
var statearr_32089_32122 = state_32069__$1;
(statearr_32089_32122[(2)] = null);

(statearr_32089_32122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (3))){
var inst_32067 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32069__$1,inst_32067);
} else {
if((state_val_32070 === (12))){
var inst_32055 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32090_32123 = state_32069__$1;
(statearr_32090_32123[(2)] = inst_32055);

(statearr_32090_32123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (2))){
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32069__$1,(4),in$);
} else {
if((state_val_32070 === (23))){
var inst_32063 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32091_32124 = state_32069__$1;
(statearr_32091_32124[(2)] = inst_32063);

(statearr_32091_32124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (19))){
var inst_32050 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32092_32125 = state_32069__$1;
(statearr_32092_32125[(2)] = inst_32050);

(statearr_32092_32125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (11))){
var inst_32035 = (state_32069[(7)]);
var inst_32021 = (state_32069[(10)]);
var inst_32035__$1 = cljs.core.seq.call(null,inst_32021);
var state_32069__$1 = (function (){var statearr_32093 = state_32069;
(statearr_32093[(7)] = inst_32035__$1);

return statearr_32093;
})();
if(inst_32035__$1){
var statearr_32094_32126 = state_32069__$1;
(statearr_32094_32126[(1)] = (14));

} else {
var statearr_32095_32127 = state_32069__$1;
(statearr_32095_32127[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (9))){
var inst_32057 = (state_32069[(2)]);
var inst_32058 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32069__$1 = (function (){var statearr_32096 = state_32069;
(statearr_32096[(15)] = inst_32057);

return statearr_32096;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32097_32128 = state_32069__$1;
(statearr_32097_32128[(1)] = (21));

} else {
var statearr_32098_32129 = state_32069__$1;
(statearr_32098_32129[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (5))){
var inst_32013 = cljs.core.async.close_BANG_.call(null,out);
var state_32069__$1 = state_32069;
var statearr_32099_32130 = state_32069__$1;
(statearr_32099_32130[(2)] = inst_32013);

(statearr_32099_32130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (14))){
var inst_32035 = (state_32069[(7)]);
var inst_32037 = cljs.core.chunked_seq_QMARK_.call(null,inst_32035);
var state_32069__$1 = state_32069;
if(inst_32037){
var statearr_32100_32131 = state_32069__$1;
(statearr_32100_32131[(1)] = (17));

} else {
var statearr_32101_32132 = state_32069__$1;
(statearr_32101_32132[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (16))){
var inst_32053 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32102_32133 = state_32069__$1;
(statearr_32102_32133[(2)] = inst_32053);

(statearr_32102_32133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (10))){
var inst_32024 = (state_32069[(8)]);
var inst_32022 = (state_32069[(11)]);
var inst_32029 = cljs.core._nth.call(null,inst_32022,inst_32024);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32069__$1,(13),out,inst_32029);
} else {
if((state_val_32070 === (18))){
var inst_32035 = (state_32069[(7)]);
var inst_32044 = cljs.core.first.call(null,inst_32035);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32069__$1,(20),out,inst_32044);
} else {
if((state_val_32070 === (8))){
var inst_32024 = (state_32069[(8)]);
var inst_32023 = (state_32069[(12)]);
var inst_32026 = (inst_32024 < inst_32023);
var inst_32027 = inst_32026;
var state_32069__$1 = state_32069;
if(cljs.core.truth_(inst_32027)){
var statearr_32103_32134 = state_32069__$1;
(statearr_32103_32134[(1)] = (10));

} else {
var statearr_32104_32135 = state_32069__$1;
(statearr_32104_32135[(1)] = (11));

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
});})(c__19694__auto__))
;
return ((function (switch__19629__auto__,c__19694__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19630__auto____0 = (function (){
var statearr_32108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32108[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19630__auto__);

(statearr_32108[(1)] = (1));

return statearr_32108;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19630__auto____1 = (function (state_32069){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_32069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e32109){if((e32109 instanceof Object)){
var ex__19633__auto__ = e32109;
var statearr_32110_32136 = state_32069;
(statearr_32110_32136[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32137 = state_32069;
state_32069 = G__32137;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19630__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19630__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto__))
})();
var state__19696__auto__ = (function (){var statearr_32111 = f__19695__auto__.call(null);
(statearr_32111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto__);

return statearr_32111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto__))
);

return c__19694__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args32138 = [];
var len__17550__auto___32141 = arguments.length;
var i__17551__auto___32142 = (0);
while(true){
if((i__17551__auto___32142 < len__17550__auto___32141)){
args32138.push((arguments[i__17551__auto___32142]));

var G__32143 = (i__17551__auto___32142 + (1));
i__17551__auto___32142 = G__32143;
continue;
} else {
}
break;
}

var G__32140 = args32138.length;
switch (G__32140) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32138.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args32145 = [];
var len__17550__auto___32148 = arguments.length;
var i__17551__auto___32149 = (0);
while(true){
if((i__17551__auto___32149 < len__17550__auto___32148)){
args32145.push((arguments[i__17551__auto___32149]));

var G__32150 = (i__17551__auto___32149 + (1));
i__17551__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var G__32147 = args32145.length;
switch (G__32147) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32145.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args32152 = [];
var len__17550__auto___32203 = arguments.length;
var i__17551__auto___32204 = (0);
while(true){
if((i__17551__auto___32204 < len__17550__auto___32203)){
args32152.push((arguments[i__17551__auto___32204]));

var G__32205 = (i__17551__auto___32204 + (1));
i__17551__auto___32204 = G__32205;
continue;
} else {
}
break;
}

var G__32154 = args32152.length;
switch (G__32154) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32152.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19694__auto___32207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___32207,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___32207,out){
return (function (state_32178){
var state_val_32179 = (state_32178[(1)]);
if((state_val_32179 === (7))){
var inst_32173 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32180_32208 = state_32178__$1;
(statearr_32180_32208[(2)] = inst_32173);

(statearr_32180_32208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (1))){
var inst_32155 = null;
var state_32178__$1 = (function (){var statearr_32181 = state_32178;
(statearr_32181[(7)] = inst_32155);

return statearr_32181;
})();
var statearr_32182_32209 = state_32178__$1;
(statearr_32182_32209[(2)] = null);

(statearr_32182_32209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (4))){
var inst_32158 = (state_32178[(8)]);
var inst_32158__$1 = (state_32178[(2)]);
var inst_32159 = (inst_32158__$1 == null);
var inst_32160 = cljs.core.not.call(null,inst_32159);
var state_32178__$1 = (function (){var statearr_32183 = state_32178;
(statearr_32183[(8)] = inst_32158__$1);

return statearr_32183;
})();
if(inst_32160){
var statearr_32184_32210 = state_32178__$1;
(statearr_32184_32210[(1)] = (5));

} else {
var statearr_32185_32211 = state_32178__$1;
(statearr_32185_32211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (6))){
var state_32178__$1 = state_32178;
var statearr_32186_32212 = state_32178__$1;
(statearr_32186_32212[(2)] = null);

(statearr_32186_32212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (3))){
var inst_32175 = (state_32178[(2)]);
var inst_32176 = cljs.core.async.close_BANG_.call(null,out);
var state_32178__$1 = (function (){var statearr_32187 = state_32178;
(statearr_32187[(9)] = inst_32175);

return statearr_32187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32178__$1,inst_32176);
} else {
if((state_val_32179 === (2))){
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32178__$1,(4),ch);
} else {
if((state_val_32179 === (11))){
var inst_32158 = (state_32178[(8)]);
var inst_32167 = (state_32178[(2)]);
var inst_32155 = inst_32158;
var state_32178__$1 = (function (){var statearr_32188 = state_32178;
(statearr_32188[(7)] = inst_32155);

(statearr_32188[(10)] = inst_32167);

return statearr_32188;
})();
var statearr_32189_32213 = state_32178__$1;
(statearr_32189_32213[(2)] = null);

(statearr_32189_32213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (9))){
var inst_32158 = (state_32178[(8)]);
var state_32178__$1 = state_32178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32178__$1,(11),out,inst_32158);
} else {
if((state_val_32179 === (5))){
var inst_32155 = (state_32178[(7)]);
var inst_32158 = (state_32178[(8)]);
var inst_32162 = cljs.core._EQ_.call(null,inst_32158,inst_32155);
var state_32178__$1 = state_32178;
if(inst_32162){
var statearr_32191_32214 = state_32178__$1;
(statearr_32191_32214[(1)] = (8));

} else {
var statearr_32192_32215 = state_32178__$1;
(statearr_32192_32215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (10))){
var inst_32170 = (state_32178[(2)]);
var state_32178__$1 = state_32178;
var statearr_32193_32216 = state_32178__$1;
(statearr_32193_32216[(2)] = inst_32170);

(statearr_32193_32216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32179 === (8))){
var inst_32155 = (state_32178[(7)]);
var tmp32190 = inst_32155;
var inst_32155__$1 = tmp32190;
var state_32178__$1 = (function (){var statearr_32194 = state_32178;
(statearr_32194[(7)] = inst_32155__$1);

return statearr_32194;
})();
var statearr_32195_32217 = state_32178__$1;
(statearr_32195_32217[(2)] = null);

(statearr_32195_32217[(1)] = (2));


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
});})(c__19694__auto___32207,out))
;
return ((function (switch__19629__auto__,c__19694__auto___32207,out){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_32199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32199[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_32199[(1)] = (1));

return statearr_32199;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_32178){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_32178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e32200){if((e32200 instanceof Object)){
var ex__19633__auto__ = e32200;
var statearr_32201_32218 = state_32178;
(statearr_32201_32218[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32219 = state_32178;
state_32178 = G__32219;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_32178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_32178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___32207,out))
})();
var state__19696__auto__ = (function (){var statearr_32202 = f__19695__auto__.call(null);
(statearr_32202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___32207);

return statearr_32202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___32207,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args32220 = [];
var len__17550__auto___32290 = arguments.length;
var i__17551__auto___32291 = (0);
while(true){
if((i__17551__auto___32291 < len__17550__auto___32290)){
args32220.push((arguments[i__17551__auto___32291]));

var G__32292 = (i__17551__auto___32291 + (1));
i__17551__auto___32291 = G__32292;
continue;
} else {
}
break;
}

var G__32222 = args32220.length;
switch (G__32222) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32220.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19694__auto___32294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___32294,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___32294,out){
return (function (state_32260){
var state_val_32261 = (state_32260[(1)]);
if((state_val_32261 === (7))){
var inst_32256 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32262_32295 = state_32260__$1;
(statearr_32262_32295[(2)] = inst_32256);

(statearr_32262_32295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (1))){
var inst_32223 = (new Array(n));
var inst_32224 = inst_32223;
var inst_32225 = (0);
var state_32260__$1 = (function (){var statearr_32263 = state_32260;
(statearr_32263[(7)] = inst_32224);

(statearr_32263[(8)] = inst_32225);

return statearr_32263;
})();
var statearr_32264_32296 = state_32260__$1;
(statearr_32264_32296[(2)] = null);

(statearr_32264_32296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (4))){
var inst_32228 = (state_32260[(9)]);
var inst_32228__$1 = (state_32260[(2)]);
var inst_32229 = (inst_32228__$1 == null);
var inst_32230 = cljs.core.not.call(null,inst_32229);
var state_32260__$1 = (function (){var statearr_32265 = state_32260;
(statearr_32265[(9)] = inst_32228__$1);

return statearr_32265;
})();
if(inst_32230){
var statearr_32266_32297 = state_32260__$1;
(statearr_32266_32297[(1)] = (5));

} else {
var statearr_32267_32298 = state_32260__$1;
(statearr_32267_32298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (15))){
var inst_32250 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32268_32299 = state_32260__$1;
(statearr_32268_32299[(2)] = inst_32250);

(statearr_32268_32299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (13))){
var state_32260__$1 = state_32260;
var statearr_32269_32300 = state_32260__$1;
(statearr_32269_32300[(2)] = null);

(statearr_32269_32300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (6))){
var inst_32225 = (state_32260[(8)]);
var inst_32246 = (inst_32225 > (0));
var state_32260__$1 = state_32260;
if(cljs.core.truth_(inst_32246)){
var statearr_32270_32301 = state_32260__$1;
(statearr_32270_32301[(1)] = (12));

} else {
var statearr_32271_32302 = state_32260__$1;
(statearr_32271_32302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (3))){
var inst_32258 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32260__$1,inst_32258);
} else {
if((state_val_32261 === (12))){
var inst_32224 = (state_32260[(7)]);
var inst_32248 = cljs.core.vec.call(null,inst_32224);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32260__$1,(15),out,inst_32248);
} else {
if((state_val_32261 === (2))){
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32260__$1,(4),ch);
} else {
if((state_val_32261 === (11))){
var inst_32240 = (state_32260[(2)]);
var inst_32241 = (new Array(n));
var inst_32224 = inst_32241;
var inst_32225 = (0);
var state_32260__$1 = (function (){var statearr_32272 = state_32260;
(statearr_32272[(7)] = inst_32224);

(statearr_32272[(10)] = inst_32240);

(statearr_32272[(8)] = inst_32225);

return statearr_32272;
})();
var statearr_32273_32303 = state_32260__$1;
(statearr_32273_32303[(2)] = null);

(statearr_32273_32303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (9))){
var inst_32224 = (state_32260[(7)]);
var inst_32238 = cljs.core.vec.call(null,inst_32224);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32260__$1,(11),out,inst_32238);
} else {
if((state_val_32261 === (5))){
var inst_32224 = (state_32260[(7)]);
var inst_32228 = (state_32260[(9)]);
var inst_32233 = (state_32260[(11)]);
var inst_32225 = (state_32260[(8)]);
var inst_32232 = (inst_32224[inst_32225] = inst_32228);
var inst_32233__$1 = (inst_32225 + (1));
var inst_32234 = (inst_32233__$1 < n);
var state_32260__$1 = (function (){var statearr_32274 = state_32260;
(statearr_32274[(11)] = inst_32233__$1);

(statearr_32274[(12)] = inst_32232);

return statearr_32274;
})();
if(cljs.core.truth_(inst_32234)){
var statearr_32275_32304 = state_32260__$1;
(statearr_32275_32304[(1)] = (8));

} else {
var statearr_32276_32305 = state_32260__$1;
(statearr_32276_32305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (14))){
var inst_32253 = (state_32260[(2)]);
var inst_32254 = cljs.core.async.close_BANG_.call(null,out);
var state_32260__$1 = (function (){var statearr_32278 = state_32260;
(statearr_32278[(13)] = inst_32253);

return statearr_32278;
})();
var statearr_32279_32306 = state_32260__$1;
(statearr_32279_32306[(2)] = inst_32254);

(statearr_32279_32306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (10))){
var inst_32244 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32280_32307 = state_32260__$1;
(statearr_32280_32307[(2)] = inst_32244);

(statearr_32280_32307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (8))){
var inst_32224 = (state_32260[(7)]);
var inst_32233 = (state_32260[(11)]);
var tmp32277 = inst_32224;
var inst_32224__$1 = tmp32277;
var inst_32225 = inst_32233;
var state_32260__$1 = (function (){var statearr_32281 = state_32260;
(statearr_32281[(7)] = inst_32224__$1);

(statearr_32281[(8)] = inst_32225);

return statearr_32281;
})();
var statearr_32282_32308 = state_32260__$1;
(statearr_32282_32308[(2)] = null);

(statearr_32282_32308[(1)] = (2));


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
});})(c__19694__auto___32294,out))
;
return ((function (switch__19629__auto__,c__19694__auto___32294,out){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_32286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32286[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_32286[(1)] = (1));

return statearr_32286;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_32260){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_32260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e32287){if((e32287 instanceof Object)){
var ex__19633__auto__ = e32287;
var statearr_32288_32309 = state_32260;
(statearr_32288_32309[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32310 = state_32260;
state_32260 = G__32310;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_32260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_32260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___32294,out))
})();
var state__19696__auto__ = (function (){var statearr_32289 = f__19695__auto__.call(null);
(statearr_32289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___32294);

return statearr_32289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___32294,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args32311 = [];
var len__17550__auto___32385 = arguments.length;
var i__17551__auto___32386 = (0);
while(true){
if((i__17551__auto___32386 < len__17550__auto___32385)){
args32311.push((arguments[i__17551__auto___32386]));

var G__32387 = (i__17551__auto___32386 + (1));
i__17551__auto___32386 = G__32387;
continue;
} else {
}
break;
}

var G__32313 = args32311.length;
switch (G__32313) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32311.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19694__auto___32389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19694__auto___32389,out){
return (function (){
var f__19695__auto__ = (function (){var switch__19629__auto__ = ((function (c__19694__auto___32389,out){
return (function (state_32355){
var state_val_32356 = (state_32355[(1)]);
if((state_val_32356 === (7))){
var inst_32351 = (state_32355[(2)]);
var state_32355__$1 = state_32355;
var statearr_32357_32390 = state_32355__$1;
(statearr_32357_32390[(2)] = inst_32351);

(statearr_32357_32390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (1))){
var inst_32314 = [];
var inst_32315 = inst_32314;
var inst_32316 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32355__$1 = (function (){var statearr_32358 = state_32355;
(statearr_32358[(7)] = inst_32316);

(statearr_32358[(8)] = inst_32315);

return statearr_32358;
})();
var statearr_32359_32391 = state_32355__$1;
(statearr_32359_32391[(2)] = null);

(statearr_32359_32391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (4))){
var inst_32319 = (state_32355[(9)]);
var inst_32319__$1 = (state_32355[(2)]);
var inst_32320 = (inst_32319__$1 == null);
var inst_32321 = cljs.core.not.call(null,inst_32320);
var state_32355__$1 = (function (){var statearr_32360 = state_32355;
(statearr_32360[(9)] = inst_32319__$1);

return statearr_32360;
})();
if(inst_32321){
var statearr_32361_32392 = state_32355__$1;
(statearr_32361_32392[(1)] = (5));

} else {
var statearr_32362_32393 = state_32355__$1;
(statearr_32362_32393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (15))){
var inst_32345 = (state_32355[(2)]);
var state_32355__$1 = state_32355;
var statearr_32363_32394 = state_32355__$1;
(statearr_32363_32394[(2)] = inst_32345);

(statearr_32363_32394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (13))){
var state_32355__$1 = state_32355;
var statearr_32364_32395 = state_32355__$1;
(statearr_32364_32395[(2)] = null);

(statearr_32364_32395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (6))){
var inst_32315 = (state_32355[(8)]);
var inst_32340 = inst_32315.length;
var inst_32341 = (inst_32340 > (0));
var state_32355__$1 = state_32355;
if(cljs.core.truth_(inst_32341)){
var statearr_32365_32396 = state_32355__$1;
(statearr_32365_32396[(1)] = (12));

} else {
var statearr_32366_32397 = state_32355__$1;
(statearr_32366_32397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (3))){
var inst_32353 = (state_32355[(2)]);
var state_32355__$1 = state_32355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32355__$1,inst_32353);
} else {
if((state_val_32356 === (12))){
var inst_32315 = (state_32355[(8)]);
var inst_32343 = cljs.core.vec.call(null,inst_32315);
var state_32355__$1 = state_32355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32355__$1,(15),out,inst_32343);
} else {
if((state_val_32356 === (2))){
var state_32355__$1 = state_32355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32355__$1,(4),ch);
} else {
if((state_val_32356 === (11))){
var inst_32319 = (state_32355[(9)]);
var inst_32323 = (state_32355[(10)]);
var inst_32333 = (state_32355[(2)]);
var inst_32334 = [];
var inst_32335 = inst_32334.push(inst_32319);
var inst_32315 = inst_32334;
var inst_32316 = inst_32323;
var state_32355__$1 = (function (){var statearr_32367 = state_32355;
(statearr_32367[(11)] = inst_32335);

(statearr_32367[(12)] = inst_32333);

(statearr_32367[(7)] = inst_32316);

(statearr_32367[(8)] = inst_32315);

return statearr_32367;
})();
var statearr_32368_32398 = state_32355__$1;
(statearr_32368_32398[(2)] = null);

(statearr_32368_32398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (9))){
var inst_32315 = (state_32355[(8)]);
var inst_32331 = cljs.core.vec.call(null,inst_32315);
var state_32355__$1 = state_32355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32355__$1,(11),out,inst_32331);
} else {
if((state_val_32356 === (5))){
var inst_32319 = (state_32355[(9)]);
var inst_32316 = (state_32355[(7)]);
var inst_32323 = (state_32355[(10)]);
var inst_32323__$1 = f.call(null,inst_32319);
var inst_32324 = cljs.core._EQ_.call(null,inst_32323__$1,inst_32316);
var inst_32325 = cljs.core.keyword_identical_QMARK_.call(null,inst_32316,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32326 = (inst_32324) || (inst_32325);
var state_32355__$1 = (function (){var statearr_32369 = state_32355;
(statearr_32369[(10)] = inst_32323__$1);

return statearr_32369;
})();
if(cljs.core.truth_(inst_32326)){
var statearr_32370_32399 = state_32355__$1;
(statearr_32370_32399[(1)] = (8));

} else {
var statearr_32371_32400 = state_32355__$1;
(statearr_32371_32400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (14))){
var inst_32348 = (state_32355[(2)]);
var inst_32349 = cljs.core.async.close_BANG_.call(null,out);
var state_32355__$1 = (function (){var statearr_32373 = state_32355;
(statearr_32373[(13)] = inst_32348);

return statearr_32373;
})();
var statearr_32374_32401 = state_32355__$1;
(statearr_32374_32401[(2)] = inst_32349);

(statearr_32374_32401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (10))){
var inst_32338 = (state_32355[(2)]);
var state_32355__$1 = state_32355;
var statearr_32375_32402 = state_32355__$1;
(statearr_32375_32402[(2)] = inst_32338);

(statearr_32375_32402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32356 === (8))){
var inst_32319 = (state_32355[(9)]);
var inst_32315 = (state_32355[(8)]);
var inst_32323 = (state_32355[(10)]);
var inst_32328 = inst_32315.push(inst_32319);
var tmp32372 = inst_32315;
var inst_32315__$1 = tmp32372;
var inst_32316 = inst_32323;
var state_32355__$1 = (function (){var statearr_32376 = state_32355;
(statearr_32376[(14)] = inst_32328);

(statearr_32376[(7)] = inst_32316);

(statearr_32376[(8)] = inst_32315__$1);

return statearr_32376;
})();
var statearr_32377_32403 = state_32355__$1;
(statearr_32377_32403[(2)] = null);

(statearr_32377_32403[(1)] = (2));


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
});})(c__19694__auto___32389,out))
;
return ((function (switch__19629__auto__,c__19694__auto___32389,out){
return (function() {
var cljs$core$async$state_machine__19630__auto__ = null;
var cljs$core$async$state_machine__19630__auto____0 = (function (){
var statearr_32381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32381[(0)] = cljs$core$async$state_machine__19630__auto__);

(statearr_32381[(1)] = (1));

return statearr_32381;
});
var cljs$core$async$state_machine__19630__auto____1 = (function (state_32355){
while(true){
var ret_value__19631__auto__ = (function (){try{while(true){
var result__19632__auto__ = switch__19629__auto__.call(null,state_32355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19632__auto__;
}
break;
}
}catch (e32382){if((e32382 instanceof Object)){
var ex__19633__auto__ = e32382;
var statearr_32383_32404 = state_32355;
(statearr_32383_32404[(5)] = ex__19633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32405 = state_32355;
state_32355 = G__32405;
continue;
} else {
return ret_value__19631__auto__;
}
break;
}
});
cljs$core$async$state_machine__19630__auto__ = function(state_32355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19630__auto____1.call(this,state_32355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19630__auto____0;
cljs$core$async$state_machine__19630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19630__auto____1;
return cljs$core$async$state_machine__19630__auto__;
})()
;})(switch__19629__auto__,c__19694__auto___32389,out))
})();
var state__19696__auto__ = (function (){var statearr_32384 = f__19695__auto__.call(null);
(statearr_32384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19694__auto___32389);

return statearr_32384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19696__auto__);
});})(c__19694__auto___32389,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map