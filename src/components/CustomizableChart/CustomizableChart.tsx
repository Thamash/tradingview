/* eslint-disable @typescript-eslint/no-explicit-any */

// Extend the Window interface to include TradingView
declare global {
  interface Window {
    TradingView?: any;
  }
}
import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import { TradingViewWidgetConfig } from './CustomizableChart.types';
import { widgetDefaultSettings } from '@/config/settings';
import { getTranslation } from '@/utils/helpers';
import SettingsTab from '../SettingsTabs/SettingsTabs';

export function CustomizableChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [widgetOptions, setWidgetOptions] = useState<TradingViewWidgetConfig>(
    widgetDefaultSettings
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [widgetInstance, setWidgetInstance] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = initializeWidget;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      setWidgetOptions((prev) => ({
        ...prev,
        theme: 'dark',
      }));
    } else {
      document.documentElement.classList.remove('dark');
      setWidgetOptions((prev) => ({
        ...prev,
        theme: 'light',
      }));
    }
  }, [darkMode]);

  const initializeWidget = useCallback(() => {
    if (
      typeof window === 'undefined' ||
      !window.TradingView ||
      !containerRef.current
    )
      return;

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const widget = new (window as any).TradingView.widget({
      ...widgetOptions,
      container: containerRef.current,
    });

    setWidgetInstance(widget);
  }, [widgetOptions]);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.TradingView &&
      containerRef.current
    ) {
      initializeWidget();
    }
  }, [initializeWidget, widgetOptions]);

  const handleOptionChange = (
    option: keyof TradingViewWidgetConfig,
    value: any
  ) => {
    setWidgetOptions((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  const handleBooleanChange = (option: keyof TradingViewWidgetConfig) => {
    setWidgetOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleStudyToggle = (study: string) => {
    setWidgetOptions((prev) => {
      const studies = [...prev.studies];
      const index = studies.indexOf(study);

      if (index === -1) {
        studies.push(study);
      } else {
        studies.splice(index, 1);
      }

      return {
        ...prev,
        studies,
      };
    });
  };

  const handleFeatureToggle = (feature: string, isEnabled: boolean) => {
    setWidgetOptions((prev) => {
      let enabled_features = [...prev.enabled_features];
      let disabled_features = [...prev.disabled_features];

      if (isEnabled) {
        enabled_features.push(feature);
        disabled_features = disabled_features.filter((f) => f !== feature);
      } else {
        enabled_features = enabled_features.filter((f) => f !== feature);
        disabled_features.push(feature);
      }

      return {
        ...prev,
        enabled_features,
        disabled_features,
      };
    });
  };

  return (
    <div className={`min-h-screen pb-10 bg-[#1C1C1C]`}>
      <Head>
        <title>Scaler MarketPulse</title>
        <meta
          name="description"
          content="Interactive demo of TradingView widget parameters"
        />
        <link rel="icon" href="https://cdn.prod.website-files.com/6423ff94c9ceab2ddd24645d/643ea0a4a373984c339a4915_favicon32.png" />
      </Head>

      <header className="sticky top-0 z-10 scaler-card shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center text-scaler-green space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="text-xl font-bold text-scaler-green">
                Scaler MarketPulse
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="btn btn-outline flex items-center cursor-pointer"
              >
                {isCollapsed ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {getTranslation('labels.showFilters', widgetOptions.locale)}
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {getTranslation('labels.hideFilters', widgetOptions.locale)}
                  </>
                )}
              </button>
              <button
                className="p-2 rounded-md bg-gray-700 focus:outline-none scaler-button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-[#1C1C1C] rounded-xl shadow-lg overflow-hidden mb-8">
          <div
            ref={containerRef}
            id="tradingview-widget-container"
            className="w-full"
            style={{ height: widgetOptions.height }}
          ></div>
        </div>

        {!isCollapsed && (
          <SettingsTab
            widgetOptions={widgetOptions}
            handleOptionChange={handleOptionChange}
            handleBooleanChange={handleBooleanChange}
            handleStudyToggle={handleStudyToggle}
            handleFeatureToggle={handleFeatureToggle}
            setWidgetOptions={setWidgetOptions}
          />
        )}
      </main>
    </div>
  );
}
