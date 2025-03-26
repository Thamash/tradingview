import { TradingViewWidgetConfig } from '@/components/CustomizableChart/CustomizableChart.types';

export interface DisplayTabProps {
  widgetOptions: TradingViewWidgetConfig;
  handleBooleanChange: (option: keyof TradingViewWidgetConfig) => void
}
