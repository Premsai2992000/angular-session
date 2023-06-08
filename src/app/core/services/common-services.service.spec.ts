/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonServicesService } from './common-services.service';

describe('Service: CommonServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonServicesService]
    });
  });

  it('should ...', inject([CommonServicesService], (service: CommonServicesService) => {
    expect(service).toBeTruthy();
  }));
});
