import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { PerformanceReviewService } from './services/performance-review.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  feedbackForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  showLogin: boolean = true;
  
    constructor(public performanceReviewService: PerformanceReviewService,
       private readonly router: Router, private fb: FormBuilder) {
        this.feedbackForm = fb.group({
          'mail': ['', Validators.required],
          'pass' : ['', Validators.required]
          });
       }

  ngOnInit() {
    
   }

  @HostListener('input') oninput() {

    if (this.feedbackForm.valid) {
      this.disabledSubmitButton = false;
      }
  }

  //User login Authentication
    onSubmit() {
      this.performanceReviewService.loginUser(this.feedbackForm.value).subscribe((item) => {
        console.log(item);
        if (item[0].userType === 'Admin') {
          this.showLogin = false;
          this.router.navigateByUrl('adminDirection');
        } else if (item[0].userType === 'Employee') {
          this.showLogin = false;
          this.router.navigateByUrl('performanceList');
        }
        this.feedbackForm.reset();
        this.disabledSubmitButton = true;
      }, error => {
        console.log('Error', error);
      });
    }

    //BAck to registration Page
    gotoRegister() {
      this.showLogin = false;
      this.router.navigateByUrl('registerDetail');
    }
}
