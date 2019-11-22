import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import projects from '../../../data/projects';

function Name({ email }) {
  return (
    <div>
      <Header headline={email.headline} description={email.description} />
      <div>{JSON.stringify(email, null, 2)}</div>
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
