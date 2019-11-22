import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import projects from '../../../data/projects';

function Name({ email }) {
  return (
    <div>
      <Header headline={email.name} />
      <div>{JSON.stringify(email)}</div>
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
