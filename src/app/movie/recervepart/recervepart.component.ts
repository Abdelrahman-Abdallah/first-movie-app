import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recervepart',
  templateUrl: './recervepart.component.html',
  styleUrls: ['./recervepart.component.css']
})
export class RecervepartComponent implements OnInit {
  @Input() movieid: string;
  constructor() { }

  ngOnInit() {
  }

}
