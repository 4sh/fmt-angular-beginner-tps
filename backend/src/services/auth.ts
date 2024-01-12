import crypto from 'crypto';
import {JSONSyncPreset} from 'lowdb/node';

export type User = {
    identity: UserIdentity;
    credentials: UserCredentials;
}

export type UserIdentity = {
    firstName: string;
    lastName: string;
}

export type UserCredentials = {
    login: string;
    password: string;
}

export type Session = {
    id: string;
    userLogin: string;
    userIdentity: UserIdentity;
}

const users = JSONSyncPreset<User[]>('db/users.json', []);
const sessions = JSONSyncPreset<Session[]>('db/sessions.json', []);

const authenticator = (credentials: UserCredentials): User | undefined =>
    users.data.find(user => user.credentials.login === credentials.login &&
        user.credentials.password === credentials.password);

export class AuthenticationError implements Error {
    message: string = 'AUTHENTICATION ERROR';
    name: string = 'AuthenticationError';
    stack: string = '';
}

export function createSession(credentials: UserCredentials): Session {
    const user = authenticator(credentials);
    if (!user) {
        throw new AuthenticationError();
    } else {
        const existingSession = getSessionByUser(user);
        if (existingSession) {
            return existingSession;
        } else {
            const session: Session = {
                id: crypto.randomUUID(),
                userLogin: user.credentials.login,
                userIdentity: user.identity
            };
            sessions.data.push(session);
            sessions.write();
            return session;
        }
    }
}

export function getSessionById(id: string): Session | undefined {
    return sessions.data.find(session => session.id === id);
}

function getSessionByUser(user: User): Session | undefined {
    return sessions.data.find(session => session.userLogin === user.credentials.login);
}

export function deleteSession(session: Session): Session {
    const sessionIndex = sessions.data.findIndex(s => s.id === session.id);
    if (sessionIndex >= 0) {
        sessions.data.splice(sessionIndex, 1);
        sessions.write();
    }
    return session;
}
