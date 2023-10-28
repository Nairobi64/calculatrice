// Travail du Dom
// Recuperation des touches de la calculatrice

const touches = [...document.querySelectorAll('button')];
const listeButton = touches.map( touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keycode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listeButton.includes(valeur)){
        switch(valeur)
        {
            case '8': ecran.textContent = "";
            break;
            case '13':
                const calcul =  eval(ecran.textContent)
            ecran.textContent = calcul;
            break;
            default:
                const indexkeycode = listeButton.indexOf(valeur)
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;
        }

    }
}

window.addEventListener('error', (e) =>{
alert("Une erreur c'est produite dans votre calcul :" + e.message);
})