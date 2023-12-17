import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [
{path:'',component:HomeComponent},
  
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'register',
          component: RegisterComponent,
        },
      ],
    },
    {path:'pages',
  children:[

    {path:'choice',component:ChoiceComponent}
  ]
  
  
  },
  {path:'livraison',component:LivraisonComponent},

  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
