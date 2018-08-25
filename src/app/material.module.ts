import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

const exports = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule
]
const imports = exports;

@NgModule({ imports, exports })
export class MyOwnCustomMaterialModule { }
