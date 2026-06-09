---
khai: plan
title: "innkeeper-theft"
declared: "der Diebstahl des Wirtes"
license: CC-BY-NC-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-09"
status: active
---

# Plan: der Diebstahl des Wirtes

## Taxonomy

Ein Raubplan der Habgier: das Vorhaben des [Wirtes](persona_innkeeper.md), jedem einkehrenden Bruder seine Zaubergabe im Schlaf gegen ein wertloses Abbild zu vertauschen, das [Tischchen](piece_table.md) wie den [Goldesel](piece_donkey.md). Es ist der Gegenplan zur [Knüppelfalle des Jüngsten](plan_cudgel-trap.md), der nicht durch ehrliche Arbeit gewinnt, sondern durch heimlichen Tausch.

## Owner

- Owner: [Wirt](persona_innkeeper.md)

## Direction

Der [Wirt](persona_innkeeper.md) sieht im [Wirtshaus](place_inn.md), was die Söhne von ihren [Meistern](persona_masters.md) heimtragen, und weiß die Worte, die das [Tischchen](piece_table.md) decken und den [Goldesel](piece_donkey.md) Gold speien lassen. So sinnt er nicht auf Gewalt, sondern auf den heimlichen Tausch: er bewirtet, lobt, schenkt Wein ein, und wenn der Gast schläft, stellt er an die Stelle der Wundergabe ein Stück, das genau so aussieht und nichts kann. Der [Diebstahl](process_theft.md) setzt darauf, dass keiner der Brüder die [Lehrstätte](place_workshop.md) mit Argwohn im Herzen verlässt.

## Orders

1. Der älteste der [Söhne](persona_sons.md) kehrt mit dem [Tischchen](piece_table.md) im [Wirtshaus](place_inn.md) ein und prahlt mit seiner Gabe vor der Heimkehr.
2. Der [Wirt](persona_innkeeper.md) vertauscht es im Schlaf gegen ein gleiches, gewöhnliches Tischchen und vollzieht so den ersten [Diebstahl](process_theft.md) als [Dieb](position_thief.md).
3. Der zweite der [Söhne](persona_sons.md) kehrt mit dem [Goldesel](piece_donkey.md) ein, und der [Wirt](persona_innkeeper.md) tauscht auch ihn nachts gegen einen gemeinen Esel.
4. Als der jüngste [Sohn](persona_sons.md) mit einem Sack einkehrt, greift der [Wirt](persona_innkeeper.md) im Schlaf nach dem [Knüppel](piece_cudgel.md), um auch ihm die Gabe zu vertauschen.

## Implementation

- Der Plan rechnet mit der Prahlerei der Brüder, die ihre Gaben im [Wirtshaus](place_inn.md) vorführen, sodass der Wirt weiß, was er stehlen und wie er es ersetzen muss.
- Er rechnet mit dem festen Schlaf der müden Wanderer und damit, dass ein gleich aussehendes Abbild den Tausch verbirgt, sodass der Bruder ahnungslos mit dem toten Stück weiterzieht.
- Er rechnet darauf, auch dem jüngsten [Sohn](persona_sons.md) die Gabe im Sack durch ein wertloses Abbild zu vertauschen, wie schon den beiden Brüdern.

## Targets

- [ ] Das Wunschtischchen im Schlaf des Ältesten gegen ein gleiches vertauschen
- [ ] Den Goldesel im Schlaf des Zweiten gegen einen gemeinen Esel vertauschen
- [ ] Auch dem jüngsten Sohn die Gabe im Sack heimlich vertauschen
