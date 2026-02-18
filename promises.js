// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = true; // Try changing to false to see rejection
        
        if (success) {
            resolve('Success! The operation completed.');
        } else {
            reject('Failure! Something went wrong.');
        }
    }, 2000); // Wait 2 seconds
});

console.log('Starting promise...');

// Use the promise
myPromise
    .then((result) => {
        console.log('Promise resolved:');
        console.log(result);
    })
    .catch((error) => {
        console.log('Promise rejected:');
        console.log(error);
    });

console.log('Promise is running in the background...');