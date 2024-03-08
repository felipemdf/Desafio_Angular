import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate'
})
export class FormatDatPipe implements PipeTransform {
  transform(value: string | undefined): string | null{

    if(!value) return null;
    
    const datePipe = new DatePipe('en-US');
    const date = new Date(value);

    return datePipe.transform(date, 'dd-MM-yyyy');
  }
}
