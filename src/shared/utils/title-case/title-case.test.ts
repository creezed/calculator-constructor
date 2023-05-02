import { titleCase } from './title-case.ts';

describe('title-case', () => {
  it('should work as expected', () => {
    expect(titleCase('title')).toBe('Title');
  });
  it('Should return an empty string', () => {
    expect(titleCase('')).toBe('');
  });
});
