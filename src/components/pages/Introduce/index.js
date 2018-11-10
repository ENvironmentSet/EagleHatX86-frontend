import React from 'react';

import Poster from 'components/atoms/Poster';
import SimpleTextArea from 'components/atoms/SimpleTextArea';

const Introduce = () => (
  <>
    <Poster url='http://52.15.143.191/static/us.jpg' />
    <SimpleTextArea>
      No Chain supports freedom and democracy in North Korea by disrupting the regime’s efforts to control information
      consumed by its people. Just like its physical borders, which are designed to prevent North Koreans freedom of
      movement and restrict outside influences, its information border is also tightly controlled to prevent the truth
      from flowing in or out. The North Korean regime understands that an informed population with access to
      perspectives that differ from the State’s ideology can lead to civil and political unrest; a direct threat to the
      sustainability of the regime.

      The regime prohibits the consumption of any information not sponsored by the State by imposing harsh punishment
      and prison sentences on its citizens. No Chain also understands the power of information to incite democracy and
      aims to bring the outside world into North Korea. Whether it is by land, air, or sea, No Chain works to inform the
      population about the truth outside its borders and about the truth about the brutality of its own government.
    </SimpleTextArea>
  </>
);

export default Introduce;
