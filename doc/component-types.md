# Component Types

Below is the list of components available for page generation. Components are
per-page and not saveable as discrete units, although they can be cloned onto
other pages. If you'd like two of the same page, the thing to do is to clone the
page. This will create a new page object, so any changes made to one page will
not carry over to the duplicate page.

It ought to be pretty clear by reviewing these features are heavily influenced
by the WordPress plugin [Advanced Custom Fields][acf]. In fact, the idea of
having ACF without all the WP junk surrounding it was what first made me want
something like Firelink.

  [acf]: https://www.advancedcustomfields.com/

## Types of Predefined components

These are all the types proposed. Not all of these have been implemented yet.
Required fields marked with asterisks. Other fields are optional.

*   Collections
    *   Repeater - an array of repeatable custom components
    *   Layout - group of various fields of any type
*   Copy
    *   Text - string of text
    *   Textarea - longform text (supports Markdown)
*   Options
    *   Boolean - checkbox that turns on/off some thing on the page
    *   Radio - radio selector of pre-specified options
    *   Select - dropdown selector of pre-specified options
*   Binary
    *   File - location on disk,
    *   Image - file location, width, height, alt text, responsive (opens sizes,
        srcset)
*   Unfiltered - raw code inserted directly into page
*   Clone - duplicate an existing component elsewhere

## Collections

### Repeater

Repeaters are for reproducing a data object a set number of times. Repeaters
could be a single text field used for generating an ordered list, or complex
structures that are well-defined.

#### structure

*   name (string)*
*   min (number)
*   max (number)
*   structure (object)*
*   data (array)*
    *   datum (object)*

### Layout

Layouts are for predefined complex structures that you can dump once. You'd use
this if you need repeatable component patterns but don't exactly need a big
array of them like you'd get for a collection. You might use this for something
like a static 3x1 image grid or a full-width quote block. It is predefined and
not at all variable.

#### structure

*   name (string)*
*   structure (object)*
*   data (array)*
    *   datum (object)*

## Copy

These are the basic copy blocks you can utilize in Firelink.

### Text

Text is a short, unformatted string of text, best used for small areas such as
headlines or titles.

#### structure

*   name (string)*
*   data (string)*

### Textarea

Textarea is a longer bucket of text that supports Markdown for formatting. It is
used in content areas or anywhere else you need more complex, formatted text.
HTML output is created from the Markdown source on saving the page for quicker
generation.

#### structure

*   name (string)*
*   data (string)*
*   html (string)*

## Options

Options are a series of form fields in the backend that generally drive
template logic on the frontend. They can be used to set any variable, predefined
options available to a page. Every option has an assigned identity, which is how
you select those options in templates.

### Boolean

True/false option that looks like a switch.

#### structure

*   identity (string)*
*   description (string)*
*   value (boolean)*

### Radio

Series of choices that only allows one to be selected.

#### structure

*   name (string)*
*   options (array)*
    *   option (object)*
        *   identity (string)*
        *   description (string)*
*   selected (string)*

### Select

Series of choices that allows multiple selections.

#### structure

*   name (string)*
*   options (array)*
    *   option (object)*
        *   identity (string)*
        *   description (string)*
*   selections (array)*
    *   selected (string)*

## Binary

Binary components allow authors to upload files and images to pages. The files
are stored in the local filesytem.

### File

Generic binary with predefined file types.

#### structure

*   name (string)*
*   fileTypes (array)*
    *   fileType (string)*
*   location (string)*

### Image

Generic file uploader but with tons of helper functionality for images.

#### structure

*   name (string)*
*   width (number)
*   height (number)
*   alt (string)
*   caption (string)
*   responsive (boolean)*
*   baseFile (binary)*

if responsive is checked...

*   sources (array)*
    *   file (binary)*
    *   mediaQuery (string)*
*   sizes (array)
    *   mediaQuery (string)

## Unfiltered

Raw code that will be inserted directly into a page. Useful for analytics or
complex code structures that you simply can't describe in other ways.

## Clone

Duplicate a named component from elsewhere.
