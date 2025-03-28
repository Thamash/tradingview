import React from 'react';
import { IndicatorsTabProps } from './IndicatorsTab.types';
import { availableStudies } from '@/config/settings';
import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';
import { getTranslation } from '@/utils/helpers';

const IndicatorsTab = ({
  widgetOptions,
  handleStudyToggle,
}: IndicatorsTabProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {availableStudies.map((study) => (
          <div key={study} className="flex items-center">
            <input
              type="checkbox"
              id={`study-${study}`}
              className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              checked={widgetOptions.studies.includes(study)}
              onChange={() => handleStudyToggle(study)}
            />
            <label
              htmlFor={`study-${study}`}
              className="ml-2 block text-sm text-gray-300"
            >
              {study}
              <InfoTooltip
                text={getTranslation(`study-${study}`, widgetOptions.locale)}
              />
            </label>
          </div>
        ))}
      </div>

      <div className="bg-blue-900/20 rounded-lg p-4 mt-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-300">
              {getTranslation(
                'labels.indicatorInformation',
                widgetOptions.locale
              )}
            </h3>
            <div className="mt-2 text-sm text-blue-300">
              <p>
                {getTranslation(
                  'labels.indicatorHintText',
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

export default IndicatorsTab;
