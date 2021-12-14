let meteo = prompt("quelle est la méteo d'aujourd'hui");
switch (meteo) {
    case "pluie":
        console.log("Il pleut. Je prend un parapluie");
        break;
    case "chaud":
        console.log("un t-shirt c'est suffisant");
        break;
    default:
        console.log("On est en Belgique :(");
        break;
}