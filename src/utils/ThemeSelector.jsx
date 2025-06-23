import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ThemeSelector = ({ setMode, currentMode }) => {
//     const [theme, setTheme] = useState(() => {
//      return localStorage.getItem('theme') || 'light';
//     });

    const { t, i18n } = useTranslation();

    const handleChange = (event) => {
     setMode(event.target.value);
    };

//     useEffect(() => {
//         localStorage.setItem('theme', theme);
//     }, [theme]);

    return (
                <FormControl sx={{ m: 1, minWidth: 120}} >
                      <InputLabel id="Theme-label" >{t('theme')}</InputLabel>
                      <Select
                        value={currentMode}
                        label={t('theme')}
                        onChange={handleChange}
                      >
                          <MenuItem value="light">
                              <div className="flex items-center">
                                <MdLightMode className="mr-2" />
                                <span>{t('lightMode')}</span>
                              </div>
                          </MenuItem>
                          <MenuItem value="dark">
                              <div className="flex items-center">
                                <MdDarkMode className="mr-2" />
                                <span>{t('darkMode')}</span>
                              </div>
                          </MenuItem>
                      </Select>
                </FormControl>
    )
}

export default ThemeSelector;