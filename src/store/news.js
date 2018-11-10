import { createAction, handleAction } from 'redux-actions';

export const UPDATE_NEWS = 'UPDATE_NEWS';

export const loadNews = () => dispatch =>
  fetch('http://52.15.143.191/index.php/news')
    .then(response => response.json())
    .then(updateNews)
    .then(dispatch);
export const updateNews = createAction(UPDATE_NEWS);

export default handleAction(
  updateNews,
  (_, {payload: news}) => news,
  []
);
