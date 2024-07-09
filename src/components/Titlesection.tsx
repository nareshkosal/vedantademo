import React from 'react';

type TitleSectionProps = {
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

const TitleSection: React.FC<TitleSectionProps> = ({ title, isSelected, onClick }) => {
  return (
    <div
      className={`title-section flex  bg-gray-100 ${isSelected ? 'selected flex ' : ''}`}
      onClick={onClick}
    >
      <h2 className="title  px-4">{title}</h2>
      <style jsx>{`
        .title-section {
          border-top: 2px solid transparent;
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
