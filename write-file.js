const fs = require('fs');

fs.writeFile('file.txt', 'Hello World! This was written by Node.js!', function (err) {
    if (err) throw err;
    console.log('File saved successfully!');
    
    // Optional: Read the file to verify
    fs.readFile('file.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log('Updated file content:');
        console.log(data);
    });
});