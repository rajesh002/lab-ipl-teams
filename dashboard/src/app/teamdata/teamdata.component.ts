import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamdata',
  templateUrl: './teamdata.component.html',
  styleUrls: ['./teamdata.component.css'],
})
export class TeamdataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teamName: String[] = [
    'Chennai super kings',
    'mumbai indians',
    'Delhi capitals',
    'Royal Challengers Banglore',
    'kolkata knight Riders',
    'kings xl punjab',
  ];
  phoneNumbers: String[] = [
    '9876543210',
    '9876567893',
    '9874567893',
    '9123456780',
    '9435673210',
    '9765804320',
  ];
  links: String[] = [
    'https://www.chennaisuperkings.com/',
    'https://www.mumbaiindians.com/',
    'https://www.dehlicapitals.in/',
    'https://www.royalchallegers.com/',
    'https://www.kkr.in/',
    'https://www.kxip.in/',
  ];
  images: String[] = [
    '../../assets/csk.png',
    '../../assets/MI.png',
    '../../assets/Delhi.png',
    '../../assets/RCB.png',
    '../../assets/KKR.png',
    '../../assets/KXI.png',
    '',
  ];
}
