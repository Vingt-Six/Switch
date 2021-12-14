let valeur = +prompt("rentre un nombre");
switch (valeur % 2) {
    case 0:
        alert("Le nombre est un multiple de 2")
        break;
    case 1:
        alert("ce n'est pas un multiple de 2");
        break;
    default:
        alert("ce n'est pas un nombre");
        break;
}