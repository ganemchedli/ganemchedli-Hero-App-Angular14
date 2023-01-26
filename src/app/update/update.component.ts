import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  hero : any ;
  id : any; 
  constructor(private act : ActivatedRoute , private _shared : SharedService){}
  ngOnInit() : void {
    this.id = this.act.snapshot.paramMap.get('id') ;
    this._shared.getHeroById(this.id)
    .subscribe(
      res=>{
        this.hero = res ;
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  update(){

  }
}
