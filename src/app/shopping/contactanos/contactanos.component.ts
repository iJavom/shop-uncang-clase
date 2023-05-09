import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contactanos } from 'src/app/shared/model/contactanos.model';
import { LatLngTuple, Map, marker, popup, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  myForm! : FormGroup;
  contactanos! : Contactanos;

  contadorDeClicks:number = 0;
  cordenadas : LatLngTuple[][] = [];
  map! : Map ;

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
    this.map = new Map('map').setView([7.11358, -73.11424], 19);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    marker([7.11320, -73.11426]).addTo(this.map);

    popup()
    .setLatLng([7.11320, -73.11426])
    .setContent("Av. Gonzalez Valencia Clz #52-69 piso 1, Sotomayor, Bucaramanga, Santander")
    .openOn(this.map);


    this.map.on('click', this.onMapClick);
  }
  
  enviar(){
    debugger;
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


  onMapClick(e:any){
    const cordenadaActual :LatLngTuple  = [e.latlng.lat,e.latlng.lng];
    marker(cordenadaActual).addTo(this.map);
  }


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
