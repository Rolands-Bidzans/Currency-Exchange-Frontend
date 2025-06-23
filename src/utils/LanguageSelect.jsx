import React, { useState }  from "react";
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LanguageSelect = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language ? i18n.language : "en");

    const handleChange = (event) => {
        let lng = event.target.value;
      setLanguage(event.target.value);
      i18n.changeLanguage(lng);
      console.log("Language changed to: " + lng)
    };

  return (
      <FormControl sx={{ m: 1, minWidth: 120}} >
            <InputLabel id="language-label" >{t('Language')}</InputLabel>
            <Select
            value={language}
            label={t('Language')}
            onChange={handleChange}
            >
              <MenuItem value="en"><span className="fi fi-us mr-2"></span>English</MenuItem>
              <MenuItem value="ru"><span className="fi fi-ru mr-2"></span>Русский</MenuItem>
              <MenuItem value="lv"><span className="fi fi-lv mr-2"></span>Latviešu</MenuItem>
            </Select>
      </FormControl>
  );
}

export default LanguageSelect;