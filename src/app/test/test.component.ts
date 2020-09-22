import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2>{{ name }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ message | slice:3:5 }}</h2>
  <h2>{{ person | json }}</h2>

  <h2>{{ 5.678 | number:'1.2-3' }}</h2>
  <h2>{{ 5.678 | number:'3.4-5' }}</h2>
  <h2>{{ 5.678 | number:'3.1-2' }}</h2>

  <h2>{{ 0.25 | percent }}</h2>
  <h2>{{ 0.25 | currency }}</h2>
  <h2>{{ 0.25 | currency: 'EUR':'code' }}</h2>

  <h2>{{ date }}</h2>
  <h2>{{ date | date:'short'}}</h2>
  <h2>{{ date | date:'shortDate'}}</h2>
  <h2>{{ date | date:'mediumTime'}}</h2>
  `,
  // template:`
  //   <h2>{{"Hello " + name}}</h2>
  //   <button (click)="fireEvent()">Send Event</button>
  // `,
  // template:`
  //   <h2>
  //     Welcome {{name}}
  //   <h2>

  //   <input [id]="myId" type="text" value="Angular">
  //   <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Angular">
    
  //   <button (click)='buttonClicked($event)'>Greet</button>
  //   <p>Button Clicked {{count}} Times </p>
  //   {{greeting}}
  //   <button (click)="greeting='Welcome boys'">Welcome</button>

  //   <input #myInput type="text">
  //   <button (click)="logMessage(myInput.value)">log</button>

  //   <input [(ngModel)]="work" type="text">
 
  //   <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  //   <ng-template #thenBlock>
  //     <h3>
  //       Structural directive
  //     </h3>
  //   </ng-template>
  //   <ng-template #elseBlock>
  //     <h3>
  //       Directive is hidden
  //     </h3>
  //   </ng-template>

  //   <div [ngSwitch] = "color">
  //     <div *ngSwitchCase="'red'">You pick red</div>
  //     <div *ngSwitchCase="'green'">You pick green</div>
  //     <div *ngSwitchCase="'blue'">You pick blue</div>
  //     <div *ngSwitchDefault>Pick again</div>
  //   </div>

  //   <div *ngFor="let color of colors; even as e">
  //     <h2>{{e}} {{color}}</h2>
  //   </div>

  //           `,
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  styles:[`
    h2 {
      color:red;
    }
  `]
})
export class TestComponent implements OnInit {

  // @Input('parentData') public name;
  // @Output() public childEvent = new EventEmitter();

  public name = "Code evolve";
  public message = "Welcome code";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  };

public date = new Date();

  // public name = "Stefan";
  // public myId = "testId";
  // public isDisabled = false;
  // public greeting = "";
  // public work = "";
  // count: number=0;
  /**
   * buttonClicked
 : void  */
  
  constructor() { }

  ngOnInit(): void {
  }

  // fireEvent() {
  //   this.childEvent.emit("Hello Code");
  // }


  // public buttonClicked(event): void {
  //   this.count ++;
  //   console.log(event);
  //   this.greeting = event.type;
  // }

  // public logMessage(value) {
  //   console.log(value);
  // }

  // displayName = true;

  // public color = "orange";

  // public colors = ["red","blue","green","yellow"];
}
