import { NgModule } from '@angular/core';
import { AnimatedMatIconComponent } from './animated-mat-icon.component';
import { ComponentNameComponent } from './component-name/component-name.component';



@NgModule({
  declarations: [AnimatedMatIconComponent, ComponentNameComponent],
  imports: [
  ],
  exports: [AnimatedMatIconComponent, ComponentNameComponent]
})
export class AnimatedMatIconModule { }
