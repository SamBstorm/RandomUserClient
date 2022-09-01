import { DetailsComponent } from './components/RandomUser/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserAPiResolver } from './resolvers/random-user-api.resolver';

const routes: Routes = [
  {path:"", redirectTo:"random-details", pathMatch:"full"},
  {path:"random-details", component:DetailsComponent, resolve: {randomUser : RandomUserAPiResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
