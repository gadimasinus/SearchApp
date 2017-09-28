import {Component, OnInit} from "@angular/core";
///<reference path="js/jquery.d.ts"/>

@Component({

selector : "app-displayimg",
templateUrl : "displayImage.component.html"
}
)
export class DisplayImageComponent implements OnInit {
    imgholder : any;
    selectFile : string;
    ngOnInit(): void {
        var fileSelect = document.getElementById('fileElement');
        this.imgholder = document.getElementById('imgholder');
        
       // fileSelect.onchange = this.handleFiles;
        if(this.imgholder)
        {
            console.log("fileElement is set");
            console.log('window url is : ' + window.URL);
            
            
        }
        
    }
    title: string = "Display Image here...";
    
    handleFiles(event){
        console.log('in handle files...');
      if(event)
      {
          console.log('number of files ' + event.srcElement.files[0].name);
          this.imgholder.src = window.URL.createObjectURL(event.srcElement.files[0]);
    
      }
  
    }

    uploadFile(){
        var blobFile = $('fileElement').files[0];
        var formData = new FormData();
        


    }


}