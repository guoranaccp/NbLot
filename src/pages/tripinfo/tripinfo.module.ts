import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripinfoPage } from './tripinfo';

@NgModule({
  declarations: [
    TripinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TripinfoPage),
  ],
})
export class TripinfoPageModule {}
