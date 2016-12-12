# Firelink
Firelink is a CMS made with Node.js that aims to replace complex CMS options
such as WordPress for most simple site usage.

## Page Concepts
There are two major constructs in Firelink, pages and collections.

### Pages
Pages are single-use views that you can define using custom fields. They are
not repeatable and are considered standalone, although you can duplicate pages 
and their fields if you need to reuse them for some reason.

### Collections
Collections are groups of content that share the same data model. They come in
two flavors, serialized and hierarchical. Serialized collections are used for
things like blog articles. Heriarchical collections are used for things like 
department listings at a company.

## Refactorability
One of the most important features of Firelink is refactorability of the site
without affecting existing content. In most CMSes, refactoring templates means
changes in all of your pages. This is not the case in Firelink. As long as a
page understands how to render a component, it will continue to render that
component even if the CMS no longer allows creation of that construct. If a page
doesn't know how to render a component, because you have removed the renderer,
it will fail silently to clients but log it for reference.

## Architecture
In general Firelink should be considered a flat CMS without a database, although
it's totally possible to hook up any database you want for creating components.
When a page node is created, it generates a JSON file to store data related to
that node. While you can edit these files yourself in a pinch, it's generally
better to edit them through the site admin.
