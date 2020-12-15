import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const withWrapper = (Wrapper, wrapperProps = {}) => children =>
	<Wrapper {...wrapperProps}>{children}</Wrapper>;

const client = new ApolloClient({});

export const withRouter = withWrapper(BrowserRouter);
export const withApollo = withWrapper(ApolloProvider, { client });

export const renderWith = (...wrappers) => children => render(
	pipe(...wrappers)(children)
);

export const setup = (...builtins) => (...fns) =>
	builtins.forEach((builtin, ix) =>
		builtin(() =>
			fns[0].length ? fns[ix].forEach(f => f()) : fns.forEach(f => f())
		)
	);
