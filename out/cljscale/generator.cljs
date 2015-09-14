(ns cljscale.generator)

(def note-map {"E" "F" "F" "F#" "F#" "G"
               "G" "G#" "G#" "A" "A" "A#"
               "A#" "B" "B" "C" "C" "C#"
               "C#" "D" "D" "D#" "D#" "E"})

(def notes ["E" "F" "F#" "G" "G#"])

(def e-standard ["E" "B" "G" "D" "A" "E"])

(def scales {"" '(0 1 2 3 4 5 6 7 8 9 10 11)
             "pentatonic-minor" '(0 3 5 7 10)
             "phrygian" '(0 1 3 5 7 8 10)})


(defn foreach-fret [f fretboard]
  (mapv (fn [string] (mapv f string)) fretboard))

(defn find-note [note rest]
  (if (= rest 0)
    note
    (recur (note-map note) (dec rest))))

(defn create-scale-generator [root]
  (fn [steps] (find-note root steps)))

(defn find-scale [scale root]
  (map (create-scale-generator root) (scales scale)))

(defn mark-if-in-scale [note scale]
  (assoc note :in-scale (not (not-any? #(= (note :note) %) scale))))

(defn add-scale [fretboard scale-name root]
  (let [scale (find-scale scale-name root)]
    (foreach-fret (fn [note] (mark-if-in-scale note scale)) fretboard)))

(defn mark-if-root [note root]
  (assoc note :root  (= (note :note) root)))

(defn add-root [fretboard root]
  (foreach-fret (fn [note] (mark-if-root note root)) fretboard))

(defn create-note [note] {:note note})

(defn generate-frets [res note frets-left]
  (let [next (note-map note)]
    (if (= frets-left 0)
      res
      (recur (conj res (create-note next)) next (dec frets-left)))))

(defn create-generator [fret-count]
  (fn [note] (generate-frets [(create-note note)] note fret-count)))

(defn create-fretboard [tune fret-count]
  (mapv (create-generator fret-count) tune))

