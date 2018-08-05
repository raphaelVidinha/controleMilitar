import { MilitaresModule } from './militares.module';

describe('MilitaresModule', () => {
  let militaresModule: MilitaresModule;

  beforeEach(() => {
    militaresModule = new MilitaresModule();
  });

  it('should create an instance', () => {
    expect(militaresModule).toBeTruthy();
  });
});
