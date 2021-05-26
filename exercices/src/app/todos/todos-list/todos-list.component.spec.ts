import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodosListComponent } from './todos-list.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosListComponent, TodoItemComponent],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show its todos input correctly', () => {
    component.todos = ['A', 'B', 'C'];
    fixture.detectChanges();

    const hostEl: HTMLElement = fixture.nativeElement;
    const todoItemEls = hostEl.querySelectorAll('app-todo-item');
    expect(todoItemEls.length).toBe(3);
    expect(todoItemEls[0].textContent).toContain('A');
  });
});
