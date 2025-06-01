import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path:'', component:MainComponent},
    { path:'work', component:WorkComponent},
    { path:'skills', component:SkillsComponent}
];
