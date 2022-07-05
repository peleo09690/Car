import { CommonModule } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from './guards';
import { JsonTokenWebInterceptor } from './injectors';
import { LanguageService } from './services/cache/languague.service';
import { IconService } from './services/icon/icon.service';
import { LocalizationService } from './services/localization/localization.service';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [CommonModule]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('The CoreModule has been already created');
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuard,
        LocalizationService,
        LanguageService,
        IconService,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }).providers!,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonTokenWebInterceptor,
          multi: true
        }
      ]
    };
  }
}
