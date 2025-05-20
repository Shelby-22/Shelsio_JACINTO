function loisir(clé) {
    var image;
    if (clé=='Football') {
        image="Foot.jpg"
    }

    else if (clé=='Volleyball') { 
        image="Volley.jfif"
    }
    else if (clé=='Musique') {
        image="Music.jpg"

    }
    else {
        image="Voyage.jpg"

    }

    document.getElementById('monImage').src=image;   /*Formule utilisée en Javascript*/

}      

