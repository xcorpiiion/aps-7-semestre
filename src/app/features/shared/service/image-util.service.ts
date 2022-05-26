import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUtilService {

  constructor() {
  }

  public dataUriToBlob(dataUri): Blob {
    const byteString = atob(dataUri.split(',')[1]);
    const mimeString = byteString.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
  }
}
