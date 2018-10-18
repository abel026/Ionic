import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'dashboardTabs', loadChildren: './dashboard-tabs/dashboard-tabs.module#DashboardTabsPageModule' },
  { path: 'dashboardTabs', loadChildren: './dashboard-tabs/dashboard-tabs.module#DashboardTabsPageModule' },
  { path: 'listsTabs', loadChildren: './lists-tabs/lists-tabs.module#ListsTabsPageModule' },
  { path: 'noTabs', loadChildren: './no-tabs/no-tabs.module#NoTabsPageModule' }

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
