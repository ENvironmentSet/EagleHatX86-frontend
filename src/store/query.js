import { createAction, handleActions } from 'redux-actions';
import { Enum } from 'utils';

export const FILTER = new Enum('OLDER', 'NEWER');

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';

export const updateFilter = createAction(UPDATE_FILTER);
export const updateKeyword = createAction(UPDATE_KEYWORD);

export default handleActions(
  {
    [updateFilter]: (state, { payload: filter }) => ({...state, filter}),
    [updateKeyword]: (state, { payload: keyword }) => ({...state, keyword}),
  },
  {
    filter: 'NEWER',
    keyword: '',
  }
);
