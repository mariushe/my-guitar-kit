(ns cljscale.theory)

(def note-map {"E" "F" "F" "F#" "F#" "G"
               "G" "G#" "G#" "A" "A" "A#"
               "A#" "B" "B" "C" "C" "C#"
               "C#" "D" "D" "D#" "D#" "E"})

(def notes ["E" "F" "F#" "G" "G#"])

(def e-standard ["E" "B" "G" "D" "A" "E"])

(def tunes {"Standard (E A D G B E)" ["E" "B" "G" "D" "A" "E"]
            "Drop D (D A D G B E)" ["E" "B" "G" "D" "A" "D"]})

(def scales {"" '(0 1 2 3 4 5 6 7 8 9 10 11)
             "pentatonic-minor" '(0 3 5 7 10)
             "phrygian" '(0 1 3 5 7 8 10)})

