const cardType = require('./cardType')

module.exports = {
    board : { 
        player1: {
            playerName: 'player 1',
            playerId: '1',
            actualCards: [
                { // card object structure for player card
                    type: cardType.player,
                    name: 'Messi',
                    atack: 9,
                    defence: 2,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/241.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/158023.png'
                },
                {
                    type: cardType.player,
                    name: 'Ronaldo',
                    atack: 9,
                    defence: 3,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/38.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/20801.png'
                },
                {
                    type: cardType.player,
                    name: 'Neymar',
                    atack: 9,
                    defence: 2,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/54.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/73.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/190871.png'
                },
                {
                    type: cardType.player,
                    name: 'Suárez',
                    atack: 9,
                    defence: 2,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/241.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/176580.png'
                },
                {
                    type: cardType.player,
                    name: 'De Bruyne',
                    atack: 8,
                    defence: 6,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/10.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/192985.png'
                },
                {
                    type: cardType.player,
                    name: 'Ramos',
                    atack: 5,
                    defence: 9,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/243.png',
                    role: 1,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/155862.png'
                },
                {
                    type: cardType.player,
                    name: 'Modric',
                    atack: 8,
                    defence: 6,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/10.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/243.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/177003.png'
                }
                ],
            boardCards: [
                {
                    type: cardType.player,
                    name: 'Hazard',
                    atack: 9,
                    defence: 3,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/5.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/p50514925.png'
                },
                {
                    type: cardType.player,
                    name: 'De Gea',
                    atack: 1,
                    defence: 9,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/11.png',
                    role: 0,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/193080.png'
                },
                {
                    type: cardType.player,
                    name: 'Kroos',
                    atack: 7,
                    defence: 7,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/243.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/182521.png'
                },
                {
                    type: cardType.player,
                    name: 'Dybala',
                    atack: 9,
                    defence: 3,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/211110.png'
                }
            ],
            scor: 0
        },

        player2: {
            playerName: 'player 2',
            playerId: '2',
            actualCards: [
                { // card object structure for player card
                    type: cardType.player,
                    name: 'Messi',
                    atack: 9,
                    defence: 2,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/241.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/158023.png'
                },
                {
                    type: cardType.player,
                    name: 'Ronaldo',
                    atack: 9,
                    defence: 3,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/38.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/20801.png'
                },
                {
                    type: cardType.player,
                    name: 'Neymar',
                    atack: 9,
                    defence: 2,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/54.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/73.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/190871.png'
                },
                {
                    type: cardType.player,
                    name: 'Suárez',
                    atack: 9,
                    defence: 2,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/241.png',
                    role: 3,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/176580.png'
                },
                {
                    type: cardType.player,
                    name: 'De Bruyne',
                    atack: 8,
                    defence: 6,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/10.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/192985.png'
                },
                {
                    type: cardType.player,
                    name: 'Ramos',
                    atack: 5,
                    defence: 9,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/243.png',
                    role: 1,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/155862.png'
                },
                {
                    type: cardType.player,
                    name: 'Modric',
                    atack: 8,
                    defence: 6,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/10.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/243.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/177003.png'
                }
                ],
            boardCards: [
                {
                    type: cardType.player,
                    name: 'Hazard',
                    atack: 9,
                    defence: 3,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/5.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/p50514925.png'
                },
                {
                    type: cardType.player,
                    name: 'De Gea',
                    atack: 1,
                    defence: 9,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/11.png',
                    role: 0,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/193080.png'
                },
                {
                    type: cardType.player,
                    name: 'Kroos',
                    atack: 7,
                    defence: 7,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/243.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/182521.png'
                },
                {
                    type: cardType.player,
                    name: 'Dybala',
                    atack: 9,
                    defence: 3,
                    nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
                    team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
                    role: 2,
                    picture: 'https://cdn.futbin.com/content/fifa19/img/players/211110.png'
                }
            ],
            scor: 0
        
        }
    }
}