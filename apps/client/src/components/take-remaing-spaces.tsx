import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  // 占满剩余高度
  grid-template-rows: 24px 1fr;

  > p {
    // 书写方向决定代表了宽度 or 高度
    block-size: 200px;
  }
`;

const Reatiner = styled.div`
  // 剩余高度限制器，绝对定位限制
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;

  display: grid;
  align-items: center;
  justify-content: center;

  p {
    &:first-child {
      align-self: end;
      margin-bottom: 0;
    }
    &:nth-child(2) {
      margin-top: 0;
      align-self: start;
    }
    display: inline-block;
    inline-size: 200px;
  }
`;

/**
 * vertically
 */
export const TakeRemainingSpaces = () => {
  return (
    <Wrapper>
      <div>take remaing spaces</div>
      <Reatiner>
        <Content>
          <p>劝学</p>
          <p>君子曰：学不可以已。</p>
          <p>
            青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，𫐓以为轮，其曲中规。虽有槁暴，不复挺者，𫐓使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。
          </p>
          <p>
            吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。登高而招，臂非加长也，而见者远；顺风而呼，声非加疾也，而闻者彰。假舆马者，非利足也，而致千里；假舟楫者，非能水也，而绝江河。君子生非异也，善假于物也。
          </p>
        </Content>
      </Reatiner>
      <p>test</p>
    </Wrapper>
  );
};
