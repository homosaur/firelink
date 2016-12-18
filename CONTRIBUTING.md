# Contribution Guidelines

## Introduction

Thank you for your interest in contributing to Firelink. This is not a big
project at this moment but I think it holds some promising ideas, so I want to
establish clear guidelines up front for potential community members.

First, please review the code of conduct attached to the repository. I expect
any potential contributors to follow the code as a minimum. While the code
specifically covers interactions with the Firelink community and codebase, we
also will not tolerate those who are toxic people outside of this community in
a public manner. We're not trying to be the thought police, but too many OSS
projects are full of assholes and this is not going to be one of them. Please
try to keep your OSS contributions professional for the benefit of everyone here
and OSS in general.

Second, please review the code standards below. Contributions which do not meet
those standards will most likely be rejected. There are exceptions made for
useful code, especially if a contributor is on the new side or doesn't fully
understand the requirements, but overall I expect the code to be reasonably
tight for everyone's sanity.

## Code Standards

1.  All code must pass linters. The following linters are used on this project:
    -   JavaScript - ESLint, Standard Style-based config attached plus additions
    -   Markdown - Remark Lint, recommended and consistent config attached
2.  All code submitted must pass full test suite. If you add features, those
    features need tests as well.
3.  Backend JS is based on compatibility with most recent Node.js LTE. We're not
    yet using Babel or any compiler, so assume native compatibility only.
