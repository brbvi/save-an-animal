import Main from '../../../pages/index'

interface DefaultMasterPageProps {
  title: string
}

export const DefaultMasterPages: React.FC<DefaultMasterPageProps> = ({
  title,
  children
}) => {
  return <Main title={title} children={children} />
}
