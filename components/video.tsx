import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Video(props: any) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
    const opts: YouTubeProps['opts'] = {
      height: '840',
      width: '460',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        //autoplay: 1,
      },
    };
  
    return <YouTube videoId={props.videoId} opts={opts} onReady={onPlayerReady} />;
  }