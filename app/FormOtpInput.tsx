'use client';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function FormOtpInput() {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}
