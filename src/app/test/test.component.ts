import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:`
    <h2>
      Welcome {{name}}
    <h2>

    <input [id]="myId" type="text" value="Angular">
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Angular">
    
    <button (click)='buttonClicked($event)'>Greet</button>
    <p>Button Clicked {{count}} Times </p>
    {{greeting}}
    <button (click)="greeting='Welcome boys'">Welcome</button>

    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">log</button>

    <input [(ngModel)]="work" type="text">
 
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h3>
        Structural directive
      </h3>
    </ng-template>
    <ng-template #elseBlock>
      <h3>
        Directive is hidden
      </h3>
    </ng-template>

    <div [ngSwitch] = "color">
      <div *ngSwitchCase="'red'">You pick red</div>
      <div *ngSwitchCase="'green'">You pick green</div>
      <div *ngSwitchCase="'blue'">You pick blue</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor="let color of colors; even as e">
      <h2>{{e}} {{color}}</h2>
    </div>
            `,
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  styles:[`
    h2 {
      color:red;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Stefan";
  public myId = "testId";
  public isDisabled = false;
  public greeting = "";
  public work = "";
  count: number=0;
  /**
   * buttonClicked
 : void  */
  
  constructor() { }

  ngOnInit(): void {
  }

  public buttonClicked(event): void {
    this.count ++;
    console.log(event);
    this.greeting = event.type;
  }

  public logMessage(value) {
    console.log(value);
  }

  displayName = true;

  public color = "orange";

  public colors = ["red","blue","green","yellow"];
}
