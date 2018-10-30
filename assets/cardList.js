const cardType = require('./cardType')

module.exports = {
  card: [ // card list
    { // card object structure for player card
      type: cardType.player,
      name: 'Lionel Messi',
      atack: 9,
      defence: 2,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
      team: 'Barcelona',
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
      team: 'Paris Saint-Germain',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/190871.png'
    },
    {
      type: cardType.player,
      name: 'Suárez',
      atack: 9,
      defence: 2,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
      team: 'Barcelona',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/176580.png'
    },
    {
      type: cardType.player,
      name: 'De Bruyne',
      atack: 8,
      defence: 6,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
      team: 'Manchester City',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/192985.png'
    },
    {
      type: cardType.player,
      name: 'Ramos',
      atack: 5,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
      team: 'Real Madrid',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/155862.png'
    },
    {
      type: cardType.player,
      name: 'Modric',
      atack: 8,
      defence: 6,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/10.png',
      team: 'Real Madrid',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/177003.png'
    },
    {
      type: cardType.player,
      name: 'Hazard',
      atack: 9,
      defence: 3,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
      team: 'Chelsea',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/p50514925.png'
    },
    {
      type: cardType.player,
      name: 'De Gea',
      atack: 1,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
      team: 'Manchester United',
      role: 0,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/193080.png'
    },
    {
      type: cardType.player,
      name: 'Kroos',
      atack: 7,
      defence: 7,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Real Madrid',
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
    },
    {
      type: cardType.player,
      name: 'Silva',
      atack: 7,
      defence: 5,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
      team: 'Manchester City',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/168542.png'
    },
    {
      type: cardType.player,
      name: 'Isco',
      atack: 8,
      defence: 6,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
      team: 'Real Madrid',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/197781.png'
    },
    {
      type: cardType.player,
      name: 'Pogba',
      atack: 8,
      defence: 7,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
      team: 'Manchester United',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/195864.png'
    },
    {
      type: cardType.player,
      name: 'Kanté',
      atack: 7,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
      team: 'Chelsea',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/215914.png'
    },
    {
      type: cardType.player,
      name: 'Rodríguez',
      atack: 8,
      defence: 5,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/56.png',
      team: 'Bayern München',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/198710.png'
    },
    {
      type: cardType.player,
      name: 'Casemiro',
      atack: 6,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/54.png',
      team: 'Real Madrid',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/200145.png'
    },
    {
      type: cardType.player,
      name: 'Hamšik',
      atack: 7,
      defence: 7,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/43.png',
      team: 'Napoli',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/171877.png'
    },
    {
      type: cardType.player,
      name: 'Rakitic',
      atack: 7,
      defence: 7,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/10.png',
      team: 'Barcelona',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/168651.png'
    },
    {
      type: cardType.player,
      name: 'Mbappe',
      atack: 9,
      defence: 4,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
      team: 'Paris Saint-Germain',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/p67340611.png'
    },
    {
      type: cardType.player,
      name: 'Reus',
      atack: 8,
      defence: 5,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Borussia Dortmund',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/p84074430.png'
    },
    {
      type: cardType.player,
      name: 'Pjanic',
      atack: 7,
      defence: 7,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/8.png',
      team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/180206.png'
    },
    {
      type: cardType.player,
      name: 'Matic',
      atack: 7,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/51.png',
      team: 'Manchester United',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/191202.png'
    },
    {
      type: cardType.player,
      name: 'Neuer',
      atack: 2,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Bayern München',
      role: 0,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/167495.png'
    },
    {
      type: cardType.player,
      name: 'Courtois',
      atack: 1,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
      team: 'Real Madrid',
      role: 0,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/192119.png'
    },
    {
      type: cardType.player,
      name: 'Navas',
      atack: 1,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/72.png',
      team: 'Real Madrid',
      role: 0,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/193041.png'
    },
    {
      type: cardType.player,
      name: 'Cech',
      atack: 1,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/12.png',
      team: 'Arsenal',
      role: 0,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/p50380588.png'
    },
    {
      type: cardType.player,
      name: 'Lewandowski',
      atack: 9,
      defence: 4,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/37.png',
      team: 'Bayern München',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/188545.png'
    },
    {
      type: cardType.player,
      name: 'Agüero',
      atack: 9,
      defence: 2,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
      team: 'Manchester City',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/153079.png'
    },
    {
      type: cardType.player,
      name: 'Kane',
      atack: 9,
      defence: 4,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/14.png',
      team: 'Tottenham Hotspur',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/202126.png'
    },
    {
      type: cardType.player,
      name: 'Cavani',
      atack: 8,
      defence: 5,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/60.png',
      team: 'Paris Saint-Germain',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/179813.png'
    },
    {
      type: cardType.player,
      name: 'Griezmann',
      atack: 8,
      defence: 5,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
      team: 'Atlético Madrid',
      role: 3,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/194765.png'
    },
    {
      type: cardType.player,
      name: 'Verratti',
      atack: 6,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/27.png',
      team: 'Paris Saint-Germain',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/199556.png'
    },
    {
      type: cardType.player,
      name: 'Perišic',
      atack: 8,
      defence: 6,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/10.png',
      team: 'Inter',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/181458.png'
    },
    {
      type: cardType.player,
      name: 'Vidal',
      atack: 8,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/55.png',
      team: 'Barcelona',
      role: 2,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/181872.png'
    },
    {
      type: cardType.player,
      name: 'Godín',
      atack: 4,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/60.png',
      team: 'Atlético Madrid',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/182493.png'
    },
    {
      type: cardType.player,
      name: 'Chiellini',
      atack: 4,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/27.png',
      team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/138956.png'
    },
    {
      type: cardType.player,
      name: 'Hummels',
      atack: 5,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Bayern München',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/178603.png'
    },
    {
      type: cardType.player,
      name: 'Marcelo',
      atack: 7,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/54.png',
      team: 'Real Madrid',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/176676.png'
    },
    {
      type: cardType.player,
      name: 'Silva',
      atack: 5,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/54.png',
      team: 'Paris Saint-Germain',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/164240.png'
    },
    {
      type: cardType.player,
      name: 'Piqué ',
      atack: 5,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/45.png',
      team: 'Barcelona',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/152729.png'
    },
    {
      type: cardType.player,
      name: 'Umtiti',
      atack: 5,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
      team: 'Barcelona',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/205600.png'
    },
    {
      type: cardType.player,
      name: 'Vertonghen',
      atack: 6,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
      team: 'Tottenham Hotspur',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/172871.png'
    },
    {
      type: cardType.player,
      name: 'Koulibaly',
      atack: 2,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/136.png',
      team: 'Napoli',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/201024.png'
    },
    {
      type: cardType.player,
      name: 'Benatia',
      atack: 4,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/129.png',
      team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/177509.png'
    },
    {
      type: cardType.player,
      name: 'Otamendi',
      atack: 5,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
      team: 'Manchester City',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/192366.png'
    },
    {
      type: cardType.player,
      name: 'Boateng',
      atack: 5,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Bayern München',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/183907.png	'
    },
    {
      type: cardType.player,
      name: 'Varane',
      atack: 4,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
      team: 'Real Madrid',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/201535.png'
    },
    {
      type: cardType.player,
      name: 'Kompany',
      atack: 5,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/7.png',
      team: 'Manchester City',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/139720.png'
    },
    {
      type: cardType.player,
      name: 'Alaba',
      atack: 7,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/4.png',
      team: 'Bayern München',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/197445.png'
    },
    {
      type: cardType.player,
      name: 'Kimmich',
      atack: 6,
      defence: 7,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Bayern München',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/212622.png'
    },
    {
      type: cardType.player,
      name: 'van Dijk',
      atack: 4,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/34.png',
      team: 'Liverpool',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/203376.png'
    },
    {
      type: cardType.player,
      name: 'Manolas',
      atack: 1,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/22.png',
      team: 'Roma',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/192774.png'
    },
    {
      type: cardType.player,
      name: 'Barzagli',
      atack: 3,
      defence: 9,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/27.png',
      team: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/137186.png'
    },
    {
      type: cardType.player,
      name: 'Süle',
      atack: 4,
      defence: 8,
      nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/21.png',
      team: 'Bayern München',
      role: 1,
      picture: 'https://cdn.futbin.com/content/fifa19/img/players/212190.png'
    }
    // { // card object structure for player card
    //   type: cardType.coach,
    //   name: 'Maradona',
    //   passive: '', // leave blank
    //   active: '', // leave blank
    //   nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/52.png',
    //   team: '',
    //   picture: 'https://cdn.futbin.com/content/fifa19/img/players/190042.png'
    // },
    // { // card object structure for player card
    //   type: cardType.coach,
    //   name: 'van Basten',
    //   passive: '', // leave blank
    //   active: '', // leave blank
    //   nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/34.png',
    //   team: '',
    //   picture: 'https://cdn.futbin.com/content/fifa19/img/players/192181.png'
    // },
    // { // card object structure for player card
    //   type: cardType.coach,
    //   name: 'Blanc',
    //   passive: '', // leave blank
    //   active: '', // leave blank
    //   nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/18.png',
    //   team: '',
    //   picture: 'https://cdn.futbin.com/content/fifa19/img/players/238443.png'
    // },
    // { // card object structure for player card
    //   type: cardType.coach,
    //   name: 'Shevchenko',
    //   passive: '', // leave blank
    //   active: '', // leave blank
    //   nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/49.png',
    //   team: '',
    //   picture: 'https://cdn.futbin.com/content/fifa19/img/players/13128.png'
    // },
    // { // card object structure for player card
    //   type: cardType.coach,
    //   name: 'Nedved',
    //   passive: '', // leave blank
    //   active: '', // leave blank
    //   nationality: 'https://cdn.futbin.com/content/fifa19/img/nation/12.png',
    //   team: '',
    //   picture: 'https://cdn.futbin.com/content/fifa19/img/players/6235.png'
    // }{
    //   type: cardType.func,
    //   name: '+1 for all DEF cards',
    //   id: 1,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }
    //{
    //   type: cardType.func,
    //   name: '+1 for all ATK cards',
    //   id: 2,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: '+2 for all DEF cards',
    //   id: 3,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: '+2 for all ATK cards',
    //   id: 4,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: '+3 for random ATK card',
    //   id: 5,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: '+3 for random DEF card',
    //   id: 6,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: 'Remove ATK points of an enemy card',
    //   id: 7,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: 'Remove DEF points of an enemy card',
    //   id: 8,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: 'Enemy lose one random card',
    //   id: 9,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }{
    //   type: cardType.func,
    //   name: 'Steal a card from enemy',
    //   id: 10,
    //   picture: 'http://chittagongit.com//images/football-icon-png/football-icon-png-8.jpg'
    // }
  ]
}
