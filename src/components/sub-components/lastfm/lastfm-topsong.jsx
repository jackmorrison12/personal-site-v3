import React, { useState, useEffect } from 'react';

export const LastFmData = ({ userName, apiKey }) => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${userName}&api_key=${apiKey}&period=7day&limit=1&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, []);
  
  const buildLastFmData = () => {
    const  { error } = lfmData;
    const songName = lfmData?.toptracks?.track[0].name;
    const artistName = lfmData?.toptracks?.track[0].artist.name;
    // console.log(track)
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!songName) {
      return <p>Loading</p>;
    }
  
    return <span>{songName} by {artistName}</span>;
  };

  return buildLastFmData();
};