import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { ApiConfigService } from './api-config.service';


const baseUrl: string = environment.url
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private config: ApiConfigService) { }

  uploadFile = async (payload: FormData): Promise<any> => {
    
    const response = await this.config.post(`${baseUrl}/document/create`, payload)
    return response;
  }

  getFiles = async (): Promise<any> => {
    const response = await this.config.get(`${baseUrl}/document/get`)
    return response;
  }

  deleteFile = async (id: number): Promise<any> => {
    const response = await this.config.delete(`${baseUrl}/document/delete/${id}`)
    return response;
  }

  createUser = async(payload: any): Promise<any> => {
    console.log('payload', payload)
    const response =  await this.config.post(`${baseUrl}/user/create`, payload)
    return response;
  }

  login = async(idnumber: any) => {
    const response =  await this.config.get(`${baseUrl}/user/auth/${idnumber}`)
    return response;
  } 

}
