import React from 'react';

interface CodeforcesIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const CodeforcesIcon = ({ className, ...props }: CodeforcesIconProps) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(1.44, 1.0) scale(0.88)">
        <rect x="2" y="10" width="4.5" height="12" rx="1.5" fill="#B13F2B" />
        <rect x="9.75" y="3" width="4.5" height="19" rx="1.5" fill="#3181C5" />
        <rect x="17.5" y="7" width="4.5" height="15" rx="1.5" fill="#F7D217" />
      </g>
    </svg>
  );
};

export default CodeforcesIcon;
