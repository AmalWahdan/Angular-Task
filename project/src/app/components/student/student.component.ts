import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  nameVal: string = "";
  ageVal: string = '';
  validName: boolean = false;
  validAge: boolean = false;
  nameList: string[] = [];
  ageList: number[]= [];

  addStudent() {
    if (this.nameVal.match(/^[A-Za-z]{3,20}(\s{1}[A-Za-z]{3,20}){0,4}\s?$/)) {
      this.validName = false;
    
    } else {
      this.validName = true;
    }
  
    if (parseInt(this.ageVal) < 18 ||this.ageVal=='')
    {    
      this.validAge = true;
    }
    else {
      this.validAge = false;  
    }
    if (!this.validAge&&!this.validName) {
      this.nameList.push(this.nameVal);
      this.ageList.push(parseInt( this.ageVal));
      this.ageVal = '';
    this.nameVal = "";
    }      
  }
  removeFromList(index:number) {
    this.nameList = this.nameList.filter((item, i) => index != i);
    this.ageList = this.ageList.filter((item, i) => index != i);
  }

}
