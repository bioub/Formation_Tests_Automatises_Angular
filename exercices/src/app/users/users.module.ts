import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { SharedModule } from '../shared/shared.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserService } from './user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';

// export function userServiceFactory(httpClient: HttpClient) {
//   return new UserService(httpClient, '/users');
// }

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
  ],
  declarations: [UsersListComponent, UserShowComponent, UserAddComponent],
  providers: [
    // {
    //   provide: UserService,
    //   useClass: UserService,
    // }
    // shorthand :
    // UserService

    // {
    //   provide: UserService,
    //   useClass: UserMemoryService,
    // },
    // {
    //   provide: UserService,
    //   useFactory: userServiceFactory
    // }
    // useValue (utile pour les tests)
    // {
    //   provide: UserService,
    //   useValue: {
    //     getList$() {
    //       return of([]);
    //     }
    //   }
    // }
    // useExisting
    // {
    //   provide: UserMemoryService,
    //   useClass: UserMemoryService,
    // },
    // {
    //   provide: UserService,
    //   useExisting: UserMemoryService,
    // }
  ]
})
export class UsersModule { }
