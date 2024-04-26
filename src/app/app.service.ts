import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
sendQuery(data: any){
    return this.http.post("http://testologia.site/intensive-price" , data);
}
getData(categore:any){
  return this.http.get('https://testologia.site/intensive-data', {params: {category: category}});

}
}
