import React from 'react';
import { Panel, Row, Col } from 'emerald-ui/lib/';
import News from '../news';
import useFetch from '../../controllers/useFetch';

const NewsContainer = (props) => {
  const count = props.count;
  const [newsData, isLoading] = useFetch(
    `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-28&sortBy=publishedAt&apiKey=b9c5c16a422d4b7b90accf49eed04cbc`,
    {}
  );

  return (
    <Panel>
      <Panel.Body>
        {isLoading && <h2>Loading...!!!</h2>}
        <Row>
          {Object.values(newsData).map(
            (news, index) =>
              index < count * 4 && (
                <Col xs={12} sm={6} key={index}>
                  <News
                    title={news.title}
                    image={news.urlToImage}
                    summary={news.description}
                    link={news.url}
                  />
                </Col>
              )
          )}
        </Row>
      </Panel.Body>
    </Panel>
  );
};

export default NewsContainer;
