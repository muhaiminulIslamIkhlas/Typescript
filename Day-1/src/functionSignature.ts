let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
    console.log(a + b);
    return a + b;
}

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(calculation(4, 2, 'minus'));

let userDetails2: (id: number | string, userInfo: {
    name: string,
    age: number
}) => void;

userDetails2 = (id: number | string, userInfo: {
    name: string,
    age: number
}) => {
    return id + userInfo.name;
}

let temp = userDetails2(5, { name: 'M', age: 2 });
console.log(temp);