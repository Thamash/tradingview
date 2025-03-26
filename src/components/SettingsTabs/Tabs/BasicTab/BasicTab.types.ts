/* eslint-disable @typescript-eslint/no-explicit-any */
import { TradingViewWidgetConfig } from '@/components/CustomizableChart/CustomizableChart.types';

export interface BasicTabProps {
  widgetOptions: TradingViewWidgetConfig;
  handleOptionChange: (option: keyof TradingViewWidgetConfig, value: any) => void
}
