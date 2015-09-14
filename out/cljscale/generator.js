// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljscale.generator');
goog.require('cljs.core');
cljscale.generator.note_map = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E","C","F","B","C#","D#","A","D"],["A","B","G","G#","F","C#","F#","C","D","E","A#","D#"]);
cljscale.generator.notes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","F","F#","G","G#"], null);
cljscale.generator.e_standard = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","B","G","D","A","E"], null);
cljscale.generator.scales = new cljs.core.PersistentArrayMap(null, 3, ["",cljs.core.list((0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11)),"pentatonic-minor",cljs.core.list((0),(3),(5),(7),(10)),"phrygian",cljs.core.list((0),(1),(3),(5),(7),(8),(10))], null);
cljscale.generator.foreach_fret = (function cljscale$generator$foreach_fret(f,fretboard){
return cljs.core.mapv.call(null,(function (string){
return cljs.core.mapv.call(null,f,string);
}),fretboard);
});
cljscale.generator.find_note = (function cljscale$generator$find_note(note,rest){
while(true){
if(cljs.core._EQ_.call(null,rest,(0))){
return note;
} else {
var G__23486 = cljscale.generator.note_map.call(null,note);
var G__23487 = (rest - (1));
note = G__23486;
rest = G__23487;
continue;
}
break;
}
});
cljscale.generator.create_scale_generator = (function cljscale$generator$create_scale_generator(root){
return (function (steps){
return cljscale.generator.find_note.call(null,root,steps);
});
});
cljscale.generator.find_scale = (function cljscale$generator$find_scale(scale,root){
return cljs.core.map.call(null,cljscale.generator.create_scale_generator.call(null,root),cljscale.generator.scales.call(null,scale));
});
cljscale.generator.mark_if_in_scale = (function cljscale$generator$mark_if_in_scale(note,scale){
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"in-scale","in-scale",465354433),!(cljs.core.not_any_QMARK_.call(null,(function (p1__23488_SHARP_){
return cljs.core._EQ_.call(null,note.call(null,new cljs.core.Keyword(null,"note","note",1426297904)),p1__23488_SHARP_);
}),scale)));
});
cljscale.generator.add_scale = (function cljscale$generator$add_scale(fretboard,scale_name,root){
var scale = cljscale.generator.find_scale.call(null,scale_name,root);
return cljscale.generator.foreach_fret.call(null,((function (scale){
return (function (note){
return cljscale.generator.mark_if_in_scale.call(null,note,scale);
});})(scale))
,fretboard);
});
cljscale.generator.mark_if_root = (function cljscale$generator$mark_if_root(note,root){
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"root","root",-448657453),cljs.core._EQ_.call(null,note.call(null,new cljs.core.Keyword(null,"note","note",1426297904)),root));
});
cljscale.generator.add_root = (function cljscale$generator$add_root(fretboard,root){
return cljscale.generator.foreach_fret.call(null,(function (note){
return cljscale.generator.mark_if_root.call(null,note,root);
}),fretboard);
});
cljscale.generator.create_note = (function cljscale$generator$create_note(note){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"note","note",1426297904),note], null);
});
cljscale.generator.generate_frets = (function cljscale$generator$generate_frets(res,note,frets_left){
while(true){
var next = cljscale.generator.note_map.call(null,note);
if(cljs.core._EQ_.call(null,frets_left,(0))){
return res;
} else {
var G__23489 = cljs.core.conj.call(null,res,cljscale.generator.create_note.call(null,next));
var G__23490 = next;
var G__23491 = (frets_left - (1));
res = G__23489;
note = G__23490;
frets_left = G__23491;
continue;
}
break;
}
});
cljscale.generator.create_generator = (function cljscale$generator$create_generator(fret_count){
return (function (note){
return cljscale.generator.generate_frets.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljscale.generator.create_note.call(null,note)], null),note,fret_count);
});
});
cljscale.generator.create_fretboard = (function cljscale$generator$create_fretboard(tune,fret_count){
return cljs.core.mapv.call(null,cljscale.generator.create_generator.call(null,fret_count),tune);
});

//# sourceMappingURL=generator.js.map