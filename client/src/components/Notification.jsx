import React from "react";
import { useResume } from "../ResumeContext";
import { Link } from "react-router-dom";
const Notification = () => {
  const { closeNotificationHandler } = useResume();

  return (
    <div>
      <div className="fixed top-5 right-5 ">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
          <button
            onClick={closeNotificationHandler}
            type="submit"
            className="fixed right-5 top-2 py-3 px-5 my-3 text-sm font-medium text-center text-white rounded-sm bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            X
          </button>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white animate-bounce">
            Important Message !
          </h5>
          <p className="font-semibold text-gray-700 dark:text-gray-400">
            You can edit the input field information as per your requirement or
            click below to see the final result.
          </p>

          <Link to="/resume-preview">
            <button
              type="submit"
              className="py-3 px-5 my-3 text-sm font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              See Results !
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
