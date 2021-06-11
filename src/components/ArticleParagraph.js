import React from "react";
import styled from "styled-components";

export class ArticleParagraph extends React.Component {
  render() {
    return (
      <article>
        <Paragraph className={this.props.className}>
          {this.props.children}
        </Paragraph>
      </article>
    );
  }
}

const Paragraph = styled.p`
  font-size: 20px;
`;
