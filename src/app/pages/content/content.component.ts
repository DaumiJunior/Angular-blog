import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafakes } from '../../data/datafake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  Description: String= "";
  Title: String= "";
  PhotoCover: String= "";
  private id: String | null = "0";
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
    this.id = value.get("id")
  )
  this.setValuesToConponent(this.id)
}
setValuesToConponent(id: String | null){
  const result = datafakes.filter(article => article.id.toString() == id) [0]
  this.Description = result.description
  this.Title = result.title
  this.PhotoCover = result.photo
}

}
