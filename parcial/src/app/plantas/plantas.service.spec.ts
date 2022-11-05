import { TestBed } from '@angular/core/testing';

import { PlantasService } from './plantas.service';
import { faker } from '@faker-js/faker';
import { Planta } from './planta';
import { of } from 'rxjs';



describe('PlantasService', () => {
  let service: PlantasService;
  let httpClientSpy: {get: jasmine.Spy};
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PlantasService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Debe retornar las plantas', (done:DoneFn) => {
    const planta1  = new Planta(
    faker.datatype.number(),
    faker.datatype.string(),
    faker.datatype.string(),
    faker.datatype.string(),
    faker.datatype.number(),
    faker.datatype.string(),
    faker.datatype.string()
    )
    const planta2  = new Planta(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string()
    )
    const planta3  = new Planta(
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.string(),
      faker.datatype.number(),
      faker.datatype.string(),
      faker.datatype.string()
      )
    const plantas:Planta[] = [planta1,planta2,planta3]

    httpClientSpy.get.and.returnValue(of(plantas));

    service.getPlantas().subscribe(resultado =>{
      expect(resultado).toEqual(plantas)
      done()
  })
  });
});
