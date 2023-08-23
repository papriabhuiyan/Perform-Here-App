import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';
import { ArtistsService } from '../artists.service';
import { ArtistForm } from '../artistForm';
import { Router } from '@angular/router';
import { Artist } from '../artist';

@Component({
  selector: 'app-performer-form',
  templateUrl: './performer-form.component.html',
  styleUrls: ['./performer-form.component.css']
})
export class PerformerFormComponent implements OnInit {
  fname:string = '';

  artistForm: FormGroup = this.formBuilder.nonNullable.group({
    firstname: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    stagename: ['',[Validators.required, Validators.email]],
    accountemail: ['',[Validators.required]],
    managementemail: ['',[Validators.email]],
    phoneno: ['',[Validators.required, Validators.pattern("^[0-9-]*$")]],
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private artistService: ArtistsService) { 
  }

  ngOnInit(): void {
  }

  get firstname() {
    return this.artistForm.get('firstname');
  }

  get lastname() {
    return this.artistForm.get('lastname');
  }

  get stagename() {
    return this.artistForm.get('stagename');
  }

  get accountemail() {
    return this.artistForm.get('accountemail');
  }
  
  get managementemail() {
    return this.artistForm.get('managementemail');
  }

  get phoneno() {
    return this.artistForm.get('phoneno');
  }

  onSubmit() {
    let aform: ArtistForm = new ArtistForm("1", this.firstname?.value, 
                                                this.lastname?.value, 
                                                this.stagename?.value, 
                                                this.accountemail?.value, 
                                                this.managementemail?.value, 
                                                this.phoneno?.value);
    this.artistService.addArtistForm(aform).subscribe(res => console.log(res));

    //setting a default bio -edited
    let a: Artist = new Artist(this.accountemail?.value, this.stagename?.value, "Hey there! My name is "+this.stagename?.value);

    this.artistService.addArtist(a).subscribe();
    

    this.router.navigate(['/signin']);
  }

}
