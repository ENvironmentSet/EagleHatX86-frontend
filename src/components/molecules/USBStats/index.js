import React from 'react';

import ChartTitle from 'components/atoms/ChartTitle';
import USBChart from 'components/atoms/USBChart';

const USBStats = ({ datas, load }) => (
  datas.length ?
    <>
      <ChartTitle title='USB Status' />
      <USBChart datas={datas} />
    </>
    :
    load()
);

export default USBStats;
