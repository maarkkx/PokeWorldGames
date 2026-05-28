import './ProgressBar.css';

export default function ProgressBar({ progress, size = 'md', className = '' }) {
  const clamped = Math.min(Math.max(progress, 0), 1);

  return (
    <div
      className={`progress-bar progress-bar--${size} ${className}`.trim()}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
    >
      <div className="progress-bar__fill" style={{ width: `${clamped * 100}%` }} />
    </div>
  );
}
