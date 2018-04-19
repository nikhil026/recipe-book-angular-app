<<<<<<< HEAD
import {NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
declarations:[HeaderComponent,HomeComponent],
imports:[SharedModule,
         AppRoutingModule],
exports :[
            AppRoutingModule,
            HeaderComponent
],
providers:[ShoppingListService, RecipeService,DataStorageService, AuthService]
})
export class CoreModule{

}
=======
import {NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
declarations:[HeaderComponent,HomeComponent],
imports:[SharedModule,
         AppRoutingModule],
exports :[
            AppRoutingModule,
            HeaderComponent
],
providers:[ShoppingListService, RecipeService,DataStorageService, AuthService]
})
export class CoreModule{

}
>>>>>>> a65aeda3b6158854d52c655a7025d795932dfb41
