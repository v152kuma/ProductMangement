import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {IProduct} from '../../products/product'
import {catchError,tap} from 'rxjs/operators';


@Injectable({
    providedIn : 'root'
})
export class ProductService {

    private productUrl = '/api/products/products.json';

    constructor (private http: HttpClient){}
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse)
    {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
        {
            //Client side error
            errorMessage = `An error occured : ${err.error.message}`
        }
        else {
             //Server side error
             errorMessage = `Server returned code: ${err.status} , error message is: ${err.message}`
        }

        console.log(errorMessage);
        return throwError(errorMessage);

    }
}