(ns cljscale.client
  (:require [quiescent.core :as q]
            [quiescent.dom :as d]
            [cljscale.generator :as g]))

(enable-console-print!)

(def fretboard (atom []))

(def settings (atom {:root ""
                     :scale ""}))

(declare FretBoard)

(declare View)

(defn render []
  (q/render
   (View @fretboard)
   (.getElementById js/document "main")))

(defn load []
  (swap! fretboard (fn [_] (g/create-fretboard g/e-standard 24)))
  (when (not (= (:root @settings) ""))
    (swap! fretboard (fn [_] (g/add-root @fretboard (:root @settings)))))
  (when (not (= (:scale @settings) ""))
    (swap! fretboard (fn [_] (g/add-scale
                              @fretboard
                              (:scale @settings)
                              (:root @settings)))))
  (println @fretboard)
  (render))

(q/defcomponent RoundSpan [add-classes]
  (apply d/span {:className (str "round-span " add-classes)} ""))

(q/defcomponent NoteSpan [note]
  (apply d/span {:className "note"} (:note note)))

(q/defcomponent Fret [fret]
  (apply
   d/li
   {:className (str
                (when (:root fret) "root ")
                (if (:in-scale fret) "in-scale " "not-in-scale ")
                "fret")
    :onClick (fn [root]
               (swap! settings assoc :root (:note fret))
               (load))}
   (when (:in-scale fret) (RoundSpan "round-scale"))
   (when (:root fret) (RoundSpan "round-root"))
   ;;(NoteSpan fret)
   (:note fret)
   ;;""
   ))

(q/defcomponent String [frets]
  (apply d/ul {:className "string"} (mapv Fret frets)))

(q/defcomponent FretBoard [fretboard]
  (d/div {:className "row"}
         (apply d/div {:className "fretboard col-sm-12"} (mapv String fretboard))))

(q/defcomponent Option [root]
  (d/option {:value root} root))

(q/defcomponent Root []
  (apply d/select
         {:className "root-selection"
          :onChange (fn [root]
                      (swap! settings assoc :root (.-value (.-target root)))
                      (load))}
         (map Option (conj g/notes ""))))

(q/defcomponent Scale []
  (apply d/select
         {:className "scale-selection"
          :onChange (fn [root]
                      (swap! settings assoc :scale (.-value (.-target root)))
                      (load))}
         (map Option (keys g/scales))))

(q/defcomponent Selections []
  (d/div
   {:className "selections row"}
   (Root)
   (Scale)))

(q/defcomponent View [fretboard] (d/div {}
                                        (FretBoard fretboard)
                                        (Selections)))

(load)
