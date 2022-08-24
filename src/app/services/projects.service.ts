import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ProjectsDto } from "../models";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor(private  http: HttpClient) {}

    getProjects() {
        return this.http.get<ProjectsDto[]>(`${environment.apiUrl}/projects`);
    }
}