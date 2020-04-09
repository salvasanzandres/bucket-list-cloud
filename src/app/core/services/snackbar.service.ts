import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export enum MESSAGE_TYPE {error, information}

export class Message {
    constructor(public message: string, public type: MESSAGE_TYPE = MESSAGE_TYPE.information) {}
}

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    public message$: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);
    constructor() {
    }

    publishMessage(message: Message, duration = 2000) {
        this.message$.next(message);
        setTimeout(() => {
            this.message$.next(null);
            }, duration);
    }

}
