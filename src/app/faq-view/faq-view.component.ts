import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { response } from 'express';

@Component({
  selector: 'app-faq-view',
  imports: [],
  templateUrl: './faq-view.component.html',
  styleUrl: './faq-view.component.scss'
})
export class FaqViewComponent {
  faqs:Array<any>=[];
  constructor(private httpClient:HttpClient){
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(res=>this.faqs=res);
  };

}
