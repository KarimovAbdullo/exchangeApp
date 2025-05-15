import React from 'react';
import {ColorValue} from 'react-native';
import {s} from 'react-native-size-matters/extend';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
  strokeWidth?: string;
}

const RightLeftIcon = (props: IProps) => {
  const {color = '#000', size = 19, strokeWidth = 1.5} = props;

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 19 19" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M16.25 12.75H2.75m13.5 0L14 15m2.25-2.25L14 10.5m-9-3L2.75 5.25m0 0L5 3M2.75 5.25h13.5"
      />
    </Svg>
  );
};

export default RightLeftIcon;
