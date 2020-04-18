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
    const updated = ghData?.updated_at;

    console.log(updated);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!updated) {
      return <p>Loading</p>;
    }
  
    return <span>{new Date(updated).toLocaleString()}</span>;
  };

  return buildGitHubData();
};