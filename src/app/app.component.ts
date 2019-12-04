import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: dodgerblue;
  }`]
})
export class AppComponent {
  username = '';
  //tempName = '';
  allowDisply = false;

/*   onUpdateUsername() {
    //event : Event
    //console.log( event );
    //this.tempName =  (<HTMLInputElement>event.target).value;

    if( this.username != ''){
        this.allowDisply = true;        
    }
  }

  onDeleteBtn(){
    this.username = '';
  } */
  
}
