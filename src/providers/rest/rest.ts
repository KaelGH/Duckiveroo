import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { HttpHeaders } from '@angular/common/http'

import { TokenProvider } from '../token/token'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
}

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {
  apiUrl = 'http://duckapi.thibaudcordina.fr'
  // apiUrl = 'http://localhost:8000'
  constructor(public http: HttpClient, public tokenProvider: TokenProvider) {}

  getRestos() {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/restaurants', {
          params: {
            token: this.tokenProvider.token
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
            token: this.tokenProvider.token
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

  getCategories() {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/categories', {
          params: {
            token: this.tokenProvider.token
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

  postLogin(email, password) {
    let postData = {
      _email: email,
      _password: password
    }
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/login', postData, httpOptions).subscribe(
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

  postRegister(formData) {
    let postData = {
      email: formData.email,
      password: formData.password,
      nom: formData.nom,
      prenom: formData.prenom
    }
    return new Promise(resolve => {
      this.http
        .post(this.apiUrl + '/register', postData, httpOptions)
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

  addCart(idProduit) {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/cart/add/' + idProduit, {
          params: {
            token: this.tokenProvider.token
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

  removeFromCart(idProduit) {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/cart/remove/' + idProduit, {
          params: {
            token: this.tokenProvider.token
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

  getUser() {
    return new Promise(resolve => {
      this.http
        .get(this.apiUrl + '/user', {
          params: {
            token: this.tokenProvider.token
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
