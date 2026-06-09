---
khai: plan
title: "riddle-snare"
declared: "die Rätselfalle des Prinzen"
license: CC-BY-NC-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-09"
status: active
---

# Plan: die Rätselfalle des Prinzen

## Taxonomy

Ein Werbeplan der List: das Vorhaben des [Königssohns](persona_prince.md), mit seinem treuen [Diener](persona_servant.md) ein Rätsel zu stellen, das niemand lösen kann, und die heimlich ausgeschickten Späherinnen der [Rätselprinzessin](persona_princess.md) bei der Tat zu fangen, auf dass ihr Betrug am Hofe offenbar werde und sie ihm zur Braut falle. Es ist der Gegenplan zur [Aushorchung der Prinzessin](plan_princess-espionage.md), der nicht die Lösung verbirgt, sondern die Lauscher selbst zur Falle macht.

## Owner

- Owner: [Königssohn](persona_prince.md)

## Direction

Der Prinz weiß, dass die [Rätselprinzessin](persona_princess.md) jeden Freier köpfen lässt, der ihr Rätsel nicht löst, und jeden ausspäht, der ihr eines stellt, bis sie die Antwort gestohlen hat. So sinnt er nicht auf ein gelehrtes Wort, sondern auf ein [Rätselwort](piece_riddle-text.md), das keiner raten kann, weil nur er den Hergang kennt: wie der [Gifttrank](piece_poison.md) der [Hexe](persona_witch.md) den [Gaul](piece_horse.md) tötete, der tote Gaul den [Raben](piece_raven.md) und der Rabe die zwölf Mörder. Er stellt das Rätsel als [Rätselsteller](position_riddler.md), doch sein eigentlicher Streich ist der [Diener](persona_servant.md), der als [Wächter](position_guardian.md) wacht, wo andere schlafen, und die Aushorchung gegen die Horcherin wendet.

## Orders

1. Der [Königssohn](persona_prince.md) merkt sich genau, wie die [Vergiftung](process_poisoning.md) den [Gaul](piece_horse.md), den [Raben](piece_raven.md) und die zwölf Mörder in der [Mörderherberge](place_murder-inn.md) nacheinander tötete, und schmiedet daraus ein unlösbares [Rätselwort](piece_riddle-text.md).
2. Er tritt vor das Rätselgericht im [Königspalast](place_palace.md) und stellt der [Rätselprinzessin](persona_princess.md) das Rätsel im [Rätselkampf](process_contest.md), das sie nicht zu lösen vermag.
3. Er weist seinen [Diener](persona_servant.md) an, in der Kammer als [Wächter](position_guardian.md) statt seiner zu wachen, wenn die nächtlichen Späherinnen kommen, um ihm im Schlaf das Wort zu entlocken.
4. Der [Diener](persona_servant.md) fängt die dritte Lauscherin, reißt ihr den [Mantel](piece_cloak.md) ab und hält ihn als Beweis der [Aushorchung](process_espionage.md), mit dem der Prinz den Betrug vor dem Hofe entlarvt und die Prinzessin gewinnt.

## Implementation

- Der Plan rechnet damit, dass nur der Prinz den ganzen Hergang der [Vergiftung](process_poisoning.md) kennt, sodass das [Rätselwort](piece_riddle-text.md) durch reines Sinnen nicht zu lösen ist.
- Er rechnet mit der Habgier der [Rätselprinzessin](persona_princess.md), die nicht ehrlich raten, sondern die Antwort stehlen will, und so ihre Späherinnen geradewegs in die Falle schickt.
- Er rechnet auf die Treue und Wachsamkeit des [Dieners](persona_servant.md), der den [Mantel](piece_cloak.md) als stummen Zeugen sichert: nicht das Rätsel allein gewinnt, sondern der erbeutete Beweis.

## Targets

- [ ] Aus dem Tod von Gaul, Rabe und den zwölf Mördern ein unlösbares Rätselwort schmieden
- [ ] Der Prinzessin das Rätsel im Hofgericht stellen, das sie nicht zu lösen vermag
- [ ] Den Diener als Wächter statt seiner wachen lassen, wenn die Späherinnen kommen
- [ ] Der dritten Lauscherin den Mantel als Beweis abreißen und damit den Betrug vor dem Hofe entlarven
