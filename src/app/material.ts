import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule ],
  exports: [ MatButtonModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule ]
})

export class MaterialModule {

}