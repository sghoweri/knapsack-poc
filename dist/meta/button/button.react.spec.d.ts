/**
 * patternId: "button" templateId: "react"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/button/react" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.button.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

import * as React from 'react';

type Type = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
type Size = 'sm' | 'md' | 'lg';
type Disabled = boolean;
type Outlined = boolean;

/**
 * [Knapsack Docs](http://localhost:3999/pattern/button/react)
 */
export interface ButtonProps {
  type?: Type;
  size?: Size;
  disabled?: Disabled;
  outlined?: Outlined;
  /**
   * This is sick
   */
  handleClick?: () => void;
  children?: React.ReactNode;
  /**
   * undefined. Only use: button
   */
  icon?: React.ReactNode;
}
