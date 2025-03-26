/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';
import { TradingViewWidgetConfig } from '../CustomizableChart/CustomizableChart.types';

export interface SettingsTabsProps {
  widgetOptions: TradingViewWidgetConfig;
  handleOptionChange: (option: keyof TradingViewWidgetConfig, value: any) => void
  handleStudyToggle: (study: string) => void
  handleFeatureToggle: (feature: string, isEnabled: boolean) => void
  handleBooleanChange: (option: keyof TradingViewWidgetConfig) => void
  setWidgetOptions: Dispatch<SetStateAction<TradingViewWidgetConfig>>
}
