import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.js";
import Signup from "./pages/signup.js";
import Login from "./pages/login.js";
import Care from "./pages/care.js";
import Nav from "./components/nav/index.js";
import Footer from "./components/footer/index.js";
import Return from "./pages/refund-policy.js";
import { StoreProvider } from "./utils/GlobalState.js";

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <StoreProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/care" element={<Care />} />
        <Route path="/Return" element={<Return />} />
      </Routes>
      <Footer />
      </StoreProvider>
    </Router>
    </ApolloProvider>
  );
}

export default App;
