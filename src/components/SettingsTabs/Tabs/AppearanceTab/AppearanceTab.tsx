import React from 'react';
import { AppearanceTabProps } from './AppearanceTab.types';
import { getTranslation } from '@/utils/helpers';
import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';

const AppearanceTab = ({
  widgetOptions,
  handleOptionChange,
}: AppearanceTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="toolbar_bg"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {getTranslation('labels.backgroundColor', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('toolbar_bg', widgetOptions.locale)}
            />
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              id="toolbar_bg"
              className="h-10 w-10 cursor-pointer rounded border"
              value={widgetOptions.toolbar_bg}
              onChange={(e) => handleOptionChange('toolbar_bg', e.target.value)}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {widgetOptions.toolbar_bg}
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="width"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {getTranslation('labels.width', widgetOptions.locale)}
            <InfoTooltip text={getTranslation('width', widgetOptions.locale)} />
          </label>
          <input
            type="text"
            id="width"
            className="input px-3 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.width}
            onChange={(e) => handleOptionChange('width', e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {getTranslation('labels.height', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('height', widgetOptions.locale)}
            />
          </label>
          <input
            type="text"
            id="height"
            className="input px-3 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.height}
            onChange={(e) => handleOptionChange('height', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="popup_width"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {getTranslation('labels.popupWidth', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('popup_width', widgetOptions.locale)}
            />
          </label>
          <input
            type="text"
            id="popup_width"
            className="input px-3 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.popup_width}
            onChange={(e) => handleOptionChange('popup_width', e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="popup_height"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {getTranslation('labels.popupHeight', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('popup_height', widgetOptions.locale)}
            />
          </label>
          <input
            type="text"
            id="popup_height"
            className="input px-3 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.popup_height}
            onChange={(e) => handleOptionChange('popup_height', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppearanceTab;
