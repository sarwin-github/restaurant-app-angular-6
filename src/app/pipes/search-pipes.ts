import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'MenuFilter' })

export class SearchPipe implements PipeTransform {
    transform(list: any, args?: any): any {
        if(!list) return null;
        if(!args || args === "All") return list;

        args = args.toLowerCase();

        return list.filter((item) => JSON.stringify(item).toLowerCase().includes(args));
    }
}