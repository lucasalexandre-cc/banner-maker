import React from 'react';

const UnloggedRouter: React.FC = () => {
  window.location.href = `${process.env.REACT_APP_RESPONDEAI_URL}/admin`;
  return null;
};

export default UnloggedRouter;
