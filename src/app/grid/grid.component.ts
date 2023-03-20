import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopComponentComponent } from '../pop-component/pop-component.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

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

  vectorIMAAA = [
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
      this.dialog.open(PopComponentComponent,{
         data: this.vectorIMAAA[this.vectorGeneral[n].id]
      })
      
      this.vectorGeneral = this.vectorGeneral.filter((item) => item !== this.vectorGeneral[n])
      this.cont = this.cont+1
    }
  }

  // pasarImg(nombre: string){
  //   let cent = 0;
  //   let num = 0;
  //   while(cent < this.vectorGeneral.length){
  //     if(this.vectorIMAAA[cent].name == nombre){
  //       num =  this.vectorGeneral[cent].id
  //     }
  //     cent= cent+1;
  //   }
  //   return num;
  // }

}
