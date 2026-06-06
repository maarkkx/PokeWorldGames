import { memo } from 'react';

function AvatarPickerGrid({ options, selectedId, onSelect }) {
  return (
    <div className="profile-customize__avatar-grid" role="list">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="listitem"
          className={`profile-customize__avatar-option${
            option.id === selectedId ? ' is-selected' : ''
          }`}
          onClick={() => onSelect(option.id)}
        >
          <img
            src={option.avatarUrl}
            alt=""
            loading="lazy"
            decoding="async"
            width={52}
            height={52}
          />
          <span>#{option.id}</span>
        </button>
      ))}
    </div>
  );
}

export default memo(AvatarPickerGrid);
