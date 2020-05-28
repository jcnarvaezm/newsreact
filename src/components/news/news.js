import React from 'react';

const News = (props) => {
  const { title, summary, link } = props;
  let { image } = props;
  if (image === '' || image === null) {
    image =
      'https://matthewsenvironmentalsolutions.com/images/com_hikashop/upload/not-available.png';
  }
  return (
    <section className="section-new">
      <section className="img-new">
        <a href={link} target="_blank">
          <img src={image} alt="" />
        </a>
      </section>
      <section className="titular">
        <h2>{title}</h2>
      </section>
      <section className="summary">
        <p>{summary}</p>
      </section>
    </section>
  );
};
export default News;
