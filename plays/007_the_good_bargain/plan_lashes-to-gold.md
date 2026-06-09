---
khai: plan
title: "lashes-to-gold"
declared: "die Schläge zu Gold gewendet"
license: CC-BY-NC-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-09"
status: active
---

# Plan: die Schläge zu Gold gewendet

## Taxonomy

Ein Schlauplan des scheinbaren Einfaltspinsels: das Vorhaben des [Bauern](persona_peasant.md), das ihm zugesprochene Urteil von fünfhundert Schlägen nicht zu erleiden, sondern zu verkaufen, und am Ende dem [König](persona_king.md) noch den geliehenen [Rock](piece_coat.md) abzulisten. Es gibt keinen Gegenplan; der Hochmut der Großen und die Habsucht des Krämers liefern dem Starrkopf von selbst die Hebel, an denen er die Strafe in Gewinn dreht.

## Owner

- Owner: [Bauer](persona_peasant.md)

## Direction

Der Bauer hat mit Fröschen und Hunden gerechte [Handel](process_bargain.md) geschlossen und steht ohne Kuh und Geld da, doch sein Starrsinn ist seine Stärke. Als der König ihm statt der Königstochter fünfhundert Schläge als Lohn verspricht, sieht der Bauer in der [Prügelstrafe](process_beating.md) keine Schmach, sondern eine Ware: was ihm gehört, das kann er weitergeben. Und wo der [Jude](persona_merchant.md) ihn beim König verraten will, kehrt der Bauer die [Täuschung](process_deception.md) um und macht aus dem geliehenen Rock ein Geschenk der Krone.

## Orders

1. Der [Bauer](persona_peasant.md) nimmt das Urteil des [Königs](persona_king.md), fünfhundert Schläge, als seinen rechtmäßigen Lohn an und behandelt es als veräußerliches Gut.
2. Vor dem [Königsschloß](place_palace.md) verkauft er die [Prügelstrafe](process_beating.md): zweihundert Schläge an den [Soldaten](persona_soldier.md), dreihundert an den [Juden](persona_merchant.md), und lässt sie als seine [Gläubiger](position_creditor.md) die Schläge einstreichen.
3. Da sie statt Geld die Schläge empfangen und der Bauer mit Gold beschenkt wird, gehen die Käufer als [Sündenbock](position_scapegoat.md) leer und wund davon.
4. Als der [Jude](persona_merchant.md) ihn im [Wirtshaus](place_tavern.md) belauscht und verrät, leiht der Bauer dessen [Rock](piece_coat.md), bezichtigt vor dem König den Juden der Lüge und der Anmaßung, und der König schenkt ihm den Rock und vertreibt den Krämer.

## Implementation

- Der Plan rechnet damit, dass ein zugesprochenes Urteil dem Verurteilten gehört und also verkauft werden kann wie eine Kuh.
- Er rechnet mit der Habsucht des Soldaten und des Juden, die für Geld die Schläge kaufen, ehe sie wissen, was sie da erstehen.
- Er rechnet damit, dass der König dem belauschten Verräter nicht glaubt: so wird der geliehene Rock zum Geschenk, und der Verrat fällt auf den Verräter zurück.

## Targets

- [x] Das Urteil der fünfhundert Schläge ist als veräußerlicher Lohn angenommen
- [x] Die Schläge sind an Soldat und Jude verkauft, der Bauer mit Gold beschenkt
- [x] Soldat und Jude haben die Prügelstrafe als Sündenböcke empfangen
- [x] Der geliehene Rock ist dem Bauern vom König geschenkt, der Jude vertrieben
