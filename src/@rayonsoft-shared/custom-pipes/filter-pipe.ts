import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        console.log(items, value);
        if (!items) return [];
        if (!value) return items;

        return items.filter(singleItem =>
            singleItem['title'].toLowerCase().includes(value.toLowerCase())
        );
   
    }
}