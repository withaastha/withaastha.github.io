import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      mobile: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      mobile: Yup.string().required('Mobile field is required'),
    })}
    onSubmit={async ({ name, email, mobile }, { setSubmitting, resetForm, setFieldValue }) => {
      try {
        await axios({
          method: 'POST',
          url: 'https://api.formium.io/submit/5f40070bb4ec8d0001c46ce5/aol-requests',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            name,
            email,
            mobile,
          }),
        });
        setSubmitting(false);
        setFieldValue('success', true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue('success', false);
				alert('Something went wrong, please try again!') // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <h1>Have questions? Let us contact you</h1>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            id="mobile"
            aria-label="mobile"
            component="input"
            as={FastField}
            type="number"
            name="mobile"
            placeholder="Mobile Number*"
            error={touched.mobile && errors.mobile}
          />
          <ErrorMessage component={Error} name="mobile" />
        </InputField>
        {/* <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField> */}
        {values.success && (
          <InputField>
            <Center>
              <h4>Your message has been successfully sent, we will get back to you ASAP!</h4>
            </Center>
          </InputField>
        )}

        <h4>We will not spam you</h4>
        <Center>
          <div>
            <Button secondary type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </Center>
      </Form>
    )}
  </Formik>
);
