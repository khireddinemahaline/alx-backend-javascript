// Function to use async/await for fetching data

function fetchData() {
    return new Promise((resolve, reject) =>{
        const sucess = false;
        if (sucess) {
            const data = {age:23};
            resolve(data);
        } else {
            reject(new Error("no data"))
        }
    })
}
    
async function getData() {
    try {
        const result = await fetchData(); // Await the promise
        console.log(result.age); // Log the success age
    } catch (error) {
        console.error("Error:", error.message); // Handle the error
    }
}

// Calling the async function
getData();