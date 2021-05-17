import React from "react";
import { attributes } from "../../content/james-allen.md"
import DoubleColumn from "../components/organisms/DoubleColumn";
import PageBuilder, { PageComponent } from "../components/templates/PageBuilder";
import TitledPage from "../components/templates/TitledPage";

type IndexAttributes = {
  title: string
  subtitle?: string
  slogan?: string
  background: string
  background_cc: string
}

const JamesAllen = () => {
  return (
    <TitledPage {...(attributes as IndexAttributes)} >
        <PageBuilder components={attributes.content as PageComponent[]} />
    </TitledPage>
  );
}

export default JamesAllen;