import { NgModule } from '@angular/core';
import { AnimatedMatIconComponent } from './animated-mat-icon.component';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AnimatedMatIconComponent],
  imports: [
    MatIconModule,
  ],
  exports: [AnimatedMatIconComponent]
})
export class AnimatedMatIconModule { }
