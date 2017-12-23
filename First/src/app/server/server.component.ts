import{Component} from '@angular/core';

@Component(
    {  
        //pass an object to configure the component
        selector: 'app-server',  //"html tag" by which we're able to use this component in other components
        templateUrl: './server.component.html' //created html page to be used as template
    }) 
export class ServerComponent
{
    serverId = 10; //or serverId: number = 10;
    serverStatus = 'Offline'; // serverStatus: string = '';

    GetServerStatus()
    {
        return this.serverStatus;
    }
}