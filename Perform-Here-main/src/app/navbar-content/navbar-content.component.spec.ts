import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CognitoService } from '../cognito.service';
import { Router } from '@angular/router';
import { NavbarContentComponent } from './navbar-content.component';

describe('NavbarContentComponent', () => {
  let component: NavbarContentComponent;
  let fixture: ComponentFixture<NavbarContentComponent>;
  let authServiceSpy: jasmine.SpyObj<CognitoService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy=jasmine.createSpyObj('CognitoService',['isAuthenticated', 'signOut']);
    routerSpy = jasmine.createSpyObj('Router',['navigate']);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ NavbarContentComponent ],
      providers:[
        { provide: CognitoService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('onLogout should call cognitoService.signOut', () => {
    authServiceSpy.signOut.and.returnValue(Promise.resolve(true));
    component.onLogout();
    expect(authServiceSpy.signOut).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
    });
  });

  it('profile() should navigate to profile component', () => {
    component.profile();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['profile']);
  });

  it('browsing() should navigate to browsing component', () => {
    component.browsing();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['browse']);
  });
});
