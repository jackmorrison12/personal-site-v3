import React, { useState, useEffect } from 'react';

export const GitHubData = ({ userName }) => {
  const [ghData, updateGhData] = useState({});
  
  useEffect(() => {
    fetch(`https://api.github.com/repos/${userName}/personal-website`)
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
    const forks = ghData?.forks;

    console.log(forks);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (forks == undefined) {
      return <p>Loading</p>;
    }
  
    return <span>{forks}</span>;
  };

  return buildGitHubData();
};