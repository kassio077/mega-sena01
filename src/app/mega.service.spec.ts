/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MegaService } from './mega.service';

describe('MegaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MegaService]
    });
  });

  it('should ...', inject([MegaService], (service: MegaService) => {
    expect(service).toBeTruthy();
  }));
});
