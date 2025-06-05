import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class XrayService {
  constructor(private http: HttpClient) {}

  generateXrayTests(jiraEpicUrl: string): Observable<any> {
    return this.http.post('/api/generate-xray-tests', { jiraEpicUrl });
  }
}
