import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'
import { MatCard } from '@angular/material/card';
;@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCard],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

}
