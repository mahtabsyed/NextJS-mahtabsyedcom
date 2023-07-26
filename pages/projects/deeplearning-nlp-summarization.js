import { Fragment } from "react";
import Head from "next/head";

import DLNLPSummarizationForm from "../../components/projects/dl-nlp-summarization-form";

function DeepLearningNlpSummarization() {
  return (
    <Fragment>
      <Head>
        <title>Deep Learning NLP Summarization</title>
      </Head>
      <DLNLPSummarizationForm />
    </Fragment>
  );
}

export default DeepLearningNlpSummarization;
