//carousel

// Array storage class
let carouselArr = [];

// Classe Carousel
class Carousel {

    constructor(img, texto, link){
        this.img = img;
        this.texto = texto;
        this.link = link;
    }    
      
    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Show(Carousel._sequence); // mostra a primeira imagem
                Carousel._interval = setInterval(() => Carousel.Next(), 5000);

                // Eventos dos botões
                document.getElementById("prev-btn").addEventListener("click", () => Carousel.Prev());
                document.getElementById("next-btn").addEventListener("click", () => Carousel.Next());
            }
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static Next(){
        Carousel.Show(Carousel._sequence + 1);
    }

    static Prev(){
        Carousel.Show(Carousel._sequence - 1);
    }

    static Show(index){
        const carousel = document.getElementById("carousel-img");
        const carouselTitle = document.getElementById("carousel-title");

        if(index >= Carousel._size) index = 0;
        if(index < 0) index = Carousel._size - 1;

        const atual = Carousel._arr[index];
        carousel.src = "img/" + atual.img;
        carouselTitle.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;

        Carousel._sequence = index;
    }
}