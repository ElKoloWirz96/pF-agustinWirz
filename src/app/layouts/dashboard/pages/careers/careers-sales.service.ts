import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { CISales } from "./models";

export interface ICareer {}
  
  let SALES_CDB: CISales[] = [
    {
      id: 1,
      careers: {
        id: 1,
        career: 'FullStack Angular',
        details: 'FullStack Angular, Angular Material, Angular CLI, Typescript, Servicios, Base de datos, etc.',
        price: 20000,
        duration: '2 years'
      },
      buyer: {
        id: 1,
        nombre: "Agustin",
        apellido: "Wirz",
        email: "agustin-96@live.com.ar",
        role: 'admin',
        createdAt: new Date()
      },
    }
  ];

@Injectable({ providedIn: 'root'})

export class CareersSalesService {

    getSales(): Observable<CISales[]> {
        return of(SALES_CDB).pipe(delay(1000))
    }

    createSales(data: CISales): Observable<CISales[]> {

      if (data.buyer && data.careers && data.id) {
        const newSale: CISales = {
          id: data.id,
          careers: data.careers,
          buyer: data.buyer,
        };
        SALES_CDB.push(newSale);
        return of(SALES_CDB);
      }
      return of([]);
  }

     deleteSales(id: number): Observable<CISales[]> {
      SALES_CDB = SALES_CDB.filter((sale) => sale.id !== id);
      return of(SALES_CDB);
    }

      updateSales(id: number, data: CISales): Observable<CISales[]> {
      SALES_CDB = SALES_CDB.map((sale) => sale.id === id ? {...sale, ...data} : sale);
      return of(SALES_CDB);
    }
}