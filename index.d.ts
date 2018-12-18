import * as React from 'react';


export interface DatGuiProps {
    data: any;                      // The data your dat.GUI controller will mutate
    onUpdate: (data: any) => any;   // The method which will be called whenever an update is handled by the controller
    children: any; // The dat.GUI components that make up the controller
    liveUpdate?: boolean;           // Determines if live updates should occur, defaults to true
    labelWidth?: number;            // The width of the labels in pixels, defaults to 40
    className?: string;             // The class name to set on the DatGui div
    style?: StyleSheet;             // The style object to set on the DatGui div
}

export default class DatGui extends React.Component<DatGuiProps, any> { }

export class DatUnChangableFieldProps {
    label?: string;
}

export class DatChangableFieldProps extends DatUnChangableFieldProps {
    path: string;
}


export interface DatButtonProps extends DatUnChangableFieldProps {
    onClick: (e: React.MouseEvent) => any;
}
export class DatButton extends React.Component<DatButtonProps, any> { }


export interface DatFolderProps extends DatUnChangableFieldProps {
    title: string;
    children: any;
}
export class DatFolder extends React.Component<DatFolderProps, any> { }


export interface DatPresetsProps extends DatUnChangableFieldProps {
    onUpdate: (data: any) => any;
    options: {
        presetName: string;
        data: any; // Initial data
        preset: any; // Your preset
    }
}
export class DatPresets extends React.Component<DatPresetsProps, any> { }


export interface DatBooleanProps extends DatChangableFieldProps { }
export class DatBoolean extends React.Component<DatBooleanProps, any> { }


export interface DatColorProps extends DatChangableFieldProps {
    [reactColorProp: string]: any;
}
export class DatColor extends React.Component<DatColorProps, any> { }


export interface DatNumberProps extends DatChangableFieldProps {
    min: number;
    max: number;
    step: number;
}
export class DatNumber extends React.Component<DatNumberProps, any> { }


export interface DatSelectProps extends DatChangableFieldProps {
    options: any[];
}
export class DatSelect extends React.Component<DatSelectProps, any> { }


export interface DatStringProps extends DatChangableFieldProps { }
export class DatString extends React.Component<DatStringProps, any> { }
