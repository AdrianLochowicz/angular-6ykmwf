import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komunikat',
  templateUrl: './komunikat.component.html',
  styleUrls: ['./komunikat.component.css']
})
export class KomunikatComponent implements OnInit {
name = 'lab3';
@input() komunikcik: any[];

  constructor() { }

  ngOnInit() { }

}
