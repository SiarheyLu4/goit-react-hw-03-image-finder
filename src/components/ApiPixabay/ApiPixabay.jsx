

export class ApiPixabay {
  _defaultUrl = 'https://pixabay.com/api/';
  _key = '28282273-de260e28427aa1fd2a8294f86';

  async getResouces(url) {
    const result = await fetch(`${this._defaultUrl}?key=${this._key}${url}`)
    if (!result.ok) {
      throw new Error(`could not fetch, ${result.status}`);
    }
    return result.json();
  }
}

// https://pixabay.com/api/ ? q=cat &page=1 &key=your_key &image_type=photo &orientation=horizontal &per_page=12

// https://pixabay.com/api/ ? key=28282273-de260e28427aa1fd2a8294f86 &q=yellow+flowers &image_type=photo