import React from 'react';

interface SpotifyPlayerProps {
  artistId: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ artistId }) => {
  if (!artistId) {
    return null;
  }

  const embedUrl = `https://open.spotify.com/embed/artist/${artistId}`;

  return (
    <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        right: '20px', 
        zIndex: 1000, 
        width: '300px'
    }}>
      <iframe
        style={{ borderRadius: '12px' }}
        src={embedUrl}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`Spotify Player for artist ${artistId}`}
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer; 