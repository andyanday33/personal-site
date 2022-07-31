import React from 'react';
import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';

// styles
import './ParticleContainer.css';

/**
 * A container component that consists of animated responsive
 * particles.
 *
 * @return {JSX.Element} A JSX template with animated particles.
 */
const ParticleContainer = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <React.Fragment>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
            },
            image: 'url("./tile_background.png")',
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
          backgroundMask: {
            cover: {
              color: {
                value: '#3F4E4F',
              },
            },
            enable: true,
          },
          fullScreen: {
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
                parallax: {
                  force: 60,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 100,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              grab: {
                distance: 400,
              },
              repulse: {
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: 'ease-out-quad',
                  selectors: [],
                },
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: {
                value: '#ffffff',
              },
              distance: 150,
              enable: true,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 40,
            },
            opacity: {
              animation: {
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 30,
              },
              animation: {
                speed: 40,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
    </React.Fragment>
  );
};

export default ParticleContainer;
