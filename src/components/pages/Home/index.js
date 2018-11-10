import React from 'react';

import Poster from 'components/atoms/Poster';
import SimpleTextArea from 'components/atoms/SimpleTextArea';
import Donation from 'components/organisms/Donation';
import NewsArticleList from 'containers/organisms/NewsArticleList';
import NorthKoreaDefectorStats from 'containers/molecules/NorthKoreaDefectorStats';
import USBStats from 'containers/molecules/USBStats';
import ConcentrationPrisonStats from 'components/molecules/ConcentrationPrisonStats';

const Home = () => (
  <>
    <Poster url='http://52.15.143.191/static/kim.jpg' />
    <SimpleTextArea>
      Our Project is 'Flash Drives for Freedom'.
      Our one USB can make a hundred North korean to wake up.
      But, by the way,
      We don't have any USB to send to North Korea or Money to buy USB.
    </SimpleTextArea>
    <Donation />
    <NewsArticleList />
    <NorthKoreaDefectorStats />
    <USBStats />
    <ConcentrationPrisonStats />
  </>
);

export default Home;
