import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
/** ChatBotService */
@Injectable()
export class AppService {
    constructor(private http: HttpClient) {}
    public getPromotions(): Observable<any> {

        return this.http.get(' https://api.github.com/users').pipe(map((response) => {
            console.log(response);
            return response;
        }));
    }
}
