import {Component, OnInit} from '@angular/core';
import {GetmoviesService} from "./getmovies.service";
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  popular= false;
  /*onServerAdded(serverData: {name: string , content: string}) {
     this.serverElements.push({
       type: 'server',
       name: serverData.name,
       content: serverData.content
     });
  }

  onblueprintAdded(blueprintData: {name: string , content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }*/


}

