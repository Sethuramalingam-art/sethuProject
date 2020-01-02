import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerformanceReviewService {

  requestOptions;
  captureElement;

  constructor(private http: HttpClient) {
 }
 ngOninit() {
 }

  //Get PerformanceList require feed back
  getPerformanceListNeedFeedback() {
    return this.http.get('http://localhost:3000/get-performanceList');
  }

  //service storage function
  toSetFeedback(element) {
      this.captureElement = element;
  }

  //Update performance Review Details
  addFeedBackSubmit(feedbackData) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     const options = {
        headers: headers
     }
      return this.http.put('http://localhost:3000/update-performnceReviewDetails', feedbackData, options);
  }

  //Get Employee List
  getEmployeeDetails() {
      return this.http.get('http://localhost:3000/get-employeeList');
  }

  //Update Employee Details
  updateEmployeeDetails(employeeDetail) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     const options = {
        headers: headers
     }
     return this.http.put('http://localhost:3000/update-employeeDetails', employeeDetail, options);
  }

  //Get Full Performance Review with feed back
  getPerformanceReviewDetails() {
      return this.http.get('http://localhost:3000/get-performanceReviewFullList');
  }

  //Remove employee details
  deleteEmployeeDetails(employeeDetail) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     const options = {
        headers: headers
     }
      return this.http.put('http://localhost:3000/delete-employeeDetails', employeeDetail, options);
  }

  //Add Employee Details
  createEmployeeDetails(employeeObj) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     const options = {
        headers: headers
     }
      return this.http.post('http://localhost:3000/add-employeeDetails', employeeObj, options);
  }

  //User Registration
  registerUer(userDetail) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     const options = {
        headers: headers
     }
      return this.http.post('http://localhost:3000/add-userDetail', userDetail, options);

  }

  //Login User
  loginUser(user) {
      return this.http.get('http://localhost:3000/get-userDetails?mail=' + user.mail);
  }
}
