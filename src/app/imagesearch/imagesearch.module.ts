import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesearchComponent } from './imagesearch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImagesearchComponent],
  exports: [
    ImagesearchComponent
  ]
})
export class ImagesearchModule { }
