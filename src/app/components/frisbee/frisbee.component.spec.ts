import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Frisbee } from '@utils/frisbee.interface';
import { FrisbeeComponent } from './frisbee.component';
import { Router } from '@angular/router';

describe('FrisbeeComponent', () => {
  let component: FrisbeeComponent;
  let fixture: ComponentFixture<FrisbeeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisbeeComponent ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate(): Promise<boolean> {
              return Promise.resolve(true);
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisbeeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    const frisbeeMockData: Frisbee = {
      id: 1,
      name: 'Frisbee Test',
      description: 'Description Test',
      speed: 10,
      glide: 5,
      turn: -1.2,
      fade: 1.9,
      rating: 4,
      category: 'distance',
      image: 'Image Source test',
      price: 1599
    };
    component.frisbee = frisbeeMockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to another url when goToDetailsPage method is called', () => {
    const routerSpy = spyOn(router, 'navigate');
    const frisbeeId = 1;
    component.toDetailsPage(frisbeeId);
    expect(routerSpy).toHaveBeenCalledWith(['frisbees', frisbeeId]);
  })
});
