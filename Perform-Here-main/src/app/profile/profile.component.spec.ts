import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';
import { VotesService } from '../votes.service';
import { of } from 'rxjs';

import { ProfileComponent } from './profile.component';
import { CognitoService } from '../cognito.service';
import { Votes } from '../votes';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let artistServiceSpy: jasmine.SpyObj<ArtistsService>;
  let votesServiceSpy: jasmine.SpyObj<VotesService>;
  let cognitoServiceSpy: jasmine.SpyObj<CognitoService>;

  let fakeArtist = new Artist('fake@email', 'fakeStage', 'fakeDescription');

  let inputVotes: Votes[] = [
    new Votes('test@test', 'fakeStage', 'testState', 'testCity', 'testDiscount'),
    new Votes('test@test', 'fakeStage', 'testState', 'testCity', 'testDiscount'),
    new Votes('test@test', 'fakeStage', 'State', 'City', 'testDiscount'),
  ];
  
  let fakeArtists = [
    new Artist('fake@email', 'fakeStage', 'fakeDescription'),
    new Artist('other@id', 'fakeArtist', 'description')
  ];

  beforeEach(async () => {
    artistServiceSpy = jasmine.createSpyObj('ArtistService', ['getArtistById', 'addArtist', 'getAllArtists']);
    votesServiceSpy = jasmine.createSpyObj('VotesService', ['getVotesForArtist', 'getVotesByUser']);
    cognitoServiceSpy = jasmine.createSpyObj('CognitoService', ['getEmail']);
    cognitoServiceSpy.getEmail.and.returnValue('fake@email');
    artistServiceSpy.getArtistById.and.returnValue(of(fakeArtist));
    artistServiceSpy.addArtist.and.returnValue(of(fakeArtist));
    artistServiceSpy.getAllArtists.and.returnValue(of(fakeArtists));
    votesServiceSpy.getVotesForArtist.and.returnValue(of(inputVotes));
    votesServiceSpy.getVotesByUser.and.returnValue(of(inputVotes));

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProfileComponent ],
      providers: [
        { provide: ArtistsService, useValue: artistServiceSpy },
        { provide: VotesService, userValue: votesServiceSpy },
        { provide: CognitoService, userValue: cognitoServiceSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('ngOninit should make appropriate service calls to cognitoService, artistsService, and votesService', () => {
    fixture.whenStable().then(() => {
      expect(cognitoServiceSpy.getEmail).toHaveBeenCalled();
      expect(component.userId).toEqual('fake@email');
      expect(artistServiceSpy.getArtistById).toHaveBeenCalledWith(fakeArtist.id);
      expect(votesServiceSpy.getVotesForArtist).toHaveBeenCalledWith(fakeArtist.stageName);
      expect(component.votes).toEqual(inputVotes);
      expect(votesServiceSpy.getVotesByUser).toHaveBeenCalledWith(fakeArtist.id);
      expect(component.user).toEqual(inputVotes);
    });
  }); 

  it('updateArtists should make a call to artistService.addArtist', () => {
    component.updateArtist();
    fixture.whenStable().then(() => {
      expect(artistServiceSpy.addArtist).toHaveBeenCalledWith(fakeArtist);
    });
  });
});