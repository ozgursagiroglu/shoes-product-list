import cx from 'classnames';

const Checkbox = ({ name, value, checked, children, onChange }) => {
  return (
    <label
      className="flex items-start justify-start"
      htmlFor={`${name}-${value}`}>
      <input
        type="checkbox"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="fixed top-0 left-0 w-0 h-0 opacity-0"
      />
      <div
        className={cx(
          'w-4 h-4 border flex-shrink-0 mt-1 mr-2 relative rounded-sm',
          {
            'bg-orange-500 border-orange-500': checked,
          }
        )}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3 text-white absolute top-2/4 left-2/4 -translate-y-2/4	-translate-x-2/4	">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </span>
    </label>
  );
};

export default Checkbox;
