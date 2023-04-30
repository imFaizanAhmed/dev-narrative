import { gql } from 'apollo-angular';

// 6446ac7b3c87dff530af6e60
const GET_COMPANY = gql`
  query company($id: String!) {
    company(id: $id) {
      id
      name
      budget
      description
    }
  }
`;

export { GET_COMPANY };
