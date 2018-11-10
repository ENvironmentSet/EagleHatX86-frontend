import { createAction, handleActions } from 'redux-actions';

export const UPDATE_USB_GRAPH = 'UPDATE_USB_GRAPH';
export const UPDATE_NORTH_KOREA_DEFECTOR = 'UPDATE_NORTH_KOREA_DEFECTOR';

export const loadUSBGraph = () => dispatch =>
  fetch('http://52.15.143.191/index.php/usb')
    .then(response => response.json())
    .then(updateUsbGraph)
    .then(dispatch);
export const loadNorthKoreaDefector = () => dispatch =>
  fetch('http://52.15.143.191/index.php/northKoreaDefector')
    .then(response => response.json())
    .then(updateNorthKoreaDefector)
    .then(dispatch);
export const updateUsbGraph = createAction(UPDATE_USB_GRAPH);
export const updateNorthKoreaDefector = createAction(UPDATE_NORTH_KOREA_DEFECTOR);

export default handleActions(
  {
    [updateUsbGraph]: (state, { payload: USB }) => ({...state, USB}),
    [updateNorthKoreaDefector]: (state, {payload: northKoreaDefector}) => ({...state, northKoreaDefector}),
  },
  {
    northKoreaDefector: [],
    USB: []
  }
)