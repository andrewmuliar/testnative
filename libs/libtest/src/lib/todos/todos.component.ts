import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-todos',
  templateUrl: './todos.component.web.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  ngOnInit(): void {
    alert('hello');
  }

}
