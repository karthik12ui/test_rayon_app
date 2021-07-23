import { Injectable } from '@angular/core';


@Injectable()
export class AppService {
    constructor() {

    }

    getEnvUrl() {
        const appHost = '/'

        const urls = {
            baseUrl: appHost
        }

        return urls
    }

    appEndPoint() {
        const endPoints = {
            userInfodata: this.getEnvUrl().baseUrl + 'localstub/data/userinfo.json',
            getAdmindata: this.getEnvUrl().baseUrl + 'localstub/data/admin.json',
            getJobsdata: this.getEnvUrl().baseUrl + 'localstub/data/career-jobs.json',
            getTestdata: this.getEnvUrl().baseUrl + 'localstub/data/test.json',
            // API http://localhost:3000/api/account/login
            loginAPI: this.getEnvUrl().baseUrl + 'api/account/login',
            testAPI: this.getEnvUrl().baseUrl + 'api/account/test'
        }
        return endPoints;
    }
}