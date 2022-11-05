import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantasComponent } from './plantas/plantas.component';


describe('AppComponent', () => {
  let httpClientSpy: {get: jasmine.Spy};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        PlantasComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'parcial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('parcial');
  });

  it(`should create plants`, () => {
    const fixture = TestBed.createComponent(PlantasComponent);
    const app = fixture.componentInstance;
    expect(app.plantas).toBeTruthy();
  });


});
