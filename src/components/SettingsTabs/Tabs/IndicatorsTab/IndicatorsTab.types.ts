import { TradingViewWidgetConfig } from '@/components/CustomizableChart/CustomizableChart.types';

export interface IndicatorsTabProps {
  widgetOptions: TradingViewWidgetConfig;
  handleStudyToggle: (study: string) => void
}
