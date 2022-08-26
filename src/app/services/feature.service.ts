import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FeatureService {
  constructor(private http: HttpClient) {}

  getFeatures(): Promise<any> {
    return firstValueFrom(
      this.http.get<any>('http://localhost:3000/api/features')
    );
  }
}
