import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ns-category',
  styleUrls: ['./category-list.component.css'],
  templateUrl: './category-list.component.html',
})
export class CategoryComponent implements OnInit {

  items;
  constructor(private route: ActivatedRoute, private categoryService:CategoryService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.categoryService.getCategory().subscribe(
      (data) => {
      this.items = data;
      console.log('data', data)
    },
    error => console.log('error', error) )
  }
}
