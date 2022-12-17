export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error');
    }

    this.content = content;
  }

  public get value() {
    return this.content;
  }

  validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
