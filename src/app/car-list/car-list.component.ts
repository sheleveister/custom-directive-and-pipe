import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: [
    './car-list.component.scss',
    '../../assets/bootstrap.css'
  ]
})
export class CarListComponent {

  public searchCar = '';

  public cars = [
    { name: 'Ford' },
    { name: 'Mazda' },
    { name: 'Bently' },
    { name: 'Audi' },
    { name: 'Mercedes' },
    { name: 'BMW' }
  ];

  public addCar() {
    this.cars.push({name: 'Lamborgini'});
  }

}
