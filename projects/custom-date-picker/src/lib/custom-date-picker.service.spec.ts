import { TestBed } from '@angular/core/testing';

import { DatePickerService } from './custom-date-picker.service';

describe('CustomDatePickerService', () => {
  let service: CustomDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
