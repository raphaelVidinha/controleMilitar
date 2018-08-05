import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patentes } from './patentes';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private url: string;
  private httpOptions: object;

  constructor(private http: HttpClient) { 
    console.log('service-constructor');
  }

  build(url){
    this.url = 'http://localhost:8000/api/v1/' + url;

    this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkzOTVmZjcxZjFiNDFmN2ExOWY5YTg3ZDM1YmNiYWFkMTk1NDFmMmZiODRiNDg0ZDYwMTk5MDQ2OTI0ZmMzNTg4YzliYTc3NGQ5ZTQyZTBjIn0.eyJhdWQiOiIzIiwianRpIjoiOTM5NWZmNzFmMWI0MWY3YTE5ZjlhODdkMzViY2JhYWQxOTU0MWYyZmI4NGI0ODRkNjAxOTkwNDY5MjRmYzM1ODhjOWJhNzc0ZDllNDJlMGMiLCJpYXQiOjE1MzM0MDUzNzQsIm5iZiI6MTUzMzQwNTM3NCwiZXhwIjoxNTMzODM3MzczLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.AM2HXJzHO8cFZ5ageaR2wLgozMthde8ryW71tLfiixUajzZIQXMCguucLMczDNcC5pGh410UZoGsBQ6Ne9tDudZ3M5RfZ--wWrNYnlpCawKhK00O9Ecjpl8AIA87ctKAIMRAKu4Wq1L6sIz07WQ5SMlrLCxQGwPnuET_oWQzaa73jP-VZmvJOSMa4qINl2zf89ygHVELroitGd8lOG_iLT8lSKun3yg9yI1a-_V4LCaztJRPlx5e2vmOQP-rqw4-PFtABEfywAmlcb0l0MLE4Wk5PEHP04DB1FX9uIvXI4wSliSaNRLWewlaA31Fn3FvpxZp5hCbdgd7qZoTO70zBjoogcPiqSzLVYBkiieuGWZaVMfSetkLeR2hxwPX22TNijj94LQiQ8-ouBmt5gFmywhQMuyZNx9VYIjVzY4nAvDFHg19nSyRwdN4VbCdhtXprykYHXlEvqrHYCkBvbE5qrTGL2B1s2H7S2Gmcz6wq1MftT4PI-NRPzJb3AKuJivXLq3DnRPCrjXtBtBbzCoOm1SVWQDJpp1h4hhV5G0wxlMkbFQlPefdd6KbERMV9-mf8DZsyyas8Gx6QFxDatbx-1vDZGIgpJRi6a7lh1rujjNRDFwF_3XelH47jhfoUL9y9a8Ik-INtkj7wSeu04NQ6n15T4d9nIRFSr-WcB6AaEw'
        })
    };

    return this;
  }

  list(){
    return this.http.get(this.url, this.httpOptions);
  }

  create(data){
    return this.http.post(this.url, data, this.httpOptions);
  }

  get(id){
    return this.http.get(this.url + '/' + id, this.httpOptions);
  }

  update(id, data){
    return this.http.put(this.url + '/' + id, data, this.httpOptions);
  }

  delete(id){
    return this.http.delete(this.url + '/' + id, this.httpOptions);
  }

}
