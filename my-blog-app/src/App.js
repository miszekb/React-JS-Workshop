import React from 'react';
import './App.css';
import './containers/Login/Login.css'
import MainPage from './components/MainPage/MainPage';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>MyBlog</header>
        <MainPage logged = {false}/>
      </div>
    </ApolloProvider>
  );
}

export default App;