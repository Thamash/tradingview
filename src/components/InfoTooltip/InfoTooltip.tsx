import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface InfoTooltipProps {
  text: string;
}

export const InfoTooltip = ({ text }: InfoTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const top = triggerRect.top - 8;
      const left = triggerRect.left + (triggerRect.width / 2);

      setPosition({ top, left });
    }
  }, [isVisible]);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-flex items-center cursor-help ml-1.5"
        tabIndex={0}
        aria-describedby="tooltip"
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500 hover:text-gray-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>

      {isVisible && typeof document !== 'undefined' && ReactDOM.createPortal(
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className="fixed z-50 pointer-events-none transition-opacity duration-200"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            opacity: 1,
            transform: 'translateX(-50%) translateY(-100%)',
            marginTop: '-10px'
          }}
        >
          <div className="bg-grey text-white text-xs rounded shadow-lg p-2 max-w-xs">
            {text}
          </div>
          <div
            className="absolute w-2 h-2 bg-gray-300 transform rotate-45 left-1/2 -translate-x-1/2"
            style={{
              top: '100%',
              marginTop: '-4px'
            }}
          ></div>
        </div>,
        document.body
      )}
    </>
  );
};
