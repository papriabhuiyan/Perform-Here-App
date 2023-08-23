import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { Artist } from '../artist';
import { LocationsService } from '../locations.service';

import { BrowsingContentComponent } from './browsing-content.component';

describe('BrowsingContentComponent', () => {
  let component: BrowsingContentComponent;
  let fixture: ComponentFixture<BrowsingContentComponent>;
  let locationsServiceSpy: jasmine.SpyObj<LocationsService>;
  let routerSpy: jasmine.SpyObj<Router>;

  let states: any = [
    {
      id: 1,
      name: "Alabama"
    },
    {
      id: 2,
      name: "Alaska"
    },
    {
      id: 3,
      name: "Arizona"
    },
  ];

  let cities: any = [
    {
      id: 1,
      name: "Huntsville",
      longitude: '-86.601791',
      latitude: '34.738228'
    },
    {
      id: 2,
      name: "Anchorage",
      longitude: '-149.863129',
      latitude: '61.217381'
    },
    {
      id: 3,
      name: "Pheonix",
      longitude: '-112.074036',
      latitude: '33.448376'
    },
  ];

  let fakeArtists = [
    new Artist('fake@email', 'fakeStage', 'fakeDescription'),
    new Artist('other@id', 'fakeArtist', 'description')
  ];

  beforeEach(async () => {
    locationsServiceSpy= jasmine.createSpyObj('LocationsService', ['cities', 'states']);
    routerSpy = jasmine.createSpyObj('Router',['navigate']);
    locationsServiceSpy.cities.and.returnValue(cities);
    locationsServiceSpy.states.and.returnValue(states);

    await TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      declarations: [ BrowsingContentComponent ],
      providers: [
         { provide: LocationsService, useValue: locationsServiceSpy },
         { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display choose an artist title`, () => {
    let title = fixture.nativeElement.querySelector('[data-test-id="header"]');
    expect(title.textContent).toContain('Choose');
  })

  it('updateArtists should filter the artist array', () => {
    component.artists = fakeArtists;
    component.updateArtists();
    expect(component.newArtists).toEqual(fakeArtists);
  });

  it('onSearchTextEntered should should set text variable and route to purchase', () => {
    component.onSearchTextEntered('test');
    expect(component.searchText).toEqual('test');
  });

  it('purchase should route to purchase', () => {
    component.purchase();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['purchase']);
  });
});
