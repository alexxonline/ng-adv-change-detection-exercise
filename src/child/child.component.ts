import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
})
export class ChildComponent  {
  @Input() data: string[];

}
