// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import PageTitle from '../../../../libs/ui-header/src/lib/page-title/page-title';
import { ApiResponse, API_URL } from '../../../../libs/api-interface/src/lib/api-interface';


export function App() {

  const [apiResponse, setApiResponse] = useState<ApiResponse>({ message: 'Loading...' });

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setApiResponse)
  }, []);

  return (
    <>
      <NxWelcome title="my-site" />
      <div />
      <PageTitle />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div>
        <p>{ apiResponse.message }</p>
      </div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
