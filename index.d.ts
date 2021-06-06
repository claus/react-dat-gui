import * as React from 'react';

export interface DatGuiProps {
  /**
   * The data your dat.GUI controller will mutate
   */
  data: any;
  /**
   * The method which will be called whenever an update is handled by the controller
   */
  onUpdate: (data: any) => any;
  /**
   * The dat.GUI components that make up the controller
   */
  children: any;
  /**
   * Determines if live updates should occur, defaults to true
   */
  liveUpdate?: boolean;
  /**
   * The width of the labels in pixels, defaults to 40
   */
  labelWidth?: number;
  /**
   * The class name to set on the DatGui div
   */
  className?: string;
  /**
   * The style object to set on the DatGui div
   */
  style?: React.CSSProperties;
}

/**
 * A React reimplementation of Google's dat.GUI controller library.
 *
 * @see https://github.com/claus/react-dat-gui
 */
export default class DatGui extends React.Component<DatGuiProps> {}

export class DatUnchangableFieldProps {
  label?: string;
}

export class DatChangableFieldProps extends DatUnchangableFieldProps {
  path: string;
}

export interface DatButtonProps extends DatUnchangableFieldProps {
  onClick: (e: React.MouseEvent) => any;
}

export class DatButton extends React.Component<DatButtonProps, any> {}

export interface DatFolderProps extends DatUnchangableFieldProps {
  title: string;
  closed: boolean;
  children: any;
}

export class DatFolder extends React.Component<DatFolderProps, any> {}

export interface DatPresetsProps extends DatUnchangableFieldProps {
  onUpdate: (data: any) => any;
  options: {
    presetName?: string;
    data?: any; // Initial data
    preset: any; // Your preset
  };
}

export class DatPresets extends React.Component<DatPresetsProps, any> {}

export interface DatBooleanProps extends DatChangableFieldProps {}

export class DatBoolean extends React.Component<DatBooleanProps, any> {}

export interface DatColorProps extends DatChangableFieldProps {
  [reactColorProp: string]: any;
}

export class DatColor extends React.Component<DatColorProps, any> {}

export interface DatNumberProps extends DatChangableFieldProps {
  min: number;
  max: number;
  step: number;
}

export class DatNumber extends React.Component<DatNumberProps, any> {}

export interface DatSelectProps extends DatChangableFieldProps {
  options: any[];
  optionLabels?: string[];
}

export class DatSelect extends React.Component<DatSelectProps, any> {}

export interface DatStringProps extends DatChangableFieldProps {}

export class DatString extends React.Component<DatStringProps, any> {}
