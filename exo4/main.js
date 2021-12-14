let nombre1 = +prompt("rentrer un premier nombre");
let pemdas = prompt("mettez un opérateur");
let nombre2 = +prompt("rentrer un deuxième nombre");

switch (pemdas) {
    case "*":
        console.log(nombre1 * nombre2);
        break;
    case "/":
        console.log(nombre1 / nombre2);
        break;
    case "+":
        console.log(nombre1 + nombre2);
        break;
    case "-":
        console.log(nombre1 - nombre2);
        break;
    default:
        console.log("vous n'avez pas mis de nombre");
        break;
}