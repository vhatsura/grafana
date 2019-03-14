import { Threshold, SelectOptionItem, ValueMapping, VizOrientation } from '@grafana/ui';
import { SingleStatValueOptions } from '../gauge/types';

export interface BarGaugeOptions {
  minValue: number;
  maxValue: number;
  orientation: VizOrientation;
  valueOptions: SingleStatValueOptions;
  valueMappings: ValueMapping[];
  thresholds: Threshold[];
  displayMode: 'simple' | 'lcd';
}

export const orientationOptions: SelectOptionItem[] = [
  { value: VizOrientation.Horizontal, label: 'Horizontal' },
  { value: VizOrientation.Vertical, label: 'Vertical' },
];

export const displayModes: SelectOptionItem[] = [{ value: 'simple', label: 'Simple' }, { value: 'lcd', label: 'LCD' }];

export const defaults: BarGaugeOptions = {
  minValue: 0,
  maxValue: 100,
  displayMode: 'simple',
  orientation: VizOrientation.Horizontal,
  valueOptions: {
    unit: 'none',
    stat: 'avg',
    prefix: '',
    suffix: '',
    decimals: null,
  },
  thresholds: [{ index: 0, value: -Infinity, color: 'green' }, { index: 1, value: 80, color: 'red' }],
  valueMappings: [],
};
