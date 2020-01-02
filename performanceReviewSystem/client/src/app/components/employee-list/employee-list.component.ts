import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { PerformanceReviewService } from '../../services/performance-review.service';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  getEmployeeDetailsList;

  constructor(public performanceReviewService: PerformanceReviewService, private readonly route: Router) { }

  ngOnInit() {
    this.getEmployeeDetails();
  }

  //Get Employee Details
  getEmployeeDetails() {
    this.performanceReviewService.getEmployeeDetails().subscribe((item) => {
      this.getEmployeeDetailsList = item;
      console.log(this.getEmployeeDetailsList);
    });
  }

  //Update Employee Details
  updateEmployeeDetails(employeeDetail) {
    console.log(employeeDetail);
    this.performanceReviewService.updateEmployeeDetails(employeeDetail).subscribe((item) => {
      if (item) {
       alert('Employee Details Updated sucessfully');
       this.route.navigateByUrl('employeeDetail');
      }
    });
  }


  //Delete Employee Detail by ID
  removeEmployeeDetails(employeeDetail) {
    console.log(employeeDetail);
    this.performanceReviewService.deleteEmployeeDetails(employeeDetail).subscribe((item) => {
      if (item) {
        alert('Employee Details Deleted sucessfully');
        this.route.navigateByUrl('employeeDetail');
       }
    });
  }

  //Employee and Performance Review Updation
  updateList(id, field, event) {
    console.log(event.target.innerText);
    this.getEmployeeDetailsList.forEach((item) => {
      if (field === 'full_name' && id === item.id) {
        item.full_name = event.target.innerText;
      } else if (field === 'performanceCategory' && id === item.id) {
        item.performanceCategory = event.target.innerText;
      } else if (field === 'feedback' && id === item.id) {
        item.feedback = event.target.innerText;
      } else if (field === 'Designation' && id === item.id) {
        item.designation = event.target.innerText;
      } else if (field === 'Mail' && id === item.id) {
        item.mail = event.target.innerText;
      }
    });
  }


  // Routing
  addNewEmployee() {
    this.route.navigateByUrl('addEmployeeDetail');

  }

}
