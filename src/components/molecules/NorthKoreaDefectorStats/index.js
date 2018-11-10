import React from 'react';

import ChartTitle from 'components/atoms/ChartTitle';
import NorthKoreaDefectorChart from 'components/atoms/NorthKoreaDefectorChart';

const NorthKoreaDefectorStats = ({ datas, load }) => (
  datas.length ?
    <>
      <ChartTitle title={'North Korea Defector Status'} />
      <NorthKoreaDefectorChart datas={datas} />
    </>
    :
    load()
);

export default NorthKoreaDefectorStats
