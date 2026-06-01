import { useLayoutEffect, useRef, useState } from 'react';
import './SegmentedControl.css';

export default function SegmentedControl({
  options,
  value,
  onChange,
  ariaLabel,
  className = '',
}) {
  const trackRef = useRef(null);
  const [gliderStyle, setGliderStyle] = useState({ width: 0, transform: 'translateX(0px)' });

  const activeIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function measure() {
      const button = track.querySelectorAll('.segmented-control__option')[activeIndex];
      if (!button) return;

      setGliderStyle({
        width: button.offsetWidth,
        transform: `translateX(${button.offsetLeft}px)`,
      });
    }

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeIndex, options, value]);

  return (
    <div
      className={`segmented-control ${className}`.trim()}
      role="tablist"
      aria-label={ariaLabel}
      ref={trackRef}
    >
      <span
        className="segmented-control__glider"
        style={gliderStyle}
        aria-hidden="true"
      />
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`segmented-control__option${isActive ? ' is-active' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
