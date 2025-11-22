import React from "react";

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="text-center font-sans">
      <p className="text-muted-foreground text-sm md:text-base font-medium mb-2">
        {label}
      </p>
      <p className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold">
        {value}
      </p>
    </div>
  );
};

interface StatsProps {
  stats?: Array<{ label: string; value: string }>;
}

const StatSection: React.FC<StatsProps> = ({ stats }) => {
  const defaultStats = [
    { label: "Student Teacher Ratio", value: "15:1" },
    { label: "Job Placement", value: "95%" },
    { label: "Graduate Students", value: "1M" },
    { label: "Degree Transfer", value: "100K" },
  ];

  const statsToDisplay = stats || defaultStats;

  return (
    <div className="w-full bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsToDisplay.map((stat, index) => (
            <StatItem key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatSection;
