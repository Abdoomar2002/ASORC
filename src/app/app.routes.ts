import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  {
    path: 'about',
    children: [
      { path: 'at-a-glance', loadComponent: () => import('./about/at-a-glance/at-a-glance.component').then(m => m.AtAGlanceComponent) },
      { path: 'history', loadComponent: () => import('./about/history/history.component').then(m => m.HistoryComponent) },
      { path: 'strategy', loadComponent: () => import('./about/strategy/strategy.component').then(m => m.StrategyComponent) },
      { path: 'global-footprint', loadComponent: () => import('./about/global-footprint/global-footprint.component').then(m => m.GlobalFootprintComponent) },
      { path: 'brands', loadComponent: () => import('./about/brands/brands.component').then(m => m.BrandsComponent) },
      { path: 'leadership', loadComponent: () => import('./about/leadership/leadership.component').then(m => m.LeadershipComponent) },
      { path: '', redirectTo: 'at-a-glance', pathMatch: 'full' }
    ]
  },
  {
    path: 'services',
    children: [
      { path: 'construction', loadComponent: () => import('./services/construction/construction.component').then(m => m.ConstructionComponent) },
      { path: 'concessions', loadComponent: () => import('./services/concessions/concessions.component').then(m => m.ConcessionsComponent) },
      { path: 'om-facilities', loadComponent: () => import('./services/om-facilities/om-facilities.component').then(m => m.OMFacilitiesComponent) },
      { path: 'building-materials', loadComponent: () => import('./services/building-materials/building-materials.component').then(m => m.BuildingMaterialsComponent) },
      { path: 'equipment-services', loadComponent: () => import('./services/equipment-services/equipment-services.component').then(m => m.EquipmentServicesComponent) },
      { path: '', redirectTo: 'construction', pathMatch: 'full' }
    ]
  },
  { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'investors', loadComponent: () => import('./investors/investors.component').then(m => m.InvestorsComponent) },
  {
    path: 'sustainability',
    children: [
      { path: 'community', loadComponent: () => import('./sustainability/community/community.component').then(m => m.CommunityComponent) },
      { path: 'health-safety', loadComponent: () => import('./sustainability/health-safety/health-safety.component').then(m => m.HealthSafetyComponent) },
      { path: 'environment', loadComponent: () => import('./sustainability/environment/environment.component').then(m => m.EnvironmentComponent) },
      { path: 'safe-sites', loadComponent: () => import('./sustainability/safe-sites/safe-sites.component').then(m => m.SafeSitesComponent) },
      { path: '', redirectTo: 'community', pathMatch: 'full' }
    ]
  },
  { path: 'newsroom', loadComponent: () => import('./newsroom/newsroom.component').then(m => m.NewsroomComponent) },
  { path: 'careers', loadComponent: () => import('./careers/careers.component').then(m => m.CareersComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
