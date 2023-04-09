//Pour la consigne "sélectionner un élément" : on fait simplement grossir un texte 
//quand la souris passe dessus , et on fait revenir a la taille initiale quand le
//curseur n'est plus dessus
const titre = document.querySelector("h1");
//Quand le curseur passe sur le texte 
titre.addEventListener("mouseenter",()=>{
  titre.style.transition = "font-size 0.3s ease";
  titre.style.fontSize = "4em"; });
  //En 0.3 seconde le texte passe d'une taille h1(2em) à 4em
  //Quand le curseur passe sur le texte
titre.addEventListener("mouseleave",()=>{
  titre.style.transition="font-size 0.3s ease";
  titre.style.fontSize="2em"; });
  //En 0.3 seconde le texte passe d'une taille h1(2em) à 4em




//Sélection plusieurs éléments et utilisation d'une boucle for each pour prendre en
//compte chaque éléments de li(la liste faite dans le html)pour changer de manière 
//optimisé la couleur
const element = document.querySelectorAll("li");
  element.forEach((element) => {
    element.style.color="blue";
    element.style.fontSize= "2em";  });

// Écouter un évènement :on créer un bouton "bouton" pour que dès qu'on clique 
//dessus ,une alerte s'affiche avec du texte
const bouton=document.querySelector("#bouton");
bouton.addEventListener("click", ()=>{
  alert("Evenment cliqué et affiché");   });

// Modification du style d'un élément , on modifie la variable titre pour qu'il
//soit en bleu et en taille 2em
titre.style.color = "blue";
titre.style.fontSize = "2em";

//Insère du contenu texte en creant un element paragraphe "p"
const paragraphe = document.createElement("p");
paragraphe.textContent = "ce contenu est intégré en javascript";
//Son contenu est affiché
document.body.appendChild(paragraphe);



//Modification de la classe "bordure"
const ul=document.querySelector("ul");
ul.classList.add("bordure");
//Suppresion d'une classe imaginaire
ul.classList.remove("classebis");
//Comme pour l'animation qui grossit le texte,on fait réagir le bloc ou se situe 
//la classe pour qu'il devienne jaune quand la souris est dessus , et redeviens blanc 
//quand elle n'y est plus
ul.addEventListener("mouseover",()=>{
  ul.style.backgroundColor="yellow";  });
ul.addEventListener("mouseout", () => {
  ul.style.backgroundColor = "white";  });
