import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'mos-ui-profile-image-upload',
  templateUrl: './ui-profile-image-upload.component.html',
  styleUrls: ['./ui-profile-image-upload.component.scss']
})
export class UiProfileImageUploadComponent {
  @ViewChild('profileImage') profileImage: ElementRef = {} as any;
  @Input() defaultImage : string = "https://www.libera.fi/wp-content/uploads/2019/02/blank-profile-picture-973460__480.png";
  @Output() emitImageData = new EventEmitter<ImageUploaded>();
  imageData: ImageUploaded;

  constructor(private renderer: Renderer2) {}

  onFileSelected(input) {
    const FILE = input.files[0]; 
    console.log(FILE);
    
    if (FILE) {
      this.imageData = {
        fileName: FILE.name,
        size: FILE.size,
        type: FILE.type,
        source: ''
      }
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageData.source = e.target.result;
        this.updateImage(e.target.result);
      }
      reader.readAsDataURL(FILE);
    }
  }

  private updateImage(img: string) {
    this.renderer.setAttribute(this.profileImage.nativeElement, 'src', img);
    this.emitImageData.emit(this.imageData);
  }

  openImageSelector() {
    document.getElementById('profile-image-upload').click();
  }

}

export interface ImageUploaded {
  fileName: string;
  type: string;
  size: number;
  source: string;
}
