import { getTranslation } from '@/utils/helpers';
import React from 'react';
import { FastSettingsProps } from './FastSettings.types';

const FastSettings = ({
  widgetOptions,
  setWidgetOptions,
}: FastSettingsProps) => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {getTranslation('labels.fastSettings', widgetOptions.locale)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <button
            onClick={() => {
              setWidgetOptions((prev) => ({
                ...prev,
                symbol: 'NASDAQ:AAPL',
                interval: 'D',
                style: '1',
              }));
            }}
            className="btn btn-primary w-full"
          >
            {getTranslation('labels.appleDaily', widgetOptions.locale)}
          </button>

          <button
            onClick={() => {
              setWidgetOptions((prev) => ({
                ...prev,
                symbol: 'BINANCE:BTCUSDT',
                interval: '60',
                style: '1',
              }));
            }}
            className="btn btn-primary w-full"
          >
            {getTranslation('labels.bitcoinHourly', widgetOptions.locale)}
          </button>

          <button
            onClick={() => {
              setWidgetOptions((prev) => ({
                ...prev,
                style: '1',
                studies: ['RSI', 'MACD'],
              }));
            }}
            className="btn btn-secondary w-full"
          >
            {getTranslation('labels.on', widgetOptions.locale)}
            RSI + MACD
          </button>

          <button
            onClick={() => {
              setWidgetOptions((prev) => ({
                ...prev,
                style: '3',
                studies: ['Moving Average'],
              }));
            }}
            className="btn btn-secondary w-full"
          >
            {getTranslation(
              'labels.linesAndMovingAverage',
              widgetOptions.locale
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastSettings;
