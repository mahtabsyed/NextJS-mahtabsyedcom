---
  title: "Learnings from 1st Kaggle Competition"
  date:  "2021-09-02"
  slug:  "learnings-from-1st-kaggle-competition"
  image: "learnings-from-1st-kaggle-competition.png"
  excerpt: "Key learnings from Kaggle’s competition '30 days of ML'"
  isFeatured: true 
---

In this blog I am talking about my experience and key learnings with Kaggle’s 1st learning competition and 2nd real competition which is the “30 days of ML” https://www.kaggle.com/c/30-days-of-ml

## On Kaggle

While we can learn Machine Learning from books, courses and individual coding, Kaggle takes it to the next level. Its is an awesome place to get real world learning from a mix of students, experts and professionals studying and working in various fields across the world.

## Why Kaggle is so good?

1.  The challenge is time bound, you cannot procrastinate
2.  Teams can post code and discuss, and they get incentives for this, while the people who use benefit from them as well.
3.  Leader board motivates you to improve your score
4.  You get to learn the basics and then quickly good hints from teams better than you.

For this competition there were 7573 teams worldwide and my team ranked at 465 which makes it at top 7%. The Leaderboard of my challenge is here. A long way to top 1% :-)

![Kaggle Leaderboard](kaggle-leaderboard-sep-2021.png)

## On the problem

This is a Regression problem, and I used the following in various combinations

**The best results I got are via 2 methods**

1.  XGBRegressor with KFolds
2.  Model Stacking with Lasso, RandomForestRegressor, LGBMRegressor, with Meta Regressor as XGBRegressor

## My solution

[Kaggle submitted notebook here](https://www.kaggle.com/code/mahtabsyed/30days-try-5-xgboost-kfold-tuning-mahtab?scriptVersionId=77348135)

## What are my learnings, and what could I do next time to improve?

1.  Large dataset - This dataset was big 300K records and running took more and more time as we made the models complex. Kaggle kernels can run for 9 hrs and then get reset. Colab also has a timeout which is higher for the Pro version. So I need to split a large dataset into smaller sets and run.
2.  Synthetic and complex dataset - This dataset was designed in such a way that Feature Engineering did not help much. I need to still find a way by going in details.
3.  Neural Network - Deep Neural Networks did not give better results. So do not underestimate Shallow Algorithms. This reiterates that while Neural Networks may be excellent for Computer Vision and Natural Language Processing for Regression, we should try both shallow and deep algorithms and choose the best.
4.  KFolds - Mean prediction using Kfolds gives better results. I was not aware and need to understand this well.
5.  Model Stacking - This was my first-time using Model Stacking and it was overfitting the Test results. Plus Model Stacking has variations and I need to understand the pros and cons
6.  GPU - With GPU flags on we got better speed but lower accuracy. So, iterate with GPU on and for the final predictions use CPU. Why this happens I am yet to understand. I am guessing this is due to difference of precision and this can be configured to give same exact result
7.  Hyperparamer tuning – I used GridSearchCV and did not get good results. Will try Optuna next time.

## What all I tried?

1. Models - RandomForestRegressor, XGBRegressor, GradientBoostingRegressor, LGBMRegressor, CatBoostRegressor, Neural Network – Sequential Standard 3 layer model and a Wide and Deep Model
2. Exploratory Data Analysis – Strategies to find most important features, correlation matrix
3. Feature Engineering – Standardization of numerical values
4. Low cardinality cols – Using categorical columns with lower cardinality OrdinalEncoder, One-Hot Encoding
5. Hyperparameter Tuning – Using GridSearchCV, later realised Optuna is better
6. KFold – In a loop with multiple subsets of data, training using one subset and validation using another, predicting test set, and taking a columnar mean of the test set
7. Model Stacking – An ensemble learning technique to combine multiple regression models via a meta-regressor. http://rasbt.github.io/mlxtend/user_guide/regressor/StackingCVRegressor/

Good base to progress from here... Thanks Kaggle and my team Lara Nguyen and Khôi Trương Đình

[Kaggle submitted notebook here](https://www.kaggle.com/code/mahtabsyed/30days-try-5-xgboost-kfold-tuning-mahtab?scriptVersionId=77348135)

_Mahtab Syed, 02 Sep 2021, Melbourne_
