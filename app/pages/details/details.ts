import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/details/details.html'
})
export class DetailsPage {
    selectedItem: any;
    selected: string;

    constructor(private navController: NavController, navParams: NavParams) {

        this.selectedItem = navParams.data;
      
        this.selected = this.selectedItem.title;
    }
}
