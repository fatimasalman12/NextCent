import LoginForm from '@/components/login/form'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import SuccessMessage from '@/components/ui/alert';
import WarningComponent from '@/components/main/warning';
import Heading from '@/components/main/heading';

function LoginPage() {
  const [data, setData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const [isWarning, setIsWarning] = useState(false);

  const submitForm = (formData) => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data.message === 'Login successful') {
          setIsSuccess(true);
          setIsWarning(false); 
          setTimeout(() => {
            router.push('/login/homepage'); // Redirects to /login/homepage after 3 seconds
          }, 4000); // Redirect on success
        } else {
          setIsSuccess(false);
          setIsWarning(true); // Show warning if unsuccessful
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <Heading/>
      {isSuccess && <SuccessMessage />}
      {isWarning && <WarningComponent />}
      <LoginForm onSubmit={submitForm}/>
    </div>
  )
}
export default LoginPage; 
