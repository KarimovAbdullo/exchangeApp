import React from 'react';
import {ColorValue} from 'react-native';
import {s} from 'react-native-size-matters/extend';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
  strokeWidth?: string;
}

const SearchIcon = (props: IProps) => {
  const {color = '#000', size = 18, strokeWidth = 1.5} = props;

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 18 18" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m15.75 16.25-4.5-4.5M2.25 8a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0Z"
      />
    </Svg>
  );
};

export default SearchIcon;
