---
  title: "Full code vs. No Code vs. Automated ML"
  date:  "2022-10-07"
  slug:  "fullcode-vs-nocode-vs-automatedml"
  image: "fullcode-vs-nocode-vs-automatedml.jpg"
  excerpt: "Machine Learning using 3 ways - Full code vs. No Code vs. Automated ML"
  isFeatured: true 
---

# Full code vs. No Code vs. Automated ML

## Brief Introduction

I have been coding my models using Open-source technologies (Python, Pandas, NumPy and matplotlib, Scikit-learn and TensorFlow) in a Jupyter notebook on Google Colab using CPU / GPU. And now I am trying to make an enterprise grade application using MLOps (Azure Cloud, Azure DevOps and MLflow)

I had heard of **"No Code"** and **"Auto ML"** and I though let's give it a try with same data and compare accuracy of prediction against **"Full code"** where we have full control of the model.

1. Full code (above stack all my code using known algorithms) vs
2. No Code (Azure ML Designer) vs
3. Auto ML (Azure Automated ML)

## Data

- Bulldozers Regression Kaggle problem
- Data has 412,698 rows and 104 columns which is a good size
- Many columns had more than 50% data missing, Date was bundled as one column, and there are few numerical and most object(string) columns which had to be converted to categories
- Data Transformation and Feature Engineering from this [dataset](https://www.kaggle.com/c/bluebook-for-bulldozers/data)
- Transformed data set is created which is used as input to training (the Github code includes this transformation part)

## ML Model - Trained a Regression model using 3 ways

1. Full code (Python, scikit-learn with XGBRegressor)
2. No Code(Azure ML Designer with 2 models)
3. Auto ML(Azure ML)

### Full code (Scikit-learn with XGBRegressor)

- [GitHub code here](https://github.com/mahtabsyed/Machine-Learning-Full-code-vs-No-Code-vs-Automated-ML/blob/main/Kaggle_Bulldozers_Regression.ipynb)
- Python code
- XGBRegressor
- Using kFolds for cross validation
- Hyperparameter tuning using Optuna (The model without Hyperparameter tuning proved to be better) - check the code (link above)
- Evaluation - # BEST RMSE and MSE SO FAR!
- **MAE: 57.002996**
- **RMSE: 258.555955**

### No Code(Azure ML Designer )

- Models cheat sheet https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-cheat-sheet
- Azure Machine Learning Pipeline - Model 1 and 2
- Data - same
- Model - Boosted Decision Tree Regression
- Evaluation - Not good compared to my full code XGBBoostRegressor which is ~50 times better
- **MAE: 5731.167302**
- **RMSE: 8571.87339**

### Automated ML (Azure ML)

- This is quite easy to use
- Specify the data and the Label
- Specify the Compute Cluster and cross validation method (kFold)
- And it identifies as a Regression task
- Runs for quite a long time (about 6 hours) - To note : I provisioned CPU Compute Cluster and not GPU
- Evaluation - Both MAE and RMSE are **poor** compared No Code and quite poor compared to Full Code

### So, for now (using vanilla model training) Full code wins… 😊

For details refer the code in Github with each step documented with comments and visualisations [GitHub code here](https://github.com/mahtabsyed/Machine-Learning-Full-code-vs-No-Code-vs-Automated-ML/blob/main/Kaggle_Bulldozers_Regression.ipynb)

_Mahtab Syed Melbourne, 07 Oct 2022_
