import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { UserService } from '../user.service';
import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      // providers: [
      //   {
      //     provide: UserService,
      //     useValue: {
      //       getList$() {
      //         return of([]);
      //       }
      //     }
      //   }
      // ],
      imports: [RouterTestingModule, HttpClientTestingModule, TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show users from http request', () => {
    const httpController = TestBed.inject(HttpTestingController);

    const req = httpController.expectOne('https://jsonplaceholder.typicode.com/users');

    req.flush([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
    ]);

    fixture.detectChanges();

    const hostEl: HTMLElement = fixture.nativeElement;
    const itemEls = hostEl.querySelectorAll('.list-group-item-action');

    expect(itemEls.length).toBe(3);

    httpController.verify();
  });
});
