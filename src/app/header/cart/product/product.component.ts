import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'course-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  public product;

  @Output()
  public remove = new EventEmitter();


  public removeProduct(product: ICartProduct) {
    this.remove.emit(product);
  }
}
