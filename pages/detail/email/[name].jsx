import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import '../../../scss/pages/detail.scss';
import projects from '../../../data/projects';
import DetailThumbnail from '../../../components/DetailThumbnail';

function Name({ email }) {
  const {
    headline,
    description,
    src,
  } = email;

  return (
    <div className="p-detail">
      <Header headline={headline} description={description} />
      <main className="p-detail--wrapper">
        <div className="p-detail--container">
          <div className="col-left">
            <div className="template-image--container">
              <img src={src} alt="" />
            </div>
          </div>
          <div className="col-right">
            <h2>See it in action</h2>
            <div className="c-DetailThumbnail--wrapper">
              <DetailThumbnail />
              <DetailThumbnail />
              <DetailThumbnail />
            </div>
          </div>
        </div>
      </main>
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
