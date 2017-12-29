import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First';
  //user variables
  allowResetUsername = false;
  username = '';
  visibleDetails = false;
  log = [];
  
    //user methods
    onUpdateUsername(event: Event)
    {
      this.username = (<HTMLInputElement>event.target).value;
      this.allowResetUsername = true;
    }
    
    onResetUsername()
    {
      this.username = '';
    }

    onShowDetails()
    {
      this.visibleDetails = !this.visibleDetails;
      //this.log.push(this.log.length+1)
      this.log.push(new Date());
    }
}
