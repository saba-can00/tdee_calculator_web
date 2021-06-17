import React from "react";
import styled from "styled-components";
import { PageTitle } from "../components/PageTitle";
import { ArticleParagraph } from "../components/ArticleParagraph";
import { ArticleTitle } from "../components/ArticleTitle";

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
        <ArticleTitle title="第1条（定義）" />
        <Paragraph>
          1.本規約において「ユーザ」とは、本規約の内容を全て確認し了承した上で、当社が本サービスで提供する情報（画像、テキスト、動画、情報等のコンテンツを含むものとし、以下、情報等と総称します。）を検索、閲覧または利用する個人をいうものとします。
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

const Header = styled(PageTitle).attrs((props) => ({
  title: props.title,
}))`
  margin-top: 0;
  margin-bottom: 28px;
`;
const Paragraph = styled(ArticleParagraph)`
  margin-top: 0;
  margin-bottom: 20px;
`;
