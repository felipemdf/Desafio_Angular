import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { FormatDatPipe } from 'src/app/shared/pipes/formatDate.pipe';

@NgModule({
  declarations: [DetailsComponent,  FormatDatPipe],
  imports: [CommonModule, RouterModule],
})
export class DetailsModule {}
