import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable()
export class MailService {
    
    constructor(private http: HttpClient) {}

    public send(value: any): Promise<any> {
        return firstValueFrom(this.http.post<any>('http://localhost:3000/api/email/send', value));
    }
}