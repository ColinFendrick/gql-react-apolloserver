import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';

import User from './User';

describe('Testing <User />', () => {
	const fakeUser = {
		login: 'fakeUser',
		avatar_url: 'fakeavatarurl'
	};

	setup(beforeEach)(
		() => renderWith()(<User user={fakeUser} />)
	);

	test('Renders', () => {
		expect(
			screen.getByText('fakeUser')
		).toBeInTheDocument();
	});
});
