import React, { useState } from 'react';
import { Alert } from 'emerald-ui/lib/';

const Notice = () => {
  const [varshow, setShow] = useState(true);
  const handleDismiss = (e) => {
    e.preventDefault();
    setShow(!varshow);
  };

  return (
    <React.Fragment>
      {varshow && (
        <Alert dismissible onDismiss={handleDismiss}>
          <section>
            Welcome to the new look of News.com. Keep scrolling to discover
            interesting new features and news.
          </section>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default Notice;
