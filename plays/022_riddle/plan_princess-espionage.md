---
khai: plan
title: "princess-espionage"
declared: "die Aushorchung der Prinzessin"
license: CC-BY-NC-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-09"
status: closed
---

# Plan: die Aushorchung der Prinzessin

## Taxonomy

Ein Diebesplan des Hochmuts: das Vorhaben der [Rätselprinzessin](persona_princess.md), in drei Nächten ihre Mägde an das Lager des schlafenden Freiers zu schicken, auf dass sie ihm das [Rätselwort](piece_riddle-text.md) entlocken und sie das Rätsel löse, ohne ihren Stolz und ihren Kopf zu verlieren. Es ist der Gegenplan zur [Rätselfalle des Prinzen](plan_riddle-snare.md), der nicht ehrlich rät, sondern die Antwort stiehlt.

## Owner

- Owner: [Rätselprinzessin](persona_princess.md)

## Direction

Die Prinzessin hat geschworen, nur den zu nehmen, der ihr ein unlösbares Rätsel stelle, und jeden zu köpfen, der scheitere; doch sie hat sich auch vorbehalten, jedes Rätsel mit List zu lösen, ehe der dritte Tag verstreicht. So fürchtet sie den [Königssohn](persona_prince.md) nicht offen, sondern sinnt im Stillen auf [Aushorchung](process_espionage.md): wenn der Mann schläft, soll er im Traume das Wort verraten. Sie schickt ihre Mägde Nacht um Nacht in die Kammer, bis sie glaubt, die Lösung in der Hand zu haben, und merkt nicht, dass der wache [Diener](persona_servant.md) jede Lauscherin zählt.

## Orders

1. Die [Rätselprinzessin](persona_princess.md) lässt den [Königssohn](persona_prince.md) nach dem [Rätselkampf](process_contest.md) im [Königspalast](place_palace.md) beherbergen und schickt in der ersten Nacht eine Magd, ihn im Schlaf zu beschwatzen.
2. Sie sendet in der zweiten Nacht eine weitere Magd zur [Aushorchung](process_espionage.md), doch der wachende [Diener](persona_servant.md) treibt sie wie die erste fort.
3. In der dritten Nacht kommt sie selbst verhüllt im [Mantel](piece_cloak.md), um das [Rätselwort](piece_riddle-text.md) aus dem schlafenden Munde zu greifen.
4. Der [Diener](persona_servant.md) als [Wächter](position_guardian.md) packt sie bei der Tat und reißt ihr den [Mantel](piece_cloak.md) ab, sodass am Morgen ihr Betrug bewiesen ist und sie selbst dem [Rätselsteller](position_riddler.md) zur Braut fällt.

## Implementation

- Der Plan rechnet damit, dass der Freier wie alle Männer im Schlaf schwatzt und das [Rätselwort](piece_riddle-text.md) preisgibt, ehe der dritte Tag verstreicht.
- Er rechnet nicht mit dem treuen [Diener](persona_servant.md), der statt seines Herrn wacht und die ersten Mägde wortlos vertreibt, ohne dass ein Wort fällt.
- Er bricht in der dritten Nacht: der erbeutete [Mantel](piece_cloak.md) macht die Diebin zur Überführten, und der gestohlene Sieg wird zur Niederlage, die sie an den Prinzen bindet.

## Targets

- [x] Die ersten beiden Mägde sind in den ersten Nächten ausgeschickt
- [F] Das Rätselwort ist dem Schläfer entlockt (der Diener vertreibt die Mägde)
- [F] Die Prinzessin selbst wird in der dritten Nacht beim Lauschen gefangen
- [F] Der abgerissene Mantel überführt den Betrug, das Rätsel ist verloren
