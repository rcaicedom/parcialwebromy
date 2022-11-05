import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasComponent } from './plantas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantasService} from './plantas.service';
import { faker } from '@faker-js/faker';
import { Planta } from './planta';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';



describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [
        PlantasComponent
      ],
      providers: [
        PlantasService
      ]
    }).compileComponents();
    fixture= TestBed.createComponent(PlantasComponent);
    component= fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PlantasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar las plantas', () => {
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

    component.plantas= plantas
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#plantasrow'))).toHaveSize(3)
    expect(fixture.debugElement.queryAll(By.css('.table-dark'))).toBeTruthy()

  })
});
