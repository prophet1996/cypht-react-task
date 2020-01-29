import { Country } from "../../model/Country";
import { User } from "../../model/User";

import React, { ChangeEvent } from "react";
import { useFormik, Field } from "formik";

type PersonalInfoFormProps = User & {
  countryList: Country[];
  handleChange: (
    eventOrPath: string | ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | ChangeEvent<any>) => void);
};

const PersonalInfoForm: React.SFC<PersonalInfoFormProps> = ({
  countryList,
  handleChange,
  fullName,
  email,
  country,
  age,
  gender
}: PersonalInfoFormProps) => {
  return (
    <>
      Personal Info form
      <label htmlFor="fullName">fullName </label>
      <input
        id="fullName"
        name="fullName"
        type="fullName"
        onChange={handleChange}
        value={fullName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="country">country</label>
      <select
        id="country"
        name="country"
        onChange={handleChange}
        value={country}
      >
        {countryList.map(country => (
          <option key={country.alpha2Code} value={country.alpha2Code}>
            {country.name}
          </option>
        ))}
      </select>
      <label htmlFor="age">age</label>
      <input
        id="age"
        name="age"
        type="age"
        onChange={handleChange}
        value={age}
      />
      <label htmlFor="gender">gender</label>
      <input
        id="gender"
        name="gender"
        type="gender"
        onChange={handleChange}
        value={gender}
      />
    </>
  );
};

export default PersonalInfoForm;
