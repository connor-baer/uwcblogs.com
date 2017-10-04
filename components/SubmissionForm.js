import { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from './Validator';
import Input from './Input';
import Select from './Select';
import { animations, colors, fonts } from '../styles';

export default class SubmissionForm extends Component {
  static propTypes = {
    colleges: PropTypes.arrayOf(PropTypes.object).isRequired,
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    languages: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      firstName: '',
      email: '',
      url: '',
      college: '',
      countries: [],
      languages: [],
      year: ''
    };
  }

  sortValues = (a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  };

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

  handleCountriesChange = value => {
    this.setState(() => ({ countries: value }));
  };

  handleLanguagesChange = value => {
    this.setState(() => ({ languages: value }));
  };

  render() {
    const {
      colleges: collegeList,
      countries: countryList,
      languages: languageList
    } = this.props;
    const {
      firstName,
      email,
      url,
      college,
      countries,
      languages,
      year
    } = this.state;
    const collegeOptions = collegeList
      .map(option => ({
        value: option.name,
        label: option.name
      }))
      .sort(this.sortValues);
    const countryOptions = countryList
      .map(option => ({
        value: option.name,
        label: option.name
      }))
      .sort(this.sortValues);
    const languageOptions = languageList
      .map(option => ({
        value: option.name,
        label: option.name
      }))
      .sort(this.sortValues);
    return (
      <article className="l-ctnr cf">
        <div className="l-w100">
          <form
            className="c-form"
            method="post"
            action=""
            acceptCharset="UTF-8"
          >
            <div className="section-inputs">
              <Validator value={firstName} type="name">
                {({ valid, error }) => (
                  <Input
                    label="What's your first name?"
                    value={firstName}
                    name="firstName"
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Jane"
                    valid={valid}
                    error={error}
                    required
                  />
                )}
              </Validator>
              <Validator value={email} type="email">
                {({ valid, error }) => (
                  <Input
                    label="What’s your email address?"
                    value={email}
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    placeholder="jane@example.com"
                    valid={valid}
                    error={error}
                    required
                  />
                )}
              </Validator>
              <Validator value={url} type="url">
                {({ valid, error }) => (
                  <Input
                    label="What's the link to your blog?"
                    value={url}
                    name="url"
                    type="url"
                    onChange={this.handleChange}
                    placeholder="https://example.com/blog"
                    valid={valid}
                    error={error}
                    required
                  />
                )}
              </Validator>
              <Validator value={college} type="text">
                {({ valid, error }) => (
                  <Select
                    label="Which UWC do/did you attend?"
                    name="college"
                    placeholder="Add a college..."
                    options={collegeOptions}
                    value={college}
                    onChange={this.handleCollegeChange}
                    valid={valid}
                    error={error}
                    required
                  />
                )}
              </Validator>
              <Validator
                value={countries}
                type="array"
                options={{ min: 1, max: 3 }}
              >
                {({ valid, error }) => (
                  <Select
                    label="Which country are you from?"
                    name="countries"
                    placeholder="Add a country..."
                    options={countryOptions}
                    value={countries}
                    onChange={this.handleCountriesChange}
                    valid={valid}
                    error={error}
                    required
                    multi
                  />
                )}
              </Validator>
              <Validator
                value={languages}
                type="array"
                options={{ min: 1, max: 3 }}
              >
                {({ valid, error }) => (
                  <Select
                    label="Which language do you write in?"
                    name="languages"
                    placeholder="Add a language..."
                    options={languageOptions}
                    value={languages}
                    onChange={this.handleLanguagesChange}
                    valid={valid}
                    error={error}
                    required
                    multi
                  />
                )}
              </Validator>
              <Validator
                value={year}
                type="number"
                options={{ min: 1961, max: 2025 }}
              >
                {({ valid, error }) => (
                  <Input
                    label="When will/did you finish UWC?"
                    value={year}
                    name="year"
                    type="number"
                    onChange={this.handleChange}
                    min="1961"
                    max="2025"
                    step="1"
                    valid={valid}
                    error={error}
                    placeholder={new Date().getFullYear().toString()}
                    required
                  />
                )}
              </Validator>
              {/* <Input type="submit" value="Submit →" /> */}
            </div>
          </form>
        </div>
      </article>
    );
  }
}
