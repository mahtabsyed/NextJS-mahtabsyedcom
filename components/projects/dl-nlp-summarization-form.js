import classes from "./dl-nlp-summarization-form.module.css";

function DLNLPSummarizationForm() {
  return (
    <section className={classes.summarization}>
      <h1>Deep Learning NLP Summarization Form</h1>
      {/* paragraph in red font with text allignment in centre */}
      <p style={{ color: "red", textAlign: "center" }}>Under development...</p>

      {/* A form to select a 1-2 page text and submit to the web api for summarization  */}
    </section>
  );
}

export default DLNLPSummarizationForm;
