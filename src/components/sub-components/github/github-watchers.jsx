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
    const watchers = ghData?.watchers;

    console.log(watchers);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (watchers == undefined) {
      return <p>Loading</p>;
    }
  
    return <span>{watchers}</span>;
  };

  return buildGitHubData();
};