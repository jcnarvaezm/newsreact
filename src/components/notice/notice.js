import React, { useState } from 'react';
import { Alert, IconButton } from 'emerald-ui/lib/';

const Notice = () => {
  const [varshow, setShow] = useState(true);
  const hancleCloseNotice = (e) => {
    e.preventDefault();
    setShow(!varshow);
  };

  return (
    <React.Fragment>
      {varshow && (
        <Alert>
          <section>
            Welcome to the new look of News.com. Keep scrolling to discover
            interesting new features and news.
          </section>
          <section className="btn-toolbar">
            <IconButton
              ariaLabel="Close"
              icon="cancel"
              title="Close"
              onClick={hancleCloseNotice}
            />
          </section>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default Notice;
