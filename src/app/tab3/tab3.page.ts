import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NavController, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab3Page {
  username!: string;
  password!: string;
  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.navCtrl.navigateForward('tabs/welcome');
    } else {
      this.showAlert('Login ou senha inválidos!');
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Erro',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}
}
