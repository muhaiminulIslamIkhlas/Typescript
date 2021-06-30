type stringOrNum = string | number;
type userType = { name: string, age: number };

const userDetails = (
    id: stringOrNum,
    user: userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

userDetails(10, { name: "A", age: 10 });