// First, create a promise that simulates an API call
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Try changing to false
            
            if (success) {
                resolve({
                    id: 1,
                    name: "John Doe",
                    email: "john@example.com"
                });
            } else {
                reject("Failed to fetch data from server");
            }
        }, 2000);
    });
}

// Async function using await
async function getUserData() {
    console.log('Fetching user data...');
    
    try {
        const user = await fetchData();
        console.log('User data received:');
        console.log(user);
        return user;
    } catch (error) {
        console.log('Error:', error);
    }
}

// Call the async function
getUserData().then(result => {
    console.log('Async function completed');
});

console.log('This runs while waiting for the async operation');