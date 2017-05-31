import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {NewTabsPage} from "../newTabs/newTabs";
import {TabsPage} from "../tabs/tabs";


@Component({
    templateUrl: 'build/pages/lists/lists.html'
})
export class ListsPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    constructor(private nav: NavController, navParams: NavParams) {
        this.selectedItem = navParams.get('item');
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item number ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    itemTapped(event, item) {

        this.nav.push(NewTabsPage, {
            item: item
        });
    }

    add() {
        debugger;
    }

}
