import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeRoutingModule } from './home/home.routing.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmYO1nfXEKwBDkGBSOr-bpqyKvOFRR2N4'
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

