import {NgModule} from '@angular/core';
import { DisplayImageComponent } from "app/displayImage/displayImage.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
    CommonModule
  ],
    declarations : [
        DisplayImageComponent
    ],
    exports  : [DisplayImageComponent]
})
export class DisplayImageModule {

}