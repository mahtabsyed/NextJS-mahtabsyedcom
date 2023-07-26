import classes from "./dl-image-classification-form.module.css";

function DLImageClassificationForm() {
  return (
    <section className={classes.classification}>
      <h1>Deep Learning Image Classification Form</h1>
      {/* paragraph in red font with text allignment in centre */}
      <p style={{ color: "red", textAlign: "center" }}>Under development...</p>

      {/* A form to select to an image and upload to the web api for classification  */}
    </section>
  );
}

export default DLImageClassificationForm;
