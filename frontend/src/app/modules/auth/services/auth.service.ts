import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {Session, UserIdentity} from '../models/session.model';

export type OptionalUserIdentity = UserIdentity | undefined;
const sessionStorageKey = '_winecellar.io_session_id_';

@Injectable({
    providedIn: `root`
})
export class AuthService {
    private currentUserIdentity = new BehaviorSubject<OptionalUserIdentity>(undefined);

    constructor(private httpClient: HttpClient) {
    }

    public get currentSession(): Session | undefined {
        const storedItem = localStorage.getItem(sessionStorageKey);
        if (storedItem) {
            const currentSession: Session = JSON.parse(storedItem);
            this.currentUserIdentity.next(currentSession.userIdentity);
            return currentSession;
        } else {
            this.currentUserIdentity.next(undefined);
            return undefined;
        }
    }

    public set currentSession(session: Session | undefined) {
        if (session) {
            this.currentUserIdentity.next(session.userIdentity);
            localStorage.setItem(sessionStorageKey, JSON.stringify(session));
        } else {
            this.currentUserIdentity.next(undefined);
            localStorage.removeItem(sessionStorageKey);
        }
    }

    public getCurrentUserIdentity(): Observable<OptionalUserIdentity> {
        return this.currentUserIdentity.asObservable();
    }

    public login(login: string, password: string): Observable<UserIdentity> {
        return this.httpClient
            .post<Session>('/api/public/session', {login, password})
            .pipe(
                tap(session => this.currentSession = session),
                map(session => session.userIdentity),
            );
    }

    public logout(): Observable<UserIdentity> {
        return this.httpClient
            .delete<Session>('/api/private/session/current')
            .pipe(
                map(session => session.userIdentity),
                tap(() => this.currentSession = undefined)
            );
    }
}
