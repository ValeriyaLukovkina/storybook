import React, { FC, useCallback } from "react";

export interface ListItemProps {
  label?: string;
  selected?: boolean;
  // onChange?: (item?: ItemsData) => void;
}

export const ListItem: FC<ListItemProps> = (props) => {
  const { label, selected } = props;

  // const handleChange = useCallback(
  //   (item?: ItemsData) => {
  //     if (onChange) onChange(item);
  //   },
  //   [onChange]
  // );

  return (
    <li
      // onClick={() => handleChange(item)}
      style={{ textDecoration: selected ? "line-through" : "none" }}
    >
      {label}
    </li>
  );
};

export default ListItem;
