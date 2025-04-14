// Example in a Next.js component
import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <h1>My MP4 Video</h1>
      <video width="600" controls>
        <source src="/videos/floral_mandala1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
