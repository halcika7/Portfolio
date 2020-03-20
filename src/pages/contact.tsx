import React, { FC, useState, ChangeEvent, useEffect } from 'react';

import Recaptcha from 'react-recaptcha';
import * as EmailValidator from 'email-validator';
import { GoLocation } from 'react-icons/go';
import { MdPhoneInTalk } from 'react-icons/md';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Message from '../components/message/message';
import GoogleMap from '../components/map/map';

import '../scss/contact.scss';

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = (): JSX.Element => {
  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });

  const [values, setValues] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });

  const [resp, setResp] = useState<{
    message: string;
    success: boolean;
  }>({ message: '', success: false });

  const [loaded, setLoaded] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [recaptcha, setRec] = useState<string>('');

  let recaptchaInstance: any = null;

  const inputOnChange = ({
    target: { value, id },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const encode = (data: any) =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const submitForm = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(e => {
        setResp({ message: 'Thank you for sending message', success: true });
        setDisabled(false);
      })
      .catch(e => {
        setResp({ message: 'Error occured', success: false });
        setDisabled(false);
      });
  };

  const validateInputs = () => {
    const newErrors = { email: '', message: '', name: '' };
    if (!EmailValidator.validate(values.email)) {
      newErrors.email = 'Please enter valid email.';
    }

    if (values.name.length < 2) {
      newErrors.name = 'Name must contain at least 2 characters.';
    } else if (values.name.length > 100) {
      newErrors.name = 'Please enter less than 100 characters.';
    }

    if (values.message.length < 5) {
      newErrors.message = 'Please enter longer mesaage.';
    }

    if (!newErrors.name && !newErrors.message && !newErrors.email) {
      submitForm();
    } else {
      setDisabled(false);
    }

    setErrors(newErrors);
  };

  const verifyCallback = (response: any) => setRec(response);

  const executeCaptcha = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    recaptchaInstance.execute();
    setDisabled(true);
  };

  const clearMessage = () => {
    setResp({ message: '', success: false });
    setValues({
      name: '',
      email: '',
      message: '',
    });
    setErrors({
      name: '',
      email: '',
      message: '',
    });
    setRec('');
  };

  const addAlts = () => {
    const imgs = document.querySelectorAll('.gm-style img');
    imgs.forEach(img => img.setAttribute('alt', 'Google Image'));
  };

  useEffect(() => {
    if (recaptcha) validateInputs();
    else setDisabled(false);
  }, [recaptcha]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        addAlts();
      }, 1000);
    }
  }, []);

  return (
    <Layout
      directions={{
        home: 'left',
        about: 'right',
        skills: 'right',
        projects: 'right',
        contact: 'right',
      }}
    >
      <SEO title="Contact" description="Contact Page" />
      {resp.message && (
        <Message
          message={resp.message}
          success={resp.success}
          clear={clearMessage}
        />
      )}
      <main className="contact container">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <div className="section">
          <div className="location">
            <GoogleMap />
            <ul className="contact-info">
              <li>
                <GoLocation />
                <span>Location:</span>
                Sarajevo, BA
              </li>
              <li>
                <MdPhoneInTalk />
                <span>Phone:</span>
                +387/61-757-388
              </li>
              <li className="links">
                <a
                  href="https://www.facebook.com/haris.beslic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://github.com/halcika7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/haris-beslic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <form name="contact" data-netlify="true">
            <div className="form-group">
              <label htmlFor="email" className={errors.email && 'invalid'}>
                Email address <span>*</span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={inputOnChange}
                  value={values.email}
                  maxLength={100}
                />
              </label>
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="name" className={errors.name && 'invalid'}>
                Name <span>*</span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={inputOnChange}
                  value={values.name}
                  maxLength={100}
                />
              </label>
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message" className={errors.message && 'invalid'}>
                Message <span>*</span>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter message"
                  cols={10}
                  rows={10}
                  onChange={inputOnChange}
                  value={values.message}
                />
              </label>
              {errors.message && <p>{errors.message}</p>}
            </div>

            <Recaptcha
              className="d-none"
              sitekey="6LdjkeIUAAAAAM0MdNjiha8Xby2QDABOqdLMwxsm"
              // eslint-disable-next-line no-return-assign
              ref={e => (recaptchaInstance = e)}
              size="invisible"
              render="explicit"
              verifyCallback={verifyCallback}
              onloadCallback={() => setLoaded(true)}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => executeCaptcha(e)}
              disabled={disabled}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default React.memo(Contact);
