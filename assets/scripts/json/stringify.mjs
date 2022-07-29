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
export default JSON.stringify(obj, null, 2);
