import { Component } from '@angular/core';
import { Response} from '@angular/http';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers:[DataStorageService]
})
export class HeaderComponent {
constructor(
            private dataStorageService : DataStorageService,
            private recipeService: RecipeService,
            private authService:AuthService){}
onSaveRecipes(){
this.dataStorageService.storeRecipes()
.subscribe(
(response:Response)=>console.log(response)
);
}


onFetchRecipes(){
this.dataStorageService.getRecipes()
;

}
onLogout(){
  this.authService.logout();
}
}
