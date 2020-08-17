import { CardRanks, CardSuits } from './enums';
import { Card } from './card';

export function generateNewDeck(): Card[] {
  return Object.keys(CardSuits).reduce((deck: Card[], suit: string) => {
    const res = Object.keys(CardRanks)
      .map((rank: string) => {
        return {rank: CardRanks[rank as any], suit: CardSuits[suit as any]} as Card;
      });
    return [...deck, ...res];
  }, []);
}
