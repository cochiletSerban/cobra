const utils = require('./utils')

let getRandomNumberOfCards = function getRandomNumberOfCards (cardList, cardType, numberOfCards) {
  let remainingCards = cardList.filter(e => e.type === cardType)
  let selectedCards = []
  let randomCard = remainingCards[0]
  let randomCardIndex = 0

  while (selectedCards.length < numberOfCards) {
    randomCardIndex = utils.getRandomNrInRange(0, remainingCards.length)
    randomCard = remainingCards[randomCardIndex]

    if (!selectedCards.includes(randomCard) && randomCard !== undefined) {
      selectedCards.push(randomCard)
      remainingCards = remainingCards.filter(e => e !== randomCard)
    }
  }
  return { selectedCards, remainingCards }
}

module.exports = {
  getRandomNumberOfCards: getRandomNumberOfCards
}
