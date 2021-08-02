import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appointments: any[] = [];

  constructor() {
    this.setAppointments(true);
  }

  schedulerUsers = [
    {
      text: 'User 1',
      id: 1
    },{
      text: 'User 2',
      id: 2
    }
  ]

  setAppointments(i: boolean | undefined) {
    let appointments: any[] = [
      {
        text: 'Test 1',
        startDate: new Date("2021-08-02T09:00:00.000Z"),
        endDate: new Date("2021-08-02T10:00:00.000Z"),
        user: 1,
        allDay: false
      },
      {
        text: 'Test 2',
        startDate: new Date("2021-08-02T13:00:00.000Z"),
        endDate: new Date("2021-08-02T14:00:00.000Z"),
        user: 1,
        allDay: false
      }
    ];

    if(i) {
      appointments.push({
          text: 'Test All Day',
          startDate: new Date("2021-08-02T00:00:00.000Z"),
          endDate: new Date("2021-08-02T20:00:00.000Z"),
          allDay: true,
          user: 1
        });
    } else {
      appointments.push({
        text: 'Test Not All Day',
        startDate: new Date("2021-08-02T00:00:00.000Z"),
        endDate: new Date("2021-08-02T20:00:00.000Z"),
        allDay: false,
        user: 1
      });
    }

    this.appointments = appointments;
  }
}
