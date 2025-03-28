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
              className="scaler-button border-light-green p-3 rounded-lg shadow-sm border border-gray-600 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`feature-${feature}`}
                  className="text-sm font-medium text-gray-200 cursor-pointer flex-grow"
                >
                  {getTranslation(`labels.features.${feature}`, widgetOptions.locale)}
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
                                            ? 'bg-grey peer-checked:after:translate-x-full peer-checked:after:border-white'
                                            : 'bg-grey'
                                        }`}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold pointer-events-none select-none">
                        {isEnabled && (
                          <span
                            className={`absolute left-1.5 transition-opacity text-black`}
                          >
                            {getTranslation('labels.off', widgetOptions.locale)}
                          </span>
                        )}
                        {!isEnabled && (
                          <span
                            className={`absolute right-1 transition-opacity text-scaler-green`}
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
    </div>
  );
};

export default FeaturesTab;
