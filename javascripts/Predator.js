console.log("testing pred page");

var Predator = (function(stuff){
    var carnivores = [];
    var herbivores = [];

    stuff.segregate = function (callback) {

        var load = new XMLHttpRequest();

        load.addEventListener("load", function(event){
            var carnData = JSON.parse(event.target.responseText);
            carnivores.push(carnData);
            callback(carnData);
        });

        load.addEventListener("error", function(event){
            console.log("carnivore load error");
        });

        load.open("GET", "carnivores.json");
        load.send();

    };

    stuff.herbies = function (callback) {
        var load2 = new XMLHttpRequest();

        load2.addEventListener("load", function(event){
            var herbData = JSON.parse(event.target.responseText);
            callback(herbData);
            herbivores.push[herbData];
        });

        load2.addEventListener("error", function(event){
            console.log("herbivore load fail");
        });

        load2.open("GET", "herbivores.json");
        load2.send();
    };

    return stuff;


})(Predator || {});
