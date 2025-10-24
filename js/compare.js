
//car
let carArr = [];

class Car {
   

    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.modelo = modelo;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].modelo  === carClass.modelo)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass){
    if(el.checked && carArr.length >= 2){
        alert("Selecione apenas dois carros");
        el.checked = false;
        return;
    }
    
    if(el.checked){
        carArr.push(carClass);
    }else{
        const index = GetCarArrPosition(carArr, carClass);
        if(index !== -1){
            carArr.splice(index, 1);
        }
    }
}

function ShowCompare() {
    if(carArr.length < 2){
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable(){
    const carInformacao1 = carArr[0];
    const carInformacao2 = carArr[1];
    const arrayInformacao = ["modelo", "alturaCacamba", "alturaVeiculo", "alturaSolo", "capacidadeCarga", "motor", "potencia", "volumeCacamba", "roda", "preco"];

    const carImagem1 = document.querySelector("#compare_image_0");
    const carImagem2 = document.querySelector("#compare_image_1");

    carImagem1.innerHTML = `<img src="${carInformacao1.image}" width="150">`;
    carImagem2.innerHTML = `<img src="${carInformacao2.image}" width="150">`;

    for(let i = 0; i < arrayInformacao.length; i++){
        const info = arrayInformacao[i];

        const tabelaCar1 = document.getElementById(`compare_${info}_0`);
        const tabelaCar2 = document.getElementById(`compare_${info}_1`);

        tabelaCar1.innerHTML = carInformacao1[info];
        tabelaCar2.innerHTML = carInformacao2[info];
    }
}
