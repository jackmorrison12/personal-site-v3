import React, { useState, useEffect } from 'react';

export const GitHubData = ({ userName }) => {
  const [ghData, updateGhData] = useState({});
  
  useEffect(() => {
    fetch(`https://api.github.com/repos/${userName}/personal-website/stats/contributors`)
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
    const commits = ghData[0]?.total;

    console.log(commits);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!commits) {
      return <p>Loading</p>;
    }
  
    return <span>{commits} commits</span>;
  };

  return buildGitHubData();
};