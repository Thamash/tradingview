import { getTranslation } from '@/utils/helpers';
import React from 'react';
import { BasicTabProps } from './BasicTab.types';
import SymbolSelector from '@/components/SymbolSelector/SymbolSelector';
import { TradingViewWidgetConfig } from '@/components/CustomizableChart/CustomizableChart.types';
import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';

const BasicTab = ({ widgetOptions, handleOptionChange }: BasicTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <div>
          <SymbolSelector
            onChange={(key, value) =>
              handleOptionChange(key as keyof TradingViewWidgetConfig, value)
            }
            lang={widgetOptions.locale}
          />
        </div>

        <div>
          <label
            htmlFor="interval"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            {getTranslation('labels.interval', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('interval', widgetOptions.locale)}
            />
          </label>
          <select
            id="interval"
            className="input border-light-green px-3 py-2 scaler-button border border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.interval}
            onChange={(e) => handleOptionChange('interval', e.target.value)}
          >
            <option value="1">
              {getTranslation(
                'labels.intervalOptions.oneMinute',
                widgetOptions.locale
              )}
            </option>
            <option value="5">
              {getTranslation(
                'labels.intervalOptions.fiveMinutes',
                widgetOptions.locale
              )}
            </option>
            <option value="15">
              {getTranslation(
                'labels.intervalOptions.fifteenMinutes',
                widgetOptions.locale
              )}
            </option>
            <option value="30">
              {getTranslation(
                'labels.intervalOptions.thirtyMinutes',
                widgetOptions.locale
              )}
            </option>
            <option value="60">
              {getTranslation(
                'labels.intervalOptions.oneHour',
                widgetOptions.locale
              )}
            </option>
            <option value="D">
              {getTranslation(
                'labels.intervalOptions.oneDay',
                widgetOptions.locale
              )}
            </option>
            <option value="W">
              {getTranslation(
                'labels.intervalOptions.oneWeek',
                widgetOptions.locale
              )}
            </option>
            <option value="M">
              {getTranslation(
                'labels.intervalOptions.oneMonth',
                widgetOptions.locale
              )}
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="style"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            {getTranslation('labels.chartStyle', widgetOptions.locale)}
            <InfoTooltip text={getTranslation('style', widgetOptions.locale)} />
          </label>
          <select
            id="style"
            className="border-light-green input px-3 py-2 scaler-button border border-light-green rounded-md shadow-sm"
            value={widgetOptions.style}
            onChange={(e) => handleOptionChange('style', e.target.value)}
          >
            <option value="1">
              {getTranslation(
                'labels.chartOptions.candles',
                widgetOptions.locale
              )}
            </option>
            <option value="2">
              {getTranslation('labels.chartOptions.bars', widgetOptions.locale)}
            </option>
            <option value="3">
              {getTranslation('labels.chartOptions.line', widgetOptions.locale)}
            </option>
            <option value="4">
              {getTranslation('labels.chartOptions.area', widgetOptions.locale)}
            </option>
            <option value="5">
              {getTranslation(
                'labels.chartOptions.heikenashi',
                widgetOptions.locale
              )}
            </option>
            <option value="6">
              {getTranslation(
                'labels.chartOptions.hollowCandles',
                widgetOptions.locale
              )}
            </option>
            <option value="7">
              {getTranslation(
                'labels.chartOptions.baseline',
                widgetOptions.locale
              )}
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="locale"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            {getTranslation('labels.language', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('locale', widgetOptions.locale)}
            />
          </label>
          <select
            id="locale"
            className="border-light-green input px-3 py-2 scaler-button border border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.locale}
            onChange={(e) => handleOptionChange('locale', e.target.value)}
          >
            <option value="en">
              {getTranslation(
                'labels.languageOptions.en',
                widgetOptions.locale
              )}
            </option>
            <option value="hu_HU">
              {getTranslation(
                'labels.languageOptions.hu',
                widgetOptions.locale
              )}
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="timezone"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            {getTranslation('labels.timezone', widgetOptions.locale)}
            <InfoTooltip
              text={getTranslation('timezone', widgetOptions.locale)}
            />
          </label>
          <select
            id="timezone"
            className="input border-light-green px-3 py-2 scaler-button border border-gray-600 rounded-md shadow-sm"
            value={widgetOptions.timezone}
            onChange={(e) => handleOptionChange('timezone', e.target.value)}
          >
            <option value="Etc/UTC">
              {getTranslation(
                'labels.timeZoneOptions.utc',
                widgetOptions.locale
              )}
            </option>
            <option value="Europe/London">
              {getTranslation(
                'labels.timeZoneOptions.london',
                widgetOptions.locale
              )}
            </option>
            <option value="Europe/Berlin">
              {getTranslation(
                'labels.timeZoneOptions.berlin',
                widgetOptions.locale
              )}
            </option>
            <option value="Europe/Moscow">
              {getTranslation(
                'labels.timeZoneOptions.moscow',
                widgetOptions.locale
              )}
            </option>
            <option value="America/New_York">
              {getTranslation(
                'labels.timeZoneOptions.newYork',
                widgetOptions.locale
              )}
            </option>
            <option value="America/Chicago">
              {getTranslation(
                'labels.timeZoneOptions.chicago',
                widgetOptions.locale
              )}
            </option>
            <option value="Asia/Tokyo">
              {getTranslation(
                'labels.timeZoneOptions.tokyo',
                widgetOptions.locale
              )}
            </option>
            <option value="Australia/Sydney">
              {getTranslation(
                'labels.timeZoneOptions.sydney',
                widgetOptions.locale
              )}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BasicTab;
