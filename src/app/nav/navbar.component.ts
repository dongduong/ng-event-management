import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './narbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
    `]
})
export class NarBarComponent {

}