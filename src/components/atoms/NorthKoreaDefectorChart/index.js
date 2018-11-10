import React from 'react';
import { VictoryChart, VictoryLine, VictoryZoomContainer } from 'victory';

const NorthKoreaDefectorChart = ({ datas }) => (
  <VictoryChart
    width={600}
    height={350}
    scale={{x: 'time'}}
    containerComponent={
      <VictoryZoomContainer responsive={false} />
    }
  >
    <VictoryLine
      style={
        {
          data: {
            stroke: 'tomato'
          }
        }
      }
      data={
        datas.map(({ year: x, count: y }) => ({ x, y }))
      }
    />
  </VictoryChart>
);

export default NorthKoreaDefectorChart;
