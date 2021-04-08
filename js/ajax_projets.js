let listeProjet = document.querySelector("#liste-projet");

fetch("http://localhost:3000/projets")
.then(function(reponse) {
    return reponse.json();
})
.then(function(projets) {
    for (const projet of projets) {
        let blocProjet=document.createElement("div");
        let lienProjet=document.createElement("a");
        lienProjet.setAttribute("href",`${projet.link}`)
        blocProjet.classList.add("div-global__div1");

        let blocImgProjet=document.createElement("div");
        blocImgProjet.classList.add("div1__titre");

        let imgProjet=document.createElement("img");
        imgProjet.classList.add("div1__img");
        imgProjet.setAttribute("src",`${projet.image}`);
        imgProjet.setAttribute("alt", `${projet.titre}`);
        
        let blocTextProjet=document.createElement("div");
        blocTextProjet.classList.add("div1__text");
        
        let titreDescriptionProjet=document.createElement("h4");
        titreDescriptionProjet.textContent=`${projet.titre}`;
        let textDescriptionProjet=document.createElement("p");
        textDescriptionProjet.textContent=`${projet.description}`;

        listeProjet.appendChild(blocProjet);
        blocProjet.appendChild(blocImgProjet)
        blocImgProjet.appendChild(lienProjet);
        lienProjet.appendChild(imgProjet);

        blocProjet.appendChild(blocTextProjet);
        blocTextProjet.appendChild(titreDescriptionProjet);
        blocTextProjet.appendChild(textDescriptionProjet);


    }
});