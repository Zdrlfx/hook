import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 flex-col">
        <div className="text-center">
          <img
            alt="Your Company"
            src="/src/assets/logo.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-5 mb-10 text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 text-left"> Welcome back </h1>
        <form action="#" method="POST" className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14-day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
