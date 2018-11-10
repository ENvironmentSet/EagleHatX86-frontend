import { connect } from 'react-redux';

import { updateDonation } from 'store';
import DonationSlider from 'components/atoms/DonationSlider';

const mapStateToProps = ({ donation: { amount } }) => ({ amount });

const mapDispatchToProps = dispatch => ({ update(_, value) { dispatch(updateDonation(value)); } });

export default connect(mapStateToProps, mapDispatchToProps)(DonationSlider);
