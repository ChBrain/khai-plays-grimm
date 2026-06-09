---
khai: plan
title: "innkeeper-theft"
declared: "der Diebstahl des Wirtes"
license: CC-BY-NC-4.0
stamp:
  owner: KAI HACKS AI
  version: v0.0.1
  date: "2026-06-09"
status: closed
---

# Plan: der Diebstahl des Wirtes

## Taxonomy

Ein Raubplan der Habgier: das Vorhaben des [Wirtes](persona_innkeeper.md), jedem einkehrenden Bruder seine Zaubergabe im Schlaf gegen ein wertloses Abbild zu vertauschen, das [Tischchen](piece_table.md) wie den [Goldesel](piece_donkey.md). Es ist der Gegenplan zur [Knüppelfalle des Jüngsten](plan_cudgel-trap.md), der nicht durch ehrliche Arbeit gewinnt, sondern durch heimlichen Tausch.

## Owner

- Owner: [Wirt](persona_innkeeper.md)

## Direction

Der [Wirt](persona_innkeeper.md) sieht im [Wirtshaus](place_inn.md), was die Söhne von ihren [Meistern](persona_masters.md) heimtragen, und weiß die Worte, die das [Tischchen](piece_table.md) decken und den [Goldesel](piece_donkey.md) Gold speien lassen. So sinnt er nicht auf Gewalt, sondern auf den heimlichen Tausch: er bewirtet, lobt, schenkt Wein ein, und wenn der Gast schläft, stellt er an die Stelle der Wundergabe ein Stück, das genau so aussieht und nichts kann. Der [Diebstahl](process_theft.md) glückt zweimal, weil keiner der Brüder die [Lehrstätte](place_workshop.md) verlässt mit Argwohn im Herzen.

## Orders

1. Der älteste der [Söhne](persona_sons.md) kehrt mit dem [Tischchen](piece_table.md) im [Wirtshaus](place_inn.md) ein und prahlt mit seiner Gabe vor der Heimkehr.
2. Der [Wirt](persona_innkeeper.md) vertauscht es im Schlaf gegen ein gleiches, gewöhnliches Tischchen und vollzieht so den ersten [Diebstahl](process_theft.md) als [Dieb](position_thief.md).
3. Der zweite der [Söhne](persona_sons.md) kehrt mit dem [Goldesel](piece_donkey.md) ein, und der [Wirt](persona_innkeeper.md) tauscht auch ihn nachts gegen einen gemeinen Esel.
4. Als der jüngste [Sohn](persona_sons.md) mit einem Sack einkehrt, will der [Wirt](persona_innkeeper.md) nach dem [Knüppel](piece_cudgel.md) greifen, doch dieser Tausch schlägt ihm fehl.

## Implementation

- Der Plan rechnet mit der Prahlerei der Brüder, die ihre Gaben im [Wirtshaus](place_inn.md) vorführen, sodass der Wirt weiß, was er stehlen und wie er es ersetzen muss.
- Er rechnet mit dem festen Schlaf der müden Wanderer und damit, dass ein Abbild den Tausch verbirgt, bis der Bruder daheim das tote Stück vor dem [Vater](persona_father.md) blamiert.
- Er rechnet nicht mit dem [Knüppel](piece_cudgel.md) im Sack des Jüngsten, dessen Griff nach der dritten Gabe die [Züchtigung und Heimkehr](process_retribution.md) über den Dieb bringt.

## Targets

- [x] Das Wunschtischchen ist im Schlaf des Ältesten vertauscht
- [x] Der Goldesel ist im Schlaf des Zweiten vertauscht
- [F] Der Knüppel des Jüngsten ist ebenso vertauscht (die Falle schnappt zu)
