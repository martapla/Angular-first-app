import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  //template:"<p>Child</p>", //Componente  creado Inline
  styleUrls: ['./child.component.css'],
  // styles:["p{color:violet};"] // Componente  creado Inline
})
  

export class ChildComponent implements OnInit{
  name = " Ann";
  age = 4;

  onSave(value:String) {
   
  }
  
  constructor() { }
  ngOnInit(): void {
    
  }
}
