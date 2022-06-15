import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppDataService } from '../app-data-service/app-data.service';
import * as _dummyData from '../../dummy-data';
import * as _appConfig from '../../config/config';

@Injectable()
export class HttpService {
    constructor(
        private _http: HttpClient,
        private _appDataService: AppDataService
    ) { }

    httpOptions_ = {};
    httpPost(url: string, data: any): Observable<any> {
        if (sessionStorage.getItem('session_token')) {
            this.httpOptions_ = {
                'headers': {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + JSON.parse(sessionStorage.getItem('session_token')).access_token
                }
            };
        }
        else {
            this.httpOptions_ = {
                'headers': {
                    'Accept': 'application/json'
                }
            };
        }
        return this._http.post(
            _appConfig.baseURL + url, data, this.httpOptions_
        )
            // ...and calling .json() on the response to return data
            // .map(
            //     (res: Response) => res.json()
            // )
            // // ...errors if any
            // .catch(
            //     // (error: any) => Observable.throw(error)
            //     (error: any) => throwError(error)
            // );
    }

    httpGet(url: string, data: any): Observable<any> {
        if (sessionStorage.getItem('session_token')) {
            this.httpOptions_ = {
                'headers': {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + JSON.parse(sessionStorage.getItem('session_token')).access_token
                }
            };
        }
        else {
            this.httpOptions_ = {
                'headers': {
                    'Accept': 'application/json'
                }
            };
        }
        return this._http.get(
            _appConfig.baseURL + url, this.httpOptions_
        )
            // // ...and calling .json() on the response to return data
            // .map(
            //     (res: Response) => res.json()
            // )
            // // ...errors if any
            // .catch(
            //     // (error: any) => Observable.throw(error)
            //     (error: any) =>  throwError(error)
            // );
    }

    // httpPost(url: string, data: any): Observable<any> {
    //     return new Observable((observer: any) => {
    //         setTimeout(() => {
    //             // Login

    //             if (data.loginName === 'sarath.s@10xds.com' &&
    //                 data.password === 'password1' &&
    //                 url === _appConfig.apiURLS.authenticateURL) {
    //                 observer.next({
    //                     isLoggedIn: true,
    //                     Id: 1,
    //                     modules: [
    //                         { Id: '6' }, { Id: '7' }, { Id: '8' }, { Id: '9' }, { Id: '10' }, { Id: '11' },
    //                         { Id: '12' }, { Id: '13' }, { Id: '14' }, { Id: '15' }, { Id: '16' }, { Id: '17' },
    //                         { Id: '18' }, { Id: '19' }, { Id: '40' }, { Id: '22' }, { Id: '32' }, { Id: '24' },
    //                         { Id: '25' }, { Id: '26' }, { Id: '20' }, { Id: '23' }, { Id: '28' }, { Id: '29' },
    //                         { Id: '30' }, { Id: '27' }, { Id: '50' }, { Id: '35' }, { Id: '36' }, { Id: '54' },
    //                         { Id: '38' }, { Id: '39' }, { Id: '41' }, { Id: '42' }, { Id: '43' }, { Id: '44' },
    //                         { Id: '45' }, { Id: '37' }, { Id: '34' }, { Id: '55' }, { Id: '47' }, { Id: '51' },
    //                         { Id: '52' }, { Id: '33' }, { Id: '46' }, { Id: '56' }, { Id: '57' }, { Id: '58' }
    //                     ]
    //                 });
    //             } else {
    //                 observer.error('Invalid credentials');
    //             }
    //         }, 1000);
    //     });
    // }

    // httpGet(url: string, data: any): Observable<any> {
    //     return new Observable((observer: any) => {
    //         setTimeout(() => {
    //             // Assets

    //             if (url.startsWith(_appConfig.apiURLS.assetListURL)) {
    //                 observer.next(_dummyData.assetList);
    //             }

    //             if (url === _appConfig.apiURLS.moduleListURL) {
    //                 observer.next(_dummyData.modules);
    //             }

    //             if (url.startsWith(_appConfig.apiURLS.manageRole)) {
    //                 observer.next(_dummyData.roleList);
    //             }

    //             if (url.startsWith(_appConfig.apiURLS.permissionListURL)) {
    //                 observer.next(_dummyData.permissionList);
    //             }

    //             if (url.startsWith(_appConfig.apiURLS.vulerabilityListURL)) {
    //                 observer.next(_dummyData.vulnerabilityList);
    //             }

    //             if (url.startsWith(_appConfig.apiURLS.threatListURL)) {
    //                 observer.next([]);
    //             }
    //         }, 1000);
    //     });
    // }
}
