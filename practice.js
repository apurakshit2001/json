const jsonData = [
    {
        "id": 1,
        "name": "Goku",
        "age": 30,
        "city": "New York",
    },
    {
        "id": 2,
        "name": "Naruto Uzumaki",
        "age": 28,
        "city": "Los Angeles",
    },
    {
        "id": 3,
        "name": "Monkey D. Luffy",
        "age": 35,
        "city": "Chicago",
    },
    {
        "id": 4,
        "name": "Sailor Moon",
        "age": 25,
        "city": "San Francisco",
    },
    {
        "id": 5,
        "name": "Vegeta",
        "age": 32,
        "city": "Houston",
    },
    {
        "id": 6,
        "name": "Mikasa Ackerman",
        "age": 29,
        "city": "Miami",
    },
    {
        "id": 7,
        "name": "Lelouch vi Britannia",
        "age": 27,
        "city": "Seattle",
    },
    {
        "id": 8,
        "name": "Saber",
        "age": 33,
        "city": "Boston",

    },
    {
        "id": 9,
        "name": "Gon Freecss",
        "age": 31,
        "city": "Dallas",
    },
    {
        "id": 10,
        "name": "Spike Spiegel",
        "age": 26,
        "city": "Denver",
    },
    {
        "id": 11,
        "name": "Natsu Dragneel",
        "age": 19,
        "city": "Denver",
    }
];



const data1 = jsonData.map((person) => {
    if (person.age > 30) {
        console.log(person.name + " is a Master");
    } else if (person.age < 20) {
        console.log(person.name + " is a Disciple");
    } else if (person.age < 30) {
        console.log(person.name + " is a Grand Master");
    } else {
        console.log(person.name + " is just another Noob");
    }
    return fullname = person.name;
});



let data2 = []
for (let i = 0; i < data1.length; i++) {
    data2.push({ fullname: data1[i] });
}

console.log(data2);

function search() {
    const Input = document.getElementsByTagName("input").value.toUpperCase();
    const resultContainer = document.getElementById("demo");

    // resultContainer.innerHTML = "";

    const results = jsonData.filter(person => person.name.toUpperCase().includes(Input));

    const searchedData = jsonData.filter((person) => person.name === "Gon Freecss");

    resultContainer.innerHTML = searchedData;

    // document.write(searchedData)


}
//     if (resultContainer.innerHTML == "") {
//         alert('No Result Found');
//     } else {

//     }
// }
