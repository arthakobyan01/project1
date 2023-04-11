import React from 'react'
import Form from "./Form/Form";
import './CenterContainer.css'
import { Address } from './Address';
import { Contact } from './Contact';

export const CenterContainer = ({ tab }) => {

  return (
    <div className="CenterContainer">
      {tab === 0 && <Address />}
      {tab === 1 && <Contact />}
      {tab === 2 && <Form />}
    </div>
  );
};
