import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private breakPoint: BreakpointObserver) {}
  
  ngOnInit(): void {
    if(this.breakPoint.isMatched('(max-width: 600px)')){
      console.log('Console: width = 600px.');
      console.info('Showing info in the console log');
    }
  }
}
