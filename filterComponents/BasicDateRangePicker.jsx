import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';

export default function BasicDateRangePicker({rangeSetter}) {
  const [value, setValue] = React.useState([null, null]);

  const rangeChangeHandler = (newValue) =>{
    setValue(newValue);
    rangeSetter(newValue[0], newValue[1]);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="From"
        endText="To"
        value={value}
        onChange={rangeChangeHandler}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}