import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsearchComponent } from './textsearch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextsearchComponent],
  exports: [
    TextsearchComponent
  ]
})
export class TextsearchModule { }
