import { findNode } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Output('close') close: EventEmitter<boolean> = new EventEmitter()
  file: any = {};
  showIcon: boolean = false;
  user: any = null;
  spinner: boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
  }

  submit = async () => {
    
    try {
      if (this.file) {
        this.openSpinner()
        const formData: FormData = new FormData();
        formData.append('file', this.file, this.file.name)
        formData.append('filename', this.file.name)
        formData.append('user', this.user.id)
        let response = await this.api.uploadFile(formData)
        if (response) {
          this.closeSpinner()
          this.cancel()
        }
      }  
    } catch (error) {
      
    } finally {
      this.closeSpinner()
    }

  }

  cancel() {
    this.close.emit(false)
  }

  upload = async(event: any) => {
    const reader = new FileReader()
    const file: File = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = file
    }

    this.showIcon = true;
    
  }

  deleteFile() {
    this.showIcon = false;
    this.file = {}
  }

  openSpinner() {
    this.spinner = true;
  }

  closeSpinner() {
    this.spinner = false;
  }

}
