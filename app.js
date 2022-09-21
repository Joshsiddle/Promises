fetch("https://jsonplaceholder.typicode.com/users/1");
const emailRef = document.querySelector(".email");

// 1. Then

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     emailRef.innerHTML = data.email;
//   });


// 2. Async/Await

// async function main() {
//      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//      const data = await response.json();
//      emailRef.innerHTML = data.email
// }

// main()


// Creating a promise

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve('VIP')
    })
}

// Then

getSubscriptionStatus().then(response => console.log(response))

// Async/Await

async function main() {
    console.log(await getSubscriptionStatus())
}

main();

// 4 

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if ( subscriptionStatus === 'VIP') {
            resolve("show video")
        }
        else if ( subscriptionStatus === 'FREE') {
            resolve("show trailer")
        }
        else {
            reject('no video')
        }
    })
}




