const user = {
    Airat: {
        age: 37,
        height: 176,
        weight: 80
    },
    Danya: {
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}


console.log(user.Airat)
user.Danya.sayHello('Danya')

/*===========================*/

const users = [
    {
        name: 'Anna',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Tom',
        age: 25,
        isAdmin: false
    },
    {
        name: 'Ivan',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Dmitry',
        age: 26,
        isAdmin: true
    },
    {
        name: 'Olga',
        age: 18,
        isAdmin: false
    },
    {
        name: 'Lili',
        age: 25,
        isAdmin: false
    }
];

let NumberOfOrdinaryUsers = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        NumberOfOrdinaryUsers++;
    }
}

console.log("Количество простых пользователей:", NumberOfOrdinaryUsers);