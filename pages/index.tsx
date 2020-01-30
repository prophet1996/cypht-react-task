import { NextPage } from "next";
import { Country } from "../model/Country";
import { fetchCountries } from "../network/client";
import PersonalInfoForm from "../components/PersonalInfoForm";
import SurveyForm from "../components/SurveyForm";
import SurveySummary from "../components/SurveySummary";
import ThemeChangeButton from "../components/ThemeChangeButton";
import { ThemeProvider } from "../hooks/useTheme";
import { AppWrapper, StyledForm } from "../styles/pages/indexStyles";
import GlobalStyles from "../styles/global";
import { useFormik } from "formik";
import { useState } from "react";

const Home: NextPage<{ countries: Country[] }> = props => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      country: "",
      age: 0,
      gender: "",
      answer: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: () => {}
  });
  const {
    handleChange,
    handleSubmit,
    values: { fullName, email, country, age, gender, answer }
  } = formik;

  const [step, setStep] = useState(0);
  const allSteps = [
    <PersonalInfoForm
      countryList={props.countries}
      handleChange={handleChange}
      fullName={fullName}
      email={email}
      country={country}
      age={age}
      gender={gender}
    />,
    <SurveyForm handleChange={handleChange} answer={answer} />,
    <SurveySummary
      fullName={fullName}
      email={email}
      country={country}
      age={age}
      gender={gender}
      answer={answer}
    />
  ];

  return (
    <ThemeProvider>
      <ThemeChangeButton />
      <GlobalStyles />
      <AppWrapper>
        <h1>Survey Bot</h1>
        <h3>Please fill out the personal details to proceed.</h3>
        <StyledForm onSubmit={formik.handleSubmit}>
          {allSteps[step]}

          {step === allSteps.length - 1 && (
            <button type="submit">Finito!</button>
          )}
        </StyledForm>
        {step > 0 && (
          <button onClick={() => setStep(step => step - 1)}>prev</button>
        )}
        {step < allSteps.length - 1 && (
          <button onClick={() => setStep(step => step + 1)}>next</button>
        )}
      </AppWrapper>
    </ThemeProvider>
  );
};

Home.getInitialProps = async ({ req }) => {
  const countries = await fetchCountries();
  return { countries };
};

export default Home;
