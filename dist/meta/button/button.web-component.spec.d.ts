/**
 * patternId: "button" templateId: "web-component"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/button/web-component" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.button.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

type Type = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
type Disabled = boolean;
type Outlined = boolean;

export interface Button {
  /**
   * Size of the button.
   */
  size?: 'sm' | 'md' | 'lg';
  type?: Type;
  disabled?: Disabled;
  outlined?: Outlined;
}
