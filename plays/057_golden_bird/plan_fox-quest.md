---
khai: plan
title: "fox-quest"
declared: "die Fuchsfahrt des Jüngsten"
license: CC-BY-NC-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-09"
status: active
---

# Plan: die Fuchsfahrt des Jüngsten

## Taxonomy

Ein Suchplan des Gehorsams: das Vorhaben des [Prinzen](persona_prince.md), nach dem Rat des [Fuchses](persona_fox.md) den [Goldenen Vogel](piece_golden_bird.md), das [Goldene Pferd](piece_golden_horse.md) und die [Prinzessin](persona_princess.md) in einer verketteten Folge von Aufgaben zu gewinnen. Es ist der Gegenplan zum [Raub der Brüder](plan_brothers-robbery.md), der nicht raubt, sondern verdient, sooft er nur dem weisen Wort folgt.

## Owner

- Owner: [Prinz](persona_prince.md)

## Direction

Der [Prinz](persona_prince.md) zieht aus, nachdem der Dieb im [Königsgarten](place_garden.md) die [Goldenen Äpfel](piece_golden_apples.md) geraubt hat, und trifft am [Waldweg](place_forest_path.md) den [Fuchs](persona_fox.md), den er verschont und der ihm dafür als [Berater](position_advisor.md) dient. Der Fuchs trägt ihn und warnt ihn bei jeder [Prüfung](process_trial.md) mit einem klaren Gebot: nimm den schlechten [Käfig](piece_cages.md), nicht den goldenen; den ledernen Sattel, nicht den goldenen; führe die Braut fort, ehe sie von den Eltern Abschied nimmt. Doch den [Sucher](position_seeker.md) lockt jedes Mal der Glanz, er übertritt das Gebot und wird gefangen, bis er zuletzt gehorcht und alle drei gewinnt.

## Orders

1. Der [Prinz](persona_prince.md) verschont am [Waldweg](place_forest_path.md) den [Fuchs](persona_fox.md) und nimmt ihn als [Berater](position_advisor.md) und Träger an.
2. Er greift nach dem [Goldenen Vogel](piece_golden_bird.md), missachtet die Warnung und nimmt den goldenen [Käfig](piece_cages.md) statt des schlechten, wird ertappt und auf die nächste [Prüfung](process_trial.md) geschickt.
3. Er greift nach dem [Goldenen Pferd](piece_golden_horse.md), missachtet wieder den Rat des [Fuchses](persona_fox.md) und legt den goldenen Sattel auf, wird ertappt und auf die letzte Aufgabe geschickt.
4. Er holt die [Prinzessin](persona_princess.md), und als er zuletzt dem Fuchs in allem gehorcht, gewinnt er Vogel, Pferd und Braut zugleich.

## Implementation

- Der Plan rechnet mit dem unfehlbaren Rat des [Fuchses](persona_fox.md), der jede Aufgabe vorab durchschaut.
- Er rechnet nicht mit der eigenen Schwäche des Prinzen, der dem Glanz des Goldes erliegt und jede Warnung zunächst übertritt.
- Die Wende liegt im Gehorsam: erst als der [Sucher](position_seeker.md) das Gebot hält, fallen ihm alle drei Schätze zu, und nach dem [Verrat](process_betrayal.md) der Brüder bringt ihn der Fuchs zur [Erlösung](process_redemption.md) heim.

## Targets

- [F] Der Goldene Vogel ist beim ersten Griff gewonnen (der goldene Käfig verrät ihn, er wird gefangen)
- [F] Das Goldene Pferd ist beim ersten Griff gewonnen (der goldene Sattel verrät ihn, er wird gefangen)
- [x] Im letzten Gehorsam fallen ihm Vogel, Pferd und Prinzessin zugleich zu
