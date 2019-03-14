import React from 'react';
import PropTypes from 'prop-types';

const SomeImage = props => {
  return (
    <div>
      <img src={props.imagePath} />
    </div>
  );
};

SomeImage.propTypes = {
  imagePath: PropTypes.string
};

export default SomeImage;
