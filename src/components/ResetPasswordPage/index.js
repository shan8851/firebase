import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const ResetPasswordPage = () => (
  <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
    <h1 className="mt-16">Check your mailbox</h1>
    <h3 className="mt-2">
      Please follow the instructions in your email to reset your
      password
    </h3>
    <button className="bg-blue-dark hover:bg-blue-darker text-white font-bold py-2 px-4 text-xl rounded mt-8">
      <Link to={ROUTES.HOME} className="text-white no-underline">
        Go Back
      </Link>
    </button>
  </div>
);

export default ResetPasswordPage;
