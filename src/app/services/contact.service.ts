import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class ContactService {
      
    constructor(private http: HttpClient) {}

    /**
     * send a post request containing the intended recipient as well as 
     * the message to be send
     * @param input the content of the message to send
     * @returns a string
     */
    postMessage(input: any) {
        return this.http.post(`${environment.CONTACT}`, input, {responseType: 'text'});
    }
  }