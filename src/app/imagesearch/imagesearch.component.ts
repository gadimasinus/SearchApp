import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagesearch',
  templateUrl: './imagesearch.component.html',
  styleUrls: ['./imagesearch.component.css']
})
export class ImagesearchComponent implements OnInit {

  @Input() searchWord : string = "Default";
  constructor() { }

  ngOnInit() {
  }

}
