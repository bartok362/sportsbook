import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return S.:444', () => {
    const pipe = new PagesPipe();

    expect(pipe.transform(444, 'S.')).toBe('S.: 444');
  });
});
