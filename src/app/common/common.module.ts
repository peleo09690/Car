import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from './angular-material.module';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DialogSeachComponent } from './components/dialog-seach/dialog-seach.component';
import { GroupSearchComponent } from './components/group-search/group-search.component';
import { DateTimeformat2Pipe, DateTimeformat3Pipe, DateTimeformatPipe, DateTimeUtc2LocalFormat, DateTimeUtcFormat } from './pipe/date-time-format.pipe';
import { CurrencyFormatPipe, DecimalFormatPipe, TooltipListPipe } from './pipe/string-format.pipe';

const CommonComponents = [
  DatatableComponent,
  GroupSearchComponent,
  DialogSeachComponent
];

const CustomPipes = [
  DateTimeformatPipe,
  DateTimeformat2Pipe,
  DateTimeformat3Pipe,
  DateTimeUtcFormat,
  DateTimeUtc2LocalFormat,
  TooltipListPipe,
  DecimalFormatPipe,
  CurrencyFormatPipe
];


@NgModule({
  declarations: [
    ...CommonComponents,
    ...CustomPipes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    ...CommonComponents,
    ...CustomPipes,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class CommonAppModule {
  public static forRoot(): ModuleWithProviders<CommonAppModule> {
    return {
      ngModule: CommonAppModule,
      providers: [
        /* ALL SERVICES HERE! */
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always', appearance: 'outline' } },
        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }

      ]
    };
  }
}
