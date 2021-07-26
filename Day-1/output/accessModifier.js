"use strict";
class Player {
    // private name: string;
    // private age: number;
    // readonly country: string;
    // constructor(n: string, a: number, c: string) {
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    // }
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafee = new Player('Mashrafee', 35, 'Bangladesh');
const sakib = new Player('Sakib', 35, 'Bangladesh');
mashrafee.play();
const players = [];
players.push(sakib);
console.log(players[0].country);
