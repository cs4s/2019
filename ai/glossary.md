---
layout: resources
title: CS4S @ UON 2019 - AI Glossary
---

# Glossary

This glossary page includes a list of definitions for terms that will be commonly referred to during the workshop.
For more extensive and detailed definitions of terms relevant to *Artificial Intelligence* and *Machine Learning*, we recommend that you read the ['Some Key Machine Learning Definitions' post on Medium](https://medium.com/technology-nineleaps/some-key-machine-learning-definitions-b524eb6cb48){: class="text-info" target="_blank" } or check out the [Machine Learning Glossary](https://ml-cheatsheet.readthedocs.io/en/latest/index.html){: class="text-info" target="_blank" }.

## Artificial Intelligence

A field of study concerned with the simulation of aspects of human intelligence (for example, complex reasoning and adaptability) by computers. 

*Artificial Intelligence* (AI) is a large field that encompasses a variety of topics, including: philosophy, ethics of AI and *Machine Learning*.

## Attribute

A *feature* or *characteristic* of an *observation* (for example, a person in our data set could have the following attributes: *weight*, *height* and *age*).

The *attributes* that we include in the model usually have an impact on the outcome that we are trying to predict or classify.
For example, if we were predicting how likely a student was to withdraw from university, one of the the *attributes* in the model could be the percentage of tutorials that they had attended. 

## Bucket

When using the [Machine Learning for Kids tool](https://machinelearningforkids.co.uk/){: class="text-info" target="_blank" } we put the examples into different *buckets* to tell the computer how they should be *classified*.

For example, when training a model that recognises whether a photo contains a cat or a dog, we put the photos of cats in the 'cat' *bucket* and the photos of dogs in the 'dog' *bucket*.
*Buckets* are sometimes referred to as *labels* or *classes*.

## Classification

A type of *Machine Learning* algorithm that takes data and tries to recognise the *class* it belongs to (for example, whether an email *is spam* or *is not spam*).

When using *Classification* algorithms, the training data is split into different *buckets* and the model predicts which of the *buckets* new data belongs to.

## Clustering

A type of *Machine Learning* algorithm that takes data and splits the data into groups (*clusters*) of data points that have similar [attributes](#attribute){: .text-info }.

*Clustering* algorithms are commonly used when identifying customer *segments*, which are groups of customers that have similar characteristics.
Segmenting customers can help marketers develop targeted advertising.

## Computer Vision

A field of study that involves making computers 'see', which includes the emulation of humans' visual abilities (such as the ability to recognise faces).

For more information about *Computer Vision*, see the [Computer Science Field Guide's Computer Vision Chapter](https://csfieldguide.org.nz/en/chapters/computer-vision/){: class="text-info" target="_blank" }.

## General AI

A category of AI types that we only see in Science Fiction movies and that may never exist in the real world.

*General AI* includes two types of AI: *Theory of mind* and *Self-awareness*.
*Theory of mind* AI is AI that has has the "understanding that people, creatures and objects in the world can have thoughts and emotions that affect their own behavior."
*Self-awareness* AI have this understanding as well but also "are aware of themselves, know about their internal states, and are able to predict feelings of others." (like HAL 9000 in the film [2001: A Space Odyssey](https://en.wikipedia.org/wiki/HAL_9000){: class="text-info" target="_blank" }).

For more information about *General AI* and the four types of AI, see [this Conversation article written by Arend Hintze](https://theconversation.com/understanding-the-four-types-of-ai-from-reactive-robots-to-self-aware-beings-67616){: class="text-info" target="_blank" }.

## Machine Learning

A large topic within AI that is concerned with 'teaching' computers to perform tasks, make predictions or classify data.

When 'teaching' a computer, we have to give it examples (data) and the computer will learn from these examples. 
There are different methods of *Machine Learning* (for example, [reinforcement learning](#reinforcement-learning){: .text-info }, [supervised learning](#supervised-learning){: .text-info } and [unsupervised learning](#unsupervised-learning){: .text-info } ) that are used for solving different problems.

## Model

A simplified representation of a phenomenom that usually exists in the real world. 
Examples of models include *statistical models*, *financial models* and *engineering models*.

When we create [Machine Learning](#machine-learning){: .text-info } solutions, we usually create a model that represents the problem we are trying to solve.
Consequently, it is important that we model the problem appropriately by choosing an appropriate type of algorithm and identifying [attributes](#attribute){: .text-info } that have an impact on the outcomes we are interested in.

## Narrow AI 

A category of AI types that can solve narrow and specific problems (such as playing chess), which are the most common types of AI that exist today.

*General AI* includes two types of AI: *Reactive Machines* and *Limited Memory*.
*Reactive Machines* are the most common types of AI, which only have a representation a problem of one point in time.
That type of AI does not have any memory but can use data to predict what will happen in the future (for example, the moves an opposing chess player may make).
*Limited Memory* AI can record information and recall this but computers do not have the same ability to remember and learn from experiences that humans do.

For more information about *Narrow AI* and the four types of AI, see [this Conversation article written by Arend Hintze](https://theconversation.com/understanding-the-four-types-of-ai-from-reactive-robots-to-self-aware-beings-67616){: class="text-info" target="_blank" }.

## Observation

An individual data point in a data set. For example, in data from a survey, each survey response would be an *observation*.

Another example of an observation would be an individual student in a data set that was used to predict students' likelihood to drop out of university.

## Regression 

A method for finding the relationship between different *variables* (or [attributes](#attribute){: .text-info }) in a model, which can give us a mathematical equation of the *'line of best fit'*.

There are a variety of different types of *regression*, including *linear regression* and *logistic regression*.
*Linear regression* can be useful for answering questions that involve numbers.
For example, we could predict album sales with a *linear regression* model that estimates how many sales we will get for a given amount of money spent on advertising.

*Regression* can be used as a [supervised learning](#supervised-learning){: .text-info } technique.
Most statistics courses and resources will cover *regression* because it is a technique that is fundamental in 'traditional' statistics.
For example, Khan Academy has [a set of videos on regression](https://www.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data/more-on-regression/v/squared-error-of-regression-line){: class="text-info" target="_blank" }.

## Reinforcement Learning

A category of [Machine Learning](#machine-learning){: .text-info } algorithms where computers learn by maximising the rewards they encounter in an environment (for example, scoring points in a videogame).

Algorithms in this category are used for a variety of purposes, including training AI for videogames.
You can find out more about *reinforcement learning* in this [Geeks for Geeks article](https://www.geeksforgeeks.org/what-is-reinforcement-learning/){: class="text-info" target="_blank" }.

## Supervised Learning

A category of *Machine Learning* algorithms where the model is trained with examples that have been given *labels* or put into [buckets](#buckets){: .text-info }.

The model is then trained to identify which of the [buckets](#buckets){: .text-info } the input data belongs to.
Examples of *Supervised Learning Methods* include [classification](#classification){: .text-info } and [regression](#regression){: .text-info }.

## Unsupervised Learning

A category of *Machine Learning* algorithms where data is given to a model without *labels* and the model arranges the data into groups or identifies its own *labels* for the data.

A common type of *Unsupervised Learning* algorithms are [clustering](#clustering){: .text-info } algorithms.
