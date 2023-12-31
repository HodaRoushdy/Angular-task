import { SidebarModule } from 'ng-cdbangular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlOfTableComponent } from './control-of-table/control-of-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchAndFilterComponent } from './search-and-filter/search-and-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// import { I18NextModule } from 'angular-i18next';
// import { I18N_PROVIDERS } from './toi18next';
// import { DropdownBasicDemo } from './dropdown-basic-demo/dropdown-basic-demo.component';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { LefSideComponent } from './lef-side/lef-side.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    LefSideComponent,
    NavBarComponent,
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CardComponent,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    DragDropModule,
    CommonModule,
    A11yModule,
    CdkTableModule,
    CdkTableModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchAndFilterComponent,
    RouterModule.forRoot([]),
    HttpClientModule,
    ControlOfTableComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
 }
