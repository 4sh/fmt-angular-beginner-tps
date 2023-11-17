import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bottle} from '../models/bottle.model';
import {Stats} from '../models/stats.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CellarService {
    constructor(private httpClient: HttpClient) {
    }

    public getManyBottles(): Observable<Bottle[]> {
        return this.httpClient
            .get<Bottle[]>('/api/private/bottle');
    }

    public getOneBottleById(id: string): Observable<Bottle> {
        return this.httpClient
            .get<Bottle>(`/api/private/bottle/${id}`);
    }

    public createOneBottle(bottle: Bottle): Observable<Bottle> {
        return this.httpClient
            .post<Bottle>(`/api/private/bottle`, bottle);
    }

    public updateOneBottle(bottle: Bottle): Observable<Bottle> {
        return this.httpClient
            .put<Bottle>(`/api/private/bottle/${bottle.id}`, bottle);
    }

    public getStats(): Observable<Stats> {
        return this.httpClient
            .get<Stats>(`/api/private/stats`);
    }
}
