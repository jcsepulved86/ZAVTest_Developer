import { Title } from '@angular/platform-browser';

export interface Game {
    id?: number,
    nombre?: string,
    mail?: string,
    phone?: string,
    motivo?: string,
    comentarios?: string,
    created_at?: Date
};