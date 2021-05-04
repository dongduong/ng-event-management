import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2021',
        time: '10:00 am',
        price: '342.99',
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '65 Huong Lo St',
            city: 'Nha Trang',
            country: 'Vietnam'
        }
    }
}