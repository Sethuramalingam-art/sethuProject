import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatTableModule, MatRadioModule} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-direction',
  templateUrl: './admin-direction.component.html',
  styleUrls: ['./admin-direction.component.css']
})
export class AdminDirectionComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }
  forwardPage(value) {
    this.router.navigateByUrl('employeeDetail');
  }

}
