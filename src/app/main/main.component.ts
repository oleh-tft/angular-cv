import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  email = 'xxx@gmail.com';
  city = 'Odesa';
  date: Date = new Date();

  ngOnInit() {

  }

}
