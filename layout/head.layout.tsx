import Head from "next/head";

interface Props {
  title?: String;
  icon?: String;
  description?: String;
}

const PageHeader = (props: Props) => {
  const { title, description, icon } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" data-content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" data-href={icon} />
    </Head>
  );
};

export default PageHeader;
