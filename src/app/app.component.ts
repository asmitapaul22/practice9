import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice9';
  public ngOnInit(){
    $(document).ready(function(){
      $("button").click(function(){
        var div=$("div");
        div.animate({left:"1000px"},"slow");
      div.animate({fontSize:"5em"},"slow");
       });
    });

  }
}
