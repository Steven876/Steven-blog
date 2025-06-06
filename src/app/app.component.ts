import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',


})


export class AppComponent {

  title = 'Steven\'s Programming Journey';

}