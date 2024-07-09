import React from 'react';

type TitleSectionProps = {
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

const TitleSection: React.FC<TitleSectionProps> = ({ title, isSelected, onClick }) => {
  return (
    <div
      className={`title-section flex ${isSelected ? 'selected flex ' : ''}`}
      onClick={onClick}
    >
      <h2 className="title">{title}</h2>
      <style jsx>{`
        .title-section {
          border-top: 5px solid transparent;
          padding: 10px;
          cursor: pointer;
        }
        .title-section:hover {
          border-color: orange;
        }
        .title-section.selected {
          border-color: orange;
        }
      `}</style>
    </div>
  );
};

export default TitleSection;
