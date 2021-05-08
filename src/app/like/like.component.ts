import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})


export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isActive: boolean;
  @Input() likesCount: number;

  onClick(){
    this.likesCount+= (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

}
