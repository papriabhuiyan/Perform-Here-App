import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { CognitoService } from '../cognito.service';
import { LocationsService } from '../locations.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-browsing-content',
  templateUrl: './browsing-content.component.html',
  styleUrls: ['./browsing-content.component.css']
})
export class BrowsingContentComponent implements OnInit {
  artists : Artist[]= [];
  searchText : string = "";
  userId : string = "";
  newArtists: Artist[] = [];
  states: any = [];
  cities : any = [];
  pickedState: string = "Select State";
  pickedCity: string = "Select City";

  paymentHandler: any = null;
  constructor(private router: Router, private artistService: ArtistsService, private cognitoService: CognitoService, private locationService : LocationsService) {
    this.artistService.getAllArtists().subscribe(artists=> {
      this.artists=artists;
      this.newArtists = artists;
    });
  }

  ngOnInit(): void {
    this.states = this.locationService.states();
  }
  
  onSelect(states : any){
    this.cities = this.locationService.cities().filter(e => e.id == states.target.value);
  }
  
  updateArtists() {
    this.newArtists = this.artists.filter(a => a.stageName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);
   }
   purchase(){
    this.router.navigate(['purchase']);
   }
   
  title = 'Perform-Here';
  priceId = 'price_1LsVlNEnOsQjjv2USBd9xYtq';
  product = {
    title: 'Artist',
    price: 18.00
  };
  quantity = 1;
  stripePromise = loadStripe('pk_test_51LrEjvEnOsQjjv2UZmdKyfpdTuWxVJUtdWH1qdJaIvMvUdfol2tVMxYweZDQRL9HKC3ng0ahvSKnHNFHc9DVxNKE00hWeuJEdk');

  async checkout(stageName:string) {
    localStorage.setItem("pickedState", this.pickedState);
    localStorage.setItem("pickedCity",this.pickedCity);
    localStorage.setItem("pickedArtist",stageName);
    
    const stripe = await this.stripePromise;
    if(stripe != null) {
      const {error}  = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [
          { 
            price: this.priceId, 
            quantity: this.quantity 
          }
        ],
        successUrl: `http://960476-perform-here-s3.s3-website-us-west-2.amazonaws.com/success`,
        cancelUrl: `http://960476-perform-here-s3.s3-website-us-west-2.amazonaws.com/browse`,
      });
    }
  }

}
