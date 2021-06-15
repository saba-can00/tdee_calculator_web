import React from "react";
import styled from "styled-components";
import { ArticleTitle } from "../components/ArticleTitle";
import { ArticleParagraph } from "../components/ArticleParagraph";

export class TermsOfService extends React.Component {
  render(props) {
    return (
      <Form>
        <Header title="利用規約" />
        <Paragraph>
          この利用規約（以下，「本規約」といいます。）は
          TDEE計算ツール（以下，「本サービス」といいます。）の利用条件を定めるものです。
          ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
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
