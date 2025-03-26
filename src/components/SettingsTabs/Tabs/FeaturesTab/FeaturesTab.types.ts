/* eslint-disable @typescript-eslint/no-explicit-any */
import { TradingViewWidgetConfig } from '@/components/CustomizableChart/CustomizableChart.types';

export interface FeaturesTabProps {
  widgetOptions: TradingViewWidgetConfig;
  handleFeatureToggle: (feature: string, isEnabled: boolean) => void
}
