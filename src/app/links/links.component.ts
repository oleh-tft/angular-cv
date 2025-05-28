import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent implements OnInit {

  github: string = 'https://github.com/d-oleh';
  linkedin: string = 'https://linkedin.com/in/d-oleh';
  twitter: string = 'https://x.com/idonthaveatwitter';

  ngOnInit() {

  }

}
