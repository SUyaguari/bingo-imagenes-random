import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.scss']
})
export class AleatorioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url = "../assets/img/imgDiseño/niSignal.webp"
  a = "Sin Señal";
  control = false;

  vectorS: any = [];

  // vector = [{name: "piedra", url: "../assets/img/imgBingo/piedra.png"}, 
  // {name: "caldo", url: "../assets/img/imgBingo/caldo.jpg"}, 
  // {name:"gallina", url: "../assets/img/imgBingo/gallina.jpeg"}, 
  // {name:"castor", url: "../assets/img/imgBingo/castor.jpeg"}, 
  // {name:"coclo", url: "../assets/img/imgBingo/coclo.jpg"}, 
  // {name:"venado", url: "../assets/img/imgBingo/venado.jpg"}, 
  // {name:"pimiento", url: "../assets/img/imgBingo/pimiento.jpg"}, 
  // {name:"tiburon", url: "../assets/img/imgBingo/tiburon.jpg"},
  // {name:"cocodrilo", url: "../assets/img/imgBingo/cocodrilo.jpg"}, 
  // {name:"ballena", url: "../assets/img/imgBingo/ballena.jpeg"}, 
  // {name:"cuy", url: "../assets/img/imgBingo/cuy.jpg"}  ]

  vector = [
    {name: "Jesús en la Cruz", url: "../assets/img/imgBingo/00.jpg"},
  {name: "El Arca de Noé", url: "../assets/img/imgBingo/002.jpg"},
  {name: "Adán y Eva", url: "../assets/img/imgBingo/003.jpg"},
  {name: "Rey Salómon", url: "../assets/img/imgBingo/004.jpg"},
  {name: "Jesús El Buen Pastor", url: "../assets/img/imgBingo/005.jpg"},
  {name: "Sagrado Corazón de Jesús", url: "../assets/img/imgBingo/006.jpg"},
  {name: "San Jóse", url: "../assets/img/imgBingo/007.jpg"},
  {name: "Velas", url: "../assets/img/imgBingo/008.jpg"},
  {name: "Cáliz", url: "../assets/img/imgBingo/009.jpg"},
  {name: "Padre Gigi", url: "../assets/img/imgBingo/0010.jpg"},
  {name: "Padre Carlos Crespi", url: "../assets/img/imgBingo/0011.jpg"},
  {name: "Misal", url: "../assets/img/imgBingo/0012.jpg"},
  {name: "Copón", url: "../assets/img/imgBingo/0013.jpg"},
  {name: "Don Bosco Saltimbanqui", url: "../assets/img/imgBingo/0014.jpg"},
  {name: "Vinajeras", url: "../assets/img/imgBingo/0015.jpg"},
  {name: "Hostia", url: "../assets/img/imgBingo/0016.jpg"},
  {name: "Custodia", url: "../assets/img/imgBingo/0017.jpg"},
  {name: "Denario", url: "../assets/img/imgBingo/0018.jpg"},
  {name: "Rosario", url: "../assets/img/imgBingo/0019.jpg"},
  {name: "Escapulario", url: "../assets/img/imgBingo/0020.jpg"},
  {name: "Mamá Margarita", url: "../assets/img/imgBingo/0021.jpg"},
  {name: "Don Bosco en Motocicleta", url: "../assets/img/imgBingo/0022.jpg"},
  {name: "Don Bosco en San Valentín", url: "../assets/img/imgBingo/0023.jpg"},
  {name: "Don Bosco Chef", url: "../assets/img/imgBingo/0024.jpg"},
  {name: "Don Bosco Leyendo", url: "../assets/img/imgBingo/0025.jpg"},
  {name: "Don Bosco de Fiesta", url: "../assets/img/imgBingo/0026.jpg"},
  {name: "Escuela Que educa", url: "../assets/img/imgBingo/0027.jpg"},
  {name: "Casa que Acoge", url: "../assets/img/imgBingo/0028.jpg"},
  {name: "Patio que Divierte", url: "../assets/img/imgBingo/0029.jpg"},
  {name: "Parroquía que Evangeliza", url: "../assets/img/imgBingo/0030.jpg"},
  {name: "Amabilidad", url: "../assets/img/imgBingo/0031.jpg"},
  {name: "Razón", url: "../assets/img/imgBingo/0032.jpg"},
  {name: "Religión", url: "../assets/img/imgBingo/0033.jpg"},
  {name: "Logo del MJS", url: "../assets/img/imgBingo/0034.jpg"},
  {name: "Logo del VJMFS", url: "../assets/img/imgBingo/0035.jpg"},
  {name: "Logo de los Salesianos", url: "../assets/img/imgBingo/0036.jpg"},
  {name: "Sangrada Familia", url: "../assets/img/imgBingo/0037.jpg"},
  {name: "Papa o Sumo Pontífice", url: "../assets/img/imgBingo/0038.jpg"},
  {name: "Cardenal", url: "../assets/img/imgBingo/0039.jpg"},
  {name: "Obispo", url: "../assets/img/imgBingo/0040.jpg"},
  {name: "Sacerdote", url: "../assets/img/imgBingo/0041.jpg"},
  {name: "Diácono", url: "../assets/img/imgBingo/0042.jpg"},
  {name: "Bonete", url: "../assets/img/imgBingo/0043.jpg"},
  {name: "Mitria", url: "../assets/img/imgBingo/0044.jpg"},
  {name: "Casulla Roja", url: "../assets/img/imgBingo/0045.jpg"},
  {name: "Casulla Blanca", url: "../assets/img/imgBingo/0046.jpg"},
  {name: "Casulla Morada", url: "../assets/img/imgBingo/0047.jpg"},
  {name: "Casulla Verde", url: "../assets/img/imgBingo/0048.jpg"},
  {name: "Santa Teresa de Calcuta", url: "../assets/img/imgBingo/0049.jpg"},
  {name: "San Francisco de Sales", url: "../assets/img/imgBingo/0050.jpg"},
  {name: "Don Bosco Mimo", url: "../assets/img/imgBingo/0051.jpg"},
  {name: "Don Bosco Músico", url: "../assets/img/imgBingo/0052.jpg"},
  {name: "Don Bosco", url: "../assets/img/imgBingo/0053.jpg"},
  {name: "Beata Laura Vicuña", url: "../assets/img/imgBingo/0054.jpg"},
  {name: "Santo Domingo Savio", url: "../assets/img/imgBingo/0055.jpg"},
  {name: "Dolorosa", url: "../assets/img/imgBingo/0056.jpg"},
  {name: "María Auxiliadora", url: "../assets/img/imgBingo/0057.jpg"},
  {name: "Inmaculada Concepción", url: "../assets/img/imgBingo/0058.jpg"},
  {name: "Virgen de Guadalupe", url: "../assets/img/imgBingo/0059.jpg"},
  {name: "Virgen de la Nube", url: "../assets/img/imgBingo/0060.jpg"},
  {name: "Virgen del Cisne", url: "../assets/img/imgBingo/0061.jpg"},
  {name: "Señor de la Divina Misericordia", url: "../assets/img/imgBingo/0062.jpg"},
  {name: "Santísima Trinidad", url: "../assets/img/imgBingo/0063.jpg"},
  {name: "Espíritu Santo", url: "../assets/img/imgBingo/0064.jpg"},
  {name: "San Artémides Zatti", url: "../assets/img/imgBingo/0065.jpg"},
  {name: "Moisés", url: "../assets/img/imgBingo/0066.jpg"},
  {name: "David y Goliat", url: "../assets/img/imgBingo/0067.jpg"},
  {name: "2 Peces y 5 Panes", url: "../assets/img/imgBingo/0068.jpg"},
  {name: "San Pedro", url: "../assets/img/imgBingo/0069.jpg"},
  {name: "San Pablo", url: "../assets/img/imgBingo/0070.jpg"},
  {name: "Beata María Troncatti", url: "../assets/img/imgBingo/0071.jpg"},
  {name: "16 Agosto 1815", url: "../assets/img/imgBingo/0072.jpg"},
  {name: "31 Enero 1888", url: "../assets/img/imgBingo/0073.jpg"},
  {name: "24 de Mayo", url: "../assets/img/imgBingo/0074.jpg"},
  {name: "Campana", url: "../assets/img/imgBingo/0075.jpg"},
  ]

  // ngDoCheck() {
  //   while(this.control==true){
  //     let n = this.getRandomInt(3);
  //     this.a = this.vector[n]
  //   }
  // }

  getRandomInt(max: number) {
    let num = Math.floor(Math.random() * max)
    return num;
  }

  random(){
    if(this.vector.length != 0){
      let n = this.getRandomInt(this.vector.length-1);
      this.a = this.vector[n].name
      this.url = this.vector[n].url
      this.vectorS.push(this.vector[n])
      this.vector = this.vector.filter((item) => item !== this.vector[n])
      console.log(this.vector)
    }else{
      console.log('a')
      this.url = "../assets/img/imgDiseño/niSignal.webp"
      this.a = "Sin Señal";
    }
  }

  cambio(){
  }

}
