import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconRegistry } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';




const material =[

  CommonModule, 
  MatButtonModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatListModule, 
  MatDividerModule, 
  MatCardModule, 
  MatButtonToggleModule, 
  MatBadgeModule,
  MatTabsModule, 
  MatChipsModule, 
  MatFormFieldModule, 
  MatDatepickerModule, 
  MatExpansionModule , 
  MatInputModule

  // MatIconRegistry  ,


]

@NgModule({
  declarations: [],
  imports: [
      material
  ], 
  exports: [
      material
    
  ]
})
export class MatModule { }
