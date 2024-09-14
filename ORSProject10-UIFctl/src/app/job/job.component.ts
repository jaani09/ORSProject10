

import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.JOB, locator, route);
  }
  

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.title);
    flag = flag && validator.isNotNullObject(form.status);
    flag = flag && validator.isNotNullObject(form.dateOfOpening);
    flag = flag && validator.isNotNullObject(form.experience);

    return flag;
  }

  

  populateForm(form, data) {
    form.id = data.id;
    form.title = data.title;
    form.status = data.status;
    form.dateOfOpening = this.parseDate(data.dateOfOpening); // Assuming data.date is a string date
    form.experience = data.experience;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
 

}

