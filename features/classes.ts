class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  protected drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  protected drive(): void {
    console.log("vroom");
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle("orange");
// vehicle.drive();
vehicle.honk();

const car = new Car(4, "white");
car.startDrivingProcess();
car.honk();
