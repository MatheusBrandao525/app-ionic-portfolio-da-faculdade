import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class WelcomePage {
  username!: string;

  constructor(private navCtrl: NavController) {
    this.username = 'admin';
  }

  logout() {
    this.navCtrl.navigateBack('/login');
  }
}
