import { screen } from '@testing-library/react';

import { setup, renderWith, withRouter, withApollo } from './setupTests';

import App from './App';

describe('Testing <App />', () => {
	setup(beforeAll)(
		() => renderWith(withApollo, withRouter)(<App />)
	);

	test('Shows the basic setup', () => {
		expect(
			screen.getByText('Loading...')
		).toBeInTheDocument();
	});
});
