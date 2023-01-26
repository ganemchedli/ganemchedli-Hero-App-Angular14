import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  heros :any[] = [] ;
  constructor(public _shared : SharedService ) { }
}
