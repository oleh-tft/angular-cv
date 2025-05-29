import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {

  experience1 = 'Proton web services - 6 months';
  experience2 = 'Data analysis - 1 month';

  flag = false;

  ngOnInit() {

  }

}
