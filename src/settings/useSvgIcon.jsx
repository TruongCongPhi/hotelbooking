import React from 'react';

export const useSvgIcon = (svgString) => {
  return React.useMemo(() => {
    if (!svgString) return null;
    return (
      <span
        dangerouslySetInnerHTML={{ __html: svgString }}
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      />
    );
  }, [svgString]);
};
