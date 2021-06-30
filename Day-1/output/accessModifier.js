"use strict";
var Player = /** @class */ (function () {
    // private name: string;
    // private age: number;
    // readonly country: string;
    // constructor(n: string, a: number, c: string) {
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    // }
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " is playing");
    };
    return Player;
}());
var mashrafee = new Player('Mashrafee', 35, 'Bangladesh');
var sakib = new Player('Sakib', 35, 'Bangladesh');
mashrafee.play();
var players = [];
players.push(sakib);
console.log(players[0].country);
