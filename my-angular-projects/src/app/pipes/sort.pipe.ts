import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], sortBy: 'asc' | 'desc' = 'asc') {
    const sortArr = [...value];
    sortArr.sort((a,b) => {
      if(sortBy === 'asc') {
        return a > b ? 1 : -1;
      }
      return a > b ? -1 : 1;
    });
    return sortArr;
  }

}
