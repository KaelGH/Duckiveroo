import {Injectable} from '@angular/core';

@Injectable()
export class TokenProvider {
    public token: any = null;

    constructor() {
        console.log('tokenProvider ', this.token)
    }

    isLoggedIn() {
        if (this.token === null) {
            return false
        }
        return true
    }
}