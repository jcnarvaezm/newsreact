import React, { useState } from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import 'emerald-ui/lib/styles.css';

import Header from './components/header';
import Notice from './components/notice';
import NewsContainer from './components/newsContainer';
import Subscribe from './components/subscribe/subscribe';
import FormContainer from './components/formContainer';
import ModalForm from './components/modalForm';

import { Button } from 'emerald-ui/lib/';

import './css/main.css';

function App() {
  const [count, setCount] = useState(1);

  const API = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9c5c16a422d4b7b90accf49eed04cbc`;
  const handleClickShowMoreNew = (e) => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Header />
      <section className="main">
        <section className="container">
          <Notice />
          <h1>Top news</h1>
          <section className="news">
            <NewsContainer count={count} API={API} />
          </section>
          <section className="section-button">
            <Button color="primary" onClick={handleClickShowMoreNew}>
              <span>View more stories</span>
            </Button>
          </section>
        </section>
        <Subscribe />
        <Provider store={store}>
          <FormContainer />
        </Provider>
        <Provider store={store}>
          <ModalForm />
        </Provider>
      </section>
    </div>
  );
}

export default App;
