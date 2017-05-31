import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {DetailsPage} from "../details/details";
import {ContactPage} from '../contact/contact';
import {NavController, NavParams} from 'ionic-angular';


@Component({
    templateUrl: 'build/pages/newTabs/newTabs.html'
})
export class NewTabsPage {

    private tab1Root: any;
    private tab2Root: any;
    selectedItem: any;
    fooId: any;


    constructor(private navController: NavController, navParams: NavParams) {

        this.selectedItem = navParams.get('item');

        this.tab1Root = DetailsPage;
        this.tab2Root = AboutPage;


    }
}
