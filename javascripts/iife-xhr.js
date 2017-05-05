var carnivoreDiv = document.getElementById("carnivores");
var herbivoreDiv = document.getElementById("herbivores");

function showCarnivores (carnivores) {
    var objectKeyName = carnivores.carnivores;

    for (var a = 0; a < objectKeyName.length; a++) {
        var carnArray = objectKeyName[a];

        carnivoreDiv.innerHTML += `<p>${carnArray}</p>`
    };

}

function showHerbivores (herbivores) {
    var herbJsonObject = herbivores.herbivores;

    for (var b = 0; b < herbJsonObject.length; b++) {
        ;
        herbivoreDiv.innerHTML += `<p>${herbJsonObject[b]}</p>`
    };
}

Predator.segregate(showCarnivores);

Predator.herbies(showHerbivores);
