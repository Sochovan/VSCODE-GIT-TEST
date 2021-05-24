const getPeople = obj => {
    const array = Object.values(obj);

    const flatArray = array
        .flat(1);

    const result = flatArray.map(elem => elem.name);
    return result;
}


obj = {
    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' },
        { name: 'Vasyl' },

    ],
    room2: [
        { name: 'Dan' },

    ],
    room3: [
        { name: 'Denis' },
        { name: 'Max' },
        { name: 'Alex' },

    ],

};
console.log(getPeople(obj));