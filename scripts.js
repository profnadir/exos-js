/* function afficherImg1() {
    let img1 = document.getElementById('logojs')
    let info = document.getElementById('info')
    
    info.innerHTML = "src = "+img1.getAttribute('src') + " alt = " + img1.getAttribute('alt');
}

function afficherImg2() {
    let img2 = document.getElementById('logoja')
    let info = document.getElementById('info')
    
    info.innerHTML = "src = "+img2.getAttribute('src') + " alt = " + img2.getAttribute('alt');
} */

function afficher(idImg){

    let img = document.getElementById(idImg)
    let info = document.getElementById('info')
    
    info.innerHTML = "src = "+img.getAttribute('src') + " alt = " + img.getAttribute('alt');
}

/* exo 2 : array */

let styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock-n-roll');
console.log(styles);

styles.splice(1,1);
console.log(styles);

styles.splice(1,0,"Classics");
console.log(styles);

if(styles.length % 2 == 1){
    styles[parseInt((styles.length)/2)] = "Classics2"
}

console.log(styles);

let supp = styles.shift();
console.log("La valeur supprimé : " + supp);
console.log(styles);

styles.unshift("Rap", "Raggae");
console.log(styles);

/* Exo 3 */

/* var liste = document.getElementById('liste');
var cpt = 1;
function ajouterNewChapter() {
    cpt++;
    var newLi = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute("href","#chap"+cpt);
    a.innerText = "Chapitre "+cpt;

    newLi.appendChild(a)

    liste.appendChild(newLi)

    if(cpt == 5) {
        document.getElementById('add').onclick = null
    }
} */

var liste = document.getElementById('liste');


function ajouterNewChapter(input) {
    //console.log(input);

    var val = document.getElementById('chapTitle').value;

    var newLi = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute("href","#"+val);
    a.innerText = val;

    newLi.appendChild(a)

    liste.appendChild(newLi)

    document.getElementById('chapTitle').value = ""

    /* if(true) {
        input.onclick = null
    } */
}

function deleteB(btn) {
    btn.parentElement.remove();
}