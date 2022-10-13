import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Frisbee } from '@utils/frisbee.interface';
import { frisbeeData } from '@utils/frisbee-data';
import { FrisbeeListComponent } from './frisbee-list.component';
import { FrisbeeService } from '@services/frisbee.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frisbee',
  template: '<div></div>',
})
class FrisbeeComponentMock {
  @Input() frisbee!: Frisbee;
}

describe('FrisbeeListComponent', () => {
  let component: FrisbeeListComponent;
  let fixture: ComponentFixture<FrisbeeListComponent>;
  let frisbeeService: FrisbeeService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrisbeeListComponent, FrisbeeComponentMock],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate(): Promise<boolean> {
              return Promise.resolve(true);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisbeeListComponent);
    component = fixture.componentInstance;
    frisbeeService = TestBed.inject(FrisbeeService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create frisbeeCategoryVariable within the component', () => {
    const categoryListMock: string[] = [
      'distance',
      'fairway',
      'midrange',
      'putter',
    ];

    const frisbeesCategories = component.frisbeesCategories;
    expect(categoryListMock).toEqual(frisbeesCategories);
  });

  it('should load the frisbees data and populate frisbeeList varialbe in the ngOnInit method', () => {
    const frisbeeServiceSpy = spyOn(
      frisbeeService,
      'loadFrisbeeData'
    ).and.returnValue(of(frisbeeData));

    component.ngOnInit();
    const frisbeeList = component.frisbeeList;
    expect(frisbeeServiceSpy).toHaveBeenCalled();
    expect(frisbeeList).toBeTruthy();
    expect(frisbeeList.length).toBeTruthy();
    frisbeeList.map((frisbee: Frisbee) => {
      expect(frisbee.id).toBeInstanceOf(Number);
      expect(frisbee.name).toBeTruthy();
      expect(frisbee.description).not.toBe('');
      expect(frisbee.speed).toBeGreaterThan(0);
      expect(frisbee.glide).toBeInstanceOf(Number);
      expect(frisbee.turn).toBeInstanceOf(Number);
      expect(frisbee.fade).toBeInstanceOf(Number);
      expect(frisbee.rating).toBeGreaterThanOrEqual(0);
      expect(frisbee.category).toBeInstanceOf(String);
      expect(frisbee.image).not.toEqual('');
      expect(frisbee.image).toContain('https://');
      expect(frisbee.price).toBeDefined();
    });
  });

  it('should navigate to different url when goToDetailsPage method is called', () => {
    const routerSpy = spyOn(router, 'navigate');
    const frisbeeIdMock = 1;
    component.goToDetailsPage(frisbeeIdMock);
    expect(routerSpy).toHaveBeenCalled();
  });
});
