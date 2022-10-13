import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Frisbee } from '@utils/frisbee.interface';
import { FrisbeeDetailComponent } from './frisbee-detail.component';
import { FrisbeeService } from '@services/frisbee.service';
import { of } from 'rxjs';

describe('FrisbeeDetailComponent', () => {
  let component: FrisbeeDetailComponent;
  let fixture: ComponentFixture<FrisbeeDetailComponent>;
  let frisbeeService: FrisbeeService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisbeeDetailComponent ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate(): Promise<boolean> {
              return Promise.resolve(true)
            }
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of<Params>({ id: '1' })
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisbeeDetailComponent);
    component = fixture.componentInstance;
    frisbeeService = TestBed.inject(FrisbeeService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get params id from url when ngOnInit method is called', () => {
    component.ngOnInit();
    const frisbeeId = component.frisbeeId;
    expect(frisbeeId).toBeDefined();
    expect(frisbeeId).toBe('1');
  });

  it('should populate loadFrisbeeInformation when ngOnInit method is called', () => {
    component.ngOnInit();
    const frisbeeInformation: Frisbee | undefined = component.frissbeInformation;
    expect(frisbeeInformation).toBeDefined();

    if (frisbeeInformation) {
      const frisbeeInformationLength = Object.keys(frisbeeInformation).length;
      expect(frisbeeInformationLength).toBeGreaterThan(0);
    }
  });

  it('should navigate to another page when navigateBack method is called', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.navigateBack();
    expect(routerSpy).toHaveBeenCalled();
  });
});
