const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';
    
    // A chunk of data has been received
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received
    resp.on('end', () => {
        console.log('Received data from API:');
        console.log(JSON.parse(data));
    });
    
}).on('error', (err) => {
    console.log("Error: " + err.message);
});