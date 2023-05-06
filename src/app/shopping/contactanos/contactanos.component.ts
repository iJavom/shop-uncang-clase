import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contactanos } from 'src/app/shared/model/contactanos.model';
import { Map, marker, popup, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  myForm! : FormGroup;
  contactanos! : Contactanos
  constructor(private fb: FormBuilder) {

    //Forma 2 con formBuilder

    this.myForm = this.fb.group ({
      nombre: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefono: [''],
      motivo: ['Una prueba para inicializar un valor']
    })
  }

  ngOnInit(): void {
    var map = new Map('map').setView([7.11358, -73.11424], 19);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    marker([7.11320, -73.11426]).addTo(map)
    popup()
    .setLatLng([7.11320, -73.11426])
    .setContent("Av. Gonzalez Valencia Clz #52-69 piso 1, Sotomayor, Bucaramanga, Santander")
    .openOn(map);
  }
  
  enviar(){
    if(this.myForm.status == 'VALID'){
      this.contactanos = this.myForm.value;
      //EN CASO DE QUE TENGAMOS UN SERVICES PODRIAMOS USARLO ACA . Por Ejemplo:
      // this._contactanosServices.guardarContactanos(this.contactanos).subscribe(
      //   ()=>{
      //   }
      // );
    }else{
      console.log('Formulario invalido');
    }
  }

  // Fallaron las pruebas :(
  // onMapClick(e:any) {
  //   debugger;
  //   alert("You clicked the map at " + e.altitudeAngle.toString());
  // }

  nombre(){
    return this.myForm.value.nombre;
  }

  telefono(){
    return this.myForm.value.telefono;
    //return this.myForm?.get('telefono')!.value;//Forma prof en su proy
  }

  email(){
    return this.myForm.value.email;
  }

  motivo(){
    return this.myForm.value.motivo;
  }


}
