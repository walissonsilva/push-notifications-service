import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content with a valid length', () => {
    const content = new Content('banana');

    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('abc')).toThrow(`Content length error`);
  });

  it('should NOT be able to create a notification content with more than than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(`Content length error`);
  });
});
