const HeaderFiltersSelectionDropdown = ({ options = [], onSelect }) => {
  return (
    <div className="info-selection-dropdown d-flex flex-column">
      {options.map(opt => (
        <div
          key={opt.value}
          className="info-dropdown-item"
          onClick={() => onSelect(opt.value)}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default HeaderFiltersSelectionDropdown;
