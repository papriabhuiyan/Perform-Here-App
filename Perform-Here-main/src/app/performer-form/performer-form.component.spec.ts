import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerformerFormComponent } from './performer-form.component';
import { ArtistForm } from '../artistForm';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('PerformerFormComponent', () => {
  let component: PerformerFormComponent;
  let fixture: ComponentFixture<PerformerFormComponent>;
  let artistsServiceSpy: jasmine.SpyObj<ArtistsService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let aform: ArtistForm = new ArtistForm(
    '1',
    'fakeFirst',
    'fakeLast',
    'fakeStage',
    'fakeAccount@fake.com',
    'fakeManage@fake.com',
    '1234567891'
  )

  beforeEach(async () => {
    artistsServiceSpy = jasmine.createSpyObj('ArtistsService', ['addArtistForm', 'addArtist']);
    routerSpy = jasmine.createSpyObj('Router',['navigate']);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [ PerformerFormComponent ],
      providers: [
        { provide: ArtistsService, useValue: artistsServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit should call artistSerivce with proper form', () => {
    artistsServiceSpy.addArtistForm.and.returnValue(of(aform));
    let firstNameTextBox = fixture.nativeElement.querySelector('[data-test-id="firstName"]');
    let lastNameTextBox = fixture.nativeElement.querySelector('[data-test-id="lastName"]');
    let stageNameTextBox = fixture.nativeElement.querySelector('[data-test-id="stagename"]');
    let emailTextBox = fixture.nativeElement.querySelector('[data-test-id="accountEmail"]');
    let managementEmailTextBox = fixture.nativeElement.querySelector('[data-test-id="managementEmail"]');
    let phonenoTextBox = fixture.nativeElement.querySelector('[data-test-id="phoneno"]');
    let performerForm = fixture.nativeElement.querySelector('[data-test-id="performerForm"]');
    let a: Artist = new Artist(aform.accountemail, aform.stagename, 'Hey there! My name is '+aform.stagename);
    artistsServiceSpy.addArtist.and.returnValue(of(a));

    firstNameTextBox.value = aform.firstname;
    firstNameTextBox.dispatchEvent(new Event('input'));

    lastNameTextBox.value = aform.lastname;
    lastNameTextBox.dispatchEvent(new Event('input'));

    stageNameTextBox.value = aform.stagename;
    stageNameTextBox.dispatchEvent(new Event('input'));

    emailTextBox.value = aform.accountemail;
    emailTextBox.dispatchEvent(new Event('input'));

    managementEmailTextBox.value = aform.managementemail;
    managementEmailTextBox.dispatchEvent(new Event('input'));

    phonenoTextBox.value = aform.phoneno;
    phonenoTextBox.dispatchEvent(new Event('input'));

    performerForm.dispatchEvent(new Event('submit'));

    expect(artistsServiceSpy.addArtistForm).toHaveBeenCalledWith(aform);

    fixture.whenStable().then(
      () => {
        expect(artistsServiceSpy.addArtist).toHaveBeenCalledWith(a);
        expect(routerSpy.navigate).toHaveBeenCalledWith(['/signin']);
      }
    );
  });
});
