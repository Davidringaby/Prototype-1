require('fs');

let data = fs.readFileSync('persons.json', "utf-8");
let persons = JSON.parse(data);

console.log(persons);

/*let kundeArr = [];

function Kunde (name, clip) {
    this.name = name;
    this.clip = clip;
    kundeArr.push(this.name + this.clip);
}

let karsten = new Kunde ('Karsten', 10);
*/

let antalKlip = document.querySelector("#antalClip");

let klipTilbage = document.createTextNode(persons);
antalKlip.appendChild(klipTilbage);


document.querySelector("#knappen").addEventListener("click", (e)=>{
    brugKlip(karsten);
    document.querySelector("#antalClip").innerHTML = "";
    let antalKlip = document.createTextNode(karsten.clip);
    document.querySelector("#antalClip").appendChild(antalKlip);
});



function brugKlip(kunde){
    kunde.clip = kunde.clip - 1;
}

brugKlip(torre);