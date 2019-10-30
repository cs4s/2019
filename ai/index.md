---
layout: default
title: CS4S @ UON 2019 - AI About
---

## AI Workshop

### About

*Artificial Intelligence* (AI) is already part of our daily lives.
For example, you may be assisted by AI when shopping, travelling or finding information online.
As digital technologies improve and AI becomes more advanced, AI is likely to play an even bigger part in our daily lives.
It is important that we help students understand what AI is, how it is used and give them the opportunity to create their own AI.

This workshop aims to be a practical and accessible introduction to *Machine Learning*, which is one of the large topics within AI.
*Machine Learning* refers to the way that computers 'learn' from data.
In this workshop, we will use the [free Machine Learning for Kids website](https://machinelearningforkids.co.uk){: class="text-info" target="_blank" }, which does not require any prior knowledge of *Machine Learning* or AI.

In this workshop you will learn:

- Examples of problems and solutions that *Machine Learning* can be applied to
- The differences between common approaches for developing *Machine Learning* solutions
- The essential steps involved in developing *Machine Learning* solutions
- How the representation and collection of data used when 'teaching' a computer impacts how computers learn
- Where to find more resources for extending your knowledge of *Machine Learning* and AI after the workshop

### Essential Steps

In this workshop we have identified 5 essential steps in the process of developing *Machine Learning* solutions.
There are other lists of steps that other authors have created, such as [Yufeng Guo's 7 Steps of Machine Learning](https://www.techleer.com/articles/379-the-seven-steps-of-machine-learning/){: class="text-info" target="_blank" } and [Aurélien Géron's Machine Learning Project Checklist](https://www.kdnuggets.com/2018/12/machine-learning-project-checklist.html){: class="text-info" target="_blank" }, which are similar to the steps we have listed below.

It is important to note that these steps should generally be followed in sequential order.
However, you could find that you go back and forward between the steps when creating a *Machine Learning* solution.
For example, you may create an app that tells that you whether a photo contains a cat or a dog.
The app may incorrectly recognise that a photos that contains a small dog, when it actually contains a cat.
You could fix this problem by retraining the model used by the app with photos of small dogs so that it does not keep making those mistakes.

The essential steps of developing *Machine Learning* solutions are listed below.
You can click the *More Details* button to show more information about each of the steps.
We have included some notes in the details sections that you would probably want to be aware of during each of the steps as well.

{% for step in site.data.ai.steps %}
<h4>{{ step.title }}</h4>
<p>
  <button class="btn btn-outline-info collapsed" type="button" data-toggle="collapse" data-target="#collapse-{{ step.id }}" aria-expanded="false" aria-controls="collapseExample">
    <span class="if-not-collapsed">
        Hide Details
        <i class="fas fa-chevron-up step-icon"></i>
    </span>
    <span class="if-collapsed">
        More Details
        <i class="fas fa-chevron-down step-icon"></i>
    </span>
  </button>
</p>
<div class="collapse" id="collapse-{{ step.id }}">
  <div class="card card-body my-4">
    <p>
        {{ step.description }}
    </p>
    <p>
        <strong>Note:</strong> {{ step.note }}
    </p>
  </div>
</div>
{% endfor %}
