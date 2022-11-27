091
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        'artist' : 'Pink Floyd',
        'title' : 'Dark side of the Moon',
        'release_year': 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "platinum": true

    }
];

092
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

093
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];

094
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    // Setup
    const recordCollection = {
        2548: {
            albumTitle: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
            albumTitle: '1999',
            artist: 'Prince',
            tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
        5439: {
            albumTitle: 'ABBA Gold'
        }
    };

// Only change code below this line
    function updateRecords(records, id, prop, value) {
        if (prop !== 'tracks' && value !== "") {
            records[id][prop] = value;
        } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = [value];
        } else if (prop === "tracks" && value !== "") {
            records[id][prop].push(value);
        } else if (value === "") {
            delete records[id][prop];
        }
        return records;
    }

    updateRecords(recordCollection, 5439, 'artist', 'ABBA');
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

095
// Setup
const myArray = [];
let i = 5;

while(i >= 0) {
    myArray.push(i);
    i--;
}
// Only change code below this line

096
// Setup
const myArray = [];

for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}
// Only change code below this line

097
// Setup
const myArray = [];
for (let i = 1; i < 10; i+=2) {
    myArray.push(i);
}
// Only change code below this line

098
// Setup
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

// Only change code below this line

099
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

// Only change code below this line

100
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
