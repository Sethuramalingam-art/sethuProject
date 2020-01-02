import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { PerformanceReviewService } from '../../services/performance-review.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  feedbackForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  constructor(public performanceReviewService: PerformanceReviewService,
       private readonly router: Router, private fb: FormBuilder) {
        this.feedbackForm = fb.group({
          'id': [, Validators.required],
          'full_name' : [],
          'designation': ['', Validators.required],
          'mail': ['', Validators.required],
          'performanceDetailId':['', Validators.required]
          });
       }

    ngOnInit() {
    }

    @HostListener('input') oninput() {
    if (this.feedbackForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

    //Create Employee Details
    onSubmit() {
      console.log(this.feedbackForm.value);
      this.performanceReviewService.createEmployeeDetails(this.feedbackForm.value).subscribe(() => {
        this.feedbackForm.reset();
        this.disabledSubmitButton = true;
        alert('Eployee Details Added Sucessfully');
        this.router.navigateByUrl('employeeDetail');
      }, error => {
        console.log('Error', error);
      });
    }

}
