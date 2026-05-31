interface FilterTab {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: readonly FilterTab[];
  activeId: string;
  onChange: (id: string) => void;
}

export function FilterTabs({ tabs, activeId, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`px-5 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
            activeId === tab.id
              ? "border border-gold bg-gold/10 text-gold"
              : "border border-ivory/10 text-soft-gray hover:border-gold/40 hover:text-ivory"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
