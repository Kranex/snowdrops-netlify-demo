import PageBuilder, { PageComponent } from "../components/templates/PageBuilder";
import TitledPage from "../components/templates/TitledPage";

import fs from 'fs'
import path from 'path'
    

type PageAttributes = {
  title: string
  subtitle?: string
  slogan?: string
  background: string
  background_cc: string
}

type StaticPathType = { params: { slug: string } }

export async function getStaticPaths() {
  const files = fs.readdirSync(path.resolve(process.cwd(), 'content/pages'))
  const paths: StaticPathType[] = files
    .map(file => file.replace(/\.yml$/, ''))
    .map(file => ({ params: { slug: file } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: StaticPathType ) {
  const attributes = require(`../../content/pages/${params.slug}.yml`)

  return { props: {attributes} }
}

const ThanksPage = ({ attributes }) => {

  return (
    <TitledPage {...(attributes as PageAttributes)} >
      <PageBuilder components={attributes.content as PageComponent[]} />
    </TitledPage>
  );
}

export default ThanksPage;