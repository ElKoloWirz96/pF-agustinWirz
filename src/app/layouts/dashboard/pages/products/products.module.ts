import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../shared/shared.module';
import { PipesYDirectivasModule } from "../pipes-y-directivas/pipes-y-directivas.module";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    declarations: [
        ProductsComponent
    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        PipesYDirectivasModule,
        MatCardModule,
        MatDividerModule
    ]
})
export class ProductsModule {}
