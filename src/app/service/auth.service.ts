import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  readonly urlBase = "http://localhost:3000/employees";

  constructor(private httpClient : HttpClient) { }

  getData():Observable<any>{
    return this.httpClient.get<any>(this.urlBase);
  }

  addEmployee(val:any):Observable<any>{
    return this.httpClient.post(this.urlBase , val);
  }

  updateEmployee(val:any):Observable<any>
  {
    return this.httpClient.put(`${this.urlBase}/${val.id}` , val);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.httpClient.delete(`${this.urlBase}/${id}`);
  }

}
