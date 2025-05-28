import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {

  photo: string = 'bezdna-ada-bottichelli.jpg';
  photoWidth: number = 200;

  ngOnInit() {

  }

}
