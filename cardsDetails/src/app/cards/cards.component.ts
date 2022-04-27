import { DetailsService } from './../details.service';
import { Component, OnInit } from '@angular/core';
import { IDetails } from '../details.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  details:IDetails[]=[];
  constructor(private detailsService:DetailsService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.details=this.detailsService.getAll();
    console.log(this.details);
  }
}
