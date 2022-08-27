import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Promise<any> {
    return firstValueFrom(
      this.http.get<any>(`${ environment.apiUrl }/projects` )
    );
  }
}
