import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  openUpload: boolean = false;
  openLogin: boolean = false;
  openRegister: boolean = false;
  file: Document[] = [];
  constructor(private router: Router, private api: ApiService) { }

  async ngOnInit(): Promise<void> {
    if (!localStorage.getItem('user')) {
      this.openLogin = true;
    }

    this.file = await this.api.getFiles()
    console.log(this.file)
  }

  getUserStored() {
    return localStorage.getItem('user')
  }

  logout() {
    localStorage.removeItem('user')
    this.openLogin = true;
  }

  upload() {
    this.openUpload = !this.openUpload;
  }

  regPopup(event: boolean) {
    
    console.log('did enter popup')
    this.openRegister = event;
  }

  popup(event: boolean) {
    this.openLogin = event;
    this.openUpload = event;
  }

  deleteFile = async (document: Document) => {
    console.log(document)
    let response = await this.api.deleteFile(document.id);
    console.log(response)
  }

}
