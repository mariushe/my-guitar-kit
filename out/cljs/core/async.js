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
if(typeof cljs.core.async.t29666 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29666 = (function (fn_handler,f,meta29667){
this.fn_handler = fn_handler;
this.f = f;
this.meta29667 = meta29667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29668,meta29667__$1){
var self__ = this;
var _29668__$1 = this;
return (new cljs.core.async.t29666(self__.fn_handler,self__.f,meta29667__$1));
});

cljs.core.async.t29666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29668){
var self__ = this;
var _29668__$1 = this;
return self__.meta29667;
});

cljs.core.async.t29666.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29667","meta29667",1133533025,null)], null);
});

cljs.core.async.t29666.cljs$lang$type = true;

cljs.core.async.t29666.cljs$lang$ctorStr = "cljs.core.async/t29666";

cljs.core.async.t29666.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t29666");
});

cljs.core.async.__GT_t29666 = (function cljs$core$async$fn_handler_$___GT_t29666(fn_handler__$1,f__$1,meta29667){
return (new cljs.core.async.t29666(fn_handler__$1,f__$1,meta29667));
});

}

return (new cljs.core.async.t29666(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args29671 = [];
var len__17508__auto___29674 = arguments.length;
var i__17509__auto___29675 = (0);
while(true){
if((i__17509__auto___29675 < len__17508__auto___29674)){
args29671.push((arguments[i__17509__auto___29675]));

var G__29676 = (i__17509__auto___29675 + (1));
i__17509__auto___29675 = G__29676;
continue;
} else {
}
break;
}

var G__29673 = args29671.length;
switch (G__29673) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29671.length)].join('')));

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
var args29678 = [];
var len__17508__auto___29681 = arguments.length;
var i__17509__auto___29682 = (0);
while(true){
if((i__17509__auto___29682 < len__17508__auto___29681)){
args29678.push((arguments[i__17509__auto___29682]));

var G__29683 = (i__17509__auto___29682 + (1));
i__17509__auto___29682 = G__29683;
continue;
} else {
}
break;
}

var G__29680 = args29678.length;
switch (G__29680) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29678.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29685 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29685);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29685,ret){
return (function (){
return fn1.call(null,val_29685);
});})(val_29685,ret))
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
var args29686 = [];
var len__17508__auto___29689 = arguments.length;
var i__17509__auto___29690 = (0);
while(true){
if((i__17509__auto___29690 < len__17508__auto___29689)){
args29686.push((arguments[i__17509__auto___29690]));

var G__29691 = (i__17509__auto___29690 + (1));
i__17509__auto___29690 = G__29691;
continue;
} else {
}
break;
}

var G__29688 = args29686.length;
switch (G__29688) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29686.length)].join('')));

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
var n__17353__auto___29693 = n;
var x_29694 = (0);
while(true){
if((x_29694 < n__17353__auto___29693)){
(a[x_29694] = (0));

var G__29695 = (x_29694 + (1));
x_29694 = G__29695;
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

var G__29696 = (i + (1));
i = G__29696;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29700 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29700 = (function (alt_flag,flag,meta29701){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29701 = meta29701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29702,meta29701__$1){
var self__ = this;
var _29702__$1 = this;
return (new cljs.core.async.t29700(self__.alt_flag,self__.flag,meta29701__$1));
});})(flag))
;

cljs.core.async.t29700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29702){
var self__ = this;
var _29702__$1 = this;
return self__.meta29701;
});})(flag))
;

cljs.core.async.t29700.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29700.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29701","meta29701",-1416876803,null)], null);
});})(flag))
;

cljs.core.async.t29700.cljs$lang$type = true;

cljs.core.async.t29700.cljs$lang$ctorStr = "cljs.core.async/t29700";

cljs.core.async.t29700.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t29700");
});})(flag))
;

cljs.core.async.__GT_t29700 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29700(alt_flag__$1,flag__$1,meta29701){
return (new cljs.core.async.t29700(alt_flag__$1,flag__$1,meta29701));
});})(flag))
;

}

return (new cljs.core.async.t29700(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29706 = (function (alt_handler,flag,cb,meta29707){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29707 = meta29707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29708,meta29707__$1){
var self__ = this;
var _29708__$1 = this;
return (new cljs.core.async.t29706(self__.alt_handler,self__.flag,self__.cb,meta29707__$1));
});

cljs.core.async.t29706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29708){
var self__ = this;
var _29708__$1 = this;
return self__.meta29707;
});

cljs.core.async.t29706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29707","meta29707",1345207050,null)], null);
});

cljs.core.async.t29706.cljs$lang$type = true;

cljs.core.async.t29706.cljs$lang$ctorStr = "cljs.core.async/t29706";

cljs.core.async.t29706.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t29706");
});

cljs.core.async.__GT_t29706 = (function cljs$core$async$alt_handler_$___GT_t29706(alt_handler__$1,flag__$1,cb__$1,meta29707){
return (new cljs.core.async.t29706(alt_handler__$1,flag__$1,cb__$1,meta29707));
});

}

