import React from "react";
import { attributes } from "../../content/james-allen.md"
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
      <div className='grid grid-cols-2 gap-5 max-w-screen-lg'>
        <PageBuilder components={attributes.left_column as PageComponent[]} />
        <PageBuilder components={attributes.right_column as PageComponent[]} />
      </div>
    </TitledPage>
  );
}

export default JamesAllen;