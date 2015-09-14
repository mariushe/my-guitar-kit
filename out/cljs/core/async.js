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
if(typeof cljs.core.async.t25522 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25522 = (function (fn_handler,f,meta25523){
this.fn_handler = fn_handler;
this.f = f;
this.meta25523 = meta25523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25524,meta25523__$1){
var self__ = this;
var _25524__$1 = this;
return (new cljs.core.async.t25522(self__.fn_handler,self__.f,meta25523__$1));
});

cljs.core.async.t25522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25524){
var self__ = this;
var _25524__$1 = this;
return self__.meta25523;
});

cljs.core.async.t25522.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25523","meta25523",1212956120,null)], null);
});

cljs.core.async.t25522.cljs$lang$type = true;

cljs.core.async.t25522.cljs$lang$ctorStr = "cljs.core.async/t25522";

cljs.core.async.t25522.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t25522");
});

cljs.core.async.__GT_t25522 = (function cljs$core$async$fn_handler_$___GT_t25522(fn_handler__$1,f__$1,meta25523){
return (new cljs.core.async.t25522(fn_handler__$1,f__$1,meta25523));
});

}

return (new cljs.core.async.t25522(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25527 = [];
var len__17508__auto___25530 = arguments.length;
var i__17509__auto___25531 = (0);
while(true){
if((i__17509__auto___25531 < len__17508__auto___25530)){
args25527.push((arguments[i__17509__auto___25531]));

var G__25532 = (i__17509__auto___25531 + (1));
i__17509__auto___25531 = G__25532;
continue;
} else {
}
break;
}

var G__25529 = args25527.length;
switch (G__25529) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25527.length)].join('')));

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
var args25534 = [];
var len__17508__auto___25537 = arguments.length;
var i__17509__auto___25538 = (0);
while(true){
if((i__17509__auto___25538 < len__17508__auto___25537)){
args25534.push((arguments[i__17509__auto___25538]));

var G__25539 = (i__17509__auto___25538 + (1));
i__17509__auto___25538 = G__25539;
continue;
} else {
}
break;
}

var G__25536 = args25534.length;
switch (G__25536) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25534.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25541 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25541);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25541,ret){
return (function (){
return fn1.call(null,val_25541);
});})(val_25541,ret))
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
var args25542 = [];
var len__17508__auto___25545 = arguments.length;
var i__17509__auto___25546 = (0);
while(true){
if((i__17509__auto___25546 < len__17508__auto___25545)){
args25542.push((arguments[i__17509__auto___25546]));

var G__25547 = (i__17509__auto___25546 + (1));
i__17509__auto___25546 = G__25547;
continue;
} else {
}
break;
}

var G__25544 = args25542.length;
switch (G__25544) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25542.length)].join('')));

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
var n__17353__auto___25549 = n;
var x_25550 = (0);
while(true){
if((x_25550 < n__17353__auto___25549)){
(a[x_25550] = (0));

var G__25551 = (x_25550 + (1));
x_25550 = G__25551;
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

var G__25552 = (i + (1));
i = G__25552;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25556 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25556 = (function (alt_flag,flag,meta25557){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25557 = meta25557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25558,meta25557__$1){
var self__ = this;
var _25558__$1 = this;
return (new cljs.core.async.t25556(self__.alt_flag,self__.flag,meta25557__$1));
});})(flag))
;

cljs.core.async.t25556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25558){
var self__ = this;
var _25558__$1 = this;
return self__.meta25557;
});})(flag))
;

cljs.core.async.t25556.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25556.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25557","meta25557",1782926616,null)], null);
});})(flag))
;

cljs.core.async.t25556.cljs$lang$type = true;

cljs.core.async.t25556.cljs$lang$ctorStr = "cljs.core.async/t25556";

cljs.core.async.t25556.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t25556");
});})(flag))
;

cljs.core.async.__GT_t25556 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25556(alt_flag__$1,flag__$1,meta25557){
return (new cljs.core.async.t25556(alt_flag__$1,flag__$1,meta25557));
});})(flag))
;

}

return (new cljs.core.async.t25556(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25562 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25562 = (function (alt_handler,flag,cb,meta25563){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25563 = meta25563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25564,meta25563__$1){
var self__ = this;
var _25564__$1 = this;
return (new cljs.core.async.t25562(self__.alt_handler,self__.flag,self__.cb,meta25563__$1));
});

cljs.core.async.t25562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25564){
var self__ = this;
var _25564__$1 = this;
return self__.meta25563;
});

cljs.core.async.t25562.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25563","meta25563",1054381494,null)], null);
});

cljs.core.async.t25562.cljs$lang$type = true;

cljs.core.async.t25562.cljs$lang$ctorStr = "cljs.core.async/t25562";

cljs.core.async.t25562.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t25562");
});

cljs.core.async.__GT_t25562 = (function cljs$core$async$alt_handler_$___GT_t25562(alt_handler__$1,flag__$1,cb__$1,meta25563){
return (new cljs.core.async.t25562(alt_handler__$1,flag__$1,cb__$1,meta25563));
});

}

