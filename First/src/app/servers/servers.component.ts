import { Component, OnInit } from '@angular/core';

@Component({
  //selectors must be unique. selectors can be set by element (selector: 'app-servers'); by attibute(selector:'[app-servers]') or by class(selector:'.app-servers')
  selector:'app-servers',
  //***template or templateUrl must exist at all times***
  //templateUrl: './servers.component.html' => reference external file
  //or template: allows inline html => 'single line ´multiline
  template:`<app-server></app-server>
            <app-server></app-server>`,
  styleUrls: ['./servers.component.css'] //can add multiple files
  //styles allow inline css 
  // styles:[`
  // h3{
  //   color:dodgerblue;
  // }`]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
