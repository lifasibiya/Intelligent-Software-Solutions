import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Output('closeReg') closeReg: EventEmitter<boolean> = new EventEmitter();
  user: any = {}
  spinner: boolean = false;
  constructor(private api: ApiService, private summaryComp: SummaryComponent) { }

  ngOnInit(): void {
  }

  save = async() => {
    try {
      if (this.user) {
        this.openSpinner()
        let response = await this.api.createUser(this.user);
        if (response) {
          this.closeSpinner()
          this.login()
        }
      }
    } catch (error) {
      
    } finally {
      this.closeSpinner()
    }
  }

  login() {
    this.closeReg.emit(false)
    this.summaryComp.openLogin = true
  }

  getDateOfBirth(): string {
    if (this.user.dateOfBirth) {
      let dateOfBirth: string = this.user.dateOfBirth;
      let id = dateOfBirth.replace(/-/g, '')
      return id.substring(2)
    }

    return ''
  }

  openSpinner() {
    this.spinner = true;
  }

  closeSpinner() {
    this.spinner = false;
  }

}
