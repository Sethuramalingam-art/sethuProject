import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';
import { PerformanceReviewService } from '../../services/performance-review.service';

@Component({
  selector: 'app-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.css']
})
export class PerformanceListComponent implements OnInit {

  getPErformanceListNeedFeedback;

  constructor(public performanceReviewService : PerformanceReviewService, private readonly router: Router) { }

  ngOnInit() {
    this.getPerformanceReviewNeedFeedbackList();
  }

  getPerformanceReviewNeedFeedbackList() {

    this.performanceReviewService.getPerformanceListNeedFeedback().subscribe(item => {
      if (item) {
        this.getPErformanceListNeedFeedback = item;
        const displayRows = [];
        this.getPErformanceListNeedFeedback.forEach((resultantItem) => {
          const displayObj = {
             'id': resultantItem.id,
             'performanceCategory' : resultantItem.performanceCategory ? resultantItem.performanceCategory : 'TBD' ,
             'feedback' : resultantItem.feedback ? resultantItem.feedback : 'TBD',
             'fullname' : resultantItem.fullname,
             'empId' : resultantItem.employeeId
          };
            displayRows.push(displayObj);
        });
        this.getPErformanceListNeedFeedback = displayRows;
      }
    });
  }

  submitFeedBack(element) {
    this.performanceReviewService.toSetFeedback(element);
    this.router.navigateByUrl('feedBackSubmisson');

  }


}
