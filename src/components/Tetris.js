import React from 'react';

import { createStage } from '../gameHelpers';
import {StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()}></Stage>
        <aside>
          <div>
            <Display text="Score"></Display>
            <Display text ="Rows"></Display>
            <Display text="Level1"></Display>
          </div>
          <StartButton></StartButton>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;