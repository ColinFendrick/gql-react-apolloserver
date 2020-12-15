import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Home, User } from './components';

const GET_USERS = gql `
  {
    users {
      id
      login
      avatar_url
    }
  }
`;

const App = () => {
	const { loading, error, data } = useQuery(GET_USERS);

	if (error) return <h1>Something went wrong!</h1>;
	if (loading) return <h1>Loading...</h1>;

	return <div>
      Basic Setup:
		<Switch>
			<Route path='/' exact component={Home} />
		</Switch>
		{data.users.map(user => (
			<User key={user.id} user={user} />
		))}
	</div>;
};

export default App;
