import React from 'react';
import {ColorValue} from 'react-native';
import {s} from 'react-native-size-matters/extend';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
  strokeWidth?: string;
}

const DownArrowtIcon = (props: IProps) => {
  const {color = '#000', size = 19, strokeWidth = 1.5} = props;

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 19 19" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m5 6.75 4.5 4.5 4.5-4.5"
      />
    </Svg>
  );
};

export default DownArrowtIcon;
