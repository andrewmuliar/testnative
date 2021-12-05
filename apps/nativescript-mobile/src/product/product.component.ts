import { PageRoute } from '@nativescript/angular';
import { Component, OnInit } from '@angular/core'
import { ProductService } from './product.service';

@Component({
    selector: 'ns-product',
    styleUrls: ['./product.component.css'],
    templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

    products;

    constructor(private productService:ProductService, private pageRoute:PageRoute) { }

    ngOnInit() {
        this.pageRoute.activatedRoute.subscribe( activatedRouter => {
            activatedRouter.paramMap.subscribe( paramMap =>
                {
                    console.log('params', paramMap)
                        this.productService.getProduct(paramMap.get('category_id')).subscribe( response => {
                            console.log('response', response);
                            this.products = response;
                        })
                })
        })
     }

}
