import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CISales } from "./models";

const SALES_CDB: CISales[] = [
    {
        id: 1,
        careers: "Sales",
        buyer: {
            id: 1,
            nombre: "Agustin",
            apellido: "Wirz",
            email: "agustin-96@live.com.ar",
            role: 'admin',
            createdAt: new Date()
        }
    }
]

@Injectable({ providedIn: 'root'})

export class CareersSalesService {

    getSales(): Observable<CISales[]> {
        return of()
    }

    createSales() {}

    updateSales() {}

    deleteSales() {}

}