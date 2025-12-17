const form = document.querySelector("form");
const erreur = document.getElementById("erreur");
const historique = document.getElementById("historique");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    let op = document.getElementById("operation").value;

    erreur.textContent = "";
    if (A == "" || B == "") {
        erreur.textContent = "Veuillez remplir les deux nombres.";
        return;
    }

    if (op == "/" && Number(B) == 0) {
        erreur.textContent = "Division par zéro interdite.";
        return;
    }
    let resultat;

    if (op == "+") resultat= Number(A) + Number(B);
    if (op == "-") resultat= Number(A) - Number(B);
    if (op == "x") resultat= Number(A) * Number(B);
    if (op == "/") resultat= Number(A) / Number(B);
    let li = document.createElement("li");
    li.textContent = `${A} ${op} ${B} = ${resultat}`;
    historique.appendChild(li);
});
