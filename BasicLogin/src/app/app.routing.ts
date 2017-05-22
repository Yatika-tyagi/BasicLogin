import { AppComponent } from './app.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';
import { RouterModule,Routes} from '@angular/router';
 
const route:Routes=[
    
     {path : 'facebook', component : FacebookComponent},
     {path : 'twitter', component : TwitterComponent},
 ];
 
 export const appRouting = RouterModule.forRoot(route);