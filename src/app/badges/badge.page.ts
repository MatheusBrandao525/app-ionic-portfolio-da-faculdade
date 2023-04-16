import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class BadgePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
