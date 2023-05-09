import { gql } from 'apollo-angular';

const LOG_IN = gql`
  query {
    login($email: String!, $password: String!) {
      id
      firstName
      lastName
      email
    }
  }
`;

export { LOG_IN };
