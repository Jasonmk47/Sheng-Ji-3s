import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import * as cardHelpers from '../../services/cardHelpers';

class Card extends PureComponent {
  render() {
    const { cardId } = this.props;

    return (
      <img
        className={`card=${cardId} ` + cardStyle.toString()}
        src={cardHelpers.getPictureUrlFromCardId(cardId)}
        alt={`${cardHelpers.getCardNameFromCardId(cardId)}`}
      />
    );
  }
}

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
};

const cardStyle = css({
  width: '10%',
  marginRight: '-8%',
});

export default Card;
