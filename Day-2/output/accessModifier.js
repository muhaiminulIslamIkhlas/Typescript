import { Player } from "./classes/Player.js";
const mashrafee = new Player('Mashrafee', 35, 'Bangladesh');
const sakib = new Player('Sakib', 35, 'Bangladesh');
mashrafee.play();
const players = [];
players.push(sakib);
console.log(players[0].country);
