import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // const [formData, setFormData] = useState({ name: '', email: '' });
  const [formData, setFormData] = useState({ jobtitle: '', company: '', workplaceType: '', jobLocation: '', jobtype: ''  });


  const handleFormData = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <ChildComponent onFormDataChange={handleFormData} />
      <h3>Received Form Data:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default ParentComponent;
