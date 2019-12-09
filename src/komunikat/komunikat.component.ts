import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-komunikat',
  templateUrl: './komunikat.component.html',
  styleUrls: ['./komunikat.component.css']
})
export class KomunikatComponent implements OnInit {
<<<<<<< HEAD

  @Input() komunikaciki: any[];
=======
name = 'lab3';
@input() komunikcik: any[];
>>>>>>> ff92a2cefc2798116f220b7b42008ba69d637e0a

  constructor() { }

  ngOnInit() { }

}