import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByLikes'
})
export class OrderByLikesPipe implements PipeTransform {

  transform(value: any[], order: 'asc' | 'desc' = 'desc'): any[] {
    if (!Array.isArray(value)) return value;

    return value.sort((a, b) => {
      const likesA = a.likes ?? 0;
      const likesB = b.likes ?? 0;

      return order === 'asc' ? likesA - likesB : likesB - likesA;
    });
  }

}
