import React from 'react';
import { useMachine } from '@xstate/react';
import LightBoxContext from '../../../context/LightBoxContext';
import Layout from '../../../components/Layout';
import SecondaryHeader from '../../../components/SecondaryHeader';
import projects from '../../../data/projects';
import DetailThumbnail from '../../../components/DetailThumbnail';
import LightBox from '../../../components/LightBox';
import LightBoxStateMachine from '../../../components/LightBox/LightBoxStateMachine';
import { lockScroll, unlockScroll } from '../../../utils/scroll';

function Name({ email }) {
  const {
    headline,
    description,
    src,
    mobileSrc,
  } = email;

  const [current, send] = useMachine(LightBoxStateMachine, {
    actions: { lockScroll, unlockScroll },
  });

  const openModal = () => {
    send('OPEN');
  };

  return (
    <div className="p-detail">
      <SecondaryHeader headline={headline} description={description} />
      <main className="p-detail--wrapper">
        <div className="p-detail--container">
          <div className="col-left">
            <div
              className="template-image--container"
              onClick={openModal}
              tabIndex="0"
              role="button"
              onKeyPress={openModal}
            >
              <img src={src} alt="" />
            </div>
          </div>
          <div className="col-right">
            <h2>See it in action</h2>
            <div className="c-DetailThumbnail--wrapper">
              <DetailThumbnail src={src} />
              <DetailThumbnail src={src} />
              <DetailThumbnail src={src} />
            </div>
          </div>
        </div>
      </main>
      <LightBoxContext.Provider value={{ current, send }}>
        <LightBox data={email} />
      </LightBoxContext.Provider>
    </div>
  );
}

Name.getInitialProps = ({ query }) => {
  const { emails } = projects;
  const email = emails.find((mail) => mail.name === query.name);

  return {
    email,
  };
};

Name.layout = Layout;

export default Name;
