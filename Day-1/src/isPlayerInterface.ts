interface IsPlayer{
    name: string;
    age: number;
    country: string;

    play(): void;
}

class player implements IsPlayer{

    constructor(
        public name: string,
        public age: number,
        public country:string
    ){} 


    play(){
        console.log(`His name is ${this.name}`)
    }
}

