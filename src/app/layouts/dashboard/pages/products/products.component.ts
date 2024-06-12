import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../../../core/service/productos-service.service';
import { IProduct } from './models';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'career',
    'price',
    'details',
    'actions'
  ];

  products: IProduct[] = [];

  runReloj() {
    const obs = new Observable((observer) => {
      observer.error('Error al cargar')

      setTimeout(() => {
        observer.next(new Date());

      })
      
    });
    obs.subscribe({
      next: (resultado) => {
        console.log(resultado);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('El reloj dejo de emitir valores');
      },
    })
  }

  constructor(private productsService: ProductosServiceService) {
    this.obtenerResultado();
    this.runReloj();
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  async obtenerResultado() {
    const cargadoColumna = new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });

    await cargadoColumna.then((_resultado) => {});
  }
}
