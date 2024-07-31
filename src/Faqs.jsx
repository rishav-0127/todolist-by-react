import React, { useState } from 'react';
import { qaData } from './data/faqQuestions';
import 'react-notifications/lib/notifications.css';

export default function Faqs() {
  let [currentId, setCurrentId] = useState(qaData[0].id);

  let items = qaData.map((itemsData, i) => {
    return (
      <Faqitems
        itemsData={itemsData}
        currentId={currentId}
        setCurrentId={setCurrentId}
        key={i}
      />
    );
  });

  return (
    <div>
      <h1>Frequently Asked Question(FAQs)</h1>
      <div className="faqouter">{items}</div>
    </div>
  );
}

function Faqitems({ itemsData, currentId, setCurrentId }) {
  return (
    <div className="faqitems">
      <h2 onClick={() => setCurrentId(itemsData.id)}>{itemsData.question}</h2>
      <p className={currentId === itemsData.id ? 'activeAns' : ''}>
        {itemsData.answer}
      </p>
    </div>
  );
}