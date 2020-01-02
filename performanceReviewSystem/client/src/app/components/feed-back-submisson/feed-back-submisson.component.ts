import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { PerformanceReviewService } from '../../services/performance-review.service';

@Component({
  selector: 'app-feed-back-submisson',
  templateUrl: './feed-back-submisson.component.html',
  styleUrls: ['./feed-back-submisson.component.css']
})
export class FeedBackSubmissonComponent implements OnInit {

  feedbackForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

  constructor(public performanceReviewService: PerformanceReviewService,
     private readonly router: Router, private fb: FormBuilder) {
      this.feedbackForm = fb.group({
        'employeeName': [this.performanceReviewService.captureElement.fullname, Validators.required],
        'empID' : [this.performanceReviewService.captureElement.empId],
        'performanceCategory': [this.performanceReviewService.captureElement.performanceCategory, Validators.required],
        'feedback': ['', Validators.required],
        });
     }

  ngOnInit() {
    console.log(this.performanceReviewService.captureElement);

  }


  @HostListener('input') oninput() {

  if (this.feedbackForm.valid) {
    this.disabledSubmitButton = false;
    }
  }


  //submitting feedback for performance review
  onSubmit() {
    this.performanceReviewService.addFeedBackSubmit(this.feedbackForm.value).subscribe(() => {
      this.feedbackForm.reset();
      this.disabledSubmitButton = true;
      this.router.navigateByUrl('performanceList');
    }, error => {
      console.log('Error', error);
    });
  }

  gotoBack() {
    this.router.navigateByUrl('performanceList');
  }

}
