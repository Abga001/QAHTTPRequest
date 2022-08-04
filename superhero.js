'use strict';

console.log("AXIOS", axios);

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        console.log(response);
        const pokemon = response.data;

        const newP = document.createElement('p');

        newP.innerText += `ID: ${pokemon.name}\n`;
        newP.innerText += `Name: ${pokemon.age}\n`;
        newP.innerText += `Height: ${pokemon.secretIdentity}\n`;
        newP.innerText += `Weight: ${pokemon.powers}\n`;

        document.getElementById("output").appendChild(newP);

    })
    .catch(err => console.error(err));

    console.log("Hi")