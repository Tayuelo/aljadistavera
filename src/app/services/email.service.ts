import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class MailService {
    
    constructor(private http: HttpClient) {}

    public send(value: any): Promise<any> {
        return firstValueFrom(this.http.post<any>(`${ environment.apiUrl }/api/email/send`, value));
    }
}