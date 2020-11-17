import { Component, OnInit } from '@angular/core';
import { CartService } from '../di';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.cartService.calculateTotal())
  }

}
