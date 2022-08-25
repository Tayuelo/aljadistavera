import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ProjectsDto } from "../models";
import { environment } from "src/environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ProjectsService {
    constructor(private  http: HttpClient) {}

    getProjects(): Promise<any> {
        return firstValueFrom(
          this.http.get<any>('http://localhost:3000/api/projects')
        );
      }
}