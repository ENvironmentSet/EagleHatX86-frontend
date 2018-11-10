import { createAction, handleAction } from 'redux-actions';

export const UPDATE_DONATION = 'UPDATE_DONATION';

export const updateDonation = createAction(UPDATE_DONATION, Number);

export default handleAction(
  updateDonation,
  (_, {payload: amount}) => ({ amount }),
  1
);
