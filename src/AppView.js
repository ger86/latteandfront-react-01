import React from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import Message from './components/Message';

const AppView = ({handleClick, message}) => (
    <div className="App">
      <header className="App-header">
        <h1><span role="img" aria-label="Yellow heart">💛</span> Latte and Front</h1>
        <Message>
            <p>{message}</p>
        </Message>
        <Button callback={handleClick} text="Púlsame"/>
      </header>
      <div>
        <Counter />
      </div>
    </div>
);
export default AppView;