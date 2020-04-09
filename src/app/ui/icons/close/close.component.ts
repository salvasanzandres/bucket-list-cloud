import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-close',
    templateUrl: './close.component.html',
    styleUrls: ['./close.component.scss']
})
export class CloseComponent implements OnInit {

    @Output() clickEvent: EventEmitter<boolean> = new EventEmitter();
    constructor() {
    }

    ngOnInit(): void {
    }

    emitClickEvent() {
        this.clickEvent.emit(true);
    }

}
