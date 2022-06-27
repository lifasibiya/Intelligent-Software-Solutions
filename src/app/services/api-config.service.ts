import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) { }

  get = async (url: string): Promise<any> => {
    return await this.http.get(url).toPromise();
  }

  post = async (url: string, payload: any): Promise<any> => {
    const headers = new HttpHeaders()
    headers.set("Access-Control-Allow-Origin","*")
    headers.set("Access-Control-Allow-Headers","*")
    let response = await this.http.post(url, payload).toPromise()
    console.log(response)
    return response
  }

  delete = async (url: string): Promise<any> => {
    return await this.http.delete(url).toPromise()
  }
}
