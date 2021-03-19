import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/react-hooks'

// export default new ApolloClient({
//   uri: 'http://localhost:8080/graphql',
//   // request: (operation) => {
//   //   operation.setContext(({ headers = {} }) => ({
//   //     headers: {
//   //       ...headers,
//   //       authorization: `Bearer ${bearerToken}`,
//   //     },
//   //   }));
//   // },
// })
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8080/graphql',
  }),
})
export default client
