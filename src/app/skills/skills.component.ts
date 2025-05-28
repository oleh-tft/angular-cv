import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skills = 'Photoshop, Adobe Premiere, Adobe After Affects, Figma, Adobe Illustrator';
  certificate = 'netacad 2025 c++...';

  ngOnInit() {

  }

}
