import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { MyCustomTextTranformPipe } from './my-custom-text-tranform.pipe';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    MyCustomTextTranformPipe
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule
  ],
  exports: [PipesYDirectivasComponent, MyCustomTextTranformPipe]
})
export class PipesYDirectivasModule { }
