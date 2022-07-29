let obj = [
    {
        name: "Francis Karuri",
        age: 26,
        born: new Date(1996, 7, 17, 3, 34, 56),
        hobbies : [
            "eating", 'skating'
        ]
    },
    {
        name: "Jamleck Maina",
        age: 27,
        born: new Date(1989, 10, 4, 13, 59, 56),
        hobbies : [
            "watching animations", "scuba diving"
        ]
    }
]
//specify what to stringify using an array of values
//export default JSON.stringify(obj, ["name", "born", "age"], 2);

//specify a replacer function
export default JSON.stringify(obj, (key, value) => key === 'age' ? undefined : value )