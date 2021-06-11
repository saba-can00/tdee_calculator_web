import React from "react";
import styled from "styled-components";
import { ArticleTitle } from "../components/ArticleTitle";
import { ArticleParagraph } from "../components/ArticleParagraph";
export class FaqPage extends React.Component {
  render() {
    return (
      <Form>
        <Header title="TDEEとは" />
        <Paragraph>
          「TDEE」とは、「Total Daily Energy
          Expenditure」の略称で、どのくらいのカロリーが1日で消費されるのかを推定したものです。
          基礎代謝の数値だけではなく、活動量も考慮されているのが特徴です。
        </Paragraph>
        <Paragraph>
          本サイトでは、ハリスベネディクト方程式(1984年改訂版)を利用して、TDEEの計算を行っております。
        </Paragraph>
        <Paragraph>
          参考としたサイト:
          <br />
          <a href="https://musclewiki.com/Harris%E2%80%93Benedict_equation#cite_note-5">
            musclewiki.com/Harris-Benedict_equation
          </a>
        </Paragraph>
      </Form>
    );
  }
}

const Form = styled.main`
  display: flex;
  margin: 5% 20%;
  flex-direction: column;
`;

const Header = styled(ArticleTitle).attrs((props) => ({
  title: props.title,
}))`
  margin-top: 0;
  margin-bottom: 28px;
`;

const Paragraph = styled(ArticleParagraph)`
  margin-top: 0;
  margin-bottom: 20px;
`;
