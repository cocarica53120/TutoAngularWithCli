import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing',
})
export class TitleCasingPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return null;
    }
    const words = value.split(' ');
    console.log(words);
    const result = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    console.log('result', result);

    return result;
  }
}
