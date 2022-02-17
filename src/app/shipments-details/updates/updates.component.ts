import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updates = [
    {
      content:'Hi, Archana attached BL  drafts & Shippers copy docs for your ref .Please advice any changes required ',
      time:"08:32 Sun 26 Apr'22"
    },
    {
      content:'Hi, Ramesh attached BL  drafts & Shippers copy docs for your ref .Please advice any changes required ',
      time:"08:32 Sun 26 Apr'22"
    },
    {
      content:'Hi, Rakesh attached BL  drafts & Shippers copy docs for your ref .Please advice any changes required ',
      time:"08:32 Sun 26 Apr'22"
    },
    {
      content:'Hi, Deep attached BL  drafts & Shippers copy docs for your ref .Please advice any changes required ',
      time:"08:32 Sun 26 Apr'22"
    },
    {
      content:'Hi, John attached BL  drafts & Shippers copy docs for your ref .Please advice any changes required ',
      time:"08:32 Sun 26 Apr'22"
    },
    {
      content:'Hi, Ram attached BL  drafts & Shippers copy docs for your ref .Please advice any changes required ',
      time:"08:32 Sun 26 Apr'22"
    }
  ]

}
