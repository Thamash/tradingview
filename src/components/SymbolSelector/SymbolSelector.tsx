import { exchanges, symbolsByExchange } from '@/config/settings';
import { getTranslation } from '@/utils/helpers';
import React, { useState } from 'react';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import { SymbolSelectorProps } from './SymbolSelector.types';

const SymbolSelector = ({ onChange, lang }: SymbolSelectorProps) => {
  const [selectedExchange, setSelectedExchange] = useState('NASDAQ');
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
  Object.keys(exchanges).forEach((exchange) => {
    if (!symbolsByExchange[exchange]) {
      symbolsByExchange[exchange] = [{ id: 'SAMPLE', name: 'Sample Symbol' }];
    }
  });

  const handleExchangeChange = (exchangeId: string) => {
    setSelectedExchange(exchangeId);
    if (
      symbolsByExchange[exchangeId] &&
      symbolsByExchange[exchangeId].length > 0
    ) {
      setSelectedSymbol(symbolsByExchange[exchangeId][0].id);

      const newSymbol = `${exchangeId}:${symbolsByExchange[exchangeId][0].id}`;
      onChange('symbol', newSymbol);
    }
  };

  const handleSymbolChange = (symbolId: string) => {
    setSelectedSymbol(symbolId);

    const newSymbol = `${selectedExchange}:${symbolId}`;
    onChange('symbol', newSymbol);
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="exchange"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          {getTranslation('labels.stockExchange', lang)}
          <InfoTooltip text={getTranslation('symbol', lang)} />
        </label>
        <select
          id="exchange"
          className="input border-light-green px-3 py-2 scaler-button border border-gray-600 rounded-md shadow-sm"
          value={selectedExchange}
          onChange={(e) => handleExchangeChange(e.target.value)}
        >
          {exchanges.map((exchange) => (
            <option key={exchange.id} value={exchange.id}>
              {exchange.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="symbol"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          {getTranslation('labels.symbol', lang)}
        </label>
        <select
          id="symbol"
          className="border-light-green input px-3 py-2 scaler-button border border-gray-600 rounded-md shadow-sm"
          value={selectedSymbol}
          onChange={(e) => handleSymbolChange(e.target.value)}
        >
          {symbolsByExchange[selectedExchange]?.map((symbol) => (
            <option key={symbol.id} value={symbol.id}>
              {symbol.name} ({symbol.id})
            </option>
          ))}
        </select>
      </div>

      <div className="pt-2 text-xs text-gray-400 italic">
        {getTranslation('labels.actualSymbol', lang)}:{' '}
        <span className="font-mono font-medium">
          {selectedExchange}:{selectedSymbol}
        </span>
      </div>
    </div>
  );
};

export default SymbolSelector;
