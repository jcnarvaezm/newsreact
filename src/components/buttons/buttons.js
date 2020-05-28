import React from 'react';
import Button from 'emerald-ui/lib/Button';

const Buttons = (props) => {
  const { text, color, onClick } = props;

  return (
    <section className="section-button">
      <Button color={color} onClick={onClick}>
        <span>{text}</span>
      </Button>
    </section>
  );
};
export default Buttons;
