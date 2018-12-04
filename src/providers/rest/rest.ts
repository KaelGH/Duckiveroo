import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {
  apiUrl = 'http://duckapi.thibaudcordina.fr'

  constructor(public http: HttpClient) {}
  getRestos() {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/restaurants', {
          params: {
            token: 'test'
          }
        })
        .subscribe(
          data => {
            resolve(data)
            return data
          },
          err => {
            console.log(err)
          }
        )
    })
  }

  getResto(id) {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/restaurants/' + id, {
          params: {
            token: 'test'
          }
        })
        .subscribe(
          data => {
            resolve(data)
            return data
          },
          err => {
            console.log(err)
          }
        )
    })
  }
}
