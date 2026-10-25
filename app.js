const liens = document.querySelectorAll(".sidebar a");

function actualiserMenu() {

    let sectionActive = "accueil";

    // Position du milieu de l'écran
    const milieuEcran = window.innerHeight / 2;

    // Parcourir les liens de navigation
    liens.forEach(lien => {

        const id = lien.getAttribute("href").substring(1);
        const section = document.getElementById(id);

        if (section) {

            const position = section.getBoundingClientRect();

            // Vérifier si la section occupe le milieu de l'écran
            if (position.top <= milieuEcran &&
                position.bottom >= milieuEcran) {

                sectionActive = id;
            }
        }
    });

    // Activer le bon lien
    liens.forEach(lien => {

        const id = lien.getAttribute("href").substring(1);

        lien.classList.toggle("active", id === sectionActive);
    });
}

// Détecter le défilement
window.addEventListener("scroll", actualiserMenu);

// Détecter aussi les changements de taille de fenêtre
window.addEventListener("resize", actualiserMenu);

// Exécuter au chargement
actualiserMenu();