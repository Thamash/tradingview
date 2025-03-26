import { Dispatch, SetStateAction } from 'react';
import { TradingViewWidgetConfig } from '../../CustomizableChart/CustomizableChart.types';

export interface FastSettingsProps {
  widgetOptions: TradingViewWidgetConfig;
  setWidgetOptions: Dispatch<SetStateAction<TradingViewWidgetConfig>>
}
