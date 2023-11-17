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
