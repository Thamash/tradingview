import React, { useState } from 'react';
import { getTranslation } from '@/utils/helpers';
import { SettingsTabsProps } from './SettingsTabs.types';
import BasicTab from './Tabs/BasicTab/BasicTab';
import AppearanceTab from './Tabs/AppearanceTab/AppearanceTab';
import IndicatorsTab from './Tabs/IndicatorsTab/IndicatorsTab';
import FeaturesTab from './Tabs/FeaturesTab/FeaturesTab';
import DisplayTab from './Tabs/DisplayTab/DisplayTab';
import { ConfigTab } from './Tabs/ConfigTab/ConfigTab';
import FastSettings from './FastSettings/FastSettings';

const SettingsTabs = ({
  widgetOptions,
  handleStudyToggle,
  handleOptionChange,
  handleFeatureToggle,
  handleBooleanChange,
  setWidgetOptions,
}: SettingsTabsProps) => {
  const [activeTab, setActiveTab] = useState('basic');
  const tabOptions = [
    { id: 'basic', label: getTranslation('labels.tabOptions.basic', widgetOptions.locale) },
    {
      id: 'appearance',
      label: getTranslation(
        'labels.tabOptions.appearance',
        widgetOptions.locale
      ),
    },
    {
      id: 'indicators',
      label: getTranslation(
        'labels.tabOptions.indicators',
        widgetOptions.locale
      ),
    },
    {
      id: 'features',
      label: getTranslation('labels.tabOptions.features', widgetOptions.locale),
    },
    {
      id: 'display',
      label: getTranslation('labels.tabOptions.display', widgetOptions.locale),
    },
    {
      id: 'config',
      label: getTranslation('labels.tabOptions.config', widgetOptions.locale),
    },
  ];
  return (
    <>
      <div className="scaler-card rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="border-b border-gray-700">
          <nav className="flex overflow-x-auto" aria-label="Tabs">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                        px-4 py-3 text-sm font-medium whitespace-nowrap cursor-pointer
                        ${
                          activeTab === tab.id
                            ? 'border-b-2 border-primary-500 text-scaler-green'
                            : 'text-gray-400 hover:text-gray-300'
                        }
                      `}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'basic' && (
            <BasicTab
              widgetOptions={widgetOptions}
              handleOptionChange={handleOptionChange}
            />
          )}
          {activeTab === 'appearance' && (
            <AppearanceTab
              widgetOptions={widgetOptions}
              handleOptionChange={handleOptionChange}
            />
          )}

          {activeTab === 'indicators' && (
            <IndicatorsTab
              widgetOptions={widgetOptions}
              handleStudyToggle={handleStudyToggle}
            />
          )}

          {activeTab === 'features' && (
            <FeaturesTab
              widgetOptions={widgetOptions}
              handleFeatureToggle={handleFeatureToggle}
            />
          )}

          {activeTab === 'display' && (
            <DisplayTab
              widgetOptions={widgetOptions}
              handleBooleanChange={handleBooleanChange}
            />
          )}

          {activeTab === 'config' && (
            <ConfigTab widgetOptions={widgetOptions} />
          )}
        </div>
      </div>

      <FastSettings
        widgetOptions={widgetOptions}
        setWidgetOptions={setWidgetOptions}
      />
    </>
  );
};

export default SettingsTabs;
