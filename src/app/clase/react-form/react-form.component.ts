import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  juanElFormulario! : FormGroup;
  constructor(private fbuild:FormBuilder) { 
    this.juanElFormulario = this.fbuild.group({
      inputEjemplo :['Inicio con este valor', [Validators.required]]
    })

  }

  ngOnInit(): void {

  }

}
