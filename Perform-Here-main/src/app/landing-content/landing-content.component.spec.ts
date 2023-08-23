import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LandingContentComponent } from './landing-content.component';

describe('LandingContentComponent', () => {    
  let component: LandingContentComponent;
  let fixture: ComponentFixture<LandingContentComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    await TestBed.configureTestingModule({
      declarations: [ LandingContentComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to signin page', ()=>{
    component.onLogin();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/signin']);
  });

  it('should route to signup page', ()=>{ 
    component.signUp();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/signup']);
  });

});
