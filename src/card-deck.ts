import { generateNewDeck } from './cards';
import { Card } from './card';

export class CardDeck {
  private deck: Card[] = generateNewDeck();

  constructor() {
    this.shuffle();
  }

  shuffle(): void {
    const a = this.deck;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    this.deck = [...a];
  }

  getCards(count: number = 1): Card[] {
    if (this.deck.length && this.deck.length >= count) {
      let i = 0;
      const cards: Card[] = [];
      while (i < count) {
        cards.push(this.deck.shift() as Card);
        i++;
      }
      return cards as Card[];
    }
    return [];
  }
}
