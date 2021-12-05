import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { CategoryComponent } from './category/category-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [CoreModule, SharedModule, AppRoutingModule, NativeScriptHttpClientModule],
  declarations: [AppComponent, CategoryComponent, ProductComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
