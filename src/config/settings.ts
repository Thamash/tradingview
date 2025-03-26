import { TradingViewWidgetConfig } from '@/components/CustomizableChart/CustomizableChart.types';

export const widgetDefaultSettings: TradingViewWidgetConfig = {
  symbol: 'NASDAQ:AAPL',
  interval: 'D',
  timezone: 'Etc/UTC',
  theme: 'dark',
  style: '1',
  locale: 'en',
  toolbar_bg: '#f1f3f6',
  enable_publishing: false,
  withdateranges: true,
  hide_side_toolbar: false,
  allow_symbol_change: true,
  save_image: true,
  studies: [],
  show_popup_button: true,
  popup_width: '1000',
  popup_height: '650',
  hide_volume: false,
  hide_drawing_toolbar: false,
  watchlist: [],
  details: true,
  hotlist: true,
  calendar: true,
  studies_overrides: {},
  overrides: {},
  enabled_features: [],
  disabled_features: [],
  container_id: 'tradingview-widget-container',
  width: '100%',
  height: '600',
}

export const availableStudies = [
  'MACD',
  'RSI',
  'Bollinger Bands',
  'Moving Average',
  'Volume',
  'Stochastic',
  'Ichimoku Cloud',
];

export const exchanges = [
  { id: 'NASDAQ', name: 'NASDAQ (USA)' },
  { id: 'NYSE', name: 'New York Stock Exchange' },
  { id: 'BINANCE', name: 'Binance (Crypto)' },
  { id: 'MOEX', name: 'Moscow Exchange' },
  { id: 'LSE', name: 'London Stock Exchange' },
  { id: 'FX', name: 'Forex' },
  { id: 'BATS', name: 'BATS Global Markets' },
  { id: 'BSE', name: 'Bombay Stock Exchange' },
  { id: 'NSE', name: 'National Stock Exchange (India)' },
  { id: 'TSX', name: 'Toronto Stock Exchange' },
];

export const availableFeatures = [
    'header_widget',
    'header_symbol_search',
    'symbol_search_hot_key',
    'header_resolutions',
    'header_chart_type',
    'header_settings',
    'header_indicators',
    'header_compare',
    'header_undo_redo',
    'header_screenshot',
    'header_fullscreen_button',
    'left_toolbar',
    'volume_force_overlay',
  ];

  export const symbolsByExchange: { [key: string]: { id: string; name: string; }[] } = {
    NASDAQ: [
      { id: 'AAPL', name: 'Apple Inc.' },
      { id: 'MSFT', name: 'Microsoft Corporation' },
      { id: 'GOOGL', name: 'Alphabet Inc. (Google)' },
      { id: 'AMZN', name: 'Amazon.com Inc.' },
      { id: 'META', name: 'Meta Platforms Inc. (Facebook)' },
      { id: 'TSLA', name: 'Tesla Inc.' },
    ],
    NYSE: [
      { id: 'BA', name: 'Boeing Co.' },
      { id: 'JPM', name: 'JPMorgan Chase & Co.' },
      { id: 'WMT', name: 'Walmart Inc.' },
      { id: 'DIS', name: 'Walt Disney Co.' },
    ],
    BINANCE: [
      { id: 'BTCUSDT', name: 'Bitcoin / Tether' },
      { id: 'ETHUSDT', name: 'Ethereum / Tether' },
      { id: 'BNBUSDT', name: 'Binance Coin / Tether' },
      { id: 'XRPUSDT', name: 'Ripple / Tether' },
      { id: 'ADAUSDT', name: 'Cardano / Tether' },
    ],
    FX: [
      { id: 'EURUSD', name: 'Euro / US Dollar' },
      { id: 'GBPUSD', name: 'British Pound / US Dollar' },
      { id: 'USDJPY', name: 'US Dollar / Japanese Yen' },
    ],
  };