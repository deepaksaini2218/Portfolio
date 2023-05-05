import React from 'react';
import Typewriter from 'typewriter-effect';
function Home(props) {
    return (
        <div>
            Home

            <h1>Welcome to my site</h1>
      <Typewriter
  options={{
    strings: ['web designer', 'web developer'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
    );
}

export default Home;