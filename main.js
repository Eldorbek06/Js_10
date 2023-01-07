let students = [
    {
        height: 175,
        name: "Shakhboz",
        age: 18,
        gender: "m"
    },
    {
        name: "Alexandr",
        age: 32,
        gender: "m"
    },
    {
        name: "Daler",
        age: 15,
        gender: "m"
    },
    {
        name: "Muzaffar",
        age: 19,
        gender: "m"
    },
    {
        name: "Eldor",
        age: 16,
        gender: "m"
    },
    {
        name: "Ibragim",
        age: 14,
        gender: "w"
    },
    {
        name: "Ravshan",
        age: 18,
        gender: "m"
    },
    {
        name: "Timur",
        age: 19,
        gender: "w"
    },
    {
        name: "Aziz",
        age: 15,
        gender: "w"
    },
    {
        name: "Darya",
        age: 26,
        gender: "w"
    },
    {
        name: "Mukhlisa",
        age: 16,
        gender: "w"
    }
]

//Способ 1

let teenagers = []
let others = []

for (let item of students) {
    let nameValues = item.name

    if (item.age < 18) {
        teenagers.push(nameValues)
    } else {
        others.push(nameValues)
    }
}

alert(
    `
    Teenagers: ${teenagers}
    
    Others: ${others}
    `
)

console.log(
    `
    Teenagers: ${teenagers}
    
    Others: ${others}
    `
);


//Способ 2

let teenagers2 = []
let others2 = []

for (let i = 0; i <= students.length - 1; i++) {
    let nameValues = students[i].name

    if (students[i].age < 18) {
        teenagers2.push(nameValues)
    } else {
        others2.push(nameValues)
    }
}

alert(
    `
    Teenagers2: ${teenagers2}
    
    Others2: ${others2}
    `
)

console.log(
    `
    Teenagers2: ${teenagers2}
    
    Others2: ${others2}
    `
);