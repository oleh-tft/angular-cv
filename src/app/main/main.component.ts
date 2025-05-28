import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  email = 'xxx@gmail.com';
  city = 'Odesa';
  experience = 'null';
  skills = 'Photoshop, Adobe Premiere, Adobe After Affects, Figma, Adobe Illustrator';
  photo: string = 'public/bezdna-ada-bottichelli.jpg';
  photoWidth: number = 400;

  ngOnInit() {

  }

}
