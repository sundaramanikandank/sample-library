import { NgModule } from '@angular/core';
import { DemoLibComponent } from './demo-lib.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    DemoLibComponent,
    SudokuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DemoLibComponent,
    SudokuComponent
  ]
})
export class DemoLibModule { }
