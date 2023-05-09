import { gql } from 'apollo-angular';

const LOG_IN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
    }
  }
`;

export { LOG_IN };
