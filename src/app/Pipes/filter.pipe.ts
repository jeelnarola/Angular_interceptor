import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,fieldName: string,serachvalue: any): any {
    if (!value || !Array.isArray(value)) {
      return value;
    }
    return value.filter(function(ele:any){
      return ele[fieldName].indexOf(serachvalue)> -1
    })
  }

}
