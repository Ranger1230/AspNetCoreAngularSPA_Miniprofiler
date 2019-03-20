import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoadMiniprofilerService } from './load-miniprofiler.service';
import { MiniProfilerInterceptor } from './miniprofiler-interceptor';

const appInitializerFn = (loadMiniprofiler: LoadMiniprofilerService) => {
  return () => {
    return loadMiniprofiler.loadMiniprofiler();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    LoadMiniprofilerService,
    { provide: APP_INITIALIZER, useFactory: appInitializerFn, multi: true, deps: [LoadMiniprofilerService] },
    { provide: HTTP_INTERCEPTORS, useClass: MiniProfilerInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
