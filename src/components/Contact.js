import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faSlack from '@fortawesome/fontawesome-free-brands/faSlack';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="flex-container">
        <div className="contact-method">
          <FontAwesomeIcon icon={faEnvelope} size="4x" />
          <div className="contact-text">
            Join our mailing list for event announcements.
          </div>
          <div id="mc_embed_signup">
            <form
              action="https://mplsjrdevs.us15.list-manage.com/subscribe/post?u=15e9ff6a082fef90507e7abca&amp;id=8fbf9281ef"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />{' '}
                <div id="mc_hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="b_15e9ff6a082fef90507e7abca_8fbf9281ef"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="divider" />
        <div className="contact-method">
          <FontAwesomeIcon icon={faSlack} size="4x" />
          <div className="contact-text">
            If you identify as a junior dev and would like to join our slack,
            please{' '}
            <a
              href="mailto:mplsjrdevs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              email us
            </a>.
          </div>
        </div>
        <div className="divider" />
        <div className="contact-method">
          <FontAwesomeIcon icon={faTwitter} size="4x" />

          <div className="contact-text">
            Find us at{' '}
            <a
              href="https://twitter.com/mplsjrdevs"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mplsjrdevs
            </a>.
          </div>
        </div>
        <div className="divider" />
        <div className="contact-method">
          <FontAwesomeIcon icon={faQuestion} size="4x" />
          <div className="contact-text">
            Got questions?<br />
            <br />
            <a
              href="mailto:mplsjrdevs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email us
            </a>{' '}
            and we&#39;ll be in touch.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
