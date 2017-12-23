import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  //selectors must be unique. selectors can be set by element (selector: 'app-servers'); by attibute(selector:'[app-servers]') or by class(selector:'.app-servers')
  selector: 'app-servers',
  //***template or templateUrl must exist at all times***
  templateUrl: './servers.component.html', //=> reference external file
  //or template: allows inline html => 'single line ´multiline
  // template:`<app-server></app-server>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css'] //can add multiple files
  //styles allow inline css 
  // styles:[`
  // h3{
  //   color:dodgerblue;
  // }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Cyka Server';

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000);

  }

  ngOnInit() {
  }

  //server methods
  onCreateServer() {
    this.serverCreationStatus = 'Server '+ this.serverName + ' was created!';
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
