import { Component, Input } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px }
        .pad-left { margin-left: 10px }
        .well div { color: #bbb }
    `]
})
export class EventThumbnailComponent{
    @Input() event: IEvent

    getStartTimeClass(){
        if (this.event && this.event.time === '8:00 am')
            return 'green bold'
        return ''
    }
}