/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TradingViewWidgetConfig {
  symbol: string;
  interval: string;
  timezone: string;
  theme: 'light' | 'dark';
  style: string;
  locale: string;
  toolbar_bg: string;
  enable_publishing: boolean;
  withdateranges: boolean;
  hide_side_toolbar: boolean;
  allow_symbol_change: boolean;
  save_image: boolean;
  studies: string[];
  show_popup_button: boolean;
  popup_width: string;
  popup_height: string;
  hide_volume: boolean;
  hide_drawing_toolbar: boolean;
  watchlist: string[];
  details: boolean;
  hotlist: boolean;
  calendar: boolean;
  studies_overrides: Record<string, any>;
  overrides: Record<string, any>;
  enabled_features: string[];
  disabled_features: string[];
  container_id: string;
  width: string;
  height: string;
}