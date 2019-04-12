import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatTabsModule,
    Material.MatCardModule
  ],
  exports: [
    Material.MatTabsModule,
    Material.MatCardModule
  ]
})
export class MaterialModule { }
