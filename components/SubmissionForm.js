import { Component } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Validator from './Validator';
import Input from './Input';
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
      year: ''
    };
  }

  componentDidMount() {
    if (typeof document === 'undefined') {
      return;
    }
    const Choices = dynamic(import('choices.js'));
    const choicesOptions = {
      maxItemCount: 3,
      duplicateItems: false,
      itemSelectText: 'Press Enter to select'
    };

    const countries = new Choices(this.countries, choicesOptions);
    console.log(countries);
    // const languages = new Choices('#languages', choicesOptions);
    // const colleges = new Choices('#college', {
    //   maxItemCount: 1
    // });
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({ [e.target.id]: e.target.value }));
  };

  validateEmail = email => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = pattern.test(email);
    if (isValid) {
      return { isValid, error: '' };
    }
    return { isValid, error: 'Please enter a valid email address.' };
  };

  render() {
    const { colleges, countries, languages } = this.props;
    const { firstName, email, url, year } = this.state;
    return (
      <div className="l-w100">
        <form className="c-form" method="post" action="" acceptCharset="UTF-8">
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
            <select
              label="Which country are you from?"
              name="countries"
              placeholder="Add a country..."
              ref={select => {
                this.countries = select;
              }}
              multiple
              required
            >
              {countries.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <select
              label="Which language do you write in?"
              name="languages"
              placeholder="Add a language..."
              multiple
              required
            >
              {languages.map((language, i) => (
                <option key={i} value={language.name}>
                  {language.name}
                </option>
              ))}
            </select>
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
            <select
              label="Which UWC do/did you attend?"
              name="college"
              placeholder="Which UWC do/did you attend?"
              required
            >
              <option value="" selected disabled>
                Select a college...
              </option>
              {colleges.map((college, i) => (
                <option key={i} value={college.name}>
                  {college.name}
                </option>
              ))}
            </select>
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
            <Input type="submit" value="Submit →" />
          </div>
        </form>
      </div>
    );
  }
}
