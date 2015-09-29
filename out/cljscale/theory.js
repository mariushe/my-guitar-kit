// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljscale.theory');
goog.require('cljs.core');
cljscale.theory.note_map = cljs.core.PersistentHashMap.fromArrays(["G#","A#","F#","G","E","C","F","B","C#","D#","A","D"],["A","B","G","G#","F","C#","F#","C","D","E","A#","D#"]);
cljscale.theory.notes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","F","F#","G","G#"], null);
cljscale.theory.e_standard = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","B","G","D","A","E"], null);
cljscale.theory.tunes = new cljs.core.PersistentArrayMap(null, 2, ["Standard (E A D G B E)",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","B","G","D","A","E"], null),"Drop D (D A D G B E)",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","B","G","D","A","D"], null)], null);
cljscale.theory.scales = new cljs.core.PersistentArrayMap(null, 3, ["",cljs.core.list((0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11)),"pentatonic-minor",cljs.core.list((0),(3),(5),(7),(10)),"phrygian",cljs.core.list((0),(1),(3),(5),(7),(8),(10))], null);

//# sourceMappingURL=theory.js.map