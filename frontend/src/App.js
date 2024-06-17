import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Mulish, sans-serif',
    padding: theme.spacing(3),
    margin: 0,
  },
  section: {
    marginTop: theme.spacing(3),
  },
}));

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;