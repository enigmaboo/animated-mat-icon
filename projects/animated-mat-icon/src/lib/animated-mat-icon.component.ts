import { Component, Input as input } from '@angular/core';

@Component({
  selector: 'animated-mat-icon',
  template: `
    <mat-icon [class]="onHover ? animation+'-hover' : animation" [style.color]="color" [style.font-size]="size">{{icon}}</mat-icon>
  `,
  styleUrls: [
    './animated-mat-icon.component.css'
  ]
})
export class AnimatedMatIconComponent {

  @input()
  icon!: string;

  @input()
  animation!: string;

  @input()
  onHover!: boolean;

  @input()
  color!: string;

  @input()
  size!: string;

}
