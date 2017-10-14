import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  private source: string;
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    this.source = 'https://www.youtube.com/embed/' + url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.source);
  }
}
