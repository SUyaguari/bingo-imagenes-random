import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Injectable, Inject } from '@angular/core';
import { srcc } from '../common/srcc';

@Component({
  selector: 'app-pop-component',
  templateUrl: './pop-component.component.html',
  styleUrls: ['./pop-component.component.scss']
})
export class PopComponentComponent implements OnInit {

  objet = new srcc();

  constructor(@Inject(MAT_DIALOG_DATA) public data: srcc) {
    this.objet = data
    console.log(this.objet)
  }

  ngOnInit(): void {
  }

}
