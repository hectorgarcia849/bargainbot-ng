import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule, MatPaginatorModule, MatRadioModule,
  MatSidenavModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HistogramComponent } from './graphs/histogram/histogram.component';
import {AdsService} from './services/ads.service';
import {AdsTableComponent} from './home/ads-container/ads-table/ads-table.component';
import {AdsContainerComponent} from './home/ads-container/ads-container.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    HistogramComponent,
    AdsContainerComponent,
    AdsTableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSidenavModule,
    MatSortModule,
    MatRadioModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
