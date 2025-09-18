import { Component } from '@angular/core';
  
import { Head } from './components/head/head';
import { Button } from './components/button/button';
@Component({
  selector: 'app-root',
  imports: [Head,Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-material';
}
