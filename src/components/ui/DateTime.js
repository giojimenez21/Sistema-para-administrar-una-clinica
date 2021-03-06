import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from "@mui/lab/AdapterMoment";
import { TextField } from '@mui/material';
import React from 'react';


export const DateTime = ({ fecha, setFecha, variant, mensaje }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                label={mensaje}
                value={fecha}
                onChange={(newValue) => {
                    setFecha(newValue);
                }}
                renderInput={(props) => <TextField className='w-full my-2' variant={variant} {...props} />}
            />
        </LocalizationProvider>
    )
}
