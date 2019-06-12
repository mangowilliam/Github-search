
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(created_at: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date()
    var dateDifference = Math.ceil(created_at - todayWithNoTime)// returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1 && created_at > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
