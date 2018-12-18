import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
	{path: '', 
	redirectTo:'home',
	pathMatch: 'full',
	},
	{path: 'signup', 
	component: SingupComponent,
	canActivate: [BeforeLoginService]
	},
	{path: 'login', 
	component: LoginComponent,
	canActivate: [BeforeLoginService]
	},
	{path: 'profile', 
	component: ProfileComponent,
	canActivate: [AfterLoginService]
	},
	{path: 'home', 
	component: HomeComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
