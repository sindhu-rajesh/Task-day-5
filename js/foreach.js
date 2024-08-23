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

// Use Object.entries() to get an array of [key, value] pairs
let entries = Object.entries(jsonfor);

// Use forEach to iterate over the entries
entries.forEach(([key, value]) => {
    console.log(value);
});
 