"use client";
import React, { useState } from 'react';
import Joyride from 'react-joyride';

const Tour = () => {
  const [run, setRun] = useState(false);

  const steps = [
    {
      target: '.book-section',
      content: 'Click here to book now!',
    },
    {
      target: '.booking-form', // Update with your form class or ID
      content: 'Fill out the form below.',
    },
    {
      target: '.search-button', // Update with your search button class or ID
      content: 'Finally, click here to search.',
    },
  ];

  return (
    <div>
      <button onClick={() => setRun(true)}>Start Tour</button>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        scrollToFirstStep
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
        callback={(data) => {
          if (data.status === 'finished' || data.status === 'skipped') {
            setRun(false);
          }
        }}
      />
    </div>
  );
};

export default Tour;
