import { TestBed } from '@angular/core/testing';

import { PlantasService } from './plantas.service';

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
});
