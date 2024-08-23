var json = {
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
    "iterate":{
    
        "iterate1": "for",
        "iterate2": "forin",
        "iterate3": "forof",
        "iterate4": "foreach"
    }
    



};

//for in
for(let key in json) {
    
    let value;
    value=json[key];
    console.log(value);
}