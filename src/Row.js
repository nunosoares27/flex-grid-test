import React from 'react';
import { css, jsx } from '@emotion/core';
/** @jsx jsx */

const columns = 12;

const Row = ({desktop, tablet, mobile, justifyContent, alignItems, children}) => (
    <div css={css`
    width: calc(100% / ${columns} * ${desktop});
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${justifyContent ? justifyContent : ''};
    align-items: ${alignItems ? alignItems : ''};

    @media screen and (max-width: 1020px) {
        width: calc(100% / ${columns} * ${tablet});
      }
      @media screen and (max-width: 620px) {
        width: calc(100% / ${columns} * ${mobile});
      }

    `}>{children}</div>
);

export default Row