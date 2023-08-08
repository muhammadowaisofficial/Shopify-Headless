const gql = String.raw

const LOGIN_MUTATION = gql`
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
            customerUserErrors {
                code
                field
                message
            }
            customerAccessToken {
                accessToken
                expiresAt
            }
        }
    }
`
const CUSTOMER_CREATE_MUTATION = gql`
    mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
            customer {
                id
            }
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`

const CUSTOMER_RESET_MUTATION = gql`
    mutation customerReset($id: ID!, $input: CustomerResetInput!) {
        customerReset(id: $id, input: $input) {
            customerAccessToken {
                accessToken
                expiresAt
            }
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`

const CUSTOMER_RECOVER_MUTATION = gql`
    mutation customerRecover($email: String!) {
        customerRecover(email: $email) {
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`

const CUSTOMER_ACTIVATE_MUTATION = gql`
    mutation customerActivate($id: ID!, $input: CustomerActivateInput!) {
        customerActivate(id: $id, input: $input) {
            customerAccessToken {
                accessToken
                expiresAt
            }
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`