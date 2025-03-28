import React from 'react';
import { ConfigTabProps } from './ConfigTab.types';
import { getTranslation } from '@/utils/helpers';

export const ConfigTab = ({ widgetOptions }: ConfigTabProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white">
          {getTranslation('labels.jsonConfiguration', widgetOptions.locale)}
        </h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              JSON.stringify(widgetOptions, null, 2)
            );
            alert(
              getTranslation('labels.configurationCopied', widgetOptions.locale)
            );
          }}
          className="inline-flex items-center scaler-button px-3 py-1.5 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <svg
            className="mr-1.5 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
          {getTranslation('labels.copy', widgetOptions.locale)}
        </button>
      </div>
      <div className=" rounded-lg scaler-card p-4 overflow-auto max-h-96">
        <pre className="text-sm  whitespace-pre-wrap font-mono">
          {JSON.stringify(widgetOptions, null, 2)}
        </pre>
      </div>
      <div className="mt-4 bg-green-900/20 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-300">
              {getTranslation('labels.userManual', widgetOptions.locale)}
            </h3>
            <div className="mt-2 text-sm text-green-300">
              <p>
                {getTranslation(
                  'labels.userManualHintText',
                  widgetOptions.locale
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