return (new cljs.core.async.t25562(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25565_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25565_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25566_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25566_SHARP_,port], null));
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
var G__25567 = (i + (1));
i = G__25567;
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
var len__17508__auto___25573 = arguments.length;
var i__17509__auto___25574 = (0);
while(true){
if((i__17509__auto___25574 < len__17508__auto___25573)){
args__17515__auto__.push((arguments[i__17509__auto___25574]));

var G__25575 = (i__17509__auto___25574 + (1));
i__17509__auto___25574 = G__25575;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((1) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17516__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25570){
var map__25571 = p__25570;
var map__25571__$1 = ((((!((map__25571 == null)))?((((map__25571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25571):map__25571);
var opts = map__25571__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25568){
var G__25569 = cljs.core.first.call(null,seq25568);
var seq25568__$1 = cljs.core.next.call(null,seq25568);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25569,seq25568__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args25576 = [];
var len__17508__auto___25626 = arguments.length;
var i__17509__auto___25627 = (0);
while(true){
if((i__17509__auto___25627 < len__17508__auto___25626)){
args25576.push((arguments[i__17509__auto___25627]));

var G__25628 = (i__17509__auto___25627 + (1));
i__17509__auto___25627 = G__25628;
continue;
} else {
}
break;
}

var G__25578 = args25576.length;
switch (G__25578) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25576.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19652__auto___25630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___25630){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___25630){
return (function (state_25602){
var state_val_25603 = (state_25602[(1)]);
if((state_val_25603 === (7))){
var inst_25598 = (state_25602[(2)]);
var state_25602__$1 = state_25602;
var statearr_25604_25631 = state_25602__$1;
(statearr_25604_25631[(2)] = inst_25598);

(statearr_25604_25631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (1))){
var state_25602__$1 = state_25602;
var statearr_25605_25632 = state_25602__$1;
(statearr_25605_25632[(2)] = null);

(statearr_25605_25632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (4))){
var inst_25581 = (state_25602[(7)]);
var inst_25581__$1 = (state_25602[(2)]);
var inst_25582 = (inst_25581__$1 == null);
var state_25602__$1 = (function (){var statearr_25606 = state_25602;
(statearr_25606[(7)] = inst_25581__$1);

return statearr_25606;
})();
if(cljs.core.truth_(inst_25582)){
var statearr_25607_25633 = state_25602__$1;
(statearr_25607_25633[(1)] = (5));

} else {
var statearr_25608_25634 = state_25602__$1;
(statearr_25608_25634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (13))){
var state_25602__$1 = state_25602;
var statearr_25609_25635 = state_25602__$1;
(statearr_25609_25635[(2)] = null);

(statearr_25609_25635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (6))){
var inst_25581 = (state_25602[(7)]);
var state_25602__$1 = state_25602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25602__$1,(11),to,inst_25581);
} else {
if((state_val_25603 === (3))){
var inst_25600 = (state_25602[(2)]);
var state_25602__$1 = state_25602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25602__$1,inst_25600);
} else {
if((state_val_25603 === (12))){
var state_25602__$1 = state_25602;
var statearr_25610_25636 = state_25602__$1;
(statearr_25610_25636[(2)] = null);

(statearr_25610_25636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (2))){
var state_25602__$1 = state_25602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25602__$1,(4),from);
} else {
if((state_val_25603 === (11))){
var inst_25591 = (state_25602[(2)]);
var state_25602__$1 = state_25602;
if(cljs.core.truth_(inst_25591)){
var statearr_25611_25637 = state_25602__$1;
(statearr_25611_25637[(1)] = (12));

} else {
var statearr_25612_25638 = state_25602__$1;
(statearr_25612_25638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (9))){
var state_25602__$1 = state_25602;
var statearr_25613_25639 = state_25602__$1;
(statearr_25613_25639[(2)] = null);

(statearr_25613_25639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (5))){
var state_25602__$1 = state_25602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25614_25640 = state_25602__$1;
(statearr_25614_25640[(1)] = (8));

} else {
var statearr_25615_25641 = state_25602__$1;
(statearr_25615_25641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (14))){
var inst_25596 = (state_25602[(2)]);
var state_25602__$1 = state_25602;
var statearr_25616_25642 = state_25602__$1;
(statearr_25616_25642[(2)] = inst_25596);

(statearr_25616_25642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (10))){
var inst_25588 = (state_25602[(2)]);
var state_25602__$1 = state_25602;
var statearr_25617_25643 = state_25602__$1;
(statearr_25617_25643[(2)] = inst_25588);

(statearr_25617_25643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25603 === (8))){
var inst_25585 = cljs.core.async.close_BANG_.call(null,to);
var state_25602__$1 = state_25602;
var statearr_25618_25644 = state_25602__$1;
(statearr_25618_25644[(2)] = inst_25585);

(statearr_25618_25644[(1)] = (10));


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
});})(c__19652__auto___25630))
;
return ((function (switch__19587__auto__,c__19652__auto___25630){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_25622 = [null,null,null,null,null,null,null,null];
(statearr_25622[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_25622[(1)] = (1));

return statearr_25622;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_25602){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25623){if((e25623 instanceof Object)){
var ex__19591__auto__ = e25623;
var statearr_25624_25645 = state_25602;
(statearr_25624_25645[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25646 = state_25602;
state_25602 = G__25646;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_25602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_25602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___25630))
})();
var state__19654__auto__ = (function (){var statearr_25625 = f__19653__auto__.call(null);
(statearr_25625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___25630);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___25630))
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
return (function (p__25830){
var vec__25831 = p__25830;
var v = cljs.core.nth.call(null,vec__25831,(0),null);
var p = cljs.core.nth.call(null,vec__25831,(1),null);
var job = vec__25831;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19652__auto___26013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___26013,res,vec__25831,v,p,job,jobs,results){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___26013,res,vec__25831,v,p,job,jobs,results){
return (function (state_25836){
var state_val_25837 = (state_25836[(1)]);
if((state_val_25837 === (1))){
var state_25836__$1 = state_25836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25836__$1,(2),res,v);
} else {
if((state_val_25837 === (2))){
var inst_25833 = (state_25836[(2)]);
var inst_25834 = cljs.core.async.close_BANG_.call(null,res);
var state_25836__$1 = (function (){var statearr_25838 = state_25836;
(statearr_25838[(7)] = inst_25833);

return statearr_25838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25836__$1,inst_25834);
} else {
return null;
}
}
});})(c__19652__auto___26013,res,vec__25831,v,p,job,jobs,results))
;
return ((function (switch__19587__auto__,c__19652__auto___26013,res,vec__25831,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_25842 = [null,null,null,null,null,null,null,null];
(statearr_25842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_25842[(1)] = (1));

return statearr_25842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_25836){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25843){if((e25843 instanceof Object)){
var ex__19591__auto__ = e25843;
var statearr_25844_26014 = state_25836;
(statearr_25844_26014[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26015 = state_25836;
state_25836 = G__26015;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_25836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_25836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___26013,res,vec__25831,v,p,job,jobs,results))
})();
var state__19654__auto__ = (function (){var statearr_25845 = f__19653__auto__.call(null);
(statearr_25845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___26013);

return statearr_25845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___26013,res,vec__25831,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25846){
var vec__25847 = p__25846;
var v = cljs.core.nth.call(null,vec__25847,(0),null);
var p = cljs.core.nth.call(null,vec__25847,(1),null);
var job = vec__25847;
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
var n__17353__auto___26016 = n;
var __26017 = (0);
while(true){
if((__26017 < n__17353__auto___26016)){
var G__25848_26018 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25848_26018) {
case "compute":
var c__19652__auto___26020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26017,c__19652__auto___26020,G__25848_26018,n__17353__auto___26016,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (__26017,c__19652__auto___26020,G__25848_26018,n__17353__auto___26016,jobs,results,process,async){
return (function (state_25861){
var state_val_25862 = (state_25861[(1)]);
if((state_val_25862 === (1))){
var state_25861__$1 = state_25861;
var statearr_25863_26021 = state_25861__$1;
(statearr_25863_26021[(2)] = null);

(statearr_25863_26021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25862 === (2))){
var state_25861__$1 = state_25861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25861__$1,(4),jobs);
} else {
if((state_val_25862 === (3))){
var inst_25859 = (state_25861[(2)]);
var state_25861__$1 = state_25861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25861__$1,inst_25859);
} else {
if((state_val_25862 === (4))){
var inst_25851 = (state_25861[(2)]);
var inst_25852 = process.call(null,inst_25851);
var state_25861__$1 = state_25861;
if(cljs.core.truth_(inst_25852)){
var statearr_25864_26022 = state_25861__$1;
(statearr_25864_26022[(1)] = (5));

} else {
var statearr_25865_26023 = state_25861__$1;
(statearr_25865_26023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25862 === (5))){
var state_25861__$1 = state_25861;
var statearr_25866_26024 = state_25861__$1;
(statearr_25866_26024[(2)] = null);

(statearr_25866_26024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25862 === (6))){
var state_25861__$1 = state_25861;
var statearr_25867_26025 = state_25861__$1;
(statearr_25867_26025[(2)] = null);

(statearr_25867_26025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25862 === (7))){
var inst_25857 = (state_25861[(2)]);
var state_25861__$1 = state_25861;
var statearr_25868_26026 = state_25861__$1;
(statearr_25868_26026[(2)] = inst_25857);

(statearr_25868_26026[(1)] = (3));


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
});})(__26017,c__19652__auto___26020,G__25848_26018,n__17353__auto___26016,jobs,results,process,async))
;
return ((function (__26017,switch__19587__auto__,c__19652__auto___26020,G__25848_26018,n__17353__auto___26016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_25872 = [null,null,null,null,null,null,null];
(statearr_25872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_25872[(1)] = (1));

return statearr_25872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_25861){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25873){if((e25873 instanceof Object)){
var ex__19591__auto__ = e25873;
var statearr_25874_26027 = state_25861;
(statearr_25874_26027[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26028 = state_25861;
state_25861 = G__26028;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_25861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_25861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(__26017,switch__19587__auto__,c__19652__auto___26020,G__25848_26018,n__17353__auto___26016,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_25875 = f__19653__auto__.call(null);
(statearr_25875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___26020);

return statearr_25875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(__26017,c__19652__auto___26020,G__25848_26018,n__17353__auto___26016,jobs,results,process,async))
);


break;
case "async":
var c__19652__auto___26029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26017,c__19652__auto___26029,G__25848_26018,n__17353__auto___26016,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (__26017,c__19652__auto___26029,G__25848_26018,n__17353__auto___26016,jobs,results,process,async){
return (function (state_25888){
var state_val_25889 = (state_25888[(1)]);
if((state_val_25889 === (1))){
var state_25888__$1 = state_25888;
var statearr_25890_26030 = state_25888__$1;
(statearr_25890_26030[(2)] = null);

(statearr_25890_26030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (2))){
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25888__$1,(4),jobs);
} else {
if((state_val_25889 === (3))){
var inst_25886 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25888__$1,inst_25886);
} else {
if((state_val_25889 === (4))){
var inst_25878 = (state_25888[(2)]);
var inst_25879 = async.call(null,inst_25878);
var state_25888__$1 = state_25888;
if(cljs.core.truth_(inst_25879)){
var statearr_25891_26031 = state_25888__$1;
(statearr_25891_26031[(1)] = (5));

} else {
var statearr_25892_26032 = state_25888__$1;
(statearr_25892_26032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (5))){
var state_25888__$1 = state_25888;
var statearr_25893_26033 = state_25888__$1;
(statearr_25893_26033[(2)] = null);

(statearr_25893_26033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (6))){
var state_25888__$1 = state_25888;
var statearr_25894_26034 = state_25888__$1;
(statearr_25894_26034[(2)] = null);

(statearr_25894_26034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (7))){
var inst_25884 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25895_26035 = state_25888__$1;
(statearr_25895_26035[(2)] = inst_25884);

(statearr_25895_26035[(1)] = (3));


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
});})(__26017,c__19652__auto___26029,G__25848_26018,n__17353__auto___26016,jobs,results,process,async))
;
return ((function (__26017,switch__19587__auto__,c__19652__auto___26029,G__25848_26018,n__17353__auto___26016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_25899 = [null,null,null,null,null,null,null];
(statearr_25899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_25899[(1)] = (1));

return statearr_25899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_25888){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25900){if((e25900 instanceof Object)){
var ex__19591__auto__ = e25900;
var statearr_25901_26036 = state_25888;
(statearr_25901_26036[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26037 = state_25888;
state_25888 = G__26037;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_25888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_25888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(__26017,switch__19587__auto__,c__19652__auto___26029,G__25848_26018,n__17353__auto___26016,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_25902 = f__19653__auto__.call(null);
(statearr_25902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___26029);

return statearr_25902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(__26017,c__19652__auto___26029,G__25848_26018,n__17353__auto___26016,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26038 = (__26017 + (1));
__26017 = G__26038;
continue;
} else {
}
break;
}

var c__19652__auto___26039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___26039,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___26039,jobs,results,process,async){
return (function (state_25924){
var state_val_25925 = (state_25924[(1)]);
if((state_val_25925 === (1))){
var state_25924__$1 = state_25924;
var statearr_25926_26040 = state_25924__$1;
(statearr_25926_26040[(2)] = null);

(statearr_25926_26040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (2))){
var state_25924__$1 = state_25924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25924__$1,(4),from);
} else {
if((state_val_25925 === (3))){
var inst_25922 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25924__$1,inst_25922);
} else {
if((state_val_25925 === (4))){
var inst_25905 = (state_25924[(7)]);
var inst_25905__$1 = (state_25924[(2)]);
var inst_25906 = (inst_25905__$1 == null);
var state_25924__$1 = (function (){var statearr_25927 = state_25924;
(statearr_25927[(7)] = inst_25905__$1);

return statearr_25927;
})();
if(cljs.core.truth_(inst_25906)){
var statearr_25928_26041 = state_25924__$1;
(statearr_25928_26041[(1)] = (5));

} else {
var statearr_25929_26042 = state_25924__$1;
(statearr_25929_26042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (5))){
var inst_25908 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25924__$1 = state_25924;
var statearr_25930_26043 = state_25924__$1;
(statearr_25930_26043[(2)] = inst_25908);

(statearr_25930_26043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (6))){
var inst_25910 = (state_25924[(8)]);
var inst_25905 = (state_25924[(7)]);
var inst_25910__$1 = cljs.core.async.chan.call(null,(1));
var inst_25911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25912 = [inst_25905,inst_25910__$1];
var inst_25913 = (new cljs.core.PersistentVector(null,2,(5),inst_25911,inst_25912,null));
var state_25924__$1 = (function (){var statearr_25931 = state_25924;
(statearr_25931[(8)] = inst_25910__$1);

return statearr_25931;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25924__$1,(8),jobs,inst_25913);
} else {
if((state_val_25925 === (7))){
var inst_25920 = (state_25924[(2)]);
var state_25924__$1 = state_25924;
var statearr_25932_26044 = state_25924__$1;
(statearr_25932_26044[(2)] = inst_25920);

(statearr_25932_26044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25925 === (8))){
var inst_25910 = (state_25924[(8)]);
var inst_25915 = (state_25924[(2)]);
var state_25924__$1 = (function (){var statearr_25933 = state_25924;
(statearr_25933[(9)] = inst_25915);

return statearr_25933;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25924__$1,(9),results,inst_25910);
} else {
if((state_val_25925 === (9))){
var inst_25917 = (state_25924[(2)]);
var state_25924__$1 = (function (){var statearr_25934 = state_25924;
(statearr_25934[(10)] = inst_25917);

return statearr_25934;
})();
var statearr_25935_26045 = state_25924__$1;
(statearr_25935_26045[(2)] = null);

(statearr_25935_26045[(1)] = (2));


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
});})(c__19652__auto___26039,jobs,results,process,async))
;
return ((function (switch__19587__auto__,c__19652__auto___26039,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0 = (function (){
var statearr_25939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_25939[(1)] = (1));

return statearr_25939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_25924){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object)){
var ex__19591__auto__ = e25940;
var statearr_25941_26046 = state_25924;
(statearr_25941_26046[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26047 = state_25924;
state_25924 = G__26047;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_25924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_25924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___26039,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_25942 = f__19653__auto__.call(null);
(statearr_25942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___26039);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___26039,jobs,results,process,async))
);


var c__19652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto__,jobs,results,process,async){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto__,jobs,results,process,async){
return (function (state_25980){
var state_val_25981 = (state_25980[(1)]);
if((state_val_25981 === (7))){
var inst_25976 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
var statearr_25982_26048 = state_25980__$1;
(statearr_25982_26048[(2)] = inst_25976);

(statearr_25982_26048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (20))){
var state_25980__$1 = state_25980;
var statearr_25983_26049 = state_25980__$1;
(statearr_25983_26049[(2)] = null);

(statearr_25983_26049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (1))){
var state_25980__$1 = state_25980;
var statearr_25984_26050 = state_25980__$1;
(statearr_25984_26050[(2)] = null);

(statearr_25984_26050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (4))){
var inst_25945 = (state_25980[(7)]);
var inst_25945__$1 = (state_25980[(2)]);
var inst_25946 = (inst_25945__$1 == null);
var state_25980__$1 = (function (){var statearr_25985 = state_25980;
(statearr_25985[(7)] = inst_25945__$1);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25946)){
var statearr_25986_26051 = state_25980__$1;
(statearr_25986_26051[(1)] = (5));

} else {
var statearr_25987_26052 = state_25980__$1;
(statearr_25987_26052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (15))){
var inst_25958 = (state_25980[(8)]);
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25980__$1,(18),to,inst_25958);
} else {
if((state_val_25981 === (21))){
var inst_25971 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
var statearr_25988_26053 = state_25980__$1;
(statearr_25988_26053[(2)] = inst_25971);

(statearr_25988_26053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (13))){
var inst_25973 = (state_25980[(2)]);
var state_25980__$1 = (function (){var statearr_25989 = state_25980;
(statearr_25989[(9)] = inst_25973);

return statearr_25989;
})();
var statearr_25990_26054 = state_25980__$1;
(statearr_25990_26054[(2)] = null);

(statearr_25990_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (6))){
var inst_25945 = (state_25980[(7)]);
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,(11),inst_25945);
} else {
if((state_val_25981 === (17))){
var inst_25966 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
if(cljs.core.truth_(inst_25966)){
var statearr_25991_26055 = state_25980__$1;
(statearr_25991_26055[(1)] = (19));

} else {
var statearr_25992_26056 = state_25980__$1;
(statearr_25992_26056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (3))){
var inst_25978 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25980__$1,inst_25978);
} else {
if((state_val_25981 === (12))){
var inst_25955 = (state_25980[(10)]);
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,(14),inst_25955);
} else {
if((state_val_25981 === (2))){
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,(4),results);
} else {
if((state_val_25981 === (19))){
var state_25980__$1 = state_25980;
var statearr_25993_26057 = state_25980__$1;
(statearr_25993_26057[(2)] = null);

(statearr_25993_26057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (11))){
var inst_25955 = (state_25980[(2)]);
var state_25980__$1 = (function (){var statearr_25994 = state_25980;
(statearr_25994[(10)] = inst_25955);

return statearr_25994;
})();
var statearr_25995_26058 = state_25980__$1;
(statearr_25995_26058[(2)] = null);

(statearr_25995_26058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (9))){
var state_25980__$1 = state_25980;
var statearr_25996_26059 = state_25980__$1;
(statearr_25996_26059[(2)] = null);

(statearr_25996_26059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (5))){
var state_25980__$1 = state_25980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25997_26060 = state_25980__$1;
(statearr_25997_26060[(1)] = (8));

} else {
var statearr_25998_26061 = state_25980__$1;
(statearr_25998_26061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (14))){
var inst_25958 = (state_25980[(8)]);
var inst_25960 = (state_25980[(11)]);
var inst_25958__$1 = (state_25980[(2)]);
var inst_25959 = (inst_25958__$1 == null);
var inst_25960__$1 = cljs.core.not.call(null,inst_25959);
var state_25980__$1 = (function (){var statearr_25999 = state_25980;
(statearr_25999[(8)] = inst_25958__$1);

(statearr_25999[(11)] = inst_25960__$1);

return statearr_25999;
})();
if(inst_25960__$1){
var statearr_26000_26062 = state_25980__$1;
(statearr_26000_26062[(1)] = (15));

} else {
var statearr_26001_26063 = state_25980__$1;
(statearr_26001_26063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (16))){
var inst_25960 = (state_25980[(11)]);
var state_25980__$1 = state_25980;
var statearr_26002_26064 = state_25980__$1;
(statearr_26002_26064[(2)] = inst_25960);

(statearr_26002_26064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (10))){
var inst_25952 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
var statearr_26003_26065 = state_25980__$1;
(statearr_26003_26065[(2)] = inst_25952);

(statearr_26003_26065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (18))){
var inst_25963 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
var statearr_26004_26066 = state_25980__$1;
(statearr_26004_26066[(2)] = inst_25963);

(statearr_26004_26066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (8))){
var inst_25949 = cljs.core.async.close_BANG_.call(null,to);
var state_25980__$1 = state_25980;
var statearr_26005_26067 = state_25980__$1;
(statearr_26005_26067[(2)] = inst_25949);

(statearr_26005_26067[(1)] = (10));


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
var statearr_26009 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__);

(statearr_26009[(1)] = (1));

return statearr_26009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1 = (function (state_25980){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_25980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e26010){if((e26010 instanceof Object)){
var ex__19591__auto__ = e26010;
var statearr_26011_26068 = state_25980;
(statearr_26011_26068[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26069 = state_25980;
state_25980 = G__26069;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__ = function(state_25980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1.call(this,state_25980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__,jobs,results,process,async))
})();
var state__19654__auto__ = (function (){var statearr_26012 = f__19653__auto__.call(null);
(statearr_26012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_26012;
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
var args26070 = [];
var len__17508__auto___26073 = arguments.length;
var i__17509__auto___26074 = (0);
while(true){
if((i__17509__auto___26074 < len__17508__auto___26073)){
args26070.push((arguments[i__17509__auto___26074]));

var G__26075 = (i__17509__auto___26074 + (1));
i__17509__auto___26074 = G__26075;
continue;
} else {
}
break;
}

var G__26072 = args26070.length;
switch (G__26072) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26070.length)].join('')));

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
var args26077 = [];
var len__17508__auto___26080 = arguments.length;
var i__17509__auto___26081 = (0);
while(true){
if((i__17509__auto___26081 < len__17508__auto___26080)){
args26077.push((arguments[i__17509__auto___26081]));

var G__26082 = (i__17509__auto___26081 + (1));
i__17509__auto___26081 = G__26082;
continue;
} else {
}
break;
}

var G__26079 = args26077.length;
switch (G__26079) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26077.length)].join('')));

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
var args26084 = [];
var len__17508__auto___26137 = arguments.length;
var i__17509__auto___26138 = (0);
while(true){
if((i__17509__auto___26138 < len__17508__auto___26137)){
args26084.push((arguments[i__17509__auto___26138]));

var G__26139 = (i__17509__auto___26138 + (1));
i__17509__auto___26138 = G__26139;
continue;
} else {
}
break;
}

var G__26086 = args26084.length;
switch (G__26086) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26084.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19652__auto___26141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___26141,tc,fc){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___26141,tc,fc){
return (function (state_26112){
var state_val_26113 = (state_26112[(1)]);
if((state_val_26113 === (7))){
var inst_26108 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
var statearr_26114_26142 = state_26112__$1;
(statearr_26114_26142[(2)] = inst_26108);

(statearr_26114_26142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (1))){
var state_26112__$1 = state_26112;
var statearr_26115_26143 = state_26112__$1;
(statearr_26115_26143[(2)] = null);

(statearr_26115_26143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (4))){
var inst_26089 = (state_26112[(7)]);
var inst_26089__$1 = (state_26112[(2)]);
var inst_26090 = (inst_26089__$1 == null);
var state_26112__$1 = (function (){var statearr_26116 = state_26112;
(statearr_26116[(7)] = inst_26089__$1);

return statearr_26116;
})();
if(cljs.core.truth_(inst_26090)){
var statearr_26117_26144 = state_26112__$1;
(statearr_26117_26144[(1)] = (5));

} else {
var statearr_26118_26145 = state_26112__$1;
(statearr_26118_26145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (13))){
var state_26112__$1 = state_26112;
var statearr_26119_26146 = state_26112__$1;
(statearr_26119_26146[(2)] = null);

(statearr_26119_26146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (6))){
var inst_26089 = (state_26112[(7)]);
var inst_26095 = p.call(null,inst_26089);
var state_26112__$1 = state_26112;
if(cljs.core.truth_(inst_26095)){
var statearr_26120_26147 = state_26112__$1;
(statearr_26120_26147[(1)] = (9));

} else {
var statearr_26121_26148 = state_26112__$1;
(statearr_26121_26148[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (3))){
var inst_26110 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26112__$1,inst_26110);
} else {
if((state_val_26113 === (12))){
var state_26112__$1 = state_26112;
var statearr_26122_26149 = state_26112__$1;
(statearr_26122_26149[(2)] = null);

(statearr_26122_26149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (2))){
var state_26112__$1 = state_26112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26112__$1,(4),ch);
} else {
if((state_val_26113 === (11))){
var inst_26089 = (state_26112[(7)]);
var inst_26099 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26112__$1,(8),inst_26099,inst_26089);
} else {
if((state_val_26113 === (9))){
var state_26112__$1 = state_26112;
var statearr_26123_26150 = state_26112__$1;
(statearr_26123_26150[(2)] = tc);

(statearr_26123_26150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (5))){
var inst_26092 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26093 = cljs.core.async.close_BANG_.call(null,fc);
var state_26112__$1 = (function (){var statearr_26124 = state_26112;
(statearr_26124[(8)] = inst_26092);

return statearr_26124;
})();
var statearr_26125_26151 = state_26112__$1;
(statearr_26125_26151[(2)] = inst_26093);

(statearr_26125_26151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (14))){
var inst_26106 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
var statearr_26126_26152 = state_26112__$1;
(statearr_26126_26152[(2)] = inst_26106);

(statearr_26126_26152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (10))){
var state_26112__$1 = state_26112;
var statearr_26127_26153 = state_26112__$1;
(statearr_26127_26153[(2)] = fc);

(statearr_26127_26153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (8))){
var inst_26101 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
if(cljs.core.truth_(inst_26101)){
var statearr_26128_26154 = state_26112__$1;
(statearr_26128_26154[(1)] = (12));

} else {
var statearr_26129_26155 = state_26112__$1;
(statearr_26129_26155[(1)] = (13));

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
});})(c__19652__auto___26141,tc,fc))
;
return ((function (switch__19587__auto__,c__19652__auto___26141,tc,fc){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_26133 = [null,null,null,null,null,null,null,null,null];
(statearr_26133[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_26133[(1)] = (1));

return statearr_26133;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_26112){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_26112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e26134){if((e26134 instanceof Object)){
var ex__19591__auto__ = e26134;
var statearr_26135_26156 = state_26112;
(statearr_26135_26156[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26157 = state_26112;
state_26112 = G__26157;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_26112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_26112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___26141,tc,fc))
})();
var state__19654__auto__ = (function (){var statearr_26136 = f__19653__auto__.call(null);
(statearr_26136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___26141);

return statearr_26136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___26141,tc,fc))
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
return (function (state_26204){
var state_val_26205 = (state_26204[(1)]);
if((state_val_26205 === (1))){
var inst_26190 = init;
var state_26204__$1 = (function (){var statearr_26206 = state_26204;
(statearr_26206[(7)] = inst_26190);

return statearr_26206;
})();
var statearr_26207_26222 = state_26204__$1;
(statearr_26207_26222[(2)] = null);

(statearr_26207_26222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (2))){
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(4),ch);
} else {
if((state_val_26205 === (3))){
var inst_26202 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26204__$1,inst_26202);
} else {
if((state_val_26205 === (4))){
var inst_26193 = (state_26204[(8)]);
var inst_26193__$1 = (state_26204[(2)]);
var inst_26194 = (inst_26193__$1 == null);
var state_26204__$1 = (function (){var statearr_26208 = state_26204;
(statearr_26208[(8)] = inst_26193__$1);

return statearr_26208;
})();
if(cljs.core.truth_(inst_26194)){
var statearr_26209_26223 = state_26204__$1;
(statearr_26209_26223[(1)] = (5));

} else {
var statearr_26210_26224 = state_26204__$1;
(statearr_26210_26224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (5))){
var inst_26190 = (state_26204[(7)]);
var state_26204__$1 = state_26204;
var statearr_26211_26225 = state_26204__$1;
(statearr_26211_26225[(2)] = inst_26190);

(statearr_26211_26225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (6))){
var inst_26190 = (state_26204[(7)]);
var inst_26193 = (state_26204[(8)]);
var inst_26197 = f.call(null,inst_26190,inst_26193);
var inst_26190__$1 = inst_26197;
var state_26204__$1 = (function (){var statearr_26212 = state_26204;
(statearr_26212[(7)] = inst_26190__$1);

return statearr_26212;
})();
var statearr_26213_26226 = state_26204__$1;
(statearr_26213_26226[(2)] = null);

(statearr_26213_26226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (7))){
var inst_26200 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26214_26227 = state_26204__$1;
(statearr_26214_26227[(2)] = inst_26200);

(statearr_26214_26227[(1)] = (3));


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
var statearr_26218 = [null,null,null,null,null,null,null,null,null];
(statearr_26218[(0)] = cljs$core$async$reduce_$_state_machine__19588__auto__);

(statearr_26218[(1)] = (1));

return statearr_26218;
});
var cljs$core$async$reduce_$_state_machine__19588__auto____1 = (function (state_26204){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_26204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e26219){if((e26219 instanceof Object)){
var ex__19591__auto__ = e26219;
var statearr_26220_26228 = state_26204;
(statearr_26220_26228[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26229 = state_26204;
state_26204 = G__26229;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19588__auto__ = function(state_26204){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19588__auto____1.call(this,state_26204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19588__auto____0;
cljs$core$async$reduce_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19588__auto____1;
return cljs$core$async$reduce_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_26221 = f__19653__auto__.call(null);
(statearr_26221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_26221;
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
var args26230 = [];
var len__17508__auto___26282 = arguments.length;
var i__17509__auto___26283 = (0);
while(true){
if((i__17509__auto___26283 < len__17508__auto___26282)){
args26230.push((arguments[i__17509__auto___26283]));

var G__26284 = (i__17509__auto___26283 + (1));
i__17509__auto___26283 = G__26284;
continue;
} else {
}
break;
}

var G__26232 = args26230.length;
switch (G__26232) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26230.length)].join('')));

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
return (function (state_26257){
var state_val_26258 = (state_26257[(1)]);
if((state_val_26258 === (7))){
var inst_26239 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26259_26286 = state_26257__$1;
(statearr_26259_26286[(2)] = inst_26239);

(statearr_26259_26286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (1))){
var inst_26233 = cljs.core.seq.call(null,coll);
var inst_26234 = inst_26233;
var state_26257__$1 = (function (){var statearr_26260 = state_26257;
(statearr_26260[(7)] = inst_26234);

return statearr_26260;
})();
var statearr_26261_26287 = state_26257__$1;
(statearr_26261_26287[(2)] = null);

(statearr_26261_26287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (4))){
var inst_26234 = (state_26257[(7)]);
var inst_26237 = cljs.core.first.call(null,inst_26234);
var state_26257__$1 = state_26257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26257__$1,(7),ch,inst_26237);
} else {
if((state_val_26258 === (13))){
var inst_26251 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26262_26288 = state_26257__$1;
(statearr_26262_26288[(2)] = inst_26251);

(statearr_26262_26288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (6))){
var inst_26242 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
if(cljs.core.truth_(inst_26242)){
var statearr_26263_26289 = state_26257__$1;
(statearr_26263_26289[(1)] = (8));

} else {
var statearr_26264_26290 = state_26257__$1;
(statearr_26264_26290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (3))){
var inst_26255 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26257__$1,inst_26255);
} else {
if((state_val_26258 === (12))){
var state_26257__$1 = state_26257;
var statearr_26265_26291 = state_26257__$1;
(statearr_26265_26291[(2)] = null);

(statearr_26265_26291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (2))){
var inst_26234 = (state_26257[(7)]);
var state_26257__$1 = state_26257;
if(cljs.core.truth_(inst_26234)){
var statearr_26266_26292 = state_26257__$1;
(statearr_26266_26292[(1)] = (4));

} else {
var statearr_26267_26293 = state_26257__$1;
(statearr_26267_26293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (11))){
var inst_26248 = cljs.core.async.close_BANG_.call(null,ch);
var state_26257__$1 = state_26257;
var statearr_26268_26294 = state_26257__$1;
(statearr_26268_26294[(2)] = inst_26248);

(statearr_26268_26294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (9))){
var state_26257__$1 = state_26257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26269_26295 = state_26257__$1;
(statearr_26269_26295[(1)] = (11));

} else {
var statearr_26270_26296 = state_26257__$1;
(statearr_26270_26296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (5))){
var inst_26234 = (state_26257[(7)]);
var state_26257__$1 = state_26257;
var statearr_26271_26297 = state_26257__$1;
(statearr_26271_26297[(2)] = inst_26234);

(statearr_26271_26297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (10))){
var inst_26253 = (state_26257[(2)]);
var state_26257__$1 = state_26257;
var statearr_26272_26298 = state_26257__$1;
(statearr_26272_26298[(2)] = inst_26253);

(statearr_26272_26298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26258 === (8))){
var inst_26234 = (state_26257[(7)]);
var inst_26244 = cljs.core.next.call(null,inst_26234);
var inst_26234__$1 = inst_26244;
var state_26257__$1 = (function (){var statearr_26273 = state_26257;
(statearr_26273[(7)] = inst_26234__$1);

return statearr_26273;
})();
var statearr_26274_26299 = state_26257__$1;
(statearr_26274_26299[(2)] = null);

(statearr_26274_26299[(1)] = (2));


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
var statearr_26278 = [null,null,null,null,null,null,null,null];
(statearr_26278[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_26278[(1)] = (1));

return statearr_26278;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_26257){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_26257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e26279){if((e26279 instanceof Object)){
var ex__19591__auto__ = e26279;
var statearr_26280_26300 = state_26257;
(statearr_26280_26300[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26301 = state_26257;
state_26257 = G__26301;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_26257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_26257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_26281 = f__19653__auto__.call(null);
(statearr_26281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_26281;
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
if(typeof cljs.core.async.t26527 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26527 = (function (mult,ch,cs,meta26528){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26528 = meta26528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26529,meta26528__$1){
var self__ = this;
var _26529__$1 = this;
return (new cljs.core.async.t26527(self__.mult,self__.ch,self__.cs,meta26528__$1));
});})(cs))
;

cljs.core.async.t26527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26529){
var self__ = this;
var _26529__$1 = this;
return self__.meta26528;
});})(cs))
;

cljs.core.async.t26527.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26527.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26527.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26527.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26527.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26527.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26528","meta26528",1907843897,null)], null);
});})(cs))
;

cljs.core.async.t26527.cljs$lang$type = true;

cljs.core.async.t26527.cljs$lang$ctorStr = "cljs.core.async/t26527";

cljs.core.async.t26527.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t26527");
});})(cs))
;

cljs.core.async.__GT_t26527 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26527(mult__$1,ch__$1,cs__$1,meta26528){
return (new cljs.core.async.t26527(mult__$1,ch__$1,cs__$1,meta26528));
});})(cs))
;

}

return (new cljs.core.async.t26527(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19652__auto___26748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___26748,cs,m,dchan,dctr,done){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___26748,cs,m,dchan,dctr,done){
return (function (state_26660){
var state_val_26661 = (state_26660[(1)]);
if((state_val_26661 === (7))){
var inst_26656 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26662_26749 = state_26660__$1;
(statearr_26662_26749[(2)] = inst_26656);

(statearr_26662_26749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (20))){
var inst_26561 = (state_26660[(7)]);
var inst_26571 = cljs.core.first.call(null,inst_26561);
var inst_26572 = cljs.core.nth.call(null,inst_26571,(0),null);
var inst_26573 = cljs.core.nth.call(null,inst_26571,(1),null);
var state_26660__$1 = (function (){var statearr_26663 = state_26660;
(statearr_26663[(8)] = inst_26572);

return statearr_26663;
})();
if(cljs.core.truth_(inst_26573)){
var statearr_26664_26750 = state_26660__$1;
(statearr_26664_26750[(1)] = (22));

} else {
var statearr_26665_26751 = state_26660__$1;
(statearr_26665_26751[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (27))){
var inst_26603 = (state_26660[(9)]);
var inst_26601 = (state_26660[(10)]);
var inst_26608 = (state_26660[(11)]);
var inst_26532 = (state_26660[(12)]);
var inst_26608__$1 = cljs.core._nth.call(null,inst_26601,inst_26603);
var inst_26609 = cljs.core.async.put_BANG_.call(null,inst_26608__$1,inst_26532,done);
var state_26660__$1 = (function (){var statearr_26666 = state_26660;
(statearr_26666[(11)] = inst_26608__$1);

return statearr_26666;
})();
if(cljs.core.truth_(inst_26609)){
var statearr_26667_26752 = state_26660__$1;
(statearr_26667_26752[(1)] = (30));

} else {
var statearr_26668_26753 = state_26660__$1;
(statearr_26668_26753[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (1))){
var state_26660__$1 = state_26660;
var statearr_26669_26754 = state_26660__$1;
(statearr_26669_26754[(2)] = null);

(statearr_26669_26754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (24))){
var inst_26561 = (state_26660[(7)]);
var inst_26578 = (state_26660[(2)]);
var inst_26579 = cljs.core.next.call(null,inst_26561);
var inst_26541 = inst_26579;
var inst_26542 = null;
var inst_26543 = (0);
var inst_26544 = (0);
var state_26660__$1 = (function (){var statearr_26670 = state_26660;
(statearr_26670[(13)] = inst_26542);

(statearr_26670[(14)] = inst_26543);

(statearr_26670[(15)] = inst_26544);

(statearr_26670[(16)] = inst_26578);

(statearr_26670[(17)] = inst_26541);

return statearr_26670;
})();
var statearr_26671_26755 = state_26660__$1;
(statearr_26671_26755[(2)] = null);

(statearr_26671_26755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (39))){
var state_26660__$1 = state_26660;
var statearr_26675_26756 = state_26660__$1;
(statearr_26675_26756[(2)] = null);

(statearr_26675_26756[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (4))){
var inst_26532 = (state_26660[(12)]);
var inst_26532__$1 = (state_26660[(2)]);
var inst_26533 = (inst_26532__$1 == null);
var state_26660__$1 = (function (){var statearr_26676 = state_26660;
(statearr_26676[(12)] = inst_26532__$1);

return statearr_26676;
})();
if(cljs.core.truth_(inst_26533)){
var statearr_26677_26757 = state_26660__$1;
(statearr_26677_26757[(1)] = (5));

} else {
var statearr_26678_26758 = state_26660__$1;
(statearr_26678_26758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (15))){
var inst_26542 = (state_26660[(13)]);
var inst_26543 = (state_26660[(14)]);
var inst_26544 = (state_26660[(15)]);
var inst_26541 = (state_26660[(17)]);
var inst_26557 = (state_26660[(2)]);
var inst_26558 = (inst_26544 + (1));
var tmp26672 = inst_26542;
var tmp26673 = inst_26543;
var tmp26674 = inst_26541;
var inst_26541__$1 = tmp26674;
var inst_26542__$1 = tmp26672;
var inst_26543__$1 = tmp26673;
var inst_26544__$1 = inst_26558;
var state_26660__$1 = (function (){var statearr_26679 = state_26660;
(statearr_26679[(13)] = inst_26542__$1);

(statearr_26679[(14)] = inst_26543__$1);

(statearr_26679[(15)] = inst_26544__$1);

(statearr_26679[(18)] = inst_26557);

(statearr_26679[(17)] = inst_26541__$1);

return statearr_26679;
})();
var statearr_26680_26759 = state_26660__$1;
(statearr_26680_26759[(2)] = null);

(statearr_26680_26759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (21))){
var inst_26582 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26684_26760 = state_26660__$1;
(statearr_26684_26760[(2)] = inst_26582);

(statearr_26684_26760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (31))){
var inst_26608 = (state_26660[(11)]);
var inst_26612 = done.call(null,null);
var inst_26613 = cljs.core.async.untap_STAR_.call(null,m,inst_26608);
var state_26660__$1 = (function (){var statearr_26685 = state_26660;
(statearr_26685[(19)] = inst_26612);

return statearr_26685;
})();
var statearr_26686_26761 = state_26660__$1;
(statearr_26686_26761[(2)] = inst_26613);

(statearr_26686_26761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (32))){
var inst_26603 = (state_26660[(9)]);
var inst_26602 = (state_26660[(20)]);
var inst_26600 = (state_26660[(21)]);
var inst_26601 = (state_26660[(10)]);
var inst_26615 = (state_26660[(2)]);
var inst_26616 = (inst_26603 + (1));
var tmp26681 = inst_26602;
var tmp26682 = inst_26600;
var tmp26683 = inst_26601;
var inst_26600__$1 = tmp26682;
var inst_26601__$1 = tmp26683;
var inst_26602__$1 = tmp26681;
var inst_26603__$1 = inst_26616;
var state_26660__$1 = (function (){var statearr_26687 = state_26660;
(statearr_26687[(9)] = inst_26603__$1);

(statearr_26687[(20)] = inst_26602__$1);

(statearr_26687[(21)] = inst_26600__$1);

(statearr_26687[(10)] = inst_26601__$1);

(statearr_26687[(22)] = inst_26615);

return statearr_26687;
})();
var statearr_26688_26762 = state_26660__$1;
(statearr_26688_26762[(2)] = null);

(statearr_26688_26762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (40))){
var inst_26628 = (state_26660[(23)]);
var inst_26632 = done.call(null,null);
var inst_26633 = cljs.core.async.untap_STAR_.call(null,m,inst_26628);
var state_26660__$1 = (function (){var statearr_26689 = state_26660;
(statearr_26689[(24)] = inst_26632);

return statearr_26689;
})();
var statearr_26690_26763 = state_26660__$1;
(statearr_26690_26763[(2)] = inst_26633);

(statearr_26690_26763[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (33))){
var inst_26619 = (state_26660[(25)]);
var inst_26621 = cljs.core.chunked_seq_QMARK_.call(null,inst_26619);
var state_26660__$1 = state_26660;
if(inst_26621){
var statearr_26691_26764 = state_26660__$1;
(statearr_26691_26764[(1)] = (36));

} else {
var statearr_26692_26765 = state_26660__$1;
(statearr_26692_26765[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (13))){
var inst_26551 = (state_26660[(26)]);
var inst_26554 = cljs.core.async.close_BANG_.call(null,inst_26551);
var state_26660__$1 = state_26660;
var statearr_26693_26766 = state_26660__$1;
(statearr_26693_26766[(2)] = inst_26554);

(statearr_26693_26766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (22))){
var inst_26572 = (state_26660[(8)]);
var inst_26575 = cljs.core.async.close_BANG_.call(null,inst_26572);
var state_26660__$1 = state_26660;
var statearr_26694_26767 = state_26660__$1;
(statearr_26694_26767[(2)] = inst_26575);

(statearr_26694_26767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (36))){
var inst_26619 = (state_26660[(25)]);
var inst_26623 = cljs.core.chunk_first.call(null,inst_26619);
var inst_26624 = cljs.core.chunk_rest.call(null,inst_26619);
var inst_26625 = cljs.core.count.call(null,inst_26623);
var inst_26600 = inst_26624;
var inst_26601 = inst_26623;
var inst_26602 = inst_26625;
var inst_26603 = (0);
var state_26660__$1 = (function (){var statearr_26695 = state_26660;
(statearr_26695[(9)] = inst_26603);

(statearr_26695[(20)] = inst_26602);

(statearr_26695[(21)] = inst_26600);

(statearr_26695[(10)] = inst_26601);

return statearr_26695;
})();
var statearr_26696_26768 = state_26660__$1;
(statearr_26696_26768[(2)] = null);

(statearr_26696_26768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (41))){
var inst_26619 = (state_26660[(25)]);
var inst_26635 = (state_26660[(2)]);
var inst_26636 = cljs.core.next.call(null,inst_26619);
var inst_26600 = inst_26636;
var inst_26601 = null;
var inst_26602 = (0);
var inst_26603 = (0);
var state_26660__$1 = (function (){var statearr_26697 = state_26660;
(statearr_26697[(9)] = inst_26603);

(statearr_26697[(20)] = inst_26602);

(statearr_26697[(21)] = inst_26600);

(statearr_26697[(10)] = inst_26601);

(statearr_26697[(27)] = inst_26635);

return statearr_26697;
})();
var statearr_26698_26769 = state_26660__$1;
(statearr_26698_26769[(2)] = null);

(statearr_26698_26769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (43))){
var state_26660__$1 = state_26660;
var statearr_26699_26770 = state_26660__$1;
(statearr_26699_26770[(2)] = null);

(statearr_26699_26770[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (29))){
var inst_26644 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26700_26771 = state_26660__$1;
(statearr_26700_26771[(2)] = inst_26644);

(statearr_26700_26771[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (44))){
var inst_26653 = (state_26660[(2)]);
var state_26660__$1 = (function (){var statearr_26701 = state_26660;
(statearr_26701[(28)] = inst_26653);

return statearr_26701;
})();
var statearr_26702_26772 = state_26660__$1;
(statearr_26702_26772[(2)] = null);

(statearr_26702_26772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (6))){
var inst_26592 = (state_26660[(29)]);
var inst_26591 = cljs.core.deref.call(null,cs);
var inst_26592__$1 = cljs.core.keys.call(null,inst_26591);
var inst_26593 = cljs.core.count.call(null,inst_26592__$1);
var inst_26594 = cljs.core.reset_BANG_.call(null,dctr,inst_26593);
var inst_26599 = cljs.core.seq.call(null,inst_26592__$1);
var inst_26600 = inst_26599;
var inst_26601 = null;
var inst_26602 = (0);
var inst_26603 = (0);
var state_26660__$1 = (function (){var statearr_26703 = state_26660;
(statearr_26703[(9)] = inst_26603);

(statearr_26703[(20)] = inst_26602);

(statearr_26703[(29)] = inst_26592__$1);

(statearr_26703[(21)] = inst_26600);

(statearr_26703[(30)] = inst_26594);

(statearr_26703[(10)] = inst_26601);

return statearr_26703;
})();
var statearr_26704_26773 = state_26660__$1;
(statearr_26704_26773[(2)] = null);

(statearr_26704_26773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (28))){
var inst_26619 = (state_26660[(25)]);
var inst_26600 = (state_26660[(21)]);
var inst_26619__$1 = cljs.core.seq.call(null,inst_26600);
var state_26660__$1 = (function (){var statearr_26705 = state_26660;
(statearr_26705[(25)] = inst_26619__$1);

return statearr_26705;
})();
if(inst_26619__$1){
var statearr_26706_26774 = state_26660__$1;
(statearr_26706_26774[(1)] = (33));

} else {
var statearr_26707_26775 = state_26660__$1;
(statearr_26707_26775[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (25))){
var inst_26603 = (state_26660[(9)]);
var inst_26602 = (state_26660[(20)]);
var inst_26605 = (inst_26603 < inst_26602);
var inst_26606 = inst_26605;
var state_26660__$1 = state_26660;
if(cljs.core.truth_(inst_26606)){
var statearr_26708_26776 = state_26660__$1;
(statearr_26708_26776[(1)] = (27));

} else {
var statearr_26709_26777 = state_26660__$1;
(statearr_26709_26777[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (34))){
var state_26660__$1 = state_26660;
var statearr_26710_26778 = state_26660__$1;
(statearr_26710_26778[(2)] = null);

(statearr_26710_26778[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (17))){
var state_26660__$1 = state_26660;
var statearr_26711_26779 = state_26660__$1;
(statearr_26711_26779[(2)] = null);

(statearr_26711_26779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (3))){
var inst_26658 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26660__$1,inst_26658);
} else {
if((state_val_26661 === (12))){
var inst_26587 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26712_26780 = state_26660__$1;
(statearr_26712_26780[(2)] = inst_26587);

(statearr_26712_26780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (2))){
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26660__$1,(4),ch);
} else {
if((state_val_26661 === (23))){
var state_26660__$1 = state_26660;
var statearr_26713_26781 = state_26660__$1;
(statearr_26713_26781[(2)] = null);

(statearr_26713_26781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (35))){
var inst_26642 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26714_26782 = state_26660__$1;
(statearr_26714_26782[(2)] = inst_26642);

(statearr_26714_26782[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (19))){
var inst_26561 = (state_26660[(7)]);
var inst_26565 = cljs.core.chunk_first.call(null,inst_26561);
var inst_26566 = cljs.core.chunk_rest.call(null,inst_26561);
var inst_26567 = cljs.core.count.call(null,inst_26565);
var inst_26541 = inst_26566;
var inst_26542 = inst_26565;
var inst_26543 = inst_26567;
var inst_26544 = (0);
var state_26660__$1 = (function (){var statearr_26715 = state_26660;
(statearr_26715[(13)] = inst_26542);

(statearr_26715[(14)] = inst_26543);

(statearr_26715[(15)] = inst_26544);

(statearr_26715[(17)] = inst_26541);

return statearr_26715;
})();
var statearr_26716_26783 = state_26660__$1;
(statearr_26716_26783[(2)] = null);

(statearr_26716_26783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (11))){
var inst_26561 = (state_26660[(7)]);
var inst_26541 = (state_26660[(17)]);
var inst_26561__$1 = cljs.core.seq.call(null,inst_26541);
var state_26660__$1 = (function (){var statearr_26717 = state_26660;
(statearr_26717[(7)] = inst_26561__$1);

return statearr_26717;
})();
if(inst_26561__$1){
var statearr_26718_26784 = state_26660__$1;
(statearr_26718_26784[(1)] = (16));

} else {
var statearr_26719_26785 = state_26660__$1;
(statearr_26719_26785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (9))){
var inst_26589 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26720_26786 = state_26660__$1;
(statearr_26720_26786[(2)] = inst_26589);

(statearr_26720_26786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (5))){
var inst_26539 = cljs.core.deref.call(null,cs);
var inst_26540 = cljs.core.seq.call(null,inst_26539);
var inst_26541 = inst_26540;
var inst_26542 = null;
var inst_26543 = (0);
var inst_26544 = (0);
var state_26660__$1 = (function (){var statearr_26721 = state_26660;
(statearr_26721[(13)] = inst_26542);

(statearr_26721[(14)] = inst_26543);

(statearr_26721[(15)] = inst_26544);

(statearr_26721[(17)] = inst_26541);

return statearr_26721;
})();
var statearr_26722_26787 = state_26660__$1;
(statearr_26722_26787[(2)] = null);

(statearr_26722_26787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (14))){
var state_26660__$1 = state_26660;
var statearr_26723_26788 = state_26660__$1;
(statearr_26723_26788[(2)] = null);

(statearr_26723_26788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (45))){
var inst_26650 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26724_26789 = state_26660__$1;
(statearr_26724_26789[(2)] = inst_26650);

(statearr_26724_26789[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (26))){
var inst_26592 = (state_26660[(29)]);
var inst_26646 = (state_26660[(2)]);
var inst_26647 = cljs.core.seq.call(null,inst_26592);
var state_26660__$1 = (function (){var statearr_26725 = state_26660;
(statearr_26725[(31)] = inst_26646);

return statearr_26725;
})();
if(inst_26647){
var statearr_26726_26790 = state_26660__$1;
(statearr_26726_26790[(1)] = (42));

} else {
var statearr_26727_26791 = state_26660__$1;
(statearr_26727_26791[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (16))){
var inst_26561 = (state_26660[(7)]);
var inst_26563 = cljs.core.chunked_seq_QMARK_.call(null,inst_26561);
var state_26660__$1 = state_26660;
if(inst_26563){
var statearr_26728_26792 = state_26660__$1;
(statearr_26728_26792[(1)] = (19));

} else {
var statearr_26729_26793 = state_26660__$1;
(statearr_26729_26793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (38))){
var inst_26639 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26730_26794 = state_26660__$1;
(statearr_26730_26794[(2)] = inst_26639);

(statearr_26730_26794[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (30))){
var state_26660__$1 = state_26660;
var statearr_26731_26795 = state_26660__$1;
(statearr_26731_26795[(2)] = null);

(statearr_26731_26795[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (10))){
var inst_26542 = (state_26660[(13)]);
var inst_26544 = (state_26660[(15)]);
var inst_26550 = cljs.core._nth.call(null,inst_26542,inst_26544);
var inst_26551 = cljs.core.nth.call(null,inst_26550,(0),null);
var inst_26552 = cljs.core.nth.call(null,inst_26550,(1),null);
var state_26660__$1 = (function (){var statearr_26732 = state_26660;
(statearr_26732[(26)] = inst_26551);

return statearr_26732;
})();
if(cljs.core.truth_(inst_26552)){
var statearr_26733_26796 = state_26660__$1;
(statearr_26733_26796[(1)] = (13));

} else {
var statearr_26734_26797 = state_26660__$1;
(statearr_26734_26797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (18))){
var inst_26585 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26735_26798 = state_26660__$1;
(statearr_26735_26798[(2)] = inst_26585);

(statearr_26735_26798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (42))){
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26660__$1,(45),dchan);
} else {
if((state_val_26661 === (37))){
var inst_26619 = (state_26660[(25)]);
var inst_26628 = (state_26660[(23)]);
var inst_26532 = (state_26660[(12)]);
var inst_26628__$1 = cljs.core.first.call(null,inst_26619);
var inst_26629 = cljs.core.async.put_BANG_.call(null,inst_26628__$1,inst_26532,done);
var state_26660__$1 = (function (){var statearr_26736 = state_26660;
(statearr_26736[(23)] = inst_26628__$1);

return statearr_26736;
})();
if(cljs.core.truth_(inst_26629)){
var statearr_26737_26799 = state_26660__$1;
(statearr_26737_26799[(1)] = (39));

} else {
var statearr_26738_26800 = state_26660__$1;
(statearr_26738_26800[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (8))){
var inst_26543 = (state_26660[(14)]);
var inst_26544 = (state_26660[(15)]);
var inst_26546 = (inst_26544 < inst_26543);
var inst_26547 = inst_26546;
var state_26660__$1 = state_26660;
if(cljs.core.truth_(inst_26547)){
var statearr_26739_26801 = state_26660__$1;
(statearr_26739_26801[(1)] = (10));

} else {
var statearr_26740_26802 = state_26660__$1;
(statearr_26740_26802[(1)] = (11));

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
});})(c__19652__auto___26748,cs,m,dchan,dctr,done))
;
return ((function (switch__19587__auto__,c__19652__auto___26748,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19588__auto__ = null;
var cljs$core$async$mult_$_state_machine__19588__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26744[(0)] = cljs$core$async$mult_$_state_machine__19588__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var cljs$core$async$mult_$_state_machine__19588__auto____1 = (function (state_26660){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_26660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__19591__auto__ = e26745;
var statearr_26746_26803 = state_26660;
(statearr_26746_26803[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26804 = state_26660;
state_26660 = G__26804;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19588__auto__ = function(state_26660){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19588__auto____1.call(this,state_26660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19588__auto____0;
cljs$core$async$mult_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19588__auto____1;
return cljs$core$async$mult_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___26748,cs,m,dchan,dctr,done))
})();
var state__19654__auto__ = (function (){var statearr_26747 = f__19653__auto__.call(null);
(statearr_26747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___26748);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___26748,cs,m,dchan,dctr,done))
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
var args26805 = [];
var len__17508__auto___26808 = arguments.length;
var i__17509__auto___26809 = (0);
while(true){
if((i__17509__auto___26809 < len__17508__auto___26808)){
args26805.push((arguments[i__17509__auto___26809]));

var G__26810 = (i__17509__auto___26809 + (1));
i__17509__auto___26809 = G__26810;
continue;
} else {
}
break;
}

var G__26807 = args26805.length;
switch (G__26807) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26805.length)].join('')));

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
var len__17508__auto___26824 = arguments.length;
var i__17509__auto___26825 = (0);
while(true){
if((i__17509__auto___26825 < len__17508__auto___26824)){
args__17515__auto__.push((arguments[i__17509__auto___26825]));

var G__26826 = (i__17509__auto___26825 + (1));
i__17509__auto___26825 = G__26826;
continue;
} else {
}
break;
}

var argseq__17516__auto__ = ((((3) < args__17515__auto__.length))?(new cljs.core.IndexedSeq(args__17515__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17516__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26818){
var map__26819 = p__26818;
var map__26819__$1 = ((((!((map__26819 == null)))?((((map__26819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26819):map__26819);
var opts = map__26819__$1;
var statearr_26821_26827 = state;
(statearr_26821_26827[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26819,map__26819__$1,opts){
return (function (val){
var statearr_26822_26828 = state;
(statearr_26822_26828[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26819,map__26819__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26823_26829 = state;
(statearr_26823_26829[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26814){
var G__26815 = cljs.core.first.call(null,seq26814);
var seq26814__$1 = cljs.core.next.call(null,seq26814);
var G__26816 = cljs.core.first.call(null,seq26814__$1);
var seq26814__$2 = cljs.core.next.call(null,seq26814__$1);
var G__26817 = cljs.core.first.call(null,seq26814__$2);
var seq26814__$3 = cljs.core.next.call(null,seq26814__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26815,G__26816,G__26817,seq26814__$3);
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
if(typeof cljs.core.async.t26993 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26993 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26994){
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
this.meta26994 = meta26994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26995,meta26994__$1){
var self__ = this;
var _26995__$1 = this;
return (new cljs.core.async.t26993(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26994__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26995){
var self__ = this;
var _26995__$1 = this;
return self__.meta26994;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26993.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26993.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26994","meta26994",543799445,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26993.cljs$lang$type = true;

cljs.core.async.t26993.cljs$lang$ctorStr = "cljs.core.async/t26993";

cljs.core.async.t26993.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t26993");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26993 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26993(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26994){
return (new cljs.core.async.t26993(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26994));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26993(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19652__auto___27156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27156,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27156,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27093){
var state_val_27094 = (state_27093[(1)]);
if((state_val_27094 === (7))){
var inst_27011 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
var statearr_27095_27157 = state_27093__$1;
(statearr_27095_27157[(2)] = inst_27011);

(statearr_27095_27157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (20))){
var inst_27023 = (state_27093[(7)]);
var state_27093__$1 = state_27093;
var statearr_27096_27158 = state_27093__$1;
(statearr_27096_27158[(2)] = inst_27023);

(statearr_27096_27158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (27))){
var state_27093__$1 = state_27093;
var statearr_27097_27159 = state_27093__$1;
(statearr_27097_27159[(2)] = null);

(statearr_27097_27159[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (1))){
var inst_26999 = (state_27093[(8)]);
var inst_26999__$1 = calc_state.call(null);
var inst_27001 = (inst_26999__$1 == null);
var inst_27002 = cljs.core.not.call(null,inst_27001);
var state_27093__$1 = (function (){var statearr_27098 = state_27093;
(statearr_27098[(8)] = inst_26999__$1);

return statearr_27098;
})();
if(inst_27002){
var statearr_27099_27160 = state_27093__$1;
(statearr_27099_27160[(1)] = (2));

} else {
var statearr_27100_27161 = state_27093__$1;
(statearr_27100_27161[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (24))){
var inst_27046 = (state_27093[(9)]);
var inst_27053 = (state_27093[(10)]);
var inst_27067 = (state_27093[(11)]);
var inst_27067__$1 = inst_27046.call(null,inst_27053);
var state_27093__$1 = (function (){var statearr_27101 = state_27093;
(statearr_27101[(11)] = inst_27067__$1);

return statearr_27101;
})();
if(cljs.core.truth_(inst_27067__$1)){
var statearr_27102_27162 = state_27093__$1;
(statearr_27102_27162[(1)] = (29));

} else {
var statearr_27103_27163 = state_27093__$1;
(statearr_27103_27163[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (4))){
var inst_27014 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27014)){
var statearr_27104_27164 = state_27093__$1;
(statearr_27104_27164[(1)] = (8));

} else {
var statearr_27105_27165 = state_27093__$1;
(statearr_27105_27165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (15))){
var inst_27040 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27040)){
var statearr_27106_27166 = state_27093__$1;
(statearr_27106_27166[(1)] = (19));

} else {
var statearr_27107_27167 = state_27093__$1;
(statearr_27107_27167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (21))){
var inst_27045 = (state_27093[(12)]);
var inst_27045__$1 = (state_27093[(2)]);
var inst_27046 = cljs.core.get.call(null,inst_27045__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27047 = cljs.core.get.call(null,inst_27045__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27048 = cljs.core.get.call(null,inst_27045__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27093__$1 = (function (){var statearr_27108 = state_27093;
(statearr_27108[(9)] = inst_27046);

(statearr_27108[(13)] = inst_27047);

(statearr_27108[(12)] = inst_27045__$1);

return statearr_27108;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27093__$1,(22),inst_27048);
} else {
if((state_val_27094 === (31))){
var inst_27075 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27075)){
var statearr_27109_27168 = state_27093__$1;
(statearr_27109_27168[(1)] = (32));

} else {
var statearr_27110_27169 = state_27093__$1;
(statearr_27110_27169[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (32))){
var inst_27052 = (state_27093[(14)]);
var state_27093__$1 = state_27093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27093__$1,(35),out,inst_27052);
} else {
if((state_val_27094 === (33))){
var inst_27045 = (state_27093[(12)]);
var inst_27023 = inst_27045;
var state_27093__$1 = (function (){var statearr_27111 = state_27093;
(statearr_27111[(7)] = inst_27023);

return statearr_27111;
})();
var statearr_27112_27170 = state_27093__$1;
(statearr_27112_27170[(2)] = null);

(statearr_27112_27170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (13))){
var inst_27023 = (state_27093[(7)]);
var inst_27030 = inst_27023.cljs$lang$protocol_mask$partition0$;
var inst_27031 = (inst_27030 & (64));
var inst_27032 = inst_27023.cljs$core$ISeq$;
var inst_27033 = (inst_27031) || (inst_27032);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27033)){
var statearr_27113_27171 = state_27093__$1;
(statearr_27113_27171[(1)] = (16));

} else {
var statearr_27114_27172 = state_27093__$1;
(statearr_27114_27172[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (22))){
var inst_27052 = (state_27093[(14)]);
var inst_27053 = (state_27093[(10)]);
var inst_27051 = (state_27093[(2)]);
var inst_27052__$1 = cljs.core.nth.call(null,inst_27051,(0),null);
var inst_27053__$1 = cljs.core.nth.call(null,inst_27051,(1),null);
var inst_27054 = (inst_27052__$1 == null);
var inst_27055 = cljs.core._EQ_.call(null,inst_27053__$1,change);
var inst_27056 = (inst_27054) || (inst_27055);
var state_27093__$1 = (function (){var statearr_27115 = state_27093;
(statearr_27115[(14)] = inst_27052__$1);

(statearr_27115[(10)] = inst_27053__$1);

return statearr_27115;
})();
if(cljs.core.truth_(inst_27056)){
var statearr_27116_27173 = state_27093__$1;
(statearr_27116_27173[(1)] = (23));

} else {
var statearr_27117_27174 = state_27093__$1;
(statearr_27117_27174[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (36))){
var inst_27045 = (state_27093[(12)]);
var inst_27023 = inst_27045;
var state_27093__$1 = (function (){var statearr_27118 = state_27093;
(statearr_27118[(7)] = inst_27023);

return statearr_27118;
})();
var statearr_27119_27175 = state_27093__$1;
(statearr_27119_27175[(2)] = null);

(statearr_27119_27175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (29))){
var inst_27067 = (state_27093[(11)]);
var state_27093__$1 = state_27093;
var statearr_27120_27176 = state_27093__$1;
(statearr_27120_27176[(2)] = inst_27067);

(statearr_27120_27176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (6))){
var state_27093__$1 = state_27093;
var statearr_27121_27177 = state_27093__$1;
(statearr_27121_27177[(2)] = false);

(statearr_27121_27177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (28))){
var inst_27063 = (state_27093[(2)]);
var inst_27064 = calc_state.call(null);
var inst_27023 = inst_27064;
var state_27093__$1 = (function (){var statearr_27122 = state_27093;
(statearr_27122[(7)] = inst_27023);

(statearr_27122[(15)] = inst_27063);

return statearr_27122;
})();
var statearr_27123_27178 = state_27093__$1;
(statearr_27123_27178[(2)] = null);

(statearr_27123_27178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (25))){
var inst_27089 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
var statearr_27124_27179 = state_27093__$1;
(statearr_27124_27179[(2)] = inst_27089);

(statearr_27124_27179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (34))){
var inst_27087 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
var statearr_27125_27180 = state_27093__$1;
(statearr_27125_27180[(2)] = inst_27087);

(statearr_27125_27180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (17))){
var state_27093__$1 = state_27093;
var statearr_27126_27181 = state_27093__$1;
(statearr_27126_27181[(2)] = false);

(statearr_27126_27181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (3))){
var state_27093__$1 = state_27093;
var statearr_27127_27182 = state_27093__$1;
(statearr_27127_27182[(2)] = false);

(statearr_27127_27182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (12))){
var inst_27091 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27093__$1,inst_27091);
} else {
if((state_val_27094 === (2))){
var inst_26999 = (state_27093[(8)]);
var inst_27004 = inst_26999.cljs$lang$protocol_mask$partition0$;
var inst_27005 = (inst_27004 & (64));
var inst_27006 = inst_26999.cljs$core$ISeq$;
var inst_27007 = (inst_27005) || (inst_27006);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27007)){
var statearr_27128_27183 = state_27093__$1;
(statearr_27128_27183[(1)] = (5));

} else {
var statearr_27129_27184 = state_27093__$1;
(statearr_27129_27184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (23))){
var inst_27052 = (state_27093[(14)]);
var inst_27058 = (inst_27052 == null);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27058)){
var statearr_27130_27185 = state_27093__$1;
(statearr_27130_27185[(1)] = (26));

} else {
var statearr_27131_27186 = state_27093__$1;
(statearr_27131_27186[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (35))){
var inst_27078 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
if(cljs.core.truth_(inst_27078)){
var statearr_27132_27187 = state_27093__$1;
(statearr_27132_27187[(1)] = (36));

} else {
var statearr_27133_27188 = state_27093__$1;
(statearr_27133_27188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (19))){
var inst_27023 = (state_27093[(7)]);
var inst_27042 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27023);
var state_27093__$1 = state_27093;
var statearr_27134_27189 = state_27093__$1;
(statearr_27134_27189[(2)] = inst_27042);

(statearr_27134_27189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (11))){
var inst_27023 = (state_27093[(7)]);
var inst_27027 = (inst_27023 == null);
var inst_27028 = cljs.core.not.call(null,inst_27027);
var state_27093__$1 = state_27093;
if(inst_27028){
var statearr_27135_27190 = state_27093__$1;
(statearr_27135_27190[(1)] = (13));

} else {
var statearr_27136_27191 = state_27093__$1;
(statearr_27136_27191[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (9))){
var inst_26999 = (state_27093[(8)]);
var state_27093__$1 = state_27093;
var statearr_27137_27192 = state_27093__$1;
(statearr_27137_27192[(2)] = inst_26999);

(statearr_27137_27192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (5))){
var state_27093__$1 = state_27093;
var statearr_27138_27193 = state_27093__$1;
(statearr_27138_27193[(2)] = true);

(statearr_27138_27193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (14))){
var state_27093__$1 = state_27093;
var statearr_27139_27194 = state_27093__$1;
(statearr_27139_27194[(2)] = false);

(statearr_27139_27194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (26))){
var inst_27053 = (state_27093[(10)]);
var inst_27060 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27053);
var state_27093__$1 = state_27093;
var statearr_27140_27195 = state_27093__$1;
(statearr_27140_27195[(2)] = inst_27060);

(statearr_27140_27195[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (16))){
var state_27093__$1 = state_27093;
var statearr_27141_27196 = state_27093__$1;
(statearr_27141_27196[(2)] = true);

(statearr_27141_27196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (38))){
var inst_27083 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
var statearr_27142_27197 = state_27093__$1;
(statearr_27142_27197[(2)] = inst_27083);

(statearr_27142_27197[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (30))){
var inst_27046 = (state_27093[(9)]);
var inst_27047 = (state_27093[(13)]);
var inst_27053 = (state_27093[(10)]);
var inst_27070 = cljs.core.empty_QMARK_.call(null,inst_27046);
var inst_27071 = inst_27047.call(null,inst_27053);
var inst_27072 = cljs.core.not.call(null,inst_27071);
var inst_27073 = (inst_27070) && (inst_27072);
var state_27093__$1 = state_27093;
var statearr_27143_27198 = state_27093__$1;
(statearr_27143_27198[(2)] = inst_27073);

(statearr_27143_27198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (10))){
var inst_26999 = (state_27093[(8)]);
var inst_27019 = (state_27093[(2)]);
var inst_27020 = cljs.core.get.call(null,inst_27019,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27021 = cljs.core.get.call(null,inst_27019,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27022 = cljs.core.get.call(null,inst_27019,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27023 = inst_26999;
var state_27093__$1 = (function (){var statearr_27144 = state_27093;
(statearr_27144[(7)] = inst_27023);

(statearr_27144[(16)] = inst_27021);

(statearr_27144[(17)] = inst_27022);

(statearr_27144[(18)] = inst_27020);

return statearr_27144;
})();
var statearr_27145_27199 = state_27093__$1;
(statearr_27145_27199[(2)] = null);

(statearr_27145_27199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (18))){
var inst_27037 = (state_27093[(2)]);
var state_27093__$1 = state_27093;
var statearr_27146_27200 = state_27093__$1;
(statearr_27146_27200[(2)] = inst_27037);

(statearr_27146_27200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (37))){
var state_27093__$1 = state_27093;
var statearr_27147_27201 = state_27093__$1;
(statearr_27147_27201[(2)] = null);

(statearr_27147_27201[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27094 === (8))){
var inst_26999 = (state_27093[(8)]);
var inst_27016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26999);
var state_27093__$1 = state_27093;
var statearr_27148_27202 = state_27093__$1;
(statearr_27148_27202[(2)] = inst_27016);

(statearr_27148_27202[(1)] = (10));


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
});})(c__19652__auto___27156,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19587__auto__,c__19652__auto___27156,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19588__auto__ = null;
var cljs$core$async$mix_$_state_machine__19588__auto____0 = (function (){
var statearr_27152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27152[(0)] = cljs$core$async$mix_$_state_machine__19588__auto__);

(statearr_27152[(1)] = (1));

return statearr_27152;
});
var cljs$core$async$mix_$_state_machine__19588__auto____1 = (function (state_27093){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27153){if((e27153 instanceof Object)){
var ex__19591__auto__ = e27153;
var statearr_27154_27203 = state_27093;
(statearr_27154_27203[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27204 = state_27093;
state_27093 = G__27204;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19588__auto__ = function(state_27093){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19588__auto____1.call(this,state_27093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19588__auto____0;
cljs$core$async$mix_$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19588__auto____1;
return cljs$core$async$mix_$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27156,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19654__auto__ = (function (){var statearr_27155 = f__19653__auto__.call(null);
(statearr_27155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27156);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27156,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args27207 = [];
var len__17508__auto___27210 = arguments.length;
var i__17509__auto___27211 = (0);
while(true){
if((i__17509__auto___27211 < len__17508__auto___27210)){
args27207.push((arguments[i__17509__auto___27211]));

var G__27212 = (i__17509__auto___27211 + (1));
i__17509__auto___27211 = G__27212;
continue;
} else {
}
break;
}

var G__27209 = args27207.length;
switch (G__27209) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27207.length)].join('')));

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
var args27215 = [];
var len__17508__auto___27340 = arguments.length;
var i__17509__auto___27341 = (0);
while(true){
if((i__17509__auto___27341 < len__17508__auto___27340)){
args27215.push((arguments[i__17509__auto___27341]));

var G__27342 = (i__17509__auto___27341 + (1));
i__17509__auto___27341 = G__27342;
continue;
} else {
}
break;
}

var G__27217 = args27215.length;
switch (G__27217) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27215.length)].join('')));

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
return (function (p1__27214_SHARP_){
if(cljs.core.truth_(p1__27214_SHARP_.call(null,topic))){
return p1__27214_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27214_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16469__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27218 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27218 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27219){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27219 = meta27219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27220,meta27219__$1){
var self__ = this;
var _27220__$1 = this;
return (new cljs.core.async.t27218(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27219__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27220){
var self__ = this;
var _27220__$1 = this;
return self__.meta27219;
});})(mults,ensure_mult))
;

cljs.core.async.t27218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27218.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27218.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27218.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27218.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27219","meta27219",-1490320740,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27218.cljs$lang$type = true;

cljs.core.async.t27218.cljs$lang$ctorStr = "cljs.core.async/t27218";

cljs.core.async.t27218.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t27218");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27218 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27218(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27219){
return (new cljs.core.async.t27218(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27219));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27218(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19652__auto___27344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27344,mults,ensure_mult,p){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27344,mults,ensure_mult,p){
return (function (state_27292){
var state_val_27293 = (state_27292[(1)]);
if((state_val_27293 === (7))){
var inst_27288 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27294_27345 = state_27292__$1;
(statearr_27294_27345[(2)] = inst_27288);

(statearr_27294_27345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (20))){
var state_27292__$1 = state_27292;
var statearr_27295_27346 = state_27292__$1;
(statearr_27295_27346[(2)] = null);

(statearr_27295_27346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (1))){
var state_27292__$1 = state_27292;
var statearr_27296_27347 = state_27292__$1;
(statearr_27296_27347[(2)] = null);

(statearr_27296_27347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (24))){
var inst_27271 = (state_27292[(7)]);
var inst_27280 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27271);
var state_27292__$1 = state_27292;
var statearr_27297_27348 = state_27292__$1;
(statearr_27297_27348[(2)] = inst_27280);

(statearr_27297_27348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (4))){
var inst_27223 = (state_27292[(8)]);
var inst_27223__$1 = (state_27292[(2)]);
var inst_27224 = (inst_27223__$1 == null);
var state_27292__$1 = (function (){var statearr_27298 = state_27292;
(statearr_27298[(8)] = inst_27223__$1);

return statearr_27298;
})();
if(cljs.core.truth_(inst_27224)){
var statearr_27299_27349 = state_27292__$1;
(statearr_27299_27349[(1)] = (5));

} else {
var statearr_27300_27350 = state_27292__$1;
(statearr_27300_27350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (15))){
var inst_27265 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27301_27351 = state_27292__$1;
(statearr_27301_27351[(2)] = inst_27265);

(statearr_27301_27351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (21))){
var inst_27285 = (state_27292[(2)]);
var state_27292__$1 = (function (){var statearr_27302 = state_27292;
(statearr_27302[(9)] = inst_27285);

return statearr_27302;
})();
var statearr_27303_27352 = state_27292__$1;
(statearr_27303_27352[(2)] = null);

(statearr_27303_27352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (13))){
var inst_27247 = (state_27292[(10)]);
var inst_27249 = cljs.core.chunked_seq_QMARK_.call(null,inst_27247);
var state_27292__$1 = state_27292;
if(inst_27249){
var statearr_27304_27353 = state_27292__$1;
(statearr_27304_27353[(1)] = (16));

} else {
var statearr_27305_27354 = state_27292__$1;
(statearr_27305_27354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (22))){
var inst_27277 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
if(cljs.core.truth_(inst_27277)){
var statearr_27306_27355 = state_27292__$1;
(statearr_27306_27355[(1)] = (23));

} else {
var statearr_27307_27356 = state_27292__$1;
(statearr_27307_27356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (6))){
var inst_27273 = (state_27292[(11)]);
var inst_27223 = (state_27292[(8)]);
var inst_27271 = (state_27292[(7)]);
var inst_27271__$1 = topic_fn.call(null,inst_27223);
var inst_27272 = cljs.core.deref.call(null,mults);
var inst_27273__$1 = cljs.core.get.call(null,inst_27272,inst_27271__$1);
var state_27292__$1 = (function (){var statearr_27308 = state_27292;
(statearr_27308[(11)] = inst_27273__$1);

(statearr_27308[(7)] = inst_27271__$1);

return statearr_27308;
})();
if(cljs.core.truth_(inst_27273__$1)){
var statearr_27309_27357 = state_27292__$1;
(statearr_27309_27357[(1)] = (19));

} else {
var statearr_27310_27358 = state_27292__$1;
(statearr_27310_27358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (25))){
var inst_27282 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27311_27359 = state_27292__$1;
(statearr_27311_27359[(2)] = inst_27282);

(statearr_27311_27359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (17))){
var inst_27247 = (state_27292[(10)]);
var inst_27256 = cljs.core.first.call(null,inst_27247);
var inst_27257 = cljs.core.async.muxch_STAR_.call(null,inst_27256);
var inst_27258 = cljs.core.async.close_BANG_.call(null,inst_27257);
var inst_27259 = cljs.core.next.call(null,inst_27247);
var inst_27233 = inst_27259;
var inst_27234 = null;
var inst_27235 = (0);
var inst_27236 = (0);
var state_27292__$1 = (function (){var statearr_27312 = state_27292;
(statearr_27312[(12)] = inst_27233);

(statearr_27312[(13)] = inst_27258);

(statearr_27312[(14)] = inst_27236);

(statearr_27312[(15)] = inst_27234);

(statearr_27312[(16)] = inst_27235);

return statearr_27312;
})();
var statearr_27313_27360 = state_27292__$1;
(statearr_27313_27360[(2)] = null);

(statearr_27313_27360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (3))){
var inst_27290 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27292__$1,inst_27290);
} else {
if((state_val_27293 === (12))){
var inst_27267 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27314_27361 = state_27292__$1;
(statearr_27314_27361[(2)] = inst_27267);

(statearr_27314_27361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (2))){
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27292__$1,(4),ch);
} else {
if((state_val_27293 === (23))){
var state_27292__$1 = state_27292;
var statearr_27315_27362 = state_27292__$1;
(statearr_27315_27362[(2)] = null);

(statearr_27315_27362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (19))){
var inst_27273 = (state_27292[(11)]);
var inst_27223 = (state_27292[(8)]);
var inst_27275 = cljs.core.async.muxch_STAR_.call(null,inst_27273);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27292__$1,(22),inst_27275,inst_27223);
} else {
if((state_val_27293 === (11))){
var inst_27233 = (state_27292[(12)]);
var inst_27247 = (state_27292[(10)]);
var inst_27247__$1 = cljs.core.seq.call(null,inst_27233);
var state_27292__$1 = (function (){var statearr_27316 = state_27292;
(statearr_27316[(10)] = inst_27247__$1);

return statearr_27316;
})();
if(inst_27247__$1){
var statearr_27317_27363 = state_27292__$1;
(statearr_27317_27363[(1)] = (13));

} else {
var statearr_27318_27364 = state_27292__$1;
(statearr_27318_27364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (9))){
var inst_27269 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27319_27365 = state_27292__$1;
(statearr_27319_27365[(2)] = inst_27269);

(statearr_27319_27365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (5))){
var inst_27230 = cljs.core.deref.call(null,mults);
var inst_27231 = cljs.core.vals.call(null,inst_27230);
var inst_27232 = cljs.core.seq.call(null,inst_27231);
var inst_27233 = inst_27232;
var inst_27234 = null;
var inst_27235 = (0);
var inst_27236 = (0);
var state_27292__$1 = (function (){var statearr_27320 = state_27292;
(statearr_27320[(12)] = inst_27233);

(statearr_27320[(14)] = inst_27236);

(statearr_27320[(15)] = inst_27234);

(statearr_27320[(16)] = inst_27235);

return statearr_27320;
})();
var statearr_27321_27366 = state_27292__$1;
(statearr_27321_27366[(2)] = null);

(statearr_27321_27366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (14))){
var state_27292__$1 = state_27292;
var statearr_27325_27367 = state_27292__$1;
(statearr_27325_27367[(2)] = null);

(statearr_27325_27367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (16))){
var inst_27247 = (state_27292[(10)]);
var inst_27251 = cljs.core.chunk_first.call(null,inst_27247);
var inst_27252 = cljs.core.chunk_rest.call(null,inst_27247);
var inst_27253 = cljs.core.count.call(null,inst_27251);
var inst_27233 = inst_27252;
var inst_27234 = inst_27251;
var inst_27235 = inst_27253;
var inst_27236 = (0);
var state_27292__$1 = (function (){var statearr_27326 = state_27292;
(statearr_27326[(12)] = inst_27233);

(statearr_27326[(14)] = inst_27236);

(statearr_27326[(15)] = inst_27234);

(statearr_27326[(16)] = inst_27235);

return statearr_27326;
})();
var statearr_27327_27368 = state_27292__$1;
(statearr_27327_27368[(2)] = null);

(statearr_27327_27368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (10))){
var inst_27233 = (state_27292[(12)]);
var inst_27236 = (state_27292[(14)]);
var inst_27234 = (state_27292[(15)]);
var inst_27235 = (state_27292[(16)]);
var inst_27241 = cljs.core._nth.call(null,inst_27234,inst_27236);
var inst_27242 = cljs.core.async.muxch_STAR_.call(null,inst_27241);
var inst_27243 = cljs.core.async.close_BANG_.call(null,inst_27242);
var inst_27244 = (inst_27236 + (1));
var tmp27322 = inst_27233;
var tmp27323 = inst_27234;
var tmp27324 = inst_27235;
var inst_27233__$1 = tmp27322;
var inst_27234__$1 = tmp27323;
var inst_27235__$1 = tmp27324;
var inst_27236__$1 = inst_27244;
var state_27292__$1 = (function (){var statearr_27328 = state_27292;
(statearr_27328[(12)] = inst_27233__$1);

(statearr_27328[(14)] = inst_27236__$1);

(statearr_27328[(17)] = inst_27243);

(statearr_27328[(15)] = inst_27234__$1);

(statearr_27328[(16)] = inst_27235__$1);

return statearr_27328;
})();
var statearr_27329_27369 = state_27292__$1;
(statearr_27329_27369[(2)] = null);

(statearr_27329_27369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (18))){
var inst_27262 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27330_27370 = state_27292__$1;
(statearr_27330_27370[(2)] = inst_27262);

(statearr_27330_27370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (8))){
var inst_27236 = (state_27292[(14)]);
var inst_27235 = (state_27292[(16)]);
var inst_27238 = (inst_27236 < inst_27235);
var inst_27239 = inst_27238;
var state_27292__$1 = state_27292;
if(cljs.core.truth_(inst_27239)){
var statearr_27331_27371 = state_27292__$1;
(statearr_27331_27371[(1)] = (10));

} else {
var statearr_27332_27372 = state_27292__$1;
(statearr_27332_27372[(1)] = (11));

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
});})(c__19652__auto___27344,mults,ensure_mult,p))
;
return ((function (switch__19587__auto__,c__19652__auto___27344,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_27336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27336[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_27336[(1)] = (1));

return statearr_27336;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_27292){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27337){if((e27337 instanceof Object)){
var ex__19591__auto__ = e27337;
var statearr_27338_27373 = state_27292;
(statearr_27338_27373[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27374 = state_27292;
state_27292 = G__27374;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_27292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_27292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27344,mults,ensure_mult,p))
})();
var state__19654__auto__ = (function (){var statearr_27339 = f__19653__auto__.call(null);
(statearr_27339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27344);

return statearr_27339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27344,mults,ensure_mult,p))
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
var args27375 = [];
var len__17508__auto___27378 = arguments.length;
var i__17509__auto___27379 = (0);
while(true){
if((i__17509__auto___27379 < len__17508__auto___27378)){
args27375.push((arguments[i__17509__auto___27379]));

var G__27380 = (i__17509__auto___27379 + (1));
i__17509__auto___27379 = G__27380;
continue;
} else {
}
break;
}

var G__27377 = args27375.length;
switch (G__27377) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27375.length)].join('')));

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
var args27382 = [];
var len__17508__auto___27385 = arguments.length;
var i__17509__auto___27386 = (0);
while(true){
if((i__17509__auto___27386 < len__17508__auto___27385)){
args27382.push((arguments[i__17509__auto___27386]));

var G__27387 = (i__17509__auto___27386 + (1));
i__17509__auto___27386 = G__27387;
continue;
} else {
}
break;
}

var G__27384 = args27382.length;
switch (G__27384) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27382.length)].join('')));

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
var args27389 = [];
var len__17508__auto___27460 = arguments.length;
var i__17509__auto___27461 = (0);
while(true){
if((i__17509__auto___27461 < len__17508__auto___27460)){
args27389.push((arguments[i__17509__auto___27461]));

var G__27462 = (i__17509__auto___27461 + (1));
i__17509__auto___27461 = G__27462;
continue;
} else {
}
break;
}

var G__27391 = args27389.length;
switch (G__27391) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27389.length)].join('')));

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
var c__19652__auto___27464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27464,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27464,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27430){
var state_val_27431 = (state_27430[(1)]);
if((state_val_27431 === (7))){
var state_27430__$1 = state_27430;
var statearr_27432_27465 = state_27430__$1;
(statearr_27432_27465[(2)] = null);

(statearr_27432_27465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (1))){
var state_27430__$1 = state_27430;
var statearr_27433_27466 = state_27430__$1;
(statearr_27433_27466[(2)] = null);

(statearr_27433_27466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (4))){
var inst_27394 = (state_27430[(7)]);
var inst_27396 = (inst_27394 < cnt);
var state_27430__$1 = state_27430;
if(cljs.core.truth_(inst_27396)){
var statearr_27434_27467 = state_27430__$1;
(statearr_27434_27467[(1)] = (6));

} else {
var statearr_27435_27468 = state_27430__$1;
(statearr_27435_27468[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (15))){
var inst_27426 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27436_27469 = state_27430__$1;
(statearr_27436_27469[(2)] = inst_27426);

(statearr_27436_27469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (13))){
var inst_27419 = cljs.core.async.close_BANG_.call(null,out);
var state_27430__$1 = state_27430;
var statearr_27437_27470 = state_27430__$1;
(statearr_27437_27470[(2)] = inst_27419);

(statearr_27437_27470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (6))){
var state_27430__$1 = state_27430;
var statearr_27438_27471 = state_27430__$1;
(statearr_27438_27471[(2)] = null);

(statearr_27438_27471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (3))){
var inst_27428 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27430__$1,inst_27428);
} else {
if((state_val_27431 === (12))){
var inst_27416 = (state_27430[(8)]);
var inst_27416__$1 = (state_27430[(2)]);
var inst_27417 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27416__$1);
var state_27430__$1 = (function (){var statearr_27439 = state_27430;
(statearr_27439[(8)] = inst_27416__$1);

return statearr_27439;
})();
if(cljs.core.truth_(inst_27417)){
var statearr_27440_27472 = state_27430__$1;
(statearr_27440_27472[(1)] = (13));

} else {
var statearr_27441_27473 = state_27430__$1;
(statearr_27441_27473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (2))){
var inst_27393 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27394 = (0);
var state_27430__$1 = (function (){var statearr_27442 = state_27430;
(statearr_27442[(7)] = inst_27394);

(statearr_27442[(9)] = inst_27393);

return statearr_27442;
})();
var statearr_27443_27474 = state_27430__$1;
(statearr_27443_27474[(2)] = null);

(statearr_27443_27474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (11))){
var inst_27394 = (state_27430[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27430,(10),Object,null,(9));
var inst_27403 = chs__$1.call(null,inst_27394);
var inst_27404 = done.call(null,inst_27394);
var inst_27405 = cljs.core.async.take_BANG_.call(null,inst_27403,inst_27404);
var state_27430__$1 = state_27430;
var statearr_27444_27475 = state_27430__$1;
(statearr_27444_27475[(2)] = inst_27405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (9))){
var inst_27394 = (state_27430[(7)]);
var inst_27407 = (state_27430[(2)]);
var inst_27408 = (inst_27394 + (1));
var inst_27394__$1 = inst_27408;
var state_27430__$1 = (function (){var statearr_27445 = state_27430;
(statearr_27445[(7)] = inst_27394__$1);

(statearr_27445[(10)] = inst_27407);

return statearr_27445;
})();
var statearr_27446_27476 = state_27430__$1;
(statearr_27446_27476[(2)] = null);

(statearr_27446_27476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (5))){
var inst_27414 = (state_27430[(2)]);
var state_27430__$1 = (function (){var statearr_27447 = state_27430;
(statearr_27447[(11)] = inst_27414);

return statearr_27447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27430__$1,(12),dchan);
} else {
if((state_val_27431 === (14))){
var inst_27416 = (state_27430[(8)]);
var inst_27421 = cljs.core.apply.call(null,f,inst_27416);
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27430__$1,(16),out,inst_27421);
} else {
if((state_val_27431 === (16))){
var inst_27423 = (state_27430[(2)]);
var state_27430__$1 = (function (){var statearr_27448 = state_27430;
(statearr_27448[(12)] = inst_27423);

return statearr_27448;
})();
var statearr_27449_27477 = state_27430__$1;
(statearr_27449_27477[(2)] = null);

(statearr_27449_27477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (10))){
var inst_27398 = (state_27430[(2)]);
var inst_27399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27430__$1 = (function (){var statearr_27450 = state_27430;
(statearr_27450[(13)] = inst_27398);

return statearr_27450;
})();
var statearr_27451_27478 = state_27430__$1;
(statearr_27451_27478[(2)] = inst_27399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (8))){
var inst_27412 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27452_27479 = state_27430__$1;
(statearr_27452_27479[(2)] = inst_27412);

(statearr_27452_27479[(1)] = (5));


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
});})(c__19652__auto___27464,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19587__auto__,c__19652__auto___27464,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_27456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27456[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_27456[(1)] = (1));

return statearr_27456;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_27430){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27457){if((e27457 instanceof Object)){
var ex__19591__auto__ = e27457;
var statearr_27458_27480 = state_27430;
(statearr_27458_27480[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27481 = state_27430;
state_27430 = G__27481;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_27430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_27430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27464,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19654__auto__ = (function (){var statearr_27459 = f__19653__auto__.call(null);
(statearr_27459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27464);

return statearr_27459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27464,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27483 = [];
var len__17508__auto___27539 = arguments.length;
var i__17509__auto___27540 = (0);
while(true){
if((i__17509__auto___27540 < len__17508__auto___27539)){
args27483.push((arguments[i__17509__auto___27540]));

var G__27541 = (i__17509__auto___27540 + (1));
i__17509__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var G__27485 = args27483.length;
switch (G__27485) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27483.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___27543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27543,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27543,out){
return (function (state_27515){
var state_val_27516 = (state_27515[(1)]);
if((state_val_27516 === (7))){
var inst_27494 = (state_27515[(7)]);
var inst_27495 = (state_27515[(8)]);
var inst_27494__$1 = (state_27515[(2)]);
var inst_27495__$1 = cljs.core.nth.call(null,inst_27494__$1,(0),null);
var inst_27496 = cljs.core.nth.call(null,inst_27494__$1,(1),null);
var inst_27497 = (inst_27495__$1 == null);
var state_27515__$1 = (function (){var statearr_27517 = state_27515;
(statearr_27517[(9)] = inst_27496);

(statearr_27517[(7)] = inst_27494__$1);

(statearr_27517[(8)] = inst_27495__$1);

return statearr_27517;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27518_27544 = state_27515__$1;
(statearr_27518_27544[(1)] = (8));

} else {
var statearr_27519_27545 = state_27515__$1;
(statearr_27519_27545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (1))){
var inst_27486 = cljs.core.vec.call(null,chs);
var inst_27487 = inst_27486;
var state_27515__$1 = (function (){var statearr_27520 = state_27515;
(statearr_27520[(10)] = inst_27487);

return statearr_27520;
})();
var statearr_27521_27546 = state_27515__$1;
(statearr_27521_27546[(2)] = null);

(statearr_27521_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (4))){
var inst_27487 = (state_27515[(10)]);
var state_27515__$1 = state_27515;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27515__$1,(7),inst_27487);
} else {
if((state_val_27516 === (6))){
var inst_27511 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27522_27547 = state_27515__$1;
(statearr_27522_27547[(2)] = inst_27511);

(statearr_27522_27547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (3))){
var inst_27513 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27515__$1,inst_27513);
} else {
if((state_val_27516 === (2))){
var inst_27487 = (state_27515[(10)]);
var inst_27489 = cljs.core.count.call(null,inst_27487);
var inst_27490 = (inst_27489 > (0));
var state_27515__$1 = state_27515;
if(cljs.core.truth_(inst_27490)){
var statearr_27524_27548 = state_27515__$1;
(statearr_27524_27548[(1)] = (4));

} else {
var statearr_27525_27549 = state_27515__$1;
(statearr_27525_27549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (11))){
var inst_27487 = (state_27515[(10)]);
var inst_27504 = (state_27515[(2)]);
var tmp27523 = inst_27487;
var inst_27487__$1 = tmp27523;
var state_27515__$1 = (function (){var statearr_27526 = state_27515;
(statearr_27526[(11)] = inst_27504);

(statearr_27526[(10)] = inst_27487__$1);

return statearr_27526;
})();
var statearr_27527_27550 = state_27515__$1;
(statearr_27527_27550[(2)] = null);

(statearr_27527_27550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (9))){
var inst_27495 = (state_27515[(8)]);
var state_27515__$1 = state_27515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27515__$1,(11),out,inst_27495);
} else {
if((state_val_27516 === (5))){
var inst_27509 = cljs.core.async.close_BANG_.call(null,out);
var state_27515__$1 = state_27515;
var statearr_27528_27551 = state_27515__$1;
(statearr_27528_27551[(2)] = inst_27509);

(statearr_27528_27551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (10))){
var inst_27507 = (state_27515[(2)]);
var state_27515__$1 = state_27515;
var statearr_27529_27552 = state_27515__$1;
(statearr_27529_27552[(2)] = inst_27507);

(statearr_27529_27552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27516 === (8))){
var inst_27496 = (state_27515[(9)]);
var inst_27494 = (state_27515[(7)]);
var inst_27495 = (state_27515[(8)]);
var inst_27487 = (state_27515[(10)]);
var inst_27499 = (function (){var cs = inst_27487;
var vec__27492 = inst_27494;
var v = inst_27495;
var c = inst_27496;
return ((function (cs,vec__27492,v,c,inst_27496,inst_27494,inst_27495,inst_27487,state_val_27516,c__19652__auto___27543,out){
return (function (p1__27482_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27482_SHARP_);
});
;})(cs,vec__27492,v,c,inst_27496,inst_27494,inst_27495,inst_27487,state_val_27516,c__19652__auto___27543,out))
})();
var inst_27500 = cljs.core.filterv.call(null,inst_27499,inst_27487);
var inst_27487__$1 = inst_27500;
var state_27515__$1 = (function (){var statearr_27530 = state_27515;
(statearr_27530[(10)] = inst_27487__$1);

return statearr_27530;
})();
var statearr_27531_27553 = state_27515__$1;
(statearr_27531_27553[(2)] = null);

(statearr_27531_27553[(1)] = (2));


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
});})(c__19652__auto___27543,out))
;
return ((function (switch__19587__auto__,c__19652__auto___27543,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_27535 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27535[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_27535[(1)] = (1));

return statearr_27535;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_27515){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27536){if((e27536 instanceof Object)){
var ex__19591__auto__ = e27536;
var statearr_27537_27554 = state_27515;
(statearr_27537_27554[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27555 = state_27515;
state_27515 = G__27555;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_27515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_27515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27543,out))
})();
var state__19654__auto__ = (function (){var statearr_27538 = f__19653__auto__.call(null);
(statearr_27538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27543);

return statearr_27538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27543,out))
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
var args27556 = [];
var len__17508__auto___27605 = arguments.length;
var i__17509__auto___27606 = (0);
while(true){
if((i__17509__auto___27606 < len__17508__auto___27605)){
args27556.push((arguments[i__17509__auto___27606]));

var G__27607 = (i__17509__auto___27606 + (1));
i__17509__auto___27606 = G__27607;
continue;
} else {
}
break;
}

var G__27558 = args27556.length;
switch (G__27558) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27556.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___27609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27609,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27609,out){
return (function (state_27582){
var state_val_27583 = (state_27582[(1)]);
if((state_val_27583 === (7))){
var inst_27564 = (state_27582[(7)]);
var inst_27564__$1 = (state_27582[(2)]);
var inst_27565 = (inst_27564__$1 == null);
var inst_27566 = cljs.core.not.call(null,inst_27565);
var state_27582__$1 = (function (){var statearr_27584 = state_27582;
(statearr_27584[(7)] = inst_27564__$1);

return statearr_27584;
})();
if(inst_27566){
var statearr_27585_27610 = state_27582__$1;
(statearr_27585_27610[(1)] = (8));

} else {
var statearr_27586_27611 = state_27582__$1;
(statearr_27586_27611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (1))){
var inst_27559 = (0);
var state_27582__$1 = (function (){var statearr_27587 = state_27582;
(statearr_27587[(8)] = inst_27559);

return statearr_27587;
})();
var statearr_27588_27612 = state_27582__$1;
(statearr_27588_27612[(2)] = null);

(statearr_27588_27612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (4))){
var state_27582__$1 = state_27582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27582__$1,(7),ch);
} else {
if((state_val_27583 === (6))){
var inst_27577 = (state_27582[(2)]);
var state_27582__$1 = state_27582;
var statearr_27589_27613 = state_27582__$1;
(statearr_27589_27613[(2)] = inst_27577);

(statearr_27589_27613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (3))){
var inst_27579 = (state_27582[(2)]);
var inst_27580 = cljs.core.async.close_BANG_.call(null,out);
var state_27582__$1 = (function (){var statearr_27590 = state_27582;
(statearr_27590[(9)] = inst_27579);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27582__$1,inst_27580);
} else {
if((state_val_27583 === (2))){
var inst_27559 = (state_27582[(8)]);
var inst_27561 = (inst_27559 < n);
var state_27582__$1 = state_27582;
if(cljs.core.truth_(inst_27561)){
var statearr_27591_27614 = state_27582__$1;
(statearr_27591_27614[(1)] = (4));

} else {
var statearr_27592_27615 = state_27582__$1;
(statearr_27592_27615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (11))){
var inst_27559 = (state_27582[(8)]);
var inst_27569 = (state_27582[(2)]);
var inst_27570 = (inst_27559 + (1));
var inst_27559__$1 = inst_27570;
var state_27582__$1 = (function (){var statearr_27593 = state_27582;
(statearr_27593[(8)] = inst_27559__$1);

(statearr_27593[(10)] = inst_27569);

return statearr_27593;
})();
var statearr_27594_27616 = state_27582__$1;
(statearr_27594_27616[(2)] = null);

(statearr_27594_27616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (9))){
var state_27582__$1 = state_27582;
var statearr_27595_27617 = state_27582__$1;
(statearr_27595_27617[(2)] = null);

(statearr_27595_27617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (5))){
var state_27582__$1 = state_27582;
var statearr_27596_27618 = state_27582__$1;
(statearr_27596_27618[(2)] = null);

(statearr_27596_27618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (10))){
var inst_27574 = (state_27582[(2)]);
var state_27582__$1 = state_27582;
var statearr_27597_27619 = state_27582__$1;
(statearr_27597_27619[(2)] = inst_27574);

(statearr_27597_27619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (8))){
var inst_27564 = (state_27582[(7)]);
var state_27582__$1 = state_27582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27582__$1,(11),out,inst_27564);
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
});})(c__19652__auto___27609,out))
;
return ((function (switch__19587__auto__,c__19652__auto___27609,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_27601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27601[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_27601[(1)] = (1));

return statearr_27601;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_27582){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27602){if((e27602 instanceof Object)){
var ex__19591__auto__ = e27602;
var statearr_27603_27620 = state_27582;
(statearr_27603_27620[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27621 = state_27582;
state_27582 = G__27621;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_27582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_27582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27609,out))
})();
var state__19654__auto__ = (function (){var statearr_27604 = f__19653__auto__.call(null);
(statearr_27604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27609);

return statearr_27604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27609,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27629 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27629 = (function (map_LT_,f,ch,meta27630){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27630 = meta27630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27631,meta27630__$1){
var self__ = this;
var _27631__$1 = this;
return (new cljs.core.async.t27629(self__.map_LT_,self__.f,self__.ch,meta27630__$1));
});

cljs.core.async.t27629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27631){
var self__ = this;
var _27631__$1 = this;
return self__.meta27630;
});

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27632 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27632 = (function (map_LT_,f,ch,meta27630,_,fn1,meta27633){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27630 = meta27630;
this._ = _;
this.fn1 = fn1;
this.meta27633 = meta27633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27634,meta27633__$1){
var self__ = this;
var _27634__$1 = this;
return (new cljs.core.async.t27632(self__.map_LT_,self__.f,self__.ch,self__.meta27630,self__._,self__.fn1,meta27633__$1));
});})(___$1))
;

cljs.core.async.t27632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27634){
var self__ = this;
var _27634__$1 = this;
return self__.meta27633;
});})(___$1))
;

cljs.core.async.t27632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27622_SHARP_){
return f1.call(null,(((p1__27622_SHARP_ == null))?null:self__.f.call(null,p1__27622_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27632.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27630","meta27630",1205375918,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t27629","cljs.core.async/t27629",1021230980,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27633","meta27633",-910408642,null)], null);
});})(___$1))
;

cljs.core.async.t27632.cljs$lang$type = true;

cljs.core.async.t27632.cljs$lang$ctorStr = "cljs.core.async/t27632";

cljs.core.async.t27632.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t27632");
});})(___$1))
;

cljs.core.async.__GT_t27632 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27632(map_LT___$1,f__$1,ch__$1,meta27630__$1,___$2,fn1__$1,meta27633){
return (new cljs.core.async.t27632(map_LT___$1,f__$1,ch__$1,meta27630__$1,___$2,fn1__$1,meta27633));
});})(___$1))
;

}

return (new cljs.core.async.t27632(self__.map_LT_,self__.f,self__.ch,self__.meta27630,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27630","meta27630",1205375918,null)], null);
});

cljs.core.async.t27629.cljs$lang$type = true;

cljs.core.async.t27629.cljs$lang$ctorStr = "cljs.core.async/t27629";

cljs.core.async.t27629.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t27629");
});

cljs.core.async.__GT_t27629 = (function cljs$core$async$map_LT__$___GT_t27629(map_LT___$1,f__$1,ch__$1,meta27630){
return (new cljs.core.async.t27629(map_LT___$1,f__$1,ch__$1,meta27630));
});

}

return (new cljs.core.async.t27629(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27638 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27638 = (function (map_GT_,f,ch,meta27639){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27639 = meta27639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27640,meta27639__$1){
var self__ = this;
var _27640__$1 = this;
return (new cljs.core.async.t27638(self__.map_GT_,self__.f,self__.ch,meta27639__$1));
});

cljs.core.async.t27638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27640){
var self__ = this;
var _27640__$1 = this;
return self__.meta27639;
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27639","meta27639",1850280114,null)], null);
});

cljs.core.async.t27638.cljs$lang$type = true;

cljs.core.async.t27638.cljs$lang$ctorStr = "cljs.core.async/t27638";

cljs.core.async.t27638.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t27638");
});

cljs.core.async.__GT_t27638 = (function cljs$core$async$map_GT__$___GT_t27638(map_GT___$1,f__$1,ch__$1,meta27639){
return (new cljs.core.async.t27638(map_GT___$1,f__$1,ch__$1,meta27639));
});

}

return (new cljs.core.async.t27638(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27644 = (function (filter_GT_,p,ch,meta27645){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27645 = meta27645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27646,meta27645__$1){
var self__ = this;
var _27646__$1 = this;
return (new cljs.core.async.t27644(self__.filter_GT_,self__.p,self__.ch,meta27645__$1));
});

cljs.core.async.t27644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27646){
var self__ = this;
var _27646__$1 = this;
return self__.meta27645;
});

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27645","meta27645",-1348603743,null)], null);
});

cljs.core.async.t27644.cljs$lang$type = true;

cljs.core.async.t27644.cljs$lang$ctorStr = "cljs.core.async/t27644";

cljs.core.async.t27644.cljs$lang$ctorPrWriter = (function (this__17048__auto__,writer__17049__auto__,opt__17050__auto__){
return cljs.core._write.call(null,writer__17049__auto__,"cljs.core.async/t27644");
});

cljs.core.async.__GT_t27644 = (function cljs$core$async$filter_GT__$___GT_t27644(filter_GT___$1,p__$1,ch__$1,meta27645){
return (new cljs.core.async.t27644(filter_GT___$1,p__$1,ch__$1,meta27645));
});

}

return (new cljs.core.async.t27644(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27647 = [];
var len__17508__auto___27691 = arguments.length;
var i__17509__auto___27692 = (0);
while(true){
if((i__17509__auto___27692 < len__17508__auto___27691)){
args27647.push((arguments[i__17509__auto___27692]));

var G__27693 = (i__17509__auto___27692 + (1));
i__17509__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var G__27649 = args27647.length;
switch (G__27649) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27647.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___27695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___27695,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___27695,out){
return (function (state_27670){
var state_val_27671 = (state_27670[(1)]);
if((state_val_27671 === (7))){
var inst_27666 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27672_27696 = state_27670__$1;
(statearr_27672_27696[(2)] = inst_27666);

(statearr_27672_27696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (1))){
var state_27670__$1 = state_27670;
var statearr_27673_27697 = state_27670__$1;
(statearr_27673_27697[(2)] = null);

(statearr_27673_27697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (4))){
var inst_27652 = (state_27670[(7)]);
var inst_27652__$1 = (state_27670[(2)]);
var inst_27653 = (inst_27652__$1 == null);
var state_27670__$1 = (function (){var statearr_27674 = state_27670;
(statearr_27674[(7)] = inst_27652__$1);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27653)){
var statearr_27675_27698 = state_27670__$1;
(statearr_27675_27698[(1)] = (5));

} else {
var statearr_27676_27699 = state_27670__$1;
(statearr_27676_27699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (6))){
var inst_27652 = (state_27670[(7)]);
var inst_27657 = p.call(null,inst_27652);
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27657)){
var statearr_27677_27700 = state_27670__$1;
(statearr_27677_27700[(1)] = (8));

} else {
var statearr_27678_27701 = state_27670__$1;
(statearr_27678_27701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (3))){
var inst_27668 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27670__$1,inst_27668);
} else {
if((state_val_27671 === (2))){
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(4),ch);
} else {
if((state_val_27671 === (11))){
var inst_27660 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27679_27702 = state_27670__$1;
(statearr_27679_27702[(2)] = inst_27660);

(statearr_27679_27702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (9))){
var state_27670__$1 = state_27670;
var statearr_27680_27703 = state_27670__$1;
(statearr_27680_27703[(2)] = null);

(statearr_27680_27703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (5))){
var inst_27655 = cljs.core.async.close_BANG_.call(null,out);
var state_27670__$1 = state_27670;
var statearr_27681_27704 = state_27670__$1;
(statearr_27681_27704[(2)] = inst_27655);

(statearr_27681_27704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (10))){
var inst_27663 = (state_27670[(2)]);
var state_27670__$1 = (function (){var statearr_27682 = state_27670;
(statearr_27682[(8)] = inst_27663);

return statearr_27682;
})();
var statearr_27683_27705 = state_27670__$1;
(statearr_27683_27705[(2)] = null);

(statearr_27683_27705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (8))){
var inst_27652 = (state_27670[(7)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27670__$1,(11),out,inst_27652);
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
});})(c__19652__auto___27695,out))
;
return ((function (switch__19587__auto__,c__19652__auto___27695,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_27687 = [null,null,null,null,null,null,null,null,null];
(statearr_27687[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_27687[(1)] = (1));

return statearr_27687;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_27670){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27688){if((e27688 instanceof Object)){
var ex__19591__auto__ = e27688;
var statearr_27689_27706 = state_27670;
(statearr_27689_27706[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27707 = state_27670;
state_27670 = G__27707;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_27670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_27670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___27695,out))
})();
var state__19654__auto__ = (function (){var statearr_27690 = f__19653__auto__.call(null);
(statearr_27690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___27695);

return statearr_27690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___27695,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args27708 = [];
var len__17508__auto___27711 = arguments.length;
var i__17509__auto___27712 = (0);
while(true){
if((i__17509__auto___27712 < len__17508__auto___27711)){
args27708.push((arguments[i__17509__auto___27712]));

var G__27713 = (i__17509__auto___27712 + (1));
i__17509__auto___27712 = G__27713;
continue;
} else {
}
break;
}

var G__27710 = args27708.length;
switch (G__27710) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27708.length)].join('')));

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
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27882_27923 = state_27880__$1;
(statearr_27882_27923[(2)] = inst_27876);

(statearr_27882_27923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (20))){
var inst_27846 = (state_27880[(7)]);
var inst_27857 = (state_27880[(2)]);
var inst_27858 = cljs.core.next.call(null,inst_27846);
var inst_27832 = inst_27858;
var inst_27833 = null;
var inst_27834 = (0);
var inst_27835 = (0);
var state_27880__$1 = (function (){var statearr_27883 = state_27880;
(statearr_27883[(8)] = inst_27834);

(statearr_27883[(9)] = inst_27857);

(statearr_27883[(10)] = inst_27832);

(statearr_27883[(11)] = inst_27833);

(statearr_27883[(12)] = inst_27835);

return statearr_27883;
})();
var statearr_27884_27924 = state_27880__$1;
(statearr_27884_27924[(2)] = null);

(statearr_27884_27924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (1))){
var state_27880__$1 = state_27880;
var statearr_27885_27925 = state_27880__$1;
(statearr_27885_27925[(2)] = null);

(statearr_27885_27925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27821 = (state_27880[(13)]);
var inst_27821__$1 = (state_27880[(2)]);
var inst_27822 = (inst_27821__$1 == null);
var state_27880__$1 = (function (){var statearr_27886 = state_27880;
(statearr_27886[(13)] = inst_27821__$1);

return statearr_27886;
})();
if(cljs.core.truth_(inst_27822)){
var statearr_27887_27926 = state_27880__$1;
(statearr_27887_27926[(1)] = (5));

} else {
var statearr_27888_27927 = state_27880__$1;
(statearr_27888_27927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (15))){
var state_27880__$1 = state_27880;
var statearr_27892_27928 = state_27880__$1;
(statearr_27892_27928[(2)] = null);

(statearr_27892_27928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (21))){
var state_27880__$1 = state_27880;
var statearr_27893_27929 = state_27880__$1;
(statearr_27893_27929[(2)] = null);

(statearr_27893_27929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (13))){
var inst_27834 = (state_27880[(8)]);
var inst_27832 = (state_27880[(10)]);
var inst_27833 = (state_27880[(11)]);
var inst_27835 = (state_27880[(12)]);
var inst_27842 = (state_27880[(2)]);
var inst_27843 = (inst_27835 + (1));
var tmp27889 = inst_27834;
var tmp27890 = inst_27832;
var tmp27891 = inst_27833;
var inst_27832__$1 = tmp27890;
var inst_27833__$1 = tmp27891;
var inst_27834__$1 = tmp27889;
var inst_27835__$1 = inst_27843;
var state_27880__$1 = (function (){var statearr_27894 = state_27880;
(statearr_27894[(8)] = inst_27834__$1);

(statearr_27894[(10)] = inst_27832__$1);

(statearr_27894[(11)] = inst_27833__$1);

(statearr_27894[(14)] = inst_27842);

(statearr_27894[(12)] = inst_27835__$1);

return statearr_27894;
})();
var statearr_27895_27930 = state_27880__$1;
(statearr_27895_27930[(2)] = null);

(statearr_27895_27930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (22))){
var state_27880__$1 = state_27880;
var statearr_27896_27931 = state_27880__$1;
(statearr_27896_27931[(2)] = null);

(statearr_27896_27931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (6))){
var inst_27821 = (state_27880[(13)]);
var inst_27830 = f.call(null,inst_27821);
var inst_27831 = cljs.core.seq.call(null,inst_27830);
var inst_27832 = inst_27831;
var inst_27833 = null;
var inst_27834 = (0);
var inst_27835 = (0);
var state_27880__$1 = (function (){var statearr_27897 = state_27880;
(statearr_27897[(8)] = inst_27834);

(statearr_27897[(10)] = inst_27832);

(statearr_27897[(11)] = inst_27833);

(statearr_27897[(12)] = inst_27835);

return statearr_27897;
})();
var statearr_27898_27932 = state_27880__$1;
(statearr_27898_27932[(2)] = null);

(statearr_27898_27932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (17))){
var inst_27846 = (state_27880[(7)]);
var inst_27850 = cljs.core.chunk_first.call(null,inst_27846);
var inst_27851 = cljs.core.chunk_rest.call(null,inst_27846);
var inst_27852 = cljs.core.count.call(null,inst_27850);
var inst_27832 = inst_27851;
var inst_27833 = inst_27850;
var inst_27834 = inst_27852;
var inst_27835 = (0);
var state_27880__$1 = (function (){var statearr_27899 = state_27880;
(statearr_27899[(8)] = inst_27834);

(statearr_27899[(10)] = inst_27832);

(statearr_27899[(11)] = inst_27833);

(statearr_27899[(12)] = inst_27835);

return statearr_27899;
})();
var statearr_27900_27933 = state_27880__$1;
(statearr_27900_27933[(2)] = null);

(statearr_27900_27933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (12))){
var inst_27866 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27901_27934 = state_27880__$1;
(statearr_27901_27934[(2)] = inst_27866);

(statearr_27901_27934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (2))){
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27880__$1,(4),in$);
} else {
if((state_val_27881 === (23))){
var inst_27874 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27902_27935 = state_27880__$1;
(statearr_27902_27935[(2)] = inst_27874);

(statearr_27902_27935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (19))){
var inst_27861 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27903_27936 = state_27880__$1;
(statearr_27903_27936[(2)] = inst_27861);

(statearr_27903_27936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (11))){
var inst_27846 = (state_27880[(7)]);
var inst_27832 = (state_27880[(10)]);
var inst_27846__$1 = cljs.core.seq.call(null,inst_27832);
var state_27880__$1 = (function (){var statearr_27904 = state_27880;
(statearr_27904[(7)] = inst_27846__$1);

return statearr_27904;
})();
if(inst_27846__$1){
var statearr_27905_27937 = state_27880__$1;
(statearr_27905_27937[(1)] = (14));

} else {
var statearr_27906_27938 = state_27880__$1;
(statearr_27906_27938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (9))){
var inst_27868 = (state_27880[(2)]);
var inst_27869 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27880__$1 = (function (){var statearr_27907 = state_27880;
(statearr_27907[(15)] = inst_27868);

return statearr_27907;
})();
if(cljs.core.truth_(inst_27869)){
var statearr_27908_27939 = state_27880__$1;
(statearr_27908_27939[(1)] = (21));

} else {
var statearr_27909_27940 = state_27880__$1;
(statearr_27909_27940[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (5))){
var inst_27824 = cljs.core.async.close_BANG_.call(null,out);
var state_27880__$1 = state_27880;
var statearr_27910_27941 = state_27880__$1;
(statearr_27910_27941[(2)] = inst_27824);

(statearr_27910_27941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (14))){
var inst_27846 = (state_27880[(7)]);
var inst_27848 = cljs.core.chunked_seq_QMARK_.call(null,inst_27846);
var state_27880__$1 = state_27880;
if(inst_27848){
var statearr_27911_27942 = state_27880__$1;
(statearr_27911_27942[(1)] = (17));

} else {
var statearr_27912_27943 = state_27880__$1;
(statearr_27912_27943[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (16))){
var inst_27864 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27913_27944 = state_27880__$1;
(statearr_27913_27944[(2)] = inst_27864);

(statearr_27913_27944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27833 = (state_27880[(11)]);
var inst_27835 = (state_27880[(12)]);
var inst_27840 = cljs.core._nth.call(null,inst_27833,inst_27835);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(13),out,inst_27840);
} else {
if((state_val_27881 === (18))){
var inst_27846 = (state_27880[(7)]);
var inst_27855 = cljs.core.first.call(null,inst_27846);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(20),out,inst_27855);
} else {
if((state_val_27881 === (8))){
var inst_27834 = (state_27880[(8)]);
var inst_27835 = (state_27880[(12)]);
var inst_27837 = (inst_27835 < inst_27834);
var inst_27838 = inst_27837;
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27838)){
var statearr_27914_27945 = state_27880__$1;
(statearr_27914_27945[(1)] = (10));

} else {
var statearr_27915_27946 = state_27880__$1;
(statearr_27915_27946[(1)] = (11));

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
var statearr_27919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27919[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__);

(statearr_27919[(1)] = (1));

return statearr_27919;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____1 = (function (state_27880){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e27920){if((e27920 instanceof Object)){
var ex__19591__auto__ = e27920;
var statearr_27921_27947 = state_27880;
(statearr_27921_27947[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27948 = state_27880;
state_27880 = G__27948;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto__))
})();
var state__19654__auto__ = (function (){var statearr_27922 = f__19653__auto__.call(null);
(statearr_27922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto__);

return statearr_27922;
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
var args27949 = [];
var len__17508__auto___27952 = arguments.length;
var i__17509__auto___27953 = (0);
while(true){
if((i__17509__auto___27953 < len__17508__auto___27952)){
args27949.push((arguments[i__17509__auto___27953]));

var G__27954 = (i__17509__auto___27953 + (1));
i__17509__auto___27953 = G__27954;
continue;
} else {
}
break;
}

var G__27951 = args27949.length;
switch (G__27951) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27949.length)].join('')));

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
var args27956 = [];
var len__17508__auto___27959 = arguments.length;
var i__17509__auto___27960 = (0);
while(true){
if((i__17509__auto___27960 < len__17508__auto___27959)){
args27956.push((arguments[i__17509__auto___27960]));

var G__27961 = (i__17509__auto___27960 + (1));
i__17509__auto___27960 = G__27961;
continue;
} else {
}
break;
}

var G__27958 = args27956.length;
switch (G__27958) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27956.length)].join('')));

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
var args27963 = [];
var len__17508__auto___28014 = arguments.length;
var i__17509__auto___28015 = (0);
while(true){
if((i__17509__auto___28015 < len__17508__auto___28014)){
args27963.push((arguments[i__17509__auto___28015]));

var G__28016 = (i__17509__auto___28015 + (1));
i__17509__auto___28015 = G__28016;
continue;
} else {
}
break;
}

var G__27965 = args27963.length;
switch (G__27965) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27963.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___28018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___28018,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___28018,out){
return (function (state_27989){
var state_val_27990 = (state_27989[(1)]);
if((state_val_27990 === (7))){
var inst_27984 = (state_27989[(2)]);
var state_27989__$1 = state_27989;
var statearr_27991_28019 = state_27989__$1;
(statearr_27991_28019[(2)] = inst_27984);

(statearr_27991_28019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (1))){
var inst_27966 = null;
var state_27989__$1 = (function (){var statearr_27992 = state_27989;
(statearr_27992[(7)] = inst_27966);

return statearr_27992;
})();
var statearr_27993_28020 = state_27989__$1;
(statearr_27993_28020[(2)] = null);

(statearr_27993_28020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (4))){
var inst_27969 = (state_27989[(8)]);
var inst_27969__$1 = (state_27989[(2)]);
var inst_27970 = (inst_27969__$1 == null);
var inst_27971 = cljs.core.not.call(null,inst_27970);
var state_27989__$1 = (function (){var statearr_27994 = state_27989;
(statearr_27994[(8)] = inst_27969__$1);

return statearr_27994;
})();
if(inst_27971){
var statearr_27995_28021 = state_27989__$1;
(statearr_27995_28021[(1)] = (5));

} else {
var statearr_27996_28022 = state_27989__$1;
(statearr_27996_28022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (6))){
var state_27989__$1 = state_27989;
var statearr_27997_28023 = state_27989__$1;
(statearr_27997_28023[(2)] = null);

(statearr_27997_28023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (3))){
var inst_27986 = (state_27989[(2)]);
var inst_27987 = cljs.core.async.close_BANG_.call(null,out);
var state_27989__$1 = (function (){var statearr_27998 = state_27989;
(statearr_27998[(9)] = inst_27986);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27989__$1,inst_27987);
} else {
if((state_val_27990 === (2))){
var state_27989__$1 = state_27989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27989__$1,(4),ch);
} else {
if((state_val_27990 === (11))){
var inst_27969 = (state_27989[(8)]);
var inst_27978 = (state_27989[(2)]);
var inst_27966 = inst_27969;
var state_27989__$1 = (function (){var statearr_27999 = state_27989;
(statearr_27999[(7)] = inst_27966);

(statearr_27999[(10)] = inst_27978);

return statearr_27999;
})();
var statearr_28000_28024 = state_27989__$1;
(statearr_28000_28024[(2)] = null);

(statearr_28000_28024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (9))){
var inst_27969 = (state_27989[(8)]);
var state_27989__$1 = state_27989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27989__$1,(11),out,inst_27969);
} else {
if((state_val_27990 === (5))){
var inst_27966 = (state_27989[(7)]);
var inst_27969 = (state_27989[(8)]);
var inst_27973 = cljs.core._EQ_.call(null,inst_27969,inst_27966);
var state_27989__$1 = state_27989;
if(inst_27973){
var statearr_28002_28025 = state_27989__$1;
(statearr_28002_28025[(1)] = (8));

} else {
var statearr_28003_28026 = state_27989__$1;
(statearr_28003_28026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (10))){
var inst_27981 = (state_27989[(2)]);
var state_27989__$1 = state_27989;
var statearr_28004_28027 = state_27989__$1;
(statearr_28004_28027[(2)] = inst_27981);

(statearr_28004_28027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27990 === (8))){
var inst_27966 = (state_27989[(7)]);
var tmp28001 = inst_27966;
var inst_27966__$1 = tmp28001;
var state_27989__$1 = (function (){var statearr_28005 = state_27989;
(statearr_28005[(7)] = inst_27966__$1);

return statearr_28005;
})();
var statearr_28006_28028 = state_27989__$1;
(statearr_28006_28028[(2)] = null);

(statearr_28006_28028[(1)] = (2));


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
});})(c__19652__auto___28018,out))
;
return ((function (switch__19587__auto__,c__19652__auto___28018,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_28010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28010[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_28010[(1)] = (1));

return statearr_28010;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_27989){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_27989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28011){if((e28011 instanceof Object)){
var ex__19591__auto__ = e28011;
var statearr_28012_28029 = state_27989;
(statearr_28012_28029[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28030 = state_27989;
state_27989 = G__28030;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_27989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_27989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___28018,out))
})();
var state__19654__auto__ = (function (){var statearr_28013 = f__19653__auto__.call(null);
(statearr_28013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___28018);

return statearr_28013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___28018,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args28031 = [];
var len__17508__auto___28101 = arguments.length;
var i__17509__auto___28102 = (0);
while(true){
if((i__17509__auto___28102 < len__17508__auto___28101)){
args28031.push((arguments[i__17509__auto___28102]));

var G__28103 = (i__17509__auto___28102 + (1));
i__17509__auto___28102 = G__28103;
continue;
} else {
}
break;
}

var G__28033 = args28031.length;
switch (G__28033) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28031.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___28105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___28105,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___28105,out){
return (function (state_28071){
var state_val_28072 = (state_28071[(1)]);
if((state_val_28072 === (7))){
var inst_28067 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28073_28106 = state_28071__$1;
(statearr_28073_28106[(2)] = inst_28067);

(statearr_28073_28106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (1))){
var inst_28034 = (new Array(n));
var inst_28035 = inst_28034;
var inst_28036 = (0);
var state_28071__$1 = (function (){var statearr_28074 = state_28071;
(statearr_28074[(7)] = inst_28036);

(statearr_28074[(8)] = inst_28035);

return statearr_28074;
})();
var statearr_28075_28107 = state_28071__$1;
(statearr_28075_28107[(2)] = null);

(statearr_28075_28107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (4))){
var inst_28039 = (state_28071[(9)]);
var inst_28039__$1 = (state_28071[(2)]);
var inst_28040 = (inst_28039__$1 == null);
var inst_28041 = cljs.core.not.call(null,inst_28040);
var state_28071__$1 = (function (){var statearr_28076 = state_28071;
(statearr_28076[(9)] = inst_28039__$1);

return statearr_28076;
})();
if(inst_28041){
var statearr_28077_28108 = state_28071__$1;
(statearr_28077_28108[(1)] = (5));

} else {
var statearr_28078_28109 = state_28071__$1;
(statearr_28078_28109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (15))){
var inst_28061 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28079_28110 = state_28071__$1;
(statearr_28079_28110[(2)] = inst_28061);

(statearr_28079_28110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (13))){
var state_28071__$1 = state_28071;
var statearr_28080_28111 = state_28071__$1;
(statearr_28080_28111[(2)] = null);

(statearr_28080_28111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (6))){
var inst_28036 = (state_28071[(7)]);
var inst_28057 = (inst_28036 > (0));
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28057)){
var statearr_28081_28112 = state_28071__$1;
(statearr_28081_28112[(1)] = (12));

} else {
var statearr_28082_28113 = state_28071__$1;
(statearr_28082_28113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (3))){
var inst_28069 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28071__$1,inst_28069);
} else {
if((state_val_28072 === (12))){
var inst_28035 = (state_28071[(8)]);
var inst_28059 = cljs.core.vec.call(null,inst_28035);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28071__$1,(15),out,inst_28059);
} else {
if((state_val_28072 === (2))){
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28071__$1,(4),ch);
} else {
if((state_val_28072 === (11))){
var inst_28051 = (state_28071[(2)]);
var inst_28052 = (new Array(n));
var inst_28035 = inst_28052;
var inst_28036 = (0);
var state_28071__$1 = (function (){var statearr_28083 = state_28071;
(statearr_28083[(7)] = inst_28036);

(statearr_28083[(8)] = inst_28035);

(statearr_28083[(10)] = inst_28051);

return statearr_28083;
})();
var statearr_28084_28114 = state_28071__$1;
(statearr_28084_28114[(2)] = null);

(statearr_28084_28114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (9))){
var inst_28035 = (state_28071[(8)]);
var inst_28049 = cljs.core.vec.call(null,inst_28035);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28071__$1,(11),out,inst_28049);
} else {
if((state_val_28072 === (5))){
var inst_28036 = (state_28071[(7)]);
var inst_28035 = (state_28071[(8)]);
var inst_28039 = (state_28071[(9)]);
var inst_28044 = (state_28071[(11)]);
var inst_28043 = (inst_28035[inst_28036] = inst_28039);
var inst_28044__$1 = (inst_28036 + (1));
var inst_28045 = (inst_28044__$1 < n);
var state_28071__$1 = (function (){var statearr_28085 = state_28071;
(statearr_28085[(12)] = inst_28043);

(statearr_28085[(11)] = inst_28044__$1);

return statearr_28085;
})();
if(cljs.core.truth_(inst_28045)){
var statearr_28086_28115 = state_28071__$1;
(statearr_28086_28115[(1)] = (8));

} else {
var statearr_28087_28116 = state_28071__$1;
(statearr_28087_28116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (14))){
var inst_28064 = (state_28071[(2)]);
var inst_28065 = cljs.core.async.close_BANG_.call(null,out);
var state_28071__$1 = (function (){var statearr_28089 = state_28071;
(statearr_28089[(13)] = inst_28064);

return statearr_28089;
})();
var statearr_28090_28117 = state_28071__$1;
(statearr_28090_28117[(2)] = inst_28065);

(statearr_28090_28117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (10))){
var inst_28055 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28091_28118 = state_28071__$1;
(statearr_28091_28118[(2)] = inst_28055);

(statearr_28091_28118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (8))){
var inst_28035 = (state_28071[(8)]);
var inst_28044 = (state_28071[(11)]);
var tmp28088 = inst_28035;
var inst_28035__$1 = tmp28088;
var inst_28036 = inst_28044;
var state_28071__$1 = (function (){var statearr_28092 = state_28071;
(statearr_28092[(7)] = inst_28036);

(statearr_28092[(8)] = inst_28035__$1);

return statearr_28092;
})();
var statearr_28093_28119 = state_28071__$1;
(statearr_28093_28119[(2)] = null);

(statearr_28093_28119[(1)] = (2));


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
});})(c__19652__auto___28105,out))
;
return ((function (switch__19587__auto__,c__19652__auto___28105,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_28097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28097[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_28097[(1)] = (1));

return statearr_28097;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_28071){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28098){if((e28098 instanceof Object)){
var ex__19591__auto__ = e28098;
var statearr_28099_28120 = state_28071;
(statearr_28099_28120[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28121 = state_28071;
state_28071 = G__28121;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_28071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_28071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___28105,out))
})();
var state__19654__auto__ = (function (){var statearr_28100 = f__19653__auto__.call(null);
(statearr_28100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___28105);

return statearr_28100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___28105,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args28122 = [];
var len__17508__auto___28196 = arguments.length;
var i__17509__auto___28197 = (0);
while(true){
if((i__17509__auto___28197 < len__17508__auto___28196)){
args28122.push((arguments[i__17509__auto___28197]));

var G__28198 = (i__17509__auto___28197 + (1));
i__17509__auto___28197 = G__28198;
continue;
} else {
}
break;
}

var G__28124 = args28122.length;
switch (G__28124) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28122.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19652__auto___28200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19652__auto___28200,out){
return (function (){
var f__19653__auto__ = (function (){var switch__19587__auto__ = ((function (c__19652__auto___28200,out){
return (function (state_28166){
var state_val_28167 = (state_28166[(1)]);
if((state_val_28167 === (7))){
var inst_28162 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
var statearr_28168_28201 = state_28166__$1;
(statearr_28168_28201[(2)] = inst_28162);

(statearr_28168_28201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (1))){
var inst_28125 = [];
var inst_28126 = inst_28125;
var inst_28127 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28166__$1 = (function (){var statearr_28169 = state_28166;
(statearr_28169[(7)] = inst_28126);

(statearr_28169[(8)] = inst_28127);

return statearr_28169;
})();
var statearr_28170_28202 = state_28166__$1;
(statearr_28170_28202[(2)] = null);

(statearr_28170_28202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (4))){
var inst_28130 = (state_28166[(9)]);
var inst_28130__$1 = (state_28166[(2)]);
var inst_28131 = (inst_28130__$1 == null);
var inst_28132 = cljs.core.not.call(null,inst_28131);
var state_28166__$1 = (function (){var statearr_28171 = state_28166;
(statearr_28171[(9)] = inst_28130__$1);

return statearr_28171;
})();
if(inst_28132){
var statearr_28172_28203 = state_28166__$1;
(statearr_28172_28203[(1)] = (5));

} else {
var statearr_28173_28204 = state_28166__$1;
(statearr_28173_28204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (15))){
var inst_28156 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
var statearr_28174_28205 = state_28166__$1;
(statearr_28174_28205[(2)] = inst_28156);

(statearr_28174_28205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (13))){
var state_28166__$1 = state_28166;
var statearr_28175_28206 = state_28166__$1;
(statearr_28175_28206[(2)] = null);

(statearr_28175_28206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (6))){
var inst_28126 = (state_28166[(7)]);
var inst_28151 = inst_28126.length;
var inst_28152 = (inst_28151 > (0));
var state_28166__$1 = state_28166;
if(cljs.core.truth_(inst_28152)){
var statearr_28176_28207 = state_28166__$1;
(statearr_28176_28207[(1)] = (12));

} else {
var statearr_28177_28208 = state_28166__$1;
(statearr_28177_28208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (3))){
var inst_28164 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28166__$1,inst_28164);
} else {
if((state_val_28167 === (12))){
var inst_28126 = (state_28166[(7)]);
var inst_28154 = cljs.core.vec.call(null,inst_28126);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28166__$1,(15),out,inst_28154);
} else {
if((state_val_28167 === (2))){
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,(4),ch);
} else {
if((state_val_28167 === (11))){
var inst_28134 = (state_28166[(10)]);
var inst_28130 = (state_28166[(9)]);
var inst_28144 = (state_28166[(2)]);
var inst_28145 = [];
var inst_28146 = inst_28145.push(inst_28130);
var inst_28126 = inst_28145;
var inst_28127 = inst_28134;
var state_28166__$1 = (function (){var statearr_28178 = state_28166;
(statearr_28178[(7)] = inst_28126);

(statearr_28178[(11)] = inst_28146);

(statearr_28178[(12)] = inst_28144);

(statearr_28178[(8)] = inst_28127);

return statearr_28178;
})();
var statearr_28179_28209 = state_28166__$1;
(statearr_28179_28209[(2)] = null);

(statearr_28179_28209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (9))){
var inst_28126 = (state_28166[(7)]);
var inst_28142 = cljs.core.vec.call(null,inst_28126);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28166__$1,(11),out,inst_28142);
} else {
if((state_val_28167 === (5))){
var inst_28134 = (state_28166[(10)]);
var inst_28130 = (state_28166[(9)]);
var inst_28127 = (state_28166[(8)]);
var inst_28134__$1 = f.call(null,inst_28130);
var inst_28135 = cljs.core._EQ_.call(null,inst_28134__$1,inst_28127);
var inst_28136 = cljs.core.keyword_identical_QMARK_.call(null,inst_28127,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28137 = (inst_28135) || (inst_28136);
var state_28166__$1 = (function (){var statearr_28180 = state_28166;
(statearr_28180[(10)] = inst_28134__$1);

return statearr_28180;
})();
if(cljs.core.truth_(inst_28137)){
var statearr_28181_28210 = state_28166__$1;
(statearr_28181_28210[(1)] = (8));

} else {
var statearr_28182_28211 = state_28166__$1;
(statearr_28182_28211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (14))){
var inst_28159 = (state_28166[(2)]);
var inst_28160 = cljs.core.async.close_BANG_.call(null,out);
var state_28166__$1 = (function (){var statearr_28184 = state_28166;
(statearr_28184[(13)] = inst_28159);

return statearr_28184;
})();
var statearr_28185_28212 = state_28166__$1;
(statearr_28185_28212[(2)] = inst_28160);

(statearr_28185_28212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (10))){
var inst_28149 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
var statearr_28186_28213 = state_28166__$1;
(statearr_28186_28213[(2)] = inst_28149);

(statearr_28186_28213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (8))){
var inst_28134 = (state_28166[(10)]);
var inst_28126 = (state_28166[(7)]);
var inst_28130 = (state_28166[(9)]);
var inst_28139 = inst_28126.push(inst_28130);
var tmp28183 = inst_28126;
var inst_28126__$1 = tmp28183;
var inst_28127 = inst_28134;
var state_28166__$1 = (function (){var statearr_28187 = state_28166;
(statearr_28187[(14)] = inst_28139);

(statearr_28187[(7)] = inst_28126__$1);

(statearr_28187[(8)] = inst_28127);

return statearr_28187;
})();
var statearr_28188_28214 = state_28166__$1;
(statearr_28188_28214[(2)] = null);

(statearr_28188_28214[(1)] = (2));


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
});})(c__19652__auto___28200,out))
;
return ((function (switch__19587__auto__,c__19652__auto___28200,out){
return (function() {
var cljs$core$async$state_machine__19588__auto__ = null;
var cljs$core$async$state_machine__19588__auto____0 = (function (){
var statearr_28192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28192[(0)] = cljs$core$async$state_machine__19588__auto__);

(statearr_28192[(1)] = (1));

return statearr_28192;
});
var cljs$core$async$state_machine__19588__auto____1 = (function (state_28166){
while(true){
var ret_value__19589__auto__ = (function (){try{while(true){
var result__19590__auto__ = switch__19587__auto__.call(null,state_28166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19590__auto__;
}
break;
}
}catch (e28193){if((e28193 instanceof Object)){
var ex__19591__auto__ = e28193;
var statearr_28194_28215 = state_28166;
(statearr_28194_28215[(5)] = ex__19591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28216 = state_28166;
state_28166 = G__28216;
continue;
} else {
return ret_value__19589__auto__;
}
break;
}
});
cljs$core$async$state_machine__19588__auto__ = function(state_28166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19588__auto____1.call(this,state_28166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19588__auto____0;
cljs$core$async$state_machine__19588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19588__auto____1;
return cljs$core$async$state_machine__19588__auto__;
})()
;})(switch__19587__auto__,c__19652__auto___28200,out))
})();
var state__19654__auto__ = (function (){var statearr_28195 = f__19653__auto__.call(null);
(statearr_28195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19652__auto___28200);

return statearr_28195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19654__auto__);
});})(c__19652__auto___28200,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map