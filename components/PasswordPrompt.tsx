import React, { useState } from 'react';

interface PasswordPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ADMIN_PASSWORD = '007124';

const PasswordPrompt: React.FC<PasswordPromptProps> = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onSuccess();
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm m-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-brand-dark">Admin Access</h2>
          <button onClick={onClose} className="text-2xl font-light text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <p className="text-gray-600 mb-6">Please enter the password to access admin controls.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="admin-password" className="text-sm font-medium text-gray-600 mb-1 sr-only">Password</label>
            <input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              autoFocus
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="w-full mt-6 bg-brand-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;