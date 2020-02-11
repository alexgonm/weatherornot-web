import React from 'react';
import './LocationHeader.css';

interface ILocationHeader {
	head: {
		name: string;
		temp: string;
		coordinates: string;
	};
}

export const LocationHeader = (props: ILocationHeader) => {
	return (
		<div className='location-header'>
			<label>
				<h6 className='name'>{props.head.name}</h6>
				<p className='coordinates'>{props.head.coordinates}</p>
				<p className='temp'>{props.head.temp}</p>
			</label>
			<input type='radio' name='location'></input>

			<span>Delete cross</span>
		</div>
	);
};

export default LocationHeader;
