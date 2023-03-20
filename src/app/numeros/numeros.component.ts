import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  vectorGeneral = [
    {name: 'Jesús en la Cruz',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-01.jpg",
  id: 0},
 {name: 'El Arca de Noé',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-02.jpg",
  id: 1},
 {name: 'Adán y Eva',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-03.jpg",
  id: 2},
 {name: 'Rey Salómon',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-04.jpg",
  id: 3},
 {name: 'Jesús El Buen Pastor',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-05.jpg",
  id: 4},
 {name: 'Sagrado Corazón de Jesús',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-06.jpg",
  id: 5},
 {name: 'San Jóse',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-07.jpg",
  id: 6},
 {name: 'Velas',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-08.jpg",
  id: 7},
 {name: 'Cáliz',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-09.jpg",
  id: 8},
 {name: 'Padre Gigi',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-10.jpg",
  id: 9},
 {name: 'Padre Carlos Crespi',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-11.jpg",
  id: 10},
 {name: 'Misal',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-12.jpg",
  id: 11},
 {name: 'Copón',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-13.jpg",
  id: 12},
 {name: 'Don Bosco Saltimbanqui',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-14.jpg",
  id: 13},
 {name: 'Vinajeras',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-15.jpg",
  id: 14},
 {name: 'Hostia',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-16.jpg",
  id: 15},
 {name: 'Custodia',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-17.jpg",
  id: 16},
 {name: 'Denario',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-18.jpg",
  id: 17},
 {name: 'Rosario',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-19.jpg",
  id: 18},
 {name: 'Escapulario',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-20.jpg",
  id: 19},
 {name: 'Mamá Margarita',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-21.jpg",
  id: 20},
 {name: 'Don Bosco en Motocicleta',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-22.jpg",
  id: 21},
 {name: 'Don Bosco en San Valentín',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-23.jpg",
  id: 22},
 {name: 'Don Bosco Chef',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-24.jpg",
  id: 23},
 {name: 'Don Bosco Leyendo',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-25.jpg",
  id: 24},
 {name: 'Don Bosco de Fiesta',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-26.jpg",
  id: 25},
 {name: 'Escuela Que educa',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-27.jpg",
  id: 26},
 {name: 'Casa que Acoge',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-28.jpg",
  id: 27},
 {name: 'Patio que Divierte',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-29.jpg",
  id: 28},
 {name: 'Parroquía que Evangeliza',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-30.jpg",
  id: 29},
 {name: 'Amabilidad',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-31.jpg",
  id: 30},
 {name: 'Razón',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-32.jpg",
  id: 31},
 {name: 'Religión',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-33.jpg",
  id: 32},
 {name: 'Logo del MJS',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-34.jpg",
  id: 33},
 {name: 'Logo del VJMFS',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-35.jpg",
  id: 34},
 {name: 'Logo de los Salesianos',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-36.jpg",
  id: 35},
 {name: 'Sangrada Familia',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-37.jpg",
  id: 36},
 {name: 'Papa o Sumo Pontífice',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-38.jpg",
  id: 37},
 {name: 'Cardenal',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-39.jpg",
  id: 38},
 {name: 'Obispo',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-40.jpg",
  id: 39},
 {name: 'Sacerdote',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-41.jpg",
  id: 40},
 {name: 'Diácono',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-42.jpg",
  id: 41},
 {name: 'Bonete',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-43.jpg",
  id: 42},
 {name: 'Mitria',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-44.jpg",
  id: 43},
 {name: 'Casulla Roja',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-45.jpg",
  id: 44},
 {name: 'Casulla Blanca',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-46.jpg",
  id: 45},
 {name: 'Casulla Morada',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-47.jpg",
  id: 46},
 {name: 'Casulla Verde',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-48.jpg",
  id: 47},
 {name: 'Santa Teresa de Calcuta',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-49.jpg",
  id: 48},
 {name: 'San Francisco de Sales',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-50.jpg",
  id: 49},
 {name: 'Don Bosco Mimo',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-51.jpg",
  id: 50},
 {name: 'Don Bosco Músico',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-52.jpg",
  id: 51},
 {name: 'Don Bosco',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-53.jpg",
  id: 52},
 {name: 'Beata Laura Vicuña',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-54.jpg",
  id: 53},
 {name: 'Santo Domingo Savio',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-55.jpg",
  id: 54},
 {name: 'Dolorosa',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-56.jpg",
  id: 55},
 {name: 'María Auxiliadora',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-57.jpg",
  id: 56},
 {name: 'Inmaculada Concepción',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-58.jpg",
  id: 57},
 {name: 'Virgen de Guadalupe',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-59.jpg",
  id: 58},
 {name: 'Virgen de la Nube',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-60.jpg",
  id: 59},
 {name: 'Virgen del Cisne',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-61.jpg",
  id: 60},
 {name: 'Señor de la Divina Misericordia',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-62.jpg",
  id: 61},
 {name: 'Santísima Trinidad',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-63.jpg",
  id: 62},
 {name: 'Espíritu Santo',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-64.jpg",
  id: 63},
 {name: 'San Artémides Zatti',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-65.jpg",
  id: 64},
 {name: 'Moisés',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-66.jpg",
  id: 65},
 {name: 'David y Goliat',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-67.jpg",
  id: 66},
 {name: '2 Peces y 5 Panes',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-68.jpg",
  id: 67},
 {name: 'San Pedro',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-69.jpg",
  id: 68},
 {name: 'San Pablo',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-70.jpg",
  id: 69},
 {name: 'Beata María Troncatti',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-71.jpg",
  id: 70},
 {name: '16 Agosto 1815',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-72.jpg",
  id: 71},
 {name: '31 Enero 1888',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-73.jpg",
  id: 72},
 {name: '24 de Mayo',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-74.jpg",
  id: 73},
 {name: 'Campana',
  url: "../assets/img/imgBingo/solo/SOLO IMAGENES BINGO POR NÚMERO-75.jpg",
  id: 74}
  ]

  vector = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" }]

  vector2 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" },]

  vector3 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" },]

  vector4 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" },]

  vector5 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" },]

  vector6 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" },]

  vector7 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 5 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 6 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 7 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 8 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 9 ", url: "../assets/img/imgDiseño/pregunta.jpg" },]

  vector8 = [{ name: " 0 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 1 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 2 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 3 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  { name: " 4 ", url: "../assets/img/imgDiseño/pregunta.jpg" },
  ]


  getRandomInt(max: number) {
    let num = Math.floor(Math.random() * max)
    return num;
  }

  cont = 1;
  name = ""
  
  evento() {
    
    console.log(this.cont)

    if(this.vectorGeneral.length != 0){
      let n = this.getRandomInt(this.vectorGeneral.length);
      if(this.vectorGeneral[n].id>=0 && this.vectorGeneral[n].id <=9){
        this.vector[this.vectorGeneral[n].id] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=10 && this.vectorGeneral[n].id <=19){
        this.vector2[this.vectorGeneral[n].id-10] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=20 && this.vectorGeneral[n].id <=29){
        this.vector3[this.vectorGeneral[n].id-20] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=30 && this.vectorGeneral[n].id <=39){
        this.vector4[this.vectorGeneral[n].id-30] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=40 && this.vectorGeneral[n].id <=49){
        this.vector5[this.vectorGeneral[n].id-40] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=50 && this.vectorGeneral[n].id <=59){
        this.vector6[this.vectorGeneral[n].id-50] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=60 && this.vectorGeneral[n].id <=69){
        this.vector7[this.vectorGeneral[n].id-60] = this.vectorGeneral[n]
      }
      if(this.vectorGeneral[n].id>=70 && this.vectorGeneral[n].id <=79){
        this.vector8[this.vectorGeneral[n].id-70] = this.vectorGeneral[n]
      }
      this.name = this.vectorGeneral[n].name
      this.vectorGeneral = this.vectorGeneral.filter((item) => item !== this.vectorGeneral[n])
      this.cont = this.cont+1
    }
  }
}
