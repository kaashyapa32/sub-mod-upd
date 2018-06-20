import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmodComponent } from './submod.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmodComponent],
  exports: [SubmodComponent]
})
export class SubmodModule { }
