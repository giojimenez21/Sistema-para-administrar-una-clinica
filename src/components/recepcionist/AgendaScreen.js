import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetAgendaById, startGetAgendaCompleta, startGetMedicos } from '../../actions/recep'
import { useForm } from '../../hooks/useForm'
import { CalendarScreen } from '../ui/CalendarScreen'

export const AgendaScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
    const { medicos, eventos } = useSelector(state => state.recep);
    const [formValues, handleChange] = useForm({
        medico: ""
    });
    const { medico } = formValues;

    useEffect(() => {
        dispatch(startGetMedicos());
    }, [dispatch])

    useEffect(() => {
        if (medico === "" || medico === "Todos") {
            dispatch(startGetAgendaCompleta());
        } else {
            dispatch(startGetAgendaById(medico));
        }
    }, [medico, dispatch])



    if (loading) {
        return <div className="loader">Loading...</div>;
    }


    return (
        <div className='bg-white'>
            <div className='px-4 pt-4'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Medico</InputLabel>
                    <Select
                        className='mb-4'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Medico"
                        onChange={handleChange}
                        name="medico"
                        value={formValues.medico}
                    >
                        <MenuItem value={"Todos"}>Todos</MenuItem>
                        {medicos?.map(medico => {
                            return (
                                <MenuItem value={medico?.id} key={medico?.id}>Dr(a) {medico?.nombre}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>

            <CalendarScreen eventos={eventos} />
        </div>
    )
}
