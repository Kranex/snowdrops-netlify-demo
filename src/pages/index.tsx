import { attributes } from '../../content/home.md'
import PageBuilder, { PageComponent } from '../components/templates/PageBuilder';
import TitledPage from '../components/templates/TitledPage';

type IndexAttributes = {
  title: string
  subtitle: string
  slogan: string
  background: string
  background_cc: string
}

const Index = () => {
  return (
    <TitledPage {...(attributes as IndexAttributes)} >
      <PageBuilder components={attributes.content as PageComponent[]} />
    </TitledPage>
  );
}

export default Index;