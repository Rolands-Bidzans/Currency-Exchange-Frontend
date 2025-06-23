import React, { useEffect, useState } from "react";
import { useDeviceDetect } from '../customHooks/useDeviceDetect';
// FOR DATE PICKER
import dayjs from "dayjs";
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import 'dayjs/locale/lv';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from "@mui/material/TextField";

// TRANSLATION
import { useTranslation } from 'react-i18next';

const CustomDatePicker = ({date, setDate}) => {
  const { i18n, t } = useTranslation();
  const { isMobile } = useDeviceDetect();

  // update Day.js locale when language changes
  useEffect(() => {
    dayjs.locale(i18n.language); // set locale globally
  }, [i18n.language]);

  return !isMobile ? (
    <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={i18n.language}
    >
      <DatePicker
        label={t('selectDate')}
        value={date}
        onChange={(newValue) => setDate(newValue)}
        minDate={dayjs("1999-01-01")}
        maxDate={dayjs()}
        slotProps={{ textField: { variant: 'outlined' } }}
      />
    </LocalizationProvider>
  ) : (
     <LocalizationProvider dateAdapter={AdapterDayjs} >
         <MobileDatePicker
            label={t('selectDate')}
            defaultValue={dayjs('2022-04-17')}
            value={date}
            onChange={(newValue) => setDate(newValue)}
            minDate={dayjs("1999-01-01")}
            maxDate={dayjs()}
            slotProps={{ textField: { variant: 'outlined' } }}
             />
     </LocalizationProvider>
      );
};

export default CustomDatePicker;