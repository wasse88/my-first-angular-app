import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
/*   styles: [`
  h3{ color: dodgerblue;},
  .clickColor{ color: 'white' }
  `] */
})
export class AppComponent {
  username = '';
  //tempName = '';
  allowDisply = false;
  numberOfClicks =  0;
  arrayOfClaicks = [];

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
  
  onDisplay(){
    this.allowDisply = true;
    //this.arrayOfClaicks.push(this.numberOfClicks++);
    this.arrayOfClaicks.push(new Date());

  }
}
