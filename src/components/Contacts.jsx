import React from 'react';
import MyModal from './UI/MyModal';

const Contacts = () => {
  return (
    <MyModal>
      <img src="./contacts.jpg" alt="contacts" />
      <div id="info">
        <p>+7-913-114-79-71</p>
        <a href="https://github.com/tsvetkov-alexey" target="_blank">
          Посмотреть гитхаб
        </a>
      </div>
    </MyModal>
  );
};

export default Contacts;