return (new cljs.core.async.t29706(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29709_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29709_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29710_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16469__auto__ = wport;
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29711 = (i + (1));
i = G__29711;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16469__auto__ = ret;
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16457__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16457__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16457__auto__;
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
var args__17515__auto__ = [];
var len__17508__auto___29717 = arguments.length;
var i__17509__auto___29718 = (0);
while(true){
if((i__17509__auto___29718 < len__17508__auto___29717)){
args__17515__auto__.push((arguments[i__17509__auto___29718]));

var G__29719 = (i__17509__auto___29718 + (1));
i__17509__auto___29718 = G__29719;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((1) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17516__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29714){
var map__29715 = p__29714;
var map__29715__$1 = ((((!((map__29715 == null)))?((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29715):map__29715);
var opts = map__29715__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29712){
var G__29713 = cljs.core.first.call(null,seq29712);
var seq29712__$1 = cljs.core.next.call(null,seq29712);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29713,seq29712__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args29720 = [];
var len__17508__auto___29770 = arguments.length;
var i__17509__auto___29771 = (0);
while(true){
if((i__17509__auto___29771 < len__17508__auto___29770)){
args29720.push((arguments[i__17509__auto___29771]));

var G__29772 = (i__17509__auto___29771 + (1));
i__17509__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var G__29722 = args29720.length;
switch (G__29722) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29720.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19652__auto___29774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___29774){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___29774){
return (function (state_29746){
var state_val_29747 = (state_29746[(1)]);
if((state_val_29747 === (7))){
var inst_29742 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29748_29775 = state_29746__$1;
(statearr_29748_29775[(2)] = inst_29742);

(statearr_29748_29775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (1))){
var state_29746__$1 = state_29746;
var statearr_29749_29776 = state_29746__$1;
(statearr_29749_29776[(2)] = null);

(statearr_29749_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (4))){
var inst_29725 = (state_29746[(7)]);
var inst_29725__$1 = (state_29746[(2)]);
var inst_29726 = (inst_29725__$1 == null);
var state_29746__$1 = (function (){var statearr_29750 = state_29746;
(statearr_29750[(7)] = inst_29725__$1);

return statearr_29750;
})();
if(cljs.core.truth_(inst_29726)){
var statearr_29751_29777 = state_29746__$1;
(statearr_29751_29777[(1)] = (5));

} else {
var statearr_29752_29778 = state_29746__$1;
(statearr_29752_29778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (13))){
var state_29746__$1 = state_29746;
var statearr_29753_29779 = state_29746__$1;
(statearr_29753_29779[(2)] = null);

(statearr_29753_29779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (6))){
var inst_29725 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29746__$1,(11),to,inst_29725);
} else {
if((state_val_29747 === (3))){
var inst_29744 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29746__$1,inst_29744);
} else {
if((state_val_29747 === (12))){
var state_29746__$1 = state_29746;
var statearr_29754_29780 = state_29746__$1;
(statearr_29754_29780[(2)] = null);

(statearr_29754_29780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (2))){
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(4),from);
} else {
if((state_val_29747 === (11))){
var inst_29735 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29735)){
var statearr_29755_29781 = state_29746__$1;
(statearr_29755_29781[(1)] = (12));

} else {
var statearr_29756_29782 = state_29746__$1;
(statearr_29756_29782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (9))){
var state_29746__$1 = state_29746;
var statearr_29757_29783 = state_29746__$1;
(statearr_29757_29783[(2)] = null);

(statearr_29757_29783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (5))){
var state_29746__$1 = state_29746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29758_29784 = state_29746__$1;
(statearr_29758_29784[(1)] = (8));

} else {
var statearr_29759_29785 = state_29746__$1;
(statearr_29759_29785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (14))){
var inst_29740 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29760_29786 = state_29746__$1;
(statearr_29760_29786[(2)] = inst_29740);

(statearr_29760_29786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (10))){
var inst_29732 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29761_29787 = state_29746__$1;
(statearr_29761_29787[(2)] = inst_29732);

(statearr_29761_29787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (8))){
var inst_29729 = cljs.core.async.close_BANG_.call(null,to);
var state_29746__$1 = state_29746;
var statearr_29762_29788 = state_29746__$1;
(statearr_29762_29788[(2)] = inst_29729);

(statearr_29762_29788[(1)] = (10));


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
});})(c__19652__auto___29774))
;
return ((function (switch__19587__auto__,c__19652__auto___29774){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_29766 = [null,null,null,null,null,null,null,null];
(statearr_29766[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_29766[(1)] = (1));

return statearr_29766;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_29746){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_29746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e29767){if((e29767 instanceof Object)){
var ex__19591__auto__ = e29767;
var statearr_29768_29789 = state_29746;
(statearr_29768_29789[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29790 = state_29746;
state_29746 = G__29790;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_29746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_29746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___29774))
})();
var state__19654__auto__ = (function (){var statearr_29769 = f__19653__auto__.call(null);
(statearr_29769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___29774);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___29774))
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
return (function (p__29974){
var vec__29975 = p__29974;
var v = cljs.core.nth.call(null,vec__29975,(0),null);
var p = cljs.core.nth.call(null,vec__29975,(1),null);
var job = vec__29975;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19652__auto___30157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___30157,res,vec__29975,v,p,job,jobs,results){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___30157,res,vec__29975,v,p,job,jobs,results){
return (function (state_29980){
var state_val_29981 = (state_29980[(1)]);
if((state_val_29981 === (1))){
var state_29980__$1 = state_29980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29980__$1,(2),res,v);
} else {
if((state_val_29981 === (2))){
var inst_29977 = (state_29980[(2)]);
var inst_29978 = cljs.core.async.close_BANG_.call(null,res);
var state_29980__$1 = (function (){var statearr_29982 = state_29980;
(statearr_29982[(7)] = inst_29977);

return statearr_29982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29980__$1,inst_29978);
} else {
return null;
}
}
});})(c__19652__auto___30157,res,vec__29975,v,p,job,jobs,results))
;
return ((function (switch__19587__auto__,c__19652__auto___30157,res,vec__29975,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_29986 = [null,null,null,null,null,null,null,null];
(statearr_29986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_29986[(1)] = (1));

return statearr_29986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_29980){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_29980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e29987){if((e29987 instanceof Object)){
var ex__19591__auto__ = e29987;
var statearr_29988_30158 = state_29980;
(statearr_29988_30158[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30159 = state_29980;
state_29980 = G__30159;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_29980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_29980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___30157,res,vec__29975,v,p,job,jobs,results))
})();
var state__19654__auto__ = (function (){var statearr_29989 = f__19653__auto__.call(null);
(statearr_29989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___30157);

return statearr_29989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___30157,res,vec__29975,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29990){
var vec__29991 = p__29990;
var v = cljs.core.nth.call(null,vec__29991,(0),null);
var p = cljs.core.nth.call(null,vec__29991,(1),null);
var job = vec__29991;
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
var n__17353__auto___30160 = n;
var __30161 = (0);
while(true){
if((__30161 < n__17353__auto___30160)){
var G__29992_30162 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29992_30162) {
case "compute":
var c__19652__auto___30164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30161,c__19652__auto___30164,G__29992_30162,n__17353__auto___30160,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (__30161,c__19652__auto___30164,G__29992_30162,n__17353__auto___30160,jobs,results,process,async){
return (function (state_30005){
var state_val_30006 = (state_30005[(1)]);
if((state_val_30006 === (1))){
var state_30005__$1 = state_30005;
var statearr_30007_30165 = state_30005__$1;
(statearr_30007_30165[(2)] = null);

(statearr_30007_30165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30006 === (2))){
var state_30005__$1 = state_30005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30005__$1,(4),jobs);
} else {
if((state_val_30006 === (3))){
var inst_30003 = (state_30005[(2)]);
var state_30005__$1 = state_30005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30005__$1,inst_30003);
} else {
if((state_val_30006 === (4))){
var inst_29995 = (state_30005[(2)]);
var inst_29996 = process.call(null,inst_29995);
var state_30005__$1 = state_30005;
if(cljs.core.truth_(inst_29996)){
var statearr_30008_30166 = state_30005__$1;
(statearr_30008_30166[(1)] = (5));

} else {
var statearr_30009_30167 = state_30005__$1;
(statearr_30009_30167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30006 === (5))){
var state_30005__$1 = state_30005;
var statearr_30010_30168 = state_30005__$1;
(statearr_30010_30168[(2)] = null);

(statearr_30010_30168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30006 === (6))){
var state_30005__$1 = state_30005;
var statearr_30011_30169 = state_30005__$1;
(statearr_30011_30169[(2)] = null);

(statearr_30011_30169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30006 === (7))){
var inst_30001 = (state_30005[(2)]);
var state_30005__$1 = state_30005;
var statearr_30012_30170 = state_30005__$1;
(statearr_30012_30170[(2)] = inst_30001);

(statearr_30012_30170[(1)] = (3));


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
});})(__30161,c__19652__auto___30164,G__29992_30162,n__17353__auto___30160,jobs,results,process,async))
;
return ((function (__30161,switch__19587__auto__,c__19652__auto___30164,G__29992_30162,n__17353__auto___30160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_30016 = [null,null,null,null,null,null,null];
(statearr_30016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_30016[(1)] = (1));

return statearr_30016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_30005){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30017){if((e30017 instanceof Object)){
var ex__19591__auto__ = e30017;
var statearr_30018_30171 = state_30005;
(statearr_30018_30171[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30172 = state_30005;
state_30005 = G__30172;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_30005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_30005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(__30161,switch__19587__auto__,c__19652__auto___30164,G__29992_30162,n__17353__auto___30160,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_30019 = f__19653__auto__.call(null);
(statearr_30019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___30164);

return statearr_30019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(__30161,c__19652__auto___30164,G__29992_30162,n__17353__auto___30160,jobs,results,process,async))
);


break;
case "async":
var c__19652__auto___30173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30161,c__19652__auto___30173,G__29992_30162,n__17353__auto___30160,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (__30161,c__19652__auto___30173,G__29992_30162,n__17353__auto___30160,jobs,results,process,async){
return (function (state_30032){
var state_val_30033 = (state_30032[(1)]);
if((state_val_30033 === (1))){
var state_30032__$1 = state_30032;
var statearr_30034_30174 = state_30032__$1;
(statearr_30034_30174[(2)] = null);

(statearr_30034_30174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30033 === (2))){
var state_30032__$1 = state_30032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30032__$1,(4),jobs);
} else {
if((state_val_30033 === (3))){
var inst_30030 = (state_30032[(2)]);
var state_30032__$1 = state_30032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30032__$1,inst_30030);
} else {
if((state_val_30033 === (4))){
var inst_30022 = (state_30032[(2)]);
var inst_30023 = async.call(null,inst_30022);
var state_30032__$1 = state_30032;
if(cljs.core.truth_(inst_30023)){
var statearr_30035_30175 = state_30032__$1;
(statearr_30035_30175[(1)] = (5));

} else {
var statearr_30036_30176 = state_30032__$1;
(statearr_30036_30176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30033 === (5))){
var state_30032__$1 = state_30032;
var statearr_30037_30177 = state_30032__$1;
(statearr_30037_30177[(2)] = null);

(statearr_30037_30177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30033 === (6))){
var state_30032__$1 = state_30032;
var statearr_30038_30178 = state_30032__$1;
(statearr_30038_30178[(2)] = null);

(statearr_30038_30178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30033 === (7))){
var inst_30028 = (state_30032[(2)]);
var state_30032__$1 = state_30032;
var statearr_30039_30179 = state_30032__$1;
(statearr_30039_30179[(2)] = inst_30028);

(statearr_30039_30179[(1)] = (3));


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
});})(__30161,c__19652__auto___30173,G__29992_30162,n__17353__auto___30160,jobs,results,process,async))
;
return ((function (__30161,switch__19587__auto__,c__19652__auto___30173,G__29992_30162,n__17353__auto___30160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_30043 = [null,null,null,null,null,null,null];
(statearr_30043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_30043[(1)] = (1));

return statearr_30043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_30032){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30044){if((e30044 instanceof Object)){
var ex__19591__auto__ = e30044;
var statearr_30045_30180 = state_30032;
(statearr_30045_30180[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30181 = state_30032;
state_30032 = G__30181;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_30032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_30032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(__30161,switch__19587__auto__,c__19652__auto___30173,G__29992_30162,n__17353__auto___30160,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_30046 = f__19653__auto__.call(null);
(statearr_30046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___30173);

return statearr_30046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(__30161,c__19652__auto___30173,G__29992_30162,n__17353__auto___30160,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30182 = (__30161 + (1));
__30161 = G__30182;
continue;
} else {
}
break;
}

var c__19652__auto___30183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___30183,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___30183,jobs,results,process,async){
return (function (state_30068){
var state_val_30069 = (state_30068[(1)]);
if((state_val_30069 === (1))){
var state_30068__$1 = state_30068;
var statearr_30070_30184 = state_30068__$1;
(statearr_30070_30184[(2)] = null);

(statearr_30070_30184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (2))){
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30068__$1,(4),from);
} else {
if((state_val_30069 === (3))){
var inst_30066 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30068__$1,inst_30066);
} else {
if((state_val_30069 === (4))){
var inst_30049 = (state_30068[(7)]);
var inst_30049__$1 = (state_30068[(2)]);
var inst_30050 = (inst_30049__$1 == null);
var state_30068__$1 = (function (){var statearr_30071 = state_30068;
(statearr_30071[(7)] = inst_30049__$1);

return statearr_30071;
})();
if(cljs.core.truth_(inst_30050)){
var statearr_30072_30185 = state_30068__$1;
(statearr_30072_30185[(1)] = (5));

} else {
var statearr_30073_30186 = state_30068__$1;
(statearr_30073_30186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (5))){
var inst_30052 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30068__$1 = state_30068;
var statearr_30074_30187 = state_30068__$1;
(statearr_30074_30187[(2)] = inst_30052);

(statearr_30074_30187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (6))){
var inst_30049 = (state_30068[(7)]);
var inst_30054 = (state_30068[(8)]);
var inst_30054__$1 = cljs.core.async.chan.call(null,(1));
var inst_30055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30056 = [inst_30049,inst_30054__$1];
var inst_30057 = (new cljs.core.PersistentVector(null,2,(5),inst_30055,inst_30056,null));
var state_30068__$1 = (function (){var statearr_30075 = state_30068;
(statearr_30075[(8)] = inst_30054__$1);

return statearr_30075;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30068__$1,(8),jobs,inst_30057);
} else {
if((state_val_30069 === (7))){
var inst_30064 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30076_30188 = state_30068__$1;
(statearr_30076_30188[(2)] = inst_30064);

(statearr_30076_30188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (8))){
var inst_30054 = (state_30068[(8)]);
var inst_30059 = (state_30068[(2)]);
var state_30068__$1 = (function (){var statearr_30077 = state_30068;
(statearr_30077[(9)] = inst_30059);

return statearr_30077;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30068__$1,(9),results,inst_30054);
} else {
if((state_val_30069 === (9))){
var inst_30061 = (state_30068[(2)]);
var state_30068__$1 = (function (){var statearr_30078 = state_30068;
(statearr_30078[(10)] = inst_30061);

return statearr_30078;
})();
var statearr_30079_30189 = state_30068__$1;
(statearr_30079_30189[(2)] = null);

(statearr_30079_30189[(1)] = (2));


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
});})(c__19652__auto___30183,jobs,results,process,async))
;
return ((function (switch__19587__auto__,c__19652__auto___30183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_30083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_30083[(1)] = (1));

return statearr_30083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_30068){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30084){if((e30084 instanceof Object)){
var ex__19591__auto__ = e30084;
var statearr_30085_30190 = state_30068;
(statearr_30085_30190[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30191 = state_30068;
state_30068 = G__30191;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_30068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_30068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___30183,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_30086 = f__19653__auto__.call(null);
(statearr_30086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___30183);

return statearr_30086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___30183,jobs,results,process,async))
);


var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,jobs,results,process,async){
return (function (state_30124){
var state_val_30125 = (state_30124[(1)]);
if((state_val_30125 === (7))){
var inst_30120 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30126_30192 = state_30124__$1;
(statearr_30126_30192[(2)] = inst_30120);

(statearr_30126_30192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (20))){
var state_30124__$1 = state_30124;
var statearr_30127_30193 = state_30124__$1;
(statearr_30127_30193[(2)] = null);

(statearr_30127_30193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (1))){
var state_30124__$1 = state_30124;
var statearr_30128_30194 = state_30124__$1;
(statearr_30128_30194[(2)] = null);

(statearr_30128_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (4))){
var inst_30089 = (state_30124[(7)]);
var inst_30089__$1 = (state_30124[(2)]);
var inst_30090 = (inst_30089__$1 == null);
var state_30124__$1 = (function (){var statearr_30129 = state_30124;
(statearr_30129[(7)] = inst_30089__$1);

return statearr_30129;
})();
if(cljs.core.truth_(inst_30090)){
var statearr_30130_30195 = state_30124__$1;
(statearr_30130_30195[(1)] = (5));

} else {
var statearr_30131_30196 = state_30124__$1;
(statearr_30131_30196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (15))){
var inst_30102 = (state_30124[(8)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30124__$1,(18),to,inst_30102);
} else {
if((state_val_30125 === (21))){
var inst_30115 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30132_30197 = state_30124__$1;
(statearr_30132_30197[(2)] = inst_30115);

(statearr_30132_30197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (13))){
var inst_30117 = (state_30124[(2)]);
var state_30124__$1 = (function (){var statearr_30133 = state_30124;
(statearr_30133[(9)] = inst_30117);

return statearr_30133;
})();
var statearr_30134_30198 = state_30124__$1;
(statearr_30134_30198[(2)] = null);

(statearr_30134_30198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (6))){
var inst_30089 = (state_30124[(7)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(11),inst_30089);
} else {
if((state_val_30125 === (17))){
var inst_30110 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
if(cljs.core.truth_(inst_30110)){
var statearr_30135_30199 = state_30124__$1;
(statearr_30135_30199[(1)] = (19));

} else {
var statearr_30136_30200 = state_30124__$1;
(statearr_30136_30200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (3))){
var inst_30122 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30124__$1,inst_30122);
} else {
if((state_val_30125 === (12))){
var inst_30099 = (state_30124[(10)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(14),inst_30099);
} else {
if((state_val_30125 === (2))){
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(4),results);
} else {
if((state_val_30125 === (19))){
var state_30124__$1 = state_30124;
var statearr_30137_30201 = state_30124__$1;
(statearr_30137_30201[(2)] = null);

(statearr_30137_30201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (11))){
var inst_30099 = (state_30124[(2)]);
var state_30124__$1 = (function (){var statearr_30138 = state_30124;
(statearr_30138[(10)] = inst_30099);

return statearr_30138;
})();
var statearr_30139_30202 = state_30124__$1;
(statearr_30139_30202[(2)] = null);

(statearr_30139_30202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (9))){
var state_30124__$1 = state_30124;
var statearr_30140_30203 = state_30124__$1;
(statearr_30140_30203[(2)] = null);

(statearr_30140_30203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (5))){
var state_30124__$1 = state_30124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30141_30204 = state_30124__$1;
(statearr_30141_30204[(1)] = (8));

} else {
var statearr_30142_30205 = state_30124__$1;
(statearr_30142_30205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (14))){
var inst_30102 = (state_30124[(8)]);
var inst_30104 = (state_30124[(11)]);
var inst_30102__$1 = (state_30124[(2)]);
var inst_30103 = (inst_30102__$1 == null);
var inst_30104__$1 = cljs.core.not.call(null,inst_30103);
var state_30124__$1 = (function (){var statearr_30143 = state_30124;
(statearr_30143[(8)] = inst_30102__$1);

(statearr_30143[(11)] = inst_30104__$1);

return statearr_30143;
})();
if(inst_30104__$1){
var statearr_30144_30206 = state_30124__$1;
(statearr_30144_30206[(1)] = (15));

} else {
var statearr_30145_30207 = state_30124__$1;
(statearr_30145_30207[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (16))){
var inst_30104 = (state_30124[(11)]);
var state_30124__$1 = state_30124;
var statearr_30146_30208 = state_30124__$1;
(statearr_30146_30208[(2)] = inst_30104);

(statearr_30146_30208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (10))){
var inst_30096 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30147_30209 = state_30124__$1;
(statearr_30147_30209[(2)] = inst_30096);

(statearr_30147_30209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (18))){
var inst_30107 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30148_30210 = state_30124__$1;
(statearr_30148_30210[(2)] = inst_30107);

(statearr_30148_30210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (8))){
var inst_30093 = cljs.core.async.close_BANG_.call(null,to);
var state_30124__$1 = state_30124;
var statearr_30149_30211 = state_30124__$1;
(statearr_30149_30211[(2)] = inst_30093);

(statearr_30149_30211[(1)] = (10));


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
});})(c__19652__auto__,jobs,results,process,async))
;
return ((function (switch__19587__auto__,c__19652__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_30153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_30153[(1)] = (1));

return statearr_30153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_30124){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30154){if((e30154 instanceof Object)){
var ex__19591__auto__ = e30154;
var statearr_30155_30212 = state_30124;
(statearr_30155_30212[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30213 = state_30124;
state_30124 = G__30213;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_30124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_30124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_30156 = f__19653__auto__.call(null);
(statearr_30156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_30156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__,jobs,results,process,async))
);

return c__19652__auto__;
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
var args30214 = [];
var len__17508__auto___30217 = arguments.length;
var i__17509__auto___30218 = (0);
while(true){
if((i__17509__auto___30218 < len__17508__auto___30217)){
args30214.push((arguments[i__17509__auto___30218]));

var G__30219 = (i__17509__auto___30218 + (1));
i__17509__auto___30218 = G__30219;
continue;
} else {
}
break;
}

var G__30216 = args30214.length;
switch (G__30216) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30214.length)].join('')));

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
var args30221 = [];
var len__17508__auto___30224 = arguments.length;
var i__17509__auto___30225 = (0);
while(true){
if((i__17509__auto___30225 < len__17508__auto___30224)){
args30221.push((arguments[i__17509__auto___30225]));

var G__30226 = (i__17509__auto___30225 + (1));
i__17509__auto___30225 = G__30226;
continue;
} else {
}
break;
}

var G__30223 = args30221.length;
switch (G__30223) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30221.length)].join('')));

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
var args30228 = [];
var len__17508__auto___30281 = arguments.length;
var i__17509__auto___30282 = (0);
while(true){
if((i__17509__auto___30282 < len__17508__auto___30281)){
args30228.push((arguments[i__17509__auto___30282]));

var G__30283 = (i__17509__auto___30282 + (1));
i__17509__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var G__30230 = args30228.length;
switch (G__30230) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30228.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19652__auto___30285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___30285,tc,fc){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___30285,tc,fc){
return (function (state_30256){
var state_val_30257 = (state_30256[(1)]);
if((state_val_30257 === (7))){
var inst_30252 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
var statearr_30258_30286 = state_30256__$1;
(statearr_30258_30286[(2)] = inst_30252);

(statearr_30258_30286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (1))){
var state_30256__$1 = state_30256;
var statearr_30259_30287 = state_30256__$1;
(statearr_30259_30287[(2)] = null);

(statearr_30259_30287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (4))){
var inst_30233 = (state_30256[(7)]);
var inst_30233__$1 = (state_30256[(2)]);
var inst_30234 = (inst_30233__$1 == null);
var state_30256__$1 = (function (){var statearr_30260 = state_30256;
(statearr_30260[(7)] = inst_30233__$1);

return statearr_30260;
})();
if(cljs.core.truth_(inst_30234)){
var statearr_30261_30288 = state_30256__$1;
(statearr_30261_30288[(1)] = (5));

} else {
var statearr_30262_30289 = state_30256__$1;
(statearr_30262_30289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (13))){
var state_30256__$1 = state_30256;
var statearr_30263_30290 = state_30256__$1;
(statearr_30263_30290[(2)] = null);

(statearr_30263_30290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (6))){
var inst_30233 = (state_30256[(7)]);
var inst_30239 = p.call(null,inst_30233);
var state_30256__$1 = state_30256;
if(cljs.core.truth_(inst_30239)){
var statearr_30264_30291 = state_30256__$1;
(statearr_30264_30291[(1)] = (9));

} else {
var statearr_30265_30292 = state_30256__$1;
(statearr_30265_30292[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (3))){
var inst_30254 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30256__$1,inst_30254);
} else {
if((state_val_30257 === (12))){
var state_30256__$1 = state_30256;
var statearr_30266_30293 = state_30256__$1;
(statearr_30266_30293[(2)] = null);

(statearr_30266_30293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (2))){
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30256__$1,(4),ch);
} else {
if((state_val_30257 === (11))){
var inst_30233 = (state_30256[(7)]);
var inst_30243 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30256__$1,(8),inst_30243,inst_30233);
} else {
if((state_val_30257 === (9))){
var state_30256__$1 = state_30256;
var statearr_30267_30294 = state_30256__$1;
(statearr_30267_30294[(2)] = tc);

(statearr_30267_30294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (5))){
var inst_30236 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30237 = cljs.core.async.close_BANG_.call(null,fc);
var state_30256__$1 = (function (){var statearr_30268 = state_30256;
(statearr_30268[(8)] = inst_30236);

return statearr_30268;
})();
var statearr_30269_30295 = state_30256__$1;
(statearr_30269_30295[(2)] = inst_30237);

(statearr_30269_30295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (14))){
var inst_30250 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
var statearr_30270_30296 = state_30256__$1;
(statearr_30270_30296[(2)] = inst_30250);

(statearr_30270_30296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (10))){
var state_30256__$1 = state_30256;
var statearr_30271_30297 = state_30256__$1;
(statearr_30271_30297[(2)] = fc);

(statearr_30271_30297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (8))){
var inst_30245 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
if(cljs.core.truth_(inst_30245)){
var statearr_30272_30298 = state_30256__$1;
(statearr_30272_30298[(1)] = (12));

} else {
var statearr_30273_30299 = state_30256__$1;
(statearr_30273_30299[(1)] = (13));

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
});})(c__19652__auto___30285,tc,fc))
;
return ((function (switch__19587__auto__,c__19652__auto___30285,tc,fc){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_30277 = [null,null,null,null,null,null,null,null,null];
(statearr_30277[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_30277[(1)] = (1));

return statearr_30277;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_30256){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30278){if((e30278 instanceof Object)){
var ex__19591__auto__ = e30278;
var statearr_30279_30300 = state_30256;
(statearr_30279_30300[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30301 = state_30256;
state_30256 = G__30301;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_30256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_30256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___30285,tc,fc))
})();
var state__19654__auto__ = (function (){var statearr_30280 = f__19653__auto__.call(null);
(statearr_30280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___30285);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___30285,tc,fc))
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
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_30348){
var state_val_30349 = (state_30348[(1)]);
if((state_val_30349 === (1))){
var inst_30334 = init;
var state_30348__$1 = (function (){var statearr_30350 = state_30348;
(statearr_30350[(7)] = inst_30334);

return statearr_30350;
})();
var statearr_30351_30366 = state_30348__$1;
(statearr_30351_30366[(2)] = null);

(statearr_30351_30366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (2))){
var state_30348__$1 = state_30348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30348__$1,(4),ch);
} else {
if((state_val_30349 === (3))){
var inst_30346 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30348__$1,inst_30346);
} else {
if((state_val_30349 === (4))){
var inst_30337 = (state_30348[(8)]);
var inst_30337__$1 = (state_30348[(2)]);
var inst_30338 = (inst_30337__$1 == null);
var state_30348__$1 = (function (){var statearr_30352 = state_30348;
(statearr_30352[(8)] = inst_30337__$1);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30338)){
var statearr_30353_30367 = state_30348__$1;
(statearr_30353_30367[(1)] = (5));

} else {
var statearr_30354_30368 = state_30348__$1;
(statearr_30354_30368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (5))){
var inst_30334 = (state_30348[(7)]);
var state_30348__$1 = state_30348;
var statearr_30355_30369 = state_30348__$1;
(statearr_30355_30369[(2)] = inst_30334);

(statearr_30355_30369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (6))){
var inst_30337 = (state_30348[(8)]);
var inst_30334 = (state_30348[(7)]);
var inst_30341 = f.call(null,inst_30334,inst_30337);
var inst_30334__$1 = inst_30341;
var state_30348__$1 = (function (){var statearr_30356 = state_30348;
(statearr_30356[(7)] = inst_30334__$1);

return statearr_30356;
})();
var statearr_30357_30370 = state_30348__$1;
(statearr_30357_30370[(2)] = null);

(statearr_30357_30370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30349 === (7))){
var inst_30344 = (state_30348[(2)]);
var state_30348__$1 = state_30348;
var statearr_30358_30371 = state_30348__$1;
(statearr_30358_30371[(2)] = inst_30344);

(statearr_30358_30371[(1)] = (3));


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
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19588__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19588__auto____0 = (function (){
var statearr_30362 = [null,null,null,null,null,null,null,null,null];
(statearr_30362[(0)] = cljs$core$async$reduce_$_state_machine__19588__auto__);

(statearr_30362[(1)] = (1));

return statearr_30362;
});
var cljs$core$async$reduce_$_state_machine__19588__auto____1 = (function (state_30348){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30363){if((e30363 instanceof Object)){
var ex__19591__auto__ = e30363;
var statearr_30364_30372 = state_30348;
(statearr_30364_30372[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30373 = state_30348;
state_30348 = G__30373;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19588__auto__ = function(state_30348){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19588__auto____1.call(this,state_30348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19588__auto____0;
cljs$core$async$reduce_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19588__auto____1;
return cljs$core$async$reduce_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_30365 = f__19653__auto__.call(null);
(statearr_30365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_30365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
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
var args30374 = [];
var len__17508__auto___30426 = arguments.length;
var i__17509__auto___30427 = (0);
while(true){
if((i__17509__auto___30427 < len__17508__auto___30426)){
args30374.push((arguments[i__17509__auto___30427]));

var G__30428 = (i__17509__auto___30427 + (1));
i__17509__auto___30427 = G__30428;
continue;
} else {
}
break;
}

var G__30376 = args30374.length;
switch (G__30376) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30374.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_30401){
var state_val_30402 = (state_30401[(1)]);
if((state_val_30402 === (7))){
var inst_30383 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30403_30430 = state_30401__$1;
(statearr_30403_30430[(2)] = inst_30383);

(statearr_30403_30430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (1))){
var inst_30377 = cljs.core.seq.call(null,coll);
var inst_30378 = inst_30377;
var state_30401__$1 = (function (){var statearr_30404 = state_30401;
(statearr_30404[(7)] = inst_30378);

return statearr_30404;
})();
var statearr_30405_30431 = state_30401__$1;
(statearr_30405_30431[(2)] = null);

(statearr_30405_30431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (4))){
var inst_30378 = (state_30401[(7)]);
var inst_30381 = cljs.core.first.call(null,inst_30378);
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30401__$1,(7),ch,inst_30381);
} else {
if((state_val_30402 === (13))){
var inst_30395 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30406_30432 = state_30401__$1;
(statearr_30406_30432[(2)] = inst_30395);

(statearr_30406_30432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (6))){
var inst_30386 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
if(cljs.core.truth_(inst_30386)){
var statearr_30407_30433 = state_30401__$1;
(statearr_30407_30433[(1)] = (8));

} else {
var statearr_30408_30434 = state_30401__$1;
(statearr_30408_30434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (3))){
var inst_30399 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else {
if((state_val_30402 === (12))){
var state_30401__$1 = state_30401;
var statearr_30409_30435 = state_30401__$1;
(statearr_30409_30435[(2)] = null);

(statearr_30409_30435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (2))){
var inst_30378 = (state_30401[(7)]);
var state_30401__$1 = state_30401;
if(cljs.core.truth_(inst_30378)){
var statearr_30410_30436 = state_30401__$1;
(statearr_30410_30436[(1)] = (4));

} else {
var statearr_30411_30437 = state_30401__$1;
(statearr_30411_30437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (11))){
var inst_30392 = cljs.core.async.close_BANG_.call(null,ch);
var state_30401__$1 = state_30401;
var statearr_30412_30438 = state_30401__$1;
(statearr_30412_30438[(2)] = inst_30392);

(statearr_30412_30438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (9))){
var state_30401__$1 = state_30401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30413_30439 = state_30401__$1;
(statearr_30413_30439[(1)] = (11));

} else {
var statearr_30414_30440 = state_30401__$1;
(statearr_30414_30440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (5))){
var inst_30378 = (state_30401[(7)]);
var state_30401__$1 = state_30401;
var statearr_30415_30441 = state_30401__$1;
(statearr_30415_30441[(2)] = inst_30378);

(statearr_30415_30441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (10))){
var inst_30397 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30416_30442 = state_30401__$1;
(statearr_30416_30442[(2)] = inst_30397);

(statearr_30416_30442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (8))){
var inst_30378 = (state_30401[(7)]);
var inst_30388 = cljs.core.next.call(null,inst_30378);
var inst_30378__$1 = inst_30388;
var state_30401__$1 = (function (){var statearr_30417 = state_30401;
(statearr_30417[(7)] = inst_30378__$1);

return statearr_30417;
})();
var statearr_30418_30443 = state_30401__$1;
(statearr_30418_30443[(2)] = null);

(statearr_30418_30443[(1)] = (2));


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
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_30422 = [null,null,null,null,null,null,null,null];
(statearr_30422[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_30422[(1)] = (1));

return statearr_30422;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_30401){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30423){if((e30423 instanceof Object)){
var ex__19591__auto__ = e30423;
var statearr_30424_30444 = state_30401;
(statearr_30424_30444[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30445 = state_30401;
state_30401 = G__30445;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_30425 = f__19653__auto__.call(null);
(statearr_30425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_30425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
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
var x__17105__auto__ = (((_ == null))?null:_);
var m__17106__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,_);
} else {
var m__17106__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,_);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17106__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m,ch);
} else {
var m__17106__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m,ch);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m);
} else {
var m__17106__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t30671 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30671 = (function (mult,ch,cs,meta30672){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30672 = meta30672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30673,meta30672__$1){
var self__ = this;
var _30673__$1 = this;
return (new cljs.core.async.t30671(self__.mult,self__.ch,self__.cs,meta30672__$1));
});})(cs))
;

cljs.core.async.t30671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30673){
var self__ = this;
var _30673__$1 = this;
return self__.meta30672;
});})(cs))
;

cljs.core.async.t30671.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30671.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30671.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30671.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30671.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30671.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30672","meta30672",409200583,null)], null);
});})(cs))
;

cljs.core.async.t30671.cljs$lang$type = true;

cljs.core.async.t30671.cljs$lang$ctorStr = "cljs.core.async/t30671";

cljs.core.async.t30671.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t30671");
});})(cs))
;

cljs.core.async.__GT_t30671 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30671(mult__$1,ch__$1,cs__$1,meta30672){
return (new cljs.core.async.t30671(mult__$1,ch__$1,cs__$1,meta30672));
});})(cs))
;

}

return (new cljs.core.async.t30671(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19652__auto___30892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___30892,cs,m,dchan,dctr,done){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___30892,cs,m,dchan,dctr,done){
return (function (state_30804){
var state_val_30805 = (state_30804[(1)]);
if((state_val_30805 === (7))){
var inst_30800 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30806_30893 = state_30804__$1;
(statearr_30806_30893[(2)] = inst_30800);

(statearr_30806_30893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (20))){
var inst_30705 = (state_30804[(7)]);
var inst_30715 = cljs.core.first.call(null,inst_30705);
var inst_30716 = cljs.core.nth.call(null,inst_30715,(0),null);
var inst_30717 = cljs.core.nth.call(null,inst_30715,(1),null);
var state_30804__$1 = (function (){var statearr_30807 = state_30804;
(statearr_30807[(8)] = inst_30716);

return statearr_30807;
})();
if(cljs.core.truth_(inst_30717)){
var statearr_30808_30894 = state_30804__$1;
(statearr_30808_30894[(1)] = (22));

} else {
var statearr_30809_30895 = state_30804__$1;
(statearr_30809_30895[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (27))){
var inst_30747 = (state_30804[(9)]);
var inst_30745 = (state_30804[(10)]);
var inst_30752 = (state_30804[(11)]);
var inst_30676 = (state_30804[(12)]);
var inst_30752__$1 = cljs.core._nth.call(null,inst_30745,inst_30747);
var inst_30753 = cljs.core.async.put_BANG_.call(null,inst_30752__$1,inst_30676,done);
var state_30804__$1 = (function (){var statearr_30810 = state_30804;
(statearr_30810[(11)] = inst_30752__$1);

return statearr_30810;
})();
if(cljs.core.truth_(inst_30753)){
var statearr_30811_30896 = state_30804__$1;
(statearr_30811_30896[(1)] = (30));

} else {
var statearr_30812_30897 = state_30804__$1;
(statearr_30812_30897[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (1))){
var state_30804__$1 = state_30804;
var statearr_30813_30898 = state_30804__$1;
(statearr_30813_30898[(2)] = null);

(statearr_30813_30898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (24))){
var inst_30705 = (state_30804[(7)]);
var inst_30722 = (state_30804[(2)]);
var inst_30723 = cljs.core.next.call(null,inst_30705);
var inst_30685 = inst_30723;
var inst_30686 = null;
var inst_30687 = (0);
var inst_30688 = (0);
var state_30804__$1 = (function (){var statearr_30814 = state_30804;
(statearr_30814[(13)] = inst_30688);

(statearr_30814[(14)] = inst_30687);

(statearr_30814[(15)] = inst_30722);

(statearr_30814[(16)] = inst_30685);

(statearr_30814[(17)] = inst_30686);

return statearr_30814;
})();
var statearr_30815_30899 = state_30804__$1;
(statearr_30815_30899[(2)] = null);

(statearr_30815_30899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (39))){
var state_30804__$1 = state_30804;
var statearr_30819_30900 = state_30804__$1;
(statearr_30819_30900[(2)] = null);

(statearr_30819_30900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (4))){
var inst_30676 = (state_30804[(12)]);
var inst_30676__$1 = (state_30804[(2)]);
var inst_30677 = (inst_30676__$1 == null);
var state_30804__$1 = (function (){var statearr_30820 = state_30804;
(statearr_30820[(12)] = inst_30676__$1);

return statearr_30820;
})();
if(cljs.core.truth_(inst_30677)){
var statearr_30821_30901 = state_30804__$1;
(statearr_30821_30901[(1)] = (5));

} else {
var statearr_30822_30902 = state_30804__$1;
(statearr_30822_30902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (15))){
var inst_30688 = (state_30804[(13)]);
var inst_30687 = (state_30804[(14)]);
var inst_30685 = (state_30804[(16)]);
var inst_30686 = (state_30804[(17)]);
var inst_30701 = (state_30804[(2)]);
var inst_30702 = (inst_30688 + (1));
var tmp30816 = inst_30687;
var tmp30817 = inst_30685;
var tmp30818 = inst_30686;
var inst_30685__$1 = tmp30817;
var inst_30686__$1 = tmp30818;
var inst_30687__$1 = tmp30816;
var inst_30688__$1 = inst_30702;
var state_30804__$1 = (function (){var statearr_30823 = state_30804;
(statearr_30823[(13)] = inst_30688__$1);

(statearr_30823[(14)] = inst_30687__$1);

(statearr_30823[(16)] = inst_30685__$1);

(statearr_30823[(18)] = inst_30701);

(statearr_30823[(17)] = inst_30686__$1);

return statearr_30823;
})();
var statearr_30824_30903 = state_30804__$1;
(statearr_30824_30903[(2)] = null);

(statearr_30824_30903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (21))){
var inst_30726 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30828_30904 = state_30804__$1;
(statearr_30828_30904[(2)] = inst_30726);

(statearr_30828_30904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (31))){
var inst_30752 = (state_30804[(11)]);
var inst_30756 = done.call(null,null);
var inst_30757 = cljs.core.async.untap_STAR_.call(null,m,inst_30752);
var state_30804__$1 = (function (){var statearr_30829 = state_30804;
(statearr_30829[(19)] = inst_30756);

return statearr_30829;
})();
var statearr_30830_30905 = state_30804__$1;
(statearr_30830_30905[(2)] = inst_30757);

(statearr_30830_30905[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (32))){
var inst_30747 = (state_30804[(9)]);
var inst_30746 = (state_30804[(20)]);
var inst_30745 = (state_30804[(10)]);
var inst_30744 = (state_30804[(21)]);
var inst_30759 = (state_30804[(2)]);
var inst_30760 = (inst_30747 + (1));
var tmp30825 = inst_30746;
var tmp30826 = inst_30745;
var tmp30827 = inst_30744;
var inst_30744__$1 = tmp30827;
var inst_30745__$1 = tmp30826;
var inst_30746__$1 = tmp30825;
var inst_30747__$1 = inst_30760;
var state_30804__$1 = (function (){var statearr_30831 = state_30804;
(statearr_30831[(9)] = inst_30747__$1);

(statearr_30831[(20)] = inst_30746__$1);

(statearr_30831[(10)] = inst_30745__$1);

(statearr_30831[(21)] = inst_30744__$1);

(statearr_30831[(22)] = inst_30759);

return statearr_30831;
})();
var statearr_30832_30906 = state_30804__$1;
(statearr_30832_30906[(2)] = null);

(statearr_30832_30906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (40))){
var inst_30772 = (state_30804[(23)]);
var inst_30776 = done.call(null,null);
var inst_30777 = cljs.core.async.untap_STAR_.call(null,m,inst_30772);
var state_30804__$1 = (function (){var statearr_30833 = state_30804;
(statearr_30833[(24)] = inst_30776);

return statearr_30833;
})();
var statearr_30834_30907 = state_30804__$1;
(statearr_30834_30907[(2)] = inst_30777);

(statearr_30834_30907[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (33))){
var inst_30763 = (state_30804[(25)]);
var inst_30765 = cljs.core.chunked_seq_QMARK_.call(null,inst_30763);
var state_30804__$1 = state_30804;
if(inst_30765){
var statearr_30835_30908 = state_30804__$1;
(statearr_30835_30908[(1)] = (36));

} else {
var statearr_30836_30909 = state_30804__$1;
(statearr_30836_30909[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (13))){
var inst_30695 = (state_30804[(26)]);
var inst_30698 = cljs.core.async.close_BANG_.call(null,inst_30695);
var state_30804__$1 = state_30804;
var statearr_30837_30910 = state_30804__$1;
(statearr_30837_30910[(2)] = inst_30698);

(statearr_30837_30910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (22))){
var inst_30716 = (state_30804[(8)]);
var inst_30719 = cljs.core.async.close_BANG_.call(null,inst_30716);
var state_30804__$1 = state_30804;
var statearr_30838_30911 = state_30804__$1;
(statearr_30838_30911[(2)] = inst_30719);

(statearr_30838_30911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (36))){
var inst_30763 = (state_30804[(25)]);
var inst_30767 = cljs.core.chunk_first.call(null,inst_30763);
var inst_30768 = cljs.core.chunk_rest.call(null,inst_30763);
var inst_30769 = cljs.core.count.call(null,inst_30767);
var inst_30744 = inst_30768;
var inst_30745 = inst_30767;
var inst_30746 = inst_30769;
var inst_30747 = (0);
var state_30804__$1 = (function (){var statearr_30839 = state_30804;
(statearr_30839[(9)] = inst_30747);

(statearr_30839[(20)] = inst_30746);

(statearr_30839[(10)] = inst_30745);

(statearr_30839[(21)] = inst_30744);

return statearr_30839;
})();
var statearr_30840_30912 = state_30804__$1;
(statearr_30840_30912[(2)] = null);

(statearr_30840_30912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (41))){
var inst_30763 = (state_30804[(25)]);
var inst_30779 = (state_30804[(2)]);
var inst_30780 = cljs.core.next.call(null,inst_30763);
var inst_30744 = inst_30780;
var inst_30745 = null;
var inst_30746 = (0);
var inst_30747 = (0);
var state_30804__$1 = (function (){var statearr_30841 = state_30804;
(statearr_30841[(9)] = inst_30747);

(statearr_30841[(20)] = inst_30746);

(statearr_30841[(10)] = inst_30745);

(statearr_30841[(27)] = inst_30779);

(statearr_30841[(21)] = inst_30744);

return statearr_30841;
})();
var statearr_30842_30913 = state_30804__$1;
(statearr_30842_30913[(2)] = null);

(statearr_30842_30913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (43))){
var state_30804__$1 = state_30804;
var statearr_30843_30914 = state_30804__$1;
(statearr_30843_30914[(2)] = null);

(statearr_30843_30914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (29))){
var inst_30788 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30844_30915 = state_30804__$1;
(statearr_30844_30915[(2)] = inst_30788);

(statearr_30844_30915[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (44))){
var inst_30797 = (state_30804[(2)]);
var state_30804__$1 = (function (){var statearr_30845 = state_30804;
(statearr_30845[(28)] = inst_30797);

return statearr_30845;
})();
var statearr_30846_30916 = state_30804__$1;
(statearr_30846_30916[(2)] = null);

(statearr_30846_30916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (6))){
var inst_30736 = (state_30804[(29)]);
var inst_30735 = cljs.core.deref.call(null,cs);
var inst_30736__$1 = cljs.core.keys.call(null,inst_30735);
var inst_30737 = cljs.core.count.call(null,inst_30736__$1);
var inst_30738 = cljs.core.reset_BANG_.call(null,dctr,inst_30737);
var inst_30743 = cljs.core.seq.call(null,inst_30736__$1);
var inst_30744 = inst_30743;
var inst_30745 = null;
var inst_30746 = (0);
var inst_30747 = (0);
var state_30804__$1 = (function (){var statearr_30847 = state_30804;
(statearr_30847[(9)] = inst_30747);

(statearr_30847[(20)] = inst_30746);

(statearr_30847[(10)] = inst_30745);

(statearr_30847[(29)] = inst_30736__$1);

(statearr_30847[(21)] = inst_30744);

(statearr_30847[(30)] = inst_30738);

return statearr_30847;
})();
var statearr_30848_30917 = state_30804__$1;
(statearr_30848_30917[(2)] = null);

(statearr_30848_30917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (28))){
var inst_30763 = (state_30804[(25)]);
var inst_30744 = (state_30804[(21)]);
var inst_30763__$1 = cljs.core.seq.call(null,inst_30744);
var state_30804__$1 = (function (){var statearr_30849 = state_30804;
(statearr_30849[(25)] = inst_30763__$1);

return statearr_30849;
})();
if(inst_30763__$1){
var statearr_30850_30918 = state_30804__$1;
(statearr_30850_30918[(1)] = (33));

} else {
var statearr_30851_30919 = state_30804__$1;
(statearr_30851_30919[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (25))){
var inst_30747 = (state_30804[(9)]);
var inst_30746 = (state_30804[(20)]);
var inst_30749 = (inst_30747 < inst_30746);
var inst_30750 = inst_30749;
var state_30804__$1 = state_30804;
if(cljs.core.truth_(inst_30750)){
var statearr_30852_30920 = state_30804__$1;
(statearr_30852_30920[(1)] = (27));

} else {
var statearr_30853_30921 = state_30804__$1;
(statearr_30853_30921[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (34))){
var state_30804__$1 = state_30804;
var statearr_30854_30922 = state_30804__$1;
(statearr_30854_30922[(2)] = null);

(statearr_30854_30922[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (17))){
var state_30804__$1 = state_30804;
var statearr_30855_30923 = state_30804__$1;
(statearr_30855_30923[(2)] = null);

(statearr_30855_30923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (3))){
var inst_30802 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30804__$1,inst_30802);
} else {
if((state_val_30805 === (12))){
var inst_30731 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30856_30924 = state_30804__$1;
(statearr_30856_30924[(2)] = inst_30731);

(statearr_30856_30924[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (2))){
var state_30804__$1 = state_30804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30804__$1,(4),ch);
} else {
if((state_val_30805 === (23))){
var state_30804__$1 = state_30804;
var statearr_30857_30925 = state_30804__$1;
(statearr_30857_30925[(2)] = null);

(statearr_30857_30925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (35))){
var inst_30786 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30858_30926 = state_30804__$1;
(statearr_30858_30926[(2)] = inst_30786);

(statearr_30858_30926[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (19))){
var inst_30705 = (state_30804[(7)]);
var inst_30709 = cljs.core.chunk_first.call(null,inst_30705);
var inst_30710 = cljs.core.chunk_rest.call(null,inst_30705);
var inst_30711 = cljs.core.count.call(null,inst_30709);
var inst_30685 = inst_30710;
var inst_30686 = inst_30709;
var inst_30687 = inst_30711;
var inst_30688 = (0);
var state_30804__$1 = (function (){var statearr_30859 = state_30804;
(statearr_30859[(13)] = inst_30688);

(statearr_30859[(14)] = inst_30687);

(statearr_30859[(16)] = inst_30685);

(statearr_30859[(17)] = inst_30686);

return statearr_30859;
})();
var statearr_30860_30927 = state_30804__$1;
(statearr_30860_30927[(2)] = null);

(statearr_30860_30927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (11))){
var inst_30685 = (state_30804[(16)]);
var inst_30705 = (state_30804[(7)]);
var inst_30705__$1 = cljs.core.seq.call(null,inst_30685);
var state_30804__$1 = (function (){var statearr_30861 = state_30804;
(statearr_30861[(7)] = inst_30705__$1);

return statearr_30861;
})();
if(inst_30705__$1){
var statearr_30862_30928 = state_30804__$1;
(statearr_30862_30928[(1)] = (16));

} else {
var statearr_30863_30929 = state_30804__$1;
(statearr_30863_30929[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (9))){
var inst_30733 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30864_30930 = state_30804__$1;
(statearr_30864_30930[(2)] = inst_30733);

(statearr_30864_30930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (5))){
var inst_30683 = cljs.core.deref.call(null,cs);
var inst_30684 = cljs.core.seq.call(null,inst_30683);
var inst_30685 = inst_30684;
var inst_30686 = null;
var inst_30687 = (0);
var inst_30688 = (0);
var state_30804__$1 = (function (){var statearr_30865 = state_30804;
(statearr_30865[(13)] = inst_30688);

(statearr_30865[(14)] = inst_30687);

(statearr_30865[(16)] = inst_30685);

(statearr_30865[(17)] = inst_30686);

return statearr_30865;
})();
var statearr_30866_30931 = state_30804__$1;
(statearr_30866_30931[(2)] = null);

(statearr_30866_30931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (14))){
var state_30804__$1 = state_30804;
var statearr_30867_30932 = state_30804__$1;
(statearr_30867_30932[(2)] = null);

(statearr_30867_30932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (45))){
var inst_30794 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30868_30933 = state_30804__$1;
(statearr_30868_30933[(2)] = inst_30794);

(statearr_30868_30933[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (26))){
var inst_30736 = (state_30804[(29)]);
var inst_30790 = (state_30804[(2)]);
var inst_30791 = cljs.core.seq.call(null,inst_30736);
var state_30804__$1 = (function (){var statearr_30869 = state_30804;
(statearr_30869[(31)] = inst_30790);

return statearr_30869;
})();
if(inst_30791){
var statearr_30870_30934 = state_30804__$1;
(statearr_30870_30934[(1)] = (42));

} else {
var statearr_30871_30935 = state_30804__$1;
(statearr_30871_30935[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (16))){
var inst_30705 = (state_30804[(7)]);
var inst_30707 = cljs.core.chunked_seq_QMARK_.call(null,inst_30705);
var state_30804__$1 = state_30804;
if(inst_30707){
var statearr_30872_30936 = state_30804__$1;
(statearr_30872_30936[(1)] = (19));

} else {
var statearr_30873_30937 = state_30804__$1;
(statearr_30873_30937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (38))){
var inst_30783 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30874_30938 = state_30804__$1;
(statearr_30874_30938[(2)] = inst_30783);

(statearr_30874_30938[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (30))){
var state_30804__$1 = state_30804;
var statearr_30875_30939 = state_30804__$1;
(statearr_30875_30939[(2)] = null);

(statearr_30875_30939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (10))){
var inst_30688 = (state_30804[(13)]);
var inst_30686 = (state_30804[(17)]);
var inst_30694 = cljs.core._nth.call(null,inst_30686,inst_30688);
var inst_30695 = cljs.core.nth.call(null,inst_30694,(0),null);
var inst_30696 = cljs.core.nth.call(null,inst_30694,(1),null);
var state_30804__$1 = (function (){var statearr_30876 = state_30804;
(statearr_30876[(26)] = inst_30695);

return statearr_30876;
})();
if(cljs.core.truth_(inst_30696)){
var statearr_30877_30940 = state_30804__$1;
(statearr_30877_30940[(1)] = (13));

} else {
var statearr_30878_30941 = state_30804__$1;
(statearr_30878_30941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (18))){
var inst_30729 = (state_30804[(2)]);
var state_30804__$1 = state_30804;
var statearr_30879_30942 = state_30804__$1;
(statearr_30879_30942[(2)] = inst_30729);

(statearr_30879_30942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (42))){
var state_30804__$1 = state_30804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30804__$1,(45),dchan);
} else {
if((state_val_30805 === (37))){
var inst_30772 = (state_30804[(23)]);
var inst_30763 = (state_30804[(25)]);
var inst_30676 = (state_30804[(12)]);
var inst_30772__$1 = cljs.core.first.call(null,inst_30763);
var inst_30773 = cljs.core.async.put_BANG_.call(null,inst_30772__$1,inst_30676,done);
var state_30804__$1 = (function (){var statearr_30880 = state_30804;
(statearr_30880[(23)] = inst_30772__$1);

return statearr_30880;
})();
if(cljs.core.truth_(inst_30773)){
var statearr_30881_30943 = state_30804__$1;
(statearr_30881_30943[(1)] = (39));

} else {
var statearr_30882_30944 = state_30804__$1;
(statearr_30882_30944[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30805 === (8))){
var inst_30688 = (state_30804[(13)]);
var inst_30687 = (state_30804[(14)]);
var inst_30690 = (inst_30688 < inst_30687);
var inst_30691 = inst_30690;
var state_30804__$1 = state_30804;
if(cljs.core.truth_(inst_30691)){
var statearr_30883_30945 = state_30804__$1;
(statearr_30883_30945[(1)] = (10));

} else {
var statearr_30884_30946 = state_30804__$1;
(statearr_30884_30946[(1)] = (11));

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
});})(c__19652__auto___30892,cs,m,dchan,dctr,done))
;
return ((function (switch__19587__auto__,c__19652__auto___30892,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19588__auto__ = null;
var cljs$core$async$mult_$_state_machine__19588__auto____0 = (function (){
var statearr_30888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30888[(0)] = cljs$core$async$mult_$_state_machine__19588__auto__);

(statearr_30888[(1)] = (1));

return statearr_30888;
});
var cljs$core$async$mult_$_state_machine__19588__auto____1 = (function (state_30804){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_30804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e30889){if((e30889 instanceof Object)){
var ex__19591__auto__ = e30889;
var statearr_30890_30947 = state_30804;
(statearr_30890_30947[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30948 = state_30804;
state_30804 = G__30948;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19588__auto__ = function(state_30804){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19588__auto____1.call(this,state_30804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19588__auto____0;
cljs$core$async$mult_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19588__auto____1;
return cljs$core$async$mult_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___30892,cs,m,dchan,dctr,done))
})();
var state__19654__auto__ = (function (){var statearr_30891 = f__19653__auto__.call(null);
(statearr_30891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___30892);

return statearr_30891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___30892,cs,m,dchan,dctr,done))
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
var args30949 = [];
var len__17508__auto___30952 = arguments.length;
var i__17509__auto___30953 = (0);
while(true){
if((i__17509__auto___30953 < len__17508__auto___30952)){
args30949.push((arguments[i__17509__auto___30953]));

var G__30954 = (i__17509__auto___30953 + (1));
i__17509__auto___30953 = G__30954;
continue;
} else {
}
break;
}

var G__30951 = args30949.length;
switch (G__30951) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30949.length)].join('')));

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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m,ch);
} else {
var m__17106__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m,ch);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m,ch);
} else {
var m__17106__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m,ch);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m);
} else {
var m__17106__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m,state_map);
} else {
var m__17106__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m,state_map);
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
var x__17105__auto__ = (((m == null))?null:m);
var m__17106__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,m,mode);
} else {
var m__17106__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17515__auto__ = [];
var len__17508__auto___30968 = arguments.length;
var i__17509__auto___30969 = (0);
while(true){
if((i__17509__auto___30969 < len__17508__auto___30968)){
args__17515__auto__.push((arguments[i__17509__auto___30969]));

var G__30970 = (i__17509__auto___30969 + (1));
i__17509__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((3) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17516__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30962){
var map__30963 = p__30962;
var map__30963__$1 = ((((!((map__30963 == null)))?((((map__30963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var opts = map__30963__$1;
var statearr_30965_30971 = state;
(statearr_30965_30971[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30963,map__30963__$1,opts){
return (function (val){
var statearr_30966_30972 = state;
(statearr_30966_30972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30963,map__30963__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30967_30973 = state;
(statearr_30967_30973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30958){
var G__30959 = cljs.core.first.call(null,seq30958);
var seq30958__$1 = cljs.core.next.call(null,seq30958);
var G__30960 = cljs.core.first.call(null,seq30958__$1);
var seq30958__$2 = cljs.core.next.call(null,seq30958__$1);
var G__30961 = cljs.core.first.call(null,seq30958__$2);
var seq30958__$3 = cljs.core.next.call(null,seq30958__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30959,G__30960,G__30961,seq30958__$3);
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
if(typeof cljs.core.async.t31137 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31137 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31138){
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
this.meta31138 = meta31138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31139,meta31138__$1){
var self__ = this;
var _31139__$1 = this;
return (new cljs.core.async.t31137(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31138__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31139){
var self__ = this;
var _31139__$1 = this;
return self__.meta31138;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31137.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31138","meta31138",192965016,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31137.cljs$lang$type = true;

cljs.core.async.t31137.cljs$lang$ctorStr = "cljs.core.async/t31137";

cljs.core.async.t31137.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t31137");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31137 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31137(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31138){
return (new cljs.core.async.t31137(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31138));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31137(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19652__auto___31300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___31300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___31300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31237){
var state_val_31238 = (state_31237[(1)]);
if((state_val_31238 === (7))){
var inst_31155 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31239_31301 = state_31237__$1;
(statearr_31239_31301[(2)] = inst_31155);

(statearr_31239_31301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (20))){
var inst_31167 = (state_31237[(7)]);
var state_31237__$1 = state_31237;
var statearr_31240_31302 = state_31237__$1;
(statearr_31240_31302[(2)] = inst_31167);

(statearr_31240_31302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (27))){
var state_31237__$1 = state_31237;
var statearr_31241_31303 = state_31237__$1;
(statearr_31241_31303[(2)] = null);

(statearr_31241_31303[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (1))){
var inst_31143 = (state_31237[(8)]);
var inst_31143__$1 = calc_state.call(null);
var inst_31145 = (inst_31143__$1 == null);
var inst_31146 = cljs.core.not.call(null,inst_31145);
var state_31237__$1 = (function (){var statearr_31242 = state_31237;
(statearr_31242[(8)] = inst_31143__$1);

return statearr_31242;
})();
if(inst_31146){
var statearr_31243_31304 = state_31237__$1;
(statearr_31243_31304[(1)] = (2));

} else {
var statearr_31244_31305 = state_31237__$1;
(statearr_31244_31305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (24))){
var inst_31211 = (state_31237[(9)]);
var inst_31197 = (state_31237[(10)]);
var inst_31190 = (state_31237[(11)]);
var inst_31211__$1 = inst_31190.call(null,inst_31197);
var state_31237__$1 = (function (){var statearr_31245 = state_31237;
(statearr_31245[(9)] = inst_31211__$1);

return statearr_31245;
})();
if(cljs.core.truth_(inst_31211__$1)){
var statearr_31246_31306 = state_31237__$1;
(statearr_31246_31306[(1)] = (29));

} else {
var statearr_31247_31307 = state_31237__$1;
(statearr_31247_31307[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (4))){
var inst_31158 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31158)){
var statearr_31248_31308 = state_31237__$1;
(statearr_31248_31308[(1)] = (8));

} else {
var statearr_31249_31309 = state_31237__$1;
(statearr_31249_31309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (15))){
var inst_31184 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31184)){
var statearr_31250_31310 = state_31237__$1;
(statearr_31250_31310[(1)] = (19));

} else {
var statearr_31251_31311 = state_31237__$1;
(statearr_31251_31311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (21))){
var inst_31189 = (state_31237[(12)]);
var inst_31189__$1 = (state_31237[(2)]);
var inst_31190 = cljs.core.get.call(null,inst_31189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31191 = cljs.core.get.call(null,inst_31189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31192 = cljs.core.get.call(null,inst_31189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31237__$1 = (function (){var statearr_31252 = state_31237;
(statearr_31252[(11)] = inst_31190);

(statearr_31252[(12)] = inst_31189__$1);

(statearr_31252[(13)] = inst_31191);

return statearr_31252;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31237__$1,(22),inst_31192);
} else {
if((state_val_31238 === (31))){
var inst_31219 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31219)){
var statearr_31253_31312 = state_31237__$1;
(statearr_31253_31312[(1)] = (32));

} else {
var statearr_31254_31313 = state_31237__$1;
(statearr_31254_31313[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (32))){
var inst_31196 = (state_31237[(14)]);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31237__$1,(35),out,inst_31196);
} else {
if((state_val_31238 === (33))){
var inst_31189 = (state_31237[(12)]);
var inst_31167 = inst_31189;
var state_31237__$1 = (function (){var statearr_31255 = state_31237;
(statearr_31255[(7)] = inst_31167);

return statearr_31255;
})();
var statearr_31256_31314 = state_31237__$1;
(statearr_31256_31314[(2)] = null);

(statearr_31256_31314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (13))){
var inst_31167 = (state_31237[(7)]);
var inst_31174 = inst_31167.cljs$lang$protocol_mask$partition0$;
var inst_31175 = (inst_31174 & (64));
var inst_31176 = inst_31167.cljs$core$ISeq$;
var inst_31177 = (inst_31175) || (inst_31176);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31177)){
var statearr_31257_31315 = state_31237__$1;
(statearr_31257_31315[(1)] = (16));

} else {
var statearr_31258_31316 = state_31237__$1;
(statearr_31258_31316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (22))){
var inst_31197 = (state_31237[(10)]);
var inst_31196 = (state_31237[(14)]);
var inst_31195 = (state_31237[(2)]);
var inst_31196__$1 = cljs.core.nth.call(null,inst_31195,(0),null);
var inst_31197__$1 = cljs.core.nth.call(null,inst_31195,(1),null);
var inst_31198 = (inst_31196__$1 == null);
var inst_31199 = cljs.core._EQ_.call(null,inst_31197__$1,change);
var inst_31200 = (inst_31198) || (inst_31199);
var state_31237__$1 = (function (){var statearr_31259 = state_31237;
(statearr_31259[(10)] = inst_31197__$1);

(statearr_31259[(14)] = inst_31196__$1);

return statearr_31259;
})();
if(cljs.core.truth_(inst_31200)){
var statearr_31260_31317 = state_31237__$1;
(statearr_31260_31317[(1)] = (23));

} else {
var statearr_31261_31318 = state_31237__$1;
(statearr_31261_31318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (36))){
var inst_31189 = (state_31237[(12)]);
var inst_31167 = inst_31189;
var state_31237__$1 = (function (){var statearr_31262 = state_31237;
(statearr_31262[(7)] = inst_31167);

return statearr_31262;
})();
var statearr_31263_31319 = state_31237__$1;
(statearr_31263_31319[(2)] = null);

(statearr_31263_31319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (29))){
var inst_31211 = (state_31237[(9)]);
var state_31237__$1 = state_31237;
var statearr_31264_31320 = state_31237__$1;
(statearr_31264_31320[(2)] = inst_31211);

(statearr_31264_31320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (6))){
var state_31237__$1 = state_31237;
var statearr_31265_31321 = state_31237__$1;
(statearr_31265_31321[(2)] = false);

(statearr_31265_31321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (28))){
var inst_31207 = (state_31237[(2)]);
var inst_31208 = calc_state.call(null);
var inst_31167 = inst_31208;
var state_31237__$1 = (function (){var statearr_31266 = state_31237;
(statearr_31266[(15)] = inst_31207);

(statearr_31266[(7)] = inst_31167);

return statearr_31266;
})();
var statearr_31267_31322 = state_31237__$1;
(statearr_31267_31322[(2)] = null);

(statearr_31267_31322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (25))){
var inst_31233 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31268_31323 = state_31237__$1;
(statearr_31268_31323[(2)] = inst_31233);

(statearr_31268_31323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (34))){
var inst_31231 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31269_31324 = state_31237__$1;
(statearr_31269_31324[(2)] = inst_31231);

(statearr_31269_31324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (17))){
var state_31237__$1 = state_31237;
var statearr_31270_31325 = state_31237__$1;
(statearr_31270_31325[(2)] = false);

(statearr_31270_31325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (3))){
var state_31237__$1 = state_31237;
var statearr_31271_31326 = state_31237__$1;
(statearr_31271_31326[(2)] = false);

(statearr_31271_31326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (12))){
var inst_31235 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31237__$1,inst_31235);
} else {
if((state_val_31238 === (2))){
var inst_31143 = (state_31237[(8)]);
var inst_31148 = inst_31143.cljs$lang$protocol_mask$partition0$;
var inst_31149 = (inst_31148 & (64));
var inst_31150 = inst_31143.cljs$core$ISeq$;
var inst_31151 = (inst_31149) || (inst_31150);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31151)){
var statearr_31272_31327 = state_31237__$1;
(statearr_31272_31327[(1)] = (5));

} else {
var statearr_31273_31328 = state_31237__$1;
(statearr_31273_31328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (23))){
var inst_31196 = (state_31237[(14)]);
var inst_31202 = (inst_31196 == null);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31202)){
var statearr_31274_31329 = state_31237__$1;
(statearr_31274_31329[(1)] = (26));

} else {
var statearr_31275_31330 = state_31237__$1;
(statearr_31275_31330[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (35))){
var inst_31222 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31222)){
var statearr_31276_31331 = state_31237__$1;
(statearr_31276_31331[(1)] = (36));

} else {
var statearr_31277_31332 = state_31237__$1;
(statearr_31277_31332[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (19))){
var inst_31167 = (state_31237[(7)]);
var inst_31186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31167);
var state_31237__$1 = state_31237;
var statearr_31278_31333 = state_31237__$1;
(statearr_31278_31333[(2)] = inst_31186);

(statearr_31278_31333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (11))){
var inst_31167 = (state_31237[(7)]);
var inst_31171 = (inst_31167 == null);
var inst_31172 = cljs.core.not.call(null,inst_31171);
var state_31237__$1 = state_31237;
if(inst_31172){
var statearr_31279_31334 = state_31237__$1;
(statearr_31279_31334[(1)] = (13));

} else {
var statearr_31280_31335 = state_31237__$1;
(statearr_31280_31335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (9))){
var inst_31143 = (state_31237[(8)]);
var state_31237__$1 = state_31237;
var statearr_31281_31336 = state_31237__$1;
(statearr_31281_31336[(2)] = inst_31143);

(statearr_31281_31336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (5))){
var state_31237__$1 = state_31237;
var statearr_31282_31337 = state_31237__$1;
(statearr_31282_31337[(2)] = true);

(statearr_31282_31337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (14))){
var state_31237__$1 = state_31237;
var statearr_31283_31338 = state_31237__$1;
(statearr_31283_31338[(2)] = false);

(statearr_31283_31338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (26))){
var inst_31197 = (state_31237[(10)]);
var inst_31204 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31197);
var state_31237__$1 = state_31237;
var statearr_31284_31339 = state_31237__$1;
(statearr_31284_31339[(2)] = inst_31204);

(statearr_31284_31339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (16))){
var state_31237__$1 = state_31237;
var statearr_31285_31340 = state_31237__$1;
(statearr_31285_31340[(2)] = true);

(statearr_31285_31340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (38))){
var inst_31227 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31286_31341 = state_31237__$1;
(statearr_31286_31341[(2)] = inst_31227);

(statearr_31286_31341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (30))){
var inst_31197 = (state_31237[(10)]);
var inst_31190 = (state_31237[(11)]);
var inst_31191 = (state_31237[(13)]);
var inst_31214 = cljs.core.empty_QMARK_.call(null,inst_31190);
var inst_31215 = inst_31191.call(null,inst_31197);
var inst_31216 = cljs.core.not.call(null,inst_31215);
var inst_31217 = (inst_31214) && (inst_31216);
var state_31237__$1 = state_31237;
var statearr_31287_31342 = state_31237__$1;
(statearr_31287_31342[(2)] = inst_31217);

(statearr_31287_31342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (10))){
var inst_31143 = (state_31237[(8)]);
var inst_31163 = (state_31237[(2)]);
var inst_31164 = cljs.core.get.call(null,inst_31163,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31165 = cljs.core.get.call(null,inst_31163,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31166 = cljs.core.get.call(null,inst_31163,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31167 = inst_31143;
var state_31237__$1 = (function (){var statearr_31288 = state_31237;
(statearr_31288[(7)] = inst_31167);

(statearr_31288[(16)] = inst_31166);

(statearr_31288[(17)] = inst_31165);

(statearr_31288[(18)] = inst_31164);

return statearr_31288;
})();
var statearr_31289_31343 = state_31237__$1;
(statearr_31289_31343[(2)] = null);

(statearr_31289_31343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (18))){
var inst_31181 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31290_31344 = state_31237__$1;
(statearr_31290_31344[(2)] = inst_31181);

(statearr_31290_31344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (37))){
var state_31237__$1 = state_31237;
var statearr_31291_31345 = state_31237__$1;
(statearr_31291_31345[(2)] = null);

(statearr_31291_31345[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (8))){
var inst_31143 = (state_31237[(8)]);
var inst_31160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31143);
var state_31237__$1 = state_31237;
var statearr_31292_31346 = state_31237__$1;
(statearr_31292_31346[(2)] = inst_31160);

(statearr_31292_31346[(1)] = (10));


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
});})(c__19652__auto___31300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19587__auto__,c__19652__auto___31300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19588__auto__ = null;
var cljs$core$async$mix_$_state_machine__19588__auto____0 = (function (){
var statearr_31296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31296[(0)] = cljs$core$async$mix_$_state_machine__19588__auto__);

(statearr_31296[(1)] = (1));

return statearr_31296;
});
var cljs$core$async$mix_$_state_machine__19588__auto____1 = (function (state_31237){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_31237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e31297){if((e31297 instanceof Object)){
var ex__19591__auto__ = e31297;
var statearr_31298_31347 = state_31237;
(statearr_31298_31347[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31348 = state_31237;
state_31237 = G__31348;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19588__auto__ = function(state_31237){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19588__auto____1.call(this,state_31237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19588__auto____0;
cljs$core$async$mix_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19588__auto____1;
return cljs$core$async$mix_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___31300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19654__auto__ = (function (){var statearr_31299 = f__19653__auto__.call(null);
(statearr_31299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___31300);

return statearr_31299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___31300,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17105__auto__ = (((p == null))?null:p);
var m__17106__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17106__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17105__auto__ = (((p == null))?null:p);
var m__17106__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,p,v,ch);
} else {
var m__17106__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args31351 = [];
var len__17508__auto___31354 = arguments.length;
var i__17509__auto___31355 = (0);
while(true){
if((i__17509__auto___31355 < len__17508__auto___31354)){
args31351.push((arguments[i__17509__auto___31355]));

var G__31356 = (i__17509__auto___31355 + (1));
i__17509__auto___31355 = G__31356;
continue;
} else {
}
break;
}

var G__31353 = args31351.length;
switch (G__31353) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31351.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17105__auto__ = (((p == null))?null:p);
var m__17106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,p);
} else {
var m__17106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,p);
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
var x__17105__auto__ = (((p == null))?null:p);
var m__17106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17105__auto__)]);
if(!((m__17106__auto__ == null))){
return m__17106__auto__.call(null,p,v);
} else {
var m__17106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17106__auto____$1 == null))){
return m__17106__auto____$1.call(null,p,v);
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
var args31359 = [];
var len__17508__auto___31484 = arguments.length;
var i__17509__auto___31485 = (0);
while(true){
if((i__17509__auto___31485 < len__17508__auto___31484)){
args31359.push((arguments[i__17509__auto___31485]));

var G__31486 = (i__17509__auto___31485 + (1));
i__17509__auto___31485 = G__31486;
continue;
} else {
}
break;
}

var G__31361 = args31359.length;
switch (G__31361) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31359.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16469__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16469__auto__)){
return or__16469__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16469__auto__,mults){
return (function (p1__31358_SHARP_){
if(cljs.core.truth_(p1__31358_SHARP_.call(null,topic))){
return p1__31358_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31358_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16469__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31362 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31362 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31363){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31363 = meta31363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31364,meta31363__$1){
var self__ = this;
var _31364__$1 = this;
return (new cljs.core.async.t31362(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31363__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31364){
var self__ = this;
var _31364__$1 = this;
return self__.meta31363;
});})(mults,ensure_mult))
;

cljs.core.async.t31362.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31362.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31362.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31362.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31362.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31362.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31362.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31363","meta31363",-1506075322,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t31362.cljs$lang$type = true;

cljs.core.async.t31362.cljs$lang$ctorStr = "cljs.core.async/t31362";

cljs.core.async.t31362.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t31362");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31362 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31362(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31363){
return (new cljs.core.async.t31362(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31363));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31362(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19652__auto___31488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___31488,mults,ensure_mult,p){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___31488,mults,ensure_mult,p){
return (function (state_31436){
var state_val_31437 = (state_31436[(1)]);
if((state_val_31437 === (7))){
var inst_31432 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31438_31489 = state_31436__$1;
(statearr_31438_31489[(2)] = inst_31432);

(statearr_31438_31489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (20))){
var state_31436__$1 = state_31436;
var statearr_31439_31490 = state_31436__$1;
(statearr_31439_31490[(2)] = null);

(statearr_31439_31490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (1))){
var state_31436__$1 = state_31436;
var statearr_31440_31491 = state_31436__$1;
(statearr_31440_31491[(2)] = null);

(statearr_31440_31491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (24))){
var inst_31415 = (state_31436[(7)]);
var inst_31424 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31415);
var state_31436__$1 = state_31436;
var statearr_31441_31492 = state_31436__$1;
(statearr_31441_31492[(2)] = inst_31424);

(statearr_31441_31492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (4))){
var inst_31367 = (state_31436[(8)]);
var inst_31367__$1 = (state_31436[(2)]);
var inst_31368 = (inst_31367__$1 == null);
var state_31436__$1 = (function (){var statearr_31442 = state_31436;
(statearr_31442[(8)] = inst_31367__$1);

return statearr_31442;
})();
if(cljs.core.truth_(inst_31368)){
var statearr_31443_31493 = state_31436__$1;
(statearr_31443_31493[(1)] = (5));

} else {
var statearr_31444_31494 = state_31436__$1;
(statearr_31444_31494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (15))){
var inst_31409 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31445_31495 = state_31436__$1;
(statearr_31445_31495[(2)] = inst_31409);

(statearr_31445_31495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (21))){
var inst_31429 = (state_31436[(2)]);
var state_31436__$1 = (function (){var statearr_31446 = state_31436;
(statearr_31446[(9)] = inst_31429);

return statearr_31446;
})();
var statearr_31447_31496 = state_31436__$1;
(statearr_31447_31496[(2)] = null);

(statearr_31447_31496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (13))){
var inst_31391 = (state_31436[(10)]);
var inst_31393 = cljs.core.chunked_seq_QMARK_.call(null,inst_31391);
var state_31436__$1 = state_31436;
if(inst_31393){
var statearr_31448_31497 = state_31436__$1;
(statearr_31448_31497[(1)] = (16));

} else {
var statearr_31449_31498 = state_31436__$1;
(statearr_31449_31498[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (22))){
var inst_31421 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31421)){
var statearr_31450_31499 = state_31436__$1;
(statearr_31450_31499[(1)] = (23));

} else {
var statearr_31451_31500 = state_31436__$1;
(statearr_31451_31500[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (6))){
var inst_31417 = (state_31436[(11)]);
var inst_31367 = (state_31436[(8)]);
var inst_31415 = (state_31436[(7)]);
var inst_31415__$1 = topic_fn.call(null,inst_31367);
var inst_31416 = cljs.core.deref.call(null,mults);
var inst_31417__$1 = cljs.core.get.call(null,inst_31416,inst_31415__$1);
var state_31436__$1 = (function (){var statearr_31452 = state_31436;
(statearr_31452[(11)] = inst_31417__$1);

(statearr_31452[(7)] = inst_31415__$1);

return statearr_31452;
})();
if(cljs.core.truth_(inst_31417__$1)){
var statearr_31453_31501 = state_31436__$1;
(statearr_31453_31501[(1)] = (19));

} else {
var statearr_31454_31502 = state_31436__$1;
(statearr_31454_31502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (25))){
var inst_31426 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31455_31503 = state_31436__$1;
(statearr_31455_31503[(2)] = inst_31426);

(statearr_31455_31503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (17))){
var inst_31391 = (state_31436[(10)]);
var inst_31400 = cljs.core.first.call(null,inst_31391);
var inst_31401 = cljs.core.async.muxch_STAR_.call(null,inst_31400);
var inst_31402 = cljs.core.async.close_BANG_.call(null,inst_31401);
var inst_31403 = cljs.core.next.call(null,inst_31391);
var inst_31377 = inst_31403;
var inst_31378 = null;
var inst_31379 = (0);
var inst_31380 = (0);
var state_31436__$1 = (function (){var statearr_31456 = state_31436;
(statearr_31456[(12)] = inst_31380);

(statearr_31456[(13)] = inst_31402);

(statearr_31456[(14)] = inst_31378);

(statearr_31456[(15)] = inst_31379);

(statearr_31456[(16)] = inst_31377);

return statearr_31456;
})();
var statearr_31457_31504 = state_31436__$1;
(statearr_31457_31504[(2)] = null);

(statearr_31457_31504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (3))){
var inst_31434 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31436__$1,inst_31434);
} else {
if((state_val_31437 === (12))){
var inst_31411 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31458_31505 = state_31436__$1;
(statearr_31458_31505[(2)] = inst_31411);

(statearr_31458_31505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (2))){
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31436__$1,(4),ch);
} else {
if((state_val_31437 === (23))){
var state_31436__$1 = state_31436;
var statearr_31459_31506 = state_31436__$1;
(statearr_31459_31506[(2)] = null);

(statearr_31459_31506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (19))){
var inst_31417 = (state_31436[(11)]);
var inst_31367 = (state_31436[(8)]);
var inst_31419 = cljs.core.async.muxch_STAR_.call(null,inst_31417);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31436__$1,(22),inst_31419,inst_31367);
} else {
if((state_val_31437 === (11))){
var inst_31391 = (state_31436[(10)]);
var inst_31377 = (state_31436[(16)]);
var inst_31391__$1 = cljs.core.seq.call(null,inst_31377);
var state_31436__$1 = (function (){var statearr_31460 = state_31436;
(statearr_31460[(10)] = inst_31391__$1);

return statearr_31460;
})();
if(inst_31391__$1){
var statearr_31461_31507 = state_31436__$1;
(statearr_31461_31507[(1)] = (13));

} else {
var statearr_31462_31508 = state_31436__$1;
(statearr_31462_31508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (9))){
var inst_31413 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31463_31509 = state_31436__$1;
(statearr_31463_31509[(2)] = inst_31413);

(statearr_31463_31509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (5))){
var inst_31374 = cljs.core.deref.call(null,mults);
var inst_31375 = cljs.core.vals.call(null,inst_31374);
var inst_31376 = cljs.core.seq.call(null,inst_31375);
var inst_31377 = inst_31376;
var inst_31378 = null;
var inst_31379 = (0);
var inst_31380 = (0);
var state_31436__$1 = (function (){var statearr_31464 = state_31436;
(statearr_31464[(12)] = inst_31380);

(statearr_31464[(14)] = inst_31378);

(statearr_31464[(15)] = inst_31379);

(statearr_31464[(16)] = inst_31377);

return statearr_31464;
})();
var statearr_31465_31510 = state_31436__$1;
(statearr_31465_31510[(2)] = null);

(statearr_31465_31510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (14))){
var state_31436__$1 = state_31436;
var statearr_31469_31511 = state_31436__$1;
(statearr_31469_31511[(2)] = null);

(statearr_31469_31511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (16))){
var inst_31391 = (state_31436[(10)]);
var inst_31395 = cljs.core.chunk_first.call(null,inst_31391);
var inst_31396 = cljs.core.chunk_rest.call(null,inst_31391);
var inst_31397 = cljs.core.count.call(null,inst_31395);
var inst_31377 = inst_31396;
var inst_31378 = inst_31395;
var inst_31379 = inst_31397;
var inst_31380 = (0);
var state_31436__$1 = (function (){var statearr_31470 = state_31436;
(statearr_31470[(12)] = inst_31380);

(statearr_31470[(14)] = inst_31378);

(statearr_31470[(15)] = inst_31379);

(statearr_31470[(16)] = inst_31377);

return statearr_31470;
})();
var statearr_31471_31512 = state_31436__$1;
(statearr_31471_31512[(2)] = null);

(statearr_31471_31512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (10))){
var inst_31380 = (state_31436[(12)]);
var inst_31378 = (state_31436[(14)]);
var inst_31379 = (state_31436[(15)]);
var inst_31377 = (state_31436[(16)]);
var inst_31385 = cljs.core._nth.call(null,inst_31378,inst_31380);
var inst_31386 = cljs.core.async.muxch_STAR_.call(null,inst_31385);
var inst_31387 = cljs.core.async.close_BANG_.call(null,inst_31386);
var inst_31388 = (inst_31380 + (1));
var tmp31466 = inst_31378;
var tmp31467 = inst_31379;
var tmp31468 = inst_31377;
var inst_31377__$1 = tmp31468;
var inst_31378__$1 = tmp31466;
var inst_31379__$1 = tmp31467;
var inst_31380__$1 = inst_31388;
var state_31436__$1 = (function (){var statearr_31472 = state_31436;
(statearr_31472[(12)] = inst_31380__$1);

(statearr_31472[(17)] = inst_31387);

(statearr_31472[(14)] = inst_31378__$1);

(statearr_31472[(15)] = inst_31379__$1);

(statearr_31472[(16)] = inst_31377__$1);

return statearr_31472;
})();
var statearr_31473_31513 = state_31436__$1;
(statearr_31473_31513[(2)] = null);

(statearr_31473_31513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (18))){
var inst_31406 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31474_31514 = state_31436__$1;
(statearr_31474_31514[(2)] = inst_31406);

(statearr_31474_31514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (8))){
var inst_31380 = (state_31436[(12)]);
var inst_31379 = (state_31436[(15)]);
var inst_31382 = (inst_31380 < inst_31379);
var inst_31383 = inst_31382;
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31383)){
var statearr_31475_31515 = state_31436__$1;
(statearr_31475_31515[(1)] = (10));

} else {
var statearr_31476_31516 = state_31436__$1;
(statearr_31476_31516[(1)] = (11));

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
});})(c__19652__auto___31488,mults,ensure_mult,p))
;
return ((function (switch__19587__auto__,c__19652__auto___31488,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_31480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31480[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_31480[(1)] = (1));

return statearr_31480;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_31436){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_31436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e31481){if((e31481 instanceof Object)){
var ex__19591__auto__ = e31481;
var statearr_31482_31517 = state_31436;
(statearr_31482_31517[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31518 = state_31436;
state_31436 = G__31518;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___31488,mults,ensure_mult,p))
})();
var state__19654__auto__ = (function (){var statearr_31483 = f__19653__auto__.call(null);
(statearr_31483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___31488);

return statearr_31483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___31488,mults,ensure_mult,p))
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
var args31519 = [];
var len__17508__auto___31522 = arguments.length;
var i__17509__auto___31523 = (0);
while(true){
if((i__17509__auto___31523 < len__17508__auto___31522)){
args31519.push((arguments[i__17509__auto___31523]));

var G__31524 = (i__17509__auto___31523 + (1));
i__17509__auto___31523 = G__31524;
continue;
} else {
}
break;
}

var G__31521 = args31519.length;
switch (G__31521) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31519.length)].join('')));

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
var args31526 = [];
var len__17508__auto___31529 = arguments.length;
var i__17509__auto___31530 = (0);
while(true){
if((i__17509__auto___31530 < len__17508__auto___31529)){
args31526.push((arguments[i__17509__auto___31530]));

var G__31531 = (i__17509__auto___31530 + (1));
i__17509__auto___31530 = G__31531;
continue;
} else {
}
break;
}

var G__31528 = args31526.length;
switch (G__31528) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31526.length)].join('')));

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
var args31533 = [];
var len__17508__auto___31604 = arguments.length;
var i__17509__auto___31605 = (0);
while(true){
if((i__17509__auto___31605 < len__17508__auto___31604)){
args31533.push((arguments[i__17509__auto___31605]));

var G__31606 = (i__17509__auto___31605 + (1));
i__17509__auto___31605 = G__31606;
continue;
} else {
}
break;
}

var G__31535 = args31533.length;
switch (G__31535) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31533.length)].join('')));

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
var c__19652__auto___31608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___31608,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___31608,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31574){
var state_val_31575 = (state_31574[(1)]);
if((state_val_31575 === (7))){
var state_31574__$1 = state_31574;
var statearr_31576_31609 = state_31574__$1;
(statearr_31576_31609[(2)] = null);

(statearr_31576_31609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (1))){
var state_31574__$1 = state_31574;
var statearr_31577_31610 = state_31574__$1;
(statearr_31577_31610[(2)] = null);

(statearr_31577_31610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (4))){
var inst_31538 = (state_31574[(7)]);
var inst_31540 = (inst_31538 < cnt);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31540)){
var statearr_31578_31611 = state_31574__$1;
(statearr_31578_31611[(1)] = (6));

} else {
var statearr_31579_31612 = state_31574__$1;
(statearr_31579_31612[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (15))){
var inst_31570 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31580_31613 = state_31574__$1;
(statearr_31580_31613[(2)] = inst_31570);

(statearr_31580_31613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (13))){
var inst_31563 = cljs.core.async.close_BANG_.call(null,out);
var state_31574__$1 = state_31574;
var statearr_31581_31614 = state_31574__$1;
(statearr_31581_31614[(2)] = inst_31563);

(statearr_31581_31614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (6))){
var state_31574__$1 = state_31574;
var statearr_31582_31615 = state_31574__$1;
(statearr_31582_31615[(2)] = null);

(statearr_31582_31615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (3))){
var inst_31572 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31574__$1,inst_31572);
} else {
if((state_val_31575 === (12))){
var inst_31560 = (state_31574[(8)]);
var inst_31560__$1 = (state_31574[(2)]);
var inst_31561 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31560__$1);
var state_31574__$1 = (function (){var statearr_31583 = state_31574;
(statearr_31583[(8)] = inst_31560__$1);

return statearr_31583;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31584_31616 = state_31574__$1;
(statearr_31584_31616[(1)] = (13));

} else {
var statearr_31585_31617 = state_31574__$1;
(statearr_31585_31617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (2))){
var inst_31537 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31538 = (0);
var state_31574__$1 = (function (){var statearr_31586 = state_31574;
(statearr_31586[(9)] = inst_31537);

(statearr_31586[(7)] = inst_31538);

return statearr_31586;
})();
var statearr_31587_31618 = state_31574__$1;
(statearr_31587_31618[(2)] = null);

(statearr_31587_31618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (11))){
var inst_31538 = (state_31574[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31574,(10),Object,null,(9));
var inst_31547 = chs__$1.call(null,inst_31538);
var inst_31548 = done.call(null,inst_31538);
var inst_31549 = cljs.core.async.take_BANG_.call(null,inst_31547,inst_31548);
var state_31574__$1 = state_31574;
var statearr_31588_31619 = state_31574__$1;
(statearr_31588_31619[(2)] = inst_31549);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (9))){
var inst_31538 = (state_31574[(7)]);
var inst_31551 = (state_31574[(2)]);
var inst_31552 = (inst_31538 + (1));
var inst_31538__$1 = inst_31552;
var state_31574__$1 = (function (){var statearr_31589 = state_31574;
(statearr_31589[(10)] = inst_31551);

(statearr_31589[(7)] = inst_31538__$1);

return statearr_31589;
})();
var statearr_31590_31620 = state_31574__$1;
(statearr_31590_31620[(2)] = null);

(statearr_31590_31620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (5))){
var inst_31558 = (state_31574[(2)]);
var state_31574__$1 = (function (){var statearr_31591 = state_31574;
(statearr_31591[(11)] = inst_31558);

return statearr_31591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31574__$1,(12),dchan);
} else {
if((state_val_31575 === (14))){
var inst_31560 = (state_31574[(8)]);
var inst_31565 = cljs.core.apply.call(null,f,inst_31560);
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31574__$1,(16),out,inst_31565);
} else {
if((state_val_31575 === (16))){
var inst_31567 = (state_31574[(2)]);
var state_31574__$1 = (function (){var statearr_31592 = state_31574;
(statearr_31592[(12)] = inst_31567);

return statearr_31592;
})();
var statearr_31593_31621 = state_31574__$1;
(statearr_31593_31621[(2)] = null);

(statearr_31593_31621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (10))){
var inst_31542 = (state_31574[(2)]);
var inst_31543 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31574__$1 = (function (){var statearr_31594 = state_31574;
(statearr_31594[(13)] = inst_31542);

return statearr_31594;
})();
var statearr_31595_31622 = state_31574__$1;
(statearr_31595_31622[(2)] = inst_31543);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (8))){
var inst_31556 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31596_31623 = state_31574__$1;
(statearr_31596_31623[(2)] = inst_31556);

(statearr_31596_31623[(1)] = (5));


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
});})(c__19652__auto___31608,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19587__auto__,c__19652__auto___31608,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_31600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31600[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_31600[(1)] = (1));

return statearr_31600;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_31574){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_31574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e31601){if((e31601 instanceof Object)){
var ex__19591__auto__ = e31601;
var statearr_31602_31624 = state_31574;
(statearr_31602_31624[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31625 = state_31574;
state_31574 = G__31625;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_31574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_31574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___31608,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19654__auto__ = (function (){var statearr_31603 = f__19653__auto__.call(null);
(statearr_31603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___31608);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___31608,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31627 = [];
var len__17508__auto___31683 = arguments.length;
var i__17509__auto___31684 = (0);
while(true){
if((i__17509__auto___31684 < len__17508__auto___31683)){
args31627.push((arguments[i__17509__auto___31684]));

var G__31685 = (i__17509__auto___31684 + (1));
i__17509__auto___31684 = G__31685;
continue;
} else {
}
break;
}

var G__31629 = args31627.length;
switch (G__31629) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31627.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___31687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___31687,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___31687,out){
return (function (state_31659){
var state_val_31660 = (state_31659[(1)]);
if((state_val_31660 === (7))){
var inst_31638 = (state_31659[(7)]);
var inst_31639 = (state_31659[(8)]);
var inst_31638__$1 = (state_31659[(2)]);
var inst_31639__$1 = cljs.core.nth.call(null,inst_31638__$1,(0),null);
var inst_31640 = cljs.core.nth.call(null,inst_31638__$1,(1),null);
var inst_31641 = (inst_31639__$1 == null);
var state_31659__$1 = (function (){var statearr_31661 = state_31659;
(statearr_31661[(7)] = inst_31638__$1);

(statearr_31661[(9)] = inst_31640);

(statearr_31661[(8)] = inst_31639__$1);

return statearr_31661;
})();
if(cljs.core.truth_(inst_31641)){
var statearr_31662_31688 = state_31659__$1;
(statearr_31662_31688[(1)] = (8));

} else {
var statearr_31663_31689 = state_31659__$1;
(statearr_31663_31689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (1))){
var inst_31630 = cljs.core.vec.call(null,chs);
var inst_31631 = inst_31630;
var state_31659__$1 = (function (){var statearr_31664 = state_31659;
(statearr_31664[(10)] = inst_31631);

return statearr_31664;
})();
var statearr_31665_31690 = state_31659__$1;
(statearr_31665_31690[(2)] = null);

(statearr_31665_31690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (4))){
var inst_31631 = (state_31659[(10)]);
var state_31659__$1 = state_31659;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31659__$1,(7),inst_31631);
} else {
if((state_val_31660 === (6))){
var inst_31655 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31666_31691 = state_31659__$1;
(statearr_31666_31691[(2)] = inst_31655);

(statearr_31666_31691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (3))){
var inst_31657 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31659__$1,inst_31657);
} else {
if((state_val_31660 === (2))){
var inst_31631 = (state_31659[(10)]);
var inst_31633 = cljs.core.count.call(null,inst_31631);
var inst_31634 = (inst_31633 > (0));
var state_31659__$1 = state_31659;
if(cljs.core.truth_(inst_31634)){
var statearr_31668_31692 = state_31659__$1;
(statearr_31668_31692[(1)] = (4));

} else {
var statearr_31669_31693 = state_31659__$1;
(statearr_31669_31693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (11))){
var inst_31631 = (state_31659[(10)]);
var inst_31648 = (state_31659[(2)]);
var tmp31667 = inst_31631;
var inst_31631__$1 = tmp31667;
var state_31659__$1 = (function (){var statearr_31670 = state_31659;
(statearr_31670[(10)] = inst_31631__$1);

(statearr_31670[(11)] = inst_31648);

return statearr_31670;
})();
var statearr_31671_31694 = state_31659__$1;
(statearr_31671_31694[(2)] = null);

(statearr_31671_31694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (9))){
var inst_31639 = (state_31659[(8)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31659__$1,(11),out,inst_31639);
} else {
if((state_val_31660 === (5))){
var inst_31653 = cljs.core.async.close_BANG_.call(null,out);
var state_31659__$1 = state_31659;
var statearr_31672_31695 = state_31659__$1;
(statearr_31672_31695[(2)] = inst_31653);

(statearr_31672_31695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (10))){
var inst_31651 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31673_31696 = state_31659__$1;
(statearr_31673_31696[(2)] = inst_31651);

(statearr_31673_31696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (8))){
var inst_31631 = (state_31659[(10)]);
var inst_31638 = (state_31659[(7)]);
var inst_31640 = (state_31659[(9)]);
var inst_31639 = (state_31659[(8)]);
var inst_31643 = (function (){var cs = inst_31631;
var vec__31636 = inst_31638;
var v = inst_31639;
var c = inst_31640;
return ((function (cs,vec__31636,v,c,inst_31631,inst_31638,inst_31640,inst_31639,state_val_31660,c__19652__auto___31687,out){
return (function (p1__31626_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31626_SHARP_);
});
;})(cs,vec__31636,v,c,inst_31631,inst_31638,inst_31640,inst_31639,state_val_31660,c__19652__auto___31687,out))
})();
var inst_31644 = cljs.core.filterv.call(null,inst_31643,inst_31631);
var inst_31631__$1 = inst_31644;
var state_31659__$1 = (function (){var statearr_31674 = state_31659;
(statearr_31674[(10)] = inst_31631__$1);

return statearr_31674;
})();
var statearr_31675_31697 = state_31659__$1;
(statearr_31675_31697[(2)] = null);

(statearr_31675_31697[(1)] = (2));


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
});})(c__19652__auto___31687,out))
;
return ((function (switch__19587__auto__,c__19652__auto___31687,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_31679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31679[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_31679[(1)] = (1));

return statearr_31679;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_31659){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_31659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e31680){if((e31680 instanceof Object)){
var ex__19591__auto__ = e31680;
var statearr_31681_31698 = state_31659;
(statearr_31681_31698[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31699 = state_31659;
state_31659 = G__31699;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_31659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_31659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___31687,out))
})();
var state__19654__auto__ = (function (){var statearr_31682 = f__19653__auto__.call(null);
(statearr_31682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___31687);

return statearr_31682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___31687,out))
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
var args31700 = [];
var len__17508__auto___31749 = arguments.length;
var i__17509__auto___31750 = (0);
while(true){
if((i__17509__auto___31750 < len__17508__auto___31749)){
args31700.push((arguments[i__17509__auto___31750]));

var G__31751 = (i__17509__auto___31750 + (1));
i__17509__auto___31750 = G__31751;
continue;
} else {
}
break;
}

var G__31702 = args31700.length;
switch (G__31702) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31700.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___31753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___31753,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___31753,out){
return (function (state_31726){
var state_val_31727 = (state_31726[(1)]);
if((state_val_31727 === (7))){
var inst_31708 = (state_31726[(7)]);
var inst_31708__$1 = (state_31726[(2)]);
var inst_31709 = (inst_31708__$1 == null);
var inst_31710 = cljs.core.not.call(null,inst_31709);
var state_31726__$1 = (function (){var statearr_31728 = state_31726;
(statearr_31728[(7)] = inst_31708__$1);

return statearr_31728;
})();
if(inst_31710){
var statearr_31729_31754 = state_31726__$1;
(statearr_31729_31754[(1)] = (8));

} else {
var statearr_31730_31755 = state_31726__$1;
(statearr_31730_31755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (1))){
var inst_31703 = (0);
var state_31726__$1 = (function (){var statearr_31731 = state_31726;
(statearr_31731[(8)] = inst_31703);

return statearr_31731;
})();
var statearr_31732_31756 = state_31726__$1;
(statearr_31732_31756[(2)] = null);

(statearr_31732_31756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (4))){
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31726__$1,(7),ch);
} else {
if((state_val_31727 === (6))){
var inst_31721 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
var statearr_31733_31757 = state_31726__$1;
(statearr_31733_31757[(2)] = inst_31721);

(statearr_31733_31757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (3))){
var inst_31723 = (state_31726[(2)]);
var inst_31724 = cljs.core.async.close_BANG_.call(null,out);
var state_31726__$1 = (function (){var statearr_31734 = state_31726;
(statearr_31734[(9)] = inst_31723);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31726__$1,inst_31724);
} else {
if((state_val_31727 === (2))){
var inst_31703 = (state_31726[(8)]);
var inst_31705 = (inst_31703 < n);
var state_31726__$1 = state_31726;
if(cljs.core.truth_(inst_31705)){
var statearr_31735_31758 = state_31726__$1;
(statearr_31735_31758[(1)] = (4));

} else {
var statearr_31736_31759 = state_31726__$1;
(statearr_31736_31759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (11))){
var inst_31703 = (state_31726[(8)]);
var inst_31713 = (state_31726[(2)]);
var inst_31714 = (inst_31703 + (1));
var inst_31703__$1 = inst_31714;
var state_31726__$1 = (function (){var statearr_31737 = state_31726;
(statearr_31737[(8)] = inst_31703__$1);

(statearr_31737[(10)] = inst_31713);

return statearr_31737;
})();
var statearr_31738_31760 = state_31726__$1;
(statearr_31738_31760[(2)] = null);

(statearr_31738_31760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (9))){
var state_31726__$1 = state_31726;
var statearr_31739_31761 = state_31726__$1;
(statearr_31739_31761[(2)] = null);

(statearr_31739_31761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (5))){
var state_31726__$1 = state_31726;
var statearr_31740_31762 = state_31726__$1;
(statearr_31740_31762[(2)] = null);

(statearr_31740_31762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (10))){
var inst_31718 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
var statearr_31741_31763 = state_31726__$1;
(statearr_31741_31763[(2)] = inst_31718);

(statearr_31741_31763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31727 === (8))){
var inst_31708 = (state_31726[(7)]);
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31726__$1,(11),out,inst_31708);
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
});})(c__19652__auto___31753,out))
;
return ((function (switch__19587__auto__,c__19652__auto___31753,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_31745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31745[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_31745[(1)] = (1));

return statearr_31745;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_31726){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_31726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e31746){if((e31746 instanceof Object)){
var ex__19591__auto__ = e31746;
var statearr_31747_31764 = state_31726;
(statearr_31747_31764[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31765 = state_31726;
state_31726 = G__31765;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_31726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_31726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___31753,out))
})();
var state__19654__auto__ = (function (){var statearr_31748 = f__19653__auto__.call(null);
(statearr_31748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___31753);

return statearr_31748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___31753,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31773 = (function (map_LT_,f,ch,meta31774){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31774 = meta31774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31775,meta31774__$1){
var self__ = this;
var _31775__$1 = this;
return (new cljs.core.async.t31773(self__.map_LT_,self__.f,self__.ch,meta31774__$1));
});

cljs.core.async.t31773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31775){
var self__ = this;
var _31775__$1 = this;
return self__.meta31774;
});

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31776 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31776 = (function (map_LT_,f,ch,meta31774,_,fn1,meta31777){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31774 = meta31774;
this._ = _;
this.fn1 = fn1;
this.meta31777 = meta31777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31778,meta31777__$1){
var self__ = this;
var _31778__$1 = this;
return (new cljs.core.async.t31776(self__.map_LT_,self__.f,self__.ch,self__.meta31774,self__._,self__.fn1,meta31777__$1));
});})(___$1))
;

cljs.core.async.t31776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31778){
var self__ = this;
var _31778__$1 = this;
return self__.meta31777;
});})(___$1))
;

cljs.core.async.t31776.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31766_SHARP_){
return f1.call(null,(((p1__31766_SHARP_ == null))?null:self__.f.call(null,p1__31766_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31776.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31774","meta31774",-225765884,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t31773","cljs.core.async/t31773",-1474093316,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31777","meta31777",-1364483714,null)], null);
});})(___$1))
;

cljs.core.async.t31776.cljs$lang$type = true;

cljs.core.async.t31776.cljs$lang$ctorStr = "cljs.core.async/t31776";

cljs.core.async.t31776.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t31776");
});})(___$1))
;

cljs.core.async.__GT_t31776 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31776(map_LT___$1,f__$1,ch__$1,meta31774__$1,___$2,fn1__$1,meta31777){
return (new cljs.core.async.t31776(map_LT___$1,f__$1,ch__$1,meta31774__$1,___$2,fn1__$1,meta31777));
});})(___$1))
;

}

return (new cljs.core.async.t31776(self__.map_LT_,self__.f,self__.ch,self__.meta31774,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16457__auto__ = ret;
if(cljs.core.truth_(and__16457__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16457__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31774","meta31774",-225765884,null)], null);
});

cljs.core.async.t31773.cljs$lang$type = true;

cljs.core.async.t31773.cljs$lang$ctorStr = "cljs.core.async/t31773";

cljs.core.async.t31773.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t31773");
});

cljs.core.async.__GT_t31773 = (function cljs$core$async$map_LT__$___GT_t31773(map_LT___$1,f__$1,ch__$1,meta31774){
return (new cljs.core.async.t31773(map_LT___$1,f__$1,ch__$1,meta31774));
});

}

return (new cljs.core.async.t31773(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31782 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31782 = (function (map_GT_,f,ch,meta31783){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31783 = meta31783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31784,meta31783__$1){
var self__ = this;
var _31784__$1 = this;
return (new cljs.core.async.t31782(self__.map_GT_,self__.f,self__.ch,meta31783__$1));
});

cljs.core.async.t31782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31784){
var self__ = this;
var _31784__$1 = this;
return self__.meta31783;
});

cljs.core.async.t31782.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31782.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31782.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31783","meta31783",1081019883,null)], null);
});

cljs.core.async.t31782.cljs$lang$type = true;

cljs.core.async.t31782.cljs$lang$ctorStr = "cljs.core.async/t31782";

cljs.core.async.t31782.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t31782");
});

cljs.core.async.__GT_t31782 = (function cljs$core$async$map_GT__$___GT_t31782(map_GT___$1,f__$1,ch__$1,meta31783){
return (new cljs.core.async.t31782(map_GT___$1,f__$1,ch__$1,meta31783));
});

}

return (new cljs.core.async.t31782(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31788 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31788 = (function (filter_GT_,p,ch,meta31789){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31789 = meta31789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31790,meta31789__$1){
var self__ = this;
var _31790__$1 = this;
return (new cljs.core.async.t31788(self__.filter_GT_,self__.p,self__.ch,meta31789__$1));
});

cljs.core.async.t31788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31790){
var self__ = this;
var _31790__$1 = this;
return self__.meta31789;
});

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31789","meta31789",758347115,null)], null);
});

cljs.core.async.t31788.cljs$lang$type = true;

cljs.core.async.t31788.cljs$lang$ctorStr = "cljs.core.async/t31788";

cljs.core.async.t31788.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t31788");
});

cljs.core.async.__GT_t31788 = (function cljs$core$async$filter_GT__$___GT_t31788(filter_GT___$1,p__$1,ch__$1,meta31789){
return (new cljs.core.async.t31788(filter_GT___$1,p__$1,ch__$1,meta31789));
});

}

return (new cljs.core.async.t31788(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31791 = [];
var len__17508__auto___31835 = arguments.length;
var i__17509__auto___31836 = (0);
while(true){
if((i__17509__auto___31836 < len__17508__auto___31835)){
args31791.push((arguments[i__17509__auto___31836]));

var G__31837 = (i__17509__auto___31836 + (1));
i__17509__auto___31836 = G__31837;
continue;
} else {
}
break;
}

var G__31793 = args31791.length;
switch (G__31793) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31791.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___31839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___31839,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___31839,out){
return (function (state_31814){
var state_val_31815 = (state_31814[(1)]);
if((state_val_31815 === (7))){
var inst_31810 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
var statearr_31816_31840 = state_31814__$1;
(statearr_31816_31840[(2)] = inst_31810);

(statearr_31816_31840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (1))){
var state_31814__$1 = state_31814;
var statearr_31817_31841 = state_31814__$1;
(statearr_31817_31841[(2)] = null);

(statearr_31817_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (4))){
var inst_31796 = (state_31814[(7)]);
var inst_31796__$1 = (state_31814[(2)]);
var inst_31797 = (inst_31796__$1 == null);
var state_31814__$1 = (function (){var statearr_31818 = state_31814;
(statearr_31818[(7)] = inst_31796__$1);

return statearr_31818;
})();
if(cljs.core.truth_(inst_31797)){
var statearr_31819_31842 = state_31814__$1;
(statearr_31819_31842[(1)] = (5));

} else {
var statearr_31820_31843 = state_31814__$1;
(statearr_31820_31843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (6))){
var inst_31796 = (state_31814[(7)]);
var inst_31801 = p.call(null,inst_31796);
var state_31814__$1 = state_31814;
if(cljs.core.truth_(inst_31801)){
var statearr_31821_31844 = state_31814__$1;
(statearr_31821_31844[(1)] = (8));

} else {
var statearr_31822_31845 = state_31814__$1;
(statearr_31822_31845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (3))){
var inst_31812 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31814__$1,inst_31812);
} else {
if((state_val_31815 === (2))){
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31814__$1,(4),ch);
} else {
if((state_val_31815 === (11))){
var inst_31804 = (state_31814[(2)]);
var state_31814__$1 = state_31814;
var statearr_31823_31846 = state_31814__$1;
(statearr_31823_31846[(2)] = inst_31804);

(statearr_31823_31846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (9))){
var state_31814__$1 = state_31814;
var statearr_31824_31847 = state_31814__$1;
(statearr_31824_31847[(2)] = null);

(statearr_31824_31847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (5))){
var inst_31799 = cljs.core.async.close_BANG_.call(null,out);
var state_31814__$1 = state_31814;
var statearr_31825_31848 = state_31814__$1;
(statearr_31825_31848[(2)] = inst_31799);

(statearr_31825_31848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (10))){
var inst_31807 = (state_31814[(2)]);
var state_31814__$1 = (function (){var statearr_31826 = state_31814;
(statearr_31826[(8)] = inst_31807);

return statearr_31826;
})();
var statearr_31827_31849 = state_31814__$1;
(statearr_31827_31849[(2)] = null);

(statearr_31827_31849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31815 === (8))){
var inst_31796 = (state_31814[(7)]);
var state_31814__$1 = state_31814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31814__$1,(11),out,inst_31796);
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
});})(c__19652__auto___31839,out))
;
return ((function (switch__19587__auto__,c__19652__auto___31839,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_31831 = [null,null,null,null,null,null,null,null,null];
(statearr_31831[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_31831[(1)] = (1));

return statearr_31831;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_31814){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_31814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e31832){if((e31832 instanceof Object)){
var ex__19591__auto__ = e31832;
var statearr_31833_31850 = state_31814;
(statearr_31833_31850[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31851 = state_31814;
state_31814 = G__31851;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_31814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_31814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___31839,out))
})();
var state__19654__auto__ = (function (){var statearr_31834 = f__19653__auto__.call(null);
(statearr_31834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___31839);

return statearr_31834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___31839,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args31852 = [];
var len__17508__auto___31855 = arguments.length;
var i__17509__auto___31856 = (0);
while(true){
if((i__17509__auto___31856 < len__17508__auto___31855)){
args31852.push((arguments[i__17509__auto___31856]));

var G__31857 = (i__17509__auto___31856 + (1));
i__17509__auto___31856 = G__31857;
continue;
} else {
}
break;
}

var G__31854 = args31852.length;
switch (G__31854) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31852.length)].join('')));

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
var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__){
return (function (state_32024){
var state_val_32025 = (state_32024[(1)]);
if((state_val_32025 === (7))){
var inst_32020 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32026_32067 = state_32024__$1;
(statearr_32026_32067[(2)] = inst_32020);

(statearr_32026_32067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (20))){
var inst_31990 = (state_32024[(7)]);
var inst_32001 = (state_32024[(2)]);
var inst_32002 = cljs.core.next.call(null,inst_31990);
var inst_31976 = inst_32002;
var inst_31977 = null;
var inst_31978 = (0);
var inst_31979 = (0);
var state_32024__$1 = (function (){var statearr_32027 = state_32024;
(statearr_32027[(8)] = inst_31976);

(statearr_32027[(9)] = inst_31977);

(statearr_32027[(10)] = inst_31979);

(statearr_32027[(11)] = inst_32001);

(statearr_32027[(12)] = inst_31978);

return statearr_32027;
})();
var statearr_32028_32068 = state_32024__$1;
(statearr_32028_32068[(2)] = null);

(statearr_32028_32068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (1))){
var state_32024__$1 = state_32024;
var statearr_32029_32069 = state_32024__$1;
(statearr_32029_32069[(2)] = null);

(statearr_32029_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (4))){
var inst_31965 = (state_32024[(13)]);
var inst_31965__$1 = (state_32024[(2)]);
var inst_31966 = (inst_31965__$1 == null);
var state_32024__$1 = (function (){var statearr_32030 = state_32024;
(statearr_32030[(13)] = inst_31965__$1);

return statearr_32030;
})();
if(cljs.core.truth_(inst_31966)){
var statearr_32031_32070 = state_32024__$1;
(statearr_32031_32070[(1)] = (5));

} else {
var statearr_32032_32071 = state_32024__$1;
(statearr_32032_32071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (15))){
var state_32024__$1 = state_32024;
var statearr_32036_32072 = state_32024__$1;
(statearr_32036_32072[(2)] = null);

(statearr_32036_32072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (21))){
var state_32024__$1 = state_32024;
var statearr_32037_32073 = state_32024__$1;
(statearr_32037_32073[(2)] = null);

(statearr_32037_32073[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (13))){
var inst_31976 = (state_32024[(8)]);
var inst_31977 = (state_32024[(9)]);
var inst_31979 = (state_32024[(10)]);
var inst_31978 = (state_32024[(12)]);
var inst_31986 = (state_32024[(2)]);
var inst_31987 = (inst_31979 + (1));
var tmp32033 = inst_31976;
var tmp32034 = inst_31977;
var tmp32035 = inst_31978;
var inst_31976__$1 = tmp32033;
var inst_31977__$1 = tmp32034;
var inst_31978__$1 = tmp32035;
var inst_31979__$1 = inst_31987;
var state_32024__$1 = (function (){var statearr_32038 = state_32024;
(statearr_32038[(14)] = inst_31986);

(statearr_32038[(8)] = inst_31976__$1);

(statearr_32038[(9)] = inst_31977__$1);

(statearr_32038[(10)] = inst_31979__$1);

(statearr_32038[(12)] = inst_31978__$1);

return statearr_32038;
})();
var statearr_32039_32074 = state_32024__$1;
(statearr_32039_32074[(2)] = null);

(statearr_32039_32074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (22))){
var state_32024__$1 = state_32024;
var statearr_32040_32075 = state_32024__$1;
(statearr_32040_32075[(2)] = null);

(statearr_32040_32075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (6))){
var inst_31965 = (state_32024[(13)]);
var inst_31974 = f.call(null,inst_31965);
var inst_31975 = cljs.core.seq.call(null,inst_31974);
var inst_31976 = inst_31975;
var inst_31977 = null;
var inst_31978 = (0);
var inst_31979 = (0);
var state_32024__$1 = (function (){var statearr_32041 = state_32024;
(statearr_32041[(8)] = inst_31976);

(statearr_32041[(9)] = inst_31977);

(statearr_32041[(10)] = inst_31979);

(statearr_32041[(12)] = inst_31978);

return statearr_32041;
})();
var statearr_32042_32076 = state_32024__$1;
(statearr_32042_32076[(2)] = null);

(statearr_32042_32076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (17))){
var inst_31990 = (state_32024[(7)]);
var inst_31994 = cljs.core.chunk_first.call(null,inst_31990);
var inst_31995 = cljs.core.chunk_rest.call(null,inst_31990);
var inst_31996 = cljs.core.count.call(null,inst_31994);
var inst_31976 = inst_31995;
var inst_31977 = inst_31994;
var inst_31978 = inst_31996;
var inst_31979 = (0);
var state_32024__$1 = (function (){var statearr_32043 = state_32024;
(statearr_32043[(8)] = inst_31976);

(statearr_32043[(9)] = inst_31977);

(statearr_32043[(10)] = inst_31979);

(statearr_32043[(12)] = inst_31978);

return statearr_32043;
})();
var statearr_32044_32077 = state_32024__$1;
(statearr_32044_32077[(2)] = null);

(statearr_32044_32077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (3))){
var inst_32022 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32024__$1,inst_32022);
} else {
if((state_val_32025 === (12))){
var inst_32010 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32045_32078 = state_32024__$1;
(statearr_32045_32078[(2)] = inst_32010);

(statearr_32045_32078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (2))){
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32024__$1,(4),in$);
} else {
if((state_val_32025 === (23))){
var inst_32018 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32046_32079 = state_32024__$1;
(statearr_32046_32079[(2)] = inst_32018);

(statearr_32046_32079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (19))){
var inst_32005 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32047_32080 = state_32024__$1;
(statearr_32047_32080[(2)] = inst_32005);

(statearr_32047_32080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (11))){
var inst_31976 = (state_32024[(8)]);
var inst_31990 = (state_32024[(7)]);
var inst_31990__$1 = cljs.core.seq.call(null,inst_31976);
var state_32024__$1 = (function (){var statearr_32048 = state_32024;
(statearr_32048[(7)] = inst_31990__$1);

return statearr_32048;
})();
if(inst_31990__$1){
var statearr_32049_32081 = state_32024__$1;
(statearr_32049_32081[(1)] = (14));

} else {
var statearr_32050_32082 = state_32024__$1;
(statearr_32050_32082[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (9))){
var inst_32012 = (state_32024[(2)]);
var inst_32013 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32024__$1 = (function (){var statearr_32051 = state_32024;
(statearr_32051[(15)] = inst_32012);

return statearr_32051;
})();
if(cljs.core.truth_(inst_32013)){
var statearr_32052_32083 = state_32024__$1;
(statearr_32052_32083[(1)] = (21));

} else {
var statearr_32053_32084 = state_32024__$1;
(statearr_32053_32084[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (5))){
var inst_31968 = cljs.core.async.close_BANG_.call(null,out);
var state_32024__$1 = state_32024;
var statearr_32054_32085 = state_32024__$1;
(statearr_32054_32085[(2)] = inst_31968);

(statearr_32054_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (14))){
var inst_31990 = (state_32024[(7)]);
var inst_31992 = cljs.core.chunked_seq_QMARK_.call(null,inst_31990);
var state_32024__$1 = state_32024;
if(inst_31992){
var statearr_32055_32086 = state_32024__$1;
(statearr_32055_32086[(1)] = (17));

} else {
var statearr_32056_32087 = state_32024__$1;
(statearr_32056_32087[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (16))){
var inst_32008 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32057_32088 = state_32024__$1;
(statearr_32057_32088[(2)] = inst_32008);

(statearr_32057_32088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (10))){
var inst_31977 = (state_32024[(9)]);
var inst_31979 = (state_32024[(10)]);
var inst_31984 = cljs.core._nth.call(null,inst_31977,inst_31979);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32024__$1,(13),out,inst_31984);
} else {
if((state_val_32025 === (18))){
var inst_31990 = (state_32024[(7)]);
var inst_31999 = cljs.core.first.call(null,inst_31990);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32024__$1,(20),out,inst_31999);
} else {
if((state_val_32025 === (8))){
var inst_31979 = (state_32024[(10)]);
var inst_31978 = (state_32024[(12)]);
var inst_31981 = (inst_31979 < inst_31978);
var inst_31982 = inst_31981;
var state_32024__$1 = state_32024;
if(cljs.core.truth_(inst_31982)){
var statearr_32058_32089 = state_32024__$1;
(statearr_32058_32089[(1)] = (10));

} else {
var statearr_32059_32090 = state_32024__$1;
(statearr_32059_32090[(1)] = (11));

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
});})(c__19652__auto__))
;
return ((function (switch__19587__auto__,c__19652__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_32063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32063[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__);

(statearr_32063[(1)] = (1));

return statearr_32063;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____1 = (function (state_32024){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_32024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e32064){if((e32064 instanceof Object)){
var ex__19591__auto__ = e32064;
var statearr_32065_32091 = state_32024;
(statearr_32065_32091[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32092 = state_32024;
state_32024 = G__32092;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__ = function(state_32024){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____1.call(this,state_32024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_32066 = f__19653__auto__.call(null);
(statearr_32066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_32066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto__))
);

return c__19652__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args32093 = [];
var len__17508__auto___32096 = arguments.length;
var i__17509__auto___32097 = (0);
while(true){
if((i__17509__auto___32097 < len__17508__auto___32096)){
args32093.push((arguments[i__17509__auto___32097]));

var G__32098 = (i__17509__auto___32097 + (1));
i__17509__auto___32097 = G__32098;
continue;
} else {
}
break;
}

var G__32095 = args32093.length;
switch (G__32095) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32093.length)].join('')));

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
var args32100 = [];
var len__17508__auto___32103 = arguments.length;
var i__17509__auto___32104 = (0);
while(true){
if((i__17509__auto___32104 < len__17508__auto___32103)){
args32100.push((arguments[i__17509__auto___32104]));

var G__32105 = (i__17509__auto___32104 + (1));
i__17509__auto___32104 = G__32105;
continue;
} else {
}
break;
}

var G__32102 = args32100.length;
switch (G__32102) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32100.length)].join('')));

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
var args32107 = [];
var len__17508__auto___32158 = arguments.length;
var i__17509__auto___32159 = (0);
while(true){
if((i__17509__auto___32159 < len__17508__auto___32158)){
args32107.push((arguments[i__17509__auto___32159]));

var G__32160 = (i__17509__auto___32159 + (1));
i__17509__auto___32159 = G__32160;
continue;
} else {
}
break;
}

var G__32109 = args32107.length;
switch (G__32109) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32107.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___32162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___32162,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___32162,out){
return (function (state_32133){
var state_val_32134 = (state_32133[(1)]);
if((state_val_32134 === (7))){
var inst_32128 = (state_32133[(2)]);
var state_32133__$1 = state_32133;
var statearr_32135_32163 = state_32133__$1;
(statearr_32135_32163[(2)] = inst_32128);

(statearr_32135_32163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (1))){
var inst_32110 = null;
var state_32133__$1 = (function (){var statearr_32136 = state_32133;
(statearr_32136[(7)] = inst_32110);

return statearr_32136;
})();
var statearr_32137_32164 = state_32133__$1;
(statearr_32137_32164[(2)] = null);

(statearr_32137_32164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (4))){
var inst_32113 = (state_32133[(8)]);
var inst_32113__$1 = (state_32133[(2)]);
var inst_32114 = (inst_32113__$1 == null);
var inst_32115 = cljs.core.not.call(null,inst_32114);
var state_32133__$1 = (function (){var statearr_32138 = state_32133;
(statearr_32138[(8)] = inst_32113__$1);

return statearr_32138;
})();
if(inst_32115){
var statearr_32139_32165 = state_32133__$1;
(statearr_32139_32165[(1)] = (5));

} else {
var statearr_32140_32166 = state_32133__$1;
(statearr_32140_32166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (6))){
var state_32133__$1 = state_32133;
var statearr_32141_32167 = state_32133__$1;
(statearr_32141_32167[(2)] = null);

(statearr_32141_32167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (3))){
var inst_32130 = (state_32133[(2)]);
var inst_32131 = cljs.core.async.close_BANG_.call(null,out);
var state_32133__$1 = (function (){var statearr_32142 = state_32133;
(statearr_32142[(9)] = inst_32130);

return statearr_32142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32133__$1,inst_32131);
} else {
if((state_val_32134 === (2))){
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32133__$1,(4),ch);
} else {
if((state_val_32134 === (11))){
var inst_32113 = (state_32133[(8)]);
var inst_32122 = (state_32133[(2)]);
var inst_32110 = inst_32113;
var state_32133__$1 = (function (){var statearr_32143 = state_32133;
(statearr_32143[(10)] = inst_32122);

(statearr_32143[(7)] = inst_32110);

return statearr_32143;
})();
var statearr_32144_32168 = state_32133__$1;
(statearr_32144_32168[(2)] = null);

(statearr_32144_32168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (9))){
var inst_32113 = (state_32133[(8)]);
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32133__$1,(11),out,inst_32113);
} else {
if((state_val_32134 === (5))){
var inst_32113 = (state_32133[(8)]);
var inst_32110 = (state_32133[(7)]);
var inst_32117 = cljs.core._EQ_.call(null,inst_32113,inst_32110);
var state_32133__$1 = state_32133;
if(inst_32117){
var statearr_32146_32169 = state_32133__$1;
(statearr_32146_32169[(1)] = (8));

} else {
var statearr_32147_32170 = state_32133__$1;
(statearr_32147_32170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (10))){
var inst_32125 = (state_32133[(2)]);
var state_32133__$1 = state_32133;
var statearr_32148_32171 = state_32133__$1;
(statearr_32148_32171[(2)] = inst_32125);

(statearr_32148_32171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (8))){
var inst_32110 = (state_32133[(7)]);
var tmp32145 = inst_32110;
var inst_32110__$1 = tmp32145;
var state_32133__$1 = (function (){var statearr_32149 = state_32133;
(statearr_32149[(7)] = inst_32110__$1);

return statearr_32149;
})();
var statearr_32150_32172 = state_32133__$1;
(statearr_32150_32172[(2)] = null);

(statearr_32150_32172[(1)] = (2));


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
});})(c__19652__auto___32162,out))
;
return ((function (switch__19587__auto__,c__19652__auto___32162,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_32154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32154[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_32154[(1)] = (1));

return statearr_32154;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_32133){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_32133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e32155){if((e32155 instanceof Object)){
var ex__19591__auto__ = e32155;
var statearr_32156_32173 = state_32133;
(statearr_32156_32173[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32174 = state_32133;
state_32133 = G__32174;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_32133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_32133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___32162,out))
})();
var state__19654__auto__ = (function (){var statearr_32157 = f__19653__auto__.call(null);
(statearr_32157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___32162);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___32162,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args32175 = [];
var len__17508__auto___32245 = arguments.length;
var i__17509__auto___32246 = (0);
while(true){
if((i__17509__auto___32246 < len__17508__auto___32245)){
args32175.push((arguments[i__17509__auto___32246]));

var G__32247 = (i__17509__auto___32246 + (1));
i__17509__auto___32246 = G__32247;
continue;
} else {
}
break;
}

var G__32177 = args32175.length;
switch (G__32177) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32175.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___32249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___32249,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___32249,out){
return (function (state_32215){
var state_val_32216 = (state_32215[(1)]);
if((state_val_32216 === (7))){
var inst_32211 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32217_32250 = state_32215__$1;
(statearr_32217_32250[(2)] = inst_32211);

(statearr_32217_32250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (1))){
var inst_32178 = (new Array(n));
var inst_32179 = inst_32178;
var inst_32180 = (0);
var state_32215__$1 = (function (){var statearr_32218 = state_32215;
(statearr_32218[(7)] = inst_32179);

(statearr_32218[(8)] = inst_32180);

return statearr_32218;
})();
var statearr_32219_32251 = state_32215__$1;
(statearr_32219_32251[(2)] = null);

(statearr_32219_32251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (4))){
var inst_32183 = (state_32215[(9)]);
var inst_32183__$1 = (state_32215[(2)]);
var inst_32184 = (inst_32183__$1 == null);
var inst_32185 = cljs.core.not.call(null,inst_32184);
var state_32215__$1 = (function (){var statearr_32220 = state_32215;
(statearr_32220[(9)] = inst_32183__$1);

return statearr_32220;
})();
if(inst_32185){
var statearr_32221_32252 = state_32215__$1;
(statearr_32221_32252[(1)] = (5));

} else {
var statearr_32222_32253 = state_32215__$1;
(statearr_32222_32253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (15))){
var inst_32205 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32223_32254 = state_32215__$1;
(statearr_32223_32254[(2)] = inst_32205);

(statearr_32223_32254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (13))){
var state_32215__$1 = state_32215;
var statearr_32224_32255 = state_32215__$1;
(statearr_32224_32255[(2)] = null);

(statearr_32224_32255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (6))){
var inst_32180 = (state_32215[(8)]);
var inst_32201 = (inst_32180 > (0));
var state_32215__$1 = state_32215;
if(cljs.core.truth_(inst_32201)){
var statearr_32225_32256 = state_32215__$1;
(statearr_32225_32256[(1)] = (12));

} else {
var statearr_32226_32257 = state_32215__$1;
(statearr_32226_32257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (3))){
var inst_32213 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32215__$1,inst_32213);
} else {
if((state_val_32216 === (12))){
var inst_32179 = (state_32215[(7)]);
var inst_32203 = cljs.core.vec.call(null,inst_32179);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32215__$1,(15),out,inst_32203);
} else {
if((state_val_32216 === (2))){
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32215__$1,(4),ch);
} else {
if((state_val_32216 === (11))){
var inst_32195 = (state_32215[(2)]);
var inst_32196 = (new Array(n));
var inst_32179 = inst_32196;
var inst_32180 = (0);
var state_32215__$1 = (function (){var statearr_32227 = state_32215;
(statearr_32227[(10)] = inst_32195);

(statearr_32227[(7)] = inst_32179);

(statearr_32227[(8)] = inst_32180);

return statearr_32227;
})();
var statearr_32228_32258 = state_32215__$1;
(statearr_32228_32258[(2)] = null);

(statearr_32228_32258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (9))){
var inst_32179 = (state_32215[(7)]);
var inst_32193 = cljs.core.vec.call(null,inst_32179);
var state_32215__$1 = state_32215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32215__$1,(11),out,inst_32193);
} else {
if((state_val_32216 === (5))){
var inst_32179 = (state_32215[(7)]);
var inst_32188 = (state_32215[(11)]);
var inst_32180 = (state_32215[(8)]);
var inst_32183 = (state_32215[(9)]);
var inst_32187 = (inst_32179[inst_32180] = inst_32183);
var inst_32188__$1 = (inst_32180 + (1));
var inst_32189 = (inst_32188__$1 < n);
var state_32215__$1 = (function (){var statearr_32229 = state_32215;
(statearr_32229[(11)] = inst_32188__$1);

(statearr_32229[(12)] = inst_32187);

return statearr_32229;
})();
if(cljs.core.truth_(inst_32189)){
var statearr_32230_32259 = state_32215__$1;
(statearr_32230_32259[(1)] = (8));

} else {
var statearr_32231_32260 = state_32215__$1;
(statearr_32231_32260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (14))){
var inst_32208 = (state_32215[(2)]);
var inst_32209 = cljs.core.async.close_BANG_.call(null,out);
var state_32215__$1 = (function (){var statearr_32233 = state_32215;
(statearr_32233[(13)] = inst_32208);

return statearr_32233;
})();
var statearr_32234_32261 = state_32215__$1;
(statearr_32234_32261[(2)] = inst_32209);

(statearr_32234_32261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (10))){
var inst_32199 = (state_32215[(2)]);
var state_32215__$1 = state_32215;
var statearr_32235_32262 = state_32215__$1;
(statearr_32235_32262[(2)] = inst_32199);

(statearr_32235_32262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32216 === (8))){
var inst_32179 = (state_32215[(7)]);
var inst_32188 = (state_32215[(11)]);
var tmp32232 = inst_32179;
var inst_32179__$1 = tmp32232;
var inst_32180 = inst_32188;
var state_32215__$1 = (function (){var statearr_32236 = state_32215;
(statearr_32236[(7)] = inst_32179__$1);

(statearr_32236[(8)] = inst_32180);

return statearr_32236;
})();
var statearr_32237_32263 = state_32215__$1;
(statearr_32237_32263[(2)] = null);

(statearr_32237_32263[(1)] = (2));


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
});})(c__19652__auto___32249,out))
;
return ((function (switch__19587__auto__,c__19652__auto___32249,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_32241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32241[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_32241[(1)] = (1));

return statearr_32241;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_32215){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_32215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e32242){if((e32242 instanceof Object)){
var ex__19591__auto__ = e32242;
var statearr_32243_32264 = state_32215;
(statearr_32243_32264[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32265 = state_32215;
state_32215 = G__32265;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_32215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_32215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___32249,out))
})();
var state__19654__auto__ = (function (){var statearr_32244 = f__19653__auto__.call(null);
(statearr_32244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___32249);

return statearr_32244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___32249,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args32266 = [];
var len__17508__auto___32340 = arguments.length;
var i__17509__auto___32341 = (0);
while(true){
if((i__17509__auto___32341 < len__17508__auto___32340)){
args32266.push((arguments[i__17509__auto___32341]));

var G__32342 = (i__17509__auto___32341 + (1));
i__17509__auto___32341 = G__32342;
continue;
} else {
}
break;
}

var G__32268 = args32266.length;
switch (G__32268) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32266.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___32344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___32344,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___32344,out){
return (function (state_32310){
var state_val_32311 = (state_32310[(1)]);
if((state_val_32311 === (7))){
var inst_32306 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32312_32345 = state_32310__$1;
(statearr_32312_32345[(2)] = inst_32306);

(statearr_32312_32345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (1))){
var inst_32269 = [];
var inst_32270 = inst_32269;
var inst_32271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32310__$1 = (function (){var statearr_32313 = state_32310;
(statearr_32313[(7)] = inst_32271);

(statearr_32313[(8)] = inst_32270);

return statearr_32313;
})();
var statearr_32314_32346 = state_32310__$1;
(statearr_32314_32346[(2)] = null);

(statearr_32314_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (4))){
var inst_32274 = (state_32310[(9)]);
var inst_32274__$1 = (state_32310[(2)]);
var inst_32275 = (inst_32274__$1 == null);
var inst_32276 = cljs.core.not.call(null,inst_32275);
var state_32310__$1 = (function (){var statearr_32315 = state_32310;
(statearr_32315[(9)] = inst_32274__$1);

return statearr_32315;
})();
if(inst_32276){
var statearr_32316_32347 = state_32310__$1;
(statearr_32316_32347[(1)] = (5));

} else {
var statearr_32317_32348 = state_32310__$1;
(statearr_32317_32348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (15))){
var inst_32300 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32318_32349 = state_32310__$1;
(statearr_32318_32349[(2)] = inst_32300);

(statearr_32318_32349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (13))){
var state_32310__$1 = state_32310;
var statearr_32319_32350 = state_32310__$1;
(statearr_32319_32350[(2)] = null);

(statearr_32319_32350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (6))){
var inst_32270 = (state_32310[(8)]);
var inst_32295 = inst_32270.length;
var inst_32296 = (inst_32295 > (0));
var state_32310__$1 = state_32310;
if(cljs.core.truth_(inst_32296)){
var statearr_32320_32351 = state_32310__$1;
(statearr_32320_32351[(1)] = (12));

} else {
var statearr_32321_32352 = state_32310__$1;
(statearr_32321_32352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (3))){
var inst_32308 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32310__$1,inst_32308);
} else {
if((state_val_32311 === (12))){
var inst_32270 = (state_32310[(8)]);
var inst_32298 = cljs.core.vec.call(null,inst_32270);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32310__$1,(15),out,inst_32298);
} else {
if((state_val_32311 === (2))){
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32310__$1,(4),ch);
} else {
if((state_val_32311 === (11))){
var inst_32274 = (state_32310[(9)]);
var inst_32278 = (state_32310[(10)]);
var inst_32288 = (state_32310[(2)]);
var inst_32289 = [];
var inst_32290 = inst_32289.push(inst_32274);
var inst_32270 = inst_32289;
var inst_32271 = inst_32278;
var state_32310__$1 = (function (){var statearr_32322 = state_32310;
(statearr_32322[(7)] = inst_32271);

(statearr_32322[(8)] = inst_32270);

(statearr_32322[(11)] = inst_32290);

(statearr_32322[(12)] = inst_32288);

return statearr_32322;
})();
var statearr_32323_32353 = state_32310__$1;
(statearr_32323_32353[(2)] = null);

(statearr_32323_32353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (9))){
var inst_32270 = (state_32310[(8)]);
var inst_32286 = cljs.core.vec.call(null,inst_32270);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32310__$1,(11),out,inst_32286);
} else {
if((state_val_32311 === (5))){
var inst_32274 = (state_32310[(9)]);
var inst_32271 = (state_32310[(7)]);
var inst_32278 = (state_32310[(10)]);
var inst_32278__$1 = f.call(null,inst_32274);
var inst_32279 = cljs.core._EQ_.call(null,inst_32278__$1,inst_32271);
var inst_32280 = cljs.core.keyword_identical_QMARK_.call(null,inst_32271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32281 = (inst_32279) || (inst_32280);
var state_32310__$1 = (function (){var statearr_32324 = state_32310;
(statearr_32324[(10)] = inst_32278__$1);

return statearr_32324;
})();
if(cljs.core.truth_(inst_32281)){
var statearr_32325_32354 = state_32310__$1;
(statearr_32325_32354[(1)] = (8));

} else {
var statearr_32326_32355 = state_32310__$1;
(statearr_32326_32355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (14))){
var inst_32303 = (state_32310[(2)]);
var inst_32304 = cljs.core.async.close_BANG_.call(null,out);
var state_32310__$1 = (function (){var statearr_32328 = state_32310;
(statearr_32328[(13)] = inst_32303);

return statearr_32328;
})();
var statearr_32329_32356 = state_32310__$1;
(statearr_32329_32356[(2)] = inst_32304);

(statearr_32329_32356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (10))){
var inst_32293 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32330_32357 = state_32310__$1;
(statearr_32330_32357[(2)] = inst_32293);

(statearr_32330_32357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (8))){
var inst_32274 = (state_32310[(9)]);
var inst_32270 = (state_32310[(8)]);
var inst_32278 = (state_32310[(10)]);
var inst_32283 = inst_32270.push(inst_32274);
var tmp32327 = inst_32270;
var inst_32270__$1 = tmp32327;
var inst_32271 = inst_32278;
var state_32310__$1 = (function (){var statearr_32331 = state_32310;
(statearr_32331[(14)] = inst_32283);

(statearr_32331[(7)] = inst_32271);

(statearr_32331[(8)] = inst_32270__$1);

return statearr_32331;
})();
var statearr_32332_32358 = state_32310__$1;
(statearr_32332_32358[(2)] = null);

(statearr_32332_32358[(1)] = (2));


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
});})(c__19652__auto___32344,out))
;
return ((function (switch__19587__auto__,c__19652__auto___32344,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_32336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32336[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_32336[(1)] = (1));

return statearr_32336;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_32310){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_32310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e32337){if((e32337 instanceof Object)){
var ex__19591__auto__ = e32337;
var statearr_32338_32359 = state_32310;
(statearr_32338_32359[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32360 = state_32310;
state_32310 = G__32360;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_32310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_32310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___32344,out))
})();
var state__19654__auto__ = (function (){var statearr_32339 = f__19653__auto__.call(null);
(statearr_32339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___32344);

return statearr_32339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___32344,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map