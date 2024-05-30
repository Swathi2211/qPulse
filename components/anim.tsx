import React from 'react';
import { colors } from './palette';
import Box from './box';

const YourMainComponent = () => {
  const data = [
    {
      img: require('../img/guide.png'),
      title: 'Guides',
      cont: 'Browse our in-depth guides to help you get started',
      btn: 'View Guides',
      bg: colors.purple200,
    },
    {
      img: require('../img/webinar.jpg'),
      title: 'Webinars',
      cont: 'Watch recorded webinars to level up your knowledge',
      btn: 'Watch Webinars',
      bg: 'transparent',
    },
  ];

  return <Box data={data} />;
};

export default YourMainComponent;
