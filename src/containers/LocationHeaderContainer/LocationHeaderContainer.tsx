import React, { Component } from 'react';
import LocationHeader from '../../components/LocationHeader/LocationHeader';

interface IState {
	locations: Array<any>;
}

interface IProps {}

const LocationsList = (LocationH: any) =>
	class LocationHeaderContainer extends Component<IProps, IState> {
		state: IState;

		constructor(props: IProps) {
			super(props);
			this.state = {
				locations: []
			};
		}

		componentDidMount() {
			//Test
			this.setState({
				locations: [
					<LocationH
						key='Geneva'
						head={{
							name: 'Geneva',
							temp: '3°C',
							coordinates: '46.204391, 6.143158'
						}}
					/>,
					<LocationH
						key='Annemasse'
						head={{
							name: 'Annemasse',
							temp: '4°C',
							coordinates: '46.204391, 6.143158'
						}}
					/>
				]
			});
		}

		render() {
			// const elements = locations.map(location => (
			// 	<LocationH head={location} />
			// ));

			if (!this.state.locations) {
				return <p>No previous location(s) found.</p>;
			}
			return <div>{this.state.locations}</div>;
		}
	};

export default LocationsList(LocationHeader);
