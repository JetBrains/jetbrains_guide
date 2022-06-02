import * as React from 'react';

const GifPlayer = require('react-gif-player');
// import '../../../../../node_modules/react-gif-player/src/GifPlayer.scss';

const AnimatedGifPlayer = ({ animatedGif }: any) => {
  return (
    <>
      {animatedGif && (
        <GifPlayer
          alt={`Player`}
          gif={animatedGif.file.publicURL}
          width={animatedGif.width}
          height={animatedGif.height}
        />
      )}
    </>
  );
};

export default AnimatedGifPlayer;
