import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer = new Developer(
    "Kukrapk",
    "de la Vega",
    56566,
    "Ne se prononce pas",
    "Je possède une jambe en Patrick Duffy",
    [
      new Skill('Massue', "", "3,50 m de haut"),
    ])

  constructor() { }

  ngOnInit(): void {
  }

}
