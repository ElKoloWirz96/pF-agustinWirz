import { Injectable } from '@angular/core';
import { IProduct } from '../../layouts/dashboard/pages/products/models';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  
  getProducts (): IProduct[] {
    return [
      {
        id: 1,
        career: 'Angular',
        price: 20000,
        details: 'Angular, AngularMaterial, Angular CLI, Typescript, Servicios, Base de datos, etc.'
      },
      {
        id: 2,
        career: 'NodeJS',
        price: 25000,
        details: 'NodeJS, Express, MongoDB, Typescript, Servicios, Base de datos, etc.'
      },
      {
          id: 3,
          career: 'ReactJS',
          price: 18000,
          details: 'ReactJS, React  Router, Redux, Typescript, Servicios, Base de datos, etc.'
      },
      {
        id: 4,
        career: 'VueJS',
        price: 22000,
        details: 'VueJS, Vue Router, Vuex, Typescript, Servicios, Base de datos, etc.'
      },
      {
        id: 5,
        career: 'JavaScript',
        price: 25000,
        details: "JavaScript, TypeScript, Servicios, Base de datos, etc."
      }
    ]
  }
  
}
