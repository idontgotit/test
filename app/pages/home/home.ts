import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage, LocalStorage} from 'ionic-angular';

import {ListsPage} from "../lists/lists";


@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    username: string;
    password: string;
    local: Storage;
    navControl: NavController;

    constructor(private navController: NavController) {

        this.local = new Storage(LocalStorage);
        this.navControl = navController;
    };
    changePage() {
        this.navControl.push(ListsPage);
    }

    save() {
        this.username;
        this.password;

        this.local.set('user', this.username);
        this.local.set('pass', this.password);
    };
    load() {
        this.local.get('user').then((value) => {
            if (value == null)
                this.username = ""
            else
                this.username = value
        })

        this.local.get('pass').then((value) => {
            if (value == null)
                this.password = ""
            else
                this.password = value;
        })

    };
}
