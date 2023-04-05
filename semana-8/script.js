

// setTimeout(() => console.log("Ricardo"), 3000);

// console.log("Gabriel")

// setTimeout(() => console.log("Debora"), 4000);

// setTimeout(() => console.log("Erico"), 2000);


const arquivo = fetch("https://jsonplaceholder.typicode.com/users");

arquivo.then((resposta) => {
    return resposta.json();
}
).then((json) => {
    console.log(json[0]);
})

