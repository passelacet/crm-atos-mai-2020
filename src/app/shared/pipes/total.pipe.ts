import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if (value) {
      if (args.length > 0){
        /* if(args[0] == 'ttcClient'){
          return value.totalTtc();
        } */
        return value.totalTtc();
      }
      return value.totalHt();
    }
    return null;
  }

}
