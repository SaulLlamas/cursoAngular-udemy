import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {URL_API} from '../../../config/config';
import {User} from '../../../models/user.model';
import {Hospital} from '../../../models/hospital.model';
import {Doctor} from '../../../models/doctor.model';

@Component({
  selector: 'app-globa-lsearch',
  templateUrl: './global-search.component.html',
  styles: []
})
export class GlobalSearchComponent implements OnInit {

  users:User[] = [];

  hospitals: Hospital[] = [];

  doctors: Doctor[] = [];

  constructor(public activatedroute:ActivatedRoute , public http:HttpClient) {

    activatedroute.params
      .subscribe(params =>{
        let criteria = params['criteria'];

          this.search(criteria)

      })

  }

  ngOnInit() {

  }

  search(criteria:string){

    let url = URL_API+"/search/all/"+criteria;

    return this.http.get(url).subscribe((response:any)=>{
      this.users = response.users;
      this.hospitals = response.hospitals;
      this.doctors = response.doctors;
      console.log(this.hospitals)
    });

  }



}
