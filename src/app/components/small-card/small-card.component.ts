import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent  implements OnInit{
  @Input() 
  SmallTitle:String ="";
  @Input() 
  SmallDescription:String ="";
  @Input() 
  SmallImage:String =""; 
  @Input() 
  id:String ="0";
  constructor(){}
  ngOnInit(): void {
  }

}
