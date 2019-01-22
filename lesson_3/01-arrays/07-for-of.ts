class User5 {
    constructor(public name: string, public age: number) {
    }
}

let users: User5[] = [];
users[0] = new User5("Jim", 20);
users[1] = new User5("Ivan", 25);
users[2] = new User5("Bob", 23);
users[3] = new User5("David", 30);

// обход по свойствам объекта(в данном случае это индексы массива)
console.log("for ... in");
for (const index in users) {
    console.log(index);
}

// обход значений массива
console.log("for ... of");
for (const value of users) {
    console.log(value);
}

