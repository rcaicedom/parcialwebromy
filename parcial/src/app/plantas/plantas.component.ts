import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  public plantas: Array<Planta> = [];
  public exterior: number = 0;
  public interior: number = 0;
  constructor( private  plantasService : PlantasService) { }

  ngOnInit(): void {
    this.getPlantas();
    this.getPlantsExterior();
    this.getPlantsInterior();
  }

  getPlantas(): void {
    this.plantasService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.getPlantsExterior();
      this.getPlantsInterior();
    });
  }

  getPlantsExterior(): void{
    let contador = 0;
    this.plantas.forEach(planta => {
      if(planta.tipo === 'Exterior'){
        contador +=1;
      }
    });
    this.exterior = contador;
  }
  getPlantsInterior(): void{
    let contador = 0;
    this.plantas.forEach(planta => {
      if(planta.tipo === 'Interior'){
        contador +=1;
      }
      this.interior = contador;
    });
  }

}
