type Person = {name: string, age: number}

let people = [
    {
        name: "Józsi"
        age: 25,
    },
    {
        name: "Pista"
        age: 30,
    },
    {
        name: "Kati"
        age: 42,
    },
];

const personConverter = (person: Person) => {
    return `<p>${person.name} ($[person.age])</p>`;
};

const peopleNames = people.map(personConverter);

console.log(peopleNames);

const map = (personArray: Person[], converter: (person: Person) => string) => {
    let newList: string[] = [];
    for (let index = 0; index < personArray.length; index++) {
        const person = personArray[index];
        const convertedValue = converter(person);
        newList.push(convertedValue);
    }
    return newList
};

const newData = map(people, personConverter);

console.log(newData)