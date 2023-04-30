import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_COMPANY } from 'src/app/graphql/company.graphql';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSignup: boolean;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;

  constructor(private apollo: Apollo, private http: HttpClient) {
    this.isSignup = true;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.password = '';

    this.http
      .get('http://localhost:2000/users')
      .subscribe(({ data, error }: any) => {
        console.log('data', data);
      });
    this.getCompany();
  }

  getCompany() {
    this.apollo
      .query({
        query: GET_COMPANY,
        variables: {
          id: '6446ac7b3c87dff530af6e60',
        },
      })
      .subscribe(({ data, error }: any) => {
        console.log('nuuuum data', data);
      });
  }
}
