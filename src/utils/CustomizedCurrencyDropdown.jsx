import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// TRANSLATION
import { useTranslation } from 'react-i18next';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomizedCurrencyDropdown = ({selectedCurrency, currencies, setSelectedCurrency, label}) => {

  const handleChange = (event) => {
      setSelectedCurrency(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, width: '45%' }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedCurrency}
        label={label}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    );
};

export default CustomizedCurrencyDropdown;