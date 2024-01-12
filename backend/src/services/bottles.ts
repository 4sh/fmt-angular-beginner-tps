import {JSONSyncPreset} from 'lowdb/node';
import crypto from 'crypto';

export enum Color {
    RED = 'RED',
    ROSE = 'ROSE',
    WHITE = 'WHITE'
}

export type Bottle = {
    id?: string;
    estate: string;
    vintage: number,
    color: Color;
    stickerUrl?: string;
}

const bottles = JSONSyncPreset<Bottle[]>('db/bottles.json', []);

const startupConsistencyChecks: string[] = [];
bottles.data.forEach((b, index) => {
    if (bottles.data.filter(bottle => bottle.id === b.id).length > 1) {
        startupConsistencyChecks.push(`startup checks - error - duplicated ID: ${b.id}`);
    }
});
if (startupConsistencyChecks.length > 0) {
    throw new Error(startupConsistencyChecks.join('\n'));
}

function getBottleIndex(bottle: Bottle) {
    if (bottle.id) {
        return getBottleIndexFromId(bottle.id);
    } else {
        return -1;
    }
}

function getBottleIndexFromId(id: string) {
    return bottles.data.findIndex(b => b.id === id);
}

function generateBottleId(): string {
    const randomId = crypto.randomUUID();
    if (getBottleIndexFromId(randomId) < 0) {
        return randomId;
    }
    return generateBottleId();
}

export function getManyBottles(): Bottle[] {
    return bottles.data;
}

export function getOneBottleById(id: string) {
    return bottles.data.find((b: Bottle) => b.id === id);
}

export function createBottle(bottle: Bottle) {
    if (bottle.id) {
        throw new Error(`${bottle.id} - ID MUST BE NULL`);
    }
    bottle.id = generateBottleId();
    bottles.data.push(bottle);
    bottles.write();
    return bottle;
}

export function updateBottle(bottle: Bottle) {
    const index = getBottleIndex(bottle);
    if (index >= 0) {
        bottles.data[index] = bottle;
        bottles.write();
        return bottle;
    } else {
        throw new Error(`${bottle.id} - NOT FOUND`);
    }
}

export function deleteBottle(id: string) {
    const index = getBottleIndexFromId(id);
    if (index >= 0) {
        const bottle = bottles.data[index];
        bottles.data.splice(index, 1);
        bottles.write();
        return bottle;
    } else {
        throw new Error(`${id} - NOT FOUND`);
    }
}
