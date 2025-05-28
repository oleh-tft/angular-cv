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

  ngOnInit() {

  }

}
