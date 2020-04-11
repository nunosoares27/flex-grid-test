import React from 'react';
import { css, jsx } from '@emotion/core';
/** @jsx jsx */

const desktopBreakpoint = '1400px';
const tabletBreakpoint = '1020px';
const mobileBreakpoint = '620px';

const Container = ({children, fluid, flexDirection}) => (
    <div css={css`
    box-sizing: border-box;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    max-width: ${fluid ? fluid : desktopBreakpoint};
    height: 100%;
    flex-direction: ${flexDirection ? flexDirection : 'row'};
    @media screen and (max-width: ${tabletBreakpoint}) {
      max-width: 100%;
    }
    @media screen and (max-width: ${mobileBreakpoint}) {
      width: 100%;
    }
  `}>
    {children}
    </div>
  )

export default Container