import React from 'react';
import {ColorValue} from 'react-native';
import {s} from 'react-native-size-matters/extend';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
  strokeWidth?: string;
}

const ArrowLeftIcon = (props: IProps) => {
  const {color = '#1B1726', size = 24, strokeWidth = 2} = props;

  return (
    <Svg
      width={s(size)}
      height={s(size)}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m12 4-8 8 8 8"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M4 12h16"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
