import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-head',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,],
  templateUrl: './head.html',
  styleUrl: './head.css'
})
export class Head {

}
