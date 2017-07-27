export class Fragment {

  private _path: string;
  private _html: string;
  private _keywords: string;

  constructor(path: string, rawHtml: string) {
    this._path = path;
    this._html = rawHtml;
    this._keywords = this._html.replace(/<\/?[^>]+(>|$)/g, '').replace(/\s{2,}/gm, ' ').trim();
  }

  public include(filter: string) {
    return this._keywords.indexOf(filter) > -1;
  }

  getHtml() {
    return this._html;
  }

  getHelloWorld() {
    return 'hello world';
  }
}
