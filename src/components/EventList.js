import React, {Component} from 'react';
import EventDetail from './EventDetail';
import '../assets/EventList.css';

class EventList extends Component {
	renderEvents() {
		let {events} = this.props;
		
		return events.map((event) => {
			
			if(event.logo && event.id !== '26545388973') {
				return(
					<EventDetail 
					key={event.id} 
					name={event.name.text} 
					image={event.logo.url}
					url={event.url}
					is_free={event.is_free}
					latitude={event.latitude}
					longitude={event.longitude}
					date={event.start.local} 
					/>
				);
			}
		return;
		});
	}

	render() {
		return(
			<div className="event-list__container">
				{this.renderEvents()}
			</div>
		);
	}
}

export default EventList;