import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'emerald-ui/lib/styles.css';
import Header from './components/header';
import Notice from './components/notice';
import NewsContainer from './components/newsContainer';
import Buttons from './components/buttons';
import './css/main.css';
import Subscribe from './components/subscribe/subscribe';
import FormContainer from './components/formContainer';
import ModalForm from './components/modalForm';
import store from './redux/store';

function App() {
  const [count, setCount] = useState(1);
  const handleClickShowMoreNew = () => {
    setCount(count + 1);
  };
  return (
    <div className="">
      <Header />
      <section className="main">
        <section className="container">
          <Notice />
          <h1>Top news</h1>
          <section className="news">
            <NewsContainer count={count} />
          </section>
          <section className="section-button">
            <Buttons
              color="primary"
              text="View more stories"
              onClick={handleClickShowMoreNew}
            />
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
