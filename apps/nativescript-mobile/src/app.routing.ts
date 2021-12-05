// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';
import { CategoryComponent } from './category/category-list.component';

// app
import { SharedModule } from './features/shared/shared.module';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:category_id', component: ProductComponent },
]

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
