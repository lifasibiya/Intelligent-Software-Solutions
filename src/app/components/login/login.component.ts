import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output('close') close: EventEmitter<boolean> = new EventEmitter()
  @Output('closeReg') closeReg: EventEmitter<boolean> = new EventEmitter()
  idnumber = '';  
  spinner: boolean = false;
  responseMessage: string = 'could not find matching ID Number'
  user: any = null
  showError: boolean = false
  constructor(private router: Router, 
    private api: ApiService,
    private summaryComp: SummaryComponent) { }

  ngOnInit(): void {
  }

  login = async() => {
    try {
      this.openSpinner()
      this.setUserStored(this.idnumber)
      this.user = await this.api.login(this.idnumber)
      if (this.user.id) {
        localStorage.setItem('user', JSON.stringify(this.user))
        this.close.emit(false)
      } else {
        this.showError = true
      }
    } catch (error) {
      
    } finally {
      this.closeSpinner()
    }
  }

  register() {
    this.close.emit(false)
    this.summaryComp.openRegister = true;
  }

  clearErrorMessage() {
    this.showError = false
  }

  setUserStored(id: string) {
    localStorage.setItem('user', id)
  }

  openSpinner() {
    this.spinner = true;
  }

  closeSpinner() {
    this.spinner = false;
  }

}
