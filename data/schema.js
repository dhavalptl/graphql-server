const typeDefinition = `
    type Repos {
        name: String
        description: String
    }
     
    type User {
        id: String
        login: String
        name: String
        company: String
        email: String,
        repos: [Repos]
    }

    type RootQuery {
        user(login: String): User
    }

    schema {
        query: RootQuery
    }
`;

export default [typeDefinition];