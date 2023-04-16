import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab2Page {
  handlerMessage = '';
  roleMessage = '';
  email = '';
  telefone = '';
  constructor(public alertController: AlertController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Informe seus dados',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
        },
        {
          name: 'telefone',
          type: 'tel',
          placeholder: 'Telefone',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar',
          handler: (data) => {
            this.email = data.email;
            this.telefone = data.telefone;
          },
        },
      ],
    });

    await alert.present();
  }
}
