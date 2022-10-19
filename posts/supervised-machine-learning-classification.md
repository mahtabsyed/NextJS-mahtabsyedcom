---
  title: "Supervised Learning -> Classification"
  date: "2020-08-26"
  slug: "supervised-machine-learning-classification"
  image: "supervised-machine-learning-classification.png"
  excerpt: "Classification - With existing data and existing classification a trained Machine Learning model can predict the classification for a new dataset."
  isFeatured: true 
---

# Supervised Learning -> Classification

## Brief Introduction

While the term Artificial Intelligence is an ever-growing superset and may mean different things to different people, Machine Learning (ML) which is a subset of Artificial Intelligence (AI) is better defined.
In simple terms Machine Learning can predict results based on existing data.
To achieve this, we develop and use ML algorithms (also called models or estimators) and train them on existing data and then test, and finally tune to predict with desired accuracy.

### Classical Machine Learning can be divided into few simple categories:

#### 1. Supervised Learning – Existing data (Features) and classification or value (Label) marked

- 1.1 Classification – Existing data and existing classification (Label) can predict the classification for a new dataset.
- 1.2 Regression – Existing data and existing value (Label) can predict value of a new dataset

![Classification vs Regression](classification-vs-regression.png)

#### 2. Unsupervised Learning - We have a dataset and we need to find some structure in a data. The data has no answers (Labels)

- 2.1 Clustering – ML model divides the data to clusters
- 2.2 Dimension Reduction – Reduce features/details and collate to high level topics
- 2.3 Association – Find patterns where features are associated with each other

### In this blog let's see an end-to-end project of Supervised Learning -> Classification

### Steps

1. **Problem Definition** - Given clinical parameters about a patient, can we predict whether or not they have heart disease

2. **Data** - Refer these sources

> - From the Cleavland data from the UCI Machine Learning [Repository](https://archive.ics.uci.edu/ml/datasets/heart+Disease)
> - And the version on [Kaggle](https://www.kaggle.com/datasets/redwankarimsony/heart-disease-data)

3. **Evaluation** – We set a goal of 90% accuracy of the prediction

4. **Features** – Understanding Features as a subject matter expert

5. **Modelling** – Using various Algorithms for Classification from Scikit-learn like

> **_LogisticRegression, KNeighborsClassifier, RandomForestClassifier CatBoost, XGBoost_**

For navigating and choosing an algorithm refer from [Scikit-learn](https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html)

6. **Experimentation** – Get better results till we are satisfied, and then save the model and share for use by others. Achieved Accuracy of ~90% with LogisticRegression which is the best among various algorithms trained and tested and good enough for the dataset

For details refer the code in Github with each step documented with comments and visualisations [Github link](https://github.com/mahtabsyed/Machine-Learning-Heart-Disease-Classification/blob/master/end-to-end-heart-disease-classification.ipynb)

_Mahtab Syed Melbourne, 26 Aug 2022_
