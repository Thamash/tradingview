import { availableFeatures } from '@/config/settings';
import React from 'react';
import { FeaturesTabProps } from './FeaturesTab.types';
import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';
import { getTranslation } from '@/utils/helpers';

const FeaturesTab = ({
  widgetOptions,
  handleFeatureToggle,
}: FeaturesTabProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {availableFeatures.map((feature) => {
          const isEnabled = !widgetOptions.disabled_features.includes(feature);
          return (
            <div
              key={feature}
              className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`feature-${feature}`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 cursor-pointer flex-grow"
                >
                  {feature}
                  <InfoTooltip
                    text={getTranslation(
                      `feature-${feature}`,
                      widgetOptions.locale
                    )}
                  />
                </label>
                <div className="relative">
                  <label
                    className="inline-flex items-center cursor-pointer"
                    htmlFor={`feature-${feature}`}
                  >
                    <input
                      type="checkbox"
                      id={`feature-${feature}`}
                      className="sr-only peer"
                      checked={isEnabled}
                      onChange={() => handleFeatureToggle(feature, !isEnabled)}
                    />
                    <div
                      className={`relative w-14 h-7 rounded-full peer after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all cursor-pointer
                                        ${
                                          isEnabled
                                            ? 'bg-green-100 dark:bg-green-900/30 peer-checked:after:translate-x-full peer-checked:after:border-white'
                                            : 'bg-red-100 dark:bg-red-900/30'
                                        }`}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold pointer-events-none select-none">
                        {isEnabled && (
                          <span
                            className={`absolute left-1.5 transition-opacity text-red-600 dark:text-red-400`}
                          >
                            {getTranslation('labels.off', widgetOptions.locale)}
                          </span>
                        )}
                        {!isEnabled && (
                          <span
                            className={`absolute right-1 transition-opacity text-green-600 dark:text-green-400`}
                          >
                            {getTranslation('labels.on', widgetOptions.locale)}
                          </span>
                        )}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mt-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              {getTranslation('labels.importantHint', widgetOptions.locale)}
            </h3>
            <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              <p>
                {getTranslation(
                  'labels.featuresHintText',
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

export default FeaturesTab;
