import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsTableComponent } from './stats-table.component';
import { CityVotes } from './stats-table.component';
import { Votes } from '../votes';
import { VotesService } from '../votes.service';

describe('StatsTableComponent', () => {
  let component: StatsTableComponent;
  let fixture: ComponentFixture<StatsTableComponent>;
  let votesServiceSpy: jasmine.SpyObj<VotesService>;

  let expectedVotesPerCity: CityVotes[] = [
    new CityVotes(2, 'testCity', 'testState', 'testStage'),
    new CityVotes(1, 'City', 'State', 'testStage')
  ];

  let inputVotes: Votes[] = [
    new Votes('test@test', 'testStage', 'testState', 'testCity', 'testDiscount'),
    new Votes('test@test', 'testStage', 'testState', 'testCity', 'testDiscount'),
    new Votes('test@test', 'testStage', 'State', 'City', 'testDiscount'),
  ];

  let discountCode: HTMLInputElement;

  beforeEach(async () => {
    votesServiceSpy = jasmine.createSpyObj('VotesService',['updateVotes']);

    await TestBed.configureTestingModule({
      declarations: [ StatsTableComponent ],
      imports: [HttpClientModule],
      providers: [
        { provide: VotesService, useValue: votesServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculateVotes should return a sorted array of CityVotes', () => {
    component.votes = inputVotes;
    component.calculateVotes();
    expect(expectedVotesPerCity).toEqual(expectedVotesPerCity);
  });
});
