const carMaker: string[] = ["ford", "toyota"];
const dates = [new Date(), new Date()];

// const carsByMake = [["f150"], ["corolla"], ["camaro"]];
const carsByMake: string[][] = [];

const car = carMaker[0];
const myCar = carMaker.pop();

carMaker.push(100);

carMaker.map((car: string): string => {
  return car;
});

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
