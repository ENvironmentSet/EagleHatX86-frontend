import React from 'react';
import { VictoryChart, VictoryStack, VictoryBar, VictoryZoomContainer } from 'victory';

const USBChart = ({ datas }) => (
 <VictoryChart
    width={600}
    height={350}
    scale={{x: 'time'}}
    containerComponent={
      <VictoryZoomContainer responsive={false}/>
    }
  >
    <VictoryStack
      colorScale={['tomato', 'gold']}
    >
      <VictoryBar
        data={datas.map(({ year: x, send: y}) => ({ x, y }))}
      />
      <VictoryBar
        data={datas.map(({ year: x, receive: y }) => ({ x, y }))}
      />
    </VictoryStack>
  </VictoryChart>
);

export default USBChart;
