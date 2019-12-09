import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-komunikat',
  templateUrl: './komunikat.component.html',
  styleUrls: ['./komunikat.component.css']
})
export class KomunikatComponent implements OnInit {

  @Input() komunikaciki: any[];

  constructor() { }

  ngOnInit() { }

}