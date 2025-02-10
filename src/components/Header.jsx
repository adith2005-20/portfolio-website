import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  const [time, setTime] = useState('');
  const [tidbitSequence, setTidbitSequence] = useState(['$ adith-biju', Infinity]);
  const [repeat, setRepeat] = useState(false);

  // Function to update the time
  const updateTime = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = now.toLocaleTimeString('en-US', options);
    setTime(timeString);
  };

  // Update the time every second
  useEffect(() => {
    updateTime(); // Initial call to set the time immediately
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Logic for updating the tidbit sequence with smooth transitions
  const tidbitLogic = (param) => {
    let newSequence = [];

    // Set a new sequence based on the hovered parameter
    if (param === 'home') {
      newSequence = [
        '$ adith-biju', 
        20000,
        `$ echo "Local Time: ${time}"`,
        2000
      ];
      setRepeat(true);
    }
    else if (param === 'projects') {
      newSequence = [
        '$ ls /projects',
      ];
    } else if (param === 'contact-me') {
      newSequence = [
        '$ cd /contact',
        200,
        '$ echo "Contact me!"',
      ];
    } else {
      newSequence = [
        '$ adith-biju',
        10000,
        `$ echo "Local Time: ${time}"`,
        5000
      ];
    }

    // Clear the current sequence and set the new one with a smooth transition
    setTidbitSequence(newSequence);
  };

  return (
    <div className='flex bg-[rgb(12,12,12)] min-h-12'>
      <div className='w-128 my-6 ml-4 hidden md:block md:w-auto'>
        {/* The key prop is used to trigger re-rendering when the sequence changes */}
        <TypeAnimation
          key={tidbitSequence.join(',')} // Unique key to trigger re-render
          sequence={tidbitSequence}
          style={{
            fontSize: '1.5em',
            display: 'inline-block',
            fontFamily: "'IBM Plex Mono', monospace",
            color: 'white',
          }}
          repeat={false}
        />
      </div>

      <ul className='text-white flex gap-8 mb-8 mt-6 ml-auto mr-16 text-xl sm:justify-center' style={{ fontFamily: "'Instrument Serif', serif" }}>
        <li>
          <Link to='/' onMouseEnter={() => tidbitLogic('home')}>
            home
          </Link>
        </li>
        
        <li>
          <Link to='/projects' onMouseEnter={() => tidbitLogic('projects')}>
            projects
          </Link>
        </li>
        <li>
          <Link to='/contact' onMouseEnter={() => tidbitLogic('contact-me')}>
            contact-me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
