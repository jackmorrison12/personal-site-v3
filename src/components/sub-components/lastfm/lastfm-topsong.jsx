import React, { useState, useEffect } from 'react';

export const LastFmData = ({ userName, apiKey }) => {
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch(`https://jackmorrison.herokuapp.com/lastfm`)
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
    const track = lfmData?.response?.top_song;
    if (error || !lfmData?.success) {
      return <p>{error}</p>;
    }
  
    if (!track) {
      return <p>Loading</p>;
    }
  
    const songName = track.name;
    const artistName = track.artist;

    return <span>{songName} by {artistName}</span>;
  };

  return buildLastFmData();
};