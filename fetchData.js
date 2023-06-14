const url1 = 'https://api/data/1';
const data1 = {data: "request1"};

const url2 = 'https://api/data/2';
const data2 = {data: "request2"};

const url3 = 'https://api/data/3';
const data3 = {data: "request3"};


const requests = [
    
    fetch(url1, {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(data1)
    }),

    fetch(url2, {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(data2)
    }),

    fetch(url3, {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(data3)
    }),

];

Promise.all(requests)
.then((values) => {
    console.log(values);
})
.catch(error => {
    console.log(error);
})