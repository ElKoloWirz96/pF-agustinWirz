import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PipesYDirectivasModule } from "../pipes-y-directivas/pipes-y-directivas.module";


@NgModule({
    declarations: [
        CareersComponent
    ],
    imports: [
        CommonModule,
        CareersRoutingModule,
        SharedModule,
        PipesYDirectivasModule
    ]
})
export class CareersModule { }
