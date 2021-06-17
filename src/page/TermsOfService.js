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
          本規約において「ユーザー」とは、本規約の内容を全て確認し了承した上で、当社が本サービスで提供する情報（画像、テキスト、動画、情報等のコンテンツを含むものとし、以下、情報等と総称します。）を検索、閲覧または利用する個人をいうものとします。
        </Paragraph>
        <ArticleTitle title="第2条（禁止事項）" />
        <Paragraph>
          ユーザは、本サービスの利用にあたり、以下の行為をしてはならないものとします。
          <br />
          ①法令または公序良俗に違反する行為
          <br />
          ②犯罪行為に関連する行為
          <br />
          ③本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
          <br />
          ④当社の定める方法以外の方法で本サービスを利用する行為
        </Paragraph>
        <ArticleTitle title="第3条（本サービスの提供の停止等）" />
        <Paragraph>
          1.本サービスの運営者は以下のいずれかに該当する場合、ユーザに事前に通知することなく本サービスの全部または一部の提供を一時的に中止することができるものとします。
          <br />
          ①本サービスにかかるシステムや設備などの点検、工事、更新等が必要な場合
          <br />
          ②火災、地震、落雷、停電、天災、戦争、テロ、暴動、争乱、その他の緊急の事態の発生により、本サービスの提供が困難となった場合
          <br />
          ③法令、行政処分等により、本サービスの提供が困難になった場合
          <br />
          ④その他、本サービスの提供の一時中止が必要であると判断した場合
          <br />
          2.本サービスの運営者は、本サービスの継続的な提供が困難だと判断した場合、運営上本サービスの廃止が必要であると判断した場合、その他やむを得ない事由が発生した場合、本サービスの提供を廃止することができるものとします。
        </Paragraph>
        <ArticleTitle title="第4条（免責事項）" />
        <Paragraph>
          1.本サービス運営者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを保証しておりません。
          <br />
          2.本サービスから提供される情報は可能な限り正確性を期しておりますが、情報の完全性・正確性などを保障するものではありません。
          <br />
          3.本サービスから提供されるいかなる情報も、医療上の助言、診断または治療の代替として考慮または使用されるべきではないことにユーザーは同意するものとします。
          <br />
          4.本サービス運営者は、本サービスの提供に起因してユーザに生じたあらゆる損害について、当社に故意または重過失があった場合を除き、一切の責任を負いません。
          <br />
          5.前項の規定は、本サービスの提供に関する当社とユーザとの間の契約（本規約を含みます。）が消費者契約法第２条第３項に定める「消費者契約」に該当する場合には
          、適用されないものとします。
          <br />
          6.前項の場合、本サービス運営者は、当社の過失（重過失を除きます）による債務不履行または不法行為によりユーザに生じた損害については、直接かつ通常の損害についてのみ責任を負うものとします。
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
