!SLIDE
# Pluralization rules

Different languages have different rules concerning pluralization.



!SLIDE
Most "western" languages distinguish between 2 quantities:

1. **one**: *1 dog*
2. **other**: *0 dogs*, *2 dogs*, *100 dogs*

Some languages (e.g. Turkish, Chinese) have only one quantity:

1. **other**: *0 dog*, *1 dog*, *100 dog*

Other languages have crazy complicated rules (e.g. Russian):

1. **one**
2. **few**
3. **many**
4. **other**


!SLIDE
# Standardization #

Pluralization rules are standardized by Unicode's CLDR (Common Locale Data Repository):

[http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language\_plural\_rules.html](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html)



!SLIDE
# Rails & pluralization rules #

The `i18n` gem provides a backend with support for pluralization rules:

    @@@ ruby
    I18n::Backend::Simple.send(:include, I18n::Backend::Pluralization)

A Ruby implementation of the rules defined by CLDR can be found here:

[https://github.com/svenfuchs/i18n/blob/master/test/test_data/locales/plurals.rb](https://github.com/svenfuchs/i18n/blob/master/test/test_data/locales/plurals.rb)



!SLIDE
# WTI & pluralization rules #

WTI also implements the CLDR rules

The interface already provides the correct fields (one, many, other, ...) for each locale\*

<small>\* This practically forces you to implement complex pluralization rules in your rails app, if you use locales like Turkish or Russian</small>

Documentation:

* [Plural Strings](http://docs.webtranslateit.com/translation_interface/string/#plural-strings)
* [Plural rules for Rails](http://docs.webtranslateit.com/file_formats/yaml/#plural-rules)