import {Component, ViewChild} from '@angular/core';
import {DayPilot} from "daypilot-pro-angular";

@Component({
  selector: 'scheduler-component',
  template: `
  <div class="body">
    <h1>Scheduler</h1>
    <daypilot-scheduler [config]="config" [events]="events" #scheduler1></daypilot-scheduler>
  </div>
  `,
  styles: [`
  .body {
    padding: 10px;
  }
  `]
})
export class SchedulerComponent {

  @ViewChild("scheduler1")
  scheduler: DayPilot.Angular.Scheduler;

  events: any;

  config: any = {
    timeHeaders : [
      {groupBy: "Month", format: "MMMM yyyy"},
      {groupBy: "Day", format: "d"}
    ],
    days: 30,
    startDate: "2016-11-01",
    scale: "Day"
  };

}
