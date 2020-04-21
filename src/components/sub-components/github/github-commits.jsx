import React, { useState, useEffect } from 'react';

export const GitHubData = ({ userName }) => {
  const [ghData, updateGhData] = useState({});
  
  useEffect(() => {
    fetch(`https://jackmorrison.herokuapp.com/github`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateGhData(data))
      .catch(() =>
        updateGhData({ error: 'Whoops! Something went wrong with GitHub' })
      );
  }, []);
  
  const buildGitHubData = () => {
    const  { error } = ghData;
    const resp = ghData?.response?.commits;


    if (error || !ghData?.success) {
      return <p>Loading...</p>;
    }
  
    if (resp === undefined) {
      return <p>Github API Unavailable</p>;
    }
    return <span>{resp}</span>;
  };

  return buildGitHubData();
};