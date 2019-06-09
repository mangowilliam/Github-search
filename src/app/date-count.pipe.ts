
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(created: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.ceil(todayWithNoTime - created)// returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var timer = Math.ceil(dateDifferenceSeconds / secondsInADay);

    if (timer >= 1 && created < todayWithNoTime) {
      return timer;
    } else {
      return 0;
    }
  }
}
