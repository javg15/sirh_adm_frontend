import { CatsistemasModule } from './catsistemas.module';

describe('CatsistemasModule', () => {
  let catsistemasModule: CatsistemasModule;

  beforeEach(() => {
    catsistemasModule = new CatsistemasModule();
  });

  it('should create an instance', () => {
    expect(catsistemasModule).toBeTruthy();
  });
});
