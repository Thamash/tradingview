import React from 'react';
import { DisplayTabProps } from './DisplayTab.types';
import { getTranslation } from '@/utils/helpers';
import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';

const DisplayTab = ({
  widgetOptions,
  handleBooleanChange,
}: DisplayTabProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-600">
        <h3 className="font-medium text-gray-800 dark:text-white mb-3">
          {getTranslation('labels.share', widgetOptions.locale)}
        </h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="enable_publishing"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.enable_publishing}
              onChange={() => handleBooleanChange('enable_publishing')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.allowShare', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('enable_publishing', widgetOptions.locale)}
              />
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              id="save_image"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.save_image}
              onChange={() => handleBooleanChange('save_image')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.allowSaveImage')}
              <InfoTooltip
                text={getTranslation('save_image', widgetOptions.locale)}
              />
            </span>
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-600">
        <h3 className="font-medium text-gray-800 dark:text-white mb-3">
          {getTranslation('labels.toolbar', widgetOptions.locale)}
        </h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="hide_side_toolbar"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.hide_side_toolbar}
              onChange={() => handleBooleanChange('hide_side_toolbar')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.hideSideToolbar', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('hide_side_toolbar', widgetOptions.locale)}
              />
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              id="hide_drawing_toolbar"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.hide_drawing_toolbar}
              onChange={() => handleBooleanChange('hide_drawing_toolbar')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation(
                'labels.hideDrawingToolbar',
                widgetOptions.locale
              )}
              <InfoTooltip
                text={getTranslation(
                  'hide_drawing_toolbar',
                  widgetOptions.locale
                )}
              />
            </span>
          </label>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-600">
        <h3 className="font-medium text-gray-800 dark:text-white mb-3">
          {getTranslation('labels.dataDisplay', widgetOptions.locale)}
        </h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="hide_volume"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.hide_volume}
              onChange={() => handleBooleanChange('hide_volume')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.hideTraffic', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('hide_volume', widgetOptions.locale)}
              />
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              id="allow_symbol_change"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.allow_symbol_change}
              onChange={() => handleBooleanChange('allow_symbol_change')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.allowSymbolChange', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation(
                  'allow_symbol_change',
                  widgetOptions.locale
                )}
              />
            </span>
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-600">
        <h3 className="font-medium text-gray-800 dark:text-white mb-3">
          {getTranslation('labels.allowSymbolChange', widgetOptions.locale)}
        </h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="withdateranges"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.withdateranges}
              onChange={() => handleBooleanChange('withdateranges')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.showDateRange')}
              <InfoTooltip
                text={getTranslation('withdateranges', widgetOptions.locale)}
              />
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              id="details"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.details}
              onChange={() => handleBooleanChange('details')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.showLabels', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('details', widgetOptions.locale)}
              />
            </span>
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-600">
        <h3 className="font-medium text-gray-800 dark:text-white mb-3">
          {getTranslation('labels.moreDetails', widgetOptions.locale)}
        </h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="show_popup_button"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.show_popup_button}
              onChange={() => handleBooleanChange('show_popup_button')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.showPopUpbutton', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('show_popup_button', widgetOptions.locale)}
              />
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              id="hotlist"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.hotlist}
              onChange={() => handleBooleanChange('hotlist')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.showHotlist', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('hotlist', widgetOptions.locale)}
              />
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              id="calendar"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              checked={widgetOptions.calendar}
              onChange={() => handleBooleanChange('calendar')}
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {getTranslation('labels.showCalendar', widgetOptions.locale)}
              <InfoTooltip
                text={getTranslation('calendar', widgetOptions.locale)}
              />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DisplayTab;
