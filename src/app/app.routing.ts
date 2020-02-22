// importar los modulos de touter de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes a los que le quiero hacer una pagina excusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';

//array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-prueba', component: PaginaComponent},
    {path: 'pagina-prueba/:nombre', component: PaginaComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);