import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Toggle({ send, current }) {
  return (
    <button
      type="button"
      className="c-LightBox-toggle"
      onClick={() => send('TOGGLE')}
    >
      <div className="toggle-container">
        <div
          className={classNames(['toggle-circle', {
            desktop: current.matches('open.desktop'),
            mobile: current.matches('open.mobile'),
          }])}
        />
        <div className="icon-container">
          <svg data-icon-type="desktop" width="23" height="20" viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg"><path d="M21.083 0H1.917C.859 0 0 .84 0 1.875v12.5c0 1.035.859 1.875 1.917 1.875h7.666l-.639 1.875H6.07a.946.946 0 00-.958.938c0 .519.427.937.958.937h10.862a.946.946 0 00.958-.938.946.946 0 00-.958-.937h-2.875l-.64-1.875h7.667c1.058 0 1.917-.84 1.917-1.875v-12.5C23 .84 22.141 0 21.083 0zm-.639 13.75H2.556V2.5h17.888v11.25z" fill="#34BBDB" fillRule="nonzero" /></svg>
        </div>
        <div className="icon-container">
          <svg data-icon-type="mobile" width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.2 0H1.8C.806 0 0 .84 0 1.875v16.25C0 19.16.806 20 1.8 20h8.4c.994 0 1.8-.84 1.8-1.875V1.875C12 .84 11.194 0 10.2 0zM6 18.75c-.664 0-1.2-.559-1.2-1.25s.536-1.25 1.2-1.25c.664 0 1.2.559 1.2 1.25s-.536 1.25-1.2 1.25zm4.2-4.219a.461.461 0 01-.45.469h-7.5a.461.461 0 01-.45-.469V2.344c0-.258.202-.469.45-.469h7.5c.248 0 .45.21.45.469V14.53z" fill="#34BBDB" fillRule="nonzero" /></svg>
        </div>
      </div>
    </button>
  );
}

Toggle.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Toggle;
