import { Fragment } from "react";
import Head from "next/head";

import DLImageClassificationForm from "../../components/projects/dl-image-classification-form";

function DeepLearningImageClassification() {
  return (
    <Fragment>
      <Head>
        <title>Deep Learning Image Classification</title>
      </Head>
      <DLImageClassificationForm />
    </Fragment>
  );
}

export default DeepLearningImageClassification;
