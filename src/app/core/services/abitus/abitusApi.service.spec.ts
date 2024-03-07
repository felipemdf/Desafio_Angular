import { TestBed } from '@angular/core/testing';

import AbitusApiService from './abitusApi.service';

describe('AbitusApiService', () => {
  let service: AbitusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbitusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
