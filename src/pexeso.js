/* img folder by měla obsahovat složku s názvem pexesa (= pathName). Složka musí obsahovat obrázky ve formátu .png
číslované od 1 do (numberOfCards / 2), tudíž každou kartu jen jednou. Dále by měla obsahovat titulní obrázek
s názvem main.png. Obrázky by měly být přibližně ve tvaru čtverce, na velikosti ale nezáleží. 
Počet karet není dán, je možné jakékoliv sudé číslo. */

class Pexeso {
  constructor(name, pathName, numberOfCards, id) {
    this.name = name;
    this.pathName = pathName;
    this.numberOfCards = numberOfCards;
    this.id = id;
    this.cards = [];
  }

  createCards() {
    for (let i = 1; i <= this.numberOfCards / 2; i++) {
      this.cards.push({
        cardName: i
      });
    }
  }

  makePairs() {
    const copyOfDeck = this.cards.slice(0);
    copyOfDeck.forEach(card => {
      this.cards.push(card);
    });
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

const harryPotterPexeso = new Pexeso("Harry Potter", "harryPotter", 56, 0);
const lordOfTheRings = new Pexeso("Lord of the Rings", "lotr", 38, 1);
const strangerThings = new Pexeso("Stranger Things", "strangerThings", 40, 2);

// Každé nové pexeso přidej do pole pexesoDecks.
const pexesoDecks = [harryPotterPexeso, lordOfTheRings, strangerThings];

function initiatePexeso(pexesoDeck) {
  pexesoDeck.forEach(pexeso => {
    pexeso.createCards();
    pexeso.makePairs();
    pexeso.shuffleDeck();
  });
}

document.addEventListener("DOMContentLoaded", initiatePexeso(pexesoDecks));

export default pexesoDecks;
