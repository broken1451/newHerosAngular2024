import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authPublic2Guard } from './auth-public2.guard';

describe('authPublic2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authPublic2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
