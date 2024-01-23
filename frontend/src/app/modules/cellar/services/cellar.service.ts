import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Bottle} from '../models/bottle.model';
import {Stats} from '../models/stats.model';
import {catchError, Observable, of, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CellarService {
    constructor(private httpClient: HttpClient) {
    }

    public getManyBottles(): Observable<Bottle[]> {
        return this.httpClient
            .get<Bottle[]>('/api/private/bottles');
    }

    public getOneBottleById(id: string): Observable<Bottle | undefined> {
        return this.httpClient
            .get<Bottle>(`/api/private/bottles/${id}`)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status === 404) {
                        return of(undefined);
                    }

                    return throwError(() => err);
                })
            );
    }

    public createOneBottle(bottle: Bottle): Observable<Bottle> {
        return this.httpClient
            .post<Bottle>(`/api/private/bottles`, bottle);
    }

    public updateOneBottle(bottle: Bottle): Observable<Bottle> {
        return this.httpClient
            .put<Bottle>(`/api/private/bottles/${bottle.id}`, bottle);
    }

    public getStats(): Observable<Stats> {
        return this.httpClient
            .get<Stats>(`/api/private/stats`);
    }
}
