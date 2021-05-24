const getPeople = obj => {
    const arrayNames = Object.values(obj);
    console.log(arrayNames);

    const array = arrayNames.map(elem => Object.values(elem));
    return array;
};


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