import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesearchComponent } from './imagesearch.component';
import {ImageSearchResult} from './imagesearch.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImagesearchComponent],
  exports: [
    ImagesearchComponent,
  ]
})
export class ImagesearchModule { }
