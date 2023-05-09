import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
  styleUrls: ['./dependencias.component.css']
})
export class DependenciasComponent implements OnInit {
  title = 'ng2-charts-demo';


  public lineChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
    ],
    datasets: [
      {
        data: [ 80,80,80,80,80,80,80 ],
        label: 'Porcentaje de dulces',
        borderColor: '#ff0000',
        backgroundColor: '#00ff0066'
      },
      {
        data: [ 60,30,90,50,75,96 ],
        label: 'Porcentaje de salado',
      }
    ]
  };

  public lineChartOptions: ChartOptions<'bar'> = {
    responsive: false
  };
  public lineChartLegend = true;
  
  constructor() {

   }

  ngOnInit(): void {
  }

}
