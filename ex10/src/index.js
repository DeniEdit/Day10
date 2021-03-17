function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Elton John",
            title: "Songwriter",
            release_year: 1967,
            id: 2,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            }
        }
    }; 
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;