import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true,
})
export class TitlePipe implements PipeTransform {
  transform(name: string, gender: string): string | null {
    if (gender.toLowerCase() == 'male') {
      return 'Mr. ' + name;
    } else if (gender.toLowerCase() == 'female') {
      return 'Ms. ' + name;
    }
    return null; // Default return statement
  }
}
