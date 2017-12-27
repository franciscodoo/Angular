import{Component} from '@angular/core';

@Component(
    {  
        //pass an object to configure the component
        selector: 'app-server',  //"html tag" by which we're able to use this component in other components
        templateUrl: './server.component.html', //created html page to be used as template
        styleUrls: ['./server.component.css']
    }) 
export class ServerComponent
{
    serverId = 10; //or serverId: number = 10;
    serverStatus = 'Offline'; // serverStatus: string = '';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    GetServerStatus()
    {
        return this.serverStatus;
    }

    GetColor()
    {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}