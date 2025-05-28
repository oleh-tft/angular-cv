import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NameComponent } from './name/name.component';
import { PhoneComponent } from './phone/phone.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, NameComponent, PhoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
}
