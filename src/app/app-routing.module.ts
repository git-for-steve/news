import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-history', component: SearchHistoryComponent },
  { path: '**', component: HomeComponent },  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
