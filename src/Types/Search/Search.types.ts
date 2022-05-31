import { ButtonProps } from '@mui/material';

export interface IButton extends ButtonProps {
  buttonbackground?: boolean | string;
}

export interface IFormValues {
  countries: any;
  _id: string;
  searchType: string;
  city?: string;
  country: string;
}

export interface Countries {
  _id: string;
  name: string;
  cod: string;
}

export interface ISearchSlices {
  isLoading: boolean;
  hasError: boolean;
  countries?: Countries[];
  cities?: {
    _id?: string;
    country?: string;
    city?: string;
  }[];
}

export interface ICountries {
  _id?: string;
  name?: string;
  cod?: string;
}
