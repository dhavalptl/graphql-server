## GraphQL with Apollo Server and DataLoader

Graphql server created using Apollo Server with Dataloader

User can fetch user and repositories information

###Install GraphQL, DataLoader and Apollo Server modules 

```
npm install
```

###Run GraphQL Server 

```
npm start
```
###Access GraphQL server 

http://localhost:4000/graphql


###Test User query in graphiql

http://localhost:4000/graphiql

###Sample GraphQL query

```
{
  user(login: "dhavalt"){
    id
    login
    name
    company
    email
    repos{
      name
      description
    }
  }
}
```
