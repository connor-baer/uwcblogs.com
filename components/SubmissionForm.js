import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';
import BlogItem from './BlogItem';
import Validator from './Validator';
import Field from './Field';
import Input from './Input';
import Select from './Select';
import Button from './Button';

export default class SubmissionForm extends Component {
  static propTypes = {
    colleges: PropTypes.arrayOf(PropTypes.object).isRequired,
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    languages: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      isSuccess: false,
      isError: false,
      firstName: '',
      email: '',
      url: '',
      college: '',
      countries: [],
      languages: [],
      year: ''
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({ [e.target.id]: e.target.value }));
  };

  handleCollegeChange = option => {
    if (!option) {
      this.setState(() => ({ college: '' }));
      return;
    }
    this.setState(() => ({ college: option.value }));
  };

  handleCountriesChange = option => {
    this.setState(() => ({ countries: option }));
  };

  handleLanguagesChange = option => {
    this.setState(() => ({ languages: option }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      email,
      url,
      college,
      countries,
      languages,
      year
    } = this.state;
    this.setState(() => ({ isSubmitting: true }));
    axios
      .post('/api/blogs', {
        firstName,
        email,
        url,
        college,
        countries,
        languages,
        year
      })
      .then(() => {
        this.setState(() => ({
          isSubmitting: false,
          isSuccess: true
        }));
      })
      .catch(error => {
        console.warn(error);
      });
  };

  handleReset = () => {
    this.setState(() => ({
      isSubmitting: false,
      isSuccess: false,
      isError: false,
      firstName: '',
      email: '',
      url: '',
      college: '',
      countries: [],
      languages: [],
      year: ''
    }));
  };

  sortValues = (a, b) => {
    if (a.label > b.label) {
      return 1;
    }
    if (a.label < b.label) {
      return -1;
    }
    return 0;
  };

  render() {
    const {
      colleges: collegeList,
      countries: countryList,
      languages: languageList
    } = this.props;
    const {
      isSubmitting,
      isSuccess,
      isError,
      firstName,
      email,
      url,
      college,
      countries,
      languages,
      year
    } = this.state;

    if (isSuccess) {
      const languagesString = languages.map(({ label }) => ({ name: label }));
      const countriesString = countries.map(({ label }) => ({ name: label }));
      return (
        <article className="l-ctnr cf">
          <div className="l-w100">
            <h3>Success!</h3>
            <p>This is what your blog will look like:</p>
            <ul>
              <BlogItem
                firstName={firstName}
                url={url}
                languages={languagesString}
                countries={countriesString}
              />
            </ul>
            <Button
              type="reset"
              label="Submit more →"
              onClick={this.handleReset}
            />
          </div>
        </article>
      );
    }

    const collegeOptions = collegeList
      .map(option => ({
        value: option.id,
        label: option.name
      }))
      .sort(this.sortValues);
    const countryOptions = countryList
      .map(option => ({
        value: option.id,
        label: option.name
      }))
      .sort(this.sortValues);
    const languageOptions = languageList
      .map(option => ({
        value: option.id,
        label: option.name
      }))
      .sort(this.sortValues);
    return (
      <article className="l-ctnr cf">
        <div className="l-w100">
          {isError && (
            <div>
              <h3>Error!</h3>
              <p>Please try again.</p>
            </div>
          )}
          <form
            onSubmit={this.handleSubmit}
            className={classNames({ isSubmitting })}
          >
            <div className="section-inputs">
              <Validator value={firstName} type="name">
                {({ valid, error }) => (
                  <Field
                    value={firstName}
                    name="firstName"
                    label="What's your first name?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Input
                      type="text"
                      onChange={this.handleChange}
                      placeholder="Jane"
                    />
                  </Field>
                )}
              </Validator>
              <Validator value={email} type="email">
                {({ valid, error }) => (
                  <Field
                    value={email}
                    name="email"
                    label="What’s your email address?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Input
                      type="email"
                      onChange={this.handleChange}
                      placeholder="jane@example.com"
                    />
                  </Field>
                )}
              </Validator>
              <Validator value={url} type="url">
                {({ valid, error }) => (
                  <Field
                    value={url}
                    name="url"
                    label="What's the link to your blog?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Input
                      type="url"
                      onChange={this.handleChange}
                      placeholder="https://example.com/blog"
                    />
                  </Field>
                )}
              </Validator>
              <Validator value={college} type="text">
                {({ valid, error }) => (
                  <Field
                    value={college}
                    name="college"
                    label="Which college do/did you attend?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Select
                      placeholder="Add a college..."
                      options={collegeOptions}
                      onChange={this.handleCollegeChange}
                    />
                  </Field>
                )}
              </Validator>
              <Validator
                value={countries}
                type="array"
                options={{ min: 1, max: 3 }}
              >
                {({ valid, error }) => (
                  <Field
                    value={countries}
                    name="countries"
                    label="Which country are you from?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Select
                      placeholder="Add a country..."
                      options={countryOptions}
                      onChange={this.handleCountriesChange}
                      multi
                    />
                  </Field>
                )}
              </Validator>
              <Validator
                value={languages}
                type="array"
                options={{ min: 1, max: 3 }}
              >
                {({ valid, error }) => (
                  <Field
                    value={languages}
                    name="languages"
                    label="Which language do you write in?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Select
                      placeholder="Add a language..."
                      options={languageOptions}
                      onChange={this.handleLanguagesChange}
                      multi
                    />
                  </Field>
                )}
              </Validator>
              <Validator
                value={year}
                type="number"
                options={{ min: 1961, max: 2025 }}
              >
                {({ valid, error }) => (
                  <Field
                    value={year}
                    name="year"
                    label="When will/did you finish UWC?"
                    error={error}
                    valid={valid}
                    disabled={isSubmitting}
                    required
                  >
                    <Input
                      value={year}
                      placeholder={new Date().getFullYear().toString()}
                      type="number"
                      onChange={this.handleChange}
                      min="1961"
                      max="2025"
                      step="1"
                    />
                  </Field>
                )}
              </Validator>
              <Button type="submit" label="Submit →" />
            </div>
          </form>
        </div>
      </article>
    );
  }
}
