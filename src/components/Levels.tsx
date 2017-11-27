import * as React from 'react';

import {levels} from '../levels';
import {Level} from './Level';

export interface LevelsProps {
  onLevelPress(level: number): void;
}

export class Levels extends React.PureComponent<LevelsProps> {
  public render(): JSX.Element[] {
    return levels.map(
      ({backgroundColor, highlightColor, name, description}, level) => (
        <Level
          key={level}
          level={level}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          name={name}
          description={description}
          onPress={this.props.onLevelPress}
        />
      )
    );
  }
}
