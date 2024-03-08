import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { FormatDatePipe } from 'src/app/shared/pipes/formatDate.pipe';

@NgModule({
  declarations: [DetailsComponent, FormatDatePipe],
  imports: [CommonModule, RouterModule],
})
export class DetailsModule {}
