import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return data;
    }

    searchTerm = searchTerm.toString();
    return data.filter(item => 
    item.name.toString().includes(searchTerm) || 
    item.email.toString().includes(searchTerm) || 
    item.phone.toString().includes(searchTerm) || 
    item.socialaccounts.toString().includes(searchTerm) );
  }
 
}


