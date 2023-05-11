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
  age = 6;

  // Button submit course function
  onSave(value:String) {
  }

  //    Binding Property : Payment Done   //
  paid = false;

  // Event Binding  //
  setcoursePaid() {
    alert ("Course has been paid correctly")
  }



  
  constructor() { }
  ngOnInit(): void {
    
  }
}
