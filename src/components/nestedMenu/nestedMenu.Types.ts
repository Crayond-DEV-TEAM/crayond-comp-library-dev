import React from "react";

export interface NestedMenuConfiguration {
  key: string;
  caption: string;
  onClick?: (event: React.MouseEvent) => void;
  subMenu?: NestedMenuConfiguration[];
}
