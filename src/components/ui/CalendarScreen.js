import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import { messages } from '../../helpers/calendar-config';

moment.locale('es', {
	months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
	monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
	weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
	weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
	weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
	}
);

const localizer = momentLocalizer(moment);

export const CalendarScreen = ({eventos, onSelect, onSelectSlot, onDoubleClickEvent}) => {

	return (
		<div className='calendar-screen'>
			<Calendar
				selectable={true}
				events={eventos}
				localizer={localizer}
				startAccessor="start"
				endAccessor="end"
				messages={messages}
				onSelectEvent={onSelect}
				onSelectSlot={onSelectSlot}
				onDoubleClickEvent={onDoubleClickEvent}
			/>

		</div>
	)
}
