/**
 * patternId: "card" templateId: "react"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/card/react" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.card.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

import * as React from 'react';

type CardHeaderText = string;
type Title = string;
type BodySubTitle = string;
type CardBodyText = string;
type TextAlign = 'left' | 'center' | 'right';
type ImageSource = string;

/**
 * [Knapsack Docs](http://localhost:3999/pattern/card/react)
 */
export interface CardProps {
  cardHeader?: CardHeaderText;
  cardTitle?: Title;
  cardSubTitle?: BodySubTitle;
  cardBody?: CardBodyText;
  textAlign?: TextAlign;
  imgSrc?: ImageSource;
  /**
   * Bottom of the card. Only use: button
   */
  children?: React.ReactNode;
}
