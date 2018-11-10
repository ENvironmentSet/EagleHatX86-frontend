import { createAction, handleAction } from 'redux-actions';

export const UPDATE_NOTICES = 'UPDATE_NOTICES';

export const loadNotices = () => (dispatch, getState) => {
  const { query: { filter, keyword } } = getState();
  fetch(`http://52.15.143.191/index.php/notices/${filter}/${keyword}`)
    .then(response => response.json())
    .then(updateNotices)
    .then(dispatch);
};
export const updateNotices = createAction(UPDATE_NOTICES);

export default handleAction(
  updateNotices,
  (_, { payload: notices }) => notices,
  []
);
