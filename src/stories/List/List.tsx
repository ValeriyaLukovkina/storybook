import React, { FC, ReactElement, ReactNode, useCallback } from "react";

export interface ListProps {
  children: ReactNode;
  title?: string;
}

const List: FC<ListProps> = (props) => {
  const { children, title } = props;

  return (
    <div>
      {title && <div>{title}</div>}
      <ul>{children}</ul>
    </div>
  );
};

export default List;
