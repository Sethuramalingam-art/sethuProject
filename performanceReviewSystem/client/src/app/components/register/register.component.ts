import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { PerformanceReviewService } from '../../services/performance-review.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  feedbackForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

  constructor(public performanceReviewService: PerformanceReviewService,
     private readonly router: Router, private fb: FormBuilder) {
      this.feedbackForm = fb.group({
        'fullName': ['', Validators.required],
        'mail' : ['', Validators.required],
        'pass' : ['', Validators.required],
        'userType':[]
        });
     }

  ngOnInit() {
    console.log('');

  }


  @HostListener('input') oninput() {

  if (this.feedbackForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  onSubmit() {
    this.performanceReviewService.registerUer(this.feedbackForm.value).subscribe((item) => {
      if (this.feedbackForm.value.userType === 'Admin') {
        this.router.navigateByUrl('adminDirection');
      } else if (this.feedbackForm.value.userType === 'Employee') {
        this.router.navigateByUrl('performanceList');
      }
      this.feedbackForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  backToLogin() {
    this.router.navigateByUrl('');
  }
}
