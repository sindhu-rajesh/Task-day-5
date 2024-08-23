
var jsonfor = {
    "basicsInfo": {
        "name": "sindhu.s",
        "email": "sindhumavvm@gmail.com",
        "phone num": "6382864405",
        "degree": "B,SC,DMLT.,",
        "location": {
            "address": "1/52,south street,valivalam",
            "postalCode": 610207,
            "city": "Nagappattinam",
            "state": "Tamilnadu",
            "country": "India"
        }
    },
    "iterate": {
        "iterate1": "for",
        "iterate2": "forin",
        "iterate3": "forof",
        "iterate4": "foreach"
    }
};

// Get the keys of the jsonfor object
let keys = Object.keys(jsonfor);

// Use a for loop to iterate over the keys
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = jsonfor[key];
    console.log(value);
}