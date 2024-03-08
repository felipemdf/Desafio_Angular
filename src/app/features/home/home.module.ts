import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class HomeModule {}
